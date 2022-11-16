//  The name property and validator property is required for form validation

import React from "react";

const MyInput = ({ name, title, validator, formProps, className, titleStyle, inputStyle, ...props }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      {title && <p className={ `text-slate-800 font-semibold ${titleStyle}`}>{title}</p>}
      <input
      {...props}
        name={name}
        className={`w-full h-9 px-3 outline-none rounded-lg text-gray-700 ${inputStyle}`}
        onChange={(event) => {
            formProps.handleChange(event);
        }}
      />

      {formProps!=null?(formProps.errors[name] && <p className="text-red-800 text-[13px] font-semibold slide_in">{formProps.errors[name]}</p>):null}
    </div>
  );
};

export default MyInput;
