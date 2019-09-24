import React from 'react'
import { connect } from 'react-redux'

let TriangleOutput = ({ triangleType }) => {
  return (
    <h2>Your triangle is {triangleType}</h2>
  )
}

const mapStateToProps = state => {
  return {
    triangleType: state[0].triangleType
  }
}

TriangleOutput = connect(mapStateToProps)(TriangleOutput)

export default TriangleOutput
