import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 在 React 掛載前立即套用主題，避免 FOUC（Flash of Unstyled Content）
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
} else {
    document.documentElement.removeAttribute('data-theme');
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
