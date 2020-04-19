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
  return <DrawerStack />;
}

export default MainApp;
