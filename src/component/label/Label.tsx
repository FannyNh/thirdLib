import React from 'react'
interface TypeLabel {
    children:React.ReactNode,
    color?:string
}
export const Label = ({children, color='primary'} : TypeLabel) => {
    return (
        <span className={`px-4 py-2 font-semibold text-sm bg-${color}-500 text-white rounded-full shadow-sm`} >
            {children}
        </span>
    )
}
