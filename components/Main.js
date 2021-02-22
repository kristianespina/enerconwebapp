import React, { useState } from 'react'

import TextInput from "./Forms/TextInput"
import Statistics from "./Statistics"

// Icons
import Sun from "./Icons/Sun"
import Bolt from "./Icons/Bolt"
import Charging from "./Icons/Charging"
import ChartInfographic from "./Icons/ChartInfographic"
import Coin from "./Icons/Coin"

const Main = () => {
    const [systemPower, setSystemPower] = useState()
    const [contractPrice, setContractPrice] = useState()
    const [peakSunHours, setPeakSunHours] = useState()

    const [electricBill, setElectricBill] = useState()
    const [buyingPrice, setBuyingPrice] = useState()
    const [sellingPrice, setSellingPrice] = useState()

    return (
        <div className="flex flex-col bg-gray-50 h-full w-full">
            <div className="bg-gradient-to-r from-blue-800 to-blue-500 w-full h-72 z-0">
            </div>

            <div className="bg-white -mt-36 mb-12 z-50 ml-10 mr-10 p-5 rounded-md shadow-sm">
                <p className="text-2xl font-semibold mb-5">Savings Simulator</p>
                <div className="flex sm:flex-col md:flex-row w-100">

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1 md:pr-5">
                                <p className="text-lg font-semibold text-gray-700">Solar Panel Info</p>
                                <TextInput caption="System Power" state={systemPower} setState={setSystemPower} />
                                <TextInput caption="Contract Price" state={contractPrice} setState={setContractPrice} />
                                <TextInput caption="Peak Sun Hours" state={peakSunHours} setState={setPeakSunHours} />
                            </div>
                            <div className="flex-1 md:pr-5">
                                <p className="text-lg font-semibold text-gray-700">Electric Bill</p>
                                <TextInput caption="Monthly Electric Bill" state={electricBill} setState={setElectricBill} />
                                <TextInput caption="Buying Price" state={buyingPrice} setState={setBuyingPrice} />
                                <TextInput caption="Selling Price" state={sellingPrice} setState={setSellingPrice} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1 md:pr-5">
                                <Statistics icon={<Sun />} color="yellow" caption="Power Produced (kWh/d)" value="22.5"/>
                                <Statistics icon={<Charging />} color="yellow" caption="Power Used (kWh/d)" value="22.5"/>
                                <Statistics icon={<Bolt />} color="yellow" caption="Power Exported (kWh/d)" value="22.5"/>
                            </div>
                            <div className="flex-1">
                                <Statistics icon={<Coin />} color="green" caption="Savings (%)" value="22.5"/>
                                <Statistics icon={<ChartInfographic />} color="green" caption="ROI (w/o Net Metering)" value="22.5"/>
                                <Statistics icon={<ChartInfographic />} color="green" caption="ROI (w/ Net Metering)" value="22.5"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main
