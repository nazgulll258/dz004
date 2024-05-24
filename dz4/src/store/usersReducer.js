const defaultState = {
	user: {
		name: '',
		age: '',
		gender: ''
	},
	profile: '' 
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADDUSER':
            return {
                ...state,
                user: {
                    ...state.user,
                ...action.payload
                }
            };
        default:
            return state;
    }
};

export default usersReducer;
