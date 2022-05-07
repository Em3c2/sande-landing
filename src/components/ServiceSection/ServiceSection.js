import styles from './styles.module.scss'
import ServiceCard from '../ServicesCard'

const ServiceSection = () => {
  return (
    <ul>
      <ServiceCard
        photo="/images/section1.jpg"
        id="section1"
        bgColor="#C9C4C1"
        color="#3C3A3A"
        title="Aspectos Patrimoniales del Derecho de las Familias"
        caption="Las cuestiones relacionadas al Derecho de las Familias y, especialmente, sus aspectos patrimoniales, son el eje central de nuestros servicios de asesoría jurídica. Desde nuestros comienzos, las cuestiones relativas a los divorcios, regímenes patrimoniales matrimoniales y protección del patrimonio han sido nuestro foco de mayor interés, habiendo desarrollado extensivamente nuestra labor profesional en estas áreas."
      />
      <ServiceCard
        photo="/images/section2.jpg"
        id="section2"
        bgColor="#211A14"
        title="Litigios Civiles y Asesoramiento Legal"
        caption="Fuera de los aspectos netamente patrimoniales, nuestro equipo aborda la totalidad del espectro del Derecho de las Familias, acompañando además a nuestros clientes en otros litigios civiles que consideren complementarios o necesarios. Además del respaldo litigioso, asesoramos a nuestros clientes en distintas perspectivas legales sobre una pluralidad de tópicos vinculados al Derecho Civil."
      />
      <ServiceCard
        id="section3"
        photo="/images/section3.jpg"
        bgColor="#BA8E61"
        title="Consultoría en Tecnologías Legales"
        caption="A fin de mantener nuestros servicios al día para garantizar el mayor valor posible a nuestros clientes, hemos desarrollado distintos tipos de metodologías y herramientas internas que facilitan nuestra labor legal. Gracias a ello, y a nuestra labor académica en la Universidad del CEMA, ofrecemos servicios de consultoría en tecnologías aplicadas al campo legal, abordando problemas vinculados al desarrollo y adopción de soluciones digitales."
      />
      <ServiceCard
        photo="/images/section4.jpg"
        id="section4"
        bgColor="#D4BAA1"
        color="#3C3A3A"
        title="Desarrollo de Sistemas y Procesos Legales"
        caption="Habiendo realizado diversos proyectos de desarrollo en productos digitales, hemos tenido la suerte de trabajar en el desarrollo de sistemas de resolución de conflictos virtuales y mejoramiento de procesos legales. Por eso, ofrecemos a nuestros clientes la posibilidad de imaginar y diseñar, conjuntamente, soluciones digitales que tiendan a mejorar los sistemas de resolución de conflictos, además de los diversos procesos legales que puedan digitalizarse."
      />
    </ul>


  )
}

export default ServiceSection; 