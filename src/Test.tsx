//TypeScriptにおける方宣言
let number: number = 2;
let bool: boolean = true;
let arr: boolean = [true, false];
let arr2: (string | number)[] = ["hello", 2];

//オブジェクト型の定義はinterfaceを使用する
//ポリモフィズムな振る舞いをする
interface NAME {
  first: string;
  last: string | null;
}

let nameObject: NAME = {
  first: "yamada",
  last: "taro"
};

const func1 = (x: number, y: number): number => {
  return x + y;
};

//Intersection Type
//複数のタイプを結合させる
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};
//上記のタイプを結合させる
type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "tokyo",
  username: "xxx",
  password: "uuuu"
};
//union type
//型の制限ができる
let value: boolean | number;
value = 1;

let arr4: (string | number)[];
arr4 = [1, 2, "hello"];

//Literal Type
//代入の制限
let company: "Facebook" | "Amazon" | "Google";
company = "Google";

//type of
//型の継承ができる
let mag: string = "Hi";
let mag2: typeof mag = "bye";
