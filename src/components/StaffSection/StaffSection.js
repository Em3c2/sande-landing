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
        name="J. Eduardo Sande"
        role="Partner Fundador"
        bio="El Dr. Sande fundó el estudio con el claro objetivo de atender las necesidades de sus clientes con la diligencia y confianza que nos caracteriza. Graduado de la Universidad de Buenos Aires, cuenta con una extensa y destacada trayectoria en Derecho de las Familias, siendo uno de los primeros profesionales de nuestro país en abocarse a esta rama jurídica, interviniendo en casos de notoria trascendencia pública."
      />
      <StaffCard
        photo="/images/staff/tomas.jpg"
        name="Tomás Sande"
        role="Partner"
        email="tomas@estudiosande.com"
        bio="Siendo el principal encargado de promover y acompañar los litigios del estudio, cuenta además con una fuerte impronta tecnológica que contribuye a ampliar el horizonte de servicios de nuestra organización. Graduado de la Universidad de Buenos Aires, participa y coordina grupos de investigación en la Facultad de Derecho y la Facultad de Ciencias Políticas de su alma mater, siendo además Director del Programa Ejecutivo en Legaltech de la Universidad del CEMA y coordinador del laboratorio de investigación del mismo área."
      />
      <StaffCard
        photo="/images/staff/mariarosa.jpg"
        name="Maria Rosa Said"
        role="Partner"
        bio="La Dra. Said es parte integral del estudio desde hace más de 20 años, contando con una impecable trayectoria en materia de Derecho de las Familias. Graduada en la Universidad de Buenos Aires, es la principal encargada de los litigios civiles en el ámbito de la Provincia de Buenos Aires, asegurando el efectivo control y acompañamiento de los procesos judiciales sometidos a dicha jurisdicción."
      />
      {
        full && (
          <>
            <StaffCard
              photo="/images/staff/andrea.jpg"
              name="Andrea Campbell"
              role="Partner"
              bio="La Dra. Campbell posee una notoria trayectoria en medios de comunicación y, actualmente, desarrolla su labor profesional legal en el ámbito de los litigios civiles y siniestros, contando además con un posgrado en UBA relacionado al Derecho de los Seguros."
            />
            <StaffCard
              photo="/images/staff/rosario.jpg"
              name="Rosario Lawson"
              role="Abogada"
              bio="Abogada por la Universidad de Buenos Aires, Rosario interviene activamente en los litigios civiles del estudio, representando activamente a nuestros asesorados tanto en el ámbito de la Capital Federal como en la Provincia de Buenos Aires."
            />
            <StaffCard
              photo="/images/staff/maia.jpg"
              name="Maira Riscossa"
              role="Paralegal"
              bio="Asumiendo las tareas de seguimiento y control, Maira se ocupa de gestionar y comunicar los avances y estado de situación de los litigios en los que interviene, apoyando activamente a los abogados a cargo de su área."
            />
            <StaffCard
              photo="/images/staff/miranda.jpg"
              name="Miranda Campos"
              role="Abogada Externa"
              bio="Abogada por la Universidad de Buenos Aires, Miranda colabora con los juicios de la firma mediante su intervención en el seguimiento de los litigios en curso, apoyando al equipo principalmente en lo que hace a los litigios civiles propios del Derecho de las Familias."
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
