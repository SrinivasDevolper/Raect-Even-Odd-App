import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  incrementBtn = () => {
    const random = Math.floor(Math.random() * 100)
    this.setState(() => ({count: random}))
  }

  render() {
    const {count} = this.state
    let evenOrOdd
    if (count % 2 === 0) {
      evenOrOdd = 'Even'
    } else {
      evenOrOdd = 'Odd'
    }
    return (
      <div className="bg-container">
        <div>
          <h1 className="count-para">Count {count}</h1>
          <p>Count is {evenOrOdd}</p>
          <button type="button" onClick={this.incrementBtn}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
