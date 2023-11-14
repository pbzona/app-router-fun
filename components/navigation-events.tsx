"use client";
 
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type NavigationEventsProps = {
  onChange?: () => void;
}

export function NavigationEvents({ onChange }: NavigationEventsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
 
  useEffect(() => {
    const url = `${ pathname }?${ searchParams }`;
    console.log(url);
    // You can now use the current URL
    // ...

    if (onChange) onChange();
  }, [ pathname ]);
 
  return null;
}