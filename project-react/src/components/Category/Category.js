import React from 'react';
import './Category.scss';

function Category(props) {
    const {title, value, color} = props;
    return (
        <div className='category'>
            <div className='category__header'>{title}</div>
            <div className='category__circle' style={{ backgroundColor:  color}}></div>
            <div className='category__sum'>{value} RUB</div>
        </div>
    );
}

export default Category;