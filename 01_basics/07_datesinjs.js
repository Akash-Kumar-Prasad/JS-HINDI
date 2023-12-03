// dates in js start from 1 january 1970 utc

let myDate = new Date()
console.log(myDate);//not understandable in normal terms

console.log(typeof myDate);//object

console.log(myDate.toString());//utc(coordinated universal time)

console.log(myDate.toDateString());//only date "Sun Dec 03 2023"
console.log(myDate.toTimeString());//only time "06:09:38 GMT+0000 Coordinated Universal Time"

console.log(myDate.toLocaleDateString());//only local system time "12/3/2023"
console.log(myDate.toLocaleTimeString());//only local system time "6:09:38 AM" all things are in gmt

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());//"Mon Jan 23 2023" months start from 0

let createdDate = new Date(2023, 1, 25, 6, 33)
console.log(createdDate.toLocaleString());//"2/25/2023, 6:33:00 AM" all in GMT

let nDate = new Date("05-22-1996")
console.log(nDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(nDate.getTime());//getTime() will give time in miliseconds

console.log(Math.floor(Date.now()/1000));//divide by 1000 to get seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);// end user doesnt get confused so we need to add 1 in the month() method as it starts from 0
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))





