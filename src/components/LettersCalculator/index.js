// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, input: ''}

  onSearch = event => {
    const len = event.target.value.length
    const india = event.target.value
    this.setState({count: len})
    this.setState({input: india})
    console.log(len)
  }

  render() {
    const {input, count} = this.state

    return (
      <div className="app-container">
        <div>
          <h1 className="heading">Calculate the letters you enter </h1>
          <div>
            <label htmlFor="input">Enter the Phrase</label>
            <input
              className="input-el"
              id="input"
              type="text"
              onChange={this.onSearch}
              value={input}
            />
          </div>
          <p className="letters">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
