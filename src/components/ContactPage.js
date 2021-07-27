import ContactForm from './ContactForm';
import styles from './ContactPage.module.css';

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Tutor Here</h1>
            <ContactForm />
        </div>
    )
}

export default ContactPage;