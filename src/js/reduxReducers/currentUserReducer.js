const defaultState = {
	avatar: null,
	closedTasks: null,
	currentTask: null,
	name: null,
	openTasks: null,
	timeFinished: null,
	timeStart: null,
	loading: false,
	error: null

}

export default function reducer( state = defaultState, action ){

	switch (action.type){

		case 'FETCH_USER_DATA_REQUESTED': {
			return {
				...state,
				loading: true
			}
		}

		case 'FETCH_USER_DATA_FULFILLED': {
			return {
				...state,
				loading: false,
				avatar: action.payload['avatar'],
				closedTasks: action.payload['closed-tasks'],
				currentTask: action.payload['current-task'],
				name: action.payload['name'],
				openTasks: action.payload['open-tasks'],
				timeFinished: action.payload['time-finnished'],
				timeStart: action.payload['time-start']
			}
		}

		case 'FETCH_USER_DATA_REJECTED': {
			return {
				...state,
				loading: false,
				error: action.payload
			}
		}

		default: 
			return state;
	}	
}