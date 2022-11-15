import React, { useState } from "react";

const useForm = ({callback}) => {
  const [values, setvalues] = useState({});
  const [errors, seterrors] = useState({});

  const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          seterrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          seterrors({
            ...errors,
            email: null,
          });
        }
        break;

      case "password":
        if (
            // value.length < 4
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          seterrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          seterrors({
            ...errors,
            password: null,
          });
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    if(event) event.preventDefault();

    if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
        callback();

    }else{
        alert("There is an Error!");
    }
}

  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val)

    setvalues({
      ...values,
      [name]: val,
    });
  };
  return {
    values,
    errors,
    handleChange,
  };
};

export default useForm;
