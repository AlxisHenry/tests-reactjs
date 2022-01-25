let n = 0;

function render() {
    const title = React.createElement("h1", {}, 'Bonjour tous le monde', React.createElement('span', {}, n))

// console.log(title);

ReactDOM.render(title, document.querySelector('#app'))

}

render()


window.setInterval(() => {
    n++
    render()
}, 1000)