export default function Modal({ isOpen, onClose, onSave, title, children, inputName, inputColor }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="border-t-8 border-indigo-500 bg-white rounded-lg p-8 w-1/3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover-animation"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`${inputColor} text-white px-4 py-2 rounded hover-animation`}
            onClick={onSave}
          >
            {inputName}
          </button>
        </div>
      </div>
    </div>
  );
}
