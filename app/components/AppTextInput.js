import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, ...props }) => {
    return (
        <View style={styles.container} >
            {icon && <MaterialCommunityIcons name={icon} size={25} color={defaultStyles.colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...props} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        flexDirection: 'row',
        width: '100%',
        borderRadius: 25,
        padding: 15,
        marginVertical: 10
    },

    icon: {
        marginRight: 10,
        alignSelf: 'center'
    }
})
