const defaultState = {
	users: [],
	loading: false,
	error: null

}

export default function reducer( state = defaultState, action ){

	switch (action.type){

		case 'FETCH_USERS_REQUESTED':{

			return{
				...state,
				loading: true
			}
		}

		case 'FETCH_USERS_FULFILLED':{

			let arr = [];
			let obj = action.payload;

			for (var key in obj) {
				obj[key].id = key;
				arr.push(obj[key])
			}	

			return{
				...state,
				users: arr,
				loading: false
			}
		}

		case 'FETCH_USERS_REJECTED': {

			return{
				...state,
				loading: false,
				error: action.payload
			}
		}

		default: 
			return state;
	}	
}