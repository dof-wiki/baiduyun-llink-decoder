import { decode } from './decoder'

const testcases = [
  ['回复 雪v云  :：/s/199on1UiQqcJa-SP-042poA?pwd=4o2q', 'https://pan.baidu.com/s/199on1UiQqcJa-SP-042poA?pwd=4o2q'],
  ['s/1iaI-dBXNz9ChFT_zzu1WEw 提取码:12qp', 'https://pan.baidu.com/s/1iaI-dBXNz9ChFT_zzu1WEw?pwd=12qp'],
  ['【图片】【图片】s/1E1pkiDmYnNA#(呵呵) rj-MrOfx3Rw?pwd=qtqj\n' +
  ' 理论上有后台，多浏览窗口互不冲突，内核很新支持主流网页写法。\n' +
  ' 说明都在里面了，如果有什么不懂的可以在下面问，我不会解答，但是万一别人会给你解答呢？#(汗)', 'https://pan.baidu.com/s/1E1pkiDmYnNArj-MrOfx3Rw?pwd=qtqj'],
  ['6ZO+5o6l77yaaHR0cHM6Ly9wYW4uYmFpZHUuY29tL3MvMU9lN043cjhXR0RJbllQdlZibE4xZkE/cHdkPXVtbXYK5o+Q5Y+W56CB77yadW1tdg==', 'https://pan.baidu.com/s/1Oe7N7r8WGDInYPvVblN1fA?pwd=ummv'],
  ['pan.#(怒) baidu.#(怒) com/#(怒) s/#(怒) 1ouYCps#(怒) -NZBW0M6Kk6L#(怒) SveQ?pwd=0000', 'https://pan.baidu.com/s/1ouYCps-NZBW0M6Kk6LSveQ?pwd=0000'],
  ['1iaI-dBXNz9ChFT_zzu1WEw', 'https://pan.baidu.com/s/1iaI-dBXNz9ChFT_zzu1WEw'],
  ['/1iaI-dBXNz9ChFT_zzu1WEw', 'https://pan.baidu.com/s/1iaI-dBXNz9ChFT_zzu1WEw'],
]

test('test-decode', () => {
  testcases.forEach((item) => {
    expect(decode(item[0])).toBe(item[1])
  })
})
