import { modifyTodo } from '.'

const $rightSidePanel = document.querySelector('.display')
$rightSidePanel.addEventListener('click', function (e) {
  if (e.target.closest('.displayProjectDiv')) {
    if (e.target.tagName == 'INPUT') {
      const todoID = e.target.className
      modifyTodo.deleteTodo(todoID)
    }
  }
})
