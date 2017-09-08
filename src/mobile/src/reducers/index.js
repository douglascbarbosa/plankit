import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
// import LibraryReducer from './LibraryReducer';
// import SelectionReducer from './SelectionReducer';

// export default combineReducers({
// 	libraries: LibraryReducer,
// 	selectedLibraryId: SelectionReducer
// })

export default combineReducers({
	auth: AuthReducer
})