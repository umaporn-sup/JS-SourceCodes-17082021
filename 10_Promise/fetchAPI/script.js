//1.Async/Await
async function fetchData(endpoint) {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(res.status);
  }
}
async function createDataCollection() {
  const myPhotos = await fetchData(
    'https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY'
  );
  console.log(myPhotos);

  const divPhotos = document.getElementById('photos');

  myPhotos.forEach((photo) => {
    const divImg = document.createElement('div');

    const imgEle = document.createElement('img');
    imgEle.src = photo.urls.regular;

    divImg.appendChild(imgEle);
    divPhotos.appendChild(divImg);
  });
}
createDataCollection();

//2. using then () promise method

// fetchData(
//   'https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY'
// ).then((data) => {
//   createGallery(data);
// });

// function createGallery(myPhotos) {
//   const divPhotos = document.getElementById('photos');

//   myPhotos.forEach((photo) => {
//     const divImg = document.createElement('div');

//     const imgEle = document.createElement('img');
//     imgEle.src = photo.urls.regular;

//     divImg.appendChild(imgEle);
//     divPhotos.appendChild(divImg);
//   });
// }
//1. https://unsplash.com/documentation
//2. https//jsonplaceholder.typicode.com/
