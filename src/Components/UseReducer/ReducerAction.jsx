export default function ReducerAction(state,action){
    
    console.log(state);
    console.log(action);

    switch (action.type) {
        case 'AddByTen':{
            return state + action.payload
        }
        case 'SubByTen':{
            
                return state -action.payload 
            }
        
            case 'Add':{
                return state + 1
            }
            case 'Sub':{
                
                    return state -1
        }    
        default:{
            return state
        }
           
    }
}