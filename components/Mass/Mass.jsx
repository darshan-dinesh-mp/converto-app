import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Mass = () => {
  const [fromValue, setFromValue] = useState(0);
  const [result, setResult] = useState(0);
  const [fromUnit, setFromUnit] = useState("Kilogram");
  const [toUnit, setToUnit] = useState("Gram");

  useEffect(() => {
    if (fromUnit == "Kilogram") {
      if (toUnit == "Kilogram") {
        setResult(fromValue)
      }
      else if (toUnit == "Gram") {
        setResult(parseFloat(fromValue) * 1000)
      }
      else if (toUnit == "Milligram") {
        setResult(parseFloat(fromValue) * 1000000)
      }
      else if (toUnit == "Metric Ton") {
        setResult(parseFloat(fromValue) / 1000)
      }
    }
    if (fromUnit == "Gram") {
      if (toUnit == "Kilogram") {
        setResult(parseFloat(fromValue) / 1000)
      }
      else if (toUnit == "Gram") {
        setResult(fromValue)
      }
      else if (toUnit == "Milligram") {
        setResult(parseFloat(fromValue) * 1000)
      }
      else if (toUnit == "Metric Ton") {
        setResult(parseFloat(fromValue) / 1000000)
      }
    }
    if (fromUnit == "Milligram") {
      if (toUnit == "Kilogram") {
        setResult(parseFloat(fromValue) / 1000000)
      }
      else if (toUnit == "Gram") {
        setResult(parseFloat(fromValue) / 1000)
      }
      else if (toUnit == "Milligram") {
        setResult(fromValue)
      }
      else if (toUnit == "Metric Ton") {
        setResult(parseFloat(fromValue) / 1000000000)
      }
    }
    if (fromUnit == "Metric Ton") {
      if (toUnit == "Kilogram") {
        setResult(parseFloat(fromValue) * 1000)
      }
      else if (toUnit == "Gram") {
        setResult(parseFloat(fromValue) * 1000000)
      }
      else if (toUnit == "Milligram") {
        setResult(parseFloat(fromValue) * 1000000000)
      }
      else if (toUnit == "Metric Ton") {
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
  "Kilogram", "Gram", "Milligram", "Metric Ton"
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

export default Mass;
