export default function ReducerAction(state,action){
    
    console.log(state);
    console.log(action);

    switch (action.type) {
        case 'AddByTen':{
            return state + action.payload
        }
        case 'SubByTen':{
            if(state>0  ){
                if(action.type!=='SubByTen'  ){
                    return 0 
                }
                 if(action.type==='SubByTen'  && state>=10){
                    //alert("Click Minus Button")
                    return state - action.payload
                }
                else{
                    return state
                }
            }
            else{
                return state 
            }
        }
            case 'Add':{
                return state + 1
            }
            case 'Sub':{
                if(state>0){
                    return state -1
                }
                else{
                    return state 
                }
            
        }    
        case 'reset':{
            return 0
        }
        default:{
            return state
        }
           
    }
}