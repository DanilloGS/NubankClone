import React from 'react';
import { View, Animated } from 'react-native';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import Buttons from '../UI/Buttons';
import NavItems from '../UI/NavItems';

import styles from './styles';


export default function Menu(props) {
  return (
	<Animated.ScrollView
		contentContainerStyle={styles.Container}
	>
		<Animated.View style={{
			opacity: props.translateY.interpolate({
			inputRange: [0, 300],
			outputRange: [0, 1]
			}),
			alignItems: 'center',
		}}>
		<View style={styles.QrCode}>
			<QRCode 
			content='https://www.google.com/'
			size={80}
			color='#8B10AE'
			/>
		</View>
		<View style={styles.Nav}>
			<NavItems title ={'Me Ajuda'} icon={'help-outline'}/>
			<NavItems title ={'Perfil'} icon={'person-outline'}/>
			<NavItems title ={'Configuração da conta'} icon={'credit-card'}/>
			<NavItems title ={'Configuração do app'} icon={'smartphone'}/>
		</View>
		<Buttons title={'Sair do App'}/>
		</Animated.View>
	</Animated.ScrollView>
  );
  
}