import styles from './styles.module.scss'
import ServiceCard from '../ServicesCard'

const ServiceSection = () => {
  return (
    <ul>
      <ServiceCard
        photo="/images/section1.jpg"
        bgColor="#C9C4C1"
        color="#3C3A3A"
        title="Aspectos Patrimoniales del Derecho de las Familias"
        caption="Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed. 
        Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad. 
        Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne."
      />
      <ServiceCard
        photo="/images/section2.jpg"
        bgColor="#211A14"
        title="Litigios Civiles y Asesoramiento Legal"
        caption="Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed.
       Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad. 
       Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne."
      />
      <ServiceCard
        photo="/images/section3.jpg"
        bgColor="#BA8E61"
        title="Consultoría en Tecnologías Legales"
        caption="Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed.
       Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad.
        Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne."
      />
      <ServiceCard
        photo="/images/section4.jpg"
        bgColor="#D4BAA1"
        color="#3C3A3A"
        title="Desarrollo de Sistemas y Procesos Legales"
        caption="Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed. 
      Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad.
       Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne."
      />
    </ul>


  )
}

export default ServiceSection; 