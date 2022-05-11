import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';
import Button from '../Button/Button';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    onSubmit(contact);
    setName('');
    setNumber('');
    console.log(contact);
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          placeholder="Phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +00 000 000 00 00"
          required
          onChange={handleChange}
        />
      </label>
      <Button text="Add Contact" />
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class ContactForm extends React.Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//       id: nanoid(),
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({
//       name: '',
//       number: '',
//       id: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
// return (
//   <form className={s.container} onSubmit={this.handleSubmit}>
//     <label>
//       <input
//         className={s.input}
//         type="text"
//         name="name"
//         value={name}
//         placeholder="Name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         onChange={this.handleChange}
//       />
//     </label>
//     <label>
//       <input
//         className={s.input}
//         type="tel"
//         name="number"
//         value={number}
//         placeholder="Phone"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +00 000 000 00 00"
//         required
//         onChange={this.handleChange}
//       />
//     </label>
//     <Button text="Add Contact" />
//   </form>
// );
//   }
// }
