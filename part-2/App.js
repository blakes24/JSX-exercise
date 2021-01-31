const App = () => {
	return (
		<div>
			<Tweet name="Josh" username="jbsurf" date="1/31/21" msg="Surf's up!" />
			<Tweet name="Petyr" username="mockingbird" date="1/31/21" msg="I told you not to trust me." />
			<Tweet name="Jed" username="potus" date="1/31/21" msg="What's Next?" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
