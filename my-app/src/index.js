import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={{backgroundColor:props.color}}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {

    // Determine if current square is a winning square
    let color = "#FFFFFF" // White
    if (this.props.winningSquares) {
        if (this.props.winningSquares.includes(i)) {
            color = "#FF0000"; // Red
        }
    }
    return (
        <Square
            color={color}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    )
  }

  render() {
      let rows = []
      for (let i = 0; i < 3; i++) {
          let cols = []
          for (let j = 0; j < 3; j++) {
              cols.push(this.renderSquare(i*3+j))
          }
          rows.push(<div className="board-row">{cols}</div>);
      }

      return (<div>{rows}</div>);
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
          history: history.concat([{
            squares: squares,
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
      });
    }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winningSquares = calculateWinner(current.squares); //Grab winning squares
    const winner = winningSquares ? current.squares[winningSquares[0]] : null; // If winning squares, who is winner

    const moves = history.map((step, move) => {
      let desc = move ?
        'Go to move #' + move + ' ' + getColRow(history, move):
        'Go to game start';

      if (this.state.stepNumber === move) {
          desc = (<b>{desc}</b>);
      }

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            winningSquares={winningSquares}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function getColRow(history, move) {
      const resultList = [
        "(1, 1)",
        "(2, 1)",
        "(3, 1)",
        "(1, 2)",
        "(2, 2)",
        "(3, 2)",
        "(1, 3)",
        "(2, 3)",
        "(3, 3)",
      ];
    const current = history[move].squares
    const last    = history[move-1].squares
    let result = ""
    for (let i = 0; i < current.length; i++) {
        if (current[i] !== last[i]) {
            result = resultList[i]
            break
        }
    }
    return result
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c]; // Return winning squares
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
