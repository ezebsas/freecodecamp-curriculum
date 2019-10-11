
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Eze"
    }

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
