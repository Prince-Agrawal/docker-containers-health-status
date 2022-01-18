// checking if previous state is equal to current or not;
const checkIfEqual = (cArr) => {
    if (pArr.length !== cArr.length) return false;

    for (let i = 0; i < cArr.length; i++) {
        if (cArr[i].Id !== pArr[i].Id) return false;
    }

    return true;
}

module.exports = { checkIfEqual }