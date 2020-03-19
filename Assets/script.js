// var now = moment();
// var time = moment($(e).attr('datetime'));
// $("#currentDay").moment().format('MMMM Do YYYY, h:mm:ss a');

// console.log(now);
var now = moment();
now.setattribute("id", "currentDay");
now.innerhtml(moment());
$('time').each(function(i, e) {
    var time = moment($(e).attr('datetime'));

    if(now.diff(time, 'days') <= 1) {
        $(e).html('<span>' + time.from(now) + '</span>');
    }
});
console.log(now);