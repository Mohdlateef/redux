import React from "react";
import { increase,decrease,reset } from "./redux/actions/counteraction"
import { UseSelector,useDispatch} from "react-redux";

const CounterApp=()=>{


    let dispatch=useDispatch;
    let count=useSelector((state)=>{
        console.log(state);
    })


    return(
        <div>

        </div>
    )
}
export default CounterApp;