import React from 'react'

const TextInput = ( {caption} ) => {
    return (
        <div class="my-5 text-sm">
            <label for="username" class="block text-gray-700 font-semibold">{caption}</label>
            <input type="text" autoFocus id="username" class="rounded-md px-4 py-2 mt-3 focus:outline-none bg-gray-100 w-full border-none" placeholder="" />
        </div>
    )
}

export default TextInput
