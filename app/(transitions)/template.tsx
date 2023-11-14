"use client";

import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./transitions.css";

const TransitionTemplate = ({ children }: { children: React.ReactNode }) => {
  const [ inProp, setInProp ] = useState<boolean>(false);
  const nodeRef = useRef(null);
  
  // This will run twice in dev because of React Strict Mode
  // unless `reactStrictMode: false` is set in next.config.js
  useEffect(() => {
    // Do what you want to do when the page has mounted
    console.log("Mounted");
    setInProp(true);

    return () => {
      // Do what you want to do (with caveats) when the page unmounts
      console.log("Unmounted");
      
      // Note: trying to transition out in this function
      // will fail because this is where the component itself
      // (TransitionTemplate) gets destroyed. Immediately after
      // cleanup runs, the component no longer exists, so applying
      // another transition class is pointless because the
      // DOM elements are gone before the visual effect happens.
    };
  }, []);
  
  return (
    <CSSTransition nodeRef={nodeRef} in={inProp} classNames="page-transition" timeout={1000}>
      <div ref={nodeRef} className={"bg-pink-500 text-white h-full p-4 relative"}>
        <div className="mb-4">
        Route group template -
          <span className="font-mono text-xs"> @/app/(transitions)/template.tsx</span>
        </div>
      
        {/*
        This container is where you handle transitions
      */}
        <div className={"flex justify-stretch items-stretch h-[600px]"}>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default TransitionTemplate;