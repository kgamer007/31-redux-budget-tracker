import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-Item/category-item';

class Landing extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <div className="create-category">
        <CategoryForm onComplete={categoryCreate} />
        </div>
        <div className="budget-category">
        {
          categories.map((currentCategory, i) => <CategoryItem category={currentCategory} key={i} />)
        }
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

// This is us grabbing the Redux store to make those props of this component
const mapStateToProps = (store) => {
  return {
    categories: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
    // dispatch({ type: 'SECTION_CREATE', payload: stuff})
  };
};

// this is currying, where we return another function with one argument from an outer function
// this would be what happens behind the scenes
// const middleFunction = connect(mapStateToProp,mapDispatchToProps);
// export default middleFunction(Landing);
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
