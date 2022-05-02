import styles from './styles.module.scss'
import ServiceCard from '../ServicesCard'

const ServiceSection = () => {
  return (
    <div>
      <ServiceCard
        photo="/images/section1.jpg"
        title="Aspectos Patrimoniales del Derecho de las Familias"
        caption="Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed. 
        Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad. 
        Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne."
       />
      <ServiceCard
      photo="/images/section2.jpg"
      title="Litigios Civiles y Asesoramiento Legal"
      caption="Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed.
       Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad. 
       Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne."
       />
      <ServiceCard 
      photo="/images/section3.jpg"
      title="Consultoría en Tecnologías Legales"
      caption="Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed.
       Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad.
        Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne."
      />
      <ServiceCard
      photo="/images/section4.jpg"
      title="Desarrollo de Sistemas y Procesos Legales"
      caption="Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed. 
      Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad.
       Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne."
       />
    </div>
    

  )
}

export default ServiceSection; 