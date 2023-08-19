import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>title</h1>
                    <p className={styles.desc}>desc</p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>username</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>content</p>
            </div>
        </div>
    );
};

export default BlogPost;
