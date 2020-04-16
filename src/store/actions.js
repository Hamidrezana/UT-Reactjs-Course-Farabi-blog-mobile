export function changeLoginStatus(payload) {
  return {
    type: 'CHANGE_LOGIN_STATUS',
    payload,
  };
}

export function changeUserInfo(payload) {
  return {
    type: 'CHANGE_USER_INFO',
    payload,
  };
}

export function changeAllBlogs(payload) {
  return {
    type: 'CHANGE_ALL_BLOGS',
    payload,
  };
}

export function changeUserBlogs(payload) {
  return {
    type: 'CHANGE_USER_BLOGS',
    payload,
  };
}

export function changeAllBlogsLoading(payload) {
  return {
    type: 'CHANGE_ALL_BLOGS_LOADING',
    payload,
  };
}

export function changeUserBlogsLoading(payload) {
  return {
    type: 'CHANGE_USER_BLOGS_LOADING',
    payload,
  };
}
export function changeLoadAgain() {
  return {
    type: 'CHANGE_LOAD_AGAIN',
  };
}
