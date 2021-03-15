module.exports = function check(str, bracketsConfig) {
  let configsArr = [];
    let forStr = str;

    for (let i = 0; i < bracketsConfig.length; i++) {
        configsArr.push(bracketsConfig[i].join(""));
    }

    for (let i = 0; i <= forStr.length; i++) {
        for (let j = 0; j < configsArr.length; j++) {
            if (str.includes(configsArr[j])) {
                str = str.replace(configsArr[j], "");
            } else {
                continue;
            }
        }
    }
    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
}
