import { Default } from "../../../components/Default";
import styles from "./styles.module.scss";
import Manager from "../../../styles/Manager.module.scss";
import { FaTrash, FaEdit, FaPlus, FaFileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <Default>
      <div className={styles.linkName}>Home</div>
      <div className={Manager}>
        <div className={styles.items}>
          <div className={styles.title}>
            <h1>Products</h1>
            <button className={Manager.managerButton}>
              <FaPlus />
            </button>
          </div>
          <div className={styles.contents}>
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
            <h4>Title of product</h4>
            <div className={styles.buttons}>
              <button className={Manager.managerButton}>
                <FaEdit />
              </button>
              <button className={Manager.managerButton}>
                <FaTrash />
              </button>
            </div>
          </div>
          <div className={styles.contents}>
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
            <h4>Title of product</h4>
            <div className={styles.buttons}>
              <button className={Manager.managerButton}>
                <FaEdit />
              </button>
              <button className={Manager.managerButton}>
                <FaTrash />
              </button>
            </div>
          </div>

          <div className={styles.contents}>
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
            <h4>Title of product</h4>
            <div className={styles.buttons}>
              <button className={Manager.managerButton}>
                <FaEdit />
              </button>
              <button className={Manager.managerButton}>
                <FaTrash />
              </button>
            </div>
          </div>
          <div className={styles.contents}>
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
            <h4>Title of product</h4>
            <div className={styles.buttons}>
              <button className={Manager.managerButton}>
                <FaEdit />
              </button>
              <button className={Manager.managerButton}>
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.title}>
            <h1>Content</h1>
          </div>
          <div className={styles.contentType}>
            <h5>Content Type</h5>
            <form>
              <input placeholder="Title" />
              <textarea placeholder="Content"></textarea>
              <input type="file" id="file" style={{ display: "none" }} />
              <div className={Manager.container}>
                <label for="file">
                  <img src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
                  <div className={Manager.middle}>
                    <div for="file" className={Manager.text}>
                      <FaFileAlt />
                    </div>
                  </div>
                </label>
              </div>
              <input type="submit" value="Update" />
            </form>
          </div>
          <div className={styles.contentType}>
            <h5>Content Type</h5>
            <form>
              <input placeholder="Title" />
              <textarea placeholder="Content"></textarea>
              <input type="file" id="file" style={{ display: "none" }} />
              <div className={Manager.container}>
                <label for="file">
                  <img src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
                  <div className={Manager.middle}>
                    <div for="file" className={Manager.text}>
                      <FaFileAlt />
                    </div>
                  </div>
                </label>
              </div>
              <input type="submit" value="Update" />
            </form>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default Home;
