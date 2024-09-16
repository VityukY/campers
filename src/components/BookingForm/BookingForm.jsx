import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../utils//datepicker_manual.css'
import styles from './BookingForm.module.css'; 
import ButtonMain from '../ButtonMain/ButtonMain';
import toast from 'react-hot-toast';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: null, 
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
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = [...existingBookings, formData];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    toast.success('Yor camper successfully booked')
    setFormData({
      name: '',
      email: '',
      bookingDate: null,
      comment: '',
    });

    console.log('Form data submitted and saved to localStorage:', formData);
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


      <DatePicker
        selected={formData.bookingDate}
        onChange={handleDateChange}
        minDate={new Date()} 
        dateFormat="dd/MM/yyyy"
        placeholderText="Booking date*"
        className={styles.input}
        required
        calendarStartDay={1}
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