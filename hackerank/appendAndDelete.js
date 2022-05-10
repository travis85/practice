function appendAndDelete(s, t, k) {

    for (var i=0; i < s.length; i++) {
        if (s[i] != t[i]) {
            break;
        }
    }
    let deletesRequired = s.length - i;
    let addsRequired = t.length - i;
    let minRequired = deletesRequired + addsRequired;
    let max = s.length + t.length;

    if (k < minRequired || ((k % 2 != minRequired % 2) && k < max)) {
        return "No";
    } else {
        return "Yes";
    }
    


}
// console.log(appendAndDelete('hackerhappy','hackerrank',9))//yes
console.log(appendAndDelete('aaaaaaaaaa','aaaaa',7))//yes
console.log(appendAndDelete('qwerasdf','qwerbsdf',6))//no


