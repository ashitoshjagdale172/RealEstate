import React from "react";
import WorkCompo from "./WorkCompo";
import ltv from "../assets/Images/Ltv.png";
import lmob from "../assets/Images/lmobile.png";
import buddy from "../assets/Images/buddy.png";
const Working = () => {
  return (
    <div className=" flex flex-col justify-center my-14 mx-[8%]">
      <div className="text-center text-[38px] font-[700] text-[#091E42]">
        How it work
      </div>
      <div className="flex md:flex-row flex-col justify-evenly mt-28 ">
        <WorkCompo
          images={ltv}
          h1="Step 1: "
          h2="Post your Property Ad"
          text="Enter all details like locality name, amenities etc. 
along with	uploading Photos"
        />
        <WorkCompo
          images={lmob}
          h1="Step 2: "
          h2="Check Responses on Dashboard"
          text="Get access to Buyer/Tenant contact details & connect easily"
        />
        <WorkCompo
          images={buddy}
          h1="Step 3: "
          h2="Sell/Rent faster with instant Connect"
          text="Negotiate with your prospective Buyer/Tenant & mutually close	the deal.(site-visit)"
        />
      </div>
    </div>
  );
};

export default Working;
