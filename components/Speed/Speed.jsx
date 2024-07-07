import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Speed = () => {
  const [fromValue, setFromValue] = useState(0);
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
  'Meter per second',
  'Kilometer per hour',
  'Mile per hour',
  'Foot per second',
  'Knots'
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

export default Speed;