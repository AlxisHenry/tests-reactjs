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
    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
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
    this.setState({ timer: null });
  }
  play() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 400),
    });
  }
  toggle() {
    return this.state.timer ? this.pause() : this.play();
  }
  label() {
    return this.state.timer ? "Pause" : "Lecture";
  }
  reset() {
    this.pause();
    this.setState((state, props) => ({ n: 0 }));
    this.play();
  }
  render() {
    const method = this.state.timer ? this.pause : this.play;
    const label = this.state.timer ? this.pause : this.play;
    const stylebtn = {
      color: "red",
      backgroundColor: "gray",
    };
    return (
      <div>
        Valeur: {this.state.n} <br></br>
        {/* {this.state.timer ? 
                    <button onClick={this.pause.bind(this)}>Pause</button> :
                    <button onClick={this.play.bind(this)}>Play</button>} */}
        <button style={stylebtn} onClick={this.toggle}>
          {this.label()}
        </button>
        <button style={stylebtn} onClick={this.reset}>
          Reset
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

class Field extends React.Component {
  // Use Bootstrap
  render () {
    const {name,value,onChange,children} = this.props
    return <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"></input>
    </div>
  }
}

class Home extends React.Component {
  // Création d'un formulaire : récupération des données dans les inputs
  constructor(props){
    super(props);
    this.state= {
      // nom: ['demo1','demo2'] Use this for multiple selection
      // checked: true : Use this for checkbox
      nom: '',
      prenom: '',
      newsletter: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
// nom: e.target.value, Pour récupérer la valeur des inputs, du textarea, et d'un select simple
// nom: Array.from(e.target.selectedOptions).map(o => o.value) Récupérer les valeurs cochés d'un select
// checked: e.target.checked : Target checkbox true/false

// Formulaire
    const name = e.target.name
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
      this.setState({
        [name]: value
      })



  }

  render() {
    return (
      <div className="container">
      {/* Inputs */}
      {/* <label htmlFor="nom">Mon nom</label>
      <input type="texte" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange.nom}/>
      <br/>
      <label htmlFor="prenom">Mon Prénom</label>
        <input type="texte" id="prenom" name="prenom" value={this.state.nom} onChange={this.handleChange}/>     
      <br/>
      <label htmlFor="mail">Mon Mail</label>
        <input type="texte" id="mail" name="mail" value={this.state.nom} onChange={this.handleChange}/> */}
      {/* Textarea */}
      {/* <textarea id="textarea" name="textarea" value={this.state.nom} onChange={this.handleChange}></textarea> */}
      {/* Select (multiple and single) */}
      {/* <select value={this.state.nom} onChange={this.handleChange}>
      <option value="demo1">Demo 1</option>
      <option value="demo2">Demo 2</option>
      <option value="demo3">Demo 3</option>
      </select>*/}
      {/* {JSON.stringify(this.state.nom)}
      <select value={this.state.nom} onChange={this.handleChange} multiple>
      <option value="demo1">Demo 1</option>
      <option value="demo2">Demo 2</option>
      <option value="demo3">Demo 3</option>
      </select>  */}
      {/* Checkbox */} 
      {/* <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}></input>
        {this.state.checked ? <div>Un message affiché si on coche la checkbox </div> : null } */}
      {/* START FORMULAIRE */}
        {/* <div>
          <label htmlFor="nom">Nom</label>
          <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"></input>
        </div>       
        <div>
          <label htmlFor="prenom">Prénom</label>
          <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"></input>
        </div>
        <div>
          <label htmlFor="newsletter">S'abonner à la Newsletter</label>
          <input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter"></input>
        </div> */}
        {/* <input type="text" value={undefined}/>  Valeur undefined n'empêche pas le champ d'être modifié */}
        {/* <input type="text" value="ae"/>  Valeur fixe empêche de modifier le champ*/}
        {/* <input type="text" defaultValue="azes"/> defaultValue permet d'insérer une valeur par défaut sans empêcher la modification de celle-ci */}
        {/* {JSON.stringify(this.state)}*/}

        {/* BOOTSTRAP */}

        
        <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
        <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
        {JSON.stringify(this.state)}


      </div>
    );  
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
