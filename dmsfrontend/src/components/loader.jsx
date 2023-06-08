import React from "react";
import Loadergif from "../../assests/images/loading.gif";

const Loader = () => {
  return (
    <>
      <div>
        <img src={Loadergif} alt="" className="w-1/4 m-auto" />
      </div>
    </>
  );
};

export default Loader;
