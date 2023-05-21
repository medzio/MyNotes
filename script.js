const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteAllBtn = document.querySelector('.delete-all')
const notePanel = document.querySelector('.note-panel')
const noteArea = document.querySelector('.note-area')
const error = document.querySelector('.error')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
let selectedValue
let cardId = 0

const openNotePanel = () => {
	notePanel.style.display = 'flex'
}

const closeNotePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	notePanel.style.display = 'none'
	category.value = '0'
	textArea.value = ''
}

const saveNote = () => {
	if (category.options[category.selectedIndex].value !== '0' && textArea.value !== '') {
		createNote()
		closeNotePanel()
	} else {
		error.style.visibility = 'visible'
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	checkColor(newNote);
	newNote.setAttribute('id', cardId)
	newNote.innerHTML = `
	<div class="note-header">
		<h3 class="note-title">${selectedValue}</h3>
		<button class="delete-note" onclick="deleteNote(${cardId})">
			<i class="fas fa-times icon"></i>
			</button>
	</div>
	<div class="note-body">
	${textArea.value}
	</div>`
	cardId++

	noteArea.append(newNote)
}

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text
}
const checkColor = note => {
	switch (selectedValue) {
		case 'Shopping':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break
		case 'Work':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break
		case 'Other':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break
	}
}

const removeAll = () => {
	while (noteArea.firstChild) {
		noteArea.removeChild(noteArea.firstChild)
	}
	cardId = 0
}

const deleteNote = id => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete)
}

addBtn.addEventListener('click', openNotePanel)
cancelBtn.addEventListener('click', closeNotePanel)
saveBtn.addEventListener('click', saveNote)
deleteAllBtn.addEventListener('click', removeAll)
