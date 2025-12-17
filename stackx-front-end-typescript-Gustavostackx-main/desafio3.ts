import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

type myFunction = (value: number) => number

type casosDeValidacao = [
  Expect<Equal<typeof duplicarNumero, myFunction>>
]

function duplicarNumero(value: number) {
  return value * 2
}
