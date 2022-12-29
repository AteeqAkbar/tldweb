import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";
import { LoginWithEmailPassword } from "../utils_firebase/users";

export let switchAuthModeHandler;

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputGamil = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  let formData;

  switchAuthModeHandler = function () {
    setIsLogin((prevState) => !prevState);
    return "toggle";
  };

  function submitHandler(event) {
    event.preventDefault();

    if (isLogin) {
      const enteredGmail = inputGamil.current.value;
      const enteredPassword = inputPassword.current.value;
      formData = {
        gmail: enteredGmail,
        password: enteredPassword,
      };
    }

    if (!isLogin) {
      const enteredFirstName = inputFirstName.current.value;
      const enteredLastName = inputLastName.current.value;
      const enteredGmail = inputGamil.current.value;
      const enteredPassword = inputPassword.current.value;
      const enteredConfirmPassword = inputConfirmPassword.current.value;

      formData = {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        gmail: enteredGmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword,
      };
    }
    LoginWithEmailPassword();
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex">
          <div className="w-[50%] h-[764px]">
            <img src="./img/Image (15).png" className="object-cover" />
          </div>
          <div className="flex flex-col w-[50%]">
            <Link className="ml-[auto] mr-[6.198%]" href="/">
              <img src="./img/X.png" className="object-cover" />
            </Link>

            <h1 className="font-semibold text-[36px] text-[#357A7B] mx-auto font-[Raleway] leading-[38px]">
              {isLogin ? "Login" : "Signup"}
            </h1>

            <h1 className="leading-[19px] font-medium mx-auto text-[16px] text-[#1C2D56] mt-[16px] mb-[19px]">
              For All Your Mentoring Needs
            </h1>

            <div className="w-[63.88%] mx-auto h-[26%] flex flex-col justify-between">
              <div className="flex justify-between ">
                <div className="w-[46.52%] group ">
                  {isLogin ? (
                    ""
                  ) : (
                    <input
                      type="text"
                      className="border-[1px] rounded-[8px] w-full  h-[48px] border-[#1C2D56] placeholder:pl-[10px] "
                      placeholder="First Name"
                      ref={inputFirstName}
                    />
                  )}
                </div>

                <div className="w-[46.52%]">
                  {isLogin ? (
                    ""
                  ) : (
                    <input
                      type="text"
                      placeholder="LastName"
                      className=" placeholder:pl-[10px] border-[1px]  rounded-[8px] w-full h-[48px] border-[#1C2D56]"
                      ref={inputLastName}
                    />
                  )}
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter your Email"
                className="border-[1px] placeholder:pl-[10px] border-[#1C2D56] h-[48px] rounded-[8px] w-full "
                ref={inputGamil}
              />

              <div className="flex justify-between">
                {isLogin ? (
                  ""
                ) : (
                  <input
                    type=" Password"
                    placeholder="  Password"
                    className="border-[1px]  placeholder:pl-[10px] rounded-[8px]  w-[46.52%] h-[48px] border-[#1C2D56]"
                    ref={inputPassword}
                  />
                )}

                {isLogin ? (
                  <input
                    type="text"
                    placeholder=" Password"
                    className="border-[1px] mb-10 placeholder:pl-[10px] border-[#1C2D56] h-[48px] rounded-[8px] w-full "
                    ref={inputPassword}
                  />
                ) : (
                  <input
                    type=" Password"
                    placeholder="confirm Password"
                    className="border-[1px]  placeholder:pl-[10px] rounded-[8px]  w-[46.52%] h-[48px] border-[#1C2D56]"
                    ref={inputConfirmPassword}
                  />
                )}
              </div>
            </div>

            <div className="mx-auto mb-1 w-[13.89%] bg-[#1C2D56]  rounded-[4px] py-[5px] px-[18px] mt-[32px]">
              <button className="bg-[#1C2D56] ml-3 text-[white]">
                {isLogin ? "Login" : "Signup"}
              </button>
            </div>

            <div className="  ">
              <h1 className="leading-[28px]  text-[16px] font-medium text-center">
                <button type="button" onClick={switchAuthModeHandler}>
                  {isLogin
                    ? "Create new account"
                    : "Login with existing account LogIn"}
                </button>
              </h1>
            </div>

            <div className="w-[32.22%] flex justify-between mx-auto mb-[15.57%] mt-[64px]">
              <img src="./img/Frame 77.png" className="object-cover" />
              <img src="./img/Frame 78.png" className="object-cover" />
              <img src="./img/Frame 79.png" className="object-cover" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Index;
