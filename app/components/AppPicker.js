import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText';
import PickerItem from './PickerItem';
import colors from '../config/colors';


const AppPicker = ({
    icon,
    onSelectItem,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem,
    items,
    placeholder,
    selectedItem,
}) => {

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
                    {
                        selectedItem ?
                            (<AppText style={styles.text}>{selectedItem.label}</AppText>)
                            :
                            (<AppText style={styles.placeholder}>{placeholder}</AppText>)
                    }
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={25}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide" >
                <Button color={colors.primary} title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) =>
                        <PickerItemComponent
                            item={item}
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
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium
    },
    text: {
        flex: 1
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center'
    }
})
