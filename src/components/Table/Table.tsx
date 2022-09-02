import React, { ComponentPropsWithRef, CSSProperties } from "react";

import "./Table.css";

interface TableInterface extends ComponentPropsWithRef<"table"> {
  height?: number | string;
  headers: any[];
  rows: any[][];
  stripped?: boolean;
  strippedColumns?: boolean;
  hovered?:boolean,
  bordered?:boolean,
}

const Table = ({ headers, rows, stripped, strippedColumns, hovered, bordered, children }: TableInterface) => {
  //   if (height) {
  //     const className: CSSProperties = { height: height, overflowY: "auto" };

  //     return (
  //       <div style={className}>

  //       </div>
  //     );
  //   }
  const className = `table 
                    ${stripped ? "stripped" : ''}
                    ${strippedColumns? "stripped-columns":''}
                    ${hovered ? 'hovered' : ''}
                    ${bordered? 'bordered': ''}`;

  return (
    <table className={className}>
      {headers ? (
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
      ) : null}
      {rows ? (
        <tbody>
          {rows.map((row) => {
            return (
              <tr>
                {row.map((cell) => {
                  return <td>{cell}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      ) : null}
    </table>
  );
};

export default Table;
