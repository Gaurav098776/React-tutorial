import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SingupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType,setAccountType] =  useState('student')
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("hi");
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,accountType
    }
    console.log('final data', accountData)
    navigate("/dashboard");
  }
  return (
    <div>
      {/* student -Instructor tab */}
      <div className="flex bg-sky-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button className={`${accountType === 'student' ? "bg-sky-900 text-white" : "bg-transparent text-amber-50"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{setAccountType('student')}}>Sudent</button>
        <button className={`${accountType === 'instructor' ? "bg-sky-900 text-white" : "bg-transparent text-amber-50"} py-2 px-5 rounded-full transition-all duration-200 `}  onClick={()=>{setAccountType('instructor')}}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/*first name and last name */}
        <div className="flex justify-between w-full ">
          <label className=" mt-[20px]">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-700">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstName}
              className="bg-sky-800 rounded-[0.5rem] text-white w-full p-[12px] "
            />
          </label>
          <div className="mt-[20px]">
            <label>
              <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                Last Name<sup className="text-pink-700">*</sup>
              </p>
              <input
                type="text"
                required
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter last name"
                value={formData.lastName}
                className="bg-sky-800 rounded-[0.5rem] text-white w-full p-[12px] "
              />
            </label>
          </div>
        </div>
        {/* email add */}
        <label className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-700">*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="bg-sky-800 rounded-[0.5rem] text-white w-full p-[12px] "
          />
        </label>
        {/*createPassword and confirm Password */}
        <div className="  flex justify-between">
          <label className="relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-700">*</sup>
            </p>
            <input
              type={showPassword1 ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formData.password}
              className="bg-sky-800 rounded-[0.5rem] text-white w-full p-[12px] "
            />

            <span
              onClick={() => setShowPassword1((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {!showPassword1 ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-700">*</sup>
            </p>
            <input
              type={showPassword2 ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Enter confirm password"
              value={formData.confirmPassword}
              className="bg-sky-800 rounded-[0.5rem] text-white w-full p-[12px] "
            />

            <span
              onClick={() => setShowPassword2((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {!showPassword2 ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button type="submit" className="w-full bg-yellow-300 rounded-[8px] font-medium text-sky-900 px-[12px] py-[8px] mt-6">Create Account</button>
      </form>
    </div>
  );
};

export default SingupForm;
