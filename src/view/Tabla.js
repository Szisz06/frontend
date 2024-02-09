import React from "react";
import Sor from "./Sor";

export default function Tabla(props) {
  const { obj } = props; 

  const hiddenKeys = ["created_at", "updated_at"];

  const visibleKeys = obj && obj[0] ? Object.keys(obj[0]).filter(
    (key) => !hiddenKeys.includes(key)
  ) : [];

  function kattintas(){
    console.log(props.obj.auto_id)
  
    props.kattintas(props.obj.auto_id)
}

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {visibleKeys.map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <Sor obj= {obj} kattintas={kattintas}  visibleKeys={visibleKeys} />
      </tbody>
    </table>
  );
};
