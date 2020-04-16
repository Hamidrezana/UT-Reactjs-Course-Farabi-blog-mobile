const USER_INITIAL_STATE = {
    isLogin: false,
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
    }
}
export default function userReducer(state = USER_INITIAL_STATE, action) {
    switch(action.type) {
        case 'CHANGE_LOGIN_STATUS':
            return Object.assign({}, state, {
                isLogin: action.payload
            })
        case 'CHANGE_USER_INFO':
            return Object.assign({}, state, {
                userInfo: action.payload
            })
        default:
            return state;
    }
}