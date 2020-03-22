const SET_PROJECT_META = 'projectTitle/SET_PROJECT_META';

// we are initializing to a blank string instead of an actual title,
// because it would be hard to localize here
const initialState = {
    author: '',
    intro: ''
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_PROJECT_META:
        return action.meta;
    default:
        return state;
    }
};
const setProjectMeta = meta => ({
    type: SET_PROJECT_META,
    meta: meta
});

export {
    reducer as default,
    initialState as projectMetaInitialState,
    setProjectMeta
};
