import React, { Fragment } from "react";
import Image from "next/image";
// import { getAllMentors } from "../../proxyLayer/api-util";

const Card = ({ mentors }) => {
  console.log(mentors, "card");

  console.log("Check");
  // const Mentors = getAllMentors();

  return (
    <Fragment>
      {mentors && mentors.length > 0
        ? mentors.map((mentor) => {
            return (
              <Fragment key={mentor.id}>
                <div id="featuredProducts" className=" mb-8 m-2 w-100 ">
                  <div className=" px-2 py-11  w-full  ">
                    <div className="relative group rounded-[12px] w-[100%]">
                      <div
                        className="h-[330px] w-[100%] rounded-[12px] bg-no-repeat   bg-cover"
                        style={{
                          backgroundImage: "url(" + mentor.summry?.image + ")",
                        }}
                      >
                        {/* <Image
                          src={mentor.summry?.image}
                          alt="img"
                          fill
                          className="rounded-[12px] object-cover"
                        /> */}
                        {/* <img
                          src={mentor.summry?.image}
                          alt="IMG"
                          className=" h-[100%] rounded-[12px] object-cover"
                        /> */}
                      </div>

                      <div className="absolute w-full rounded-[12px] top-0 right-0 bottom-0 left-0 h-full overflow-hidden bg-fixed bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(36,36,36,0)] rounded-xl opacity-50 "></div>
                      <div className="flex flex-col w-[90%] ml-4 absolute group-hover:-translate-y-10 group-hover:duration-1000 transition-all duration-1000 top-[286px]  transition-all hover:duration-1000">
                        <div className="flex justify-between mt-[8px] ">
                          <p className="text-[20px]  text-[#FFFFFF] leading-[23px]  font-['Raleway']">
                            {mentor.summry?.displayName}
                          </p>
                          <p className="text-[20px]  text-[#FFFFFF] leading-[23px] ">
                            {200} <span>+Hrs</span>{" "}
                          </p>
                        </div>
                        <div className=" flex text-[16px]  text-[#FFFFFF] leading-[19px]   mt-3">
                          <div className="">
                            <Image
                              src="/img/icons8-speech-24_1.png"
                              alt=""
                              height={20}
                              width={20}
                              className="object-cover"
                            />
                            {/* <img
                              src="./img/icons8-speech-24_1.png"
                              alt="img"
                              className="object-cover"
                            /> */}
                          </div>
                          <p className="ml-3  ">{mentor.about}</p>
                        </div>
                      </div>
                      <div className="absolute w-[36px] h-[9%] top-[9px] right-[6%] bg-[url('/img/Path.png')] bg-no-repeat hover:bg-[url('/img/redPath.svg')] ">
                        {/* <img
                          src="./img/Path.png"
                          alt="img"
                          className="object-cover"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })
        : ""}
    </Fragment>
  );
};

export default Card;
