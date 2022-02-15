import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar.js';
import ListBox from './components/ListBox.js';
import TableBox from './components/TableBox.js';
import './style.css';

export default function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [items, setItems] = useState([]);
  const [reqType, setReqItem] = useState('users');
  const [isLoading, setIsLoading] = useState('users');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div>
      <h1>Welcome to the 2nd project</h1>
      <NavBar reqType={reqType} setReqItem={setReqItem} />
      {isLoading && (
        <div className="loader-container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {/* {!isLoading && <ListBox items={items} />} */}
      {!isLoading && <TableBox items={items} />}
    </div>
  );
}
