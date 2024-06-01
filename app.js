var getol = document.getElementById('ol')

function add() {
    var inp = document.getElementById('input')
    var createli = document.createElement('li')
    var litext = document.createTextNode(inp.value)
    createli.appendChild(litext)
    getol.append(createli)
    inp.value = ''
    var createdel = document.createElement('button')
    var createtext = document.createTextNode('delete')
    createdel.appendChild(createtext)
    createli.appendChild(createdel)
    var createedit = document.createElement('button')
    var createtextedit = document.createTextNode('edit')
    createedit.appendChild(createtextedit)
    createli.appendChild(createedit)
    createdel.setAttribute('onclick', 'del(this)')
    createedit.setAttribute('onclick', 'edit(this)')
}

function del(e) {
    e.parentNode.remove()
} function edit(e) {
    var p = prompt("edit", e.parentNode.firstChild.textContent)
    e.parentNode.firstChild.textContent = p
}










