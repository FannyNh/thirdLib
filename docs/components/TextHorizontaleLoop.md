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
    const refTextLoop = useRef<any>(null)
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            // eslint-disable-next-line no-console
            console.log(entries[0])
            entries[0].isIntersecting ? setPlayTextLoop('running') : setPlayTextLoop('paused')
        })
        observer.observe(refTextLoop.current)
        return () => {
            observer.disconnect();
        };
    }, [])
    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        const handleScroll = (event: WheelEvent) => {
            const scrollSpeed = event.deltaY > 0 ? event.deltaY : -event.deltaY;
            const newSpeed = animationSpeed - (scrollSpeed / 100);
            if (newSpeed < 1) {
                setAnimationSpeed(1);
            } else if (newSpeed > 4) {
                setAnimationSpeed(4);
            } else {
                setAnimationSpeed(newSpeed);
            }
            setDirection(event.deltaY < 0 ? 'left' : 'right');

            if (timeout !== null) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                setAnimationSpeed(3);
            }, 200);
        }

        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            if (timeout !== null) {
                clearTimeout(timeout);
            }
        };
    }, [animationSpeed]);
```



## Props

| prop    | type   | required | default | description                           |
| ------- |--------|----------|---------|---------------------------------------|
| speed | number |          | 2       | duration of the animation             |
| isAnimate | enum   |          | running | running or paused                     |
| text | string | ✅        |         |                                       |
| repeat | number |          | 20      | number of time the text are duplicate |
| direction | enum   |          | left    | left or right                         |

