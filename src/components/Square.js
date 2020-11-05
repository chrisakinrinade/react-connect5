import React, {memo} from 'react';


 const Square = ({x,y,player, clickHandler}) => {

    const classList = `square ${player === 0 ? "square-nottaken" : player === 1 ? "square-taken-1" : "square-taken-2"}`

     const onClick = () => {
         if(player === 0) {
            clickHandler(x,y)
         }
     }


    return (
        <div className={classList}  onClick={onClick}>
        </div>
    )
}


export default memo(Square)

