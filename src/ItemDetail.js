import './App.css';
import { useState, useEffect } from 'react';

function ItemDetail({ match }) {

	useEffect( () => {
		fetchItem();
		console.log(match);
	}, []);

	const [item, setItem] = useState({});

	const fetchItem = async () => {
		const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
		const item = await data.json();
		setItem(item);
		console.log(item);

	};

	return (
		<div>
			<h1>{item.title}</h1>
			<img src={item.image} />
		</div>
	);
}

export default ItemDetail;
