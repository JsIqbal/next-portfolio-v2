import Image from "next/image";
import styles from "./about.module.css";
import Button from "@/components/button/button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    fill={true}
                    src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>
                        Handcrafting award winning digital experience.
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam malesuada auctor velit, in pharetra eros hendrerit
                        vitae. Vestibulum varius, justo a ultricies iaculis,
                        ante augue lobortis orci, ut porta mauris magna nec est.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        <br />
                        Proin eu iaculis velit. Cras quam nibh, maximus semper
                        pretium vel, elementum vitae nibh. Morbi pretium sem ut
                        metus cursus fringilla. Sed eu nisl euismod, maximus
                        nunc ut, efficitur diam. Vestibulum suscipit lectus
                        venenatis, laoreet ante fermentum, commodo purus. Nam et
                        ex diam. Ut ultrices, eros a pellen
                    </p>
                </div>
                <div className={styles.item}>
                    {" "}
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>
                        Vestibulum varius, justo a ultricies iaculis, ante augue
                        lobortis orci, ut porta mauris magna nec est. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Proin
                        eu iaculis velit. Cras quam nibh, maximus semper pretium
                        vel, elementum vitae nibh. Morbi pretium sem ut metus
                        cur diam. Vestibulum suscipit lectus venenatis, laoreet
                        ante fermentum, commodo purus. Nam et ex diam. Ut
                        ultrices, eros a pellen
                        <br />
                        <br /> - Dynamic Web App
                        <br />
                        <br /> - Fast & Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button url="/contact" text="contact" />
                </div>
            </div>
        </div>
    );
};

export default About;
