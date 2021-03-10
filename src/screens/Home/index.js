import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, RefreshControl } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { setMovieList, setItem } from '../../actions'
import { getMovieList, getMovieDetails } from '../../utils/api'
import { IMAGE_PATH } from '../../utils/constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Home = ({ navigation }) => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.movieList);

    const keyExtractor = item => item.id;

    const goToItemDetails = async id => {
        console.log("id", id)

        let details = await getMovieDetails(id)
        console.log("DETALLES", details)
        dispatch(setItem(details))
        navigation.navigate('Details');
    }
    const renderItem = ({ item }) => {
        const { poster_path, title, release_date, vote_average } = item
        return (<TouchableOpacity style={styles.item}
            onPress={() => goToItemDetails(item.id)}>
            <ImageBackground
                imageStyle={styles.imageRadius}
                style={styles.poster}
                source={{ uri: IMAGE_PATH + poster_path }}>
                <View style={styles.footerTitle}>
                    <Text style={styles.text}>{title}</Text>
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
    };
    fetchList = async () => {
        let data = await getMovieList()
        dispatch(setMovieList(data))
        setRefreshing(false)
    }



    useEffect(() => {
        fetchList()
    }, [])
    const [refreshing, setRefreshing] = useState(true)
    return <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            numColumns={2}
            style={styles.list}
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                    setRefreshing(true)
                    setTimeout(() => {
                        fetchList()
                    }, 1500);
                }} />}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
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

export default Home