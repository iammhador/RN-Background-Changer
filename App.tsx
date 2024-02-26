import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [randomColor, setRandomColor] = useState<string>('#ffffff');

  const generateRandomColor = () => {
    const hexNumber = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += hexNumber[Math.floor(Math.random() * 16)];
    }

    setRandomColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={'#BED1CF'} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={generateRandomColor}>
          <View style={styles.PrimaryButton}>
            <Text style={styles.PrimaryButtonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  PrimaryButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#BED1CF',
  },
  PrimaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    color: '#E78895',
  },
});
