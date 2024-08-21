import { createContext, useState } from "react";

export const sidebarContext = createContext(false);

export default function SidebarProvider({ children }) {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <sidebarContext.Provider value={{ isSidebar: isSidebar, func: setIsSidebar }}>
      {children}
    </sidebarContext.Provider>
  );
}