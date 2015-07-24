$.fn.sequenceEqual = function (compareTo) {
if (!compareTo || !compareTo.length || this.length !== compareTo.length) {
    return false;
}
for (var i = 0, length = this.length; i < length; i++) {
    if (this[i] !== compareTo[i]) {
        return false;
    }
}
return true;
}