import Image from "next/image";
import style from "./footer.module.css";

const Footer = () => {
    return (
        <div className={style.container}>
            <div>2023 IQBAL. All rights reserved</div>
            <div>
                <div className={style.social}>
                    {" "}
                    <Image
                        src="/1.png"
                        className={style.icon}
                        width={15}
                        height={15}
                        alt="IQBAL"
                    />
                    <Image
                        src="/2.png"
                        className={style.icon}
                        width={15}
                        height={15}
                        alt="IQBAL"
                    />
                    <Image
                        src="/3.png"
                        className={style.icon}
                        width={15}
                        height={15}
                        alt="IQBAL"
                    />
                    <Image
                        src="/4.png"
                        className={style.icon}
                        width={15}
                        height={15}
                        alt="IQBAL"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
