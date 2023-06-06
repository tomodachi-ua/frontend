import React, {useState} from "react";
import styles from "../styles/about_item.module.scss"


const AboutItem = (props) => {
    const { data } = props;
    const [isVisible, setIsVisible] = useState(false);

    const handleShowDescription = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={styles.about_item}>
            <button className={styles.subtitle} onClick={handleShowDescription}>
                {data.title}
                <svg className={styles.more_btn} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                     style={{
                         transform: isVisible ? "" : "scale(1, -1)",
                     }}>
                    <g clip-path="url(#clip0_118_344)">
                        <path d="M12.449 16.8367L19.5918 23.9795L26.7347 16.8367" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <rect x="0.5" y="-0.5" width="39" height="39" rx="19.5" transform="matrix(1 0 0 -1 0 39)" stroke="#ffffff"/>
                    <defs>
                        <clipPath id="clip0_118_344">
                            <rect width="16.3265" height="16.3265" fill="white" transform="translate(11.4285 12.2449)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <p className={styles.description}  style={{
                display: isVisible ? "block" : "none",
            }}>
                {data.description}
            </p>
        </div>
    );
};

export default AboutItem;