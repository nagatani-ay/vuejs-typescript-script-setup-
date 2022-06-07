import {
  getTime,
  generateID,
  toObjectDeadline,
  toStringDeadline,
} from '../utils';
import { expect, vi, it, describe, beforeEach, afterEach } from 'vitest';
import { DeadLine } from '../../types';

describe('utilities', () => {
  beforeEach(() => {});
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it('時刻の取得', () => {
    vi.setSystemTime(new Date('2022-06-03 16:09:19'));
    expect(getTime()).toBe('2022/6/3/16:9:19');
    vi.useRealTimers();
  });
  it('ランダムなIDを生成', () => {
    const spyRandom = vi
      .spyOn(Math, 'random')
      .mockImplementation(() => 0.4904400539860695);

    expect(generateID()).toEqual('fm6nle44on4');
  });
  it('文字列の期限をオブジェクトに分解', () => {
    const deadlineStr = '2022-06-07';
    expect(toObjectDeadline(deadlineStr)).toEqual({
      year: 2022,
      month: 6,
      day: 7,
    });
  });
  it('オブジェクトの期限を文字列に結合', () => {
    const deadlineObj: DeadLine = {
      year: 2022,
      month: 6,
      day: 7,
    };
    expect(toStringDeadline(deadlineObj)).toEqual('2022-06-07');
  });
});
