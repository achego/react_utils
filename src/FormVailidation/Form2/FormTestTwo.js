import React from "react";
import useForm from "./components/useForm";

const FormTestTwo = () => {
    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
      }
  const { values, errors, handleChange } = useForm(formLogin);
  console.log('Values', values);
  console.log('Error', errors);
  return (
    <div className="mt-4">
      <form className="flex flex-col justify-center items-center">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="border my-2"
          onChange={handleChange}
         />
         {
        errors.email && <h3>{errors.email}</h3>
      }
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border my-2"
         onChange={handleChange}/>
         {
        errors.password && <h3>{errors.password}</h3>
      }
        <input
          type="text"
          name="username"
          placeholder="username"
          className="border my-2"
         onChange={handleChange}/>
        <input type="submit" value="Submit" className="border"  onChange={handleChange}/>
      </form>
    </div>
  );
};

export default FormTestTwo;
