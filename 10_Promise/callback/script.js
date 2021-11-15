// callback: function passed as an agrument to another function,
// allows a function to invoke another function
async function createHeading(text) {
  new Promise((text) => {
    setTimeout(() => {
      console.log(text);
    }, 1000);
  });

  const h1Ele = document.getElementById('heading1');
  h1Ele.textContent = text;
  return h1Ele;
}

async function setMessage(text, callback) {
  const newH1 = await callback(text);
  console.log(`result = ${newH1}`);
}

setMessage('Hello Promise', createHeading);
