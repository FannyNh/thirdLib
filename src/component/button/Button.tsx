import React from 'react'

import {AllowedColor} from '../types/Types'
interface TypeButton {
    isShadow? : boolean,
    disabled? : boolean,
    style?: 'outlined' | 'solid',
    color?: AllowedColor,
    children : React.ReactNode
}
export const Button = ({isShadow = true, disabled = false, style = 'solid' , color ='teal', children} : TypeButton) => {
    const classes = ['border-0 rounded-md py-2 px-5 inline-flex justify-center items-center text-sm font-medium '] as string[]
    switch (style) {
        case 'outlined':
            classes.push(`border border-${color}-400 text-${color}-400 hover:border-${color}-500 hover:text-${color}-500`)
            break
        case 'solid':
            classes.push(`bg-${color}-400 text-white hover:bg-${color}-500`)
            break
    }
    isShadow && classes.push(`shadow-lg  shadow-${color}-500/50 hover:shadow-md `)
    const className = classes.join(' ')
    return (
        <button disabled={disabled} className={className}>
            {children}
        </button>
    )
}
