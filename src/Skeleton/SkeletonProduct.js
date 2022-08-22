import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "../styles/product.module.scss";

const SkeletonProduct = ({ count }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((item, i) => (
          <div className={styles.container} key={i}>
            <div className={styles.imgContainer}>
              <Skeleton height={200} />
            </div>
            <div>
              <h6>
                <Skeleton width={150} />
              </h6>
              <p>
                <Skeleton width={50} />
              </p>
              <div className={styles.bottomContiner}>
                <Skeleton width={70} />
                <div className={styles.buttomContainer}>
                  <button style={{ border: "none", borderRadius: "5px" }}>
                    <Skeleton width={100} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SkeletonProduct;
