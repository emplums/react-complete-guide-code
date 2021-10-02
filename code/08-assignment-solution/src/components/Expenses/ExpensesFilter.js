import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({onFilter, filterValue, years}) => {

  const handleFilter = (e) => onFilter(e.target.value)
  const uniqYears = [... new Set(years)].sort()

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select name="years" value={filterValue} onChange={handleFilter}>
          {uniqYears.map(year => <option value={year}>{year}</option>)}
        </select>
      </div>
    </div>

  );
};

export default ExpensesFilter;
