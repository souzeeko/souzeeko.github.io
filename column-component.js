import { createElement } from '../framework/render.js';

function createColumnTemplate(title, tasks, className) {
  let tasksHtml = '';
  tasks.forEach(task => {
    tasksHtml += `<div class="task ${className}-state">${task}</div>`;
  });

  const clearButton = className === 'trash' ? 
    '<button class="clear-btn">✖ Очистить</button>' : '';

  return `
    <div class="column ${className}">
      <h2>${title}</h2>
      ${tasksHtml}
      ${clearButton}
    </div>
  `;
}

export default class ColumnComponent {
  constructor(title, tasks, className) {
    this.title = title;
    this.tasks = tasks;
    this.className = className;
  }

  getTemplate() {
    return createColumnTemplate(this.title, this.tasks, this.className);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}