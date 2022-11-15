import React from "react";

const MyInput = ({ name, title, validator, formProps }) => {
  return (
    <div>
      {title && <p>{title}</p>}
      <input
        name={name}
        className="border border-slate-900"
        onChange={(e) => {
            formProps.isValid({...formProps.errors, [name]:validator(e.target.value)})
            formProps.validate(name, validator(e.target.value));
            formProps.handleChange(e);
        }}
      />

      {formProps.errors[name] && <p className="text-red-800">{formProps.errors[name]}</p>}
    </div>
  );
};

export default MyInput;
