export const calculateRiskScore = (amount: number, country: string, userAge: number) => {
  let riskScore = 0;

  const highRiskCountries = ["Nigeria", "Russia", "North Korea"];

  if (amount > 10000) {
    riskScore += 30;
  }

  if (highRiskCountries.includes(country)) {
    riskScore += 40;
  }

  if (userAge < 21) {
    riskScore += 10;
  }

  return riskScore;
};