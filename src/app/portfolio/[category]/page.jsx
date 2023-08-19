import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Category;
