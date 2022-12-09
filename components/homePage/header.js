import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="bg-gradient-to-l from-[#F8FBFE] to-[rgba(157,213,200,0.9)] w-full">
        <div className="grid grid-cols-2">
          <div className="">
            <div className=" ">
              <div className="w-[88.52%] ml-[9.44%] mt-[16.03%]">
                <p className="text-[58px] text-[#1C2D56]  leading-[75px] font-[700]">
                  Find and Book a Mentor for your 1:1 help today!
                </p>
              </div>

              <p className="font-['Raleway'] text-[24px] text-[#1C2D56] ml-[9.44%] w-[88%]">
                We have over 200 Mentors available, qualified in over 300
                subjects
              </p>

              <button className="ml-[9.44%] mb-[50px] h-[39px]  w-[25.91%] border-[#1C2D56] hover:bg-[#1C2D56] rounded-[8px] border-[2px] mt-6">
                <a className="hover:text-white">Find a Mentor</a>
              </button>
            </div>
          </div>
          <div className="">
            <img
              src="./img/Ellipse 5.png"
              alt="img"
              className="ml-auto mr-[5.5%] mt-[6.23%] border-[#FFB66A] border-[12px] rounded-[70px]"
            />
            <img
              src="./img/Ellipse 4.png"
              alt=""
              className=" ml-auto mr-[50.5%]  mt-[-13%] border-[#70C3F9] border-[12px] rounded-[70px] "
            />
            <img
              src="./img/Image (2).png"
              alt=""
              className=" border-[#6BFFAB] border-[12px] rounded-[95px]  ml-auto mr-[25.5%]  mt-[3%]"
            />
            <img
              src="./img/Ellipse 6.png"
              alt=""
              className=" border-[#DC8CFF] border-[12px] rounded-[85px]  ml-auto mr-[70.5%]  mt-[-4%]"
            />
            <img
              src="./img/Ellipse 7.png"
              alt=""
              className=" border-[#ACB0B5] border-[12px] rounded-[85px]  ml-auto mr-[35.5%]  mt-[-3%]"
            />
            <img
              src="./img/Ellipse 8.png"
              alt=""
              className=" border-[#FFE36A] border-[12px] rounded-[85px]  ml-auto mr-[5.5%]  mt-[-30%]"
            />
          </div>
        </div>
        <img src="./img/Vector 1.png" alt="img" className="h-[140.99px] w-full" />
      </div>
    </Fragment>
  );
};

export default Header;
