import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import BlogCard from '../components/BlogCard';
import Loading from '../components/Loading';

function HomeScreen({navigation}) {
  const allBlogs = useSelector(state => state.Blog.allBlogs);
  const loading = useSelector(state => state.Blog.allBlogsLoading);
  return loading ? (
    <Loading />
  ) : (
    <FlatList
      data={allBlogs}
      renderItem={({item}) => <BlogCard blog={item} fromHome />}
      keyExtractor={blog => blog.id.toString()}
    />
  );
}

export default HomeScreen;
