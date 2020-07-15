import React from 'react';
import { View, Animated, Text, TouchableOpacity } from 'react-native';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { MaterialIcons } from '@expo/vector-icons'; 

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
            <View style={styles.NavItem}>
              <MaterialIcons name="help-outline" size={20} color="#FFF" />
              <Text style={styles.NavText}>Me Ajuda</Text>
            </View>
            <View style={styles.NavItem}>
              <MaterialIcons name="person-outline" size={20} color="#FFF" />
              <Text style={styles.NavText}>Perfil</Text>
            </View>
            <View style={styles.NavItem}>
              <MaterialIcons name="credit-card" size={20} color="#FFF" />
              <Text style={styles.NavText}>Configuração da conta</Text>
            </View>
            <View style={styles.NavItem}>
              <MaterialIcons name="smartphone" size={20} color="#FFF" />
              <Text style={styles.NavText}>Configuração do app</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Sair do app</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.ScrollView>
  );
  
}