const CalculateBmi = (height:number, weight:number) => {
  if (!isNaN(Number(height)) && !isNaN(Number(weight)) || height == 0 || weight == 0 ) {
    height = height*0.01
    const bmi: number = (weight)/(height*height)
    const bmi2 = bmi.toFixed(1)
    console.log(bmi2)
    if (bmi < 16 ) return "Underweight (Severe thinness)"
    else if (16 <= bmi && bmi <= 16.9 ) return "Underweight (Moderate thinness)"
    else if (17 <= bmi && bmi <= 18.4 ) return "Underweight (Mild thinness)"
    else if (18.5 <= bmi && bmi <= 24.9 ) return "Normal range"
    else if (25 <= bmi && bmi <= 29.9 ) return "Overweight (Pre-obese)"
    else if (30 <= bmi && bmi <= 34.9 ) return "Obese (Class I)"
    else if (35 <= bmi && bmi <= 39.9) return "Obese (Class II)"
    else if (bmi >= 40 ) return "Obese (Class III)"
    else return "something wrong"
  } else {
    throw new Error('Provided values were not numbers or weight or height is 0!');
  }
}

export default CalculateBmi