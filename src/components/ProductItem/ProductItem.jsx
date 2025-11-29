import styles from "./ProductItem.module.css"

const ProductItem = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.itemHeader}></p>
        <p className={styles.itemPrice}></p>
    </div>
  )
}

export {ProductItem}