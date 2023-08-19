import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
    return (
        <div>
            {" "}
            <Link href="blog/testid" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>title</h1>
                    <p className={styles.desc}>desc</p>
                </div>
            </Link>
            <Link href="blog/testid" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>title</h1>
                    <p className={styles.desc}>desc</p>
                </div>
            </Link>
            <Link href="blog/testid" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>title</h1>
                    <p className={styles.desc}>desc</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;
