beforeEach(() => {
  jest.resetModules();
});

test('returns all todos', () => {
  const todoList = require('../src/todoList');
  expect(todoList.getAllTodos()).toHaveLength(4);
});

test('should allow to add a todo', ()=>{
  const todoList = require('../src/todoList');
  const newTodo = 'test';
  todoList.addTodo(newTodo);
  expect(todoList.todos).toContain(newTodo);
});

test('should remove a todo', ()=>{
  const todoList = require('../src/todoList');
  todoList.removeTodo(1);
  expect(todoList.todos).toHaveLength(3);
});

test('should return error', ()=>{
  const todoList = require('../src/todoList');
  expect(() => {todoList.removeTodo(5)}).toThrow(/not exists/);
});

test('should return error message when the todos is empty', ()=>{
  const todoList = require('../src/todoList');
  todoList.todos=[];
  expect(()=>todoList.removeTodo()).toThrow(Error);
});

test('should print out all todos', ()=>{
  const todoList = require('../src/todoList');
  expect(todoList.getAllTodos() === todoList.todos);
});

test('should remove all todos', ()=>{
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.todos).toHaveLength(0);
});

test('should replace a todo with a new todo', ()=>{
  const todoList = require('../src/todoList');
  const newTodo = 'new todo';
  const position = 0;
  todoList.editTodo(newTodo, position);
  expect(todoList.todos[position]).toContain(newTodo);
});

test('should throw error when position does not exist', ()=>{
  const todoList = require('../src/todoList');
  const newTodo = 'new todo';
  expect(()=>todoList.editTodo(newTodo, 5)).toThrow(/No item/);
});