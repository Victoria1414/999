#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Функція для обчислення значення виразу з урахуванням однакового пріоритету операцій
int calculate(int a, int b, char op) {
    if (op == '+') return a + b;
    if (op == '-') return a - b;
    if (op == '*') return a * b;
     return 0; // Не повинно статися

}

// Функція для перевірки всіх комбінацій операцій
bool checkOperations(const vector<int>& nums, const vector<char>& ops) {
  int result = nums[0];
   for (int i = 0; i < 4; ++i) {
        result = calculate(result, nums[i + 1], ops[i]);
    }
    return result == 23;
}

// функція для перевірки досягнення значення  23
bool isPossible(vector<int>& nums) {
    vector<char> ops = {'+', '-', '*'};
    sort(nums.begin(), nums.end());

    do {
        for (char op1 : ops) {
            for (char op2 : ops) {
                for (char op3 : ops) {
                    for (char op4 : ops) {
                        vector<char> operations = {op1, op2, op3, op4};
                          if (checkOperations(nums, operations)) {
                           return true;
                        }
                    }
                }
            }
        }
    } while (next_permutation(nums.begin(), nums.end()));

    return false;
}

int main() {
    while (true) {
        vector<int> nums(5);
        for (int i = 0; i < 5; ++i) {
          cin >> nums[i];
        }
        // Перевірка на закінчення вводу
          if (nums == vector<int>({0, 0, 0, 0, 0})) break;
             if (isPossible(nums)) {
            cout << "Possible" << endl;
            } else {
            cout << "Impossible" << endl;
        }
    }

    return 0;
}
