import React, { Fragment } from "react";

const Students = ({ student, onFollowHenddler }) => {
  return (
    <Fragment>
        <div className="">
          <div className="flex justify-between border-[2px] rounded-[10px] mb-[20px] p-[10px]">
            <div className="flex">
              <img
                src={student.summry.image}
                className="w-[32px] rounded-[50px] object-cover"
              />
              <h1 className="font-bold ml-[15px] text-[#1C2D56]">
                {student.summry.displayName}
              </h1>
            </div>
            <button
              onClick={() => onFollowHenddler(student.uid)}
              className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl"
            >
              Follow
            </button>
          </div>
        </div>
      
    </Fragment>
  );
};

export default Students;
