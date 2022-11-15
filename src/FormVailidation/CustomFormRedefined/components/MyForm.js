import React, { useEffect, useState } from "react";

const useFormState = () => {
  const [values, setvalues] = useState({});
  const [errors, seterrors] = useState({});
  const [isFormValid, setisFormValid] = useState(false);

  const validate = (name, error) => {
    seterrors({ ...errors, [name]: error });
  };
 

  const addInitialErrors = (children) => {
    const initialErrors = {};
    for (const name of children) {
      initialErrors[name] = 'Fields cannot be empty';
    }
    console.log(initialErrors);
    seterrors(initialErrors);
  };

  const isValid = (newErrors) => {
    const errorArray = Object.values(newErrors);
    console.log(newErrors);
    setisFormValid(errorArray.every((val) => val === errorArray[0]));
    return errorArray.every((val) => val === errorArray[0]);
  };

  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;
    setvalues({
      ...values,
      [name]: val,
    });
  };
  return {
    values,
    errors,
    handleChange,
    validate,
    isValid,
    addInitialErrors,
    isFormValid,
    
  };
};

const MyForm = ({ children, formStateProps }) => {
  //   const { values, errors, handleChange, validate, isValid, addInitialErrors } = useFormState();
  //   const formProps = { values, errors, handleChange, validate, isValid };
  const formProps = {
    values: formStateProps.values,
    errors: formStateProps.errors,
    handleChange: formStateProps.handleChange,
    validate: formStateProps.validate,
    isValid: formStateProps.isValid,
  };

  useEffect(() => {
    formStateProps.addInitialErrors(initialErrors);
  }, []);

  let initialErrors = [];
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      if (child.props.name != null) {
        initialErrors.push(child.props.name);
      }
    //   console.log(child.props.name);
      return React.cloneElement(child, { formProps });
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
};

export { MyForm, useFormState };
