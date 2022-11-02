/* 문제 61 : 문자열 압축하기 */
// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// 입력
// aaabbbbcdddd

// 출력
// a3b4c1d4

// 답
let input61 = "aaabbbbcdddd"; // prompt('문자열');
let answer61 = "";
[...new Set(input61)].forEach((str) => {
    answer61 += str + input61.split("").filter((element) => element === str).length;
});

console.log(answer61);

/* 문제 62 : 20190923출력하기 */
// `20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

// 1. 코드 내에 숫자가 없어야 합니다.
//     - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

// 답
const temp = "abcdefghijklmnopqrstuvwxyz";
let answer62 = "" + temp.indexOf("u") + temp.indexOf("t") + temp.indexOf("a") + temp.indexOf("j") + temp.indexOf("x");
console.log(answer62);

/* 문제 63 : 친해지고 싶어 */
// 한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다. 딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.

// 교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
// 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.

// 입력
// 복잡한 세상 편하게 살자

// 출력
// 복세편살

let input63 = "복잡한 세상 편하게 살자"; // prompt('문자열')

let answer63 = input63
    .split(" ")
    .map((_) => _[0])
    .join("");

console.log(answer63);

/* 문제 64 : 이상한 엘레베이터 */
// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다. 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

// 입력
// 정량 N이 입력됩니다.

// 출력
// 가장 적게 옮길 수 있는 횟수를 출력합니다.
// 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.

let input64 = 24; // +prompt('정량');
let answer64 = 0;
while (1) {
    if (input64 % 7 === 0) {
        answer64 += ~~(input64 / 7);
        break;
    } else if (input64 < 0) {
        answer64 = -1;
        break;
    } else {
        input64 -= 3;
        answer64++;
    }
}
console.log(answer64);

/* 문제 65 : 변형된 리스트 */
// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

// 답
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

let answer65 = a.map((element, index) => {
    if (index % 2 === 0) {
        return [element, b[index]];
    } else {
        return [b[index], element];
    }
});

console.log(answer65);
