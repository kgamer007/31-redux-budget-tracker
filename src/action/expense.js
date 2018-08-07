import uuid from 'uuid/v4';

// doing a different style of exporting this time around
export const createExpense = ({ name, price, categoryId }) => (
  console.log('in here'),
  
  {
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryId,
    _id: uuid(),
    createdOn: new Date(),
  },
});

export const updateExpense = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const removeExpense = expense => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});
