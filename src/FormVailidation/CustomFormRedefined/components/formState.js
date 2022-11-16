import { useState } from "react";

const useFormState = () => {
  const [values, setvalues] = useState({});
  const [errors, seterrors] = useState({});
  const [storedDummyErrors, setstoredDummyErrors] = useState({});
  const [isFormValid, setisFormValid] = useState(false);
  const [hasValidated, sethasValidated] = useState(false);
  const [validators, setvalidators] = useState({});
  let storedErrors = {};

  const addValidators = (validatorObject) => {
    setvalidators(validatorObject);
  };

  const validate = (name, value) => {
    const errorMessage = validators[name] !=null?validators[name](value):null;
    storedErrors = { ...storedDummyErrors, [name]: errorMessage };
    setstoredDummyErrors(storedErrors);
    if (!hasValidated) {
      return;
    }
    seterrors(storedErrors);
  };

  const validateForm = () => {
    sethasValidated(true);
    // console.log(errors);
    // console.log(storedDummyErrors);
    if(isFormValid){
      seterrors({})
    }
    else {
      seterrors(storedDummyErrors);
    }

    return isFormValid;
  };

  const addInitialErrors = (children, validatrs) => {
    const initialErrors = {};
    for (const name of children) {
      initialErrors[name] =  validatrs[name] != null?validatrs[name](''):'';
    }
    setstoredDummyErrors(initialErrors);
  };

  const isValid = (newErrors) => {
    const errorArray = Object.values(newErrors);
    setisFormValid(errorArray.every((val) => val === errorArray[0]));
    return errorArray.every((val) => val === errorArray[0]);
  };

  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let value = event.target.value;
    // console.log(validators);
    validate(name, value);
    isValid({ ...storedDummyErrors, [name]: validators[name]!=null?validators[name](value):null });
    setvalues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    errors,
    handleChange,
    addInitialErrors,
    validateForm,
    addValidators,
  };
};

export default useFormState;
