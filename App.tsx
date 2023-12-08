/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import NativeCalculatorApp from './tm/NativeCalculatorApp';

const App = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    if (x !== '' && y !== '') {
      const sum = NativeCalculatorApp.add(parseFloat(x), parseFloat(y))
      setResult(`Addition Result: ${sum}`)
    } else {
      setResult('Please enter numbers in both fields')
    }
  }

  const handleSubtraction = () => {
    if (x !== '' && y !== '') {
      const diff = NativeCalculatorApp.sub(parseFloat(x), parseFloat(y))
      setResult(`Subtraction Result: ${diff}`);
    } else {
      setResult('Please enter numbers in both fields');
    }
  }

  const handleMultiplication = () => {
    if (x !== '' && y !== '') {
      const prod = NativeCalculatorApp.mul(parseFloat(x), parseFloat(y))
      setResult(`Multiplication Result: ${prod}`);
    } else {
      setResult('Please enter numbers in both fields');
    }
  }

  const handleDivision = () => {
    if (x !== '' && y !== '') {
      const quot = NativeCalculatorApp.div(parseFloat(x), parseFloat(y))
      setResult(`Division Result: ${quot}`);
    } else {
      setResult('Please enter numbers in both fields');
    }
  }

  const handleTheAnswer = () => {
    const answer = NativeCalculatorApp.the_answer();
    setResult(`The answer to Life, The Universe, and Everything is: ${answer}`)
  }


  // Similarly, you can implement functions for multiplication and division

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        value={x}
        onChangeText={(text) => setX(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        value={y}
        onChangeText={(text) => setY(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAddition} />
        <Button title="Subtract" onPress={handleSubtraction} />
        <Button title="Multiply" onPress={handleMultiplication} />
        <Button title="Divide" onPress={handleDivision} />
        <Button title="The Answer" onPress={handleTheAnswer} />
      </View>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App

