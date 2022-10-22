function largestSubString(str) {
    strings = [{ "Sub-String": "length" }]
    let longestStr = ""
    let longestLen = 0
    let sublength = 0
    let subString = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " " || i == str.length - 1) {
            if (i == str.length - 1) {
                sublength++
                subString += str[i]
            }
            strings.push({ subString: sublength })
            if (sublength > longestLen) {

                longestStr = subString
                longestLen = sublength
            }
            sublength = 0
            subString = ""
        } else {
            sublength++
            subString += str[i]
        }

    } return longestStr//longest substring  
}
//Big-O = O(n)
console.log(largestSubString("This is a large string")) // returns "string"
console.log(largestSubString("This is the largest taco")) // returns "largest"