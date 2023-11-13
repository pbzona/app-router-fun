import Link from "next/link";

export default function HomePage() {
  return (
    <main className="grid place-content-center h-[300px]">
      <h1 className="text-5xl mb-5">Hello Home Page</h1>
      <p>This is the page-transitions branch. Go <Link href="/first" className="underline font-semibold text-blue-500">here</Link> to see the demo.</p>
    </main>
  );
}
