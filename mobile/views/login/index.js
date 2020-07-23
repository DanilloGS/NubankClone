import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import Buttons from '../../components/UI/Buttons';
import logo from '../../assets/Nubank_Logo.png';
import api from '../../services/api';

import styles from './styles';

export default function Login() {
    const [cpf, setCpf] = useState('');

    const login = async () => {
        try {
            const response = await api.get('/users/05338733129');
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.Container}>
            <Image 
                source={logo}
                style={styles.Logo}
            />
            <TextInput
                style={styles.TextInput}
                placeholder='CPF'
                maxLength={11}
                keyboardType='numeric'
                onChange={textonInput => setCpf(textonInput)}
            />
            <Buttons title={'Login'} onPress={login}/>
            <Buttons title={'Cadastro'}/>
        </View>
    );
}