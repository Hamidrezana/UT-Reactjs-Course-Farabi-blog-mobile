import React, {useState, useEffect} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {Snackbar} from 'react-native-paper';

function Container(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(props.message ? true : false);
  }, [props.message]);
  return (
    <ScrollView
      contentContainerStyle={props.ccStyle}
      keyboardShouldPersistTaps="handled">
      {props.fromAuth ? (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      ) : null}
      {props.children}
      {props.message ? (
        <Snackbar
          style={{
            backgroundColor: props.message.type === 'error' ? 'red' : 'green',
          }}
          visible={visible}
          onDismiss={() => setVisible(false)}>
          {props.message ? props.message.message : null}
        </Snackbar>
      ) : null}
    </ScrollView>
  );
}

export default Container;
