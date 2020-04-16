const USER_INITIAL_STATE = {
  allBlogs: [],
  userBlogs: [],
  allBlogsLoading: false,
  userBlogsLoading: false,
  loadAgain: false,
};
export default function blogReducer(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_ALL_BLOGS':
      return Object.assign({}, state, {
        allBlogs: action.payload,
      });
    case 'CHANGE_USER_BLOGS':
      return Object.assign({}, state, {
        userBlogs: action.payload,
      });
    case 'CHANGE_ALL_BLOGS_LOADING':
      return Object.assign({}, state, {
        allBlogsLoading: action.payload,
      });
    case 'CHANGE_USER_BLOGS_LOADING':
      return Object.assign({}, state, {
        userBlogsLoading: action.payload,
      });
    case 'CHANGE_LOAD_AGAIN':
      return Object.assign({}, state, {
        loadAgain: !state.loadAgain,
      });
    default:
      return state;
  }
}
