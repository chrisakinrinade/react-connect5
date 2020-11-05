import React from 'react';
import "./style.css"
import Header from './components/Header'
import Board from './components/Board'
import ContextComposer from './context/ContextComposer'

const App = () => (
        <ContextComposer>
            <div className="app-container">
                <Header/>
                <Board />
            </div>
        </ContextComposer>
)

export default App