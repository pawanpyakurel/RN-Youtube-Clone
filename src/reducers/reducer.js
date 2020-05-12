

const initialState =[]

const Reducer = (state = initialState, action) =>{
    if(action.type=="add"){
        return action.payload
    }
    return state
}

export default Reducer;
