import React, { ReactNode, createContext, useContext, useState } from "react";

interface DrawerContextProps {
  open: boolean;
  toggleOpen: () => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <DrawerContext.Provider value={{ open, toggleOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = (): DrawerContextProps => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within an DrawerProvider");
  }
  return context;
};
