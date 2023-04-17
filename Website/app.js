Webcam.set({
  width: 220,
  height: 190,
  image_format: 'png',
  jpeg_quality: 100
});
Webcam.attach('#camera');

takeSnapShot = function () {
  Webcam.snap(function (data_uri) {
      document.getElementById('snapShot').innerHTML = 
          '<img src="' + data_uri + '" width="220px" height="190px" />';
  });
}