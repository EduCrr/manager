import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import Manager from "../../styles/Manager.module.scss";
import { FaFileAlt } from "react-icons/fa";

export const ContentManager = () => {
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
    <div className={styles.contentType}>
      <h5>Content Type</h5>
      <div className={Manager.formContact}>
        <form>
          <input placeholder="Title" />
          <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
          <input type="file" id="file" style={{ display: "none" }} />
          <div className={Manager.container}>
            <label for="file">
              <img
                className={Manager.selected}
                src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              />
              <div className={Manager.middle}>
                <div for="file" className={Manager.text}>
                  <FaFileAlt />
                </div>
              </div>
            </label>
          </div>
          <input className={Manager.submit} type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};
