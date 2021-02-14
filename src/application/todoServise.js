const { log: print } = console;

const todoService = {
  todoList: [{ todo: '공부는 언제하니' }],

  request({ todo }) {
    print('-'.repeat(80));
    print(`등록된 할 일은 ${todo}입니다!`);
    print('-'.repeat(80));

    this.store({ todo });
  },

  store({ todo }) {
    this.todoList.push({ todo });
  },
};

module.exports = todoService;
