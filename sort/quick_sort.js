// 快速排序
// 抽象 a b(女神) c   一次
// [8,2,5(女神),9,7]
// 递归
function quickSort(arr) {
    if (arr.length <= 1) {return arr} //常规判断
    var left = [], right = [], baseDot = Math.round(arr.length/2),
    base = arr.splice(baseDot,1)[0];
// 找到中间值
    for (var i = 0; i < arr.length; i++){
        if (arr[i]<base) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // left a
    // base 中间值
    // right b
    return quickSort(left).concat([base],quickSort(right));
}
console.log(quickSort([8,2,5,9,7]));