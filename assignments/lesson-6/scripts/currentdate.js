function getDate() {
    var d = new Date();
    var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var g = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    return '' + (g <= 9 ? '0' + g : g) + '-' + m + '-' + y;
    document.getElementById('showDate').innerHTML = d;
};
getDate();