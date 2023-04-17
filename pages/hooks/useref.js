import React, { useRef } from "react";
import { useRouter } from "next/router";

export default function userefPage() {
  const router = useRouter();
  const myBtn = useRef(null);
  return (
    <div className='screenContainer'>
      <p className='title0'>useRef</p>
      <p className='description'>
        Untuk mengambil element HTML dari DOM. Berguna untuk mengontrol
        Thrid-Party libraries.
      </p>

      {/* ========= BUTTON */}
      <button
        className='button'
        ref={myBtn}
        onClick={() => {
          myBtn.current.style.backgroundColor = "red";
        }}
      >
        MY BUTTON
      </button>

      <button
        className='button2'
        onClick={() => {
          router.push("/hooks/usememo");
        }}
      >
        NEXT : USEMEMO
      </button>
    </div>
  );
}
