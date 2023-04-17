import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className='screenContainer'>
      <button
        className='button title1'
        onClick={() => {
          router.push("/hooks/usecontext");
        }}
      >
        REACT HOOKS
      </button>
    </div>
  );
}
