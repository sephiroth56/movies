import React from 'react';
import { StyleSheet, ActivityIndicator, View,Text } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"}/>
            <Text style={styles.text}>Cargando información..</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        marginTop:20,
        fontSize:18
    }
});

export default Loader