import React from "react";
import TableRow from "./TableRow";

export default function Tabla(props) {
  const { obj, kattintas } = props;

  const hiddenKeys = ["created_at", "updated_at"];

  const visibleKeys =
    obj && obj[0]
      ? Object.keys(obj[0]).filter((key) => !hiddenKeys.includes(key))
      : [];

  function handleKattintas(id, action) {
    console.log(id);
    kattintas(id, action);
  }

  return (
    <table className="table table-striped" style={{ marginTop: "50px" }}>
      <thead>
        <tr>
          {visibleKeys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>

      <TableRow
        obj={obj}
        kattintas={handleKattintas}
        visibleKeys={visibleKeys}
      />
    </table>
  );
}
