import React from 'react';
import PropTypes from 'prop-types';
import './category-form.scss';

const defaultState = {
  name: '',
  budget: 0,
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    if (!this.props.category) {
      this.setState({ name: '', budget: 0 });
    }
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form
        onSubmit={this.handleSubmit}
        className="category-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Type name here"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
        <input
          type="number"
          name="budget"
          placeholder="amount"
          value={this.state.budget}
          onChange={this.handleSubmit}
        />
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
