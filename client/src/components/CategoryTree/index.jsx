import React from 'react';

import './styles.scss';

const CategoryTree = props => {
    const categoryTree = props.path_from_root
        ? props.path_from_root.map(category => category.name)
        : [];

    return (
        <div className="categoryTreeContainer">
            {categoryTree.join(' > ')}
        </div>
    )
}

export default CategoryTree;