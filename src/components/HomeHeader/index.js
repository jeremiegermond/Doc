export default function HomeHeader({title}) {
  return (
    <div className="mt-12 w-full flex items-center justify-between mx-auto">
      <h1 className="text-[36px]">{title}</h1>
      <div className="w-4/5 h-[1px] bg-black"></div>
    </div>
  );
}