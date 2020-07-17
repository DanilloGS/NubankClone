import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';

export default function NavItem({icon, title}) {
    return (
        <View style={styles.NavItem}>
            <MaterialIcons name={icon} size={20} color="#FFF" />
            <Text style={styles.NavText}>{title}</Text>
        </View>
    );
}