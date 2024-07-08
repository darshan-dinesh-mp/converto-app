import { Animated, ImageBackground, Linking, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Area from '../components/Area/Area'
import Length from '../components/Length/Length'
import Temperature from '../components/Temperature/Temperature'
import Speed from '../components/Speed/Speed'
import Volume from '../components/Volume/Volume'
import Mass from '../components/Mass/Mass'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleQuestion, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const HomeScreen = () => {
    const [optionValue, setOptionValue] = useState("Length")
    const [contact, setContact] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;

    const changeOption = (itemValue: string) => {
        setOptionValue(itemValue);
    };

    useEffect(() => {
        if (contact) {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [contact, opacity]);

    return (
        <ImageBackground
            source={require('../assets/pxfuel.jpg')}
            style={styles.imageBackground}
        >
            <View style={{ padding: 30, backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={optionValue}
                        onValueChange={changeOption}
                        style={styles.picker}
                    >
                        {units.map(unit => (
                            <Picker.Item key={unit} label={unit} value={unit} />
                        ))}
                    </Picker>
                </View>
                {optionValue == "Length" ? <Length /> : ''}
                {optionValue == "Temperature" ? <Temperature /> : ''}
                {optionValue == "Speed" ? <Speed /> : ''}
                {optionValue == "Volume" ? <Volume /> : ''}
                {optionValue == "Mass" ? <Mass /> : ''}
                {optionValue == "Area" ? <Area /> : ''}
            </View>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => setContact(!contact)}
            >
                <FontAwesomeIcon icon={faCircleQuestion} size={40} color="white" />
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={contact}
                animationType="none"
                onRequestClose={() => setContact(false)}
            >
                <TouchableWithoutFeedback onPress={() => setContact(false)}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <Animated.View style={[styles.modalContent, { opacity }]}>
                                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <TouchableOpacity style={{}} onPress={() => setContact(false)}>
                                        <FontAwesomeIcon icon={faXmark} size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                                    <Text style={styles.modalTitle}>Hello! I am Darshan</Text>
                                    <Text style={styles.modalText}>For any questions, feedback, or support, you can reach out to me on </Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                                        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/darshan-dinesh-mp')}>
                                            <FontAwesomeIcon icon={faGithub} size={26} color="black" />
                                            {/* <Text style={{ fontWeight: '500', textDecorationLine: 'underline', color: 'darkblue' }} onPress={() => Linking.openURL('https://github.com/nu23mca28')}>GitHub</Text> */}
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/darshan-dinesh-mp')}>
                                            <FontAwesomeIcon icon={faLinkedin} size={26} color="black" />
                                            {/* <Text style={{ fontWeight: '500', textDecorationLine: 'underline', color: 'darkblue' }} onPress={() => Linking.openURL('www.linkedin.com/in/darshan-dinesh-mp')}>LinkedIn</Text> */}
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[styles.modalText, { marginTop: 10 }]}>Thank you for using <Text style={{ fontWeight: '500' }}>ConverTo!</Text></Text>
                                </View>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback >
            </Modal >
        </ImageBackground>
    )
}

const units = [
    'Area',
    'Length',
    'Volume',
    'Mass',
    'Temperature',
    'Speed',
];

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerContainer: {
        width: '50%',
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
    picker: {
        color: 'white',
        backgroundColor: 'darkred',
    },
    fab: {
        position: 'absolute',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 20,
        backgroundColor: '#22223B',
        borderRadius: 30,
        elevation: 8,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    modalText: {
        fontSize: 14,
        marginVertical: 10,
        textAlign: 'center',
        color: 'black',
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreen