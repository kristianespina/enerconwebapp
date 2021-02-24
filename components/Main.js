import React, { useState, useEffect, useMemo } from 'react'

import TextInput from "./Forms/TextInput"
import StatisticsCard from "./Statistics/StatisticsCard"
import StatisticsChart from "./Statistics/StatisticsChart"

// Icons
import Sun from "./Icons/Sun"
import Bolt from "./Icons/Bolt"
import Charging from "./Icons/Charging"
import ChartInfographic from "./Icons/ChartInfographic"
import Coin from "./Icons/Coin"

import { computeSavings, getFinancialData } from "../utils/Formulas"

// Formulas
const Main = () => {
    const [systemPower, setSystemPower] = useState(0)
    const [contractPrice, setContractPrice] = useState(0)
    const [peakSunHours, setPeakSunHours] = useState(4.5)

    const [electricBill, setElectricBill] = useState(0)
    const [buyingPrice, setBuyingPrice] = useState(10)
    const [sellingPrice, setSellingPrice] = useState(5)

    const [dayConsumption, setDayConsumption] = useState(50)
    const [nightConsumption, setNightConsumption] = useState(50)

    /**
     * Computations
     */
    const computations = computeSavings(
        systemPower,
        contractPrice,
        peakSunHours,
        electricBill,
        buyingPrice,
        sellingPrice,
        dayConsumption,
        nightConsumption,
    )

    // Get Financials
    const financialsWithSolar = getFinancialData(computations, true, false)
    const financialsWithSolarWithNetMetering = getFinancialData(computations, true, true)

    // Auto update Night Consumption on change in day consumption
    useEffect(() => {
        const difference = 100 - dayConsumption
        nightConsumption !== difference && setNightConsumption(difference)
    }, [dayConsumption])
    return (
        <div className="flex flex-col bg-gray-50 h-full w-full">
            <div className="bg-gradient-to-r from-blue-800 to-blue-500 w-full h-72 z-0">
            </div>

            <div className="bg-white -mt-36 mb-12 z-50 ml-10 mr-10 p-5 rounded-md shadow-sm">
                <p className="text-2xl font-semibold mb-5">Savings Simulator</p>
                <div className="flex flex-row space-x-4">
                    <div className="flex-1">
                        <div className="flex flex-col">
                            <div className="flex-1 flex flex-col md:flex-row space-x-4">
                                <div className="flex-1">
                                    <p className="text-lg font-semibold text-gray-700 mb-4">Solar Panel Info</p>
                                    <TextInput caption="System Power" state={systemPower} setState={setSystemPower} unit="kW" />
                                    <TextInput caption="Contract Price" state={contractPrice} setState={setContractPrice} unit="PHP" />
                                    <TextInput caption="Peak Sun Hours" state={peakSunHours} setState={setPeakSunHours} unit="hours" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg font-semibold text-gray-700 mb-4">Electric Bill</p>
                                    <TextInput caption="Monthly Electric Bill" state={electricBill} setState={setElectricBill} unit="PHP" />
                                    <TextInput caption="Buying Price" state={buyingPrice} setState={setBuyingPrice} unit="PHP" />
                                    <TextInput caption="Selling Price" state={sellingPrice} setState={setSellingPrice} unit="PHP" />
                                </div>
                            </div>
                            <div className="flex-1 mt-3">
                                <p className="text-lg font-semibold text-gray-700 mb-4">Consumption Data</p>
                                <TextInput caption="Day Consumption" state={dayConsumption} setState={setDayConsumption} unit="%" />
                                <TextInput caption="Night Consumption" state={nightConsumption} setState={setNightConsumption} unit="%" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col w-100">
                            <div className="flex flex-col md:flex-row space-x-4">
                                <div className="flex-1">
                                    <StatisticsCard icon={<Sun />} color="yellow" caption="Power Produced" data={computations && computations.powerProduced} />
                                    <StatisticsCard icon={<Charging />} color="yellow" caption="Power Used (kWh/d)" data={computations && computations.powerUsed} />
                                    <StatisticsCard icon={<Bolt />} color="yellow" caption="Power Exported (kWh/d)" data={computations && computations.powerExported} />
                                </div>
                                <div className="flex-1">
                                    <StatisticsCard icon={<Coin />} color="green" caption="Savings" data={financialsWithSolar && financialsWithSolar.percentSavings} />
                                    <StatisticsCard icon={<ChartInfographic />} color="green" caption="ROI (w/o Net Metering)" data={financialsWithSolar && financialsWithSolar.roi} />
                                    <StatisticsCard icon={<ChartInfographic />} color="green" caption="ROI (w/ Net Metering)" data={financialsWithSolarWithNetMetering && financialsWithSolarWithNetMetering.roi} />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <StatisticsChart data={computations} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
