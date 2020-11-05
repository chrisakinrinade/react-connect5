import React, {useState} from "react";
import {BOARD_SIZE_X,BOARD_SIZE_Y} from '../constants'

export const PositionsContext = React.createContext()

export const PositionsProvider = (props) => {

    const boardY = Array(BOARD_SIZE_Y).fill(null)
    const boardX = Array(BOARD_SIZE_X).fill(0)
    const boardXY = boardY.map(() => [...boardX])


    const [board, setBoard] = useState(boardXY);

    return (
        <PositionsContext.Provider value={[board, setBoard]}>
            {props.children}
        </PositionsContext.Provider>
    )
}
