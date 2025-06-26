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
        <li>
          <Link href="./week-3" className="hover:underline hover:text-cyan-300">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-4" className="hover:underline hover:text-cyan-300">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-5" className="hover:underline hover:text-cyan-300">
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-6" className="hover:underline hover:text-cyan-300">
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-7" className="hover:underline hover:text-cyan-300">
            Week 7 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-8" className="hover:underline hover:text-cyan-300">
            Week 8 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}