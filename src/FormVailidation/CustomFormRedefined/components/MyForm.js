import React, { useEffect} from "react";



const MyForm = ({ children, formStateProps, className }) => {
  let formProps = null
  try {
     formProps = {
      values: formStateProps.values,
      errors: formStateProps.errors,
      handleChange: formStateProps.handleChange,
      validate: formStateProps.validate,
      isValid: formStateProps.isValid,
    };
  } catch (error) {
    console.error('Form props property must be provided on the form Component')
  }

  useEffect(() => {
    if (formStateProps !=null) {
      formStateProps.addValidators(validators)
    formStateProps.addInitialErrors(initialErrors, validators);
    }
  }, []);

  let initialErrors = [];
  let validators = {};
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      
      if (child.props.name != null && child.props.validator!=null) {
        initialErrors.push(child.props.name);
        validators[child.props.name] = child.props.validator
        // validators.push({[child.props.name]: child.props.validator})
      }
        // console.log('Child Props', child.props.validator('me'));
      return React.cloneElement(child, { formProps });
    }
    return child;
  });

  return <div className={`${className}`}>{childrenWithProps}</div>;
};

export default MyForm;
