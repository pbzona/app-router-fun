"use client";

import React, { useEffect, useState } from "react";
import styles from "./transitions.module.css";

type TransitionStates = "offscreen" | "onscreen";

const TransitionTemplate = ({ children }: { children: React.ReactNode }) => {
  const [ transitionState, setTransitionState ] = useState<TransitionStates>("offscreen");
  
  // This will run twice in dev because of React Strict Mode
  // unless `reactStrictMode: false` is set in next.config.js
  useEffect(() => {
    // Do what you want to do when the page has mounted
    console.log("Mounted");
    setTransitionState("onscreen");

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
    <div className={`bg-pink-500 text-white h-full p-4 relative ${ styles.slidingPage } ${ styles[transitionState] }`}>
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
  );
};

export default TransitionTemplate;