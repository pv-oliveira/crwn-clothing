import './cart-item.styles.jsx'
import { CartItemContainer } from './cart-item.styles.jsx';


export default function CartItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </CartItemContainer>
    )
}