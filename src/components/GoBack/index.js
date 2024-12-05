import {Link} from "react-router-dom";

import {BiLeftArrowAlt} from "react-icons/bi";

export default function GoBack() {
  return (
    <div className="w-[90%] mx-auto my-6">
      <Link to="/" className="w-1/4 text-[50px] hover-animation flex items-center justify-between">
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}