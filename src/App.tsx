import React, { useState, useEffect, ChangeEvent } from 'react';

// Styles
import './App.css';

// Components
import CardList from './components/cardList/CardList';
import SearchBox from './components/searchBox/SearchBox';

// Utils
import { getData } from './utils/data';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilterMonsters] = useState(monsters);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilterMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>

			<SearchBox
				className='monsters-search-box'
				onChangeHandler={onSearchChange}
				placeholder='Search Monsters'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
