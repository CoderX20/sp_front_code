export const ArraySum=(arr)=>{
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}

// 对时间属性进行排序
export const sortByTimeAndTrumpCount=(array=[])=>{
    array.sort(function(a, b) {
        var timeA = new Date(a.time);
        var timeB = new Date(b.time);

        if (timeA < timeB) {
            return 1; // 交换位置
        } else if (timeA > timeB) {
            return -1; // 保持位置不变
        } else {
            if(a.trumpCount&&b.trumpCount){
                // 在同一时间内，按 trumpCount 属性降序排序
                if (a.trumpCount < b.trumpCount) {
                    return 1; // 交换位置
                } else if (a.trumpCount > b.trumpCount) {
                    return -1; // 保持位置不变
                } else {
                    return 0; // 保持位置不变
                }
            }
            else if (a.trump_count&&b.trump_count){
                if (a.trump_count < b.trump_count) {
                    return 1; // 交换位置
                } else if (a.trump_count > b.trump_count) {
                    return -1; // 保持位置不变
                } else {
                    return 0; // 保持位置不变
                }
            }
        }
    });
    return array;
}

// 根据时间属性进行排序
export const sortByTime=(array=[])=>{
    array.sort(function(a, b) {
        var timeA = new Date(a.time);
        var timeB = new Date(b.time);
        return timeA - timeB;
    });

    return array.reverse();
}