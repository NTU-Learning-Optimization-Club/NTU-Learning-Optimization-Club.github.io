/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v1.0.1
 * GitHub: https://github.com/hustcc/canvas-nest.js
**/
!function() {
    function n(n, t, e) {
        return n.getAttribute(t) || e
    }
    function t(n) {
        return document.getElementsByTagName(n)
    }
    function e() {
        var e = t("script")
          , o = e.length
          , i = e[o - 1];
        return {
            l: o,
            z: n(i, "zIndex", -1),
            o: n(i, "opacity", .5),
            c: n(i, "color", "0,0,0"),
            n: n(i, "count", 99)
        }
    }
    function o() {
        a = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        d = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    function i() {
        x.clearRect(0, 0, a, d);
        var n, t, e, o, u, l, y, h;
        w.forEach(function(i, r) {
            for (t = r + 1; t < c.length; t++)
                n = c[t],
                null !== n.x && null !== n.y && (o = i.x - n.x,
                u = i.y - n.y,
                y = i.x + i.xa - n.x,
                h = i.y + i.ya - n.y,
                l = o * o + u * u,
                n === s && (l < n.max ? (i.xd = (Math.abs(y) > Math.abs(o) && Math.abs(y) * Math.abs(o) > 0 ? -1 : 1) * l / n.max * 2 * i.xa,
                i.yd = (Math.abs(h) > Math.abs(u) && Math.abs(h) * Math.abs(u) > 0 ? -1 : 1) * l / n.max * 2 * i.ya) : (i.xd = 0,
                i.yd = 0)),
                l < n.max && (e = (n.max - l) / n.max,
                x.beginPath(),
                x.lineWidth = e / 2,
                x.strokeStyle = "rgba(" + m.c + "," + (e + .2) + ")",
                x.moveTo(i.x, i.y),
                x.lineTo(n.x, n.y),
                x.stroke()));
            i.x += i.xa + i.xd,
            i.y += i.ya + i.yd,
            i.xa *= i.x > a || i.x < 0 ? -1 : 1,
            i.ya *= i.y > d || i.y < 0 ? -1 : 1,
            x.fillRect(i.x - .5, i.y - .5, 1, 1)
        }),
        r(i)
    }
    console.log("\n %c Typecho Clover Theme %c https://github.com/idealclover/clover \n", "color: #EEEEEE; background: #2E8B57; padding:5px 0;", "background: #2E8B57; padding:5px 0;");
    var a, d, c, u = document.createElement("canvas"), m = e(), l = "c_n" + m.l, x = u.getContext("2d"), r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
        window.setTimeout(n, 1e3 / 60)
    }
    , y = Math.random, s = {
        x: null,
        y: null,
        max: 2e4
    };
    u.id = l,
    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + m.z + ";opacity:" + m.o,
    t("body")[0].appendChild(u),
    o(),
    window.onresize = o,
    window.onmousemove = function(n) {
        n = n || window.event,
        s.x = n.clientX,
        s.y = n.clientY
    }
    ,
    window.onmouseout = function() {
        s.x = null,
        s.y = null
    }
    ;
    for (var h = Math.ceil(m.n * a * d / 5e5), w = [], f = 0; h > f; f++) {
        var b = y() * a
          , g = y() * d
          , M = 2 * y() - 1
          , v = 2 * y() - 1;
        w.push({
            x: b,
            y: g,
            xa: M,
            ya: v,
            xd: 0,
            yd: 0,
            max: 6e3
        })
    }
    c = w.concat([s]),
    setTimeout(function() {
        r(i)
    }, 100)
}();