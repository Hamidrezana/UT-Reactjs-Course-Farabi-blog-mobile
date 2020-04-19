import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

function UserBlogsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>UserBlogsScreen</Text>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('AddBlog')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: '#3f51b5',
    margin: 10,
    bottom: 0,
    right: 0,
  },
});

export default UserBlogsScreen;
