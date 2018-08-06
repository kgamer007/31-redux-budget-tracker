import React from 'react';
import PropTypes from 'prop-types';
import './expense-form.scss';

const defaultState = {
  name: '',
  price: 0, 
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = this.props.expense || defaultState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(defaultState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';
    const formText = expense ? `Update ${expense.name} Expense` : 'Create Expense';
    return (
      <form
        className="expense-form"
        data-cy="expense-form"
        onSubmit={ this.handleSubmit }
      >
        <label htmlFor="name">{ formText }</label>
        <input 
          type="text"
          name="name"
          placeholder="Enter New Expense Name"
          value={ this.state.name }
          onChange={ this.handleChange }
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

ExpenseForm.PropTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};
