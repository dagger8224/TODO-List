function outer() {
    const outerScope = {
      name: '王多余',
      age: 42
    };
    function setAge(age) {
      outerScope.age = age;
    }
    function inner(props) {
      const innerScope = {
        state: '灵活就业中'
      };
      function setState(state) {
        innerScope.state = state;
      }
      console.log('我是', outerScope.name, '今年', outerScope.age, '岁', '我现在', innerScope.state);
      // 修改外层作用域数据
      props.setAge(30);
      // 修改内层作用域数据
      setState('找到工作啦');
      console.log('我是', outerScope.name, '今年', outerScope.age, '岁', '我现在', innerScope.state);
    }
    inner({ outerScope, setAge });
}
outer();
