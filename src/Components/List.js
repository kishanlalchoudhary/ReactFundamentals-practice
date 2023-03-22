import React from "react";

export default function List({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            {item.title} | {item.content}
          </li>
        );
      })}
    </ul>
  );
}
