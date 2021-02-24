import React from 'react'

const TextInput = ({ caption, unit, state, setState }) => {
    const handleChange = (e) => {
        if (state !== e.target.value)
            setState(e.target.value)
    }
    return (
        <>
            <label className="block uppercase text-sm text-gray-500 font-semibold mb-3">{caption}</label>
            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                <input type="number"
                    className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 h-10 rounded rounded-r-none px-3 relative bg-gray-100 border-none"
                    placeholder=""
                    onChange={handleChange}
                    value={state}
                />
                <div className="flex -mr-px">
                    <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                        {unit}
                    </span>
                </div>
            </div>
        </>
    )
}

export default React.memo(TextInput)