const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  let categoryId;
  let categoryExpenses;
  let updatedExpenses;
  let updatedState;

  switch (type) {
    case 'CATEGORY_CREATE':
    console.log(payload) 
      return { ...state, [payload.id]: [payload] };
    case 'CATEGORY_REMOVE':
      updatedState = { ...state };
      // we delete the id property off this staet
      delete updatedState[payload.id];
      return updatedState;
    case 'EXPENSE_CREATE': 
      categoryId = payload.categoryId; // eslint-disable-line
      categoryExpenses = state[categoryId];
      updatedExpenses = [...state, payload];
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_UPDATE': 
      categoryId = payload.categoryId; // eslint-disable-line
      categoryExpenses = state[categoryId];
      updatedExpenses = categoryExpenses.map(expense => (expense.id === payload.id ? payload : expense));
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_REMOVE':
      categoryId = payload.categoryId; // eslint-disable-line
      categoryExpenses = state[categoryId];
      updatedExpenses = categoryExpenses.filter(expense => expense.id !== payload.id);
      return { ...state, [categoryId]: updatedExpenses };
    default: 
      return state;
  }
};
