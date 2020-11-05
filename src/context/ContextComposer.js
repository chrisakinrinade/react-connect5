import React from "react";
import {PlayerProvider} from './PlayerContext'
import {PositionsProvider} from './PositionsContext'

 const ContextComposer = (props) => (
    <PositionsProvider>
        <PlayerProvider>
            {props.children}
        </PlayerProvider>
    </PositionsProvider>
)

export default ContextComposer



