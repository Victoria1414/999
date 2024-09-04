const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

// Функция для вычисления значения выражения с учетом одинакового приоритета операций
function calculate(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
     return 0; // Не должно достигаться
}

// Функция для проверки всех комбинаций операций
function checkOperations(nums, ops) {
 let result = nums[0];
  for (let i = 0; i < 4; ++i) {
    result = calculate(result, nums[i + 1], ops[i]);
    }
    return result === 23;
}

// Функция для проверки возможности достижения значения 23
function isPossible(nums) {
    const ops = ['+', '-', '*'];
    nums.sort((a, b) => a - b);

    do {
        for (let op1 of ops) {
            for (let op2 of ops) {
                for (let op3 of ops) {
                    for (let op4 of ops) {
                        const operations = [op1, op2, op3, op4];
                        if (checkOperations(nums, operations)) {
                            return true;
                        }
                    }
                }
            }
        }
    } while (nextPermutation(nums));

    return false;
}

// Функция для генерации следующей перестановки чисел
function nextPermutation(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i < 0) {
      return false;
    }
    let j = nums.length - 1;
     while (nums[j] <= nums[i]) {
       j--;
    }
     [nums[i], nums[j]] = [nums[j], nums[i]];
      reverse(nums, i + 1);
       return true;
}

// Функция для разворота части массива
function reverse(nums, start) {
    let i = start, j = nums.length - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
}

// Обработка ввода
let input = [];
 rl.on('line', (line) => {
  let nums = line.trim().split(' ').map(Number);
    if (nums.every(num => num === 0)) {
        rl.close();
        return;
         }
       input.push(nums);
       }).on('close', () => {
         for (let nums of input) {
        // Проверка возможности достижения значения 23
        if (isPossible(nums)) {
            console.log("Possible");
             } else {
            console.log("Impossible");
        }
    }
});;
