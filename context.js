export const initState = {
  main: '',
  sub: '',
  content: 'Home'
}

export const menuList =
{
  menu : ["Home"],
  dropdownMenu : 
    {
      games : ["GuGuDan", "NumberBaseball", "ResponseCheck", "RSP", "Lotto", "TicTacToe"],
      docsExample :["MouseTracker"]
    }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_CONTENT':
      return {
        ...state,
        content: action.content,
        main: action.main,
        sub: action.sub,
      }
    default:
      return state
  }
}