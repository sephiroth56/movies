import React from 'react';
import { View, Text, StyleSheet, } from 'react-native'
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const Info = ({item:{ title, release_date, vote_average, runtime, overview, genres }}) => {


    return (<View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Duración:</Text>
        <Text style={styles.text}>{runtime} min.</Text>
        <Text style={styles.subtitle}>Fecha de estreno:</Text>
        <Text style={styles.text}>{moment(release_date).format("DD MMMM yyyy")}</Text>
        <Text style={styles.subtitle}>Calificación:</Text>
        <Text style={styles.text}>{vote_average}</Text>
        <Text style={styles.subtitle}>Generos:</Text>
        <Text style={styles.text}>{genres?.map(gender => gender.name)?.toString()}</Text>
        <Text style={styles.subtitle}>Descripción:</Text>
        <Text style={styles.text}>{overview}</Text>
    </View>)
}
const styles = StyleSheet.create({
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
})

export default Info