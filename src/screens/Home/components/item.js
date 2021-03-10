import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, } from 'react-native'
import { IMAGE_PATH } from '../../../utils/constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

const item = ({ goToItemDetails,item:{poster_path, backdrop_path,title, release_date, vote_average,id } }) => {

    return (<TouchableOpacity style={styles.item}
        key={id}
        onPress={()=>goToItemDetails(id)}>
        <ImageBackground
            imageStyle={styles.imageRadius}
            style={styles.poster}
            source={{ uri: IMAGE_PATH + poster_path }}>
            <View style={styles.footerTitle}>
                <Text numberOfLines={2} style={styles.text}>{title}</Text>
                <View style={styles.row}>
                    <Text style={styles.text}>{release_date}</Text>
                    <View style={styles.row}>
                        <Icon name={"star-border"} color="yellow" size={18}></Icon>
                        <Text style={styles.text}>{vote_average}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </TouchableOpacity>)
}
const styles = StyleSheet.create({
   
    item: {
        margin: 4,
        flex: 1 / 2,
    },
    imageRadius: {
        borderRadius: 8
    },
    poster: {
        height: 300,
        resizeMode: 'contain'
    },
    footerTitle: {
        width: "100%",
        padding: 10,
        height: 80,
        backgroundColor: "#000000a3",
        position: "absolute",
        bottom: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: "space-between"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default item