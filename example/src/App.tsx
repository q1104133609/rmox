/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2021-09-18 08:06:44
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-21 17:30:57
 */
import React, { useState } from 'react';
import Counter from './components/Counter';
import Count from './components/Counter/count';
import Todo from './components/Todo';
import './index.css';
import useCounterModel from './models/useCounterModel';
import useUserModel from './models/useUserModel';

function App() {
  const [show, setShow] = useState(true);
  const [detail, showDetail] = useState(false);
  const { addAge, age } = useUserModel();
  console.log('app');
  return (
    <div className="App" style={{ fontSize: 30 }}>
      {show && (
        <useCounterModel.Provider init={4}>
          <Counter />
          <Count />
        </useCounterModel.Provider>
      )}
      <div>
        年龄：{age}
        <button onClick={addAge}>+</button>
      </div>
      {detail && <Todo />}
      <button onClick={() => setShow(!show)}>点击显示隐藏局部状态控件</button>
      <button onClick={() => showDetail(!detail)}>点击显示隐藏全局控件</button>
    </div>
  );
}

export default App;
