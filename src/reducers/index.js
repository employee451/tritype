const triangleProperties = (state = [{triangleType: 'incomplete'}], action) => {
  switch (action.type) {
      case 'CALCULATE_TRIANGLE':
        return [
          { triangleType: action.triangleType }
        ]
      default:
        return state
  }
}

export default triangleProperties
