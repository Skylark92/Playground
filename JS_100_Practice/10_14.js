/* 문제 26 : 행성 문제2 */
//우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다. 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

//행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

// 답
let input26 = prompt("행성 이름을 한글로 입력해주세요.");

switch (input26) {
    case "수성":
        console.log("Mercury");
        break;
    case "금성":
        console.log("Venus");
        break;
    case "지구":
        console.log("Earth");
        break;
    case "화성":
        console.log("Mars");
        break;
    case "목성":
        console.log("Jupiter");
        break;
    case "토성":
        console.log("Saturn");
        break;
    case "천왕성":
        console.log("Uranus");
        break;
    case "해왕성":
        console.log("Neptune");
        break;
    default:
        console.log("잘못 입력됐습니다.");
        break;
}

/* 문제 27 : 객체 만들기 */
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// 답
let name27 = prompt("이름을 입력해주세요");
let score27 = prompt("점수를 입력해주세요.");

const obj27 = {
    [name27]: score27,
};
// const obj27 = { }
// obj27[name27] = score27;
// console.log(obj27);
// 변수로 키값을 넣으려면?

/* 문제 28 : 2-gram */
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript

// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해주세요.

// 답
let input28 = prompt("뭐라도 입력해 주세요.").split("");

let result28 = "";

for (i = 0; i < input28.length - 1; i++) {
    result28 += input28[i] + " " + input28[i + 1] + "\n";
}

console.log(result28);

/* 문제 29 : 대문자만 지나가세요 */
// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

// 답
let input29 = "";
while (1) {
    input29 = prompt("제발 알파벳 하나만 입력해주세요.");
    if (input29.length === 1 && input29.match(/[a-zA-Z]/gm)) {
        break;
    }
}
let input29_compare = input29.toUpperCase();
if (input29_compare === input29) {
    console.log("YES");
} else {
    console.log("NO");
}

/* 문제 30 : 문자열 속 문자 찾기 */
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요.

// 입력
// pineapple is yummy
// apple

// 출력
// 4

// 답

let str30 = prompt("문자열을 입력해주세요.");

let find30 = prompt("찾을 문자열을 입력해주세요.");

if (str30.match(find30)) {
    console.log(str30.indexOf(find30));
} else {
    console.log("없어용");
}
