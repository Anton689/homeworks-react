export type ThemeType = 'dark' | 'red' | 'some'

const initState = {
    theme: 'some' as ThemeType,
};
// export type initStateType = Array<string>
//const initState: initStateType = ['dark', 'red', 'some'];


export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.theme}
        }
        default:
            return state;
    }
};

export type InitialStateType = typeof initState

const CHANGE_THEME = 'CHANGE_THEME'

export type ActionType = ChangeThemeCType

export const changeThemeC = (theme: ThemeType) => ({type: CHANGE_THEME, theme}); // fix any
type ChangeThemeCType = ReturnType<typeof changeThemeC>