import Inputs from './Inputs'
import Fonts from './Fonts'

const Page = () => {
  return (
    <div className="container min-vh-100">
      <div className="container">
        <div class="row my-5">
          <Inputs />
          <Fonts />
        </div>
      </div>
    </div>
  )
}

export default Page