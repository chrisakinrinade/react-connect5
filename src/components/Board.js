import React, {useCallback,useContext, useState} from 'react';

import Square from './Square'
import {PlayerContext} from '../context/PlayerContext';
import {PositionsContext} from '../context/PositionsContext'

const Board = () => {


    const [player, setPlayer] = useContext(PlayerContext)
    const [board, setBoard] = useContext(PositionsContext)

    const clickHandler = useCallback((x,y) => {
        let board_copy = [...board]
        board_copy[y][x] = player;
        setBoard(board_copy)
        console.log(board)
        setPlayer(player === 1 ? 2 : 1)
        console.log(player)
    },[])


   return(
    <div className="board-container">
        <div className="board">
            {board.map((y, iY) => (
                <div className="board-row" key={iY}>
                    {
                        y.map((x, iX) => (
                            <Square x={iX} y={iY} key={`${iY}:${iX}`} player={x} clickHandler={clickHandler}/>
                        ))
                    }
                </div>
            ))}
        </div>
    </div>
   )
}

export default Board
