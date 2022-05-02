import { useState, memo } from 'react'
import styles from './styles.module.scss'
import Image from '../Image'
import Modal from 'react-modal';

Modal.setAppElement('body');

const StaffCard = ({ className, color, name, role, email, phone, photo = '/images/photo-staff-1.jpg' }) => {
  const [modalIsOpen, toggleModalIsOpen] = useState(false);

  const openModal = event => {
    event.preventDefault();
    event.target.blur()
    toggleModalIsOpen(current => !current);
  };

  return (
    !modalIsOpen
      ? (
        <button
          className={styles.card}
          onClick={openModal}
        >
          <Image
            src={photo}
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.caption}>
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{role}</p>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </button>
      )
      : (
        <Modal
          isOpen={modalIsOpen}
          className={styles.modal}
          onRequestClose={() => toggleModalIsOpen(false)}
        >
          <div className={styles.imageContainer} style={{ backgroundColor: color ? color : '#6683BB' }}>
            <Image
              src={photo}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className={styles.caption} style={{ backgroundColor: color ? color : '#6683BB' }}>
            <button
              className={styles.closeBtn}
              onClick={() => toggleModalIsOpen(false)}
            >
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="28.5858" x2="28.5858" y2="1" stroke="white" stroke-width="2" stroke-linecap="round" />
                <line x1="2.41421" y1="1" x2="30" y2="28.5858" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{role}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, eu eius electram pro, in autem libris sed. Quem accusata mea eu, sadipscing delicatissimi necessitatibus eos ut. Novum ubique quaestio vim ad. Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne. Novum ubique quaestio vim ad. Sea liber ignota et, eu eam lorem libris quaestio. Postea malorum sapientem ex sea, nam nonumy quaestio periculis ne.</p>
          </div>
        </Modal >
      )
  );
};

export default memo(StaffCard);