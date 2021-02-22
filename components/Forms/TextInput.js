import React from 'react'

const TextInput = ( {caption, state, setState} ) => {
    const handleChange = (e) => {
        
    }
    return (
        <>
        <div class="my-5 text-sm">
            <label for="username" class="block uppercase text-sm text-gray-500 font-semibold">{caption}</label>
            <input type="text" autoFocus id="username" class="rounded-md px-4 py-2 mt-2 focus:outline-none bg-gray-100 w-full border-none" placeholder="" />
        </div>
        <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <label class="block uppercase text-sm text-gray-500 font-semibold">{caption}</label>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 h-10 rounded rounded-r-none px-3 relative bg-gray-100 border-none" placeholder="" />
            <div class="flex -mr-px">
                <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                    kWp
                </span>
            </div>	
        </div>
        </>
    )
}

export default TextInput
