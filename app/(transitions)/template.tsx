"use client";

import React, { useEffect, useState, Suspense } from "react";
import styles from "./transitions.module.css";
import { NavigationEvents } from "@/components/navigation-events";

type TransitionState = "offscreenleft" | "onscreen" | "offscreenright";

const TransitionTemplate = ({ children }: { children: React.ReactNode }) => {
  const [ transitionState, setTransitionState ] = useState<TransitionState>("offscreenleft");

  const updateLifecycleStage = (delayMs: number) => {
    // Updating the state and then setting a timeout does not work (to be expected) - the component
    // is still unmounted before any visual effects take place
    if (transitionState === "offscreenleft") setTransitionState("onscreen");
    if (transitionState === "onscreen") setTransitionState("offscreenright");
    setTimeout(() => {}, delayMs);
  };
  
  return (
    <>
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
      <Suspense fallback={null}>
        <NavigationEvents onChange={() => updateLifecycleStage(1000)} />
      </Suspense>
    </>
  );
};

export default TransitionTemplate;