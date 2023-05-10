import { Transition } from '@headlessui/react';
import { XCircleIcon} from '@heroicons/react/24/solid'
import React, { useState} from 'react'

interface TypeAlert  {
    type? : 'error' | 'success'  | 'info' | 'warning',
    children : React.ReactNode,
}

export const Alert = ({type = 'info',children} : TypeAlert ) => {
    const [showAlert, setShowAlert ] = useState(true)
    const classes = ['w-96 rounded-md m-2 p-2 pt-3 min-h-[60px] relative flex items-center ']

    const HandleClose = () => {
        setShowAlert(false)
    }
    switch (type) {
        case 'info' :
            classes.push('bg-slate-200 text-slate-500')
            break
        case 'error' :
            classes.push('bg-red-200 text-red-500')
            break
        case 'success' :
            classes.push('bg-primary-200 text-primary-500')
            break
        case 'warning' :
            classes.push('bg-orange-200 text-orange-500')
            break
    }
    let className = ""
    className = classes.join(' ')
return (
    <Transition
        show={showAlert}
        enter="transition transform duration-500 ease-out"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition transform duration-500 ease-in"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full opacity-0"
    >
    <div className={className} >
        {children}
        <div className="absolute top-1 right-1 cursor-pointer h-4 w-4 " onClick={HandleClose}><XCircleIcon className="w-full h-full" /></div>
    </div>
    </Transition>
)
}
