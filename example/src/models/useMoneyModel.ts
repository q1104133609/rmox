import { useState } from 'react'
import { createModel } from '../../../src/index'
import useUserModel from './useUserModel'

/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2021-09-19 16:27:15
 * @LastEditors: 小白
 * @LastEditTime: 2021-12-07 22:00:57
 */
const useMoneyModel = () => {
  const { addAge } = useUserModel()
  const [money, setMoney] = useState(100)
  const addMoney = () => setMoney(money => money + 1)
  return { addMoney, money, addAge }
}
export default createModel(useMoneyModel, { global: true })
