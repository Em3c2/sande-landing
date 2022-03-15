import styles from './styles.module.scss'
import Image from '../Image'

const StaffCard = ({ name, role, email, phone, photo = '/images/photo-staff-1.jpg' }) => {
  return (
    <article className={styles.card}>
      <Image className={styles.photo} src={photo} width="545" height="473" objectFit="cover" objectPosition="relative" />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </article>
  )
}

export default StaffCard
