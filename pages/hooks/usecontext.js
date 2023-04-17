import { createContext, useState } from "react";
import { useRouter } from "next/router";
import Container from "@/component/Container";

export const NameContext = createContext();

export default function usecontextPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <NameContext.Provider
      value={{ firstName2: firstName, lastName2: lastName }}
    >
      <div className='w-screen h-screen bg-slate-300 grid place-content-center'>
        <p className='title0'>useContext</p>
        <p className='description'>
          Dipakai untuk sharing data/value dengan berbagai component dalam 1
          tree yang sama. Tujuannya supaya engga harus terus menerus turunin
          PROPS ke child component
        </p>

        {/* ========= INPUTS */}
        <div className='flex flex-row gap-4'>
          <input
            type='text'
            placeholder='First Name'
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
          <input
            type='text'
            placeholder='Last Name'
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
        </div>

        <button
          className='button'
          onClick={() => {
            setFirstName("");
            setLastName("");
          }}
        >
          RESET
        </button>

        {/* ========= HOMEPAGE DATA */}
        <p className='title1'>HOMEPAGE</p>
        <p className='displayName'>{`${firstName} ${lastName}`}</p>

        {/* ========= SEGMENT */}
        <Container firstName={firstName} lastName={lastName} />

        <button
          className='button2'
          onClick={() => {
            router.push("/hooks/useref");
          }}
        >
          NEXT : USEREF
        </button>
      </div>
    </NameContext.Provider>
  );
}
