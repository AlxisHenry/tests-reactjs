let n = 0;

function number(n) {
    return n.toString().padStart(2, '0')
}
function render() {
const items = [
    'Tache 1',
    'Tache 2',
    'Tache 3'
] 
const li = items.map((item, k) => <li key={k}>{item}</li>)
// On ne peut pas mettre deux attributs adjacents
    const title = <React.Fragment><h1 className="react-class-name" id="react-id"> Bnjour les gens 
        <span>{n}</span>
    </h1>
    <ul>
        {li}
    </ul>
    </React.Fragment> 


}

render()


window.setInterval(() => {
    n++
    render()
}, 1000)

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

  ReactDOM.render(<Clock/>, document.querySelector('#app'))