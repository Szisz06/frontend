import React from "react";

const TableHead = (props) => {
  const { visibleKeys } = props;

  return (
    <thead>
      <tr>
        {visibleKeys.map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;