import React from "react";
import home from "../assets/Images/home.png";
import pic from "../assets/Images/Picture.png";
import PropInfo from "../assets/Images/PropertyInfo.png";
const PostProperty = () => {
  return (
    <div>
      <div className="mx-[8%] mt-32">
        <div className="text-center text-[38px] font-[700] text-[#091E42]">
          Post Your Property in <br /> 3 Simple Steps
        </div>
        <div className="flex md:flex-row flex-col justify-evenly mt-28">
          <div>
            <div>
              <img src={PropInfo} alt="" className="h-[38px] w-[38px]" />
            </div>
            <div className="text-[#091E42] font-[600] text-[18px] mt-10 mb-2">01 . Add details of your property</div>
            <div>
              Begin by telling us the few basic details about your<br /> property like
              your property type, location, No. of<br /> rooms etc
            </div>
          </div>
          <div>
            {" "}
            <div>
              <img src={pic} alt="" className="h-[38px] w-[38px]" />
            </div>
            <div className="text-[#091E42] font-[600] text-[18px] mt-10 mb-2">02 . Upload Photos & Videos</div>
            <div>
            Upload photos and videos of your property either <br />
            via your desktop device or from your mobile phone
            </div>
          </div>
          <div>
            {" "}
            <div>
              <img src={home} alt="" className="h-[38px] w-[38px]" />
            </div>
            <div className="text-[#091E42] font-[600] text-[18px] mt-10 mb-2">03 . Add Pricing & Ownership</div>
            <div>
            Just update your property’s ownership details and <br />
your expected price and your property is ready for <br />
posting
            </div>
          </div>
        </div>
        <div className=" flex justify-center mt-16"><button className="bg-[#33691E] text-white rounded-[10px] px-8 py-3 font-[600]">Begin to Post your Property</button></div>
      </div>
    </div>
  );
};

export default PostProperty;
