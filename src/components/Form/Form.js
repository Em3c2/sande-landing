import { useState, useEffect, useRef } from 'react'
import Image from "../Image";
import styles from "./styles.module.scss";
import Spinner from '../Spinner';

const emptyForm = {
  name: "",
  email: "",
  message: "",
};

const inputNames = {
  name: "Nombre y Apellido",
  email: "Email",
  message: "Mensaje"
}

const Form = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState('');
  const [submiting, setSubmiting] = useState(false);
  const formRef = useRef(null);

  const verifyInputs = data => {
    const names = Object.keys(data);
    const emptyInput = names.find(name => !data[name].length);
    if (emptyInput) return Promise.reject(`⚠️ El campo '${inputNames[emptyInput]}' es obligatorio.`);

    const isValidEmail = data.email.includes('@') && !data.email.includes(' ');
    if (!isValidEmail) return Promise.reject(`⚠️ Ingrese un email válido.`);

    return Promise.resolve(data);
  };

  const postForm = data => {

    fetch('/api/form', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setSubmiting(false);
      setFormData(emptyForm);
    }).catch(err => {
      console.log(err);
      setSubmiting(false);
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (submiting) return;
    setSubmiting(true)

    verifyInputs(formData)
      .then(res => {
        postForm(res)
      })
      .catch(err => {
        setSubmiting(false)
        setError(err)
      })
  };

  const handleInput = ({ target: { name, value } }) => {
    if (submiting) return;
    setError(null);

    setFormData(formData => ({ ...formData, ...{ [name]: value } }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.image__desktop}>
        <Image src="/images/rombo.png" width="780" height="785" />
      </div>
      <div className={styles.image__mobile}>
        <Image src="/images/rombo-mobile.png" layout="responsive" width="375" height="187" />
      </div>
      <div className={styles.containerForm}>
        <h3 className={styles.contact}>Contactanos</h3>
        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
          <input type="text" name="name" placeholder="Nombre y apellido" onInput={handleInput} value={formData.name} className={styles.input}></input>
          <input type="text" name="email" placeholder="Email" onInput={handleInput} value={formData.email} className={styles.input}></input>
          <textarea name="message" placeholder="Contanos sobre..." onInput={handleInput} value={formData.message} className={styles.input}></textarea>
          <button
            className={styles.button}>
            {submiting ? <Spinner /> : 'Enviar'}
          </button>
          <p className='h-3 text-yellow-200 text-lg align-middle my-5 select-none'>{error ? error : ' '}</p>
        </form>
      </div>
    </div>
  )
}

export default Form; 