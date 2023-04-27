
import { useEffect,useRef,useState } from 'react';
import {TextHorizontalLoop} from "thirdlib";

import {Card} from '../src/component/card/Card'
import {Helloworld} from '../src/component/helloWorld/HelloWorld'

function App() {
    const [playTextLoop, setPlayTextLoop] = useState<'running' | 'paused'>('running')
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const [animationSpeed, setAnimationSpeed] = useState<number>(3)
    const refTextLoop = useRef<any>(null)
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            // // eslint-disable-next-line no-console
            // console.log(entries[0])
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
            // eslint-disable-next-line no-console
            console.log(newSpeed)
            if (newSpeed < 0.8) {
                setAnimationSpeed(1.5);
            } else if (newSpeed > 1.5) {
                setAnimationSpeed(1.5);
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

        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            if (timeout !== null) {
                clearTimeout(timeout);
            }
        };
    }, [animationSpeed]);

    return (
    <div className="App bg-slate-800" style={{'height': '4000px'}}>
        <div style={{'height': '400px', 'width': '100%'}}>hello</div>
        <Helloworld text={"This is the text"} />
        <div ref={refTextLoop} className="text-teal-400">
            <TextHorizontalLoop speed={animationSpeed}  isAnimate={playTextLoop} text="test text loop" repeat={20} direction={direction}/>
        </div>

    </div>
  )
}

export default App
