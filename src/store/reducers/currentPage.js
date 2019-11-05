
export default  (currentPage = 1, action) => {
    console.log(action)
  return action.type == 'RECEIVE_PAGINATION' ? action.payload : currentPage
}