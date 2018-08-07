import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import './category-item.scss';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';
import ExpenseItem from '../expense-item/expense-item';

class Category extends React.Component {
  render() {
    const {
      category,
      key,
      categoryRemove,
      categoryUpdate,
      expenseCreate,
      expenses,
    } = this.props;
    return (
      <div className="category-item" key={key} data-cy="category">
        <h1> {category.name} {category.budget} </h1>
        <button data-cy="category-delete" onClick={() => categoryRemove(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <ExpenseForm category={category} onComplete={expenseCreate} />
        <h3>Expenses</h3>
        <ul>
          {expenses[category._id]
            ? expenses[category._id].map((expense => <ExpenseItem
              key={expense._id}
              expense={expense}
              category={category}
            />))
            : undefined
          }
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
  expenseCreate: PropTypes.func,
  expenses: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
    expenseCreate: data => dispatch(expenseActions.createExpense(data)),
  };
};

const mapStateToProps = state => ({
  expenses: state.expense,
});

// Redux's connect method takes in a first argument that we're not utilizing yet so it's null
// The second arg is the mapDispatchToProps function we defined above
// connect RETURNS a new function that expects a React component
// and this is how we hook up this component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Category);
