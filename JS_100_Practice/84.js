/* 문제84 : 숫자뽑기 */
// 소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다. 이 중 가장 큰 수는 73입니다.

// 위 예시처럼 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요.

// 답

let n = String(1723);
let k = 2;

function solution(n) {
    const 조합 = [];

    const repeat = (앞, n) => {
        for (let i = 0; i < n.length; i++) {
            조합.push(앞 + n[i]);

            repeat(앞 + n[i], n.slice(i + 1));
        }
    };

    repeat("", n);

    return 조합.filter((el) => el.length === k);
}

console.log(Math.max(...solution(n)));

// 80번 참고
// 뒤에서 순열과 조합이라는 애가 많이 나오는 듯
