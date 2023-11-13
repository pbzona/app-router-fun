import React from "react";

const TransitionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-row items-stretch h-full">
      <section className="bg-violet-600 text-white w-[270px] py-4 px-2 relative z-50">
        Route group layout
        <span className="font-mono text-xs"> - @/app/(transitions)/layout.tsx</span>
      </section>
      <section className="flex-grow">
        {children}
      </section>
    </main>
  );
};

export default TransitionLayout;