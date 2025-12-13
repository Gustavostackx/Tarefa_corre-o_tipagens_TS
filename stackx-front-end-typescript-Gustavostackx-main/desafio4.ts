import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

// Ajuste da tipagem para permitir valores numéricos e de texto
type listType = number | string

const list_of_packs: listType[] = []
list_of_packs.push('um')
list_of_packs.push(2)
list_of_packs.push(2.5)
