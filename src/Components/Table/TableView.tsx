import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableFilter from "./TableFilter";
import { TableProvider } from "../TableProvider";

interface Header {
  label: string;
  key: string;
}
type TableViewProps = {
  headers: Header[];
  data: Record<string, any>[];
};

const TableView: React.FC<TableViewProps> = ({ headers, data }) => {
  return (
    <TableProvider>
      <div className="table_view_outside">
        <div>
          <TableFilter />
        </div>
        <table className="Table_view">
          <TableHeader headers={headers} />
          <TableBody data={data} columns={headers} />
          <TableFooter />
        </table>
      </div>
    </TableProvider>
  );
};

export default TableView;
