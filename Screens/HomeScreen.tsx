import { ImageBackground, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Area from '../components/Area/Area'
import Length from '../components/Length/Length'
import Temperature from '../components/Temperature/Temperature'
import Speed from '../components/Speed/Speed'
import Volume from '../components/Volume/Volume'
import Mass from '../components/Mass/Mass'

const HomeScreen = () => {
    const [optionValue, setOptionValue] = useState("Length")

    const changeOption = (itemValue: string) => {
        setOptionValue(itemValue);
    };

    return (

        <ImageBackground
            source={require('../assets/pxfuel.jpg')}
            style={styles.imageBackground}
        >
            <View style={{ padding: 20, backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
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
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
    },
    picker: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
});

export default HomeScreen