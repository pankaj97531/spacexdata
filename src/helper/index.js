export function dateTimeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var timeWithTime = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    var formatedDate = date + ' ' + month + ' ' + year  ;
    return [timeWithTime,formatedDate];
  }