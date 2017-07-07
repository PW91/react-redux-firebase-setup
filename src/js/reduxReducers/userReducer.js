const defaultState = {
	localUserName: 'Przemek',
	databaseUserName: 'Zbyszek'

}

export default function reducer( state = defaultState, action ){

	switch (action.type){

		case 'CHANGE_LOCAL_USER_NAME':{

			return{
				...state,
				localUserName: action.localUserName
			}
		}

		case 'CHANGE_DATABASE_USER_NAME':{

			return{
				...state,
				databaseUserName: action.databaseUserName
			}
		}

		default: 
			return state;
	}	
}