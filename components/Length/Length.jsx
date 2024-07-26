import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles';

const Length = () => {
  const [fromValue, setFromValue] = useState('1');
  const [result, setResult] = useState(0);
  const [fromUnit, setFromUnit] = useState("Kilometers");
  const [toUnit, setToUnit] = useState("Meters");

  useEffect(() => {
    if (fromUnit === "Meters") {
      if (toUnit === "Meters") setResult(fromValue);
      else if (toUnit === "Centimeters") setResult(fromValue * 100);
      else if (toUnit === "Kilometers") setResult(fromValue / 1000);
      else if (toUnit === "Millimeters") setResult(fromValue * 1000);
      else if (toUnit === "Inches") setResult(fromValue * 39.37);
      else if (toUnit === "Feet") setResult(fromValue * 3.281);
      else if (toUnit === "Yards") setResult(fromValue * 1.094);
      else if (toUnit === "Miles") setResult(fromValue / 1609);
      else if (toUnit === "Nautical Miles") setResult(fromValue / 1852);
    }
    if (fromUnit === "Centimeters") {
      if (toUnit === "Centimeters") setResult(fromValue);
      else if (toUnit === "Meters") setResult(fromValue / 100);
      else if (toUnit === "Kilometers") setResult(fromValue / 100000);
      else if (toUnit === "Millimeters") setResult(fromValue * 10);
      else if (toUnit === "Inches") setResult(fromValue / 2.54);
      else if (toUnit === "Feet") setResult(fromValue / 30.48);
      else if (toUnit === "Yards") setResult(fromValue / 91.44);
      else if (toUnit === "Miles") setResult(fromValue / 160900);
      else if (toUnit === "Nautical Miles") setResult(fromValue / 185200);
    }
    if (fromUnit === "Kilometers") {
      if (toUnit === "Kilometers") setResult(fromValue);
      else if (toUnit === "Meters") setResult(fromValue * 1000);
      else if (toUnit === "Centimeters") setResult(fromValue * 100000);
      else if (toUnit === "Millimeters") setResult(fromValue * 1000000);
      else if (toUnit === "Inches") setResult(fromValue * 39370);
      else if (toUnit === "Feet") setResult(fromValue * 3281);
      else if (toUnit === "Yards") setResult(fromValue * 1094);
      else if (toUnit === "Miles") setResult(fromValue / 1.609);
      else if (toUnit === "Nautical Miles") setResult(fromValue / 1.850);
    }
    if (fromUnit === "Millimeters") {
      if (toUnit === "Millimeters") setResult(fromValue);
      else if (toUnit === "Meters") setResult(fromValue / 1000);
      else if (toUnit === "Centimeters") setResult(fromValue / 10);
      else if (toUnit === "Kilometers") setResult(fromValue / 1000000);
      else if (toUnit === "Inches") setResult(fromValue / 25.4);
      else if (toUnit === "Feet") setResult(fromValue / 304.8);
      else if (toUnit === "Yards") setResult(fromValue / 914.4);
      else if (toUnit === "Miles") setResult(fromValue / 1609000);
      else if (toUnit === "Nautical Miles") setResult(fromValue / 1852000);
    }
    if (fromUnit === "Inches") {
      if (toUnit === "Inches") setResult(fromValue);
      else if (toUnit === "Meters") setResult(fromValue / 39.37);
      else if (toUnit === "Centimeters") setResult(fromValue * 2.54);
      else if (toUnit === "Kilometers") setResult(fromValue / 39370);
      else if (toUnit === "Millimeters") setResult(fromValue * 25.4);
      else if (toUnit === "Feet") setResult(fromValue / 12);
      else if (toUnit === "Yards") setResult(fromValue / 36);
      else if (toUnit === "Miles") setResult(fromValue / 63360);
      else if (toUnit === "Nautical Miles") setResult(fromValue / 72910);
    }
    if (fromUnit === "Feet") {
      if (toUnit === "Feet") setResult(fromValue);
      else if (toUnit === "Meters") setResult(fromValue / 3.281);
      else if (toUnit === "Centimeters") setResult(fromValue * 30.48);
      else if (toUnit === "Kilometers") setResult(fromValue / 3281);
      else if (toUnit === "Millimeters") setResult(fromValue * 304.8);
      else if (toUnit === "Inches") setResult(fromValue * 12);
      else if (toUnit === "Yards") setResult(fromValue / 3);
      else if (toUnit === "Miles") setResult(fromValue / 5280);
      else if (toUnit === "Nautical Miles") setResult(fromValue / 6076);
    }
    if (fromUnit === "Yards") {
      if (toUnit === "Yards") setResult(fromValue);
      else if (toUnit === "Meters") setResult(fromValue / 1.094);
      else if (toUnit === "Centimeters") setResult(fromValue * 91.44);
      else if (toUnit === "Kilometers") setResult(fromValue / 1094);
      else if (toUnit === "Millimeters") setResult(fromValue * 914.4);
      else if (toUnit === "Inches") setResult(fromValue * 36);
      else if (toUnit === "Feet") setResult(fromValue * 3);
      else if (toUnit === "Miles") setResult(fromValue / 1760);
      else if (toUnit === "Nautical Miles") setResult(fromValue / 2025);
    }
    if (fromUnit === "Miles") {
      if (toUnit === "Miles") setResult(fromValue);
      else if (toUnit === "Meters") setResult(fromValue * 1609);
      else if (toUnit === "Centimeters") setResult(fromValue * 160900);
      else if (toUnit === "Kilometers") setResult(fromValue * 1.609);
      else if (toUnit === "Millimeters") setResult(fromValue * 1609000);
      else if (toUnit === "Inches") setResult(fromValue * 63360);
      else if (toUnit === "Feet") setResult(fromValue * 5280);
      else if (toUnit === "Yards") setResult(fromValue * 1760);
      else if (toUnit === "Nautical Miles") setResult(fromValue / 1.151);
    }
    if (fromUnit === "Nautical Miles") {
      if (toUnit === "Nautical Miles") setResult(fromValue);
      else if (toUnit === "Meters") setResult(fromValue * 1852);
      else if (toUnit === "Centimeters") setResult(fromValue * 185200);
      else if (toUnit === "Kilometers") setResult(fromValue * 1.852);
      else if (toUnit === "Millimeters") setResult(fromValue * 1852000);
      else if (toUnit === "Inches") setResult(fromValue * 72910);
      else if (toUnit === "Feet") setResult(fromValue * 6076);
      else if (toUnit === "Yards") setResult(fromValue * 2025);
      else if (toUnit === "Miles") setResult(fromValue * 1.151);
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
  "Meters", "Centimeters", "Kilometers", "Millimeters", "Inches", "Feet", "Yards", "Miles", "Nautical Miles"
];

export default Length;
