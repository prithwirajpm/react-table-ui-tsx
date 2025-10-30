import React, { createContext, useContext, useState } from "react";

type TableContextType = {
  value: boolean;
  toggle: () => void;
};

const TableContext = createContext<TableContextType | null>(null);

export const TableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState(false);
  const toggle = () => setValue((prev) => !prev);

  return (
    <TableContext.Provider value={{ value, toggle }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) console.log("error", context);
  return context;
};
