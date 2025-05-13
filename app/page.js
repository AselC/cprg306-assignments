import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
           <Link href="./week-2" className="hover:underline hover:text-cyan-300">Week 2 Assignment</Link>
        </li>
      </ul>
      
     
    </main>
  );
}
