import React from 'react';

export default function Button({text, reqType, setReqItem}) {
  return <button className={text === reqType ? "selected" : null} onClick={() => setReqItem(text)}>{text}</button>;
}
