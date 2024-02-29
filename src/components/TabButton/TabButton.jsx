/* eslint-disable react/prop-types */
import './TabButton.css';

export default function TabButton({ children }) {
    function handleClick() {
      console.log('Hello World!');
    }
  
    return (
      <li>
        <button onClick={handleClick}>{children}</button>
      </li>
    );
  }