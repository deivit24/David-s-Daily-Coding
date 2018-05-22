var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];
var now = new Date();
now.setTime(now.getTime() );
document.getElementById("spanDate").innerHTML = months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
