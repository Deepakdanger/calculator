import React from 'react';
import Button from './Button';
import Display from './Display';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ['AC','+/-','%','/','7','8','9','X','4','5','6','-',
      '1','2','3','+','0','.','='],
      result: ['0',null,null,null,null,null,null,null,null,null,null,null,null],
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleClick(i) {
    const result = this.state.result.slice();
    if (this.state.count < 9) {
      result[this.state.count] = this.state.squares[i];
      this.setState({count: this.state.count+1});
    }
    this.setState({result: result});
  }

  renderButton(i) {
    return (
      <Button
        value = {this.state.squares[i]}
        onClick = {() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <Display data = {this.state.result} />
        <div className="board-row">
          {this.renderButton(0)}
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
        </div>
        <div className="board-row">
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton(7)}
        </div>
        <div className="board-row">
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton(10)}
          {this.renderButton(11)}
        </div>
        <div className="board-row">
          {this.renderButton(12)}
          {this.renderButton(13)}
          {this.renderButton(14)}
          {this.renderButton(15)}
        </div>
        <div className="board-row">
          {this.renderButton(16)}
          {this.renderButton(17)}
          {this.renderButton(18)}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
