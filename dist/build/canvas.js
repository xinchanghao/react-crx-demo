//背景动画

// var c1 = document.getElementById('c1'),
//   ctx1 = c1.getContext('2d'),
//   c2 = document.getElementById('c2'),
//   ctx2 = c2.getContext('2d'),
//   twopi = Math.PI * 2,
//   parts = [],
//   sizeBase,
//   cw,
//   opt,
//   hue,
//   count;

// function rand(min, max) {
//   return Math.random() * (max - min) + min;
// }
// function hsla(h, s, l, a) {
//   return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
// }
// function create() {
//   sizeBase = cw + ch;
//   count = Math.floor(sizeBase * 0.3),
//     hue = rand(0, 360),
//     opt = {
//       radiusMin: 1, radiusMax: sizeBase * 0.04, blurMin: 10, blurMax: sizeBase * 0.04, hueMin: hue, hueMax: hue + 100, saturationMin: 10, saturationMax: 70, lightnessMin: 20, lightnessMax: 50, alphaMin: 0.1, alphaMax: 0.5
//     }
//   ctx1.clearRect(0, 0, cw, ch);
//   ctx1.globalCompositeOperation = 'lighter';
//   while (count--) {
//     var radius = rand(opt.radiusMin, opt.radiusMax),
//       blur = rand(opt.blurMin, opt.blurMax),
//       x = rand(0, cw),
//       y = rand(0, ch),
//       hue = rand(opt.hueMin, opt.hueMax),
//       saturation = rand(opt.saturationMin, opt.saturationMax),
//       lightness = rand(opt.lightnessMin, opt.lightnessMax),
//       alpha = rand(opt.alphaMin, opt.alphaMax);
//     ctx1.shadowColor = hsla(hue, saturation, lightness, alpha);
//     ctx1.shadowBlur = blur;
//     ctx1.beginPath();
//     ctx1.arc(x, y, radius, 0, twopi);
//     ctx1.closePath();
//     ctx1.fill();
//   }
//   parts.length = 0;
//   for (var i = 0;
//     i < Math.floor((cw + ch) * 0.03);
//     i++) {
//     parts.push({
//       radius: rand(1, sizeBase * 0.03), x: rand(0, cw), y: rand(0, ch), angle: rand(0, twopi), vel: rand(0.1, 0.5), tick: rand(0, 10000)
//     }
//     );
//   }
// }
// function init() {
//   resize();
//   create();
//   loop();
// }
// function loop() {
//   requestAnimationFrame(loop);
//   ctx2.clearRect(0, 0, cw, ch);
//   ctx2.globalCompositeOperation = 'source-over';
//   ctx2.shadowBlur = 0;
//   ctx2.drawImage(c1, 0, 0);
//   ctx2.globalCompositeOperation = 'lighter';
//   var i = parts.length;
//   ctx2.shadowBlur = 15;
//   ctx2.shadowColor = '#fff';
//   while (i--) {
//     var part = parts[i];
//     part.x += Math.cos(part.angle) * part.vel;
//     part.y += Math.sin(part.angle) * part.vel;
//     part.angle += rand(-0.05, 0.05);
//     ctx2.beginPath();
//     ctx2.arc(part.x, part.y, part.radius, 0, twopi);
//     ctx2.fillStyle = hsla(0, 0, 100, 0.075 + Math.cos(part.tick * 0.02) * 0.05);
//     ctx2.fill();
//     if (part.x - part.radius > cw) {
//       part.x = -part.radius
//     }
//     if (part.x + part.radius < 0) {
//       part.x = cw + part.radius
//     }
//     if (part.y - part.radius > ch) {
//       part.y = -part.radius
//     }
//     if (part.y + part.radius < 0) {
//       part.y = ch + part.radius
//     }
//     part.tick++;
//   }
// }
// function resize() {
//   cw = c1.width = c2.width = window.innerWidth,
//     ch = c1.height = c2.height = window.innerHeight;
//   create();
// }
// function click() {
//   create()
// }
// window.addEventListener('resize', resize);
// window.addEventListener('click', click);
// init();

window.onload = function () {
  layer.confirm('小老弟，你懂为什么要低调使用吗', {
    btn: ['不懂', '懂了'] //可以无限个按钮
    , btn1: function (index, layero) {
    }
  }, function (index, layero) {
    //按钮【按钮一】的回调
    window.location.reload()
  }, function (index) {
    //按钮【按钮二】的回调
  });
  //loading层 加载效果
  var ii = layer.load();
  //此处用setTimeout演示ajax的回调
  setTimeout(function () {
    layer.close(ii);
  }, 1000);
}

document.getElementById("bf").addEventListener("click", function () {
  var diz = document.getElementById("url").value;
  var jkurl = document.getElementById("jk");
  var jk = document.getElementById("jk").selectedIndex;
  var jkv = jkurl.options[jk].value;
  var cljurl = document.getElementById("player");
  cljurl.src = jkv + diz;
})


