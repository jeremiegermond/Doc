import Card from "../../components/card";
import { RiRobot2Line } from "react-icons/ri";

export default function Home() {
  return (
    <div className="w-[90%] flex-col mx-auto mt-12">
      <div className="w-full flex items-center justify-between mx-auto">
        <h1 className="text-[36px]">Bots & integration</h1>
        <div className="w-4/5 h-[1px] bg-black"></div>
      </div>
      <Card title={"Bot List"} icon={<RiRobot2Line />} linkUrl={"/bots"} />
    </div>
  );
}