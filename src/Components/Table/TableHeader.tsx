import React from "react";

type Header = {
  label: string;
  key: string;
};

type TableHeaderProps = {
  headers: Header[];
};

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  //   const { value, toggle } = useTableContext();

  //   console.log("TableContext value:", value);
  return (
    <thead>
      <tr>
        {headers.map((head, index) => (
          <th key={head.key || index} className="table_header">
            {head.label}
          </th>
        ))}
        <th className="table_header"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
