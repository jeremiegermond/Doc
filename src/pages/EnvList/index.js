import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function EnvList() {
  const [envs, setEnvs] = useState([
    {
      title: "Environment 1",
      PORT: generateRandomValue(),
      API_KEY: generateRandomValue(),
      SDK_KEY: generateRandomValue(),
      DB_URI: generateRandomValue(),
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [currentKey, setCurrentKey] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentValue, setCurrentValue] = useState("");
  const [editingTitleIndex, setEditingTitleIndex] = useState(null);

  function generateRandomValue() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 20;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const createEnv = () => {
    const newEnv = {
      title: `Environment ${envs.length + 1}`,
      PORT: "",
      API_KEY: "",
      SDK_KEY: "",
      DB_URI: "",
    };
    setEnvs([...envs, newEnv]);
  };

  const editEnv = (index, key) => {
    setCurrentIndex(index);
    setCurrentKey(key);
    setCurrentValue(envs[index][key]);
    setModalContent("edit");
    setIsModalOpen(true);
  };

  const deleteEnv = (index) => {
    setCurrentIndex(index);
    setModalContent("deleteAll");
    setIsModalOpen(true);
  };

  const deleteField = (index, key) => {
    setCurrentIndex(index);
    setCurrentKey(key);
    setModalContent("deleteField");
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (modalContent === "edit") {
      const newEnvs = [...envs];
      newEnvs[currentIndex][currentKey] = currentValue;
      setEnvs(newEnvs);
      setIsModalOpen(false);
    } else if (modalContent === "deleteAll") {
      const newEnvs = envs.filter((_, i) => i !== currentIndex);
      setEnvs(newEnvs);
      setIsModalOpen(false);
    } else if (modalContent === "deleteField") {
      const newEnvs = [...envs];
      newEnvs[currentIndex][currentKey] = '';
      setEnvs(newEnvs);
      setIsModalOpen(false);
    }
  };

  const exportEnv = (index = null) => {
    let envContent = "";
    if (index === null) {
      envs.forEach((env, envIndex) => {
        envContent += `# ${env.title}\n`;
        Object.entries(env).forEach(([key, value]) => {
          if (key !== 'title') {
            envContent += `${key}=${value}\n`;
          }
        });
        envContent += `\n`;
      });
    } else {
      const env = envs[index];
      Object.entries(env).forEach(([key, value]) => {
        if (key !== 'title') {
          envContent += `${key}=${value}\n`;
        }
      });
    }

    const blob = new Blob([envContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = index === null ? 'envs.env' : `${envs[index].title.toLowerCase()}.env`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleTitleEdit = (index) => {
    setEditingTitleIndex(index);
  };

  const handleTitleChange = (event, index) => {
    const newEnvs = [...envs];
    newEnvs[index].title = event.target.value;
    setEnvs(newEnvs);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setEditingTitleIndex(null);
    }
  };

  return (
    <div className="w-[90%] flex-col mx-auto mt-12">
      <div className="mx-auto w-1/2 h-[70vh] border-t-8 border-t-indigo-500 rounded-md bg-white p-8 shadow-lg flex flex-col justify-between">
        <div>
          <h1 className="text-[36px] font-bold border-b border-gray-300 pb-4 mb-4">Env List</h1>
          <div className="my-4 h-[52vh] overflow-y-auto hide-scrollbar">
            {envs.map((env, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                {editingTitleIndex === index ? (
                  <input
                    type="text"
                    value={env.title}
                    onChange={(e) => handleTitleChange(e, index)}
                    onBlur={() => setEditingTitleIndex(null)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                ) : (
                  <h1
                    className="text-[36px] cursor-pointer"
                    onClick={() => handleTitleEdit(index)}
                  >
                    {env.title}
                  </h1>
                )}

                {Object.entries(env).map(([key, value]) => (
                  key !== 'title' && (
                    <div key={key} className="flex justify-between items-center mb-2">
                      <span>{key}={value}</span>
                      <div className="space-x-4 mr-2">
                        <Button color="orange" onClick={() => editEnv(index, key)}>
                          Edit
                        </Button>
                        <Button color="red" onClick={() => deleteField(index, key)}>
                          Delete
                        </Button>
                      </div>
                    </div>
                  )
                ))}

                {/* Boutons pour Exporter et Supprimer l'environnement */}
                <div className="space-x-4 mt-2">
                  <Button color="green" onClick={() => exportEnv(index)}>
                    Export
                  </Button>
                  <Button color="red" onClick={() => deleteEnv(index)}>
                    Delete All
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t space-x-4 border-gray-300 flex items-center justify-center pt-4 mt-2">
          <Button color="blueT" onClick={() => exportEnv()}>
            Export All
          </Button>
          <Button color="blue" onClick={createEnv}>
            Create
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        title={
          modalContent === "edit"
            ? "Edit Environment Variable"
            : modalContent === "deleteAll"
              ? "Delete Environment"
              : "Delete Field"
        }
        inputName={modalContent === "edit" ? "Save" : "Delete"}
        inputColor={modalContent === "edit" ? "bg-blue-500" : "bg-red-500"}
      >
        {modalContent === "edit" ? (
          <input
            type="text"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        ) : modalContent === "deleteAll" ? (
          <p>Are you sure you want to delete this entire environment?</p>
        ) : (
          <p>Are you sure you want to delete this field?</p>
        )}
      </Modal>
    </div>
  );
}
