import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-Item/category-item';

class Landing extends React.Component {
  componentDidMount(prevProps) {
    console.log('prevProps', prevProps);
    console.log('prevProps', this.prevProps);
  }

  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <div className="create-category">
        <CategoryForm onComplete={categoryCreate} />
        </div>
        <div className="budget-category">
        {categories
          ? categories.map(category => <CategoryItem category={category} key={category._id} />)
          : undefined
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
  console.log(store);
  
  return {
    categories: store.category,
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
