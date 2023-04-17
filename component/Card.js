import { NameContext } from "@/pages/hooks/usecontext";
import React, { useContext } from "react";

export default function Card({ number, firstName, lastName, access }) {
  const { firstName2, lastName2 } = useContext(NameContext);

  return (
    <div className='card'>
      <p>
        Card {number} === pakai {access}
      </p>
      {access === "useState" ? (
        <p>
          User : {firstName} {lastName}
        </p>
      ) : (
        <p>
          User : {firstName2} {lastName2}
        </p>
      )}
    </div>
  );
}
