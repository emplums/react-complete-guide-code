import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({items}) => {
  const [filterValue, setFilterValue] = useState('2021')

  const onFilter = (value) => setFilterValue(value)

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter years={items.map(item => item.date.getFullYear().toString())} onFilter={onFilter} filterValue={filterValue}/>
        {items.filter(item => item.date.getFullYear().toString() === filterValue).map(item => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
