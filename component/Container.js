import React from "react";
import Card from "./Card";

export default function Container({ firstName, lastName }) {
  return (
    <div className='container'>
      <p className='title2'>Container</p>

      <div className='cards'>
        <Card
          number={1}
          firstName={firstName}
          lastName={lastName}
          access='useState'
        />
        <Card number={2} access='useContext' />
      </div>
    </div>
  );
}
