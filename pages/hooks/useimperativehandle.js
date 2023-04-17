import Form from "@/component/Form";
import React, { useRef } from "react";
import { useRouter } from "next/router";

export default function useimperativehandlePage() {
  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = () => {
    formRef.current.submitForm();
  };
  return (
    <div className='screenContainer'>
      <p className='title0'>useImperativeHandle</p>
      <p className='description'>
        Dipakai bersamaan dengan useRef dan forwardRef. Gunanya adalah supaya
        parent component dapat mengakses functions yang ada di dalam child
        component. Biasanya digunakan ketika parent component ingin
        berinteraktif secara lgsg dengan child component.
      </p>

      <Form ref={formRef} />
      <button className='button' onClick={handleSubmit}>
        Submit (Parent)
      </button>

      <button
        className='button2'
        onClick={() => {
          router.push("/hooks/uselayouteffect");
        }}
      >
        NEXT : USELAYOUTEFFECT
      </button>
    </div>
  );
}
