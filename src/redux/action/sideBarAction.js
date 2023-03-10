export const toggleSideBar = (value)=>{
    return async (dispatch) => {

        dispatch({ type: 'set', sidebarShow: value }
        )
        }
}