import React from 'react'
import { connect } from 'react-redux'
import { calculateTriangle } from './actions'

class TriangleValueInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideA: '',
      sideB: '',
      sideC: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    const {name, value} = e.target

    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.dispatch(calculateTriangle(this.state))
  }

  render() {
    return (
      <div>
        <h2>Triangle Values</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Side a:
            <input type="text" name="sideA" value={this.state.sideA} onChange={this.handleChange} />
          </label><br />
          <label>
            Side b:
            <input type="text" name="sideB" value={this.state.sideB} onChange={this.handleChange} />
          </label><br />
          <label>
            Side c:
            <input type="text" name="sideC" value={this.state.sideC} onChange={this.handleChange} />
          </label><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
TriangleValueInputs = connect()(TriangleValueInputs)

export default TriangleValueInputs
