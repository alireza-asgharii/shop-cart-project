import React, {useContext} from 'react';

//Styles
import styles from '../styles/products.module.scss';

//Components
import Product from './shared/Product';

//Context
import { DataContextProvider } from '../Context/ApiContextProvider';

const Products = () => {

  const data = useContext(DataContextProvider);

  return (
    <div className={styles.container}>
      {data.map(item => (
        <Product key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Products;