import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, Animated } from 'react-native';

const LoadingScreen = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const interval = setInterval(() => {
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 600,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                }),
            ]).start();
        }, 1200);

        const timeout = setTimeout(() => {
            navigation.replace('Home');
        }, 50000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigation, fadeAnim]);

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/app_logo_2.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={{ marginBottom: 20, color: 'black' }}>Your All-in-One Unit Conversion App</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                <Text style={{ color: 'black', fontWeight: '500' }}>loading</Text>
                <Image
                    source={require('../assets/loading.gif')}
                    style={styles.gif}
                />
            </View>
            <Text style={{ color: 'gray', fontSize: 10, position: 'absolute', bottom: 0 }}>Made by Darshan</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 500,
        borderWidth: 1,
        borderColor: 'black',
        elevation: 5,
    },
    gif: {
        width: 30,
        height: 30,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '900',
        marginBottom: 10,
        color: 'black'
    },
});

export default LoadingScreen;
