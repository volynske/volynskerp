(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        i(s);
    new MutationObserver(s => {
        for (const n of s)
            if (n.type === "childList")
                for (const a of n.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && i(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(s) {
        const n = {};
        return s.integrity && (n.integrity = s.integrity),
        s.referrerPolicy && (n.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? n.credentials = "include" : s.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function i(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const n = t(s);
        fetch(s.href, n)
    }
}
)();
function Vi(r) {
    if (r === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r
}
function mu(r, e) {
    r.prototype = Object.create(e.prototype),
    r.prototype.constructor = r,
    r.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ti = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, sr = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, To, _t, Ee, ui = 1e8, be = 1 / ui, Ya = Math.PI * 2, Cd = Ya / 4, Td = 0, vu = Math.sqrt, Ed = Math.cos, kd = Math.sin, st = function(e) {
    return typeof e == "string"
}, Be = function(e) {
    return typeof e == "function"
}, ji = function(e) {
    return typeof e == "number"
}, Eo = function(e) {
    return typeof e > "u"
}, Ri = function(e) {
    return typeof e == "object"
}, Bt = function(e) {
    return e !== !1
}, ko = function() {
    return typeof window < "u"
}, fn = function(e) {
    return Be(e) || st(e)
}, _u = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, yt = Array.isArray, Wa = /(?:-?\.?\d|\.)+/gi, yu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Us = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _a = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, bu = /[+-]=-?[.\d]+/, wu = /[^,'"\[\]\s]+/gi, Ad = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ie, Ei, ja, Ao, ii = {}, Hn = {}, Su, xu = function(e) {
    return (Hn = Ps(e, ii)) && Ht
}, Oo = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
}, Yr = function(e, t) {
    return !t && console.warn(e)
}, Cu = function(e, t) {
    return e && (ii[e] = t) && Hn && (Hn[e] = t) || ii
}, Wr = function() {
    return 0
}, Od = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Mn = {
    suppressEvents: !0,
    kill: !1
}, Md = {
    suppressEvents: !0
}, Mo = {}, ns = [], Ua = {}, Tu, Xt = {}, ya = {}, ol = 30, In = [], Io = "", Lo = function(e) {
    var t = e[0], i, s;
    if (Ri(t) || Be(t) || (e = [e]),
    !(i = (t._gsap || {}).harness)) {
        for (s = In.length; s-- && !In[s].targetTest(t); )
            ;
        i = In[s]
    }
    for (s = e.length; s--; )
        e[s] && (e[s]._gsap || (e[s]._gsap = new Xu(e[s],i))) || e.splice(s, 1);
    return e
}, Es = function(e) {
    return e._gsap || Lo(ci(e))[0]._gsap
}, Eu = function(e, t, i) {
    return (i = e[t]) && Be(i) ? e[t]() : Eo(i) && e.getAttribute && e.getAttribute(t) || i
}, Rt = function(e, t) {
    return (e = e.split(",")).forEach(t) || e
}, $e = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, it = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Zs = function(e, t) {
    var i = t.charAt(0)
      , s = parseFloat(t.substr(2));
    return e = parseFloat(e),
    i === "+" ? e + s : i === "-" ? e - s : i === "*" ? e * s : e / s
}, Id = function(e, t) {
    for (var i = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < i; )
        ;
    return s < i
}, Gn = function() {
    var e = ns.length, t = ns.slice(0), i, s;
    for (Ua = {},
    ns.length = 0,
    i = 0; i < e; i++)
        s = t[i],
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
}, ku = function(e, t, i, s) {
    ns.length && !_t && Gn(),
    e.render(t, i, s || _t && t < 0 && (e._initted || e._startAt)),
    ns.length && !_t && Gn()
}, Au = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(wu).length < 2 ? t : st(e) ? e.trim() : e
}, Ou = function(e) {
    return e
}, hi = function(e, t) {
    for (var i in t)
        i in e || (e[i] = t[i]);
    return e
}, Ld = function(e) {
    return function(t, i) {
        for (var s in i)
            s in t || s === "duration" && e || s === "ease" || (t[s] = i[s])
    }
}, Ps = function(e, t) {
    for (var i in t)
        e[i] = t[i];
    return e
}, ll = function r(e, t) {
    for (var i in t)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = Ri(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e
}, qn = function(e, t) {
    var i = {}, s;
    for (s in e)
        s in t || (i[s] = e[s]);
    return i
}, Or = function(e) {
    var t = e.parent || Ie
      , i = e.keyframes ? Ld(yt(e.keyframes)) : hi;
    if (Bt(e.inherit))
        for (; t; )
            i(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, Dd = function(e, t) {
    for (var i = e.length, s = i === t.length; s && i-- && e[i] === t[i]; )
        ;
    return i < 0
}, Mu = function(e, t, i, s, n) {
    i === void 0 && (i = "_first"),
    s === void 0 && (s = "_last");
    var a = e[s], o;
    if (n)
        for (o = t[n]; a && a[n] > o; )
            a = a._prev;
    return a ? (t._next = a._next,
    a._next = t) : (t._next = e[i],
    e[i] = t),
    t._next ? t._next._prev = t : e[s] = t,
    t._prev = a,
    t.parent = t._dp = e,
    t
}, oa = function(e, t, i, s) {
    i === void 0 && (i = "_first"),
    s === void 0 && (s = "_last");
    var n = t._prev
      , a = t._next;
    n ? n._next = a : e[i] === t && (e[i] = a),
    a ? a._prev = n : e[s] === t && (e[s] = n),
    t._next = t._prev = t.parent = null
}, us = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, ks = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; )
            i._dirty = 1,
            i = i.parent;
    return e
}, Pd = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, Xa = function(e, t, i, s) {
    return e._startAt && (_t ? e._startAt.revert(Mn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s))
}, Fd = function r(e) {
    return !e || e._ts && r(e.parent)
}, ul = function(e) {
    return e._repeat ? rr(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, rr = function(e, t) {
    var i = Math.floor(e /= t);
    return e && i === e ? i - 1 : i
}, Yn = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, la = function(e) {
    return e._end = it(e._start + (e._tDur / Math.abs(e._ts || e._rts || be) || 0))
}, ua = function(e, t) {
    var i = e._dp;
    return i && i.smoothChildTiming && e._ts && (e._start = it(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    la(e),
    i._dirty || ks(i, e)),
    e
}, Iu = function(e, t) {
    var i;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = Yn(e.rawTime(), t),
    (!t._dur || an(0, t.totalDuration(), i) - t._tTime > be) && t.render(i, !0)),
    ks(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (i = e; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                i = i._dp;
        e._zTime = -be
    }
}, Oi = function(e, t, i, s) {
    return t.parent && us(t),
    t._start = it((ji(i) ? i : i || e !== Ie ? ai(e, i, t) : e._time) + t._delay),
    t._end = it(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    Mu(e, t, "_first", "_last", e._sort ? "_start" : 0),
    Ka(t) || (e._recent = t),
    s || Iu(e, t),
    e._ts < 0 && ua(e, e._tTime),
    e
}, Lu = function(e, t) {
    return (ii.ScrollTrigger || Oo("scrollTrigger", t)) && ii.ScrollTrigger.create(t, e)
}, Du = function(e, t, i, s, n) {
    if (Po(e, t, n),
    !e._initted)
        return 1;
    if (!i && e._pt && !_t && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Tu !== Qt.frame)
        return ns.push(e),
        e._lazy = [n, s],
        1
}, Bd = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t))
}, Ka = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart"
}, Rd = function(e, t, i, s) {
    var n = e.ratio, a = t < 0 || !t && (!e._start && Bd(e) && !(!e._initted && Ka(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ka(e)) ? 0 : 1, o = e._rDelay, l = 0, u, c, f;
    if (o && e._repeat && (l = an(0, e._tDur, t),
    c = rr(l, o),
    e._yoyo && c & 1 && (a = 1 - a),
    c !== rr(e._tTime, o) && (n = 1 - a,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    a !== n || _t || s || e._zTime === be || !t && e._zTime) {
        if (!e._initted && Du(e, t, s, i, l))
            return;
        for (f = e._zTime,
        e._zTime = t || (i ? be : 0),
        i || (i = t && !f),
        e.ratio = a,
        e._from && (a = 1 - a),
        e._time = 0,
        e._tTime = l,
        u = e._pt; u; )
            u.r(a, u.d),
            u = u._next;
        t < 0 && Xa(e, t, i, !0),
        e._onUpdate && !i && ei(e, "onUpdate"),
        l && e._repeat && !i && e.parent && ei(e, "onRepeat"),
        (t >= e._tDur || t < 0) && e.ratio === a && (a && us(e, 1),
        !i && !_t && (ei(e, a ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = t)
}, $d = function(e, t, i) {
    var s;
    if (i > t)
        for (s = e._first; s && s._start <= i; ) {
            if (s.data === "isPause" && s._start > t)
                return s;
            s = s._next
        }
    else
        for (s = e._last; s && s._start >= i; ) {
            if (s.data === "isPause" && s._start < t)
                return s;
            s = s._prev
        }
}, nr = function(e, t, i, s) {
    var n = e._repeat
      , a = it(t) || 0
      , o = e._tTime / e._tDur;
    return o && !s && (e._time *= a / e._dur),
    e._dur = a,
    e._tDur = n ? n < 0 ? 1e10 : it(a * (n + 1) + e._rDelay * n) : a,
    o > 0 && !s && ua(e, e._tTime = e._tDur * o),
    e.parent && la(e),
    i || ks(e.parent, e),
    e
}, cl = function(e) {
    return e instanceof At ? ks(e) : nr(e, e._dur)
}, Vd = {
    _start: 0,
    endTime: Wr,
    totalDuration: Wr
}, ai = function r(e, t, i) {
    var s = e.labels, n = e._recent || Vd, a = e.duration() >= ui ? n.endTime(!1) : e._dur, o, l, u;
    return st(t) && (isNaN(t) || t in s) ? (l = t.charAt(0),
    u = t.substr(-1) === "%",
    o = t.indexOf("="),
    l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")),
    (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (t in s || (s[t] = a),
    s[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)),
    u && i && (l = l / 100 * (yt(i) ? i[0] : i).totalDuration()),
    o > 1 ? r(e, t.substr(0, o - 1), i) + l : a + l)) : t == null ? a : +t
}, Mr = function(e, t, i) {
    var s = ji(t[1]), n = (s ? 2 : 1) + (e < 2 ? 0 : 1), a = t[n], o, l;
    if (s && (a.duration = t[1]),
    a.parent = i,
    e) {
        for (o = a,
        l = i; l && !("immediateRender"in o); )
            o = l.vars.defaults || {},
            l = Bt(l.vars.inherit) && l.parent;
        a.immediateRender = Bt(o.immediateRender),
        e < 2 ? a.runBackwards = 1 : a.startAt = t[n - 1]
    }
    return new He(t[0],a,t[n + 1])
}, fs = function(e, t) {
    return e || e === 0 ? t(e) : t
}, an = function(e, t, i) {
    return i < e ? e : i > t ? t : i
}, vt = function(e, t) {
    return !st(e) || !(t = Ad.exec(e)) ? "" : t[1]
}, zd = function(e, t, i) {
    return fs(i, function(s) {
        return an(e, t, s)
    })
}, Za = [].slice, Pu = function(e, t) {
    return e && Ri(e) && "length"in e && (!t && !e.length || e.length - 1 in e && Ri(e[0])) && !e.nodeType && e !== Ei
}, Nd = function(e, t, i) {
    return i === void 0 && (i = []),
    e.forEach(function(s) {
        var n;
        return st(s) && !t || Pu(s, 1) ? (n = i).push.apply(n, ci(s)) : i.push(s)
    }) || i
}, ci = function(e, t, i) {
    return Ee && !t && Ee.selector ? Ee.selector(e) : st(e) && !i && (ja || !ar()) ? Za.call((t || Ao).querySelectorAll(e), 0) : yt(e) ? Nd(e, i) : Pu(e) ? Za.call(e, 0) : e ? [e] : []
}, Qa = function(e) {
    return e = ci(e)[0] || Yr("Invalid scope") || {},
    function(t) {
        var i = e.current || e.nativeElement || e;
        return ci(t, i.querySelectorAll ? i : i === e ? Yr("Invalid scope") || Ao.createElement("div") : e)
    }
}, Fu = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Bu = function(e) {
    if (Be(e))
        return e;
    var t = Ri(e) ? e : {
        each: e
    }
      , i = As(t.ease)
      , s = t.from || 0
      , n = parseFloat(t.base) || 0
      , a = {}
      , o = s > 0 && s < 1
      , l = isNaN(s) || o
      , u = t.axis
      , c = s
      , f = s;
    return st(s) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[s] || 0 : !o && l && (c = s[0],
    f = s[1]),
    function(p, d, g) {
        var h = (g || t).length, _ = a[h], y, v, b, m, w, S, T, k, E;
        if (!_) {
            if (E = t.grid === "auto" ? 0 : (t.grid || [1, ui])[1],
            !E) {
                for (T = -ui; T < (T = g[E++].getBoundingClientRect().left) && E < h; )
                    ;
                E < h && E--
            }
            for (_ = a[h] = [],
            y = l ? Math.min(E, h) * c - .5 : s % E,
            v = E === ui ? 0 : l ? h * f / E - .5 : s / E | 0,
            T = 0,
            k = ui,
            S = 0; S < h; S++)
                b = S % E - y,
                m = v - (S / E | 0),
                _[S] = w = u ? Math.abs(u === "y" ? m : b) : vu(b * b + m * m),
                w > T && (T = w),
                w < k && (k = w);
            s === "random" && Fu(_),
            _.max = T - k,
            _.min = k,
            _.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (E > h ? h - 1 : u ? u === "y" ? h / E : E : Math.max(E, h / E)) || 0) * (s === "edges" ? -1 : 1),
            _.b = h < 0 ? n - h : n,
            _.u = vt(t.amount || t.each) || 0,
            i = i && h < 0 ? Wu(i) : i
        }
        return h = (_[p] - _.min) / _.max || 0,
        it(_.b + (i ? i(h) : h) * _.v) + _.u
    }
}, Ja = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(i) {
        var s = it(Math.round(parseFloat(i) / e) * e * t);
        return (s - s % 1) / t + (ji(i) ? 0 : vt(i))
    }
}, Ru = function(e, t) {
    var i = yt(e), s, n;
    return !i && Ri(e) && (s = i = e.radius || ui,
    e.values ? (e = ci(e.values),
    (n = !ji(e[0])) && (s *= s)) : e = Ja(e.increment)),
    fs(t, i ? Be(e) ? function(a) {
        return n = e(a),
        Math.abs(n - a) <= s ? n : a
    }
    : function(a) {
        for (var o = parseFloat(n ? a.x : a), l = parseFloat(n ? a.y : 0), u = ui, c = 0, f = e.length, p, d; f--; )
            n ? (p = e[f].x - o,
            d = e[f].y - l,
            p = p * p + d * d) : p = Math.abs(e[f] - o),
            p < u && (u = p,
            c = f);
        return c = !s || u <= s ? e[c] : a,
        n || c === a || ji(a) ? c : c + vt(a)
    }
    : Ja(e))
}, $u = function(e, t, i, s) {
    return fs(yt(e) ? !t : i === !0 ? !!(i = 0) : !s, function() {
        return yt(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * s) / s
    })
}, Hd = function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
    return function(s) {
        return t.reduce(function(n, a) {
            return a(n)
        }, s)
    }
}, Gd = function(e, t) {
    return function(i) {
        return e(parseFloat(i)) + (t || vt(i))
    }
}, qd = function(e, t, i) {
    return zu(e, t, 0, 1, i)
}, Vu = function(e, t, i) {
    return fs(i, function(s) {
        return e[~~t(s)]
    })
}, Yd = function r(e, t, i) {
    var s = t - e;
    return yt(e) ? Vu(e, r(0, e.length), t) : fs(i, function(n) {
        return (s + (n - e) % s) % s + e
    })
}, Wd = function r(e, t, i) {
    var s = t - e
      , n = s * 2;
    return yt(e) ? Vu(e, r(0, e.length - 1), t) : fs(i, function(a) {
        return a = (n + (a - e) % n) % n || 0,
        e + (a > s ? n - a : a)
    })
}, jr = function(e) {
    for (var t = 0, i = "", s, n, a, o; ~(s = e.indexOf("random(", t)); )
        a = e.indexOf(")", s),
        o = e.charAt(s + 7) === "[",
        n = e.substr(s + 7, a - s - 7).match(o ? wu : Wa),
        i += e.substr(t, s - t) + $u(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5),
        t = a + 1;
    return i + e.substr(t, e.length - t)
}, zu = function(e, t, i, s, n) {
    var a = t - e
      , o = s - i;
    return fs(n, function(l) {
        return i + ((l - e) / a * o || 0)
    })
}, jd = function r(e, t, i, s) {
    var n = isNaN(e + t) ? 0 : function(d) {
        return (1 - d) * e + d * t
    }
    ;
    if (!n) {
        var a = st(e), o = {}, l, u, c, f, p;
        if (i === !0 && (s = 1) && (i = null),
        a)
            e = {
                p: e
            },
            t = {
                p: t
            };
        else if (yt(e) && !yt(t)) {
            for (c = [],
            f = e.length,
            p = f - 2,
            u = 1; u < f; u++)
                c.push(r(e[u - 1], e[u]));
            f--,
            n = function(g) {
                g *= f;
                var h = Math.min(p, ~~g);
                return c[h](g - h)
            }
            ,
            i = t
        } else
            s || (e = Ps(yt(e) ? [] : {}, e));
        if (!c) {
            for (l in t)
                Do.call(o, e, l, "get", t[l]);
            n = function(g) {
                return Ro(g, o) || (a ? e.p : e)
            }
        }
    }
    return fs(i, n)
}, dl = function(e, t, i) {
    var s = e.labels, n = ui, a, o, l;
    for (a in s)
        o = s[a] - t,
        o < 0 == !!i && o && n > (o = Math.abs(o)) && (l = a,
        n = o);
    return l
}, ei = function(e, t, i) {
    var s = e.vars, n = s[t], a = Ee, o = e._ctx, l, u, c;
    if (n)
        return l = s[t + "Params"],
        u = s.callbackScope || e,
        i && ns.length && Gn(),
        o && (Ee = o),
        c = l ? n.apply(u, l) : n.call(u),
        Ee = a,
        c
}, wr = function(e) {
    return us(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!_t),
    e.progress() < 1 && ei(e, "onInterrupt"),
    e
}, Xs, Nu = [], Hu = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        ko() || e.headless) {
            var t = e.name
              , i = Be(e)
              , s = t && !i && e.init ? function() {
                this._props = []
            }
            : e
              , n = {
                init: Wr,
                render: Ro,
                add: Do,
                kill: cf,
                modifier: uf,
                rawVars: 0
            }
              , a = {
                targetTest: 0,
                get: 0,
                getSetter: Bo,
                aliases: {},
                register: 0
            };
            if (ar(),
            e !== s) {
                if (Xt[t])
                    return;
                hi(s, hi(qn(e, n), a)),
                Ps(s.prototype, Ps(n, qn(e, a))),
                Xt[s.prop = t] = s,
                e.targetTest && (In.push(s),
                Mo[t] = 1),
                t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            Cu(t, s),
            e.register && e.register(Ht, s, $t)
        } else
            Nu.push(e)
}, ve = 255, Sr = {
    aqua: [0, ve, ve],
    lime: [0, ve, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ve],
    navy: [0, 0, 128],
    white: [ve, ve, ve],
    olive: [128, 128, 0],
    yellow: [ve, ve, 0],
    orange: [ve, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ve, 0, 0],
    pink: [ve, 192, 203],
    cyan: [0, ve, ve],
    transparent: [ve, ve, ve, 0]
}, ba = function(e, t, i) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * ve + .5 | 0
}, Gu = function(e, t, i) {
    var s = e ? ji(e) ? [e >> 16, e >> 8 & ve, e & ve] : 0 : Sr.black, n, a, o, l, u, c, f, p, d, g;
    if (!s) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Sr[e])
            s = Sr[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (n = e.charAt(1),
            a = e.charAt(2),
            o = e.charAt(3),
            e = "#" + n + n + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return s = parseInt(e.substr(1, 6), 16),
                [s >> 16, s >> 8 & ve, s & ve, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            s = [e >> 16, e >> 8 & ve, e & ve]
        } else if (e.substr(0, 3) === "hsl") {
            if (s = g = e.match(Wa),
            !t)
                l = +s[0] % 360 / 360,
                u = +s[1] / 100,
                c = +s[2] / 100,
                a = c <= .5 ? c * (u + 1) : c + u - c * u,
                n = c * 2 - a,
                s.length > 3 && (s[3] *= 1),
                s[0] = ba(l + 1 / 3, n, a),
                s[1] = ba(l, n, a),
                s[2] = ba(l - 1 / 3, n, a);
            else if (~e.indexOf("="))
                return s = e.match(yu),
                i && s.length < 4 && (s[3] = 1),
                s
        } else
            s = e.match(Wa) || Sr.transparent;
        s = s.map(Number)
    }
    return t && !g && (n = s[0] / ve,
    a = s[1] / ve,
    o = s[2] / ve,
    f = Math.max(n, a, o),
    p = Math.min(n, a, o),
    c = (f + p) / 2,
    f === p ? l = u = 0 : (d = f - p,
    u = c > .5 ? d / (2 - f - p) : d / (f + p),
    l = f === n ? (a - o) / d + (a < o ? 6 : 0) : f === a ? (o - n) / d + 2 : (n - a) / d + 4,
    l *= 60),
    s[0] = ~~(l + .5),
    s[1] = ~~(u * 100 + .5),
    s[2] = ~~(c * 100 + .5)),
    i && s.length < 4 && (s[3] = 1),
    s
}, qu = function(e) {
    var t = []
      , i = []
      , s = -1;
    return e.split(as).forEach(function(n) {
        var a = n.match(Us) || [];
        t.push.apply(t, a),
        i.push(s += a.length + 1)
    }),
    t.c = i,
    t
}, fl = function(e, t, i) {
    var s = "", n = (e + s).match(as), a = t ? "hsla(" : "rgba(", o = 0, l, u, c, f;
    if (!n)
        return e;
    if (n = n.map(function(p) {
        return (p = Gu(p, t, 1)) && a + (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")"
    }),
    i && (c = qu(e),
    l = i.c,
    l.join(s) !== c.c.join(s)))
        for (u = e.replace(as, "1").split(Us),
        f = u.length - 1; o < f; o++)
            s += u[o] + (~l.indexOf(o) ? n.shift() || a + "0,0,0,0)" : (c.length ? c : n.length ? n : i).shift());
    if (!u)
        for (u = e.split(as),
        f = u.length - 1; o < f; o++)
            s += u[o] + n[o];
    return s + u[f]
}, as = function() {
    var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Sr)
        r += "|" + e + "\\b";
    return new RegExp(r + ")","gi")
}(), Ud = /hsl[a]?\(/, Yu = function(e) {
    var t = e.join(" "), i;
    if (as.lastIndex = 0,
    as.test(t))
        return i = Ud.test(t),
        e[1] = fl(e[1], i),
        e[0] = fl(e[0], i, qu(e[1])),
        !0
}, Ur, Qt = function() {
    var r = Date.now, e = 500, t = 33, i = r(), s = i, n = 1e3 / 240, a = n, o = [], l, u, c, f, p, d, g = function h(_) {
        var y = r() - s, v = _ === !0, b, m, w, S;
        if ((y > e || y < 0) && (i += y - t),
        s += y,
        w = s - i,
        b = w - a,
        (b > 0 || v) && (S = ++f.frame,
        p = w - f.time * 1e3,
        f.time = w = w / 1e3,
        a += b + (b >= n ? 4 : n - b),
        m = 1),
        v || (l = u(h)),
        m)
            for (d = 0; d < o.length; d++)
                o[d](w, p, S, _)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            g(!0)
        },
        deltaRatio: function(_) {
            return p / (1e3 / (_ || 60))
        },
        wake: function() {
            Su && (!ja && ko() && (Ei = ja = window,
            Ao = Ei.document || {},
            ii.gsap = Ht,
            (Ei.gsapVersions || (Ei.gsapVersions = [])).push(Ht.version),
            xu(Hn || Ei.GreenSockGlobals || !Ei.gsap && Ei || {}),
            Nu.forEach(Hu)),
            c = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            l && f.sleep(),
            u = c || function(_) {
                return setTimeout(_, a - f.time * 1e3 + 1 | 0)
            }
            ,
            Ur = 1,
            g(2))
        },
        sleep: function() {
            (c ? cancelAnimationFrame : clearTimeout)(l),
            Ur = 0,
            u = Wr
        },
        lagSmoothing: function(_, y) {
            e = _ || 1 / 0,
            t = Math.min(y || 33, e)
        },
        fps: function(_) {
            n = 1e3 / (_ || 240),
            a = f.time * 1e3 + n
        },
        add: function(_, y, v) {
            var b = y ? function(m, w, S, T) {
                _(m, w, S, T),
                f.remove(b)
            }
            : _;
            return f.remove(_),
            o[v ? "unshift" : "push"](b),
            ar(),
            b
        },
        remove: function(_, y) {
            ~(y = o.indexOf(_)) && o.splice(y, 1) && d >= y && d--
        },
        _listeners: o
    },
    f
}(), ar = function() {
    return !Ur && Qt.wake()
}, ue = {}, Xd = /^[\d.\-M][\d.\-,\s]/, Kd = /["']/g, Zd = function(e) {
    for (var t = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], n = 1, a = i.length, o, l, u; n < a; n++)
        l = i[n],
        o = n !== a - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, o),
        t[s] = isNaN(u) ? u.replace(Kd, "").trim() : +u,
        s = l.substr(o + 1).trim();
    return t
}, Qd = function(e) {
    var t = e.indexOf("(") + 1
      , i = e.indexOf(")")
      , s = e.indexOf("(", t);
    return e.substring(t, ~s && s < i ? e.indexOf(")", i + 1) : i)
}, Jd = function(e) {
    var t = (e + "").split("(")
      , i = ue[t[0]];
    return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [Zd(t[1])] : Qd(e).split(",").map(Au)) : ue._CE && Xd.test(e) ? ue._CE("", e) : i
}, Wu = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, ju = function r(e, t) {
    for (var i = e._first, s; i; )
        i instanceof At ? r(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? r(i.timeline, t) : (s = i._ease,
        i._ease = i._yEase,
        i._yEase = s,
        i._yoyo = t)),
        i = i._next
}, As = function(e, t) {
    return e && (Be(e) ? e : ue[e] || Jd(e)) || t
}, zs = function(e, t, i, s) {
    i === void 0 && (i = function(l) {
        return 1 - t(1 - l)
    }
    ),
    s === void 0 && (s = function(l) {
        return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
    }
    );
    var n = {
        easeIn: t,
        easeOut: i,
        easeInOut: s
    }, a;
    return Rt(e, function(o) {
        ue[o] = ii[o] = n,
        ue[a = o.toLowerCase()] = i;
        for (var l in n)
            ue[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = ue[o + "." + l] = n[l]
    }),
    n
}, Uu = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, wa = function r(e, t, i) {
    var s = t >= 1 ? t : 1
      , n = (i || (e ? .3 : .45)) / (t < 1 ? t : 1)
      , a = n / Ya * (Math.asin(1 / s) || 0)
      , o = function(c) {
        return c === 1 ? 1 : s * Math.pow(2, -10 * c) * kd((c - a) * n) + 1
    }
      , l = e === "out" ? o : e === "in" ? function(u) {
        return 1 - o(1 - u)
    }
    : Uu(o);
    return n = Ya / n,
    l.config = function(u, c) {
        return r(e, u, c)
    }
    ,
    l
}, Sa = function r(e, t) {
    t === void 0 && (t = 1.70158);
    var i = function(a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0
    }
      , s = e === "out" ? i : e === "in" ? function(n) {
        return 1 - i(1 - n)
    }
    : Uu(i);
    return s.config = function(n) {
        return r(e, n)
    }
    ,
    s
};
Rt("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
    var t = e < 5 ? e + 1 : e;
    zs(r + ",Power" + (t - 1), e ? function(i) {
        return Math.pow(i, t)
    }
    : function(i) {
        return i
    }
    , function(i) {
        return 1 - Math.pow(1 - i, t)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
    })
});
ue.Linear.easeNone = ue.none = ue.Linear.easeIn;
zs("Elastic", wa("in"), wa("out"), wa());
(function(r, e) {
    var t = 1 / e
      , i = 2 * t
      , s = 2.5 * t
      , n = function(o) {
        return o < t ? r * o * o : o < i ? r * Math.pow(o - 1.5 / e, 2) + .75 : o < s ? r * (o -= 2.25 / e) * o + .9375 : r * Math.pow(o - 2.625 / e, 2) + .984375
    };
    zs("Bounce", function(a) {
        return 1 - n(1 - a)
    }, n)
}
)(7.5625, 2.75);
zs("Expo", function(r) {
    return r ? Math.pow(2, 10 * (r - 1)) : 0
});
zs("Circ", function(r) {
    return -(vu(1 - r * r) - 1)
});
zs("Sine", function(r) {
    return r === 1 ? 1 : -Ed(r * Cd) + 1
});
zs("Back", Sa("in"), Sa("out"), Sa());
ue.SteppedEase = ue.steps = ii.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e
          , s = e + (t ? 0 : 1)
          , n = t ? 1 : 0
          , a = 1 - be;
        return function(o) {
            return ((s * an(0, a, o) | 0) + n) * i
        }
    }
};
sr.ease = ue["quad.out"];
Rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
    return Io += r + "," + r + "Params,"
});
var Xu = function(e, t) {
    this.id = Td++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : Eu,
    this.set = t ? t.getSetter : Bo
}
  , Xr = function() {
    function r(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        nr(this, +t.duration, 1, 1),
        this.data = t.data,
        Ee && (this._ctx = Ee,
        Ee.data.push(this)),
        Ur || Qt.wake()
    }
    var e = r.prototype;
    return e.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
        this._delay = i,
        this) : this._delay
    }
    ,
    e.duration = function(i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(i) {
        return arguments.length ? (this._dirty = 0,
        nr(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(i, s) {
        if (ar(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (ua(this, i),
            !n._dp || n.parent || Iu(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Oi(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !s || this._initted && Math.abs(this._zTime) === be || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
        ku(this, i, s)),
        this
    }
    ,
    e.time = function(i, s) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + ul(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), s) : this._time
    }
    ,
    e.totalProgress = function(i, s) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.progress = function(i, s) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + ul(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(i, s) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * n, s) : this._repeat ? rr(this._tTime, n) + 1 : 1
    }
    ,
    e.timeScale = function(i, s) {
        if (!arguments.length)
            return this._rts === -be ? 0 : this._rts;
        if (this._rts === i)
            return this;
        var n = this.parent && this._ts ? Yn(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0,
        this._ts = this._ps || i === -be ? 0 : this._rts,
        this.totalTime(an(-Math.abs(this._delay), this._tDur, n), s !== !1),
        la(this),
        Pd(this)
    }
    ,
    e.paused = function(i) {
        return arguments.length ? (this._ps !== i && (this._ps = i,
        i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (ar(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== be && (this._tTime -= be)))),
        this) : this._ps
    }
    ,
    e.startTime = function(i) {
        if (arguments.length) {
            this._start = i;
            var s = this.parent || this._dp;
            return s && (s._sort || !this.parent) && Oi(s, this, i - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(i) {
        return this._start + (Bt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(i) {
        var s = this.parent || this._dp;
        return s ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Yn(s.rawTime(i), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(i) {
        i === void 0 && (i = Md);
        var s = _t;
        return _t = i,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
        this.totalTime(-.01, i.suppressEvents)),
        this.data !== "nested" && i.kill !== !1 && this.kill(),
        _t = s,
        this
    }
    ,
    e.globalTime = function(i) {
        for (var s = this, n = arguments.length ? i : s.rawTime(); s; )
            n = s._start + n / (Math.abs(s._ts) || 1),
            s = s._dp;
        return !this.parent && this._sat ? this._sat.globalTime(i) : n
    }
    ,
    e.repeat = function(i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
        cl(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(i) {
        if (arguments.length) {
            var s = this._time;
            return this._rDelay = i,
            cl(this),
            s ? this.time(s) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(i) {
        return arguments.length ? (this._yoyo = i,
        this) : this._yoyo
    }
    ,
    e.seek = function(i, s) {
        return this.totalTime(ai(this, i), Bt(s))
    }
    ,
    e.restart = function(i, s) {
        return this.play().totalTime(i ? -this._delay : 0, Bt(s))
    }
    ,
    e.play = function(i, s) {
        return i != null && this.seek(i, s),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(i, s) {
        return i != null && this.seek(i || this.totalDuration(), s),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(i, s) {
        return i != null && this.seek(i, s),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -be : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -be,
        this
    }
    ,
    e.isActive = function() {
        var i = this.parent || this._dp, s = this._start, n;
        return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= s && n < this.endTime(!0) - be)
    }
    ,
    e.eventCallback = function(i, s, n) {
        var a = this.vars;
        return arguments.length > 1 ? (s ? (a[i] = s,
        n && (a[i + "Params"] = n),
        i === "onUpdate" && (this._onUpdate = s)) : delete a[i],
        this) : a[i]
    }
    ,
    e.then = function(i) {
        var s = this;
        return new Promise(function(n) {
            var a = Be(i) ? i : Ou
              , o = function() {
                var u = s.then;
                s.then = null,
                Be(a) && (a = a(s)) && (a.then || a === s) && (s.then = u),
                n(a),
                s.then = u
            };
            s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? o() : s._prom = o
        }
        )
    }
    ,
    e.kill = function() {
        wr(this)
    }
    ,
    r
}();
hi(Xr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -be,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var At = function(r) {
    mu(e, r);
    function e(i, s) {
        var n;
        return i === void 0 && (i = {}),
        n = r.call(this, i) || this,
        n.labels = {},
        n.smoothChildTiming = !!i.smoothChildTiming,
        n.autoRemoveChildren = !!i.autoRemoveChildren,
        n._sort = Bt(i.sortChildren),
        Ie && Oi(i.parent || Ie, Vi(n), s),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Lu(Vi(n), i.scrollTrigger),
        n
    }
    var t = e.prototype;
    return t.to = function(s, n, a) {
        return Mr(0, arguments, this),
        this
    }
    ,
    t.from = function(s, n, a) {
        return Mr(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(s, n, a, o) {
        return Mr(2, arguments, this),
        this
    }
    ,
    t.set = function(s, n, a) {
        return n.duration = 0,
        n.parent = this,
        Or(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new He(s,n,ai(this, a),1),
        this
    }
    ,
    t.call = function(s, n, a) {
        return Oi(this, He.delayedCall(0, s, n), a)
    }
    ,
    t.staggerTo = function(s, n, a, o, l, u, c) {
        return a.duration = n,
        a.stagger = a.stagger || o,
        a.onComplete = u,
        a.onCompleteParams = c,
        a.parent = this,
        new He(s,a,ai(this, l)),
        this
    }
    ,
    t.staggerFrom = function(s, n, a, o, l, u, c) {
        return a.runBackwards = 1,
        Or(a).immediateRender = Bt(a.immediateRender),
        this.staggerTo(s, n, a, o, l, u, c)
    }
    ,
    t.staggerFromTo = function(s, n, a, o, l, u, c, f) {
        return o.startAt = a,
        Or(o).immediateRender = Bt(o.immediateRender),
        this.staggerTo(s, n, o, l, u, c, f)
    }
    ,
    t.render = function(s, n, a) {
        var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = s <= 0 ? 0 : it(s), f = this._zTime < 0 != s < 0 && (this._initted || !u), p, d, g, h, _, y, v, b, m, w, S, T;
        if (this !== Ie && c > l && s >= 0 && (c = l),
        c !== this._tTime || a || f) {
            if (o !== this._time && u && (c += this._time - o,
            s += this._time - o),
            p = c,
            m = this._start,
            b = this._ts,
            y = !b,
            f && (u || (o = this._zTime),
            (s || !n) && (this._zTime = s)),
            this._repeat) {
                if (S = this._yoyo,
                _ = u + this._rDelay,
                this._repeat < -1 && s < 0)
                    return this.totalTime(_ * 100 + s, n, a);
                if (p = it(c % _),
                c === l ? (h = this._repeat,
                p = u) : (h = ~~(c / _),
                h && h === c / _ && (p = u,
                h--),
                p > u && (p = u)),
                w = rr(this._tTime, _),
                !o && this._tTime && w !== h && this._tTime - w * _ - this._dur <= 0 && (w = h),
                S && h & 1 && (p = u - p,
                T = 1),
                h !== w && !this._lock) {
                    var k = S && w & 1
                      , E = k === (S && h & 1);
                    if (h < w && (k = !k),
                    o = k ? 0 : c % u ? u : c,
                    this._lock = 1,
                    this.render(o || (T ? 0 : it(h * _)), n, !u)._lock = 0,
                    this._tTime = c,
                    !n && this.parent && ei(this, "onRepeat"),
                    this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                    o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    E && (this._lock = 2,
                    o = k ? u : -1e-4,
                    this.render(o, !0),
                    this.vars.repeatRefresh && !T && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !y)
                        return this;
                    ju(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (v = $d(this, it(o), it(p)),
            v && (c -= p - (p = v._start))),
            this._tTime = c,
            this._time = p,
            this._act = !b,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = s,
            o = 0),
            !o && p && !n && !h && (ei(this, "onStart"),
            this._tTime !== c))
                return this;
            if (p >= o && s >= 0)
                for (d = this._first; d; ) {
                    if (g = d._next,
                    (d._act || p >= d._start) && d._ts && v !== d) {
                        if (d.parent !== this)
                            return this.render(s, n, a);
                        if (d.render(d._ts > 0 ? (p - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (p - d._start) * d._ts, n, a),
                        p !== this._time || !this._ts && !y) {
                            v = 0,
                            g && (c += this._zTime = -be);
                            break
                        }
                    }
                    d = g
                }
            else {
                d = this._last;
                for (var C = s < 0 ? s : p; d; ) {
                    if (g = d._prev,
                    (d._act || C <= d._end) && d._ts && v !== d) {
                        if (d.parent !== this)
                            return this.render(s, n, a);
                        if (d.render(d._ts > 0 ? (C - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (C - d._start) * d._ts, n, a || _t && (d._initted || d._startAt)),
                        p !== this._time || !this._ts && !y) {
                            v = 0,
                            g && (c += this._zTime = C ? -be : be);
                            break
                        }
                    }
                    d = g
                }
            }
            if (v && !n && (this.pause(),
            v.render(p >= o ? 0 : -be)._zTime = p >= o ? 1 : -1,
            this._ts))
                return this._start = m,
                la(this),
                this.render(s, n, a);
            this._onUpdate && !n && ei(this, "onUpdate", !0),
            (c === l && this._tTime >= this.totalDuration() || !c && o) && (m === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((s || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && us(this, 1),
            !n && !(s < 0 && !o) && (c || o || !l) && (ei(this, c === l && s >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    t.add = function(s, n) {
        var a = this;
        if (ji(n) || (n = ai(this, n, s)),
        !(s instanceof Xr)) {
            if (yt(s))
                return s.forEach(function(o) {
                    return a.add(o, n)
                }),
                this;
            if (st(s))
                return this.addLabel(s, n);
            if (Be(s))
                s = He.delayedCall(0, s);
            else
                return this
        }
        return this !== s ? Oi(this, s, n) : this
    }
    ,
    t.getChildren = function(s, n, a, o) {
        s === void 0 && (s = !0),
        n === void 0 && (n = !0),
        a === void 0 && (a = !0),
        o === void 0 && (o = -ui);
        for (var l = [], u = this._first; u; )
            u._start >= o && (u instanceof He ? n && l.push(u) : (a && l.push(u),
            s && l.push.apply(l, u.getChildren(!0, n, a)))),
            u = u._next;
        return l
    }
    ,
    t.getById = function(s) {
        for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
            if (n[a].vars.id === s)
                return n[a]
    }
    ,
    t.remove = function(s) {
        return st(s) ? this.removeLabel(s) : Be(s) ? this.killTweensOf(s) : (oa(this, s),
        s === this._recent && (this._recent = this._last),
        ks(this))
    }
    ,
    t.totalTime = function(s, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = it(Qt.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
        r.prototype.totalTime.call(this, s, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(s, n) {
        return this.labels[s] = ai(this, n),
        this
    }
    ,
    t.removeLabel = function(s) {
        return delete this.labels[s],
        this
    }
    ,
    t.addPause = function(s, n, a) {
        var o = He.delayedCall(0, n || Wr, a);
        return o.data = "isPause",
        this._hasPause = 1,
        Oi(this, o, ai(this, s))
    }
    ,
    t.removePause = function(s) {
        var n = this._first;
        for (s = ai(this, s); n; )
            n._start === s && n.data === "isPause" && us(n),
            n = n._next
    }
    ,
    t.killTweensOf = function(s, n, a) {
        for (var o = this.getTweensOf(s, a), l = o.length; l--; )
            Ji !== o[l] && o[l].kill(s, n);
        return this
    }
    ,
    t.getTweensOf = function(s, n) {
        for (var a = [], o = ci(s), l = this._first, u = ji(n), c; l; )
            l instanceof He ? Id(l._targets, o) && (u ? (!Ji || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && a.push(l) : (c = l.getTweensOf(o, n)).length && a.push.apply(a, c),
            l = l._next;
        return a
    }
    ,
    t.tweenTo = function(s, n) {
        n = n || {};
        var a = this, o = ai(a, s), l = n, u = l.startAt, c = l.onStart, f = l.onStartParams, p = l.immediateRender, d, g = He.to(a, hi({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: o,
            overwrite: "auto",
            duration: n.duration || Math.abs((o - (u && "time"in u ? u.time : a._time)) / a.timeScale()) || be,
            onStart: function() {
                if (a.pause(),
                !d) {
                    var _ = n.duration || Math.abs((o - (u && "time"in u ? u.time : a._time)) / a.timeScale());
                    g._dur !== _ && nr(g, _, 0, 1).render(g._time, !0, !0),
                    d = 1
                }
                c && c.apply(g, f || [])
            }
        }, n));
        return p ? g.render(0) : g
    }
    ,
    t.tweenFromTo = function(s, n, a) {
        return this.tweenTo(n, hi({
            startAt: {
                time: ai(this, s)
            }
        }, a))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(s) {
        return s === void 0 && (s = this._time),
        dl(this, ai(this, s))
    }
    ,
    t.previousLabel = function(s) {
        return s === void 0 && (s = this._time),
        dl(this, ai(this, s), 1)
    }
    ,
    t.currentLabel = function(s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + be)
    }
    ,
    t.shiftChildren = function(s, n, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, u; o; )
            o._start >= a && (o._start += s,
            o._end += s),
            o = o._next;
        if (n)
            for (u in l)
                l[u] >= a && (l[u] += s);
        return ks(this)
    }
    ,
    t.invalidate = function(s) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(s),
            n = n._next;
        return r.prototype.invalidate.call(this, s)
    }
    ,
    t.clear = function(s) {
        s === void 0 && (s = !0);
        for (var n = this._first, a; n; )
            a = n._next,
            this.remove(n),
            n = a;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        ks(this)
    }
    ,
    t.totalDuration = function(s) {
        var n = 0, a = this, o = a._last, l = ui, u, c, f;
        if (arguments.length)
            return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -s : s));
        if (a._dirty) {
            for (f = a.parent; o; )
                u = o._prev,
                o._dirty && o.totalDuration(),
                c = o._start,
                c > l && a._sort && o._ts && !a._lock ? (a._lock = 1,
                Oi(a, o, c - o._delay, 1)._lock = 0) : l = c,
                c < 0 && o._ts && (n -= c,
                (!f && !a._dp || f && f.smoothChildTiming) && (a._start += c / a._ts,
                a._time -= c,
                a._tTime -= c),
                a.shiftChildren(-c, !1, -1 / 0),
                l = 0),
                o._end > n && o._ts && (n = o._end),
                o = u;
            nr(a, a === Ie && a._time > n ? a._time : n, 1, 1),
            a._dirty = 0
        }
        return a._tDur
    }
    ,
    e.updateRoot = function(s) {
        if (Ie._ts && (ku(Ie, Yn(s, Ie)),
        Tu = Qt.frame),
        Qt.frame >= ol) {
            ol += ti.autoSleep || 120;
            var n = Ie._first;
            if ((!n || !n._ts) && ti.autoSleep && Qt._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || Qt.sleep()
            }
        }
    }
    ,
    e
}(Xr);
hi(At.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var ef = function(e, t, i, s, n, a, o) {
    var l = new $t(this._pt,e,t,0,1,tc,null,n), u = 0, c = 0, f, p, d, g, h, _, y, v;
    for (l.b = i,
    l.e = s,
    i += "",
    s += "",
    (y = ~s.indexOf("random(")) && (s = jr(s)),
    a && (v = [i, s],
    a(v, e, t),
    i = v[0],
    s = v[1]),
    p = i.match(_a) || []; f = _a.exec(s); )
        g = f[0],
        h = s.substring(u, f.index),
        d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1),
        g !== p[c++] && (_ = parseFloat(p[c - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: h || c === 1 ? h : ",",
            s: _,
            c: g.charAt(1) === "=" ? Zs(_, g) - _ : parseFloat(g) - _,
            m: d && d < 4 ? Math.round : 0
        },
        u = _a.lastIndex);
    return l.c = u < s.length ? s.substring(u, s.length) : "",
    l.fp = o,
    (bu.test(s) || y) && (l.e = 0),
    this._pt = l,
    l
}, Do = function(e, t, i, s, n, a, o, l, u, c) {
    Be(s) && (s = s(n || 0, e, a));
    var f = e[t], p = i !== "get" ? i : Be(f) ? u ? e[t.indexOf("set") || !Be(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : f, d = Be(f) ? u ? af : Ju : Fo, g;
    if (st(s) && (~s.indexOf("random(") && (s = jr(s)),
    s.charAt(1) === "=" && (g = Zs(p, s) + (vt(p) || 0),
    (g || g === 0) && (s = g))),
    !c || p !== s || eo)
        return !isNaN(p * s) && s !== "" ? (g = new $t(this._pt,e,t,+p || 0,s - (p || 0),typeof f == "boolean" ? lf : ec,0,d),
        u && (g.fp = u),
        o && g.modifier(o, this, e),
        this._pt = g) : (!f && !(t in e) && Oo(t, s),
        ef.call(this, e, t, p, s, d, l || ti.stringFilter, u))
}, tf = function(e, t, i, s, n) {
    if (Be(e) && (e = Ir(e, n, t, i, s)),
    !Ri(e) || e.style && e.nodeType || yt(e) || _u(e))
        return st(e) ? Ir(e, n, t, i, s) : e;
    var a = {}, o;
    for (o in e)
        a[o] = Ir(e[o], n, t, i, s);
    return a
}, Ku = function(e, t, i, s, n, a) {
    var o, l, u, c;
    if (Xt[e] && (o = new Xt[e]).init(n, o.rawVars ? t[e] : tf(t[e], s, n, a, i), i, s, a) !== !1 && (i._pt = l = new $t(i._pt,n,e,0,1,o.render,o,0,o.priority),
    i !== Xs))
        for (u = i._ptLookup[i._targets.indexOf(n)],
        c = o._props.length; c--; )
            u[o._props[c]] = l;
    return o
}, Ji, eo, Po = function r(e, t, i) {
    var s = e.vars, n = s.ease, a = s.startAt, o = s.immediateRender, l = s.lazy, u = s.onUpdate, c = s.runBackwards, f = s.yoyoEase, p = s.keyframes, d = s.autoRevert, g = e._dur, h = e._startAt, _ = e._targets, y = e.parent, v = y && y.data === "nested" ? y.vars.targets : _, b = e._overwrite === "auto" && !To, m = e.timeline, w, S, T, k, E, C, O, A, I, D, P, B, V;
    if (m && (!p || !n) && (n = "none"),
    e._ease = As(n, sr.ease),
    e._yEase = f ? Wu(As(f === !0 ? n : f, sr.ease)) : 0,
    f && e._yoyo && !e._repeat && (f = e._yEase,
    e._yEase = e._ease,
    e._ease = f),
    e._from = !m && !!s.runBackwards,
    !m || p && !s.stagger) {
        if (A = _[0] ? Es(_[0]).harness : 0,
        B = A && s[A.prop],
        w = qn(s, Mo),
        h && (h._zTime < 0 && h.progress(1),
        t < 0 && c && o && !d ? h.render(-1, !0) : h.revert(c && g ? Mn : Od),
        h._lazy = 0),
        a) {
            if (us(e._startAt = He.set(_, hi({
                data: "isStart",
                overwrite: !1,
                parent: y,
                immediateRender: !0,
                lazy: !h && Bt(l),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return ei(e, "onUpdate")
                }
                ,
                stagger: 0
            }, a))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (_t || !o && !d) && e._startAt.revert(Mn),
            o && g && t <= 0 && i <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (c && g && !h) {
            if (t && (o = !1),
            T = hi({
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !h && Bt(l),
                immediateRender: o,
                stagger: 0,
                parent: y
            }, w),
            B && (T[A.prop] = B),
            us(e._startAt = He.set(_, T)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (_t ? e._startAt.revert(Mn) : e._startAt.render(-1, !0)),
            e._zTime = t,
            !o)
                r(e._startAt, be, be);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = g && Bt(l) || l && !g,
        S = 0; S < _.length; S++) {
            if (E = _[S],
            O = E._gsap || Lo(_)[S]._gsap,
            e._ptLookup[S] = D = {},
            Ua[O.id] && ns.length && Gn(),
            P = v === _ ? S : v.indexOf(E),
            A && (I = new A).init(E, B || w, e, P, v) !== !1 && (e._pt = k = new $t(e._pt,E,I.name,0,1,I.render,I,0,I.priority),
            I._props.forEach(function(F) {
                D[F] = k
            }),
            I.priority && (C = 1)),
            !A || B)
                for (T in w)
                    Xt[T] && (I = Ku(T, w, e, P, E, v)) ? I.priority && (C = 1) : D[T] = k = Do.call(e, E, T, "get", w[T], P, v, 0, s.stringFilter);
            e._op && e._op[S] && e.kill(E, e._op[S]),
            b && e._pt && (Ji = e,
            Ie.killTweensOf(E, D, e.globalTime(t)),
            V = !e.parent,
            Ji = 0),
            e._pt && l && (Ua[O.id] = 1)
        }
        C && ic(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !V,
    p && t <= 0 && m.render(ui, !0, !0)
}, sf = function(e, t, i, s, n, a, o, l) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, f, p, d;
    if (!u)
        for (u = e._ptCache[t] = [],
        p = e._ptLookup,
        d = e._targets.length; d--; ) {
            if (c = p[d][t],
            c && c.d && c.d._pt)
                for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
                    c = c._next;
            if (!c)
                return eo = 1,
                e.vars[t] = "+=0",
                Po(e, o),
                eo = 0,
                l ? Yr(t + " not eligible for reset") : 1;
            u.push(c)
        }
    for (d = u.length; d--; )
        f = u[d],
        c = f._pt || f,
        c.s = (s || s === 0) && !n ? s : c.s + (s || 0) + a * c.c,
        c.c = i - c.s,
        f.e && (f.e = $e(i) + vt(f.e)),
        f.b && (f.b = c.s + vt(f.b))
}, rf = function(e, t) {
    var i = e[0] ? Es(e[0]).harness : 0, s = i && i.aliases, n, a, o, l;
    if (!s)
        return t;
    n = Ps({}, t);
    for (a in s)
        if (a in n)
            for (l = s[a].split(","),
            o = l.length; o--; )
                n[l[o]] = n[a];
    return n
}, nf = function(e, t, i, s) {
    var n = t.ease || s || "power1.inOut", a, o;
    if (yt(t))
        o = i[e] || (i[e] = []),
        t.forEach(function(l, u) {
            return o.push({
                t: u / (t.length - 1) * 100,
                v: l,
                e: n
            })
        });
    else
        for (a in t)
            o = i[a] || (i[a] = []),
            a === "ease" || o.push({
                t: parseFloat(e),
                v: t[a],
                e: n
            })
}, Ir = function(e, t, i, s, n) {
    return Be(e) ? e.call(t, i, s, n) : st(e) && ~e.indexOf("random(") ? jr(e) : e
}, Zu = Io + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Qu = {};
Rt(Zu + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
    return Qu[r] = 1
});
var He = function(r) {
    mu(e, r);
    function e(i, s, n, a) {
        var o;
        typeof s == "number" && (n.duration = s,
        s = n,
        n = null),
        o = r.call(this, a ? s : Or(s)) || this;
        var l = o.vars, u = l.duration, c = l.delay, f = l.immediateRender, p = l.stagger, d = l.overwrite, g = l.keyframes, h = l.defaults, _ = l.scrollTrigger, y = l.yoyoEase, v = s.parent || Ie, b = (yt(i) || _u(i) ? ji(i[0]) : "length"in s) ? [i] : ci(i), m, w, S, T, k, E, C, O;
        if (o._targets = b.length ? Lo(b) : Yr("GSAP target " + i + " not found. https://gsap.com", !ti.nullTargetWarn) || [],
        o._ptLookup = [],
        o._overwrite = d,
        g || p || fn(u) || fn(c)) {
            if (s = o.vars,
            m = o.timeline = new At({
                data: "nested",
                defaults: h || {},
                targets: v && v.data === "nested" ? v.vars.targets : b
            }),
            m.kill(),
            m.parent = m._dp = Vi(o),
            m._start = 0,
            p || fn(u) || fn(c)) {
                if (T = b.length,
                C = p && Bu(p),
                Ri(p))
                    for (k in p)
                        ~Zu.indexOf(k) && (O || (O = {}),
                        O[k] = p[k]);
                for (w = 0; w < T; w++)
                    S = qn(s, Qu),
                    S.stagger = 0,
                    y && (S.yoyoEase = y),
                    O && Ps(S, O),
                    E = b[w],
                    S.duration = +Ir(u, Vi(o), w, E, b),
                    S.delay = (+Ir(c, Vi(o), w, E, b) || 0) - o._delay,
                    !p && T === 1 && S.delay && (o._delay = c = S.delay,
                    o._start += c,
                    S.delay = 0),
                    m.to(E, S, C ? C(w, E, b) : 0),
                    m._ease = ue.none;
                m.duration() ? u = c = 0 : o.timeline = 0
            } else if (g) {
                Or(hi(m.vars.defaults, {
                    ease: "none"
                })),
                m._ease = As(g.ease || s.ease || "none");
                var A = 0, I, D, P;
                if (yt(g))
                    g.forEach(function(B) {
                        return m.to(b, B, ">")
                    }),
                    m.duration();
                else {
                    S = {};
                    for (k in g)
                        k === "ease" || k === "easeEach" || nf(k, g[k], S, g.easeEach);
                    for (k in S)
                        for (I = S[k].sort(function(B, V) {
                            return B.t - V.t
                        }),
                        A = 0,
                        w = 0; w < I.length; w++)
                            D = I[w],
                            P = {
                                ease: D.e,
                                duration: (D.t - (w ? I[w - 1].t : 0)) / 100 * u
                            },
                            P[k] = D.v,
                            m.to(b, P, A),
                            A += P.duration;
                    m.duration() < u && m.to({}, {
                        duration: u - m.duration()
                    })
                }
            }
            u || o.duration(u = m.duration())
        } else
            o.timeline = 0;
        return d === !0 && !To && (Ji = Vi(o),
        Ie.killTweensOf(b),
        Ji = 0),
        Oi(v, Vi(o), n),
        s.reversed && o.reverse(),
        s.paused && o.paused(!0),
        (f || !u && !g && o._start === it(v._time) && Bt(f) && Fd(Vi(o)) && v.data !== "nested") && (o._tTime = -be,
        o.render(Math.max(0, -c) || 0)),
        _ && Lu(Vi(o), _),
        o
    }
    var t = e.prototype;
    return t.render = function(s, n, a) {
        var o = this._time, l = this._tDur, u = this._dur, c = s < 0, f = s > l - be && !c ? l : s < be ? 0 : s, p, d, g, h, _, y, v, b, m;
        if (!u)
            Rd(this, s, n, a);
        else if (f !== this._tTime || !s || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (p = f,
            b = this.timeline,
            this._repeat) {
                if (h = u + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(h * 100 + s, n, a);
                if (p = it(f % h),
                f === l ? (g = this._repeat,
                p = u) : (g = ~~(f / h),
                g && g === it(f / h) && (p = u,
                g--),
                p > u && (p = u)),
                y = this._yoyo && g & 1,
                y && (m = this._yEase,
                p = u - p),
                _ = rr(this._tTime, h),
                p === o && !a && this._initted && g === _)
                    return this._tTime = f,
                    this;
                g !== _ && (b && this._yEase && ju(b, y),
                this.vars.repeatRefresh && !y && !this._lock && this._time !== h && this._initted && (this._lock = a = 1,
                this.render(it(h * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Du(this, c ? s : p, a, n, f))
                    return this._tTime = 0,
                    this;
                if (o !== this._time && !(a && this.vars.repeatRefresh && g !== _))
                    return this;
                if (u !== this._dur)
                    return this.render(s, n, a)
            }
            if (this._tTime = f,
            this._time = p,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = v = (m || this._ease)(p / u),
            this._from && (this.ratio = v = 1 - v),
            p && !o && !n && !g && (ei(this, "onStart"),
            this._tTime !== f))
                return this;
            for (d = this._pt; d; )
                d.r(v, d.d),
                d = d._next;
            b && b.render(s < 0 ? s : b._dur * b._ease(p / this._dur), n, a) || this._startAt && (this._zTime = s),
            this._onUpdate && !n && (c && Xa(this, s, n, a),
            ei(this, "onUpdate")),
            this._repeat && g !== _ && this.vars.onRepeat && !n && this.parent && ei(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && Xa(this, s, !0, !0),
            (s || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && us(this, 1),
            !n && !(c && !o) && (f || o || y) && (ei(this, f === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(s) {
        return (!s || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(s),
        r.prototype.invalidate.call(this, s)
    }
    ,
    t.resetTo = function(s, n, a, o, l) {
        Ur || Qt.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || Po(this, u),
        c = this._ease(u / this._dur),
        sf(this, s, n, a, o, c, u, l) ? this.resetTo(s, n, a, o, 1) : (ua(this, 0),
        this.parent || Mu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(s, n) {
        if (n === void 0 && (n = "all"),
        !s && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? wr(this) : this;
        if (this.timeline) {
            var a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(s, n, Ji && Ji.vars.overwrite !== !0)._first || wr(this),
            this.parent && a !== this.timeline.totalDuration() && nr(this, this._dur * this.timeline._tDur / a, 0, 1),
            this
        }
        var o = this._targets, l = s ? ci(s) : o, u = this._ptLookup, c = this._pt, f, p, d, g, h, _, y;
        if ((!n || n === "all") && Dd(o, l))
            return n === "all" && (this._pt = 0),
            wr(this);
        for (f = this._op = this._op || [],
        n !== "all" && (st(n) && (h = {},
        Rt(n, function(v) {
            return h[v] = 1
        }),
        n = h),
        n = rf(o, n)),
        y = o.length; y--; )
            if (~l.indexOf(o[y])) {
                p = u[y],
                n === "all" ? (f[y] = n,
                g = p,
                d = {}) : (d = f[y] = f[y] || {},
                g = n);
                for (h in g)
                    _ = p && p[h],
                    _ && ((!("kill"in _.d) || _.d.kill(h) === !0) && oa(this, _, "_pt"),
                    delete p[h]),
                    d !== "all" && (d[h] = 1)
            }
        return this._initted && !this._pt && c && wr(this),
        this
    }
    ,
    e.to = function(s, n) {
        return new e(s,n,arguments[2])
    }
    ,
    e.from = function(s, n) {
        return Mr(1, arguments)
    }
    ,
    e.delayedCall = function(s, n, a, o) {
        return new e(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: s,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: a,
            onReverseCompleteParams: a,
            callbackScope: o
        })
    }
    ,
    e.fromTo = function(s, n, a) {
        return Mr(2, arguments)
    }
    ,
    e.set = function(s, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new e(s,n)
    }
    ,
    e.killTweensOf = function(s, n, a) {
        return Ie.killTweensOf(s, n, a)
    }
    ,
    e
}(Xr);
hi(He.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Rt("staggerTo,staggerFrom,staggerFromTo", function(r) {
    He[r] = function() {
        var e = new At
          , t = Za.call(arguments, 0);
        return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0),
        e[r].apply(e, t)
    }
});
var Fo = function(e, t, i) {
    return e[t] = i
}
  , Ju = function(e, t, i) {
    return e[t](i)
}
  , af = function(e, t, i, s) {
    return e[t](s.fp, i)
}
  , of = function(e, t, i) {
    return e.setAttribute(t, i)
}
  , Bo = function(e, t) {
    return Be(e[t]) ? Ju : Eo(e[t]) && e.setAttribute ? of : Fo
}
  , ec = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , lf = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , tc = function(e, t) {
    var i = t._pt
      , s = "";
    if (!e && t.b)
        s = t.b;
    else if (e === 1 && t.e)
        s = t.e;
    else {
        for (; i; )
            s = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + s,
            i = i._next;
        s += t.c
    }
    t.set(t.t, t.p, s, t)
}
  , Ro = function(e, t) {
    for (var i = t._pt; i; )
        i.r(e, i.d),
        i = i._next
}
  , uf = function(e, t, i, s) {
    for (var n = this._pt, a; n; )
        a = n._next,
        n.p === s && n.modifier(e, t, i),
        n = a
}
  , cf = function(e) {
    for (var t = this._pt, i, s; t; )
        s = t._next,
        t.p === e && !t.op || t.op === e ? oa(this, t, "_pt") : t.dep || (i = 1),
        t = s;
    return !i
}
  , df = function(e, t, i, s) {
    s.mSet(e, t, s.m.call(s.tween, i, s.mt), s)
}
  , ic = function(e) {
    for (var t = e._pt, i, s, n, a; t; ) {
        for (i = t._next,
        s = n; s && s.pr > t.pr; )
            s = s._next;
        (t._prev = s ? s._prev : a) ? t._prev._next = t : n = t,
        (t._next = s) ? s._prev = t : a = t,
        t = i
    }
    e._pt = n
}
  , $t = function() {
    function r(t, i, s, n, a, o, l, u, c) {
        this.t = i,
        this.s = n,
        this.c = a,
        this.p = s,
        this.r = o || ec,
        this.d = l || this,
        this.set = u || Fo,
        this.pr = c || 0,
        this._next = t,
        t && (t._prev = this)
    }
    var e = r.prototype;
    return e.modifier = function(i, s, n) {
        this.mSet = this.mSet || this.set,
        this.set = df,
        this.m = i,
        this.mt = n,
        this.tween = s
    }
    ,
    r
}();
Rt(Io + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
    return Mo[r] = 1
});
ii.TweenMax = ii.TweenLite = He;
ii.TimelineLite = ii.TimelineMax = At;
Ie = new At({
    sortChildren: !1,
    defaults: sr,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
ti.stringFilter = Yu;
var Os = []
  , Ln = {}
  , ff = []
  , hl = 0
  , hf = 0
  , xa = function(e) {
    return (Ln[e] || ff).map(function(t) {
        return t()
    })
}
  , to = function() {
    var e = Date.now()
      , t = [];
    e - hl > 2 && (xa("matchMediaInit"),
    Os.forEach(function(i) {
        var s = i.queries, n = i.conditions, a, o, l, u;
        for (o in s)
            a = Ei.matchMedia(s[o]).matches,
            a && (l = 1),
            a !== n[o] && (n[o] = a,
            u = 1);
        u && (i.revert(),
        l && t.push(i))
    }),
    xa("matchMediaRevert"),
    t.forEach(function(i) {
        return i.onMatch(i, function(s) {
            return i.add(null, s)
        })
    }),
    hl = e,
    xa("matchMedia"))
}
  , sc = function() {
    function r(t, i) {
        this.selector = i && Qa(i),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = hf++,
        t && this.add(t)
    }
    var e = r.prototype;
    return e.add = function(i, s, n) {
        Be(i) && (n = s,
        s = i,
        i = Be);
        var a = this
          , o = function() {
            var u = Ee, c = a.selector, f;
            return u && u !== a && u.data.push(a),
            n && (a.selector = Qa(n)),
            Ee = a,
            f = s.apply(a, arguments),
            Be(f) && a._r.push(f),
            Ee = u,
            a.selector = c,
            a.isReverted = !1,
            f
        };
        return a.last = o,
        i === Be ? o(a, function(l) {
            return a.add(null, l)
        }) : i ? a[i] = o : o
    }
    ,
    e.ignore = function(i) {
        var s = Ee;
        Ee = null,
        i(this),
        Ee = s
    }
    ,
    e.getTweens = function() {
        var i = [];
        return this.data.forEach(function(s) {
            return s instanceof r ? i.push.apply(i, s.getTweens()) : s instanceof He && !(s.parent && s.parent.data === "nested") && i.push(s)
        }),
        i
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(i, s) {
        var n = this;
        if (i ? function() {
            for (var o = n.getTweens(), l = n.data.length, u; l--; )
                u = n.data[l],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(c) {
                    return o.splice(o.indexOf(c), 1)
                }));
            for (o.map(function(c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function(c, f) {
                return f.g - c.g || -1 / 0
            }).forEach(function(c) {
                return c.t.revert(i)
            }),
            l = n.data.length; l--; )
                u = n.data[l],
                u instanceof At ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof He) && u.revert && u.revert(i);
            n._r.forEach(function(c) {
                return c(i, n)
            }),
            n.isReverted = !0
        }() : this.data.forEach(function(o) {
            return o.kill && o.kill()
        }),
        this.clear(),
        s)
            for (var a = Os.length; a--; )
                Os[a].id === this.id && Os.splice(a, 1)
    }
    ,
    e.revert = function(i) {
        this.kill(i || {})
    }
    ,
    r
}()
  , pf = function() {
    function r(t) {
        this.contexts = [],
        this.scope = t,
        Ee && Ee.data.push(this)
    }
    var e = r.prototype;
    return e.add = function(i, s, n) {
        Ri(i) || (i = {
            matches: i
        });
        var a = new sc(0,n || this.scope), o = a.conditions = {}, l, u, c;
        Ee && !a.selector && (a.selector = Ee.selector),
        this.contexts.push(a),
        s = a.add("onMatch", s),
        a.queries = i;
        for (u in i)
            u === "all" ? c = 1 : (l = Ei.matchMedia(i[u]),
            l && (Os.indexOf(a) < 0 && Os.push(a),
            (o[u] = l.matches) && (c = 1),
            l.addListener ? l.addListener(to) : l.addEventListener("change", to)));
        return c && s(a, function(f) {
            return a.add(null, f)
        }),
        this
    }
    ,
    e.revert = function(i) {
        this.kill(i || {})
    }
    ,
    e.kill = function(i) {
        this.contexts.forEach(function(s) {
            return s.kill(i, !0)
        })
    }
    ,
    r
}()
  , Wn = {
    registerPlugin: function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        t.forEach(function(s) {
            return Hu(s)
        })
    },
    timeline: function(e) {
        return new At(e)
    },
    getTweensOf: function(e, t) {
        return Ie.getTweensOf(e, t)
    },
    getProperty: function(e, t, i, s) {
        st(e) && (e = ci(e)[0]);
        var n = Es(e || {}).get
          , a = i ? Ou : Au;
        return i === "native" && (i = ""),
        e && (t ? a((Xt[t] && Xt[t].get || n)(e, t, i, s)) : function(o, l, u) {
            return a((Xt[o] && Xt[o].get || n)(e, o, l, u))
        }
        )
    },
    quickSetter: function(e, t, i) {
        if (e = ci(e),
        e.length > 1) {
            var s = e.map(function(c) {
                return Ht.quickSetter(c, t, i)
            })
              , n = s.length;
            return function(c) {
                for (var f = n; f--; )
                    s[f](c)
            }
        }
        e = e[0] || {};
        var a = Xt[t]
          , o = Es(e)
          , l = o.harness && (o.harness.aliases || {})[t] || t
          , u = a ? function(c) {
            var f = new a;
            Xs._pt = 0,
            f.init(e, i ? c + i : c, Xs, 0, [e]),
            f.render(1, f),
            Xs._pt && Ro(1, Xs)
        }
        : o.set(e, l);
        return a ? u : function(c) {
            return u(e, l, i ? c + i : c, o, 1)
        }
    },
    quickTo: function(e, t, i) {
        var s, n = Ht.to(e, Ps((s = {},
        s[t] = "+=0.1",
        s.paused = !0,
        s), i || {})), a = function(l, u, c) {
            return n.resetTo(t, l, u, c)
        };
        return a.tween = n,
        a
    },
    isTweening: function(e) {
        return Ie.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = As(e.ease, sr.ease)),
        ll(sr, e || {})
    },
    config: function(e) {
        return ll(ti, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , i = e.effect
          , s = e.plugins
          , n = e.defaults
          , a = e.extendTimeline;
        (s || "").split(",").forEach(function(o) {
            return o && !Xt[o] && !ii[o] && Yr(t + " effect requires " + o + " plugin.")
        }),
        ya[t] = function(o, l, u) {
            return i(ci(o), hi(l || {}, n), u)
        }
        ,
        a && (At.prototype[t] = function(o, l, u) {
            return this.add(ya[t](o, Ri(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(e, t) {
        ue[e] = As(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? As(e, t) : ue
    },
    getById: function(e) {
        return Ie.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var i = new At(e), s, n;
        for (i.smoothChildTiming = Bt(e.smoothChildTiming),
        Ie.remove(i),
        i._dp = 0,
        i._time = i._tTime = Ie._time,
        s = Ie._first; s; )
            n = s._next,
            (t || !(!s._dur && s instanceof He && s.vars.onComplete === s._targets[0])) && Oi(i, s, s._start - s._delay),
            s = n;
        return Oi(Ie, i, 0),
        i
    },
    context: function(e, t) {
        return e ? new sc(e,t) : Ee
    },
    matchMedia: function(e) {
        return new pf(e)
    },
    matchMediaRefresh: function() {
        return Os.forEach(function(e) {
            var t = e.conditions, i, s;
            for (s in t)
                t[s] && (t[s] = !1,
                i = 1);
            i && e.revert()
        }) || to()
    },
    addEventListener: function(e, t) {
        var i = Ln[e] || (Ln[e] = []);
        ~i.indexOf(t) || i.push(t)
    },
    removeEventListener: function(e, t) {
        var i = Ln[e]
          , s = i && i.indexOf(t);
        s >= 0 && i.splice(s, 1)
    },
    utils: {
        wrap: Yd,
        wrapYoyo: Wd,
        distribute: Bu,
        random: $u,
        snap: Ru,
        normalize: qd,
        getUnit: vt,
        clamp: zd,
        splitColor: Gu,
        toArray: ci,
        selector: Qa,
        mapRange: zu,
        pipe: Hd,
        unitize: Gd,
        interpolate: jd,
        shuffle: Fu
    },
    install: xu,
    effects: ya,
    ticker: Qt,
    updateRoot: At.updateRoot,
    plugins: Xt,
    globalTimeline: Ie,
    core: {
        PropTween: $t,
        globals: Cu,
        Tween: He,
        Timeline: At,
        Animation: Xr,
        getCache: Es,
        _removeLinkedListItem: oa,
        reverting: function() {
            return _t
        },
        context: function(e) {
            return e && Ee && (Ee.data.push(e),
            e._ctx = Ee),
            Ee
        },
        suppressOverwrites: function(e) {
            return To = e
        }
    }
};
Rt("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
    return Wn[r] = He[r]
});
Qt.add(At.updateRoot);
Xs = Wn.to({}, {
    duration: 0
});
var gf = function(e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
    return i
}
  , mf = function(e, t) {
    var i = e._targets, s, n, a;
    for (s in t)
        for (n = i.length; n--; )
            a = e._ptLookup[n][s],
            a && (a = a.d) && (a._pt && (a = gf(a, s)),
            a && a.modifier && a.modifier(t[s], e, i[n], s))
}
  , Ca = function(e, t) {
    return {
        name: e,
        rawVars: 1,
        init: function(s, n, a) {
            a._onInit = function(o) {
                var l, u;
                if (st(n) && (l = {},
                Rt(n, function(c) {
                    return l[c] = 1
                }),
                n = l),
                t) {
                    l = {};
                    for (u in n)
                        l[u] = t(n[u]);
                    n = l
                }
                mf(o, n)
            }
        }
    }
}
  , Ht = Wn.registerPlugin({
    name: "attr",
    init: function(e, t, i, s, n) {
        var a, o, l;
        this.tween = i;
        for (a in t)
            l = e.getAttribute(a) || "",
            o = this.add(e, "setAttribute", (l || 0) + "", t[a], s, n, 0, 0, a),
            o.op = a,
            o.b = l,
            this._props.push(a)
    },
    render: function(e, t) {
        for (var i = t._pt; i; )
            _t ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d),
            i = i._next
    }
}, {
    name: "endArray",
    init: function(e, t) {
        for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
    }
}, Ca("roundProps", Ja), Ca("modifiers"), Ca("snap", Ru)) || Wn;
He.version = At.version = Ht.version = "3.12.5";
Su = 1;
ko() && ar();
ue.Power0;
ue.Power1;
ue.Power2;
ue.Power3;
ue.Power4;
ue.Linear;
ue.Quad;
ue.Cubic;
ue.Quart;
ue.Quint;
ue.Strong;
ue.Elastic;
ue.Back;
ue.SteppedEase;
ue.Bounce;
ue.Sine;
ue.Expo;
ue.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var pl, es, Qs, $o, xs, gl, Vo, vf = function() {
    return typeof window < "u"
}, Ui = {}, ys = 180 / Math.PI, Js = Math.PI / 180, Hs = Math.atan2, ml = 1e8, zo = /([A-Z])/g, _f = /(left|right|width|margin|padding|x)/i, yf = /[\s,\(]\S/, Mi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, io = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, bf = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, wf = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Sf = function(e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
}, rc = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, nc = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, xf = function(e, t, i) {
    return e.style[t] = i
}, Cf = function(e, t, i) {
    return e.style.setProperty(t, i)
}, Tf = function(e, t, i) {
    return e._gsap[t] = i
}, Ef = function(e, t, i) {
    return e._gsap.scaleX = e._gsap.scaleY = i
}, kf = function(e, t, i, s, n) {
    var a = e._gsap;
    a.scaleX = a.scaleY = i,
    a.renderTransform(n, a)
}, Af = function(e, t, i, s, n) {
    var a = e._gsap;
    a[t] = i,
    a.renderTransform(n, a)
}, Le = "transform", Vt = Le + "Origin", Of = function r(e, t) {
    var i = this
      , s = this.target
      , n = s.style
      , a = s._gsap;
    if (e in Ui && n) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = Mi[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(o) {
                return i.tfm[o] = zi(s, o)
            }) : this.tfm[e] = a.x ? a[e] : zi(s, e),
            e === Vt && (this.tfm.zOrigin = a.zOrigin);
        else
            return Mi.transform.split(",").forEach(function(o) {
                return r.call(i, o, t)
            });
        if (this.props.indexOf(Le) >= 0)
            return;
        a.svg && (this.svgo = s.getAttribute("data-svg-origin"),
        this.props.push(Vt, t, "")),
        e = Le
    }
    (n || t) && this.props.push(e, t, n[e])
}, ac = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, Mf = function() {
    var e = this.props, t = this.target, i = t.style, s = t._gsap, n, a;
    for (n = 0; n < e.length; n += 3)
        e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? i[e[n]] = e[n + 2] : i.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(zo, "-$1").toLowerCase());
    if (this.tfm) {
        for (a in this.tfm)
            s[a] = this.tfm[a];
        s.svg && (s.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        n = Vo(),
        (!n || !n.isStart) && !i[Le] && (ac(i),
        s.zOrigin && i[Vt] && (i[Vt] += " " + s.zOrigin + "px",
        s.zOrigin = 0,
        s.renderTransform()),
        s.uncache = 1)
    }
}, oc = function(e, t) {
    var i = {
        target: e,
        props: [],
        revert: Mf,
        save: Of
    };
    return e._gsap || Ht.core.getCache(e),
    t && t.split(",").forEach(function(s) {
        return i.save(s)
    }),
    i
}, lc, so = function(e, t) {
    var i = es.createElementNS ? es.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : es.createElement(e);
    return i && i.style ? i : es.createElement(e)
}, Pi = function r(e, t, i) {
    var s = getComputedStyle(e);
    return s[t] || s.getPropertyValue(t.replace(zo, "-$1").toLowerCase()) || s.getPropertyValue(t) || !i && r(e, or(t) || t, 1) || ""
}, vl = "O,Moz,ms,Ms,Webkit".split(","), or = function(e, t, i) {
    var s = t || xs
      , n = s.style
      , a = 5;
    if (e in n && !i)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(vl[a] + e in n); )
        ;
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? vl[a] : "") + e
}, ro = function() {
    vf() && window.document && (pl = window,
    es = pl.document,
    Qs = es.documentElement,
    xs = so("div") || {
        style: {}
    },
    so("div"),
    Le = or(Le),
    Vt = Le + "Origin",
    xs.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    lc = !!or("perspective"),
    Vo = Ht.core.reverting,
    $o = 1)
}, Ta = function r(e) {
    var t = so("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, s = this.nextSibling, n = this.style.cssText, a;
    if (Qs.appendChild(t),
    t.appendChild(this),
    this.style.display = "block",
    e)
        try {
            a = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = r
        } catch {}
    else
        this._gsapBBox && (a = this._gsapBBox());
    return i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
    Qs.removeChild(t),
    this.style.cssText = n,
    a
}, _l = function(e, t) {
    for (var i = t.length; i--; )
        if (e.hasAttribute(t[i]))
            return e.getAttribute(t[i])
}, uc = function(e) {
    var t;
    try {
        t = e.getBBox()
    } catch {
        t = Ta.call(e, !0)
    }
    return t && (t.width || t.height) || e.getBBox === Ta || (t = Ta.call(e, !0)),
    t && !t.width && !t.x && !t.y ? {
        x: +_l(e, ["x", "cx", "x1"]) || 0,
        y: +_l(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : t
}, cc = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && uc(e))
}, Fs = function(e, t) {
    if (t) {
        var i = e.style, s;
        t in Ui && t !== Vt && (t = Le),
        i.removeProperty ? (s = t.substr(0, 2),
        (s === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
        i.removeProperty(s === "--" ? t : t.replace(zo, "-$1").toLowerCase())) : i.removeAttribute(t)
    }
}, ts = function(e, t, i, s, n, a) {
    var o = new $t(e._pt,t,i,0,1,a ? nc : rc);
    return e._pt = o,
    o.b = s,
    o.e = n,
    e._props.push(i),
    o
}, yl = {
    deg: 1,
    rad: 1,
    turn: 1
}, If = {
    grid: 1,
    flex: 1
}, cs = function r(e, t, i, s) {
    var n = parseFloat(i) || 0, a = (i + "").trim().substr((n + "").length) || "px", o = xs.style, l = _f.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, p = s === "px", d = s === "%", g, h, _, y;
    if (s === a || !n || yl[s] || yl[a])
        return n;
    if (a !== "px" && !p && (n = r(e, t, i, "px")),
    y = e.getCTM && cc(e),
    (d || a === "%") && (Ui[t] || ~t.indexOf("adius")))
        return g = y ? e.getBBox()[l ? "width" : "height"] : e[c],
        $e(d ? n / g * f : n / 100 * g);
    if (o[l ? "width" : "height"] = f + (p ? a : s),
    h = ~t.indexOf("adius") || s === "em" && e.appendChild && !u ? e : e.parentNode,
    y && (h = (e.ownerSVGElement || {}).parentNode),
    (!h || h === es || !h.appendChild) && (h = es.body),
    _ = h._gsap,
    _ && d && _.width && l && _.time === Qt.time && !_.uncache)
        return $e(n / _.width * f);
    if (d && (t === "height" || t === "width")) {
        var v = e.style[t];
        e.style[t] = f + s,
        g = e[c],
        v ? e.style[t] = v : Fs(e, t)
    } else
        (d || a === "%") && !If[Pi(h, "display")] && (o.position = Pi(e, "position")),
        h === e && (o.position = "static"),
        h.appendChild(xs),
        g = xs[c],
        h.removeChild(xs),
        o.position = "absolute";
    return l && d && (_ = Es(h),
    _.time = Qt.time,
    _.width = h[c]),
    $e(p ? g * n / f : g && n ? f / g * n : 0)
}, zi = function(e, t, i, s) {
    var n;
    return $o || ro(),
    t in Mi && t !== "transform" && (t = Mi[t],
    ~t.indexOf(",") && (t = t.split(",")[0])),
    Ui[t] && t !== "transform" ? (n = Zr(e, s),
    n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Un(Pi(e, Vt)) + " " + n.zOrigin + "px") : (n = e.style[t],
    (!n || n === "auto" || s || ~(n + "").indexOf("calc(")) && (n = jn[t] && jn[t](e, t, i) || Pi(e, t) || Eu(e, t) || (t === "opacity" ? 1 : 0))),
    i && !~(n + "").trim().indexOf(" ") ? cs(e, t, n, i) + i : n
}, Lf = function(e, t, i, s) {
    if (!i || i === "none") {
        var n = or(t, e, 1)
          , a = n && Pi(e, n, 1);
        a && a !== i ? (t = n,
        i = a) : t === "borderColor" && (i = Pi(e, "borderTopColor"))
    }
    var o = new $t(this._pt,e.style,t,0,1,tc), l = 0, u = 0, c, f, p, d, g, h, _, y, v, b, m, w;
    if (o.b = i,
    o.e = s,
    i += "",
    s += "",
    s === "auto" && (h = e.style[t],
    e.style[t] = s,
    s = Pi(e, t) || s,
    h ? e.style[t] = h : Fs(e, t)),
    c = [i, s],
    Yu(c),
    i = c[0],
    s = c[1],
    p = i.match(Us) || [],
    w = s.match(Us) || [],
    w.length) {
        for (; f = Us.exec(s); )
            _ = f[0],
            v = s.substring(l, f.index),
            g ? g = (g + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (g = 1),
            _ !== (h = p[u++] || "") && (d = parseFloat(h) || 0,
            m = h.substr((d + "").length),
            _.charAt(1) === "=" && (_ = Zs(d, _) + m),
            y = parseFloat(_),
            b = _.substr((y + "").length),
            l = Us.lastIndex - b.length,
            b || (b = b || ti.units[t] || m,
            l === s.length && (s += b,
            o.e += b)),
            m !== b && (d = cs(e, t, h, b) || 0),
            o._pt = {
                _next: o._pt,
                p: v || u === 1 ? v : ",",
                s: d,
                c: y - d,
                m: g && g < 4 || t === "zIndex" ? Math.round : 0
            });
        o.c = l < s.length ? s.substring(l, s.length) : ""
    } else
        o.r = t === "display" && s === "none" ? nc : rc;
    return bu.test(s) && (o.e = 0),
    this._pt = o,
    o
}, bl = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, Df = function(e) {
    var t = e.split(" ")
      , i = t[0]
      , s = t[1] || "50%";
    return (i === "top" || i === "bottom" || s === "left" || s === "right") && (e = i,
    i = s,
    s = e),
    t[0] = bl[i] || i,
    t[1] = bl[s] || s,
    t.join(" ")
}, Pf = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t, s = i.style, n = t.u, a = i._gsap, o, l, u;
        if (n === "all" || n === !0)
            s.cssText = "",
            l = 1;
        else
            for (n = n.split(","),
            u = n.length; --u > -1; )
                o = n[u],
                Ui[o] && (l = 1,
                o = o === "transformOrigin" ? Vt : Le),
                Fs(i, o);
        l && (Fs(i, Le),
        a && (a.svg && i.removeAttribute("transform"),
        Zr(i, 1),
        a.uncache = 1,
        ac(s)))
    }
}, jn = {
    clearProps: function(e, t, i, s, n) {
        if (n.data !== "isFromStart") {
            var a = e._pt = new $t(e._pt,t,i,0,0,Pf);
            return a.u = s,
            a.pr = -10,
            a.tween = n,
            e._props.push(i),
            1
        }
    }
}, Kr = [1, 0, 0, 1, 0, 0], dc = {}, fc = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, wl = function(e) {
    var t = Pi(e, Le);
    return fc(t) ? Kr : t.substr(7).match(yu).map($e)
}, No = function(e, t) {
    var i = e._gsap || Es(e), s = e.style, n = wl(e), a, o, l, u;
    return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    n = [l.a, l.b, l.c, l.d, l.e, l.f],
    n.join(",") === "1,0,0,1,0,0" ? Kr : n) : (n === Kr && !e.offsetParent && e !== Qs && !i.svg && (l = s.display,
    s.display = "block",
    a = e.parentNode,
    (!a || !e.offsetParent) && (u = 1,
    o = e.nextElementSibling,
    Qs.appendChild(e)),
    n = wl(e),
    l ? s.display = l : Fs(e, "display"),
    u && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Qs.removeChild(e))),
    t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, no = function(e, t, i, s, n, a) {
    var o = e._gsap, l = n || No(e, !0), u = o.xOrigin || 0, c = o.yOrigin || 0, f = o.xOffset || 0, p = o.yOffset || 0, d = l[0], g = l[1], h = l[2], _ = l[3], y = l[4], v = l[5], b = t.split(" "), m = parseFloat(b[0]) || 0, w = parseFloat(b[1]) || 0, S, T, k, E;
    i ? l !== Kr && (T = d * _ - g * h) && (k = m * (_ / T) + w * (-h / T) + (h * v - _ * y) / T,
    E = m * (-g / T) + w * (d / T) - (d * v - g * y) / T,
    m = k,
    w = E) : (S = uc(e),
    m = S.x + (~b[0].indexOf("%") ? m / 100 * S.width : m),
    w = S.y + (~(b[1] || b[0]).indexOf("%") ? w / 100 * S.height : w)),
    s || s !== !1 && o.smooth ? (y = m - u,
    v = w - c,
    o.xOffset = f + (y * d + v * h) - y,
    o.yOffset = p + (y * g + v * _) - v) : o.xOffset = o.yOffset = 0,
    o.xOrigin = m,
    o.yOrigin = w,
    o.smooth = !!s,
    o.origin = t,
    o.originIsAbsolute = !!i,
    e.style[Vt] = "0px 0px",
    a && (ts(a, o, "xOrigin", u, m),
    ts(a, o, "yOrigin", c, w),
    ts(a, o, "xOffset", f, o.xOffset),
    ts(a, o, "yOffset", p, o.yOffset)),
    e.setAttribute("data-svg-origin", m + " " + w)
}, Zr = function(e, t) {
    var i = e._gsap || new Xu(e);
    if ("x"in i && !t && !i.uncache)
        return i;
    var s = e.style, n = i.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(e), u = Pi(e, Vt) || "0", c, f, p, d, g, h, _, y, v, b, m, w, S, T, k, E, C, O, A, I, D, P, B, V, F, U, x, J, de, Ge, ce, he;
    return c = f = p = h = _ = y = v = b = m = 0,
    d = g = 1,
    i.svg = !!(e.getCTM && cc(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[Le] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Le] !== "none" ? l[Le] : "")),
    s.scale = s.rotate = s.translate = "none"),
    T = No(e, i.svg),
    i.svg && (i.uncache ? (F = e.getBBox(),
    u = i.xOrigin - F.x + "px " + (i.yOrigin - F.y) + "px",
    V = "") : V = !t && e.getAttribute("data-svg-origin"),
    no(e, V || u, !!V || i.originIsAbsolute, i.smooth !== !1, T)),
    w = i.xOrigin || 0,
    S = i.yOrigin || 0,
    T !== Kr && (O = T[0],
    A = T[1],
    I = T[2],
    D = T[3],
    c = P = T[4],
    f = B = T[5],
    T.length === 6 ? (d = Math.sqrt(O * O + A * A),
    g = Math.sqrt(D * D + I * I),
    h = O || A ? Hs(A, O) * ys : 0,
    v = I || D ? Hs(I, D) * ys + h : 0,
    v && (g *= Math.abs(Math.cos(v * Js))),
    i.svg && (c -= w - (w * O + S * I),
    f -= S - (w * A + S * D))) : (he = T[6],
    Ge = T[7],
    x = T[8],
    J = T[9],
    de = T[10],
    ce = T[11],
    c = T[12],
    f = T[13],
    p = T[14],
    k = Hs(he, de),
    _ = k * ys,
    k && (E = Math.cos(-k),
    C = Math.sin(-k),
    V = P * E + x * C,
    F = B * E + J * C,
    U = he * E + de * C,
    x = P * -C + x * E,
    J = B * -C + J * E,
    de = he * -C + de * E,
    ce = Ge * -C + ce * E,
    P = V,
    B = F,
    he = U),
    k = Hs(-I, de),
    y = k * ys,
    k && (E = Math.cos(-k),
    C = Math.sin(-k),
    V = O * E - x * C,
    F = A * E - J * C,
    U = I * E - de * C,
    ce = D * C + ce * E,
    O = V,
    A = F,
    I = U),
    k = Hs(A, O),
    h = k * ys,
    k && (E = Math.cos(k),
    C = Math.sin(k),
    V = O * E + A * C,
    F = P * E + B * C,
    A = A * E - O * C,
    B = B * E - P * C,
    O = V,
    P = F),
    _ && Math.abs(_) + Math.abs(h) > 359.9 && (_ = h = 0,
    y = 180 - y),
    d = $e(Math.sqrt(O * O + A * A + I * I)),
    g = $e(Math.sqrt(B * B + he * he)),
    k = Hs(P, B),
    v = Math.abs(k) > 2e-4 ? k * ys : 0,
    m = ce ? 1 / (ce < 0 ? -ce : ce) : 0),
    i.svg && (V = e.getAttribute("transform"),
    i.forceCSS = e.setAttribute("transform", "") || !fc(Pi(e, Le)),
    V && e.setAttribute("transform", V))),
    Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (d *= -1,
    v += h <= 0 ? 180 : -180,
    h += h <= 0 ? 180 : -180) : (g *= -1,
    v += v <= 0 ? 180 : -180)),
    t = t || i.uncache,
    i.x = c - ((i.xPercent = c && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + a,
    i.y = f - ((i.yPercent = f && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + a,
    i.z = p + a,
    i.scaleX = $e(d),
    i.scaleY = $e(g),
    i.rotation = $e(h) + o,
    i.rotationX = $e(_) + o,
    i.rotationY = $e(y) + o,
    i.skewX = v + o,
    i.skewY = b + o,
    i.transformPerspective = m + a,
    (i.zOrigin = parseFloat(u.split(" ")[2]) || !t && i.zOrigin || 0) && (s[Vt] = Un(u)),
    i.xOffset = i.yOffset = 0,
    i.force3D = ti.force3D,
    i.renderTransform = i.svg ? Bf : lc ? hc : Ff,
    i.uncache = 0,
    i
}, Un = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Ea = function(e, t, i) {
    var s = vt(t);
    return $e(parseFloat(t) + parseFloat(cs(e, "x", i + "px", s))) + s
}, Ff = function(e, t) {
    t.z = "0px",
    t.rotationY = t.rotationX = "0deg",
    t.force3D = 0,
    hc(e, t)
}, vs = "0deg", mr = "0px", _s = ") ", hc = function(e, t) {
    var i = t || this
      , s = i.xPercent
      , n = i.yPercent
      , a = i.x
      , o = i.y
      , l = i.z
      , u = i.rotation
      , c = i.rotationY
      , f = i.rotationX
      , p = i.skewX
      , d = i.skewY
      , g = i.scaleX
      , h = i.scaleY
      , _ = i.transformPerspective
      , y = i.force3D
      , v = i.target
      , b = i.zOrigin
      , m = ""
      , w = y === "auto" && e && e !== 1 || y === !0;
    if (b && (f !== vs || c !== vs)) {
        var S = parseFloat(c) * Js, T = Math.sin(S), k = Math.cos(S), E;
        S = parseFloat(f) * Js,
        E = Math.cos(S),
        a = Ea(v, a, T * E * -b),
        o = Ea(v, o, -Math.sin(S) * -b),
        l = Ea(v, l, k * E * -b + b)
    }
    _ !== mr && (m += "perspective(" + _ + _s),
    (s || n) && (m += "translate(" + s + "%, " + n + "%) "),
    (w || a !== mr || o !== mr || l !== mr) && (m += l !== mr || w ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + _s),
    u !== vs && (m += "rotate(" + u + _s),
    c !== vs && (m += "rotateY(" + c + _s),
    f !== vs && (m += "rotateX(" + f + _s),
    (p !== vs || d !== vs) && (m += "skew(" + p + ", " + d + _s),
    (g !== 1 || h !== 1) && (m += "scale(" + g + ", " + h + _s),
    v.style[Le] = m || "translate(0, 0)"
}, Bf = function(e, t) {
    var i = t || this, s = i.xPercent, n = i.yPercent, a = i.x, o = i.y, l = i.rotation, u = i.skewX, c = i.skewY, f = i.scaleX, p = i.scaleY, d = i.target, g = i.xOrigin, h = i.yOrigin, _ = i.xOffset, y = i.yOffset, v = i.forceCSS, b = parseFloat(a), m = parseFloat(o), w, S, T, k, E;
    l = parseFloat(l),
    u = parseFloat(u),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    u += c,
    l += c),
    l || u ? (l *= Js,
    u *= Js,
    w = Math.cos(l) * f,
    S = Math.sin(l) * f,
    T = Math.sin(l - u) * -p,
    k = Math.cos(l - u) * p,
    u && (c *= Js,
    E = Math.tan(u - c),
    E = Math.sqrt(1 + E * E),
    T *= E,
    k *= E,
    c && (E = Math.tan(c),
    E = Math.sqrt(1 + E * E),
    w *= E,
    S *= E)),
    w = $e(w),
    S = $e(S),
    T = $e(T),
    k = $e(k)) : (w = f,
    k = p,
    S = T = 0),
    (b && !~(a + "").indexOf("px") || m && !~(o + "").indexOf("px")) && (b = cs(d, "x", a, "px"),
    m = cs(d, "y", o, "px")),
    (g || h || _ || y) && (b = $e(b + g - (g * w + h * T) + _),
    m = $e(m + h - (g * S + h * k) + y)),
    (s || n) && (E = d.getBBox(),
    b = $e(b + s / 100 * E.width),
    m = $e(m + n / 100 * E.height)),
    E = "matrix(" + w + "," + S + "," + T + "," + k + "," + b + "," + m + ")",
    d.setAttribute("transform", E),
    v && (d.style[Le] = E)
}, Rf = function(e, t, i, s, n) {
    var a = 360, o = st(n), l = parseFloat(n) * (o && ~n.indexOf("rad") ? ys : 1), u = l - s, c = s + u + "deg", f, p;
    return o && (f = n.split("_")[1],
    f === "short" && (u %= a,
    u !== u % (a / 2) && (u += u < 0 ? a : -a)),
    f === "cw" && u < 0 ? u = (u + a * ml) % a - ~~(u / a) * a : f === "ccw" && u > 0 && (u = (u - a * ml) % a - ~~(u / a) * a)),
    e._pt = p = new $t(e._pt,t,i,s,u,bf),
    p.e = c,
    p.u = "deg",
    e._props.push(i),
    p
}, Sl = function(e, t) {
    for (var i in t)
        e[i] = t[i];
    return e
}, $f = function(e, t, i) {
    var s = Sl({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", a = i.style, o, l, u, c, f, p, d, g;
    s.svg ? (u = i.getAttribute("transform"),
    i.setAttribute("transform", ""),
    a[Le] = t,
    o = Zr(i, 1),
    Fs(i, Le),
    i.setAttribute("transform", u)) : (u = getComputedStyle(i)[Le],
    a[Le] = t,
    o = Zr(i, 1),
    a[Le] = u);
    for (l in Ui)
        u = s[l],
        c = o[l],
        u !== c && n.indexOf(l) < 0 && (d = vt(u),
        g = vt(c),
        f = d !== g ? cs(i, l, u, g) : parseFloat(u),
        p = parseFloat(c),
        e._pt = new $t(e._pt,o,l,f,p - f,io),
        e._pt.u = g || 0,
        e._props.push(l));
    Sl(o, s)
};
Rt("padding,margin,Width,Radius", function(r, e) {
    var t = "Top"
      , i = "Right"
      , s = "Bottom"
      , n = "Left"
      , a = (e < 3 ? [t, i, s, n] : [t + n, t + i, s + i, s + n]).map(function(o) {
        return e < 2 ? r + o : "border" + o + r
    });
    jn[e > 1 ? "border" + r : r] = function(o, l, u, c, f) {
        var p, d;
        if (arguments.length < 4)
            return p = a.map(function(g) {
                return zi(o, g, u)
            }),
            d = p.join(" "),
            d.split(p[0]).length === 5 ? p[0] : d;
        p = (c + "").split(" "),
        d = {},
        a.forEach(function(g, h) {
            return d[g] = p[h] = p[h] || p[(h - 1) / 2 | 0]
        }),
        o.init(l, d, f)
    }
});
var pc = {
    name: "css",
    register: ro,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, i, s, n) {
        var a = this._props, o = e.style, l = i.vars.startAt, u, c, f, p, d, g, h, _, y, v, b, m, w, S, T, k;
        $o || ro(),
        this.styles = this.styles || oc(e),
        k = this.styles.props,
        this.tween = i;
        for (h in t)
            if (h !== "autoRound" && (c = t[h],
            !(Xt[h] && Ku(h, t, i, s, e, n)))) {
                if (d = typeof c,
                g = jn[h],
                d === "function" && (c = c.call(i, s, e, n),
                d = typeof c),
                d === "string" && ~c.indexOf("random(") && (c = jr(c)),
                g)
                    g(this, e, h, c, i) && (T = 1);
                else if (h.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(h) + "").trim(),
                    c += "",
                    as.lastIndex = 0,
                    as.test(u) || (_ = vt(u),
                    y = vt(c)),
                    y ? _ !== y && (u = cs(e, h, u, y) + y) : _ && (c += _),
                    this.add(o, "setProperty", u, c, s, n, 0, 0, h),
                    a.push(h),
                    k.push(h, 0, o[h]);
                else if (d !== "undefined") {
                    if (l && h in l ? (u = typeof l[h] == "function" ? l[h].call(i, s, e, n) : l[h],
                    st(u) && ~u.indexOf("random(") && (u = jr(u)),
                    vt(u + "") || u === "auto" || (u += ti.units[h] || vt(zi(e, h)) || ""),
                    (u + "").charAt(1) === "=" && (u = zi(e, h))) : u = zi(e, h),
                    p = parseFloat(u),
                    v = d === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    v && (c = c.substr(2)),
                    f = parseFloat(c),
                    h in Mi && (h === "autoAlpha" && (p === 1 && zi(e, "visibility") === "hidden" && f && (p = 0),
                    k.push("visibility", 0, o.visibility),
                    ts(this, o, "visibility", p ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    h !== "scale" && h !== "transform" && (h = Mi[h],
                    ~h.indexOf(",") && (h = h.split(",")[0]))),
                    b = h in Ui,
                    b) {
                        if (this.styles.save(h),
                        m || (w = e._gsap,
                        w.renderTransform && !t.parseTransform || Zr(e, t.parseTransform),
                        S = t.smoothOrigin !== !1 && w.smooth,
                        m = this._pt = new $t(this._pt,o,Le,0,1,w.renderTransform,w,0,-1),
                        m.dep = 1),
                        h === "scale")
                            this._pt = new $t(this._pt,w,"scaleY",w.scaleY,(v ? Zs(w.scaleY, v + f) : f) - w.scaleY || 0,io),
                            this._pt.u = 0,
                            a.push("scaleY", h),
                            h += "X";
                        else if (h === "transformOrigin") {
                            k.push(Vt, 0, o[Vt]),
                            c = Df(c),
                            w.svg ? no(e, c, 0, S, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0,
                            y !== w.zOrigin && ts(this, w, "zOrigin", w.zOrigin, y),
                            ts(this, o, h, Un(u), Un(c)));
                            continue
                        } else if (h === "svgOrigin") {
                            no(e, c, 1, S, 0, this);
                            continue
                        } else if (h in dc) {
                            Rf(this, w, h, p, v ? Zs(p, v + c) : c);
                            continue
                        } else if (h === "smoothOrigin") {
                            ts(this, w, "smooth", w.smooth, c);
                            continue
                        } else if (h === "force3D") {
                            w[h] = c;
                            continue
                        } else if (h === "transform") {
                            $f(this, c, e);
                            continue
                        }
                    } else
                        h in o || (h = or(h) || h);
                    if (b || (f || f === 0) && (p || p === 0) && !yf.test(c) && h in o)
                        _ = (u + "").substr((p + "").length),
                        f || (f = 0),
                        y = vt(c) || (h in ti.units ? ti.units[h] : _),
                        _ !== y && (p = cs(e, h, u, y)),
                        this._pt = new $t(this._pt,b ? w : o,h,p,(v ? Zs(p, v + f) : f) - p,!b && (y === "px" || h === "zIndex") && t.autoRound !== !1 ? Sf : io),
                        this._pt.u = y || 0,
                        _ !== y && y !== "%" && (this._pt.b = u,
                        this._pt.r = wf);
                    else if (h in o)
                        Lf.call(this, e, h, u, v ? v + c : c);
                    else if (h in e)
                        this.add(e, h, u || e[h], v ? v + c : c, s, n);
                    else if (h !== "parseTransform") {
                        Oo(h, c);
                        continue
                    }
                    b || (h in o ? k.push(h, 0, o[h]) : k.push(h, 1, u || e[h])),
                    a.push(h)
                }
            }
        T && ic(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Vo())
            for (var i = t._pt; i; )
                i.r(e, i.d),
                i = i._next;
        else
            t.styles.revert()
    },
    get: zi,
    aliases: Mi,
    getSetter: function(e, t, i) {
        var s = Mi[t];
        return s && s.indexOf(",") < 0 && (t = s),
        t in Ui && t !== Vt && (e._gsap.x || zi(e, "x")) ? i && gl === i ? t === "scale" ? Ef : Tf : (gl = i || {}) && (t === "scale" ? kf : Af) : e.style && !Eo(e.style[t]) ? xf : ~t.indexOf("-") ? Cf : Bo(e, t)
    },
    core: {
        _removeProperty: Fs,
        _getMatrix: No
    }
};
Ht.utils.checkPrefix = or;
Ht.core.getStyleSaver = oc;
(function(r, e, t, i) {
    var s = Rt(r + "," + e + "," + t, function(n) {
        Ui[n] = 1
    });
    Rt(e, function(n) {
        ti.units[n] = "deg",
        dc[n] = 1
    }),
    Mi[s[13]] = r + "," + e,
    Rt(i, function(n) {
        var a = n.split(":");
        Mi[a[1]] = s[a[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
    ti.units[r] = "px"
});
Ht.registerPlugin(pc);
var Lr = Ht.registerPlugin(pc) || Ht;
Lr.core.Tween;
function xl(r, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(r, i.key, i)
    }
}
function Vf(r, e, t) {
    return e && xl(r.prototype, e),
    t && xl(r, t),
    r
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var lt, Dn, Jt, is, ss, er, gc, bs, Dr, mc, Gi, bi, vc, _c = function() {
    return lt || typeof window < "u" && (lt = window.gsap) && lt.registerPlugin && lt
}, yc = 1, Ks = [], ne = [], Fi = [], Pr = Date.now, ao = function(e, t) {
    return t
}, zf = function() {
    var e = Dr.core
      , t = e.bridge || {}
      , i = e._scrollers
      , s = e._proxies;
    i.push.apply(i, ne),
    s.push.apply(s, Fi),
    ne = i,
    Fi = s,
    ao = function(a, o) {
        return t[a](o)
    }
}, os = function(e, t) {
    return ~Fi.indexOf(e) && Fi[Fi.indexOf(e) + 1][t]
}, Fr = function(e) {
    return !!~mc.indexOf(e)
}, Ct = function(e, t, i, s, n) {
    return e.addEventListener(t, i, {
        passive: s !== !1,
        capture: !!n
    })
}, xt = function(e, t, i, s) {
    return e.removeEventListener(t, i, !!s)
}, hn = "scrollLeft", pn = "scrollTop", oo = function() {
    return Gi && Gi.isPressed || ne.cache++
}, Xn = function(e, t) {
    var i = function s(n) {
        if (n || n === 0) {
            yc && (Jt.history.scrollRestoration = "manual");
            var a = Gi && Gi.isPressed;
            n = s.v = Math.round(n) || (Gi && Gi.iOS ? 1 : 0),
            e(n),
            s.cacheID = ne.cache,
            a && ao("ss", n)
        } else
            (t || ne.cache !== s.cacheID || ao("ref")) && (s.cacheID = ne.cache,
            s.v = e());
        return s.v + s.offset
    };
    return i.offset = 0,
    e && i
}, Ot = {
    s: hn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Xn(function(r) {
        return arguments.length ? Jt.scrollTo(r, Xe.sc()) : Jt.pageXOffset || is[hn] || ss[hn] || er[hn] || 0
    })
}, Xe = {
    s: pn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ot,
    sc: Xn(function(r) {
        return arguments.length ? Jt.scrollTo(Ot.sc(), r) : Jt.pageYOffset || is[pn] || ss[pn] || er[pn] || 0
    })
}, Ft = function(e, t) {
    return (t && t._ctx && t._ctx.selector || lt.utils.toArray)(e)[0] || (typeof e == "string" && lt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, ds = function(e, t) {
    var i = t.s
      , s = t.sc;
    Fr(e) && (e = is.scrollingElement || ss);
    var n = ne.indexOf(e)
      , a = s === Xe.sc ? 1 : 2;
    !~n && (n = ne.push(e) - 1),
    ne[n + a] || Ct(e, "scroll", oo);
    var o = ne[n + a]
      , l = o || (ne[n + a] = Xn(os(e, i), !0) || (Fr(e) ? s : Xn(function(u) {
        return arguments.length ? e[i] = u : e[i]
    })));
    return l.target = e,
    o || (l.smooth = lt.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, lo = function(e, t, i) {
    var s = e
      , n = e
      , a = Pr()
      , o = a
      , l = t || 50
      , u = Math.max(500, l * 3)
      , c = function(g, h) {
        var _ = Pr();
        h || _ - a > l ? (n = s,
        s = g,
        o = a,
        a = _) : i ? s += g : s = n + (g - n) / (_ - o) * (a - o)
    }
      , f = function() {
        n = s = i ? 0 : s,
        o = a = 0
    }
      , p = function(g) {
        var h = o
          , _ = n
          , y = Pr();
        return (g || g === 0) && g !== s && c(g),
        a === o || y - o > u ? 0 : (s + (i ? _ : -_)) / ((i ? y : a) - h) * 1e3
    };
    return {
        update: c,
        reset: f,
        getVelocity: p
    }
}, vr = function(e, t) {
    return t && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Cl = function(e) {
    var t = Math.max.apply(Math, e)
      , i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i
}, bc = function() {
    Dr = lt.core.globals().ScrollTrigger,
    Dr && Dr.core && zf()
}, wc = function(e) {
    return lt = e || _c(),
    !Dn && lt && typeof document < "u" && document.body && (Jt = window,
    is = document,
    ss = is.documentElement,
    er = is.body,
    mc = [Jt, is, ss, er],
    lt.utils.clamp,
    vc = lt.core.context || function() {}
    ,
    bs = "onpointerenter"in er ? "pointer" : "mouse",
    gc = Ve.isTouch = Jt.matchMedia && Jt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Jt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    bi = Ve.eventTypes = ("ontouchstart"in ss ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in ss ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return yc = 0
    }, 500),
    bc(),
    Dn = 1),
    Dn
};
Ot.op = Xe;
ne.cache = 0;
var Ve = function() {
    function r(t) {
        this.init(t)
    }
    var e = r.prototype;
    return e.init = function(i) {
        Dn || wc(lt) || console.warn("Please gsap.registerPlugin(Observer)"),
        Dr || bc();
        var s = i.tolerance
          , n = i.dragMinimum
          , a = i.type
          , o = i.target
          , l = i.lineHeight
          , u = i.debounce
          , c = i.preventDefault
          , f = i.onStop
          , p = i.onStopDelay
          , d = i.ignore
          , g = i.wheelSpeed
          , h = i.event
          , _ = i.onDragStart
          , y = i.onDragEnd
          , v = i.onDrag
          , b = i.onPress
          , m = i.onRelease
          , w = i.onRight
          , S = i.onLeft
          , T = i.onUp
          , k = i.onDown
          , E = i.onChangeX
          , C = i.onChangeY
          , O = i.onChange
          , A = i.onToggleX
          , I = i.onToggleY
          , D = i.onHover
          , P = i.onHoverEnd
          , B = i.onMove
          , V = i.ignoreCheck
          , F = i.isNormalizer
          , U = i.onGestureStart
          , x = i.onGestureEnd
          , J = i.onWheel
          , de = i.onEnable
          , Ge = i.onDisable
          , ce = i.onClick
          , he = i.scrollSpeed
          , we = i.capture
          , ge = i.allowClicks
          , Se = i.lockAxis
          , ke = i.onLockAxis;
        this.target = o = Ft(o) || ss,
        this.vars = i,
        d && (d = lt.utils.toArray(d)),
        s = s || 1e-9,
        n = n || 0,
        g = g || 1,
        he = he || 1,
        a = a || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(Jt.getComputedStyle(er).lineHeight) || 22);
        var rt, De, ut, ie, _e, qe, Ye, M = this, Ke = 0, It = 0, Ze = i.passive || !c, pe = ds(o, Ot), Lt = ds(o, Xe), St = pe(), ni = Lt(), Ae = ~a.indexOf("touch") && !~a.indexOf("pointer") && bi[0] === "pointerdown", Gt = Fr(o), ye = o.ownerDocument || is, ct = [0, 0, 0], Dt = [0, 0, 0], mi = 0, ps = function() {
            return mi = Pr()
        }, Pe = function(G, fe) {
            return (M.event = G) && d && ~d.indexOf(G.target) || fe && Ae && G.pointerType !== "touch" || V && V(G, fe)
        }, Ns = function() {
            M._vx.reset(),
            M._vy.reset(),
            De.pause(),
            f && f(M)
        }, L = function() {
            var G = M.deltaX = Cl(ct)
              , fe = M.deltaY = Cl(Dt)
              , R = Math.abs(G) >= s
              , Q = Math.abs(fe) >= s;
            O && (R || Q) && O(M, G, fe, ct, Dt),
            R && (w && M.deltaX > 0 && w(M),
            S && M.deltaX < 0 && S(M),
            E && E(M),
            A && M.deltaX < 0 != Ke < 0 && A(M),
            Ke = M.deltaX,
            ct[0] = ct[1] = ct[2] = 0),
            Q && (k && M.deltaY > 0 && k(M),
            T && M.deltaY < 0 && T(M),
            C && C(M),
            I && M.deltaY < 0 != It < 0 && I(M),
            It = M.deltaY,
            Dt[0] = Dt[1] = Dt[2] = 0),
            (ie || ut) && (B && B(M),
            ut && (v(M),
            ut = !1),
            ie = !1),
            qe && !(qe = !1) && ke && ke(M),
            _e && (J(M),
            _e = !1),
            rt = 0
        }, z = function(G, fe, R) {
            ct[R] += G,
            Dt[R] += fe,
            M._vx.update(G),
            M._vy.update(fe),
            u ? rt || (rt = requestAnimationFrame(L)) : L()
        }, q = function(G, fe) {
            Se && !Ye && (M.axis = Ye = Math.abs(G) > Math.abs(fe) ? "x" : "y",
            qe = !0),
            Ye !== "y" && (ct[2] += G,
            M._vx.update(G, !0)),
            Ye !== "x" && (Dt[2] += fe,
            M._vy.update(fe, !0)),
            u ? rt || (rt = requestAnimationFrame(L)) : L()
        }, se = function(G) {
            if (!Pe(G, 1)) {
                G = vr(G, c);
                var fe = G.clientX
                  , R = G.clientY
                  , Q = fe - M.x
                  , W = R - M.y
                  , Z = M.isDragging;
                M.x = fe,
                M.y = R,
                (Z || Math.abs(M.startX - fe) >= n || Math.abs(M.startY - R) >= n) && (v && (ut = !0),
                Z || (M.isDragging = !0),
                q(Q, W),
                Z || _ && _(M))
            }
        }, ee = M.onPress = function(X) {
            Pe(X, 1) || X && X.button || (M.axis = Ye = null,
            De.pause(),
            M.isPressed = !0,
            X = vr(X),
            Ke = It = 0,
            M.startX = M.x = X.clientX,
            M.startY = M.y = X.clientY,
            M._vx.reset(),
            M._vy.reset(),
            Ct(F ? o : ye, bi[1], se, Ze, !0),
            M.deltaX = M.deltaY = 0,
            b && b(M))
        }
        , Y = M.onRelease = function(X) {
            if (!Pe(X, 1)) {
                xt(F ? o : ye, bi[1], se, !0);
                var G = !isNaN(M.y - M.startY)
                  , fe = M.isDragging
                  , R = fe && (Math.abs(M.x - M.startX) > 3 || Math.abs(M.y - M.startY) > 3)
                  , Q = vr(X);
                !R && G && (M._vx.reset(),
                M._vy.reset(),
                c && ge && lt.delayedCall(.08, function() {
                    if (Pr() - mi > 300 && !X.defaultPrevented) {
                        if (X.target.click)
                            X.target.click();
                        else if (ye.createEvent) {
                            var W = ye.createEvent("MouseEvents");
                            W.initMouseEvent("click", !0, !0, Jt, 1, Q.screenX, Q.screenY, Q.clientX, Q.clientY, !1, !1, !1, !1, 0, null),
                            X.target.dispatchEvent(W)
                        }
                    }
                })),
                M.isDragging = M.isGesturing = M.isPressed = !1,
                f && fe && !F && De.restart(!0),
                y && fe && y(M),
                m && m(M, R)
            }
        }
        , ze = function(G) {
            return G.touches && G.touches.length > 1 && (M.isGesturing = !0) && U(G, M.isDragging)
        }, Qe = function() {
            return (M.isGesturing = !1) || x(M)
        }, Pt = function(G) {
            if (!Pe(G)) {
                var fe = pe()
                  , R = Lt();
                z((fe - St) * he, (R - ni) * he, 1),
                St = fe,
                ni = R,
                f && De.restart(!0)
            }
        }, We = function(G) {
            if (!Pe(G)) {
                G = vr(G, c),
                J && (_e = !0);
                var fe = (G.deltaMode === 1 ? l : G.deltaMode === 2 ? Jt.innerHeight : 1) * g;
                z(G.deltaX * fe, G.deltaY * fe, 0),
                f && !F && De.restart(!0)
            }
        }, vi = function(G) {
            if (!Pe(G)) {
                var fe = G.clientX
                  , R = G.clientY
                  , Q = fe - M.x
                  , W = R - M.y;
                M.x = fe,
                M.y = R,
                ie = !0,
                f && De.restart(!0),
                (Q || W) && q(Q, W)
            }
        }, _i = function(G) {
            M.event = G,
            D(M)
        }, dt = function(G) {
            M.event = G,
            P(M)
        }, gs = function(G) {
            return Pe(G) || vr(G, c) && ce(M)
        };
        De = M._dc = lt.delayedCall(p || .25, Ns).pause(),
        M.deltaX = M.deltaY = 0,
        M._vx = lo(0, 50, !0),
        M._vy = lo(0, 50, !0),
        M.scrollX = pe,
        M.scrollY = Lt,
        M.isDragging = M.isGesturing = M.isPressed = !1,
        vc(this),
        M.enable = function(X) {
            return M.isEnabled || (Ct(Gt ? ye : o, "scroll", oo),
            a.indexOf("scroll") >= 0 && Ct(Gt ? ye : o, "scroll", Pt, Ze, we),
            a.indexOf("wheel") >= 0 && Ct(o, "wheel", We, Ze, we),
            (a.indexOf("touch") >= 0 && gc || a.indexOf("pointer") >= 0) && (Ct(o, bi[0], ee, Ze, we),
            Ct(ye, bi[2], Y),
            Ct(ye, bi[3], Y),
            ge && Ct(o, "click", ps, !0, !0),
            ce && Ct(o, "click", gs),
            U && Ct(ye, "gesturestart", ze),
            x && Ct(ye, "gestureend", Qe),
            D && Ct(o, bs + "enter", _i),
            P && Ct(o, bs + "leave", dt),
            B && Ct(o, bs + "move", vi)),
            M.isEnabled = !0,
            X && X.type && ee(X),
            de && de(M)),
            M
        }
        ,
        M.disable = function() {
            M.isEnabled && (Ks.filter(function(X) {
                return X !== M && Fr(X.target)
            }).length || xt(Gt ? ye : o, "scroll", oo),
            M.isPressed && (M._vx.reset(),
            M._vy.reset(),
            xt(F ? o : ye, bi[1], se, !0)),
            xt(Gt ? ye : o, "scroll", Pt, we),
            xt(o, "wheel", We, we),
            xt(o, bi[0], ee, we),
            xt(ye, bi[2], Y),
            xt(ye, bi[3], Y),
            xt(o, "click", ps, !0),
            xt(o, "click", gs),
            xt(ye, "gesturestart", ze),
            xt(ye, "gestureend", Qe),
            xt(o, bs + "enter", _i),
            xt(o, bs + "leave", dt),
            xt(o, bs + "move", vi),
            M.isEnabled = M.isPressed = M.isDragging = !1,
            Ge && Ge(M))
        }
        ,
        M.kill = M.revert = function() {
            M.disable();
            var X = Ks.indexOf(M);
            X >= 0 && Ks.splice(X, 1),
            Gi === M && (Gi = 0)
        }
        ,
        Ks.push(M),
        F && Fr(o) && (Gi = M),
        M.enable(h)
    }
    ,
    Vf(r, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    r
}();
Ve.version = "3.12.5";
Ve.create = function(r) {
    return new Ve(r)
}
;
Ve.register = wc;
Ve.getAll = function() {
    return Ks.slice()
}
;
Ve.getById = function(r) {
    return Ks.filter(function(e) {
        return e.vars.id === r
    })[0]
}
;
_c() && lt.registerPlugin(Ve);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var N, Ys, le, Me, wi, Ce, Sc, Kn, Qr, Br, xr, gn, gt, ca, uo, Et, Tl, El, Ws, xc, ka, Cc, Tt, co, Tc, Ec, Zi, fo, Ho, tr, Go, Zn, ho, Aa, mn = 1, mt = Date.now, Oa = mt(), di = 0, Cr = 0, kl = function(e, t, i) {
    var s = jt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return i["_" + t + "Clamp"] = s,
    s ? e.substr(6, e.length - 7) : e
}, Al = function(e, t) {
    return t && (!jt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, Nf = function r() {
    return Cr && requestAnimationFrame(r)
}, Ol = function() {
    return ca = 1
}, Ml = function() {
    return ca = 0
}, ki = function(e) {
    return e
}, Tr = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, kc = function() {
    return typeof window < "u"
}, Ac = function() {
    return N || kc() && (N = window.gsap) && N.registerPlugin && N
}, Bs = function(e) {
    return !!~Sc.indexOf(e)
}, Oc = function(e) {
    return (e === "Height" ? Go : le["inner" + e]) || wi["client" + e] || Ce["client" + e]
}, Mc = function(e) {
    return os(e, "getBoundingClientRect") || (Bs(e) ? function() {
        return $n.width = le.innerWidth,
        $n.height = Go,
        $n
    }
    : function() {
        return Ni(e)
    }
    )
}, Hf = function(e, t, i) {
    var s = i.d
      , n = i.d2
      , a = i.a;
    return (a = os(e, "getBoundingClientRect")) ? function() {
        return a()[s]
    }
    : function() {
        return (t ? Oc(n) : e["client" + n]) || 0
    }
}, Gf = function(e, t) {
    return !t || ~Fi.indexOf(e) ? Mc(e) : function() {
        return $n
    }
}, Ii = function(e, t) {
    var i = t.s
      , s = t.d2
      , n = t.d
      , a = t.a;
    return Math.max(0, (i = "scroll" + s) && (a = os(e, i)) ? a() - Mc(e)()[n] : Bs(e) ? (wi[i] || Ce[i]) - Oc(s) : e[i] - e["offset" + s])
}, vn = function(e, t) {
    for (var i = 0; i < Ws.length; i += 3)
        (!t || ~t.indexOf(Ws[i + 1])) && e(Ws[i], Ws[i + 1], Ws[i + 2])
}, jt = function(e) {
    return typeof e == "string"
}, Mt = function(e) {
    return typeof e == "function"
}, Er = function(e) {
    return typeof e == "number"
}, ws = function(e) {
    return typeof e == "object"
}, _r = function(e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause()
}, Ma = function(e, t) {
    if (e.enabled) {
        var i = e._ctx ? e._ctx.add(function() {
            return t(e)
        }) : t(e);
        i && i.totalTime && (e.callbackAnimation = i)
    }
}, Gs = Math.abs, Ic = "left", Lc = "top", qo = "right", Yo = "bottom", Ms = "width", Is = "height", Rr = "Right", $r = "Left", Vr = "Top", zr = "Bottom", Ne = "padding", oi = "margin", lr = "Width", Wo = "Height", Ue = "px", li = function(e) {
    return le.getComputedStyle(e)
}, qf = function(e) {
    var t = li(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
}, Il = function(e, t) {
    for (var i in t)
        i in e || (e[i] = t[i]);
    return e
}, Ni = function(e, t) {
    var i = t && li(e)[uo] !== "matrix(1, 0, 0, 1, 0, 0)" && N.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , s = e.getBoundingClientRect();
    return i && i.progress(0).kill(),
    s
}, Qn = function(e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0
}, Dc = function(e) {
    var t = [], i = e.labels, s = e.duration(), n;
    for (n in i)
        t.push(i[n] / s);
    return t
}, Yf = function(e) {
    return function(t) {
        return N.utils.snap(Dc(e), t)
    }
}, jo = function(e) {
    var t = N.utils.snap(e)
      , i = Array.isArray(e) && e.slice(0).sort(function(s, n) {
        return s - n
    });
    return i ? function(s, n, a) {
        a === void 0 && (a = .001);
        var o;
        if (!n)
            return t(s);
        if (n > 0) {
            for (s -= a,
            o = 0; o < i.length; o++)
                if (i[o] >= s)
                    return i[o];
            return i[o - 1]
        } else
            for (o = i.length,
            s += a; o--; )
                if (i[o] <= s)
                    return i[o];
        return i[0]
    }
    : function(s, n, a) {
        a === void 0 && (a = .001);
        var o = t(s);
        return !n || Math.abs(o - s) < a || o - s < 0 == n < 0 ? o : t(n < 0 ? s - e : s + e)
    }
}, Wf = function(e) {
    return function(t, i) {
        return jo(Dc(e))(t, i.direction)
    }
}, _n = function(e, t, i, s) {
    return i.split(",").forEach(function(n) {
        return e(t, n, s)
    })
}, tt = function(e, t, i, s, n) {
    return e.addEventListener(t, i, {
        passive: !s,
        capture: !!n
    })
}, et = function(e, t, i, s) {
    return e.removeEventListener(t, i, !!s)
}, yn = function(e, t, i) {
    i = i && i.wheelHandler,
    i && (e(t, "wheel", i),
    e(t, "touchmove", i))
}, Ll = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, bn = {
    toggleActions: "play",
    anticipatePin: 0
}, Jn = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Pn = function(e, t) {
    if (jt(e)) {
        var i = e.indexOf("=")
          , s = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (s *= t / 100),
        e = e.substr(0, i - 1)),
        e = s + (e in Jn ? Jn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, wn = function(e, t, i, s, n, a, o, l) {
    var u = n.startColor
      , c = n.endColor
      , f = n.fontSize
      , p = n.indent
      , d = n.fontWeight
      , g = Me.createElement("div")
      , h = Bs(i) || os(i, "pinType") === "fixed"
      , _ = e.indexOf("scroller") !== -1
      , y = h ? Ce : i
      , v = e.indexOf("start") !== -1
      , b = v ? u : c
      , m = "border-color:" + b + ";font-size:" + f + ";color:" + b + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return m += "position:" + ((_ || l) && h ? "fixed;" : "absolute;"),
    (_ || l || !h) && (m += (s === Xe ? qo : Yo) + ":" + (a + parseFloat(p)) + "px;"),
    o && (m += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
    g._isStart = v,
    g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
    g.style.cssText = m,
    g.innerText = t || t === 0 ? e + "-" + t : e,
    y.children[0] ? y.insertBefore(g, y.children[0]) : y.appendChild(g),
    g._offset = g["offset" + s.op.d2],
    Fn(g, 0, s, v),
    g
}, Fn = function(e, t, i, s) {
    var n = {
        display: "block"
    }
      , a = i[s ? "os2" : "p2"]
      , o = i[s ? "p2" : "os2"];
    e._isFlipped = s,
    n[i.a + "Percent"] = s ? -100 : 0,
    n[i.a] = s ? "1px" : 0,
    n["border" + a + lr] = 1,
    n["border" + o + lr] = 0,
    n[i.p] = t + "px",
    N.set(e, n)
}, re = [], po = {}, Jr, Dl = function() {
    return mt() - di > 34 && (Jr || (Jr = requestAnimationFrame(qi)))
}, qs = function() {
    (!Tt || !Tt.isPressed || Tt.startX > Ce.clientWidth) && (ne.cache++,
    Tt ? Jr || (Jr = requestAnimationFrame(qi)) : qi(),
    di || $s("scrollStart"),
    di = mt())
}, Ia = function() {
    Ec = le.innerWidth,
    Tc = le.innerHeight
}, kr = function() {
    ne.cache++,
    !gt && !Cc && !Me.fullscreenElement && !Me.webkitFullscreenElement && (!co || Ec !== le.innerWidth || Math.abs(le.innerHeight - Tc) > le.innerHeight * .25) && Kn.restart(!0)
}, Rs = {}, jf = [], Pc = function r() {
    return et(ae, "scrollEnd", r) || Cs(!0)
}, $s = function(e) {
    return Rs[e] && Rs[e].map(function(t) {
        return t()
    }) || jf
}, Wt = [], Fc = function(e) {
    for (var t = 0; t < Wt.length; t += 5)
        (!e || Wt[t + 4] && Wt[t + 4].query === e) && (Wt[t].style.cssText = Wt[t + 1],
        Wt[t].getBBox && Wt[t].setAttribute("transform", Wt[t + 2] || ""),
        Wt[t + 3].uncache = 1)
}, Uo = function(e, t) {
    var i;
    for (Et = 0; Et < re.length; Et++)
        i = re[Et],
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    Zn = !0,
    t && Fc(t),
    t || $s("revert")
}, Bc = function(e, t) {
    ne.cache++,
    (t || !kt) && ne.forEach(function(i) {
        return Mt(i) && i.cacheID++ && (i.rec = 0)
    }),
    jt(e) && (le.history.scrollRestoration = Ho = e)
}, kt, Ls = 0, Pl, Uf = function() {
    if (Pl !== Ls) {
        var e = Pl = Ls;
        requestAnimationFrame(function() {
            return e === Ls && Cs(!0)
        })
    }
}, Rc = function() {
    Ce.appendChild(tr),
    Go = !Tt && tr.offsetHeight || le.innerHeight,
    Ce.removeChild(tr)
}, Fl = function(e) {
    return Qr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
        return t.style.display = e ? "none" : "block"
    })
}, Cs = function(e, t) {
    if (di && !e && !Zn) {
        tt(ae, "scrollEnd", Pc);
        return
    }
    Rc(),
    kt = ae.isRefreshing = !0,
    ne.forEach(function(s) {
        return Mt(s) && ++s.cacheID && (s.rec = s())
    });
    var i = $s("refreshInit");
    xc && ae.sort(),
    t || Uo(),
    ne.forEach(function(s) {
        Mt(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"),
        s(0))
    }),
    re.slice(0).forEach(function(s) {
        return s.refresh()
    }),
    Zn = !1,
    re.forEach(function(s) {
        if (s._subPinOffset && s.pin) {
            var n = s.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , a = s.pin[n];
            s.revert(!0, 1),
            s.adjustPinSpacing(s.pin[n] - a),
            s.refresh()
        }
    }),
    ho = 1,
    Fl(!0),
    re.forEach(function(s) {
        var n = Ii(s.scroller, s._dir)
          , a = s.vars.end === "max" || s._endClamp && s.end > n
          , o = s._startClamp && s.start >= n;
        (a || o) && s.setPositions(o ? n - 1 : s.start, a ? Math.max(o ? n : s.start + 1, n) : s.end, !0)
    }),
    Fl(!1),
    ho = 0,
    i.forEach(function(s) {
        return s && s.render && s.render(-1)
    }),
    ne.forEach(function(s) {
        Mt(s) && (s.smooth && requestAnimationFrame(function() {
            return s.target.style.scrollBehavior = "smooth"
        }),
        s.rec && s(s.rec))
    }),
    Bc(Ho, 1),
    Kn.pause(),
    Ls++,
    kt = 2,
    qi(2),
    re.forEach(function(s) {
        return Mt(s.vars.onRefresh) && s.vars.onRefresh(s)
    }),
    kt = ae.isRefreshing = !1,
    $s("refresh")
}, go = 0, Bn = 1, Nr, qi = function(e) {
    if (e === 2 || !kt && !Zn) {
        ae.isUpdating = !0,
        Nr && Nr.update(0);
        var t = re.length
          , i = mt()
          , s = i - Oa >= 50
          , n = t && re[0].scroll();
        if (Bn = go > n ? -1 : 1,
        kt || (go = n),
        s && (di && !ca && i - di > 200 && (di = 0,
        $s("scrollEnd")),
        xr = Oa,
        Oa = i),
        Bn < 0) {
            for (Et = t; Et-- > 0; )
                re[Et] && re[Et].update(0, s);
            Bn = 1
        } else
            for (Et = 0; Et < t; Et++)
                re[Et] && re[Et].update(0, s);
        ae.isUpdating = !1
    }
    Jr = 0
}, mo = [Ic, Lc, Yo, qo, oi + zr, oi + Rr, oi + Vr, oi + $r, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Rn = mo.concat([Ms, Is, "boxSizing", "max" + lr, "max" + Wo, "position", oi, Ne, Ne + Vr, Ne + Rr, Ne + zr, Ne + $r]), Xf = function(e, t, i) {
    ir(i);
    var s = e._gsap;
    if (s.spacerIsNative)
        ir(s.spacerState);
    else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t),
        n.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, La = function(e, t, i, s) {
    if (!e._gsap.swappedIn) {
        for (var n = mo.length, a = t.style, o = e.style, l; n--; )
            l = mo[n],
            a[l] = i[l];
        a.position = i.position === "absolute" ? "absolute" : "relative",
        i.display === "inline" && (a.display = "inline-block"),
        o[Yo] = o[qo] = "auto",
        a.flexBasis = i.flexBasis || "auto",
        a.overflow = "visible",
        a.boxSizing = "border-box",
        a[Ms] = Qn(e, Ot) + Ue,
        a[Is] = Qn(e, Xe) + Ue,
        a[Ne] = o[oi] = o[Lc] = o[Ic] = "0",
        ir(s),
        o[Ms] = o["max" + lr] = i[Ms],
        o[Is] = o["max" + Wo] = i[Is],
        o[Ne] = i[Ne],
        e.parentNode !== t && (e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, Kf = /([A-Z])/g, ir = function(e) {
    if (e) {
        var t = e.t.style, i = e.length, s = 0, n, a;
        for ((e.t._gsap || N.core.getCache(e.t)).uncache = 1; s < i; s += 2)
            a = e[s + 1],
            n = e[s],
            a ? t[n] = a : t[n] && t.removeProperty(n.replace(Kf, "-$1").toLowerCase())
    }
}, Sn = function(e) {
    for (var t = Rn.length, i = e.style, s = [], n = 0; n < t; n++)
        s.push(Rn[n], i[Rn[n]]);
    return s.t = e,
    s
}, Zf = function(e, t, i) {
    for (var s = [], n = e.length, a = i ? 8 : 0, o; a < n; a += 2)
        o = e[a],
        s.push(o, o in t ? t[o] : e[a + 1]);
    return s.t = e.t,
    s
}, $n = {
    left: 0,
    top: 0
}, Bl = function(e, t, i, s, n, a, o, l, u, c, f, p, d, g) {
    Mt(e) && (e = e(l)),
    jt(e) && e.substr(0, 3) === "max" && (e = p + (e.charAt(4) === "=" ? Pn("0" + e.substr(3), i) : 0));
    var h = d ? d.time() : 0, _, y, v;
    if (d && d.seek(0),
    isNaN(e) || (e = +e),
    Er(e))
        d && (e = N.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, p, e)),
        o && Fn(o, i, s, !0);
    else {
        Mt(t) && (t = t(l));
        var b = (e || "0").split(" "), m, w, S, T;
        v = Ft(t, l) || Ce,
        m = Ni(v) || {},
        (!m || !m.left && !m.top) && li(v).display === "none" && (T = v.style.display,
        v.style.display = "block",
        m = Ni(v),
        T ? v.style.display = T : v.style.removeProperty("display")),
        w = Pn(b[0], m[s.d]),
        S = Pn(b[1] || "0", i),
        e = m[s.p] - u[s.p] - c + w + n - S,
        o && Fn(o, S, s, i - S < 20 || o._isStart && S > 20),
        i -= i - S
    }
    if (g && (l[g] = e || -.001,
    e < 0 && (e = 0)),
    a) {
        var k = e + i
          , E = a._isStart;
        _ = "scroll" + s.d2,
        Fn(a, k, s, E && k > 20 || !E && (f ? Math.max(Ce[_], wi[_]) : a.parentNode[_]) <= k + 1),
        f && (u = Ni(o),
        f && (a.style[s.op.p] = u[s.op.p] - s.op.m - a._offset + Ue))
    }
    return d && v && (_ = Ni(v),
    d.seek(p),
    y = Ni(v),
    d._caScrollDist = _[s.p] - y[s.p],
    e = e / d._caScrollDist * p),
    d && d.seek(h),
    d ? e : Math.round(e)
}, Qf = /(webkit|moz|length|cssText|inset)/i, Rl = function(e, t, i, s) {
    if (e.parentNode !== t) {
        var n = e.style, a, o;
        if (t === Ce) {
            e._stOrig = n.cssText,
            o = li(e);
            for (a in o)
                !+a && !Qf.test(a) && o[a] && typeof n[a] == "string" && a !== "0" && (n[a] = o[a]);
            n.top = i,
            n.left = s
        } else
            n.cssText = e._stOrig;
        N.core.getCache(e).uncache = 1,
        t.appendChild(e)
    }
}, $c = function(e, t, i) {
    var s = t
      , n = s;
    return function(a) {
        var o = Math.round(e());
        return o !== s && o !== n && Math.abs(o - s) > 3 && Math.abs(o - n) > 3 && (a = o,
        i && i()),
        n = s,
        s = a,
        a
    }
}, xn = function(e, t, i) {
    var s = {};
    s[t.p] = "+=" + i,
    N.set(e, s)
}, $l = function(e, t) {
    var i = ds(e, t)
      , s = "_scroll" + t.p2
      , n = function a(o, l, u, c, f) {
        var p = a.tween
          , d = l.onComplete
          , g = {};
        u = u || i();
        var h = $c(i, u, function() {
            p.kill(),
            a.tween = 0
        });
        return f = c && f || 0,
        c = c || o - u,
        p && p.kill(),
        l[s] = o,
        l.inherit = !1,
        l.modifiers = g,
        g[s] = function() {
            return h(u + c * p.ratio + f * p.ratio * p.ratio)
        }
        ,
        l.onUpdate = function() {
            ne.cache++,
            a.tween && qi()
        }
        ,
        l.onComplete = function() {
            a.tween = 0,
            d && d.call(p)
        }
        ,
        p = a.tween = N.to(e, l),
        p
    };
    return e[s] = i,
    i.wheelHandler = function() {
        return n.tween && n.tween.kill() && (n.tween = 0)
    }
    ,
    tt(e, "wheel", i.wheelHandler),
    ae.isTouch && tt(e, "touchmove", i.wheelHandler),
    n
}, ae = function() {
    function r(t, i) {
        Ys || r.register(N) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        fo(this),
        this.init(t, i)
    }
    var e = r.prototype;
    return e.init = function(i, s) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Cr) {
            this.update = this.refresh = this.kill = ki;
            return
        }
        i = Il(jt(i) || Er(i) || i.nodeType ? {
            trigger: i
        } : i, bn);
        var n = i, a = n.onUpdate, o = n.toggleClass, l = n.id, u = n.onToggle, c = n.onRefresh, f = n.scrub, p = n.trigger, d = n.pin, g = n.pinSpacing, h = n.invalidateOnRefresh, _ = n.anticipatePin, y = n.onScrubComplete, v = n.onSnapComplete, b = n.once, m = n.snap, w = n.pinReparent, S = n.pinSpacer, T = n.containerAnimation, k = n.fastScrollEnd, E = n.preventOverlaps, C = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? Ot : Xe, O = !f && f !== 0, A = Ft(i.scroller || le), I = N.core.getCache(A), D = Bs(A), P = ("pinType"in i ? i.pinType : os(A, "pinType") || D && "fixed") === "fixed", B = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], V = O && i.toggleActions.split(" "), F = "markers"in i ? i.markers : bn.markers, U = D ? 0 : parseFloat(li(A)["border" + C.p2 + lr]) || 0, x = this, J = i.onRefreshInit && function() {
            return i.onRefreshInit(x)
        }
        , de = Hf(A, D, C), Ge = Gf(A, D), ce = 0, he = 0, we = 0, ge = ds(A, C), Se, ke, rt, De, ut, ie, _e, qe, Ye, M, Ke, It, Ze, pe, Lt, St, ni, Ae, Gt, ye, ct, Dt, mi, ps, Pe, Ns, L, z, q, se, ee, Y, ze, Qe, Pt, We, vi, _i, dt;
        if (x._startClamp = x._endClamp = !1,
        x._dir = C,
        _ *= 45,
        x.scroller = A,
        x.scroll = T ? T.time.bind(T) : ge,
        De = ge(),
        x.vars = i,
        s = s || i.animation,
        "refreshPriority"in i && (xc = 1,
        i.refreshPriority === -9999 && (Nr = x)),
        I.tweenScroll = I.tweenScroll || {
            top: $l(A, Xe),
            left: $l(A, Ot)
        },
        x.tweenTo = Se = I.tweenScroll[C.p],
        x.scrubDuration = function(R) {
            ze = Er(R) && R,
            ze ? Y ? Y.duration(R) : Y = N.to(s, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: ze,
                paused: !0,
                onComplete: function() {
                    return y && y(x)
                }
            }) : (Y && Y.progress(1).kill(),
            Y = 0)
        }
        ,
        s && (s.vars.lazy = !1,
        s._initted && !x.isReverted || s.vars.immediateRender !== !1 && i.immediateRender !== !1 && s.duration() && s.render(0, !0, !0),
        x.animation = s.pause(),
        s.scrollTrigger = x,
        x.scrubDuration(f),
        se = 0,
        l || (l = s.vars.id)),
        m && ((!ws(m) || m.push) && (m = {
            snapTo: m
        }),
        "scrollBehavior"in Ce.style && N.set(D ? [Ce, wi] : A, {
            scrollBehavior: "auto"
        }),
        ne.forEach(function(R) {
            return Mt(R) && R.target === (D ? Me.scrollingElement || wi : A) && (R.smooth = !1)
        }),
        rt = Mt(m.snapTo) ? m.snapTo : m.snapTo === "labels" ? Yf(s) : m.snapTo === "labelsDirectional" ? Wf(s) : m.directional !== !1 ? function(R, Q) {
            return jo(m.snapTo)(R, mt() - he < 500 ? 0 : Q.direction)
        }
        : N.utils.snap(m.snapTo),
        Qe = m.duration || {
            min: .1,
            max: 2
        },
        Qe = ws(Qe) ? Br(Qe.min, Qe.max) : Br(Qe, Qe),
        Pt = N.delayedCall(m.delay || ze / 2 || .1, function() {
            var R = ge()
              , Q = mt() - he < 500
              , W = Se.tween;
            if ((Q || Math.abs(x.getVelocity()) < 10) && !W && !ca && ce !== R) {
                var Z = (R - ie) / pe, Je = s && !O ? s.totalProgress() : Z, oe = Q ? 0 : (Je - ee) / (mt() - xr) * 1e3 || 0, Re = N.utils.clamp(-Z, 1 - Z, Gs(oe / 2) * oe / .185), ft = Z + (m.inertia === !1 ? 0 : Re), Fe, Te, me = m, yi = me.onStart, Oe = me.onInterrupt, qt = me.onComplete;
                if (Fe = rt(ft, x),
                Er(Fe) || (Fe = ft),
                Te = Math.round(ie + Fe * pe),
                R <= _e && R >= ie && Te !== R) {
                    if (W && !W._initted && W.data <= Gs(Te - R))
                        return;
                    m.inertia === !1 && (Re = Fe - Z),
                    Se(Te, {
                        duration: Qe(Gs(Math.max(Gs(ft - Je), Gs(Fe - Je)) * .185 / oe / .05 || 0)),
                        ease: m.ease || "power3",
                        data: Gs(Te - R),
                        onInterrupt: function() {
                            return Pt.restart(!0) && Oe && Oe(x)
                        },
                        onComplete: function() {
                            x.update(),
                            ce = ge(),
                            s && (Y ? Y.resetTo("totalProgress", Fe, s._tTime / s._tDur) : s.progress(Fe)),
                            se = ee = s && !O ? s.totalProgress() : x.progress,
                            v && v(x),
                            qt && qt(x)
                        }
                    }, R, Re * pe, Te - R - Re * pe),
                    yi && yi(x, Se.tween)
                }
            } else
                x.isActive && ce !== R && Pt.restart(!0)
        }).pause()),
        l && (po[l] = x),
        p = x.trigger = Ft(p || d !== !0 && d),
        dt = p && p._gsap && p._gsap.stRevert,
        dt && (dt = dt(x)),
        d = d === !0 ? p : Ft(d),
        jt(o) && (o = {
            targets: p,
            className: o
        }),
        d && (g === !1 || g === oi || (g = !g && d.parentNode && d.parentNode.style && li(d.parentNode).display === "flex" ? !1 : Ne),
        x.pin = d,
        ke = N.core.getCache(d),
        ke.spacer ? Lt = ke.pinState : (S && (S = Ft(S),
        S && !S.nodeType && (S = S.current || S.nativeElement),
        ke.spacerIsNative = !!S,
        S && (ke.spacerState = Sn(S))),
        ke.spacer = Ae = S || Me.createElement("div"),
        Ae.classList.add("pin-spacer"),
        l && Ae.classList.add("pin-spacer-" + l),
        ke.pinState = Lt = Sn(d)),
        i.force3D !== !1 && N.set(d, {
            force3D: !0
        }),
        x.spacer = Ae = ke.spacer,
        q = li(d),
        ps = q[g + C.os2],
        ye = N.getProperty(d),
        ct = N.quickSetter(d, C.a, Ue),
        La(d, Ae, q),
        ni = Sn(d)),
        F) {
            It = ws(F) ? Il(F, Ll) : Ll,
            M = wn("scroller-start", l, A, C, It, 0),
            Ke = wn("scroller-end", l, A, C, It, 0, M),
            Gt = M["offset" + C.op.d2];
            var gs = Ft(os(A, "content") || A);
            qe = this.markerStart = wn("start", l, gs, C, It, Gt, 0, T),
            Ye = this.markerEnd = wn("end", l, gs, C, It, Gt, 0, T),
            T && (_i = N.quickSetter([qe, Ye], C.a, Ue)),
            !P && !(Fi.length && os(A, "fixedMarkers") === !0) && (qf(D ? Ce : A),
            N.set([M, Ke], {
                force3D: !0
            }),
            Ns = N.quickSetter(M, C.a, Ue),
            z = N.quickSetter(Ke, C.a, Ue))
        }
        if (T) {
            var X = T.vars.onUpdate
              , G = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function() {
                x.update(0, 0, 1),
                X && X.apply(T, G || [])
            })
        }
        if (x.previous = function() {
            return re[re.indexOf(x) - 1]
        }
        ,
        x.next = function() {
            return re[re.indexOf(x) + 1]
        }
        ,
        x.revert = function(R, Q) {
            if (!Q)
                return x.kill(!0);
            var W = R !== !1 || !x.enabled
              , Z = gt;
            W !== x.isReverted && (W && (We = Math.max(ge(), x.scroll.rec || 0),
            we = x.progress,
            vi = s && s.progress()),
            qe && [qe, Ye, M, Ke].forEach(function(Je) {
                return Je.style.display = W ? "none" : "block"
            }),
            W && (gt = x,
            x.update(W)),
            d && (!w || !x.isActive) && (W ? Xf(d, Ae, Lt) : La(d, Ae, li(d), Pe)),
            W || x.update(W),
            gt = Z,
            x.isReverted = W)
        }
        ,
        x.refresh = function(R, Q, W, Z) {
            if (!((gt || !x.enabled) && !Q)) {
                if (d && R && di) {
                    tt(r, "scrollEnd", Pc);
                    return
                }
                !kt && J && J(x),
                gt = x,
                Se.tween && !W && (Se.tween.kill(),
                Se.tween = 0),
                Y && Y.pause(),
                h && s && s.revert({
                    kill: !1
                }).invalidate(),
                x.isReverted || x.revert(!0, !0),
                x._subPinOffset = !1;
                var Je = de(), oe = Ge(), Re = T ? T.duration() : Ii(A, C), ft = pe <= .01, Fe = 0, Te = Z || 0, me = ws(W) ? W.end : i.end, yi = i.endTrigger || p, Oe = ws(W) ? W.start : i.start || (i.start === 0 || !p ? 0 : d ? "0 0" : "0 100%"), qt = x.pinnedContainer = i.pinnedContainer && Ft(i.pinnedContainer, x), xi = p && Math.max(0, re.indexOf(x)) || 0, nt = xi, at, ht, ms, cn, pt, je, Ci, va, al, hr, Ti, pr, dn;
                for (F && ws(W) && (pr = N.getProperty(M, C.p),
                dn = N.getProperty(Ke, C.p)); nt--; )
                    je = re[nt],
                    je.end || je.refresh(0, 1) || (gt = x),
                    Ci = je.pin,
                    Ci && (Ci === p || Ci === d || Ci === qt) && !je.isReverted && (hr || (hr = []),
                    hr.unshift(je),
                    je.revert(!0, !0)),
                    je !== re[nt] && (xi--,
                    nt--);
                for (Mt(Oe) && (Oe = Oe(x)),
                Oe = kl(Oe, "start", x),
                ie = Bl(Oe, p, Je, C, ge(), qe, M, x, oe, U, P, Re, T, x._startClamp && "_startClamp") || (d ? -.001 : 0),
                Mt(me) && (me = me(x)),
                jt(me) && !me.indexOf("+=") && (~me.indexOf(" ") ? me = (jt(Oe) ? Oe.split(" ")[0] : "") + me : (Fe = Pn(me.substr(2), Je),
                me = jt(Oe) ? Oe : (T ? N.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, ie) : ie) + Fe,
                yi = p)),
                me = kl(me, "end", x),
                _e = Math.max(ie, Bl(me || (yi ? "100% 0" : Re), yi, Je, C, ge() + Fe, Ye, Ke, x, oe, U, P, Re, T, x._endClamp && "_endClamp")) || -.001,
                Fe = 0,
                nt = xi; nt--; )
                    je = re[nt],
                    Ci = je.pin,
                    Ci && je.start - je._pinPush <= ie && !T && je.end > 0 && (at = je.end - (x._startClamp ? Math.max(0, je.start) : je.start),
                    (Ci === p && je.start - je._pinPush < ie || Ci === qt) && isNaN(Oe) && (Fe += at * (1 - je.progress)),
                    Ci === d && (Te += at));
                if (ie += Fe,
                _e += Fe,
                x._startClamp && (x._startClamp += Fe),
                x._endClamp && !kt && (x._endClamp = _e || -.001,
                _e = Math.min(_e, Ii(A, C))),
                pe = _e - ie || (ie -= .01) && .001,
                ft && (we = N.utils.clamp(0, 1, N.utils.normalize(ie, _e, We))),
                x._pinPush = Te,
                qe && Fe && (at = {},
                at[C.a] = "+=" + Fe,
                qt && (at[C.p] = "-=" + ge()),
                N.set([qe, Ye], at)),
                d && !(ho && x.end >= Ii(A, C)))
                    at = li(d),
                    cn = C === Xe,
                    ms = ge(),
                    Dt = parseFloat(ye(C.a)) + Te,
                    !Re && _e > 1 && (Ti = (D ? Me.scrollingElement || wi : A).style,
                    Ti = {
                        style: Ti,
                        value: Ti["overflow" + C.a.toUpperCase()]
                    },
                    D && li(Ce)["overflow" + C.a.toUpperCase()] !== "scroll" && (Ti.style["overflow" + C.a.toUpperCase()] = "scroll")),
                    La(d, Ae, at),
                    ni = Sn(d),
                    ht = Ni(d, !0),
                    va = P && ds(A, cn ? Ot : Xe)(),
                    g ? (Pe = [g + C.os2, pe + Te + Ue],
                    Pe.t = Ae,
                    nt = g === Ne ? Qn(d, C) + pe + Te : 0,
                    nt && (Pe.push(C.d, nt + Ue),
                    Ae.style.flexBasis !== "auto" && (Ae.style.flexBasis = nt + Ue)),
                    ir(Pe),
                    qt && re.forEach(function(gr) {
                        gr.pin === qt && gr.vars.pinSpacing !== !1 && (gr._subPinOffset = !0)
                    }),
                    P && ge(We)) : (nt = Qn(d, C),
                    nt && Ae.style.flexBasis !== "auto" && (Ae.style.flexBasis = nt + Ue)),
                    P && (pt = {
                        top: ht.top + (cn ? ms - ie : va) + Ue,
                        left: ht.left + (cn ? va : ms - ie) + Ue,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    pt[Ms] = pt["max" + lr] = Math.ceil(ht.width) + Ue,
                    pt[Is] = pt["max" + Wo] = Math.ceil(ht.height) + Ue,
                    pt[oi] = pt[oi + Vr] = pt[oi + Rr] = pt[oi + zr] = pt[oi + $r] = "0",
                    pt[Ne] = at[Ne],
                    pt[Ne + Vr] = at[Ne + Vr],
                    pt[Ne + Rr] = at[Ne + Rr],
                    pt[Ne + zr] = at[Ne + zr],
                    pt[Ne + $r] = at[Ne + $r],
                    St = Zf(Lt, pt, w),
                    kt && ge(0)),
                    s ? (al = s._initted,
                    ka(1),
                    s.render(s.duration(), !0, !0),
                    mi = ye(C.a) - Dt + pe + Te,
                    L = Math.abs(pe - mi) > 1,
                    P && L && St.splice(St.length - 2, 2),
                    s.render(0, !0, !0),
                    al || s.invalidate(!0),
                    s.parent || s.totalTime(s.totalTime()),
                    ka(0)) : mi = pe,
                    Ti && (Ti.value ? Ti.style["overflow" + C.a.toUpperCase()] = Ti.value : Ti.style.removeProperty("overflow-" + C.a));
                else if (p && ge() && !T)
                    for (ht = p.parentNode; ht && ht !== Ce; )
                        ht._pinOffset && (ie -= ht._pinOffset,
                        _e -= ht._pinOffset),
                        ht = ht.parentNode;
                hr && hr.forEach(function(gr) {
                    return gr.revert(!1, !0)
                }),
                x.start = ie,
                x.end = _e,
                De = ut = kt ? We : ge(),
                !T && !kt && (De < We && ge(We),
                x.scroll.rec = 0),
                x.revert(!1, !0),
                he = mt(),
                Pt && (ce = -1,
                Pt.restart(!0)),
                gt = 0,
                s && O && (s._initted || vi) && s.progress() !== vi && s.progress(vi || 0, !0).render(s.time(), !0, !0),
                (ft || we !== x.progress || T || h) && (s && !O && s.totalProgress(T && ie < -.001 && !we ? N.utils.normalize(ie, _e, 0) : we, !0),
                x.progress = ft || (De - ie) / pe === we ? 0 : we),
                d && g && (Ae._pinOffset = Math.round(x.progress * mi)),
                Y && Y.invalidate(),
                isNaN(pr) || (pr -= N.getProperty(M, C.p),
                dn -= N.getProperty(Ke, C.p),
                xn(M, C, pr),
                xn(qe, C, pr - (Z || 0)),
                xn(Ke, C, dn),
                xn(Ye, C, dn - (Z || 0))),
                ft && !kt && x.update(),
                c && !kt && !Ze && (Ze = !0,
                c(x),
                Ze = !1)
            }
        }
        ,
        x.getVelocity = function() {
            return (ge() - ut) / (mt() - xr) * 1e3 || 0
        }
        ,
        x.endAnimation = function() {
            _r(x.callbackAnimation),
            s && (Y ? Y.progress(1) : s.paused() ? O || _r(s, x.direction < 0, 1) : _r(s, s.reversed()))
        }
        ,
        x.labelToScroll = function(R) {
            return s && s.labels && (ie || x.refresh() || ie) + s.labels[R] / s.duration() * pe || 0
        }
        ,
        x.getTrailing = function(R) {
            var Q = re.indexOf(x)
              , W = x.direction > 0 ? re.slice(0, Q).reverse() : re.slice(Q + 1);
            return (jt(R) ? W.filter(function(Z) {
                return Z.vars.preventOverlaps === R
            }) : W).filter(function(Z) {
                return x.direction > 0 ? Z.end <= ie : Z.start >= _e
            })
        }
        ,
        x.update = function(R, Q, W) {
            if (!(T && !W && !R)) {
                var Z = kt === !0 ? We : x.scroll(), Je = R ? 0 : (Z - ie) / pe, oe = Je < 0 ? 0 : Je > 1 ? 1 : Je || 0, Re = x.progress, ft, Fe, Te, me, yi, Oe, qt, xi;
                if (Q && (ut = De,
                De = T ? ge() : Z,
                m && (ee = se,
                se = s && !O ? s.totalProgress() : oe)),
                _ && d && !gt && !mn && di && (!oe && ie < Z + (Z - ut) / (mt() - xr) * _ ? oe = 1e-4 : oe === 1 && _e > Z + (Z - ut) / (mt() - xr) * _ && (oe = .9999)),
                oe !== Re && x.enabled) {
                    if (ft = x.isActive = !!oe && oe < 1,
                    Fe = !!Re && Re < 1,
                    Oe = ft !== Fe,
                    yi = Oe || !!oe != !!Re,
                    x.direction = oe > Re ? 1 : -1,
                    x.progress = oe,
                    yi && !gt && (Te = oe && !Re ? 0 : oe === 1 ? 1 : Re === 1 ? 2 : 3,
                    O && (me = !Oe && V[Te + 1] !== "none" && V[Te + 1] || V[Te],
                    xi = s && (me === "complete" || me === "reset" || me in s))),
                    E && (Oe || xi) && (xi || f || !s) && (Mt(E) ? E(x) : x.getTrailing(E).forEach(function(ms) {
                        return ms.endAnimation()
                    })),
                    O || (Y && !gt && !mn ? (Y._dp._time - Y._start !== Y._time && Y.render(Y._dp._time - Y._start),
                    Y.resetTo ? Y.resetTo("totalProgress", oe, s._tTime / s._tDur) : (Y.vars.totalProgress = oe,
                    Y.invalidate().restart())) : s && s.totalProgress(oe, !!(gt && (he || R)))),
                    d) {
                        if (R && g && (Ae.style[g + C.os2] = ps),
                        !P)
                            ct(Tr(Dt + mi * oe));
                        else if (yi) {
                            if (qt = !R && oe > Re && _e + 1 > Z && Z + 1 >= Ii(A, C),
                            w)
                                if (!R && (ft || qt)) {
                                    var nt = Ni(d, !0)
                                      , at = Z - ie;
                                    Rl(d, Ce, nt.top + (C === Xe ? at : 0) + Ue, nt.left + (C === Xe ? 0 : at) + Ue)
                                } else
                                    Rl(d, Ae);
                            ir(ft || qt ? St : ni),
                            L && oe < 1 && ft || ct(Dt + (oe === 1 && !qt ? mi : 0))
                        }
                    }
                    m && !Se.tween && !gt && !mn && Pt.restart(!0),
                    o && (Oe || b && oe && (oe < 1 || !Aa)) && Qr(o.targets).forEach(function(ms) {
                        return ms.classList[ft || b ? "add" : "remove"](o.className)
                    }),
                    a && !O && !R && a(x),
                    yi && !gt ? (O && (xi && (me === "complete" ? s.pause().totalProgress(1) : me === "reset" ? s.restart(!0).pause() : me === "restart" ? s.restart(!0) : s[me]()),
                    a && a(x)),
                    (Oe || !Aa) && (u && Oe && Ma(x, u),
                    B[Te] && Ma(x, B[Te]),
                    b && (oe === 1 ? x.kill(!1, 1) : B[Te] = 0),
                    Oe || (Te = oe === 1 ? 1 : 3,
                    B[Te] && Ma(x, B[Te]))),
                    k && !ft && Math.abs(x.getVelocity()) > (Er(k) ? k : 2500) && (_r(x.callbackAnimation),
                    Y ? Y.progress(1) : _r(s, me === "reverse" ? 1 : !oe, 1))) : O && a && !gt && a(x)
                }
                if (z) {
                    var ht = T ? Z / T.duration() * (T._caScrollDist || 0) : Z;
                    Ns(ht + (M._isFlipped ? 1 : 0)),
                    z(ht)
                }
                _i && _i(-Z / T.duration() * (T._caScrollDist || 0))
            }
        }
        ,
        x.enable = function(R, Q) {
            x.enabled || (x.enabled = !0,
            tt(A, "resize", kr),
            D || tt(A, "scroll", qs),
            J && tt(r, "refreshInit", J),
            R !== !1 && (x.progress = we = 0,
            De = ut = ce = ge()),
            Q !== !1 && x.refresh())
        }
        ,
        x.getTween = function(R) {
            return R && Se ? Se.tween : Y
        }
        ,
        x.setPositions = function(R, Q, W, Z) {
            if (T) {
                var Je = T.scrollTrigger
                  , oe = T.duration()
                  , Re = Je.end - Je.start;
                R = Je.start + Re * R / oe,
                Q = Je.start + Re * Q / oe
            }
            x.refresh(!1, !1, {
                start: Al(R, W && !!x._startClamp),
                end: Al(Q, W && !!x._endClamp)
            }, Z),
            x.update()
        }
        ,
        x.adjustPinSpacing = function(R) {
            if (Pe && R) {
                var Q = Pe.indexOf(C.d) + 1;
                Pe[Q] = parseFloat(Pe[Q]) + R + Ue,
                Pe[1] = parseFloat(Pe[1]) + R + Ue,
                ir(Pe)
            }
        }
        ,
        x.disable = function(R, Q) {
            if (x.enabled && (R !== !1 && x.revert(!0, !0),
            x.enabled = x.isActive = !1,
            Q || Y && Y.pause(),
            We = 0,
            ke && (ke.uncache = 1),
            J && et(r, "refreshInit", J),
            Pt && (Pt.pause(),
            Se.tween && Se.tween.kill() && (Se.tween = 0)),
            !D)) {
                for (var W = re.length; W--; )
                    if (re[W].scroller === A && re[W] !== x)
                        return;
                et(A, "resize", kr),
                D || et(A, "scroll", qs)
            }
        }
        ,
        x.kill = function(R, Q) {
            x.disable(R, Q),
            Y && !Q && Y.kill(),
            l && delete po[l];
            var W = re.indexOf(x);
            W >= 0 && re.splice(W, 1),
            W === Et && Bn > 0 && Et--,
            W = 0,
            re.forEach(function(Z) {
                return Z.scroller === x.scroller && (W = 1)
            }),
            W || kt || (x.scroll.rec = 0),
            s && (s.scrollTrigger = null,
            R && s.revert({
                kill: !1
            }),
            Q || s.kill()),
            qe && [qe, Ye, M, Ke].forEach(function(Z) {
                return Z.parentNode && Z.parentNode.removeChild(Z)
            }),
            Nr === x && (Nr = 0),
            d && (ke && (ke.uncache = 1),
            W = 0,
            re.forEach(function(Z) {
                return Z.pin === d && W++
            }),
            W || (ke.spacer = 0)),
            i.onKill && i.onKill(x)
        }
        ,
        re.push(x),
        x.enable(!1, !1),
        dt && dt(x),
        s && s.add && !pe) {
            var fe = x.update;
            x.update = function() {
                x.update = fe,
                ie || _e || x.refresh()
            }
            ,
            N.delayedCall(.01, x.update),
            pe = .01,
            ie = _e = 0
        } else
            x.refresh();
        d && Uf()
    }
    ,
    r.register = function(i) {
        return Ys || (N = i || Ac(),
        kc() && window.document && r.enable(),
        Ys = Cr),
        Ys
    }
    ,
    r.defaults = function(i) {
        if (i)
            for (var s in i)
                bn[s] = i[s];
        return bn
    }
    ,
    r.disable = function(i, s) {
        Cr = 0,
        re.forEach(function(a) {
            return a[s ? "kill" : "disable"](i)
        }),
        et(le, "wheel", qs),
        et(Me, "scroll", qs),
        clearInterval(gn),
        et(Me, "touchcancel", ki),
        et(Ce, "touchstart", ki),
        _n(et, Me, "pointerdown,touchstart,mousedown", Ol),
        _n(et, Me, "pointerup,touchend,mouseup", Ml),
        Kn.kill(),
        vn(et);
        for (var n = 0; n < ne.length; n += 3)
            yn(et, ne[n], ne[n + 1]),
            yn(et, ne[n], ne[n + 2])
    }
    ,
    r.enable = function() {
        if (le = window,
        Me = document,
        wi = Me.documentElement,
        Ce = Me.body,
        N && (Qr = N.utils.toArray,
        Br = N.utils.clamp,
        fo = N.core.context || ki,
        ka = N.core.suppressOverwrites || ki,
        Ho = le.history.scrollRestoration || "auto",
        go = le.pageYOffset,
        N.core.globals("ScrollTrigger", r),
        Ce)) {
            Cr = 1,
            tr = document.createElement("div"),
            tr.style.height = "100vh",
            tr.style.position = "absolute",
            Rc(),
            Nf(),
            Ve.register(N),
            r.isTouch = Ve.isTouch,
            Zi = Ve.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            co = Ve.isTouch === 1,
            tt(le, "wheel", qs),
            Sc = [le, Me, wi, Ce],
            N.matchMedia ? (r.matchMedia = function(l) {
                var u = N.matchMedia(), c;
                for (c in l)
                    u.add(c, l[c]);
                return u
            }
            ,
            N.addEventListener("matchMediaInit", function() {
                return Uo()
            }),
            N.addEventListener("matchMediaRevert", function() {
                return Fc()
            }),
            N.addEventListener("matchMedia", function() {
                Cs(0, 1),
                $s("matchMedia")
            }),
            N.matchMedia("(orientation: portrait)", function() {
                return Ia(),
                Ia
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Ia(),
            tt(Me, "scroll", qs);
            var i = Ce.style, s = i.borderTopStyle, n = N.core.Animation.prototype, a, o;
            for (n.revert || Object.defineProperty(n, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            i.borderTopStyle = "solid",
            a = Ni(Ce),
            Xe.m = Math.round(a.top + Xe.sc()) || 0,
            Ot.m = Math.round(a.left + Ot.sc()) || 0,
            s ? i.borderTopStyle = s : i.removeProperty("border-top-style"),
            gn = setInterval(Dl, 250),
            N.delayedCall(.5, function() {
                return mn = 0
            }),
            tt(Me, "touchcancel", ki),
            tt(Ce, "touchstart", ki),
            _n(tt, Me, "pointerdown,touchstart,mousedown", Ol),
            _n(tt, Me, "pointerup,touchend,mouseup", Ml),
            uo = N.utils.checkPrefix("transform"),
            Rn.push(uo),
            Ys = mt(),
            Kn = N.delayedCall(.2, Cs).pause(),
            Ws = [Me, "visibilitychange", function() {
                var l = le.innerWidth
                  , u = le.innerHeight;
                Me.hidden ? (Tl = l,
                El = u) : (Tl !== l || El !== u) && kr()
            }
            , Me, "DOMContentLoaded", Cs, le, "load", Cs, le, "resize", kr],
            vn(tt),
            re.forEach(function(l) {
                return l.enable(0, 1)
            }),
            o = 0; o < ne.length; o += 3)
                yn(et, ne[o], ne[o + 1]),
                yn(et, ne[o], ne[o + 2])
        }
    }
    ,
    r.config = function(i) {
        "limitCallbacks"in i && (Aa = !!i.limitCallbacks);
        var s = i.syncInterval;
        s && clearInterval(gn) || (gn = s) && setInterval(Dl, s),
        "ignoreMobileResize"in i && (co = r.isTouch === 1 && i.ignoreMobileResize),
        "autoRefreshEvents"in i && (vn(et) || vn(tt, i.autoRefreshEvents || "none"),
        Cc = (i.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    r.scrollerProxy = function(i, s) {
        var n = Ft(i)
          , a = ne.indexOf(n)
          , o = Bs(n);
        ~a && ne.splice(a, o ? 6 : 2),
        s && (o ? Fi.unshift(le, s, Ce, s, wi, s) : Fi.unshift(n, s))
    }
    ,
    r.clearMatchMedia = function(i) {
        re.forEach(function(s) {
            return s._ctx && s._ctx.query === i && s._ctx.kill(!0, !0)
        })
    }
    ,
    r.isInViewport = function(i, s, n) {
        var a = (jt(i) ? Ft(i) : i).getBoundingClientRect()
          , o = a[n ? Ms : Is] * s || 0;
        return n ? a.right - o > 0 && a.left + o < le.innerWidth : a.bottom - o > 0 && a.top + o < le.innerHeight
    }
    ,
    r.positionInViewport = function(i, s, n) {
        jt(i) && (i = Ft(i));
        var a = i.getBoundingClientRect()
          , o = a[n ? Ms : Is]
          , l = s == null ? o / 2 : s in Jn ? Jn[s] * o : ~s.indexOf("%") ? parseFloat(s) * o / 100 : parseFloat(s) || 0;
        return n ? (a.left + l) / le.innerWidth : (a.top + l) / le.innerHeight
    }
    ,
    r.killAll = function(i) {
        if (re.slice(0).forEach(function(n) {
            return n.vars.id !== "ScrollSmoother" && n.kill()
        }),
        i !== !0) {
            var s = Rs.killAll || [];
            Rs = {},
            s.forEach(function(n) {
                return n()
            })
        }
    }
    ,
    r
}();
ae.version = "3.12.5";
ae.saveStyles = function(r) {
    return r ? Qr(r).forEach(function(e) {
        if (e && e.style) {
            var t = Wt.indexOf(e);
            t >= 0 && Wt.splice(t, 5),
            Wt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), N.core.getCache(e), fo())
        }
    }) : Wt
}
;
ae.revert = function(r, e) {
    return Uo(!r, e)
}
;
ae.create = function(r, e) {
    return new ae(r,e)
}
;
ae.refresh = function(r) {
    return r ? kr() : (Ys || ae.register()) && Cs(!0)
}
;
ae.update = function(r) {
    return ++ne.cache && qi(r === !0 ? 2 : 0)
}
;
ae.clearScrollMemory = Bc;
ae.maxScroll = function(r, e) {
    return Ii(r, e ? Ot : Xe)
}
;
ae.getScrollFunc = function(r, e) {
    return ds(Ft(r), e ? Ot : Xe)
}
;
ae.getById = function(r) {
    return po[r]
}
;
ae.getAll = function() {
    return re.filter(function(r) {
        return r.vars.id !== "ScrollSmoother"
    })
}
;
ae.isScrolling = function() {
    return !!di
}
;
ae.snapDirectional = jo;
ae.addEventListener = function(r, e) {
    var t = Rs[r] || (Rs[r] = []);
    ~t.indexOf(e) || t.push(e)
}
;
ae.removeEventListener = function(r, e) {
    var t = Rs[r]
      , i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1)
}
;
ae.batch = function(r, e) {
    var t = [], i = {}, s = e.interval || .016, n = e.batchMax || 1e9, a = function(u, c) {
        var f = []
          , p = []
          , d = N.delayedCall(s, function() {
            c(f, p),
            f = [],
            p = []
        }).pause();
        return function(g) {
            f.length || d.restart(!0),
            f.push(g.trigger),
            p.push(g),
            n <= f.length && d.progress(1)
        }
    }, o;
    for (o in e)
        i[o] = o.substr(0, 2) === "on" && Mt(e[o]) && o !== "onRefreshInit" ? a(o, e[o]) : e[o];
    return Mt(n) && (n = n(),
    tt(ae, "refresh", function() {
        return n = e.batchMax()
    })),
    Qr(r).forEach(function(l) {
        var u = {};
        for (o in i)
            u[o] = i[o];
        u.trigger = l,
        t.push(ae.create(u))
    }),
    t
}
;
var Vl = function(e, t, i, s) {
    return t > s ? e(s) : t < 0 && e(0),
    i > s ? (s - t) / (i - t) : i < 0 ? t / (t - i) : 1
}, Da = function r(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Ve.isTouch ? " pinch-zoom" : "") : "none",
    e === wi && r(Ce, t)
}, Cn = {
    auto: 1,
    scroll: 1
}, Jf = function(e) {
    var t = e.event, i = e.target, s = e.axis, n = (t.changedTouches ? t.changedTouches[0] : t).target, a = n._gsap || N.core.getCache(n), o = mt(), l;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (; n && n !== Ce && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Cn[(l = li(n)).overflowY] || Cn[l.overflowX])); )
            n = n.parentNode;
        a._isScroll = n && n !== i && !Bs(n) && (Cn[(l = li(n)).overflowY] || Cn[l.overflowX]),
        a._isScrollT = o
    }
    (a._isScroll || s === "x") && (t.stopPropagation(),
    t._gsapAllow = !0)
}, Vc = function(e, t, i, s) {
    return Ve.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: s = s && Jf,
        onPress: s,
        onDrag: s,
        onScroll: s,
        onEnable: function() {
            return i && tt(Me, Ve.eventTypes[0], Nl, !1, !0)
        },
        onDisable: function() {
            return et(Me, Ve.eventTypes[0], Nl, !0)
        }
    })
}, eh = /(input|label|select|textarea)/i, zl, Nl = function(e) {
    var t = eh.test(e.target.tagName);
    (t || zl) && (e._gsapAllow = !0,
    zl = t)
}, th = function(e) {
    ws(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var t = e, i = t.normalizeScrollX, s = t.momentum, n = t.allowNestedScroll, a = t.onRelease, o, l, u = Ft(e.target) || wi, c = N.core.globals().ScrollSmoother, f = c && c.get(), p = Zi && (e.content && Ft(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), d = ds(u, Xe), g = ds(u, Ot), h = 1, _ = (Ve.isTouch && le.visualViewport ? le.visualViewport.scale * le.visualViewport.width : le.outerWidth) / le.innerWidth, y = 0, v = Mt(s) ? function() {
        return s(o)
    }
    : function() {
        return s || 2.8
    }
    , b, m, w = Vc(u, e.type, !0, n), S = function() {
        return m = !1
    }, T = ki, k = ki, E = function() {
        l = Ii(u, Xe),
        k = Br(Zi ? 1 : 0, l),
        i && (T = Br(0, Ii(u, Ot))),
        b = Ls
    }, C = function() {
        p._gsap.y = Tr(parseFloat(p._gsap.y) + d.offset) + "px",
        p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)",
        d.offset = d.cacheID = 0
    }, O = function() {
        if (m) {
            requestAnimationFrame(S);
            var F = Tr(o.deltaY / 2)
              , U = k(d.v - F);
            if (p && U !== d.v + d.offset) {
                d.offset = U - d.v;
                var x = Tr((parseFloat(p && p._gsap.y) || 0) - d.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + x + ", 0, 1)",
                p._gsap.y = x + "px",
                d.cacheID = ne.cache,
                qi()
            }
            return !0
        }
        d.offset && C(),
        m = !0
    }, A, I, D, P, B = function() {
        E(),
        A.isActive() && A.vars.scrollY > l && (d() > l ? A.progress(1) && d(l) : A.resetTo("scrollY", l))
    };
    return p && N.set(p, {
        y: "+=0"
    }),
    e.ignoreCheck = function(V) {
        return Zi && V.type === "touchmove" && O() || h > 1.05 && V.type !== "touchstart" || o.isGesturing || V.touches && V.touches.length > 1
    }
    ,
    e.onPress = function() {
        m = !1;
        var V = h;
        h = Tr((le.visualViewport && le.visualViewport.scale || 1) / _),
        A.pause(),
        V !== h && Da(u, h > 1.01 ? !0 : i ? !1 : "x"),
        I = g(),
        D = d(),
        E(),
        b = Ls
    }
    ,
    e.onRelease = e.onGestureStart = function(V, F) {
        if (d.offset && C(),
        !F)
            P.restart(!0);
        else {
            ne.cache++;
            var U = v(), x, J;
            i && (x = g(),
            J = x + U * .05 * -V.velocityX / .227,
            U *= Vl(g, x, J, Ii(u, Ot)),
            A.vars.scrollX = T(J)),
            x = d(),
            J = x + U * .05 * -V.velocityY / .227,
            U *= Vl(d, x, J, Ii(u, Xe)),
            A.vars.scrollY = k(J),
            A.invalidate().duration(U).play(.01),
            (Zi && A.vars.scrollY >= l || x >= l - 1) && N.to({}, {
                onUpdate: B,
                duration: U
            })
        }
        a && a(V)
    }
    ,
    e.onWheel = function() {
        A._ts && A.pause(),
        mt() - y > 1e3 && (b = 0,
        y = mt())
    }
    ,
    e.onChange = function(V, F, U, x, J) {
        if (Ls !== b && E(),
        F && i && g(T(x[2] === F ? I + (V.startX - V.x) : g() + F - x[1])),
        U) {
            d.offset && C();
            var de = J[2] === U
              , Ge = de ? D + V.startY - V.y : d() + U - J[1]
              , ce = k(Ge);
            de && Ge !== ce && (D += ce - Ge),
            d(ce)
        }
        (U || F) && qi()
    }
    ,
    e.onEnable = function() {
        Da(u, i ? !1 : "x"),
        ae.addEventListener("refresh", B),
        tt(le, "resize", B),
        d.smooth && (d.target.style.scrollBehavior = "auto",
        d.smooth = g.smooth = !1),
        w.enable()
    }
    ,
    e.onDisable = function() {
        Da(u, !0),
        et(le, "resize", B),
        ae.removeEventListener("refresh", B),
        w.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    o = new Ve(e),
    o.iOS = Zi,
    Zi && !d() && d(1),
    Zi && N.ticker.add(ki),
    P = o._dc,
    A = N.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: $c(d, d(), function() {
                return A.pause()
            })
        },
        onUpdate: qi,
        onComplete: P.vars.onComplete
    }),
    o
};
ae.sort = function(r) {
    return re.sort(r || function(e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
ae.observe = function(r) {
    return new Ve(r)
}
;
ae.normalizeScroll = function(r) {
    if (typeof r > "u")
        return Tt;
    if (r === !0 && Tt)
        return Tt.enable();
    if (r === !1) {
        Tt && Tt.kill(),
        Tt = r;
        return
    }
    var e = r instanceof Ve ? r : th(r);
    return Tt && Tt.target === e.target && Tt.kill(),
    Bs(e.target) && (Tt = e),
    e
}
;
ae.core = {
    _getVelocityProp: lo,
    _inputObserver: Vc,
    _scrollers: ne,
    _proxies: Fi,
    bridge: {
        ss: function() {
            di || $s("scrollStart"),
            di = mt()
        },
        ref: function() {
            return gt
        }
    }
};
Ac() && N.registerPlugin(ae);
function ls(r) {
    return typeof r == "string" || r instanceof String
}
function Hl(r) {
    var e;
    return typeof r == "object" && r != null && (r == null || (e = r.constructor) == null ? void 0 : e.name) === "Object"
}
function zc(r, e) {
    return Array.isArray(e) ? zc(r, (t, i) => e.includes(i)) : Object.entries(r).reduce( (t, i) => {
        let[s,n] = i;
        return e(n, s) && (t[s] = n),
        t
    }
    , {})
}
const H = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
};
function ih(r) {
    switch (r) {
    case H.LEFT:
        return H.FORCE_LEFT;
    case H.RIGHT:
        return H.FORCE_RIGHT;
    default:
        return r
    }
}
function Pa(r) {
    return r.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
}
function ea(r, e) {
    if (e === r)
        return !0;
    const t = Array.isArray(e)
      , i = Array.isArray(r);
    let s;
    if (t && i) {
        if (e.length != r.length)
            return !1;
        for (s = 0; s < e.length; s++)
            if (!ea(e[s], r[s]))
                return !1;
        return !0
    }
    if (t != i)
        return !1;
    if (e && r && typeof e == "object" && typeof r == "object") {
        const n = e instanceof Date
          , a = r instanceof Date;
        if (n && a)
            return e.getTime() == r.getTime();
        if (n != a)
            return !1;
        const o = e instanceof RegExp
          , l = r instanceof RegExp;
        if (o && l)
            return e.toString() == r.toString();
        if (o != l)
            return !1;
        const u = Object.keys(e);
        for (s = 0; s < u.length; s++)
            if (!Object.prototype.hasOwnProperty.call(r, u[s]))
                return !1;
        for (s = 0; s < u.length; s++)
            if (!ea(r[u[s]], e[u[s]]))
                return !1;
        return !0
    } else if (e && r && typeof e == "function" && typeof r == "function")
        return e.toString() === r.toString();
    return !1
}
class sh {
    constructor(e) {
        for (Object.assign(this, e); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); )
            --this.oldSelection.start;
        if (this.insertedCount)
            for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end); )
                this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos
    }
    get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start)
    }
    get insertedCount() {
        return this.cursorPos - this.startChangePos
    }
    get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount)
    }
    get removedCount() {
        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
    }
    get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount)
    }
    get head() {
        return this.value.substring(0, this.startChangePos)
    }
    get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount)
    }
    get removeDirection() {
        return !this.removedCount || this.insertedCount ? H.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? H.RIGHT : H.LEFT
    }
}
function K(r, e) {
    return new K.InputMask(r,e)
}
function Nc(r) {
    if (r == null)
        throw new Error("mask property should be defined");
    return r instanceof RegExp ? K.MaskedRegExp : ls(r) ? K.MaskedPattern : r === Date ? K.MaskedDate : r === Number ? K.MaskedNumber : Array.isArray(r) || r === Array ? K.MaskedDynamic : K.Masked && r.prototype instanceof K.Masked ? r : K.Masked && r instanceof K.Masked ? r.constructor : r instanceof Function ? K.MaskedFunction : (console.warn("Mask not found for mask", r),
    K.Masked)
}
function en(r) {
    if (!r)
        throw new Error("Options in not defined");
    if (K.Masked) {
        if (r.prototype instanceof K.Masked)
            return {
                mask: r
            };
        const {mask: e=void 0, ...t} = r instanceof K.Masked ? {
            mask: r
        } : Hl(r) && r.mask instanceof K.Masked ? r : {};
        if (e) {
            const i = e.mask;
            return {
                ...zc(e, (s, n) => !n.startsWith("_")),
                mask: e.constructor,
                _mask: i,
                ...t
            }
        }
    }
    return Hl(r) ? {
        ...r
    } : {
        mask: r
    }
}
function Xi(r) {
    if (K.Masked && r instanceof K.Masked)
        return r;
    const e = en(r)
      , t = Nc(e.mask);
    if (!t)
        throw new Error("Masked class is not found for provided mask " + e.mask + ", appropriate module needs to be imported manually before creating mask.");
    return e.mask === t && delete e.mask,
    e._mask && (e.mask = e._mask,
    delete e._mask),
    new t(e)
}
K.createMask = Xi;
class Xo {
    get selectionStart() {
        let e;
        try {
            e = this._unsafeSelectionStart
        } catch {}
        return e ?? this.value.length
    }
    get selectionEnd() {
        let e;
        try {
            e = this._unsafeSelectionEnd
        } catch {}
        return e ?? this.value.length
    }
    select(e, t) {
        if (!(e == null || t == null || e === this.selectionStart && t === this.selectionEnd))
            try {
                this._unsafeSelect(e, t)
            } catch {}
    }
    get isActive() {
        return !1
    }
}
K.MaskElement = Xo;
const Gl = 90
  , rh = 89;
class da extends Xo {
    constructor(e) {
        super(),
        this.input = e,
        this._onKeydown = this._onKeydown.bind(this),
        this._onInput = this._onInput.bind(this),
        this._onBeforeinput = this._onBeforeinput.bind(this),
        this._onCompositionEnd = this._onCompositionEnd.bind(this)
    }
    get rootElement() {
        var e, t, i;
        return (e = (t = (i = this.input).getRootNode) == null ? void 0 : t.call(i)) != null ? e : document
    }
    get isActive() {
        return this.input === this.rootElement.activeElement
    }
    bindEvents(e) {
        this.input.addEventListener("keydown", this._onKeydown),
        this.input.addEventListener("input", this._onInput),
        this.input.addEventListener("beforeinput", this._onBeforeinput),
        this.input.addEventListener("compositionend", this._onCompositionEnd),
        this.input.addEventListener("drop", e.drop),
        this.input.addEventListener("click", e.click),
        this.input.addEventListener("focus", e.focus),
        this.input.addEventListener("blur", e.commit),
        this._handlers = e
    }
    _onKeydown(e) {
        if (this._handlers.redo && (e.keyCode === Gl && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === rh && e.ctrlKey))
            return e.preventDefault(),
            this._handlers.redo(e);
        if (this._handlers.undo && e.keyCode === Gl && (e.metaKey || e.ctrlKey))
            return e.preventDefault(),
            this._handlers.undo(e);
        e.isComposing || this._handlers.selectionChange(e)
    }
    _onBeforeinput(e) {
        if (e.inputType === "historyUndo" && this._handlers.undo)
            return e.preventDefault(),
            this._handlers.undo(e);
        if (e.inputType === "historyRedo" && this._handlers.redo)
            return e.preventDefault(),
            this._handlers.redo(e)
    }
    _onCompositionEnd(e) {
        this._handlers.input(e)
    }
    _onInput(e) {
        e.isComposing || this._handlers.input(e)
    }
    unbindEvents() {
        this.input.removeEventListener("keydown", this._onKeydown),
        this.input.removeEventListener("input", this._onInput),
        this.input.removeEventListener("beforeinput", this._onBeforeinput),
        this.input.removeEventListener("compositionend", this._onCompositionEnd),
        this.input.removeEventListener("drop", this._handlers.drop),
        this.input.removeEventListener("click", this._handlers.click),
        this.input.removeEventListener("focus", this._handlers.focus),
        this.input.removeEventListener("blur", this._handlers.commit),
        this._handlers = {}
    }
}
K.HTMLMaskElement = da;
class nh extends da {
    constructor(e) {
        super(e),
        this.input = e
    }
    get _unsafeSelectionStart() {
        return this.input.selectionStart != null ? this.input.selectionStart : this.value.length
    }
    get _unsafeSelectionEnd() {
        return this.input.selectionEnd
    }
    _unsafeSelect(e, t) {
        this.input.setSelectionRange(e, t)
    }
    get value() {
        return this.input.value
    }
    set value(e) {
        this.input.value = e
    }
}
K.HTMLMaskElement = da;
class Hc extends da {
    get _unsafeSelectionStart() {
        const e = this.rootElement
          , t = e.getSelection && e.getSelection()
          , i = t && t.anchorOffset
          , s = t && t.focusOffset;
        return s == null || i == null || i < s ? i : s
    }
    get _unsafeSelectionEnd() {
        const e = this.rootElement
          , t = e.getSelection && e.getSelection()
          , i = t && t.anchorOffset
          , s = t && t.focusOffset;
        return s == null || i == null || i > s ? i : s
    }
    _unsafeSelect(e, t) {
        if (!this.rootElement.createRange)
            return;
        const i = this.rootElement.createRange();
        i.setStart(this.input.firstChild || this.input, e),
        i.setEnd(this.input.lastChild || this.input, t);
        const s = this.rootElement
          , n = s.getSelection && s.getSelection();
        n && (n.removeAllRanges(),
        n.addRange(i))
    }
    get value() {
        return this.input.textContent || ""
    }
    set value(e) {
        this.input.textContent = e
    }
}
K.HTMLContenteditableMaskElement = Hc;
class fa {
    constructor() {
        this.states = [],
        this.currentIndex = 0
    }
    get currentState() {
        return this.states[this.currentIndex]
    }
    get isEmpty() {
        return this.states.length === 0
    }
    push(e) {
        this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1),
        this.states.push(e),
        this.states.length > fa.MAX_LENGTH && this.states.shift(),
        this.currentIndex = this.states.length - 1
    }
    go(e) {
        return this.currentIndex = Math.min(Math.max(this.currentIndex + e, 0), this.states.length - 1),
        this.currentState
    }
    undo() {
        return this.go(-1)
    }
    redo() {
        return this.go(1)
    }
    clear() {
        this.states.length = 0,
        this.currentIndex = 0
    }
}
fa.MAX_LENGTH = 100;
class ah {
    constructor(e, t) {
        this.el = e instanceof Xo ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Hc(e) : new nh(e),
        this.masked = Xi(t),
        this._listeners = {},
        this._value = "",
        this._unmaskedValue = "",
        this._rawInputValue = "",
        this.history = new fa,
        this._saveSelection = this._saveSelection.bind(this),
        this._onInput = this._onInput.bind(this),
        this._onChange = this._onChange.bind(this),
        this._onDrop = this._onDrop.bind(this),
        this._onFocus = this._onFocus.bind(this),
        this._onClick = this._onClick.bind(this),
        this._onUndo = this._onUndo.bind(this),
        this._onRedo = this._onRedo.bind(this),
        this.alignCursor = this.alignCursor.bind(this),
        this.alignCursorFriendly = this.alignCursorFriendly.bind(this),
        this._bindEvents(),
        this.updateValue(),
        this._onChange()
    }
    maskEquals(e) {
        var t;
        return e == null || ((t = this.masked) == null ? void 0 : t.maskEquals(e))
    }
    get mask() {
        return this.masked.mask
    }
    set mask(e) {
        if (this.maskEquals(e))
            return;
        if (!(e instanceof K.Masked) && this.masked.constructor === Nc(e)) {
            this.masked.updateOptions({
                mask: e
            });
            return
        }
        const t = e instanceof K.Masked ? e : Xi({
            mask: e
        });
        t.unmaskedValue = this.masked.unmaskedValue,
        this.masked = t
    }
    get value() {
        return this._value
    }
    set value(e) {
        this.value !== e && (this.masked.value = e,
        this.updateControl("auto"))
    }
    get unmaskedValue() {
        return this._unmaskedValue
    }
    set unmaskedValue(e) {
        this.unmaskedValue !== e && (this.masked.unmaskedValue = e,
        this.updateControl("auto"))
    }
    get rawInputValue() {
        return this._rawInputValue
    }
    set rawInputValue(e) {
        this.rawInputValue !== e && (this.masked.rawInputValue = e,
        this.updateControl(),
        this.alignCursor())
    }
    get typedValue() {
        return this.masked.typedValue
    }
    set typedValue(e) {
        this.masked.typedValueEquals(e) || (this.masked.typedValue = e,
        this.updateControl("auto"))
    }
    get displayValue() {
        return this.masked.displayValue
    }
    _bindEvents() {
        this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange,
            undo: this._onUndo,
            redo: this._onRedo
        })
    }
    _unbindEvents() {
        this.el && this.el.unbindEvents()
    }
    _fireEvent(e, t) {
        const i = this._listeners[e];
        i && i.forEach(s => s(t))
    }
    get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
    }
    get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
    }
    set cursorPos(e) {
        !this.el || !this.el.isActive || (this.el.select(e, e),
        this._saveSelection())
    }
    _saveSelection() {
        this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),
        this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
        }
    }
    updateValue() {
        this.masked.value = this.el.value,
        this._value = this.masked.value
    }
    updateControl(e) {
        const t = this.masked.unmaskedValue
          , i = this.masked.value
          , s = this.masked.rawInputValue
          , n = this.displayValue
          , a = this.unmaskedValue !== t || this.value !== i || this._rawInputValue !== s;
        this._unmaskedValue = t,
        this._value = i,
        this._rawInputValue = s,
        this.el.value !== n && (this.el.value = n),
        e === "auto" ? this.alignCursor() : e != null && (this.cursorPos = e),
        a && this._fireChangeEvents(),
        !this._historyChanging && (a || this.history.isEmpty) && this.history.push({
            unmaskedValue: t,
            selection: {
                start: this.selectionStart,
                end: this.cursorPos
            }
        })
    }
    updateOptions(e) {
        const {mask: t, ...i} = e
          , s = !this.maskEquals(t)
          , n = this.masked.optionsIsChanged(i);
        s && (this.mask = t),
        n && this.masked.updateOptions(i),
        (s || n) && this.updateControl()
    }
    updateCursor(e) {
        e != null && (this.cursorPos = e,
        this._delayUpdateCursor(e))
    }
    _delayUpdateCursor(e) {
        this._abortUpdateCursor(),
        this._changingCursorPos = e,
        this._cursorChanging = setTimeout( () => {
            this.el && (this.cursorPos = this._changingCursorPos,
            this._abortUpdateCursor())
        }
        , 10)
    }
    _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent),
        this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
    }
    _abortUpdateCursor() {
        this._cursorChanging && (clearTimeout(this._cursorChanging),
        delete this._cursorChanging)
    }
    alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, H.LEFT))
    }
    alignCursorFriendly() {
        this.selectionStart === this.cursorPos && this.alignCursor()
    }
    on(e, t) {
        return this._listeners[e] || (this._listeners[e] = []),
        this._listeners[e].push(t),
        this
    }
    off(e, t) {
        if (!this._listeners[e])
            return this;
        if (!t)
            return delete this._listeners[e],
            this;
        const i = this._listeners[e].indexOf(t);
        return i >= 0 && this._listeners[e].splice(i, 1),
        this
    }
    _onInput(e) {
        this._inputEvent = e,
        this._abortUpdateCursor();
        const t = new sh({
            value: this.el.value,
            cursorPos: this.cursorPos,
            oldValue: this.displayValue,
            oldSelection: this._selection
        })
          , i = this.masked.rawInputValue
          , s = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
            input: !0,
            raw: !0
        }).offset
          , n = i === this.masked.rawInputValue ? t.removeDirection : H.NONE;
        let a = this.masked.nearestInputPos(t.startChangePos + s, n);
        n !== H.NONE && (a = this.masked.nearestInputPos(a, H.NONE)),
        this.updateControl(a),
        delete this._inputEvent
    }
    _onChange() {
        this.displayValue !== this.el.value && this.updateValue(),
        this.masked.doCommit(),
        this.updateControl(),
        this._saveSelection()
    }
    _onDrop(e) {
        e.preventDefault(),
        e.stopPropagation()
    }
    _onFocus(e) {
        this.alignCursorFriendly()
    }
    _onClick(e) {
        this.alignCursorFriendly()
    }
    _onUndo() {
        this._applyHistoryState(this.history.undo())
    }
    _onRedo() {
        this._applyHistoryState(this.history.redo())
    }
    _applyHistoryState(e) {
        e && (this._historyChanging = !0,
        this.unmaskedValue = e.unmaskedValue,
        this.el.select(e.selection.start, e.selection.end),
        this._saveSelection(),
        this._historyChanging = !1)
    }
    destroy() {
        this._unbindEvents(),
        this._listeners.length = 0,
        delete this.el
    }
}
K.InputMask = ah;
class te {
    static normalize(e) {
        return Array.isArray(e) ? e : [e, new te]
    }
    constructor(e) {
        Object.assign(this, {
            inserted: "",
            rawInserted: "",
            tailShift: 0,
            skip: !1
        }, e)
    }
    aggregate(e) {
        return this.inserted += e.inserted,
        this.rawInserted += e.rawInserted,
        this.tailShift += e.tailShift,
        this.skip = this.skip || e.skip,
        this
    }
    get offset() {
        return this.tailShift + this.inserted.length
    }
    get consumed() {
        return !!this.rawInserted || this.skip
    }
    equals(e) {
        return this.inserted === e.inserted && this.tailShift === e.tailShift && this.rawInserted === e.rawInserted && this.skip === e.skip
    }
}
K.ChangeDetails = te;
class Li {
    constructor(e, t, i) {
        e === void 0 && (e = ""),
        t === void 0 && (t = 0),
        this.value = e,
        this.from = t,
        this.stop = i
    }
    toString() {
        return this.value
    }
    extend(e) {
        this.value += String(e)
    }
    appendTo(e) {
        return e.append(this.toString(), {
            tail: !0
        }).aggregate(e._appendPlaceholder())
    }
    get state() {
        return {
            value: this.value,
            from: this.from,
            stop: this.stop
        }
    }
    set state(e) {
        Object.assign(this, e)
    }
    unshift(e) {
        if (!this.value.length || e != null && this.from >= e)
            return "";
        const t = this.value[0];
        return this.value = this.value.slice(1),
        t
    }
    shift() {
        if (!this.value.length)
            return "";
        const e = this.value[this.value.length - 1];
        return this.value = this.value.slice(0, -1),
        e
    }
}
class bt {
    constructor(e) {
        this._value = "",
        this._update({
            ...bt.DEFAULTS,
            ...e
        }),
        this._initialized = !0
    }
    updateOptions(e) {
        this.optionsIsChanged(e) && this.withValueRefresh(this._update.bind(this, e))
    }
    _update(e) {
        Object.assign(this, e)
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue
        }
    }
    set state(e) {
        this._value = e._value
    }
    reset() {
        this._value = ""
    }
    get value() {
        return this._value
    }
    set value(e) {
        this.resolve(e, {
            input: !0
        })
    }
    resolve(e, t) {
        t === void 0 && (t = {
            input: !0
        }),
        this.reset(),
        this.append(e, t, ""),
        this.doCommit()
    }
    get unmaskedValue() {
        return this.value
    }
    set unmaskedValue(e) {
        this.resolve(e, {})
    }
    get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue
    }
    set typedValue(e) {
        this.format ? this.value = this.format(e, this) : this.unmaskedValue = String(e)
    }
    get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, {
            raw: !0
        })
    }
    set rawInputValue(e) {
        this.resolve(e, {
            raw: !0
        })
    }
    get displayValue() {
        return this.value
    }
    get isComplete() {
        return !0
    }
    get isFilled() {
        return this.isComplete
    }
    nearestInputPos(e, t) {
        return e
    }
    totalInputPositions(e, t) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        Math.min(this.displayValue.length, t - e)
    }
    extractInput(e, t, i) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        this.displayValue.slice(e, t)
    }
    extractTail(e, t) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        new Li(this.extractInput(e, t),e)
    }
    appendTail(e) {
        return ls(e) && (e = new Li(String(e))),
        e.appendTo(this)
    }
    _appendCharRaw(e, t) {
        return e ? (this._value += e,
        new te({
            inserted: e,
            rawInserted: e
        })) : new te
    }
    _appendChar(e, t, i) {
        t === void 0 && (t = {});
        const s = this.state;
        let n;
        if ([e,n] = this.doPrepareChar(e, t),
        e && (n = n.aggregate(this._appendCharRaw(e, t)),
        !n.rawInserted && this.autofix === "pad")) {
            const a = this.state;
            this.state = s;
            let o = this.pad(t);
            const l = this._appendCharRaw(e, t);
            o = o.aggregate(l),
            l.rawInserted || o.equals(n) ? n = o : this.state = a
        }
        if (n.inserted) {
            let a, o = this.doValidate(t) !== !1;
            if (o && i != null) {
                const l = this.state;
                if (this.overwrite === !0) {
                    a = i.state;
                    for (let c = 0; c < n.rawInserted.length; ++c)
                        i.unshift(this.displayValue.length - n.tailShift)
                }
                let u = this.appendTail(i);
                if (o = u.rawInserted.length === i.toString().length,
                !(o && u.inserted) && this.overwrite === "shift") {
                    this.state = l,
                    a = i.state;
                    for (let c = 0; c < n.rawInserted.length; ++c)
                        i.shift();
                    u = this.appendTail(i),
                    o = u.rawInserted.length === i.toString().length
                }
                o && u.inserted && (this.state = l)
            }
            o || (n = new te,
            this.state = s,
            i && a && (i.state = a))
        }
        return n
    }
    _appendPlaceholder() {
        return new te
    }
    _appendEager() {
        return new te
    }
    append(e, t, i) {
        if (!ls(e))
            throw new Error("value should be string");
        const s = ls(i) ? new Li(String(i)) : i;
        t != null && t.tail && (t._beforeTailState = this.state);
        let n;
        [e,n] = this.doPrepare(e, t);
        for (let a = 0; a < e.length; ++a) {
            const o = this._appendChar(e[a], t, s);
            if (!o.rawInserted && !this.doSkipInvalid(e[a], t, s))
                break;
            n.aggregate(o)
        }
        return (this.eager === !0 || this.eager === "append") && t != null && t.input && e && n.aggregate(this._appendEager()),
        s != null && (n.tailShift += this.appendTail(s).tailShift),
        n
    }
    remove(e, t) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t),
        new te
    }
    withValueRefresh(e) {
        if (this._refreshing || !this._initialized)
            return e();
        this._refreshing = !0;
        const t = this.rawInputValue
          , i = this.value
          , s = e();
        return this.rawInputValue = t,
        this.value && this.value !== i && i.indexOf(this.value) === 0 && (this.append(i.slice(this.displayValue.length), {}, ""),
        this.doCommit()),
        delete this._refreshing,
        s
    }
    runIsolated(e) {
        if (this._isolated || !this._initialized)
            return e(this);
        this._isolated = !0;
        const t = this.state
          , i = e(this);
        return this.state = t,
        delete this._isolated,
        i
    }
    doSkipInvalid(e, t, i) {
        return !!this.skipInvalid
    }
    doPrepare(e, t) {
        return t === void 0 && (t = {}),
        te.normalize(this.prepare ? this.prepare(e, this, t) : e)
    }
    doPrepareChar(e, t) {
        return t === void 0 && (t = {}),
        te.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e)
    }
    doValidate(e) {
        return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e))
    }
    doCommit() {
        this.commit && this.commit(this.value, this)
    }
    splice(e, t, i, s, n) {
        i === void 0 && (i = ""),
        s === void 0 && (s = H.NONE),
        n === void 0 && (n = {
            input: !0
        });
        const a = e + t
          , o = this.extractTail(a)
          , l = this.eager === !0 || this.eager === "remove";
        let u;
        l && (s = ih(s),
        u = this.extractInput(0, a, {
            raw: !0
        }));
        let c = e;
        const f = new te;
        if (s !== H.NONE && (c = this.nearestInputPos(e, t > 1 && e !== 0 && !l ? H.NONE : s),
        f.tailShift = c - e),
        f.aggregate(this.remove(c)),
        l && s !== H.NONE && u === this.rawInputValue)
            if (s === H.FORCE_LEFT) {
                let p;
                for (; u === this.rawInputValue && (p = this.displayValue.length); )
                    f.aggregate(new te({
                        tailShift: -1
                    })).aggregate(this.remove(p - 1))
            } else
                s === H.FORCE_RIGHT && o.unshift();
        return f.aggregate(this.append(i, n, o))
    }
    maskEquals(e) {
        return this.mask === e
    }
    optionsIsChanged(e) {
        return !ea(this, e)
    }
    typedValueEquals(e) {
        const t = this.typedValue;
        return e === t || bt.EMPTY_VALUES.includes(e) && bt.EMPTY_VALUES.includes(t) || (this.format ? this.format(e, this) === this.format(this.typedValue, this) : !1)
    }
    pad(e) {
        return new te
    }
}
bt.DEFAULTS = {
    skipInvalid: !0
};
bt.EMPTY_VALUES = [void 0, null, ""];
K.Masked = bt;
class Ts {
    constructor(e, t) {
        e === void 0 && (e = []),
        t === void 0 && (t = 0),
        this.chunks = e,
        this.from = t
    }
    toString() {
        return this.chunks.map(String).join("")
    }
    extend(e) {
        if (!String(e))
            return;
        e = ls(e) ? new Li(String(e)) : e;
        const t = this.chunks[this.chunks.length - 1]
          , i = t && (t.stop === e.stop || e.stop == null) && e.from === t.from + t.toString().length;
        if (e instanceof Li)
            i ? t.extend(e.toString()) : this.chunks.push(e);
        else if (e instanceof Ts) {
            if (e.stop == null) {
                let s;
                for (; e.chunks.length && e.chunks[0].stop == null; )
                    s = e.chunks.shift(),
                    s.from += e.from,
                    this.extend(s)
            }
            e.toString() && (e.stop = e.blockIndex,
            this.chunks.push(e))
        }
    }
    appendTo(e) {
        if (!(e instanceof K.MaskedPattern))
            return new Li(this.toString()).appendTo(e);
        const t = new te;
        for (let i = 0; i < this.chunks.length; ++i) {
            const s = this.chunks[i]
              , n = e._mapPosToBlock(e.displayValue.length)
              , a = s.stop;
            let o;
            if (a != null && (!n || n.index <= a) && ((s instanceof Ts || e._stops.indexOf(a) >= 0) && t.aggregate(e._appendPlaceholder(a)),
            o = s instanceof Ts && e._blocks[a]),
            o) {
                const l = o.appendTail(s);
                t.aggregate(l);
                const u = s.toString().slice(l.rawInserted.length);
                u && t.aggregate(e.append(u, {
                    tail: !0
                }))
            } else
                t.aggregate(e.append(s.toString(), {
                    tail: !0
                }))
        }
        return t
    }
    get state() {
        return {
            chunks: this.chunks.map(e => e.state),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
        }
    }
    set state(e) {
        const {chunks: t, ...i} = e;
        Object.assign(this, i),
        this.chunks = t.map(s => {
            const n = "chunks"in s ? new Ts : new Li;
            return n.state = s,
            n
        }
        )
    }
    unshift(e) {
        if (!this.chunks.length || e != null && this.from >= e)
            return "";
        const t = e != null ? e - this.from : e;
        let i = 0;
        for (; i < this.chunks.length; ) {
            const s = this.chunks[i]
              , n = s.unshift(t);
            if (s.toString()) {
                if (!n)
                    break;
                ++i
            } else
                this.chunks.splice(i, 1);
            if (n)
                return n
        }
        return ""
    }
    shift() {
        if (!this.chunks.length)
            return "";
        let e = this.chunks.length - 1;
        for (; 0 <= e; ) {
            const t = this.chunks[e]
              , i = t.shift();
            if (t.toString()) {
                if (!i)
                    break;
                --e
            } else
                this.chunks.splice(e, 1);
            if (i)
                return i
        }
        return ""
    }
}
class oh {
    constructor(e, t) {
        this.masked = e,
        this._log = [];
        const {offset: i, index: s} = e._mapPosToBlock(t) || (t < 0 ? {
            index: 0,
            offset: 0
        } : {
            index: this.masked._blocks.length,
            offset: 0
        });
        this.offset = i,
        this.index = s,
        this.ok = !1
    }
    get block() {
        return this.masked._blocks[this.index]
    }
    get pos() {
        return this.masked._blockStartPos(this.index) + this.offset
    }
    get state() {
        return {
            index: this.index,
            offset: this.offset,
            ok: this.ok
        }
    }
    set state(e) {
        Object.assign(this, e)
    }
    pushState() {
        this._log.push(this.state)
    }
    popState() {
        const e = this._log.pop();
        return e && (this.state = e),
        e
    }
    bindBlock() {
        this.block || (this.index < 0 && (this.index = 0,
        this.offset = 0),
        this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1,
        this.offset = this.block.displayValue.length))
    }
    _pushLeft(e) {
        for (this.pushState(),
        this.bindBlock(); 0 <= this.index; --this.index,
        this.offset = ((t = this.block) == null ? void 0 : t.displayValue.length) || 0) {
            var t;
            if (e())
                return this.ok = !0
        }
        return this.ok = !1
    }
    _pushRight(e) {
        for (this.pushState(),
        this.bindBlock(); this.index < this.masked._blocks.length; ++this.index,
        this.offset = 0)
            if (e())
                return this.ok = !0;
        return this.ok = !1
    }
    pushLeftBeforeFilled() {
        return this._pushLeft( () => {
            if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, H.FORCE_LEFT),
            this.offset !== 0))
                return !0
        }
        )
    }
    pushLeftBeforeInput() {
        return this._pushLeft( () => {
            if (!this.block.isFixed)
                return this.offset = this.block.nearestInputPos(this.offset, H.LEFT),
                !0
        }
        )
    }
    pushLeftBeforeRequired() {
        return this._pushLeft( () => {
            if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
                return this.offset = this.block.nearestInputPos(this.offset, H.LEFT),
                !0
        }
        )
    }
    pushRightBeforeFilled() {
        return this._pushRight( () => {
            if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, H.FORCE_RIGHT),
            this.offset !== this.block.value.length))
                return !0
        }
        )
    }
    pushRightBeforeInput() {
        return this._pushRight( () => {
            if (!this.block.isFixed)
                return this.offset = this.block.nearestInputPos(this.offset, H.NONE),
                !0
        }
        )
    }
    pushRightBeforeRequired() {
        return this._pushRight( () => {
            if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
                return this.offset = this.block.nearestInputPos(this.offset, H.NONE),
                !0
        }
        )
    }
}
class Gc {
    constructor(e) {
        Object.assign(this, e),
        this._value = "",
        this.isFixed = !0
    }
    get value() {
        return this._value
    }
    get unmaskedValue() {
        return this.isUnmasking ? this.value : ""
    }
    get rawInputValue() {
        return this._isRawInput ? this.value : ""
    }
    get displayValue() {
        return this.value
    }
    reset() {
        this._isRawInput = !1,
        this._value = ""
    }
    remove(e, t) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this._value.length),
        this._value = this._value.slice(0, e) + this._value.slice(t),
        this._value || (this._isRawInput = !1),
        new te
    }
    nearestInputPos(e, t) {
        t === void 0 && (t = H.NONE);
        const i = 0
          , s = this._value.length;
        switch (t) {
        case H.LEFT:
        case H.FORCE_LEFT:
            return i;
        case H.NONE:
        case H.RIGHT:
        case H.FORCE_RIGHT:
        default:
            return s
        }
    }
    totalInputPositions(e, t) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this._value.length),
        this._isRawInput ? t - e : 0
    }
    extractInput(e, t, i) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this._value.length),
        i === void 0 && (i = {}),
        i.raw && this._isRawInput && this._value.slice(e, t) || ""
    }
    get isComplete() {
        return !0
    }
    get isFilled() {
        return !!this._value
    }
    _appendChar(e, t) {
        if (t === void 0 && (t = {}),
        this.isFilled)
            return new te;
        const i = this.eager === !0 || this.eager === "append"
          , n = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !i) && !t.tail
          , a = new te({
            inserted: this.char,
            rawInserted: n ? this.char : ""
        });
        return this._value = this.char,
        this._isRawInput = n && (t.raw || t.input),
        a
    }
    _appendEager() {
        return this._appendChar(this.char, {
            tail: !0
        })
    }
    _appendPlaceholder() {
        const e = new te;
        return this.isFilled || (this._value = e.inserted = this.char),
        e
    }
    extractTail() {
        return new Li("")
    }
    appendTail(e) {
        return ls(e) && (e = new Li(String(e))),
        e.appendTo(this)
    }
    append(e, t, i) {
        const s = this._appendChar(e[0], t);
        return i != null && (s.tailShift += this.appendTail(i).tailShift),
        s
    }
    doCommit() {}
    get state() {
        return {
            _value: this._value,
            _rawInputValue: this.rawInputValue
        }
    }
    set state(e) {
        this._value = e._value,
        this._isRawInput = !!e._rawInputValue
    }
    pad(e) {
        return this._appendPlaceholder()
    }
}
class ta {
    constructor(e) {
        const {parent: t, isOptional: i, placeholderChar: s, displayChar: n, lazy: a, eager: o, ...l} = e;
        this.masked = Xi(l),
        Object.assign(this, {
            parent: t,
            isOptional: i,
            placeholderChar: s,
            displayChar: n,
            lazy: a,
            eager: o
        })
    }
    reset() {
        this.isFilled = !1,
        this.masked.reset()
    }
    remove(e, t) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.value.length),
        e === 0 && t >= 1 ? (this.isFilled = !1,
        this.masked.remove(e, t)) : new te
    }
    get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
    }
    get unmaskedValue() {
        return this.masked.unmaskedValue
    }
    get rawInputValue() {
        return this.masked.rawInputValue
    }
    get displayValue() {
        return this.masked.value && this.displayChar || this.value
    }
    get isComplete() {
        return !!this.masked.value || this.isOptional
    }
    _appendChar(e, t) {
        if (t === void 0 && (t = {}),
        this.isFilled)
            return new te;
        const i = this.masked.state;
        let s = this.masked._appendChar(e, this.currentMaskFlags(t));
        return s.inserted && this.doValidate(t) === !1 && (s = new te,
        this.masked.state = i),
        !s.inserted && !this.isOptional && !this.lazy && !t.input && (s.inserted = this.placeholderChar),
        s.skip = !s.inserted && !this.isOptional,
        this.isFilled = !!s.inserted,
        s
    }
    append(e, t, i) {
        return this.masked.append(e, this.currentMaskFlags(t), i)
    }
    _appendPlaceholder() {
        return this.isFilled || this.isOptional ? new te : (this.isFilled = !0,
        new te({
            inserted: this.placeholderChar
        }))
    }
    _appendEager() {
        return new te
    }
    extractTail(e, t) {
        return this.masked.extractTail(e, t)
    }
    appendTail(e) {
        return this.masked.appendTail(e)
    }
    extractInput(e, t, i) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.value.length),
        this.masked.extractInput(e, t, i)
    }
    nearestInputPos(e, t) {
        t === void 0 && (t = H.NONE);
        const i = 0
          , s = this.value.length
          , n = Math.min(Math.max(e, i), s);
        switch (t) {
        case H.LEFT:
        case H.FORCE_LEFT:
            return this.isComplete ? n : i;
        case H.RIGHT:
        case H.FORCE_RIGHT:
            return this.isComplete ? n : s;
        case H.NONE:
        default:
            return n
        }
    }
    totalInputPositions(e, t) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.value.length),
        this.value.slice(e, t).length
    }
    doValidate(e) {
        return this.masked.doValidate(this.currentMaskFlags(e)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)))
    }
    doCommit() {
        this.masked.doCommit()
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue,
            masked: this.masked.state,
            isFilled: this.isFilled
        }
    }
    set state(e) {
        this.masked.state = e.masked,
        this.isFilled = e.isFilled
    }
    currentMaskFlags(e) {
        var t;
        return {
            ...e,
            _beforeTailState: (e == null || (t = e._beforeTailState) == null ? void 0 : t.masked) || (e == null ? void 0 : e._beforeTailState)
        }
    }
    pad(e) {
        return new te
    }
}
ta.DEFAULT_DEFINITIONS = {
    0: /\d/,
    a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    "*": /./
};
class lh extends bt {
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        const t = e.mask;
        t && (e.validate = i => i.search(t) >= 0),
        super._update(e)
    }
}
K.MaskedRegExp = lh;
class wt extends bt {
    constructor(e) {
        super({
            ...wt.DEFAULTS,
            ...e,
            definitions: Object.assign({}, ta.DEFAULT_DEFINITIONS, e == null ? void 0 : e.definitions)
        })
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        e.definitions = Object.assign({}, this.definitions, e.definitions),
        super._update(e),
        this._rebuildMask()
    }
    _rebuildMask() {
        const e = this.definitions;
        this._blocks = [],
        this.exposeBlock = void 0,
        this._stops = [],
        this._maskedBlocks = {};
        const t = this.mask;
        if (!t || !e)
            return;
        let i = !1
          , s = !1;
        for (let n = 0; n < t.length; ++n) {
            if (this.blocks) {
                const u = t.slice(n)
                  , c = Object.keys(this.blocks).filter(p => u.indexOf(p) === 0);
                c.sort( (p, d) => d.length - p.length);
                const f = c[0];
                if (f) {
                    const {expose: p, repeat: d, ...g} = en(this.blocks[f])
                      , h = {
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        displayChar: this.displayChar,
                        overwrite: this.overwrite,
                        autofix: this.autofix,
                        ...g,
                        repeat: d,
                        parent: this
                    }
                      , _ = d != null ? new K.RepeatBlock(h) : Xi(h);
                    _ && (this._blocks.push(_),
                    p && (this.exposeBlock = _),
                    this._maskedBlocks[f] || (this._maskedBlocks[f] = []),
                    this._maskedBlocks[f].push(this._blocks.length - 1)),
                    n += f.length - 1;
                    continue
                }
            }
            let a = t[n]
              , o = a in e;
            if (a === wt.STOP_CHAR) {
                this._stops.push(this._blocks.length);
                continue
            }
            if (a === "{" || a === "}") {
                i = !i;
                continue
            }
            if (a === "[" || a === "]") {
                s = !s;
                continue
            }
            if (a === wt.ESCAPE_CHAR) {
                if (++n,
                a = t[n],
                !a)
                    break;
                o = !1
            }
            const l = o ? new ta({
                isOptional: s,
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar,
                ...en(e[a]),
                parent: this
            }) : new Gc({
                char: a,
                eager: this.eager,
                isUnmasking: i
            });
            this._blocks.push(l)
        }
    }
    get state() {
        return {
            ...super.state,
            _blocks: this._blocks.map(e => e.state)
        }
    }
    set state(e) {
        if (!e) {
            this.reset();
            return
        }
        const {_blocks: t, ...i} = e;
        this._blocks.forEach( (s, n) => s.state = t[n]),
        super.state = i
    }
    reset() {
        super.reset(),
        this._blocks.forEach(e => e.reset())
    }
    get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(e => e.isComplete)
    }
    get isFilled() {
        return this._blocks.every(e => e.isFilled)
    }
    get isFixed() {
        return this._blocks.every(e => e.isFixed)
    }
    get isOptional() {
        return this._blocks.every(e => e.isOptional)
    }
    doCommit() {
        this._blocks.forEach(e => e.doCommit()),
        super.doCommit()
    }
    get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce( (e, t) => e += t.unmaskedValue, "")
    }
    set unmaskedValue(e) {
        if (this.exposeBlock) {
            const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.unmaskedValue = e,
            this.appendTail(t),
            this.doCommit()
        } else
            super.unmaskedValue = e
    }
    get value() {
        return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce( (e, t) => e += t.value, "")
    }
    set value(e) {
        if (this.exposeBlock) {
            const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.value = e,
            this.appendTail(t),
            this.doCommit()
        } else
            super.value = e
    }
    get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue
    }
    set typedValue(e) {
        if (this.exposeBlock) {
            const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.typedValue = e,
            this.appendTail(t),
            this.doCommit()
        } else
            super.typedValue = e
    }
    get displayValue() {
        return this._blocks.reduce( (e, t) => e += t.displayValue, "")
    }
    appendTail(e) {
        return super.appendTail(e).aggregate(this._appendPlaceholder())
    }
    _appendEager() {
        var e;
        const t = new te;
        let i = (e = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : e.index;
        if (i == null)
            return t;
        this._blocks[i].isFilled && ++i;
        for (let s = i; s < this._blocks.length; ++s) {
            const n = this._blocks[s]._appendEager();
            if (!n.inserted)
                break;
            t.aggregate(n)
        }
        return t
    }
    _appendCharRaw(e, t) {
        t === void 0 && (t = {});
        const i = this._mapPosToBlock(this.displayValue.length)
          , s = new te;
        if (!i)
            return s;
        for (let a = i.index, o; o = this._blocks[a]; ++a) {
            var n;
            const l = o._appendChar(e, {
                ...t,
                _beforeTailState: (n = t._beforeTailState) == null || (n = n._blocks) == null ? void 0 : n[a]
            });
            if (s.aggregate(l),
            l.consumed)
                break
        }
        return s
    }
    extractTail(e, t) {
        e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length);
        const i = new Ts;
        return e === t || this._forEachBlocksInRange(e, t, (s, n, a, o) => {
            const l = s.extractTail(a, o);
            l.stop = this._findStopBefore(n),
            l.from = this._blockStartPos(n),
            l instanceof Ts && (l.blockIndex = n),
            i.extend(l)
        }
        ),
        i
    }
    extractInput(e, t, i) {
        if (e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        i === void 0 && (i = {}),
        e === t)
            return "";
        let s = "";
        return this._forEachBlocksInRange(e, t, (n, a, o, l) => {
            s += n.extractInput(o, l, i)
        }
        ),
        s
    }
    _findStopBefore(e) {
        let t;
        for (let i = 0; i < this._stops.length; ++i) {
            const s = this._stops[i];
            if (s <= e)
                t = s;
            else
                break
        }
        return t
    }
    _appendPlaceholder(e) {
        const t = new te;
        if (this.lazy && e == null)
            return t;
        const i = this._mapPosToBlock(this.displayValue.length);
        if (!i)
            return t;
        const s = i.index
          , n = e ?? this._blocks.length;
        return this._blocks.slice(s, n).forEach(a => {
            if (!a.lazy || e != null) {
                var o;
                t.aggregate(a._appendPlaceholder((o = a._blocks) == null ? void 0 : o.length))
            }
        }
        ),
        t
    }
    _mapPosToBlock(e) {
        let t = "";
        for (let i = 0; i < this._blocks.length; ++i) {
            const s = this._blocks[i]
              , n = t.length;
            if (t += s.displayValue,
            e <= t.length)
                return {
                    index: i,
                    offset: e - n
                }
        }
    }
    _blockStartPos(e) {
        return this._blocks.slice(0, e).reduce( (t, i) => t += i.displayValue.length, 0)
    }
    _forEachBlocksInRange(e, t, i) {
        t === void 0 && (t = this.displayValue.length);
        const s = this._mapPosToBlock(e);
        if (s) {
            const n = this._mapPosToBlock(t)
              , a = n && s.index === n.index
              , o = s.offset
              , l = n && a ? n.offset : this._blocks[s.index].displayValue.length;
            if (i(this._blocks[s.index], s.index, o, l),
            n && !a) {
                for (let u = s.index + 1; u < n.index; ++u)
                    i(this._blocks[u], u, 0, this._blocks[u].displayValue.length);
                i(this._blocks[n.index], n.index, 0, n.offset)
            }
        }
    }
    remove(e, t) {
        e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length);
        const i = super.remove(e, t);
        return this._forEachBlocksInRange(e, t, (s, n, a, o) => {
            i.aggregate(s.remove(a, o))
        }
        ),
        i
    }
    nearestInputPos(e, t) {
        if (t === void 0 && (t = H.NONE),
        !this._blocks.length)
            return 0;
        const i = new oh(this,e);
        if (t === H.NONE)
            return i.pushRightBeforeInput() || (i.popState(),
            i.pushLeftBeforeInput()) ? i.pos : this.displayValue.length;
        if (t === H.LEFT || t === H.FORCE_LEFT) {
            if (t === H.LEFT) {
                if (i.pushRightBeforeFilled(),
                i.ok && i.pos === e)
                    return e;
                i.popState()
            }
            if (i.pushLeftBeforeInput(),
            i.pushLeftBeforeRequired(),
            i.pushLeftBeforeFilled(),
            t === H.LEFT) {
                if (i.pushRightBeforeInput(),
                i.pushRightBeforeRequired(),
                i.ok && i.pos <= e || (i.popState(),
                i.ok && i.pos <= e))
                    return i.pos;
                i.popState()
            }
            return i.ok ? i.pos : t === H.FORCE_LEFT ? 0 : (i.popState(),
            i.ok || (i.popState(),
            i.ok) ? i.pos : 0)
        }
        return t === H.RIGHT || t === H.FORCE_RIGHT ? (i.pushRightBeforeInput(),
        i.pushRightBeforeRequired(),
        i.pushRightBeforeFilled() ? i.pos : t === H.FORCE_RIGHT ? this.displayValue.length : (i.popState(),
        i.ok || (i.popState(),
        i.ok) ? i.pos : this.nearestInputPos(e, H.LEFT))) : e
    }
    totalInputPositions(e, t) {
        e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length);
        let i = 0;
        return this._forEachBlocksInRange(e, t, (s, n, a, o) => {
            i += s.totalInputPositions(a, o)
        }
        ),
        i
    }
    maskedBlock(e) {
        return this.maskedBlocks(e)[0]
    }
    maskedBlocks(e) {
        const t = this._maskedBlocks[e];
        return t ? t.map(i => this._blocks[i]) : []
    }
    pad(e) {
        const t = new te;
        return this._forEachBlocksInRange(0, this.displayValue.length, i => t.aggregate(i.pad(e))),
        t
    }
}
wt.DEFAULTS = {
    ...bt.DEFAULTS,
    lazy: !0,
    placeholderChar: "_"
};
wt.STOP_CHAR = "`";
wt.ESCAPE_CHAR = "\\";
wt.InputDefinition = ta;
wt.FixedDefinition = Gc;
K.MaskedPattern = wt;
class Vn extends wt {
    get _matchFrom() {
        return this.maxLength - String(this.from).length
    }
    constructor(e) {
        super(e)
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        const {to: t=this.to || 0, from: i=this.from || 0, maxLength: s=this.maxLength || 0, autofix: n=this.autofix, ...a} = e;
        this.to = t,
        this.from = i,
        this.maxLength = Math.max(String(t).length, s),
        this.autofix = n;
        const o = String(this.from).padStart(this.maxLength, "0")
          , l = String(this.to).padStart(this.maxLength, "0");
        let u = 0;
        for (; u < l.length && l[u] === o[u]; )
            ++u;
        a.mask = l.slice(0, u).replace(/0/g, "\\0") + "0".repeat(this.maxLength - u),
        super._update(a)
    }
    get isComplete() {
        return super.isComplete && !!this.value
    }
    boundaries(e) {
        let t = ""
          , i = "";
        const [,s,n] = e.match(/^(\D*)(\d*)(\D*)/) || [];
        return n && (t = "0".repeat(s.length) + n,
        i = "9".repeat(s.length) + n),
        t = t.padEnd(this.maxLength, "0"),
        i = i.padEnd(this.maxLength, "9"),
        [t, i]
    }
    doPrepareChar(e, t) {
        t === void 0 && (t = {});
        let i;
        return [e,i] = super.doPrepareChar(e.replace(/\D/g, ""), t),
        e || (i.skip = !this.isComplete),
        [e, i]
    }
    _appendCharRaw(e, t) {
        if (t === void 0 && (t = {}),
        !this.autofix || this.value.length + 1 > this.maxLength)
            return super._appendCharRaw(e, t);
        const i = String(this.from).padStart(this.maxLength, "0")
          , s = String(this.to).padStart(this.maxLength, "0")
          , [n,a] = this.boundaries(this.value + e);
        return Number(a) < this.from ? super._appendCharRaw(i[this.value.length], t) : Number(n) > this.to ? !t.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(i[this.value.length], t).aggregate(this._appendCharRaw(e, t)) : super._appendCharRaw(s[this.value.length], t) : super._appendCharRaw(e, t)
    }
    doValidate(e) {
        const t = this.value;
        if (t.search(/[^0]/) === -1 && t.length <= this._matchFrom)
            return !0;
        const [s,n] = this.boundaries(t);
        return this.from <= Number(n) && Number(s) <= this.to && super.doValidate(e)
    }
    pad(e) {
        const t = new te;
        if (this.value.length === this.maxLength)
            return t;
        const i = this.value
          , s = this.maxLength - this.value.length;
        if (s) {
            this.reset();
            for (let n = 0; n < s; ++n)
                t.aggregate(super._appendCharRaw("0", e));
            i.split("").forEach(n => this._appendCharRaw(n))
        }
        return t
    }
}
K.MaskedRange = Vn;
class Hi extends wt {
    static extractPatternOptions(e) {
        const {mask: t, pattern: i, ...s} = e;
        return {
            ...s,
            mask: ls(t) ? t : i
        }
    }
    constructor(e) {
        super(Hi.extractPatternOptions({
            ...Hi.DEFAULTS,
            ...e
        }))
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        const {mask: t, pattern: i, blocks: s, ...n} = {
            ...Hi.DEFAULTS,
            ...e
        }
          , a = Object.assign({}, Hi.GET_DEFAULT_BLOCKS());
        e.min && (a.Y.from = e.min.getFullYear()),
        e.max && (a.Y.to = e.max.getFullYear()),
        e.min && e.max && a.Y.from === a.Y.to && (a.m.from = e.min.getMonth() + 1,
        a.m.to = e.max.getMonth() + 1,
        a.m.from === a.m.to && (a.d.from = e.min.getDate(),
        a.d.to = e.max.getDate())),
        Object.assign(a, this.blocks, s),
        super._update({
            ...n,
            mask: ls(t) ? t : i,
            blocks: a
        })
    }
    doValidate(e) {
        const t = this.date;
        return super.doValidate(e) && (!this.isComplete || this.isDateExist(this.value) && t != null && (this.min == null || this.min <= t) && (this.max == null || t <= this.max))
    }
    isDateExist(e) {
        return this.format(this.parse(e, this), this).indexOf(e) >= 0
    }
    get date() {
        return this.typedValue
    }
    set date(e) {
        this.typedValue = e
    }
    get typedValue() {
        return this.isComplete ? super.typedValue : null
    }
    set typedValue(e) {
        super.typedValue = e
    }
    maskEquals(e) {
        return e === Date || super.maskEquals(e)
    }
    optionsIsChanged(e) {
        return super.optionsIsChanged(Hi.extractPatternOptions(e))
    }
}
Hi.GET_DEFAULT_BLOCKS = () => ({
    d: {
        mask: Vn,
        from: 1,
        to: 31,
        maxLength: 2
    },
    m: {
        mask: Vn,
        from: 1,
        to: 12,
        maxLength: 2
    },
    Y: {
        mask: Vn,
        from: 1900,
        to: 9999
    }
});
Hi.DEFAULTS = {
    ...wt.DEFAULTS,
    mask: Date,
    pattern: "d{.}`m{.}`Y",
    format: (r, e) => {
        if (!r)
            return "";
        const t = String(r.getDate()).padStart(2, "0")
          , i = String(r.getMonth() + 1).padStart(2, "0")
          , s = r.getFullYear();
        return [t, i, s].join(".")
    }
    ,
    parse: (r, e) => {
        const [t,i,s] = r.split(".").map(Number);
        return new Date(s,i - 1,t)
    }
};
K.MaskedDate = Hi;
class ha extends bt {
    constructor(e) {
        super({
            ...ha.DEFAULTS,
            ...e
        }),
        this.currentMask = void 0
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        super._update(e),
        "mask"in e && (this.exposeMask = void 0,
        this.compiledMasks = Array.isArray(e.mask) ? e.mask.map(t => {
            const {expose: i, ...s} = en(t)
              , n = Xi({
                overwrite: this._overwrite,
                eager: this._eager,
                skipInvalid: this._skipInvalid,
                ...s
            });
            return i && (this.exposeMask = n),
            n
        }
        ) : [])
    }
    _appendCharRaw(e, t) {
        t === void 0 && (t = {});
        const i = this._applyDispatch(e, t);
        return this.currentMask && i.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))),
        i
    }
    _applyDispatch(e, t, i) {
        e === void 0 && (e = ""),
        t === void 0 && (t = {}),
        i === void 0 && (i = "");
        const s = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value
          , n = this.rawInputValue
          , a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : n
          , o = n.slice(a.length)
          , l = this.currentMask
          , u = new te
          , c = l == null ? void 0 : l.state;
        return this.currentMask = this.doDispatch(e, {
            ...t
        }, i),
        this.currentMask && (this.currentMask !== l ? (this.currentMask.reset(),
        a && (this.currentMask.append(a, {
            raw: !0
        }),
        u.tailShift = this.currentMask.value.length - s.length),
        o && (u.tailShift += this.currentMask.append(o, {
            raw: !0,
            tail: !0
        }).tailShift)) : c && (this.currentMask.state = c)),
        u
    }
    _appendPlaceholder() {
        const e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()),
        e
    }
    _appendEager() {
        const e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendEager()),
        e
    }
    appendTail(e) {
        const t = new te;
        return e && t.aggregate(this._applyDispatch("", {}, e)),
        t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e))
    }
    currentMaskFlags(e) {
        var t, i;
        return {
            ...e,
            _beforeTailState: ((t = e._beforeTailState) == null ? void 0 : t.currentMaskRef) === this.currentMask && ((i = e._beforeTailState) == null ? void 0 : i.currentMask) || e._beforeTailState
        }
    }
    doDispatch(e, t, i) {
        return t === void 0 && (t = {}),
        i === void 0 && (i = ""),
        this.dispatch(e, this, t, i)
    }
    doValidate(e) {
        return super.doValidate(e) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)))
    }
    doPrepare(e, t) {
        t === void 0 && (t = {});
        let[i,s] = super.doPrepare(e, t);
        if (this.currentMask) {
            let n;
            [i,n] = super.doPrepare(i, this.currentMaskFlags(t)),
            s = s.aggregate(n)
        }
        return [i, s]
    }
    doPrepareChar(e, t) {
        t === void 0 && (t = {});
        let[i,s] = super.doPrepareChar(e, t);
        if (this.currentMask) {
            let n;
            [i,n] = super.doPrepareChar(i, this.currentMaskFlags(t)),
            s = s.aggregate(n)
        }
        return [i, s]
    }
    reset() {
        var e;
        (e = this.currentMask) == null || e.reset(),
        this.compiledMasks.forEach(t => t.reset())
    }
    get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : ""
    }
    set value(e) {
        this.exposeMask ? (this.exposeMask.value = e,
        this.currentMask = this.exposeMask,
        this._applyDispatch()) : super.value = e
    }
    get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : ""
    }
    set unmaskedValue(e) {
        this.exposeMask ? (this.exposeMask.unmaskedValue = e,
        this.currentMask = this.exposeMask,
        this._applyDispatch()) : super.unmaskedValue = e
    }
    get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : ""
    }
    set typedValue(e) {
        if (this.exposeMask) {
            this.exposeMask.typedValue = e,
            this.currentMask = this.exposeMask,
            this._applyDispatch();
            return
        }
        let t = String(e);
        this.currentMask && (this.currentMask.typedValue = e,
        t = this.currentMask.unmaskedValue),
        this.unmaskedValue = t
    }
    get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : ""
    }
    get isComplete() {
        var e;
        return !!((e = this.currentMask) != null && e.isComplete)
    }
    get isFilled() {
        var e;
        return !!((e = this.currentMask) != null && e.isFilled)
    }
    remove(e, t) {
        const i = new te;
        return this.currentMask && i.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()),
        i
    }
    get state() {
        var e;
        return {
            ...super.state,
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map(t => t.state),
            currentMaskRef: this.currentMask,
            currentMask: (e = this.currentMask) == null ? void 0 : e.state
        }
    }
    set state(e) {
        const {compiledMasks: t, currentMaskRef: i, currentMask: s, ...n} = e;
        t && this.compiledMasks.forEach( (a, o) => a.state = t[o]),
        i != null && (this.currentMask = i,
        this.currentMask.state = s),
        super.state = n
    }
    extractInput(e, t, i) {
        return this.currentMask ? this.currentMask.extractInput(e, t, i) : ""
    }
    extractTail(e, t) {
        return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t)
    }
    doCommit() {
        this.currentMask && this.currentMask.doCommit(),
        super.doCommit()
    }
    nearestInputPos(e, t) {
        return this.currentMask ? this.currentMask.nearestInputPos(e, t) : super.nearestInputPos(e, t)
    }
    get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite
    }
    set overwrite(e) {
        this._overwrite = e
    }
    get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager
    }
    set eager(e) {
        this._eager = e
    }
    get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid
    }
    set skipInvalid(e) {
        this._skipInvalid = e
    }
    get autofix() {
        return this.currentMask ? this.currentMask.autofix : this._autofix
    }
    set autofix(e) {
        this._autofix = e
    }
    maskEquals(e) {
        return Array.isArray(e) ? this.compiledMasks.every( (t, i) => {
            if (!e[i])
                return;
            const {mask: s, ...n} = e[i];
            return ea(t, n) && t.maskEquals(s)
        }
        ) : super.maskEquals(e)
    }
    typedValueEquals(e) {
        var t;
        return !!((t = this.currentMask) != null && t.typedValueEquals(e))
    }
}
ha.DEFAULTS = {
    ...bt.DEFAULTS,
    dispatch: (r, e, t, i) => {
        if (!e.compiledMasks.length)
            return;
        const s = e.rawInputValue
          , n = e.compiledMasks.map( (a, o) => {
            const l = e.currentMask === a
              , u = l ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, H.FORCE_LEFT);
            return a.rawInputValue !== s ? (a.reset(),
            a.append(s, {
                raw: !0
            })) : l || a.remove(u),
            a.append(r, e.currentMaskFlags(t)),
            a.appendTail(i),
            {
                index: o,
                weight: a.rawInputValue.length,
                totalInputPositions: a.totalInputPositions(0, Math.max(u, a.nearestInputPos(a.displayValue.length, H.FORCE_LEFT)))
            }
        }
        );
        return n.sort( (a, o) => o.weight - a.weight || o.totalInputPositions - a.totalInputPositions),
        e.compiledMasks[n[0].index]
    }
};
K.MaskedDynamic = ha;
class pa extends wt {
    constructor(e) {
        super({
            ...pa.DEFAULTS,
            ...e
        })
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        const {enum: t, ...i} = e;
        if (t) {
            const s = t.map(o => o.length)
              , n = Math.min(...s)
              , a = Math.max(...s) - n;
            i.mask = "*".repeat(n),
            a && (i.mask += "[" + "*".repeat(a) + "]"),
            this.enum = t
        }
        super._update(i)
    }
    _appendCharRaw(e, t) {
        t === void 0 && (t = {});
        const i = Math.min(this.nearestInputPos(0, H.FORCE_RIGHT), this.value.length)
          , s = this.enum.filter(n => this.matchValue(n, this.unmaskedValue + e, i));
        if (s.length) {
            s.length === 1 && this._forEachBlocksInRange(0, this.value.length, (a, o) => {
                const l = s[0][o];
                o >= this.value.length || l === a.value || (a.reset(),
                a._appendChar(l, t))
            }
            );
            const n = super._appendCharRaw(s[0][this.value.length], t);
            return s.length === 1 && s[0].slice(this.unmaskedValue.length).split("").forEach(a => n.aggregate(super._appendCharRaw(a))),
            n
        }
        return new te
    }
    extractTail(e, t) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        new Li("",e)
    }
    remove(e, t) {
        if (e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        e === t)
            return new te;
        const i = Math.min(super.nearestInputPos(0, H.FORCE_RIGHT), this.value.length);
        let s;
        for (s = e; s >= 0 && !(this.enum.filter(o => this.matchValue(o, this.value.slice(i, s), i)).length > 1); --s)
            ;
        const n = super.remove(s, t);
        return n.tailShift += s - e,
        n
    }
}
pa.DEFAULTS = {
    ...wt.DEFAULTS,
    matchValue: (r, e, t) => r.indexOf(e, t) === t
};
K.MaskedEnum = pa;
class uh extends bt {
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        super._update({
            ...e,
            validate: e.mask
        })
    }
}
K.MaskedFunction = uh;
var qc;
class Kt extends bt {
    constructor(e) {
        super({
            ...Kt.DEFAULTS,
            ...e
        })
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        super._update(e),
        this._updateRegExps()
    }
    _updateRegExps() {
        const e = "^" + (this.allowNegative ? "[+|\\-]?" : "")
          , t = "\\d*"
          , i = (this.scale ? "(" + Pa(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExp = new RegExp(e + t + i),
        this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Pa).join("") + "]","g"),
        this._thousandsSeparatorRegExp = new RegExp(Pa(this.thousandsSeparator),"g")
    }
    _removeThousandsSeparators(e) {
        return e.replace(this._thousandsSeparatorRegExp, "")
    }
    _insertThousandsSeparators(e) {
        const t = e.split(this.radix);
        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator),
        t.join(this.radix)
    }
    doPrepareChar(e, t) {
        t === void 0 && (t = {});
        const [i,s] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (t.input && t.raw || !t.input && !t.raw) ? e.replace(this._mapToRadixRegExp, this.radix) : e), t);
        return e && !i && (s.skip = !0),
        i && !this.allowPositive && !this.value && i !== "-" && s.aggregate(this._appendChar("-")),
        [i, s]
    }
    _separatorsCount(e, t) {
        t === void 0 && (t = !1);
        let i = 0;
        for (let s = 0; s < e; ++s)
            this._value.indexOf(this.thousandsSeparator, s) === s && (++i,
            t && (e += this.thousandsSeparator.length));
        return i
    }
    _separatorsCountFromSlice(e) {
        return e === void 0 && (e = this._value),
        this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
    }
    extractInput(e, t, i) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        [e,t] = this._adjustRangeWithSeparators(e, t),
        this._removeThousandsSeparators(super.extractInput(e, t, i))
    }
    _appendCharRaw(e, t) {
        t === void 0 && (t = {});
        const i = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value
          , s = this._separatorsCountFromSlice(i);
        this._value = this._removeThousandsSeparators(this.value);
        const n = this._value;
        this._value += e;
        const a = this.number;
        let o = !isNaN(a)
          , l = !1;
        if (o) {
            let p;
            this.min != null && this.min < 0 && this.number < this.min && (p = this.min),
            this.max != null && this.max > 0 && this.number > this.max && (p = this.max),
            p != null && (this.autofix ? (this._value = this.format(p, this).replace(Kt.UNMASKED_RADIX, this.radix),
            l || (l = n === this._value && !t.tail)) : o = !1),
            o && (o = !!this._value.match(this._numberRegExp))
        }
        let u;
        o ? u = new te({
            inserted: this._value.slice(n.length),
            rawInserted: l ? "" : e,
            skip: l
        }) : (this._value = n,
        u = new te),
        this._value = this._insertThousandsSeparators(this._value);
        const c = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value
          , f = this._separatorsCountFromSlice(c);
        return u.tailShift += (f - s) * this.thousandsSeparator.length,
        u
    }
    _findSeparatorAround(e) {
        if (this.thousandsSeparator) {
            const t = e - this.thousandsSeparator.length + 1
              , i = this.value.indexOf(this.thousandsSeparator, t);
            if (i <= e)
                return i
        }
        return -1
    }
    _adjustRangeWithSeparators(e, t) {
        const i = this._findSeparatorAround(e);
        i >= 0 && (e = i);
        const s = this._findSeparatorAround(t);
        return s >= 0 && (t = s + this.thousandsSeparator.length),
        [e, t]
    }
    remove(e, t) {
        e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length),
        [e,t] = this._adjustRangeWithSeparators(e, t);
        const i = this.value.slice(0, e)
          , s = this.value.slice(t)
          , n = this._separatorsCount(i.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(i + s));
        const a = this._separatorsCountFromSlice(i);
        return new te({
            tailShift: (a - n) * this.thousandsSeparator.length
        })
    }
    nearestInputPos(e, t) {
        if (!this.thousandsSeparator)
            return e;
        switch (t) {
        case H.NONE:
        case H.LEFT:
        case H.FORCE_LEFT:
            {
                const i = this._findSeparatorAround(e - 1);
                if (i >= 0) {
                    const s = i + this.thousandsSeparator.length;
                    if (e < s || this.value.length <= s || t === H.FORCE_LEFT)
                        return i
                }
                break
            }
        case H.RIGHT:
        case H.FORCE_RIGHT:
            {
                const i = this._findSeparatorAround(e);
                if (i >= 0)
                    return i + this.thousandsSeparator.length
            }
        }
        return e
    }
    doCommit() {
        if (this.value) {
            const e = this.number;
            let t = e;
            this.min != null && (t = Math.max(t, this.min)),
            this.max != null && (t = Math.min(t, this.max)),
            t !== e && (this.unmaskedValue = this.format(t, this));
            let i = this.value;
            this.normalizeZeros && (i = this._normalizeZeros(i)),
            this.padFractionalZeros && this.scale > 0 && (i = this._padFractionalZeros(i)),
            this._value = i
        }
        super.doCommit()
    }
    _normalizeZeros(e) {
        const t = this._removeThousandsSeparators(e).split(this.radix);
        return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (i, s, n, a) => s + a),
        e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"),
        t.length > 1 && (t[1] = t[1].replace(/0*$/, ""),
        t[1].length || (t.length = 1)),
        this._insertThousandsSeparators(t.join(this.radix))
    }
    _padFractionalZeros(e) {
        if (!e)
            return e;
        const t = e.split(this.radix);
        return t.length < 2 && t.push(""),
        t[1] = t[1].padEnd(this.scale, "0"),
        t.join(this.radix)
    }
    doSkipInvalid(e, t, i) {
        t === void 0 && (t = {});
        const s = this.scale === 0 && e !== this.thousandsSeparator && (e === this.radix || e === Kt.UNMASKED_RADIX || this.mapToRadix.includes(e));
        return super.doSkipInvalid(e, t, i) && !s
    }
    get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, Kt.UNMASKED_RADIX)
    }
    set unmaskedValue(e) {
        super.unmaskedValue = e
    }
    get typedValue() {
        return this.parse(this.unmaskedValue, this)
    }
    set typedValue(e) {
        this.rawInputValue = this.format(e, this).replace(Kt.UNMASKED_RADIX, this.radix)
    }
    get number() {
        return this.typedValue
    }
    set number(e) {
        this.typedValue = e
    }
    get allowNegative() {
        return this.min != null && this.min < 0 || this.max != null && this.max < 0
    }
    get allowPositive() {
        return this.min != null && this.min > 0 || this.max != null && this.max > 0
    }
    typedValueEquals(e) {
        return (super.typedValueEquals(e) || Kt.EMPTY_VALUES.includes(e) && Kt.EMPTY_VALUES.includes(this.typedValue)) && !(e === 0 && this.value === "")
    }
}
qc = Kt;
Kt.UNMASKED_RADIX = ".";
Kt.EMPTY_VALUES = [...bt.EMPTY_VALUES, 0];
Kt.DEFAULTS = {
    ...bt.DEFAULTS,
    mask: Number,
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: [qc.UNMASKED_RADIX],
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    scale: 2,
    normalizeZeros: !0,
    padFractionalZeros: !1,
    parse: Number,
    format: r => r.toLocaleString("en-US", {
        useGrouping: !1,
        maximumFractionDigits: 20
    })
};
K.MaskedNumber = Kt;
const vo = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
};
function Yc(r, e, t) {
    e === void 0 && (e = vo.MASKED),
    t === void 0 && (t = vo.MASKED);
    const i = Xi(r);
    return s => i.runIsolated(n => (n[e] = s,
    n[t]))
}
function ch(r, e, t, i) {
    return Yc(e, t, i)(r)
}
K.PIPE_TYPE = vo;
K.createPipe = Yc;
K.pipe = ch;
class dh extends wt {
    get repeatFrom() {
        var e;
        return (e = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) != null ? e : 0
    }
    get repeatTo() {
        var e;
        return (e = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? e : 1 / 0
    }
    constructor(e) {
        super(e)
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        var t, i, s;
        const {repeat: n, ...a} = en(e);
        this._blockOpts = Object.assign({}, this._blockOpts, a);
        const o = Xi(this._blockOpts);
        this.repeat = (t = (i = n ?? o.repeat) != null ? i : this.repeat) != null ? t : 1 / 0,
        super._update({
            mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && ((s = this._blocks) == null ? void 0 : s.length) || 0, this.repeatFrom)),
            blocks: {
                m: o
            },
            eager: o.eager,
            overwrite: o.overwrite,
            skipInvalid: o.skipInvalid,
            lazy: o.lazy,
            placeholderChar: o.placeholderChar,
            displayChar: o.displayChar
        })
    }
    _allocateBlock(e) {
        if (e < this._blocks.length)
            return this._blocks[e];
        if (this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo)
            return this._blocks.push(Xi(this._blockOpts)),
            this.mask += "m",
            this._blocks[this._blocks.length - 1]
    }
    _appendCharRaw(e, t) {
        t === void 0 && (t = {});
        const i = new te;
        for (let l = (s = (n = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : n.index) != null ? s : Math.max(this._blocks.length - 1, 0), u, c; u = (a = this._blocks[l]) != null ? a : c = !c && this._allocateBlock(l); ++l) {
            var s, n, a, o;
            const f = u._appendChar(e, {
                ...t,
                _beforeTailState: (o = t._beforeTailState) == null || (o = o._blocks) == null ? void 0 : o[l]
            });
            if (f.skip && c) {
                this._blocks.pop(),
                this.mask = this.mask.slice(1);
                break
            }
            if (i.aggregate(f),
            f.consumed)
                break
        }
        return i
    }
    _trimEmptyTail(e, t) {
        var i, s;
        e === void 0 && (e = 0);
        const n = Math.max(((i = this._mapPosToBlock(e)) == null ? void 0 : i.index) || 0, this.repeatFrom, 0);
        let a;
        t != null && (a = (s = this._mapPosToBlock(t)) == null ? void 0 : s.index),
        a == null && (a = this._blocks.length - 1);
        let o = 0;
        for (let l = a; n <= l && !this._blocks[l].unmaskedValue; --l,
        ++o)
            ;
        o && (this._blocks.splice(a - o + 1, o),
        this.mask = this.mask.slice(o))
    }
    reset() {
        super.reset(),
        this._trimEmptyTail()
    }
    remove(e, t) {
        e === void 0 && (e = 0),
        t === void 0 && (t = this.displayValue.length);
        const i = super.remove(e, t);
        return this._trimEmptyTail(e, t),
        i
    }
    totalInputPositions(e, t) {
        return e === void 0 && (e = 0),
        t == null && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(e, t)
    }
    get state() {
        return super.state
    }
    set state(e) {
        this._blocks.length = e._blocks.length,
        this.mask = this.mask.slice(0, this._blocks.length),
        super.state = e
    }
}
K.RepeatBlock = dh;
try {
    globalThis.IMask = K
} catch {}
let Yi = !0
  , fh = (r=500) => {
    document.documentElement.classList.contains("lock") ? Wc(r) : jc(r)
}
  , Wc = (r=500) => {
    let e = document.querySelector("body");
    if (Yi) {
        let t = document.querySelectorAll("[data-lp]");
        setTimeout( () => {
            for (let i = 0; i < t.length; i++) {
                const s = t[i];
                s.style.paddingRight = "0px"
            }
            e.style.paddingRight = "0px",
            document.documentElement.classList.remove("lock")
        }
        , r),
        Yi = !1,
        setTimeout(function() {
            Yi = !0
        }, r)
    }
}
  , jc = (r=500) => {
    let e = document.querySelector("body");
    if (Yi) {
        let t = document.querySelectorAll("[data-lp]");
        for (let i = 0; i < t.length; i++) {
            const s = t[i];
            s.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"
        }
        e.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px",
        document.documentElement.classList.add("lock"),
        Yi = !1,
        setTimeout(function() {
            Yi = !0
        }, r)
    }
}
;
function hh() {
    document.querySelector("[data-btn-menu]") && document.addEventListener("click", function(r) {
        Yi && r.target.closest("[data-btn-menu]") && (fh(),
        document.documentElement.classList.toggle("menu-open"))
    })
}
function ph() {
    const r = document.querySelectorAll("[data-spollers]");
    if (r.length > 0) {
        let o = function(f, p=!1) {
            f.forEach(d => {
                d = p ? d.item : d,
                p.matches || !p ? (d.classList.add("_spoller-init"),
                l(d)) : (d.classList.remove("_spoller-init"),
                l(d, !1))
            }
            )
        }
          , l = function(f, p=!0) {
            let d = f.querySelectorAll("details");
            d.length && d.forEach(g => {
                let h = g.querySelector("summary");
                p ? (h.removeAttribute("tabindex"),
                g.hasAttribute("data-open") ? (h.classList.add("_spoller-active"),
                g.open = !0) : (g.open = !1,
                h.nextElementSibling.hidden = !0)) : (h.setAttribute("tabindex", "-1"),
                h.classList.remove("_spoller-active"),
                g.open = !0,
                h.nextElementSibling.hidden = !1)
            }
            )
        }
          , u = function(f) {
            const p = f.target;
            if (p.closest("summary") && p.closest("[data-spollers]") && (f.preventDefault(),
            p.closest("[data-spollers]").classList.contains("_spoller-init"))) {
                const d = p.closest("summary")
                  , g = d.closest("details")
                  , h = d.closest("[data-spollers]")
                  , _ = h.hasAttribute("data-one-spoller")
                  , y = g.hasAttribute("data-spoller-scroll")
                  , v = h.dataset.spollersSpeed ? parseInt(h.dataset.spollersSpeed) : 500;
                if (!h.querySelectorAll("._slide").length && (_ && !g.open && c(h),
                g.open ? setTimeout( () => {
                    g.open = !1
                }
                , v) : g.open = !0,
                d.classList.toggle("_spoller-active"),
                Xc(d.nextElementSibling, v),
                y && d.classList.contains("_spoller-active"))) {
                    const b = g.dataset.spollerScroll
                      , m = +b ? +b : 0
                      , w = g.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                    window.scrollTo({
                        top: g.offsetTop - (m + w),
                        behavior: "smooth"
                    })
                }
            }
            if (!p.closest("[data-spollers]")) {
                const d = document.querySelectorAll("[data-spoller-close]");
                d.length && d.forEach(g => {
                    const h = g.closest("[data-spollers]")
                      , _ = g.parentNode;
                    if (h.classList.contains("_spoller-init")) {
                        const y = h.dataset.spollersSpeed ? parseInt(h.dataset.spollersSpeed) : 500;
                        g.classList.remove("_spoller-active"),
                        tn(g.nextElementSibling, y),
                        setTimeout( () => {
                            _.open = !1
                        }
                        , y)
                    }
                }
                )
            }
        }
          , c = function(f) {
            const p = f.querySelector("details[open]");
            if (p && !f.querySelectorAll("._slide").length) {
                const d = p.querySelector("summary")
                  , g = f.dataset.spollersSpeed ? parseInt(f.dataset.spollersSpeed) : 500;
                d.classList.remove("_spoller-active"),
                tn(d.nextElementSibling, g),
                setTimeout( () => {
                    p.open = !1
                }
                , g)
            }
        };
        var e = o
          , t = l
          , i = u
          , s = c;
        document.addEventListener("click", u);
        const n = Array.from(r).filter(function(f, p, d) {
            return !f.dataset.spollers.split(",")[0]
        });
        n.length && o(n);
        let a = Kc(r, "spollers");
        a && a.length && a.forEach(f => {
            f.matchMedia.addEventListener("change", function() {
                o(f.itemsArray, f.matchMedia)
            }),
            o(f.itemsArray, f.matchMedia)
        }
        )
    }
}
let tn = (r, e=500, t=0) => {
    r.classList.contains("_slide") || (r.classList.add("_slide"),
    r.style.transitionProperty = "height, margin, padding",
    r.style.transitionDuration = e + "ms",
    r.style.height = `${r.offsetHeight}px`,
    r.offsetHeight,
    r.style.overflow = "hidden",
    r.style.height = t ? `${t}px` : "0px",
    r.style.paddingTop = 0,
    r.style.paddingBottom = 0,
    r.style.marginTop = 0,
    r.style.marginBottom = 0,
    window.setTimeout( () => {
        r.hidden = !t,
        t || r.style.removeProperty("height"),
        r.style.removeProperty("padding-top"),
        r.style.removeProperty("padding-bottom"),
        r.style.removeProperty("margin-top"),
        r.style.removeProperty("margin-bottom"),
        t || r.style.removeProperty("overflow"),
        r.style.removeProperty("transition-duration"),
        r.style.removeProperty("transition-property"),
        r.classList.remove("_slide"),
        document.dispatchEvent(new CustomEvent("slideUpDone",{
            detail: {
                target: r
            }
        }))
    }
    , e))
}
  , Uc = (r, e=500, t=0) => {
    if (!r.classList.contains("_slide")) {
        r.classList.add("_slide"),
        r.hidden = r.hidden ? !1 : null,
        t && r.style.removeProperty("height");
        let i = r.offsetHeight;
        r.style.overflow = "hidden",
        r.style.height = t ? `${t}px` : "0px",
        r.style.paddingTop = 0,
        r.style.paddingBottom = 0,
        r.style.marginTop = 0,
        r.style.marginBottom = 0,
        r.offsetHeight,
        r.style.transitionProperty = "height, margin, padding",
        r.style.transitionDuration = e + "ms",
        r.style.height = i + "px",
        r.style.removeProperty("padding-top"),
        r.style.removeProperty("padding-bottom"),
        r.style.removeProperty("margin-top"),
        r.style.removeProperty("margin-bottom"),
        window.setTimeout( () => {
            r.style.removeProperty("height"),
            r.style.removeProperty("overflow"),
            r.style.removeProperty("transition-duration"),
            r.style.removeProperty("transition-property"),
            r.classList.remove("_slide"),
            document.dispatchEvent(new CustomEvent("slideDownDone",{
                detail: {
                    target: r
                }
            }))
        }
        , e)
    }
}
  , Xc = (r, e=500) => r.hidden ? Uc(r, e) : tn(r, e);
function Kc(r, e) {
    const t = Array.from(r).filter(function(i, s, n) {
        if (i.dataset[e])
            return i.dataset[e].split(",")[0]
    });
    if (t.length) {
        const i = [];
        t.forEach(a => {
            const o = a.dataset[e]
              , l = {}
              , u = o.split(",");
            l.value = u[0],
            l.type = u[1] ? u[1].trim() : "max",
            l.item = a,
            i.push(l)
        }
        );
        let s = i.map(function(a) {
            return "(" + a.type + "-width: " + a.value + "px)," + a.value + "," + a.type
        });
        s = uniqArray(s);
        const n = [];
        if (s.length)
            return s.forEach(a => {
                const o = a.split(",")
                  , l = o[1]
                  , u = o[2]
                  , c = window.matchMedia(o[0])
                  , f = i.filter(function(p) {
                    if (p.value === l && p.type === u)
                        return !0
                });
                n.push({
                    itemsArray: f,
                    matchMedia: c
                })
            }
            ),
            n
    }
}
function gh() {
    const r = document.querySelectorAll("[data-tabs]");
    let e = [];
    if (r.length > 0) {
        const a = mh();
        a && a.startsWith("tab-") && (e = a.replace("tab-", "").split("-")),
        r.forEach( (l, u) => {
            l.classList.add("_tab-init"),
            l.setAttribute("data-tabs-index", u),
            l.addEventListener("click", n),
            i(l)
        }
        );
        let o = Kc(r, "tabs");
        o && o.length && o.forEach(l => {
            l.matchMedia.addEventListener("change", function() {
                t(l.itemsArray, l.matchMedia)
            }),
            t(l.itemsArray, l.matchMedia)
        }
        )
    }
    function t(a, o) {
        a.forEach(l => {
            l = l.item;
            let u = l.querySelector("[data-tabs-titles]")
              , c = l.querySelectorAll("[data-tabs-title]")
              , f = l.querySelector("[data-tabs-body]")
              , p = l.querySelectorAll("[data-tabs-item]");
            c = Array.from(c).filter(d => d.closest("[data-tabs]") === l),
            p = Array.from(p).filter(d => d.closest("[data-tabs]") === l),
            p.forEach( (d, g) => {
                o.matches ? (f.append(c[g]),
                f.append(d),
                l.classList.add("_tab-spoller")) : (u.append(c[g]),
                l.classList.remove("_tab-spoller"))
            }
            )
        }
        )
    }
    function i(a) {
        let o = a.querySelectorAll("[data-tabs-titles]>*")
          , l = a.querySelectorAll("[data-tabs-body]>*");
        const u = a.dataset.tabsIndex
          , c = e[0] == u;
        if (c) {
            const f = a.querySelector("[data-tabs-titles]>._tab-active");
            f && f.classList.remove("_tab-active")
        }
        l.length && l.forEach( (f, p) => {
            o[p].setAttribute("data-tabs-title", ""),
            f.setAttribute("data-tabs-item", ""),
            c && p == e[1] && o[p].classList.add("_tab-active"),
            f.hidden = !o[p].classList.contains("_tab-active")
        }
        )
    }
    function s(a) {
        let o = a.querySelectorAll("[data-tabs-title]")
          , l = a.querySelectorAll("[data-tabs-item]");
        const u = a.dataset.tabsIndex;
        function c(p) {
            if (p.hasAttribute("data-tabs-animate"))
                return p.dataset.tabsAnimate > 0 ? Number(p.dataset.tabsAnimate) : 500
        }
        const f = c(a);
        if (l.length > 0) {
            const p = a.hasAttribute("data-tabs-hash");
            l = Array.from(l).filter(d => d.closest("[data-tabs]") === a),
            o = Array.from(o).filter(d => d.closest("[data-tabs]") === a),
            l.forEach( (d, g) => {
                o[g].classList.contains("_tab-active") ? (f ? Uc(d, f) : d.hidden = !1,
                p && !d.closest(".popup") && vh(`tab-${u}-${g}`)) : f ? tn(d, f) : d.hidden = !0
            }
            )
        }
    }
    function n(a) {
        const o = a.target;
        if (o.closest("[data-tabs-title]")) {
            const l = o.closest("[data-tabs-title]")
              , u = l.closest("[data-tabs]");
            if (!l.classList.contains("_tab-active") && !u.querySelector("._slide")) {
                let c = u.querySelectorAll("[data-tabs-title]._tab-active");
                c.length && (c = Array.from(c).filter(f => f.closest("[data-tabs]") === u)),
                c.length && c[0].classList.remove("_tab-active"),
                l.classList.add("_tab-active"),
                s(u)
            }
            a.preventDefault()
        }
    }
}
function mh() {
    if (location.hash)
        return location.hash.replace("#", "")
}
function vh(r) {
    r = r ? `#${r}` : window.location.href.split("#")[0],
    history.pushState("", "", r)
}
let Ar = [];
function _h() {
    document.getElementById("popup-payments-additional-data").classList.add("open");
    const [e] = document.getElementsByTagName("html");
    e.classList.add("popup-show"),
    setTimeout( () => {
        e.classList.add("lock")
    }
    , 500)
}
const yh = async () => {
    Ar = await (await fetch("https://ukraine-gta.com.ua/assets/json/europeCountries.json")).json()
}
;
$(async function() {
    if (window.location.pathname !== "/donate")
        return;
    $("#close-additional-popup").click(e);
    const r = t => {
        const i = t.map(s => `<div class="select-dropdown__item" value="${s.code}">${s.country}</div>`);
        $("#additional-city-dropdown-items")[0].innerHTML = i.join("")
    }
    ;
    $(".additional__input-search").on("focus", function() {
        $(this).parent().addClass("open")
    }),
    $(".select-dropdown__items").on("mousedown", ".select-dropdown__item", function(t) {
        const i = t.currentTarget
          , s = $(i).attr("value");
        $("#additional-city-value").val(s),
        $("#additional-city-search").val($(i).text())
    }),
    $(".additional__input-search").on("blur", function() {
        $(this).parent().removeClass("open");
        const t = $("#additional-city-value");
        if (!t.val().length)
            $(this).val("");
        else {
            const i = Ar.find(s => s.code === t.val());
            i ? $(this).val(i.country) : $(this).val("")
        }
        r(Ar)
    }),
    $("#additional-city-search").on("input", function(t) {
        const i = $(this).val().toLowerCase()
          , s = Ar.filter(n => n.country.toLowerCase().includes(i));
        s.sort( (n, a) => n.country.indexOf(i) - a.country.indexOf(i)),
        r(s)
    });
    function e() {
        document.getElementById("popup-payments-additional-data").classList.remove("open");
        const [i] = document.getElementsByTagName("html");
        i.classList.remove("popup-show"),
        i.classList.remove("lock")
    }
    $(".additional__inputs").on("submit", function(t) {
        t.stopPropagation(),
        t.preventDefault();
        const i = $(".additional__inputs")
          , s = i.serializeArray();
        i[0].reset(),
        e(),
        window.sendDonateSubmit($(".popup__method-item.active").attr("data-method-name"), s)
    }),
    await yh(),
    r(Ar)
});
Lr.registerPlugin(ae);
const bh = {
    "Центральна Україна": "s1",
    "Західна Україна": "s2",
    "Східна Україна": "s3",
    "Північна Україна": "s4",
    "Південна Україна": "s5",
    "Подільський Край": "s6",
    "Тестовий сервер": "s99"
};
document.addEventListener("DOMContentLoaded", () => {
    var r = $(window).width()
      , e = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const t = document.querySelector(".main-block__start-game");
    t && (r > 768 || !e) && (t.addEventListener("mouseenter", () => {
        t.closest(".main-block").classList.add("active-image")
    }
    ),
    t.addEventListener("mouseleave", () => {
        t.closest(".main-block").classList.remove("active-image")
    }
    ));
    const i = document.querySelectorAll(".main-block__server");
    if (i.length > 0) {
        i.forEach( (h, _) => {
            _ > 3 && h.classList.add("hidden")
        }
        );
        const g = document.querySelector(".main-block__all-server");
        g && g.addEventListener("click", () => {
            g.classList.toggle("active"),
            g.classList.contains("active") ? i.forEach( (h, _) => {
                h.classList.remove("hidden")
            }
            ) : i.forEach( (h, _) => {
                _ > 3 && h.classList.add("hidden")
            }
            )
        }
        )
    }
    const s = document.querySelectorAll(".how__instruction-item");
    s.length > 0 && s.forEach(g => {
        g.addEventListener("click", () => {
            s.forEach(h => {
                h.classList.remove("how__instruction-item--active")
            }
            ),
            g.classList.add("how__instruction-item--active")
        }
        )
    }
    );
    let n = document.querySelectorAll("[data-animate-text]");
    n.length && n.forEach(g => {
        let h = g.querySelectorAll("h2,h4,h3,[data-animate-text-item]")
          , _ = [];
        h.length && h.forEach(y => {
            Lr.set(y, {
                overflow: "hidden",
                display: "block"
            });
            const v = document.createElement("span");
            v.innerHTML = y.innerHTML,
            y.innerHTML = "",
            y.appendChild(v),
            Lr.set(y.querySelector("span"), {
                yPercent: 100,
                opacity: 0,
                display: "block"
            }),
            _.push(y.querySelector("span"))
        }
        ),
        ae.batch(_, {
            interval: .1,
            start: "top 85%",
            end: "bottom top",
            trigger: g,
            onEnter: y => Lr.to(y, {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                stagger: .1
            })
        })
    }
    );
    const a = document.querySelector("[data-progress]");
    if (a) {
        const g = parseInt(a.dataset.progress)
          , h = a.querySelector(".progress-svg");
        h.getBoundingClientRect().width / 2,
        h.style.strokeDasharray = 100,
        h.style.strokeDashoffset = 100 - g
    }
    const o = document.querySelectorAll(".cabinet__skill");
    o.length > 0 && o.forEach(g => {
        const h = parseInt(g.dataset.skill);
        let _ = g.querySelectorAll(".cabinet__skill-line");
        _ = Array.from(_).filter(v => {
            if (!(window.getComputedStyle(v, null).display === "none"))
                return v
        }
        );
        const y = Math.ceil(_.length * h / 100);
        for (let v = 0; v < y; v++)
            _[v].classList.add("active")
    }
    ),
    document.addEventListener("click", function(g) {
        let h = g.target;
        if (h.closest("[data-pass-toggle]")) {
            g.preventDefault();
            const _ = h.closest(".form-item")
              , y = _.querySelector("input");
            let v = _.classList.contains("_viewpass-active") ? "password" : "text";
            y.setAttribute("type", v),
            _.classList.toggle("_viewpass-active")
        }
    });
    const l = document.querySelectorAll("[data-mask]");
    l.length > 0 && l.forEach(g => {
        const h = {
            mask: g.dataset.mask
        };
        K(g, h)
    }
    );
    const u = document.querySelectorAll("[data-server-name]")
      , c = document.querySelectorAll("[data-server-input]");
    c.length > 0 && c.forEach(g => {
        g.addEventListener("click", () => {
            Yt.open("#popup-server")
        }
        )
    }
    ),
    u.length > 0 && u.forEach(g => {
        g.addEventListener("click", h => {
            h.preventDefault();
            const _ = $("html").attr("lang");
            u.forEach(y => {
                y.classList.remove("active")
            }
            ),
            g.classList.add("active"),
            c.forEach(y => {
                const v = g.getAttribute("val");
                v && (y.hasAttribute("langInput") || y.setAttribute("langInput", ""),
                y.setAttribute("lang-input", `servers-${v}`),
                y.setAttribute("val", v));
                const b = bh[g.dataset.serverName] || "s1";
                window[_] ? y.value = window[_].servers[b] : y.value = g.dataset.serverName,
                y.dispatchEvent(new Event("input",{
                    bubbles: !0
                }))
            }
            ),
            Yt.close("#popup-server")
        }
        )
    }
    );
    const f = document.querySelector("[data-sum-input]")
      , p = document.querySelectorAll("[data-percentage]");
    if (p.length && f) {
        const g = document.querySelectorAll("[data-case]");
        g.length && g.forEach(_ => {
            _.addEventListener("click", y => {
                switch (y.preventDefault(),
                f.value = parseInt(_.dataset.case),
                f.dispatchEvent(new Event("input")),
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }),
                _.getAttribute("data-case-type")) {
                case "premium":
                    gtag("event", "buy_premium");
                    break;
                case "case":
                    gtag("event", "buy_case");
                    break;
                case "vehicle":
                    gtag("event", "buy_vehicle");
                    break
                }
            }
            )
        }
        ),
        p.forEach( (_, y) => {
            _.addEventListener("click", v => {
                v.preventDefault(),
                f.value = parseInt(_.dataset.percentage),
                f.dispatchEvent(new Event("input")),
                d(p, y)
            }
            )
        }
        );
        let h = null;
        f.addEventListener("input", _ => {
            let y = parseInt(_.target.value);
            y > 49e3 && (y = 49e3),
            h && (clearTimeout(h),
            h = null);
            let v = !1;
            for (let T = p.length - 1; T > -1; T--)
                if (y >= parseInt(p[T].dataset.percentage) && !v) {
                    h = setTimeout( () => {
                        p[T].classList.add("active"),
                        h = null
                    }
                    , 200);
                    var b = p[T].querySelector(".donate__percentage-item-value");
                    if (b)
                        var m = parseInt(b.textContent.trim().replace(/\D/g, ""));
                    v = !0
                } else
                    p[T].classList.remove("active");
            var w = 0;
            document.querySelector(".form-item__x2-icon1") !== null && y === y ? w = y : y === y ? y = y : y = 0,
            y > 0 && v && (y = y + y * (m / 100)),
            y += w,
            y = Math.floor(y),
            document.querySelector(".form-item__x2-text").textContent = y;
            const S = document.getElementById("bonus-amount");
            S && (S.textContent = y.toLocaleString("en-US"))
        }
        )
    }
    function d(g, h, _="active") {
        g.forEach( (y, v) => {
            h === v ? y.classList.add(_) : y.classList.remove(_)
        }
        )
    }
}
);
$(function() {
    const r = document.getElementById("custom-tooltip");
    if (!r)
        return;
    const e = document.querySelectorAll("[data-tooltip]");
    async function t(n) {
        const a = n.currentTarget
          , o = a.getAttribute("data-tooltip");
        if (!o || !o.length || r.classList.contains("show"))
            return;
        r.classList.add("show"),
        r.innerHTML = o,
        await new Promise(d => setTimeout(d, 10));
        const l = r.clientHeight
          , u = r.offsetWidth
          , c = a.getBoundingClientRect()
          , f = c.x + c.width - u + 15
          , p = c.top + window.scrollY - l - 10;
        r.style.left = `${f}px`,
        r.style.top = `${p}px`
    }
    function i() {
        r.classList.remove("show"),
        r.style.left = "-200vh",
        r.style.top = "-200vh"
    }
    function s(n) {
        !r.classList.contains("show") || n.target === r || i()
    }
    document.addEventListener("click", s);
    for (const n of e)
        n.addEventListener("mouseenter", t),
        n.addEventListener("mouseleave", i),
        n.addEventListener("click", async a => {
            a.preventDefault(),
            a.stopPropagation(),
            t(a)
        }
        )
});
$(function() {
    const r = document.getElementById("pay-btn")
      , e = document.querySelector('[name="donate-form-server"]')
      , t = document.querySelector('[name="donate-form-login"]')
      , i = document.querySelector('[name="donate-form-amount"]')
      , s = document.querySelector('[name="donate-form-terms"]');
    if (!r || !e || !t || !i || !s)
        return;
    function n(u) {
        const c = u.currentTarget;
        if (u.currentTarget.getAttribute("type") === "checkbox") {
            const p = c.closest(".checkbox");
            p.classList.contains("checkbox-alert") && p.classList.remove("checkbox-alert")
        } else
            switch (c.closest(".form-item__input-wrap").classList.remove("with-alert"),
            u.currentTarget.getAttribute("name")) {
            case "donate-form-amount":
                u.currentTarget.value == "e" ? u.currentTarget.value = "" : u.currentTarget.value > 49e3 && (u.currentTarget.value = 49e3);
                break
            }
        i.value.length && t.value.length && e.value.length && s.checked ? r.classList.remove("disabled") : r.classList.add("disabled")
    }
    function a(u) {
        const c = u.currentTarget.closest(".form-item__input-wrap");
        if (!u.currentTarget.value.length) {
            c.classList.add("with-alert"),
            c.querySelector(".form-item__icon-alert").setAttribute("data-tooltip", "Обов'язкове поле");
            return
        }
        switch (u.currentTarget.getAttribute("name")) {
        case "donate-form-amount":
            const f = Number(u.currentTarget.value);
            if (isNaN(f) || f <= 0 || f > 49e3) {
                c.classList.add("with-alert"),
                c.querySelector(".form-item__icon-alert").setAttribute("data-tooltip", "Сума має бути від 1 до 49000");
                return
            }
            break
        }
    }
    t.addEventListener("blur", a),
    i.addEventListener("blur", a),
    e.addEventListener("input", n),
    t.addEventListener("input", n),
    i.addEventListener("input", n),
    s.addEventListener("change", n);
    function o() {
        const u = [];
        if (!e.value.length) {
            const c = e.closest(".form-item__input-wrap");
            c.classList.add("with-alert"),
            c.querySelector(".form-item__icon-alert").setAttribute("data-tooltip", "Обов'язкове поле"),
            u.push("server")
        }
        if (!t.value.length) {
            const c = t.closest(".form-item__input-wrap");
            c.classList.add("with-alert"),
            c.querySelector(".form-item__icon-alert").setAttribute("data-tooltip", "Обов'язкове поле"),
            u.push("account")
        }
        if (!i.value.length) {
            const c = i.closest(".form-item__input-wrap");
            c.classList.add("with-alert"),
            c.querySelector(".form-item__icon-alert").setAttribute("data-tooltip", "Обов'язкове поле"),
            u.push("amount")
        }
        return s.checked || (s.closest(".checkbox").classList.add("checkbox-alert"),
        u.push("terms")),
        u
    }
    document.getElementById("pay-btn").addEventListener("click", function(u) {
        o().length && u.preventDefault()
    })
});
const wh = (r, e) => {
    $("html").attr("lang", e);
    for (const t in r) {
        const i = r[t];
        for (const s in i) {
            const n = i[s];
            $(`[custom-lang="${t}-${s}"]`).each( (l, u) => {
                const c = u.hasAttribute("langInner")
                  , f = u.hasAttribute("langPlaceholder");
                c ? u.innerHTML = n : f ? u.setAttribute("placeholder", n) : u.textContent = n
            }
            ),
            $(`[lang-input="${t}-${s}"]`).each( (l, u) => {
                u.value = n
            }
            )
        }
    }
}
;
$(async function() {
    let r = $("html").attr("lang");
    const e = new FormData;
    e.append("lang", r),
    e.append("rewrite", 0);
    const i = await (await fetch("/ajax/setLang", {
        method: "POST",
        body: e
    })).json();
    window[r] = i;
    const s = $(".lang-select").toArray();
    document.addEventListener("selectCallback", async function(n) {
        const a = n.detail.select;
        let o = !1;
        if (s.forEach(f => {
            o || f === a && (o = !0)
        }
        ),
        !o)
            return;
        const l = $(a).next().find("._select-selected");
        if (!l.length)
            return;
        const u = l.attr("data-value");
        if (u === r)
            return;
        try {
            const f = new FormData;
            f.append("lang", u),
            f.append("rewrite", 1);
            const d = await (await fetch("/ajax/setLang", {
                method: "POST",
                body: f
            })).json();
            window[u] = d
        } catch (f) {
            console.log(f);
            return
        }
        const c = window.location.pathname.replace(`${r}/`, `${u}/`);
        history.pushState(null, "", window.location.origin + c),
        r = u,
        wh(window[u], u)
    })
});
$(async function() {
    const r = $(".support-text")
      , e = $(".telegram-btn")
      , t = $(".cookie-container");
    async function i() {
        t.addClass("hide"),
        await new Promise(n => setTimeout(n, 300)),
        r.removeClass("with-cookie"),
        e.removeClass("with-cookie")
    }
    await new Promise(n => setTimeout(n, 1e3));
    const s = localStorage.getItem("consentMode") !== null;
    if (r.length && (!s && r.addClass("with-cookie"),
    r.removeClass("hide")),
    e.length && (!s && e.addClass("with-cookie"),
    e.removeClass("hide")),
    s)
        t.remove();
    else {
        t.removeClass("hide");
        const n = $("#accept-cookie")
          , a = $("#cancel-cookie");
        n.click( () => {
            const o = {
                ad_storage: "granted",
                ad_personalization: "granted",
                ad_user_data: "granted",
                analytics_storage: "granted"
            };
            gtag("consent", "update", o),
            localStorage.setItem("consentMode", JSON.stringify(o)),
            i()
        }
        ),
        a.click(i)
    }
});
class Sh {
    constructor(e, t=null) {
        let i = {
            init: !0,
            logging: !0,
            speed: 150
        };
        if (this.config = Object.assign(i, e),
        this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
            classSelectPseudoLabel: "_select-pseudo-label"
        },
        this._this = this,
        this.config.init) {
            const s = t ? document.querySelectorAll(t) : document.querySelectorAll("select");
            s.length ? (this.selectsInit(s),
            this.setLogging(`Прокинувся, построїв селектов: (${s.length})`)) : this.setLogging("Сплю, немає жодного select")
        }
    }
    getSelectClass(e) {
        return `.${e}`
    }
    getSelectElement(e, t) {
        return {
            originalSelect: e.querySelector("select"),
            selectElement: e.querySelector(this.getSelectClass(t))
        }
    }
    selectsInit(e) {
        e.forEach( (t, i) => {
            this.selectInit(t, i + 1)
        }
        ),
        document.addEventListener("click", (function(t) {
            this.selectsActions(t)
        }
        ).bind(this)),
        document.addEventListener("keydown", (function(t) {
            this.selectsActions(t)
        }
        ).bind(this)),
        document.addEventListener("focusin", (function(t) {
            this.selectsActions(t)
        }
        ).bind(this)),
        document.addEventListener("focusout", (function(t) {
            this.selectsActions(t)
        }
        ).bind(this))
    }
    selectInit(e, t) {
        const i = this;
        let s = document.createElement("div");
        s.classList.add(this.selectClasses.classSelect),
        e.parentNode.insertBefore(s, e),
        s.appendChild(e),
        e.hidden = !0,
        t && (e.dataset.id = t),
        this.getSelectPlaceholder(e) && (e.dataset.placeholder = this.getSelectPlaceholder(e).value,
        this.getSelectPlaceholder(e).label.show && this.getSelectElement(s, this.selectClasses.classSelectTitle).selectElement.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(e).label.text ? this.getSelectPlaceholder(e).label.text : this.getSelectPlaceholder(e).value}</span>`)),
        s.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`),
        this.selectBuild(e),
        e.dataset.speed = e.dataset.speed ? e.dataset.speed : this.config.speed,
        this.config.speed = +e.dataset.speed,
        e.addEventListener("change", function(n) {
            i.selectChange(n)
        })
    }
    selectBuild(e) {
        const t = e.parentElement;
        t.dataset.id = e.dataset.id,
        e.dataset.classModif && t.classList.add(`select_${e.dataset.classModif}`),
        e.multiple ? t.classList.add(this.selectClasses.classSelectMultiple) : t.classList.remove(this.selectClasses.classSelectMultiple),
        e.hasAttribute("data-checkbox") && e.multiple ? t.classList.add(this.selectClasses.classSelectCheckBox) : t.classList.remove(this.selectClasses.classSelectCheckBox),
        this.setSelectTitleValue(t, e),
        this.setOptions(t, e),
        e.hasAttribute("data-search") && this.searchActions(t),
        e.hasAttribute("data-open") && this.selectAction(t),
        this.selectDisabled(t, e)
    }
    selectsActions(e) {
        const t = e.target
          , i = e.type;
        if (t.closest(this.getSelectClass(this.selectClasses.classSelect)) || t.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
            const s = t.closest(".select") ? t.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${t.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`)
              , n = this.getSelectElement(s).originalSelect;
            if (i === "click") {
                if (!n.disabled) {
                    if (t.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                        const a = t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
                          , o = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${a.dataset.selectId}"] .select__option[data-value="${a.dataset.value}"]`);
                        this.optionAction(s, n, o)
                    } else if (t.closest(this.getSelectClass(this.selectClasses.classSelectTitle)))
                        this.selectAction(s);
                    else if (t.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                        const a = t.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                        this.optionAction(s, n, a)
                    }
                }
            } else
                i === "focusin" || i === "focusout" ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) && (i === "focusin" ? s.classList.add(this.selectClasses.classSelectFocus) : s.classList.remove(this.selectClasses.classSelectFocus)) : i === "keydown" && e.code === "Escape" && this.selectsСlose()
        } else
            this.selectsСlose()
    }
    selectsСlose(e) {
        const i = (e || document).querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
        i.length && i.forEach(s => {
            this.selectСlose(s)
        }
        )
    }
    selectСlose(e) {
        const t = this.getSelectElement(e).originalSelect
          , i = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement;
        i.classList.contains("_slide") || (e.classList.remove(this.selectClasses.classSelectOpen),
        tn(i, t.dataset.speed),
        setTimeout( () => {
            e.style.zIndex = ""
        }
        , t.dataset.speed))
    }
    selectAction(e) {
        const t = this.getSelectElement(e).originalSelect
          , i = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement
          , s = t.dataset.zIndex ? t.dataset.zIndex : 3;
        if (this.setOptionsPosition(e),
        t.closest("[data-one-select]")) {
            const n = t.closest("[data-one-select]");
            this.selectsСlose(n)
        }
        setTimeout( () => {
            i.classList.contains("_slide") || (e.classList.toggle(this.selectClasses.classSelectOpen),
            Xc(i, t.dataset.speed),
            e.classList.contains(this.selectClasses.classSelectOpen) ? e.style.zIndex = s : setTimeout( () => {
                e.style.zIndex = ""
            }
            , t.dataset.speed))
        }
        , 0)
    }
    setSelectTitleValue(e, t) {
        const i = this.getSelectElement(e, this.selectClasses.classSelectBody).selectElement
          , s = this.getSelectElement(e, this.selectClasses.classSelectTitle).selectElement;
        s && s.remove(),
        i.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t)),
        t.hasAttribute("data-search") && this.searchActions(e)
    }
    getSelectTitleValue(e, t) {
        const i = this.getSelectedOptionsData(t, 2);
        let s = i.html;
        t.multiple && t.hasAttribute("data-tags") && (s = this.getSelectedOptionsData(t).elements.map(l => `<span role="button" data-select-id="${e.dataset.id}" data-value="${l.value}" class="_select-tag">${this.getSelectElementContent(l)}</span>`).join(""),
        t.dataset.tags && document.querySelector(t.dataset.tags) && (document.querySelector(t.dataset.tags).innerHTML = s,
        t.hasAttribute("data-search") && (s = !1)));
        let n = i.lang.length ? i.lang[0] : "";
        s = s.length ? s : t.dataset.placeholder ? t.dataset.placeholder : "";
        let a = ""
          , o = "";
        if (t.hasAttribute("data-pseudo-label") && (a = t.dataset.pseudoLabel ? ` data-pseudo-label="${t.dataset.pseudoLabel}"` : ' data-pseudo-label="Заповніть атрибут"',
        o = ` ${this.selectClasses.classSelectPseudoLabel}`),
        this.getSelectedOptionsData(t).values.length ? e.classList.add(this.selectClasses.classSelectActive) : e.classList.remove(this.selectClasses.classSelectActive),
        t.hasAttribute("data-search"))
            return `<div class="${this.selectClasses.classSelectTitle}"><span${a} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}" "></span></div>`;
        {
            const l = this.getSelectedOptionsData(t).elements.length && this.getSelectedOptionsData(t).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}` : "";
            return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${a} class="${this.selectClasses.classSelectValue}${o}"><span class="${this.selectClasses.classSelectContent}${l}" custom-lang="${n}">${s}</span></span></button>`
        }
    }
    getSelectElementLang(e) {
        return e.getAttribute("custom-lang") || ""
    }
    getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : ""
          , i = t.indexOf("/") >= 0 ? `<img src="${t}" alt="">` : t;
        let s = "";
        return s += t ? `<span class="${this.selectClasses.classSelectRow}">` : "",
        s += t ? `<span class="${this.selectClasses.classSelectData}">` : "",
        s += t ? i : "",
        s += t ? "</span>" : "",
        s += t ? `<span class="${this.selectClasses.classSelectText}">` : "",
        s += e.textContent,
        s += t ? "</span>" : "",
        s += t ? "</span>" : "",
        s
    }
    getSelectPlaceholder(e) {
        const t = Array.from(e.options).find(i => !i.value);
        if (t)
            return {
                value: t.textContent,
                show: t.hasAttribute("data-show"),
                label: {
                    show: t.hasAttribute("data-label"),
                    text: t.dataset.label
                }
            }
    }
    getSelectedOptionsData(e, t) {
        let i = [];
        return e.multiple ? i = Array.from(e.options).filter(s => s.value).filter(s => s.selected) : i.push(e.options[e.selectedIndex]),
        {
            elements: i.map(s => s),
            values: i.filter(s => s.value).map(s => s.value),
            html: i.map(s => this.getSelectElementContent(s)),
            lang: i.map(s => this.getSelectElementLang(s))
        }
    }
    getOptions(e) {
        const t = e.hasAttribute("data-scroll") ? "data-simplebar" : ""
          , i = +e.dataset.scroll ? +e.dataset.scroll : null;
        let s = Array.from(e.options);
        if (s.length > 0) {
            let n = "";
            return (this.getSelectPlaceholder(e) && !this.getSelectPlaceholder(e).show || e.multiple) && (s = s.filter(a => a.value)),
            n += `<div ${t} ${t ? `style="max-height: ${i}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`,
            s.forEach(a => {
                n += this.getOption(a, e)
            }
            ),
            n += "</div>",
            n
        }
    }
    getOption(e, t) {
        const i = e.selected ? ` ${this.selectClasses.classSelectOptionSelected}` : ""
          , s = e.selected && !t.hasAttribute("data-show-selected") && !t.multiple ? "hidden" : ""
          , n = e.getAttribute("custom-lang")
          , a = e.dataset.class ? ` ${e.dataset.class}` : ""
          , o = e.dataset.href ? e.dataset.href : !1
          , l = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let u = "";
        return u += o ? `<a ${l} ${s} href="${o}" custom-lang="${n}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${a}${i}">` : `<button custom-lang="${n}" ${s} class="${this.selectClasses.classSelectOption}${a}${i}" data-value="${e.value}" type="button">`,
        u += this.getSelectElementContent(e),
        u += o ? "</a>" : "</button>",
        u
    }
    setOptions(e, t) {
        const i = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement;
        i.innerHTML = this.getOptions(t)
    }
    setOptionsPosition(e) {
        const t = this.getSelectElement(e).originalSelect
          , i = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement
          , s = this.getSelectElement(e, this.selectClasses.classSelectOptionsScroll).selectElement
          , n = +t.dataset.scroll ? `${+t.dataset.scroll}px` : ""
          , a = +t.dataset.optionsMargin ? +t.dataset.optionsMargin : 10;
        if (e.classList.contains(this.selectClasses.classSelectOpen))
            setTimeout( () => {
                e.classList.remove("select--show-top"),
                s.style.maxHeight = n
            }
            , +t.dataset.speed);
        else {
            i.hidden = !1;
            const o = s.offsetHeight ? s.offsetHeight : parseInt(window.getComputedStyle(s).getPropertyValue("max-height"))
              , l = i.offsetHeight > o ? i.offsetHeight : o + i.offsetHeight
              , u = l - o;
            i.hidden = !0;
            const c = e.offsetHeight
              , f = e.getBoundingClientRect().top
              , p = f + l + c + u
              , d = window.innerHeight - (p + a);
            if (d < 0) {
                const g = l + d;
                g < 100 ? (e.classList.add("select--show-top"),
                s.style.maxHeight = f < l ? `${f - (l - f)}px` : n) : (e.classList.remove("select--show-top"),
                s.style.maxHeight = `${g}px`)
            }
        }
    }
    optionAction(e, t, i) {
        e.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`).classList.contains("_slide") || (t.multiple ? (this.getSelectedOptionsData(t).elements.forEach(o => {
            o.removeAttribute("selected")
        }
        ),
        e.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected)).forEach(o => {
            t.querySelector(`option[value = "${o.dataset.value}"]`).setAttribute("selected", "selected")
        }
        )) : (e.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelectOption)}`).forEach(n => {
            n.classList.remove(this.selectClasses.classSelectOptionSelected)
        }
        ),
        i.classList.add(this.selectClasses.classSelectOptionSelected),
        t.hasAttribute("data-show-selected") || setTimeout( () => {
            e.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`) && (e.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = !1),
            i.hidden = !0
        }
        , this.config.speed),
        t.value = i.hasAttribute("data-value") ? i.dataset.value : i.textContent,
        this.selectAction(e)),
        this.setSelectTitleValue(e, t),
        this.setSelectChange(t))
    }
    selectChange(e) {
        const t = e.target;
        this.selectBuild(t),
        this.setSelectChange(t)
    }
    setSelectChange(e) {
        if (e.hasAttribute("data-validate") && formValidate.validateInput(e),
        e.hasAttribute("data-submit") && e.value) {
            let i = document.createElement("button");
            i.type = "submit",
            e.closest("form").append(i),
            i.click(),
            i.remove()
        }
        const t = e.parentElement;
        this.selectCallback(t, e)
    }
    selectDisabled(e, t) {
        t.disabled ? (e.classList.add(this.selectClasses.classSelectDisabled),
        this.getSelectElement(e, this.selectClasses.classSelectTitle).selectElement.disabled = !0) : (e.classList.remove(this.selectClasses.classSelectDisabled),
        this.getSelectElement(e, this.selectClasses.classSelectTitle).selectElement.disabled = !1)
    }
    searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(e, this.selectClasses.classSelectInput).selectElement
          , i = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement
          , s = i.querySelectorAll(`.${this.selectClasses.classSelectOption} `)
          , n = this;
        t.addEventListener("input", function() {
            s.forEach(a => {
                a.textContent.toUpperCase().includes(t.value.toUpperCase()) ? a.hidden = !1 : a.hidden = !0
            }
            ),
            i.hidden === !0 && n.selectAction(e)
        })
    }
    selectCallback(e, t) {
        document.dispatchEvent(new CustomEvent("selectCallback",{
            detail: {
                select: t,
                selectItem: e
            }
        }))
    }
    setLogging(e) {}
}
let Zc = !1;
function xh() {
    Zc = !0;
    const r = document.querySelector("header.header")
      , e = r.hasAttribute("data-scroll-show")
      , t = r.dataset.scrollShow ? r.dataset.scrollShow : 500
      , i = r.dataset.scroll ? r.dataset.scroll : 1;
    let s = 0, n;
    $(function() {
        window.scrollY !== 0 && r.classList.add("_header-scroll")
    }),
    document.addEventListener("windowScroll", function(a) {
        const o = window.scrollY;
        clearTimeout(n),
        o >= i ? (r.classList.contains("_header-scroll") || r.classList.add("_header-scroll"),
        e && (o > s ? r.classList.contains("_header-show") && r.classList.remove("_header-show") : r.classList.contains("_header-show") || r.classList.add("_header-show"),
        n = setTimeout( () => {
            r.classList.contains("_header-show") || r.classList.add("_header-show")
        }
        , t))) : (r.classList.contains("_header-scroll") && r.classList.remove("_header-scroll"),
        e && r.classList.contains("_header-show") && r.classList.remove("_header-show")),
        s = o <= 0 ? 0 : o
    })
}
setTimeout( () => {
    if (Zc) {
        let r = new Event("windowScroll");
        window.addEventListener("scroll", function(e) {
            document.dispatchEvent(r)
        })
    }
}
, 0);
class Ch {
    constructor(e) {
        let t = {
            logging: !0,
            init: !0,
            attributeOpenButton: "data-popup",
            attributeCloseButton: "data-close",
            fixElementSelector: "[data-lp]",
            youtubeAttribute: "data-popup-youtube",
            youtubePlaceAttribute: "data-popup-youtube-place",
            setAutoplayYoutube: !0,
            classes: {
                popup: "popup",
                popupContent: "popup__content",
                popupActive: "popup_show",
                bodyActive: "popup-show"
            },
            focusCatch: !0,
            closeEsc: !0,
            bodyLock: !0,
            hashSettings: {
                location: !0,
                goHash: !0
            },
            on: {
                beforeOpen: function() {},
                afterOpen: function() {},
                beforeClose: function() {},
                afterClose: function() {}
            }
        };
        this.youTubeCode,
        this.isOpen = !1,
        this.targetOpen = {
            selector: !1,
            element: !1
        },
        this.previousOpen = {
            selector: !1,
            element: !1
        },
        this.lastClosed = {
            selector: !1,
            element: !1
        },
        this._dataValue = !1,
        this.hash = !1,
        this._reopen = !1,
        this._selectorOpen = !1,
        this.lastFocusEl = !1,
        this._focusEl = ["a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
        this.options = {
            ...t,
            ...e,
            classes: {
                ...t.classes,
                ...e == null ? void 0 : e.classes
            },
            hashSettings: {
                ...t.hashSettings,
                ...e == null ? void 0 : e.hashSettings
            },
            on: {
                ...t.on,
                ...e == null ? void 0 : e.on
            }
        },
        this.bodyLock = !1,
        this.options.init && this.initPopups()
    }
    initPopups() {
        this.eventsPopup()
    }
    eventsPopup() {
        document.addEventListener("click", (function(e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t) {
                if (e.preventDefault(),
                this._dataValue = t.getAttribute(this.options.attributeOpenButton) ? t.getAttribute(this.options.attributeOpenButton) : "error",
                this.youTubeCode = t.getAttribute(this.options.youtubeAttribute) ? t.getAttribute(this.options.youtubeAttribute) : null,
                this._dataValue !== "error") {
                    this.isOpen || (this.lastFocusEl = t),
                    this.targetOpen.selector = `${this._dataValue}`,
                    this._selectorOpen = !0,
                    this.open();
                    return
                }
                return
            }
            if (e.target.closest(`[${this.options.attributeCloseButton}]`) || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                e.preventDefault(),
                this.close();
                return
            }
        }
        ).bind(this)),
        document.addEventListener("keydown", (function(e) {
            if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                e.preventDefault(),
                this.close();
                return
            }
            if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                this._focusCatch(e);
                return
            }
        }
        ).bind(this)),
        this.options.hashSettings.goHash && (window.addEventListener("hashchange", (function() {
            window.location.hash ? this._openToHash() : this.close(this.targetOpen.selector)
        }
        ).bind(this)),
        window.addEventListener("load", (function() {
            window.location.hash && this._openToHash()
        }
        ).bind(this)))
    }
    open(e) {
        if (Yi && (this.bodyLock = !!(document.documentElement.classList.contains("lock") && !this.isOpen),
        e && typeof e == "string" && e.trim() !== "" && (this.targetOpen.selector = e,
        this._selectorOpen = !0),
        this.isOpen && (this._reopen = !0,
        this.close()),
        this._selectorOpen || (this.targetOpen.selector = this.lastClosed.selector),
        this._reopen || (this.previousActiveElement = document.activeElement),
        this.targetOpen.element = document.querySelector(this.targetOpen.selector),
        this.targetOpen.element)) {
            if (this.youTubeCode) {
                const i = `https://www.youtube.com/embed/${this.youTubeCode}?rel=0&showinfo=0&autoplay=1`
                  , s = document.createElement("iframe");
                s.setAttribute("allowfullscreen", "");
                const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
                s.setAttribute("allow", `${n}; encrypted-media`),
                s.setAttribute("src", i),
                this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`) || this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, ""),
                this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(s)
            }
            this.options.hashSettings.location && (this._getHash(),
            this._setHash()),
            this.options.on.beforeOpen(this),
            document.dispatchEvent(new CustomEvent("beforePopupOpen",{
                detail: {
                    popup: this
                }
            })),
            this.targetOpen.element.classList.add(this.options.classes.popupActive),
            document.documentElement.classList.add(this.options.classes.bodyActive),
            this._reopen ? this._reopen = !1 : this.bodyLock || jc(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            this.previousOpen.selector = this.targetOpen.selector,
            this.previousOpen.element = this.targetOpen.element,
            this._selectorOpen = !1,
            this.isOpen = !0,
            setTimeout( () => {
                this._focusTrap()
            }
            , 50),
            this.options.on.afterOpen(this),
            document.dispatchEvent(new CustomEvent("afterPopupOpen",{
                detail: {
                    popup: this
                }
            }))
        }
    }
    close(e) {
        e && typeof e == "string" && e.trim() !== "" && (this.previousOpen.selector = e),
        !(!this.isOpen || !Yi) && (this.options.on.beforeClose(this),
        document.dispatchEvent(new CustomEvent("beforePopupClose",{
            detail: {
                popup: this
            }
        })),
        this.youTubeCode && this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`) && (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = ""),
        this.previousOpen.element.classList.remove(this.options.classes.popupActive),
        this.previousOpen.element.setAttribute("aria-hidden", "true"),
        this._reopen || (document.documentElement.classList.remove(this.options.classes.bodyActive),
        this.bodyLock || Wc(),
        this.isOpen = !1),
        this._removeHash(),
        this._selectorOpen && (this.lastClosed.selector = this.previousOpen.selector,
        this.lastClosed.element = this.previousOpen.element),
        this.options.on.afterClose(this),
        document.dispatchEvent(new CustomEvent("afterPopupClose",{
            detail: {
                popup: this
            }
        })),
        setTimeout( () => {
            this._focusTrap()
        }
        , 50))
    }
    _getHash() {
        this.options.hashSettings.location && (this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#"))
    }
    _openToHash() {
        let e = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
        const t = document.querySelector(`[${this.options.attributeOpenButton} = "${e}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${e}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${e.replace(".", "#")}"]`);
        this.youTubeCode = t.getAttribute(this.options.youtubeAttribute) ? t.getAttribute(this.options.youtubeAttribute) : null,
        t && e && this.open(e)
    }
    _setHash() {
        history.pushState("", "", this.hash)
    }
    _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0])
    }
    _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl)
          , i = Array.prototype.slice.call(t)
          , s = i.indexOf(document.activeElement);
        e.shiftKey && s === 0 && (i[i.length - 1].focus(),
        e.preventDefault()),
        !e.shiftKey && s === i.length - 1 && (i[0].focus(),
        e.preventDefault())
    }
    _focusTrap() {}
}
function ql(r) {
    return r !== null && typeof r == "object" && "constructor"in r && r.constructor === Object
}
function Ko(r, e) {
    r === void 0 && (r = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t => {
        typeof r[t] > "u" ? r[t] = e[t] : ql(e[t]) && ql(r[t]) && Object.keys(e[t]).length > 0 && Ko(r[t], e[t])
    }
    )
}
const Qc = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function Wi() {
    const r = typeof document < "u" ? document : {};
    return Ko(r, Qc),
    r
}
const Th = {
    document: Qc,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(r) {
        return typeof setTimeout > "u" ? (r(),
        null) : setTimeout(r, 0)
    },
    cancelAnimationFrame(r) {
        typeof setTimeout > "u" || clearTimeout(r)
    }
};
function ri() {
    const r = typeof window < "u" ? window : {};
    return Ko(r, Th),
    r
}
function Eh(r) {
    return r === void 0 && (r = ""),
    r.trim().split(" ").filter(e => !!e.trim())
}
function kh(r) {
    const e = r;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function _o(r, e) {
    return e === void 0 && (e = 0),
    setTimeout(r, e)
}
function ia() {
    return Date.now()
}
function Ah(r) {
    const e = ri();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(r, null)),
    !t && r.currentStyle && (t = r.currentStyle),
    t || (t = r.style),
    t
}
function Oh(r, e) {
    e === void 0 && (e = "x");
    const t = ri();
    let i, s, n;
    const a = Ah(r);
    return t.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform,
    s.split(",").length > 6 && (s = s.split(", ").map(o => o.replace(",", ".")).join(", ")),
    n = new t.WebKitCSSMatrix(s === "none" ? "" : s)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    i = n.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? s = n.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])),
    e === "y" && (t.WebKitCSSMatrix ? s = n.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])),
    s || 0
}
function Tn(r) {
    return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object"
}
function Mh(r) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? r instanceof HTMLElement : r && (r.nodeType === 1 || r.nodeType === 11)
}
function Zt() {
    const r = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (i != null && !Mh(i)) {
            const s = Object.keys(Object(i)).filter(n => e.indexOf(n) < 0);
            for (let n = 0, a = s.length; n < a; n += 1) {
                const o = s[n]
                  , l = Object.getOwnPropertyDescriptor(i, o);
                l !== void 0 && l.enumerable && (Tn(r[o]) && Tn(i[o]) ? i[o].__swiper__ ? r[o] = i[o] : Zt(r[o], i[o]) : !Tn(r[o]) && Tn(i[o]) ? (r[o] = {},
                i[o].__swiper__ ? r[o] = i[o] : Zt(r[o], i[o])) : r[o] = i[o])
            }
        }
    }
    return r
}
function En(r, e, t) {
    r.style.setProperty(e, t)
}
function Jc(r) {
    let {swiper: e, targetPosition: t, side: i} = r;
    const s = ri()
      , n = -e.translate;
    let a = null, o;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    s.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > n ? "next" : "prev"
      , c = (p, d) => u === "next" && p >= d || u === "prev" && p <= d
      , f = () => {
        o = new Date().getTime(),
        a === null && (a = o);
        const p = Math.max(Math.min((o - a) / l, 1), 0)
          , d = .5 - Math.cos(p * Math.PI) / 2;
        let g = n + d * (t - n);
        if (c(g, t) && (g = t),
        e.wrapperEl.scrollTo({
            [i]: g
        }),
        c(g, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [i]: g
                })
            }
            ),
            s.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = s.requestAnimationFrame(f)
    }
    ;
    f()
}
function Zo(r) {
    return r.querySelector(".swiper-slide-transform") || r.shadowRoot && r.shadowRoot.querySelector(".swiper-slide-transform") || r
}
function Di(r, e) {
    return e === void 0 && (e = ""),
    [...r.children].filter(t => t.matches(e))
}
function sa(r) {
    try {
        console.warn(r);
        return
    } catch {}
}
function sn(r, e) {
    e === void 0 && (e = []);
    const t = document.createElement(r);
    return t.classList.add(...Array.isArray(e) ? e : Eh(e)),
    t
}
function Ih(r, e) {
    const t = [];
    for (; r.previousElementSibling; ) {
        const i = r.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        r = i
    }
    return t
}
function Lh(r, e) {
    const t = [];
    for (; r.nextElementSibling; ) {
        const i = r.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        r = i
    }
    return t
}
function rs(r, e) {
    return ri().getComputedStyle(r, null).getPropertyValue(e)
}
function ra(r) {
    let e = r, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function ed(r, e) {
    const t = [];
    let i = r.parentElement;
    for (; i; )
        e ? i.matches(e) && t.push(i) : t.push(i),
        i = i.parentElement;
    return t
}
function Dh(r, e) {
    function t(i) {
        i.target === r && (e.call(r, i),
        r.removeEventListener("transitionend", t))
    }
    e && r.addEventListener("transitionend", t)
}
function yo(r, e, t) {
    const i = ri();
    return t ? r[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : r.offsetWidth
}
let Fa;
function Ph() {
    const r = ri()
      , e = Wi();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in r || r.DocumentTouch && e instanceof r.DocumentTouch)
    }
}
function td() {
    return Fa || (Fa = Ph()),
    Fa
}
let Ba;
function Fh(r) {
    let {userAgent: e} = r === void 0 ? {} : r;
    const t = td()
      , i = ri()
      , s = i.navigator.platform
      , n = e || i.navigator.userAgent
      , a = {
        ios: !1,
        android: !1
    }
      , o = i.screen.width
      , l = i.screen.height
      , u = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const f = n.match(/(iPod)(.*OS\s([\d_]+))?/)
      , p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , d = s === "Win32";
    let g = s === "MacIntel";
    const h = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && g && t.touch && h.indexOf(`${o}x${l}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/),
    c || (c = [0, 1, "13_0_0"]),
    g = !1),
    u && !d && (a.os = "android",
    a.android = !0),
    (c || p || f) && (a.os = "ios",
    a.ios = !0),
    a
}
function Bh(r) {
    return r === void 0 && (r = {}),
    Ba || (Ba = Fh(r)),
    Ba
}
let Ra;
function Rh() {
    const r = ri();
    let e = !1;
    function t() {
        const i = r.navigator.userAgent.toLowerCase();
        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    if (t()) {
        const i = String(r.navigator.userAgent);
        if (i.includes("Version/")) {
            const [s,n] = i.split("Version/")[1].split(" ")[0].split(".").map(a => Number(a));
            e = s < 16 || s === 16 && n < 2
        }
    }
    return {
        isSafari: e || t(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
    }
}
function $h() {
    return Ra || (Ra = Rh()),
    Ra
}
function Vh(r) {
    let {swiper: e, on: t, emit: i} = r;
    const s = ri();
    let n = null
      , a = null;
    const o = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"),
        i("resize"))
    }
      , l = () => {
        !e || e.destroyed || !e.initialized || (n = new ResizeObserver(f => {
            a = s.requestAnimationFrame( () => {
                const {width: p, height: d} = e;
                let g = p
                  , h = d;
                f.forEach(_ => {
                    let {contentBoxSize: y, contentRect: v, target: b} = _;
                    b && b !== e.el || (g = v ? v.width : (y[0] || y).inlineSize,
                    h = v ? v.height : (y[0] || y).blockSize)
                }
                ),
                (g !== p || h !== d) && o()
            }
            )
        }
        ),
        n.observe(e.el))
    }
      , u = () => {
        a && s.cancelAnimationFrame(a),
        n && n.unobserve && e.el && (n.unobserve(e.el),
        n = null)
    }
      , c = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange")
    }
    ;
    t("init", () => {
        if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
            l();
            return
        }
        s.addEventListener("resize", o),
        s.addEventListener("orientationchange", c)
    }
    ),
    t("destroy", () => {
        u(),
        s.removeEventListener("resize", o),
        s.removeEventListener("orientationchange", c)
    }
    )
}
function zh(r) {
    let {swiper: e, extendParams: t, on: i, emit: s} = r;
    const n = []
      , a = ri()
      , o = function(c, f) {
        f === void 0 && (f = {});
        const p = a.MutationObserver || a.WebkitMutationObserver
          , d = new p(g => {
            if (e.__preventObserver__)
                return;
            if (g.length === 1) {
                s("observerUpdate", g[0]);
                return
            }
            const h = function() {
                s("observerUpdate", g[0])
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(h) : a.setTimeout(h, 0)
        }
        );
        d.observe(c, {
            attributes: typeof f.attributes > "u" ? !0 : f.attributes,
            childList: typeof f.childList > "u" ? !0 : f.childList,
            characterData: typeof f.characterData > "u" ? !0 : f.characterData
        }),
        n.push(d)
    }
      , l = () => {
        if (e.params.observer) {
            if (e.params.observeParents) {
                const c = ed(e.hostEl);
                for (let f = 0; f < c.length; f += 1)
                    o(c[f])
            }
            o(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            o(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , u = () => {
        n.forEach(c => {
            c.disconnect()
        }
        ),
        n.splice(0, n.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    i("init", l),
    i("destroy", u)
}
var Nh = {
    on(r, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const s = t ? "unshift" : "push";
        return r.split(" ").forEach(n => {
            i.eventsListeners[n] || (i.eventsListeners[n] = []),
            i.eventsListeners[n][s](e)
        }
        ),
        i
    },
    once(r, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        function s() {
            i.off(r, s),
            s.__emitterProxy && delete s.__emitterProxy;
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                a[o] = arguments[o];
            e.apply(i, a)
        }
        return s.__emitterProxy = e,
        i.on(r, s, t)
    },
    onAny(r, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof r != "function")
            return t;
        const i = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(r) < 0 && t.eventsAnyListeners[i](r),
        t
    },
    offAny(r) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(r);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(r, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || r.split(" ").forEach(i => {
            typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach( (s, n) => {
                (s === e || s.__emitterProxy && s.__emitterProxy === e) && t.eventsListeners[i].splice(n, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const r = this;
        if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
            return r;
        let e, t, i;
        for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
            n[a] = arguments[a];
        return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0],
        t = n.slice(1, n.length),
        i = r) : (e = n[0].events,
        t = n[0].data,
        i = n[0].context || r),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach(l => {
            r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(u => {
                u.apply(i, [l, ...t])
            }
            ),
            r.eventsListeners && r.eventsListeners[l] && r.eventsListeners[l].forEach(u => {
                u.apply(i, t)
            }
            )
        }
        ),
        r
    }
};
function Hh() {
    const r = this;
    let e, t;
    const i = r.el;
    typeof r.params.width < "u" && r.params.width !== null ? e = r.params.width : e = i.clientWidth,
    typeof r.params.height < "u" && r.params.height !== null ? t = r.params.height : t = i.clientHeight,
    !(e === 0 && r.isHorizontal() || t === 0 && r.isVertical()) && (e = e - parseInt(rs(i, "padding-left") || 0, 10) - parseInt(rs(i, "padding-right") || 0, 10),
    t = t - parseInt(rs(i, "padding-top") || 0, 10) - parseInt(rs(i, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(r, {
        width: e,
        height: t,
        size: r.isHorizontal() ? e : t
    }))
}
function Gh() {
    const r = this;
    function e(C, O) {
        return parseFloat(C.getPropertyValue(r.getDirectionLabel(O)) || 0)
    }
    const t = r.params
      , {wrapperEl: i, slidesEl: s, size: n, rtlTranslate: a, wrongRTL: o} = r
      , l = r.virtual && t.virtual.enabled
      , u = l ? r.virtual.slides.length : r.slides.length
      , c = Di(s, `.${r.params.slideClass}, swiper-slide`)
      , f = l ? r.virtual.slides.length : c.length;
    let p = [];
    const d = []
      , g = [];
    let h = t.slidesOffsetBefore;
    typeof h == "function" && (h = t.slidesOffsetBefore.call(r));
    let _ = t.slidesOffsetAfter;
    typeof _ == "function" && (_ = t.slidesOffsetAfter.call(r));
    const y = r.snapGrid.length
      , v = r.slidesGrid.length;
    let b = t.spaceBetween
      , m = -h
      , w = 0
      , S = 0;
    if (typeof n > "u")
        return;
    typeof b == "string" && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * n : typeof b == "string" && (b = parseFloat(b)),
    r.virtualSize = -b,
    c.forEach(C => {
        a ? C.style.marginLeft = "" : C.style.marginRight = "",
        C.style.marginBottom = "",
        C.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (En(i, "--swiper-centered-offset-before", ""),
    En(i, "--swiper-centered-offset-after", ""));
    const T = t.grid && t.grid.rows > 1 && r.grid;
    T ? r.grid.initSlides(c) : r.grid && r.grid.unsetSlides();
    let k;
    const E = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(C => typeof t.breakpoints[C].slidesPerView < "u").length > 0;
    for (let C = 0; C < f; C += 1) {
        k = 0;
        let O;
        if (c[C] && (O = c[C]),
        T && r.grid.updateSlide(C, O, c),
        !(c[C] && rs(O, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                E && (c[C].style[r.getDirectionLabel("width")] = "");
                const A = getComputedStyle(O)
                  , I = O.style.transform
                  , D = O.style.webkitTransform;
                if (I && (O.style.transform = "none"),
                D && (O.style.webkitTransform = "none"),
                t.roundLengths)
                    k = r.isHorizontal() ? yo(O, "width", !0) : yo(O, "height", !0);
                else {
                    const P = e(A, "width")
                      , B = e(A, "padding-left")
                      , V = e(A, "padding-right")
                      , F = e(A, "margin-left")
                      , U = e(A, "margin-right")
                      , x = A.getPropertyValue("box-sizing");
                    if (x && x === "border-box")
                        k = P + F + U;
                    else {
                        const {clientWidth: J, offsetWidth: de} = O;
                        k = P + B + V + F + U + (de - J)
                    }
                }
                I && (O.style.transform = I),
                D && (O.style.webkitTransform = D),
                t.roundLengths && (k = Math.floor(k))
            } else
                k = (n - (t.slidesPerView - 1) * b) / t.slidesPerView,
                t.roundLengths && (k = Math.floor(k)),
                c[C] && (c[C].style[r.getDirectionLabel("width")] = `${k}px`);
            c[C] && (c[C].swiperSlideSize = k),
            g.push(k),
            t.centeredSlides ? (m = m + k / 2 + w / 2 + b,
            w === 0 && C !== 0 && (m = m - n / 2 - b),
            C === 0 && (m = m - n / 2 - b),
            Math.abs(m) < 1 / 1e3 && (m = 0),
            t.roundLengths && (m = Math.floor(m)),
            S % t.slidesPerGroup === 0 && p.push(m),
            d.push(m)) : (t.roundLengths && (m = Math.floor(m)),
            (S - Math.min(r.params.slidesPerGroupSkip, S)) % r.params.slidesPerGroup === 0 && p.push(m),
            d.push(m),
            m = m + k + b),
            r.virtualSize += k + b,
            w = k,
            S += 1
        }
    }
    if (r.virtualSize = Math.max(r.virtualSize, n) + _,
    a && o && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${r.virtualSize + b}px`),
    t.setWrapperSize && (i.style[r.getDirectionLabel("width")] = `${r.virtualSize + b}px`),
    T && r.grid.updateWrapperSize(k, p),
    !t.centeredSlides) {
        const C = [];
        for (let O = 0; O < p.length; O += 1) {
            let A = p[O];
            t.roundLengths && (A = Math.floor(A)),
            p[O] <= r.virtualSize - n && C.push(A)
        }
        p = C,
        Math.floor(r.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 && p.push(r.virtualSize - n)
    }
    if (l && t.loop) {
        const C = g[0] + b;
        if (t.slidesPerGroup > 1) {
            const O = Math.ceil((r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup)
              , A = C * t.slidesPerGroup;
            for (let I = 0; I < O; I += 1)
                p.push(p[p.length - 1] + A)
        }
        for (let O = 0; O < r.virtual.slidesBefore + r.virtual.slidesAfter; O += 1)
            t.slidesPerGroup === 1 && p.push(p[p.length - 1] + C),
            d.push(d[d.length - 1] + C),
            r.virtualSize += C
    }
    if (p.length === 0 && (p = [0]),
    b !== 0) {
        const C = r.isHorizontal() && a ? "marginLeft" : r.getDirectionLabel("marginRight");
        c.filter( (O, A) => !t.cssMode || t.loop ? !0 : A !== c.length - 1).forEach(O => {
            O.style[C] = `${b}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let C = 0;
        g.forEach(A => {
            C += A + (b || 0)
        }
        ),
        C -= b;
        const O = C - n;
        p = p.map(A => A <= 0 ? -h : A > O ? O + _ : A)
    }
    if (t.centerInsufficientSlides) {
        let C = 0;
        if (g.forEach(O => {
            C += O + (b || 0)
        }
        ),
        C -= b,
        C < n) {
            const O = (n - C) / 2;
            p.forEach( (A, I) => {
                p[I] = A - O
            }
            ),
            d.forEach( (A, I) => {
                d[I] = A + O
            }
            )
        }
    }
    if (Object.assign(r, {
        slides: c,
        snapGrid: p,
        slidesGrid: d,
        slidesSizesGrid: g
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        En(i, "--swiper-centered-offset-before", `${-p[0]}px`),
        En(i, "--swiper-centered-offset-after", `${r.size / 2 - g[g.length - 1] / 2}px`);
        const C = -r.snapGrid[0]
          , O = -r.slidesGrid[0];
        r.snapGrid = r.snapGrid.map(A => A + C),
        r.slidesGrid = r.slidesGrid.map(A => A + O)
    }
    if (f !== u && r.emit("slidesLengthChange"),
    p.length !== y && (r.params.watchOverflow && r.checkOverflow(),
    r.emit("snapGridLengthChange")),
    d.length !== v && r.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit("slidesUpdated"),
    !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const C = `${t.containerModifierClass}backface-hidden`
          , O = r.el.classList.contains(C);
        f <= t.maxBackfaceHiddenSlides ? O || r.el.classList.add(C) : O && r.el.classList.remove(C)
    }
}
function qh(r) {
    const e = this
      , t = []
      , i = e.virtual && e.params.virtual.enabled;
    let s = 0, n;
    typeof r == "number" ? e.setTransition(r) : r === !0 && e.setTransition(e.params.speed);
    const a = o => i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(o => {
                t.push(o)
            }
            );
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const o = e.activeIndex + n;
                if (o > e.slides.length && !i)
                    break;
                t.push(a(o))
            }
    else
        t.push(a(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
        if (typeof t[n] < "u") {
            const o = t[n].offsetHeight;
            s = o > s ? o : s
        }
    (s || s === 0) && (e.wrapperEl.style.height = `${s}px`)
}
function Yh() {
    const r = this
      , e = r.slides
      , t = r.isElement ? r.isHorizontal() ? r.wrapperEl.offsetLeft : r.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset = (r.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - r.cssOverflowAdjustment()
}
function Wh(r) {
    r === void 0 && (r = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: i, rtlTranslate: s, snapGrid: n} = e;
    if (i.length === 0)
        return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -r;
    s && (a = r),
    i.forEach(l => {
        l.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }
    ),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let o = t.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < i.length; l += 1) {
        const u = i[l];
        let c = u.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
        const f = (a + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + o)
          , p = (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + o)
          , d = -(a - c)
          , g = d + e.slidesSizesGrid[l]
          , h = d >= 0 && d <= e.size - e.slidesSizesGrid[l];
        (d >= 0 && d < e.size - 1 || g > 1 && g <= e.size || d <= 0 && g >= e.size) && (e.visibleSlides.push(u),
        e.visibleSlidesIndexes.push(l),
        i[l].classList.add(t.slideVisibleClass)),
        h && i[l].classList.add(t.slideFullyVisibleClass),
        u.progress = s ? -f : f,
        u.originalProgress = s ? -p : p
    }
}
function jh(r) {
    const e = this;
    if (typeof r > "u") {
        const c = e.rtlTranslate ? -1 : 1;
        r = e && e.translate && e.translate * c || 0
    }
    const t = e.params
      , i = e.maxTranslate() - e.minTranslate();
    let {progress: s, isBeginning: n, isEnd: a, progressLoop: o} = e;
    const l = n
      , u = a;
    if (i === 0)
        s = 0,
        n = !0,
        a = !0;
    else {
        s = (r - e.minTranslate()) / i;
        const c = Math.abs(r - e.minTranslate()) < 1
          , f = Math.abs(r - e.maxTranslate()) < 1;
        n = c || s <= 0,
        a = f || s >= 1,
        c && (s = 0),
        f && (s = 1)
    }
    if (t.loop) {
        const c = e.getSlideIndexByData(0)
          , f = e.getSlideIndexByData(e.slides.length - 1)
          , p = e.slidesGrid[c]
          , d = e.slidesGrid[f]
          , g = e.slidesGrid[e.slidesGrid.length - 1]
          , h = Math.abs(r);
        h >= p ? o = (h - p) / g : o = (h + g - d) / g,
        o > 1 && (o -= 1)
    }
    Object.assign(e, {
        progress: s,
        progressLoop: o,
        isBeginning: n,
        isEnd: a
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(r),
    n && !l && e.emit("reachBeginning toEdge"),
    a && !u && e.emit("reachEnd toEdge"),
    (l && !n || u && !a) && e.emit("fromEdge"),
    e.emit("progress", s)
}
function Uh() {
    const r = this
      , {slides: e, params: t, slidesEl: i, activeIndex: s} = r
      , n = r.virtual && t.virtual.enabled
      , a = r.grid && t.grid && t.grid.rows > 1
      , o = f => Di(i, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
    e.forEach(f => {
        f.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    }
    );
    let l, u, c;
    if (n)
        if (t.loop) {
            let f = s - r.virtual.slidesBefore;
            f < 0 && (f = r.virtual.slides.length + f),
            f >= r.virtual.slides.length && (f -= r.virtual.slides.length),
            l = o(`[data-swiper-slide-index="${f}"]`)
        } else
            l = o(`[data-swiper-slide-index="${s}"]`);
    else
        a ? (l = e.filter(f => f.column === s)[0],
        c = e.filter(f => f.column === s + 1)[0],
        u = e.filter(f => f.column === s - 1)[0]) : l = e[s];
    l && (l.classList.add(t.slideActiveClass),
    a ? (c && c.classList.add(t.slideNextClass),
    u && u.classList.add(t.slidePrevClass)) : (c = Lh(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !c && (c = e[0]),
    c && c.classList.add(t.slideNextClass),
    u = Ih(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !u === 0 && (u = e[e.length - 1]),
    u && u.classList.add(t.slidePrevClass))),
    r.emitSlidesClasses()
}
const zn = (r, e) => {
    if (!r || r.destroyed || !r.params)
        return;
    const t = () => r.isElement ? "swiper-slide" : `.${r.params.slideClass}`
      , i = e.closest(t());
    if (i) {
        let s = i.querySelector(`.${r.params.lazyPreloaderClass}`);
        !s && r.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            i.shadowRoot && (s = i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`),
            s && s.remove())
        }
        )),
        s && s.remove()
    }
}
  , $a = (r, e) => {
    if (!r.slides[e])
        return;
    const t = r.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , bo = r => {
    if (!r || r.destroyed || !r.params)
        return;
    let e = r.params.lazyPreloadPrevNext;
    const t = r.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const i = r.params.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(r.params.slidesPerView)
      , s = r.activeIndex;
    if (r.params.grid && r.params.grid.rows > 1) {
        const a = s
          , o = [a - e];
        o.push(...Array.from({
            length: e
        }).map( (l, u) => a + i + u)),
        r.slides.forEach( (l, u) => {
            o.includes(l.column) && $a(r, u)
        }
        );
        return
    }
    const n = s + i - 1;
    if (r.params.rewind || r.params.loop)
        for (let a = s - e; a <= n + e; a += 1) {
            const o = (a % t + t) % t;
            (o < s || o > n) && $a(r, o)
        }
    else
        for (let a = Math.max(s - e, 0); a <= Math.min(n + e, t - 1); a += 1)
            a !== s && (a > n || a < s) && $a(r, a)
}
;
function Xh(r) {
    const {slidesGrid: e, params: t} = r
      , i = r.rtlTranslate ? r.translate : -r.translate;
    let s;
    for (let n = 0; n < e.length; n += 1)
        typeof e[n + 1] < "u" ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2 ? s = n : i >= e[n] && i < e[n + 1] && (s = n + 1) : i >= e[n] && (s = n);
    return t.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0),
    s
}
function Kh(r) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: i, params: s, activeIndex: n, realIndex: a, snapIndex: o} = e;
    let l = r, u;
    const c = d => {
        let g = d - e.virtual.slidesBefore;
        return g < 0 && (g = e.virtual.slides.length + g),
        g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
        g
    }
    ;
    if (typeof l > "u" && (l = Xh(e)),
    i.indexOf(t) >= 0)
        u = i.indexOf(t);
    else {
        const d = Math.min(s.slidesPerGroupSkip, l);
        u = d + Math.floor((l - d) / s.slidesPerGroup)
    }
    if (u >= i.length && (u = i.length - 1),
    l === n && !e.params.loop) {
        u !== o && (e.snapIndex = u,
        e.emit("snapIndexChange"));
        return
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = c(l);
        return
    }
    const f = e.grid && s.grid && s.grid.rows > 1;
    let p;
    if (e.virtual && s.virtual.enabled && s.loop)
        p = c(l);
    else if (f) {
        const d = e.slides.filter(h => h.column === l)[0];
        let g = parseInt(d.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(g) && (g = Math.max(e.slides.indexOf(d), 0)),
        p = Math.floor(g / s.grid.rows)
    } else if (e.slides[l]) {
        const d = e.slides[l].getAttribute("data-swiper-slide-index");
        d ? p = parseInt(d, 10) : p = l
    } else
        p = l;
    Object.assign(e, {
        previousSnapIndex: o,
        snapIndex: u,
        previousRealIndex: a,
        realIndex: p,
        previousIndex: n,
        activeIndex: l
    }),
    e.initialized && bo(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (a !== p && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function Zh(r, e) {
    const t = this
      , i = t.params;
    let s = r.closest(`.${i.slideClass}, swiper-slide`);
    !s && t.isElement && e && e.length > 1 && e.includes(r) && [...e.slice(e.indexOf(r) + 1, e.length)].forEach(o => {
        !s && o.matches && o.matches(`.${i.slideClass}, swiper-slide`) && (s = o)
    }
    );
    let n = !1, a;
    if (s) {
        for (let o = 0; o < t.slides.length; o += 1)
            if (t.slides[o] === s) {
                n = !0,
                a = o;
                break
            }
    }
    if (s && n)
        t.clickedSlide = s,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var Qh = {
    updateSize: Hh,
    updateSlides: Gh,
    updateAutoHeight: qh,
    updateSlidesOffset: Yh,
    updateSlidesProgress: Wh,
    updateProgress: jh,
    updateSlidesClasses: Uh,
    updateActiveIndex: Kh,
    updateClickedSlide: Zh
};
function Jh(r) {
    r === void 0 && (r = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: i, translate: s, wrapperEl: n} = e;
    if (t.virtualTranslate)
        return i ? -s : s;
    if (t.cssMode)
        return s;
    let a = Oh(n, r);
    return a += e.cssOverflowAdjustment(),
    i && (a = -a),
    a || 0
}
function ep(r, e) {
    const t = this
      , {rtlTranslate: i, params: s, wrapperEl: n, progress: a} = t;
    let o = 0
      , l = 0;
    const u = 0;
    t.isHorizontal() ? o = i ? -r : r : l = r,
    s.roundLengths && (o = Math.floor(o),
    l = Math.floor(l)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? o : l,
    s.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -o : -l : s.virtualTranslate || (t.isHorizontal() ? o -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(),
    n.style.transform = `translate3d(${o}px, ${l}px, ${u}px)`);
    let c;
    const f = t.maxTranslate() - t.minTranslate();
    f === 0 ? c = 0 : c = (r - t.minTranslate()) / f,
    c !== a && t.updateProgress(r),
    t.emit("setTranslate", t.translate, e)
}
function tp() {
    return -this.snapGrid[0]
}
function ip() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function sp(r, e, t, i, s) {
    r === void 0 && (r = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = !0);
    const n = this
      , {params: a, wrapperEl: o} = n;
    if (n.animating && a.preventInteractionOnTransition)
        return !1;
    const l = n.minTranslate()
      , u = n.maxTranslate();
    let c;
    if (i && r > l ? c = l : i && r < u ? c = u : c = r,
    n.updateProgress(c),
    a.cssMode) {
        const f = n.isHorizontal();
        if (e === 0)
            o[f ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!n.support.smoothScroll)
                return Jc({
                    swiper: n,
                    targetPosition: -c,
                    side: f ? "left" : "top"
                }),
                !0;
            o.scrollTo({
                [f ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0),
    n.setTranslate(c),
    t && (n.emit("beforeTransitionStart", e, s),
    n.emit("transitionEnd"))) : (n.setTransition(e),
    n.setTranslate(c),
    t && (n.emit("beforeTransitionStart", e, s),
    n.emit("transitionStart")),
    n.animating || (n.animating = !0,
    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(p) {
        !n || n.destroyed || p.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
        n.onTranslateToWrapperTransitionEnd = null,
        delete n.onTranslateToWrapperTransitionEnd,
        t && n.emit("transitionEnd"))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
    !0
}
var rp = {
    getTranslate: Jh,
    setTranslate: ep,
    minTranslate: tp,
    maxTranslate: ip,
    translateTo: sp
};
function np(r, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${r}ms`,
    t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : ""),
    t.emit("setTransition", r, e)
}
function id(r) {
    let {swiper: e, runCallbacks: t, direction: i, step: s} = r;
    const {activeIndex: n, previousIndex: a} = e;
    let o = i;
    if (o || (n > a ? o = "next" : n < a ? o = "prev" : o = "reset"),
    e.emit(`transition${s}`),
    t && n !== a) {
        if (o === "reset") {
            e.emit(`slideResetTransition${s}`);
            return
        }
        e.emit(`slideChangeTransition${s}`),
        o === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
    }
}
function ap(r, e) {
    r === void 0 && (r = !0);
    const t = this
      , {params: i} = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(),
    id({
        swiper: t,
        runCallbacks: r,
        direction: e,
        step: "Start"
    }))
}
function op(r, e) {
    r === void 0 && (r = !0);
    const t = this
      , {params: i} = t;
    t.animating = !1,
    !i.cssMode && (t.setTransition(0),
    id({
        swiper: t,
        runCallbacks: r,
        direction: e,
        step: "End"
    }))
}
var lp = {
    setTransition: np,
    transitionStart: ap,
    transitionEnd: op
};
function up(r, e, t, i, s) {
    r === void 0 && (r = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof r == "string" && (r = parseInt(r, 10));
    const n = this;
    let a = r;
    a < 0 && (a = 0);
    const {params: o, snapGrid: l, slidesGrid: u, previousIndex: c, activeIndex: f, rtlTranslate: p, wrapperEl: d, enabled: g} = n;
    if (n.animating && o.preventInteractionOnTransition || !g && !i && !s)
        return !1;
    const h = Math.min(n.params.slidesPerGroupSkip, a);
    let _ = h + Math.floor((a - h) / n.params.slidesPerGroup);
    _ >= l.length && (_ = l.length - 1);
    const y = -l[_];
    if (o.normalizeSlideIndex)
        for (let b = 0; b < u.length; b += 1) {
            const m = -Math.floor(y * 100)
              , w = Math.floor(u[b] * 100)
              , S = Math.floor(u[b + 1] * 100);
            typeof u[b + 1] < "u" ? m >= w && m < S - (S - w) / 2 ? a = b : m >= w && m < S && (a = b + 1) : m >= w && (a = b)
        }
    if (n.initialized && a !== f && (!n.allowSlideNext && (p ? y > n.translate && y > n.minTranslate() : y < n.translate && y < n.minTranslate()) || !n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (f || 0) !== a))
        return !1;
    a !== (c || 0) && t && n.emit("beforeSlideChangeStart"),
    n.updateProgress(y);
    let v;
    if (a > f ? v = "next" : a < f ? v = "prev" : v = "reset",
    p && -y === n.translate || !p && y === n.translate)
        return n.updateActiveIndex(a),
        o.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        o.effect !== "slide" && n.setTranslate(y),
        v !== "reset" && (n.transitionStart(t, v),
        n.transitionEnd(t, v)),
        !1;
    if (o.cssMode) {
        const b = n.isHorizontal()
          , m = p ? y : -y;
        if (e === 0) {
            const w = n.virtual && n.params.virtual.enabled;
            w && (n.wrapperEl.style.scrollSnapType = "none",
            n._immediateVirtual = !0),
            w && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                d[b ? "scrollLeft" : "scrollTop"] = m
            }
            )) : d[b ? "scrollLeft" : "scrollTop"] = m,
            w && requestAnimationFrame( () => {
                n.wrapperEl.style.scrollSnapType = "",
                n._immediateVirtual = !1
            }
            )
        } else {
            if (!n.support.smoothScroll)
                return Jc({
                    swiper: n,
                    targetPosition: m,
                    side: b ? "left" : "top"
                }),
                !0;
            d.scrollTo({
                [b ? "left" : "top"]: m,
                behavior: "smooth"
            })
        }
        return !0
    }
    return n.setTransition(e),
    n.setTranslate(y),
    n.updateActiveIndex(a),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, i),
    n.transitionStart(t, v),
    e === 0 ? n.transitionEnd(t, v) : n.animating || (n.animating = !0,
    n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(m) {
        !n || n.destroyed || m.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
        n.onSlideToWrapperTransitionEnd = null,
        delete n.onSlideToWrapperTransitionEnd,
        n.transitionEnd(t, v))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
    !0
}
function cp(r, e, t, i) {
    r === void 0 && (r = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof r == "string" && (r = parseInt(r, 10));
    const s = this
      , n = s.grid && s.params.grid && s.params.grid.rows > 1;
    let a = r;
    if (s.params.loop)
        if (s.virtual && s.params.virtual.enabled)
            a = a + s.virtual.slidesBefore;
        else {
            let o;
            if (n) {
                const p = a * s.params.grid.rows;
                o = s.slides.filter(d => d.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                o = s.getSlideIndexByData(a);
            const l = n ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length
              , {centeredSlides: u} = s.params;
            let c = s.params.slidesPerView;
            c === "auto" ? c = s.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(s.params.slidesPerView, 10)),
            u && c % 2 === 0 && (c = c + 1));
            let f = l - o < c;
            if (u && (f = f || o < Math.ceil(c / 2)),
            f) {
                const p = u ? o < s.activeIndex ? "prev" : "next" : o - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
                s.loopFix({
                    direction: p,
                    slideTo: !0,
                    activeSlideIndex: p === "next" ? o + 1 : o - l + 1,
                    slideRealIndex: p === "next" ? s.realIndex : void 0
                })
            }
            if (n) {
                const p = a * s.params.grid.rows;
                a = s.slides.filter(d => d.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                a = s.getSlideIndexByData(a)
        }
    return requestAnimationFrame( () => {
        s.slideTo(a, e, t, i)
    }
    ),
    s
}
function dp(r, e, t) {
    r === void 0 && (r = this.params.speed),
    e === void 0 && (e = !0);
    const i = this
      , {enabled: s, params: n, animating: a} = i;
    if (!s)
        return i;
    let o = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o
      , u = i.virtual && n.virtual.enabled;
    if (n.loop) {
        if (a && !u && n.loopPreventsSliding)
            return !1;
        if (i.loopFix({
            direction: "next"
        }),
        i._clientLeft = i.wrapperEl.clientLeft,
        i.activeIndex === i.slides.length - 1 && n.cssMode)
            return requestAnimationFrame( () => {
                i.slideTo(i.activeIndex + l, r, e, t)
            }
            ),
            !0
    }
    return n.rewind && i.isEnd ? i.slideTo(0, r, e, t) : i.slideTo(i.activeIndex + l, r, e, t)
}
function fp(r, e, t) {
    r === void 0 && (r = this.params.speed),
    e === void 0 && (e = !0);
    const i = this
      , {params: s, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: u} = i;
    if (!l)
        return i;
    const c = i.virtual && s.virtual.enabled;
    if (s.loop) {
        if (u && !c && s.loopPreventsSliding)
            return !1;
        i.loopFix({
            direction: "prev"
        }),
        i._clientLeft = i.wrapperEl.clientLeft
    }
    const f = o ? i.translate : -i.translate;
    function p(y) {
        return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y)
    }
    const d = p(f)
      , g = n.map(y => p(y));
    let h = n[g.indexOf(d) - 1];
    if (typeof h > "u" && s.cssMode) {
        let y;
        n.forEach( (v, b) => {
            d >= v && (y = b)
        }
        ),
        typeof y < "u" && (h = n[y > 0 ? y - 1 : y])
    }
    let _ = 0;
    if (typeof h < "u" && (_ = a.indexOf(h),
    _ < 0 && (_ = i.activeIndex - 1),
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (_ = _ - i.slidesPerViewDynamic("previous", !0) + 1,
    _ = Math.max(_, 0))),
    s.rewind && i.isBeginning) {
        const y = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(y, r, e, t)
    } else if (s.loop && i.activeIndex === 0 && s.cssMode)
        return requestAnimationFrame( () => {
            i.slideTo(_, r, e, t)
        }
        ),
        !0;
    return i.slideTo(_, r, e, t)
}
function hp(r, e, t) {
    r === void 0 && (r = this.params.speed),
    e === void 0 && (e = !0);
    const i = this;
    return i.slideTo(i.activeIndex, r, e, t)
}
function pp(r, e, t, i) {
    r === void 0 && (r = this.params.speed),
    e === void 0 && (e = !0),
    i === void 0 && (i = .5);
    const s = this;
    let n = s.activeIndex;
    const a = Math.min(s.params.slidesPerGroupSkip, n)
      , o = a + Math.floor((n - a) / s.params.slidesPerGroup)
      , l = s.rtlTranslate ? s.translate : -s.translate;
    if (l >= s.snapGrid[o]) {
        const u = s.snapGrid[o]
          , c = s.snapGrid[o + 1];
        l - u > (c - u) * i && (n += s.params.slidesPerGroup)
    } else {
        const u = s.snapGrid[o - 1]
          , c = s.snapGrid[o];
        l - u <= (c - u) * i && (n -= s.params.slidesPerGroup)
    }
    return n = Math.max(n, 0),
    n = Math.min(n, s.slidesGrid.length - 1),
    s.slideTo(n, r, e, t)
}
function gp() {
    const r = this
      , {params: e, slidesEl: t} = r
      , i = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
    let s = r.clickedIndex, n;
    const a = r.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (r.animating)
            return;
        n = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? s < r.loopedSlides - i / 2 || s > r.slides.length - r.loopedSlides + i / 2 ? (r.loopFix(),
        s = r.getSlideIndex(Di(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
        _o( () => {
            r.slideTo(s)
        }
        )) : r.slideTo(s) : s > r.slides.length - i ? (r.loopFix(),
        s = r.getSlideIndex(Di(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
        _o( () => {
            r.slideTo(s)
        }
        )) : r.slideTo(s)
    } else
        r.slideTo(s)
}
var mp = {
    slideTo: up,
    slideToLoop: cp,
    slideNext: dp,
    slidePrev: fp,
    slideReset: hp,
    slideToClosest: pp,
    slideToClickedSlide: gp
};
function vp(r) {
    const e = this
      , {params: t, slidesEl: i} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const s = () => {
        Di(i, `.${t.slideClass}, swiper-slide`).forEach( (f, p) => {
            f.setAttribute("data-swiper-slide-index", p)
        }
        )
    }
      , n = e.grid && t.grid && t.grid.rows > 1
      , a = t.slidesPerGroup * (n ? t.grid.rows : 1)
      , o = e.slides.length % a !== 0
      , l = n && e.slides.length % t.grid.rows !== 0
      , u = c => {
        for (let f = 0; f < c; f += 1) {
            const p = e.isElement ? sn("swiper-slide", [t.slideBlankClass]) : sn("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(p)
        }
    }
    ;
    if (o) {
        if (t.loopAddBlankSlides) {
            const c = a - e.slides.length % a;
            u(c),
            e.recalcSlides(),
            e.updateSlides()
        } else
            sa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else if (l) {
        if (t.loopAddBlankSlides) {
            const c = t.grid.rows - e.slides.length % t.grid.rows;
            u(c),
            e.recalcSlides(),
            e.updateSlides()
        } else
            sa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else
        s();
    e.loopFix({
        slideRealIndex: r,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function _p(r) {
    let {slideRealIndex: e, slideTo: t=!0, direction: i, setTranslate: s, activeSlideIndex: n, byController: a, byMousewheel: o} = r === void 0 ? {} : r;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const {slides: u, allowSlidePrev: c, allowSlideNext: f, slidesEl: p, params: d} = l
      , {centeredSlides: g} = d;
    if (l.allowSlidePrev = !0,
    l.allowSlideNext = !0,
    l.virtual && d.virtual.enabled) {
        t && (!d.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : d.centeredSlides && l.snapIndex < d.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        l.allowSlidePrev = c,
        l.allowSlideNext = f,
        l.emit("loopFix");
        return
    }
    let h = d.slidesPerView;
    h === "auto" ? h = l.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(d.slidesPerView, 10)),
    g && h % 2 === 0 && (h = h + 1));
    const _ = d.slidesPerGroupAuto ? h : d.slidesPerGroup;
    let y = _;
    y % _ !== 0 && (y += _ - y % _),
    y += d.loopAdditionalSlides,
    l.loopedSlides = y;
    const v = l.grid && d.grid && d.grid.rows > 1;
    u.length < h + y ? sa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : v && d.grid.fill === "row" && sa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const b = []
      , m = [];
    let w = l.activeIndex;
    typeof n > "u" ? n = l.getSlideIndex(u.filter(I => I.classList.contains(d.slideActiveClass))[0]) : w = n;
    const S = i === "next" || !i
      , T = i === "prev" || !i;
    let k = 0
      , E = 0;
    const C = v ? Math.ceil(u.length / d.grid.rows) : u.length
      , A = (v ? u[n].column : n) + (g && typeof s > "u" ? -h / 2 + .5 : 0);
    if (A < y) {
        k = Math.max(y - A, _);
        for (let I = 0; I < y - A; I += 1) {
            const D = I - Math.floor(I / C) * C;
            if (v) {
                const P = C - D - 1;
                for (let B = u.length - 1; B >= 0; B -= 1)
                    u[B].column === P && b.push(B)
            } else
                b.push(C - D - 1)
        }
    } else if (A + h > C - y) {
        E = Math.max(A - (C - y * 2), _);
        for (let I = 0; I < E; I += 1) {
            const D = I - Math.floor(I / C) * C;
            v ? u.forEach( (P, B) => {
                P.column === D && m.push(B)
            }
            ) : m.push(D)
        }
    }
    if (l.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        l.__preventObserver__ = !1
    }
    ),
    T && b.forEach(I => {
        u[I].swiperLoopMoveDOM = !0,
        p.prepend(u[I]),
        u[I].swiperLoopMoveDOM = !1
    }
    ),
    S && m.forEach(I => {
        u[I].swiperLoopMoveDOM = !0,
        p.append(u[I]),
        u[I].swiperLoopMoveDOM = !1
    }
    ),
    l.recalcSlides(),
    d.slidesPerView === "auto" ? l.updateSlides() : v && (b.length > 0 && T || m.length > 0 && S) && l.slides.forEach( (I, D) => {
        l.grid.updateSlide(D, I, l.slides)
    }
    ),
    d.watchSlidesProgress && l.updateSlidesOffset(),
    t) {
        if (b.length > 0 && T) {
            if (typeof e > "u") {
                const I = l.slidesGrid[w]
                  , P = l.slidesGrid[w + k] - I;
                o ? l.setTranslate(l.translate - P) : (l.slideTo(w + k, 0, !1, !0),
                s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - P,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - P))
            } else if (s) {
                const I = v ? b.length / d.grid.rows : b.length;
                l.slideTo(l.activeIndex + I, 0, !1, !0),
                l.touchEventsData.currentTranslate = l.translate
            }
        } else if (m.length > 0 && S)
            if (typeof e > "u") {
                const I = l.slidesGrid[w]
                  , P = l.slidesGrid[w - E] - I;
                o ? l.setTranslate(l.translate - P) : (l.slideTo(w - E, 0, !1, !0),
                s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - P,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - P))
            } else {
                const I = v ? m.length / d.grid.rows : m.length;
                l.slideTo(l.activeIndex - I, 0, !1, !0)
            }
    }
    if (l.allowSlidePrev = c,
    l.allowSlideNext = f,
    l.controller && l.controller.control && !a) {
        const I = {
            slideRealIndex: e,
            direction: i,
            setTranslate: s,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(D => {
            !D.destroyed && D.params.loop && D.loopFix({
                ...I,
                slideTo: D.params.slidesPerView === d.slidesPerView ? t : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...I,
            slideTo: l.controller.control.params.slidesPerView === d.slidesPerView ? t : !1
        })
    }
    l.emit("loopFix")
}
function yp() {
    const r = this
      , {params: e, slidesEl: t} = r;
    if (!e.loop || r.virtual && r.params.virtual.enabled)
        return;
    r.recalcSlides();
    const i = [];
    r.slides.forEach(s => {
        const n = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
        i[n] = s
    }
    ),
    r.slides.forEach(s => {
        s.removeAttribute("data-swiper-slide-index")
    }
    ),
    i.forEach(s => {
        t.append(s)
    }
    ),
    r.recalcSlides(),
    r.slideTo(r.realIndex, 0)
}
var bp = {
    loopCreate: vp,
    loopFix: _p,
    loopDestroy: yp
};
function wp(r) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = r ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    )
}
function Sp() {
    const r = this;
    r.params.watchOverflow && r.isLocked || r.params.cssMode || (r.isElement && (r.__preventObserver__ = !0),
    r[r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    r.isElement && requestAnimationFrame( () => {
        r.__preventObserver__ = !1
    }
    ))
}
var xp = {
    setGrabCursor: wp,
    unsetGrabCursor: Sp
};
function Cp(r, e) {
    e === void 0 && (e = this);
    function t(i) {
        if (!i || i === Wi() || i === ri())
            return null;
        i.assignedSlot && (i = i.assignedSlot);
        const s = i.closest(r);
        return !s && !i.getRootNode ? null : s || t(i.getRootNode().host)
    }
    return t(e)
}
function Yl(r, e, t) {
    const i = ri()
      , {params: s} = r
      , n = s.edgeSwipeDetection
      , a = s.edgeSwipeThreshold;
    return n && (t <= a || t >= i.innerWidth - a) ? n === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function Tp(r) {
    const e = this
      , t = Wi();
    let i = r;
    i.originalEvent && (i = i.originalEvent);
    const s = e.touchEventsData;
    if (i.type === "pointerdown") {
        if (s.pointerId !== null && s.pointerId !== i.pointerId)
            return;
        s.pointerId = i.pointerId
    } else
        i.type === "touchstart" && i.targetTouches.length === 1 && (s.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
        Yl(e, i, i.targetTouches[0].pageX);
        return
    }
    const {params: n, touches: a, enabled: o} = e;
    if (!o || !n.simulateTouch && i.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
        return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let l = i.target;
    if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l) || "which"in i && i.which === 3 || "button"in i && i.button > 0 || s.isTouched && s.isMoved)
        return;
    const u = !!n.noSwipingClass && n.noSwipingClass !== ""
      , c = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && c && (l = c[0]);
    const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
      , p = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (p ? Cp(f, l) : l.closest(f))) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler))
        return;
    a.currentX = i.pageX,
    a.currentY = i.pageY;
    const d = a.currentX
      , g = a.currentY;
    if (!Yl(e, i, d))
        return;
    Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    a.startX = d,
    a.startY = g,
    s.touchStartTime = ia(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    n.threshold > 0 && (s.allowThresholdMove = !1);
    let h = !0;
    l.matches(s.focusableElements) && (h = !1,
    l.nodeName === "SELECT" && (s.isTouched = !1)),
    t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== l && t.activeElement.blur();
    const _ = h && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || _) && !l.isContentEditable && i.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", i)
}
function Ep(r) {
    const e = Wi()
      , t = this
      , i = t.touchEventsData
      , {params: s, touches: n, rtlTranslate: a, enabled: o} = t;
    if (!o || !s.simulateTouch && r.pointerType === "mouse")
        return;
    let l = r;
    if (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" && (i.touchId !== null || l.pointerId !== i.pointerId))
        return;
    let u;
    if (l.type === "touchmove") {
        if (u = [...l.changedTouches].filter(S => S.identifier === i.touchId)[0],
        !u || u.identifier !== i.touchId)
            return
    } else
        u = l;
    if (!i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
        return
    }
    const c = u.pageX
      , f = u.pageY;
    if (l.preventedByNestedSwiper) {
        n.startX = c,
        n.startY = f;
        return
    }
    if (!t.allowTouchMove) {
        l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched && (Object.assign(n, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f
        }),
        i.touchStartTime = ia());
        return
    }
    if (s.touchReleaseOnEdges && !s.loop) {
        if (t.isVertical()) {
            if (f < n.startY && t.translate <= t.maxTranslate() || f > n.startY && t.translate >= t.minTranslate()) {
                i.isTouched = !1,
                i.isMoved = !1;
                return
            }
        } else if (c < n.startX && t.translate <= t.maxTranslate() || c > n.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && l.target === e.activeElement && l.target.matches(i.focusableElements)) {
        i.isMoved = !0,
        t.allowClick = !1;
        return
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
    n.previousX = n.currentX,
    n.previousY = n.currentY,
    n.currentX = c,
    n.currentY = f;
    const p = n.currentX - n.startX
      , d = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(p ** 2 + d ** 2) < t.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let S;
        t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : p * p + d * d >= 25 && (S = Math.atan2(Math.abs(d), Math.abs(p)) * 180 / Math.PI,
        i.isScrolling = t.isHorizontal() ? S > s.touchAngle : 90 - S > s.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0),
    i.isScrolling) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving)
        return;
    t.allowClick = !1,
    !s.cssMode && l.cancelable && l.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
    let g = t.isHorizontal() ? p : d
      , h = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    s.oneWayMovement && (g = Math.abs(g) * (a ? 1 : -1),
    h = Math.abs(h) * (a ? 1 : -1)),
    n.diff = g,
    g *= s.touchRatio,
    a && (g = -g,
    h = -h);
    const _ = t.touchesDirection;
    t.swipeDirection = g > 0 ? "prev" : "next",
    t.touchesDirection = h > 0 ? "prev" : "next";
    const y = t.params.loop && !s.cssMode
      , v = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
        if (y && v && t.loopFix({
            direction: t.swipeDirection
        }),
        i.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const S = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(S)
        }
        i.allowMomentumBounce = !1,
        s.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l)
    }
    let b;
    if (new Date().getTime(),
    i.isMoved && i.allowThresholdMove && _ !== t.touchesDirection && y && v && Math.abs(g) >= 1) {
        Object.assign(n, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f,
            startTranslate: i.currentTranslate
        }),
        i.loopSwapReset = !0,
        i.startTranslate = i.currentTranslate;
        return
    }
    t.emit("sliderMove", l),
    i.isMoved = !0,
    i.currentTranslate = g + i.startTranslate;
    let m = !0
      , w = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (w = 0),
    g > 0 ? (y && v && !b && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    i.currentTranslate > t.minTranslate() && (m = !1,
    s.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + g) ** w))) : g < 0 && (y && v && !b && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (s.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }),
    i.currentTranslate < t.maxTranslate() && (m = !1,
    s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - g) ** w))),
    m && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate),
    s.threshold > 0)
        if (Math.abs(g) > s.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }
    !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && t.freeMode || s.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate))
}
function kp(r) {
    const e = this
      , t = e.touchEventsData;
    let i = r;
    i.originalEvent && (i = i.originalEvent);
    let s;
    if (i.type === "touchend" || i.type === "touchcancel") {
        if (s = [...i.changedTouches].filter(w => w.identifier === t.touchId)[0],
        !s || s.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || i.pointerId !== t.pointerId)
            return;
        s = i
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: a, touches: o, rtlTranslate: l, slidesGrid: u, enabled: c} = e;
    if (!c || !a.simulateTouch && i.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && a.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = ia()
      , p = f - t.touchStartTime;
    if (e.allowClick) {
        const w = i.path || i.composedPath && i.composedPath();
        e.updateClickedSlide(w && w[0] || i.target, w),
        e.emit("tap click", i),
        p < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
    }
    if (t.lastClickTime = ia(),
    _o( () => {
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || o.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let d;
    if (a.followFinger ? d = l ? e.translate : -e.translate : d = -t.currentTranslate,
    a.cssMode)
        return;
    if (a.freeMode && a.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: d
        });
        return
    }
    const g = d >= -e.maxTranslate() && !e.params.loop;
    let h = 0
      , _ = e.slidesSizesGrid[0];
    for (let w = 0; w < u.length; w += w < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
        const S = w < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        typeof u[w + S] < "u" ? (g || d >= u[w] && d < u[w + S]) && (h = w,
        _ = u[w + S] - u[w]) : (g || d >= u[w]) && (h = w,
        _ = u[u.length - 1] - u[u.length - 2])
    }
    let y = null
      , v = null;
    a.rewind && (e.isBeginning ? v = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
    const b = (d - u[h]) / _
      , m = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (p > a.longSwipesMs) {
        if (!a.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (b >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? y : h + m) : e.slideTo(h)),
        e.swipeDirection === "prev" && (b > 1 - a.longSwipesRatio ? e.slideTo(h + m) : v !== null && b < 0 && Math.abs(b) > a.longSwipesRatio ? e.slideTo(v) : e.slideTo(h))
    } else {
        if (!a.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(h + m) : e.slideTo(h) : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : h + m),
        e.swipeDirection === "prev" && e.slideTo(v !== null ? v : h))
    }
}
function Wl() {
    const r = this
      , {params: e, el: t} = r;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && r.setBreakpoint();
    const {allowSlideNext: i, allowSlidePrev: s, snapGrid: n} = r
      , a = r.virtual && r.params.virtual.enabled;
    r.allowSlideNext = !0,
    r.allowSlidePrev = !0,
    r.updateSize(),
    r.updateSlides(),
    r.updateSlidesClasses();
    const o = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && r.isEnd && !r.isBeginning && !r.params.centeredSlides && !o ? r.slideTo(r.slides.length - 1, 0, !1, !0) : r.params.loop && !a ? r.slideToLoop(r.realIndex, 0, !1, !0) : r.slideTo(r.activeIndex, 0, !1, !0),
    r.autoplay && r.autoplay.running && r.autoplay.paused && (clearTimeout(r.autoplay.resizeTimeout),
    r.autoplay.resizeTimeout = setTimeout( () => {
        r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.resume()
    }
    , 500)),
    r.allowSlidePrev = s,
    r.allowSlideNext = i,
    r.params.watchOverflow && n !== r.snapGrid && r.checkOverflow()
}
function Ap(r) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && r.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (r.stopPropagation(),
    r.stopImmediatePropagation())))
}
function Op() {
    const r = this
      , {wrapperEl: e, rtlTranslate: t, enabled: i} = r;
    if (!i)
        return;
    r.previousTranslate = r.translate,
    r.isHorizontal() ? r.translate = -e.scrollLeft : r.translate = -e.scrollTop,
    r.translate === 0 && (r.translate = 0),
    r.updateActiveIndex(),
    r.updateSlidesClasses();
    let s;
    const n = r.maxTranslate() - r.minTranslate();
    n === 0 ? s = 0 : s = (r.translate - r.minTranslate()) / n,
    s !== r.progress && r.updateProgress(t ? -r.translate : r.translate),
    r.emit("setTranslate", r.translate, !1)
}
function Mp(r) {
    const e = this;
    zn(e, r.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Ip() {
    const r = this;
    r.documentTouchHandlerProceeded || (r.documentTouchHandlerProceeded = !0,
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"))
}
const sd = (r, e) => {
    const t = Wi()
      , {params: i, el: s, wrapperEl: n, device: a} = r
      , o = !!i.nested
      , l = e === "on" ? "addEventListener" : "removeEventListener"
      , u = e;
    t[l]("touchstart", r.onDocumentTouchStart, {
        passive: !1,
        capture: o
    }),
    s[l]("touchstart", r.onTouchStart, {
        passive: !1
    }),
    s[l]("pointerdown", r.onTouchStart, {
        passive: !1
    }),
    t[l]("touchmove", r.onTouchMove, {
        passive: !1,
        capture: o
    }),
    t[l]("pointermove", r.onTouchMove, {
        passive: !1,
        capture: o
    }),
    t[l]("touchend", r.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerup", r.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointercancel", r.onTouchEnd, {
        passive: !0
    }),
    t[l]("touchcancel", r.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerout", r.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerleave", r.onTouchEnd, {
        passive: !0
    }),
    t[l]("contextmenu", r.onTouchEnd, {
        passive: !0
    }),
    (i.preventClicks || i.preventClicksPropagation) && s[l]("click", r.onClick, !0),
    i.cssMode && n[l]("scroll", r.onScroll),
    i.updateOnWindowResize ? r[u](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Wl, !0) : r[u]("observerUpdate", Wl, !0),
    s[l]("load", r.onLoad, {
        capture: !0
    })
}
;
function Lp() {
    const r = this
      , {params: e} = r;
    r.onTouchStart = Tp.bind(r),
    r.onTouchMove = Ep.bind(r),
    r.onTouchEnd = kp.bind(r),
    r.onDocumentTouchStart = Ip.bind(r),
    e.cssMode && (r.onScroll = Op.bind(r)),
    r.onClick = Ap.bind(r),
    r.onLoad = Mp.bind(r),
    sd(r, "on")
}
function Dp() {
    sd(this, "off")
}
var Pp = {
    attachEvents: Lp,
    detachEvents: Dp
};
const jl = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function Fp() {
    const r = this
      , {realIndex: e, initialized: t, params: i, el: s} = r
      , n = i.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
        return;
    const a = r.getBreakpoint(n, r.params.breakpointsBase, r.el);
    if (!a || r.currentBreakpoint === a)
        return;
    const l = (a in n ? n[a] : void 0) || r.originalParams
      , u = jl(r, i)
      , c = jl(r, l)
      , f = i.enabled;
    u && !c ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
    r.emitContainerClasses()) : !u && c && (s.classList.add(`${i.containerModifierClass}grid`),
    (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`),
    r.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(y => {
        if (typeof l[y] > "u")
            return;
        const v = i[y] && i[y].enabled
          , b = l[y] && l[y].enabled;
        v && !b && r[y].disable(),
        !v && b && r[y].enable()
    }
    );
    const p = l.direction && l.direction !== i.direction
      , d = i.loop && (l.slidesPerView !== i.slidesPerView || p)
      , g = i.loop;
    p && t && r.changeDirection(),
    Zt(r.params, l);
    const h = r.params.enabled
      , _ = r.params.loop;
    Object.assign(r, {
        allowTouchMove: r.params.allowTouchMove,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev
    }),
    f && !h ? r.disable() : !f && h && r.enable(),
    r.currentBreakpoint = a,
    r.emit("_beforeBreakpoint", l),
    t && (d ? (r.loopDestroy(),
    r.loopCreate(e),
    r.updateSlides()) : !g && _ ? (r.loopCreate(e),
    r.updateSlides()) : g && !_ && r.loopDestroy()),
    r.emit("breakpoint", l)
}
function Bp(r, e, t) {
    if (e === void 0 && (e = "window"),
    !r || e === "container" && !t)
        return;
    let i = !1;
    const s = ri()
      , n = e === "window" ? s.innerHeight : t.clientHeight
      , a = Object.keys(r).map(o => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
            const l = parseFloat(o.substr(1));
            return {
                value: n * l,
                point: o
            }
        }
        return {
            value: o,
            point: o
        }
    }
    );
    a.sort( (o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
        const {point: l, value: u} = a[o];
        e === "window" ? s.matchMedia(`(min-width: ${u}px)`).matches && (i = l) : u <= t.clientWidth && (i = l)
    }
    return i || "max"
}
var Rp = {
    setBreakpoint: Fp,
    getBreakpoint: Bp
};
function $p(r, e) {
    const t = [];
    return r.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(s => {
            i[s] && t.push(e + s)
        }
        ) : typeof i == "string" && t.push(e + i)
    }
    ),
    t
}
function Vp() {
    const r = this
      , {classNames: e, params: t, rtl: i, el: s, device: n} = r
      , a = $p(["initialized", t.direction, {
        "free-mode": r.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: i
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: n.android
    }, {
        ios: n.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...a),
    s.classList.add(...e),
    r.emitContainerClasses()
}
function zp() {
    const r = this
      , {el: e, classNames: t} = r;
    e.classList.remove(...t),
    r.emitContainerClasses()
}
var Np = {
    addClasses: Vp,
    removeClasses: zp
};
function Hp() {
    const r = this
      , {isLocked: e, params: t} = r
      , {slidesOffsetBefore: i} = t;
    if (i) {
        const s = r.slides.length - 1
          , n = r.slidesGrid[s] + r.slidesSizesGrid[s] + i * 2;
        r.isLocked = r.size > n
    } else
        r.isLocked = r.snapGrid.length === 1;
    t.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked),
    t.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked),
    e && e !== r.isLocked && (r.isEnd = !1),
    e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock")
}
var Gp = {
    checkOverflow: Hp
}
  , Ul = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function qp(r, e) {
    return function(i) {
        i === void 0 && (i = {});
        const s = Object.keys(i)[0]
          , n = i[s];
        if (typeof n != "object" || n === null) {
            Zt(e, i);
            return
        }
        if (r[s] === !0 && (r[s] = {
            enabled: !0
        }),
        s === "navigation" && r[s] && r[s].enabled && !r[s].prevEl && !r[s].nextEl && (r[s].auto = !0),
        ["pagination", "scrollbar"].indexOf(s) >= 0 && r[s] && r[s].enabled && !r[s].el && (r[s].auto = !0),
        !(s in r && "enabled"in n)) {
            Zt(e, i);
            return
        }
        typeof r[s] == "object" && !("enabled"in r[s]) && (r[s].enabled = !0),
        r[s] || (r[s] = {
            enabled: !1
        }),
        Zt(e, i)
    }
}
const Va = {
    eventsEmitter: Nh,
    update: Qh,
    translate: rp,
    transition: lp,
    slide: mp,
    loop: bp,
    grabCursor: xp,
    events: Pp,
    breakpoints: Rp,
    checkOverflow: Gp,
    classes: Np
}
  , za = {};
class Ut {
    constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
            s[n] = arguments[n];
        s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? t = s[0] : [e,t] = s,
        t || (t = {}),
        t = Zt({}, t),
        e && !t.el && (t.el = e);
        const a = Wi();
        if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
            const c = [];
            return a.querySelectorAll(t.el).forEach(f => {
                const p = Zt({}, t, {
                    el: f
                });
                c.push(new Ut(p))
            }
            ),
            c
        }
        const o = this;
        o.__swiper__ = !0,
        o.support = td(),
        o.device = Bh({
            userAgent: t.userAgent
        }),
        o.browser = $h(),
        o.eventsListeners = {},
        o.eventsAnyListeners = [],
        o.modules = [...o.__modules__],
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const l = {};
        o.modules.forEach(c => {
            c({
                params: t,
                swiper: o,
                extendParams: qp(t, l),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o)
            })
        }
        );
        const u = Zt({}, Ul, l);
        return o.params = Zt({}, u, za, t),
        o.originalParams = Zt({}, o.params),
        o.passedParams = Zt({}, t),
        o.params && o.params.on && Object.keys(o.params.on).forEach(c => {
            o.on(c, o.params.on[c])
        }
        ),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return o.params.direction === "horizontal"
            },
            isVertical() {
                return o.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: i} = this
          , s = Di(t, `.${i.slideClass}, swiper-slide`)
          , n = ra(s[0]);
        return ra(e) - n
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: i} = e;
        e.slides = Di(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate()
          , a = (i.maxTranslate() - s) * e + s;
        i.translateTo(a, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(i => {
            const s = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: s
            }),
            e.emit("_slideClass", i, s)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const i = this
          , {params: s, slides: n, slidesGrid: a, slidesSizesGrid: o, size: l, activeIndex: u} = i;
        let c = 1;
        if (typeof s.slidesPerView == "number")
            return s.slidesPerView;
        if (s.centeredSlides) {
            let f = n[u] ? n[u].swiperSlideSize : 0, p;
            for (let d = u + 1; d < n.length; d += 1)
                n[d] && !p && (f += n[d].swiperSlideSize,
                c += 1,
                f > l && (p = !0));
            for (let d = u - 1; d >= 0; d -= 1)
                n[d] && !p && (f += n[d].swiperSlideSize,
                c += 1,
                f > l && (p = !0))
        } else if (e === "current")
            for (let f = u + 1; f < n.length; f += 1)
                (t ? a[f] + o[f] - a[u] < l : a[f] - a[u] < l) && (c += 1);
        else
            for (let f = u - 1; f >= 0; f -= 1)
                a[u] - a[f] < l && (c += 1);
        return c
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: i} = e;
        i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(a => {
            a.complete && zn(e, a)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function s() {
            const a = e.rtlTranslate ? e.translate * -1 : e.translate
              , o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
            e.setTranslate(o),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let n;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode)
            s(),
            i.autoHeight && e.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const a = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                n = e.slideTo(a.length - 1, 0, !1, !0)
            } else
                n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || s()
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const i = this
          , s = i.params.direction;
        return e || (e = s === "horizontal" ? "vertical" : "horizontal"),
        e === s || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        i.params.direction = e,
        i.slides.forEach(n => {
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }
        ),
        i.emit("changeDirection"),
        t && i.update()),
        i
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let i = e || t.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)),
        !i)
            return !1;
        i.swiper = t,
        i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === "SWIPER-CONTAINER" && (t.isElement = !0);
        const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = ( () => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : Di(i, s())[0])();
        return !a && t.params.createElements && (a = sn("div", t.params.wrapperClass),
        i.append(a),
        Di(i, `.${t.params.slideClass}`).forEach(o => {
            a.append(o)
        }
        )),
        Object.assign(t, {
            el: i,
            wrapperEl: a,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || rs(i, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || rs(i, "direction") === "rtl"),
            wrongRTL: rs(a, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach(n => {
            n.complete ? zn(t, n) : n.addEventListener("load", a => {
                zn(t, a.target)
            }
            )
        }
        ),
        bo(t),
        t.initialized = !0,
        bo(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const i = this
          , {params: s, el: n, wrapperEl: a, slides: o} = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
        i.initialized = !1,
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        t && (i.removeClasses(),
        n.removeAttribute("style"),
        a.removeAttribute("style"),
        o && o.length && o.forEach(l => {
            l.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach(l => {
            i.off(l)
        }
        ),
        e !== !1 && (i.el.swiper = null,
        kh(i)),
        i.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        Zt(za, e)
    }
    static get extendedDefaults() {
        return za
    }
    static get defaults() {
        return Ul
    }
    static installModule(e) {
        Ut.prototype.__modules__ || (Ut.prototype.__modules__ = []);
        const t = Ut.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => Ut.installModule(t)),
        Ut) : (Ut.installModule(e),
        Ut)
    }
}
Object.keys(Va).forEach(r => {
    Object.keys(Va[r]).forEach(e => {
        Ut.prototype[e] = Va[r][e]
    }
    )
}
);
Ut.use([Vh, zh]);
function rd(r, e, t, i) {
    return r.params.createElements && Object.keys(i).forEach(s => {
        if (!t[s] && t.auto === !0) {
            let n = Di(r.el, `.${i[s]}`)[0];
            n || (n = sn("div", i[s]),
            n.className = i[s],
            r.el.append(n)),
            t[s] = n,
            e[s] = n
        }
    }
    ),
    t
}
function Xl(r) {
    let {swiper: e, extendParams: t, on: i, emit: s} = r;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    e.navigation = {
        nextEl: null,
        prevEl: null
    };
    const n = h => (Array.isArray(h) ? h : [h]).filter(_ => !!_);
    function a(h) {
        let _;
        return h && typeof h == "string" && e.isElement && (_ = e.el.querySelector(h),
        _) ? _ : (h && (typeof h == "string" && (_ = [...document.querySelectorAll(h)]),
        e.params.uniqueNavElements && typeof h == "string" && _.length > 1 && e.el.querySelectorAll(h).length === 1 && (_ = e.el.querySelector(h))),
        h && !_ ? h : _)
    }
    function o(h, _) {
        const y = e.params.navigation;
        h = n(h),
        h.forEach(v => {
            v && (v.classList[_ ? "add" : "remove"](...y.disabledClass.split(" ")),
            v.tagName === "BUTTON" && (v.disabled = _),
            e.params.watchOverflow && e.enabled && v.classList[e.isLocked ? "add" : "remove"](y.lockClass))
        }
        )
    }
    function l() {
        const {nextEl: h, prevEl: _} = e.navigation;
        if (e.params.loop) {
            o(_, !1),
            o(h, !1);
            return
        }
        o(_, e.isBeginning && !e.params.rewind),
        o(h, e.isEnd && !e.params.rewind)
    }
    function u(h) {
        h.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        s("navigationPrev"))
    }
    function c(h) {
        h.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        s("navigationNext"))
    }
    function f() {
        const h = e.params.navigation;
        if (e.params.navigation = rd(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(h.nextEl || h.prevEl))
            return;
        let _ = a(h.nextEl)
          , y = a(h.prevEl);
        Object.assign(e.navigation, {
            nextEl: _,
            prevEl: y
        }),
        _ = n(_),
        y = n(y);
        const v = (b, m) => {
            b && b.addEventListener("click", m === "next" ? c : u),
            !e.enabled && b && b.classList.add(...h.lockClass.split(" "))
        }
        ;
        _.forEach(b => v(b, "next")),
        y.forEach(b => v(b, "prev"))
    }
    function p() {
        let {nextEl: h, prevEl: _} = e.navigation;
        h = n(h),
        _ = n(_);
        const y = (v, b) => {
            v.removeEventListener("click", b === "next" ? c : u),
            v.classList.remove(...e.params.navigation.disabledClass.split(" "))
        }
        ;
        h.forEach(v => y(v, "next")),
        _.forEach(v => y(v, "prev"))
    }
    i("init", () => {
        e.params.navigation.enabled === !1 ? g() : (f(),
        l())
    }
    ),
    i("toEdge fromEdge lock unlock", () => {
        l()
    }
    ),
    i("destroy", () => {
        p()
    }
    ),
    i("enable disable", () => {
        let {nextEl: h, prevEl: _} = e.navigation;
        if (h = n(h),
        _ = n(_),
        e.enabled) {
            l();
            return
        }
        [...h, ..._].filter(y => !!y).forEach(y => y.classList.add(e.params.navigation.lockClass))
    }
    ),
    i("click", (h, _) => {
        let {nextEl: y, prevEl: v} = e.navigation;
        y = n(y),
        v = n(v);
        const b = _.target;
        if (e.params.navigation.hideOnClick && !v.includes(b) && !y.includes(b)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === b || e.pagination.el.contains(b)))
                return;
            let m;
            y.length ? m = y[0].classList.contains(e.params.navigation.hiddenClass) : v.length && (m = v[0].classList.contains(e.params.navigation.hiddenClass)),
            s(m === !0 ? "navigationShow" : "navigationHide"),
            [...y, ...v].filter(w => !!w).forEach(w => w.classList.toggle(e.params.navigation.hiddenClass))
        }
    }
    );
    const d = () => {
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
        f(),
        l()
    }
      , g = () => {
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
        p()
    }
    ;
    Object.assign(e.navigation, {
        enable: d,
        disable: g,
        update: l,
        init: f,
        destroy: p
    })
}
function yr(r) {
    return r === void 0 && (r = ""),
    `.${r.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function Yp(r) {
    let {swiper: e, extendParams: t, on: i, emit: s} = r;
    const n = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: v => v,
            formatFractionTotal: v => v,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        bullets: []
    };
    let a, o = 0;
    const l = v => (Array.isArray(v) ? v : [v]).filter(b => !!b);
    function u() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }
    function c(v, b) {
        const {bulletActiveClass: m} = e.params.pagination;
        v && (v = v[`${b === "prev" ? "previous" : "next"}ElementSibling`],
        v && (v.classList.add(`${m}-${b}`),
        v = v[`${b === "prev" ? "previous" : "next"}ElementSibling`],
        v && v.classList.add(`${m}-${b}-${b}`)))
    }
    function f(v) {
        const b = v.target.closest(yr(e.params.pagination.bulletClass));
        if (!b)
            return;
        v.preventDefault();
        const m = ra(b) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === m)
                return;
            e.slideToLoop(m)
        } else
            e.slideTo(m)
    }
    function p() {
        const v = e.rtl
          , b = e.params.pagination;
        if (u())
            return;
        let m = e.pagination.el;
        m = l(m);
        let w, S;
        const T = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , k = e.params.loop ? Math.ceil(T / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (S = e.previousRealIndex || 0,
        w = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (w = e.snapIndex,
        S = e.previousSnapIndex) : (S = e.previousIndex || 0,
        w = e.activeIndex || 0),
        b.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const E = e.pagination.bullets;
            let C, O, A;
            if (b.dynamicBullets && (a = yo(E[0], e.isHorizontal() ? "width" : "height", !0),
            m.forEach(I => {
                I.style[e.isHorizontal() ? "width" : "height"] = `${a * (b.dynamicMainBullets + 4)}px`
            }
            ),
            b.dynamicMainBullets > 1 && S !== void 0 && (o += w - (S || 0),
            o > b.dynamicMainBullets - 1 ? o = b.dynamicMainBullets - 1 : o < 0 && (o = 0)),
            C = Math.max(w - o, 0),
            O = C + (Math.min(E.length, b.dynamicMainBullets) - 1),
            A = (O + C) / 2),
            E.forEach(I => {
                const D = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(P => `${b.bulletActiveClass}${P}`)].map(P => typeof P == "string" && P.includes(" ") ? P.split(" ") : P).flat();
                I.classList.remove(...D)
            }
            ),
            m.length > 1)
                E.forEach(I => {
                    const D = ra(I);
                    D === w ? I.classList.add(...b.bulletActiveClass.split(" ")) : e.isElement && I.setAttribute("part", "bullet"),
                    b.dynamicBullets && (D >= C && D <= O && I.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),
                    D === C && c(I, "prev"),
                    D === O && c(I, "next"))
                }
                );
            else {
                const I = E[w];
                if (I && I.classList.add(...b.bulletActiveClass.split(" ")),
                e.isElement && E.forEach( (D, P) => {
                    D.setAttribute("part", P === w ? "bullet-active" : "bullet")
                }
                ),
                b.dynamicBullets) {
                    const D = E[C]
                      , P = E[O];
                    for (let B = C; B <= O; B += 1)
                        E[B] && E[B].classList.add(...`${b.bulletActiveClass}-main`.split(" "));
                    c(D, "prev"),
                    c(P, "next")
                }
            }
            if (b.dynamicBullets) {
                const I = Math.min(E.length, b.dynamicMainBullets + 4)
                  , D = (a * I - a) / 2 - A * a
                  , P = v ? "right" : "left";
                E.forEach(B => {
                    B.style[e.isHorizontal() ? P : "top"] = `${D}px`
                }
                )
            }
        }
        m.forEach( (E, C) => {
            if (b.type === "fraction" && (E.querySelectorAll(yr(b.currentClass)).forEach(O => {
                O.textContent = b.formatFractionCurrent(w + 1)
            }
            ),
            E.querySelectorAll(yr(b.totalClass)).forEach(O => {
                O.textContent = b.formatFractionTotal(k)
            }
            )),
            b.type === "progressbar") {
                let O;
                b.progressbarOpposite ? O = e.isHorizontal() ? "vertical" : "horizontal" : O = e.isHorizontal() ? "horizontal" : "vertical";
                const A = (w + 1) / k;
                let I = 1
                  , D = 1;
                O === "horizontal" ? I = A : D = A,
                E.querySelectorAll(yr(b.progressbarFillClass)).forEach(P => {
                    P.style.transform = `translate3d(0,0,0) scaleX(${I}) scaleY(${D})`,
                    P.style.transitionDuration = `${e.params.speed}ms`
                }
                )
            }
            b.type === "custom" && b.renderCustom ? (E.innerHTML = b.renderCustom(e, w + 1, k),
            C === 0 && s("paginationRender", E)) : (C === 0 && s("paginationRender", E),
            s("paginationUpdate", E)),
            e.params.watchOverflow && e.enabled && E.classList[e.isLocked ? "add" : "remove"](b.lockClass)
        }
        )
    }
    function d() {
        const v = e.params.pagination;
        if (u())
            return;
        const b = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let m = e.pagination.el;
        m = l(m);
        let w = "";
        if (v.type === "bullets") {
            let S = e.params.loop ? Math.ceil(b / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && S > b && (S = b);
            for (let T = 0; T < S; T += 1)
                v.renderBullet ? w += v.renderBullet.call(e, T, v.bulletClass) : w += `<${v.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${v.bulletClass}"></${v.bulletElement}>`
        }
        v.type === "fraction" && (v.renderFraction ? w = v.renderFraction.call(e, v.currentClass, v.totalClass) : w = `<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`),
        v.type === "progressbar" && (v.renderProgressbar ? w = v.renderProgressbar.call(e, v.progressbarFillClass) : w = `<span class="${v.progressbarFillClass}"></span>`),
        e.pagination.bullets = [],
        m.forEach(S => {
            v.type !== "custom" && (S.innerHTML = w || ""),
            v.type === "bullets" && e.pagination.bullets.push(...S.querySelectorAll(yr(v.bulletClass)))
        }
        ),
        v.type !== "custom" && s("paginationRender", m[0])
    }
    function g() {
        e.params.pagination = rd(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const v = e.params.pagination;
        if (!v.el)
            return;
        let b;
        typeof v.el == "string" && e.isElement && (b = e.el.querySelector(v.el)),
        !b && typeof v.el == "string" && (b = [...document.querySelectorAll(v.el)]),
        b || (b = v.el),
        !(!b || b.length === 0) && (e.params.uniqueNavElements && typeof v.el == "string" && Array.isArray(b) && b.length > 1 && (b = [...e.el.querySelectorAll(v.el)],
        b.length > 1 && (b = b.filter(m => ed(m, ".swiper")[0] === e.el)[0])),
        Array.isArray(b) && b.length === 1 && (b = b[0]),
        Object.assign(e.pagination, {
            el: b
        }),
        b = l(b),
        b.forEach(m => {
            v.type === "bullets" && v.clickable && m.classList.add(...(v.clickableClass || "").split(" ")),
            m.classList.add(v.modifierClass + v.type),
            m.classList.add(e.isHorizontal() ? v.horizontalClass : v.verticalClass),
            v.type === "bullets" && v.dynamicBullets && (m.classList.add(`${v.modifierClass}${v.type}-dynamic`),
            o = 0,
            v.dynamicMainBullets < 1 && (v.dynamicMainBullets = 1)),
            v.type === "progressbar" && v.progressbarOpposite && m.classList.add(v.progressbarOppositeClass),
            v.clickable && m.addEventListener("click", f),
            e.enabled || m.classList.add(v.lockClass)
        }
        ))
    }
    function h() {
        const v = e.params.pagination;
        if (u())
            return;
        let b = e.pagination.el;
        b && (b = l(b),
        b.forEach(m => {
            m.classList.remove(v.hiddenClass),
            m.classList.remove(v.modifierClass + v.type),
            m.classList.remove(e.isHorizontal() ? v.horizontalClass : v.verticalClass),
            v.clickable && (m.classList.remove(...(v.clickableClass || "").split(" ")),
            m.removeEventListener("click", f))
        }
        )),
        e.pagination.bullets && e.pagination.bullets.forEach(m => m.classList.remove(...v.bulletActiveClass.split(" ")))
    }
    i("changeDirection", () => {
        if (!e.pagination || !e.pagination.el)
            return;
        const v = e.params.pagination;
        let {el: b} = e.pagination;
        b = l(b),
        b.forEach(m => {
            m.classList.remove(v.horizontalClass, v.verticalClass),
            m.classList.add(e.isHorizontal() ? v.horizontalClass : v.verticalClass)
        }
        )
    }
    ),
    i("init", () => {
        e.params.pagination.enabled === !1 ? y() : (g(),
        d(),
        p())
    }
    ),
    i("activeIndexChange", () => {
        typeof e.snapIndex > "u" && p()
    }
    ),
    i("snapIndexChange", () => {
        p()
    }
    ),
    i("snapGridLengthChange", () => {
        d(),
        p()
    }
    ),
    i("destroy", () => {
        h()
    }
    ),
    i("enable disable", () => {
        let {el: v} = e.pagination;
        v && (v = l(v),
        v.forEach(b => b.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }
    ),
    i("lock unlock", () => {
        p()
    }
    ),
    i("click", (v, b) => {
        const m = b.target
          , w = l(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && w && w.length > 0 && !m.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && m === e.navigation.nextEl || e.navigation.prevEl && m === e.navigation.prevEl))
                return;
            const S = w[0].classList.contains(e.params.pagination.hiddenClass);
            s(S === !0 ? "paginationShow" : "paginationHide"),
            w.forEach(T => T.classList.toggle(e.params.pagination.hiddenClass))
        }
    }
    );
    const _ = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let {el: v} = e.pagination;
        v && (v = l(v),
        v.forEach(b => b.classList.remove(e.params.pagination.paginationDisabledClass))),
        g(),
        d(),
        p()
    }
      , y = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let {el: v} = e.pagination;
        v && (v = l(v),
        v.forEach(b => b.classList.add(e.params.pagination.paginationDisabledClass))),
        h()
    }
    ;
    Object.assign(e.pagination, {
        enable: _,
        disable: y,
        render: d,
        update: p,
        init: g,
        destroy: h
    })
}
function Wp(r) {
    let {swiper: e, extendParams: t, on: i, emit: s, params: n} = r;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
    t({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let a, o, l = n && n.autoplay ? n.autoplay.delay : 3e3, u = n && n.autoplay ? n.autoplay.delay : 3e3, c, f = new Date().getTime(), p, d, g, h, _, y, v;
    function b(F) {
        !e || e.destroyed || !e.wrapperEl || F.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", b),
        !v && C())
    }
    const m = () => {
        if (e.destroyed || !e.autoplay.running)
            return;
        e.autoplay.paused ? p = !0 : p && (u = c,
        p = !1);
        const F = e.autoplay.paused ? c : f + u - new Date().getTime();
        e.autoplay.timeLeft = F,
        s("autoplayTimeLeft", F, F / l),
        o = requestAnimationFrame( () => {
            m()
        }
        )
    }
      , w = () => {
        let F;
        return e.virtual && e.params.virtual.enabled ? F = e.slides.filter(x => x.classList.contains("swiper-slide-active"))[0] : F = e.slides[e.activeIndex],
        F ? parseInt(F.getAttribute("data-swiper-autoplay"), 10) : void 0
    }
      , S = F => {
        if (e.destroyed || !e.autoplay.running)
            return;
        cancelAnimationFrame(o),
        m();
        let U = typeof F > "u" ? e.params.autoplay.delay : F;
        l = e.params.autoplay.delay,
        u = e.params.autoplay.delay;
        const x = w();
        !Number.isNaN(x) && x > 0 && typeof F > "u" && (U = x,
        l = x,
        u = x),
        c = U;
        const J = e.params.speed
          , de = () => {
            !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(J, !0, !0),
            s("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, J, !0, !0),
            s("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(J, !0, !0),
            s("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, J, !0, !0),
            s("autoplay")),
            e.params.cssMode && (f = new Date().getTime(),
            requestAnimationFrame( () => {
                S()
            }
            )))
        }
        ;
        return U > 0 ? (clearTimeout(a),
        a = setTimeout( () => {
            de()
        }
        , U)) : requestAnimationFrame( () => {
            de()
        }
        ),
        U
    }
      , T = () => {
        f = new Date().getTime(),
        e.autoplay.running = !0,
        S(),
        s("autoplayStart")
    }
      , k = () => {
        e.autoplay.running = !1,
        clearTimeout(a),
        cancelAnimationFrame(o),
        s("autoplayStop")
    }
      , E = (F, U) => {
        if (e.destroyed || !e.autoplay.running)
            return;
        clearTimeout(a),
        F || (y = !0);
        const x = () => {
            s("autoplayPause"),
            e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", b) : C()
        }
        ;
        if (e.autoplay.paused = !0,
        U) {
            _ && (c = e.params.autoplay.delay),
            _ = !1,
            x();
            return
        }
        c = (c || e.params.autoplay.delay) - (new Date().getTime() - f),
        !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0),
        x())
    }
      , C = () => {
        e.isEnd && c < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = new Date().getTime(),
        y ? (y = !1,
        S(c)) : S(),
        e.autoplay.paused = !1,
        s("autoplayResume"))
    }
      , O = () => {
        if (e.destroyed || !e.autoplay.running)
            return;
        const F = Wi();
        F.visibilityState === "hidden" && (y = !0,
        E(!0)),
        F.visibilityState === "visible" && C()
    }
      , A = F => {
        F.pointerType === "mouse" && (y = !0,
        v = !0,
        !(e.animating || e.autoplay.paused) && E(!0))
    }
      , I = F => {
        F.pointerType === "mouse" && (v = !1,
        e.autoplay.paused && C())
    }
      , D = () => {
        e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", A),
        e.el.addEventListener("pointerleave", I))
    }
      , P = () => {
        e.el.removeEventListener("pointerenter", A),
        e.el.removeEventListener("pointerleave", I)
    }
      , B = () => {
        Wi().addEventListener("visibilitychange", O)
    }
      , V = () => {
        Wi().removeEventListener("visibilitychange", O)
    }
    ;
    i("init", () => {
        e.params.autoplay.enabled && (D(),
        B(),
        T())
    }
    ),
    i("destroy", () => {
        P(),
        V(),
        e.autoplay.running && k()
    }
    ),
    i("_freeModeStaticRelease", () => {
        (g || y) && C()
    }
    ),
    i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? k() : E(!0, !0)
    }
    ),
    i("beforeTransitionStart", (F, U, x) => {
        e.destroyed || !e.autoplay.running || (x || !e.params.autoplay.disableOnInteraction ? E(!0, !0) : k())
    }
    ),
    i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
            if (e.params.autoplay.disableOnInteraction) {
                k();
                return
            }
            d = !0,
            g = !1,
            y = !1,
            h = setTimeout( () => {
                y = !0,
                g = !0,
                E(!0)
            }
            , 200)
        }
    }
    ),
    i("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !d)) {
            if (clearTimeout(h),
            clearTimeout(a),
            e.params.autoplay.disableOnInteraction) {
                g = !1,
                d = !1;
                return
            }
            g && e.params.cssMode && C(),
            g = !1,
            d = !1
        }
    }
    ),
    i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (_ = !0)
    }
    ),
    Object.assign(e.autoplay, {
        start: T,
        stop: k,
        pause: E,
        resume: C
    })
}
function jp(r) {
    const {effect: e, swiper: t, on: i, setTranslate: s, setTransition: n, overwriteParams: a, perspective: o, recreateShadows: l, getEffectParams: u} = r;
    i("beforeInit", () => {
        if (t.params.effect !== e)
            return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`),
        o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
        const f = a ? a() : {};
        Object.assign(t.params, f),
        Object.assign(t.originalParams, f)
    }
    ),
    i("setTranslate", () => {
        t.params.effect === e && s()
    }
    ),
    i("setTransition", (f, p) => {
        t.params.effect === e && n(p)
    }
    ),
    i("transitionEnd", () => {
        if (t.params.effect === e && l) {
            if (!u || !u().slideShadows)
                return;
            t.slides.forEach(f => {
                f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p => p.remove())
            }
            ),
            l()
        }
    }
    );
    let c;
    i("virtualUpdate", () => {
        t.params.effect === e && (t.slides.length || (c = !0),
        requestAnimationFrame( () => {
            c && t.slides && t.slides.length && (s(),
            c = !1)
        }
        ))
    }
    )
}
function Up(r, e) {
    const t = Zo(e);
    return t !== e && (t.style.backfaceVisibility = "hidden",
    t.style["-webkit-backface-visibility"] = "hidden"),
    t
}
function Xp(r) {
    let {swiper: e, duration: t, transformElements: i, allSlides: s} = r;
    const {activeIndex: n} = e
      , a = o => o.parentElement ? o.parentElement : e.slides.filter(u => u.shadowRoot && u.shadowRoot === o.parentNode)[0];
    if (e.params.virtualTranslate && t !== 0) {
        let o = !1, l;
        s ? l = i : l = i.filter(u => {
            const c = u.classList.contains("swiper-slide-transform") ? a(u) : u;
            return e.getSlideIndex(c) === n
        }
        ),
        l.forEach(u => {
            Dh(u, () => {
                if (o || !e || e.destroyed)
                    return;
                o = !0,
                e.animating = !1;
                const c = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(c)
            }
            )
        }
        )
    }
}
function Kp(r, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${r ? ` swiper-slide-shadow-${r}` : ""}`
      , s = Zo(e);
    let n = s.querySelector(`.${i.split(" ").join(".")}`);
    return n || (n = sn("div", i.split(" ")),
    s.append(n)),
    n
}
function Zp(r) {
    let {swiper: e, extendParams: t, on: i} = r;
    t({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    }),
    jp({
        effect: "cards",
        swiper: e,
        on: i,
        setTranslate: () => {
            const {slides: a, activeIndex: o, rtlTranslate: l} = e
              , u = e.params.cardsEffect
              , {startTranslate: c, isTouched: f} = e.touchEventsData
              , p = l ? -e.translate : e.translate;
            for (let d = 0; d < a.length; d += 1) {
                const g = a[d]
                  , h = g.progress
                  , _ = Math.min(Math.max(h, -4), 4);
                let y = g.swiperSlideOffset;
                e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                e.params.centeredSlides && e.params.cssMode && (y -= a[0].swiperSlideOffset);
                let v = e.params.cssMode ? -y - e.translate : -y
                  , b = 0;
                const m = -100 * Math.abs(_);
                let w = 1
                  , S = -u.perSlideRotate * _
                  , T = u.perSlideOffset - Math.abs(_) * .75;
                const k = e.virtual && e.params.virtual.enabled ? e.virtual.from + d : d
                  , E = (k === o || k === o - 1) && _ > 0 && _ < 1 && (f || e.params.cssMode) && p < c
                  , C = (k === o || k === o + 1) && _ < 0 && _ > -1 && (f || e.params.cssMode) && p > c;
                if (E || C) {
                    const D = (1 - Math.abs((Math.abs(_) - .5) / .5)) ** .5;
                    S += -28 * _ * D,
                    w += -.5 * D,
                    T += 96 * D,
                    b = `${-25 * D * Math.abs(_)}%`
                }
                if (_ < 0 ? v = `calc(${v}px ${l ? "-" : "+"} (${T * Math.abs(_)}%))` : _ > 0 ? v = `calc(${v}px ${l ? "-" : "+"} (-${T * Math.abs(_)}%))` : v = `${v}px`,
                !e.isHorizontal()) {
                    const D = b;
                    b = v,
                    v = D
                }
                const O = _ < 0 ? `${1 + (1 - w) * _}` : `${1 - (1 - w) * _}`
                  , A = `
        translate3d(${v}, ${b}, ${m}px)
        rotateZ(${u.rotate ? l ? -S : S : 0}deg)
        scale(${O})
      `;
                if (u.slideShadows) {
                    let D = g.querySelector(".swiper-slide-shadow");
                    D || (D = Kp("cards", g)),
                    D && (D.style.opacity = Math.min(Math.max((Math.abs(_) - .5) / .5, 0), 1))
                }
                g.style.zIndex = -Math.abs(Math.round(h)) + a.length;
                const I = Up(u, g);
                I.style.transform = A
            }
        }
        ,
        setTransition: a => {
            const o = e.slides.map(l => Zo(l));
            o.forEach(l => {
                l.style.transitionDuration = `${a}ms`,
                l.querySelectorAll(".swiper-slide-shadow").forEach(u => {
                    u.style.transitionDuration = `${a}ms`
                }
                )
            }
            ),
            Xp({
                swiper: e,
                duration: a,
                transformElements: o
            })
        }
        ,
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
document.addEventListener("DOMContentLoaded", () => {
    const r = document.querySelector(".news__slider");
    r && new Ut(r,{
        modules: [Xl],
        spaceBetween: 36,
        slidesPerView: 4,
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 36
            }
        }
    });
    const e = document.querySelector(".premium__slider");
    e && (document.querySelectorAll(".premium .swiper-slide"),
    new Ut(e,{
        modules: [Yp, Xl, Zp, Wp],
        effect: "cards",
        slidesPerView: 1,
        grabCursor: !0,
        initialSlide: 1,
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !0
        },
        loopAdditionalSlides: 2,
        loop: !0,
        cardsEffect: {
            perSlideRotate: 0,
            perSlideOffset: 40,
            rotate: !1
        },
        navigation: {
            prevEl: ".premium__arrow--prev",
            nextEl: ".premium__arrow--next"
        },
        pagination: {
            clickable: !0,
            el: ".premium__pagination"
        },
        on: {}
    }))
}
);
var zt = "top"
  , pi = "bottom"
  , gi = "right"
  , Nt = "left"
  , Qo = "auto"
  , on = [zt, pi, gi, Nt]
  , ur = "start"
  , rn = "end"
  , Qp = "clippingParents"
  , nd = "viewport"
  , br = "popper"
  , Jp = "reference"
  , Kl = on.reduce(function(r, e) {
    return r.concat([e + "-" + ur, e + "-" + rn])
}, [])
  , ad = [].concat(on, [Qo]).reduce(function(r, e) {
    return r.concat([e, e + "-" + ur, e + "-" + rn])
}, [])
  , eg = "beforeRead"
  , tg = "read"
  , ig = "afterRead"
  , sg = "beforeMain"
  , rg = "main"
  , ng = "afterMain"
  , ag = "beforeWrite"
  , og = "write"
  , lg = "afterWrite"
  , ug = [eg, tg, ig, sg, rg, ng, ag, og, lg];
function $i(r) {
    return r ? (r.nodeName || "").toLowerCase() : null
}
function si(r) {
    if (r == null)
        return window;
    if (r.toString() !== "[object Window]") {
        var e = r.ownerDocument;
        return e && e.defaultView || window
    }
    return r
}
function Vs(r) {
    var e = si(r).Element;
    return r instanceof e || r instanceof Element
}
function fi(r) {
    var e = si(r).HTMLElement;
    return r instanceof e || r instanceof HTMLElement
}
function Jo(r) {
    if (typeof ShadowRoot > "u")
        return !1;
    var e = si(r).ShadowRoot;
    return r instanceof e || r instanceof ShadowRoot
}
function cg(r) {
    var e = r.state;
    Object.keys(e.elements).forEach(function(t) {
        var i = e.styles[t] || {}
          , s = e.attributes[t] || {}
          , n = e.elements[t];
        !fi(n) || !$i(n) || (Object.assign(n.style, i),
        Object.keys(s).forEach(function(a) {
            var o = s[a];
            o === !1 ? n.removeAttribute(a) : n.setAttribute(a, o === !0 ? "" : o)
        }))
    })
}
function dg(r) {
    var e = r.state
      , t = {
        popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(e.elements.popper.style, t.popper),
    e.styles = t,
    e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
    function() {
        Object.keys(e.elements).forEach(function(i) {
            var s = e.elements[i]
              , n = e.attributes[i] || {}
              , a = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i])
              , o = a.reduce(function(l, u) {
                return l[u] = "",
                l
            }, {});
            !fi(s) || !$i(s) || (Object.assign(s.style, o),
            Object.keys(n).forEach(function(l) {
                s.removeAttribute(l)
            }))
        })
    }
}
const od = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: cg,
    effect: dg,
    requires: ["computeStyles"]
};
function Bi(r) {
    return r.split("-")[0]
}
var Ds = Math.max
  , na = Math.min
  , cr = Math.round;
function wo() {
    var r = navigator.userAgentData;
    return r != null && r.brands && Array.isArray(r.brands) ? r.brands.map(function(e) {
        return e.brand + "/" + e.version
    }).join(" ") : navigator.userAgent
}
function ld() {
    return !/^((?!chrome|android).)*safari/i.test(wo())
}
function dr(r, e, t) {
    e === void 0 && (e = !1),
    t === void 0 && (t = !1);
    var i = r.getBoundingClientRect()
      , s = 1
      , n = 1;
    e && fi(r) && (s = r.offsetWidth > 0 && cr(i.width) / r.offsetWidth || 1,
    n = r.offsetHeight > 0 && cr(i.height) / r.offsetHeight || 1);
    var a = Vs(r) ? si(r) : window
      , o = a.visualViewport
      , l = !ld() && t
      , u = (i.left + (l && o ? o.offsetLeft : 0)) / s
      , c = (i.top + (l && o ? o.offsetTop : 0)) / n
      , f = i.width / s
      , p = i.height / n;
    return {
        width: f,
        height: p,
        top: c,
        right: u + f,
        bottom: c + p,
        left: u,
        x: u,
        y: c
    }
}
function el(r) {
    var e = dr(r)
      , t = r.offsetWidth
      , i = r.offsetHeight;
    return Math.abs(e.width - t) <= 1 && (t = e.width),
    Math.abs(e.height - i) <= 1 && (i = e.height),
    {
        x: r.offsetLeft,
        y: r.offsetTop,
        width: t,
        height: i
    }
}
function ud(r, e) {
    var t = e.getRootNode && e.getRootNode();
    if (r.contains(e))
        return !0;
    if (t && Jo(t)) {
        var i = e;
        do {
            if (i && r.isSameNode(i))
                return !0;
            i = i.parentNode || i.host
        } while (i)
    }
    return !1
}
function Ki(r) {
    return si(r).getComputedStyle(r)
}
function fg(r) {
    return ["table", "td", "th"].indexOf($i(r)) >= 0
}
function hs(r) {
    return ((Vs(r) ? r.ownerDocument : r.document) || window.document).documentElement
}
function ga(r) {
    return $i(r) === "html" ? r : r.assignedSlot || r.parentNode || (Jo(r) ? r.host : null) || hs(r)
}
function Zl(r) {
    return !fi(r) || Ki(r).position === "fixed" ? null : r.offsetParent
}
function hg(r) {
    var e = /firefox/i.test(wo())
      , t = /Trident/i.test(wo());
    if (t && fi(r)) {
        var i = Ki(r);
        if (i.position === "fixed")
            return null
    }
    var s = ga(r);
    for (Jo(s) && (s = s.host); fi(s) && ["html", "body"].indexOf($i(s)) < 0; ) {
        var n = Ki(s);
        if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || e && n.willChange === "filter" || e && n.filter && n.filter !== "none")
            return s;
        s = s.parentNode
    }
    return null
}
function ln(r) {
    for (var e = si(r), t = Zl(r); t && fg(t) && Ki(t).position === "static"; )
        t = Zl(t);
    return t && ($i(t) === "html" || $i(t) === "body" && Ki(t).position === "static") ? e : t || hg(r) || e
}
function tl(r) {
    return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y"
}
function Hr(r, e, t) {
    return Ds(r, na(e, t))
}
function pg(r, e, t) {
    var i = Hr(r, e, t);
    return i > t ? t : i
}
function cd() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}
function dd(r) {
    return Object.assign({}, cd(), r)
}
function fd(r, e) {
    return e.reduce(function(t, i) {
        return t[i] = r,
        t
    }, {})
}
var gg = function(e, t) {
    return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
        placement: t.placement
    })) : e,
    dd(typeof e != "number" ? e : fd(e, on))
};
function mg(r) {
    var e, t = r.state, i = r.name, s = r.options, n = t.elements.arrow, a = t.modifiersData.popperOffsets, o = Bi(t.placement), l = tl(o), u = [Nt, gi].indexOf(o) >= 0, c = u ? "height" : "width";
    if (!(!n || !a)) {
        var f = gg(s.padding, t)
          , p = el(n)
          , d = l === "y" ? zt : Nt
          , g = l === "y" ? pi : gi
          , h = t.rects.reference[c] + t.rects.reference[l] - a[l] - t.rects.popper[c]
          , _ = a[l] - t.rects.reference[l]
          , y = ln(n)
          , v = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0
          , b = h / 2 - _ / 2
          , m = f[d]
          , w = v - p[c] - f[g]
          , S = v / 2 - p[c] / 2 + b
          , T = Hr(m, S, w)
          , k = l;
        t.modifiersData[i] = (e = {},
        e[k] = T,
        e.centerOffset = T - S,
        e)
    }
}
function vg(r) {
    var e = r.state
      , t = r.options
      , i = t.element
      , s = i === void 0 ? "[data-popper-arrow]" : i;
    s != null && (typeof s == "string" && (s = e.elements.popper.querySelector(s),
    !s) || ud(e.elements.popper, s) && (e.elements.arrow = s))
}
const _g = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: mg,
    effect: vg,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};
function fr(r) {
    return r.split("-")[1]
}
var yg = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function bg(r, e) {
    var t = r.x
      , i = r.y
      , s = e.devicePixelRatio || 1;
    return {
        x: cr(t * s) / s || 0,
        y: cr(i * s) / s || 0
    }
}
function Ql(r) {
    var e, t = r.popper, i = r.popperRect, s = r.placement, n = r.variation, a = r.offsets, o = r.position, l = r.gpuAcceleration, u = r.adaptive, c = r.roundOffsets, f = r.isFixed, p = a.x, d = p === void 0 ? 0 : p, g = a.y, h = g === void 0 ? 0 : g, _ = typeof c == "function" ? c({
        x: d,
        y: h
    }) : {
        x: d,
        y: h
    };
    d = _.x,
    h = _.y;
    var y = a.hasOwnProperty("x")
      , v = a.hasOwnProperty("y")
      , b = Nt
      , m = zt
      , w = window;
    if (u) {
        var S = ln(t)
          , T = "clientHeight"
          , k = "clientWidth";
        if (S === si(t) && (S = hs(t),
        Ki(S).position !== "static" && o === "absolute" && (T = "scrollHeight",
        k = "scrollWidth")),
        S = S,
        s === zt || (s === Nt || s === gi) && n === rn) {
            m = pi;
            var E = f && S === w && w.visualViewport ? w.visualViewport.height : S[T];
            h -= E - i.height,
            h *= l ? 1 : -1
        }
        if (s === Nt || (s === zt || s === pi) && n === rn) {
            b = gi;
            var C = f && S === w && w.visualViewport ? w.visualViewport.width : S[k];
            d -= C - i.width,
            d *= l ? 1 : -1
        }
    }
    var O = Object.assign({
        position: o
    }, u && yg)
      , A = c === !0 ? bg({
        x: d,
        y: h
    }, si(t)) : {
        x: d,
        y: h
    };
    if (d = A.x,
    h = A.y,
    l) {
        var I;
        return Object.assign({}, O, (I = {},
        I[m] = v ? "0" : "",
        I[b] = y ? "0" : "",
        I.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + h + "px)" : "translate3d(" + d + "px, " + h + "px, 0)",
        I))
    }
    return Object.assign({}, O, (e = {},
    e[m] = v ? h + "px" : "",
    e[b] = y ? d + "px" : "",
    e.transform = "",
    e))
}
function wg(r) {
    var e = r.state
      , t = r.options
      , i = t.gpuAcceleration
      , s = i === void 0 ? !0 : i
      , n = t.adaptive
      , a = n === void 0 ? !0 : n
      , o = t.roundOffsets
      , l = o === void 0 ? !0 : o
      , u = {
        placement: Bi(e.placement),
        variation: fr(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s,
        isFixed: e.options.strategy === "fixed"
    };
    e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Ql(Object.assign({}, u, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: a,
        roundOffsets: l
    })))),
    e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Ql(Object.assign({}, u, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
    })))),
    e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
    })
}
const Sg = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: wg,
    data: {}
};
var kn = {
    passive: !0
};
function xg(r) {
    var e = r.state
      , t = r.instance
      , i = r.options
      , s = i.scroll
      , n = s === void 0 ? !0 : s
      , a = i.resize
      , o = a === void 0 ? !0 : a
      , l = si(e.elements.popper)
      , u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return n && u.forEach(function(c) {
        c.addEventListener("scroll", t.update, kn)
    }),
    o && l.addEventListener("resize", t.update, kn),
    function() {
        n && u.forEach(function(c) {
            c.removeEventListener("scroll", t.update, kn)
        }),
        o && l.removeEventListener("resize", t.update, kn)
    }
}
const Cg = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: xg,
    data: {}
};
var Tg = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function Nn(r) {
    return r.replace(/left|right|bottom|top/g, function(e) {
        return Tg[e]
    })
}
var Eg = {
    start: "end",
    end: "start"
};
function Jl(r) {
    return r.replace(/start|end/g, function(e) {
        return Eg[e]
    })
}
function il(r) {
    var e = si(r)
      , t = e.pageXOffset
      , i = e.pageYOffset;
    return {
        scrollLeft: t,
        scrollTop: i
    }
}
function sl(r) {
    return dr(hs(r)).left + il(r).scrollLeft
}
function kg(r, e) {
    var t = si(r)
      , i = hs(r)
      , s = t.visualViewport
      , n = i.clientWidth
      , a = i.clientHeight
      , o = 0
      , l = 0;
    if (s) {
        n = s.width,
        a = s.height;
        var u = ld();
        (u || !u && e === "fixed") && (o = s.offsetLeft,
        l = s.offsetTop)
    }
    return {
        width: n,
        height: a,
        x: o + sl(r),
        y: l
    }
}
function Ag(r) {
    var e, t = hs(r), i = il(r), s = (e = r.ownerDocument) == null ? void 0 : e.body, n = Ds(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Ds(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), o = -i.scrollLeft + sl(r), l = -i.scrollTop;
    return Ki(s || t).direction === "rtl" && (o += Ds(t.clientWidth, s ? s.clientWidth : 0) - n),
    {
        width: n,
        height: a,
        x: o,
        y: l
    }
}
function rl(r) {
    var e = Ki(r)
      , t = e.overflow
      , i = e.overflowX
      , s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + s + i)
}
function hd(r) {
    return ["html", "body", "#document"].indexOf($i(r)) >= 0 ? r.ownerDocument.body : fi(r) && rl(r) ? r : hd(ga(r))
}
function Gr(r, e) {
    var t;
    e === void 0 && (e = []);
    var i = hd(r)
      , s = i === ((t = r.ownerDocument) == null ? void 0 : t.body)
      , n = si(i)
      , a = s ? [n].concat(n.visualViewport || [], rl(i) ? i : []) : i
      , o = e.concat(a);
    return s ? o : o.concat(Gr(ga(a)))
}
function So(r) {
    return Object.assign({}, r, {
        left: r.x,
        top: r.y,
        right: r.x + r.width,
        bottom: r.y + r.height
    })
}
function Og(r, e) {
    var t = dr(r, !1, e === "fixed");
    return t.top = t.top + r.clientTop,
    t.left = t.left + r.clientLeft,
    t.bottom = t.top + r.clientHeight,
    t.right = t.left + r.clientWidth,
    t.width = r.clientWidth,
    t.height = r.clientHeight,
    t.x = t.left,
    t.y = t.top,
    t
}
function eu(r, e, t) {
    return e === nd ? So(kg(r, t)) : Vs(e) ? Og(e, t) : So(Ag(hs(r)))
}
function Mg(r) {
    var e = Gr(ga(r))
      , t = ["absolute", "fixed"].indexOf(Ki(r).position) >= 0
      , i = t && fi(r) ? ln(r) : r;
    return Vs(i) ? e.filter(function(s) {
        return Vs(s) && ud(s, i) && $i(s) !== "body"
    }) : []
}
function Ig(r, e, t, i) {
    var s = e === "clippingParents" ? Mg(r) : [].concat(e)
      , n = [].concat(s, [t])
      , a = n[0]
      , o = n.reduce(function(l, u) {
        var c = eu(r, u, i);
        return l.top = Ds(c.top, l.top),
        l.right = na(c.right, l.right),
        l.bottom = na(c.bottom, l.bottom),
        l.left = Ds(c.left, l.left),
        l
    }, eu(r, a, i));
    return o.width = o.right - o.left,
    o.height = o.bottom - o.top,
    o.x = o.left,
    o.y = o.top,
    o
}
function pd(r) {
    var e = r.reference, t = r.element, i = r.placement, s = i ? Bi(i) : null, n = i ? fr(i) : null, a = e.x + e.width / 2 - t.width / 2, o = e.y + e.height / 2 - t.height / 2, l;
    switch (s) {
    case zt:
        l = {
            x: a,
            y: e.y - t.height
        };
        break;
    case pi:
        l = {
            x: a,
            y: e.y + e.height
        };
        break;
    case gi:
        l = {
            x: e.x + e.width,
            y: o
        };
        break;
    case Nt:
        l = {
            x: e.x - t.width,
            y: o
        };
        break;
    default:
        l = {
            x: e.x,
            y: e.y
        }
    }
    var u = s ? tl(s) : null;
    if (u != null) {
        var c = u === "y" ? "height" : "width";
        switch (n) {
        case ur:
            l[u] = l[u] - (e[c] / 2 - t[c] / 2);
            break;
        case rn:
            l[u] = l[u] + (e[c] / 2 - t[c] / 2);
            break
        }
    }
    return l
}
function nn(r, e) {
    e === void 0 && (e = {});
    var t = e
      , i = t.placement
      , s = i === void 0 ? r.placement : i
      , n = t.strategy
      , a = n === void 0 ? r.strategy : n
      , o = t.boundary
      , l = o === void 0 ? Qp : o
      , u = t.rootBoundary
      , c = u === void 0 ? nd : u
      , f = t.elementContext
      , p = f === void 0 ? br : f
      , d = t.altBoundary
      , g = d === void 0 ? !1 : d
      , h = t.padding
      , _ = h === void 0 ? 0 : h
      , y = dd(typeof _ != "number" ? _ : fd(_, on))
      , v = p === br ? Jp : br
      , b = r.rects.popper
      , m = r.elements[g ? v : p]
      , w = Ig(Vs(m) ? m : m.contextElement || hs(r.elements.popper), l, c, a)
      , S = dr(r.elements.reference)
      , T = pd({
        reference: S,
        element: b,
        strategy: "absolute",
        placement: s
    })
      , k = So(Object.assign({}, b, T))
      , E = p === br ? k : S
      , C = {
        top: w.top - E.top + y.top,
        bottom: E.bottom - w.bottom + y.bottom,
        left: w.left - E.left + y.left,
        right: E.right - w.right + y.right
    }
      , O = r.modifiersData.offset;
    if (p === br && O) {
        var A = O[s];
        Object.keys(C).forEach(function(I) {
            var D = [gi, pi].indexOf(I) >= 0 ? 1 : -1
              , P = [zt, pi].indexOf(I) >= 0 ? "y" : "x";
            C[I] += A[P] * D
        })
    }
    return C
}
function Lg(r, e) {
    e === void 0 && (e = {});
    var t = e
      , i = t.placement
      , s = t.boundary
      , n = t.rootBoundary
      , a = t.padding
      , o = t.flipVariations
      , l = t.allowedAutoPlacements
      , u = l === void 0 ? ad : l
      , c = fr(i)
      , f = c ? o ? Kl : Kl.filter(function(g) {
        return fr(g) === c
    }) : on
      , p = f.filter(function(g) {
        return u.indexOf(g) >= 0
    });
    p.length === 0 && (p = f);
    var d = p.reduce(function(g, h) {
        return g[h] = nn(r, {
            placement: h,
            boundary: s,
            rootBoundary: n,
            padding: a
        })[Bi(h)],
        g
    }, {});
    return Object.keys(d).sort(function(g, h) {
        return d[g] - d[h]
    })
}
function Dg(r) {
    if (Bi(r) === Qo)
        return [];
    var e = Nn(r);
    return [Jl(r), e, Jl(e)]
}
function Pg(r) {
    var e = r.state
      , t = r.options
      , i = r.name;
    if (!e.modifiersData[i]._skip) {
        for (var s = t.mainAxis, n = s === void 0 ? !0 : s, a = t.altAxis, o = a === void 0 ? !0 : a, l = t.fallbackPlacements, u = t.padding, c = t.boundary, f = t.rootBoundary, p = t.altBoundary, d = t.flipVariations, g = d === void 0 ? !0 : d, h = t.allowedAutoPlacements, _ = e.options.placement, y = Bi(_), v = y === _, b = l || (v || !g ? [Nn(_)] : Dg(_)), m = [_].concat(b).reduce(function(ce, he) {
            return ce.concat(Bi(he) === Qo ? Lg(e, {
                placement: he,
                boundary: c,
                rootBoundary: f,
                padding: u,
                flipVariations: g,
                allowedAutoPlacements: h
            }) : he)
        }, []), w = e.rects.reference, S = e.rects.popper, T = new Map, k = !0, E = m[0], C = 0; C < m.length; C++) {
            var O = m[C]
              , A = Bi(O)
              , I = fr(O) === ur
              , D = [zt, pi].indexOf(A) >= 0
              , P = D ? "width" : "height"
              , B = nn(e, {
                placement: O,
                boundary: c,
                rootBoundary: f,
                altBoundary: p,
                padding: u
            })
              , V = D ? I ? gi : Nt : I ? pi : zt;
            w[P] > S[P] && (V = Nn(V));
            var F = Nn(V)
              , U = [];
            if (n && U.push(B[A] <= 0),
            o && U.push(B[V] <= 0, B[F] <= 0),
            U.every(function(ce) {
                return ce
            })) {
                E = O,
                k = !1;
                break
            }
            T.set(O, U)
        }
        if (k)
            for (var x = g ? 3 : 1, J = function(he) {
                var we = m.find(function(ge) {
                    var Se = T.get(ge);
                    if (Se)
                        return Se.slice(0, he).every(function(ke) {
                            return ke
                        })
                });
                if (we)
                    return E = we,
                    "break"
            }, de = x; de > 0; de--) {
                var Ge = J(de);
                if (Ge === "break")
                    break
            }
        e.placement !== E && (e.modifiersData[i]._skip = !0,
        e.placement = E,
        e.reset = !0)
    }
}
const Fg = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Pg,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};
function tu(r, e, t) {
    return t === void 0 && (t = {
        x: 0,
        y: 0
    }),
    {
        top: r.top - e.height - t.y,
        right: r.right - e.width + t.x,
        bottom: r.bottom - e.height + t.y,
        left: r.left - e.width - t.x
    }
}
function iu(r) {
    return [zt, gi, pi, Nt].some(function(e) {
        return r[e] >= 0
    })
}
function Bg(r) {
    var e = r.state
      , t = r.name
      , i = e.rects.reference
      , s = e.rects.popper
      , n = e.modifiersData.preventOverflow
      , a = nn(e, {
        elementContext: "reference"
    })
      , o = nn(e, {
        altBoundary: !0
    })
      , l = tu(a, i)
      , u = tu(o, s, n)
      , c = iu(l)
      , f = iu(u);
    e.modifiersData[t] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: u,
        isReferenceHidden: c,
        hasPopperEscaped: f
    },
    e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": f
    })
}
const Rg = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Bg
};
function $g(r, e, t) {
    var i = Bi(r)
      , s = [Nt, zt].indexOf(i) >= 0 ? -1 : 1
      , n = typeof t == "function" ? t(Object.assign({}, e, {
        placement: r
    })) : t
      , a = n[0]
      , o = n[1];
    return a = a || 0,
    o = (o || 0) * s,
    [Nt, gi].indexOf(i) >= 0 ? {
        x: o,
        y: a
    } : {
        x: a,
        y: o
    }
}
function Vg(r) {
    var e = r.state
      , t = r.options
      , i = r.name
      , s = t.offset
      , n = s === void 0 ? [0, 0] : s
      , a = ad.reduce(function(c, f) {
        return c[f] = $g(f, e.rects, n),
        c
    }, {})
      , o = a[e.placement]
      , l = o.x
      , u = o.y;
    e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l,
    e.modifiersData.popperOffsets.y += u),
    e.modifiersData[i] = a
}
const zg = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Vg
};
function Ng(r) {
    var e = r.state
      , t = r.name;
    e.modifiersData[t] = pd({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
    })
}
const Hg = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Ng,
    data: {}
};
function Gg(r) {
    return r === "x" ? "y" : "x"
}
function qg(r) {
    var e = r.state
      , t = r.options
      , i = r.name
      , s = t.mainAxis
      , n = s === void 0 ? !0 : s
      , a = t.altAxis
      , o = a === void 0 ? !1 : a
      , l = t.boundary
      , u = t.rootBoundary
      , c = t.altBoundary
      , f = t.padding
      , p = t.tether
      , d = p === void 0 ? !0 : p
      , g = t.tetherOffset
      , h = g === void 0 ? 0 : g
      , _ = nn(e, {
        boundary: l,
        rootBoundary: u,
        padding: f,
        altBoundary: c
    })
      , y = Bi(e.placement)
      , v = fr(e.placement)
      , b = !v
      , m = tl(y)
      , w = Gg(m)
      , S = e.modifiersData.popperOffsets
      , T = e.rects.reference
      , k = e.rects.popper
      , E = typeof h == "function" ? h(Object.assign({}, e.rects, {
        placement: e.placement
    })) : h
      , C = typeof E == "number" ? {
        mainAxis: E,
        altAxis: E
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, E)
      , O = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null
      , A = {
        x: 0,
        y: 0
    };
    if (S) {
        if (n) {
            var I, D = m === "y" ? zt : Nt, P = m === "y" ? pi : gi, B = m === "y" ? "height" : "width", V = S[m], F = V + _[D], U = V - _[P], x = d ? -k[B] / 2 : 0, J = v === ur ? T[B] : k[B], de = v === ur ? -k[B] : -T[B], Ge = e.elements.arrow, ce = d && Ge ? el(Ge) : {
                width: 0,
                height: 0
            }, he = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : cd(), we = he[D], ge = he[P], Se = Hr(0, T[B], ce[B]), ke = b ? T[B] / 2 - x - Se - we - C.mainAxis : J - Se - we - C.mainAxis, rt = b ? -T[B] / 2 + x + Se + ge + C.mainAxis : de + Se + ge + C.mainAxis, De = e.elements.arrow && ln(e.elements.arrow), ut = De ? m === "y" ? De.clientTop || 0 : De.clientLeft || 0 : 0, ie = (I = O == null ? void 0 : O[m]) != null ? I : 0, _e = V + ke - ie - ut, qe = V + rt - ie, Ye = Hr(d ? na(F, _e) : F, V, d ? Ds(U, qe) : U);
            S[m] = Ye,
            A[m] = Ye - V
        }
        if (o) {
            var M, Ke = m === "x" ? zt : Nt, It = m === "x" ? pi : gi, Ze = S[w], pe = w === "y" ? "height" : "width", Lt = Ze + _[Ke], St = Ze - _[It], ni = [zt, Nt].indexOf(y) !== -1, Ae = (M = O == null ? void 0 : O[w]) != null ? M : 0, Gt = ni ? Lt : Ze - T[pe] - k[pe] - Ae + C.altAxis, ye = ni ? Ze + T[pe] + k[pe] - Ae - C.altAxis : St, ct = d && ni ? pg(Gt, Ze, ye) : Hr(d ? Gt : Lt, Ze, d ? ye : St);
            S[w] = ct,
            A[w] = ct - Ze
        }
        e.modifiersData[i] = A
    }
}
const Yg = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: qg,
    requiresIfExists: ["offset"]
};
function Wg(r) {
    return {
        scrollLeft: r.scrollLeft,
        scrollTop: r.scrollTop
    }
}
function jg(r) {
    return r === si(r) || !fi(r) ? il(r) : Wg(r)
}
function Ug(r) {
    var e = r.getBoundingClientRect()
      , t = cr(e.width) / r.offsetWidth || 1
      , i = cr(e.height) / r.offsetHeight || 1;
    return t !== 1 || i !== 1
}
function Xg(r, e, t) {
    t === void 0 && (t = !1);
    var i = fi(e)
      , s = fi(e) && Ug(e)
      , n = hs(e)
      , a = dr(r, s, t)
      , o = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , l = {
        x: 0,
        y: 0
    };
    return (i || !i && !t) && (($i(e) !== "body" || rl(n)) && (o = jg(e)),
    fi(e) ? (l = dr(e, !0),
    l.x += e.clientLeft,
    l.y += e.clientTop) : n && (l.x = sl(n))),
    {
        x: a.left + o.scrollLeft - l.x,
        y: a.top + o.scrollTop - l.y,
        width: a.width,
        height: a.height
    }
}
function Kg(r) {
    var e = new Map
      , t = new Set
      , i = [];
    r.forEach(function(n) {
        e.set(n.name, n)
    });
    function s(n) {
        t.add(n.name);
        var a = [].concat(n.requires || [], n.requiresIfExists || []);
        a.forEach(function(o) {
            if (!t.has(o)) {
                var l = e.get(o);
                l && s(l)
            }
        }),
        i.push(n)
    }
    return r.forEach(function(n) {
        t.has(n.name) || s(n)
    }),
    i
}
function Zg(r) {
    var e = Kg(r);
    return ug.reduce(function(t, i) {
        return t.concat(e.filter(function(s) {
            return s.phase === i
        }))
    }, [])
}
function Qg(r) {
    var e;
    return function() {
        return e || (e = new Promise(function(t) {
            Promise.resolve().then(function() {
                e = void 0,
                t(r())
            })
        }
        )),
        e
    }
}
function Jg(r) {
    var e = r.reduce(function(t, i) {
        var s = t[i.name];
        return t[i.name] = s ? Object.assign({}, s, i, {
            options: Object.assign({}, s.options, i.options),
            data: Object.assign({}, s.data, i.data)
        }) : i,
        t
    }, {});
    return Object.keys(e).map(function(t) {
        return e[t]
    })
}
var su = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function ru() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
        e[t] = arguments[t];
    return !e.some(function(i) {
        return !(i && typeof i.getBoundingClientRect == "function")
    })
}
function em(r) {
    r === void 0 && (r = {});
    var e = r
      , t = e.defaultModifiers
      , i = t === void 0 ? [] : t
      , s = e.defaultOptions
      , n = s === void 0 ? su : s;
    return function(o, l, u) {
        u === void 0 && (u = n);
        var c = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, su, n),
            modifiersData: {},
            elements: {
                reference: o,
                popper: l
            },
            attributes: {},
            styles: {}
        }
          , f = []
          , p = !1
          , d = {
            state: c,
            setOptions: function(y) {
                var v = typeof y == "function" ? y(c.options) : y;
                h(),
                c.options = Object.assign({}, n, c.options, v),
                c.scrollParents = {
                    reference: Vs(o) ? Gr(o) : o.contextElement ? Gr(o.contextElement) : [],
                    popper: Gr(l)
                };
                var b = Zg(Jg([].concat(i, c.options.modifiers)));
                return c.orderedModifiers = b.filter(function(m) {
                    return m.enabled
                }),
                g(),
                d.update()
            },
            forceUpdate: function() {
                if (!p) {
                    var y = c.elements
                      , v = y.reference
                      , b = y.popper;
                    if (ru(v, b)) {
                        c.rects = {
                            reference: Xg(v, ln(b), c.options.strategy === "fixed"),
                            popper: el(b)
                        },
                        c.reset = !1,
                        c.placement = c.options.placement,
                        c.orderedModifiers.forEach(function(C) {
                            return c.modifiersData[C.name] = Object.assign({}, C.data)
                        });
                        for (var m = 0; m < c.orderedModifiers.length; m++) {
                            if (c.reset === !0) {
                                c.reset = !1,
                                m = -1;
                                continue
                            }
                            var w = c.orderedModifiers[m]
                              , S = w.fn
                              , T = w.options
                              , k = T === void 0 ? {} : T
                              , E = w.name;
                            typeof S == "function" && (c = S({
                                state: c,
                                options: k,
                                name: E,
                                instance: d
                            }) || c)
                        }
                    }
                }
            },
            update: Qg(function() {
                return new Promise(function(_) {
                    d.forceUpdate(),
                    _(c)
                }
                )
            }),
            destroy: function() {
                h(),
                p = !0
            }
        };
        if (!ru(o, l))
            return d;
        d.setOptions(u).then(function(_) {
            !p && u.onFirstUpdate && u.onFirstUpdate(_)
        });
        function g() {
            c.orderedModifiers.forEach(function(_) {
                var y = _.name
                  , v = _.options
                  , b = v === void 0 ? {} : v
                  , m = _.effect;
                if (typeof m == "function") {
                    var w = m({
                        state: c,
                        name: y,
                        instance: d,
                        options: b
                    })
                      , S = function() {};
                    f.push(w || S)
                }
            })
        }
        function h() {
            f.forEach(function(_) {
                return _()
            }),
            f = []
        }
        return d
    }
}
var tm = [Cg, Hg, Sg, od, zg, Fg, Yg, _g, Rg]
  , im = em({
    defaultModifiers: tm
})
  , sm = "tippy-box"
  , gd = "tippy-content"
  , rm = "tippy-backdrop"
  , md = "tippy-arrow"
  , vd = "tippy-svg-arrow"
  , Ss = {
    passive: !0,
    capture: !0
}
  , _d = function() {
    return document.body
};
function Na(r, e, t) {
    if (Array.isArray(r)) {
        var i = r[e];
        return i ?? (Array.isArray(t) ? t[e] : t)
    }
    return r
}
function nl(r, e) {
    var t = {}.toString.call(r);
    return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1
}
function yd(r, e) {
    return typeof r == "function" ? r.apply(void 0, e) : r
}
function nu(r, e) {
    if (e === 0)
        return r;
    var t;
    return function(i) {
        clearTimeout(t),
        t = setTimeout(function() {
            r(i)
        }, e)
    }
}
function nm(r) {
    return r.split(/\s+/).filter(Boolean)
}
function js(r) {
    return [].concat(r)
}
function au(r, e) {
    r.indexOf(e) === -1 && r.push(e)
}
function am(r) {
    return r.filter(function(e, t) {
        return r.indexOf(e) === t
    })
}
function om(r) {
    return r.split("-")[0]
}
function aa(r) {
    return [].slice.call(r)
}
function ou(r) {
    return Object.keys(r).reduce(function(e, t) {
        return r[t] !== void 0 && (e[t] = r[t]),
        e
    }, {})
}
function qr() {
    return document.createElement("div")
}
function ma(r) {
    return ["Element", "Fragment"].some(function(e) {
        return nl(r, e)
    })
}
function lm(r) {
    return nl(r, "NodeList")
}
function um(r) {
    return nl(r, "MouseEvent")
}
function cm(r) {
    return !!(r && r._tippy && r._tippy.reference === r)
}
function dm(r) {
    return ma(r) ? [r] : lm(r) ? aa(r) : Array.isArray(r) ? r : aa(document.querySelectorAll(r))
}
function Ha(r, e) {
    r.forEach(function(t) {
        t && (t.style.transitionDuration = e + "ms")
    })
}
function lu(r, e) {
    r.forEach(function(t) {
        t && t.setAttribute("data-state", e)
    })
}
function fm(r) {
    var e, t = js(r), i = t[0];
    return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document
}
function hm(r, e) {
    var t = e.clientX
      , i = e.clientY;
    return r.every(function(s) {
        var n = s.popperRect
          , a = s.popperState
          , o = s.props
          , l = o.interactiveBorder
          , u = om(a.placement)
          , c = a.modifiersData.offset;
        if (!c)
            return !0;
        var f = u === "bottom" ? c.top.y : 0
          , p = u === "top" ? c.bottom.y : 0
          , d = u === "right" ? c.left.x : 0
          , g = u === "left" ? c.right.x : 0
          , h = n.top - i + f > l
          , _ = i - n.bottom - p > l
          , y = n.left - t + d > l
          , v = t - n.right - g > l;
        return h || _ || y || v
    })
}
function Ga(r, e, t) {
    var i = e + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(s) {
        r[i](s, t)
    })
}
function uu(r, e) {
    for (var t = e; t; ) {
        var i;
        if (r.contains(t))
            return !0;
        t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host
    }
    return !1
}
var Ai = {
    isTouch: !1
}
  , cu = 0;
function pm() {
    Ai.isTouch || (Ai.isTouch = !0,
    window.performance && document.addEventListener("mousemove", bd))
}
function bd() {
    var r = performance.now();
    r - cu < 20 && (Ai.isTouch = !1,
    document.removeEventListener("mousemove", bd)),
    cu = r
}
function gm() {
    var r = document.activeElement;
    if (cm(r)) {
        var e = r._tippy;
        r.blur && !e.state.isVisible && r.blur()
    }
}
function mm() {
    document.addEventListener("touchstart", pm, Ss),
    window.addEventListener("blur", gm)
}
var vm = typeof window < "u" && typeof document < "u"
  , _m = vm ? !!window.msCrypto : !1
  , ym = {
    animateFill: !1,
    followCursor: !1,
    inlinePositioning: !1,
    sticky: !1
}
  , bm = {
    allowHTML: !1,
    animation: "fade",
    arrow: !0,
    content: "",
    inertia: !1,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
}
  , Si = Object.assign({
    appendTo: _d,
    aria: {
        content: "auto",
        expanded: "auto"
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: !0,
    ignoreAttributes: !1,
    interactive: !1,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [0, 10],
    onAfterUpdate: function() {},
    onBeforeUpdate: function() {},
    onCreate: function() {},
    onDestroy: function() {},
    onHidden: function() {},
    onHide: function() {},
    onMount: function() {},
    onShow: function() {},
    onShown: function() {},
    onTrigger: function() {},
    onUntrigger: function() {},
    onClickOutside: function() {},
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: !1,
    touch: !0,
    trigger: "mouseenter focus",
    triggerTarget: null
}, ym, bm)
  , wm = Object.keys(Si)
  , Sm = function(e) {
    var t = Object.keys(e);
    t.forEach(function(i) {
        Si[i] = e[i]
    })
};
function wd(r) {
    var e = r.plugins || []
      , t = e.reduce(function(i, s) {
        var n = s.name
          , a = s.defaultValue;
        if (n) {
            var o;
            i[n] = r[n] !== void 0 ? r[n] : (o = Si[n]) != null ? o : a
        }
        return i
    }, {});
    return Object.assign({}, r, t)
}
function xm(r, e) {
    var t = e ? Object.keys(wd(Object.assign({}, Si, {
        plugins: e
    }))) : wm
      , i = t.reduce(function(s, n) {
        var a = (r.getAttribute("data-tippy-" + n) || "").trim();
        if (!a)
            return s;
        if (n === "content")
            s[n] = a;
        else
            try {
                s[n] = JSON.parse(a)
            } catch {
                s[n] = a
            }
        return s
    }, {});
    return i
}
function du(r, e) {
    var t = Object.assign({}, e, {
        content: yd(e.content, [r])
    }, e.ignoreAttributes ? {} : xm(r, e.plugins));
    return t.aria = Object.assign({}, Si.aria, t.aria),
    t.aria = {
        expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
        content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
    },
    t
}
var Cm = function() {
    return "innerHTML"
};
function xo(r, e) {
    r[Cm()] = e
}
function fu(r) {
    var e = qr();
    return r === !0 ? e.className = md : (e.className = vd,
    ma(r) ? e.appendChild(r) : xo(e, r)),
    e
}
function hu(r, e) {
    ma(e.content) ? (xo(r, ""),
    r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? xo(r, e.content) : r.textContent = e.content)
}
function Co(r) {
    var e = r.firstElementChild
      , t = aa(e.children);
    return {
        box: e,
        content: t.find(function(i) {
            return i.classList.contains(gd)
        }),
        arrow: t.find(function(i) {
            return i.classList.contains(md) || i.classList.contains(vd)
        }),
        backdrop: t.find(function(i) {
            return i.classList.contains(rm)
        })
    }
}
function Sd(r) {
    var e = qr()
      , t = qr();
    t.className = sm,
    t.setAttribute("data-state", "hidden"),
    t.setAttribute("tabindex", "-1");
    var i = qr();
    i.className = gd,
    i.setAttribute("data-state", "hidden"),
    hu(i, r.props),
    e.appendChild(t),
    t.appendChild(i),
    s(r.props, r.props);
    function s(n, a) {
        var o = Co(e)
          , l = o.box
          , u = o.content
          , c = o.arrow;
        a.theme ? l.setAttribute("data-theme", a.theme) : l.removeAttribute("data-theme"),
        typeof a.animation == "string" ? l.setAttribute("data-animation", a.animation) : l.removeAttribute("data-animation"),
        a.inertia ? l.setAttribute("data-inertia", "") : l.removeAttribute("data-inertia"),
        l.style.maxWidth = typeof a.maxWidth == "number" ? a.maxWidth + "px" : a.maxWidth,
        a.role ? l.setAttribute("role", a.role) : l.removeAttribute("role"),
        (n.content !== a.content || n.allowHTML !== a.allowHTML) && hu(u, r.props),
        a.arrow ? c ? n.arrow !== a.arrow && (l.removeChild(c),
        l.appendChild(fu(a.arrow))) : l.appendChild(fu(a.arrow)) : c && l.removeChild(c)
    }
    return {
        popper: e,
        onUpdate: s
    }
}
Sd.$$tippy = !0;
var Tm = 1
  , An = []
  , qa = [];
function Em(r, e) {
    var t = du(r, Object.assign({}, Si, wd(ou(e)))), i, s, n, a = !1, o = !1, l = !1, u = !1, c, f, p, d = [], g = nu(_e, t.interactiveDebounce), h, _ = Tm++, y = null, v = am(t.plugins), b = {
        isEnabled: !0,
        isVisible: !1,
        isDestroyed: !1,
        isMounted: !1,
        isShown: !1
    }, m = {
        id: _,
        reference: r,
        popper: qr(),
        popperInstance: y,
        props: t,
        state: b,
        plugins: v,
        clearDelayTimeouts: Gt,
        setProps: ye,
        setContent: ct,
        show: Dt,
        hide: mi,
        hideWithInteractivity: ps,
        enable: ni,
        disable: Ae,
        unmount: Pe,
        destroy: Ns
    };
    if (!t.render)
        return m;
    var w = t.render(m)
      , S = w.popper
      , T = w.onUpdate;
    S.setAttribute("data-tippy-root", ""),
    S.id = "tippy-" + m.id,
    m.popper = S,
    r._tippy = m,
    S._tippy = m;
    var k = v.map(function(L) {
        return L.fn(m)
    })
      , E = r.hasAttribute("aria-expanded");
    return De(),
    x(),
    V(),
    F("onCreate", [m]),
    t.showOnCreate && Lt(),
    S.addEventListener("mouseenter", function() {
        m.props.interactive && m.state.isVisible && m.clearDelayTimeouts()
    }),
    S.addEventListener("mouseleave", function() {
        m.props.interactive && m.props.trigger.indexOf("mouseenter") >= 0 && D().addEventListener("mousemove", g)
    }),
    m;
    function C() {
        var L = m.props.touch;
        return Array.isArray(L) ? L : [L, 0]
    }
    function O() {
        return C()[0] === "hold"
    }
    function A() {
        var L;
        return !!((L = m.props.render) != null && L.$$tippy)
    }
    function I() {
        return h || r
    }
    function D() {
        var L = I().parentNode;
        return L ? fm(L) : document
    }
    function P() {
        return Co(S)
    }
    function B(L) {
        return m.state.isMounted && !m.state.isVisible || Ai.isTouch || c && c.type === "focus" ? 0 : Na(m.props.delay, L ? 0 : 1, Si.delay)
    }
    function V(L) {
        L === void 0 && (L = !1),
        S.style.pointerEvents = m.props.interactive && !L ? "" : "none",
        S.style.zIndex = "" + m.props.zIndex
    }
    function F(L, z, q) {
        if (q === void 0 && (q = !0),
        k.forEach(function(ee) {
            ee[L] && ee[L].apply(ee, z)
        }),
        q) {
            var se;
            (se = m.props)[L].apply(se, z)
        }
    }
    function U() {
        var L = m.props.aria;
        if (L.content) {
            var z = "aria-" + L.content
              , q = S.id
              , se = js(m.props.triggerTarget || r);
            se.forEach(function(ee) {
                var Y = ee.getAttribute(z);
                if (m.state.isVisible)
                    ee.setAttribute(z, Y ? Y + " " + q : q);
                else {
                    var ze = Y && Y.replace(q, "").trim();
                    ze ? ee.setAttribute(z, ze) : ee.removeAttribute(z)
                }
            })
        }
    }
    function x() {
        if (!(E || !m.props.aria.expanded)) {
            var L = js(m.props.triggerTarget || r);
            L.forEach(function(z) {
                m.props.interactive ? z.setAttribute("aria-expanded", m.state.isVisible && z === I() ? "true" : "false") : z.removeAttribute("aria-expanded")
            })
        }
    }
    function J() {
        D().removeEventListener("mousemove", g),
        An = An.filter(function(L) {
            return L !== g
        })
    }
    function de(L) {
        if (!(Ai.isTouch && (l || L.type === "mousedown"))) {
            var z = L.composedPath && L.composedPath()[0] || L.target;
            if (!(m.props.interactive && uu(S, z))) {
                if (js(m.props.triggerTarget || r).some(function(q) {
                    return uu(q, z)
                })) {
                    if (Ai.isTouch || m.state.isVisible && m.props.trigger.indexOf("click") >= 0)
                        return
                } else
                    F("onClickOutside", [m, L]);
                m.props.hideOnClick === !0 && (m.clearDelayTimeouts(),
                m.hide(),
                o = !0,
                setTimeout(function() {
                    o = !1
                }),
                m.state.isMounted || we())
            }
        }
    }
    function Ge() {
        l = !0
    }
    function ce() {
        l = !1
    }
    function he() {
        var L = D();
        L.addEventListener("mousedown", de, !0),
        L.addEventListener("touchend", de, Ss),
        L.addEventListener("touchstart", ce, Ss),
        L.addEventListener("touchmove", Ge, Ss)
    }
    function we() {
        var L = D();
        L.removeEventListener("mousedown", de, !0),
        L.removeEventListener("touchend", de, Ss),
        L.removeEventListener("touchstart", ce, Ss),
        L.removeEventListener("touchmove", Ge, Ss)
    }
    function ge(L, z) {
        ke(L, function() {
            !m.state.isVisible && S.parentNode && S.parentNode.contains(S) && z()
        })
    }
    function Se(L, z) {
        ke(L, z)
    }
    function ke(L, z) {
        var q = P().box;
        function se(ee) {
            ee.target === q && (Ga(q, "remove", se),
            z())
        }
        if (L === 0)
            return z();
        Ga(q, "remove", f),
        Ga(q, "add", se),
        f = se
    }
    function rt(L, z, q) {
        q === void 0 && (q = !1);
        var se = js(m.props.triggerTarget || r);
        se.forEach(function(ee) {
            ee.addEventListener(L, z, q),
            d.push({
                node: ee,
                eventType: L,
                handler: z,
                options: q
            })
        })
    }
    function De() {
        O() && (rt("touchstart", ie, {
            passive: !0
        }),
        rt("touchend", qe, {
            passive: !0
        })),
        nm(m.props.trigger).forEach(function(L) {
            if (L !== "manual")
                switch (rt(L, ie),
                L) {
                case "mouseenter":
                    rt("mouseleave", qe);
                    break;
                case "focus":
                    rt(_m ? "focusout" : "blur", Ye);
                    break;
                case "focusin":
                    rt("focusout", Ye);
                    break
                }
        })
    }
    function ut() {
        d.forEach(function(L) {
            var z = L.node
              , q = L.eventType
              , se = L.handler
              , ee = L.options;
            z.removeEventListener(q, se, ee)
        }),
        d = []
    }
    function ie(L) {
        var z, q = !1;
        if (!(!m.state.isEnabled || M(L) || o)) {
            var se = ((z = c) == null ? void 0 : z.type) === "focus";
            c = L,
            h = L.currentTarget,
            x(),
            !m.state.isVisible && um(L) && An.forEach(function(ee) {
                return ee(L)
            }),
            L.type === "click" && (m.props.trigger.indexOf("mouseenter") < 0 || a) && m.props.hideOnClick !== !1 && m.state.isVisible ? q = !0 : Lt(L),
            L.type === "click" && (a = !q),
            q && !se && St(L)
        }
    }
    function _e(L) {
        var z = L.target
          , q = I().contains(z) || S.contains(z);
        if (!(L.type === "mousemove" && q)) {
            var se = pe().concat(S).map(function(ee) {
                var Y, ze = ee._tippy, Qe = (Y = ze.popperInstance) == null ? void 0 : Y.state;
                return Qe ? {
                    popperRect: ee.getBoundingClientRect(),
                    popperState: Qe,
                    props: t
                } : null
            }).filter(Boolean);
            hm(se, L) && (J(),
            St(L))
        }
    }
    function qe(L) {
        var z = M(L) || m.props.trigger.indexOf("click") >= 0 && a;
        if (!z) {
            if (m.props.interactive) {
                m.hideWithInteractivity(L);
                return
            }
            St(L)
        }
    }
    function Ye(L) {
        m.props.trigger.indexOf("focusin") < 0 && L.target !== I() || m.props.interactive && L.relatedTarget && S.contains(L.relatedTarget) || St(L)
    }
    function M(L) {
        return Ai.isTouch ? O() !== L.type.indexOf("touch") >= 0 : !1
    }
    function Ke() {
        It();
        var L = m.props
          , z = L.popperOptions
          , q = L.placement
          , se = L.offset
          , ee = L.getReferenceClientRect
          , Y = L.moveTransition
          , ze = A() ? Co(S).arrow : null
          , Qe = ee ? {
            getBoundingClientRect: ee,
            contextElement: ee.contextElement || I()
        } : r
          , Pt = {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function(_i) {
                var dt = _i.state;
                if (A()) {
                    var gs = P()
                      , X = gs.box;
                    ["placement", "reference-hidden", "escaped"].forEach(function(G) {
                        G === "placement" ? X.setAttribute("data-placement", dt.placement) : dt.attributes.popper["data-popper-" + G] ? X.setAttribute("data-" + G, "") : X.removeAttribute("data-" + G)
                    }),
                    dt.attributes.popper = {}
                }
            }
        }
          , We = [{
            name: "offset",
            options: {
                offset: se
            }
        }, {
            name: "preventOverflow",
            options: {
                padding: {
                    top: 2,
                    bottom: 2,
                    left: 5,
                    right: 5
                }
            }
        }, {
            name: "flip",
            options: {
                padding: 5
            }
        }, {
            name: "computeStyles",
            options: {
                adaptive: !Y
            }
        }, Pt];
        A() && ze && We.push({
            name: "arrow",
            options: {
                element: ze,
                padding: 3
            }
        }),
        We.push.apply(We, (z == null ? void 0 : z.modifiers) || []),
        m.popperInstance = im(Qe, S, Object.assign({}, z, {
            placement: q,
            onFirstUpdate: p,
            modifiers: We
        }))
    }
    function It() {
        m.popperInstance && (m.popperInstance.destroy(),
        m.popperInstance = null)
    }
    function Ze() {
        var L = m.props.appendTo, z, q = I();
        m.props.interactive && L === _d || L === "parent" ? z = q.parentNode : z = yd(L, [q]),
        z.contains(S) || z.appendChild(S),
        m.state.isMounted = !0,
        Ke()
    }
    function pe() {
        return aa(S.querySelectorAll("[data-tippy-root]"))
    }
    function Lt(L) {
        m.clearDelayTimeouts(),
        L && F("onTrigger", [m, L]),
        he();
        var z = B(!0)
          , q = C()
          , se = q[0]
          , ee = q[1];
        Ai.isTouch && se === "hold" && ee && (z = ee),
        z ? i = setTimeout(function() {
            m.show()
        }, z) : m.show()
    }
    function St(L) {
        if (m.clearDelayTimeouts(),
        F("onUntrigger", [m, L]),
        !m.state.isVisible) {
            we();
            return
        }
        if (!(m.props.trigger.indexOf("mouseenter") >= 0 && m.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(L.type) >= 0 && a)) {
            var z = B(!1);
            z ? s = setTimeout(function() {
                m.state.isVisible && m.hide()
            }, z) : n = requestAnimationFrame(function() {
                m.hide()
            })
        }
    }
    function ni() {
        m.state.isEnabled = !0
    }
    function Ae() {
        m.hide(),
        m.state.isEnabled = !1
    }
    function Gt() {
        clearTimeout(i),
        clearTimeout(s),
        cancelAnimationFrame(n)
    }
    function ye(L) {
        if (!m.state.isDestroyed) {
            F("onBeforeUpdate", [m, L]),
            ut();
            var z = m.props
              , q = du(r, Object.assign({}, z, ou(L), {
                ignoreAttributes: !0
            }));
            m.props = q,
            De(),
            z.interactiveDebounce !== q.interactiveDebounce && (J(),
            g = nu(_e, q.interactiveDebounce)),
            z.triggerTarget && !q.triggerTarget ? js(z.triggerTarget).forEach(function(se) {
                se.removeAttribute("aria-expanded")
            }) : q.triggerTarget && r.removeAttribute("aria-expanded"),
            x(),
            V(),
            T && T(z, q),
            m.popperInstance && (Ke(),
            pe().forEach(function(se) {
                requestAnimationFrame(se._tippy.popperInstance.forceUpdate)
            })),
            F("onAfterUpdate", [m, L])
        }
    }
    function ct(L) {
        m.setProps({
            content: L
        })
    }
    function Dt() {
        var L = m.state.isVisible
          , z = m.state.isDestroyed
          , q = !m.state.isEnabled
          , se = Ai.isTouch && !m.props.touch
          , ee = Na(m.props.duration, 0, Si.duration);
        if (!(L || z || q || se) && !I().hasAttribute("disabled") && (F("onShow", [m], !1),
        m.props.onShow(m) !== !1)) {
            if (m.state.isVisible = !0,
            A() && (S.style.visibility = "visible"),
            V(),
            he(),
            m.state.isMounted || (S.style.transition = "none"),
            A()) {
                var Y = P()
                  , ze = Y.box
                  , Qe = Y.content;
                Ha([ze, Qe], 0)
            }
            p = function() {
                var We;
                if (!(!m.state.isVisible || u)) {
                    if (u = !0,
                    S.offsetHeight,
                    S.style.transition = m.props.moveTransition,
                    A() && m.props.animation) {
                        var vi = P()
                          , _i = vi.box
                          , dt = vi.content;
                        Ha([_i, dt], ee),
                        lu([_i, dt], "visible")
                    }
                    U(),
                    x(),
                    au(qa, m),
                    (We = m.popperInstance) == null || We.forceUpdate(),
                    F("onMount", [m]),
                    m.props.animation && A() && Se(ee, function() {
                        m.state.isShown = !0,
                        F("onShown", [m])
                    })
                }
            }
            ,
            Ze()
        }
    }
    function mi() {
        var L = !m.state.isVisible
          , z = m.state.isDestroyed
          , q = !m.state.isEnabled
          , se = Na(m.props.duration, 1, Si.duration);
        if (!(L || z || q) && (F("onHide", [m], !1),
        m.props.onHide(m) !== !1)) {
            if (m.state.isVisible = !1,
            m.state.isShown = !1,
            u = !1,
            a = !1,
            A() && (S.style.visibility = "hidden"),
            J(),
            we(),
            V(!0),
            A()) {
                var ee = P()
                  , Y = ee.box
                  , ze = ee.content;
                m.props.animation && (Ha([Y, ze], se),
                lu([Y, ze], "hidden"))
            }
            U(),
            x(),
            m.props.animation ? A() && ge(se, m.unmount) : m.unmount()
        }
    }
    function ps(L) {
        D().addEventListener("mousemove", g),
        au(An, g),
        g(L)
    }
    function Pe() {
        m.state.isVisible && m.hide(),
        m.state.isMounted && (It(),
        pe().forEach(function(L) {
            L._tippy.unmount()
        }),
        S.parentNode && S.parentNode.removeChild(S),
        qa = qa.filter(function(L) {
            return L !== m
        }),
        m.state.isMounted = !1,
        F("onHidden", [m]))
    }
    function Ns() {
        m.state.isDestroyed || (m.clearDelayTimeouts(),
        m.unmount(),
        ut(),
        delete r._tippy,
        m.state.isDestroyed = !0,
        F("onDestroy", [m]))
    }
}
function un(r, e) {
    e === void 0 && (e = {});
    var t = Si.plugins.concat(e.plugins || []);
    mm();
    var i = Object.assign({}, e, {
        plugins: t
    })
      , s = dm(r)
      , n = s.reduce(function(a, o) {
        var l = o && Em(o, i);
        return l && a.push(l),
        a
    }, []);
    return ma(r) ? n[0] : n
}
un.defaultProps = Si;
un.setDefaultProps = Sm;
un.currentInput = Ai;
Object.assign({}, od, {
    effect: function(e) {
        var t = e.state
          , i = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
        Object.assign(t.elements.popper.style, i.popper),
        t.styles = i,
        t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow)
    }
});
un.setDefaultProps({
    render: Sd
});
un(document.querySelectorAll("[data-tippy]"), {
    content(r) {
        return r.querySelector("[data-tippy-template]").innerHTML
    },
    allowHTML: !0
});
document.addEventListener("DOMContentLoaded", () => {
    const r = document.querySelectorAll(".otp__items input");
    r.length > 0 && r.forEach( (e, t) => {
        e.addEventListener("blur", () => {
            e.value.length > 0 ? e.classList.add("filled") : e.classList.remove("filled")
        }
        ),
        e.addEventListener("input", function(i) {
            const s = i.target
              , n = s.value;
            if (isNaN(n)) {
                s.value = "";
                return
            }
            if (n !== "") {
                const a = r[t + 1];
                a && a.focus()
            }
        }),
        e.addEventListener("keyup", function(i) {
            const s = i.target
              , n = i.key.toLowerCase();
            if (n === "backspace" || n === "delete") {
                s.value = "";
                const a = r[t - 1];
                a && a.focus();
                return
            }
        })
    }
    )
}
);
if (typeof window < "u") {
    let r = function() {
        var e = document.body
          , t = document.getElementById("__svg__icons__dom__");
        t || (t = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        t.style.position = "absolute",
        t.style.width = "0",
        t.style.height = "0",
        t.id = "__svg__icons__dom__",
        t.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
        t.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")),
        t.innerHTML = '<symbol  viewBox="0 0 24 24" id="icon-f-email"><path opacity=".4" d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" /><path d="M12 12.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z" /></symbol><symbol  viewBox="0 0 18 18" id="icon-f-error"><path opacity=".4" d="m16.32 11.94-4.8-8.64C10.875 2.138 9.982 1.5 9 1.5c-.983 0-1.875.638-2.52 1.8l-4.8 8.64c-.608 1.103-.675 2.16-.188 2.992.488.833 1.448 1.29 2.708 1.29h9.6c1.26 0 2.22-.457 2.707-1.29.488-.832.42-1.897-.187-2.992Z" /><path d="M9 11.063a.567.567 0 0 1-.563-.563V6.75c0-.308.256-.563.563-.563.307 0 .563.255.563.563v3.75a.567.567 0 0 1-.563.563ZM9 13.5c-.045 0-.098-.008-.15-.015a.477.477 0 0 1-.135-.045.568.568 0 0 1-.135-.067l-.113-.09a.789.789 0 0 1-.217-.533c0-.195.082-.39.217-.533l.113-.09a.568.568 0 0 1 .135-.067.477.477 0 0 1 .135-.045.642.642 0 0 1 .293 0 .452.452 0 0 1 .142.045c.045.015.09.037.135.067l.113.09a.789.789 0 0 1 .217.533c0 .195-.082.39-.217.533l-.113.09a.568.568 0 0 1-.135.067.452.452 0 0 1-.143.045A.919.919 0 0 1 9 13.5Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-f-other"><path d="M7.24 2h-1.9C3.15 2 2 3.15 2 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C10.57 3.15 9.42 2 7.24 2Z" /><path opacity=".4" d="M18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2Z" /><path d="M18.67 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33Z" /><path opacity=".4" d="M7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-f-pass"><path opacity=".4" d="M19.79 4.22c-2.96-2.95-7.76-2.95-10.7 0-2.07 2.05-2.69 5-1.89 7.6l-4.7 4.7c-.33.34-.56 1.01-.49 1.49l.3 2.18c.11.72.78 1.4 1.5 1.5l2.18.3c.48.07 1.15-.15 1.49-.5l.82-.82c.2-.19.2-.51 0-.71l-1.94-1.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.95 1.95c.19.19.51.19.7 0l2.12-2.11c2.59.81 5.54.18 7.6-1.87 2.95-2.95 2.95-7.76 0-10.71ZM14.5 12a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z" /><path d="M14.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-f-user"><path opacity=".4" d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2Z" fill="#fff" /><path d="M17.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-f-wallet"><path opacity=".4" d="M18.04 13.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H6.26c-2.07 0-3.76-1.69-3.76-3.76v-6.73c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6Z" fill="#fff" /><path d="M14.85 3.95v3.8H6.26c-2.07 0-3.76 1.69-3.76 3.76V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3c1.24-.46 2.57.45 2.57 1.78ZM22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02ZM14 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="#fff" /></symbol><symbol  fill="none" viewBox="0 0 24 24" id="icon-forum"><path fill="#fff" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z" opacity=".4" /><path fill="#fff" d="M17.678 10.757c.333 0 .608-.288.608-.637 0-.35-.275-.638-.608-.638h-3.006l.325-3.057a.638.638 0 0 0-.54-.707c-.334-.035-.634.21-.675.567l-.342 3.197h-2.356l.325-3.057a.638.638 0 0 0-.541-.707c-.333-.035-.633.21-.675.567L9.86 9.482H6.922c-.333 0-.608.288-.608.638 0 .349.275.637.608.637h2.805l-.266 2.49H6.322c-.333 0-.608.287-.608.637 0 .35.275.637.608.637h3.006l-.325 3.057c-.033.35.2.664.541.708h.067c.308 0 .566-.245.607-.568l.342-3.197h2.364l-.324 3.057c-.034.35.2.664.54.708h.067c.308 0 .566-.245.608-.568l.341-3.197h2.94c.332 0 .607-.288.607-.637 0-.35-.275-.638-.608-.638H14.29l.266-2.489h3.122Zm-4.629 2.48h-2.364l.266-2.489h2.364l-.266 2.49Z" /></symbol><symbol  fill="none" viewBox="0 0 24 24" id="icon-home"><path fill="#fff" d="m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78Z" opacity=".4" /><path fill="#fff" d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z" /></symbol><symbol fill="none"  viewBox="0 0 18 18" id="icon-pass-close"><path opacity=".4" d="M15.938 6.863a10.928 10.928 0 0 0-1.223-1.583l-2.827 2.828c.09.277.142.577.142.892 0 1.68-1.357 3.03-3.03 3.03a2.89 2.89 0 0 1-.892-.143l-2.595 2.595c1.095.616 2.28.938 3.487.938 1.335 0 2.633-.39 3.818-1.117 1.185-.736 2.25-1.808 3.12-3.173.75-1.17.75-3.09 0-4.267Z" fill="#fff" /><path d="m10.515 7.485-3.03 3.03c-.382-.39-.63-.93-.63-1.515A2.15 2.15 0 0 1 9 6.855c.585 0 1.126.247 1.515.63Z" fill="#fff" /><path opacity=".4" d="m13.688 4.313-2.543 2.542A2.99 2.99 0 0 0 9 5.97 3.026 3.026 0 0 0 5.97 9c0 .84.338 1.598.885 2.145L4.32 13.688h-.008a10.712 10.712 0 0 1-2.25-2.558c-.75-1.177-.75-3.09 0-4.267.87-1.365 1.936-2.438 3.12-3.173C6.367 2.97 7.665 2.573 9 2.573c1.672 0 3.293.615 4.688 1.74Z" fill="#fff" /><path d="M11.145 9A2.15 2.15 0 0 1 9 11.145c-.045 0-.083 0-.128-.015l2.258-2.257c.015.045.015.082.015.127ZM16.328 1.672a.58.58 0 0 0-.818 0L1.673 15.517a.58.58 0 0 0 0 .818.569.569 0 0 0 .81-.008L16.328 2.482a.558.558 0 0 0 0-.81Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 18 18" id="icon-pass-open"><path opacity=".4" d="M15.938 6.863C14.204 4.14 11.67 2.573 9 2.573c-1.335 0-2.633.39-3.817 1.117-1.185.735-2.25 1.808-3.12 3.173-.75 1.177-.75 3.09 0 4.267C3.795 13.86 6.33 15.42 9 15.42c1.335 0 2.633-.39 3.818-1.117 1.184-.736 2.25-1.808 3.12-3.173.75-1.17.75-3.09 0-4.267ZM9 12.03A3.026 3.026 0 0 1 5.97 9c0-1.672 1.35-3.03 3.03-3.03 1.68 0 3.03 1.358 3.03 3.03 0 1.672-1.35 3.03-3.03 3.03Z" fill="#fff" /><path d="M9 6.855a2.141 2.141 0 0 0 0 4.283c1.177 0 2.145-.96 2.145-2.138A2.154 2.154 0 0 0 9 6.855Z" fill="#fff" /></symbol><symbol  fill="none" viewBox="0 0 24 24" id="icon-shop"><path fill="#fff" d="M16.19 8.86c-.39 0-.7-.31-.7-.7V6.88a3.482 3.482 0 0 0-3.83-3.47c-1.68.16-3.15 1.87-3.15 3.65v.9c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-.9c0-2.5 2.02-4.81 4.41-5.04 1.39-.13 2.73.31 3.76 1.25 1.02.92 1.6 2.24 1.6 3.61v1.28c0 .39-.31.7-.69.7Z" opacity=".4" /><path fill="#fff" d="M19.96 8.96c-.84-.93-2.22-1.38-4.24-1.38H8.28c-2.02 0-3.4.45-4.24 1.38-.97 1.08-.94 2.52-.83 3.52l.7 5.57C4.12 20 4.91 22 9.21 22h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.13-2.43-.83-3.51ZM8.42 13.15h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1Zm7 0h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1Z" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-ukraine"><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7H3V5Z" fill="#2A66FF" /><path d="M3 12h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z" fill="#FFCA41" /></symbol>',
        e.insertBefore(t, e.lastChild)
    };
    var Fm = r;
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", r) : r()
}
/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Qi = function() {
    return Qi = Object.assign || function(e) {
        for (var t, i = 1, s = arguments.length; i < s; i++) {
            t = arguments[i];
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }
    ,
    Qi.apply(this, arguments)
};
function km() {
    for (var r = 0, e = 0, t = arguments.length; e < t; e++)
        r += arguments[e].length;
    for (var i = Array(r), s = 0, e = 0; e < t; e++)
        for (var n = arguments[e], a = 0, o = n.length; a < o; a++,
        s++)
            i[s] = n[a];
    return i
}
var xe = {
    afterAppendSlide: "lgAfterAppendSlide",
    init: "lgInit",
    hasVideo: "lgHasVideo",
    containerResize: "lgContainerResize",
    updateSlides: "lgUpdateSlides",
    afterAppendSubHtml: "lgAfterAppendSubHtml",
    beforeOpen: "lgBeforeOpen",
    afterOpen: "lgAfterOpen",
    slideItemLoad: "lgSlideItemLoad",
    beforeSlide: "lgBeforeSlide",
    afterSlide: "lgAfterSlide",
    posterClick: "lgPosterClick",
    dragStart: "lgDragStart",
    dragMove: "lgDragMove",
    dragEnd: "lgDragEnd",
    beforeNextSlide: "lgBeforeNextSlide",
    beforePrevSlide: "lgBeforePrevSlide",
    beforeClose: "lgBeforeClose",
    afterClose: "lgAfterClose",
    rotateLeft: "lgRotateLeft",
    rotateRight: "lgRotateRight",
    flipHorizontal: "lgFlipHorizontal",
    flipVertical: "lgFlipVertical",
    autoplay: "lgAutoplay",
    autoplayStart: "lgAutoplayStart",
    autoplayStop: "lgAutoplayStop"
}
  , Am = {
    mode: "lg-slide",
    easing: "ease",
    speed: 400,
    licenseKey: "0000-0000-000-0000",
    height: "100%",
    width: "100%",
    addClass: "",
    startClass: "lg-start-zoom",
    backdropDuration: 300,
    container: "",
    startAnimationDuration: 400,
    zoomFromOrigin: !0,
    hideBarsDelay: 0,
    showBarsAfter: 1e4,
    slideDelay: 0,
    supportLegacyBrowser: !0,
    allowMediaOverlap: !1,
    videoMaxSize: "1280-720",
    loadYouTubePoster: !0,
    defaultCaptionHeight: 0,
    ariaLabelledby: "",
    ariaDescribedby: "",
    resetScrollPosition: !0,
    hideScrollbar: !1,
    closable: !0,
    swipeToClose: !0,
    closeOnTap: !0,
    showCloseIcon: !0,
    showMaximizeIcon: !1,
    loop: !0,
    escKey: !0,
    keyPress: !0,
    trapFocus: !0,
    controls: !0,
    slideEndAnimation: !0,
    hideControlOnEnd: !1,
    mousewheel: !1,
    getCaptionFromTitleOrAlt: !0,
    appendSubHtmlTo: ".lg-sub-html",
    subHtmlSelectorRelative: !1,
    preload: 2,
    numberOfSlideItemsInDom: 10,
    selector: "",
    selectWithin: "",
    nextHtml: "",
    prevHtml: "",
    index: 0,
    iframeWidth: "100%",
    iframeHeight: "100%",
    iframeMaxWidth: "100%",
    iframeMaxHeight: "100%",
    download: !0,
    counter: !0,
    appendCounterTo: ".lg-toolbar",
    swipeThreshold: 50,
    enableSwipe: !0,
    enableDrag: !0,
    dynamic: !1,
    dynamicEl: [],
    extraProps: [],
    exThumbImage: "",
    isMobile: void 0,
    mobileSettings: {
        controls: !1,
        showCloseIcon: !1,
        download: !1
    },
    plugins: [],
    strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
        mediaLoadingFailed: "Oops... Failed to load content..."
    }
};
function Om() {
    (function() {
        if (typeof window.CustomEvent == "function")
            return !1;
        function r(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: null
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            i
        }
        window.CustomEvent = r
    }
    )(),
    function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector)
    }()
}
var xd = function() {
    function r(e) {
        return this.cssVenderPrefixes = ["TransitionDuration", "TransitionTimingFunction", "Transform", "Transition"],
        this.selector = this._getSelector(e),
        this.firstElement = this._getFirstEl(),
        this
    }
    return r.generateUUID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = Math.random() * 16 | 0
              , i = e == "x" ? t : t & 3 | 8;
            return i.toString(16)
        })
    }
    ,
    r.prototype._getSelector = function(e, t) {
        if (t === void 0 && (t = document),
        typeof e != "string")
            return e;
        t = t || document;
        var i = e.substring(0, 1);
        return i === "#" ? t.querySelector(e) : t.querySelectorAll(e)
    }
    ,
    r.prototype._each = function(e) {
        return this.selector ? (this.selector.length !== void 0 ? [].forEach.call(this.selector, e) : e(this.selector, 0),
        this) : this
    }
    ,
    r.prototype._setCssVendorPrefix = function(e, t, i) {
        var s = t.replace(/-([a-z])/gi, function(n, a) {
            return a.toUpperCase()
        });
        this.cssVenderPrefixes.indexOf(s) !== -1 ? (e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i,
        e.style["webkit" + s] = i,
        e.style["moz" + s] = i,
        e.style["ms" + s] = i,
        e.style["o" + s] = i) : e.style[s] = i
    }
    ,
    r.prototype._getFirstEl = function() {
        return this.selector && this.selector.length !== void 0 ? this.selector[0] : this.selector
    }
    ,
    r.prototype.isEventMatched = function(e, t) {
        var i = t.split(".");
        return e.split(".").filter(function(s) {
            return s
        }).every(function(s) {
            return i.indexOf(s) !== -1
        })
    }
    ,
    r.prototype.attr = function(e, t) {
        return t === void 0 ? this.firstElement ? this.firstElement.getAttribute(e) : "" : (this._each(function(i) {
            i.setAttribute(e, t)
        }),
        this)
    }
    ,
    r.prototype.find = function(e) {
        return j(this._getSelector(e, this.selector))
    }
    ,
    r.prototype.first = function() {
        return this.selector && this.selector.length !== void 0 ? j(this.selector[0]) : j(this.selector)
    }
    ,
    r.prototype.eq = function(e) {
        return j(this.selector[e])
    }
    ,
    r.prototype.parent = function() {
        return j(this.selector.parentElement)
    }
    ,
    r.prototype.get = function() {
        return this._getFirstEl()
    }
    ,
    r.prototype.removeAttr = function(e) {
        var t = e.split(" ");
        return this._each(function(i) {
            t.forEach(function(s) {
                return i.removeAttribute(s)
            })
        }),
        this
    }
    ,
    r.prototype.wrap = function(e) {
        if (!this.firstElement)
            return this;
        var t = document.createElement("div");
        return t.className = e,
        this.firstElement.parentNode.insertBefore(t, this.firstElement),
        this.firstElement.parentNode.removeChild(this.firstElement),
        t.appendChild(this.firstElement),
        this
    }
    ,
    r.prototype.addClass = function(e) {
        return e === void 0 && (e = ""),
        this._each(function(t) {
            e.split(" ").forEach(function(i) {
                i && t.classList.add(i)
            })
        }),
        this
    }
    ,
    r.prototype.removeClass = function(e) {
        return this._each(function(t) {
            e.split(" ").forEach(function(i) {
                i && t.classList.remove(i)
            })
        }),
        this
    }
    ,
    r.prototype.hasClass = function(e) {
        return this.firstElement ? this.firstElement.classList.contains(e) : !1
    }
    ,
    r.prototype.hasAttribute = function(e) {
        return this.firstElement ? this.firstElement.hasAttribute(e) : !1
    }
    ,
    r.prototype.toggleClass = function(e) {
        return this.firstElement ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e),
        this) : this
    }
    ,
    r.prototype.css = function(e, t) {
        var i = this;
        return this._each(function(s) {
            i._setCssVendorPrefix(s, e, t)
        }),
        this
    }
    ,
    r.prototype.on = function(e, t) {
        var i = this;
        return this.selector ? (e.split(" ").forEach(function(s) {
            Array.isArray(r.eventListeners[s]) || (r.eventListeners[s] = []),
            r.eventListeners[s].push(t),
            i.selector.addEventListener(s.split(".")[0], t)
        }),
        this) : this
    }
    ,
    r.prototype.once = function(e, t) {
        var i = this;
        return this.on(e, function() {
            i.off(e),
            t(e)
        }),
        this
    }
    ,
    r.prototype.off = function(e) {
        var t = this;
        return this.selector ? (Object.keys(r.eventListeners).forEach(function(i) {
            t.isEventMatched(e, i) && (r.eventListeners[i].forEach(function(s) {
                t.selector.removeEventListener(i.split(".")[0], s)
            }),
            r.eventListeners[i] = [])
        }),
        this) : this
    }
    ,
    r.prototype.trigger = function(e, t) {
        if (!this.firstElement)
            return this;
        var i = new CustomEvent(e.split(".")[0],{
            detail: t || null
        });
        return this.firstElement.dispatchEvent(i),
        this
    }
    ,
    r.prototype.load = function(e) {
        var t = this;
        return fetch(e).then(function(i) {
            return i.text()
        }).then(function(i) {
            t.selector.innerHTML = i
        }),
        this
    }
    ,
    r.prototype.html = function(e) {
        return e === void 0 ? this.firstElement ? this.firstElement.innerHTML : "" : (this._each(function(t) {
            t.innerHTML = e
        }),
        this)
    }
    ,
    r.prototype.append = function(e) {
        return this._each(function(t) {
            typeof e == "string" ? t.insertAdjacentHTML("beforeend", e) : t.appendChild(e)
        }),
        this
    }
    ,
    r.prototype.prepend = function(e) {
        return this._each(function(t) {
            t.insertAdjacentHTML("afterbegin", e)
        }),
        this
    }
    ,
    r.prototype.remove = function() {
        return this._each(function(e) {
            e.parentNode.removeChild(e)
        }),
        this
    }
    ,
    r.prototype.empty = function() {
        return this._each(function(e) {
            e.innerHTML = ""
        }),
        this
    }
    ,
    r.prototype.scrollTop = function(e) {
        return e !== void 0 ? (document.body.scrollTop = e,
        document.documentElement.scrollTop = e,
        this) : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }
    ,
    r.prototype.scrollLeft = function(e) {
        return e !== void 0 ? (document.body.scrollLeft = e,
        document.documentElement.scrollLeft = e,
        this) : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
    ,
    r.prototype.offset = function() {
        if (!this.firstElement)
            return {
                left: 0,
                top: 0
            };
        var e = this.firstElement.getBoundingClientRect()
          , t = j("body").style().marginLeft;
        return {
            left: e.left - parseFloat(t) + this.scrollLeft(),
            top: e.top + this.scrollTop()
        }
    }
    ,
    r.prototype.style = function() {
        return this.firstElement ? this.firstElement.currentStyle || window.getComputedStyle(this.firstElement) : {}
    }
    ,
    r.prototype.width = function() {
        var e = this.style();
        return this.firstElement.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)
    }
    ,
    r.prototype.height = function() {
        var e = this.style();
        return this.firstElement.clientHeight - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom)
    }
    ,
    r.eventListeners = {},
    r
}();
function j(r) {
    return Om(),
    new xd(r)
}
var Mm = ["src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl"];
function Im(r) {
    return r === "href" ? "src" : (r = r.replace("data-", ""),
    r = r.charAt(0).toLowerCase() + r.slice(1),
    r = r.replace(/-([a-z])/g, function(e) {
        return e[1].toUpperCase()
    }),
    r)
}
var ot = {
    getSize: function(r, e, t, i) {
        t === void 0 && (t = 0);
        var s = j(r)
          , n = s.attr("data-lg-size") || i;
        if (n) {
            var a = n.split(",");
            if (a[1])
                for (var o = window.innerWidth, l = 0; l < a.length; l++) {
                    var u = a[l]
                      , c = parseInt(u.split("-")[2], 10);
                    if (c > o) {
                        n = u;
                        break
                    }
                    l === a.length - 1 && (n = u)
                }
            var f = n.split("-")
              , p = parseInt(f[0], 10)
              , d = parseInt(f[1], 10)
              , g = e.width()
              , h = e.height() - t
              , _ = Math.min(g, p)
              , y = Math.min(h, d)
              , v = Math.min(_ / p, y / d);
            return {
                width: p * v,
                height: d * v
            }
        }
    },
    getTransform: function(r, e, t, i, s) {
        if (s) {
            var n = j(r).find("img").first();
            if (n.get()) {
                var a = e.get().getBoundingClientRect()
                  , o = a.width
                  , l = e.height() - (t + i)
                  , u = n.width()
                  , c = n.height()
                  , f = n.style()
                  , p = (o - u) / 2 - n.offset().left + (parseFloat(f.paddingLeft) || 0) + (parseFloat(f.borderLeft) || 0) + j(window).scrollLeft() + a.left
                  , d = (l - c) / 2 - n.offset().top + (parseFloat(f.paddingTop) || 0) + (parseFloat(f.borderTop) || 0) + j(window).scrollTop() + t
                  , g = u / s.width
                  , h = c / s.height
                  , _ = "translate3d(" + (p *= -1) + "px, " + (d *= -1) + "px, 0) scale3d(" + g + ", " + h + ", 1)";
                return _
            }
        }
    },
    getIframeMarkup: function(r, e, t, i, s, n) {
        var a = n ? 'title="' + n + '"' : "";
        return '<div class="lg-video-cont lg-has-iframe" style="width:' + r + "; max-width:" + t + "; height: " + e + "; max-height:" + i + `">
                    <iframe class="lg-object" frameborder="0" ` + a + ' src="' + s + `"  allowfullscreen="true"></iframe>
                </div>`
    },
    getImgMarkup: function(r, e, t, i, s, n) {
        var a = i ? 'srcset="' + i + '"' : ""
          , o = s ? 'sizes="' + s + '"' : ""
          , l = "<img " + t + " " + a + "  " + o + ' class="lg-object lg-image" data-index="' + r + '" src="' + e + '" />'
          , u = "";
        if (n) {
            var c = typeof n == "string" ? JSON.parse(n) : n;
            u = c.map(function(f) {
                var p = "";
                return Object.keys(f).forEach(function(d) {
                    p += " " + d + '="' + f[d] + '"'
                }),
                "<source " + p + "></source>"
            })
        }
        return "" + u + l
    },
    getResponsiveSrc: function(r) {
        for (var e = [], t = [], i = "", s = 0; s < r.length; s++) {
            var n = r[s].split(" ");
            n[0] === "" && n.splice(0, 1),
            t.push(n[0]),
            e.push(n[1])
        }
        for (var a = window.innerWidth, o = 0; o < e.length; o++)
            if (parseInt(e[o], 10) > a) {
                i = t[o];
                break
            }
        return i
    },
    isImageLoaded: function(r) {
        return !(!r || !r.complete || r.naturalWidth === 0)
    },
    getVideoPosterMarkup: function(r, e, t, i, s) {
        var n = "";
        return s && s.youtube ? n = "lg-has-youtube" : s && s.vimeo ? n = "lg-has-vimeo" : n = "lg-has-html5",
        '<div class="lg-video-cont ' + n + '" style="' + t + `">
                <div class="lg-video-play-button">
                <svg
                    viewBox="0 0 20 20"
                    preserveAspectRatio="xMidYMid"
                    focusable="false"
                    aria-labelledby="` + i + `"
                    role="img"
                    class="lg-video-play-icon"
                >
                    <title>` + i + `</title>
                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>
                </svg>
                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">
                    <circle cx="50%" cy="50%" r="20"></circle></svg>
                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">
                    <circle cx="50%" cy="50%" r="20"></circle>
                </svg>
            </div>
            ` + (e || "") + `
            <img class="lg-object lg-video-poster" src="` + r + `" />
        </div>`
    },
    getFocusableElements: function(r) {
        var e = r.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')
          , t = [].filter.call(e, function(i) {
            var s = window.getComputedStyle(i);
            return s.display !== "none" && s.visibility !== "hidden"
        });
        return t
    },
    getDynamicOptions: function(r, e, t, i) {
        var s = []
          , n = km(Mm, e);
        return [].forEach.call(r, function(a) {
            for (var o = {}, l = 0; l < a.attributes.length; l++) {
                var u = a.attributes[l];
                if (u.specified) {
                    var c = Im(u.name)
                      , f = "";
                    n.indexOf(c) > -1 && (f = c),
                    f && (o[f] = u.value)
                }
            }
            var p = j(a)
              , d = p.find("img").first().attr("alt")
              , g = p.attr("title")
              , h = i ? p.attr(i) : p.find("img").first().attr("src");
            o.thumb = h,
            t && !o.subHtml && (o.subHtml = g || d || ""),
            o.alt = d || g || "",
            s.push(o)
        }),
        s
    },
    isMobile: function() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    },
    isVideo: function(r, e, t) {
        if (!r) {
            if (e)
                return {
                    html5: !0
                };
            console.error("lightGallery :- data-src is not provided on slide item " + (t + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
            return
        }
        var i = r.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i)
          , s = r.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i)
          , n = r.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
        if (i)
            return {
                youtube: i
            };
        if (s)
            return {
                vimeo: s
            };
        if (n)
            return {
                wistia: n
            }
    }
}
  , pu = 0
  , Lm = function() {
    function r(e, t) {
        if (this.lgOpened = !1,
        this.index = 0,
        this.plugins = [],
        this.lGalleryOn = !1,
        this.lgBusy = !1,
        this.currentItemsInDom = [],
        this.prevScrollTop = 0,
        this.bodyPaddingRight = 0,
        this.isDummyImageRemoved = !1,
        this.dragOrSwipeEnabled = !1,
        this.mediaContainerPosition = {
            top: 0,
            bottom: 0
        },
        !e)
            return this;
        if (pu++,
        this.lgId = pu,
        this.el = e,
        this.LGel = j(e),
        this.generateSettings(t),
        this.buildModules(),
        this.settings.dynamic && this.settings.dynamicEl !== void 0 && !Array.isArray(this.settings.dynamicEl))
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return this.galleryItems = this.getItems(),
        this.normalizeSettings(),
        this.init(),
        this.validateLicense(),
        this
    }
    return r.prototype.generateSettings = function(e) {
        if (this.settings = Qi(Qi({}, Am), e),
        this.settings.isMobile && typeof this.settings.isMobile == "function" ? this.settings.isMobile() : ot.isMobile()) {
            var t = Qi(Qi({}, this.settings.mobileSettings), this.settings.mobileSettings);
            this.settings = Qi(Qi({}, this.settings), t)
        }
    }
    ,
    r.prototype.normalizeSettings = function() {
        this.settings.slideEndAnimation && (this.settings.hideControlOnEnd = !1),
        this.settings.closable || (this.settings.swipeToClose = !1),
        this.zoomFromOrigin = this.settings.zoomFromOrigin,
        this.settings.dynamic && (this.zoomFromOrigin = !1),
        this.settings.container || (this.settings.container = document.body),
        this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length)
    }
    ,
    r.prototype.init = function() {
        var e = this;
        this.addSlideVideoInfo(this.galleryItems),
        this.buildStructure(),
        this.LGel.trigger(xe.init, {
            instance: this
        }),
        this.settings.keyPress && this.keyPress(),
        setTimeout(function() {
            e.enableDrag(),
            e.enableSwipe(),
            e.triggerPosterClick()
        }, 50),
        this.arrow(),
        this.settings.mousewheel && this.mousewheel(),
        this.settings.dynamic || this.openGalleryOnItemClick()
    }
    ,
    r.prototype.openGalleryOnItemClick = function() {
        for (var e = this, t = function(n) {
            var a = i.items[n]
              , o = j(a)
              , l = xd.generateUUID();
            o.attr("data-lg-id", l).on("click.lgcustom-item-" + l, function(u) {
                u.preventDefault();
                var c = e.settings.index || n;
                e.openGallery(c, a)
            })
        }, i = this, s = 0; s < this.items.length; s++)
            t(s)
    }
    ,
    r.prototype.buildModules = function() {
        var e = this;
        this.settings.plugins.forEach(function(t) {
            e.plugins.push(new t(e,j))
        })
    }
    ,
    r.prototype.validateLicense = function() {
        this.settings.licenseKey ? this.settings.licenseKey === "0000-0000-000-0000" && console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use") : console.error("Please provide a valid license key")
    }
    ,
    r.prototype.getSlideItem = function(e) {
        return j(this.getSlideItemId(e))
    }
    ,
    r.prototype.getSlideItemId = function(e) {
        return "#lg-item-" + this.lgId + "-" + e
    }
    ,
    r.prototype.getIdName = function(e) {
        return e + "-" + this.lgId
    }
    ,
    r.prototype.getElementById = function(e) {
        return j("#" + this.getIdName(e))
    }
    ,
    r.prototype.manageSingleSlideClassName = function() {
        this.galleryItems.length < 2 ? this.outer.addClass("lg-single-item") : this.outer.removeClass("lg-single-item")
    }
    ,
    r.prototype.buildStructure = function() {
        var e = this
          , t = this.$container && this.$container.get();
        if (!t) {
            var i = ""
              , s = "";
            this.settings.controls && (i = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings.previousSlide + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ` </button>
                <button type="button" id="` + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings.nextSlide + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>"),
            this.settings.appendSubHtmlTo !== ".lg-item" && (s = '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
            var n = "";
            this.settings.allowMediaOverlap && (n += "lg-media-overlap ");
            var a = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : ""
              , o = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : ""
              , l = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "")
              , u = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings.closeGallery + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : ""
              , c = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings.toggleMaximize + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : ""
              , f = `
        <div class="` + l + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + a + " " + o + ` role="dialog"
        >
            <div id="` + this.getIdName("lg-backdrop") + `" class="lg-backdrop"></div>

            <div id="` + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + n + ` ">

              <div id="` + this.getIdName("lg-content") + `" class="lg-content">
                <div id="` + this.getIdName("lg-inner") + `" class="lg-inner">
                </div>
                ` + i + `
              </div>
                <div id="` + this.getIdName("lg-toolbar") + `" class="lg-toolbar lg-group">
                    ` + c + `
                    ` + u + `
                    </div>
                    ` + (this.settings.appendSubHtmlTo === ".lg-outer" ? s : "") + `
                <div id="` + this.getIdName("lg-components") + `" class="lg-components">
                    ` + (this.settings.appendSubHtmlTo === ".lg-sub-html" ? s : "") + `
                </div>
            </div>
        </div>
        `;
            j(this.settings.container).append(f),
            document.body !== this.settings.container && j(this.settings.container).css("position", "relative"),
            this.outer = this.getElementById("lg-outer"),
            this.$lgComponents = this.getElementById("lg-components"),
            this.$backdrop = this.getElementById("lg-backdrop"),
            this.$container = this.getElementById("lg-container"),
            this.$inner = this.getElementById("lg-inner"),
            this.$content = this.getElementById("lg-content"),
            this.$toolbar = this.getElementById("lg-toolbar"),
            this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
            var p = this.settings.mode + " ";
            this.manageSingleSlideClassName(),
            this.settings.enableDrag && (p += "lg-grab "),
            this.outer.addClass(p),
            this.$inner.css("transition-timing-function", this.settings.easing),
            this.$inner.css("transition-duration", this.settings.speed + "ms"),
            this.settings.download && this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings.download + '" download class="lg-download lg-icon"></a>'),
            this.counter(),
            j(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function() {
                e.refreshOnResize()
            }),
            this.hideBars(),
            this.manageCloseGallery(),
            this.toggleMaximize(),
            this.initModules()
        }
    }
    ,
    r.prototype.refreshOnResize = function() {
        if (this.lgOpened) {
            var e = this.galleryItems[this.index]
              , t = e.__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var i = this.mediaContainerPosition
              , s = i.top
              , n = i.bottom;
            if (this.currentImageSize = ot.getSize(this.items[this.index], this.outer, s + n, t && this.settings.videoMaxSize),
            t && this.resizeVideoSlide(this.index, this.currentImageSize),
            this.zoomFromOrigin && !this.isDummyImageRemoved) {
                var a = this.getDummyImgStyles(this.currentImageSize);
                this.outer.find(".lg-current .lg-dummy-img").first().attr("style", a)
            }
            this.LGel.trigger(xe.containerResize)
        }
    }
    ,
    r.prototype.resizeVideoSlide = function(e, t) {
        var i = this.getVideoContStyle(t)
          , s = this.getSlideItem(e);
        s.find(".lg-video-cont").attr("style", i)
    }
    ,
    r.prototype.updateSlides = function(e, t) {
        if (this.index > e.length - 1 && (this.index = e.length - 1),
        e.length === 1 && (this.index = 0),
        !e.length) {
            this.closeGallery();
            return
        }
        var i = this.galleryItems[t].src;
        this.galleryItems = e,
        this.updateControls(),
        this.$inner.empty(),
        this.currentItemsInDom = [];
        var s = 0;
        this.galleryItems.some(function(n, a) {
            return n.src === i ? (s = a,
            !0) : !1
        }),
        this.currentItemsInDom = this.organizeSlideItems(s, -1),
        this.loadContent(s, !0),
        this.getSlideItem(s).addClass("lg-current"),
        this.index = s,
        this.updateCurrentCounter(s),
        this.LGel.trigger(xe.updateSlides)
    }
    ,
    r.prototype.getItems = function() {
        if (this.items = [],
        this.settings.dynamic)
            return this.settings.dynamicEl || [];
        if (this.settings.selector === "this")
            this.items.push(this.el);
        else if (this.settings.selector)
            if (typeof this.settings.selector == "string")
                if (this.settings.selectWithin) {
                    var e = j(this.settings.selectWithin);
                    this.items = e.find(this.settings.selector).get()
                } else
                    this.items = this.el.querySelectorAll(this.settings.selector);
            else
                this.items = this.settings.selector;
        else
            this.items = this.el.children;
        return ot.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage)
    }
    ,
    r.prototype.shouldHideScrollbar = function() {
        return this.settings.hideScrollbar && document.body === this.settings.container
    }
    ,
    r.prototype.hideScrollbar = function() {
        if (this.shouldHideScrollbar()) {
            this.bodyPaddingRight = parseFloat(j("body").style().paddingRight);
            var e = document.documentElement.getBoundingClientRect()
              , t = window.innerWidth - e.width;
            j(document.body).css("padding-right", t + this.bodyPaddingRight + "px"),
            j(document.body).addClass("lg-overlay-open")
        }
    }
    ,
    r.prototype.resetScrollBar = function() {
        this.shouldHideScrollbar() && (j(document.body).css("padding-right", this.bodyPaddingRight + "px"),
        j(document.body).removeClass("lg-overlay-open"))
    }
    ,
    r.prototype.openGallery = function(e, t) {
        var i = this;
        if (e === void 0 && (e = this.settings.index),
        !this.lgOpened) {
            this.lgOpened = !0,
            this.outer.removeClass("lg-hide-items"),
            this.hideScrollbar(),
            this.$container.addClass("lg-show");
            var s = this.getItemsToBeInsertedToDom(e, e);
            this.currentItemsInDom = s;
            var n = "";
            s.forEach(function(p) {
                n = n + ('<div id="' + p + '" class="lg-item"></div>')
            }),
            this.$inner.append(n),
            this.addHtml(e);
            var a = "";
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var o = this.mediaContainerPosition
              , l = o.top
              , u = o.bottom;
            this.settings.allowMediaOverlap || this.setMediaContainerPosition(l, u);
            var c = this.galleryItems[e].__slideVideoInfo;
            this.zoomFromOrigin && t && (this.currentImageSize = ot.getSize(t, this.outer, l + u, c && this.settings.videoMaxSize),
            a = ot.getTransform(t, this.outer, l, u, this.currentImageSize)),
            (!this.zoomFromOrigin || !a) && (this.outer.addClass(this.settings.startClass),
            this.getSlideItem(e).removeClass("lg-complete"));
            var f = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
            setTimeout(function() {
                i.outer.addClass("lg-components-open")
            }, f),
            this.index = e,
            this.LGel.trigger(xe.beforeOpen),
            this.getSlideItem(e).addClass("lg-current"),
            this.lGalleryOn = !1,
            this.prevScrollTop = j(window).scrollTop(),
            setTimeout(function() {
                if (i.zoomFromOrigin && a) {
                    var p = i.getSlideItem(e);
                    p.css("transform", a),
                    setTimeout(function() {
                        p.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", i.settings.startAnimationDuration + "ms"),
                        i.outer.addClass("lg-zoom-from-image")
                    }),
                    setTimeout(function() {
                        p.css("transform", "translate3d(0, 0, 0)")
                    }, 100)
                }
                setTimeout(function() {
                    i.$backdrop.addClass("in"),
                    i.$container.addClass("lg-show-in")
                }, 10),
                setTimeout(function() {
                    i.settings.trapFocus && document.body === i.settings.container && i.trapFocus()
                }, i.settings.backdropDuration + 50),
                (!i.zoomFromOrigin || !a) && setTimeout(function() {
                    i.outer.addClass("lg-visible")
                }, i.settings.backdropDuration),
                i.slide(e, !1, !1, !1),
                i.LGel.trigger(xe.afterOpen)
            }),
            document.body === this.settings.container && j("html").addClass("lg-on")
        }
    }
    ,
    r.prototype.getMediaContainerPosition = function() {
        if (this.settings.allowMediaOverlap)
            return {
                top: 0,
                bottom: 0
            };
        var e = this.$toolbar.get().clientHeight || 0
          , t = this.outer.find(".lg-components .lg-sub-html").get()
          , i = this.settings.defaultCaptionHeight || t && t.clientHeight || 0
          , s = this.outer.find(".lg-thumb-outer").get()
          , n = s ? s.clientHeight : 0
          , a = n + i;
        return {
            top: e,
            bottom: a
        }
    }
    ,
    r.prototype.setMediaContainerPosition = function(e, t) {
        e === void 0 && (e = 0),
        t === void 0 && (t = 0),
        this.$content.css("top", e + "px").css("bottom", t + "px")
    }
    ,
    r.prototype.hideBars = function() {
        var e = this;
        setTimeout(function() {
            e.outer.removeClass("lg-hide-items"),
            e.settings.hideBarsDelay > 0 && (e.outer.on("mousemove.lg click.lg touchstart.lg", function() {
                e.outer.removeClass("lg-hide-items"),
                clearTimeout(e.hideBarTimeout),
                e.hideBarTimeout = setTimeout(function() {
                    e.outer.addClass("lg-hide-items")
                }, e.settings.hideBarsDelay)
            }),
            e.outer.trigger("mousemove.lg"))
        }, this.settings.showBarsAfter)
    }
    ,
    r.prototype.initPictureFill = function(e) {
        if (this.settings.supportLegacyBrowser)
            try {
                picturefill({
                    elements: [e.get()]
                })
            } catch {
                console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")
            }
    }
    ,
    r.prototype.counter = function() {
        if (this.settings.counter) {
            var e = `<div class="lg-counter" role="status" aria-live="polite">
                <span id="` + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ` </span> /
                <span id="` + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(e)
        }
    }
    ,
    r.prototype.addHtml = function(e) {
        var t, i;
        if (this.galleryItems[e].subHtmlUrl ? i = this.galleryItems[e].subHtmlUrl : t = this.galleryItems[e].subHtml,
        !i)
            if (t) {
                var s = t.substring(0, 1);
                (s === "." || s === "#") && (this.settings.subHtmlSelectorRelative && !this.settings.dynamic ? t = j(this.items).eq(e).find(t).first().html() : t = j(t).first().html())
            } else
                t = "";
        if (this.settings.appendSubHtmlTo !== ".lg-item")
            i ? this.outer.find(".lg-sub-html").load(i) : this.outer.find(".lg-sub-html").html(t);
        else {
            var n = j(this.getSlideItemId(e));
            i ? n.load(i) : n.append('<div class="lg-sub-html">' + t + "</div>")
        }
        typeof t < "u" && t !== null && (t === "" ? this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html") : this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")),
        this.LGel.trigger(xe.afterAppendSubHtml, {
            index: e
        })
    }
    ,
    r.prototype.preload = function(e) {
        for (var t = 1; t <= this.settings.preload && !(t >= this.galleryItems.length - e); t++)
            this.loadContent(e + t, !1);
        for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
            this.loadContent(e - i, !1)
    }
    ,
    r.prototype.getDummyImgStyles = function(e) {
        return e ? "width:" + e.width + `px;
                margin-left: -` + e.width / 2 + `px;
                margin-top: -` + e.height / 2 + `px;
                height:` + e.height + "px" : ""
    }
    ,
    r.prototype.getVideoContStyle = function(e) {
        return e ? "width:" + e.width + `px;
                height:` + e.height + "px" : ""
    }
    ,
    r.prototype.getDummyImageContent = function(e, t, i) {
        var s;
        if (this.settings.dynamic || (s = j(this.items).eq(t)),
        s) {
            var n = void 0;
            if (this.settings.exThumbImage ? n = s.attr(this.settings.exThumbImage) : n = s.find("img").first().attr("src"),
            !n)
                return "";
            var a = this.getDummyImgStyles(this.currentImageSize)
              , o = "<img " + i + ' style="' + a + '" class="lg-dummy-img" src="' + n + '" />';
            return e.addClass("lg-first-slide"),
            this.outer.addClass("lg-first-slide-loading"),
            o
        }
        return ""
    }
    ,
    r.prototype.setImgMarkup = function(e, t, i) {
        var s = this.galleryItems[i]
          , n = s.alt
          , a = s.srcset
          , o = s.sizes
          , l = s.sources
          , u = ""
          , c = n ? 'alt="' + n + '"' : "";
        this.isFirstSlideWithZoomAnimation() ? u = this.getDummyImageContent(t, i, c) : u = ot.getImgMarkup(i, e, c, a, o, l);
        var f = '<picture class="lg-img-wrap"> ' + u + "</picture>";
        t.prepend(f)
    }
    ,
    r.prototype.onSlideObjectLoad = function(e, t, i, s) {
        var n = e.find(".lg-object").first();
        ot.isImageLoaded(n.get()) || t ? i() : (n.on("load.lg error.lg", function() {
            i && i()
        }),
        n.on("error.lg", function() {
            s && s()
        }))
    }
    ,
    r.prototype.onLgObjectLoad = function(e, t, i, s, n, a) {
        var o = this;
        this.onSlideObjectLoad(e, a, function() {
            o.triggerSlideItemLoad(e, t, i, s, n)
        }, function() {
            e.addClass("lg-complete lg-complete_"),
            e.html('<span class="lg-error-msg">' + o.settings.strings.mediaLoadingFailed + "</span>")
        })
    }
    ,
    r.prototype.triggerSlideItemLoad = function(e, t, i, s, n) {
        var a = this
          , o = this.galleryItems[t]
          , l = n && this.getSlideType(o) === "video" && !o.poster ? s : 0;
        setTimeout(function() {
            e.addClass("lg-complete lg-complete_"),
            a.LGel.trigger(xe.slideItemLoad, {
                index: t,
                delay: i || 0,
                isFirstSlide: n
            })
        }, l)
    }
    ,
    r.prototype.isFirstSlideWithZoomAnimation = function() {
        return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize)
    }
    ,
    r.prototype.addSlideVideoInfo = function(e) {
        var t = this;
        e.forEach(function(i, s) {
            i.__slideVideoInfo = ot.isVideo(i.src, !!i.video, s),
            i.__slideVideoInfo && t.settings.loadYouTubePoster && !i.poster && i.__slideVideoInfo.youtube && (i.poster = "//img.youtube.com/vi/" + i.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg")
        })
    }
    ,
    r.prototype.loadContent = function(e, t) {
        var i = this
          , s = this.galleryItems[e]
          , n = j(this.getSlideItemId(e))
          , a = s.poster
          , o = s.srcset
          , l = s.sizes
          , u = s.sources
          , c = s.src
          , f = s.video
          , p = f && typeof f == "string" ? JSON.parse(f) : f;
        if (s.responsive) {
            var d = s.responsive.split(",");
            c = ot.getResponsiveSrc(d) || c
        }
        var g = s.__slideVideoInfo
          , h = ""
          , _ = !!s.iframe
          , y = !this.lGalleryOn
          , v = 0;
        if (y && (this.zoomFromOrigin && this.currentImageSize ? v = this.settings.startAnimationDuration + 10 : v = this.settings.backdropDuration + 10),
        !n.hasClass("lg-loaded")) {
            if (g) {
                var b = this.mediaContainerPosition
                  , m = b.top
                  , w = b.bottom
                  , S = ot.getSize(this.items[e], this.outer, m + w, g && this.settings.videoMaxSize);
                h = this.getVideoContStyle(S)
            }
            if (_) {
                var T = ot.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, c, s.iframeTitle);
                n.prepend(T)
            } else if (a) {
                var k = ""
                  , E = y && this.zoomFromOrigin && this.currentImageSize;
                E && (k = this.getDummyImageContent(n, e, ""));
                var T = ot.getVideoPosterMarkup(a, k || "", h, this.settings.strings.playVideo, g);
                n.prepend(T)
            } else if (g) {
                var T = '<div class="lg-video-cont " style="' + h + '"></div>';
                n.prepend(T)
            } else if (this.setImgMarkup(c, n, e),
            o || u) {
                var C = n.find(".lg-object");
                this.initPictureFill(C)
            }
            (a || g) && this.LGel.trigger(xe.hasVideo, {
                index: e,
                src: c,
                html5Video: p,
                hasPoster: !!a
            }),
            this.LGel.trigger(xe.afterAppendSlide, {
                index: e
            }),
            this.lGalleryOn && this.settings.appendSubHtmlTo === ".lg-item" && this.addHtml(e)
        }
        var O = 0;
        v && !j(document.body).hasClass("lg-from-hash") && (O = v),
        this.isFirstSlideWithZoomAnimation() && (setTimeout(function() {
            n.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")
        }, this.settings.startAnimationDuration + 100),
        n.hasClass("lg-loaded") || setTimeout(function() {
            if (i.getSlideType(s) === "image") {
                var A = s.alt
                  , I = A ? 'alt="' + A + '"' : "";
                if (n.find(".lg-img-wrap").append(ot.getImgMarkup(e, c, I, o, l, s.sources)),
                o || u) {
                    var D = n.find(".lg-object");
                    i.initPictureFill(D)
                }
            }
            (i.getSlideType(s) === "image" || i.getSlideType(s) === "video" && a) && (i.onLgObjectLoad(n, e, v, O, !0, !1),
            i.onSlideObjectLoad(n, !!(g && g.html5 && !a), function() {
                i.loadContentOnFirstSlideLoad(e, n, O)
            }, function() {
                i.loadContentOnFirstSlideLoad(e, n, O)
            }))
        }, this.settings.startAnimationDuration + 100)),
        n.addClass("lg-loaded"),
        (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(s) === "video" && !a) && this.onLgObjectLoad(n, e, v, O, y, !!(g && g.html5 && !a)),
        (!this.zoomFromOrigin || !this.currentImageSize) && n.hasClass("lg-complete_") && !this.lGalleryOn && setTimeout(function() {
            n.addClass("lg-complete")
        }, this.settings.backdropDuration),
        this.lGalleryOn = !0,
        t === !0 && (n.hasClass("lg-complete_") ? this.preload(e) : n.find(".lg-object").first().on("load.lg error.lg", function() {
            i.preload(e)
        }))
    }
    ,
    r.prototype.loadContentOnFirstSlideLoad = function(e, t, i) {
        var s = this;
        setTimeout(function() {
            t.find(".lg-dummy-img").remove(),
            t.removeClass("lg-first-slide"),
            s.outer.removeClass("lg-first-slide-loading"),
            s.isDummyImageRemoved = !0,
            s.preload(e)
        }, i + 300)
    }
    ,
    r.prototype.getItemsToBeInsertedToDom = function(e, t, i) {
        var s = this;
        i === void 0 && (i = 0);
        var n = []
          , a = Math.max(i, 3);
        a = Math.min(a, this.galleryItems.length);
        var o = "lg-item-" + this.lgId + "-" + t;
        if (this.galleryItems.length <= 3)
            return this.galleryItems.forEach(function(c, f) {
                n.push("lg-item-" + s.lgId + "-" + f)
            }),
            n;
        if (e < (this.galleryItems.length - 1) / 2) {
            for (var l = e; l > e - a / 2 && l >= 0; l--)
                n.push("lg-item-" + this.lgId + "-" + l);
            for (var u = n.length, l = 0; l < a - u; l++)
                n.push("lg-item-" + this.lgId + "-" + (e + l + 1))
        } else {
            for (var l = e; l <= this.galleryItems.length - 1 && l < e + a / 2; l++)
                n.push("lg-item-" + this.lgId + "-" + l);
            for (var u = n.length, l = 0; l < a - u; l++)
                n.push("lg-item-" + this.lgId + "-" + (e - l - 1))
        }
        return this.settings.loop && (e === this.galleryItems.length - 1 ? n.push("lg-item-" + this.lgId + "-0") : e === 0 && n.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1))),
        n.indexOf(o) === -1 && n.push("lg-item-" + this.lgId + "-" + t),
        n
    }
    ,
    r.prototype.organizeSlideItems = function(e, t) {
        var i = this
          , s = this.getItemsToBeInsertedToDom(e, t, this.settings.numberOfSlideItemsInDom);
        return s.forEach(function(n) {
            i.currentItemsInDom.indexOf(n) === -1 && i.$inner.append('<div id="' + n + '" class="lg-item"></div>')
        }),
        this.currentItemsInDom.forEach(function(n) {
            s.indexOf(n) === -1 && j("#" + n).remove()
        }),
        s
    }
    ,
    r.prototype.getPreviousSlideIndex = function() {
        var e = 0;
        try {
            var t = this.outer.find(".lg-current").first().attr("id");
            e = parseInt(t.split("-")[3]) || 0
        } catch {
            e = 0
        }
        return e
    }
    ,
    r.prototype.setDownloadValue = function(e) {
        if (this.settings.download) {
            var t = this.galleryItems[e]
              , i = t.downloadUrl === !1 || t.downloadUrl === "false";
            if (i)
                this.outer.addClass("lg-hide-download");
            else {
                var s = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                s.attr("href", t.downloadUrl || t.src),
                t.download && s.attr("download", t.download)
            }
        }
    }
    ,
    r.prototype.makeSlideAnimation = function(e, t, i) {
        var s = this;
        this.lGalleryOn && i.addClass("lg-slide-progress"),
        setTimeout(function() {
            s.outer.addClass("lg-no-trans"),
            s.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"),
            e === "prev" ? (t.addClass("lg-prev-slide"),
            i.addClass("lg-next-slide")) : (t.addClass("lg-next-slide"),
            i.addClass("lg-prev-slide")),
            setTimeout(function() {
                s.outer.find(".lg-item").removeClass("lg-current"),
                t.addClass("lg-current"),
                s.outer.removeClass("lg-no-trans")
            }, 50)
        }, this.lGalleryOn ? this.settings.slideDelay : 0)
    }
    ,
    r.prototype.slide = function(e, t, i, s) {
        var n = this
          , a = this.getPreviousSlideIndex();
        if (this.currentItemsInDom = this.organizeSlideItems(e, a),
        !(this.lGalleryOn && a === e)) {
            var o = this.galleryItems.length;
            if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var l = this.getSlideItem(e)
                  , u = this.getSlideItem(a)
                  , c = this.galleryItems[e]
                  , f = c.__slideVideoInfo;
                if (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                this.setDownloadValue(e),
                f) {
                    var p = this.mediaContainerPosition
                      , d = p.top
                      , g = p.bottom
                      , h = ot.getSize(this.items[e], this.outer, d + g, f && this.settings.videoMaxSize);
                    this.resizeVideoSlide(e, h)
                }
                if (this.LGel.trigger(xe.beforeSlide, {
                    prevIndex: a,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!i
                }),
                this.lgBusy = !0,
                clearTimeout(this.hideBarTimeout),
                this.arrowDisable(e),
                s || (e < a ? s = "prev" : e > a && (s = "next")),
                !t)
                    this.makeSlideAnimation(s, l, u);
                else {
                    this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                    var _ = void 0
                      , y = void 0;
                    o > 2 ? (_ = e - 1,
                    y = e + 1,
                    (e === 0 && a === o - 1 || e === o - 1 && a === 0) && (y = 0,
                    _ = o - 1)) : (_ = 0,
                    y = 1),
                    s === "prev" ? this.getSlideItem(y).addClass("lg-next-slide") : this.getSlideItem(_).addClass("lg-prev-slide"),
                    l.addClass("lg-current")
                }
                this.lGalleryOn ? setTimeout(function() {
                    n.loadContent(e, !0),
                    n.settings.appendSubHtmlTo !== ".lg-item" && n.addHtml(e)
                }, this.settings.speed + 50 + (t ? 0 : this.settings.slideDelay)) : this.loadContent(e, !0),
                setTimeout(function() {
                    n.lgBusy = !1,
                    u.removeClass("lg-slide-progress"),
                    n.LGel.trigger(xe.afterSlide, {
                        prevIndex: a,
                        index: e,
                        fromTouch: t,
                        fromThumb: i
                    })
                }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (t ? 0 : this.settings.slideDelay))
            }
            this.index = e
        }
    }
    ,
    r.prototype.updateCurrentCounter = function(e) {
        this.getElementById("lg-counter-current").html(e + 1 + "")
    }
    ,
    r.prototype.updateCounterTotal = function() {
        this.getElementById("lg-counter-all").html(this.galleryItems.length + "")
    }
    ,
    r.prototype.getSlideType = function(e) {
        return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image"
    }
    ,
    r.prototype.touchMove = function(e, t, i) {
        var s = t.pageX - e.pageX
          , n = t.pageY - e.pageY
          , a = !1;
        if (this.swipeDirection ? a = !0 : Math.abs(s) > 15 ? (this.swipeDirection = "horizontal",
        a = !0) : Math.abs(n) > 15 && (this.swipeDirection = "vertical",
        a = !0),
        !!a) {
            var o = this.getSlideItem(this.index);
            if (this.swipeDirection === "horizontal") {
                i == null || i.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(o, s, 0);
                var l = o.get().offsetWidth
                  , u = l * 15 / 100
                  , c = u - Math.abs(s * 10 / 100);
                this.setTranslate(this.outer.find(".lg-prev-slide").first(), -l + s - c, 0),
                this.setTranslate(this.outer.find(".lg-next-slide").first(), l + s + c, 0)
            } else if (this.swipeDirection === "vertical" && this.settings.swipeToClose) {
                i == null || i.preventDefault(),
                this.$container.addClass("lg-dragging-vertical");
                var f = 1 - Math.abs(n) / window.innerHeight;
                this.$backdrop.css("opacity", f);
                var p = 1 - Math.abs(n) / (window.innerWidth * 2);
                this.setTranslate(o, 0, n, p, p),
                Math.abs(n) > 100 && this.outer.addClass("lg-hide-items").removeClass("lg-components-open")
            }
        }
    }
    ,
    r.prototype.touchEnd = function(e, t, i) {
        var s = this, n;
        this.settings.mode !== "lg-slide" && this.outer.addClass("lg-slide"),
        setTimeout(function() {
            s.$container.removeClass("lg-dragging-vertical"),
            s.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
            var a = !0;
            if (s.swipeDirection === "horizontal") {
                n = e.pageX - t.pageX;
                var o = Math.abs(e.pageX - t.pageX);
                n < 0 && o > s.settings.swipeThreshold ? (s.goToNextSlide(!0),
                a = !1) : n > 0 && o > s.settings.swipeThreshold && (s.goToPrevSlide(!0),
                a = !1)
            } else if (s.swipeDirection === "vertical")
                if (n = Math.abs(e.pageY - t.pageY),
                s.settings.closable && s.settings.swipeToClose && n > 100) {
                    s.closeGallery();
                    return
                } else
                    s.$backdrop.css("opacity", 1);
            if (s.outer.find(".lg-item").removeAttr("style"),
            a && Math.abs(e.pageX - t.pageX) < 5) {
                var l = j(i.target);
                s.isPosterElement(l) && s.LGel.trigger(xe.posterClick)
            }
            s.swipeDirection = void 0
        }),
        setTimeout(function() {
            !s.outer.hasClass("lg-dragging") && s.settings.mode !== "lg-slide" && s.outer.removeClass("lg-slide")
        }, this.settings.speed + 100)
    }
    ,
    r.prototype.enableSwipe = function() {
        var e = this
          , t = {}
          , i = {}
          , s = !1
          , n = !1;
        this.settings.enableSwipe && (this.$inner.on("touchstart.lg", function(a) {
            e.dragOrSwipeEnabled = !0;
            var o = e.getSlideItem(e.index);
            (j(a.target).hasClass("lg-item") || o.get().contains(a.target)) && !e.outer.hasClass("lg-zoomed") && !e.lgBusy && a.touches.length === 1 && (n = !0,
            e.touchAction = "swipe",
            e.manageSwipeClass(),
            t = {
                pageX: a.touches[0].pageX,
                pageY: a.touches[0].pageY
            })
        }),
        this.$inner.on("touchmove.lg", function(a) {
            n && e.touchAction === "swipe" && a.touches.length === 1 && (i = {
                pageX: a.touches[0].pageX,
                pageY: a.touches[0].pageY
            },
            e.touchMove(t, i, a),
            s = !0)
        }),
        this.$inner.on("touchend.lg", function(a) {
            if (e.touchAction === "swipe") {
                if (s)
                    s = !1,
                    e.touchEnd(i, t, a);
                else if (n) {
                    var o = j(a.target);
                    e.isPosterElement(o) && e.LGel.trigger(xe.posterClick)
                }
                e.touchAction = void 0,
                n = !1
            }
        }))
    }
    ,
    r.prototype.enableDrag = function() {
        var e = this
          , t = {}
          , i = {}
          , s = !1
          , n = !1;
        this.settings.enableDrag && (this.outer.on("mousedown.lg", function(a) {
            e.dragOrSwipeEnabled = !0;
            var o = e.getSlideItem(e.index);
            (j(a.target).hasClass("lg-item") || o.get().contains(a.target)) && !e.outer.hasClass("lg-zoomed") && !e.lgBusy && (a.preventDefault(),
            e.lgBusy || (e.manageSwipeClass(),
            t = {
                pageX: a.pageX,
                pageY: a.pageY
            },
            s = !0,
            e.outer.get().scrollLeft += 1,
            e.outer.get().scrollLeft -= 1,
            e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
            e.LGel.trigger(xe.dragStart)))
        }),
        j(window).on("mousemove.lg.global" + this.lgId, function(a) {
            s && e.lgOpened && (n = !0,
            i = {
                pageX: a.pageX,
                pageY: a.pageY
            },
            e.touchMove(t, i),
            e.LGel.trigger(xe.dragMove))
        }),
        j(window).on("mouseup.lg.global" + this.lgId, function(a) {
            if (e.lgOpened) {
                var o = j(a.target);
                n ? (n = !1,
                e.touchEnd(i, t, a),
                e.LGel.trigger(xe.dragEnd)) : e.isPosterElement(o) && e.LGel.trigger(xe.posterClick),
                s && (s = !1,
                e.outer.removeClass("lg-grabbing").addClass("lg-grab"))
            }
        }))
    }
    ,
    r.prototype.triggerPosterClick = function() {
        var e = this;
        this.$inner.on("click.lg", function(t) {
            !e.dragOrSwipeEnabled && e.isPosterElement(j(t.target)) && e.LGel.trigger(xe.posterClick)
        })
    }
    ,
    r.prototype.manageSwipeClass = function() {
        var e = this.index + 1
          , t = this.index - 1;
        this.settings.loop && this.galleryItems.length > 2 && (this.index === 0 ? t = this.galleryItems.length - 1 : this.index === this.galleryItems.length - 1 && (e = 0)),
        this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"),
        t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
        this.getSlideItem(e).addClass("lg-next-slide")
    }
    ,
    r.prototype.goToNextSlide = function(e) {
        var t = this
          , i = this.settings.loop;
        e && this.galleryItems.length < 3 && (i = !1),
        this.lgBusy || (this.index + 1 < this.galleryItems.length ? (this.index++,
        this.LGel.trigger(xe.beforeNextSlide, {
            index: this.index
        }),
        this.slide(this.index, !!e, !1, "next")) : i ? (this.index = 0,
        this.LGel.trigger(xe.beforeNextSlide, {
            index: this.index
        }),
        this.slide(this.index, !!e, !1, "next")) : this.settings.slideEndAnimation && !e && (this.outer.addClass("lg-right-end"),
        setTimeout(function() {
            t.outer.removeClass("lg-right-end")
        }, 400)))
    }
    ,
    r.prototype.goToPrevSlide = function(e) {
        var t = this
          , i = this.settings.loop;
        e && this.galleryItems.length < 3 && (i = !1),
        this.lgBusy || (this.index > 0 ? (this.index--,
        this.LGel.trigger(xe.beforePrevSlide, {
            index: this.index,
            fromTouch: e
        }),
        this.slide(this.index, !!e, !1, "prev")) : i ? (this.index = this.galleryItems.length - 1,
        this.LGel.trigger(xe.beforePrevSlide, {
            index: this.index,
            fromTouch: e
        }),
        this.slide(this.index, !!e, !1, "prev")) : this.settings.slideEndAnimation && !e && (this.outer.addClass("lg-left-end"),
        setTimeout(function() {
            t.outer.removeClass("lg-left-end")
        }, 400)))
    }
    ,
    r.prototype.keyPress = function() {
        var e = this;
        j(window).on("keydown.lg.global" + this.lgId, function(t) {
            e.lgOpened && e.settings.escKey === !0 && t.keyCode === 27 && (t.preventDefault(),
            e.settings.allowMediaOverlap && e.outer.hasClass("lg-can-toggle") && e.outer.hasClass("lg-components-open") ? e.outer.removeClass("lg-components-open") : e.closeGallery()),
            e.lgOpened && e.galleryItems.length > 1 && (t.keyCode === 37 && (t.preventDefault(),
            e.goToPrevSlide()),
            t.keyCode === 39 && (t.preventDefault(),
            e.goToNextSlide()))
        })
    }
    ,
    r.prototype.arrow = function() {
        var e = this;
        this.getElementById("lg-prev").on("click.lg", function() {
            e.goToPrevSlide()
        }),
        this.getElementById("lg-next").on("click.lg", function() {
            e.goToNextSlide()
        })
    }
    ,
    r.prototype.arrowDisable = function(e) {
        if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var t = this.getElementById("lg-prev")
              , i = this.getElementById("lg-next");
            e + 1 === this.galleryItems.length ? i.attr("disabled", "disabled").addClass("disabled") : i.removeAttr("disabled").removeClass("disabled"),
            e === 0 ? t.attr("disabled", "disabled").addClass("disabled") : t.removeAttr("disabled").removeClass("disabled")
        }
    }
    ,
    r.prototype.setTranslate = function(e, t, i, s, n) {
        s === void 0 && (s = 1),
        n === void 0 && (n = 1),
        e.css("transform", "translate3d(" + t + "px, " + i + "px, 0px) scale3d(" + s + ", " + n + ", 1)")
    }
    ,
    r.prototype.mousewheel = function() {
        var e = this
          , t = 0;
        this.outer.on("wheel.lg", function(i) {
            if (!(!i.deltaY || e.galleryItems.length < 2)) {
                i.preventDefault();
                var s = new Date().getTime();
                s - t < 1e3 || (t = s,
                i.deltaY > 0 ? e.goToNextSlide() : i.deltaY < 0 && e.goToPrevSlide())
            }
        })
    }
    ,
    r.prototype.isSlideElement = function(e) {
        return e.hasClass("lg-outer") || e.hasClass("lg-item") || e.hasClass("lg-img-wrap")
    }
    ,
    r.prototype.isPosterElement = function(e) {
        var t = this.getSlideItem(this.index).find(".lg-video-play-button").get();
        return e.hasClass("lg-video-poster") || e.hasClass("lg-video-play-button") || t && t.contains(e.get())
    }
    ,
    r.prototype.toggleMaximize = function() {
        var e = this;
        this.getElementById("lg-maximize").on("click.lg", function() {
            e.$container.toggleClass("lg-inline"),
            e.refreshOnResize()
        })
    }
    ,
    r.prototype.invalidateItems = function() {
        for (var e = 0; e < this.items.length; e++) {
            var t = this.items[e]
              , i = j(t);
            i.off("click.lgcustom-item-" + i.attr("data-lg-id"))
        }
    }
    ,
    r.prototype.trapFocus = function() {
        var e = this;
        this.$container.get().focus({
            preventScroll: !0
        }),
        j(window).on("keydown.lg.global" + this.lgId, function(t) {
            if (e.lgOpened) {
                var i = t.key === "Tab" || t.keyCode === 9;
                if (i) {
                    var s = ot.getFocusableElements(e.$container.get())
                      , n = s[0]
                      , a = s[s.length - 1];
                    t.shiftKey ? document.activeElement === n && (a.focus(),
                    t.preventDefault()) : document.activeElement === a && (n.focus(),
                    t.preventDefault())
                }
            }
        })
    }
    ,
    r.prototype.manageCloseGallery = function() {
        var e = this;
        if (this.settings.closable) {
            var t = !1;
            this.getElementById("lg-close").on("click.lg", function() {
                e.closeGallery()
            }),
            this.settings.closeOnTap && (this.outer.on("mousedown.lg", function(i) {
                var s = j(i.target);
                e.isSlideElement(s) ? t = !0 : t = !1
            }),
            this.outer.on("mousemove.lg", function() {
                t = !1
            }),
            this.outer.on("mouseup.lg", function(i) {
                var s = j(i.target);
                e.isSlideElement(s) && t && (e.outer.hasClass("lg-dragging") || e.closeGallery())
            }))
        }
    }
    ,
    r.prototype.closeGallery = function(e) {
        var t = this;
        if (!this.lgOpened || !this.settings.closable && !e)
            return 0;
        this.LGel.trigger(xe.beforeClose),
        this.settings.resetScrollPosition && !this.settings.hideScrollbar && j(window).scrollTop(this.prevScrollTop);
        var i = this.items[this.index], s;
        if (this.zoomFromOrigin && i) {
            var n = this.mediaContainerPosition
              , a = n.top
              , o = n.bottom
              , l = this.galleryItems[this.index]
              , u = l.__slideVideoInfo
              , c = l.poster
              , f = ot.getSize(i, this.outer, a + o, u && c && this.settings.videoMaxSize);
            s = ot.getTransform(i, this.outer, a, o, f)
        }
        this.zoomFromOrigin && s ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
        this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", s)) : (this.outer.addClass("lg-hide-items"),
        this.outer.removeClass("lg-zoom-from-image")),
        this.destroyModules(),
        this.lGalleryOn = !1,
        this.isDummyImageRemoved = !1,
        this.zoomFromOrigin = this.settings.zoomFromOrigin,
        clearTimeout(this.hideBarTimeout),
        this.hideBarTimeout = !1,
        j("html").removeClass("lg-on"),
        this.outer.removeClass("lg-visible lg-components-open"),
        this.$backdrop.removeClass("in").css("opacity", 0);
        var p = this.zoomFromOrigin && s ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
        return this.$container.removeClass("lg-show-in"),
        setTimeout(function() {
            t.zoomFromOrigin && s && t.outer.removeClass("lg-zoom-from-image"),
            t.$container.removeClass("lg-show"),
            t.resetScrollBar(),
            t.$backdrop.removeAttr("style").css("transition-duration", t.settings.backdropDuration + "ms"),
            t.outer.removeClass("lg-closing " + t.settings.startClass),
            t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
            t.$inner.empty(),
            t.lgOpened && t.LGel.trigger(xe.afterClose, {
                instance: t
            }),
            t.$container.get() && t.$container.get().blur(),
            t.lgOpened = !1
        }, p + 100),
        p + 100
    }
    ,
    r.prototype.initModules = function() {
        this.plugins.forEach(function(e) {
            try {
                e.init()
            } catch {
                console.warn("lightGallery:- make sure lightGallery module is properly initiated")
            }
        })
    }
    ,
    r.prototype.destroyModules = function(e) {
        this.plugins.forEach(function(t) {
            try {
                e ? t.destroy() : t.closeGallery && t.closeGallery()
            } catch {
                console.warn("lightGallery:- make sure lightGallery module is properly destroyed")
            }
        })
    }
    ,
    r.prototype.refresh = function(e) {
        this.settings.dynamic || this.invalidateItems(),
        e ? this.galleryItems = e : this.galleryItems = this.getItems(),
        this.updateControls(),
        this.openGalleryOnItemClick(),
        this.LGel.trigger(xe.updateSlides)
    }
    ,
    r.prototype.updateControls = function() {
        this.addSlideVideoInfo(this.galleryItems),
        this.updateCounterTotal(),
        this.manageSingleSlideClassName()
    }
    ,
    r.prototype.destroyGallery = function() {
        this.destroyModules(!0),
        this.settings.dynamic || this.invalidateItems(),
        j(window).off(".lg.global" + this.lgId),
        this.LGel.off(".lg"),
        this.$container.remove()
    }
    ,
    r.prototype.destroy = function() {
        var e = this.closeGallery(!0);
        return e ? setTimeout(this.destroyGallery.bind(this), e) : this.destroyGallery(),
        e
    }
    ,
    r
}();
function Dm(r, e) {
    return new Lm(r,e)
}
const gu = document.querySelectorAll("[data-gallery]");
if (gu.length) {
    let r = [];
    gu.forEach(e => {
        r.push({
            gallery: e,
            galleryClass: Dm(e, {
                licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
                speed: 500,
                selector: document.querySelectorAll("[data-gallery-item]")
            })
        })
    }
    )
}
class Pm {
    constructor(e, t=null) {
        let i = {
            init: !0,
            logging: !0
        };
        if (this.config = Object.assign(i, e),
        this.config.init) {
            const s = document.querySelectorAll("[data-prlx-mouse]");
            s.length && this.paralaxMouseInit(s)
        }
    }
    paralaxMouseInit(e) {
        e.forEach(t => {
            const i = t.closest("[data-prlx-mouse-wrapper]")
              , s = t.dataset.prlxCx ? +t.dataset.prlxCx : 100
              , n = t.dataset.prlxCy ? +t.dataset.prlxCy : 100
              , a = t.hasAttribute("data-prlx-dxr") ? -1 : 1
              , o = t.hasAttribute("data-prlx-dyr") ? -1 : 1
              , l = t.dataset.prlxA ? +t.dataset.prlxA : 50;
            let u = 0
              , c = 0
              , f = 0
              , p = 0;
            d(),
            i ? g(i) : g();
            function d() {
                const h = f - u
                  , _ = p - c;
                u = u + h * l / 1e3,
                c = c + _ * l / 1e3,
                t.style.cssText = `transform: translate3D(${a * u / (s / 10)}%,${o * c / (n / 10)}%,0) rotate(0.02deg);`,
                requestAnimationFrame(d)
            }
            function g(h=window) {
                h.addEventListener("mousemove", function(_) {
                    const y = t.getBoundingClientRect().top + window.scrollY;
                    if (y >= window.scrollY || y + t.offsetHeight >= window.scrollY) {
                        const v = window.innerWidth
                          , b = window.innerHeight
                          , m = _.clientX - v / 2
                          , w = _.clientY - b / 2;
                        f = m / v * 100,
                        p = w / b * 100
                    }
                })
            }
        }
        )
    }
}
hh();
gh();
ph();
xh();
const Yt = new Ch({});
window.popupInstance = Yt;
new Pm({});
new Sh({});
const On = {
    s1: "Центральна Україна",
    s2: "Західна Україна",
    s3: "Східна Україна",
    s4: "Північна Україна",
    s5: "Південна Україна",
    s6: "Подільський Край",
    s99: "Тестовий сервер"
};
$(document).ready(function() {
    var r = ["Центральна Україна", "Західна Україна", "Східна Україна", "Північна Україна", "Південна Україна", "Подільський Край", "Тестовий сервер"]
      , e = ["servers", "phone", "password"];
    function t() {
        $.ajax({
            url: "/ajax/verify",
            type: "GET",
            dataType: "json",
            success: function(d) {
                d.result == "success" && (d.detail == "open_login" ? document.location.href = "/cabinet/login" : d.detail == "open_cabinet_index" && (document.location.href = "/cabinet/index"))
            }
        })
    }
    document.location.pathname.includes("/cabinet/2FA") && (t(),
    setInterval(t, 2 * 1e3)),
    $('form[name="cabinet-login-auth-phone"], form[name="cabinet-login-auth-email"]').submit(function(d) {
        d.preventDefault(),
        hideError();
        const g = $("html").attr("lang");
        var h = $(this).serializeArray();
        const _ = $(this).find("[name=cabinet-login-auth--server]").attr("val");
        h = h.map(w => w.name === "cabinet-login-auth--server" ? {
            ...w,
            value: On[_]
        } : w);
        var y = h[0].value
          , v = h[1].value
          , b = h[2].value;
        if ($(d.target).attr("name") == "cabinet-login-auth-phone")
            var m = "phone";
        else
            var m = "email";
        if (!r.includes(y))
            return showError($(d.target).attr("name"), "servers", window[g].popup.selectServerFromList);
        if (m == "phone" && (v.charAt(0) != "+" || v.length < 8 || v.length > 15))
            return showError($(d.target).attr("name"), "phone", window[g].popup.phoneError);
        if (m == "email" && (!v.includes("@") || v.length < 8 || v.length > 64))
            return showError($(d.target).attr("name"), "email", window[g].popup.emailError);
        if (b.length < 6 || b.length > 36)
            return showError($(d.target).attr("name"), "password", window[g].popup.badPassword);
        $.ajax({
            url: "/ajax/authorization",
            type: "POST",
            data: h,
            dataType: "json",
            success: function(w) {
                if (grecaptcha.reset(),
                w.result == "error")
                    return showError($(d.target).attr("name"), "default", w.detail);
                w.result == "success" && (m == "phone" ? setCoockie("phone", v) : setCoockie("email", v),
                setCoockie("server", _),
                w.detail == "open_cabinet" ? document.location.href = "/cabinet/index" : w.detail == "verify_2FA" && (document.location.href = "/cabinet/2FA"))
            }
        })
    }),
    $("#reset-password-email").click(function(d) {
        d.preventDefault(),
        i("cabinet-login-auth-email")
    }),
    $("#reset-password-phone").click(function(d) {
        d.preventDefault(),
        i("cabinet-login-auth-phone")
    });
    function i(d) {
        var g = $('form[name="' + d + '"]').serializeArray();
        const h = $('form[name="' + d + '"]').find("[name=cabinet-login-auth--server]").attr("val");
        g = g.map(b => b.name === "cabinet-login-auth--server" ? {
            ...b,
            value: On[h]
        } : b);
        var _ = g[0].value
          , y = g[1].value;
        const v = $("html").attr("lang");
        if (!r.includes(_))
            return showInfo(window[v].popup.selectServerFromList);
        if (d == "cabinet-login-auth-phone" && (y.charAt(0) != "+" || y.length < 8 || y.length > 15))
            return showInfo(window[v].popup.phoneError);
        if (d == "cabinet-login-auth-email" && (!y.includes("@") || y.length < 8 || y.length > 64))
            return showInfo(window[v].popup.emailError);
        $.ajax({
            url: "/ajax/reset-password",
            type: "POST",
            data: g,
            dataType: "json",
            success: function(b) {
                if (grecaptcha.reset(),
                b.result == "error")
                    return showInfo(b.detail);
                if (b.result == "success")
                    return showInfo(b.detail)
            }
        })
    }
    window.showError = function(g, h, _) {
        hideError(),
        $('form[name="' + g + '"] .item-' + h).addClass("form-item--error"),
        showInfo(_)
    }
    ,
    window.showInfo = function(g) {
        closeInfo(),
        setTimeout( () => {
            $("#popup-info-text").html(g),
            Yt.open("#popup-info")
        }
        , 500)
    }
    ,
    window.hideError = function() {
        $(".error-label").addClass("hidden"),
        e.forEach(g => $(".item-" + g).removeClass("form-item--error"))
    }
    ,
    window.closeInfo = function() {
        Yt.close("#popup-info")
    }
    ,
    window.showSuccessPayment = function({amountUah: d, paymentSystem: g, isX2: h, timeCreate: _=new Date}) {
        let y = d;
        y > 49e3 && (y = 49e3);
        const v = document.querySelectorAll("[data-percentage]");
        let b = !1;
        for (let B = v.length - 1; B > -1; B--)
            if (y >= parseInt(v[B].dataset.percentage)) {
                var m = v[B].querySelector(".donate__percentage-item-value");
                if (m)
                    var w = parseInt(m.textContent.trim().replace(/\D/g, ""));
                b = !0;
                break
            }
        var S = 0;
        h && y === y ? S = y : y === y ? y = y : y = 0,
        y > 0 && b && (y = y + y * (w / 100)),
        y += S,
        y = Math.floor(y);
        const T = _.getHours().toString().padStart(2, "0")
          , k = _.getMinutes().toString().padStart(2, "0")
          , E = _.getDate().toString().padStart(2, "0")
          , C = (_.getMonth() + 1).toString().padStart(2, "0")
          , O = _.getFullYear()
          , A = document.getElementById("payment-success-amount")
          , I = document.getElementById("payment-success-donate")
          , D = document.getElementById("payment-success-system")
          , P = document.getElementById("payment-success-time");
        A.textContent = `₴ ${d.toLocaleString("en-US")}`,
        I.textContent = y.toLocaleString("en-US"),
        D.textContent = g,
        P.textContent = `${T}:${k}, ${E}.${C}.${O}`,
        Yt.open("#popup-success-payment")
    }
    ,
    window.showSimpleSuccessPayment = function() {
        Yt.open("#popup-simple-success-payment")
    }
    ,
    window.showErrorPayment = function() {
        Yt.open("#popup-error-payment")
    }
    ;
    var s = $(window).width()
      , n = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    window.userMobile = n,
    window.widthScreen = s;
    var a = $("div").hasClass("page-roulette");
    if (a) {
        let h = function(v) {
            if (v == "free")
                var b = "startFreeRoll";
            else
                var b = "startPayRoll";
            _(b).then(function(m) {
                g.rotateTo(m.prize_id),
                $(".popup-prize__title").html(m.prize_name),
                $("#prize-image").attr("src", m.prize_image),
                $("#prize-color").removeClass().addClass("popup-prize__wrap popup-prize__wrap--" + m.prize_color),
                $("#prize-cost").html(m.prize_cost),
                y()
            })
        }
          , _ = function(v, b) {
            return new Promise(function(m, w) {
                $.ajax({
                    url: "/ajax/roulette/" + v,
                    type: "POST",
                    data: b,
                    dataType: "json",
                    success: function(S) {
                        typeof S.detail.info < "u" ? showInfo(S.detail.info) : S.result === "success" ? m(S.detail) : (window.location.href = "/cabinet/index",
                        w(new Error("Request failed")))
                    },
                    error: function(S, T, k) {
                        window.location.href = "/cabinet/index"
                    }
                })
            }
            )
        }
          , y = function() {
            _("getRouletteInfo").then(function(v) {
                $("#current_roulette").html(v.balance_free_roll),
                $("#current_donate").html(v.balance_donate)
            }),
            _("getPrizeHistory").then(function(v) {
                var b = $(".popup__history-items");
                $(".popup__history-items .popup__history-item").remove(),
                v.forEach(m => {
                    b.append(m.html)
                }
                )
            })
        };
        var c = h
          , f = _
          , p = y;
        if (s < 768 || n)
            var o = !1;
        else
            var o = {
                play: function() {
                    var b = new Audio("/assets/sound/click.mp3");
                    b.volume = .2,
                    b.play()
                }
            };
        let d = {
            fps: 100,
            audio: o,
            stopCallback: function({detail: {prize: v}}) {
                var b = new Audio("/assets/sound/win.mp3");
                b.volume = .2,
                b.play(),
                setTimeout(function() {
                    Yt.open("#popup-prize")
                }, 500)
            }
        }
          , g = new Roulette("#server-roulette",d);
        $("#start-free-roulette").click(function(v) {
            v.preventDefault(),
            h("free")
        }),
        $("#start-pay-roulette").click(function(v) {
            v.preventDefault(),
            h("pay")
        }),
        $(document).on("click", "#roulette-pickup-item, #history-pickup-item", function(v) {
            v.preventDefault(),
            Yt.close("#popup-prize"),
            _("pickupItem").then(function(b) {
                y()
            })
        }),
        $(document).on("click", "#roulette-sell-item, #history-sell-item", function(v) {
            v.preventDefault(),
            Yt.close("#popup-prize"),
            _("sellItem").then(function(b) {
                y()
            })
        }),
        y()
    }
    $('form[name="donate-form"]').submit(function(d) {
        d.preventDefault();
        const g = $("#loader");
        g.length && g.addClass("active"),
        g.length && g.removeClass("active"),
        window.paymentsMethodOpen = Date.now(),
        checkDonateSubmit()
    });
    function l({player_id: d, nickname: g, server: h, payments_methods: _}) {
        const y = $("html").attr("lang");
        $("#popup-payments-id").text(`ID: ${d}`),
        $("#popup-payments-name").text(g);
        let v = null
          , b = null;
        switch (h) {
        case "s1":
            b = window[y].servers.s1,
            v = "#ffa048";
            break;
        case "s2":
            b = window[y].servers.s2,
            v = "#00b7e3";
            break;
        case "s3":
            b = window[y].servers.s3,
            v = "#80fd85";
            break;
        case "s4":
            b = window[y].servers.s4,
            v = "#b49bff";
            break;
        case "s5":
            b = window[y].servers.s5,
            v = "#ff8ed8";
            break;
        case "s6":
            b = window[y].servers.s6,
            v = "#8cffff";
            break
        }
        $("#popup-payments-server").text(b),
        $("#popup-payments-server").css("color", v);
        const m = _.reduce( (S, T) => S + `
          <div data-method-name='${T.id}'
              class='popup__method-item'>
              <div class='popup__method-item-icon'>
                  <img src='${T.image}' width="32"
                      height="32" alt='${T.name} icon'>
              </div>
              <div class='block'>
                  <div class='popup__server-item-name'>${T.name}</div>
                  <div class='popup__server-item-addt'>${T.description}</div>
              </div>
          </div>
        `, "");
        $("#popup-payments-items").html(m);
        const w = document.querySelectorAll("[data-method-name]");
        w.length > 0 && w.forEach(function(S) {
            S.addEventListener("click", T => {
                T.preventDefault(),
                w.forEach(E => {
                    E.classList.remove("active")
                }
                ),
                S.classList.add("active");
                const k = S.getAttribute("data-method-name");
                if (Yt.close("#popup-payments-method"),
                k.includes("interkassa")) {
                    if (Date.now() - window.paymentsMethodOpen < 500)
                        return;
                    document.querySelector('[name="donate-form-amount"]').value,
                    _h();
                    return
                }
                window.sendDonateSubmit(S.dataset.methodName)
            }
            )
        })
    }
    function u(d) {
        const g = document.querySelector(".popup__info-top-content");
        if (!g)
            return;
        if (!d.bonus_percent) {
            g.classList.remove("with_bonus");
            return
        }
        const h = document.getElementById("bonus-percent");
        h.innerText = `+${d.bonus_percent}%`;
        const _ = Number($('form[name="donate-form"] [name=donate-form-amount]').val());
        if (isNaN(_)) {
            g.classList.remove("with_bonus");
            return
        }
        g.classList.add("with_bonus");
        let y = Math.floor(_ * d.bonus_percent / 100);
        y < 1 && (y = 1);
        const v = document.getElementById("bonus-amount-plus");
        v.innerText = `+${y.toLocaleString("en-US")}`
    }
    window.checkDonateSubmit = function() {
        var g = $('form[name="donate-form"]').serializeArray();
        g = g.filter(y => y.name !== "donate-form-server");
        const h = $('form[name="donate-form"] [name=donate-form-server]').attr("val");
        g.push({
            name: "donate-form-server",
            value: On[h]
        });
        const _ = $("#loader");
        _.length && _.addClass("active"),
        $.ajax({
            url: "/ajax/donate-check",
            type: "POST",
            data: g,
            dataType: "json",
            success: function(y) {
                if (y.result == "error") {
                    const v = $("#loader");
                    return v.length && v.removeClass("active"),
                    showInfo(y.detail)
                } else
                    y.result == "success" && (u(y),
                    l({
                        ...y.detail,
                        server: $('input[name="donate-form-server"]').attr("val")
                    }),
                    _.length && _.removeClass("active"),
                    Yt.open("#popup-payments-method"))
            }
        })
    }
    ,
    window.sendDonateSubmit = function(g, h=[]) {
        var _ = $('form[name="donate-form"]').serializeArray();
        _ = _.filter(b => b.name !== "donate-form-server");
        const y = $('form[name="donate-form"] [name=donate-form-server]').attr("val");
        _.push({
            name: "donate-form-server",
            value: On[y]
        }),
        _.push({
            name: "donate-form-payment-method",
            value: g
        });
        for (const b of h)
            _.push(b);
        const v = $("#loader");
        v.length && v.addClass("active"),
        $.ajax({
            url: "/ajax/donate",
            type: "POST",
            data: _,
            dataType: "json",
            success: function(b) {
                if (b.result == "error") {
                    const m = $("#loader");
                    return m.length && m.removeClass("active"),
                    showInfo(b.detail)
                } else
                    b.result == "success" && (setCoockie("server", y),
                    setCoockie("player_id", b.player_id),
                    setCoockie("payment_method", g),
                    b.form_url && !b.html ? window.location.href = b.form_url : gtag("event", "begin_checkout", {
                        event_callback: function() {
                            $("#succesfull_form").append(b.html),
                            $("#succesfull_form form").submit()
                        }
                    }))
            }
        }),
        $('input[name="donate-form-token"]').val(Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111)
    }
    ,
    window.setCoockie = function(g, h) {
        $.cookie(g, h, {
            expires: 365,
            secure: !0
        })
    }
});