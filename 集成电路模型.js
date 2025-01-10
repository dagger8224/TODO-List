function outer() {
    const scope = {
      name: '王多余',
      age: 42
    };
    function inner(outerScope) {
      const scope = {
        state: '灵活就业中'
      };
      Object.setPrototypeOf(scope, outerScope);
      console.log('我是', scope.name, '今年', scope.age, '岁', '我现在', scope.state);
      // 修改外层作用域数据
      scope.age = 30;
      // 修改内层作用域数据
      scope.state = '找到工作啦';
      console.log('我是', scope.name, '今年', scope.age, '岁', '我现在', scope.state);
    }
    inner(scope);
}
outer();
