import HeaderComponent from './view/header-component.js';
import TaskInputContainerComponent from './view/task-input-container-component.js';
import TaskBoardComponent from './view/task-board-component.js';
import ColumnComponent from './view/column-component.js';
import { render, RenderPosition } from './framework/render.js';

const columnsData = [
  {
    title: 'Бэклог',
    tasks: ['Выучить JS', 'Выучить React'],
    className: 'backlog'
  },
  {
    title: 'В процессе',
    tasks: ['Выпить смузи', 'Попить воды'],
    className: 'in-progress'
  },
  {
    title: 'Готово',
    tasks: ['Позвонить маме', 'Погладить кота'],
    className: 'done'
  },
  {
    title: 'Корзина',
    tasks: ['Сходить погулять', 'Прочитать Войну и Мир', 'Сделать домашку', 'Сделать домашку', 'Сделать домашку', 'Сделать домашку', 'Сделать домашку', 'Сделать домашку'],
    className: 'trash'
  }
];

const bodyContainer = document.querySelector('.container');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new TaskInputContainerComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

const taskBoardComponent = new TaskBoardComponent();

render(taskBoardComponent, bodyContainer, RenderPosition.BEFOREBEGIN);

const taskBoardElement = taskBoardComponent.getElement();

columnsData.forEach(column => {
  render(
    new ColumnComponent(
      column.title,
      column.tasks,
      column.className,
    ),
    taskBoardElement
  );
});