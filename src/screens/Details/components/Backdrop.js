import React from 'react';
import { StyleSheet, Image, } from 'react-native'
import { IMAGE_PATH } from '../../../utils/constants'


const Backdrop = ({ item: { backdrop_path } }) => {
    return (<Image
        style={styles.picture}
        source={{ uri: `${IMAGE_PATH}${backdrop_path}` }}>
    </Image>)
}

const styles = StyleSheet.create({
    picture: {
        height: 250,
        resizeMode: 'cover'
    },
})

export default Backdrop