import {UserType} from '../HW8';

const sortActionCreatorUp = () => ({type: 'sort', payload: 'up'}) as const
const sortActionCreatorDown = () => ({type: 'sort', payload: 'down'}) as const
const checkActionCreator = () => ({type: 'check', payload: 18}) as const

export type SortActionCreatorTypeUp = ReturnType<typeof sortActionCreatorUp>
export type SortActionCreatorTypeDown = ReturnType<typeof sortActionCreatorDown>
export type CheckActionCreator = ReturnType<typeof checkActionCreator>

export type ActionsType = SortActionCreatorTypeUp | CheckActionCreator | SortActionCreatorTypeDown

let age = 18

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort' : {
            let newState = [...state]
            // need to fix
            return action.payload === 'up' ? newState.sort((a, b) => a.name > b.name ? 1 : -1)
                : action.payload === 'down' ? newState.sort((a, b) => a.name < b.name ? 1 : -1)
                    : newState
        }
        case 'check': {
            let newState = [...state]
            // need to fix
            return action.payload === age ? newState.filter(u => u.age >= age) : newState
        }
        default:
            return state
    }
}