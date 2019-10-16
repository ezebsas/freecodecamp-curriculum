class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here

  submitMessage() {
    let newMessages = [...this.state.messages, this.state.input]
    this.setState({
      input: '',
      messages: newMessages
    })
  }
  handleChange(event) {
    console.log('s')
    this.setState({ input: event.target.value })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {this.state.messages.map((m, key) => <li key={key}>{m}</li>)}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
