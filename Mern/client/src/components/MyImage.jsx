import React from "react";
import styles from "./MyImage.module.css"; // Import the updated CSS module

const MyImage = ({ imgs = [{ url: "" }] }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["main-screen"]}>
        <img src={imgs[0].url} alt={imgs[0].filename} />
      </div>
    </div>
  );
};

export default MyImage;
