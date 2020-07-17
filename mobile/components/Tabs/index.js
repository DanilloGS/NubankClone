import React from 'react';
import { Animated, ScrollView } from 'react-native';
import TabButton from '../UI/TabButton';

import styles from './styles';

export default function Tabs({translateY}) {
	return (
		<Animated.View style={[styles.Container, {
			transform: [{
			translateY: translateY.interpolate({
				inputRange:[0, 380],
				outputRange: [0, 30],
				extrapolate: 'clamp'
			})
			}],
			opacity: translateY.interpolate({
			inputRange: [0, 380],
			outputRange: [1, 0.3],
			extrapolate: 'clamp'
			})
		}]}>
			<ScrollView
			horizontal
			contentContainerStyle={styles.TabContainer}
			showsHorizontalScrollIndicator={false}
			>
				<TabButton title={"Indicar Amigos"} icon={"person-add"}/>
				<TabButton title={"Cobrar"} icon={"chat-bubble-outline"}/>
				<TabButton title={"Depositar"} icon={"arrow-downward"}/>
				<TabButton title={"Transferir"} icon={"arrow-upward"}/>
				<TabButton title={"Bloquear Cartão"} icon={"lock"}/>
			</ScrollView>
		</Animated.View>
	);
}