import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Area = () => {
    const [fromValue, setFromValue] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [fromUnit, setFromUnit] = useState<string>("Square Meters");
    const [toUnit, setToUnit] = useState<string>("Square Kilometers");

    useEffect(() => {
        if (fromUnit == "Square Millimeters") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue / 100)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue / 1000000)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue / 1000000000000)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue / 645.2)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue / 92900)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue / 836100)
            }
            else if (toUnit == "Square Miles") {
                setResult(fromValue / 2590000000000)
            }
        }
        if (fromUnit == "Square Centimeters") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue * 100)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue / 10000)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue / 10000000000)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue / 6.452)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue / 929)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue / 8361)
            }
            else if (toUnit == "Square Miles") {
                setResult(fromValue / 25900000000)
            }
        }
        if (fromUnit == "Square Meters") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue * 1000000)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue * 10000)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue / 1000000)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue * 1550)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue * 10.764)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue * 1.196)
            }
            else if (toUnit == "Square Miles") {
                setResult(fromValue / 2590000)
            }
        }
        if (fromUnit == "Square Kilometers") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue * 1000000000000)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue * 10000000000)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue * 1000000)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue * 1550000000)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue * 10760000)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue * 1196000)
            }
            else if (toUnit == "Square Miles") {
                setResult(fromValue / 2.59)
            }
        }
        if (fromUnit == "Square Inches") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue * 645.2)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue * 6.452)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue / 1550)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue / 1550000000)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue / 144)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue / 1296)
            }
            else if (toUnit == "Square Miles") {
                setResult(fromValue / 4014000000)
            }
        }
        if (fromUnit == "Square Feet") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue * 92900)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue * 929)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue / 10.764)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue / 10760000)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue * 144)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue / 9)
            }
            else if (toUnit == "Square Miles") {
                setResult(fromValue / 27880000)
            }
        }
        if (fromUnit == "Square Yards") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue * 836100)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue * 8361)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue / 1.196)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue / 1196000)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue * 1296)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue * 9)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Miles") {
                setResult(fromValue / 3098000)
            }
        }
        if (fromUnit == "Square Miles") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue * 2590000000000)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue * 25900000000)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue * 2590000)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue * 2.59)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue * 4014000000)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue * 27880000)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue * 3098000)
            }
            else if (toUnit == "Square Miles") {
                setResult(fromValue)
            }
        }
        return () => {
        }
    }, [fromValue, fromUnit, toUnit]);

    const changeFromUnit = (itemValue: string) => {
        setFromUnit(itemValue);
    };

    const changeToUnit = (itemValue: string) => {
        setToUnit(itemValue);
    };

    const changeFromValue = (text: string) => {
        const value = parseFloat(text);
        setFromValue(value);
    };

    return (
        <View>
            <View style={styles.inpurContainer}>
                <Picker
                    selectedValue={fromUnit}
                    onValueChange={changeFromUnit}
                    style={styles.picker}
                >
                    {units.map(unit => (
                        <Picker.Item key={unit} label={unit} value={unit} />
                    ))}
                </Picker>
                <TextInput
                    value={fromValue}
                    onChangeText={changeFromValue}
                    placeholder="Enter value"
                    keyboardType="numeric"
                    style={styles.input}
                />
            </View>
            <FontAwesomeIcon icon={faArrowRight} style={styles.icon} size={32} color="white" />
            <View style={styles.inpurContainer}>
                <Picker
                    selectedValue={toUnit}
                    onValueChange={changeToUnit}
                    style={styles.picker}
                >
                    {units.map(unit => (
                        <Picker.Item key={unit} label={unit} value={unit} />
                    ))}
                </Picker>
                <TextInput
                    value={result !== null ? result.toString() : ''}
                    editable={false}
                    placeholder="Result"
                    style={styles.input}
                />
            </View>
        </View>
    );
};

const units = [
    'Square Millimeters',
    'Square Centimeters',
    'Square Meters',
    'Square Kilometers',
    'Square Inches',
    'Square Feet',
    'Square Yards',
    'Square Miles',
];

const styles = StyleSheet.create({
    inpurContainer: {
        width: '100%',
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
    },
    picker: {
        color: 'black',
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 0.5,
        padding: 10,
        color: 'black',
    },
    resultInput: {
        color: 'black',
    },
    icon: {
        marginVertical: 20,
        transform: [{ rotate: '90deg' }],
        alignSelf: 'center'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
});

export default Area;