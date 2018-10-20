import React from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import "./index.css"

/**
 * 我是很普通的判断赢家
 * @param squares
 * @returns {*}
 */
function calculateWinner( squares ) {
    const lines = [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],
        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 5, 8 ],
        [ 0, 4, 8 ],
        [ 2, 4, 6 ],
    ]
    for ( let i = 0; i < lines.length; i++ ) {
        const [ a, b, c ] = lines[ i ]
        if ( squares[ a ] && squares[ a ] === squares[ b ] && squares[ a ] === squares[ c ] ) {
            // return squares[ a ]
            // return [a,b,c]
            return [ squares[ a ], [ a, b, c ] ]
        }
    }
    return null
}


/**
 * my Square!!! 好惨啊 我透我都不是一个class了
 */

class Square extends React.Component {
    constructor() {
        super()
        this.state = {
            component_index: "",
        }
        // let component_index = this.props.component_index
    }

    componentWillMount() {
        this.setState( {
            component_index: this.props.component_index,
        } )
    }

    render() {
        let needClass = false
        if ( this.props.win_array ) {
            let win_array = this.props.win_array[ 0 ]

            if ( win_array ) {
                win_array.findIndex( ( element ) => {
                    // 胜利数组里面有一个值 和本组件的 index相同
                    if ( element === this.state.component_index ) {
                        needClass = true
                    }
                } )
            }
        }

        let btnClass = classnames( {
            "square": true,
            "active": needClass,
        } )

        return (
            <button className={btnClass} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}


/**
 * my drawing board!!!
 * middleware level
 */
class Board extends React.Component {
    // constructor(){
    //     super()
    //
    // }
    //
    renderSquare( i ) {
        return <Square
            value={this.props.squares[ i ]}
            onClick={() => this.props.onClick( i )}
            win_array={this.props.win_array}
            component_index={i}
        />
    }


    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare( 0 )}
                    {this.renderSquare( 1 )}
                    {this.renderSquare( 2 )}
                </div>
                <div className="board-row">
                    {this.renderSquare( 3 )}
                    {this.renderSquare( 4 )}
                    {this.renderSquare( 5 )}
                </div>
                <div className="board-row">
                    {this.renderSquare( 6 )}
                    {this.renderSquare( 7 )}
                    {this.renderSquare( 8 )}
                </div>
            </div>
        )
    }
}


/**
 * main export Project
 */
class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            history: [ {
                squares: Array( 9 ).fill( null )
            } ],
            xIsNext: true,
            stepNumber: 0,
            win_array: null,
            // had_win_before: false
        }
    }

    handleClick( i ) {
        let history = this.state.history.slice( 0, this.state.stepNumber + 1 )
        let current = history[ history.length - 1 ]
        const squares = current.squares.slice()  // 为了浅拷贝

        if ( calculateWinner( squares ) || squares[ i ] ) {
            //  记录获胜的格子形态到state
            // debugger
            // if ( calculateWinner( squares ) ) {
            //     debugger;
            //     this.setState( {
            //         win_Array: calculateWinner( squares )
            //     } )
            // }
            // 获胜 || 格子被下过
            return
        }


        squares[ i ] = this.state.xIsNext ? "X" : "O"
        this.setState( {
            history: history.concat( [ {
                squares,
            } ] ),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        } )
    }

    jumpTo( step ) {
        this.setState( {
            xIsNext: !( step % 2 ),
            stepNumber: step,
            // win_array: null
        } )
    }

    // componentDidUpdate() {
    //     let history = this.state.history
    //     let current = history[ this.state.stepNumber ]
    //     let winner = calculateWinner( current.squares )
    //     // debugger
    //     // 第一次赢的时候渲染
    //     if ( winner && !this.state.had_win_before ) {
    //         // debugger
    //         this.setState( {
    //             win_array: winner.slice( 1, 4 ),
    //             had_win_before: true,
    //         } )
    //     }
    // }

    render() {
        let history = this.state.history
        let current = history[ this.state.stepNumber ]
        let winner = calculateWinner( current.squares )
        let win_array = null;
        // { step } 就是每一个数组对象
        // { move } 就是第几个数组
        let move = history.map( ( step, move ) => {
            const description = move ?
                `move # ${move}` :
                "Game start"
            return (
                <li key={move}>
                    <a href="#" onClick={() => {this.jumpTo( move )}}>{description}</a>
                </li>
            )
        } )

        let status
        if ( winner ) {
            status = "Winnder:" + winner
            // 这里已经胜利的状态
            win_array =  winner.slice( 1, 4 )
        } else {
            status = `Next player: ${this.state.xIsNext ? "X" : "O"}`
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares}
                           onClick={( i ) => this.handleClick( i )}
                           win_array={win_array}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{move}</ol>
                </div>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById( "root" )
)
