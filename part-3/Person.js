const Person = (props) => {
	const hobbies = props.hobbies.map((h) => <li>{h}</li>);
	return (
		<div>
			<p>Learn some information about this person</p>
			<ul>
				<li>Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}</li>
				<li>Age: {props.age}</li>
				<li>
					Hobbies:<ul>{hobbies}</ul>
				</li>
			</ul>
			<h3>{props.age < 18 ? 'You must be 18' : 'Please go vote!'}</h3>
		</div>
	);
};
