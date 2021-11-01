# Event Flows
1. Event Bubbling Flow: the most specific element receives the event first and then flow upward toward to the least specific node. 
2. Event Capturing Flow: the least specific node receives the event first and the most specific node should receive the event last. 

# Event Handlers
  HTML Code Fragment
```javascript
    <div>
        <button id="submit" type="submit" onclick="submitHandler()" value="Submit Account">Create new account</button>
    </div>
    <div>
        <button id="reset" type="button" value="Reset All Values">Reset</button>
    </div>
    <div>
        <button id="cancel" type="button" value="Not Create Account">
          Cancel
        </button>
    </div>
```
1. HTML Event Handlers: using HTML attribute with the name of the event handler, For Example, 
```javascript
    function submitHandler() {
        console.log(`Submit Clicked! ${submit.value}`);
    }
```
2. DOM Level 0 Approach Event Handlers: assign a function to an event handler property and set the value to null  when removing an event handler, For Example, 
```javascript
    let cancelBtn = document.getElementById("cancel");
    cancelBtn.onclick = function () {
        console.log(`Cancel Clicked! ${cancelBtn.value}`);
    };

    //cancelBtn.onclick=null;
```
3. DOM Level 2 Approach Event Handlers: using addEventListener() and removeEventListener() to add and remove event handlers with three arguments
  - the event name to handle
  - the event handler function
  - Boolean value to call the event handler during the capture phase (true) or during the bubble phase (false).

```javascript
    let resetBtn=document.getElementById("reset");
    let resetHandler=function(){
        console.log(`Reset Clicked! ${resetBtn.value}`);
    }
    resetBtn.addEventListener("click", resetHandler, false);
    //resetBtn.removeEventListener("click", resetHandler, false);
```
