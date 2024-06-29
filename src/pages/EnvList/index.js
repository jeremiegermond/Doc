import { useState } from "react";
import Button from "../../components/Button";

export default function EnvList() {
  const [envs, setEnvs] = useState([
    "abcdefghijklmnopqrst",
    "uvwxyzabcdefghijklmn",
    "opqrstuvwxyzabcdefg",
  ]);

  const createEnv = () => {
    const newEnv = "newenvironmenthere";
    setEnvs([...envs, newEnv]);
  };

  const editEnv = (index) => {
    const updatedEnv = prompt("Edit the environment:", envs[index]);
    if (updatedEnv) {
      const newEnvs = [...envs];
      newEnvs[index] = updatedEnv;
      setEnvs(newEnvs);
    } else {
      alert("The environment string must be 20 characters long.");
    }
  };

  const deleteEnv = (index) => {
    const newEnvs = envs.filter((_, i) => i !== index);
    setEnvs(newEnvs);
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
    </div>
  );

}
