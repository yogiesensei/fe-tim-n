const container = document.getElementById('container')
const template = (item) => {
    return `
    <div>
    <p>Name: ${item.name}</p>
    <p>Course: ${item.course}</p>
    </div>
    `
}

fetch('http://localhost:3001/')
    .then(data => data.json())
    .then(dataJson => {
        console.log(dataJson)
        let content = ''
        dataJson.data.map(item => content += template(item))
        container.innerHTML = content
    })