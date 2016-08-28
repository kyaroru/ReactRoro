// @flow
import React, { Component } from 'react'
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';
import '../../styles.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activated: false,
    };
  }

  componentDidMount() {
    // this.setTimeout(()=>{
    //   this.setState({
    //     activated: true
    //   });
    // }, 3000);
  }

  render() {
    return (
      <div>
        {
          !this.state.activated &&
          <div className="loader-container">
            <div className="loader">
              <span>H</span><span>i</span>
            </div>
          </div>
        }
        {
          this.state.activated &&
          <div className="container">
            Welcome xDD
          </div>
        }
      </div>
    );
  }

}

reactMixin(App.prototype, TimerMixin);
