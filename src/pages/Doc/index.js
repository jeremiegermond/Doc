import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function CollapsibleSection({ title, children, level }) {
  const [isOpen, setIsOpen] = useState(false);

  const getTitleStyle = () => {
    if (level === 1) return "text-blue-500";
    if (level === 2) return "text-neutral-800 capitalize";
    return "text-neutral-600";
  };

  return (
    <div className="mb-6">
      <div
        className="flex items-center justify-between cursor-pointer bg-gray-100 px-4 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className={`text-2xl font-bold ${getTitleStyle()}`}>{title}</h1>
        <span className="text-gray-600">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "h-fit" : "max-h-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default function GenerateDoc() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDoc, setActiveDoc] = useState("dev");

  useEffect(() => {
    const docUrls = {
      dev: "https://api.github.com/repos/Aizy-app/Toolbox/contents/documentation/dev.md",
      prod: "https://api.github.com/repos/Aizy-app/Toolbox/contents/documentation/prod.md",
    };

    const fetchMarkdown = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;

      try {
        const response = await fetch(docUrls[activeDoc], {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur : ${response.status}`);
        }

        const data = await response.json();
        const decodedContent = atob(data.content);
        setMarkdownContent(decodedContent);
      } catch (error) {
        console.error("Erreur lors de la récupération du fichier Markdown :", error);
      }
    };

    fetchMarkdown();
  }, [activeDoc]);

  useEffect(() => {
    if (markdownContent) {
      const lines = markdownContent.split("\n");

      const parsedCategories = [];
      let currentCategory = null;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.startsWith("# ")) {
          currentCategory = {
            title: line.replace(/^#\s/, ""),
            sections: [],
          };
          parsedCategories.push(currentCategory);
          continue;
        }

        if (line.startsWith("## ")) {
          const sectionTitle = line.replace(/^##\s/, "");
          currentCategory?.sections.push({
            title: sectionTitle,
            content: "",
          });
          continue;
        }

        if (currentCategory) {
          const lastSection =
            currentCategory.sections[currentCategory.sections.length - 1];

          if (lastSection) {
            if (line === "---") {
              continue;
            }
            lastSection.content += (lastSection.content ? "\n" : "") + line;
          }
        }
      }

      console.log("Parsed categories:", parsedCategories);
      setCategories(parsedCategories);
    }
  }, [markdownContent]);

  const filterCategories = (categories) => {
    if (!searchQuery) return categories;

    return categories.filter((category) => {
      const categoryMatches = category.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const sectionsMatches = category.sections.some((section) =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return categoryMatches || sectionsMatches;
    });
  };

  return (
    <div className="w-[70%] mx-auto mt-12 bg-white shadow-md p-8 rounded-lg">
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-l-md ${
            activeDoc === "dev"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveDoc("dev")}
        >
          Dev
        </button>
        <button
          className={`px-4 py-2 rounded-r-md ${
            activeDoc === "prod"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveDoc("prod")}
        >
          Prod
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Rechercher dans la documentation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filterCategories(categories).map((category, catIndex) => (
        <CollapsibleSection key={catIndex} title={category.title} level={1}>
          {category.sections.map((section, secIndex) => (
            <CollapsibleSection
              key={secIndex}
              title={section.title}
              level={2}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-6">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-medium text-gray-700 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-base text-gray-700 leading-7 mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc ml-6 text-gray-700 mb-4">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal ml-6 text-gray-700 mb-4">
                      {children}
                    </ol>
                  ),
                  code: ({ inline, children }) =>
                    inline ? (
                      <code className="bg-gray-200 text-red-500 rounded px-1">
                        {children}
                      </code>
                    ) : (
                      <pre className="bg-gray-800 text-white rounded p-4 overflow-auto text-sm">
                        <code>{children}</code>
                      </pre>
                    ),
                  table: ({ children }) => (
                    <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-gray-700 mb-6">
                      {children}
                    </table>
                  ),
                  th: ({ children }) => (
                    <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-gray-300 px-4 py-2">{children}</td>
                  ),
                }}
              >
                {section.content}
              </ReactMarkdown>
            </CollapsibleSection>
          ))}
        </CollapsibleSection>
      ))}
    </div>
  );
}
