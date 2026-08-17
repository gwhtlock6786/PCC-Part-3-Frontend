class UseStateToToggleElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }
  // Change code above this line
  render() {
    let response = <div />;
    if (this.state.visibility) {
      response = (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      response = (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
    return (
      <div>
        <h1>Set State Example - Use State to Toggle an Element</h1>
        <h2>Click the button to toggle the state:</h2>
        {response}

        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

ReactDOM.render(
  <UseStateToToggleElement />,
  document.getElementById("UseStateToToggleElement"),
);

ReactDOM.render(
  <UseStateToToggleElement />,
  document.getElementById("UseStateToToggleElement2"),
);
