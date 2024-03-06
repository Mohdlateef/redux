import { INCRESE } from "./actiontype"



export const increase=()=>{
    return{
        type:INCRESE,
    }
}
export const decrease=()=>{
    return{
        type:DECREASE
    }
}
 export const reset=()=>{
    return{
        type:RESET,
    }
 }