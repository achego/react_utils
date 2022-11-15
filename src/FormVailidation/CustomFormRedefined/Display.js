import React, { useState } from "react";
import { MyForm, useFormState } from "./components/MyForm";
import MyInput from "./components/MyInput";

const Display = () => {
//   const { values, errors, handleChange, validate, isValid, addInitialErrors } =
//     useFormState();
const formStateProps = useFormState()

    let {isFormValid} = formStateProps;
    // const formStateProps = { values, errors, handleChange, validate, addInitialErrors};

    console.log('IS VALID', isFormValid);

  const meal = (val) => {
    if (val.length <= 3) {
      return "Email Too short";
    } else {
      return null;
    }
  };
  const meal2 = (val) => {
    if (val.length <= 5) {
      return "Password must be greater than 5";
    } else {
      return null;
    }
  };
  
  const [first, setfirst] = useState('')

  const handleSubmit = () => {
    if(isFormValid){
setfirst('The form is Valid')
    }
    else {
        setfirst('Not Vallid')
    }
  }

  return (
    <div className="border border-slate-800 w-[400px] h-[500px] mt-6 mx-auto">
      <MyForm
        formStateProps={formStateProps}
      >
        <MyInput name="email" title="Email" validator={meal} />
        <MyInput name="pass" title="Password" validator={meal2} />
      </MyForm>

      <div className=" p-2 px-8 bg-red-500 w-fit rounded m-5" onClick={handleSubmit}>Click me</div>
      <h1 className="text-2xl">{first}</h1>
    </div>
  );
};

export default Display;
