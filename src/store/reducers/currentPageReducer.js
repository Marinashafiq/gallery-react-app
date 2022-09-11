
export default function currentPageReducer (currentPage = 1, action) {
  return action.type === 'REQUEST_PAGINATION' ? action.payload : currentPage
}