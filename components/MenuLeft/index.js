import styles from "./styles.module.scss";
import Link from "next/link";
import { navigationLinks } from "../../utils/data";
import { useRouter } from "next/router";
export const MenuLeft = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <ul>
        {navigationLinks.map((item, k) => (
          <li
            className={[
              item.path.includes(router.pathname)
                ? styles.linkActive
                : styles.link,
              ,
            ].join(" ")}
            key={k}
          >
            <Link href={item.path[0]}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
