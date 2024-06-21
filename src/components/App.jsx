import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userData from "./UserData.json";
import Profile from "./Profile.jsx"
import FriendList from './FriendList.jsx';
import friends from "./friends.json";
import "modern-normalize";
import TransactionHistory from './TransactionHistory.jsx';
import transactions from "./transactions.json";
export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};