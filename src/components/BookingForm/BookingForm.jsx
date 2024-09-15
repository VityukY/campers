import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css'; // Ваші кастомні стилі
import ButtonMain from '../ButtonMain/ButtonMain';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: null, // змінили на null для DatePicker
    comment: '',
  });

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      bookingDate: date,
    }));
  };

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
    // Додайте вашу логіку для відправлення форми
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

      {/* Оновлений компонент для вибору дати */}
      <DatePicker
        selected={formData.bookingDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Booking date*"
        className={styles.input}
        required
        calendarStartDay={1} // Початок тижня з понеділка
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
}
