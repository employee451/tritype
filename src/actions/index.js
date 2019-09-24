export const calculateTriangle = function({ sideA, sideB, sideC }) {
  var triangleType = '';

  if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || !sideA || !sideB || !sideC) {
    triangleType = 'incomplete';
  } else if(sideA === sideB && sideA !== sideC) {
    triangleType = 'isosceles';
  } else if(sideA === sideC && sideA !== sideB) {
    triangleType = 'isosceles';
  } else if(sideB === sideC && sideB !== sideA) {
    triangleType = 'isosceles';
  } else if(sideA === sideB && sideA === sideC) {
    triangleType = 'equilateral';
  } else {
    triangleType = 'scalene';
  }

  return {
    type: 'CALCULATE_TRIANGLE',
    sideA: sideA,
    sideB: sideB,
    sideC: sideC,
    triangleType: triangleType
  }
}
