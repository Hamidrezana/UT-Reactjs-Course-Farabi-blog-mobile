import React from 'react';
import Strings from '../utils/Strings';
import {TextInput, HelperText} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

function Input(props) {
  return (
    <View style={styles.container}>
      <TextInput
        onBlur={props.onBlur}
        onChangeText={val => props.onChange(val)}
        label={Strings.formText[props.name]}
        style={styles.input}
        keyboardType={props.type ? props.type : 'default'}
        {...props}
      />
      <HelperText
        type="error"
        visible={props.error ? true : false}
        style={styles.errorText}>
        {props.error}
      </HelperText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    width: 300,
    alignSelf: 'center',
  },
  errorText: {
    width: 300,
    alignSelf: 'center',
  },
});

export default Input;
