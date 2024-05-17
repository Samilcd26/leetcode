package main

import "fmt"

func main() {
	fmt.Println(lengthOfLongestSubstring("abcabcbb"))

}

func lengthOfLongestSubstring(s string) int {
	var outPut string = ""

	for i := 0; i < len(s); i++ {
		for j := i + 1; j <= len(s); j++ {
			if check(s[i:j], outPut) {
				outPut = s[i:j]
			}
		}
	}
	return len(outPut)
}

func check(s1, s2 string) bool {
	for i := 0; i < len(s1); i++ {
		for j := 0; j < len(s2); j++ {
			if s1[i] == s2[j] {
				return false
			}
		}
	}
	return true
}
