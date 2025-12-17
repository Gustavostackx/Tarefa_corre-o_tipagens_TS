import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

interface IExtendedUser {
  siblings: number
  rating: number
  applications: string[]
}

interface ISiblingsUser {
  siblings: number
}

// Uso correto do Omit diretamente na interface solicitada
interface IExtendedWithoutFields
  extends Omit<IExtendedUser, "rating" | "applications"> {}

type casosDeValidacao = [
  Expect<Equal<ISiblingsUser, IExtendedWithoutFields>>,
]


