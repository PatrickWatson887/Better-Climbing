import { CheckoutScreen } from "./components/cartScreen";
import { connector, PropsFromRedux } from "./container";

interface CheckoutProps extends PropsFromRedux {
}

const Checkout = ({cart}: CheckoutProps) => (
  <>
    <div className='container mx-auto w-2/3 pt-16'>
      <CheckoutScreen cart={cart}/>
    </div>
  </>
)

export default connector(Checkout)
