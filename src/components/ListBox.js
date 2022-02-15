import React from 'react';

export default function ListBox({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
}
