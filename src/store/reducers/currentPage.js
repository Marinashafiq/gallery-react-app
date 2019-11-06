
export default  (currentPage = 1, action) => {
    console.log(action)
  return action.type == 'REQUEST_PAGINATION' ? action.payload : currentPage
}