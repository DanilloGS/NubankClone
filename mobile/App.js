import React, { useEffect } from 'react';
import Main from './views/main';
import Login from './views/login'
import { StatusBar } from 'expo-status-bar';

// import { envVariable } from './config';
import { Button, View } from 'react-native';

export default function App() {  

  	return (
    	<>
			<StatusBar style="inverted"/>
			<Login/>
			{/* <Main/> */}
      	</>
  	);
}