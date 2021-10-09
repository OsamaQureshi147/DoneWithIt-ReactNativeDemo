import React, { useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ImageInput from './ImageInput'

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    const scrollViewRef = useRef();

    return (
        <View>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
            >
                <View style={styles.container}>
                    {imageUris.map(uri =>
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    )}
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ImageInputList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 10
    }
})
