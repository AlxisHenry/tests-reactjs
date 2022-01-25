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
ReactDOM.render(title, document.querySelector('#app'))

}

render()


window.setInterval(() => {
    n++
    render()
}, 1000)