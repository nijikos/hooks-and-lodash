import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function uselayouteffectPage() {
  const router = useRouter();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (node) {
      const rect = node.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    }
  }, [ref]);

  //   useEffect(() => {
  //     const node = ref.current;
  //     if (node) {
  //       const rect = node.getBoundingClientRect();
  //       setSize({ width: rect.width, height: rect.height });
  //     }
  //   }, [ref]);

  return (
    <div className='screenContainer' ref={ref}>
      <p className='title0'>useLayoutEffect</p>
      <p className='description'>
        Digunakan untuk memanipulasi DOM atau melakukan perhitungan sebelum
        menampilkan component. Mirip dengan useEffect, tp jalan barengan dengan
        render DOM. Dipakai untuk membuat perubahan visual yang dibutuhkan
        segera setelah komponen dirender. Hooks useLayoutEffect sangat berguna
        untuk menghitung ukuran atau posisi elemen di halaman sebelum
        ditampilkan ke pengguna. Penggunaan yang berlebihan atau tidak tepat
        dapat memperlambat performance app
      </p>

      <p>
        The size of this component is {size.width}x{size.height} pixels.
      </p>

      <button
        className='button2'
        onClick={() => {
          router.push("/hooks/customhooks");
        }}
      >
        NEXT : CUSTOM HOOKS
      </button>
    </div>
  );
}
