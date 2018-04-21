import React from 'react';

import CategoryItem from './CategoryItem';

import { connect } from 'react-redux';

class CategoryList extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.categories.map((category) => {
          return (
            <CategoryItem
              key={category.id}
              category={category}
              isActive={category.id === this.props.activeCategoryId}
              onClick={this.props.onCategoryClick}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategoryId: state.activeCategoryId,
  };
};

export default connect(mapStateToProps)(CategoryList);
