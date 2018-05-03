const unsplash = (state = {}, action) => {
    switch (action.type) {
        case 'SET_UNSPLASH':
            return action.object;
        default:
            return state;
    }
}

export default unsplash;