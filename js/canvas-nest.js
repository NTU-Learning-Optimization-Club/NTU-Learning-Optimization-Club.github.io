/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v1.0.1
 * GitHub: https://github.com/hustcc/canvas-nest.js
**/

(function () {
    function getAttributeOrDefault(element, attribute, defaultValue) {
      return element.getAttribute(attribute) || defaultValue;
    }
  
    function getElementsByTagName(tag) {
      return document.getElementsByTagName(tag);
    }
  
    function getConfig() {
      var scriptElements = getElementsByTagName("script");
      var length = scriptElements.length;
      var scriptElement = scriptElements[length - 1];
  
      return {
        l: length,
        z: getAttributeOrDefault(scriptElement, "zIndex", -1),
        o: getAttributeOrDefault(scriptElement, "opacity", 0.5),
        c: getAttributeOrDefault(scriptElement, "color", "0,0,0"),
        n: getAttributeOrDefault(scriptElement, "count", 99),
      };
    }
  
    function initializeCanvas() {
      canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
  
    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    function animateParticles() {
      clearCanvas();
  
      particles.forEach(function (particle, index) {
        for (var nextIndex = index + 1; nextIndex < connections.length; nextIndex++) {
          var nextParticle = connections[nextIndex];
  
          if (nextParticle.x !== null && nextParticle.y !== null) {
            var deltaX = particle.x - nextParticle.x;
            var deltaY = particle.y - nextParticle.y;
            var distance = deltaX * deltaX + deltaY * deltaY;
  
            if (particle === specialParticle) {
              if (distance < specialParticle.max) {
                particle.xd = (Math.abs(particle.x + particle.xa - nextParticle.x) > Math.abs(deltaX) &&
                  Math.abs(deltaX) * Math.abs(deltaX) > 0 ? -1 : 1) * distance / specialParticle.max * 2 * particle.xa;
  
                particle.yd = (Math.abs(particle.y + particle.ya - nextParticle.y) > Math.abs(deltaY) &&
                  Math.abs(deltaY) * Math.abs(deltaY) > 0 ? -1 : 1) * distance / specialParticle.max * 2 * particle.ya;
              } else {
                particle.xd = 0;
                particle.yd = 0;
              }
            }
  
            if (distance < nextParticle.max) {
              var ease = (nextParticle.max - distance) / nextParticle.max;
  
              context.beginPath();
              context.lineWidth = ease / 2;
              context.strokeStyle = "rgba(" + specialColor.c + "," + (ease + 0.2) + ")";
              context.moveTo(particle.x, particle.y);
              context.lineTo(nextParticle.x, nextParticle.y);
              context.stroke();
            }
          }
        }
  
        particle.x += particle.xa + particle.xd;
        particle.y += particle.ya + particle.yd;
        particle.xa *= (particle.x > canvas.width || particle.x < 0) ? -1 : 1;
        particle.ya *= (particle.y > canvas.height || particle.y < 0) ? -1 : 1;
  
        context.fillRect(particle.x - 0.5, particle.y - 0.5, 1, 1);
      });
  
      requestAnimationFrame(animateParticles);
    }
  
    console.log("\n %c Typecho Clover Theme %c https://github.com/idealclover/clover \n",
      "color: #EEEEEE; background: #2E8B57; padding:5px 0;",
      "background: #2E8B57; padding:5px 0;");
  
    var canvas, context, connections, specialParticle, specialColor;
  
    canvas = document.createElement("canvas");
    var config = getConfig();
    canvas.id = "c_n" + config.l;
    canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;
    getElementsByTagName("body")[0].appendChild(canvas);
  
    initializeCanvas();
    window.onresize = initializeCanvas;
  
    window.onmousemove = function (event) {
      event = event || window.event;
      specialParticle.x = event.clientX;
      specialParticle.y = event.clientY;
    };
  
    window.onmouseout = function () {
      specialParticle.x = null;
      specialParticle.y = null;
    };
  
    connections = [];
    specialParticle = { x: null, y: null, max: 20000 };
    specialColor = { c: config.c };
  
    var numberOfParticles = Math.ceil(config.n * canvas.width * canvas.height / 500000);
    var particles = [];
  
    for (var i = 0; i < numberOfParticles; i++) {
      var randomX = Math.random() * canvas.width;
      var randomY = Math.random() * canvas.height;
      var randomXa = 2 * Math.random() - 1;
      var randomYa = 2 * Math.random() - 1;
  
      particles.push({
        x: randomX,
        y: randomY,
        xa: randomXa,
        ya: randomYa,
        xd: 0,
        yd: 0,
        max: 6000
      });
    }
  
    connections = particles.concat([specialParticle]);
  
    setTimeout(function () {
      requestAnimationFrame(animateParticles);
    }, 100);
  
  })();
  