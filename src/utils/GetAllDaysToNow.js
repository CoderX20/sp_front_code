export const getAllDaysToNow=()=>{
    const date=new Date()
    const now_year=date.getFullYear()
    const now_month=date.getMonth()+1
    const now_day=date.getDate()
    var formattedDate
    var day
    var date_list=[]
    for(var month=0;month<now_month-1;month++){
        var lastDayOfMonth = new Date(now_year, month + 1, 0).getDate();
        for(day=1;day<=lastDayOfMonth;day++){
            // 将日期格式化为"YY-MM-DD"的形式
            formattedDate = now_year + '-' + (month + 1)+ '-' + day;

            // 将格式化后的日期添加到数组中
            date_list.push(formattedDate);
        }
    }
    for(day=1;day<=now_day;day++){
        // 将日期格式化为"YY-MM-DD"的形式
        formattedDate = now_year + '-' + (month + 1)+ '-' + day;

        // 将格式化后的日期添加到数组中
        date_list.push(formattedDate);
    }
    return date_list
}