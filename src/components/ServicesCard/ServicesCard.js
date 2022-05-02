import styles from './styles.module.scss'

import Image from '../Image'

const ServiceCard = ({ title, caption, bgColor, color = '#fefefe', photo = '/images/section1.png' }) => {
    return (
        <div className={styles.containerServices} style={{ backgroundColor: bgColor, color }}>
            <div className={styles.boxImage}>
                <Image src={photo} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.boxServices}>
                <p className={styles.title}>{title}</p>
                <p className={styles.caption}>{caption}</p>
            </div>
        </div>
    )
}

export default ServiceCard;