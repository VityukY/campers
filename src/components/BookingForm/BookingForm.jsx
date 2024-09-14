import  { useState } from 'react';
import styles from './BookingForm.module.css'; // Assuming your CSS file is named this way
import ButtonMain from '../ButtonMain/ButtonMain'
export default function BookingForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>Book your campervan now</h2>
      <p className={styles.subheading}>Stay connected! We are always ready to help you.</p>
      
      <input
        type="text"
        name="name"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        required
        className={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        required
        className={styles.input}
      />

      <input
        type="date"
        name="bookingDate"
        placeholder="Booking date*"
        value={formData.bookingDate}
        onChange={handleChange}
        required
        className={styles.input}
      />

      <textarea
        name="comment"
        placeholder="Comment"
        value={formData.comment}
        onChange={handleChange}
        className={styles.textarea}
      />
        <div className={styles.btnContainer}>
            <ButtonMain className={styles.button}>Send</ButtonMain>
      </div>
    </form>
  );
};

