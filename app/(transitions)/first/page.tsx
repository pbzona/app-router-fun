import React from "react";
import Link from "next/link";

const FirstPage = () => {
  return (
    <div className="p-8 border-yellow-300 border-8 w-full h-full">
      <div className="mb-4">
        Page template -
        <span className="font-mono text-xs"> @/app/(transitions)/first/page.tsx</span>
      </div>
      
      <h1 className="text-4xl mb-8">
        First Page
      </h1>
      <Link href="/second" className="underline">Go to second page &rarr;</Link>
    </div>
  );
};

export default FirstPage;