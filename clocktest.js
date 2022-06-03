function updateTime() {
    var time = new Date();
    var hr = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds();

    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var ids = ["hour", "minutes",];
    var values = [hr.pad(2), min.pad(2)];

    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function startTime() {
    updateTime();
    window.setInterval("updateTime()", 1);
}
