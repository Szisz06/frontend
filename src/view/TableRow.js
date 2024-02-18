import React from "react";

export default function TableRow(props) {
  const { obj, kattintas, visibleKeys } = props;

  return (
    <tbody>
      {obj.map((item, index) => (
        <tr key={index}>
          {visibleKeys.map((key) => (
            <td key={key}>
              {key !== "price" ? item[key] : `${item[key]}$`}
            </td>
          ))}
          <td>
            <button
              className="btn btn-warning mx-3 modify"
              onClick={() => kattintas(item.auto_id, "modify")}
              style={{ marginLeft: "100px" }}
            >
              Modify
            </button>
            <button
              className="btn btn-danger mx3 delete"
              onClick={() => kattintas(item.auto_id, "delete")}
              style={{ marginLeft: "100px" }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
