/* 문제82 : 수학 괄호 파싱 */

// 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

// 입출력 예시

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 3 + 5
// True

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7) * (3 * 5)
// False

// 답

function math(e) {
    try {
        console.log(!!eval(e));
    } catch (error) {
        console.log(false);
    }
}

// let ex = "5 + 7) * (3 * 5)";
// console.log(math(ex));

// while (1){
//     let order = prompt('데이터 입력(1), 프로그램 종료(2)');
//     if (order === 1){
//         const ex = prompt('데이터를 입력하세요');
//         console.log(math(ex));
//     } else {
//         break;
//     }
// }

/**
 * 53번 문제랑 다를 게 있는지,
 * eval은 사용을 피하라고 권장함
 */
