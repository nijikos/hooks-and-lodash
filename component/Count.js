import React from "react";

export default function Count({ increment, showImage }) {
  return (
    <div className='flex flex-col gap-2'>
      <h2>Child Component</h2>
      <button className='button' onClick={increment}>
        Increment Count
      </button>
      <button className='button' onClick={showImage}>
        Show Image
      </button>
    </div>
  );
}
