const defaultState = {
    inputValue : '123',
    list: ['1','2','3']
}
export default (state =defaultState,action)=>{
    if (action.type === 'input_value_change'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState;
    }
    if(action.type === 'add_list_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState;
    }
    return state;
}
