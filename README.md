# Odin Protocol UI

Welcome to the Odin Protocol UI project repository. This project is a user interface for the Odin Protocol, developed using Next.js, a React framework that enables server-side rendering and static site generation. This repository includes the necessary code to set up and run the Odin Protocol UI.

## Overview

The Odin Protocol UI is designed to provide users with a seamless and intuitive experience when interacting with the Odin Protocol. This UI offers various features to help users manage and monitor their interactions with the protocol effectively.

## Features

- **User Dashboard**: View your current status and activity within the Odin Protocol.
- **Transaction Management**: Easily manage and track your transactions.
- **Protocol Interactions**: Interact with the Odin Protocol directly from the UI.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Framework**: Next.js
- **Frontend**: React, HTML, CSS, JavaScript
- **State Management**: Redux
- **API Interaction**: Axios
- **Styling**: Tailwind CSS
- **Database**: SQLite3

## Installation and Setup

### Prerequisites

- Node.js
- npm (Node Package Manager) or yarn

### Steps

1. **Clone the Repository**

    `git clone https://github.com/NagiPragalathan/odin_protocol_UI.git
    cd odin_protocol_UI` 
    
2. **Install Dependencies**
    
    Using npm:
    
    `npm install` 
    
    Using yarn:
    
    `yarn install` 
    
3. **Run the Development Server**
    
    Using npm:
    
    `npm run dev` 
    
    Using yarn:
    
    `yarn dev` 
    
    Open your browser and navigate to `http://localhost:3000` to see the UI.
    

## Project Structure

`odin_protocol_UI/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Dashboard.js
│   ├── TransactionList.js
│   └── ProtocolInteraction.js
├── pages/
│   ├── index.js
│   ├── dashboard.js
│   └── transactions.js
├── public/
│   ├── favicon.ico
│   └── logo.png
├── styles/
│   ├── Home.module.css
│   └── globals.css
├── .gitignore
├── package.json
└── README.md` 

## Components

### Header.js

`import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/transactions">Transactions</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;` 

### Footer.js

`const Footer = () => (
  <footer>
    <p>&copy; 2024 Odin Protocol UI</p>
  </footer>
);

export default Footer;` 

### Dashboard.js

`const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard.</p>
  </div>
);

export default Dashboard;` 

### TransactionList.js

`const TransactionList = () => (
  <div>
    <h1>Transactions</h1>
    <p>List of your transactions.</p>
  </div>
);

export default TransactionList;` 

### ProtocolInteraction.js

`const ProtocolInteraction = () => (
  <div>
    <h1>Interact with Odin Protocol</h1>
    <p>Manage your protocol interactions here.</p>
  </div>
);

export default ProtocolInteraction;` 

## Pages

### index.js

`import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to Odin Protocol UI</h1>
        <p>This is the home page.</p>
      </div>
    </Layout>
  );
}` 

### dashboard.js

`import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}` 

### transactions.js

`import Layout from '../components/Layout';
import TransactionList from '../components/TransactionList';

export default function TransactionsPage() {
  return (
    <Layout>
      <TransactionList />
    </Layout>
  );
}` 

## Styles

### globals.css

`body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f0f0f0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

nav ul {
  display: flex;
  gap: 1rem;
}` 

### Home.module.css

`.container {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #0070f3;
}

p {
  color: #333;
}` 

## License

This project is licensed under the MIT License. See the LICENSE file for details.
