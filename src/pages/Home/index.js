import { RiRobot2Line } from "react-icons/ri";

import HomeHeader from "../../components/HomeHeader";
import Card from "../../components/Card";
import {FaRegFileCode} from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-[90%] flex-col mx-auto mt-12">
      {/* Bots & integration */}
      <HomeHeader title={"Bots & integration"} />
      <Card title={"Bot List"} icon={<RiRobot2Line />} linkUrl={"/bots"} />

      {/* Other */}
      <HomeHeader title={"Other"} />
      <div className="flex flex-row space-x-12">
        <Card title={"Env list"} icon={<FaRegFileCode />} linkUrl={"/env"} />
        <Card title={"Doc"} icon={<FaRegFileCode />} linkUrl={"/doc"} />
      </div>
    </div>
  );
}