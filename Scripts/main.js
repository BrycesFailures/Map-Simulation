var screenScale = screen.height / 240;

var mapImg;



function start() {

  mapImg = document.getElementById('mapImg');

  ctx.imageSmoothingEnabled = false;

  ctx.drawImage(mapImg,0,0);

  getPixel(10,10);

}



function getPixel(_x,_y) {
  return ctx.getImageData(_x, _y, 1, 1).data;
}
