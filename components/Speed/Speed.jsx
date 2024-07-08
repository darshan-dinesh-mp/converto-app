import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles';

const Speed = () => {
  const [fromValue, setFromValue] = useState('1');
  const [result, setResult] = useState(0);
  const [fromUnit, setFromUnit] = useState("Kilometer per hour");
  const [toUnit, setToUnit] = useState("Meter per second");

  useEffect(() => {
    if (fromUnit == "Meter per second") {
      if (toUnit == "Meter per second") {
        setResult(fromValue)
      }
      else if (toUnit == "Kilometer per hour") {
        setResult(parseFloat((fromValue)) * 3.6)
      }
      else if (toUnit == "Mile per hour") {
        setResult(parseFloat(fromValue) * 2.237)
      }
      else if (toUnit == "Foot per second") {
        setResult(parseFloat(fromValue) * 3.281)
      }
      else if (toUnit == "Knots") {
        setResult(parseFloat(fromValue) * 1.944)
      }
    }
    if (fromUnit == "Kilometer per hour") {
      if (toUnit == "Meter per second") {
        setResult(parseFloat(fromValue) / 3.6)
      }
      else if (toUnit == "Kilometer per hour") {
        setResult(fromValue)
      }
      else if (toUnit == "Mile per hour") {
        setResult(parseFloat(fromValue) / 1.609)
      }
      else if (toUnit == "Foot per second") {
        setResult(parseFloat(fromValue) / 1.097)
      }
      else if (toUnit == "Knots") {
        setResult(parseFloat(fromValue) / 1.852)
      }
    }
    if (fromUnit == "Mile per hour") {
      if (toUnit == "Meter per second") {
        setResult(parseFloat(fromValue) / 2.237)
      }
      else if (toUnit == "Kilometer per hour") {
        setResult(parseFloat((fromValue)) * 1.609)
      }
      else if (toUnit == "Mile per hour") {
        setResult(fromValue)
      }
      else if (toUnit == "Foot per second") {
        setResult(parseFloat(fromValue) * 1.467)
      }
      else if (toUnit == "Knots") {
        setResult(parseFloat(fromValue) / 1.151)
      }
    }
    if (fromUnit == "Foot per second") {
      if (toUnit == "Meter per second") {
        setResult(parseFloat(fromValue) / 3.281)
      }
      else if (toUnit == "Kilometer per hour") {
        setResult(parseFloat((fromValue)) * 1.097)
      }
      else if (toUnit == "Mile per hour") {
        setResult(parseFloat(fromValue) / 1.467)
      }
      else if (toUnit == "Foot per second") {
        setResult(fromValue)
      }
      else if (toUnit == "Knots") {
        setResult(parseFloat(fromValue) / 1.688)
      }
    }
    if (fromUnit == "Knots") {
      if (toUnit == "Meter per second") {
        setResult(parseFloat(fromValue) / 1.944)
      }
      else if (toUnit == "Kilometer per hour") {
        setResult(parseFloat((fromValue)) * 1.852)
      }
      else if (toUnit == "Mile per hour") {
        setResult(parseFloat(fromValue) * 1.151)
      }
      else if (toUnit == "Foot per second") {
        setResult(parseFloat(fromValue) * 1.688)
      }
      else if (toUnit == "Knots") {
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
          style={[styles.input, styles.resultInput]}
        />
      </View>
    </View>
  );
};

const units = [
  'Meter per second',
  'Kilometer per hour',
  'Mile per hour',
  'Foot per second',
  'Knots'
];

export default Speed;