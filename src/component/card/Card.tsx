import React , { ReactNode } from "react";

type AllowedColor = 'orange' | 'amber' | 'yellow' | 'lime' | 'teal' | 'cyan' | 'indigo' | 'violet' | 'pink';
interface TypesCard {
    isShadow?: boolean,
    border?: 'none' | 'simple' | 'double',
    children : React.ReactNode,
    bgColor? : AllowedColor,
}

export const Card = ({isShadow = false, border= 'double', bgColor = 'pink', children,  } : TypesCard ) => {
    const classes = ['overflow-hidden mb-12 py-6 px-4 sm:p-6 rounded-tr-2xl w-full h-full '];
    switch (border) {
        case 'none':
        classes.push(`border-0 border-${bgColor}-400`);
        break
        case 'double':
            classes.push(`border-double border-4 border-${bgColor}-400`);
            break
        case 'simple':
            classes.push(`border border-${bgColor}-400`);
            break
        default:
            classes.push('border-0');
    }
    if (isShadow) {
        classes.push('shadow');
    }
    if (bgColor && border === 'none' ) {
        classes.push(`bg-${bgColor}-400`);
    }

    const className = classes.join(' ');
    return (
        <div className={className}>
            {children}
        </div>
    )
}
