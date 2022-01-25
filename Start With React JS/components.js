

function WelcomeFunc({ name, children }) {
  return (
    <div>
      <h1> Bonjour {name} </h1>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1> Bonjour {this.props.name} </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
class Clock extends React.Component {
  // Date dynamique
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }
  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }
  componentwillUnmout() {
    window.clearInterval(this.timer);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    const date = new Date();
    return (
      <div>
        {" "}
        Il est {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start, timer: null };
    this.toggle = this.toggle.bind(this)
    this.reset = this.reset.bind(this)
  }
  componentDidMount() {
    this.play();
  }
  componentwillUnmout() {
    window.clearInterval(this.state.timer);
  }
  increment() {
    // this.setState({n: this.state.n + 1})
    this.setState((state, props) => ({ n: state.n + props.step }));
  }
  pause() {
    window.clearInterval(this.state.timer);
    this.setState({ timer: null})
  }
  play() {
    window.clearInterval(this.state.timer);
    this.setState({
        timer: window.setInterval(this.increment.bind(this), 400) 
    })
}
toggle() {
    return this.state.timer ? this.pause() : this.play()
}
 label() {
     return this.state.timer ? 'Pause' : 'Lecture'
 }
 reset() {
    this.pause()
    this.setState((state, props) => ({ n: 0 }));
    this.play()
}

event () {

}
  render() {
    const method = this.state.timer ? this.pause : this.play
    const label = this.state.timer ? this.pause : this.play
    const stylebtn = {
        color:"red", backgroundColor: "gray"
    }
    return (
      <div>
        Valeur: {this.state.n} <br></br>
            {/* {this.state.timer ? 
                    <button onClick={this.pause.bind(this)}>Pause</button> :
                    <button onClick={this.play.bind(this)}>Play</button>} */}
            <button style={stylebtn} onClick={this.toggle}>
                    {this.label()}
            </button>           
            <button style={stylebtn} onClick={this.reset}>Reset
            </button>
            {this.state.n > 500 ? <span>500 points</span> : null}
      </div>
    );
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }
  increment(e) {
    console.log(e);
    // this.setState({n: this.state.n + 1})
    this.setState((state, props) => ({ n: state.n + 1 }));
  }
  render() {
    return (
      <div>
        {" "}
        Valeur : {this.state.n}{" "}
        <button onClick={this.increment.bind(this)}>Incrémenter</button>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      {/* <Welcome name="Dorothée"/> */}
      <Welcome name="Jean" />
      <Clock />
      <Incrementer start={496}/>
      {/* <Incrementer start={20} step={10}/> */}
      {/* <ManualIncrementer /> */}
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
