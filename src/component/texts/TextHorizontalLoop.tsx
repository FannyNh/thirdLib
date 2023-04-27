import React from 'react';

interface TypeTextHorizontalLoop {
    text : string,
    repeat? : number,
    direction? : 'left' | 'right',
    speed?: number,
    isAnimate?: 'paused' | 'running'
}

export const TextHorizontalLoop = ({text, repeat = 30, direction = 'left', speed=2, isAnimate = 'running'} : TypeTextHorizontalLoop)=>{
    let isAnimationLeft = direction === 'left';
    const repeatTextSpans = [] as any[];
    const spanStyles = `pr-5 text-primary inline-block animate-${isAnimationLeft ? 'horizontalLoop' : 'horizontalLoop-reverse'} `;

    const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        const scrollSpeed = event.deltaY > 0 ? event.deltaY : -event.deltaY
        isAnimationLeft =  event.deltaY < 0
    }

    for(let i=0; i< repeat; i++){
        repeatTextSpans.push(
            <span key={i} className={spanStyles} style={{animationDuration: speed + 's' , animationPlayState: isAnimate}}>
  {text}
</span>
        )
    }
    return (
        <div className="overflow-hidden whitespace-nowrap w-full h-6 relative" onWheel={() => {handleScroll}}>
            {repeatTextSpans}
        </div>
    )
}
