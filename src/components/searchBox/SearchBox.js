import React from 'react';

// Styles
import './searchBox.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
	return (
		<input
			className={`search-box ${className}`}
			type='search'
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBox;
