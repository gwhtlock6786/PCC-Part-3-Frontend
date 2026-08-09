// import React from "react";
// import ReactDOM from "react-dom";

// Basic Props example

const CurrentDate = (props) => {
  return (
    <div>
      {/* Change code below this line */}
      <p>The current date is:{props.date} </p>
      {/* Change code above this line */}
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Basic Props example</h2>
        <h3>What date is it?</h3>
        {/* Change code below this line */}
        <CurrentDate date={Date()} />
        {/* Change code above this line */}
        <p>
          ===================================================================================
        </p>
      </div>
    );
  }
}

// --------------------------------------------------------------------------------------------------------------------
// Props with Arrays example

const List = (props) => {
  {
    /* Change code below this line */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* Change code above this line */
  }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* Change code below this line */}
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "Eat Cheese Burger", " RUn a mile"]} />
        {/* Change code above this line */}
        <p>
          ===================================================================================
        </p>
      </div>
    );
  }
}

// ----------------------------------------------------------------------------
// Default Props example

const Items = (props) => {
  return <h3>Current Quantity of Items in Cart: {props.quantity}</h3>;
};

//defines the name and type of prop and also  that it is required.
//  If not provided or if it is a different type than number ex. string, will throw an error in console

Items.propTypes = { quantity: PropTypes.number.isRequired };

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Default Props example</h1>
        <Items quantity={10} />
        <p>
          ===================================================================================
        </p>
      </div>
    );
  }
}

// ----------------------------------------------------------------------------
// using this.props in a class component to access Props example

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* Change code above this line */}
        <p>
          ===================================================================================
        </p>
      </div>
    );
  }
}

class AppForThisExample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Using this.props in class example</h1>
        <Welcome name={"Gershon"} />
        <hr />
      </div>
    );
  }
}

// ----------------------------------------------------------------------------
// using proptype to require a prop and define the type it should be

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={"Gershon"} />
      </div>
    );
  }
}
// Change code below this line

const Camper = (props) => {
  return (
    <div>
      <h1>Using proptype to require a prop and define the type it should be</h1>
      <h2>welcome new camper!</h2>
      <p>{props.name}</p>
      <hr />
    </div>
  );
};

Camper.defaultProps = {
  name: "CamperBot",
};

//Cant use code below this line as PropTypes is not imported - cant do the import without creating proper react app using npm
// Camper.propTypes = {name: PropTypes.string.isRequired}

ReactDOM.render(<Calendar />, document.getElementById("ReactPropsDate"));
ReactDOM.render(<ToDo />, document.getElementById("ReactPropsArray"));
ReactDOM.render(
  <ShoppingCart />,
  document.getElementById("DefaultPropsExample"),
);
ReactDOM.render(
  <AppForThisExample />,
  document.getElementById("UsingThis.Props"),
);
ReactDOM.render(<CampSite />, document.getElementById("UsingPropType"));
