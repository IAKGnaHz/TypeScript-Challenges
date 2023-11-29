/**
 * 在给定的整数数组中找到两个数，使它们的和等于目标值。
 * 难度：简单
 * @param nums 整数数组
 * @param target 目标值
 * @returns 两个数的数组下标
 */
function findTwoSum(nums: number[], target: number): number[] {
    // todo...
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = findTwoSum(nums, target);
console.log(result);

/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 难度：中等
 * @param s 给定的字符串
 * @returns 最长子串的长度
 */
function lengthOfLongestSubstring(s: string): number {
    // todo...
    let maxLength = 0;
    let start = 0;
    const map = new Map<string, number>();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (map.has(char)) {
            start = Math.max(start, map.get(char)! + 1);
        }
        map.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const input = "abcabcbb";
const result2 = lengthOfLongestSubstring(input);
console.log(result2);

/**
 * 给定一个字符串，请你找出其中最长的回文子串。
 * 难度：困难
 * @param s 给定的字符串
 * @returns 最长的回文子串
 */
function longestPalindrome(s: string): string {
    // todo...
    const n = s.length;
    let maxLength = 1;
    let start = 0;

    // 创建一个二维数组来记录子串是否为回文
    const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));

    // 单个字符都是回文
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // 判断长度为2的子串是否为回文
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            maxLength = 2;
            start = i;
        }
    }

    // 判断长度大于2的子串是否为回文
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                maxLength = len;
                start = i;
            }
        }
    }

    return s.substring(start, start + maxLength);
}

const input2 = "babad";
const resul2 = longestPalindrome(input2);
console.log(resul2);
