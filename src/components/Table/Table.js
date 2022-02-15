import React from "react";
import "./table.css";
function Table({ data }) {
  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr>
            <th className="table-row" scope="col">
              Country
            </th>
            <th className="table-row" scope="col">
              Author
            </th>
            <th className="table-row" scope="col">
              Title
            </th>
            <th className="table-row" scope="col">
              Language
            </th>
            <th className="table-row" scope="col">
              Pages
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr className={index % 2 == 0 ? "white" : "primary"} key={index}>
                <td>{value.country}</td>
                <td>{value.author}</td>
                <td>{value.title}</td>
                <td>{value.language}</td>
                <td>{value.pages}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
