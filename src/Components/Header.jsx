import { useState } from "react";
import whatapp from "../assets/Images/whatsapp.png"
import dev from "../assets/Images/developer.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <div className="flex flex-col md:flex-row md:mx-[8%]">
        <div className="mt-[5%]">
          <img src={dev} alt=""  />
        </div>
        <div className="  flex flex-col text-left ml-[3%] mt-[12%] ">
          <div className=" font-[600] text-[29px]">
            Post property Ad to <br /> sell or rent online for <br />{" "}
            <span className="text-[#009681]"> Free!</span>
          </div>
          <div>
            <ul className="list-disc leading-[35px] font-[500] ml-[30px] mt-[10px] text-[#42526E]">
              <li>Get Access to 4 Lakh + Buyers</li>
              <li>Sell Faster with Premium Service</li>
              <li>
                Get Expert Advice on Market <br /> Trends and Insights
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-left mt-[8%] gap-6 border-[1px] border-[#B2DFD8] rounded-[10px] px-[20px] py-[20px] ml-[15%] shadow-[5px_5px_7px_-1px_#000000]">
          <div className="text-[26px] font-[600]">Let's get you started</div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-[16px] font-[600]">You are:</div>
              <div className=" flex gap-2 mx-2 ">
                <button className="px-4 py-2 border-[2px] rounded-full font-[200]">
                  Owner
                </button>
                <button className="px-4 py-2 border-[2px] rounded-full font-[200]">
                  Agent
                </button>
                <button className="px-4 py-2 border-[2px] rounded-full font-[200]">
                  Builder
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[16px] font-[600]">You are here to:</div>
              <div className=" flex gap-2 mx-2 ">
                <button className="px-4 py-2 border-[2px] rounded-full font-[200]">
                  Sell
                </button>
                <button className="px-4 py-2 border-[2px] rounded-full font-[200]">
                  Rent/lease
                </button>
                <button className="px-4 py-2 border-[2px] rounded-full font-[200]">
                  List as PG
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-2">
              <div className="text-[16px] font-[600]">You are here to:</div>
              <div>
                <PhoneInput
                  international={false}
                  defaultCountry="INR"
                  value={value}
                  onChange={setValue}
                  placeholder="WhatsApp Number"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 ">
              <div className="text-[15px] mt-[10px] font-[600] bg-[#FFFCF2] border-[#FFDE82] border-[1px] rounded-[8px] px-[10px]">Enter your <span><img src={whatapp} alt="" className=" inline" /></span>WhatsApp No. to get <br />enquiries from Buyer/Tenant</div>
              <div><button className="w-[100%] flex justify-center bg-[#D8232A] rounded-[50px] font-[500]  text-[#ffffff] py-2">Start Now</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
