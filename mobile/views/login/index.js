import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import Buttons from '../../components/UI/Buttons';
import logo from '../../assets/Nubank_Logo.png';
import { login } from '../../services/User';
import styles from './styles';

export default function Login() {
    const [cpf, setCpf] = useState('');

    const loginOnApp = async() => {
        const user = await login(cpf);
        if(user.status) {
            console.log('Foi');
        }
        else
        console.log("Não foi");
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
                onChange={textonInput => setCpf(textonInput.nativeEvent.text)}
            />
            <Buttons title={'Login'} onPress={loginOnApp}/>
            <Buttons title={'Cadastro'}/>
        </View>
    );
}