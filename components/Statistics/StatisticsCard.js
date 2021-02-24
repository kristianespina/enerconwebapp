import React from 'react'

const StatisticsCard = ({ icon, color, caption, data }) => {
  const { value, unit } = data

  return (
    <div
      className={"mb-5 min-w-0 rounded-lg shadow-xs overflow-hidden border-gray-200 dark:bg-gray-800 hover:bg-gray-50 hover:shadow-sm cursor-pointer"}
    >
      <div className="p-4 flex items-center">
        <div
          className={"p-3 rounded-full text-" + color + "-500 dark:text-" + color + "-100 bg-" + color + "-100 dark:bg-" + color + "-500 mr-4"}
        >
          {icon}
        </div>
        <div className="w-full">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {caption}
          </p>
          <p className="font-semibold">
            <span className="text-2xl text-gray-700 dark:text-gray-200 mr-3">{value}</span>
            <span className="text-md text-gray-500 dark:text-gray-700">{unit}</span>
          </p>
        </div>
      </div>
    </div >
  )
}

export default React.memo(StatisticsCard)
