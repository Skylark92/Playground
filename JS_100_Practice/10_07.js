/* 문제 6 : False
다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요. */

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

// 답
// 2) 1 은 truthy 값이다.

/* 문제 7 : 변수명
다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오. */

// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

// 답
// 3) let 은 예약어인 줄.. 알았는데
// 5) 1age 처럼 숫자로 시작할 수 없다.

/* 문제 8 : 객체의 키 이름 중복
자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.) */

var d = {
    height: 180,
    weight: 78,
    weight: 84,
    temperature: 36,
    eyesight: 1,
};

console.log(d["weight"]);

// 답
// 출력값은 84
// *** 자바스크립트 객체 내에서 중복된 키가 있을 경우, 마지막 키를 반환 ***

/* 문제 9 : concat을 활용한 출력 방법
다음 소스 코드를 완성하여 날짜와 시간을 출력하시오. */

// 데이터
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = console.log(result); //빈칸을 채워주세요

// 출력
// 2019/04/26 11:34:27

// 답
// `${year}/${month}/${day} ${hour}:${minute}:${second}`

/* 문제 10 : 별 찍기
크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

은비를 위해 프로그램을 작성해 주세요. */

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// 답
function tree(x) {
    for (i = 0; i < x; i++) {
        let y = "";
        for (j = 0; j < x * 2; j++) {
            if (j >= x - i && j <= x + i) {
                y += "*";
            } else {
                y += " ";
            }
        }
        console.log(y);
        j = 0;
        y = " ";
    }
}

///
const n = +prompt("숫자를 입력하세요.");
let tree = "";

for (i = 0; i < n; i++) {
    for (j = 0; j < n * 2; j++) {
        if (j <= n + i && j >= n - i) {
            tree += "*";
        } else {
            tree += " ";
        }
    }
    tree += "\n";
}

console.log(tree);
