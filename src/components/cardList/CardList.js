import React from 'react';

// Components
import Card from '../card/Card';

// Styles
import './cardList.css';

const CardList = ({ monsters }) => {
	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				return <Card key={monster.id} monster={monster} />;
			})}
		</div>
	);
};

export default CardList;
