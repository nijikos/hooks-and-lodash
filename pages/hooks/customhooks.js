import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function customhooks() {
  const router = useRouter();

  const windowWidth = useWindowWidth();

  return (
    <div className='screenContainer'>
      <p className='title0'>CUSTOM HOOKS</p>
      <p className='description'>
        Kita dapat membuat hooks sendiri dengan menggunakan built in hooks dari
        React. Biasanya paling sering dipakai adalah `useState` dan `useEffect`.
        Mirip dengan reusable function biasa, hanya saja ini lebih powerful
        kalau membutuhkan state management
      </p>

      <p className='card'>Browser's Width : {windowWidth}</p>

      <button
        className='button2'
        onClick={() => {
          router.push("/lodash");
        }}
      >
        NEXT : LODASH
      </button>
    </div>
  );
}
