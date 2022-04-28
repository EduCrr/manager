import { MenuTop } from "../MenuTop";
import { MenuLeft } from "../MenuLeft";
import styles from "./styles.module.scss";

export const Default = ({ children }) => {
  return (
    <>
      <div className={styles.top}>
        <MenuTop />
      </div>
      <div className={styles.left}>
        <MenuLeft />
      </div>
      <main className={styles.content}>{children}</main>
      <div className={styles.footer}>Footer</div>
    </>
  );
};
