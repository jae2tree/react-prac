export const initState = {
  main: '',
  sub: '',
  content: 'home'
}

export const menuList =
{
  indexMenu : "Temp1",
  menu : ["Temp1", "Temp2"],
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