import React from "react";
import { User } from "lucide-react";

interface StatusType {
  label_name: string;
  color: string;
  key: string;
}

interface TeamType {
  label: string;
  key: string;
  color: string;
}

interface Header {
  label: string;
  key: string;
}

type TableBodyProps = {
  data: Record<string, any>[];
  columns: Header[];
};

interface NameType {
  label: string;
  username: string;
  icon: string;
}

const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => {
  return (
    <tbody className="table_body">
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col, colIndex) => (
            <td key={colIndex}>
              {col.key === "name" && row[col.key]?.label ? (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ fontSize: "20px" }}>
                    <User />
                  </span>
                  <div>
                    <div style={{ fontWeight: "bold" }}>
                      {row[col.key].label}
                    </div>
                    <div style={{ fontSize: "12px", color: "#666" }}>
                      {row[col.key].username}
                    </div>
                  </div>
                </div>
              ) : col.key === "status" && Array.isArray(row[col.key]) ? (
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                  {row[col.key].map((status: any, i: number) => (
                    <span key={i} className="tabels_cell_border">
                      <span
                        className="status_dot"
                        style={{
                          backgroundColor: status?.color,
                        }}
                      ></span>
                      {status.label_name}
                    </span>
                  ))}
                </div>
              ) : col.key === "teams" && Array.isArray(row[col.key]) ? (
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                  {row[col.key].map((team: any, i: number) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: team.color,
                        color: "#fff",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                      }}
                    >
                      {team.label}
                    </span>
                  ))}
                </div>
              ) : (
                row[col.key]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
