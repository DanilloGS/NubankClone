import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';

export default function TabButton({icon, title}) {
    return (
        <TouchableOpacity style={styles.TabItem}>
            <MaterialIcons name={icon} size={20} color="#FFF"/>
            <Text style={styles.TabText}>{title}</Text>
        </TouchableOpacity>
    );
}