import { CLICKED_SONG } from "./actiontype";


export const clickedSong=(song)=>{

    return{
        type:CLICKED_SONG,
        payload:song,
    }

}