import { Default } from "../../../components/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { FaFileAlt } from "react-icons/fa";

const Adicionar = () => {
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
      <div className={Manager.linkName}>Add Product</div>
      <div className={styles.right}>
        <div className={Manager.formContact}>
          <form>
            <input placeholder="Title" />
            <select>
              <option>Categories</option>
              <option>Categories</option>
              <option>Categories</option>
              <option>Categories</option>
            </select>
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
            />
            <div className={Manager.container}>
              <input type="file" id="file" style={{ display: "none" }} />
              <label for="file">
                <img
                  className={Manager.selected}
                  src="https://mladezj2cqfh.i.optimole.com/ZcuK1Xg.ECq7~2ccb/w:auto/h:auto/q:auto/https://www.take5.com.br/wp-content/themes/cardinal/images/default-thumb.png"
                />
                <div className={Manager.middle}>
                  <div for="file" className={Manager.text}>
                    <FaFileAlt />
                  </div>
                </div>
              </label>
            </div>
            <input className={Manager.submit} type="submit" value="Create" />
          </form>
        </div>
      </div>
    </Default>
  );
};

export default Adicionar;
