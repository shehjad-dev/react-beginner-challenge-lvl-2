import React from 'react';
import Button from './Button.js';

export default function NavBar({reqType, setReqItem}) {
  return (
    <div className="NavBar">
      <Button text="users" reqType={reqType} setReqItem={setReqItem}/>
      <Button text="posts" reqType={reqType} setReqItem={setReqItem}/>
      <Button text="comments" reqType={reqType} setReqItem={setReqItem}/>
    </div>
  );
}
