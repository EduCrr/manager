import { Default } from "../../../components/Default";
import styles from "./styles.module.scss";
import Manager from "../../../styles/Manager.module.scss";
import { FaTrash, FaEdit, FaPlus, FaFileAlt } from "react-icons/fa";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const Home = () => {
  const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
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
            <div className={Manager.productHover}>
              <div className={Manager.container}>
                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                <div className={Manager.middle}>
                  <div for="file" className={Manager.text}>
                    <FaEdit />
                  </div>
                </div>
              </div>
            </div>
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
              <QuillNoSSRWrapper
                modules={modules}
                formats={formats}
                theme="snow"
              />
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
              <QuillNoSSRWrapper
                modules={modules}
                formats={formats}
                theme="snow"
              />
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
