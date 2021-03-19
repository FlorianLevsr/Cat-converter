import React from 'react';

import Header from '../Header';
import Choices from '../Choices';
import Amount from '../Amount';
import Toggler from '../Toggler'

import './style.scss';

import data from '../../data/objects';

class App extends React.Component {

  state = {
    open: true,
    baseAmount: 1,
    measure: 'chats',
    object: {
      name: '',
      height: '',
      rate: 0,
      comment: ''
    }
  };

  toggle = () => {

    const { open, object } = this.state;

    if (object) {
      this.setState({ open: !open });
    }

  };

  setSelectedObject = (selectedObject) => {

    this.setState({ object: selectedObject, baseAmount: 1 });

  };

  setBaseAmount = (operation) => {

    const { baseAmount } = this.state;

    if (operation === '+') {

      this.setState({ baseAmount: baseAmount + 1 });

    };

    if (operation === '-' && baseAmount > 0) {

      this.setState({ baseAmount: baseAmount - 1 });

    };

  };

  render() {

    const { open, baseAmount, measure, object } = this.state;

    return (

      <div className="app">

        <Header amount={baseAmount} amountName={object.name} onButtonClick={this.setBaseAmount} />

        <Toggler open={open} toggle={this.toggle} />

        {open && <Choices list={data} onObjectClick={this.setSelectedObject} />}

        { object.rate ? <Amount value={baseAmount * object.rate} currency={measure} comment={object.comment} /> : <Amount />}

      </div>

    );

  }

}

export default App;
