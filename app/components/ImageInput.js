import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import Icon from './Icon';
import colors from '../config/colors';

const ImageInput = ({ imageUri, onChangeImage }) => {

    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) alert('You need to enable permissions to access the library')
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert("Delete", "Are you sure you want to delete?", [
            { text: "Yes", onPress: () => onChangeImage(null) },
            { text: "No" }
        ])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!result.cancelled) onChangeImage(result.uri)
        } catch (error) {
            console.log("Error picking up an image", error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress} >
            <View style={styles.container}>
                {
                    imageUri ?
                        <Image source={{ uri: imageUri }} style={styles.image} />
                        :
                        <Icon name="camera" size={80} iconColor={colors.mediumGray} backgroundColor={colors.lightGray} />
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        borderRadius: 20,
        height: 120,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 120,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})




// import React, { useState, Fragment } from 'react';
// import { StyleSheet, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import colors from '../config/colors';
// import Icon from './Icon';
// import AppText from './AppText';
// import AppButton from './AppButton';



// const ImageInput = () => {
//     const [imageUri, setImageUri] = useState([]);
//     const [modalVisible, setModalVisible] = useState(false);
//     const [currentDelIndex, setCurrentDelIndex] = useState();

//     const selectImage = async () => {
//         if (imageUri.length >= 5)
//             return alert("Cannot select more than 5 images");
//         try {
//             const result = await ImagePicker.launchImageLibraryAsync()
//             if (!result.cancelled) {
//                 imageUri.push(result.uri)
//                 setImageUri([...imageUri])
//             }
//         } catch (error) {
//             console.log("Error picking up an image", error)
//         }
//     }

//     const imagePressHandler = (index) => {
//         setModalVisible(true);
//         setCurrentDelIndex(index);
//     }

//     const deleteImage = () => {
//         imageUri.splice(currentDelIndex, 1);
//         setImageUri(imageUri);
//         setModalVisible(false);
//     }
//     return (
//         <>
//             <ScrollView horizontal style={styles.container}>
//                 {
//                     imageUri.length > 0 &&
//                     imageUri.map((uri, index) => (
//                         <TouchableOpacity key={index} onPress={() => imagePressHandler(index)}>
//                             <Image source={{ uri }} style={styles.imageContainer} />
//                         </TouchableOpacity>
//                     ))
//                 }
//                 <TouchableOpacity style={styles.imageContainer} onPress={selectImage}>
//                     <Icon name="camera" size={100} iconColor={colors.mediumGray} backgroundColor={colors.lightGray} />
//                 </TouchableOpacity>
//             </ScrollView>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={styles.centeredView}>
//                     <View style={styles.modalContainer}>
//                         <AppText style={styles.modalText}>Are you sure you want to delete this picture?</AppText>
//                         <AppButton title="Delete" onPress={deleteImage} />
//                         <AppButton title="Cancel" color="secondary" onPress={() => setModalVisible(false)} />
//                     </View>
//                 </View>
//             </Modal>
//         </>
//     )
// }

// export default ImageInput

// const styles = StyleSheet.create({
//     imageContainer: {
//         width: 125,
//         height: 125,
//         backgroundColor: colors.lightGray,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 30,
//         marginVertical: 10,
//         marginHorizontal: 5
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     modalContainer: {
//         backgroundColor: colors.lightGray,
//         width: 300,
//         height: 250,
//         borderRadius: 40,
//         padding: 15,
//     },
//     modalText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     }
// })
