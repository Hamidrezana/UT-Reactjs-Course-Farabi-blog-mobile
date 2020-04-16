import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {
  changeAllBlogs,
  changeUserBlogs,
  changeAllBlogsLoading,
  changeUserBlogsLoading,
} from '../store/actions';
import {getPosts, getUserPosts} from '../apis';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.User.isLogin,
    loadAgain: state.Blog.loadAgain,
  };
};

const mapDispatchToProps = {
  changeAllBlogs,
  changeUserBlogs,
  changeAllBlogsLoading,
  changeUserBlogsLoading,
};

function MainApp(props) {
  useEffect(() => {
    if (props.isAuthenticated) {
      props.changeAllBlogsLoading(true);
      getPosts()
        .then(response => {
          if (response.data.success) {
            props.changeAllBlogs(response.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() =>
          setTimeout(() => props.changeAllBlogsLoading(false), 1000),
        );
      props.changeUserBlogsLoading(true);
      getUserPosts()
        .then(response => {
          if (response.data.success) {
            props.changeUserBlogs(response.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() =>
          setTimeout(() => props.changeUserBlogsLoading(false), 1000),
        );
    }
  }, [props.isAuthenticated, props.loadAgain]);
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#3f51b5" barStyle="light-content" />
    </React.Fragment>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainApp);
