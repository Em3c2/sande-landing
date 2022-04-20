import styles from "./styles.module.scss";
import ProcessFragment from "../ProcessFragment/ProcessFragment";

const ProcessSection = ({ title, caption }) => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title} >{title}</h2>
      <h3>{caption}</h3>
      <div className={styles.wrapper}>
        <div className={styles.lineFragment} />
        <div className={styles.containerFragment}>
          <ProcessFragment
            number="01"
            subtitle="Consulta y Asesoramiento"
            paragraph="Inicialmente, buscamos entender el problema y comunicar, de manera clara, cuáles son los posibles escenarios y soluciones para nuestros clientes."
          />
          <ProcessFragment
            number="02"
            subtitle="Estrategia e Implementación"
            paragraph="Teniendo en cuenta las preferencias y necesidades de nuestros asesorados, pasamos a la etapa de diseño de estrategia y ejecución, acompañándolos en las etapas que sean necesarias para alcanzar la meta propuesta."
          />
          <ProcessFragment
            number="03"
            subtitle="Culminación"
            paragraph="Realizadas las etapas profesionales y alcanzadas las metas pretendidas, mantenemos un estrecho contacto con nuestros clientes, dejando nuestra puertasiempre abierta para asesorarlos y acompañarlos."
          />
        </div>
      </div>
    </article>
  );
};

export default ProcessSection;
