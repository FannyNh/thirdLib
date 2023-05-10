import { useEffect,useRef,useState } from 'react';
import {Card,TextHorizontalLoop , ThirdLabel, ThirdButton, ThirdAlert} from "thirdlib";



function App() {
    const [playTextLoop, setPlayTextLoop] = useState<'running' | 'paused'>('running')
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const [animationSpeed, setAnimationSpeed] = useState<number>(3)
    const [isTextVisible, setIsTextVisible] = useState<boolean>(false);
    const refTextLoop = useRef<any>(null)

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         if(entries[0].isIntersecting){
    //             setPlayTextLoop('running');
    //             setIsTextVisible(true);
    //         }else{
    //             setPlayTextLoop('paused');
    //             setIsTextVisible(false);
    //         }
    //     })
    //     observer.observe(refTextLoop.current)
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, [])
    //
    // useEffect(() => {
    //     let timeout: NodeJS.Timeout | null = null;
    //
    //     const handleScroll = (event: WheelEvent) => {
    //         if(isTextVisible){
    //             const scrollSpeed = event.deltaY > 0 ? event.deltaY : -event.deltaY;
    //             const newSpeed = animationSpeed - (scrollSpeed / 100);
    //             if (newSpeed < 2) {
    //                 setAnimationSpeed(0.5);
    //             } else if (newSpeed > 2) {
    //                 setAnimationSpeed(0.5);
    //             } else {
    //                 setAnimationSpeed(newSpeed);
    //             }
    //             setDirection(event.deltaY < 0 ? 'left' : 'right');
    //
    //             if (timeout !== null) {
    //                 clearTimeout(timeout);
    //             }
    //             timeout = setTimeout(() => {
    //                 setAnimationSpeed(3);
    //             }, 500);
    //         }
    //     }
    //
    //     window.addEventListener('wheel', handleScroll);
    //     return () => {
    //         window.removeEventListener('wheel', handleScroll);
    //         if (timeout !== null) {
    //             clearTimeout(timeout);
    //         }
    //     };
    // }, [animationSpeed, isTextVisible]);

    return (
        <div className="App " >
            <div className="mb-5 w-96 h-96" >
                <Card bgColor="teal">
                    <div className="w-full h-full">
                        <p className="text-teal-400 uppercase text-center font-mono">
                            yes
                        </p>
                    </div>
                </Card>
            </div>
            {/*<div ref={refTextLoop} className="text-teal-400 overflow-x-hidden w-full">*/}
            {/*    <TextHorizontalLoop speed={animationSpeed}  isAnimate={playTextLoop} text="test text loop" repeat={10} direction={direction}/>*/}
            {/*</div>*/}
            <div className="my-5 w-96 h-96">
                <ThirdLabel color="teal">test label</ThirdLabel>
            </div>
            <div className="my-5 w-96 h-96">
                <ThirdButton color="teal">test label</ThirdButton>
            </div>
            <ThirdAlert>
                <div>hello world</div>
            </ThirdAlert>
        </div>
    )
}

export default App
