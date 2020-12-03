// //TypeScriptにおける方宣言
// let number: number = 2;
// let bool: boolean = true;
// let arr: boolean = [true, false];
// let arr2: (string | number)[] = ["hello", 2];

// //オブジェクト型の定義はinterfaceを使用する
// //ポリモフィズムな振る舞いをする
// interface NAME {
//   first: string;
//   last: string | null;
// }

// let nameObject: NAME = {
//   first: "yamada",
//   last: "taro"
// };

// const func1 = (x: number, y: number): number => {
//   return x + y;
// };

// //Intersection Type
// //複数のタイプを結合させる
// type PROFILE = {
//   age: number;
//   city: string;
// };

// type LOGIN = {
//   username: string;
//   password: string;
// };
// //上記のタイプを結合させる
// type USER = PROFILE & LOGIN;

// const userA: USER = {
//   age: 30,
//   city: "tokyo",
//   username: "xxx",
//   password: "uuuu"
// };
// //union type
// //型の制限ができる
// let value: boolean | number;
// value = 1;

// let arr4: (string | number)[];
// arr4 = [1, 2, "hello"];

// //Literal Type
// //代入の制限
// let company: "Facebook" | "Amazon" | "Google";
// company = "Google";

// //type of
// //型の継承ができる
// let mag: string = "Hi";
// let mag2: typeof mag = "bye";

// let animal = { cat: "small cat" };
// let newAnimal: typeof animal = { cat: "big cat" };

// //enum
// enum OS {
//   windos,
//   mac,
//   linux
// }

// interface PC {
//   id: number;
//   OSType: OS;
// }

// const PC1: PC = {
//   id: 1,
//   OSType: OS.mac
// };

// //型の互換性
// const comp1 = "test";
// let comp2: string = comp1;

// let comp3: string = "test";
// //これは代入するのはできない
// let comp4: "test" = comp3;

// let fun = (x: number) => console.log();

// //ジェネリック
// interface GEN<T> {
//   item: T;
// }
// //interfaceの型を決めず、動的に型宣言を行う
// const gen0: GEN<string> = { item: "hello" };

// //interfaceの型をデフォルト化できる
// interface GEN1<T = string> {
//   item2: T;
// }
// const gen1: GEN1 = { item2: "" };

// interface GEM3<T extends string | number> {
//   item: T;
// }

// let gem3: GEM3<string> = { item: "" };

// function funcGEN<T>(props: T) {
//   return { item: props };
// }

// const gem6 = funcGEN<string | null>("test");

// function funcGEM2<T extends string | null>(props) {
//   return { value: props };
// }
// const gemd = funcGEM2("test");

// interface Props {
//   price: number;
// }

// function func6<T extends Props>(props: T) {
//   return { value: props.price };
// }

// const gem10 = func6({ price: 10 });

// const fubc3 = <T extends Props> =>(props: T){
//   return {value: props.price}
// }
