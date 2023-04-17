import React, { useMemo } from "react";
import { useRouter } from "next/router";
import StudentCard from "@/component/StudentCard";

export default function usememoPage() {
  const router = useRouter();

  let students = [
    { name: "Emma Smith", age: 16 },
    { name: "Liam Johnson", age: 20 },
    { name: "Olivia Garcia", age: 30 },
    { name: "Noah Davis", age: 18 },
    { name: "Ava Rodriguez", age: 25 },
    { name: "William Martinez", age: 19 },
  ];

  const sortStudentsByFirstName = (arr) => {
    let arrCopy = arr.slice();
    return arrCopy.sort((a, b) =>
      a.name.split(" ")[0].localeCompare(b.name.split(" ")[0])
    );
  };

  const sortStudentsByAge = (arr) => {
    let arrCopy = arr.slice();
    return arrCopy.sort((a, b) => a.age - b.age);
  };

  let sortByAge = useMemo(() => sortStudentsByAge(students), [students]);
  let sortByName = sortStudentsByFirstName(students);

  return (
    <div className='screenContainer'>
      <p className='title0'>useMemo</p>
      <p className='description'>
        Dipakai untuk membantu optimasi code dan meningkatkan performa app.
        Hanya dipakai untuk codingan yang rumit/expensive. Kalau engga, engga
        usah Berupa function dengan "return" statement.
      </p>

      <div className='grid grid-cols-2 gap-6 mb-4'>
        {/* ========= SORT BY NAME : USING USEMEMO */}
        <div className='col-span-1 flex flex-col gap-4'>
          <p>Sort By Name, regular function</p>
          <div className='flex flex-col gap-2'>
            {sortByName.map((item, index) => {
              return (
                <StudentCard key={index} name={item?.name} age={item?.age} />
              );
            })}
          </div>
        </div>
        {/* ========= SORT BY AGE  : USING REGULAR FUNCTION */}
        <div className='col-span-1 flex flex-col gap-4'>
          <p>Sort By Age, useMemo</p>
          <div className='flex flex-col gap-2'>
            {sortByAge.map((item, index) => {
              return <StudentCard name={item?.name} age={item?.age} />;
            })}
          </div>
        </div>
      </div>

      <button
        className='button2'
        onClick={() => {
          router.push("/hooks/usecallback");
        }}
      >
        NEXT : USECALLBACK
      </button>
    </div>
  );
}
