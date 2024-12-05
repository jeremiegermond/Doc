export default function Button({ children, color, onClick }) {
  switch (color) {
    case "red":
      return (
        <button
          className="bg-red-500 text-white hover-animation px-4 py-2 rounded-full shadow-lg lg:text-[18px]"
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "green":
      return (
        <button
          className="bg-emerald-500 text-white hover-animation px-4 py-2 rounded-full shadow-lg lg:text-[18px]"
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "orange":
      return (
        <button
          className="bg-amber-500 text-white hover-animation px-4 py-2 rounded-full shadow-lg lg:text-[18px]"
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "blueT":
      return (
        <button
          className="bg-transparent text-blue-500 border-2 border-blue-500 hover-animation px-4 py-2 rounded-full shadow-lg lg:text-[18px]"
          onClick={onClick}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className="bg-blue-500 text-white hover-animation px-4 py-2 rounded-full shadow-lg lg:text-[18px]"
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
}
