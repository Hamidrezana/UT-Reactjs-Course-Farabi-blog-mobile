import React, {useEffect} from 'react';
import {Text} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeAllBlogs,
  changeUserBlogs,
  changeAllBlogsLoading,
  changeUserBlogsLoading,
} from '../store/actions';
import {getPosts, getUserPosts} from '../apis';
import HomeScreen from '../screens/Home';
import BlogScreen from '../screens/Blog';

const Stack = createStackNavigator();

function MainApp() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.User.isAuthenticated);
  const loadAgain = useSelector(state => state.Blog.loadAgain);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(changeAllBlogsLoading(true));
      getPosts()
        .then(response => {
          if (response.data.success) {
            dispatch(changeAllBlogs(response.data.message));
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() =>
          setTimeout(() => dispatch(changeAllBlogsLoading(false)), 1000),
        );
      dispatch(changeUserBlogsLoading(true));
      getUserPosts()
        .then(response => {
          if (response.data.success) {
            dispatch(changeUserBlogs(response.data.message));
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() =>
          setTimeout(() => dispatch(changeUserBlogsLoading(false)), 1000),
        );
    }
  }, [isAuthenticated, loadAgain]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3f51b5',
        },
        headerTitleStyle: {
          color: '#fff',
          fontFamily: 'Vazir-FD-WOL',
          fontSize: 16,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'بلاگ فارابی'}}
      />
      <Stack.Screen name="Blog" component={BlogScreen} />
    </Stack.Navigator>
  );
}

export default MainApp;
