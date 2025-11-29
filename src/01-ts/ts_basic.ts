// 1  泛型
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
console.log(output1);

function loggingIdentity<T, U>(name: T, age: U): T {
    return name
}
let output2 = loggingIdentity<string, number>("myString", 1);
console.log(output2);

// 2. 联合类型

function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
printId(101);
printId("202");


function greet(person: string | string[]): string | string[] {
    if (typeof person === "string") {
        return `Hello, ${person}!`;
    } else if (Array.isArray(person)) {
        return person.map((name) => `Hello, ${name}!`);
    }
    throw new Error("Unable to greet");
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet(["Alice", "Bob"])); // ["Hello, Alice!", "Hello, Bob!"]

// 3. 交叉类型

type N0 = string & number; // never
type N1 = any & string; // any
type N2 = string & unknown; // string
type N3 = unknown & any // any

type N4 = 1 & number; // 1

// 

type Person = {
    // id: number;
    name: string;
    age: number;
};

type Student = {
    // id: string
    major: string;
};
type IDType  = {
    id: number | string;
}

type PersonAndStudent = Person & Student & IDType; 

function greet3(person: PersonAndStudent) {
    console.log(`Hello, ${person.name}! You are a ${person.major} student.`);
}

greet3({id: '123', name: "John", age: 25, major: "Computer Science" });


// 3 交叉类型

type PartialByKeys<T, K extends keyof T> = {
    [P in K] ?: T[P]; // 传入的属性变为可选
} & {
    [P in Exclude<keyof T, K>]: T[P]; // 剩余的属性保持不变
}

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

// 将 User 类型中的 email 和 password 设置为可选
type UserWithOptionalFields = PartialByKeys<User, 'email' | 'password' |'name'>;

const user: UserWithOptionalFields = {
    id: 1,
    name: "John",

    // email 和 password  name 现在是可选的
};

type RequireKeys<T, K extends keyof T> = {
    // 传入的属性变为必需
    [P in K]-?: T[P]; // 在 TypeScript 的映射类型中，-? 是一个修饰符，用于移除可选属性标记。
} & {
    [P in Exclude<keyof T, K>]?: T[P] // 剩余的属性变为可选
}
type User2 = {
    id?: number;
    name?: string;
    email: string;
    password: string;
}
type UserWithRequiredFields = RequireKeys<User2, 'id' | 'name'>;

const user2: UserWithRequiredFields = {
    id: 1,
    email: "john@example.com",
    password: "password123",
}
// 现在 id、name、email 和 password 都是必需的