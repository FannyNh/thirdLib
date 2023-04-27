# TextHorizontalLoop

## How to use
by default you can use it, the text will move to the left in loop
```react

import { TextHorizontalLoop } from 'thirdlib'

function yourFunc() {

  return (
    <div >
      <TextHorizontalLoop speed={animationSpeed}  isAnimate={playTextLoop} text="test text loop" repeat={20} direction={direction}/>
    </div>
  )
}

```

## More option 
you can manage the effect, control duration or direction by scrolling event 
```react
   const [playTextLoop, setPlayTextLoop] = useState<'running' | 'paused'>('running')
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const [animationSpeed, setAnimationSpeed] = useState<number>(3)
    const [isTextVisible, setIsTextVisible] = useState<boolean>(false);
    const refTextLoop = useRef<any>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                setPlayTextLoop('running');
                setIsTextVisible(true);
            }else{
                setPlayTextLoop('paused');
                setIsTextVisible(false);
            }
        })
        observer.observe(refTextLoop.current)
        return () => {
            observer.disconnect();
        };
    }, [])

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        const handleScroll = (event: WheelEvent) => {
            if(isTextVisible){
                const scrollSpeed = event.deltaY > 0 ? event.deltaY : -event.deltaY;
                const newSpeed = animationSpeed - (scrollSpeed / 100);
                if (newSpeed < 2) {
                    setAnimationSpeed(0.5);
                } else if (newSpeed > 2) {
                    setAnimationSpeed(0.5);
                } else {
                    setAnimationSpeed(newSpeed);
                }
                setDirection(event.deltaY < 0 ? 'left' : 'right');

                if (timeout !== null) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    setAnimationSpeed(3);
                }, 500);
            }
        }

        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            if (timeout !== null) {
                clearTimeout(timeout);
            }
        };
    }, [animationSpeed, isTextVisible]);
```



## Props

| prop    | type   | required | default | description                           |
| ------- |--------|----------|---------|---------------------------------------|
| speed | number |          | 2       | duration of the animation             |
| isAnimate | enum   |          | running | running or paused                     |
| text | string | ✅        |         |                                       |
| repeat | number |          | 20      | number of time the text are duplicate |
| direction | enum   |          | left    | left or right                         |

