// this is an action creator
// it creates the action object

export const selectUser = (user) => {
  console.log('you clicked ', user.first)
  // this returns the action creator

  // action w/ type and payload
  return {
    type: 'USER_SELECTED', // this is the action
    payload: user
  }
}
