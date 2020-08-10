import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionTypes";

export const getInputChangeAction = (value)=> ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = ()=> ({
    type: ADD_LIST_ITEM
})

export const getDeleteItemAction = (index)=> ({
    type: DELETE_TODO_ITEM,
    index
})
