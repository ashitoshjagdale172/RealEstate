import QuesCompo from "./QuesCompo";
import gif from "../assets/Images/Desktop_Animation.gif";
const FrequentQuestions = () => {
  return (
    <>
      <div className="flex flex-col mx-[8%] my-[5%] ">
        <div className="text-[38px] font-[700] text-[#091E42]">
          Frequently Asked Questions
        </div>
        <div className="flex md:flex-row flex-col  mt-14 w-[100%] gap-4  ">
          <div className=" flex flex-col gap-5">
            <QuesCompo
              ques="Can I rent or sell property online for free?"
              ans={
                <>
                  Yes, you can easily rent, to let or sell your property online
                  for free. It is the most simplified way to sell your home &
                  experience excellence through Real Estate. You can easily post
                  your property ads for rent or sale through the following
                  steps:
                  <br />
                  <br />
                  Step 1: Register or Login on Real Estate. <br /> Step 2: Fill
                  in all essential details such as property type, accurate
                  location, price, photos, and property features to maximize
                  your Property Completion Score. It will help your property
                  rank higher in search results. <br /> Step 3: Post your
                  property for free and connect with buyers/tenants.
                </>
              }
            />
            <QuesCompo
              ques="How to rent or sell my flat online?"
              ans="Renting or Selling a flat online is quite easy. All you need to do is post ad for 
rent, to let or sell. Moreover, you can list one property advertisement (rent or
sell) for free."
            />
            <QuesCompo
              ques="Why should I post my property on Real Estate?"
              ans={
                <>
                  <p>
                    Real Estate is India's #1 property advertisement posting
                    site for all Property related needs when it comes to buying,
                    selling, or renting.
                  </p>
                  <br />

                  <p>Here's why you should choose us:</p>
                  <ul className="list-disc list-outside ml-5">
                    <li>Access to over 15 lakh+ Buyers & Tenants</li>
                    <li>Get instant responses via Email & SMS</li>
                    <li>View responses & contact them to close deals faster</li>
                    <li>Great offers & discounts on Premium Services</li>
                    <li>
                      Customized value-added Property Packages for every budget
                    </li>
                  </ul>
                </>
              }
            />
          </div>
          <div className="flex justify-center items-center pl-10 w-[80%]">
            <img src={gif} alt="GIF" className="h-[423px] w-[540px]" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-14">
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-[600]">Get assistance throughout the journey</p>
            <p>Make your Property posting Experience hassle-free!</p>
          </div>
          <div className="flex text-left justify-end  px-10">
            <div className="flex flex-col gap-3 px-4">
              <div>Help Desk:</div>
              <div ><a
                  href="https://www.magicbricks.com/rent-sell-property-online#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D8232A] text-[20px] underline"
                >
                  Get answers to your queries
                </a></div>
            </div>
            <div className="flex flex-col gap-3 px-4 border-l-2 border-black">
                <div>Email:</div>
                <div className=" text-[#D8232A] text-[20px] underline">  <a href="mailto:Contact@realestate.com" >
                  Contact@realestate.com
                </a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentQuestions;
