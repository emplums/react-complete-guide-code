import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({handleFormSubmit}) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit({
      id: Math.random().toString(),
      title,
      amount,
      date: new Date(date)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={title} onChange={handleTitleChange}/>
      <label htmlFor="date">Date</label>
      <input type="date" name="date" placeholder="yyyy-mm-dd" value={date} onChange={handleDateChange}/>
      <label htmlFor="amount">Amount</label>
      <input type="amount" name="amount" value={amount} onChange={handleAmountChange}/>
      <button>Submit!</button>
    </form>
  );
};

export default ExpenseForm;
