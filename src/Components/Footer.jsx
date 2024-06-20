import React from "react";
import insta from "../assets/Images/instagram.png"
import twitter from "../assets/Images/twitter.png"
import linked from "../assets/Images/linkedin.png"
import yt from "../assets/Images/youtube.png"
import appla from "../assets/Images/apple.png"
import google from "../assets/Images/google-play.png"

const Footer = () => {
  return (
    <div className="bg-[#F2EEEE]">
      <div className="flex flex-col mx-[3%] mt-[5%] ">
        <div className="bg-[#F2EEEE]">
          <div className=" flex md:flex-row flex-col justify-between mb-[3%] mt-[3%]">
            <div>
              <div className="font-[600] text-[#171616] mb-[10px]">
                About Real Estate
              </div>{" "}
              className
              <div className=" text-[14px] text-[#171616] font-[300]">
                Real Estate is a full stack service provider for all real estate
                need....<span className=" underline">Read more</span> 
              </div>
            </div>
            <div>
              <div className="font-[600] text-[#171616] mb-[10px]">
                Properties in India
              </div>
              <div className=" text-[14px] text-[#171616] font-[300]">
                Property in Mumbai &nbsp;|&nbsp; Property in Pune &nbsp;|&nbsp; Property in Delhi &nbsp;|&nbsp;
                Property in New Mumbai &nbsp;|<br />
                Property in Chennai &nbsp;|&nbsp; Property in Bengaluru &nbsp;|&nbsp; Property in Thane
                &nbsp; |&nbsp; Property in Pune &nbsp;|<br />
                Property in Nagar &nbsp;|&nbsp; Property in Kalyan &nbsp;|
              </div>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col justify-between mb-[3%] mt-[3%]">
            <div>
              <div className="font-[600] text-[#171616] mb-[10px]">
                More from our Network
              </div>
              <div className=" text-[14px] text-[#171616] font-[300]">
                <p>
                  MensXp &nbsp; &nbsp; &nbsp; &nbsp;  iDiva &nbsp; &nbsp; &nbsp; &nbsp; Gadgets Now &nbsp; &nbsp; &nbsp; &nbsp;Economic Times Filmfare &nbsp; &nbsp; &nbsp; &nbsp; The Times of
                  India <br />
                  USA Today&nbsp; &nbsp; &nbsp; &nbsp; New York Post&nbsp; &nbsp; &nbsp; &nbsp; Chicago Tribune
                </p>
              </div>
            </div>
            <div>
              <div className="font-[600] text-[#171616] mb-[10px]">
                New Projects in India
              </div>
              <div className=" text-[14px] text-[#171616] font-[300]">
                Property in Mumbai &nbsp;|&nbsp; Property in Pune &nbsp;|&nbsp; Property in Delhi &nbsp;|&nbsp;
                Property in New Mumbai &nbsp;| <br />
                Property in Chennai &nbsp;| &nbsp;Property in Bengaluru &nbsp;|&nbsp; Property in Thane
                &nbsp; |&nbsp; Property in Pune &nbsp;| <br />
                Property in Nagar &nbsp;|&nbsp; Property in Kalyan &nbsp;|
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4848B0] flex justify-between items-center ">
        <div className=" flex px-[7%] py-5 gap-8 "><img src={insta} alt="" /><img src={linked} alt="" /><img src={twitter} alt="" /><img src={yt} alt="" /><img src={appla} alt="" /><img src={google} alt="" /></div>
        <div className="text-white text-[14px] flex gap-10 px-[10%] font-[600]"> <span>Advertise with us</span><span>Contact us</span><span>Privacy Policy</span><span>Careers</span><span>Help Center</span></div>
      </div>
      <div className="bg-[rgba(23,22,22,0.7)] px-8 py-1 text-white text-[14px] font-[600]">All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2024 Real Estate Realty Services Limited.</div>
    </div>
  );
};

export default Footer;
