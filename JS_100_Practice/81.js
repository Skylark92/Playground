/* 문제81 : 지뢰찾기 */
// 지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. 깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램을 만드세요.

// - 아래 Case 외 예외 사항은 고려하지 않습니다.
// (예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.)
// 실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.

// 데이터
// let flag = []; //지뢰 없이 깃발만 있는 리스트
// let minesweeper = []; //지뢰를 찾은 리스트
// let count = 0;

// console.log(flag);
// console.log(minesweeper);

// 입력
// 0 1 0 0 0
// 0 0 0 0 0
// 0 0 0 1 0
// 0 0 1 0 0
// 0 0 0 0 0
// //"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

// 출력
// * f * 0 0
// 0 * 0 * 0
// 0 0 * f *
// 0 * f * 0
// 0 0 * 0 0

/* 수현 코드 */
let input = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
let flag = [];
input.split("\n").forEach((i) => flag.push(i.replace(/1/g, "f").split(" ")));
// console.log(flag)
// [
//     [ '0', 'f', '0', '0', '0' ],
//     [ '0', '0', '0', '0', '0' ],
//     [ '0', '0', '0', 'f', '0' ],
//     [ '0', '0', 'f', '0', '0' ],
//     [ '0', '0', '0', '0', '0' ]
//   ]

for (let i = 0; i < flag.length; i++) {
    for (let j = 0; j < flag.length; j++) {
        if (flag[i][j] === "f") {
            if (i - 1 >= 0 && flag[i - 1][j] == "0") {
                flag[i - 1][j] = "*";
            }
            if (i + 1 < flag.length && flag[i + 1][j] == "0") {
                flag[i + 1][j] = "*";
            }
            if (j - 1 >= 0 && flag[i][j - 1] == "0") {
                flag[i][j - 1] = "*";
            }
            if (j + 1 < flag.length && flag[i][j + 1] == "0") {
                flag[i][j + 1] = "*";
            }
        }
    }
}

flag.forEach((i) => console.log(i.join(" ")));
