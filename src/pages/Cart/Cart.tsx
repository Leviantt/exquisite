import { CartProduct } from '../../components/CartProduct';
import styles from './Cart.module.css';

export const Cart = () => {
  return (
    <div className={'container ' + styles.container}>
      <CartProduct photoUrl="/public/images/product-20" />
      <CartProduct photoUrl="/public/images/product-19" />
      <CartProduct photoUrl="/public/images/product-15" />
    </div>
  );
};
