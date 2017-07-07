export function changeLocalUserName(name) {
  return {
    type: 'CHANGE_LOCAL_USER_NAME',
    localUserName: name
  }
}

export function changeDatabaseUserName(name) {
  return {
    type: 'CHANGE_DATABASE_USER_NAME',
    databaseUserName: name
  }
}