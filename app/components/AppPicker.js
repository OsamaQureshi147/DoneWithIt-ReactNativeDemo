import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText';
import PickerItem from './PickerItem';

const AppPicker = ({ icon, onSelectItem, items, placeholder, selectedItem }) => {

    const [modalVisible, setModalVisible] = useState(false)


    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container} >
                    {
                        icon && <MaterialCommunityIcons
                            name={icon}
                            size={25}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    }
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={25}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide" >
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            key={item.value}
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                />
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        flexDirection: 'row',
        width: '100%',
        borderRadius: 25,
        padding: 15,
        marginVertical: 10
    },
    text: {
        flex: 1
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center'
    }
})
