class ComponentWelcome extends React.Component {

    render() {

        return  <div>
                <h1>Votre nom : {this.props.name}</h1>
                <p>
                   Votre âge : {this.props.age}<br></br>
                   Ville : {this.props.city}
                </p>
                </div>

    }

}

function ComponentAttach () {
    return <div>
     <ComponentWelcome name="Benjamin" age="12" city="Amsterdam"/>
     <ComponentWelcome name="Benjamin" age="16" city="Paris"/>
     <ComponentWelcome name="Benjamin" age="22" city="Belgrade"/>
    </div>
}

ReactDOM.render(<ComponentAttach/>, document.querySelector('#app'))