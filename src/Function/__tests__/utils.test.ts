import { getTime } from '../utils';
import { test, expect ,vi} from 'vitest';

test('getTime'),
  () => {
    vi.setSystemTime(new Date("2022-06-03 16:09:19"))
    expect(getTime()).toBe("2022/06/13/16:09:19")
  }