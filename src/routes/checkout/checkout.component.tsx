import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.components";
import Schedule from "../../components/schedule/schedule.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Produto</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Descrição</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantidade</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Preço</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remover</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {
        cartItems.length > 0 ? <Schedule /> : null
      }
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
}
