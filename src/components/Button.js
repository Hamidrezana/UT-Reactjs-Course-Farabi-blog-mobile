import React from 'react';
import {Button as RButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';

function Button(props) {
  return (
    <RButton
      {...props}
      disabled={props.loading}
      style={[styles.btn, props.style]}
      mode="contained">
      {props.text}
    </RButton>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 150,
    alignSelf: 'center',
  },
});

export default Button;
