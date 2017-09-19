import {
	EMPLOYEES_FETCH_SUCCESS
}	from '../actions/types';

const INITICAL_SATATE = {};


export default (state = INITICAL_SATATE, action) => {
	switch (action.type){
		case EMPLOYEES_FETCH_SUCCESS:
			return action.payload;
		default:
			return state;	
	}
}