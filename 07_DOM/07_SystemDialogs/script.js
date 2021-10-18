function confirmBox(msg){
    return confirm(msg);
}

    
function alertBox(msg){
    alert(msg);
}


let user=prompt("What is your name?", "write your name");
user !== null ? alertBox(`Welcome,  ${user}`) : alertBox("Hello, Guest");
console.log(`user= ${user}`);

let isExit = confirmBox("Do you want to exit?");
console.log(`isExit: ${isExit}`);
if (isExit) {
  alertBox(`Good Bye,  ${user}`);
  window.close();
}

