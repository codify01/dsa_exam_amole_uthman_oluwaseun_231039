

const isPalindrome = (word) => {
    let wordLower = word.toLowerCase()
    let reversedWord = wordLower.split('').reverse().join('')

    if (wordLower === reversedWord) {
        return "its a palindrome"
    }
    return 'not a palindrome'
}

console.log(isPalindrome("seun"))