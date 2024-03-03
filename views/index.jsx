const React = require('react')
const Default = require('./layouts/default')

function Index ({ breads }) {
    const display = breads.map((bread, i) => {
        return <li key={i}>{bread.name}</li>
    })
    // const me = 'Vic'
    // const people = ['nick', 'omar', 'courtney', 'freddy']
    // const display = people.map(person => {
    //     return <li>{person}</li>
    // })
    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {display}
        </ul>
      </Default>
    )
}

module.exports = Index
