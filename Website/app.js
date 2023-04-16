Webcam.set({
  width: 220,
  height: 190,
  image_format: 'jpeg',
  jpeg_quality: 100
});
Webcam.attach('#camera');

takeSnapShot = function () {
  Webcam.snap(function (data_uri) {
      document.getElementById('snapShot').innerHTML = 
          '<img src="' + data_uri + '" width="200px" height="200px" />';
  });
}