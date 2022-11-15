import React from 'react'
import FormField from './components/FormField'

const MyCustomForm = () => {
  return (
    <div className=' h-[100vh] w-[600px] m-auto flex justify-center items-center'>
        <div className='w-full h-[90vh] border border-slate-900 p-10'>
            <FormField title='Email'/>
            <FormField title='Password'/>
            
            <button className='px-8 py-2 bg-green-500 w-fit my-6 cursor-pointer rounded-full'>Submit</button>
        </div>
    </div>
  )
}

export default MyCustomForm