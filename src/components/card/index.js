import { Link } from 'react-router-dom';

export default function Card({title, icon, linkUrl}) {
  return (
    <Link to={linkUrl} className="w-1/4 text-[24px] border rounded-md shadow-md mt-12 pl-4 py-12 h-fit justify-between flex items-center border-l-indigo-500 border-l-8 hover-animation">
      <div className="w-fit items-center space-x-24 flex flex-row border border-red-500">
        <div className="text-[50px] ml-4">{icon}</div>
        <div className="text-[36px]">{title}</div>
      </div>
    </Link>
  );
}