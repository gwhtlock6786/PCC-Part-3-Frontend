const ChildComponent = () => {
  return (
    <div>
      <h1>Child Component</h1>
      <p>I am the child</p>
      <p>I am rendered by being called by the parent component</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>

        <ChildComponent />

        <hr />
      </div>
    );
  }
}

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        {/* Change code above this line */}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Composition Example - App component generates all child components
        </h1>
        <ParentComponent />

        <TypesOfFood />
        <hr />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("ParentandChildComponents"));
