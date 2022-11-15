import Child from './Child'
import Parent from './Parent'

const DisPlayCP = () => {
  return (
    <div>
        <Parent>
            <Child name={'one'}/>
            <Child name={'two'}/>
        </Parent>
    </div>
  )
}

export default DisPlayCP