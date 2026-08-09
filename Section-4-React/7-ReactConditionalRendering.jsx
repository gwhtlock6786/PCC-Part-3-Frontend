//------------------------------------------------------------------------------------------------
//Render with an If-Else Condition
class RenderWithAnIfElseCondition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Change code below this line

    if (this.state.display) {
      return (
        <div>
          <h1>Render with an If-Else Condition</h1>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h2>Displayed!</h2>
          <p>
            ===================================================================================
          </p>
          <hr />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Render with an If-Else Condition</h1>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <p>
            ===================================================================================
          </p>
          <hr />
        </div>
      );
    }
  }
}

//------------------------------------------------------------------------------------------------
//Use && for a More Concise Conditional
//logical and === &&
class UseLogalicalAndForAMoreConciseConditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Render with logical && Conditional statement</h1>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {/* code belowwill only run if it meets the condition before && */}
        {this.state.display && <h1>Displayed!</h1>}
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// Use a Ternary Expression for Conditional Rendering

const inputStyle = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      input: "",
      userAge: "",
    };
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "",
    });
  }
  submit() {
    this.setState((state) => ({
      userAge: state.input,
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h1>Use a Ternary Expression for Conditional Rendering</h1>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {this.state.userAge === ""
          ? buttonOne
          : this.state.userAge < 18
            ? buttonThree
            : buttonTwo}
        <hr />

        {/* Change code above this line */}
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// Render Conditionally from Props

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      /* Change code below this line */
    }
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
    {
      /* Change code above this line */
    }
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  render() {
    const expression = Math.random() >= 0.5; // Change this line
    return (
      <div>
        <h1>Render Conditionally from Props</h1>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{"Turn: " + this.state.counter}</p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// Change Inline CSS Conditionally Based on Component State

class ChangeInlineCSSConditionally extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    let inputStyle = {
      border: "1px solid black",
    };
    // Change code below this line

    if (this.state.input.length > 15) {
      inputStyle = {
        border: "3px solid red",
      };
    }
    // Change code above this line
    return (
      <div>
        <h1>Change Inline CSS Conditionally Based on Component State</h1>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
//Use Array.map() to Dynamically Render Elements

const textAreaStyles = {
  width: 235,
  margin: 5,
};

class UseArraymapToDynamicallyRenderElements extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: "",
      toDoList: [],
    };
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray,
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  render() {
    const items = this.state.toDoList.map((item, index) => {
      return <li key={index}>{item}</li>;
    }); // Change this line
    return (
      <div>
        <h1>Use Array.map() to Dynamically Render Elements</h1>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
//Give Sibling Elements a Unique Key Attribute

const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function GiveSiblingElementsaUniqueKeyAttribute() {
  const renderFrameworks = frontEndFrameworks.map((item, index) => {
    return <li key={index}>{item}</li>;
  }); // Change this line
  return (
    <div>
      <h1>Give Sibling Elements a Unique Key Attribute</h1>
      <h3>Popular Front End JavaScript Frameworks</h3>
      <ul>{renderFrameworks}</ul>
      <hr />
    </div>
  );
}

//------------------------------------------------------------------------------------------------
//Use Array.filter() to Dynamically Filter an Array

class UseArrayFilterToDynamicallyFilterAnArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: "Jeff", online: true },
        { username: "Alan", online: false },
        { username: "Mary", online: true },
        { username: "Jim", online: false },
        { username: "Sara", online: true },
        { username: "Laura", online: true },
      ],
    };
  }

  render() {
    // Get only online users
    const usersOnline = this.state.users.filter((user) => user.online);

    // Map usernames into <li> elements
    const renderOnline = usersOnline.map((user, index) => {
      return <li key={index}>{user.username}</li>;
    });

    return (
      <div>
        <h1>Use Array.filter() to Dynamically Filter an Array</h1>
        <h3>Current Online Users:</h3>
        <ul>{renderOnline}</ul>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
//Render React on the Server with renderToString

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

ReactDOMServer.renderToString(<App />);
console.log(ReactDOMServer.renderToString(<App />));
//------------------------------------

ReactDOM.render(
  <RenderWithAnIfElseCondition />,
  document.getElementById("RenderWithAnIf-ElseCondition"),
);
ReactDOM.render(
  <UseLogalicalAndForAMoreConciseConditional />,
  document.getElementById("UseLogalicalAndForAMoreConciseConditional"),
);
ReactDOM.render(
  <CheckUserAge />,
  document.getElementById("UseTernaryExpressionForConditionalRendering"),
);
ReactDOM.render(
  <GameOfChance />,
  document.getElementById("RenderConditionallyFromProps"),
);
ReactDOM.render(
  <ChangeInlineCSSConditionally />,
  document.getElementById("ChangeInlineCSSConditionally"),
);

ReactDOM.render(
  <UseArraymapToDynamicallyRenderElements />,
  document.getElementById("UseArraymapToDynamicallyRenderElements"),
);
ReactDOM.render(
  <GiveSiblingElementsaUniqueKeyAttribute />,
  document.getElementById("GiveSiblingElementsaUniqueKeyAttribute"),
);
ReactDOM.render(
  <UseArrayFilterToDynamicallyFilterAnArray />,
  document.getElementById("UseArrayFilterToDynamicallyFilterAnArray"),
);
