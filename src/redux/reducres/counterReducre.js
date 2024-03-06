import { INCRESE,DECREASE,RESET } from "../actions/actiontype";

let intialstate=0
const counterReducer=(state=intialstate,action)=>{


    if(action.type==INCRESE){
        return state+1;
    }
    else if(action.type==DECREASE){
        return state-1;
    }
    else if(action.type==RESET){
        return 0;
    }
    else{
        return state;
    }

}


export default counterReducer;
