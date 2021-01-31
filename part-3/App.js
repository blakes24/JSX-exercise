const App = () => (
	<div>
		<Person name="Josh" age={16} hobbies={[ 'surfing', 'sailing', 'biking' ]} />
		<Person name="Petyr" age={35} hobbies={[ 'manipulation', 'eavesdropping', 'ladder climbing' ]} />
		<Person name="Jed" age={55} hobbies={[ 'reading', 'trivia', 'chess' ]} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
