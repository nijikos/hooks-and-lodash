import React, { forwardRef, useImperativeHandle, useState } from "react";

const Form = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e ? e.preventDefault() : null;
    console.log("Validate the form", [formData]);
    console.log("Submit the form to api", [formData]);
  };

  useImperativeHandle(ref, () => ({
    submitForm: handleSubmit,
  }));

  return (
    <form>
      <div className='flex flex-col gap-4'>
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <button className='button' onClick={handleSubmit}>
        Submit (Child)
      </button>
    </form>
  );
});

export default Form;
