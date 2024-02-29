/* eslint-disable react/prop-types */
import './TabButton.css';

export default function TabButton({ children }) {
    return (
      <li>
        <button>{children}</button>
      </li>
    );
  }