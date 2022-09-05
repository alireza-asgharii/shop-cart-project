import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

//Icons
import { FaSortAmountDown } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

//Styles
import styles from "../styles/products.module.scss";

//Components
import Product from "./shared/Product";

//Context
import { DataContextProvider } from "../Context/ApiContextProvider";
import SkeletonProduct from "../Skeleton/SkeletonProduct";

const Products = () => {
  const data = useContext(DataContextProvider);
  const location = useLocation();
  const queryS = queryString.parse(location.search);
  const [isOpen, setOpen] = useState(false);

  switch (queryS.sort) {
    case "highestprice":
      data.sort(function (a, b) {
        return b.price - a.price;
      });
      break;
    case "lowestprice":
      data.sort(function (a, b) {
        return a.price - b.price;
      });
      break;
    case "name":
      data.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
      
  }

  const openSortHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  if (isOpen) document.documentElement.scroll = "disable";

  return (
    <>
      <div className={styles.sortContainer}>
        <div className={styles.iconContainer} onClick={openSortHandler}>
          <FaSortAmountDown className={styles.icon} />
          <span className={styles.sortBy}>
            {queryS.sort ? queryS.sort : "sort by"}
          </span>
        </div>
        <div
          className={`${styles.items} ${
            isOpen ? styles.openSort : styles.closeSort
          }  `}
        >
          <div className={styles.top}>
            <IoMdClose
              className={styles.closeIcon}
              onClick={() => setOpen(false)}
            />
            <h4>sort by </h4>
          </div>
          <Link to="/products/?sort=lowestprice" onClick={closeHandler} className={queryS.sort === "lowestprice" && styles.selected}>
            the lowestPrice
            {queryS.sort === "lowestprice" && <MdDone className={styles.doneIcon} />}
          </Link>
          <Link to="/products/?sort=highestprice" onClick={closeHandler} className={queryS.sort === "highestprice" && styles.selected}>
            the highestPrice
            {queryS.sort === "highestprice" && <MdDone className={styles.doneIcon} />}
          </Link>
          <Link to="/products/?sort=name" onClick={closeHandler} className={queryS.sort === "name" && styles.selected}>
            sort by name
            {queryS.sort === "name" && <MdDone className={styles.doneIcon} />}
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        {data.map((item) => (
          <Product key={item.id} data={item} />
        ))}
        {!data.length && <SkeletonProduct count={20} />}
      </div>
    </>
  );
};

export default Products;
