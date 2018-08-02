import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import './category-item.scss';

class Category extends React.Component {
  render() {
    const {
      category, 
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;
    return (
      <div className="category-item" key={key}>
        <h1> { category.name } { category.budget } </h1>
        <button onClick={() => categoryRemove(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
      </div>
    );
    // TODO line 17, the category.budget is what makes the number display 0 next to name.
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  // We are creating props from inside this component and these props are essentially internal
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)), 
    // dispatch({ type: "SECTION_REMOVE": payload: {something}})
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

// Redux's connect method takes in a first argument that we're not utilizing yet so it's null
// The second arg is the mapDispatchToProps function we defined above
// connect RETURNS a new function that expects a React component
// and this is how we hook up this component to the Redux store
export default connect(null, mapDispatchToProps)(Category);
