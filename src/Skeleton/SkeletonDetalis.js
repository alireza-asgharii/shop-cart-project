import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//styles
import styles from "../styles/detalis.module.scss";

const SkeletonDetalis = () => {
  return (
    <div className={styles.container}>
      <div style={{ width: "70%", margin: "40px 40px" }}>
        <Skeleton height={200} />
      </div>
      <div className={styles.textContainer} style={{ width: "100%" }}>
        <h1>
          <Skeleton />
        </h1>
        <p className={styles.description}>
          <Skeleton count={4} />
        </p>
        <p>
          <Skeleton width={60} />
          <Skeleton width={60} />
        </p>
        <span style={{ display: "flex", flexDirection: "column", width: '100%' }}>
          <span>
            <Skeleton width={100} />
          </span>
          <span>
            <Skeleton width={100} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default SkeletonDetalis;
