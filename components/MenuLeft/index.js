import styles from "./styles.module.scss";
import Link from "next/link";
import { navigationLinks } from "../../utils/data";
import { useRouter } from "next/router";
import { FaHome, FaEdit } from "react-icons/fa";

export const MenuLeft = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div className={styles.container}>
      <ul>
        <li
          className={
            router.pathname === "/manager/home"
              ? styles.linkActive
              : styles.link
          }
        >
          <Link href="/manager/home">
            <a>
              <FaHome />
            </a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/manager/sobre"
              ? styles.linkActive
              : styles.link
          }
        >
          <Link href="/manager/home">
            <a>
              <FaEdit />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
//https://serveanswer.com/questions/how-to-set-react-icons-in-loop-in-reactjs
//router.pathname

// {
//   navigationLinks.map((item, k) => (
//     <li
//       className={[
//         item.path.includes() ? styles.linkActive : styles.link,
//         ,
//       ].join(" ")}
//       key={k}
//     >
//       <Link href={item.path[0]}>
//         <a>
//           <span>
//             <item.label />
//           </span>
//         </a>
//       </Link>
//     </li>
//   ));
// }
