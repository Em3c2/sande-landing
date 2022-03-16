import dynamic from 'next/dynamic'
import styles from "./styles.module.scss"

const StaffCard = dynamic(() => import('../StaffCard/'))

const StaffSection = ({ full }) => (
  <section className={styles.staffSection}>
    <h2 className={`${styles.title}`}>El Equipo</h2>
    <div className={styles.staffCards}>
      <StaffCard
        photo="/images/photo-staff-1.jpg"
        color="#6683bb"
        name="Tomas Sande"
        role="Founder"
        email="tomassande@estudio.com"
        phone="1111111111"

      />
      <StaffCard
        photo="/images/photo-staff-1.jpg"
        color="#6683bb"
        name="Tomas Sande"
        role="Founder"
        email="tomassande@estudio.com"
        phone="1111111111"

      />
      <StaffCard
        photo="/images/photo-staff-1.jpg"
        color="#6683bb"
        name="Tomas Sande"
        role="Founder"
        email="tomassande@estudio.com"
        phone="1111111111"
        className="block md:hidden lg:block"
      />
      {
        full && (
          <>
            <StaffCard
              photo="/images/photo-staff-1.jpg"
              color="#6683bb"
              name="Tomas Sande"
              role="Founder"
              email="tomassande@estudio.com"
              phone="1111111111"
              className="block md:hidden lg:block"
            />
            <StaffCard
              photo="/images/photo-staff-1.jpg"
              color="#6683bb"
              name="Tomas Sande"
              role="Founder"
              email="tomassande@estudio.com"
              phone="1111111111"
              className="block md:hidden lg:block"
            />
            <StaffCard
              photo="/images/photo-staff-1.jpg"
              color="#6683bb"
              name="Tomas Sande"
              role="Founder"
              email="tomassande@estudio.com"
              phone="1111111111"
              className="block md:hidden lg:block"
            />
          </>
        )
      }
    </div>
    <button className='btn__blue-filled'>Conocenos</button>
  </section>
)

export default StaffSection