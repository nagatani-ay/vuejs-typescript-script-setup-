import { expect, vi, it, describe, beforeEach, afterEach } from 'vitest';
import { useSort } from '../useSort';
const {setFilter,filterType,sortType,sortOrder} =useSort();

const testFilterType = filterType
const testSortType = sortType
const testSortOrder = sortOrder

describe('useSort', () => {
it("フィルターの切り替え",()=>{
  setFilter("未")
  expect(testFilterType.value).toEqual("未")
  setFilter("済")
  expect(testFilterType.value).toEqual("済")
  setFilter("全")
  expect(testFilterType.value).toEqual("全")
})
it("フィルターの切り替え",()=>{
  setFilter("未")
  expect(testFilterType.value).toEqual("未")
  setFilter("済")
  expect(testFilterType.value).toEqual("済")
  setFilter("全")
  expect(testFilterType.value).toEqual("全")
})

});
