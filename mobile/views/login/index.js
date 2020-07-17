import React from 'react';
import { View, TextInput, Image } from 'react-native';
import Buttons from '../../components/UI/Buttons';
import logo from '../../assets/Nubank_Logo.png';

import styles from './styles';

export default function Login() {
    return (
        <View style={styles.Container}>
            <Image 
                source={logo}
                style={styles.Logo}
            />
            <TextInput
                style={styles.TextInput}
                placeholder='CPF'
                maxLength={14}
                keyboardType='numeric'
            />
            <Buttons title={'Login'}/>
            <Buttons title={'Cadastro'}/>
        </View>
    );
}