import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen justify-center bg-black text-blue-600 text-center">
        <div className="p-10">
            <h1 className="text-3xl">
              CPRG 306: Web Development 2 - Assignments
            </h1>
            <ul>
              <li className="p-5">
                <Link href="/week-2">Week 2 Assignment</Link>
              </li> 
              <li className="p-5">
                <Link href="/week-3">Week 3 Assignment</Link>
              </li>
              <li className="p-5">
                <Link href="/week-4">Week 4 Assignment</Link>
              </li> 
              <li className="p-5">
                <Link href="/week-5">Week 5 Assignment</Link>
              </li>  
            </ul>
        </div>
      
    </main>
  );
}