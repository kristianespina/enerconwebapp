export const computeSavings = (systemPower, contractPrice, peakSunHours, electricBill, buyingPrice, sellingPrice, dayConsumption, nightConsumption) => {
  const powerProduced = computePowerProduced(systemPower, peakSunHours)
  const powerUsed = computePowerUsed(electricBill, buyingPrice)
  const powerExported = computePowerExported(powerProduced, powerUsed, dayConsumption)

  // With Solar Panel, Without Net Metering
  const savingsPerDay = Math.min(powerProduced, dayConsumption) * buyingPrice
  const savingsPerMonth = savingsPerDay * 30
  const savingsPerYear = savingsPerMonth * 12
  const monthlyBill = Math.max(0, electricBill - savingsPerMonth)
  const roi = contractPrice / savingsPerYear

  // With Solar Panel, With Net Metering
  const savingsPerDayWithNetMetering = savingsPerDay + powerExported * sellingPrice
  const savingsPerMonthWithNetMetering = savingsPerDayWithNetMetering * 30
  const savingsPerYearWithNetMetering = savingsPerMonthWithNetMetering * 12
  const monthlyBillWithNetMetering = Math.max(0, electricBill - savingsPerMonthWithNetMetering)
  const roiWithNetMetering = contractPrice / savingsPerYearWithNetMetering

  const percentSavings = electricBill / savingsPerMonth // * 100

  return {
    powerProduced: Quantity(powerProduced, "kWh/d"),
    powerUsed: Quantity(powerUsed, "kWh/d"),
    powerExported: Quantity(powerExported, "kWh/d"),
    financialData: [
      // Without Solar Panel, Without Net Metering
      {
        name: "Without Solar Panel",
        isSolar: false,
        isNetMetered: false,
        savings: {
          daily: Quantity(0, "PHP"),
          mothly: Quantity(0, "PHP"),
          yearly: Quantity(0, "PHP")
        },
        monthlyBill: Quantity(electricBill, "PHP"),
        percentSavings: Quantity(0, "%"),
        roi: null
      },
      // With Solar Panel, Without Net Metering
      {
        name: "With Solar Panel",
        isSolar: true,
        isNetMetered: false,
        savings: {
          daily: Quantity(savingsPerDay, "PHP"),
          mothly: Quantity(savingsPerMonth, "PHP"),
          yearly: Quantity(savingsPerYear, "PHP")
        },
        monthlyBill: Quantity(monthlyBill, "PHP"),
        percentSavings: Quantity(100 * (savingsPerMonth / electricBill), "%"),
        roi: Quantity(roi, "years")
      },
      // With Solar Panel, With Net Metering
      {
        name: "With Solar Panel and Net Metering",
        isSolar: true,
        isNetMetered: true,
        savings: {
          daily: Quantity(savingsPerDayWithNetMetering, "PHP"),
          monthly: Quantity(savingsPerMonthWithNetMetering, "PHP"),
          yearly: Quantity(savingsPerYearWithNetMetering, "PHP")
        },
        monthlyBill: Quantity(monthlyBillWithNetMetering, "PHP"),
        percentSavings: Quantity(100 * (savingsPerMonthWithNetMetering / electricBill), "%"),
        roi: Quantity(roiWithNetMetering, "years")
      }
    ]
  }
}

export const computePowerProduced = (systemPower, peakSunHours) => {
  return systemPower * peakSunHours
}

export const computePowerUsed = (electricBill, buyingPrice) => {
  return electricBill / buyingPrice / 30
}

export const computePowerExported = (powerProduced, powerUsed, dayConsumption) => {
  return Math.max(0, powerProduced - (powerUsed * dayConsumption / 100))
}

/**
 * Helper functions
 */

const Quantity = (value, unit) => {
  return isNaN(value)
    ? { value: "", unit: "" }
    :
    {
      value: parseFloat(value).toFixed(2),
      unit: unit
    }
}

/**
 * Function to get financial data given parameters
 * 
 * @param {object} computations 
 * @param {boolean} isSolar 
 * @param {boolean} isNetMetered 
 * @returns 
 */
export const getFinancialData = (computations, isSolar, isNetMetered) => {
  const idx = computations.financialData.findIndex(financialData => financialData.isSolar === isSolar && financialData.isNetMetered === isNetMetered)
  return computations.financialData[idx]
}