import { reactive as Ne, ref as M, onMounted as Ue, onUnmounted as tr, onActivated as Bi, onDeactivated as Di, getCurrentInstance as Ba, provide as ml, computed as F, inject as pl, nextTick as Me, createApp as Qs, onBeforeUnmount as Ai, h as hl, isVNode as St, watch as te, onBeforeMount as xs, defineComponent as _, createVNode as re, Teleport as Za, Transition as Re, withDirectives as $e, vShow as Ja, mergeProps as Ee, openBlock as g, createBlock as pe, resolveDynamicComponent as Da, normalizeClass as c, normalizeStyle as X, resolveComponent as ie, resolveDirective as qe, withCtx as ce, createElementVNode as D, renderSlot as G, toDisplayString as ne, createElementBlock as E, Fragment as Ve, renderList as Be, createCommentVNode as Q, onUpdated as Li, createTextVNode as ge, pushScopeId as $r, popScopeId as Tr, withModifiers as Dn, normalizeProps as gl, guardReactiveProps as _s, vModelText as eu, toRefs as nu, withKeys as ao, toRaw as to, TransitionGroup as ru, Comment as au } from "vue";
var yl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(yl);
const ln = Ne(yl), Ke = (e) => typeof e == "string", Xt = (e) => typeof e == "boolean", Ge = (e) => typeof e == "number", zi = (e) => Object.prototype.toString.call(e) === "[object Object]", tu = (e) => typeof e == "object" && e !== null, ye = (e) => Array.isArray(e), iu = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Gn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ke(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Xt(e) ? Number(e) : e, Ct = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Ri = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Ui = () => typeof window < "u", io = (e) => [...new Set(e)], ou = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), lu = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var oo = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), lo = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), su = (e) => {
  var n = [];
  return {
    cache: n,
    has(r) {
      return this.cache.includes(r);
    },
    add(r) {
      this.has(r) || (this.cache.length === e && n.shift(), this.cache.push(r));
    },
    remove(r) {
      this.has(r) && Ct(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Zt = (e) => e, so = (e) => Math.pow(e, 3), bl = (e) => e < 0.5 ? so(e * 2) / 2 : 1 - so((1 - e) * 2) / 2, kt = (e, n) => e == null ? n : e, wl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, yr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function uo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function uu(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        uo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        uo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function du(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function vo(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function $t(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Yi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function vu(e) {
  return Jt.apply(this, arguments);
}
function Jt() {
  return Jt = uu(function* (e) {
    yield Vn();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: i,
      innerHeight: o
    } = window, l = a <= i && t >= 0, s = n <= o && r >= 0;
    return l && s;
  }), Jt.apply(this, arguments);
}
function Yt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Or(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = window.getComputedStyle(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function fu(e) {
  for (var n = [], r = e; r !== window; )
    r = Or(r), n.push(r);
  return n;
}
var Sl = (e) => Ke(e) && e.endsWith("rem"), cu = (e) => Ke(e) && e.endsWith("px") || Ge(e), mu = (e) => Ke(e) && e.endsWith("%"), Cl = (e) => Ke(e) && e.endsWith("vw"), kl = (e) => Ke(e) && e.endsWith("vh"), pu = (e) => Ke(e) && e.startsWith("calc("), hu = (e) => Ke(e) && e.startsWith("var("), De = (e) => {
  if (Ge(e))
    return e;
  if (cu(e))
    return +e.replace("px", "");
  if (Cl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (kl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Sl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ke(e) ? L(e) : 0;
}, we = (e) => {
  if (e != null)
    return mu(e) || Cl(e) || kl(e) || Sl(e) || pu(e) || hu(e) ? e : De(e) + "px";
}, Je = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function On(e) {
  var n = wl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function gu(e) {
  var n = wl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Tt(e) {
  On(() => {
    On(e);
  });
}
function Vn() {
  return new Promise((e) => {
    On(() => {
      On(e);
    });
  });
}
function Wa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = $t(e), s = Yi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - o) / t;
      if (v < 1) {
        var f = l + (r - l) * i(v), m = s + (a - s) * i(v);
        e.scrollTo(m, f), On(d);
      } else
        e.scrollTo(a, r), u();
    };
    On(d);
  });
}
function $l(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + ou(a);
    return n[i] = t, n;
  }, {});
}
function yu() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var bu = ["collect", "clear"];
function fo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function co(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        fo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        fo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function wu(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ft.apply(this, arguments);
}
function en(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Su(e) {
  var n = Qs(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Aa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => hl(e, ft({}, n, r));
    }
  }, {
    unmount: t
  } = Su(a);
  return {
    unmountInstance: t
  };
}
function Cu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      St(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function pn(e) {
  var n = Ne([]), r = Ba(), a = () => {
    var l = Cu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    Ct(n, l);
  };
  ml(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = F(() => n.length);
  return {
    length: o
  };
}
function hn(e) {
  if (!Tl(e))
    return {
      index: null
    };
  var n = pl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Ba();
  Ue(() => {
    Me().then(() => r(i));
  }), tr(() => {
    Me().then(() => a(i));
  });
  var o = F(() => t.indexOf(i));
  return {
    index: o
  };
}
function sn(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    Ct(n, i);
  }, t = (i) => {
    ml(e, ft({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function un(e) {
  if (!Tl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = pl(e), {
    collect: r,
    clear: a
  } = n, t = wu(n, bu), i = (o) => {
    Ue(() => r(o)), Ai(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function Tl(e) {
  var n = Ba();
  return e in n.provides;
}
function gn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = co(function* (i, o, l) {
      if (!ye(i) || !i.length)
        return !0;
      var s = yield Promise.all(i.map((u) => u(o, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(o, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = co(function* (i, o, l, s, u) {
      i.includes(o) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(o, l, s, u, d) {
      return t.apply(this, arguments);
    };
  }();
  return {
    errorMessage: e,
    validate: n,
    resetValidation: r,
    validateWithTrigger: a
  };
}
function ku(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), tr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Fi() {
  var e = M(!1);
  return Bi(() => {
    e.value = !1;
  }), Di(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var n = "var", r = n + "-" + e, a = (i) => i ? i[0] === "$" ? i.replace("$", n) : i.startsWith("--") ? "" + r + i : r + "__" + i : r, t = function() {
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return o.map((s) => {
      if (ye(s)) {
        var [u, d, v = null] = s;
        return u ? d : v;
      }
      return s;
    });
  };
  return {
    n: a,
    classes: t
  };
}
function V(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (ye(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function Y(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ct.apply(this, arguments);
}
var {
  n: Ol
} = ee("ripple"), mo = 250;
function $u(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Tu(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: i
  } = e, o = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2)) / 2, l = o * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - o * 2) / 2, v = (i - o * 2) / 2, f = s - o, m = u - o;
  return {
    x: f,
    y: m,
    centerX: d,
    centerY: v,
    size: l
  };
}
function Vl(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: i,
        centerY: o,
        size: l
      } = Tu(this, e), s = document.createElement("div");
      s.classList.add(Ol()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), $u(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function Qt() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Ol());
    if (!!r.length) {
      var a = r[r.length - 1], t = mo - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, mo);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function El() {
  var e = this._ripple;
  !yu() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Ou(e, n) {
  var r, a, t;
  e._ripple = ct({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : ln.touchmoveForbid,
    removeRipple: Qt.bind(e)
  }), e.addEventListener("touchstart", Vl, {
    passive: !0
  }), e.addEventListener("touchmove", El, {
    passive: !0
  }), e.addEventListener("dragstart", Qt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Vu(e) {
  e.removeEventListener("touchstart", Vl), e.removeEventListener("touchmove", El), e.removeEventListener("dragstart", Qt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Eu(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : ln.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = ct({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Fe = {
  mounted: Ou,
  unmounted: Vu,
  updated: Eu,
  install(e) {
    e.directive("ripple", this);
  }
};
function Mu(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Qa = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Mu
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOverlay: Y(),
  "onUpdate:show": Y(),
  onRouteChange: Y()
};
function Ml() {
  var e = Object.keys(ln.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function et(e) {
  ln.locks[e] = 1, Ml();
}
function nt(e) {
  delete ln.locks[e], Ml();
}
function Ot(e, n) {
  var {
    uid: r
  } = Ba();
  n && te(n, (a) => {
    a === !1 ? nt(r) : a === !0 && e() === !0 && et(r);
  }), te(e, (a) => {
    n && n() === !1 || (a === !0 ? et(r) : nt(r));
  }), xs(() => {
    n && n() === !1 || e() === !0 && et(r);
  }), tr(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), Bi(() => {
    n && n() === !1 || e() === !0 && et(r);
  }), Di(() => {
    n && n() === !1 || e() === !0 && nt(r);
  });
}
function xa(e, n) {
  var r = M(ln.zIndex);
  return te(e, (a) => {
    a && (ln.zIndex += n, r.value = ln.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xt.apply(this, arguments);
}
function Pu(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  n: Pn,
  classes: Ft
} = ee("popup");
const Cn = _({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Qa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = xa(() => e.show, 3), {
      disabled: i
    } = Fi(), o = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      V(v), d && V(e["onUpdate:show"], !1);
    };
    Ot(() => e.show, () => e.lockScroll), te(() => e.show, (d) => {
      V(d ? e.onOpen : e.onClose);
    }), ku(() => V(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: Ft(Pn("overlay"), d),
        style: xt({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => re("div", Ee({
      class: Ft(Pn("content"), Pn("--" + e.position), [e.defaultStyle, Pn("--content-background-color")], [e.defaultStyle, Pn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [V(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: p,
        position: w
      } = e;
      return re(Re, {
        name: Pn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [$e(re("div", {
          class: Ft(Pn("$--box"), Pn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && l(), re(Re, {
          name: p || Pn("$-pop-" + w)
        }, {
          default: () => [f && s()]
        })]), [[Ja, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(Za, {
          to: d,
          disabled: i.value
        }, Pu(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
var Pl = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  onClick: Y()
};
function po(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Iu(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        po(i, a, t, o, l, "next", s);
      }
      function l(s) {
        po(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Nu,
  classes: Bu
} = ee("icon");
function Du(e, n) {
  return g(), pe(
    Da(e.isURL(e.name) ? "img" : "i"),
    {
      class: c(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: X({
        color: e.color,
        transition: "transform " + e.toNumber(e.transition) + "ms",
        width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        fontSize: e.toSizeUnit(e.size)
      }),
      src: e.isURL(e.name) ? e.nextName : null,
      onClick: e.onClick
    },
    null,
    8,
    ["class", "style", "src", "onClick"]
  );
}
const Oe = _({
  render: Du,
  name: "VarIcon",
  props: Pl,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = Iu(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || L(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
          o != null && (n.value = i), r.value = !1;
        }, L(l));
      });
      return function(o, l) {
        return t.apply(this, arguments);
      };
    }();
    return te(() => e.name, a, {
      immediate: !0
    }), {
      n: Nu,
      classes: Bu,
      nextName: n,
      shrinking: r,
      isURL: iu,
      toNumber: L,
      toSizeUnit: we
    };
  }
});
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _t.apply(this, arguments);
}
var Au = _t({
  show: {
    type: Boolean,
    default: !1
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: Y(),
  "onUpdate:show": Y()
}, en(Qa, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
]));
const Il = {
  dialogTitle: "\u63D0\u793A",
  dialogConfirmButtonText: "\u786E\u8BA4",
  dialogCancelButtonText: "\u53D6\u6D88",
  actionSheetTitle: "\u8BF7\u9009\u62E9",
  listLoadingText: "\u52A0\u8F7D\u4E2D",
  listFinishedText: "\u6CA1\u6709\u66F4\u591A\u4E86",
  listErrorText: "\u52A0\u8F7D\u5931\u8D25",
  pickerTitle: "\u8BF7\u9009\u62E9",
  pickerConfirmButtonText: "\u786E\u8BA4",
  pickerCancelButtonText: "\u53D6\u6D88",
  datePickerMonthDict: {
    "01": {
      name: "\u4E00\u6708",
      abbr: "\u4E00\u6708"
    },
    "02": {
      name: "\u4E8C\u6708",
      abbr: "\u4E8C\u6708"
    },
    "03": {
      name: "\u4E09\u6708",
      abbr: "\u4E09\u6708"
    },
    "04": {
      name: "\u56DB\u6708",
      abbr: "\u56DB\u6708"
    },
    "05": {
      name: "\u4E94\u6708",
      abbr: "\u4E94\u6708"
    },
    "06": {
      name: "\u516D\u6708",
      abbr: "\u516D\u6708"
    },
    "07": {
      name: "\u4E03\u6708",
      abbr: "\u4E03\u6708"
    },
    "08": {
      name: "\u516B\u6708",
      abbr: "\u516B\u6708"
    },
    "09": {
      name: "\u4E5D\u6708",
      abbr: "\u4E5D\u6708"
    },
    10: {
      name: "\u5341\u6708",
      abbr: "\u5341\u6708"
    },
    11: {
      name: "\u5341\u4E00\u6708",
      abbr: "\u5341\u4E00\u6708"
    },
    12: {
      name: "\u5341\u4E8C\u6708",
      abbr: "\u5341\u4E8C\u6708"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "\u661F\u671F\u65E5",
      abbr: "\u65E5"
    },
    1: {
      name: "\u661F\u671F\u4E00",
      abbr: "\u4E00"
    },
    2: {
      name: "\u661F\u671F\u4E8C",
      abbr: "\u4E8C"
    },
    3: {
      name: "\u661F\u671F\u4E09",
      abbr: "\u4E09"
    },
    4: {
      name: "\u661F\u671F\u56DB",
      abbr: "\u56DB"
    },
    5: {
      name: "\u661F\u671F\u4E94",
      abbr: "\u4E94"
    },
    6: {
      name: "\u661F\u671F\u516D",
      abbr: "\u516D"
    }
  },
  datePickerSelected: "\u4E2A\u88AB\u9009\u62E9",
  paginationItem: "\u6761",
  paginationPage: "\u9875",
  paginationJump: "\u524D\u5F80"
}, Lu = {
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  actionSheetTitle: "Select One",
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ei.apply(this, arguments);
}
function Nl() {
  var e = {}, n = M({}), r = (i, o) => {
    o.lang = i, e[i] = o;
  }, a = (i) => {
    if (!e[i])
      return console.warn("The " + i + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[i];
  }, t = (i, o) => {
    if (!e[i]) {
      console.warn("The " + i + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[i] = ei({}, e[i], o), a(i);
  };
  return {
    packs: e,
    pack: n,
    add: r,
    use: a,
    merge: t
  };
}
var {
  packs: zu,
  pack: We,
  add: Bl,
  use: Dl,
  merge: Ru
} = Nl();
Bl("zh-CN", Il);
Dl("zh-CN");
const ni = {
  zhCN: Il,
  enUS: Lu,
  packs: zu,
  pack: We,
  add: Bl,
  use: Dl,
  merge: Ru,
  useLocale: Nl
};
var {
  n: Uu,
  classes: Yu
} = ee("action-sheet"), Fu = ["onClick"];
function Wu(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = qe("ripple");
  return g(), pe(
    a,
    Ee({
      class: e.n("popup-radius"),
      position: "bottom",
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.popupShow
    }, {
      "onUpdate:show": e.handlePopupUpdateShow
    }, {
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    }),
    {
      default: ce(() => [D(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [G(e.$slots, "title", {}, () => [D(
          "div",
          {
            class: c(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), G(e.$slots, "actions", {}, () => [(g(!0), E(
          Ve,
          null,
          Be(e.actions, (i) => $e((g(), E(
            "div",
            {
              class: c(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: X({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (g(), pe(
              r,
              {
                key: 0,
                class: c(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: i.icon,
                size: i.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : Q("v-if", !0), D(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ne(i.name),
              3
            )],
            14,
            Fu
          )), [[t, {
            disabled: i.disabled
          }]])),
          128
        ))])],
        16
      )]),
      _: 3
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const sr = _({
  render: Wu,
  name: "VarActionSheet",
  directives: {
    Ripple: Fe
  },
  components: {
    VarPopup: Cn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Au,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        V(o, t), i && V(e["onUpdate:show"], !1);
      }
    }, a = (t) => V(e["onUpdate:show"], t);
    return te(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Uu,
      classes: Yu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: We,
      dt: kt,
      handleSelect: r
    };
  }
});
var Wn;
function br(e) {
  return Ui() ? new Promise((n) => {
    br.close();
    var r = Ne(e);
    r.teleport = "body", Wn = r;
    var {
      unmountInstance: a
    } = Aa(sr, r, {
      onSelect: (t) => {
        V(r.onSelect, t), n(t);
      },
      onClose: () => {
        V(r.onClose), n("close");
      },
      onClosed: () => {
        V(r.onClosed), a(), Wn === r && (Wn = null);
      },
      onRouteChange: () => {
        a(), Wn === r && (Wn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
br.Component = sr;
sr.install = function(e) {
  e.component(sr.name, sr);
};
br.close = () => {
  if (Wn != null) {
    var e = Wn;
    Wn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
br.install = function(e) {
  e.component(sr.name, sr);
};
function Hu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var ju = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: "left",
    validator: Hu
  },
  elevation: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  }
}, {
  n: Gu,
  classes: qu
} = ee("app-bar");
function Ku(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: X({
        background: e.color,
        color: e.textColor
      })
    },
    [D(
      "div",
      {
        class: c(e.n("left"))
      },
      [G(e.$slots, "left"), e.titlePosition === "left" ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.n("title")),
          style: X({
            paddingLeft: e.paddingLeft
          })
        },
        [G(e.$slots, "default", {}, () => [ge(
          ne(e.title),
          1
        )])],
        6
      )) : Q("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      [G(e.$slots, "default", {}, () => [ge(
        ne(e.title),
        1
      )])],
      2
    )) : Q("v-if", !0), D(
      "div",
      {
        class: c(e.n("right"))
      },
      [e.titlePosition === "right" ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.n("title")),
          style: X({
            paddingRight: e.paddingRight
          })
        },
        [G(e.$slots, "default", {}, () => [ge(
          ne(e.title),
          1
        )])],
        6
      )) : Q("v-if", !0), G(e.$slots, "right")],
      2
    )],
    6
  );
}
const Ar = _({
  render: Ku,
  name: "VarAppBar",
  props: ju,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(i), Li(i), {
      n: Gu,
      classes: qu,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
function Xu(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Zu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var qn = {
  type: {
    type: String,
    default: "circle",
    validator: Xu
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Zu
  },
  color: {
    type: String
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, {
  n: Ju,
  classes: Qu
} = ee("loading"), xu = (e) => ($r(""), e = e(), Tr(), e), _u = /* @__PURE__ */ xu(() => /* @__PURE__ */ D(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ D("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
)), ed = [_u];
function nd(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [G(e.$slots, "default"), e.loading ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.isShow ? (g(), E(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [D(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: X({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          ed,
          6
        )],
        2
      )) : Q("v-if", !0), (g(!0), E(
        Ve,
        null,
        Be(e.loadingTypeDict, (r, a) => (g(), E(
          Ve,
          {
            key: a
          },
          [e.type === a ? (g(), E(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(g(!0), E(
              Ve,
              null,
              Be(r, (t) => (g(), E(
                "div",
                {
                  key: t + a,
                  style: X({
                    backgroundColor: e.color
                  }),
                  class: c(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
                },
                null,
                6
              ))),
              128
            ))],
            2
          )) : Q("v-if", !0)],
          64
        ))),
        128
      )), e.$slots.description || e.description ? (g(), E(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: X({
            color: e.color
          })
        },
        [G(e.$slots, "description", {}, () => [ge(
          ne(e.description),
          1
        )])],
        6
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const Tn = _({
  render: nd,
  name: "VarLoading",
  props: qn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = F(() => V(r.default) ? e.loading : !0);
    return {
      n: Ju,
      classes: Qu,
      multiplySizeUnit: Je,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Tn.install = function(e) {
  e.component(Tn.name, Tn);
};
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ri.apply(this, arguments);
}
function rd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ad(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var td = {
  type: {
    type: String,
    default: "default",
    validator: rd
  },
  size: {
    type: String,
    default: "normal",
    validator: ad
  },
  loading: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  outline: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String]
  },
  loadingType: en(qn, "type"),
  loadingSize: en(qn, "size"),
  loadingColor: ri({}, en(qn, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, {
  n: id,
  classes: od
} = ee("button"), ld = ["disabled"];
function sd(e, n) {
  var r = ie("var-loading"), a = qe("ripple");
  return $e((g(), E(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: X({
        color: e.textColor,
        background: e.color
      }),
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (g(), pe(
      r,
      {
        key: 0,
        class: c(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : Q("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [G(e.$slots, "default")],
      2
    )],
    46,
    ld
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const rn = _({
  render: sd,
  name: "VarButton",
  components: {
    VarLoading: Tn
  },
  directives: {
    Ripple: Fe
  },
  props: td,
  setup(e) {
    var n = M(!1), r = (i) => {
      e.autoLoading && (n.value = !0, i = ye(i) ? i : [i], Promise.all(i).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, a = (i) => {
      var {
        loading: o,
        disabled: l,
        onClick: s
      } = e;
      !s || o || l || n.value || r(V(s, i));
    }, t = (i) => {
      var {
        loading: o,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || o || l || n.value || r(V(s, i));
    };
    return {
      n: id,
      classes: od,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
rn.install = function(e) {
  e.component(rn.name, rn);
};
var ud = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: Y()
}, {
  n: dd,
  classes: vd
} = ee("back-top");
function fd(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return g(), pe(
    Za,
    {
      to: "body",
      disabled: e.disabled
    },
    [D(
      "div",
      Ee({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Dn(function() {
          return e.click && e.click(...arguments);
        }, ["stop"]))
      }),
      [G(e.$slots, "default", {}, () => [re(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ce(() => [re(r, {
          name: "chevron-up"
        })]),
        _: 1
      })])],
      16
    )],
    8,
    ["disabled"]
  );
}
const Lr = _({
  render: fd,
  name: "VarBackTop",
  components: {
    VarButton: rn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: ud,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, i = (u) => {
      V(e.onClick, u);
      var d = Yi(t);
      Wa(t, {
        left: d,
        duration: e.duration,
        animation: bl
      });
    }, o = () => {
      n.value = $t(t) >= De(e.visibilityHeight);
    }, l = Ri(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (Ke(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (tu(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Ue(() => {
      t = e.target ? s() : Or(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Ai(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: dd,
      classes: vd,
      click: i
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
function cd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function md(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var pd = {
  type: {
    type: String,
    default: "default",
    validator: cd
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  dot: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: {
    type: [String, Number]
  },
  color: {
    type: String
  },
  position: {
    type: String,
    default: "right-top",
    validator: md
  },
  icon: {
    type: String
  }
}, {
  n: Ln,
  classes: hd
} = ee("badge"), gd = {
  key: 1
};
function yd(e, n) {
  var r = ie("var-icon");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [re(
      Re,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ce(() => [$e(D(
          "span",
          Ee(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (g(), pe(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (g(), E(
            "span",
            gd,
            ne(e.values),
            1
          ))],
          16
        ), [[Ja, !e.hidden]])]),
        _: 1
      },
      8,
      ["name"]
    ), G(e.$slots, "default")],
    2
  );
}
const ur = _({
  render: yd,
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: pd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = F(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Ln("position") + " " + Ln("--" + l), v = s ? Ln("dot") : null, f = i(), m = u ? Ln("icon") : null;
      return [Ln("--" + o), d, v, f, m];
    }), t = F(() => {
      var {
        dot: o,
        value: l,
        maxValue: s
      } = e;
      return o ? "" : l !== void 0 && s !== void 0 && L(l) > s ? s + "+" : l;
    }), i = () => {
      var {
        position: o,
        dot: l
      } = e;
      if (l && o.includes("right"))
        return Ln("dot--right");
      if (l && o.includes("left"))
        return Ln("dot--left");
    };
    return {
      n: Ln,
      classes: hd,
      values: t,
      contentClass: a
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
var bd = {
  active: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: !1
  },
  border: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onChange: Y(),
  "onUpdate:active": Y(),
  onBeforeChange: Y(),
  onFabClick: Y(),
  fabProps: {
    type: Object
  }
}, Al = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Ll = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function wd() {
  var {
    childProviders: e,
    bindChildren: n
  } = sn(Al), {
    length: r
  } = pn(Ll);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
var {
  n: Sd,
  classes: Cd
} = ee("bottom-navigation"), {
  n: Vt
} = ee("bottom-navigation-item"), ho = Vt("--right-half-space"), go = Vt("--left-half-space"), yo = Vt("--right-space"), kd = {
  type: "primary"
};
function $d(e, n) {
  var r = ie("var-button");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: X("z-index:" + e.zIndex)
    },
    [G(e.$slots, "default"), e.$slots.fab ? (g(), pe(
      r,
      Ee({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ce(() => [G(e.$slots, "fab")]),
        _: 3
      },
      16,
      ["class", "onClick"]
    )) : Q("v-if", !0)],
    6
  );
}
const zr = _({
  render: $d,
  name: "VarBottomNavigation",
  components: {
    VarButton: rn
  },
  props: bd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = F(() => e.active), i = F(() => e.activeColor), o = F(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = wd(), v = () => {
      s.value === 0 || f() || m() || p();
    }, f = () => u.find(($) => {
      var {
        name: B
      } = $;
      return t.value === B.value;
    }), m = () => u.find(($) => {
      var {
        index: B
      } = $;
      return t.value === B.value;
    }), p = () => {
      !Ge(t.value) || (t.value < 0 ? V(e["onUpdate:active"], 0) : t.value > s.value - 1 && V(e["onUpdate:active"], s.value - 1));
    }, w = ($) => {
      t.value !== $ && (e.onBeforeChange ? b($) : T($));
    }, b = ($) => {
      var B = V(e.onBeforeChange, $);
      B = ye(B) ? B : [B], Promise.all(B).then((I) => {
        I.some((y) => !y) || T($);
      });
    }, T = ($) => {
      V(e["onUpdate:active"], $), V(e.onChange, $);
    }, k = () => {
      var $ = P();
      $.forEach((B) => {
        B.classList.remove(ho, go, yo);
      });
    }, C = ($) => {
      var B = P(), I = B.length, y = $ % 2 === 0;
      B.forEach((O, R) => {
        S(y, O, R, I);
      });
    }, S = ($, B, I, y) => {
      var O = I === y - 1;
      if (!$ && O) {
        B.classList.add(yo);
        return;
      }
      var R = I === y / 2 - 1, W = I === y / 2;
      R ? B.classList.add(ho) : W && B.classList.add(go);
    }, P = () => Array.from(a.value.querySelectorAll("." + Vt())), h = () => {
      V(e.onFabClick);
    }, A = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: w
    };
    return d(A), te(() => s.value, v), te(() => e.fabProps, ($) => {
      l.value = ai({}, kd, $);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      !r.fab || C(s.value);
    }), Li(() => {
      k(), r.fab && C(s.value);
    }), {
      n: Sd,
      classes: Cd,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: h,
      fabProps: l
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
var Td = {
  name: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: Y()
};
function Od() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Al), {
    index: r
  } = hn(Ll);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Vd,
  classes: Ed
} = ee("bottom-navigation-item"), Md = {
  type: "danger",
  dot: !0
};
function Pd(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = qe("ripple");
  return $e((g(), E(
    "button",
    {
      class: c(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: X({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (g(), pe(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: c(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : Q("v-if", !0), G(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (g(), pe(
      a,
      Ee({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : Q("v-if", !0), D(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? Q("v-if", !0) : (g(), E(
        Ve,
        {
          key: 0
        },
        [ge(
          ne(e.label),
          1
        )],
        2112
      )), G(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const Rr = _({
  render: Pd,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ur,
    VarIcon: Oe
  },
  directives: {
    Ripple: Fe
  },
  props: Td,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = Od(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var m, p = (m = n.value) != null ? m : t.value;
      V(e.onClick, p), V(i.onToggle, p);
    };
    return o(d), te(() => r.value, (m) => {
      a.value = m === !0 ? Md : r.value;
    }, {
      immediate: !0
    }), {
      n: Vd,
      classes: Ed,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var Id = {
  separator: {
    type: String
  },
  onClick: Y()
}, zl = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), Rl = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function Nd() {
  var {
    childProviders: e,
    bindChildren: n
  } = sn(zl), {
    length: r
  } = pn(Rl);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Bd() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(zl), {
    index: r
  } = hn(Rl);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Dd,
  classes: Ad
} = ee("breadcrumb");
function Ld(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [G(e.$slots, "default")],
      2
    ), e.isLast ? Q("v-if", !0) : G(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [D(
        "div",
        {
          class: c(e.n("separator"))
        },
        ne((r = e.separator) != null ? r : e.parentSeparator),
        3
      )];
    })],
    2
  );
}
const Ur = _({
  render: Ld,
  name: "VarBreadcrumb",
  props: Id,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Bd(), t = F(() => n.value === r.length.value - 1), i = F(() => r.separator.value), o = (l) => {
      t.value || V(e.onClick, l);
    };
    return a(null), {
      n: Dd,
      classes: Ad,
      isLast: t,
      parentSeparator: i,
      handleClick: o
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var zd = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Rd
} = ee("breadcrumbs");
function Ud(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Yr = _({
  render: Ud,
  name: "VarBreadcrumbs",
  props: zd,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Nd(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Rd
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
function Yd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Fd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Yd,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  outline: {
    type: Boolean,
    default: !1
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  "onUpdate:floating": Y()
};
function bo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function wo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        bo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        bo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Wd,
  classes: Hd
} = ee("card"), jd = 500, Gd = ["src", "alt"];
function qd(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = qe("ripple");
  return $e((g(), E(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: X({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [D(
      "div",
      {
        ref: "cardFloater",
        class: c(e.n("floater")),
        style: X({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [G(e.$slots, "image", {}, () => [e.src ? (g(), E(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: X({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        Gd
      )) : Q("v-if", !0)]), D(
        "div",
        {
          class: c(e.n("container"))
        },
        [G(e.$slots, "title", {}, () => [e.title ? (g(), E(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ne(e.title),
          3
        )) : Q("v-if", !0)]), G(e.$slots, "subtitle", {}, () => [e.subtitle ? (g(), E(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
        )) : Q("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (g(), E(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ne(e.description),
          3
        )) : Q("v-if", !0)]), e.$slots.extra ? (g(), E(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [G(e.$slots, "extra")],
          2
        )) : Q("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (g(), E(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: X({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [G(e.$slots, "floating-content")],
          6
        )) : Q("v-if", !0)],
        2
      ), e.showFloatingButtons ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: X({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [G(e.$slots, "close-button", {}, () => [re(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Dn(e.close, ["stop"])
          },
          {
            default: ce(() => [re(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: c(e.n("close-button-icon"))
              },
              null,
              8,
              ["class"]
            )]),
            _: 1
          },
          8,
          ["class", "onClick"]
        )])],
        6
      )) : Q("v-if", !0)],
      6
    ), D(
      "div",
      {
        class: c(e.n("holder")),
        style: X({
          width: e.holderWidth,
          height: e.holderHeight
        })
      },
      null,
      6
    )],
    6
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
const Fr = _({
  render: qd,
  name: "VarCard",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarButton: rn
  },
  props: Fd,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), i = M("100%"), o = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = F(() => e.layout === "row"), p = M(!1), w = M(!1), {
      zIndex: b
    } = xa(() => e.floating, 1);
    Ot(() => e.floating, () => !m.value);
    var T = "auto", k = "auto", C = null, S = M(null), P = /* @__PURE__ */ function() {
      var $ = wo(function* () {
        clearTimeout(S.value), clearTimeout(C), S.value = null, S.value = setTimeout(/* @__PURE__ */ wo(function* () {
          var {
            width: B,
            height: I,
            left: y,
            top: O
          } = n.value.getBoundingClientRect();
          a.value = we(B), t.value = we(I), i.value = a.value, o.value = t.value, l.value = we(O), s.value = we(y), u.value = "fixed", T = l.value, k = s.value, p.value = !0, yield Vn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", w.value = !0;
        }), e.ripple ? jd : 0);
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), h = () => {
      clearTimeout(C), clearTimeout(S.value), S.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = k, v.value = "0px", f.value = "0", p.value = !1, C = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", k = "auto", d.value = "hidden", u.value = void 0, w.value = !1;
      }, e.floatingDuration);
    }, A = () => {
      V(e["onUpdate:floating"], !1);
    };
    return te(() => e.floating, ($) => {
      m.value || Me(() => {
        $ ? P() : h();
      });
    }, {
      immediate: !0
    }), {
      n: Wd,
      classes: Hd,
      toSizeUnit: we,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: S,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: b,
      isRow: m,
      close: A,
      showFloatingButtons: p,
      floated: w
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var Kd = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  description: {
    type: String
  },
  border: {
    type: Boolean,
    default: !1
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descriptionClass: {
    type: String
  },
  extraClass: {
    type: String
  }
}, {
  n: Xd,
  classes: Zd
} = ee("cell");
function Jd(e, n) {
  var r = ie("var-icon");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [G(e.$slots, "icon", {}, () => [re(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : Q("v-if", !0), D(
      "div",
      {
        class: c(e.n("content"))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [G(e.$slots, "default", {}, () => [ge(
          ne(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [G(e.$slots, "description", {}, () => [ge(
          ne(e.description),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      2
    ), e.$slots.extra ? (g(), E(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [G(e.$slots, "extra")],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const dr = _({
  render: Jd,
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  props: Kd,
  setup() {
    return {
      n: Xd,
      classes: Zd
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
var Qd = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: xd
} = ee("form-details"), _d = {
  key: 0
}, ev = {
  key: 0
};
function nv(e, n) {
  return g(), pe(
    Re,
    {
      name: e.n()
    },
    {
      default: ce(() => [e.errorMessage || e.extraMessage ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.n())
        },
        [D(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [re(
            Re,
            {
              name: e.n("message")
            },
            {
              default: ce(() => [e.errorMessage ? (g(), E(
                "div",
                _d,
                ne(e.errorMessage),
                1
              )) : Q("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        ), D(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [re(
            Re,
            {
              name: e.n("message")
            },
            {
              default: ce(() => [e.extraMessage ? (g(), E(
                "div",
                ev,
                ne(e.extraMessage),
                1
              )) : Q("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        )],
        2
      )) : Q("v-if", !0)]),
      _: 1
    },
    8,
    ["name"]
  );
}
const je = _({
  render: nv,
  name: "VarFormDetails",
  props: Qd,
  setup: () => ({
    n: xd
  })
});
je.install = function(e) {
  e.component(je.name, je);
};
var rv = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, Ul = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Yl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function av() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Ul), {
    length: r
  } = pn(Yl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function tv() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(Ul), {
    index: r
  } = hn(Yl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ti.apply(this, arguments);
}
var Fl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function yn() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(Fl), r = Ba(), a = e ? (t) => {
    e(ti({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function iv() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Fl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: ov,
  classes: lv
} = ee("checkbox");
function sv(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = qe("ripple");
  return g(), E(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [$e((g(), E(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? G(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : G(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [re(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), D(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [G(e.$slots, "default")],
        2
      )],
      2
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const vr = _({
  render: sv,
  name: "VarCheckbox",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  props: rv,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = M(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = tv(), {
      form: l,
      bindForm: s
    } = yn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = gn(), m = (h) => {
      Me(() => {
        var {
          validateTrigger: A,
          rules: $,
          modelValue: B
        } = e;
        d(A, h, $, B);
      });
    }, p = (h) => {
      n.value = h;
      var {
        checkedValue: A,
        onChange: $
      } = e;
      V(e["onUpdate:modelValue"], n.value), V($, n.value), m("onChange"), h === A ? i == null || i.onChecked(A) : i == null || i.onUnchecked(A);
    }, w = (h) => {
      var {
        disabled: A,
        readonly: $,
        checkedValue: B,
        uncheckedValue: I,
        onClick: y
      } = e;
      if (!(l != null && l.disabled.value || A) && (V(y, h), !(l != null && l.readonly.value || $))) {
        t.value = !0;
        var O = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && O || p(r.value ? I : B);
      }
    }, b = (h) => {
      var {
        checkedValue: A,
        uncheckedValue: $
      } = e;
      n.value = h.includes(A) ? A : $;
    }, T = () => {
      t.value = !1;
    }, k = () => {
      V(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, C = (h) => {
      var {
        checkedValue: A,
        uncheckedValue: $
      } = e, B = ![A, $].includes(h);
      B && (h = r.value ? $ : A), p(h);
    }, S = () => v(e.rules, e.modelValue);
    te(() => e.modelValue, (h) => {
      n.value = h;
    }, {
      immediate: !0
    });
    var P = {
      checkedValue: a,
      checked: r,
      sync: b,
      validate: S,
      resetValidation: f,
      reset: k,
      resetWithAnimation: T
    };
    return V(o, P), V(s, P), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: ov,
      classes: lv,
      handleClick: w,
      toggle: C,
      reset: k,
      validate: S,
      resetValidation: f
    };
  }
});
vr.install = function(e) {
  e.component(vr.name, vr);
};
function uv(e) {
  return ["horizontal", "vertical"].includes(e);
}
var dv = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: uv
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: vv,
  classes: fv
} = ee("checkbox-group");
function cv(e, n) {
  var r = ie("var-form-details");
  return g(), E(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [G(e.$slots, "default")],
      2
    ), re(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Wr = _({
  render: cv,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: dv,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = av(), {
      bindForm: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = F(() => l.value), f = (A) => {
      Me(() => {
        var {
          validateTrigger: $,
          rules: B,
          modelValue: I
        } = e;
        s($, A, B, I);
      });
    }, m = (A) => {
      V(e["onUpdate:modelValue"], A), V(e.onChange, A), f("onChange");
    }, p = (A) => {
      var {
        modelValue: $
      } = e;
      $.includes(A) || m([...$, A]);
    }, w = (A) => {
      var {
        modelValue: $
      } = e;
      !$.includes(A) || m($.filter((B) => B !== A));
    }, b = () => t.forEach((A) => {
      var {
        sync: $
      } = A;
      return $(e.modelValue);
    }), T = () => {
      t.forEach((A) => A.resetWithAnimation());
    }, k = () => {
      var A = t.map((B) => {
        var {
          checkedValue: I
        } = B;
        return I.value;
      }), $ = io(A);
      return T(), V(e["onUpdate:modelValue"], $), $;
    }, C = () => {
      var A = t.filter((B) => {
        var {
          checked: I
        } = B;
        return !I.value;
      }).map((B) => {
        var {
          checkedValue: I
        } = B;
        return I.value;
      }), $ = io(A);
      return T(), V(e["onUpdate:modelValue"], $), $;
    }, S = () => {
      V(e["onUpdate:modelValue"], []), d();
    }, P = () => u(e.rules, e.modelValue);
    te(() => e.modelValue, b, {
      deep: !0
    }), te(() => a.value, b);
    var h = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: w,
      validate: P,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return i(h), V(o, h), {
      errorMessage: l,
      n: vv,
      classes: fv,
      checkAll: k,
      inverseAll: C,
      reset: S,
      validate: P,
      resetValidation: d
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
function mv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function pv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var hv = {
  type: {
    type: String,
    default: "default",
    validator: mv
  },
  size: {
    type: String,
    default: "normal",
    validator: pv
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: en(Pl, "name"),
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !0
  },
  block: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !1
  },
  onClose: Y()
}, {
  n: zn,
  classes: gv
} = ee("chip");
function yv(e, n) {
  var r = ie("var-icon");
  return g(), pe(
    Re,
    {
      name: e.n("$-fade")
    },
    {
      default: ce(() => [D(
        "span",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [G(e.$slots, "left"), D(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [G(e.$slots, "default")],
          2
        ), G(e.$slots, "right"), e.closable ? (g(), E(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.onClose && e.onClose(...arguments);
            })
          },
          [re(
            r,
            {
              name: "" + (e.iconName ? e.iconName : "close-circle")
            },
            null,
            8,
            ["name"]
          )],
          2
        )) : Q("v-if", !0)],
        16
      )]),
      _: 3
    },
    8,
    ["name"]
  );
}
const fr = _({
  render: yv,
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: hv,
  setup(e) {
    var n = F(() => {
      var {
        plain: a,
        textColor: t,
        color: i
      } = e;
      return a ? {
        color: t || i,
        borderColor: i
      } : {
        color: t,
        background: i
      };
    }), r = F(() => {
      var {
        size: a,
        block: t,
        type: i,
        plain: o,
        round: l
      } = e, s = zn(t ? "$--flex" : "$--inline-flex"), u = o ? zn("plain") + " " + zn("plain-" + i) : zn("--" + i), d = l ? zn("--round") : null;
      return [zn("--" + a), s, u, d];
    });
    return {
      n: zn,
      classes: gv,
      chipStyles: n,
      contentClass: r
    };
  }
});
fr.install = function(e) {
  e.component(fr.name, fr);
};
function bv(e) {
  return ["row", "column"].includes(e);
}
var wv = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row",
    validator: bv
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  },
  onClick: Y()
}, Wl = Symbol("ROW_BIND_COL_KEY"), Hl = Symbol("ROW_COUNT_COL_KEY");
function Sv() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Wl), {
    length: r
  } = pn(Hl);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Cv() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Wl), {
    index: r
  } = hn(Hl);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: rt,
  classes: kv
} = ee("col");
function $v(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: X({
        flexDirection: e.direction,
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const Hr = _({
  render: $v,
  name: "VarCol",
  props: wv,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = F(() => L(e.span)), a = F(() => L(e.offset)), {
      row: t,
      bindRow: i
    } = Cv(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (zi(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(rt("--span-" + s + "-" + f)), v && d.push(rt("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(rt("--span-" + s + "-" + u));
      return d;
    };
    return te([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), V(i, o), {
      n: rt,
      classes: kv,
      padding: n,
      toNumber: L,
      toSizeUnit: we,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var jl = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Gl = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Tv() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(jl), {
    length: r
  } = pn(Gl);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Ov = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: Boolean,
    default: !0
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Vv
} = ee("collapse");
function Ev(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const jr = _({
  render: Ev,
  name: "VarCollapse",
  props: Ov,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Tv(), t = F(() => e.modelValue), i = F(() => e.offset), o = () => !e.accordion && !ye(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && ye(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (m, p) => o() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((w) => w !== m) : null, s = (m, p) => {
      var w = l(m, p);
      V(e["onUpdate:modelValue"], w), V(e.onChange, w);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: w
          } = p;
          return e.modelValue === w.value;
        });
      var m = r.filter((p) => {
        var {
          name: w
        } = p;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return m.length ? m : void 0;
    }, d = () => e.accordion ? r.find((m) => {
      var {
        index: p,
        name: w
      } = m;
      return w.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((m) => {
      var {
        index: p,
        name: w
      } = m;
      return w.value === void 0 ? e.modelValue.includes(p.value) : !1;
    }), v = () => {
      if (!!o()) {
        var m = u() || d();
        if (e.accordion && !m || !e.accordion && !m.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var w = e.accordion ? m === p : m.includes(p);
          p.init(e.accordion, w);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), te(() => n.value, () => Me().then(v)), te(() => e.modelValue, () => Me().then(v)), {
      n: Vv
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
function Mv() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(jl), {
    index: r
  } = hn(Gl);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Pv = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, {
  n: Iv,
  classes: Nv
} = ee("collapse-item");
function Bv(e, n) {
  var r = ie("var-icon");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [D(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [D(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [G(e.$slots, "title", {}, () => [ge(
          ne(e.title),
          1
        )])],
        2
      ), D(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [G(e.$slots, "icon", {}, () => [re(
          r,
          {
            name: e.icon,
            transition: 250,
            class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
      )],
      2
    ), $e(D(
      "div",
      {
        class: c(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [D(
        "div",
        {
          class: c(e.n("content-wrap"))
        },
        [G(e.$slots, "default")],
        2
      )],
      34
    ), [[Ja, e.show]])],
    2
  );
}
const Gr = _({
  render: Bv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: Pv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Mv(), t = !0, i = M(null), o = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (C, S) => {
      s.value === void 0 || C && ye(s.value) || S === l.value || (l.value = S, m(!0));
    }, m = (C) => {
      e.disabled || C || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Me(() => {
        var {
          offsetHeight: C
        } = i.value;
        i.value.style.height = 0 + "px", On(() => {
          i.value.style.height = C + "px", t && Tt(() => {
            t && T();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, b = () => {
      if (!!i.value) {
        var {
          offsetHeight: C
        } = i.value;
        i.value.style.height = C + "px", On(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, k = {
      index: n,
      name: v,
      init: f
    };
    return a(k), te(l, (C) => {
      C ? p() : b();
    }), {
      n: Iv,
      start: w,
      classes: Nv,
      show: o,
      isShow: l,
      offset: u,
      toggle: m,
      contentEl: i,
      transitionend: T
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var Dv = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: Y(),
  onChange: Y()
}, {
  n: Av
} = ee("countdown"), ii = 1e3, oi = 60 * ii, li = 60 * oi, So = 24 * li;
function Lv(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default", gl(_s(e.timeData)), () => [ge(
      ne(e.showTime),
      1
    )])],
    2
  );
}
const qr = _({
  render: Lv,
  name: "VarCountdown",
  props: Dv,
  setup(e) {
    var n = M(0), r = M(!1), a = M(""), t = M(0), i = M(0), o = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (m, p) => {
      var w = Object.values(p), b = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (b.forEach((C, S) => {
        m.includes(C) ? m = m.replace(C, yr("" + w[S], 2, "0")) : w[S + 1] += w[S] * T[S];
      }), m.includes("S")) {
        var k = yr("" + w[w.length - 1], 3, "0");
        m.includes("SSS") ? m = m.replace("SSS", k) : m.includes("SS") ? m = m.replace("SS", k.slice(0, 2)) : m = m.replace("S", k.slice(0, 1));
      }
      return m;
    }, s = (m) => {
      var p = Math.floor(m / So), w = Math.floor(m % So / li), b = Math.floor(m % li / oi), T = Math.floor(m % oi / ii), k = Math.floor(m % ii), C = {
        days: p,
        hours: w,
        minutes: b,
        seconds: T,
        milliseconds: k
      };
      o.value = C, V(e.onChange, o.value), a.value = l(e.format, C);
    }, u = () => {
      var {
        time: m,
        onEnd: p,
        autoStart: w
      } = e, b = Date.now();
      n.value || (n.value = b + L(m));
      var T = n.value - b;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        V(p);
        return;
      }
      (w || r.value) && (t.value = On(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || L(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, gu(t.value), u();
    };
    return te(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: Av,
      start: d,
      pause: v,
      reset: f
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Mr = 9e15, ir = 1e9, si = "0123456789abcdef", mt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", pt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ui = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Mr,
  maxE: Mr,
  crypto: !1
}, ql, In, fe = !0, Et = "[DecimalError] ", nr = Et + "Invalid argument: ", Kl = Et + "Precision limit exceeded", Xl = Et + "crypto unavailable", Zl = "[object Decimal]", Xe = Math.floor, ze = Math.pow, zv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Rv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Uv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Jl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, kn = 1e7, de = 7, Yv = 9007199254740991, Fv = mt.length - 1, di = pt.length - 1, K = { toStringTag: Zl };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
K.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(nr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
K.comparedTo = K.cmp = function(e) {
  var n, r, a, t, i = this, o = i.d, l = (e = new i.constructor(e)).d, s = i.s, u = e.s;
  if (!o || !l)
    return !s || !u ? NaN : s !== u ? s : o === l ? 0 : !o ^ s < 0 ? 1 : -1;
  if (!o[0] || !l[0])
    return o[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (i.e !== e.e)
    return i.e > e.e ^ s < 0 ? 1 : -1;
  for (a = o.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (o[n] !== l[n])
      return o[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
K.cosine = K.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Wv(a, ns(a, r)), a.precision = e, a.rounding = n, ue(In == 2 || In == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, i = d.s * ze(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = He(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = ze(r, 1 / 3), e = Xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Te(u.plus(d).times(l), u.plus(s), o + 2, 1), He(l.d).slice(0, o) === (r = He(a.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        o += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return fe = !0, ue(a, e, v.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Xe(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
K.dividedBy = K.div = function(e) {
  return Te(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Te(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, r, a, t, i = this, o = i.constructor, l = new o(1);
  if (!i.isFinite())
    return new o(i.s ? 1 / 0 : NaN);
  if (i.isZero())
    return l;
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Pt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = Va(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return ue(i, o.precision = r, o.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = Va(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Pt(5, e)), t = Va(i, 2, t, t, !0);
    for (var o, l = new i(5), s = new i(16), u = new i(20); e--; )
      o = t.times(t), t = t.times(l.plus(o.times(s.times(o).plus(u))));
  }
  return i.precision = n, i.rounding = r, ue(t, n, r, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Te(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Sn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? Sn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Sn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new i(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = i.precision, n = i.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new i(t), e, n, !0) : (i.precision = r = a - t.e, t = Te(t.plus(1), new i(1).minus(t), r + e, 1), i.precision = e + 4, i.rounding = 1, t = t.ln(), i.precision = e, i.rounding = n, t.times(0.5))) : new i(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = Sn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= di)
      return o = Sn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= di)
      return o = Sn(d, v + 4, f).times(0.5), o.s = u.s, o;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(l / de), a = 1, s = u.times(u), o = new d(u), t = u; e !== -1; )
    if (t = t.times(s), i = o.minus(t.div(a += 2)), t = t.times(s), o = i.plus(t.div(a += 2)), o.d[n] !== void 0)
      for (e = n; o.d[e] === i.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), fe = !0, ue(o, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && Xe(this.e / de) > this.d.length - 2;
};
K.isNaN = function() {
  return !this.s;
};
K.isNegative = K.isNeg = function() {
  return this.s < 0;
};
K.isPositive = K.isPos = function() {
  return this.s > 0;
};
K.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
K.lessThan = K.lt = function(e) {
  return this.cmp(e) < 0;
};
K.lessThanOrEqualTo = K.lte = function(e) {
  return this.cmp(e) < 1;
};
K.logarithm = K.log = function(e) {
  var n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, m = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n)
    if (r.length > 1)
      i = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      i = t !== 1;
    }
  if (fe = !1, l = v + m, o = Kn(u, l), a = n ? ht(d, l + 10) : Kn(e, l), s = Te(o, a, l, 1), Ha(s.d, t = v, f))
    do
      if (l += 10, o = Kn(u, l), a = n ? ht(d, l + 10) : Kn(e, l), s = Te(o, a, l, 1), !i) {
        +He(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (Ha(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
K.minus = K.sub = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
    return fe ? ue(e, l, s) : e;
  }
  if (r = Xe(e.e / de), d = Xe(m.e / de), u = u.slice(), i = d - r, i) {
    for (v = i < 0, v ? (n = u, i = -i, o = f.length) : (n = f, r = d, o = u.length), a = Math.max(Math.ceil(l / de), o) + 2, i > a && (i = a, n.length = 1), n.reverse(), a = i; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, o = f.length, v = a < o, v && (o = a), a = 0; a < o; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    i = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), o = u.length, a = f.length - o; a > 0; --a)
    u[o++] = 0;
  for (a = f.length; a > i; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = kn - 1;
      --u[t], u[a] += kn;
    }
    u[a] -= f[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Mt(u, r), fe ? ue(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Te(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Te(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return vi(this);
};
K.naturalLogarithm = K.ln = function() {
  return Kn(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
K.plus = K.add = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, l, s) : e;
  if (i = Xe(v.e / de), a = Xe(e.e / de), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / de), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / kn | 0, u[t] %= kn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = Mt(u, a), fe ? ue(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(nr + e);
  return r.d ? (n = Ql(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = jv(a, ns(a, r)), a.precision = e, a.rounding = n, ue(In > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (fe = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = He(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Xe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (i = a, a = i.plus(Te(o, i, r + 2, 1)).times(0.5), He(i.d).slice(0, r) === (n = He(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(i, s + 1, 0), i.times(i).eq(o))) {
          a = i;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(o));
        break;
      }
  return fe = !0, ue(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Te(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(In == 2 || In == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Xe(d.e / de) + Xe(e.e / de), s = f.length, u = m.length, s < u && (i = f, f = m, m = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + m[a] * f[t - a - 1] + n, i[t--] = l % kn | 0, n = l / kn | 0;
    i[t] = (i[t] + n) % kn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = Mt(i, r), fe ? ue(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return Wi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (an(e, 0, ir), n === void 0 ? n = a.rounding : an(n, 0, 8), ue(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, !0) : (an(e, 0, ir), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e + 1, n), r = En(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = En(t) : (an(e, 0, ir), n === void 0 ? n = i.rounding : an(n, 0, 8), a = ue(new i(t), e + t.e + 1, n), r = En(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, m = this, p = m.d, w = m.constructor;
  if (!p)
    return new w(m);
  if (u = r = new w(1), a = s = new w(0), n = new w(a), i = n.e = Ql(p) - m.e - 1, o = i % de, n.d[0] = ze(10, o < 0 ? de + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new w(e), !l.isInt() || l.lt(u))
      throw Error(nr + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (fe = !1, l = new w(He(p)), d = w.precision, w.precision = i = p.length * de * 2; v = Te(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Te(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Te(u, a, i, 1).minus(m).abs().cmp(Te(s, r, i, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], w.precision = d, fe = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return Wi(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : an(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (fe = !1, r = Te(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return Wi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(ze(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return ue(l, a, i);
  if (n = Xe(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Yv)
    return t = xl(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = ze(+l, u), n = r == 0 || !isFinite(r) ? Xe(u * (Math.log("0." + He(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = vi(e.times(Kn(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), Ha(t.d, a, i) && (n = a + 10, t = ue(vi(e.times(Kn(l, n + r)), n), n + 5, 1), +He(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = o, fe = !0, s.rounding = i, ue(t, a, i));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (an(e, 1, ir), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e, n), r = En(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (an(e, 1, ir), n === void 0 ? n = a.rounding : an(n, 0, 8)), ue(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function He(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (i += Un(r)), i += a;
    o = e[n], a = o + "", r = de - a.length, r && (i += Un(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function an(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(nr + e);
}
function Ha(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), i = ze(10, de - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == ze(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == ze(10, n - 3) - 1, o;
}
function st(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += si.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Wv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Pt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Va(e, 1, n.times(t), new e(1));
  for (var i = r; i--; ) {
    var o = n.times(n);
    n = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Te = function() {
  function e(a, t, i) {
    var o, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      o = a[s] * t + l, a[s] = o % i | 0, l = o / i | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, i, o) {
    var l, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (l = s = 0; l < i; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, i, o) {
    for (var l = 0; i--; )
      a[i] -= l, l = a[i] < t[i] ? 1 : 0, a[i] = l * o + a[i] - t[i];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, i, o, l, s) {
    var u, d, v, f, m, p, w, b, T, k, C, S, P, h, A, $, B, I, y, O, R = a.constructor, W = a.s == t.s ? 1 : -1, q = a.d, z = t.d;
    if (!q || !q[0] || !z || !z[0])
      return new R(
        !a.s || !t.s || (q ? z && q[0] == z[0] : !z) ? NaN : q && q[0] == 0 || !z ? W * 0 : W / 0
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = kn, m = de, d = Xe(a.e / m) - Xe(t.e / m)), y = z.length, B = q.length, T = new R(W), k = T.d = [], v = 0; z[v] == (q[v] || 0); v++)
      ;
    if (z[v] > (q[v] || 0) && d--, i == null ? (h = i = R.precision, o = R.rounding) : l ? h = i + (a.e - t.e) + 1 : h = i, h < 0)
      k.push(1), p = !0;
    else {
      if (h = h / m + 2 | 0, v = 0, y == 1) {
        for (f = 0, z = z[0], h++; (v < B || f) && h--; v++)
          A = f * s + (q[v] || 0), k[v] = A / z | 0, f = A % z | 0;
        p = f || v < B;
      } else {
        for (f = s / (z[0] + 1) | 0, f > 1 && (z = e(z, f, s), q = e(q, f, s), y = z.length, B = q.length), $ = y, C = q.slice(0, y), S = C.length; S < y; )
          C[S++] = 0;
        O = z.slice(), O.unshift(0), I = z[0], z[1] >= s / 2 && ++I;
        do
          f = 0, u = n(z, C, y, S), u < 0 ? (P = C[0], y != S && (P = P * s + (C[1] || 0)), f = P / I | 0, f > 1 ? (f >= s && (f = s - 1), w = e(z, f, s), b = w.length, S = C.length, u = n(w, C, b, S), u == 1 && (f--, r(w, y < b ? O : z, b, s))) : (f == 0 && (u = f = 1), w = z.slice()), b = w.length, b < S && w.unshift(0), r(C, w, S, s), u == -1 && (S = C.length, u = n(z, C, y, S), u < 1 && (f++, r(C, y < S ? O : z, S, s))), S = C.length) : u === 0 && (f++, C = [0]), k[v++] = f, u && C[0] ? C[S++] = q[$] || 0 : (C = [q[$]], S = 1);
        while (($++ < B || C[0] !== void 0) && h--);
        p = C[0] !== void 0;
      }
      k[0] || k.shift();
    }
    if (m == 1)
      T.e = d, ql = p;
    else {
      for (v = 1, f = k[0]; f >= 10; f /= 10)
        v++;
      T.e = v + d * m - 1, ue(T, l ? i + T.e + 1 : i, o, p);
    }
    return T;
  };
}();
function ue(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (i = n - t, i < 0)
        i += de, o = n, d = v[f = 0], s = d / ze(10, t - o - 1) % 10 | 0;
      else if (f = Math.ceil((i + 1) / de), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, i %= de, o = i - de + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        i %= de, o = i - de + t, s = o < 0 ? 0 : d / ze(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (o < 0 ? d : d % ze(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / ze(10, t - o) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = ze(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (i == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = ze(10, de - i), v[f] = o > 0 ? (d / ze(10, t - o) % ze(10, o) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (i = 1, o = v[0]; o >= 10; o /= 10)
              i++;
            for (o = v[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, v[0] == kn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != kn)
              break;
            v[f--] = 0, l = 1;
          }
      for (i = v.length; v[--i] === 0; )
        v.pop();
    }
  return fe && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function En(e, n, r) {
  if (!e.isFinite())
    return es(e);
  var a, t = e.e, i = He(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Un(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Un(-t - 1) + i, r && (a = r - o) > 0 && (i += Un(a))) : t >= o ? (i += Un(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Un(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Un(a))), i;
}
function Mt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function ht(e, n, r) {
  if (n > Fv)
    throw fe = !0, r && (e.precision = r), Error(Kl);
  return ue(new e(mt), n, 1, !0);
}
function Sn(e, n, r) {
  if (n > di)
    throw Error(Kl);
  return ue(new e(pt), n, r, !0);
}
function Ql(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Un(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function xl(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (i = i.times(n), ko(i.d, o) && (t = !0)), r = Xe(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), ko(n.d, o);
  }
  return fe = !0, i;
}
function Co(e) {
  return e.d[e.d.length - 1] & 1;
}
function _l(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function vi(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = ue(i.times(e), s, 1), r = r.times(++d), l = o.plus(Te(i, r, s, 1)), He(l.d).slice(0, s) === He(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = ue(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && Ha(o.d, s - a, m, u))
          f.precision = s += 10, r = i = l = new f(1), d = 0, u++;
        else
          return ue(o, f.precision = p, m, fe = !0);
      else
        return f.precision = p, o;
    }
    o = l;
  }
}
function Kn(e, n) {
  var r, a, t, i, o, l, s, u, d, v, f, m = 1, p = 10, w = e, b = w.d, T = w.constructor, k = T.rounding, C = T.precision;
  if (w.s < 0 || !b || !b[0] || !w.e && b[0] == 1 && b.length == 1)
    return new T(b && !b[0] ? -1 / 0 : w.s != 1 ? NaN : b ? 0 : w);
  if (n == null ? (fe = !1, d = C) : d = n, T.precision = d += p, r = He(b), a = r.charAt(0), Math.abs(i = w.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      w = w.times(e), r = He(w.d), a = r.charAt(0), m++;
    i = w.e, a > 1 ? (w = new T("0." + r), i++) : w = new T(a + "." + r.slice(1));
  } else
    return u = ht(T, d + 2, C).times(i + ""), w = Kn(new T(a + "." + r.slice(1)), d - p).plus(u), T.precision = C, n == null ? ue(w, C, k, fe = !0) : w;
  for (v = w, s = o = w = Te(w.minus(1), w.plus(1), d, 1), f = ue(w.times(w), d, 1), t = 3; ; ) {
    if (o = ue(o.times(f), d, 1), u = s.plus(Te(o, new T(t), d, 1)), He(u.d).slice(0, d) === He(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(ht(T, d + 2, C).times(i + ""))), s = Te(s, new T(m), d, 1), n == null)
        if (Ha(s.d, d - p, k, l))
          T.precision = d += p, u = o = w = Te(v.minus(1), v.plus(1), d, 1), f = ue(w.times(w), d, 1), t = l = 1;
        else
          return ue(s, T.precision = C, k, fe = !0);
      else
        return T.precision = C, s;
    s = u, t += 2;
  }
}
function es(e) {
  return String(e.s * e.s / 0);
}
function fi(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % de, r < 0 && (a += de), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= de; a < t; )
        e.d.push(+n.slice(a, a += de));
      n = n.slice(a), a = de - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), fe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Hv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Jl.test(n))
      return fi(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Rv.test(n))
    r = 16, n = n.toLowerCase();
  else if (zv.test(n))
    r = 2;
  else if (Uv.test(n))
    r = 8;
  else
    throw Error(nr + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = xl(a, new a(r), i, i * 2)), u = st(n, r, kn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = Mt(u, d), e.d = u, fe = !1, o && (e = Te(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? ze(2, s) : Xn.pow(2, s))), fe = !0, e);
}
function jv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Va(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Pt(5, r)), n = Va(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function Va(e, n, r, a, t) {
  var i, o, l, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), l = new e(a); ; ) {
    if (o = Te(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(o) : a.minus(o), a = Te(o.times(s), new e(n++ * n++), u, 1), o = l.plus(a), o.d[d] !== void 0) {
      for (i = d; o.d[i] === l.d[i] && i--; )
        ;
      if (i == -1)
        break;
    }
    i = l, l = a, a = o, o = i;
  }
  return fe = !0, o.d.length = d + 1, o;
}
function Pt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function ns(e, n) {
  var r, a = n.s < 0, t = Sn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return In = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    In = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return In = Co(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    In = Co(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Wi(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (an(r, 1, ir), a === void 0 ? a = m.rounding : an(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = es(e);
  else {
    for (d = En(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - o, f.d = st(En(f), 10, t), f.e = f.d.length), v = st(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new m(e), e.d = v, e.e = i, e = Te(e, f, r, a, 0, t), v = e.d, i = e.e, u = ql), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += si.charAt(v[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = st(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += si.charAt(v[o]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i; )
          d = "0" + d;
        d = "0." + d;
      } else if (++i > s)
        for (i -= s; i--; )
          d += "0";
      else
        i < s && (d = d.slice(0, i) + "." + d.slice(i));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function ko(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Gv(e) {
  return new this(e).abs();
}
function qv(e) {
  return new this(e).acos();
}
function Kv(e) {
  return new this(e).acosh();
}
function Xv(e, n) {
  return new this(e).plus(n);
}
function Zv(e) {
  return new this(e).asin();
}
function Jv(e) {
  return new this(e).asinh();
}
function Qv(e) {
  return new this(e).atan();
}
function xv(e) {
  return new this(e).atanh();
}
function _v(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Sn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Sn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Sn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(Te(e, n, i, 1)), n = Sn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Te(e, n, i, 1)), r;
}
function ef(e) {
  return new this(e).cbrt();
}
function nf(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function rf(e, n, r) {
  return new this(e).clamp(n, r);
}
function af(e) {
  if (!e || typeof e != "object")
    throw Error(Et + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    ir,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Mr,
    0,
    "toExpPos",
    0,
    Mr,
    "maxE",
    0,
    Mr,
    "minE",
    -Mr,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = ui[r]), (a = e[r]) !== void 0)
      if (Xe(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(nr + r + ": " + a);
  if (r = "crypto", t && (this[r] = ui[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Xl);
      else
        this[r] = !1;
    else
      throw Error(nr + r + ": " + a);
  return this;
}
function tf(e) {
  return new this(e).cos();
}
function of(e) {
  return new this(e).cosh();
}
function rs(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, $o(i)) {
      u.s = i.s, fe ? !i.d || i.e > t.maxE ? (u.e = NaN, u.d = null) : i.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i.e, u.d = i.d.slice()) : (u.e = i.e, u.d = i.d ? i.d.slice() : i.d);
      return;
    }
    if (s = typeof i, s === "number") {
      if (i === 0) {
        u.s = 1 / i < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (i < 0 ? (i = -i, u.s = -1) : u.s = 1, i === ~~i && i < 1e7) {
        for (o = 0, l = i; l >= 10; l /= 10)
          o++;
        fe ? o > t.maxE ? (u.e = NaN, u.d = null) : o < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [i]) : (u.e = o, u.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return fi(u, i.toString());
    } else if (s !== "string")
      throw Error(nr + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), Jl.test(i) ? fi(u, i) : Hv(u, i);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = af, t.clone = rs, t.isDecimal = $o, t.abs = Gv, t.acos = qv, t.acosh = Kv, t.add = Xv, t.asin = Zv, t.asinh = Jv, t.atan = Qv, t.atanh = xv, t.atan2 = _v, t.cbrt = ef, t.ceil = nf, t.clamp = rf, t.cos = tf, t.cosh = of, t.div = lf, t.exp = sf, t.floor = uf, t.hypot = df, t.ln = vf, t.log = ff, t.log10 = mf, t.log2 = cf, t.max = pf, t.min = hf, t.mod = gf, t.mul = yf, t.pow = bf, t.random = wf, t.round = Sf, t.sign = Cf, t.sin = kf, t.sinh = $f, t.sqrt = Tf, t.sub = Of, t.sum = Vf, t.tan = Ef, t.tanh = Mf, t.trunc = Pf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function lf(e, n) {
  return new this(e).div(n);
}
function sf(e) {
  return new this(e).exp();
}
function uf(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function df() {
  var e, n, r = new this(0);
  for (fe = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return fe = !0, new this(1 / 0);
      r = n;
    }
  return fe = !0, r.sqrt();
}
function $o(e) {
  return e instanceof Xn || e && e.toStringTag === Zl || !1;
}
function vf(e) {
  return new this(e).ln();
}
function ff(e, n) {
  return new this(e).log(n);
}
function cf(e) {
  return new this(e).log(2);
}
function mf(e) {
  return new this(e).log(10);
}
function pf() {
  return _l(this, arguments, "lt");
}
function hf() {
  return _l(this, arguments, "gt");
}
function gf(e, n) {
  return new this(e).mod(n);
}
function yf(e, n) {
  return new this(e).mul(n);
}
function bf(e, n) {
  return new this(e).pow(n);
}
function wf(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : an(e, 1, ir), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); i < a; )
        t = n[i], t >= 429e7 ? n[i] = crypto.getRandomValues(new Uint32Array(1))[0] : l[i++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); i < a; )
        t = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((n[i + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, i) : (l.push(t % 1e7), i += 4);
      i = a / 4;
    } else
      throw Error(Xl);
  else
    for (; i < a; )
      l[i++] = Math.random() * 1e7 | 0;
  for (a = l[--i], e %= de, a && e && (t = ze(10, de - e), l[i] = (a / t | 0) * t); l[i] === 0; i--)
    l.pop();
  if (i < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= de)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
  }
  return o.e = r, o.d = l, o;
}
function Sf(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Cf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function kf(e) {
  return new this(e).sin();
}
function $f(e) {
  return new this(e).sinh();
}
function Tf(e) {
  return new this(e).sqrt();
}
function Of(e, n) {
  return new this(e).sub(n);
}
function Vf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Ef(e) {
  return new this(e).tan();
}
function Mf(e) {
  return new this(e).tanh();
}
function Pf(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var Xn = K.constructor = rs(ui);
mt = new Xn(mt);
pt = new Xn(pt);
var If = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disableIncrement: {
    type: Boolean,
    default: !1
  },
  disableDecrement: {
    type: Boolean,
    default: !1
  },
  disableInput: {
    type: Boolean,
    default: !1
  },
  lazyChange: {
    type: Boolean,
    default: !1
  },
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: {
    type: Array
  },
  onBeforeChange: Y(),
  onChange: Y(),
  onIncrement: Y(),
  onDecrement: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Nf,
  classes: Bf
} = ee("counter"), To = 100, Oo = 600, Df = ["inputmode", "readonly", "disabled"];
function Af(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = qe("ripple");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      Ee({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [$e(re(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: X({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.formDisabled || e.readonly || e.formReadonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), $e(D(
        "input",
        {
          class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: X({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (i) => e.inputValue = i),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        Df
      ), [[eu, e.inputValue]]), $e(re(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: X({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.formDisabled || e.formReadonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Kr = _({
  render: Af,
  name: "VarCounter",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  inheritAttrs: !1,
  props: If,
  setup(e) {
    var n = M(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = yn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = gn(), {
      readonly: f,
      disabled: m
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), w = (z) => {
      Me(() => {
        var {
          validateTrigger: J,
          rules: j,
          modelValue: Z
        } = e;
        u(J, z, j, Z);
      });
    }, b = () => {
      var {
        min: z
      } = e;
      V(e["onUpdate:modelValue"], z != null ? L(z) : 0), v();
    }, T = {
      reset: b,
      validate: p,
      resetValidation: v
    }, k = F(() => {
      var {
        max: z,
        modelValue: J
      } = e;
      return z != null && L(J) >= L(z);
    }), C = F(() => {
      var {
        min: z,
        modelValue: J
      } = e;
      return z != null && L(J) <= L(z);
    }), S = (z) => {
      var {
        decimalLength: J,
        max: j,
        min: Z
      } = e, N = L(z);
      return j != null && N > L(j) && (N = L(j)), Z != null && N < L(Z) && (N = L(Z)), z = String(N), J != null && (z = N.toFixed(L(J))), z;
    }, P = (z) => {
      var {
        lazyChange: J,
        onBeforeChange: j
      } = e, {
        value: Z
      } = z.target, N = S(Z);
      J ? V(j, L(N), q) : W(N), w("onInputChange");
    }, h = () => {
      var {
        disabled: z,
        readonly: J,
        disableDecrement: j,
        decrementButton: Z,
        lazyChange: N,
        step: U,
        modelValue: H,
        onDecrement: x,
        onBeforeChange: oe
      } = e;
      if (!(m != null && m.value || f != null && f.value || z || J || j || !Z) && !C.value) {
        var se = new Xn(L(H)).minus(new Xn(L(U))).toString(), ve = S(se), Ce = L(ve);
        V(x, Ce), N ? V(oe, Ce, q) : (W(ve), w("onDecrement"));
      }
    }, A = () => {
      var {
        disabled: z,
        readonly: J,
        disableIncrement: j,
        incrementButton: Z,
        lazyChange: N,
        step: U,
        modelValue: H,
        onIncrement: x,
        onBeforeChange: oe
      } = e;
      if (!(m != null && m.value || f != null && f.value || z || J || j || !Z) && !k.value) {
        var se = new Xn(L(H)).plus(new Xn(L(U))).toString(), ve = S(se), Ce = L(ve);
        V(x, Ce), N ? V(oe, Ce, q) : (W(ve), w("onIncrement"));
      }
    }, $ = () => {
      var {
        press: z,
        lazyChange: J
      } = e;
      !z || J || (i = window.setTimeout(() => {
        R();
      }, Oo));
    }, B = () => {
      var {
        press: z,
        lazyChange: J
      } = e;
      !z || J || (t = window.setTimeout(() => {
        O();
      }, Oo));
    }, I = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, y = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, O = () => {
      r = window.setTimeout(() => {
        A(), O();
      }, To);
    }, R = () => {
      a = window.setTimeout(() => {
        h(), R();
      }, To);
    }, W = (z) => {
      n.value = z;
      var J = L(z);
      V(e["onUpdate:modelValue"], J);
    }, q = (z) => {
      W(S(String(z))), w("onLazyChange");
    };
    return V(o, T), te(() => e.modelValue, (z) => {
      W(S(String(z))), V(e.onChange, L(z));
    }), W(S(String(e.modelValue))), {
      n: Nf,
      classes: Bf,
      inputValue: n,
      errorMessage: s,
      formDisabled: m,
      formReadonly: f,
      isMax: k,
      isMin: C,
      validate: p,
      reset: b,
      resetValidation: v,
      handleChange: P,
      decrement: h,
      increment: A,
      pressDecrement: $,
      pressIncrement: B,
      releaseDecrement: I,
      releaseIncrement: y,
      toSizeUnit: we,
      toNumber: L
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var as = 60, ts = as * 60, is = ts * 24, Lf = is * 7, Ea = 1e3, Wt = as * Ea, Vo = ts * Ea, zf = is * Ea, Rf = Lf * Ea, Hi = "millisecond", Pr = "second", Ir = "minute", Nr = "hour", Yn = "day", ut = "week", wn = "month", os = "quarter", Fn = "year", Br = "date", Uf = "YYYY-MM-DDTHH:mm:ssZ", Eo = "Invalid Date", Yf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Ff = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Wf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ci = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Hf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + ci(t, 2, "0") + ":" + ci(i, 2, "0");
}, jf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, wn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), wn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, Gf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, qf = function(n) {
  var r = {
    M: wn,
    y: Fn,
    w: ut,
    d: Yn,
    D: Br,
    h: Nr,
    m: Ir,
    s: Pr,
    ms: Hi,
    Q: os
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Kf = function(n) {
  return n === void 0;
};
const Xf = {
  s: ci,
  z: Hf,
  m: jf,
  a: Gf,
  p: qf,
  u: Kf
};
var Ua = "en", cr = {};
cr[Ua] = Wf;
var ji = function(n) {
  return n instanceof It;
}, gt = function e(n, r, a) {
  var t;
  if (!n)
    return Ua;
  if (typeof n == "string") {
    var i = n.toLowerCase();
    cr[i] && (t = i), r && (cr[i] = r, t = i);
    var o = n.split("-");
    if (!t && o.length > 1)
      return e(o[0]);
  } else {
    var l = n.name;
    cr[l] = n, t = l;
  }
  return !a && t && (Ua = t), t || !a && Ua;
}, ae = function(n, r) {
  if (ji(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new It(a);
}, Zf = function(n, r) {
  return ae(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, ke = Xf;
ke.l = gt;
ke.i = ji;
ke.w = Zf;
var Jf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (ke.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Yf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, It = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = gt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Jf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return ke;
  }, n.isValid = function() {
    return this.$d.toString() !== Eo;
  }, n.isSame = function(a, t) {
    var i = ae(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return ae(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < ae(a);
  }, n.$g = function(a, t, i) {
    return ke.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = ke.u(t) ? !0 : t, l = ke.p(a), s = function(T, k) {
      var C = ke.w(i.$u ? Date.UTC(i.$y, k, T) : new Date(i.$y, k, T), i);
      return o ? C : C.endOf(Yn);
    }, u = function(T, k) {
      var C = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return ke.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? C : S).slice(k)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Fn:
        return o ? s(1, 0) : s(31, 11);
      case wn:
        return o ? s(1, v) : s(0, v + 1);
      case ut: {
        var p = this.$locale().weekStart || 0, w = (d < p ? d + 7 : d) - p;
        return s(o ? f - w : f + (6 - w), v);
      }
      case Yn:
      case Br:
        return u(m + "Hours", 0);
      case Nr:
        return u(m + "Minutes", 1);
      case Ir:
        return u(m + "Seconds", 2);
      case Pr:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = ke.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Yn] = l + "Date", i[Br] = l + "Date", i[wn] = l + "Month", i[Fn] = l + "FullYear", i[Nr] = l + "Hours", i[Ir] = l + "Minutes", i[Pr] = l + "Seconds", i[Hi] = l + "Milliseconds", i)[o], u = o === Yn ? this.$D + (t - this.$W) : t;
    if (o === wn || o === Fn) {
      var d = this.clone().set(Br, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Br, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[ke.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = ke.p(t), s = function(f) {
      var m = ae(i);
      return ke.w(m.date(m.date() + Math.round(f * a)), i);
    };
    if (l === wn)
      return this.set(wn, this.$M + a);
    if (l === Fn)
      return this.set(Fn, this.$y + a);
    if (l === Yn)
      return s(1);
    if (l === ut)
      return s(7);
    var u = (o = {}, o[Ir] = Wt, o[Nr] = Vo, o[Pr] = Ea, o)[l] || 1, d = this.$d.getTime() + a * u;
    return ke.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || Eo;
    var o = a || Uf, l = ke.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, m = i.meridiem, p = function(C, S, P, h) {
      return C && (C[S] || C(t, o)) || P[S].slice(0, h);
    }, w = function(C) {
      return ke.s(s % 12 || 12, C, "0");
    }, b = m || function(k, C, S) {
      var P = k < 12 ? "AM" : "PM";
      return S ? P.toLowerCase() : P;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: ke.s(d + 1, 2, "0"),
      MMM: p(i.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: ke.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(i.weekdaysMin, this.$W, v, 2),
      ddd: p(i.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: ke.s(s, 2, "0"),
      h: w(1),
      hh: w(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: ke.s(u, 2, "0"),
      s: String(this.$s),
      ss: ke.s(this.$s, 2, "0"),
      SSS: ke.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(Ff, function(k, C) {
      return C || T[k] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = ke.p(t), s = ae(a), u = (s.utcOffset() - this.utcOffset()) * Wt, d = this - s, v = ke.m(this, s);
    return v = (o = {}, o[Fn] = v / 12, o[wn] = v, o[os] = v / 3, o[ut] = (d - u) / Rf, o[Yn] = (d - u) / zf, o[Nr] = d / Vo, o[Ir] = d / Wt, o[Pr] = d / Ea, o)[l] || d, i ? v : ke.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(wn).$D;
  }, n.$locale = function() {
    return cr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = gt(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return ke.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), ls = It.prototype;
ae.prototype = ls;
[["$ms", Hi], ["$s", Pr], ["$m", Ir], ["$H", Nr], ["$W", Yn], ["$M", wn], ["$y", Fn], ["$D", Br]].forEach(function(e) {
  ls[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ae.extend = function(e, n) {
  return e.$i || (e(n, It, ae), e.$i = !0), ae;
};
ae.locale = gt;
ae.isDayjs = ji;
ae.unix = function(e) {
  return ae(e * 1e3);
};
ae.en = cr[Ua];
ae.Ls = cr;
ae.p = {};
const ss = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, us = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Qf(e) {
  return ["date", "month"].includes(e);
}
var dt = [{
  index: "01"
}, {
  index: "02"
}, {
  index: "03"
}, {
  index: "04"
}, {
  index: "05"
}, {
  index: "06"
}, {
  index: "07"
}, {
  index: "08"
}, {
  index: "09"
}, {
  index: "10"
}, {
  index: "11"
}, {
  index: "12"
}], Ra = [{
  index: "0"
}, {
  index: "1"
}, {
  index: "2"
}, {
  index: "3"
}, {
  index: "4"
}, {
  index: "5"
}, {
  index: "6"
}], xf = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Qf
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  range: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: _f
} = ee("picker-header");
function ec(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [re(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ce(() => [re(r, {
          name: "chevron-left"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    ), D(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [re(
        Re,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(g(), E(
            "div",
            {
              key: e.showDate
            },
            ne(e.showDate),
            1
          ))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    ), re(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ce(() => [re(r, {
          name: "chevron-right"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    )],
    2
  );
}
const ds = _({
  render: ec,
  name: "PanelHeader",
  components: {
    VarButton: rn,
    VarIcon: Oe
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = M(!1), t = M(0), i = F(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (l = We.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return We.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return te(() => e.date, () => {
      t.value = 0;
    }), {
      n: _f,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mi.apply(this, arguments);
}
ae.extend(ss);
ae.extend(us);
var {
  n: at,
  classes: nc
} = ee("month-picker"), {
  n: tt
} = ee("date-picker");
function rc(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
      },
      [re(
        r,
        {
          ref: "headerEl",
          type: "month",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickYear,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), re(
        Re,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(g(), E("ul", {
            key: e.panelKey
          }, [(g(!0), E(
            Ve,
            null,
            Be(e.MONTH_LIST, (t) => (g(), E("li", {
              key: t.index
            }, [re(
              a,
              Ee({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, mi({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: ce(() => [ge(
                  ne(e.getMonthAbbr(t.index)),
                  1
                )]),
                _: 2
              },
              1040,
              ["onClick"]
            )]))),
            128
          ))]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const ac = _({
  render: rc,
  name: "MonthPickerPanel",
  components: {
    VarButton: rn,
    PanelHeader: ds
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t] = e.current.split("-"), i = M(!1), o = M(0), l = M(null), s = Ne({
      left: !1,
      right: !1
    }), u = F(() => e.choose.chooseYear === e.preview.previewYear), d = F(() => e.preview.previewYear === a), v = (k) => {
      var C, S;
      return (C = (S = We.value.datePickerMonthDict) == null ? void 0 : S[k].abbr) != null ? C : "";
    }, f = (k) => {
      var {
        preview: {
          previewYear: C
        },
        componentProps: {
          min: S,
          max: P
        }
      } = e, h = !0, A = !0, $ = C + "-" + k;
      return P && (h = ae($).isSameOrBefore(ae(P), "month")), S && (A = ae($).isSameOrAfter(ae(S), "month")), h && A;
    }, m = (k) => {
      var {
        choose: {
          chooseMonths: C,
          chooseDays: S,
          chooseRangeMonth: P
        },
        componentProps: {
          type: h,
          range: A
        }
      } = e;
      if (A) {
        if (!P.length)
          return !1;
        var $ = ae(k).isSameOrBefore(ae(P[1]), "month"), B = ae(k).isSameOrAfter(ae(P[0]), "month");
        return $ && B;
      }
      return h === "month" ? C.includes(k) : S.some((I) => I.includes(k));
    }, p = (k) => {
      var {
        choose: {
          chooseMonth: C
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: P,
          color: h,
          multiple: A,
          range: $
        }
      } = e, B = S + "-" + k, I = () => $ || A ? m(B) : (C == null ? void 0 : C.index) === k && u.value, y = () => f(k) ? P ? !P(B) : !1 : !0, O = y(), R = () => O ? !0 : $ || A ? !m(B) : !u.value || (C == null ? void 0 : C.index) !== k, W = () => d.value && t === k && e.componentProps.showCurrent ? ($ || A || u.value) && O ? !0 : $ || A ? !m(B) : u.value ? (C == null ? void 0 : C.index) !== t : !0 : !1, q = () => O ? "" : W() ? h != null ? h : "" : I() ? "" : tt() + "-color-cover", z = q().startsWith(tt());
      return {
        outline: W(),
        text: R(),
        color: R() ? "" : h,
        textColor: z ? "" : q(),
        [tt() + "-color-cover"]: z,
        class: nc(at("button"), [O, at("button--disabled")])
      };
    }, w = (k, C) => {
      var S = C.currentTarget;
      S.classList.contains(at("button--disabled")) || r("choose-month", k);
    }, b = (k) => {
      i.value = k === "prev", o.value += k === "prev" ? -1 : 1, r("check-preview", "year", k);
    }, T = (k) => {
      l.value.checkDate(k);
    };
    return te(() => e.preview.previewYear, (k) => {
      var {
        componentProps: {
          min: C,
          max: S
        }
      } = e;
      S && (s.right = !ae("" + (L(k) + 1)).isSameOrBefore(ae(S), "year")), C && (s.left = !ae("" + (L(k) - 1)).isSameOrAfter(ae(C), "year"));
    }, {
      immediate: !0
    }), {
      n: at,
      nDate: tt,
      pack: We,
      MONTH_LIST: dt,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: w,
      checkDate: b
    };
  }
});
var {
  n: Mo,
  classes: tc
} = ee("year-picker"), ic = ["onClick"];
function oc(e, n) {
  return g(), E(
    "ul",
    {
      class: c(e.n())
    },
    [(g(!0), E(
      Ve,
      null,
      Be(e.yearList, (r) => (g(), E(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: X({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        ic
      ))),
      128
    ))],
    2
  );
}
const lc = _({
  render: oc,
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = F(() => {
      var i = [], {
        preview: o,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!o)
        return i;
      var u = [L(o) + 100, L(o) - 100];
      if (l) {
        var d = ae(l).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ae(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var p = u[0]; p >= u[1]; p--)
        i.push(p);
      return i;
    }), t = (i) => {
      r("choose-year", i);
    };
    return Ue(() => {
      var i = document.querySelector("." + Mo("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: Mo,
      classes: tc,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, pi.apply(this, arguments);
}
ae.extend(ss);
ae.extend(us);
var {
  n: Er,
  classes: sc
} = ee("day-picker"), {
  n: it
} = ee("date-picker");
function uc(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
      },
      [re(
        r,
        {
          ref: "headerEl",
          type: "day",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickMonth,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), re(
        Re,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(g(), E("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(g(!0), E(
              Ve,
              null,
              Be(e.sortWeekList, (t) => (g(), E(
                "li",
                {
                  key: t.index
                },
                ne(e.getDayAbbr(t.index)),
                1
              ))),
              128
            ))],
            2
          ), D(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(g(!0), E(
              Ve,
              null,
              Be(e.days, (t, i) => (g(), E("li", {
                key: i
              }, [re(
                a,
                Ee({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, pi({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: ce(() => [ge(
                    ne(e.filterDay(t)),
                    1
                  )]),
                  _: 2
                },
                1040,
                ["onClick"]
              )]))),
              128
            ))],
            2
          )]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const dc = _({
  render: uc,
  name: "DayPickerPanel",
  components: {
    VarButton: rn,
    PanelHeader: ds
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t, i] = e.current.split("-"), o = M([]), l = M(!1), s = M(0), u = M(null), d = Ne({
      left: !1,
      right: !1
    }), v = F(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = F(() => {
      var $;
      return e.choose.chooseYear === e.preview.previewYear && (($ = e.choose.chooseMonth) == null ? void 0 : $.index) === e.preview.previewMonth.index;
    }), m = F(() => {
      var $ = Ra.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return $ === -1 || $ === 0 ? Ra : Ra.slice($).concat(Ra.slice(0, $));
    }), p = ($) => {
      var B, I;
      return (B = (I = We.value.datePickerWeekDict) == null ? void 0 : I[$].abbr) != null ? B : "";
    }, w = ($) => $ > 0 ? $ : "", b = () => {
      var {
        preview: {
          previewMonth: $,
          previewYear: B
        }
      } = e, I = ae(B + "-" + $.index).daysInMonth(), y = ae(B + "-" + $.index + "-01").day(), O = m.value.findIndex((R) => R.index === "" + y);
      o.value = [...Array(O).fill(-1), ...Array.from(Array(I + 1).keys())].filter((R) => R);
    }, T = () => {
      var {
        preview: {
          previewYear: $,
          previewMonth: B
        },
        componentProps: {
          max: I,
          min: y
        }
      } = e;
      if (I) {
        var O = $ + "-" + (L(B.index) + 1);
        d.right = !ae(O).isSameOrBefore(ae(I), "month");
      }
      if (y) {
        var R = $ + "-" + (L(B.index) - 1);
        d.left = !ae(R).isSameOrAfter(ae(y), "month");
      }
    }, k = ($) => {
      var {
        preview: {
          previewYear: B,
          previewMonth: I
        },
        componentProps: {
          min: y,
          max: O
        }
      } = e, R = !0, W = !0, q = B + "-" + I.index + "-" + $;
      return O && (R = ae(q).isSameOrBefore(ae(O), "day")), y && (W = ae(q).isSameOrAfter(ae(y), "day")), R && W;
    }, C = ($) => {
      var {
        choose: {
          chooseDays: B,
          chooseRangeDay: I
        },
        componentProps: {
          range: y
        }
      } = e;
      if (y) {
        if (!I.length)
          return !1;
        var O = ae($).isSameOrBefore(ae(I[1]), "day"), R = ae($).isSameOrAfter(ae(I[0]), "day");
        return O && R;
      }
      return B.includes($);
    }, S = ($) => {
      if ($ < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Er("button")
        };
      var {
        choose: {
          chooseDay: B
        },
        preview: {
          previewYear: I,
          previewMonth: y
        },
        componentProps: {
          allowedDates: O,
          color: R,
          multiple: W,
          range: q
        }
      } = e, z = I + "-" + y.index + "-" + $, J = () => q || W ? C(z) : L(B) === $ && f.value, j = () => k($) ? O ? !O(z) : !1 : !0, Z = j(), N = () => Z ? !0 : q || W ? !C(z) : !f.value || L(B) !== $, U = () => v.value && L(i) === $ && e.componentProps.showCurrent ? (q || W || f.value) && Z ? !0 : q || W ? !C(z) : f.value ? B !== i : !0 : !1, H = () => Z ? "" : U() ? R != null ? R : "" : J() ? "" : it() + "-color-cover", x = H().startsWith(it());
      return {
        text: N(),
        outline: U(),
        textColor: x ? "" : H(),
        [it() + "-color-cover"]: x,
        class: sc(Er("button"), Er("button--usable"), [Z, Er("button--disabled")])
      };
    }, P = ($) => {
      l.value = $ === "prev", s.value += $ === "prev" ? -1 : 1, r("check-preview", "month", $);
    }, h = ($, B) => {
      var I = B.currentTarget;
      I.classList.contains(Er("button--disabled")) || r("choose-day", $);
    }, A = ($) => {
      u.value.checkDate($);
    };
    return Ue(() => {
      b(), T();
    }), te(() => e.preview, () => {
      b(), T();
    }), {
      n: Er,
      nDate: it,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: A,
      filterDay: w,
      getDayAbbr: p,
      checkDate: P,
      chooseDay: h,
      buttonProps: S
    };
  }
});
var {
  n: vc,
  classes: fc
} = ee("date-picker");
function cc(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: X({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [G(e.$slots, "year", {
          year: e.chooseYear
        }, () => [ge(
          ne(e.chooseYear),
          1
        )])],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [re(
          Re,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ce(() => {
              var i, o, l;
              return [e.type === "month" ? (g(), E("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? G(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [ge(
                ne(e.getMonthTitle),
                1
              )]) : e.multiple ? G(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [ge(
                ne(e.getMonthTitle),
                1
              )]) : G(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [ge(
                ne(e.getMonthTitle),
                1
              )])])) : (g(), E("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? G(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [ge(
                ne(e.getDateTitle),
                1
              )]) : e.multiple ? G(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [ge(
                ne(e.getDateTitle),
                1
              )]) : G(e.$slots, "date", gl(Ee({
                key: 2
              }, e.slotProps)), () => [ge(
                ne(e.getDateTitle),
                1
              )])]))];
            }),
            _: 3
          },
          8,
          ["name"]
        )],
        2
      )],
      6
    ), D(
      "div",
      {
        class: c(e.n("body")),
        onTouchstart: n[2] || (n[2] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[3] || (n[3] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[4] || (n[4] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [re(
        Re,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ce(() => [e.getPanelType === "year" ? (g(), pe(
            r,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (g(), pe(
            a,
            {
              key: 1,
              ref: "monthPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "click-year": () => e.clickEl("year"),
              "component-props": e.componentProps,
              onChooseMonth: e.getChooseMonth,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"]
          )) : e.getPanelType === "date" ? (g(), pe(
            t,
            {
              key: 2,
              ref: "dayPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "component-props": e.componentProps,
              "click-month": () => e.clickEl("month"),
              onChooseDay: e.getChooseDay,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"]
          )) : Q("v-if", !0)]),
          _: 1
        },
        8,
        ["name"]
      )],
      34
    )],
    2
  );
}
const Xr = _({
  render: cc,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: ac,
    YearPickerPanel: lc,
    DayPickerPanel: dc
  },
  props: xf,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = ae().format("YYYY-MM-D"), [o, l] = i.split("-"), s = dt.find((le) => le.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), p = M(), w = M(s), b = M(o), T = M(!1), k = M([]), C = M([]), S = M([]), P = M([]), h = M(null), A = M(null), $ = Ne({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), B = F(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: k.value,
      chooseDays: C.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: P.value
    })), I = F(() => ({
      previewMonth: w.value,
      previewYear: b.value
    })), y = F(() => {
      var {
        multiple: le,
        range: he
      } = e;
      if (he)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var me = "";
      if (f.value) {
        var be, Se;
        me = (be = (Se = We.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? be : "";
      }
      return le ? "" + k.value.length + We.value.datePickerSelected : me;
    }), O = F(() => {
      var le, he, me, be, {
        multiple: Se,
        range: Ae
      } = e;
      if (Ae) {
        var Ze = P.value.map((Ut) => ae(Ut).format("YYYY-MM-DD"));
        return Ze.length ? Ze[0] + " ~ " + Ze[1] : "";
      }
      if (Se)
        return "" + C.value.length + We.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var vn = ae(m.value + "-" + f.value.index + "-" + p.value).day(), Vr = Ra.find((Ut) => Ut.index === "" + vn), ro = (le = (he = We.value.datePickerWeekDict) == null ? void 0 : he[Vr.index].name) != null ? le : "", Zs = (me = (be = We.value.datePickerMonthDict) == null ? void 0 : be[f.value.index].name) != null ? me : "", Js = yr(p.value, 2, "0");
      return We.value.lang === "zh-CN" ? f.value.index + "-" + Js + " " + ro.slice(0, 3) : ro.slice(0, 3) + ", " + Zs.slice(0, 3) + " " + p.value;
    }), R = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), W = F(() => !e.touchable || ["", "year"].includes(R.value)), q = F(() => {
      var le, he, me, be, Se = ae(m.value + "-" + ((le = f.value) == null ? void 0 : le.index) + "-" + p.value).day(), Ae = p.value ? yr(p.value, 2, "0") : "";
      return {
        week: "" + Se,
        year: (he = m.value) != null ? he : "",
        month: (me = (be = f.value) == null ? void 0 : be.index) != null ? me : "",
        date: Ae
      };
    }), z = F(() => B.value.chooseRangeDay.map((le) => ae(le).format("YYYY-MM-DD"))), J = F(() => m.value === b.value), j = F(() => {
      var le;
      return ((le = f.value) == null ? void 0 : le.index) === w.value.index;
    }), Z = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (le) => {
      if (!W.value) {
        var {
          clientX: he,
          clientY: me
        } = le.touches[0];
        n = he, r = me;
      }
    }, U = (le, he) => le >= he && le > 20 ? "x" : "y", H = (le) => {
      if (!W.value) {
        var {
          clientX: he,
          clientY: me
        } = le.touches[0], be = he - n, Se = me - r;
        t = U(Math.abs(be), Math.abs(Se)), a = be > 0 ? "prev" : "next";
      }
    }, x = () => {
      if (!(W.value || t !== "x")) {
        var le = R.value === "month" ? h : A;
        Tt(() => {
          le.value.forwardRef(a), no();
        });
      }
    }, oe = (le, he) => {
      var me = he === "month" ? S : P;
      if (me.value = v.value ? [le, le] : [me.value[0], le], v.value = !v.value, v.value) {
        var be = ae(me.value[0]).isAfter(me.value[1]), Se = be ? [me.value[1], me.value[0]] : [...me.value];
        V(e["onUpdate:modelValue"], Se), V(e.onChange, Se);
      }
    }, se = (le, he) => {
      var me = he === "month" ? k : C, be = he === "month" ? "YYYY-MM" : "YYYY-MM-DD", Se = me.value.map((Ze) => ae(Ze).format(be)), Ae = Se.findIndex((Ze) => Ze === le);
      Ae === -1 ? Se.push(le) : Se.splice(Ae, 1), V(e["onUpdate:modelValue"], Se), V(e.onChange, Se);
    }, ve = (le, he) => !m.value || !f.value ? !1 : J.value ? le === "month" ? he.index < f.value.index : j.value ? he < L(p.value) : f.value.index > w.value.index : m.value > b.value, Ce = (le) => {
      var {
        readonly: he,
        range: me,
        multiple: be,
        onChange: Se,
        "onUpdate:modelValue": Ae
      } = e;
      if (!(le < 0 || he)) {
        T.value = ve("day", le);
        var Ze = b.value + "-" + w.value.index + "-" + le, vn = ae(Ze).format("YYYY-MM-DD");
        me ? oe(vn, "day") : be ? se(vn, "day") : (V(Ae, vn), V(Se, vn));
      }
    }, Ye = (le) => {
      var {
        type: he,
        readonly: me,
        range: be,
        multiple: Se,
        onChange: Ae,
        onPreview: Ze,
        "onUpdate:modelValue": vn
      } = e;
      if (T.value = ve("month", le), he === "month" && !me) {
        var Vr = b.value + "-" + le.index;
        be ? oe(Vr, "month") : Se ? se(Vr, "month") : (V(vn, Vr), V(Ae, Vr));
      } else
        w.value = le, V(Ze, L(b.value), L(w.value.index));
      d.value = !1;
    }, xe = (le) => {
      b.value = "" + le, u.value = !1, d.value = !0, V(e.onPreview, L(b.value), L(w.value.index));
    }, Pe = (le, he) => {
      var me = he === "prev" ? -1 : 1;
      if (le === "year")
        b.value = "" + (L(b.value) + me);
      else {
        var be = L(w.value.index) + me;
        be < 1 && (b.value = "" + (L(b.value) - 1), be = 12), be > 12 && (b.value = "" + (L(b.value) + 1), be = 1), w.value = dt.find((Se) => L(Se.index) === be);
      }
      V(e.onPreview, L(b.value), L(w.value.index));
    }, dn = () => (e.multiple || e.range) && !ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Rt = (le) => ye(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, qs = (le, he) => {
      var me = he === "month" ? S : P, be = he === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = le.map((vn) => ae(vn).format(be)).slice(0, 2), Ae = me.value.some((vn) => Rt(vn));
      if (!Ae) {
        me.value = Se;
        var Ze = ae(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && Ze && (me.value = [me.value[1], me.value[0]]);
      }
    }, Ks = (le, he) => {
      var me = he === "month" ? k : C, be = he === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = Array.from(new Set(le.map((Ae) => ae(Ae).format(be))));
      me.value = Se.filter((Ae) => Ae !== "Invalid Date");
    }, Xs = (le) => {
      var he = ae(le).format("YYYY-MM-D");
      if (!Rt(he)) {
        var [me, be, Se] = he.split("-"), Ae = dt.find((Ze) => Ze.index === be);
        f.value = Ae, m.value = me, p.value = Se, w.value = Ae, b.value = me;
      }
    }, no = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return te(() => e.modelValue, (le) => {
      if (!(!dn() || Rt(le) || !le))
        if (e.range) {
          if (!ye(le))
            return;
          v.value = le.length !== 1, qs(le, e.type);
        } else if (e.multiple) {
          if (!ye(le))
            return;
          Ks(le, e.type);
        } else
          Xs(le);
    }, {
      immediate: !0
    }), te(R, no), {
      n: vc,
      classes: fc,
      monthPanelEl: h,
      dayPanelEl: A,
      reverse: T,
      currentDate: i,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: b,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: y,
      getDateTitle: O,
      getPanelType: R,
      getChoose: B,
      getPreview: I,
      componentProps: $,
      slotProps: q,
      formatRange: z,
      clickEl: Z,
      handleTouchstart: N,
      handleTouchmove: H,
      handleTouchend: x,
      getChooseDay: Ce,
      getChooseMonth: Ye,
      getChooseYear: xe,
      checkPreview: Pe
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, hi.apply(this, arguments);
}
function mc(e) {
  return ["left", "center", "right"].includes(e);
}
var pc = hi({
  show: {
    type: Boolean,
    default: !1
  },
  width: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: mc
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  },
  onBeforeClose: Y(),
  onConfirm: Y(),
  onCancel: Y(),
  "onUpdate:show": Y()
}, en(Qa, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
]));
function gi() {
  return gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, gi.apply(this, arguments);
}
var {
  n: hc,
  classes: gc
} = ee("dialog");
function yc(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
  return g(), pe(
    a,
    {
      class: c(e.n("popup")),
      "var-dialog-cover": "",
      show: e.popupShow,
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.popupCloseOnClickOverlay,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange,
      onClickOverlay: e.handleClickOverlay
    },
    {
      default: ce(() => [D(
        "div",
        Ee({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: gi({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: c(e.n("title"))
          },
          [G(e.$slots, "title", {}, () => [ge(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), D(
          "div",
          {
            class: c(e.n("message")),
            style: X({
              textAlign: e.messageAlign
            })
          },
          [G(e.$slots, "default", {}, () => [ge(
            ne(e.message),
            1
          )])],
          6
        ), D(
          "div",
          {
            class: c(e.n("actions"))
          },
          [e.cancelButton ? (g(), pe(
            r,
            {
              key: 0,
              class: c(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: ce(() => [ge(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Q("v-if", !0), e.confirmButton ? (g(), pe(
            r,
            {
              key: 1,
              class: c(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: ce(() => [ge(
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Q("v-if", !0)],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
const mr = _({
  render: yc,
  name: "VarDialog",
  components: {
    VarPopup: Cn,
    VarButton: rn
  },
  inheritAttrs: !1,
  props: pc,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => V(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (V(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        V(e["onUpdate:show"], !1);
      }
    }, i = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (V(s), l != null) {
        l("confirm", a);
        return;
      }
      V(e["onUpdate:show"], !1);
    }, o = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (V(s), l != null) {
        l("cancel", a);
        return;
      }
      V(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), te(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: hc,
      classes: gc,
      pack: We,
      dt: kt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: we
    };
  }
});
var Hn;
function wr(e) {
  return Ui() ? new Promise((n) => {
    wr.close();
    var r = Ke(e) || Ge(e) ? {
      message: String(e)
    } : e, a = Ne(r);
    a.teleport = "body", Hn = a;
    var {
      unmountInstance: t
    } = Aa(mr, a, {
      onConfirm: () => {
        V(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        V(a.onCancel), n("cancel");
      },
      onClose: () => {
        V(a.onClose), n("close");
      },
      onClosed: () => {
        V(a.onClosed), t(), Hn === a && (Hn = null);
      },
      onRouteChange: () => {
        t(), Hn === a && (Hn = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
mr.install = function(e) {
  e.component(mr.name, mr);
};
wr.install = function(e) {
  e.component(mr.name, mr);
};
wr.close = () => {
  if (Hn != null) {
    var e = Hn;
    Hn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
wr.Component = mr;
var bc = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  hairline: {
    type: Boolean,
    default: !1
  }
};
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Dr.apply(this, arguments);
}
var {
  n: wc,
  classes: Sc
} = ee("divider");
function Cc(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: X(e.style)
    },
    [G(e.$slots, "default", {}, () => [e.description ? (g(), E(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ne(e.description),
      3
    )) : Q("v-if", !0)])],
    6
  );
}
const Zr = _({
  render: Cc,
  name: "VarDivider",
  props: bc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = F(() => Xt(e.inset) ? e.inset : !0), i = F(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Xt(l) || l === 0)
        return Dr({}, d);
      var v = L(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Dr({}, d, {
        height: "calc(80% - " + we(f) + ")"
      }) : Dr({}, d, {
        width: "calc(100% - " + we(f) + ")",
        left: v > 0 ? we(f) : we(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Ue(() => {
      o();
    }), Li(() => {
      o();
    }), Dr({
      n: wc,
      classes: Sc
    }, nu(a), {
      style: i,
      isInset: t
    });
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
function kc(e) {
  return ["start", "end"].includes(e);
}
var $c = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  scrollToError: {
    type: String,
    validator: kc
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Po(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Tc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Po(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Po(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Oc
} = ee("form");
function Vc(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Zn = _({
  render: Vc,
  name: "VarForm",
  props: $c,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = iv(), i = (d, v) => {
      d === -1 || !e.scrollToError || setTimeout(() => {
        var f = Or(v), m = f === window ? 0 : vo(f), p = vo(v) - m - De(e.scrollToErrorOffsetY);
        Wa(f, {
          top: p,
          animation: Zt
        });
      }, 300);
    }, o = /* @__PURE__ */ function() {
      var d = Tc(function* () {
        var v, f = yield Promise.all(a.map((b) => {
          var {
            validate: T
          } = b;
          return T();
        })), [m, p] = lu(f, (b) => b === !1, e.scrollToError), w = (v = a[p].instance.proxy) == null ? void 0 : v.$el;
        return i(p, w), !!m;
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), l = () => a.forEach((d) => {
      var {
        reset: v
      } = d;
      return v();
    }), s = () => a.forEach((d) => {
      var {
        resetValidation: v
      } = d;
      return v();
    }), u = {
      disabled: n,
      readonly: r
    };
    return t(u), {
      n: Oc,
      validate: o,
      reset: l,
      resetValidation: s
    };
  }
});
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
Zn.useValidation = gn;
Zn.useForm = yn;
function Io(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Nt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Io(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Io(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yi.apply(this, arguments);
}
var Ec = "background-image", Mc = "lazy-loading", Pc = "lazy-error", No = "lazy-attempt", Ic = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], bi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ma = [], yt = [], vs = su(100), Le = {
  loading: bi,
  error: bi,
  attempt: 3,
  throttleWait: 300,
  events: Ic
}, Gi = Ri(_a, Le.throttleWait);
function Bt(e, n) {
  e._lazy.arg === Ec ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Nc(e) {
  e._lazy.loading && Bt(e, e._lazy.loading), _a();
}
function Bc(e) {
  e._lazy.error && Bt(e, e._lazy.error), e._lazy.state = "error", Ki(e), _a();
}
function fs(e, n) {
  Bt(e, n), e._lazy.state = "success", Ki(e), _a();
}
function Dc(e) {
  var n;
  yt.includes(e) || (yt.push(e), (n = Le.events) == null || n.forEach((r) => {
    e.addEventListener(r, Gi, {
      passive: !0
    });
  }));
}
function Ac() {
  yt.forEach((e) => {
    var n;
    (n = Le.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Gi);
    });
  }), yt.length = 0;
}
function Lc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Mc)) != null ? r : Le.loading,
    error: (a = e.getAttribute(Pc)) != null ? a : Le.error,
    attempt: e.getAttribute(No) ? Number(e.getAttribute(No)) : Le.attempt
  };
  e._lazy = yi({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Bt(e, bi), V(Le.filter, e._lazy);
}
function zc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, vs.add(n), fs(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Bc(e) : cs(e);
  });
}
function cs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (vs.has(n)) {
      fs(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Nc(e), zc(e, n);
  }
}
function qi(e) {
  return wi.apply(this, arguments);
}
function wi() {
  return wi = Nt(function* (e) {
    (yield vu(e)) && cs(e);
  }), wi.apply(this, arguments);
}
function _a() {
  Ma.forEach((e) => qi(e));
}
function Rc(e) {
  return Si.apply(this, arguments);
}
function Si() {
  return Si = Nt(function* (e) {
    !Ma.includes(e) && Ma.push(e), fu(e).forEach(Dc), yield qi(e);
  }), Si.apply(this, arguments);
}
function Ki(e) {
  Ct(Ma, e), Ma.length === 0 && Ac();
}
function Uc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ms(e, n) {
  return Ci.apply(this, arguments);
}
function Ci() {
  return Ci = Nt(function* (e, n) {
    Lc(e, n), yield Rc(e);
  }), Ci.apply(this, arguments);
}
function Yc(e, n) {
  return ki.apply(this, arguments);
}
function ki() {
  return ki = Nt(function* (e, n) {
    if (!Uc(e, n)) {
      Ma.includes(e) && (yield qi(e));
      return;
    }
    yield ms(e, n);
  }), ki.apply(this, arguments);
}
function Fc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: i,
    filter: o
  } = e;
  Le.events = n != null ? n : Le.events, Le.loading = r != null ? r : Le.loading, Le.error = a != null ? a : Le.error, Le.attempt = t != null ? t : Le.attempt, Le.throttleWait = i != null ? i : Le.throttleWait, Le.filter = o;
}
var bt = {
  mounted: ms,
  unmounted: Ki,
  updated: Yc,
  install(e, n) {
    Fc(n), Gi = Ri(_a, Le.throttleWait), e.directive("lazy", this);
  }
};
function Wc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Hc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Wc,
    default: "fill"
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !0
  },
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: jc,
  classes: Gc
} = ee("image"), qc = ["alt", "title", "lazy-error", "lazy-loading"], Kc = ["alt", "title", "src"];
function Xc(e, n) {
  var r = qe("lazy"), a = qe("ripple");
  return $e((g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? $e((g(), E(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: X({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      qc
    )), [[r, e.src]]) : (g(), E(
      "img",
      {
        key: 1,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: X({
          objectFit: e.fit
        }),
        src: e.src,
        onLoad: n[3] || (n[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[4] || (n[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[5] || (n[5] = function() {
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      Kc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Jr = _({
  render: Xc,
  name: "VarImage",
  directives: {
    Lazy: bt,
    Ripple: Fe
  },
  props: Hc,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: i,
        onLoad: o,
        onError: l
      } = e;
      i ? (t._lazy.state === "success" && V(o, a), t._lazy.state === "error" && V(l, a)) : V(o, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: i
      } = e;
      !t && V(i, a);
    };
    return {
      n: jc,
      classes: Gc,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var ps = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), hs = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Zc() {
  var {
    childProviders: e,
    bindChildren: n
  } = sn(ps), {
    length: r
  } = pn(hs);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var gs = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: Y()
};
function Bo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Bo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Bo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var Qc = 250, xc = 20, {
  n: _c,
  classes: em
} = ee("swipe"), nm = ["onClick"];
function rm(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: X({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)",
          transitionDuration: e.lockDuration ? "0ms" : e.toNumber(e.duration) + "ms"
        }),
        onTouchstart: n[0] || (n[0] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[1] || (n[1] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[2] || (n[2] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [G(e.$slots, "default")],
      38
    ), G(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(g(!0), E(
        Ve,
        null,
        Be(e.length, (r, a) => (g(), E(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: X({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          nm
        ))),
        128
      ))],
      2
    )) : Q("v-if", !0)])],
    2
  );
}
const Jn = _({
  render: rm,
  name: "VarSwipe",
  props: gs,
  setup(e) {
    var n = M(null), r = M(0), a = F(() => e.vertical), t = M(0), i = M(0), o = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Zc(), v = !1, f = -1, m, p, w, b, T, k = (N) => s.find((U) => {
      var {
        index: H
      } = U;
      return H.value === N;
    }), C = () => {
      !e.loop || (i.value >= 0 && k(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && k(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (k(d.value - 1).setTranslate(0), k(0).setTranslate(0)));
    }, S = (N) => {
      var U = Ge(N) ? N : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: H
      } = e;
      return U <= -1 ? H ? -1 : 0 : U >= d.value ? H ? d.value : d.value - 1 : U;
    }, P = (N) => {
      var {
        loop: U
      } = e;
      return N === -1 ? U ? d.value - 1 : 0 : N === d.value ? U ? 0 : d.value - 1 : N;
    }, h = (N) => {
      var {
        loop: U
      } = e;
      return N < 0 ? U ? d.value - 1 : 0 : N > d.value - 1 ? U ? 0 : d.value - 1 : N;
    }, A = (N) => {
      var U = i.value >= r.value, H = i.value <= -t.value, x = 0, oe = -(t.value - r.value);
      o.value = !0, (U || H) && (o.value = !0, i.value = H ? x : oe, k(0).setTranslate(0), k(d.value - 1).setTranslate(0)), Tt(() => {
        o.value = !1, V(N);
      });
    }, $ = () => {
      l.value = h(L(e.initialIndex));
    }, B = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (I(), f = window.setTimeout(() => {
        z(), B();
      }, L(N)));
    }, I = () => {
      f && clearTimeout(f);
    }, y = (N, U) => {
      if (N > U && N > 10)
        return "horizontal";
      if (U > N && U > 10)
        return "vertical";
    }, O = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: U,
          clientY: H
        } = N.touches[0];
        m = U, p = H, w = performance.now(), v = !0, I(), A(() => {
          o.value = !0;
        });
      }
    }, R = (N) => {
      var {
        touchable: U,
        vertical: H
      } = e;
      if (!(!v || !U)) {
        var {
          clientX: x,
          clientY: oe
        } = N.touches[0], se = Math.abs(x - m), ve = Math.abs(oe - p), Ce = y(se, ve), Ye = H ? "vertical" : "horizontal";
        if (Ce === Ye) {
          N.preventDefault();
          var xe = b !== void 0 ? x - b : 0, Pe = T !== void 0 ? oe - T : 0;
          b = x, T = oe, i.value += H ? Pe : xe, C();
        }
      }
    }, W = () => {
      if (!!v) {
        var {
          vertical: N,
          onChange: U
        } = e, H = N ? T < p : b < m, x = Math.abs(N ? p - T : m - b), oe = performance.now() - w <= Qc && x >= xc, se = oe ? S(H ? l.value + 1 : l.value - 1) : S();
        v = !1, o.value = !1, b = void 0, T = void 0, i.value = se * -r.value;
        var ve = l.value;
        l.value = P(se), B(), ve !== l.value && V(U, l.value);
      }
    }, q = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), B(), setTimeout(() => {
        o.value = !1;
      });
    }, z = () => {
      if (!(d.value <= 1)) {
        var {
          loop: N,
          onChange: U
        } = e, H = l.value;
        l.value = h(H + 1), V(U, l.value), A(() => {
          if (H === d.value - 1 && N) {
            k(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          H !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, J = () => {
      if (!(d.value <= 1)) {
        var {
          loop: N,
          onChange: U
        } = e, H = l.value;
        l.value = h(H - 1), V(U, l.value), A(() => {
          if (H === 0 && N) {
            k(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          H !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, j = (N) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var U = N > l.value ? z : J;
        Array.from({
          length: Math.abs(N - l.value)
        }).forEach(U);
      }
    }, Z = {
      size: r,
      vertical: a
    };
    return u(Z), te(() => d.value, /* @__PURE__ */ Jc(function* () {
      yield Vn(), $(), q();
    })), Ue(() => {
      window.addEventListener("resize", q);
    }), tr(() => {
      window.removeEventListener("resize", q), I();
    }), {
      n: _c,
      classes: em,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: O,
      handleTouchmove: R,
      handleTouchend: W,
      next: z,
      prev: J,
      to: j,
      resize: q,
      toNumber: L
    };
  }
});
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
function am() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(ps), {
    index: r
  } = hn(hs);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: tm
} = ee("swipe-item");
function im(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n()),
      style: X({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const Qn = _({
  render: im,
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = am(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: tm,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Qn.install = function(e) {
  e.component(Qn.name, Qn);
};
function $i() {
  return $i = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, $i.apply(this, arguments);
}
var om = $i({
  show: {
    type: Boolean,
    default: !1
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  "onUpdate:show": Y()
}, en(gs, ["loop", "indicator", "onChange"]), en(Qa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: Do,
  classes: lm
} = ee("image-preview"), Ao = 12, Lo = 200, sm = 350, zo = 200, um = ["src", "alt"];
function dm(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), i = ie("var-popup");
  return g(), pe(
    i,
    {
      class: c(e.n("popup")),
      "var-image-preview-cover": "",
      transition: e.n("$-fade"),
      show: e.popupShow,
      overlay: !1,
      "close-on-click-overlay": !1,
      "lock-scroll": e.lockScroll,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    },
    {
      default: ce(() => [re(
        a,
        Ee({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ce(() => [(g(!0), E(
            Ve,
            null,
            Be(e.images, (o) => (g(), pe(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: ce(() => [D(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: X({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
                    }),
                    onTouchstart: n[0] || (n[0] = function() {
                      return e.handleTouchstart && e.handleTouchstart(...arguments);
                    }),
                    onTouchmove: n[1] || (n[1] = function() {
                      return e.handleTouchmove && e.handleTouchmove(...arguments);
                    }),
                    onTouchend: n[2] || (n[2] = function() {
                      return e.handleTouchend && e.handleTouchend(...arguments);
                    })
                  },
                  [D(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    um
                  )],
                  38
                )]),
                _: 2
              },
              1032,
              ["class"]
            ))),
            128
          ))]),
          indicator: ce((o) => {
            var {
              index: l,
              length: s
            } = o;
            return [G(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (g(), E(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ne(l + 1) + " / " + ne(s),
              3
            )) : Q("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), G(e.$slots, "close-icon", {}, () => [e.closeable ? (g(), pe(
        t,
        {
          key: 0,
          class: c(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : Q("v-if", !0)]), D(
        "div",
        {
          class: c(e.n("extra"))
        },
        [G(e.$slots, "extra")],
        2
      )]),
      _: 3
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const pr = _({
  render: dm,
  name: "VarImagePreview",
  components: {
    VarSwipe: Jn,
    VarSwipeItem: Qn,
    VarPopup: Cn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: om,
  setup(e) {
    var n = M(!1), r = F(() => {
      var {
        images: I,
        current: y
      } = e, O = I.findIndex((R) => R === y);
      return O >= 0 ? O : 0;
    }), a = M(1), t = M(0), i = M(0), o = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (I, y) => {
      var {
        clientX: O,
        clientY: R
      } = I, {
        clientX: W,
        clientY: q
      } = y;
      return Math.abs(Math.sqrt(Math.pow(W - O, 2) + Math.pow(q - R, 2)));
    }, m = (I, y) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: y
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, zo);
    }, w = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, b = (I) => d ? f(d, I) <= Ao && I.timestamp - d.timestamp <= Lo && d.target === I.target : !1, T = (I) => !I || !u || !d ? !1 : f(u, d) <= Ao && Date.now() - d.timestamp < sm && (I === u.target || I.parentNode === u.target), k = (I) => {
      v = window.setTimeout(() => {
        T(I.target) && B(), u = null;
      }, Lo);
    }, C = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: y
      } = I, O = m(y[0], I.currentTarget);
      if (u = O, b(O)) {
        a.value > 1 ? w() : p();
        return;
      }
      d = O;
    }, S = (I) => {
      var {
        offsetWidth: y,
        offsetHeight: O
      } = I, {
        naturalWidth: R,
        naturalHeight: W
      } = I.querySelector("." + Do("image"));
      return {
        width: y,
        height: O,
        imageRadio: W / R,
        rootRadio: O / y,
        zoom: L(e.zoom)
      };
    }, P = (I) => {
      var {
        zoom: y,
        imageRadio: O,
        rootRadio: R,
        width: W,
        height: q
      } = S(I);
      if (!O)
        return 0;
      var z = O > R ? q / O : W;
      return Math.max(0, (y * z - W) / 2) / y;
    }, h = (I) => {
      var {
        zoom: y,
        imageRadio: O,
        rootRadio: R,
        width: W,
        height: q
      } = S(I);
      if (!O)
        return 0;
      var z = O > R ? q : W * O;
      return Math.max(0, (y * z - q) / 2) / y;
    }, A = (I, y, O) => I + y >= O ? O : I + y <= -O ? -O : I + y, $ = (I) => {
      if (!!d) {
        var y = I.currentTarget, {
          touches: O
        } = I, R = m(O[0], y);
        if (a.value > 1) {
          var W = R.clientX - d.clientX, q = R.clientY - d.clientY, z = P(y), J = h(y);
          t.value = A(t.value, W, z), i.value = A(i.value, q, J);
        }
        d = R;
      }
    }, B = () => {
      if (a.value > 1) {
        w(), setTimeout(() => V(e["onUpdate:show"], !1), zo);
        return;
      }
      V(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: Do,
      classes: lm,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: C,
      handleTouchmove: $,
      handleTouchend: k,
      close: B
    };
  }
});
var jn;
function rr(e) {
  if (!!Ui()) {
    rr.close();
    var n = Ke(e) ? {
      images: [e]
    } : ye(e) ? {
      images: e
    } : e, r = Ne(n);
    r.teleport = "body", jn = r;
    var {
      unmountInstance: a
    } = Aa(pr, r, {
      onClose: () => V(r.onClose),
      onClosed: () => {
        V(r.onClosed), a(), jn === r && (jn = null);
      },
      onRouteChange: () => {
        a(), jn === r && (jn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
rr.close = () => {
  if (jn != null) {
    var e = jn;
    jn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
pr.install = function(e) {
  e.component(pr.name, pr);
};
rr.install = function(e) {
  e.component(pr.name, pr);
};
rr.Component = pr;
var ys = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onScroll: Y()
};
function Ro(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vm(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ro(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ro(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: fm,
  classes: cm
} = ee("sticky");
function mm(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: X({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [D(
      "div",
      {
        class: c(e.n("wrapper")),
        ref: "wrapperEl",
        style: X({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [G(e.$slots, "default")],
      6
    )],
    6
  );
}
const xn = _({
  render: mm,
  name: "VarSticky",
  props: ys,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), i = M("0px"), o = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && a.value), f = F(() => De(e.offsetTop)), m, p = () => {
      var {
        onScroll: T,
        cssMode: k,
        disabled: C
      } = e;
      if (!C) {
        var S = 0;
        if (m !== window) {
          var {
            top: P
          } = m.getBoundingClientRect();
          S = P;
        }
        var h = r.value, A = n.value, {
          top: $,
          left: B
        } = A.getBoundingClientRect(), I = $ - S;
        I <= f.value ? (k || (o.value = A.offsetWidth + "px", l.value = A.offsetHeight + "px", t.value = S + f.value + "px", i.value = B + "px", s.value = h.offsetWidth + "px", u.value = h.offsetHeight + "px", a.value = !0), V(T, f.value, !0)) : (a.value = !1, V(T, I, !1));
      }
    }, w = /* @__PURE__ */ function() {
      var T = vm(function* () {
        yield Vn(), m = Or(n.value), m !== window && m.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), b = () => {
      m !== window && m.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return te(() => e.disabled, p), Bi(w), Di(b), Ue(w), tr(b), {
      n: fm,
      classes: cm,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: i,
      fixedWidth: o,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: L
    };
  }
});
xn.install = function(e) {
  e.component(xn.name, xn);
};
var bs = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), ws = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function pm() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(bs), {
    length: r
  } = pn(ws);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function hm() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(bs), {
    index: r
  } = hn(ws);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var gm = {
  index: {
    type: [Number, String]
  }
}, {
  n: ym,
  classes: bm
} = ee("index-anchor");
function wm(e, n) {
  return g(), pe(
    Da(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ce(() => [D(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [G(e.$slots, "default", {}, () => [ge(
          ne(e.name),
          1
        )])],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
const Qr = _({
  render: wm,
  name: "VarIndexAnchor",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: gm,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = hm(), t = M(0), i = M(!1), o = F(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (b) => {
      i.value = b;
    }, w = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(w), {
      n: ym,
      classes: bm,
      name: o,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: i,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Re
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var Sm = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: Y(),
  onChange: Y()
};
function Uo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ht(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Uo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Uo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Cm,
  classes: km
} = ee("index-bar"), $m = ["onClick"];
function Tm(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [G(e.$slots, "default"), D(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: X({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(g(!0), E(
        Ve,
        null,
        Be(e.anchorNameList, (r) => (g(), E(
          "li",
          {
            key: r,
            class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: X({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          ne(r),
          15,
          $m
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const xr = _({
  render: Tm,
  name: "VarIndexBar",
  props: Sm,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = pm(), t = M(""), i = M(null), o = M(null), l = M([]), s = M(), u = F(() => e.sticky), d = F(() => e.cssMode), v = F(() => De(e.stickyOffsetTop)), f = F(() => e.zIndex), m = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(m);
    var p = (k) => {
      var C = zi(k) ? k.name.value : k;
      C === s.value || C === void 0 || (s.value = C, V(e.onChange, C));
    }, w = () => {
      var k = $t(i.value), C = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: S
      } = o.value;
      r.forEach((P, h) => {
        var A = P.ownTop.value, $ = k - A + v.value - S, B = h === r.length - 1 ? C : r[h + 1].ownTop.value - P.ownTop.value;
        $ >= 0 && $ < B && !t.value && (h && !e.cssMode && r[h - 1].setDisabled(!0), P.setDisabled(!1), p(P));
      });
    }, b = /* @__PURE__ */ function() {
      var k = Ht(function* (C, S) {
        var {
          offsetTop: P
        } = o.value;
        if (S && V(e.onClick, C), C !== s.value) {
          var h = r.find((B) => {
            var {
              name: I
            } = B;
            return C === I.value;
          });
          if (!!h) {
            var A = h.ownTop.value - v.value + P, $ = Yi(i.value);
            t.value = C, p(C), yield Wa(i.value, {
              left: $,
              top: A,
              animation: bl,
              duration: L(e.duration)
            }), Tt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(S, P) {
        return k.apply(this, arguments);
      };
    }(), T = (k) => {
      On(() => b(k));
    };
    return te(() => n.value, /* @__PURE__ */ Ht(function* () {
      yield Vn(), r.forEach((k) => {
        var {
          name: C,
          setOwnTop: S
        } = k;
        C.value && l.value.push(C.value), S();
      });
    })), Ue(/* @__PURE__ */ Ht(function* () {
      yield Vn(), i.value = Or(o.value), i.value.addEventListener("scroll", w);
    })), Ai(() => {
      V(i.value.removeEventListener, "scroll", w);
    }), {
      n: Cm,
      classes: km,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: L,
      scrollTo: T,
      anchorClick: b
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
function Om(e) {
  return ["text", "password", "number"].includes(e);
}
var Vm = {
  modelValue: {
    type: String
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text",
    validator: Om
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  maxlength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  resize: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onInput: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: jt,
  classes: Em
} = ee("input"), Mm = ["id", "disabled", "type", "value", "maxlength", "rows"], Pm = ["id", "disabled", "type", "value", "maxlength"], Im = ["for"];
function Nm(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: X({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "prepend-icon")],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (g(), E(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
        )) : Q("v-if", !0), e.textarea ? (g(), E(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: X({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none"
            }),
            onFocus: n[0] || (n[0] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[1] || (n[1] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[2] || (n[2] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[3] || (n[3] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[4] || (n[4] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          `
        `,
          46,
          Mm
        )) : (g(), E(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: X({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
            }),
            onFocus: n[5] || (n[5] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[6] || (n[6] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[7] || (n[7] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[8] || (n[8] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[9] || (n[9] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          null,
          46,
          Pm
        )), D(
          "label",
          {
            class: c(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: X({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ne(e.placeholder),
          15,
          Im
        )],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (g(), pe(
          r,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : Q("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: X({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: X({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : Q("v-if", !0), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    2
  );
}
const hr = _({
  render: Nm,
  name: "VarInput",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  props: Vm,
  setup(e) {
    var n = M("var-input-" + Ba().uid), r = M(null), a = M(!1), t = F(() => {
      var {
        maxlength: y,
        modelValue: O
      } = e;
      return y ? Gn(O) ? "0 / " + y : String(O).length + "/" + y : "";
    }), {
      bindForm: i,
      form: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = (y) => {
      Me(() => {
        var {
          validateTrigger: O,
          rules: R,
          modelValue: W
        } = e;
        s(O, y, R, W);
      });
    }, f = () => {
      var {
        hint: y,
        modelValue: O
      } = e;
      if (!y && !Gn(O))
        return jt("--placeholder-hidden");
      if (y && (!Gn(O) || a.value))
        return jt("--placeholder-hint");
    }, m = (y) => {
      a.value = !0, V(e.onFocus, y), v("onFocus");
    }, p = (y) => {
      a.value = !1, V(e.onBlur, y), v("onBlur");
    }, w = (y) => {
      var O = y.target, {
        value: R
      } = O;
      R = S(C(R)), O.value = R, V(e["onUpdate:modelValue"], R), V(e.onInput, R, y), v("onInput");
    }, b = (y) => {
      var O = y.target, {
        value: R
      } = O;
      R = S(C(R)), O.value = R, V(e.onChange, R, y), v("onChange");
    }, T = () => {
      var {
        disabled: y,
        readonly: O,
        clearable: R,
        onClear: W
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || y || O || !R || (V(e["onUpdate:modelValue"], ""), V(W, ""), v("onClear"));
    }, k = (y) => {
      var {
        disabled: O,
        onClick: R
      } = e;
      o != null && o.disabled.value || O || (V(R, y), v("onClick"));
    }, C = (y) => e.modelModifiers.trim ? y.trim() : y, S = (y) => e.maxlength ? y.slice(0, L(e.maxlength)) : y, P = (y) => {
      var {
        disabled: O,
        readonly: R
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || O || R || y.stopPropagation();
    }, h = () => {
      V(e["onUpdate:modelValue"], ""), d();
    }, A = () => u(e.rules, e.modelValue), $ = () => {
      var y;
      (y = r.value) == null || y.focus();
    }, B = () => {
      r.value.blur();
    }, I = {
      reset: h,
      validate: A,
      resetValidation: d
    };
    return V(i, I), Ue(() => {
      e.autofocus && $();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: jt,
      classes: Em,
      isEmpty: Gn,
      computePlaceholderState: f,
      handleFocus: m,
      handleBlur: p,
      handleInput: w,
      handleChange: b,
      handleClear: T,
      handleClick: k,
      handleTouchstart: P,
      validate: A,
      resetValidation: d,
      reset: h,
      focus: $,
      blur: B
    };
  }
});
hr.install = function(e) {
  e.component(hr.name, hr);
};
function Bm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Dm(e) {
  return ["always", "hover", "none"].includes(e);
}
var Am = {
  type: {
    type: String,
    default: "default",
    validator: Bm
  },
  href: {
    type: String
  },
  target: {
    type: String
  },
  to: {
    type: [String, Object]
  },
  replace: {
    type: Boolean,
    default: !1
  },
  underline: {
    type: String,
    default: "always",
    validator: Dm
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  textSize: {
    type: [String, Number]
  },
  textColor: {
    type: String
  },
  onClick: Y()
}, {
  n: Lm,
  classes: zm
} = ee("link");
function Rm(e, n) {
  return g(), pe(
    Da(e.tag),
    Ee(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ce(() => [G(e.$slots, "default")]),
      _: 3
    },
    16,
    ["class", "style", "onClick"]
  );
}
const _r = _({
  render: Rm,
  name: "VarLink",
  props: Am,
  setup(e) {
    var n = F(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = F(() => {
      var {
        disabled: t,
        href: i,
        target: o,
        to: l,
        replace: s
      } = e;
      return t ? {} : i ? {
        href: i,
        target: o
      } : l ? {
        to: l,
        target: o,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: i,
        onClick: o
      } = e;
      i || V(o, t);
    };
    return {
      n: Lm,
      classes: zm,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var Um = {
  loading: {
    type: Boolean,
    default: !1
  },
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: Y(),
  "onUpdate:loading": Y(),
  "onUpdate:error": Y()
};
function Yo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ym(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Yo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Yo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Fm,
  classes: Wm
} = ee("list");
function Hm(e, n) {
  var r = ie("var-loading"), a = qe("ripple");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [G(e.$slots, "default"), e.loading ? G(e.$slots, "loading", {
      key: 0
    }, () => [D(
      "div",
      {
        class: c(e.n("loading"))
      },
      [D(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), re(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : Q("v-if", !0), e.finished ? G(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: c(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : Q("v-if", !0), e.error ? G(e.$slots, "error", {
      key: 2
    }, () => [$e((g(), E(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [ge(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : Q("v-if", !0), D(
      "div",
      {
        class: c(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
    )],
    2
  );
}
const ea = _({
  render: Hm,
  name: "VarList",
  directives: {
    Ripple: Fe
  },
  components: {
    VarLoading: Tn
  },
  props: Um,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      V(e["onUpdate:error"], !1), V(e["onUpdate:loading"], !0), V(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = Ym(function* () {
        yield Me();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && i() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return Ue(() => {
      a = Or(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), tr(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: We,
      listEl: n,
      detectorEl: r,
      dt: kt,
      isNumber: Ge,
      load: t,
      check: o,
      n: Fm,
      classes: Wm
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var jm = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  errorColor: {
    type: String
  },
  height: {
    type: [Number, String]
  },
  top: {
    type: [Number, String]
  }
}, {
  classes: Gm,
  n: Fo
} = ee("loading-bar");
const qm = _({
  name: "VarLoadingBar",
  props: jm,
  setup(e) {
    return () => re("div", {
      class: Gm(Fo(), [e.error, Fo("--error")]),
      style: {
        zIndex: ln.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
var Ss, Wo, on = Ne({
  value: 0,
  opacity: 0,
  error: !1
}), Km = (e) => {
  Object.assign(on, e);
}, Cs = () => {
  Ss = window.setTimeout(() => {
    if (!(on.value >= 95)) {
      var e = Math.random();
      on.value < 70 && (e = Math.round(5 * Math.random())), on.value += e, Cs();
    }
  }, 200);
}, Xm = () => {
  Wo || (Wo = !0, Aa(qm, on)), (!on.error || on.value === 100) && (on.value = 0), setTimeout(() => {
    on.opacity = 1;
  }, 200), Cs();
}, Zm = () => {
  on.value = 100, setTimeout(() => {
    on.opacity = 0, setTimeout(() => {
      on.error = !1;
    }, 250);
  }, 300), window.clearTimeout(Ss);
}, Jm = () => {
  on.error = !0, ja.start(), setTimeout(ja.finish, 300);
}, ja = {
  start: Xm,
  finish: Zm,
  error: Jm,
  mergeConfig: Km
}, Qm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function vt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Qm[n];
  });
}
var Nn = "top", ar = "bottom", Sr = "right", _n = "left", Dt = "auto", At = [Nn, ar, Sr, _n], Lt = "start", Ga = "end", xm = "clippingParents", ks = "viewport", La = "popper", _m = "reference", Ho = /* @__PURE__ */ At.reduce(function(e, n) {
  return e.concat([n + "-" + Lt, n + "-" + Ga]);
}, []), $s = /* @__PURE__ */ [].concat(At, [Dt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Lt, n + "-" + Ga]);
}, []), ep = "beforeRead", np = "read", rp = "afterRead", ap = "beforeMain", tp = "main", ip = "afterMain", op = "beforeWrite", lp = "write", sp = "afterWrite", Ti = [ep, np, rp, ap, tp, ip, op, lp, sp];
function Bn(e) {
  return e.split("-")[0];
}
var up = {
  start: "end",
  end: "start"
};
function jo(e) {
  return e.replace(/start|end/g, function(n) {
    return up[n];
  });
}
function bn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Cr(e) {
  var n = bn(e).Element;
  return e instanceof n || e instanceof Element;
}
function cn(e) {
  var n = bn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Xi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = bn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function or(e) {
  return ((Cr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Ya = Math.max, Go = Math.min, Pa = Math.round;
function Oi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Ts() {
  return !/^((?!chrome|android).)*safari/i.test(Oi());
}
function Ia(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && cn(e) && (t = e.offsetWidth > 0 && Pa(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Pa(a.height) / e.offsetHeight || 1);
  var o = Cr(e) ? bn(e) : window, l = o.visualViewport, s = !Ts() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
  return {
    width: v,
    height: f,
    top: d,
    right: u + v,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function Zi(e) {
  var n = bn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ji(e) {
  return Ia(or(e)).left + Zi(e).scrollLeft;
}
function dp(e, n) {
  var r = bn(e), a = or(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = Ts();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + Ji(e),
    y: s
  };
}
function $n(e) {
  return bn(e).getComputedStyle(e);
}
function vp(e) {
  var n, r = or(e), a = Zi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Ya(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Ya(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Ji(e), s = -a.scrollTop;
  return $n(t || r).direction === "rtl" && (l += Ya(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Mn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function zt(e) {
  return Mn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Xi(e) ? e.host : null) || or(e);
}
function Qi(e) {
  var n = $n(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Os(e) {
  return ["html", "body", "#document"].indexOf(Mn(e)) >= 0 ? e.ownerDocument.body : cn(e) && Qi(e) ? e : Os(zt(e));
}
function Fa(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Os(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = bn(a), o = t ? [i].concat(i.visualViewport || [], Qi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(Fa(zt(o)));
}
function fp(e) {
  return ["table", "td", "th"].indexOf(Mn(e)) >= 0;
}
function qo(e) {
  return !cn(e) || $n(e).position === "fixed" ? null : e.offsetParent;
}
function cp(e) {
  var n = /firefox/i.test(Oi()), r = /Trident/i.test(Oi());
  if (r && cn(e)) {
    var a = $n(e);
    if (a.position === "fixed")
      return null;
  }
  var t = zt(e);
  for (Xi(t) && (t = t.host); cn(t) && ["html", "body"].indexOf(Mn(t)) < 0; ) {
    var i = $n(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function xi(e) {
  for (var n = bn(e), r = qo(e); r && fp(r) && $n(r).position === "static"; )
    r = qo(r);
  return r && (Mn(r) === "html" || Mn(r) === "body" && $n(r).position === "static") ? n : r || cp(e) || n;
}
function mp(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Xi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Vi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pp(e, n) {
  var r = Ia(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ko(e, n, r) {
  return n === ks ? Vi(dp(e, r)) : Cr(n) ? pp(n, r) : Vi(vp(or(e)));
}
function hp(e) {
  var n = Fa(zt(e)), r = ["absolute", "fixed"].indexOf($n(e).position) >= 0, a = r && cn(e) ? xi(e) : e;
  return Cr(a) ? n.filter(function(t) {
    return Cr(t) && mp(t, a) && Mn(t) !== "body";
  }) : [];
}
function gp(e, n, r, a) {
  var t = n === "clippingParents" ? hp(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Ko(e, u, a);
    return s.top = Ya(d.top, s.top), s.right = Go(d.right, s.right), s.bottom = Go(d.bottom, s.bottom), s.left = Ya(d.left, s.left), s;
  }, Ko(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function qa(e) {
  return e.split("-")[1];
}
function yp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vs(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Bn(a) : null, i = a ? qa(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Nn:
      s = {
        x: o,
        y: n.y - r.height
      };
      break;
    case ar:
      s = {
        x: o,
        y: n.y + n.height
      };
      break;
    case Sr:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case _n:
      s = {
        x: n.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? yp(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Lt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ga:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function bp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wp(e) {
  return Object.assign({}, bp(), e);
}
function Sp(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Es(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? xm : l, u = r.rootBoundary, d = u === void 0 ? ks : u, v = r.elementContext, f = v === void 0 ? La : v, m = r.altBoundary, p = m === void 0 ? !1 : m, w = r.padding, b = w === void 0 ? 0 : w, T = wp(typeof b != "number" ? b : Sp(b, At)), k = f === La ? _m : La, C = e.rects.popper, S = e.elements[p ? k : f], P = gp(Cr(S) ? S : S.contextElement || or(e.elements.popper), s, d, o), h = Ia(e.elements.reference), A = Vs({
    reference: h,
    element: C,
    strategy: "absolute",
    placement: t
  }), $ = Vi(Object.assign({}, C, A)), B = f === La ? $ : h, I = {
    top: P.top - B.top + T.top,
    bottom: B.bottom - P.bottom + T.bottom,
    left: P.left - B.left + T.left,
    right: B.right - P.right + T.right
  }, y = e.modifiersData.offset;
  if (f === La && y) {
    var O = y[t];
    Object.keys(I).forEach(function(R) {
      var W = [Sr, ar].indexOf(R) >= 0 ? 1 : -1, q = [Nn, ar].indexOf(R) >= 0 ? "y" : "x";
      I[R] += O[q] * W;
    });
  }
  return I;
}
function Cp(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? $s : s, d = qa(a), v = d ? l ? Ho : Ho.filter(function(p) {
    return qa(p) === d;
  }) : At, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, w) {
    return p[w] = Es(e, {
      placement: w,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[Bn(w)], p;
  }, {});
  return Object.keys(m).sort(function(p, w) {
    return m[p] - m[w];
  });
}
function kp(e) {
  if (Bn(e) === Dt)
    return [];
  var n = vt(e);
  return [jo(e), n, jo(n)];
}
function $p(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, w = r.allowedAutoPlacements, b = n.options.placement, T = Bn(b), k = T === b, C = s || (k || !p ? [vt(b)] : kp(b)), S = [b].concat(C).reduce(function(oe, se) {
      return oe.concat(Bn(se) === Dt ? Cp(n, {
        placement: se,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: w
      }) : se);
    }, []), P = n.rects.reference, h = n.rects.popper, A = /* @__PURE__ */ new Map(), $ = !0, B = S[0], I = 0; I < S.length; I++) {
      var y = S[I], O = Bn(y), R = qa(y) === Lt, W = [Nn, ar].indexOf(O) >= 0, q = W ? "width" : "height", z = Es(n, {
        placement: y,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = W ? R ? Sr : _n : R ? ar : Nn;
      P[q] > h[q] && (J = vt(J));
      var j = vt(J), Z = [];
      if (i && Z.push(z[O] <= 0), l && Z.push(z[J] <= 0, z[j] <= 0), Z.every(function(oe) {
        return oe;
      })) {
        B = y, $ = !1;
        break;
      }
      A.set(y, Z);
    }
    if ($)
      for (var N = p ? 3 : 1, U = function(se) {
        var ve = S.find(function(Ce) {
          var Ye = A.get(Ce);
          if (Ye)
            return Ye.slice(0, se).every(function(xe) {
              return xe;
            });
        });
        if (ve)
          return B = ve, "break";
      }, H = N; H > 0; H--) {
        var x = U(H);
        if (x === "break")
          break;
      }
    n.placement !== B && (n.modifiersData[a]._skip = !0, n.placement = B, n.reset = !0);
  }
}
const Tp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: $p,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Op(e, n, r) {
  var a = Bn(e), t = [_n, Nn].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, o = i[0], l = i[1];
  return o = o || 0, l = (l || 0) * t, [_n, Sr].indexOf(a) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function Vp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = $s.reduce(function(d, v) {
    return d[v] = Op(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const Ep = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vp
};
function Mp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pp(e) {
  return e === bn(e) || !cn(e) ? Zi(e) : Mp(e);
}
function Ip(e) {
  var n = e.getBoundingClientRect(), r = Pa(n.width) / e.offsetWidth || 1, a = Pa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Np(e, n, r) {
  r === void 0 && (r = !1);
  var a = cn(n), t = cn(n) && Ip(n), i = or(n), o = Ia(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Mn(n) !== "body" || Qi(i)) && (l = Pp(n)), cn(n) ? (s = Ia(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Ji(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function Bp(e) {
  var n = Ia(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Dp(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(i) {
    n.set(i.name, i);
  });
  function t(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), a.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || t(i);
  }), a;
}
function Ap(e) {
  var n = Dp(e);
  return Ti.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Lp(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Rn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var lr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', zp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Xo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Rp(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Xo).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Rn(lr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Rn(lr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Ti.indexOf(n.phase) < 0 && console.error(Rn(lr, n.name, '"phase"', "either " + Ti.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Rn(lr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Rn(lr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Rn(lr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Rn(lr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Xo.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Rn(zp, String(n.name), a, a));
      });
    });
  });
}
function Up(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Yp(e) {
  var n = e.reduce(function(r, a) {
    var t = r[a.name];
    return r[a.name] = t ? Object.assign({}, t, a, {
      options: Object.assign({}, t.options, a.options),
      data: Object.assign({}, t.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var Zo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Fp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Jo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Qo() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Wp(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? Jo : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Jo, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(T) {
        var k = typeof T == "function" ? T(d.options) : T;
        w(), d.options = Object.assign({}, i, d.options, k), d.scrollParents = {
          reference: Cr(l) ? Fa(l) : l.contextElement ? Fa(l.contextElement) : [],
          popper: Fa(s)
        };
        var C = Ap(Yp([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = C.filter(function(y) {
          return y.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Up([].concat(C, d.options.modifiers), function(y) {
            var O = y.name;
            return O;
          });
          if (Rp(S), Bn(d.options.placement) === Dt) {
            var P = d.orderedModifiers.find(function(y) {
              var O = y.name;
              return O === "flip";
            });
            P || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = $n(s), A = h.marginTop, $ = h.marginRight, B = h.marginBottom, I = h.marginLeft;
          [A, $, B, I].some(function(y) {
            return parseFloat(y);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), m.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, k = T.reference, C = T.popper;
          if (!Qo(k, C)) {
            process.env.NODE_ENV !== "production" && console.error(Zo);
            return;
          }
          d.rects = {
            reference: Np(k, xi(C), d.options.strategy === "fixed"),
            popper: Bp(C)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(y) {
            return d.modifiersData[y.name] = Object.assign({}, y.data);
          });
          for (var S = 0, P = 0; P < d.orderedModifiers.length; P++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Fp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, P = -1;
              continue;
            }
            var h = d.orderedModifiers[P], A = h.fn, $ = h.options, B = $ === void 0 ? {} : $, I = h.name;
            typeof A == "function" && (d = A({
              state: d,
              options: B,
              name: I,
              instance: m
            }) || d);
          }
        }
      },
      update: Lp(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        w(), f = !0;
      }
    };
    if (!Qo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(Zo), m;
    m.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function p() {
      d.orderedModifiers.forEach(function(b) {
        var T = b.name, k = b.options, C = k === void 0 ? {} : k, S = b.effect;
        if (typeof S == "function") {
          var P = S({
            state: d,
            name: T,
            instance: m,
            options: C
          }), h = function() {
          };
          v.push(P || h);
        }
      });
    }
    function w() {
      v.forEach(function(b) {
        return b();
      }), v = [];
    }
    return m;
  };
}
var ot = {
  passive: !0
};
function Hp(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = bn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, ot);
  }), l && s.addEventListener("resize", r.update, ot), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, ot);
    }), l && s.removeEventListener("resize", r.update, ot);
  };
}
const jp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Hp,
  data: {}
};
function Gp(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Vs({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const qp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Gp,
  data: {}
};
var Kp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xp(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Pa(n * t) / t || 0,
    y: Pa(r * t) / t || 0
  };
}
function xo(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, m = f === void 0 ? 0 : f, p = o.y, w = p === void 0 ? 0 : p, b = typeof d == "function" ? d({
    x: m,
    y: w
  }) : {
    x: m,
    y: w
  };
  m = b.x, w = b.y;
  var T = o.hasOwnProperty("x"), k = o.hasOwnProperty("y"), C = _n, S = Nn, P = window;
  if (u) {
    var h = xi(r), A = "clientHeight", $ = "clientWidth";
    if (h === bn(r) && (h = or(r), $n(h).position !== "static" && l === "absolute" && (A = "scrollHeight", $ = "scrollWidth")), h = h, t === Nn || (t === _n || t === Sr) && i === Ga) {
      S = ar;
      var B = v && h === P && P.visualViewport ? P.visualViewport.height : h[A];
      w -= B - a.height, w *= s ? 1 : -1;
    }
    if (t === _n || (t === Nn || t === ar) && i === Ga) {
      C = Sr;
      var I = v && h === P && P.visualViewport ? P.visualViewport.width : h[$];
      m -= I - a.width, m *= s ? 1 : -1;
    }
  }
  var y = Object.assign({
    position: l
  }, u && Kp), O = d === !0 ? Xp({
    x: m,
    y: w
  }) : {
    x: m,
    y: w
  };
  if (m = O.x, w = O.y, s) {
    var R;
    return Object.assign({}, y, (R = {}, R[S] = k ? "0" : "", R[C] = T ? "0" : "", R.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + w + "px)" : "translate3d(" + m + "px, " + w + "px, 0)", R));
  }
  return Object.assign({}, y, (n = {}, n[S] = k ? w + "px" : "", n[C] = T ? m + "px" : "", n.transform = "", n));
}
function Zp(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = $n(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Bn(n.placement),
    variation: qa(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, xo(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, xo(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Jp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Zp,
  data: {}
};
function Qp(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !cn(i) || !Mn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function xp(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var t = n.elements[a], i = n.attributes[a] || {}, o = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = o.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !cn(t) || !Mn(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const _p = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qp,
  effect: xp,
  requires: ["computeStyles"]
};
var eh = [jp, qp, Jp, _p], nh = /* @__PURE__ */ Wp({
  defaultModifiers: eh
});
function rh(e) {
  return ["click", "hover"].includes(e);
}
function ah(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var th = {
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "click",
    validator: rh
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: ah
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
};
function wt() {
  return wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, wt.apply(this, arguments);
}
function _o(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function el(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        _o(i, a, t, o, l, "next", s);
      }
      function l(s) {
        _o(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: ih,
  classes: oh
} = ee("menu");
function lh(e, n) {
  return g(), E(
    "div",
    {
      ref: "host",
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleMouseenter && e.handleMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleMouseleave && e.handleMouseleave(...arguments);
      })
    },
    [G(e.$slots, "default"), (g(), pe(
      Za,
      {
        to: e.teleport
      },
      [re(
        Re,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ce(() => [$e(D(
            "div",
            {
              ref: "menu",
              style: X({
                zIndex: e.zIndex
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Dn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handleMenuMouseenter && e.handleMenuMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handleMenuMouseleave && e.handleMenuMouseleave(...arguments);
              })
            },
            [G(e.$slots, "menu")],
            38
          ), [[Ja, e.show]])]),
          _: 3
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
  );
}
const er = _({
  render: lh,
  name: "VarMenu",
  props: th,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), {
      zIndex: t
    } = xa(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: h,
        height: A
      } = window.getComputedStyle(n.value);
      u = {
        width: De(h),
        height: De(A)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, S());
    }, f = /* @__PURE__ */ function() {
      var h = el(function* () {
        e.trigger === "hover" && (s = !1, yield Vn(), !l && P());
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), m = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var h = el(function* () {
        e.trigger === "hover" && (l = !1, yield Vn(), !s && P());
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), w = () => {
      S(), o = !0;
    }, b = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, V(e["onUpdate:show"], !1);
    }, T = () => {
      d();
      var h = {
        x: De(e.offsetX),
        y: De(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: h.x,
            distance: h.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: h.x,
            distance: h.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: h.x,
            distance: h.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: h.x,
            distance: -h.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: h.x,
            distance: -h.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: h.x,
            distance: -h.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: h.y,
            distance: h.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: h.y,
            distance: -h.x - u.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement: e.placement,
            skidding: h.y,
            distance: -h.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement: e.placement,
            skidding: h.x,
            distance: -h.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement: e.placement,
            skidding: h.x,
            distance: h.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement: e.placement,
            skidding: h.y,
            distance: h.x
          };
      }
    }, k = () => {
      var {
        placement: h,
        skidding: A,
        distance: $
      } = T();
      return {
        placement: h,
        modifiers: [wt({}, Tp, {
          enabled: a.value
        }), wt({}, Ep, {
          options: {
            offset: [A, $]
          }
        })]
      };
    }, C = () => {
      i.setOptions(k());
    }, S = () => {
      var {
        disabled: h
      } = e;
      h || (a.value = !0, V(e["onUpdate:show"], !0));
    }, P = () => {
      a.value = !1, V(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (h) => {
      a.value = h != null ? h : !1;
    }, {
      immediate: !0
    }), te(() => e.offsetX, C), te(() => e.offsetY, C), te(() => e.placement, C), te(() => a.value, (h) => {
      h ? (C(), V(e.onOpen)) : V(e.onClose);
    }), te(() => e.trigger, (h) => {
      h === "click" ? document.addEventListener("click", b) : document.removeEventListener("click", b);
    }), te(() => e.disabled, P), Ue(() => {
      i = nh(n.value, r.value, k()), e.trigger === "click" && document.addEventListener("click", b);
    }), tr(() => {
      document.removeEventListener("click", b), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: ih,
      classes: oh,
      handleClick: w,
      handleMenuClose: b,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: m,
      handleMenuMouseleave: p,
      resize: C,
      open: S,
      close: P
    };
  }
});
er.install = function(e) {
  e.component(er.name, er);
};
var Ms = Symbol("SELECT_BIND_OPTION_KEY"), Ps = Symbol("SELECT_COUNT_OPTION_KEY");
function sh() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Ms), {
    length: r
  } = pn(Ps);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function uh() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(Ms), {
    index: r
  } = hn(Ps);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var dh = {
  label: {},
  value: {}
}, {
  n: vh,
  classes: fh
} = ee("option");
function ch(e, n) {
  var r = ie("var-checkbox"), a = qe("ripple");
  return $e((g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: X({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: X({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
    ), e.multiple ? (g(), pe(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Dn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : Q("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [G(e.$slots, "default", {}, () => [ge(
        ne(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const na = _({
  render: ch,
  name: "VarOption",
  directives: {
    Ripple: Fe
  },
  components: {
    VarCheckbox: vr
  },
  props: dh,
  setup(e) {
    var n = M(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: i,
      bindSelect: o
    } = uh(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), m = (w) => {
      n.value = w;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return te([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), o(p), {
      n: vh,
      classes: fh,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
var mh = {
  show: {
    type: Boolean,
    default: !1
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onClick: Y(),
  "onUpdate:show": Y()
};
function ph(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  n: nl
} = ee("overlay");
const ra = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: mh,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = xa(() => e.show, 1), {
      disabled: i
    } = Fi(), o = () => {
      V(e.onClick), V(e["onUpdate:show"], !1);
    };
    Ot(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ee({
      class: nl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: o
    }), [V(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(Re, {
        name: nl("--fade")
      }, {
        default: () => [u && l()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return re(Za, {
          to: u,
          disabled: i.value
        }, ph(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var hh = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: {
    type: Boolean,
    default: !1
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: Y(),
  "onUpdate:current": Y(),
  "onUpdate:size": Y()
}, {
  n: gh,
  classes: yh
} = ee("pagination"), bh = ["item-mode", "onClick"];
function wh(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), i = ie("var-menu"), o = qe("ripple");
  return g(), E(
    "ul",
    {
      class: c(e.n())
    },
    [$e((g(), E(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [G(e.$slots, "prev", {}, () => [re(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (g(), E(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = ao((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), D("span", null, [ge(
        " / " + ne(e.pageCount) + " ",
        1
      ), D(
        "div",
        {
          class: c(e.n("simple-line"))
        },
        null,
        2
      )])],
      2
    )) : (g(!0), E(
      Ve,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => $e((g(), E(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [ge(
          ne(l),
          1
        )],
        10,
        bh
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), $e((g(), E(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [G(e.$slots, "next", {}, () => [re(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (g(), E(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        i,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ce(() => [(g(!0), E(
            Ve,
            null,
            Be(e.sizeOption, (l, s) => $e((g(), pe(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ce(() => [ge(
                  ne(l) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
                  1
                )]),
                _: 2
              },
              1032,
              ["class", "onClick"]
            )), [[o]])),
            128
          ))]),
          default: ce(() => [D(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [D(
              "span",
              null,
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
            ), re(
              r,
              {
                class: c(e.n("size--open-icon")),
                "var-pagination-cover": "",
                name: "menu-down"
              },
              null,
              8,
              ["class"]
            )],
            2
          )]),
          _: 1
        },
        8,
        ["show"]
      )],
      2
    )) : Q("v-if", !0), e.showQuickJumper && !e.simple ? (g(), E(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [ge(
        ne(e.pack.paginationJump) + " ",
        1
      ), re(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = ao((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : Q("v-if", !0), e.totalText ? (g(), E(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ne(e.totalText),
      3
    )) : Q("v-if", !0)],
    2
  );
}
const aa = _({
  render: wh,
  name: "VarPagination",
  components: {
    VarMenu: er,
    VarIcon: Oe,
    VarCell: dr,
    VarInput: hr
  },
  directives: {
    Ripple: Fe
  },
  props: hh,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), i = M(!1), o = M(L(e.current) || 1), l = M(L(e.size) || 10), s = M([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(L(e.total) / L(l.value))), v = F(() => {
      var S = l.value * (o.value - 1) + 1, P = Math.min(l.value * o.value, L(e.total));
      return [S, P];
    }), f = F(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (S, P) => Ge(S) ? !1 : P === 1 ? t.value : i.value, p = (S, P) => Ge(S) ? "basic" : P === 1 ? "head" : "tail", w = (S, P) => {
      S === o.value || e.disabled || (Ge(S) ? o.value = S : S === "prev" ? o.value > 1 && (o.value -= 1) : S === "next" ? o.value < d.value && (o.value += 1) : S === "..." && (P === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, b = () => {
      e.disabled || (n.value = !0);
    }, T = (S) => {
      l.value = S, n.value = !1;
    }, k = (S) => {
      var P = /^[1-9][0-9]*$/;
      return P.test(S);
    }, C = (S, P, h) => {
      if (h.target.blur(), k(P)) {
        var A = L(P);
        A > d.value && (A = d.value, a.value = "" + A), A !== o.value && (o.value = A);
      }
      S === "quick" && (r.value = ""), S === "simple" && !k(P) && (a.value = "" + o.value);
    };
    return te([() => e.current, () => e.size], (S) => {
      var [P, h] = S;
      o.value = L(P) || 1, l.value = L(h || 10);
    }), te([o, l], (S, P) => {
      var [h, A] = S, [$, B] = P;
      if (h > d.value) {
        o.value = d.value;
        return;
      }
      var I = [], {
        maxPagerCount: y,
        total: O,
        onChange: R
      } = e, W = Math.ceil(L(O) / L(B)), q = d.value - (y - u.value) - 1;
      if (a.value = "" + h, d.value - 2 > y) {
        if ($ === void 0 || d.value !== W)
          for (var z = 2; z < y + 2; z++)
            I.push(z);
        if (h <= y && h < q) {
          I = [];
          for (var J = 1; J < y + 1; J++)
            I.push(J + 1);
          t.value = !0, i.value = !1;
        }
        if (h > y && h < q) {
          I = [];
          for (var j = 1; j < y + 1; j++)
            I.push(h + j - u.value);
          t.value = h === 2 && y === 1, i.value = !1;
        }
        if (h >= q) {
          I = [];
          for (var Z = 1; Z < y + 1; Z++)
            I.push(d.value - (y - Z) - 1);
          t.value = !1, i.value = !0;
        }
        I = [1, "...", ...I, "...", d.value];
      } else
        for (var N = 1; N <= d.value; N++)
          I.push(N);
      s.value = I, $ !== void 0 && d.value > 0 && V(R, h, A), V(e["onUpdate:current"], h), V(e["onUpdate:size"], A);
    }, {
      immediate: !0
    }), {
      n: gh,
      classes: yh,
      pack: We,
      current: o,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: p,
      isHideEllipsis: m,
      clickItem: w,
      showMenu: b,
      clickSize: T,
      setPage: C,
      toNumber: L
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
function Ei() {
  return Ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ei.apply(this, arguments);
}
var Sh = Ei({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: {
    type: Boolean,
    default: !1
  },
  cascadeInitialIndexes: {
    type: Array,
    default: () => []
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  dynamic: {
    type: Boolean,
    default: !1
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  },
  onChange: Y(),
  onConfirm: Y(),
  onCancel: Y()
}, en(Qa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Ch,
  classes: kh
} = ee("picker"), rl = 300, $h = 15, al = 0, Th = ["onTouchstart", "onTouchmove", "onTouchend"], Oh = ["onTransitionend"];
function Vh(e, n) {
  var r = ie("var-button");
  return g(), pe(
    Da(e.dynamic ? e.n("$-popup") : e.Transition),
    Ee(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: ce(() => [D(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [D(
          "div",
          {
            class: c(e.n("toolbar"))
          },
          [G(e.$slots, "cancel", {}, () => [re(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ce(() => [ge(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), G(e.$slots, "title", {}, () => [D(
            "div",
            {
              class: c(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
          )]), G(e.$slots, "confirm", {}, () => [re(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ce(() => [ge(
                ne(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
        ), D(
          "div",
          {
            class: c(e.n("columns")),
            style: X({
              height: e.columnHeight + "px"
            })
          },
          [(g(!0), E(
            Ve,
            null,
            Be(e.scrollColumns, (a) => (g(), E(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Dn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [D(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: X({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(g(!0), E(
                  Ve,
                  null,
                  Be(a.column.texts, (t) => (g(), E(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: X({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [D(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      ne(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                Oh
              )],
              42,
              Th
            ))),
            128
          )), D(
            "div",
            {
              class: c(e.n("picked")),
              style: X({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
          ), D(
            "div",
            {
              class: c(e.n("mask")),
              style: X({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
          )],
          6
        )],
        16
      )]),
      _: 3
    },
    16
  );
}
const gr = _({
  render: Vh,
  name: "VarPicker",
  components: {
    VarButton: rn,
    VarPopup: Cn
  },
  inheritAttrs: !1,
  props: Sh,
  setup(e) {
    var n = M([]), r = F(() => De(e.optionHeight)), a = F(() => De(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), i = F(() => a.value * r.value), o = [], l = (y, O) => {
      O.scrollEl = y;
    }, s = (y) => {
      V(e["onUpdate:show"], y);
    }, u = (y) => {
      var O = r.value + t.value, R = t.value - y.column.texts.length * r.value;
      y.translate >= O && (y.translate = O), y.translate <= R && (y.translate = R);
    }, d = (y, O) => {
      var {
        length: R
      } = y.column.texts;
      return O = O >= R ? R - 1 : O, O = O <= 0 ? 0 : O, O;
    }, v = (y) => {
      var O = Math.round((t.value - y.translate) / r.value);
      return d(y, O);
    }, f = () => {
      var y = n.value.map((R) => R.column.texts[R.index]), O = n.value.map((R) => R.index);
      return {
        texts: y,
        indexes: O
      };
    }, m = function(y, O, R, W) {
      W === void 0 && (W = !1);
      var q = t.value - d(y, O) * r.value;
      q === y.translate && (y.scrolling = !1, !W && A(y)), y.translate = q, y.duration = R;
    }, p = (y, O, R) => {
      y.translate += Math.abs(O / R) / 3e-3 * (O < 0 ? -1 : 1);
    }, w = (y, O) => {
      O.touching = !0, O.scrolling = !1, O.duration = 0, O.translate = Yt(O.scrollEl);
    }, b = (y, O) => {
      if (!!O.touching) {
        var {
          clientY: R
        } = y.touches[0], W = O.prevY !== void 0 ? R - O.prevY : 0;
        O.prevY = R, O.translate += W, u(O);
        var q = performance.now();
        q - O.momentumTime > rl && (O.momentumTime = q, O.momentumPrevY = O.translate);
      }
    }, T = (y, O) => {
      O.touching = !1, O.scrolling = !0, O.prevY = void 0;
      var R = O.translate - O.momentumPrevY, W = performance.now() - O.momentumTime, q = Math.abs(R) >= $h && W <= rl;
      q && p(O, R, W), O.index = v(O), m(O, O.index, q ? 1e3 : 200);
    }, k = (y) => {
      y.scrolling = !1, A(y);
    }, C = (y) => y.map((O, R) => {
      var W, q = ye(O) ? {
        texts: O
      } : O, z = {
        id: al++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (W = q.initialIndex) != null ? W : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: q,
        scrollEl: null,
        scrolling: !1
      };
      return m(z, z.index, 0, !0), z;
    }), S = (y) => {
      var O = [];
      return P(O, y, 0, !0), O;
    }, P = function(y, O, R, W) {
      if (W === void 0 && (W = !1), ye(O) && O.length) {
        var q, z = W && (q = e.cascadeInitialIndexes[y.length]) != null ? q : 0, J = {
          id: al++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: z,
          columnIndex: R,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: O.map((j) => j[e.textKey])
          },
          columns: O,
          scrollEl: null,
          scrolling: !1
        };
        y.push(J), m(J, J.index, 0, !0), P(y, J.columns[J.index].children, R + 1, W);
      }
    }, h = (y) => {
      n.value.splice(n.value.indexOf(y) + 1), P(n.value, y.columns[y.index].children, y.columnIndex + 1);
    }, A = (y) => {
      var {
        cascade: O,
        onChange: R
      } = e;
      O && h(y);
      var W = n.value.some((j) => j.scrolling);
      if (!W) {
        var {
          texts: q,
          indexes: z
        } = f(), J = z.every((j, Z) => j === o[Z]);
        J || (o = [...z], V(R, q, z));
      }
    }, $ = () => {
      if (e.cascade) {
        var y = n.value.find((O) => O.scrolling);
        y && (y.translate = Yt(y.scrollEl), y.index = v(y), m(y, y.index, 0, !0), y.scrolling = !1, h(y));
      } else
        n.value.forEach((O) => {
          O.translate = Yt(O.scrollEl), O.index = v(O), m(O, O.index, 0);
        });
    }, B = () => {
      $();
      var {
        texts: y,
        indexes: O
      } = f();
      o = [...O], V(e.onConfirm, y, O);
    }, I = () => {
      $();
      var {
        texts: y,
        indexes: O
      } = f();
      o = [...O], V(e.onCancel, y, O);
    };
    return te(() => e.columns, (y) => {
      n.value = e.cascade ? S(to(y)) : C(to(y));
      var {
        indexes: O
      } = f();
      o = [...O];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Ch,
      classes: kh,
      pack: We,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Re,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: w,
      handleTouchmove: b,
      handleTouchend: T,
      handleTransitionend: k,
      confirm: B,
      cancel: I,
      dt: kt
    };
  }
});
var _e;
function kr(e) {
  return new Promise((n) => {
    kr.close();
    var r = ye(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", _e = a;
    var {
      unmountInstance: t
    } = Aa(gr, a, {
      onConfirm: (i, o) => {
        V(a.onConfirm, i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, _e === a && (_e = null);
      },
      onCancel: (i, o) => {
        V(a.onCancel, i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, _e === a && (_e = null);
      },
      onClose: () => {
        V(a.onClose), n({
          state: "close"
        }), _e === a && (_e = null);
      },
      onClosed: () => {
        V(a.onClosed), t(), _e === a && (_e = null);
      },
      onRouteChange: () => {
        t(), _e === a && (_e = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  });
}
gr.install = function(e) {
  e.component(gr.name, gr);
};
kr.Component = gr;
kr.install = function(e) {
  e.component(gr.name, gr);
};
kr.close = () => {
  if (_e != null) {
    var e = _e;
    _e = null, Me().then(() => {
      e.show = !1;
    });
  }
};
function Eh(e) {
  return ["linear", "circle"].includes(e);
}
var Mh = {
  mode: {
    type: String,
    default: "linear",
    validator: Eh
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: {
    type: String
  },
  trackColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [Number, String],
    default: 0
  },
  label: {
    type: Boolean,
    default: !1
  },
  labelClass: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  }
}, {
  n: Ph,
  classes: Ih
} = ee("progress"), Nh = ["viewBox"], Bh = ["cx", "cy", "r", "stroke-width"], Dh = ["cx", "cy", "r", "stroke-width"];
function Ah(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [D(
        "div",
        {
          class: c(e.n("linear-block")),
          style: X({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (g(), E(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: X({
              background: e.trackColor
            })
          },
          null,
          6
        )) : Q("v-if", !0), D(
          "div",
          {
            class: c(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: X({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
        )],
        6
      ), e.label ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [G(e.$slots, "default", {}, () => [ge(
          ne(e.linearProps.roundValue),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.mode === "circle" ? (g(), E(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: X({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(g(), E(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: X({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (g(), E(
          "circle",
          {
            key: 0,
            class: c(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: X({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          Bh
        )) : Q("v-if", !0), D(
          "circle",
          {
            class: c(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: X({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          Dh
        )],
        14,
        Nh
      )), e.label ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [G(e.$slots, "default", {}, () => [ge(
          ne(e.circleProps.roundValue),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      6
    )) : Q("v-if", !0)],
    2
  );
}
const ta = _({
  render: Ah,
  name: "VarProgress",
  props: Mh,
  setup(e) {
    var n = F(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = F(() => {
      var {
        size: a,
        lineWidth: t,
        value: i
      } = e, o = "0 0 " + De(a) + " " + De(a), l = L(i) > 100 ? 100 : Math.round(L(i)), s = (De(a) - De(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: Ph,
      classes: Ih,
      toSizeUnit: we,
      multiplySizeUnit: Je,
      linearProps: n,
      circleProps: r
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var Lh = {
  modelValue: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: {
    type: String
  },
  successBgColor: {
    type: String
  },
  color: {
    type: String
  },
  successColor: {
    type: String
  },
  onRefresh: Y(),
  "onUpdate:modelValue": Y()
};
function tl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zh(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        tl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        tl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Rh,
  classes: Uh
} = ee("pull-refresh"), il = 150;
function Yh(e, n) {
  var r = ie("var-icon");
  return g(), E(
    "div",
    {
      ref: "freshNode",
      class: c(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchmove: n[1] || (n[1] = function() {
        return e.touchMove && e.touchMove(...arguments);
      }),
      onTouchend: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[3] || (n[3] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [D(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: X(e.controlStyle)
      },
      [re(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
    ), G(e.$slots, "default")],
    34
  );
}
const ia = _({
  render: Yh,
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: Lh,
  setup(e) {
    var n, r, a = M(0), t = M(null), i = M(null), o = M(0), l = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = M(!0), f = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), m = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), p = F(() => Math.abs(2 * a.value)), w = F(() => u.value === "success"), b = () => new Promise((h) => {
      window.setTimeout(() => {
        v.value = !0, h();
      }, il);
    }), T = (h) => {
      !f.value || (u.value = "pulling", o.value = h.touches[0].clientY);
    }, k = (h) => {
      var A = $t(n);
      if (!(A > 0 || !f.value)) {
        A === 0 && l.value > a.value && h.cancelable && h.preventDefault();
        var $ = (h.touches[0].clientY - o.value) / 2 + a.value;
        l.value = $ >= p.value ? p.value : $, l.value >= p.value * 0.2 ? (v.value = !1, s.value = "refresh", r = b()) : s.value = "arrow-down";
      }
    }, C = /* @__PURE__ */ function() {
      var h = zh(function* () {
        !f.value || (d.value = !0, l.value >= p.value * 0.2 ? (yield r, u.value = "loading", l.value = p.value * 0.3, V(e["onUpdate:modelValue"], !0), V(e.onRefresh)) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1;
        }, L(e.animationDuration))));
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), S = () => {
      var {
        width: h
      } = i.value.getBoundingClientRect();
      l.value = -(h + h * 0.25), a.value = -(h + h * 0.25);
    }, P = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return te(() => e.modelValue, (h) => {
      h === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, P();
      }, L(e.successDuration)));
    }), Ue(() => {
      n = Or(t.value), S();
    }), {
      n: Rh,
      classes: Uh,
      iconHasChanged: v,
      ICON_TRANSITION: il,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: T,
      touchMove: k,
      touchEnd: C,
      iconName: s,
      controlStyle: m,
      isSuccess: w
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Fh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, Is = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Ns = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Wh() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Is), {
    length: r
  } = pn(Ns);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Hh() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(Is), {
    index: r
  } = hn(Ns);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: jh,
  classes: Gh
} = ee("radio");
function qh(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = qe("ripple");
  return g(), E(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      Ee({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [$e((g(), E(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? G(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : G(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [re(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), D(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [G(e.$slots, "default")],
        2
      )],
      16
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const oa = _({
  render: qh,
  name: "VarRadio",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: Fh,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Hh(), {
      form: o,
      bindForm: l
    } = yn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = gn(), f = (S) => {
      Me(() => {
        var {
          validateTrigger: P,
          rules: h,
          modelValue: A
        } = e;
        u(P, S, h, A);
      });
    }, m = (S) => {
      var {
        checkedValue: P,
        onChange: h
      } = e;
      t && n.value === P || (n.value = S, V(e["onUpdate:modelValue"], n.value), V(h, n.value), t == null || t.onToggle(P), f("onChange"));
    }, p = (S) => {
      var {
        disabled: P,
        readonly: h,
        uncheckedValue: A,
        checkedValue: $,
        onClick: B
      } = e;
      o != null && o.disabled.value || P || (V(B, S), !(o != null && o.readonly.value || h) && (a.value = !0, m(r.value ? A : $)));
    }, w = (S) => {
      var {
        checkedValue: P,
        uncheckedValue: h
      } = e;
      n.value = S === P ? P : h;
    }, b = () => {
      V(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), k = (S) => {
      var {
        uncheckedValue: P,
        checkedValue: h
      } = e, A = ![P, h].includes(S);
      A && (S = r.value ? P : h), m(S);
    };
    te(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var C = {
      sync: w,
      validate: T,
      resetValidation: v,
      reset: b
    };
    return V(i, C), V(l, C), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: jh,
      classes: Gh,
      handleClick: p,
      toggle: k,
      reset: b,
      validate: T,
      resetValidation: v
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
function Kh(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Xh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Kh
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Zh,
  classes: Jh
} = ee("radio-group");
function Qh(e, n) {
  var r = ie("var-form-details");
  return g(), E(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [G(e.$slots, "default")],
      2
    ), re(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const la = _({
  render: Qh,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: Xh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Wh(), {
      bindForm: t
    } = yn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = gn(), u = F(() => i.value), d = (b) => {
      Me(() => {
        var {
          validateTrigger: T,
          rules: k,
          modelValue: C
        } = e;
        o(T, b, k, C);
      });
    }, v = () => r.forEach((b) => {
      var {
        sync: T
      } = b;
      return T(e.modelValue);
    }), f = (b) => {
      V(e["onUpdate:modelValue"], b), V(e.onChange, b), d("onChange");
    }, m = () => l(e.rules, e.modelValue), p = () => {
      V(e["onUpdate:modelValue"], void 0), s();
    };
    te(() => e.modelValue, v), te(() => n.value, v);
    var w = {
      onToggle: f,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return V(t, w), a(w), {
      errorMessage: i,
      n: Zh,
      classes: Jh,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var xh = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: {
    type: [String, Number]
  },
  gap: {
    type: [String, Number]
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: !1
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: za
} = ee("rate"), _h = ["onClick"];
function eg(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = qe("ripple");
  return g(), E(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [(g(!0), E(
        Ve,
        null,
        Be(e.toNumber(e.count), (i) => $e((g(), E(
          "div",
          {
            key: i,
            style: X(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (o) => e.handleClick(i, o)
          },
          [re(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: X({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          _h
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
      ))],
      2
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const sa = _({
  render: eg,
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  props: xh,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = (b) => {
      var {
        count: T,
        gap: k
      } = e;
      return {
        color: u(b).color,
        marginRight: b !== L(T) ? we(k) : 0
      };
    }, s = (b) => {
      var {
        name: T,
        color: k
      } = u(b);
      return {
        [za("content")]: !0,
        [za("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [za("--error")]: a.value,
        [za("--primary")]: T !== e.emptyIcon && !k
      };
    }, u = (b) => {
      var {
        modelValue: T,
        disabled: k,
        disabledColor: C,
        color: S,
        half: P,
        emptyColor: h,
        icon: A,
        halfIcon: $,
        emptyIcon: B
      } = e, I = S;
      return (k || n != null && n.disabled.value) && (I = C), b <= L(T) ? {
        color: I,
        name: A
      } : P && b <= L(T) + 0.5 ? {
        color: I,
        name: $
      } : {
        color: k || n != null && n.disabled.value ? C : h,
        name: B
      };
    }, d = (b, T) => {
      if (e.half) {
        var {
          offsetWidth: k
        } = T.target;
        T.offsetX <= Math.floor(k / 2) && (b -= 0.5);
      }
      V(e["onUpdate:modelValue"], b);
    }, v = () => i(e.rules, L(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), m = (b, T) => {
      var {
        readonly: k,
        disabled: C,
        onChange: S
      } = e;
      k || C || n != null && n.disabled.value || n != null && n.readonly.value || (d(b, T), V(S, b), f());
    }, p = () => {
      V(e["onUpdate:modelValue"], 0), o();
    }, w = {
      reset: p,
      validate: v,
      resetValidation: o
    };
    return V(r, w), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: m,
      reset: p,
      validate: v,
      resetValidation: o,
      toSizeUnit: we,
      toNumber: L,
      n: za
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
function ng(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var rg = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: ng
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  animation: {
    type: Boolean,
    default: !0
  }
}, ag = (e) => ($r(""), e = e(), Tr(), e), tg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, ig = /* @__PURE__ */ ag(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), og = [ig];
function lg(e, n) {
  return g(), E("svg", tg, og);
}
const sg = _({
  render: lg
});
var ug = (e) => ($r(""), e = e(), Tr(), e), dg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, vg = /* @__PURE__ */ ug(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), fg = [vg];
function cg(e, n) {
  return g(), E("svg", dg, fg);
}
const mg = _({
  render: cg
});
var pg = (e) => ($r(""), e = e(), Tr(), e), hg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, gg = /* @__PURE__ */ pg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), yg = [gg];
function bg(e, n) {
  return g(), E("svg", hg, yg);
}
const wg = _({
  render: bg
});
var {
  n: Sg,
  classes: Cg
} = ee("result");
function kg(e, n) {
  return g(), E(
    Ve,
    null,
    [D(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
    ), D(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: X({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
    ), D(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: X({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
    ), D(
      "span",
      {
        ref: "circle",
        class: c(e.n("success-circle")),
        style: X({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
    ), D(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
    ), D(
      "span",
      {
        class: c(e.n("success-cover-right")),
        style: X({
          animationDuration: e.animation ? "4250ms" : "0ms"
        })
      },
      null,
      6
    )],
    64
  );
}
const $g = _({
  render: kg,
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: Sg,
      classes: Cg,
      toNumber: L
    };
  }
});
var Tg = (e) => ($r(""), e = e(), Tr(), e), Og = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Vg = /* @__PURE__ */ Tg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), Eg = [Vg];
function Mg(e, n) {
  return g(), E("svg", Og, Eg);
}
const Pg = _({
  render: Mg
});
var Ig = (e) => ($r(""), e = e(), Tr(), e), Ng = {
  viewBox: "-4 -4 32 32"
}, Bg = /* @__PURE__ */ Ig(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), Dg = [Bg];
function Ag(e, n) {
  return g(), E("svg", Ng, Dg);
}
const Lg = _({
  render: Ag
});
var {
  n: zg,
  classes: Rg
} = ee("result");
function Ug(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [G(e.$slots, "image", {}, () => [e.type ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: X({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(g(), pe(
          Da(e.type),
          {
            "border-size": e.borderSize,
            animation: e.animation
          },
          null,
          8,
          ["border-size", "animation"]
        ))],
        6
      )],
      2
    )) : Q("v-if", !0)]), G(e.$slots, "title", {}, () => [e.title ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ne(e.title),
      3
    )) : Q("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ne(e.description),
      3
    )) : Q("v-if", !0)]), e.$slots.footer ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [G(e.$slots, "footer")],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const ua = _({
  render: Ug,
  name: "VarResult",
  components: {
    Info: sg,
    Success: $g,
    Warning: wg,
    Error: mg,
    Question: Pg,
    Empty: Lg
  },
  props: rg,
  setup(e) {
    var n = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: zg,
      classes: Rg,
      toNumber: L,
      toPxNum: De,
      toSizeUnit: we,
      circleSize: n,
      borderSize: r
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
function Yg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function Fg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var Wg = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Yg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: Fg
  },
  onClick: Y()
}, {
  n: Hg,
  classes: jg
} = ee("row");
function Gg(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: X({
        justifyContent: e.justify,
        alignItems: e.align,
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const da = _({
  render: Gg,
  name: "VarRow",
  props: Wg,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Sv(), t = F(() => {
      var l = De(e.gutter);
      return l / 2;
    }), i = () => {
      n.forEach((l) => {
        l.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, o = {
      computePadding: i
    };
    return te(() => a.value, i), te(() => e.gutter, i), r(o), {
      n: Hg,
      classes: jg,
      average: t
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
function qg(e) {
  return ["left", "right", "center"].includes(e);
}
var Kg = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: !1
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left",
    validator: qg
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onClose: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Gt,
  classes: Xg
} = ee("select"), Zg = {
  key: 0
}, Jg = {
  key: 1
};
function Qg(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), i = ie("var-form-details");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: X({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "prepend-icon")],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [re(
          t,
          {
            "var-select-cover": "",
            class: c(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (o) => e.isFocus = o),
            onClose: e.handleBlur
          },
          {
            menu: ce(() => [D(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [G(e.$slots, "default")],
              2
            )]),
            default: ce(() => [D(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: X({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (g(), E("div", Zg, [e.chip ? (g(), E(
                "div",
                {
                  key: 0,
                  class: c(e.n("chips"))
                },
                [(g(!0), E(
                  Ve,
                  null,
                  Be(e.labels, (o) => (g(), pe(
                    r,
                    {
                      class: c(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: o,
                      onClick: n[0] || (n[0] = Dn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(o)
                    },
                    {
                      default: ce(() => [ge(
                        ne(o),
                        1
                      )]),
                      _: 2
                    },
                    1032,
                    ["class", "type", "onClose"]
                  ))),
                  128
                ))],
                2
              )) : (g(), E(
                "div",
                {
                  key: 1,
                  class: c(e.n("values"))
                },
                ne(e.labels.join(e.separator)),
                3
              ))])) : (g(), E(
                "span",
                Jg,
                ne(e.label),
                1
              )), G(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [re(
                a,
                {
                  class: c(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )])],
              6
            ), D(
              "label",
              {
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: X({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              ne(e.placeholder),
              7
            )]),
            _: 3
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable ? (g(), pe(
          a,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : Q("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: X({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: X({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : Q("v-if", !0), re(
      i,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const va = _({
  render: Qg,
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: er,
    VarChip: fr,
    VarFormDetails: je
  },
  props: Kg,
  setup(e) {
    var n = M(null), r = M(!1), a = F(() => e.multiple), t = F(() => e.focusColor), i = M(""), o = M([]), l = M("0px"), s = M(0), {
      bindForm: u,
      form: d
    } = yn(), {
      length: v,
      options: f,
      bindOptions: m
    } = sh(), {
      errorMessage: p,
      validateWithTrigger: w,
      validate: b,
      resetValidation: T
    } = gn(), k = M(null), C = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var x = H;
        o.value = x.map(h);
      }
      !U && !Gn(H) && (i.value = h(H)), !U && Gn(H) && (i.value = "");
    }, S = (U) => {
      Me(() => {
        var {
          validateTrigger: H,
          rules: x,
          modelValue: oe
        } = e;
        w(H, U, x, oe);
      });
    }, P = (U) => {
      var {
        value: H,
        label: x
      } = U;
      return H.value != null ? H.value : x.value;
    }, h = (U) => {
      var H, x, oe = f.find((se) => {
        var {
          value: ve
        } = se;
        return ve.value === U;
      });
      return oe || (oe = f.find((se) => {
        var {
          label: ve
        } = se;
        return ve.value === U;
      })), (H = (x = oe) == null ? void 0 : x.label.value) != null ? H : "";
    }, A = () => {
      var {
        hint: U,
        modelValue: H
      } = e;
      if (!U && !Gn(H))
        return Gt("--placeholder-hidden");
      if (U && (!Gn(H) || r.value))
        return Gt("--placeholder-hint");
    }, $ = () => n.value && window.getComputedStyle(n.value).width || "0px", B = () => {
      var {
        disabled: U,
        readonly: H,
        onFocus: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (l.value = $(), s.value = De(e.offsetY), r.value = !0, V(x), S("onFocus"));
    }, I = () => {
      var {
        disabled: U,
        readonly: H,
        onBlur: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (V(x), S("onBlur"));
    }, y = (U) => {
      var {
        disabled: H,
        readonly: x,
        multiple: oe,
        onChange: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || x)) {
        var ve = oe ? f.filter((Ce) => {
          var {
            selected: Ye
          } = Ce;
          return Ye.value;
        }).map(P) : P(U);
        V(e["onUpdate:modelValue"], ve), V(se, ve), S("onChange"), !oe && (r.value = !1);
      }
    }, O = () => {
      var {
        disabled: U,
        readonly: H,
        multiple: x,
        clearable: oe,
        onClear: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || H || !oe)) {
        var ve = x ? [] : void 0;
        V(e["onUpdate:modelValue"], ve), V(se, ve), S("onClear");
      }
    }, R = (U) => {
      var {
        disabled: H,
        onClick: x
      } = e;
      d != null && d.disabled.value || H || (V(x, U), S("onClick"));
    }, W = (U) => {
      var {
        disabled: H,
        readonly: x,
        modelValue: oe,
        onClose: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || x)) {
        var ve = oe, Ce = f.find((xe) => {
          var {
            label: Pe
          } = xe;
          return Pe.value === U;
        }), Ye = ve.filter((xe) => {
          var Pe;
          return xe !== ((Pe = Ce.value.value) != null ? Pe : Ce.label.value);
        });
        V(e["onUpdate:modelValue"], Ye), V(se, Ye), S("onClose");
      }
    }, q = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var x = H;
        f.forEach((oe) => oe.sync(x.includes(P(oe))));
      } else
        f.forEach((oe) => oe.sync(H === P(oe)));
      C();
    }, z = () => {
      l.value = $(), s.value = De(e.offsetY), r.value = !0;
    }, J = () => {
      r.value = !1;
    }, j = () => b(e.rules, e.modelValue), Z = () => {
      V(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    te(() => e.multiple, () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U && !ye(H))
        throw Error("The modelValue must be an array when multiple is true");
    }), te(() => e.modelValue, q, {
      deep: !0
    }), te(() => v.value, q);
    var N = {
      wrapWidth: F(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: y,
      reset: Z,
      validate: j,
      resetValidation: T
    };
    return m(N), V(u, N), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: k,
      n: Gt,
      classes: Xg,
      computePlaceholderState: A,
      handleFocus: B,
      handleBlur: I,
      handleClear: O,
      handleClick: R,
      handleClose: W,
      reset: Z,
      validate: j,
      resetValidation: T,
      focus: z,
      blur: J
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
var xg = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: {
    type: Boolean,
    default: !1
  },
  card: {
    type: Boolean,
    default: !1
  },
  avatar: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: _g,
  classes: e0
} = ee("skeleton");
function n0(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? Q("v-if", !0) : (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [G(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (g(), E(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: X({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [D(
          "div",
          {
            class: c(e.n("--animation"))
          },
          null,
          2
        )],
        6
      )) : Q("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), E(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (g(), E(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: X({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [D(
            "div",
            {
              class: c(e.n("--animation"))
            },
            null,
            2
          )],
          6
        )) : Q("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (g(), E(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (g(), E(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: X({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [D(
              "div",
              {
                class: c(e.n("--animation"))
              },
              null,
              2
            )],
            6
          )) : Q("v-if", !0), (g(!0), E(
            Ve,
            null,
            Be(e.toNumber(e.rows), (r, a) => (g(), E(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: X({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [D(
                "div",
                {
                  class: c(e.n("--animation"))
                },
                null,
                2
              )],
              6
            ))),
            128
          ))],
          2
        )) : Q("v-if", !0)],
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.loading && e.fullscreen ? (g(), E(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: X({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [D(
        "div",
        {
          class: c(e.n("--animation"))
        },
        null,
        2
      )],
      6
    )) : Q("v-if", !0)],
    2
  );
}
const fa = _({
  render: n0,
  name: "VarSkeleton",
  props: xg,
  setup() {
    return {
      n: _g,
      classes: e0,
      toSizeUnit: we,
      toNumber: L
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
function r0(e) {
  return ["always", "normal", "never"].includes(e);
}
var a0 = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: r0
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  onStart: Y(),
  onEnd: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: ol,
  classes: t0
} = ee("slider"), Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var i0 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function o0(e, n) {
  var r = ie("var-form-details");
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [D(
        "div",
        {
          class: c(e.n("track"))
        },
        [D(
          "div",
          {
            class: c(e.n("track-background")),
            style: X({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
        ), D(
          "div",
          {
            class: c(e.n("track-fill")),
            style: X(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (g(!0), E(
        Ve,
        null,
        Be(e.thumbList, (a) => (g(), E(
          "div",
          {
            class: c(e.n("thumb")),
            key: a.enumValue,
            style: X({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Dn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Dn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [G(e.$slots, "button", {
            currentValue: a.text
          }, () => [D(
            "div",
            {
              class: c(e.n("thumb-block")),
              style: X({
                background: e.thumbColor
              })
            },
            null,
            6
          ), D(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: X({
                background: e.thumbColor
              })
            },
            null,
            6
          ), D(
            "div",
            {
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: X({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [D(
              "span",
              null,
              ne(a.text),
              1
            )],
            6
          )])],
          46,
          i0
        ))),
        128
      ))],
      2
    ), re(
      r,
      {
        "error-message": e.errorMessage,
        class: c(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
  );
}
const ca = _({
  render: o0,
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: a0,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = M(null), v = M(0), f = M(!1), m = Ne({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), p = F(() => L(e.max) - L(e.min)), w = F(() => v.value / p.value * L(e.step)), b = F(() => {
      var {
        modelValue: j,
        range: Z
      } = e, N = [];
      return Z && ye(j) ? N = [{
        value: P(j[0]),
        enumValue: Ie.First,
        text: h(j[0])
      }, {
        value: P(j[1]),
        enumValue: Ie.Second,
        text: h(j[1])
      }] : Ge(j) && (N = [{
        value: P(j),
        enumValue: Ie.First,
        text: h(j)
      }]), N;
    }), T = F(() => {
      var {
        activeColor: j,
        range: Z,
        modelValue: N
      } = e, U = Z && ye(N) ? P(Math.min(N[0], N[1])) : 0, H = Z && ye(N) ? P(Math.max(N[0], N[1])) - U : P(N);
      return {
        width: H + "%",
        left: U + "%",
        background: j
      };
    }), k = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), C = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), S = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : m[j].active, P = (j) => {
      var {
        min: Z,
        max: N
      } = e;
      return j < L(Z) ? 0 : j > L(N) ? 100 : (j - L(Z)) / p.value * 100;
    }, h = (j) => {
      if (!Ge(j))
        return 0;
      var Z = j;
      Z < Number(e.min) && (Z = Number(e.min)), Z > Number(e.max) && (Z = Number(e.max));
      var N = parseInt("" + Z, 10) === Z;
      return N ? Z : L(Z.toPrecision(5));
    }, A = (j, Z) => {
      var N = [], {
        step: U,
        range: H,
        modelValue: x,
        onChange: oe,
        min: se
      } = e, ve = L(U), Ce = Math.round(j / w.value), Ye = Ce * ve + L(se), xe = m[Z].percentValue * ve + L(se);
      if (m[Z].percentValue = Ce, H && ye(x) && (N = Z === Ie.First ? [Ye, x[1]] : [x[0], Ye]), xe !== Ye) {
        var Pe = H ? N.map((dn) => h(dn)) : h(Ye);
        V(oe, Pe), V(e["onUpdate:modelValue"], Pe), u();
      }
    }, $ = (j) => {
      if (!e.range)
        return Ie.First;
      var Z = m[Ie.First].percentValue * w.value, N = m[Ie.Second].percentValue * w.value, U = Math.abs(j - Z), H = Math.abs(j - N);
      return U <= H ? Ie.First : Ie.Second;
    }, B = (j, Z) => {
      v.value || (v.value = d.value.offsetWidth), !(k.value || C.value) && (V(e.onStart), f.value = !0, m[Z].startPosition = j.touches[0].clientX);
    }, I = (j, Z) => {
      if (!(k.value || C.value || !f.value)) {
        var N = j.touches[0].clientX - m[Z].startPosition + m[Z].currentLeft;
        m[Z].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), A(N, Z);
      }
    }, y = (j) => {
      var {
        range: Z,
        modelValue: N,
        onEnd: U,
        step: H,
        min: x
      } = e;
      if (!(k.value || C.value)) {
        var oe = [];
        m[j].currentLeft = m[j].percentValue * w.value, m[j].active = !1;
        var se = m[j].percentValue * L(H) + L(x);
        Z && ye(N) && (oe = j === Ie.First ? [se, N[1]] : [N[0], se]), V(U, Z ? oe : se), f.value = !1;
      }
    }, O = (j) => {
      if (!(k.value || C.value) && !j.target.closest("." + ol("thumb"))) {
        var Z = j.clientX - du(j.currentTarget), N = $(Z);
        A(Z, N), y(N);
      }
    }, R = () => {
      var j = L(e.step);
      return isNaN(j) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : j < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, W = () => {
      var {
        range: j,
        modelValue: Z
      } = e;
      return j && !ye(Z) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !j && ye(Z) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : j && ye(Z) && Z.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, q = function(j, Z) {
      j === void 0 && (j = e.modelValue), Z === void 0 && (Z = L(e.step));
      var N = (U) => {
        var {
          min: H,
          max: x
        } = e;
        return U < L(H) ? 0 : U > L(x) ? p.value / Z : (U - L(H)) / Z;
      };
      e.range && ye(j) ? (m[Ie.First].percentValue = N(j[0]), m[Ie.First].currentLeft = m[Ie.First].percentValue * w.value, m[Ie.Second].percentValue = N(j[1]), m[Ie.Second].currentLeft = m[Ie.Second].percentValue * w.value) : Ge(j) && (m[Ie.First].currentLeft = N(j) * w.value);
    }, z = () => {
      var j = e.range ? [0, 0] : 0;
      V(e["onUpdate:modelValue"], j), o();
    }, J = {
      reset: z,
      validate: l,
      resetValidation: o
    };
    return V(n, J), te([() => e.modelValue, () => e.step], (j) => {
      var [Z, N] = j;
      !R() || !W() || f.value || q(Z, L(N));
    }), te(v, () => q()), Ue(() => {
      !R() || !W() || (v.value = d.value.offsetWidth);
    }), {
      n: ol,
      classes: t0,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: k,
      errorMessage: a,
      thumbsProps: m,
      thumbList: b,
      multiplySizeUnit: Je,
      toNumber: L,
      showLabel: S,
      start: B,
      move: I,
      end: y,
      click: O
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
function Mi() {
  return Mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mi.apply(this, arguments);
}
function l0(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function s0(e) {
  return _i.includes(e);
}
var Bs = {
  type: {
    type: String,
    validator: s0
  },
  position: {
    type: String,
    default: "top",
    validator: l0
  },
  content: {
    type: String
  },
  contentClass: {
    type: String
  },
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: en(qn, "type"),
  loadingSize: en(qn, "size"),
  loadingRadius: en(qn, "radius"),
  loadingColor: Mi({}, en(qn, "color"), {
    default: "currentColor"
  }),
  lockScroll: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: String,
    default: "body"
  },
  forbidClick: {
    type: Boolean,
    default: !1
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y(),
  _update: {
    type: String
  }
}, {
  n: u0,
  classes: d0
} = ee("snackbar"), v0 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function f0(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return $e((g(), E(
    "div",
    {
      class: c(e.n()),
      style: X({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: X({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [G(e.$slots, "default", {}, () => [ge(
          ne(e.content),
          1
        )])],
        2
      ), D(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (g(), pe(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : Q("v-if", !0), e.type === "loading" ? (g(), pe(
          a,
          {
            key: 1,
            type: e.loadingType,
            size: e.loadingSize,
            color: e.loadingColor,
            radius: e.loadingRadius
          },
          null,
          8,
          ["type", "size", "color", "radius"]
        )) : Q("v-if", !0), G(e.$slots, "action")],
        2
      )],
      6
    )],
    6
  )), [[Ja, e.show]]);
}
const Ds = _({
  render: f0,
  name: "VarSnackbarCore",
  components: {
    VarLoading: Tn,
    VarIcon: Oe
  },
  props: Bs,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = xa(() => e.show, 1);
    Ot(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? v0[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && V(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return te(() => e.show, (o) => {
      o ? (V(e.onOpen), i()) : o === !1 && (clearTimeout(n.value), V(e.onClose));
    }), te(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Ue(() => {
      e.show && (V(e.onOpen), i());
    }), {
      SNACKBAR_TYPE: _i,
      n: u0,
      classes: d0,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: c0
} = ee("snackbar");
function m0(e, n) {
  var r = ie("var-snackbar-core");
  return g(), pe(
    Za,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [re(
      Re,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ce(() => [re(
          r,
          Ee(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ce(() => [G(e.$slots, "action")]),
            default: ce(() => [G(e.$slots, "default", {}, () => [ge(
              ne(e.content),
              1
            )])]),
            _: 3
          },
          16,
          ["class"]
        )]),
        _: 3
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
const ma = _({
  render: m0,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Ds
  },
  props: Bs,
  setup() {
    var {
      disabled: e
    } = Fi();
    return {
      n: c0,
      disabled: e
    };
  }
});
function Ka() {
  return Ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ka.apply(this, arguments);
}
function p0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var _i = ["loading", "success", "warning", "info", "error"], ll = 0, Pi = !1, As, Na = !1, mn = Ne([]), h0 = {
  type: void 0,
  content: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
}, g0 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, y0 = {
  setup() {
    return () => {
      var e = mn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Na && (t.position = "top");
        var l = Na ? "relative" : "absolute", s = Ka({
          position: l
        }, k0(t.position));
        return re(Ds, Ee(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = ln.zIndex;
      return re(ru, Ee(g0, {
        style: {
          zIndex: n
        },
        onAfterEnter: b0,
        onAfterLeave: w0
      }), p0(e) ? e : {
        default: () => [e]
      });
    };
  }
}, An = function(e) {
  var n = Ke(e) || Ge(e) ? {
    content: String(e)
  } : e, r = Ne(Ka({}, h0, n));
  r.show = !0, Pi || (Pi = !0, As = Aa(y0).unmountInstance);
  var {
    length: a
  } = mn, t = {
    id: ll++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Na)
    S0(t);
  else {
    var i = "update-" + ll;
    C0(r, i);
  }
  return {
    clear() {
      !Na && mn.length ? mn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
_i.forEach((e) => {
  An[e] = (n) => (zi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, An(n));
});
An.install = function(e) {
  e.component(ma.name, ma);
};
An.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Na && (mn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Na = e);
};
An.clear = function() {
  mn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
An.Component = ma;
function b0(e) {
  var n = e.getAttribute("data-id"), r = mn.find((a) => a.id === L(n));
  r && V(r.reactiveSnackOptions.onOpened);
}
function w0(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = mn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, V(r.reactiveSnackOptions.onClosed));
  var a = mn.every((t) => t.animationEnd);
  a && (V(As), mn = Ne([]), Pi = !1);
}
function S0(e) {
  mn.push(e);
}
function C0(e, n) {
  var [r] = mn;
  r.reactiveSnackOptions = Ka({}, r.reactiveSnackOptions, e), r._update = n;
}
function k0(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Ls = (e) => ["mini", "small", "normal", "large"].includes(e), $0 = (e) => Ls(e) || ye(e) || Ge(e) || Ke(e), T0 = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), O0 = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: $0
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "start",
    validator: T0
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function tn(e) {
  return "calc(" + e + " / 2)";
}
function V0(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: i,
    lastIndex: o
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? i !== o ? l = tn(e) + " " + n + " " + tn(e) + " 0" : l = tn(e) + " 0" : t === "space-around" ? l = tn(e) + " " + tn(n) : t === "space-between" && (i === 0 ? l = tn(e) + " " + tn(n) + " " + tn(e) + " 0" : i === o ? l = tn(e) + " 0 " + tn(e) + " " + tn(n) : l = tn(e) + " " + tn(n))), a === "column" && i !== o && (l = "0 0 " + e + " 0"), l;
}
var {
  n: qt,
  classes: E0
} = ee("space");
const pa = _({
  name: "VarSpace",
  props: O0,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? ["var(--space-size-" + i + "-y)", "var(--space-size-" + i + "-x)"] : ye(i) ? i.map(we) : [we(i), we(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (i = V(r.default)) != null ? i : [], m = Ls(v), [p, w] = a(v, m), b = (C) => {
        var S = [];
        return C.forEach((P) => {
          if (P.type !== au) {
            if (P.type === Ve && ye(P.children)) {
              P.children.forEach((h) => {
                S.push(h);
              });
              return;
            }
            S.push(P);
          }
        }), S;
      };
      f = b(f);
      var T = f.length - 1, k = f.map((C, S) => {
        var P = V0(p, w, {
          direction: d,
          justify: l,
          index: S,
          lastIndex: T
        });
        return re("div", {
          style: {
            margin: P
          }
        }, [C]);
      });
      return re("div", {
        class: E0(qt(), qt("$--box"), [o, qt("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + p + " / 2) 0" : void 0
        }
      }, [k]);
    };
  }
});
pa.install = function(e) {
  e.component(pa.name, pa);
};
var M0 = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
}, zs = Symbol("STEPS_BIND_STEP_KEY"), Rs = Symbol("STEPS_COUNT_STEP_KEY");
function P0() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(zs), {
    length: r
  } = pn(Rs);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function I0() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(zs), {
    index: r
  } = hn(Rs);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: N0,
  classes: B0
} = ee("step"), D0 = {
  key: 3
};
function A0(e, n) {
  var r = ie("var-icon");
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [D(
        "div",
        {
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: X({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (g(), pe(
            r,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (g(), pe(
            r,
            {
              key: 1,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (g(), pe(
            r,
            {
              key: 2,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (g(), E(
            "span",
            D0,
            ne(e.index + 1),
            1
          ))],
          6
        ), D(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [G(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? Q("v-if", !0) : (g(), E(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: X({
            margin: e.lineMargin
          })
        },
        null,
        6
      ))],
      2
    )],
    2
  );
}
const ha = _({
  render: A0,
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: M0,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = I0(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => o.value === a.value), m = F(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, w = () => v(a.value), b = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(p), te(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var k = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + k + "px";
      }
    }), {
      n: N0,
      classes: B0,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: w,
      getRef: b
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
function L0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var z0 = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: L0
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: R0
} = ee("steps");
function U0(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n()),
      style: X({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const ga = _({
  render: U0,
  name: "VarSteps",
  props: z0,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: i,
      bindStep: o
    } = P0(), l = (u) => {
      V(e.onClickStep, u);
    }, s = {
      active: n,
      length: i,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(s), {
      n: R0
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
var {
  n: Y0
} = ee("style-provider");
const ya = _({
  name: "VarStyleProvider",
  props: {
    styleVars: {
      type: Object,
      default: () => ({})
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => hl(e.tag, {
      class: Y0(),
      style: $l(e.styleVars)
    }, V(r.default));
  }
});
var Kt = [];
function Xa(e) {
  Kt.forEach((r) => document.documentElement.style.removeProperty(r)), Kt.length = 0;
  var n = $l(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Kt.push(a);
  });
}
Xa.Component = ya;
ya.install = function(e) {
  e.component(ya.name, ya);
};
Xa.install = function(e) {
  e.component(ya.name, ya);
};
var F0 = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: W0,
  classes: H0
} = ee("switch");
function j0(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = qe("ripple");
  return g(), E(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: X(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: X(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), $e((g(), E(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: X(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: X(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (g(), pe(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : Q("v-if", !0)],
          6
        )],
        6
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const ba = _({
  render: j0,
  name: "VarSwitch",
  components: {
    VarLoading: Tn,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  props: F0,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = () => i(e.rules, e.modelValue), s = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = F(() => {
      var {
        size: p,
        modelValue: w,
        color: b,
        closeColor: T,
        loadingColor: k,
        activeValue: C
      } = e;
      return {
        handle: {
          width: Je(p),
          height: Je(p),
          backgroundColor: w === C ? b : T,
          color: k
        },
        ripple: {
          left: w === C ? Je(p, 0.5) : "-" + Je(p, 0.5),
          color: w === C ? b : T || "#999",
          width: Je(p, 2),
          height: Je(p, 2)
        },
        track: {
          height: Je(p, 0.72),
          width: Je(p, 1.9),
          borderRadius: Je(p, 2 / 3),
          filter: w === C || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: w === C ? b : T
        },
        switch: {
          height: Je(p, 1.2),
          width: Je(p, 2)
        }
      };
    }), d = F(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Je(p, 0.4);
    }), v = (p) => {
      var {
        onClick: w,
        onChange: b,
        disabled: T,
        loading: k,
        readonly: C,
        modelValue: S,
        activeValue: P,
        inactiveValue: h,
        "onUpdate:modelValue": A
      } = e;
      if (V(w, p), !(T || k || C || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var $ = S === P ? h : P;
        V(b, $), V(A, $), s();
      }
    }, f = () => {
      V(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, m = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return V(n, m), {
      n: W0,
      classes: H0,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
var G0 = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, Us = Symbol("TABS_BIND_TAB_KEY"), Ys = Symbol("TABS_COUNT_TAB_KEY");
function q0() {
  var {
    childProviders: e,
    bindChildren: n
  } = sn(Us), {
    length: r
  } = pn(Ys);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function K0() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Us), {
    index: r
  } = hn(Ys);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: lt,
  classes: X0
} = ee("tab");
function Z0(e, n) {
  var r = qe("ripple");
  return $e((g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: X({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [G(e.$slots, "default")],
    6
  )), [[r, {
    disabled: e.disabled
  }]]);
}
const wa = _({
  render: Z0,
  name: "VarTab",
  directives: {
    Ripple: Fe
  },
  props: G0,
  setup(e) {
    var n = M(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = K0(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = o, w = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(w);
    var b = () => {
      var {
        disabled: C,
        name: S
      } = e;
      return C ? f.value : u.value === S || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, T = () => {
      var {
        disabled: C,
        name: S
      } = e;
      return C ? lt("$-tab--disabled") : u.value === S || u.value === (i == null ? void 0 : i.value) ? lt("$-tab--active") : lt("$-tab--inactive");
    }, k = (C) => {
      var {
        disabled: S,
        name: P,
        onClick: h
      } = e;
      S || (V(h, P != null ? P : i.value, C), s(w));
    };
    return te(() => e.name, p), te(() => e.disabled, p), {
      n: lt,
      classes: X0,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: b,
      computeColorClass: T,
      handleClick: k
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Fs = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Ws = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function J0() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Fs), {
    length: r
  } = pn(Ws);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Q0() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Fs), {
    index: r
  } = hn(Ws);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var x0 = {
  name: {
    type: [String, Number]
  }
}, {
  n: _0,
  classes: ey
} = ee("tab-item");
function ny(e, n) {
  var r = ie("var-swipe-item");
  return g(), pe(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ce(() => [e.initSlot ? G(e.$slots, "default", {
        key: 0
      }) : Q("v-if", !0)]),
      _: 3
    },
    8,
    ["class"]
  );
}
const Sa = _({
  render: ny,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Qn
  },
  props: x0,
  setup(e) {
    var n = M(!1), r = M(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: i
    } = Q0(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: _0,
      classes: ey,
      current: n,
      initSlot: r
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var {
  n: ry,
  classes: ay
} = ee("table");
function ty(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.n("main"))
      },
      [D(
        "table",
        {
          class: c(e.n("table")),
          style: X({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [G(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [G(e.$slots, "footer")],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const Ca = _({
  render: ty,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: we,
      n: ry,
      classes: ay
    };
  }
});
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
function sl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var iy = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: sl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: sl
  },
  fixedBottom: {
    type: Boolean,
    default: !1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  offsetTop: en(ys, "offsetTop"),
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
};
function ul(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function oy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ul(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ul(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: ly,
  classes: sy
} = ee("tabs");
function uy(e, n) {
  return g(), pe(
    Da(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: ce(() => [D(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [D(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [G(e.$slots, "default"), D(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: X({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
            6
          )],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top"]
  );
}
const ka = _({
  render: uy,
  name: "VarTabs",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: iy,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), i = M(!1), o = M(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), {
      tabList: f,
      bindTabList: m,
      length: p
    } = q0(), w = ($) => {
      var B, I = (B = $.name.value) != null ? B : $.index.value, {
        active: y,
        onChange: O,
        onClick: R
      } = e;
      V(e["onUpdate:active"], I), V(R, I), I !== y && V(O, I);
    }, b = () => f.find(($) => {
      var {
        name: B
      } = $;
      return e.active === B.value;
    }), T = ($) => f.find((B) => {
      var {
        index: I
      } = B;
      return ($ != null ? $ : e.active) === I.value;
    }), k = () => {
      if (p.value !== 0) {
        var {
          active: $
        } = e;
        if (Ge($)) {
          var B = $ > p.value - 1 ? p.value - 1 : 0;
          return V(e["onUpdate:active"], B), T(B);
        }
      }
    }, C = () => {
      i.value = f.length >= 5;
    }, S = ($) => {
      var {
        element: B
      } = $, I = B.value;
      e.layoutDirection === "horizontal" ? (n.value = (I == null ? void 0 : I.offsetWidth) + "px", a.value = (I == null ? void 0 : I.offsetLeft) + "px") : (r.value = (I == null ? void 0 : I.offsetHeight) + "px", t.value = (I == null ? void 0 : I.offsetTop) + "px");
    }, P = ($) => {
      var {
        element: B
      } = $;
      if (!!i.value) {
        var I = o.value, y = B.value;
        if (e.layoutDirection === "horizontal") {
          var O = y.offsetLeft + y.offsetWidth / 2 - I.offsetWidth / 2;
          Wa(I, {
            left: O,
            animation: Zt
          });
        } else {
          var R = y.offsetTop + y.offsetHeight / 2 - I.offsetHeight / 2;
          Wa(I, {
            top: R,
            animation: Zt
          });
        }
      }
    }, h = () => {
      var $ = b() || T() || k();
      !$ || $.disabled.value || (C(), S($), P($));
    }, A = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: h,
      onTabClick: w
    };
    return m(A), te(() => p.value, /* @__PURE__ */ oy(function* () {
      yield Vn(), h();
    })), te(() => e.active, h), Ue(() => window.addEventListener("resize", h)), tr(() => window.removeEventListener("resize", h)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Re,
      toSizeUnit: we,
      n: ly,
      classes: sy,
      resize: h
    };
  }
});
ka.install = function(e) {
  e.component(ka.name, ka);
};
var dy = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !1
  },
  "onUpdate:active": Y()
};
function dl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        dl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        dl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: fy
} = ee("tabs-items");
function cy(e, n) {
  var r = ie("var-swipe");
  return g(), pe(
    r,
    {
      class: c(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: ce(() => [G(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const $a = _({
  render: cy,
  name: "VarTabsItems",
  components: {
    VarSwipe: Jn
  },
  props: dy,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = J0(), i = (f) => r.find((m) => {
      var {
        name: p
      } = m;
      return f === p.value;
    }), o = (f) => r.find((m) => {
      var {
        index: p
      } = m;
      return f === p.value;
    }), l = (f) => i(f) || o(f), s = (f) => {
      var m, p = l(f);
      !p || (r.forEach((w) => {
        var {
          setCurrent: b
        } = w;
        return b(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((b) => {
        var {
          index: T
        } = b;
        return T.value === f;
      }), w = (m = p.name.value) != null ? m : p.index.value;
      V(e["onUpdate:active"], w);
    }, d = () => n.value, v = {};
    return a(v), te(() => e.active, s), te(() => t.value, /* @__PURE__ */ vy(function* () {
      yield Vn(), s(e.active);
    })), {
      swipe: n,
      n: fy,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
$a.install = function(e) {
  e.component($a.name, $a);
};
const my = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, py = {
  "--badge-default-color": "#555"
}, hy = {
  "--button-default-color": "#303030"
}, gy = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, yy = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, by = {
  "--checkbox-unchecked-color": "#fff"
}, wy = {
  "--chip-default-color": "#555"
}, Sy = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Cy = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, ky = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, $y = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Ty = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, Oy = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Vy = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, Ey = {
  "--popup-content-background-color": "#1e1e1e"
}, My = {
  "--pull-refresh-background": "#303030"
}, Py = {
  "--radio-unchecked-color": "#fff"
}, Iy = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, Ny = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, By = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, Dy = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, Ay = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, Ly = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, zy = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, Ry = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, Uy = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, Yy = {
  "--tabs-background": "#1e1e1e"
}, Fy = {
  "--app-bar-color": "#272727"
}, Wy = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, Hy = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, jy = {
  "--menu-background-color": "#272727"
}, Gy = {
  "--breadcrumb-inactive-color": "#aaa"
};
function Ii() {
  return Ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ii.apply(this, arguments);
}
const qy = Ii({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, hy, yy, gy, Ry, Cy, By, Yy, Ly, Ey, ky, my, wy, py, Uy, Sy, My, Ay, Dy, Oy, zy, Ty, Ny, Py, by, $y, Vy, Fy, Wy, Hy, jy, Iy, Gy);
var Ni = {
  dark: qy
}, fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Qe = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], vl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function Ky(e) {
  return ["ampm", "24hr"].includes(e);
}
var Xy = {
  modelValue: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: "ampm",
    validator: Ky
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  "onUpdate:modelValue": Y(),
  onChange: Y()
}, Hs = (e, n) => e === "24hr" || n === "am", eo = (e, n, r) => {
  var a = fn.findIndex((i) => L(i) === L(r)), t = Hs(e, n) ? r : Qe[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, nn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, js = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = eo(t, i, o), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: w
    } = nn(l);
    f = p === v && a > w;
  }
  if (!l && s) {
    var {
      hour: b,
      minute: T
    } = nn(s);
    f = b === v && a < T;
  }
  if (l && s) {
    var {
      hour: k,
      minute: C
    } = nn(l), {
      hour: S,
      minute: P
    } = nn(s);
    f = S === v && a < P || k === v && a > C;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Gs = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = eo(t, i, o), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: w,
      minute: b,
      second: T
    } = nn(s);
    m = w === f && b < l || b === l && a > T;
  }
  if (!s && u) {
    var {
      hour: k,
      minute: C,
      second: S
    } = nn(u);
    m = k === f && C > l || C === l && a > S;
  }
  if (s && u) {
    var {
      hour: P,
      minute: h,
      second: A
    } = nn(s), {
      hour: $,
      minute: B,
      second: I
    } = nn(u);
    m = P === f && h < l || $ === f && B > l || P === f && h === l && a > A || $ === f && B === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: Zy,
  classes: Jy
} = ee("time-picker");
function Qy(e, n) {
  return g(), E(
    "div",
    {
      class: c(e.n("clock"))
    },
    [D(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: X(e.handStyle)
      },
      null,
      6
    ), (g(!0), E(
      Ve,
      null,
      Be(e.timeScales, (r, a) => (g(), E(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: X(e.getStyle(a, r, !1))
        },
        ne(r),
        7
      ))),
      128
    )), e.format === "24hr" && e.type === "hour" ? (g(), E(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(g(!0), E(
        Ve,
        null,
        Be(e.hours24, (r, a) => (g(), E(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: X(e.getStyle(a, r, !0))
          },
          ne(r),
          7
        ))),
        128
      ))],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const xy = _({
  render: Qy,
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = M(null), t = M([]), i = M([]), o = F(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = F(() => {
      if (e.rad !== void 0) {
        var b = e.rad / 30;
        return b >= 0 ? b : b + 12;
      }
    }), s = F(() => e.type === "hour" ? fn : vl), u = (b, T) => {
      var k;
      b = (k = b) != null ? k : e.type === "minute" ? e.time.minute : e.time.second;
      var C = e.type === "minute" ? js : Gs, S = {
        time: L(b),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(S, "minute"), C(S);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var b = e.isInner ? Qe[l.value] : s.value[l.value];
      return s.value === vl ? u() ? "#bdbdbd" : e.color : f(b) ? "#bdbdbd" : e.color;
    }, v = (b, T) => T ? l.value === b && e.isInner : l.value === b && (!e.isInner || e.type !== "hour"), f = (b) => {
      if (e.type === "hour") {
        if (Hs(e.format, e.ampm))
          return t.value.includes(b);
        var T = fn.findIndex((k) => k === b);
        return i.value.includes(T);
      }
      return u(b, !0);
    }, m = (b, T, k) => {
      var C = 2 * Math.PI / 12 * b - Math.PI / 2, S = 50 * (1 + Math.cos(C)), P = 50 * (1 + Math.sin(C)), h = () => v(b, k) ? f(T) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: A,
        color: $
      } = h();
      return {
        left: S + "%",
        top: P + "%",
        backgroundColor: A,
        color: $
      };
    }, p = () => {
      var {
        width: b,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: b,
        height: T
      };
    }, w = () => {
      if (l.value !== void 0) {
        var b = e.ampm === "am" ? fn : Qe;
        return yr(b[l.value], 2, "0");
      }
    };
    return te([l, () => e.isInner], (b, T) => {
      var [k, C] = b, [S, P] = T, h = k === S && C === P;
      if (!(h || e.type !== "hour" || l.value === void 0)) {
        var A = C ? Qe[l.value] : w(), $ = e.useSeconds ? ":" + e.time.second : "", B = A + ":" + e.time.minute + $;
        e.preventNextUpdate || r("update", B), r("change-prevent-update");
      }
    }), te(() => e.rad, (b, T) => {
      if (!(e.type === "hour" || b === void 0 || T === void 0)) {
        var k = b / 6 >= 0 ? b / 6 : b / 6 + 60, C = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (k !== C) {
          var S, {
            hourStr: P
          } = eo(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var h = ae().minute(k).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            S = P + ":" + h + A;
          }
          if (e.type === "second") {
            var $ = ae().second(k).format("ss"), B = e.useSeconds ? ":" + $ : "";
            S = P + ":" + e.time.minute + B;
          }
          r("update", S);
        }
      }
    }), te([() => e.max, () => e.min, () => e.allowedTime], (b) => {
      var [T, k, C] = b;
      if (t.value = [], T && !k) {
        var {
          hour: S
        } = nn(T), P = fn.filter((J) => L(J) > S), h = Qe.filter((J) => L(J) > S);
        t.value = [...P, ...h];
      }
      if (!T && k) {
        var {
          hour: A
        } = nn(k), $ = fn.filter((J) => L(J) < A), B = Qe.filter((J) => L(J) < A);
        t.value = [...$, ...B];
      }
      if (T && k) {
        var {
          hour: I
        } = nn(T), {
          hour: y
        } = nn(k), O = fn.filter((J) => L(J) < y || L(J) > I), R = Qe.filter((J) => L(J) < y || L(J) > I);
        t.value = [...O, ...R];
      }
      if (C != null && C.hours) {
        var {
          hours: W
        } = C, q = fn.filter((J) => !W(L(J))), z = Qe.filter((J) => !W(L(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...q, ...z])];
      }
      i.value = t.value.map((J) => Qe.findIndex((j) => J === j)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: Zy,
      classes: Jy,
      hours24: Qe,
      timeScales: s,
      inner: a,
      handStyle: o,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: m,
      activeItemIndex: l
    };
  }
});
var {
  n: _y,
  classes: eb
} = ee("time-picker"), nb = (e) => ($r(""), e = e(), Tr(), e), rb = /* @__PURE__ */ nb(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
)), ab = {
  key: 0
};
function tb(e, n) {
  var r = ie("clock");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: X({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ne(e.time.hour),
          3
        ), rb, D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
        ), e.useSeconds ? (g(), E("span", ab, ":")) : Q("v-if", !0), e.useSeconds ? (g(), E(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
        )) : Q("v-if", !0)],
        2
      ), e.format === "ampm" ? (g(), E(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
        ), D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
        )],
        2
      )) : Q("v-if", !0)],
      6
    ), D(
      "div",
      {
        class: c(e.n("body"))
      },
      [D(
        "div",
        {
          class: c(e.n("clock-container")),
          onTouchstart: n[5] || (n[5] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchmove: n[6] || (n[6] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchend: n[7] || (n[7] = function() {
            return e.end && e.end(...arguments);
          }),
          ref: "container"
        },
        [re(
          Re,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ce(() => [(g(), pe(
              r,
              {
                key: e.type,
                ref: "inner",
                type: e.type,
                ampm: e.ampm,
                color: e.color,
                "is-inner": e.isInner,
                format: e.format,
                "allowed-time": e.allowedTime,
                rad: e.getRad,
                time: e.time,
                "prevent-next-update": e.isPreventNextUpdate,
                "use-seconds": e.useSeconds,
                max: e.max,
                min: e.min,
                onUpdate: e.update,
                onChangePreventUpdate: e.changePreventUpdate
              },
              null,
              8,
              ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]
            ))]),
            _: 1
          },
          8,
          ["name"]
        )],
        34
      )],
      2
    )],
    2
  );
}
const Ta = _({
  render: tb,
  name: "VarTimePicker",
  components: {
    Clock: xy
  },
  props: Xy,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), i = M(!1), o = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), p = M(!1), w = M(!1), b = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ne({
      x: 0,
      y: 0
    }), k = Ne({
      x: [],
      y: []
    }), C = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (N) => {
      V(e["onUpdate:modelValue"], N), V(e.onChange, N);
    }, P = (N) => N * 57.29577951308232, h = (N) => {
      l.value = !1, w.value = !1, f.value = N;
    }, A = (N) => {
      var {
        disableHour: U
      } = a.value, H = fn.findIndex((se) => L(se) === L(b.value.hour)), x = N === "am" ? fn : Qe, oe = [...x.slice(H), ...x.slice(0, H)];
      return oe.find((se, ve) => (i.value = ve !== 0, !U.includes(se)));
    }, $ = (N) => {
      if (!e.readonly) {
        m.value = N;
        var U = A(N);
        if (!!U) {
          var H = e.useSeconds ? ":" + b.value.second : "", x = yr(U, 2, "0") + ":" + b.value.minute + H;
          S(x);
        }
      }
    }, B = (N, U) => {
      var H = N >= k.x[0] && N <= k.x[1], x = U >= k.y[0] && U <= k.y[1];
      return H && x;
    }, I = (N) => {
      var U = e.format === "24hr" ? "HH" : "hh", {
        hour: H,
        minute: x,
        second: oe
      } = nn(N);
      return {
        hour: ae().hour(H).format(U),
        minute: ae().minute(x).format("mm"),
        second: ae().second(oe).format("ss")
      };
    }, y = (N) => {
      var U = N / 30;
      return U >= 0 ? U : U + 12;
    }, O = () => {
      var {
        width: N,
        height: U
      } = a.value.getSize(), H = T.x - N / 2 - 8, x = T.x + N / 2 + 8, oe = T.y - U / 2 - 8, se = T.y + U / 2 + 8;
      return {
        rangeXMin: H,
        rangeXMax: x,
        rangeYMin: oe,
        rangeYMax: se
      };
    }, R = (N, U, H) => {
      var {
        disableHour: x
      } = a.value;
      o.value = B(N, U);
      var oe = Math.round(H / 30) * 30 + 90, se = y(oe), ve = t.value ? fn[se] : Qe[se];
      if (x.includes(ve) || (t.value = e.format === "24hr" ? B(N, U) : !1), t.value === o.value) {
        var Ce = t.value || m.value === "pm" ? Qe[se] : fn[se];
        p.value = x.includes(Ce), !p.value && (u.value = oe, l.value = !0);
      }
    }, W = (N) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(N / 6) * 6 + 90, x = H / 6 >= 0 ? H / 6 : H / 6 + 60, oe = {
        time: x,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      w.value = js(oe), !w.value && (d.value = H, s.value = !0);
    }, q = (N) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(N / 6) * 6 + 90, x = H / 6 >= 0 ? H / 6 : H / 6 + 60, oe = {
        time: x,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        minute: L(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      Gs(oe) || (v.value = H);
    }, z = () => {
      var {
        left: N,
        top: U,
        width: H,
        height: x
      } = n.value.getBoundingClientRect();
      if (T.x = N + H / 2, T.y = U + x / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: oe,
          rangeXMax: se,
          rangeYMin: ve,
          rangeYMax: Ce
        } = O();
        k.x = [oe, se], k.y = [ve, Ce];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        z();
        var {
          clientX: U,
          clientY: H
        } = N.touches[0], x = U - T.x, oe = H - T.y, se = Math.round(P(Math.atan2(oe, x)));
        f.value === "hour" ? R(U, H, se) : f.value === "minute" ? W(se) : q(se);
      }
    }, j = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, Z = () => {
      i.value = !1;
    };
    return te(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: U,
          minute: H,
          second: x
        } = nn(N), oe = ae().hour(U).format("hh"), se = ae().hour(U).format("HH"), ve = ae().minute(H).format("mm"), Ce = ae().second(x).format("ss");
        u.value = (oe === "12" ? 0 : L(oe)) * 30, d.value = L(ve) * 6, v.value = L(Ce) * 6, b.value = I(N), e.format !== "24hr" && (m.value = yr("" + U, 2, "0") === se && Qe.includes(se) ? "pm" : "am"), t.value = e.format === "24hr" && Qe.includes(se);
      }
    }, {
      immediate: !0
    }), {
      n: _y,
      classes: eb,
      getRad: C,
      time: b,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: i,
      moveHand: J,
      checkPanel: h,
      checkAmpm: $,
      end: j,
      update: S,
      changePreventUpdate: Z
    };
  }
});
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var ib = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  onBeforeRead: Y(),
  onAfterRead: Y(),
  onBeforeRemove: Y(),
  onRemove: Y(),
  onOversize: Y(),
  "onUpdate:modelValue": Y()
};
function fl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        fl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        fl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: ob,
  classes: lb
} = ee("uploader"), sb = 0, ub = ["onClick"], db = ["onClick"], vb = ["src", "alt"], fb = ["multiple", "accept", "capture", "disabled"], cb = ["src"];
function mb(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), i = qe("ripple");
  return g(), E(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(g(!0), E(
        Ve,
        null,
        Be(e.files, (o) => $e((g(), E(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [o.state === "loading", e.n("--loading")])),
            key: o.id,
            onClick: (l) => e.preview(o)
          },
          [D(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ne(o.name || o.url),
            3
          ), e.removable ? (g(), E(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Dn((l) => e.handleRemove(o), ["stop"])
            },
            [re(
              r,
              {
                class: c(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            db
          )) : Q("v-if", !0), o.cover ? (g(), E(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: X({
                objectFit: o.fit
              }),
              src: o.cover,
              alt: o.name
            },
            null,
            14,
            vb
          )) : Q("v-if", !0), D(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          ub
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? $e((g(), E(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [D(
          "input",
          {
            ref: "input",
            class: c(e.n("action-input")),
            type: "file",
            multiple: e.multiple,
            accept: e.accept,
            capture: e.capture,
            disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
            onChange: n[0] || (n[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          fb
        ), G(e.$slots, "default", {}, () => [re(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : Q("v-if", !0)],
      2
    ), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), re(
      t,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (o) => e.showPreview = o),
        onClosed: n[3] || (n[3] = (o) => e.currentPreview = null)
      },
      {
        default: ce(() => {
          var o, l;
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (g(), E(
            "video",
            {
              key: 0,
              class: c(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (l = e.currentPreview) == null ? void 0 : l.url
            },
            null,
            10,
            cb
          )) : Q("v-if", !0)];
        }),
        _: 1
      },
      8,
      ["class", "show"]
    )],
    2
  );
}
const Oa = _({
  render: mb,
  name: "VarUploader",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarPopup: Cn,
    VarFormDetails: je
  },
  props: ib,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = F(() => {
      var {
        maxlength: W,
        modelValue: {
          length: q
        }
      } = e;
      return Ge(W) ? q + " / " + W : "";
    }), {
      form: i,
      bindForm: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = F(() => {
      var {
        modelValue: W,
        hideList: q
      } = e;
      return q ? [] : W;
    }), f = () => {
      n.value.click();
    }, m = (W) => {
      var {
        disabled: q,
        readonly: z,
        previewed: J
      } = e;
      if (!(i != null && i.disabled.value || i != null && i.readonly.value || q || z || !J)) {
        var {
          url: j
        } = W;
        if (Ke(j) && oo(j)) {
          rr(j);
          return;
        }
        Ke(j) && lo(j) && (a.value = W, r.value = !0);
      }
    }, p = (W) => ({
      id: sb++,
      url: "",
      cover: "",
      name: W.name,
      file: W
    }), w = (W) => {
      var q = W.target, {
        files: z
      } = q;
      return Array.from(z);
    }, b = (W) => new Promise((q) => {
      var z = new FileReader();
      z.onload = () => {
        var J = z.result;
        W.file.type.startsWith("image") && (W.cover = J), W.url = J, q(W);
      }, z.readAsDataURL(W.file);
    }), T = (W) => W.map(b), k = (W) => {
      var {
        onBeforeRead: q
      } = e;
      return W.map((z) => new Promise((J) => {
        q || J({
          valid: !0,
          varFile: z
        });
        var j = V(q, Ne(z));
        j = ye(j) ? j : [j], Promise.all(j).then((Z) => {
          J({
            valid: !Z.some((N) => !N),
            varFile: z
          });
        });
      }));
    }, C = /* @__PURE__ */ function() {
      var W = cl(function* (q) {
        var {
          maxsize: z,
          maxlength: J,
          modelValue: j,
          onOversize: Z,
          onAfterRead: N,
          readonly: U,
          disabled: H
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || H || U)) {
          var x = (Pe) => Pe.filter((dn) => dn.file.size > L(z) ? (V(Z, Ne(dn)), !1) : !0), oe = (Pe) => {
            var dn = Math.min(Pe.length, L(J) - j.length);
            return Pe.slice(0, dn);
          }, se = w(q), ve = se.map(p);
          ve = z != null ? x(ve) : ve, ve = J != null ? oe(ve) : ve;
          var Ce = yield Promise.all(T(ve)), Ye = yield Promise.all(k(Ce)), xe = Ye.filter((Pe) => {
            var {
              valid: dn
            } = Pe;
            return dn;
          }).map((Pe) => {
            var {
              varFile: dn
            } = Pe;
            return dn;
          });
          V(e["onUpdate:modelValue"], [...j, ...xe]), q.target.value = "", xe.forEach((Pe) => V(N, Ne(Pe)));
        }
      });
      return function(z) {
        return W.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var W = cl(function* (q) {
        var {
          disabled: z,
          readonly: J,
          modelValue: j,
          onBeforeRemove: Z,
          onRemove: N
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || z || J)) {
          if (Z) {
            var U = V(Z);
            if (U = ye(U) ? U : [U], (yield Promise.all(U)).some((x) => !x))
              return;
          }
          var H = j.filter((x) => x !== q);
          V(N, q), B("onRemove"), V(e["onUpdate:modelValue"], H);
        }
      });
      return function(z) {
        return W.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((W) => W.state === "success"), h = () => e.modelValue.filter((W) => W.state === "error"), A = () => e.modelValue.filter((W) => W.state === "loading"), $ = {
      getSuccess: P,
      getError: h,
      getLoading: A
    }, B = (W) => {
      Me(() => {
        var {
          validateTrigger: q,
          rules: z,
          modelValue: J
        } = e;
        s(q, W, z, J, $);
      });
    }, I = !1, y = () => u(e.rules, e.modelValue, $), O = () => {
      I = !0, V(e["onUpdate:modelValue"], []), d();
    }, R = {
      validate: y,
      resetValidation: d,
      reset: O
    };
    return V(o, R), te(() => e.modelValue, () => {
      !I && B("onChange"), I = !1;
    }, {
      deep: !0
    }), {
      n: ob,
      classes: lb,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: lo,
      isHTMLSupportImage: oo,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: m,
      triggerAction: f,
      handleChange: C,
      handleRemove: S,
      getSuccess: P,
      getError: h,
      getLoading: A,
      validate: y,
      resetValidation: d,
      reset: O
    };
  }
});
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
function pb(e) {
  br.install && e.use(br), Ar.install && e.use(Ar), Lr.install && e.use(Lr), ur.install && e.use(ur), zr.install && e.use(zr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), rn.install && e.use(rn), Fr.install && e.use(Fr), dr.install && e.use(dr), vr.install && e.use(vr), Wr.install && e.use(Wr), fr.install && e.use(fr), Hr.install && e.use(Hr), jr.install && e.use(jr), Gr.install && e.use(Gr), ln.install && e.use(ln), qr.install && e.use(qr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), wr.install && e.use(wr), Zr.install && e.use(Zr), Zn.install && e.use(Zn), je.install && e.use(je), Oe.install && e.use(Oe), Jr.install && e.use(Jr), rr.install && e.use(rr), Qr.install && e.use(Qr), xr.install && e.use(xr), hr.install && e.use(hr), bt.install && e.use(bt), _r.install && e.use(_r), ea.install && e.use(ea), Tn.install && e.use(Tn), ja.install && e.use(ja), ni.install && e.use(ni), er.install && e.use(er), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), kr.install && e.use(kr), Cn.install && e.use(Cn), ta.install && e.use(ta), ia.install && e.use(ia), oa.install && e.use(oa), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), Fe.install && e.use(Fe), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), An.install && e.use(An), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), xn.install && e.use(xn), Xa.install && e.use(Xa), Jn.install && e.use(Jn), Qn.install && e.use(Qn), ba.install && e.use(ba), wa.install && e.use(wa), Sa.install && e.use(Sa), Ca.install && e.use(Ca), ka.install && e.use(ka), $a.install && e.use($a), Ni.install && e.use(Ni), Ta.install && e.use(Ta), Oa.install && e.use(Oa);
}
const gb = {
  install: pb,
  ActionSheet: br,
  AppBar: Ar,
  BackTop: Lr,
  Badge: ur,
  BottomNavigation: zr,
  BottomNavigationItem: Rr,
  Breadcrumb: Ur,
  Breadcrumbs: Yr,
  Button: rn,
  Card: Fr,
  Cell: dr,
  Checkbox: vr,
  CheckboxGroup: Wr,
  Chip: fr,
  Col: Hr,
  Collapse: jr,
  CollapseItem: Gr,
  Context: ln,
  Countdown: qr,
  Counter: Kr,
  DatePicker: Xr,
  Dialog: wr,
  Divider: Zr,
  Form: Zn,
  FormDetails: je,
  Icon: Oe,
  Image: Jr,
  ImagePreview: rr,
  IndexAnchor: Qr,
  IndexBar: xr,
  Input: hr,
  Lazy: bt,
  Link: _r,
  List: ea,
  Loading: Tn,
  LoadingBar: ja,
  Locale: ni,
  Menu: er,
  Option: na,
  Overlay: ra,
  Pagination: aa,
  Picker: kr,
  Popup: Cn,
  Progress: ta,
  PullRefresh: ia,
  Radio: oa,
  RadioGroup: la,
  Rate: sa,
  Result: ua,
  Ripple: Fe,
  Row: da,
  Select: va,
  Skeleton: fa,
  Slider: ca,
  Snackbar: An,
  Space: pa,
  Step: ha,
  Steps: ga,
  Sticky: xn,
  StyleProvider: Xa,
  Swipe: Jn,
  SwipeItem: Qn,
  Switch: ba,
  Tab: wa,
  TabItem: Sa,
  Table: Ca,
  Tabs: ka,
  TabsItems: $a,
  Themes: Ni,
  TimePicker: Ta,
  Uploader: Oa
};
export {
  br as ActionSheet,
  Ar as AppBar,
  Lr as BackTop,
  ur as Badge,
  zr as BottomNavigation,
  Rr as BottomNavigationItem,
  Ur as Breadcrumb,
  Yr as Breadcrumbs,
  rn as Button,
  Fr as Card,
  dr as Cell,
  vr as Checkbox,
  Wr as CheckboxGroup,
  fr as Chip,
  Hr as Col,
  jr as Collapse,
  Gr as CollapseItem,
  ln as Context,
  qr as Countdown,
  Kr as Counter,
  Xr as DatePicker,
  wr as Dialog,
  Zr as Divider,
  Zn as Form,
  je as FormDetails,
  Oe as Icon,
  Jr as Image,
  rr as ImagePreview,
  Qr as IndexAnchor,
  xr as IndexBar,
  hr as Input,
  bt as Lazy,
  _r as Link,
  ea as List,
  Tn as Loading,
  ja as LoadingBar,
  ni as Locale,
  er as Menu,
  na as Option,
  ra as Overlay,
  aa as Pagination,
  kr as Picker,
  Cn as Popup,
  ta as Progress,
  ia as PullRefresh,
  oa as Radio,
  la as RadioGroup,
  sa as Rate,
  ua as Result,
  Fe as Ripple,
  da as Row,
  va as Select,
  fa as Skeleton,
  ca as Slider,
  An as Snackbar,
  pa as Space,
  ha as Step,
  ga as Steps,
  xn as Sticky,
  Xa as StyleProvider,
  Jn as Swipe,
  Qn as SwipeItem,
  ba as Switch,
  wa as Tab,
  Sa as TabItem,
  Ca as Table,
  ka as Tabs,
  $a as TabsItems,
  Ni as Themes,
  Ta as TimePicker,
  Oa as Uploader,
  gb as default,
  pb as install
};
