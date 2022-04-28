import styles from "./styles.module.scss";
import Manager from "../../styles/Manager.module.scss";
import { FaPowerOff } from "react-icons/fa";
export const MenuTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <button className={Manager.managerButton}>
          <FaPowerOff />
        </button>
      </div>
    </div>
  );
};
