import React from 'react'

const Statistics = ({icon, color, caption, value}) => {
  return (
    <div
    className="mb-5 min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-50 border-gray-200 dark:bg-gray-800"
    >
    <div className="p-4 flex items-center">
      <div
        className={"p-3 rounded-full text-"+color+"-500 dark:text-"+color+"-100 bg-"+color+"-100 dark:bg-"+color+"-500 mr-4"}
      >
        {icon}
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {caption}
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {value}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Statistics
