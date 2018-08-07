import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';

const mapDispatchToProps = dispatch => ({
  expenseRemove: data => dispatch(expenseActions.removeExpense(data)),
  expenseUpdate: data => dispatch(expenseActions.updateExpense(data)),
});

class Expense extends React.Component {
  render() {
    const {
      expense, expenseRemove, expenseUpdate, category,
    } = this.props;
    return (
      <div className="expense" data-cy="expense">
        <p>{expense.name}</p>
        <button onClick={() => expenseRemove({ ...expense, categoryId: category._id })}>Delete</button>
        <ExpenseForm
          expense={expense}
          onComplete={expenseUpdate}
          category={category}
        />
      </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  expenseRemove: PropTypes.func,
  expenseUpdate: PropTypes.func,
  category: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(Expense);
