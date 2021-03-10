module.exports = function toReadable(number) {
    let readable = '';
    let arr_of_separate_numbers = String(number).split('');
    const dict = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
        1000: "thousand",
        1000000: "million"
    };
    if (number === 0) {
        return 'zero'
    }
    let read = '';
    let arr = [];

    while (arr_of_separate_numbers.length > 0) {
        arr.push(arr_of_separate_numbers.splice(-3, 3))
    };

    for (let j = 0; j <= arr.length - 1; j++) {

        let len = arr[j].length - 1;
        if (dict[Number(arr[j][len - 2])] !== undefined) {
            read = read + dict[Number(arr[j][len - 2])] + ' ' + 'hundred'
        }
        if (dict[Number(arr[j][len - 1] + arr[j][len])] !== undefined) {
            if (read !== '') {
                read = read + ' ' + dict[Number(arr[j][len - 1] + arr[j][len])]
            } else {
                read = dict[Number(arr[j][len - 1] + arr[j][len])]
            }

        } else {
            if (dict[Number(arr[j][len - 1])] !== undefined) {
                if (read !== '') {
                    read = read + ' ' + dict[Number(arr[j][len - 1] * 10)]
                } else {
                    read = dict[Number(arr[j][len - 1] * 10)];
                }

            }
            if (dict[Number(arr[j][len])] !== undefined) {
                if (read !== '') {
                    read = read + ' ' + dict[Number(arr[j][len])]
                } else {
                    read = dict[Number(arr[j][len])];
                }
            }

        }
        if (j >= 1) {
            read = read + ' ' + dict[Math.pow(1000, j)] + ' ';
        }
        readable = read + readable;
        read = '';
    }
    return readable;
}