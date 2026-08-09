// ----------------------------------------------------------------------------
// Basic State example using a class component
// Reference state in return statement

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: "Gershon",
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>Basic State example using a class component</h1>
        <h2>{this.state.firstName}</h2>
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

// ----------------------------------------------------------------------------
//State example - saving state in a variable then using the variable in the return statement

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        <h2>State Saved inside a variable then called in the return</h2>
        {/* Change code below this line */}
        {name}
        {/* Change code above this line */}
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

// ----------------------------------------------------------------------------
//State example - setting state using this.state

class SetStateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    //binds this keyword to the handleCLick method so it can access this.setState
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //Allows you to toggle between two states on button click
    let newName =
      this.state.name === "Initial State" ? "React Rocks!" : "Initial State";
    // Change code below this line
    this.setState({
      name: newName,
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <h2>Set State Example - setting state using this.state</h2>
        <h3>Click the button to toggle the state:</h3>
        <button onClick={this.handleClick}>Click Me</button>
        <h3>{this.state.name}</h3>
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

// ----------------------------------------------------------------------------
//State example - Use State to Toggle an Element

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

//------------------------------------------------------------------------------------------------
//Write a Simple Counter

class WriteSimpleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState((state) => ({
      count: (state.count += 1),
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: (state.count -= 1),
    }));
  }

  reset() {
    this.setState((state) => ({
      count: (state.count = 0),
    }));
  }

  // Change code above this line
  render() {
    return (
      <div>
        <h1>Set State Example - Write a Simple Counter</h1>
        <h2>Click the buttons to change the count:</h2>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h3>Current Count: {this.state.count}</h3>
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
//Create a Controlled Input

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        <h1>Set State Example - Controlled Input</h1>
        <h2>Type something in the input box:</h2>
        {/* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
//Create a Controlled Form
class CreateControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      formSubmissionResults: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    // Change code below this line
    event.preventDefault();
    this.setState({
      formSubmissionResults: this.state.input,
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <h1>Set State Example - Controlled Form</h1>

        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input value={this.state.input} onChange={this.handleChange} />
          {/* Change code above this line */}
          <button type="submit">Submit!</button>
          <hr />
        </form>
        {/* Change code below this line */}
        <h1>{this.state.formSubmissionResults}</h1>
        {/* Change code above this line */}
        <p>
          ===================================================================================
        </p>
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// Pass State as Props to Child Components

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h2>Hello, my name is: {this.props.name} </h2>
        {/* Change code above this line */}
      </div>
    );
  }
}

class PassStateAsPropsToChildComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        <h1>Set State Example - Pass State as Props to Child Components</h1>

        {/* Change code below this line */}
        <Navbar name={this.state.name} />
        {/* Change code above this line */}
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// Pass a Callback as Props to Child Components

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}

class PassCallbackAsPropsToChildComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>Pass a Callback as Props to Child Components</h1>
        {/* Change code below this line */}
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
        {/* Change code above this line */}
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------

//List of Renders to DOM
ReactDOM.render(<StatefulComponent />, document.getElementById("UsingState"));
ReactDOM.render(
  <MyComponent />,
  document.getElementById("SaveStateInVariable"),
);
ReactDOM.render(
  <SetStateExample />,
  document.getElementById("SetStateExample"),
);
ReactDOM.render(
  <UseStateToToggleElement />,
  document.getElementById("UseStateToToggleElement"),
);
ReactDOM.render(
  <WriteSimpleCounter />,
  document.getElementById("WriteSimpleCounter"),
);
ReactDOM.render(
  <ControlledInput />,
  document.getElementById("ControlledInput"),
);
ReactDOM.render(
  <CreateControlledForm />,
  document.getElementById("CreateControlledForm"),
);
ReactDOM.render(
  <PassStateAsPropsToChildComponents />,
  document.getElementById("PassStateAsPropsToChildComponents"),
);
ReactDOM.render(
  <PassCallbackAsPropsToChildComponents />,
  document.getElementById("PassCallbackAsPropsToChildComponents"),
);
