import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.result = 0;
  }

  render() {
    return (
      <div>
        {this.result}
      </div>
    );
  }
}

export default Display;
