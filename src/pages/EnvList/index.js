import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function EnvList() {
  const [envs, setEnvs] = useState([
    "abcdefghijklmnopqrst",
    "uvwxyzabcdefghijklmn",
    "opqrstuvwxyzabcdefg",
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentValue, setCurrentValue] = useState("");

  const createEnv = () => {
    const newEnv = "newenvironmenthere";
    setEnvs([...envs, newEnv]);
  };

  const editEnv = (index) => {
    setCurrentIndex(index);
    setCurrentValue(envs[index]);
    setModalContent("edit");
    setIsModalOpen(true);
  };

  const deleteEnv = (index) => {
    setCurrentIndex(index);
    setModalContent("delete");
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (modalContent === "edit") {
      const newEnvs = [...envs];
      newEnvs[currentIndex] = currentValue;
      setEnvs(newEnvs);
      setIsModalOpen(false);
    } else if (modalContent === "delete") {
      const newEnvs = envs.filter((_, i) => i !== currentIndex);
      setEnvs(newEnvs);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="w-[90%] flex-col mx-auto mt-12">
      <div className="mx-auto w-1/2 h-[70vh] border-t-8 border-t-indigo-500 rounded-md bg-white p-8 shadow-lg flex flex-col justify-between">
        <div>
          <h1 className="text-[36px] font-bold border-b border-gray-300 pb-4 mb-4">Env List</h1>
          <div className="my-4 h-[52vh] overflow-y-auto">
            {envs.map((env, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>{env}</span>
                <div className="space-x-4 mr-2">
                  <Button color="orange" onClick={() => editEnv(index)}>
                    Edit
                  </Button>
                  <Button color="red" onClick={() => deleteEnv(index)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-300 flex items-center justify-center pt-4 mt-4">
          <Button color="blue" onClick={createEnv}>
            Create
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        title={modalContent === "edit" ? "Edit Environment" : "Delete Environment"}
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
        ) : (
          <p>Are you sure you want to delete this environment?</p>
        )}
      </Modal>
    </div>
  );
}
