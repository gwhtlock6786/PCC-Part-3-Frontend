//------------------------------------------------------------------------------------------------
// Use The Lifecycle Method ComponentWillMount

class UseTheLifecycleMethodComponentWillMount extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log(
      "The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() -",
    );
    // Change code above this line
  }
  render() {
    return (
      <div>
        <h1>Use The Lifecycle Method ComponentWillMount</h1>
        <h3>Check console log for Component will mount output</h3>
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// Use The Lifecycle Method ComponentDidMount

class UseTheLifecycleMethodComponentDidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 8000);
  }
  render() {
    return (
      <div>
        <h1>Use The Lifecycle Method ComponentDidMount</h1>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers} </h1>
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
// Add Event Listeners

class AddEventListeners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleCtrl = this.handleCtrl.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + "You pressed the enter key! ",
    }));
  }

  handleCtrl() {
    this.setState((state) => ({
      message: state.message + "You pressed the ctrl key! ",
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }

    if (event.ctrlKey) {
      this.handleCtrl();
    }
  }
  render() {
    return (
      <div>
        <h1>Add Event Listeners</h1>
        <h1>{this.state.message}</h1>
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// OptimizeReRendersWithShouldComponentUpdate

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    // Change code below this line
    console.log(nextProps.value, "/ 2 = " + (nextProps.value % 2));
    return nextProps.value % 2 !== 0 ? false : true;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <p>
          ===================================================================================
        </p>
      </div>
    );
  }
}

class OptimizeReRendersWithShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>Optimize Re-Renders With Should Component Update</h1>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />

        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// Introducing Inline Styles

class IntroducingInlineStyles extends React.Component {
  render() {
    return (
      <div>
        <h1>Introducing Inline Styles</h1>
        {/* DOing in line styles require diffirent syntax
        must be added as an json object ParentandChildComponents
        use camel case for most that where kebab-cased */}
        <div style={{ color: "red", fontSize: 72 }}>Big Red</div>
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// Add Inline Styles in React with variables

const styles = { color: "purple", fontSize: 40, border: "2px solid purple" };

// Change code above this line
class AddInlineStylesinReact extends React.Component {
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Add Inline Styles in React Using a VAriable to hold the Styles</h1>
        <div style={styles}>Style Me!</div>
        <p>
          ===================================================================================
        </p>
        <hr />
      </div>
    );
    // Change code above this line
  }
}

//------------------------------------------------------------------------------------------------
// Use Advanced JavaScript in React Render Method

const inputStyle = {
  width: 235,
  margin: 5,
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      randomIndex: "",
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: "",
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  render() {
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful",
    ];

    const answer = possibleAnswers[this.state.randomIndex];
    // Change this line
    return (
      <div>
        <h1>Use Advanced JavaScript in React Render Method</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}
          {answer}
          {/* Change code above this line */}
          <p>
            ===================================================================================
          </p>
        </p>
        <hr />
      </div>
    );
  }
}

//List of Renders to DOM
ReactDOM.render(
  <UseTheLifecycleMethodComponentWillMount />,
  document.getElementById("UseTheLifecycleMethodComponentWillMount"),
);
ReactDOM.render(
  <UseTheLifecycleMethodComponentDidMount />,
  document.getElementById("UseTheLifecycleMethodComponentDidMount"),
);
ReactDOM.render(
  <AddEventListeners />,
  document.getElementById("AddEventListeners"),
);
ReactDOM.render(
  <OptimizeReRendersWithShouldComponentUpdate />,
  document.getElementById("OptimizeReRendersWithShouldComponentUpdate"),
);
ReactDOM.render(
  <IntroducingInlineStyles />,
  document.getElementById("IntroducingInlineStyles"),
);
ReactDOM.render(
  <AddInlineStylesinReact />,
  document.getElementById("AddInlineStylesinReact"),
);
ReactDOM.render(
  <MagicEightBall />,
  document.getElementById("UseAdvancedJavaScriptInReactRenderMethod"),
);
