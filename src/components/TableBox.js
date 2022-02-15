import React from 'react';
import Row from './Row.js';

export default function TableBox({ items }) {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
