"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { usePathname } from "next/navigation";

type NavigationContextType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  prevPath: string;
  currentPath: string;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationMainProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      let newIndex = 0;
      if (pathname === "/home") newIndex = 0;
      else if (
        pathname === "/about/story" ||
        "/about/bloggers" ||
        "/about/servers"
      )
        newIndex = 1;
      else if (pathname === "/forum") newIndex = 2;
      else if (pathname === "/store") newIndex = 3;
      else newIndex = 0;

      setActiveIndex(newIndex);
      setPrevPath(pathname);
    }
  }, [pathname, prevPath]);

  return (
    <NavigationContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        prevPath,
        currentPath: pathname,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
