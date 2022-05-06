import { Default } from "../../../components/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  FaTrash,
  FaPlus,
  FaSave,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductSlug = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
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
      <div className={Manager.linkName}>Product | </div>
      <div className={styles.singleProduct}>
        <div className={styles.left}>
          <Slider {...settings} ref={sliderRef}>
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
          </Slider>
          <div className="arrows">
            <div onClick={gotoPrev}>
              <FaLongArrowAltLeft />
            </div>
            <div onClick={gotoNext}>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="items">
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

                <input
                  className={Manager.submit}
                  type="submit"
                  value="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.images}>
        <div className="items">
          <div className={styles.content}>
            <div className={styles.more}>
              <h2>Images</h2>
              <button className={Manager.managerButton}>
                <FaPlus />
              </button>
            </div>
            <div className={styles.singleImages}>
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
              <div className={styles.title}>Product name</div>
              <div className={styles.btns}>
                <button className={Manager.managerButton}>
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className={styles.singleImages}>
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
              <div className={styles.title}>Product name</div>
              <div className={styles.btns}>
                <button className={Manager.managerButton}>
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className={styles.singleImages}>
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
              <div className={styles.title}>Product name</div>
              <div className={styles.btns}>
                <button className={Manager.managerButton}>
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className={styles.save}>
              <button className={Manager.managerButton}>
                <FaSave />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default ProductSlug;
