import {Base64} from "js-base64";

function isBase64(s: string): boolean {
  const regex = '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\/]{3}=)?'
  return (new RegExp('^' + regex + '$', 'gi')).test(s)
}

function tryDecodeBase64(s: string): string {
  if (!isBase64(s)) {
    return s
  }
  return Base64.decode(s)
}

function cleanExtraChar(s: string): string {
  const ret = s.match(/[0-9a-zA-Z\-\/\.\?\=\+\_]*/g)
  if (ret) {
    return ret.join('')
  }
  return s
}

function cleanCode(s: string): string {
  const ret = s.match(/[0-9a-zA-Z]*/g)
  if (ret) {
    return ret.join('')
  }
  return s
}

function postClean(s: string): string {
  const r = /(https?:\/\/)?(([0-9a-z.]+\.[a-z]+)|(([0-9]{1,3}\.){3}[0-9]{1,3}))(:[0-9]+)?(\/[0-9a-z%/.\-_]*)?(\?[0-9a-z=&%_\-]*)?(\#[0-9a-z=&%_\-]*)?/ig
  const ret = s.match(r)
  if (ret) {
    s = ret[0]
  }
  if (s.startsWith('http')) {
    return s
  }
  if (s.startsWith('s/')) {
    return `https://pan.baidu.com/${s}`
  }
  if (s.startsWith('/s/')) {
    return `https://pan.baidu.com${s}`
  }
  if (s.startsWith('pan.baidu.com/s/')) {
    return `https://${s}`
  }
  if (s.startsWith('/')) {
    return `https://pan.baidu.com/s${s}`
  }
  return `https://pan.baidu.com/s/${s}`
}

function tryRe(s: string): string {
  const ret = s.match(/\/?s\/[0-9a-zA-Z\-\?\=\_]*/gi)
  if (ret) {
    return ret.join('')
  }
  return s
}

export function decode(s: string): string {
  const splitResult = s.split('提取码')
  let code = ''
  if (splitResult.length > 1) {
    s = splitResult[0]
    code = splitResult[1]
  }

  const ori = s;
  s = tryDecodeBase64(s);
  if (s !== ori) {
    s = postClean(s)
    return s
  }

  s = cleanExtraChar(s)
  s = tryRe(s)

  s = postClean(s)
  if (code && !s.includes('?')) {
    s = `${s}?pwd=${cleanCode(code)}`
  }
  return s
}
