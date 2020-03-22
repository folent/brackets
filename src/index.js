module.exports = function check(str, bracketsConfig) {

    for (let i = 0; i < bracketsConfig.length;) {

        let arr = bracketsConfig[i].join("");

        if (!str.includes(arr)) {
            i++;
            continue;
        } else {
            str = str.replace(arr, "");
            i = 0;
        }
    }
    return str.length == 0 ? true : false;

}