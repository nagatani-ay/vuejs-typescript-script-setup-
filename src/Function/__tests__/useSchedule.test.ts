import { expect, vi, it, describe, beforeEach, afterEach } from 'vitest';
import {useSchedule} from "../useSchedule"
const {calendarArray} =useSchedule()
describe("useSchedule",()=>{
it("カレンダーの日付リスト生成",()=>{
  const currentYear =new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  expect(calendarArray.value).toEqual("")
  })
})