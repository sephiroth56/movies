import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { Loader, Backdrop, Info } from './components'


const Details = () => {

    const item = useSelector(state => state.movieItem);

    if (!item) {
        return <Loader />
    }

    return <View style={styles.container}>
        <Backdrop
            item={item}
        />
        <ScrollView>
            <Info
                item={item}
            />
        </ScrollView>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    picture: {
        height: 250,
        resizeMode: 'cover'
    },
    detailContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    title: {
        color: "black",
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 20
    },
    subtitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18
    },
    text: {
        color: "black",
        fontSize: 18,
        marginBottom: 8
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default Details