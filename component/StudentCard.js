export default function StudentCard({ name, age }) {
  return (
    <div className='card'>
      <p>
        {name}, {age} yeard old
      </p>
    </div>
  );
}
