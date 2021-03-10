import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, RefreshControl } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { setMovieList, setItem ,setMoreMovieList} from '../../actions'
import { getMovieList, getMovieDetails, getMovieImagesDetails } from '../../utils/api'
import {ItemList} from './components'

const Home = ({ navigation }) => {

    const dispatch = useDispatch(),
    
    data = useSelector(state => state.movieList),

    goToItemDetails = async item => {
        console.log("ITEM",item)
        let details = await getMovieDetails(item.id)
        await getMovieImagesDetails(item.backdrop_path)
        dispatch(setItem(details))
        navigation.navigate('Details');
    },

    fetchList = async () => {
        let data = await getMovieList(1)
        dispatch(setMovieList(data))
        setRefreshing(false)
    },

    onScrollEnd=async () =>{
        let numberOfPage =pageNumber+1
        setPageNumber(numberOfPage)
        let data = await getMovieList(numberOfPage)
        dispatch(setMoreMovieList(data))
    },

    onRefresh = () =>{
        setPageNumber(1)
        setRefreshing(true)
        setTimeout(() => {
            fetchList()
        }, 1000);
    },

    [refreshing, setRefreshing] = useState(true) ,

    [pageNumber, setPageNumber] = useState(1)


    useEffect(() => {
        fetchList()
    }, [])
    
    return <View style={styles.container}>
        <ItemList
            data={data}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onScrollEnd={onScrollEnd}
            goToItemDetails={goToItemDetails}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
})

export default Home