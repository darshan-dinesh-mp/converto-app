import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles';

const Temperature = () => {
  const [fromValue, setFromValue] = useState('0');
  const [result, setResult] = useState(0);
  const [fromUnit, setFromUnit] = useState("Degree Celcius");
  const [toUnit, setToUnit] = useState("Fahrenheit");

  useEffect(() => {
    if (fromUnit == "Degree Celcius") {
      if (toUnit == "Degree Celcius") {
        setResult(parseFloat(fromValue))
      }
      else if (toUnit == "Fahrenheit") {
        setResult(parseFloat((fromValue) * 9 / 5) + 32)
      }
      else if (toUnit == "Kelvin") {
        setResult(parseFloat(fromValue) + 273.15)
      }
    }
    if (fromUnit == "Fahrenheit") {
      if (toUnit == "Fahrenheit") {
        setResult(fromValue)
      }
      else if (toUnit == "Degree Celcius") {
        setResult((parseFloat(fromValue) - 32) * 5 / 9)
      }
      else if (toUnit == "Kelvin") {
        setResult(((parseFloat(fromValue) - 32) * 5 / 9) + 273.15)
      }
    }
    if (fromUnit == "Kelvin") {
      if (toUnit == "Kelvin") {
        setResult(fromValue)
      }
      else if (toUnit == "Fahrenheit") {
        setResult(((parseFloat(fromValue) - 273.15) * 9 / 5) + 32)
      }
      else if (toUnit == "Degree Celcius") {
        setResult(parseFloat(fromValue) - 273.15)
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
          style={[styles.input, styles.resultInput]}
        />
      </View>
    </View>
  );
};

const units = [
  "Degree Celcius", "Fahrenheit", "Kelvin"
];

export default Temperature;
