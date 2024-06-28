export default function Navbar() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between w-full mt-6 items-center m-auto">
        <div className="flex flex-row space-x-7 items-center">
          <img src="/assets/logo-black.svg" alt="logo"/>
        </div>
      </div>
      <div className="w-full h-[2px] bg-black mt-4"></div>
    </div>
  );
}