import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = email => /\S+@\S+\.\S+/.test(email);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors({ ...errors, [name]: 'Invalid email address' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  return (
    <section>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onBlur={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onBlur={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" onBlur={handleChange}></textarea>
          {errors.message && <p>{errors.message}</p>}
        </div>
      </form>
    </section>
  );
}

export default Contact;