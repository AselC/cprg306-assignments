import Link from "next/link";
import Studentinfo from "./student-info";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <Studentinfo />
      <Link href="/" className="hover:underline hover:text-cyan-300 mt-8 block">Back to Home</Link>
    </main>
  );
}
