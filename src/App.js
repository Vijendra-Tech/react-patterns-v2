import React from 'react';
import './style.css';
import User from './components/User';
import { withUser } from './HOC/withUser';

const UserWrappedComp = withUser(User, '2');

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserWrappedComp />
    </div>
  );
}
