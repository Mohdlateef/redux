import { CLICKED_SONG } from "../actions/actiontype";



let intialstate=null
const movieReducer=(state=intialstate,action)=>{
    if(action.type==CLICKED_SONG){
        return action.payload;
    }

    else{
        return state;
    }

}


export default movieReducer;