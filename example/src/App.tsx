/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2021-09-18 08:06:44
 * @LastEditors: 小白
 * @LastEditTime: 2021-11-30 00:09:33
 */
import React, { lazy, Suspense, useState } from 'react'
import Counter from './components/Counter'
import Count from './components/Counter/count'
import './index.css'
// import Test from './components/Test/singleModel'
import useCounterModel from './models/useCounterModel'
import useUserModel from './models/useUserModel'
const Todo = lazy(() => import('../src/components/Todo/index'))

function App() {
  const [show, setShow] = useState(true)
  const [detail, showDetail] = useState(false)
  const { addAge, age } = useUserModel()

  return (
    <div className="App" style={{ fontSize: 30 }}>
      <div>测试局部卸载：</div>
      {show && (
        <useCounterModel.Provider init={4}>
          <Counter />
          <Count />
        </useCounterModel.Provider>
      )}
      <div>测试隔离：</div>
      <useCounterModel.Provider init={5}>
        <Counter />
        <Count />
      </useCounterModel.Provider>
      <div>
        年龄：{age}
        <button onClick={addAge}>+</button>
      </div>
      <div>测试全局：</div>
      <Suspense fallback={null}>{detail && <Todo />}</Suspense>
      {/* <Test /> */}
      <button onClick={() => setShow(!show)}>点击显示隐藏局部状态控件</button>
      <button onClick={() => showDetail(!detail)}>点击显示隐藏全局控件</button>
    </div>
  )
}

export default App
