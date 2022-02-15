export type InitStateType = {
    isLoading: boolean
}

const initState: InitStateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case SET_LOADING_STATUS: {
            return {...state, isLoading : action.isLoadingValue}
        }
        default: return state
    }
}

const SET_LOADING_STATUS = 'SET_LOADING_STATUS'

export type ActionType= LoadingACType

export type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoadingValue: boolean) => ({type: SET_LOADING_STATUS, isLoadingValue: isLoadingValue}) // fix any