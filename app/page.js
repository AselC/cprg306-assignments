import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl pl-6">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="list-disc list-outside pl-15">
        <li>
          <Link href="./week-2" className="hover:underline hover:text-cyan-300">
            Week 2 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}