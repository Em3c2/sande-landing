import dynamic from 'next/dynamic'
import styles from "./styles.module.scss"

const StaffCard = dynamic(() => import('../StaffCard/'))

const StaffSection = ({ full }) => (
  <section className={styles.staffSection}>
    <h2 className={`${styles.title}`}>El Equipo</h2>
    <div className={styles.staffCards}>
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
    <button className='btn__blue-filled'>Conocenos</button>
  </section>
)

export default StaffSection