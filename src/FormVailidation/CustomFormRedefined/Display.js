import React, { useState } from "react";
import useFormState from "./components/formState";
import MyForm from "./components/MyForm";
import MyInput from "./components/MyInput";
import FormValidator from "./components/ValidatorExample";
import lock from "../../assets/lock.png";

const Display = () => {
  const formStateProps = useFormState();
  const { validateForm, values } = formStateProps;
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = () => {
    if (validateForm()) {
      setisLoading(true);
      setTimeout(() => {
        setisLoading(false);
      }, 2000);
      console.log(values);

    } else {
      console.log("Form Not Valid");
    }
  };

  return (
    <div className="w-[300px] mt-6 mx-auto rounded-[0.4rem] bg-[#006666] text-white px-7 py-4 text-center">
      <h2 className="text-[1.35rem] font-bold ">Get Free Email Updates!</h2>
      <p>Join us for FREE to get instant email updates!</p>
      <MyForm formStateProps={formStateProps} className="space-y-5 my-5">
        <MyInput
          name="name"
          title="Name"
          placeholder="First Name"
          validator={FormValidator.validateName}
        />
        <MyInput name="email" title="Email" placeholder="Email Adress" validator={FormValidator.validateEmail} />
        <MyInput name="password" title="Password" placeholder="Input without validation" />
      </MyForm>
      <div className="flex space-x-2 items-center">
        <img src={lock} alt="lock" className="h-[16px]" />
        <p className="text-[14px]">Your Information is safe with us!</p>
      </div>

      <button
        className="h-[40px] w-[calc(100%-50px)] flex justify-center items-center mx-auto rounded-md font-semibold bg-[#302F2F] my-10 transition duration-300 hover:bg-[#464646] active:scale-[1.1]"
        onClick={handleSubmit}
      >
        {isLoading?<div className="flex space-x-3"><p>Valid</p> <div className="w-[25px] h-[25px] border-2 border-slate-300 border-r-[transparent] rounded-full animate-spin"></div></div>:'Get Access Today!'}
      </button>
    </div>
  );
};

export default Display;
