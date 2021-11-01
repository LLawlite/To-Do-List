
module.exports.getDate=getDate;//when you are calling the paraenthis then you are actually calling the the function
//.getDate for returning multiple fucntions
function getDate()
{
    let today=new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };

    let day=today.toLocaleDateString("us-en",options);
    return day;
}
//For exporting multiple fucntion in the form of objects
module.exports.getDay=getDay
function getDay()
{
    let today=new Date();
    let options = { weekday: 'long' };

    let day=today.toLocaleDateString("us-en",options);
    return day;
}