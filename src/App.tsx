
import {Card} from '../src/component/card/Card'
import {Helloworld} from '../src/component/helloWorld/HelloWorld'

function App() {

  return (
    <div className="App">
      <Helloworld text={"This is the text"}/>
        <Card isShadow={false} border="none" bgColor="orange" >
            <p className="text-orange-400 " >example children with double border</p>
        </Card>
    </div>
  )
}

export default App
