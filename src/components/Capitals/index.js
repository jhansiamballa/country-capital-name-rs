import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    capitalName: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    const {capitalName} = this.state
    console.log(capitalName)
    this.setState({capitalName: event.target.value})
    console.log(capitalName)
  }

  onChangeCountry = () => {
    const {capitalName} = this.state
    const activeCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalName,
    )
    return activeCapital.country
  }

  render() {
    const {capitalName} = this.state
    const countryName = this.onChangeCountry(capitalName)
    return (
      <div className="app-container">
        <div className="capital-card">
          <h1>Countries And Capitals</h1>
          <div className="question">
            <select
              id="capitalName"
              value={capitalName}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  value={eachCapital.id}
                  key={eachCapital.id}
                  className="option-1"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-question">is capital of which Country?</p>
          </div>
          <p className="country-name">{countryName}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
