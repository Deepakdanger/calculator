import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.appClick = this.appClick.bind(this);
  }

  appClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const result = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  };

  render() {
    const { total } = this.state;
    return (
      <>
        <Display total={total} />
        <ButtonPanel appClick={this.appClick} />
      </>
    );
  }
}

export default App;
