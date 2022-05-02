import Link from "next/link"
import dynamic from 'next/dynamic'
import styles from "./styles.module.scss"

const StaffCard = dynamic(() => import('../StaffCard/'))

const StaffSection = ({ full }) => (
  <section className={styles.staffSection}>
    <h2 className={styles.title}>El Equipo</h2>
    <div className={`${styles.staffCards} ${full ? styles.full : ''}`}>
      <StaffCard
        photo="/images/staff/eduardo.jpg"
        name="Eduardo"
        role="Founder"
        email="tomassande@estudio.com"
        phone="1111111111"
      />
      <StaffCard
        photo="/images/staff/tomas.jpg"
        name="Tomas"
        role="Founder"
        email="tomassande@estudio.com"
        phone="1111111111"
      />
      <StaffCard
        photo="/images/staff/andrea.jpg"
        name="Andrea"
        role="Founder"
        email="tomassande@estudio.com"
        phone="1111111111"
      />
      {
        full && (
          <>
            <StaffCard
              photo="/images/staff/mariarosa.jpg"
              name="Maria Rosa"
              role="Founder"
              email="tomassande@estudio.com"
              phone="1111111111"
            />
            <StaffCard
              photo="/images/staff/rosario.jpg"
              name="Rosario"
              role="Founder"
              email="tomassande@estudio.com"
              phone="1111111111"
            />
            <StaffCard
              photo="/images/staff/maia.jpg"
              name="Maia"
              role="Founder"
              email="tomassande@estudio.com"
              phone="1111111111"
            />
          </>
        )
      }
    </div>
    <Link href={full ? '/contacto' : '/estudio'}>
      <a className='btn__blue-filled'>
        {full ? 'Contactanos' : 'Conocenos'}
      </a>
    </Link>
  </section>
)

export default StaffSection;
