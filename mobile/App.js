import React from 'react';
import Main from './views/main';
import Login from './views/login'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
      <>
        <StatusBar style="inverted"/>
        <Login/>
        {/* <Main/> */}
      </>
  );
}