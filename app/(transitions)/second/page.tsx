import React from "react";
import Link from "next/link";

const SecondPage = () => {
  return (
    <div className="p-8 border-yellow-300 border-8 w-full h-full">
      <div className="mb-4">
        Page template -
        <span className="font-mono text-xs"> @/app/(transitions)/second/page.tsx</span>
      </div>
      
      <h1 className="text-4xl mb-8">
        Second Page
      </h1>
      <Link href="/first" className="underline">Go to first page &rarr;</Link>
    </div>
  );
};

export default SecondPage;