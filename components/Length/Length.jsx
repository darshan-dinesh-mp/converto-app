import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Length = () => {
  const [fromValue, setFromValue] = useState(0);
  const [result, setResult] = useState(0);
  const [fromUnit, setFromUnit] = useState("Square Meters");
  const [toUnit, setToUnit] = useState("Square Kilometers");

  useEffect(() => {
    if (fromUnit === "m") {
      if (toUnit === "m") setResult(fromValue);
      else if (toUnit === "cm") setResult(fromValue * 100);
      else if (toUnit === "km") setResult(fromValue / 1000);
      else if (toUnit === "mm") setResult(fromValue * 1000);
      else if (toUnit === "in") setResult(fromValue * 39.37);
      else if (toUnit === "ft") setResult(fromValue * 3.281);
      else if (toUnit === "yd") setResult(fromValue * 1.094);
      else if (toUnit === "mi") setResult(fromValue / 1609);
      else if (toUnit === "nautical mile") setResult(fromValue / 1852);
    }
    if (fromUnit === "cm") {
      if (toUnit === "cm") setResult(fromValue);
      else if (toUnit === "m") setResult(fromValue / 100);
      else if (toUnit === "km") setResult(fromValue / 100000);
      else if (toUnit === "mm") setResult(fromValue * 10);
      else if (toUnit === "in") setResult(fromValue / 2.54);
      else if (toUnit === "ft") setResult(fromValue / 30.48);
      else if (toUnit === "yd") setResult(fromValue / 91.44);
      else if (toUnit === "mi") setResult(fromValue / 160900);
      else if (toUnit === "nautical mile") setResult(fromValue / 185200);
    }
    if (fromUnit === "km") {
      if (toUnit === "km") setResult(fromValue);
      else if (toUnit === "m") setResult(fromValue * 1000);
      else if (toUnit === "cm") setResult(fromValue * 100000);
      else if (toUnit === "mm") setResult(fromValue * 1000000);
      else if (toUnit === "in") setResult(fromValue * 39370);
      else if (toUnit === "ft") setResult(fromValue * 3281);
      else if (toUnit === "yd") setResult(fromValue * 1094);
      else if (toUnit === "mi") setResult(fromValue / 1.609);
      else if (toUnit === "nautical mile") setResult(fromValue / 1.850);
    }
    if (fromUnit === "mm") {
      if (toUnit === "mm") setResult(fromValue);
      else if (toUnit === "m") setResult(fromValue / 1000);
      else if (toUnit === "cm") setResult(fromValue / 10);
      else if (toUnit === "km") setResult(fromValue * 1000000);
      else if (toUnit === "in") setResult(fromValue / 25.4);
      else if (toUnit === "ft") setResult(fromValue / 304.8);
      else if (toUnit === "yd") setResult(fromValue / 914.4);
      else if (toUnit === "mi") setResult(fromValue / 1609000);
      else if (toUnit === "nautical mile") setResult(fromValue / 1852000);
    }
    if (fromUnit === "in") {
      if (toUnit === "in") setResult(fromValue);
      else if (toUnit === "m") setResult(fromValue / 39.37);
      else if (toUnit === "cm") setResult(fromValue * 2.54);
      else if (toUnit === "km") setResult(fromValue / 39370);
      else if (toUnit === "mm") setResult(fromValue * 25.4);
      else if (toUnit === "ft") setResult(fromValue / 12);
      else if (toUnit === "yd") setResult(fromValue / 36);
      else if (toUnit === "mi") setResult(fromValue / 63360);
      else if (toUnit === "nautical mile") setResult(fromValue / 72910);
    }
    if (fromUnit === "ft") {
      if (toUnit === "ft") setResult(fromValue);
      else if (toUnit === "m") setResult(fromValue / 3.281);
      else if (toUnit === "cm") setResult(fromValue * 30.48);
      else if (toUnit === "km") setResult(fromValue / 3281);
      else if (toUnit === "mm") setResult(fromValue * 304.8);
      else if (toUnit === "in") setResult(fromValue * 12);
      else if (toUnit === "yd") setResult(fromValue / 3);
      else if (toUnit === "mi") setResult(fromValue / 5280);
      else if (toUnit === "nautical mile") setResult(fromValue / 6076);
    }
    if (fromUnit === "yd") {
      if (toUnit === "yd") setResult(fromValue);
      else if (toUnit === "m") setResult(fromValue / 1.094);
      else if (toUnit === "cm") setResult(fromValue * 91.44);
      else if (toUnit === "km") setResult(fromValue / 1094);
      else if (toUnit === "mm") setResult(fromValue * 914.4);
      else if (toUnit === "in") setResult(fromValue * 36);
      else if (toUnit === "ft") setResult(fromValue * 3);
      else if (toUnit === "mi") setResult(fromValue / 1760);
      else if (toUnit === "nautical mile") setResult(fromValue / 2025);
    }
    if (fromUnit === "mi") {
      if (toUnit === "mi") setResult(fromValue);
      else if (toUnit === "m") setResult(fromValue * 1609);
      else if (toUnit === "cm") setResult(fromValue * 160900);
      else if (toUnit === "km") setResult(fromValue * 1.609);
      else if (toUnit === "mm") setResult(fromValue * 1609000);
      else if (toUnit === "in") setResult(fromValue * 63360);
      else if (toUnit === "ft") setResult(fromValue * 5280);
      else if (toUnit === "yd") setResult(fromValue * 1760);
      else if (toUnit === "nautical mile") setResult(fromValue / 1.151);
    }
    if (fromUnit === "nautical mile") {
      if (toUnit === "nautical mile") setResult(fromValue);
      else if (toUnit === "m") setResult(fromValue * 1852);
      else if (toUnit === "cm") setResult(fromValue * 185200);
      else if (toUnit === "km") setResult(fromValue * 1.852);
      else if (toUnit === "mm") setResult(fromValue * 1852000);
      else if (toUnit === "in") setResult(fromValue * 72910);
      else if (toUnit === "ft") setResult(fromValue * 6076);
      else if (toUnit === "yd") setResult(fromValue * 2025);
      else if (toUnit === "mi") setResult(fromValue * 1.151);
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
    <ImageBackground
      source={require('../../assets/pxfuel.jpg')}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
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
    </ImageBackground >
  );
};

const units = [
  "m", "cm", "km", "mm", "in", "ft", "yd", "mi", "nautical mile"
];

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
  },
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
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default Length;
