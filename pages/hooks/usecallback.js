import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Count from "@/component/Count";

export default function usecallbackPage() {
  const router = useRouter();

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const showImage = () => {
    setShow(!show);
  };

  useEffect(() => {
    console.log("INCREMENT() FUNCTION CREATED");
    return () => {};
  }, [increment]);

  return (
    <div className='screenContainer'>
      <p className='title0'>useCallback</p>
      <p className='description'>
        Mirip dengan useMemo, hanya saja tidak ada return statement (menjalankan
        function biasa). Biasanya dipakai jika function itu ingin diturunkan ke
        banyak child component (jadi berat). Hanya perlu digunakan jika
        functionnya berat
      </p>

      <p>Count: {count}</p>

      <Count increment={increment} showImage={showImage} />
      {show && (
        <img
          src='https://i.pinimg.com/564x/54/96/3a/54963a899c4eeb0b97a49ba7bc5a445b.jpg'
          alt='img'
        />
      )}

      <button
        className='button2'
        onClick={() => {
          router.push("/hooks/useimperativehandle");
        }}
      >
        NEXT : USEIMPERATIVEHANDLE
      </button>
    </div>
  );
}
