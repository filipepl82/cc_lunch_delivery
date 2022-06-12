import styles from './styles.module.css';

export const ProductItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}></div>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src="/tmp/imgburguer.png" alt="" />
        </div>
        <div className={styles.catName}>Tradicional</div>
        <div className={styles.name}>Texas Burguer</div>
        <div className={styles.price}>R$ 25,50</div>
      </div>
    </div>
  );
}