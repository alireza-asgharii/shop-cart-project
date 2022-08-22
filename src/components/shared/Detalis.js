import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//Context
import { DataContextProvider } from "../../Context/ApiContextProvider";
import SkeletonDetalis from "../../Skeleton/SkeletonDetalis";

//Styles
import styles from "../../styles/detalis.module.scss";

const Details = () => {
  const params = useParams()
  const data = useContext(DataContextProvider);
  const product = data[params.id - 1];
  console.log(product);

  if (data.length > 0) {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={product.image} alt="product" />
        </div>
        <div className={styles.textContainer}>
          <h1>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>
            <span>category: </span>
            {product.category}
          </p>
          <div>
            <span>{product.price} $</span>
            <Link to="/products">Back to shop</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <SkeletonDetalis />
  }
};

export default Details;
