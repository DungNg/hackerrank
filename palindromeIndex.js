function palindromeIndex(s) {
    // Write your code here
    let splitString = s.split("");
    let start = 0;
    let end = splitString.length - 1;
    while (start < end && splitString[start] === splitString[end]) {
        start++;
        end--;
    }
    if (start >= end) {
        return -1;
    }

    if (isPalindrome(splitString, start + 1, end)){
        return start;
    }
    
    if(isPalindrome(splitString, start, end - 1)){
        return end;
    }
    return -1;
}

function isPalindrome(s, start, end) {
    while (start < end && s[start] === s[end]) {
        start++;
        end--;
    }
    return start >= end;
}