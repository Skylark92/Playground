const solution1 = (a, b) => {
    return a + b;
};

const solution2 = (c, d, e) => {
    return c + d + e;
};

const solution3 = (f) => {
    if (f > 5) return true;
    return false;
};

const solution4 = (g, h) => {
    if (g > h) return g;
    return h;
};

const solution5 = (i, j, k) => {
    if (i > j && i > k) {
        return i;
    } else if (j > i && j > k) {
        return j;
    } else return k;
};

const solution6 = (l, m) => {
    if (l > m) return true;
    return false;
};

const solution7 = (n, o) => {
    if (n + o > 10) return true;
    return false;
};

const solution8 = (p, q) => {
    return () => {
        return p + q;
    };
};

const solution9 = (r, s) => {
    return (t) => {
        return r + s + t;
    };
};

const z = () => {
    return 5;
};
const y = () => {
    return 6;
};
const solution10 = () => {
    return solution1(z(), y());
};

