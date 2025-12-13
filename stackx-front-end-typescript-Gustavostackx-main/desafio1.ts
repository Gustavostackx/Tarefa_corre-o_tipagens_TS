import { Expect, ExpectExtends } from "./types/validateTypes";

// IFullUser agora herda os campos de IUserWorker e IUserStudent
interface IFullUser extends IUserWorker, IUserStudent {
}

type casosDeValidacao = [
  Expect<ExpectExtends<IUserWorker, IFullUser>>,
  Expect<ExpectExtends<IUserStudent, IFullUser>>,
]

interface IUserWorker {
  name: string
  work: string
}

interface IUserStudent {
  name: string
  age: number
}

