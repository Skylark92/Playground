/* 문제 21 : set은 어떻게 만드나요? */
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// 1) var x = {1,2,3,4,5,6,7};
// 2) var x = {};
// 3) var x = new Set('javascript');
// 4) var x = new Set(range(5));
// 5) var x = new Set();

// 답
// 3), 5)
// 1)은 객체 리터럴, 즉 객체 생성. 2) 마찬가지. 4) ??

/* 문제 22 : 배수인지 확인하기 */
// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

// 1) i / 6 == 0
// 2) i % 6 == 0
// 3) i & 6 == 0
// 4) i | 6 == 0
// 5) i // 6 == 0

// 답
// 2)

/* 문제 23 : OX 문제 */
// console.log(10/3)의 출력 결과는 3이다.

// 답
// X, 자바스크립트는 숫자를 실수로 표현하기 때문에 소수점 아래까지 나옴.

/* 문제 24 : 대문자로 바꿔주세요! */
// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

// 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

// 답
let input24 = prompt("너의 이름은。");

console.log(input24.toUpperCase());
// 자꾸 뒤에 () 까먹는다.

/* 문제 25 : 원의 넓이를 구하세요 */
// 원의 넓이는 반지름의 길이 X 반지름의 길이 X 3.14로 구할 수 있습니다. 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

// 답
function 원의넓이(n) {
    return n * n * 3.14;
}

// "반환하는" 놓치지 않기