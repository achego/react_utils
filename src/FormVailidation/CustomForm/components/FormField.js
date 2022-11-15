import React from 'react'

const FormField = ({title}) => {
  return (
    <div>
        {title?<p>{title}</p>:null}
        <input className='border border-slate-500'  type={'text'}/>
        <p className='text-red-600'>Error</p>
    </div>
  )
}

export default FormField