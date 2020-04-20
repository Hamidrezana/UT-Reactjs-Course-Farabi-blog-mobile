import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeAllBlogs,
  changeUserBlogs,
  changeAllBlogsLoading,
  changeUserBlogsLoading,
} from '../store/actions';
import {getPosts, getUserPosts} from '../apis';
import DrawerStack from '../stacks/DrawerStack';
import AuthStack from '../stacks/AuthStack';

function MainApp() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.User.isLogin);
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
  return isAuthenticated ? <DrawerStack /> : <AuthStack />;
}

export default MainApp;
