import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import BlogCard from '../components/BlogCard';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Loading from '../components/Loading';

function UserBlogsScreen({navigation}) {
  const userBlogs = useSelector(state => state.Blog.userBlogs);
  const loading = useSelector(state => state.Blog.userBlogsLoading);

  return loading ? (
    <Loading />
  ) : (
    <View style={{flex: 1}}>
      <FlatList
        data={userBlogs}
        renderItem={({item}) => <BlogCard blog={item} />}
        keyExtractor={blog => blog.id.toString()}
      />
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
