import { CartProduct } from '../../components/CartProduct';
import styles from './Cart.module.css';

export const Cart = () => {
  return (
    <div className={'container ' + styles.container}>
      <CartProduct photoUrl="/images/product-20" />
      <CartProduct photoUrl="/images/product-19" />
      <CartProduct photoUrl="/images/product-15" />
    </div>
  );
};
