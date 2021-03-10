import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { IMAGE_PATH } from '../../utils/constants'
import Loader from './components/Loader'
import moment from 'moment';

moment.locale('es');

const Details = ({ navigation }) => {

    const item = useSelector(state => state.movieItem);

    const renderMovie = ({ backdrop_path, title, release_date, vote_average, runtime, overview, genres }) => {
        console.log(item)
        return (<View style={styles.container}>
            <Image
                style={styles.picture}
                source={{ uri: IMAGE_PATH + backdrop_path }}>
            </Image>
            <ScrollView>
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>Duración:</Text>
                    <Text style={styles.text}>{runtime} min.</Text>
                    <Text style={styles.subtitle}>Fecha de estreno:</Text>
                    <Text style={styles.text}>{moment(release_date).format("DD MMMM yyyy")}</Text>
                    <Text style={styles.subtitle}>Calificación:</Text>
                    <Text style={styles.text}>{vote_average}</Text>
                    <Text style={styles.subtitle}>Generos:</Text>
                    <Text style={styles.text}>{genres.map(gender => gender.name).toString()}</Text>
                    <Text style={styles.subtitle}>Descripción:</Text>
                    <Text style={styles.text}>{overview}</Text>
                </View>
            </ScrollView>
        </View>)
    };
    if (!item) {
        return <Loader />
    }
    return <View style={styles.container}>

        {renderMovie(item)}
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