import {Base64} from "js-base64";

export function encode (s: string): string {
  return Base64.encode(s)
}
