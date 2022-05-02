import { Default } from "../../../components/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";

const ProductSlug = () => {
  return (
    <Default>
      <div className={Manager.linkName}>Product | </div>
      <div className={styles.singleProduct}>
        <div className={styles.left}>
          <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
        </div>
        <div className={styles.right}>info</div>
      </div>
    </Default>
  );
};

export default ProductSlug;
