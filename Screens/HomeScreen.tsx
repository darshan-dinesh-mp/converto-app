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
            <View>

                <Picker
                    selectedValue={optionValue}
                    onValueChange={changeOption}
                    style={styles.picker}
                >
                    {units.map(unit => (
                        <Picker.Item key={unit} label={unit} value={unit} />
                    ))}
                </Picker>
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
        justifyContent: 'center',
    },
    picker: {
        color: 'white',
        backgroundColor: 'brown',
        width: '50%',
        borderRadius: 50,
    },
});

export default HomeScreen