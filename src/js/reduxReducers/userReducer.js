const defaultState = {
	userName: 'Przemek'

}

export default function reducer( state = defaultState, action ){

	switch (action.type){

		case 'CHANGE_USERNAME':{

			return{
				...state,
				userName: action.userName
			}
		}

		default: 
			return state;
	}	
}