const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="Blakely" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
