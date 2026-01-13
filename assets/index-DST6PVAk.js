var Km = Object.defineProperty;
var Xm = (e, t, r) =>
  t in e
    ? Km(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var ct = (e, t, r) => Xm(e, typeof t != "symbol" ? t + "" : t, r);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const l of a.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
var _m =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ii(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Xc = { exports: {} },
  ai = {},
  _c = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jn = Symbol.for("react.element"),
  $m = Symbol.for("react.portal"),
  ep = Symbol.for("react.fragment"),
  tp = Symbol.for("react.strict_mode"),
  rp = Symbol.for("react.profiler"),
  np = Symbol.for("react.provider"),
  sp = Symbol.for("react.context"),
  ip = Symbol.for("react.forward_ref"),
  ap = Symbol.for("react.suspense"),
  lp = Symbol.for("react.memo"),
  op = Symbol.for("react.lazy"),
  wo = Symbol.iterator;
function cp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wo && e[wo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $c = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  eu = Object.assign,
  tu = {};
function zr(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = tu),
    (this.updater = r || $c);
}
zr.prototype.isReactComponent = {};
zr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ru() {}
ru.prototype = zr.prototype;
function hl(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = tu),
    (this.updater = r || $c);
}
var fl = (hl.prototype = new ru());
fl.constructor = hl;
eu(fl, zr.prototype);
fl.isPureReactComponent = !0;
var bo = Array.isArray,
  nu = Object.prototype.hasOwnProperty,
  gl = { current: null },
  su = { key: !0, ref: !0, __self: !0, __source: !0 };
function iu(e, t, r) {
  var n,
    i = {},
    a = null,
    l = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      nu.call(t, n) && !su.hasOwnProperty(n) && (i[n] = t[n]);
  var o = arguments.length - 2;
  if (o === 1) i.children = r;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (n in ((o = e.defaultProps), o)) i[n] === void 0 && (i[n] = o[n]);
  return {
    $$typeof: Jn,
    type: e,
    key: a,
    ref: l,
    props: i,
    _owner: gl.current,
  };
}
function up(e, t) {
  return {
    $$typeof: Jn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jn;
}
function dp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var jo = /\/+/g;
function Mi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dp("" + e.key)
    : t.toString(36);
}
function hs(e, t, r, n, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (a) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Jn:
          case $m:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = n === "" ? "." + Mi(l, 0) : n),
      bo(i)
        ? ((r = ""),
          e != null && (r = e.replace(jo, "$&/") + "/"),
          hs(i, t, r, "", function (u) {
            return u;
          }))
        : i != null &&
          (xl(i) &&
            (i = up(
              i,
              r +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(jo, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (n = n === "" ? "." : n + ":"), bo(e)))
    for (var o = 0; o < e.length; o++) {
      a = e[o];
      var c = n + Mi(a, o);
      l += hs(a, t, r, c, i);
    }
  else if (((c = cp(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(a = e.next()).done; )
      (a = a.value), (c = n + Mi(a, o++)), (l += hs(a, t, r, c, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Yn(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    hs(e, n, "", "", function (a) {
      return t.call(r, a, i++);
    }),
    n
  );
}
function mp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  fs = { transition: null },
  pp = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: fs,
    ReactCurrentOwner: gl,
  };
function au() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Yn,
  forEach: function (e, t, r) {
    Yn(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Yn(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Yn(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = zr;
J.Fragment = ep;
J.Profiler = rp;
J.PureComponent = hl;
J.StrictMode = tp;
J.Suspense = ap;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
J.act = au;
J.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = eu({}, e.props),
    i = e.key,
    a = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (l = gl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      nu.call(t, c) &&
        !su.hasOwnProperty(c) &&
        (n[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) n.children = r;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    n.children = o;
  }
  return { $$typeof: Jn, type: e.type, key: i, ref: a, props: n, _owner: l };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: sp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: np, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = iu;
J.createFactory = function (e) {
  var t = iu.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: ip, render: e };
};
J.isValidElement = xl;
J.lazy = function (e) {
  return { $$typeof: op, _payload: { _status: -1, _result: e }, _init: mp };
};
J.memo = function (e, t) {
  return { $$typeof: lp, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = fs.transition;
  fs.transition = {};
  try {
    e();
  } finally {
    fs.transition = t;
  }
};
J.unstable_act = au;
J.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
J.useContext = function (e) {
  return ye.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
J.useId = function () {
  return ye.current.useId();
};
J.useImperativeHandle = function (e, t, r) {
  return ye.current.useImperativeHandle(e, t, r);
};
J.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
J.useReducer = function (e, t, r) {
  return ye.current.useReducer(e, t, r);
};
J.useRef = function (e) {
  return ye.current.useRef(e);
};
J.useState = function (e) {
  return ye.current.useState(e);
};
J.useSyncExternalStore = function (e, t, r) {
  return ye.current.useSyncExternalStore(e, t, r);
};
J.useTransition = function () {
  return ye.current.useTransition();
};
J.version = "18.3.1";
_c.exports = J;
var v = _c.exports;
const Ze = ii(v);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp = v,
  fp = Symbol.for("react.element"),
  gp = Symbol.for("react.fragment"),
  xp = Object.prototype.hasOwnProperty,
  yp = hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vp = { key: !0, ref: !0, __self: !0, __source: !0 };
function lu(e, t, r) {
  var n,
    i = {},
    a = null,
    l = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (n in t) xp.call(t, n) && !vp.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: fp,
    type: e,
    key: a,
    ref: l,
    props: i,
    _owner: yp.current,
  };
}
ai.Fragment = gp;
ai.jsx = lu;
ai.jsxs = lu;
Xc.exports = ai;
var s = Xc.exports,
  ou = { exports: {} },
  Re = {},
  cu = { exports: {} },
  uu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, H) {
    var E = C.length;
    C.push(H);
    e: for (; 0 < E; ) {
      var L = (E - 1) >>> 1,
        O = C[L];
      if (0 < i(O, H)) (C[L] = H), (C[E] = O), (E = L);
      else break e;
    }
  }
  function r(C) {
    return C.length === 0 ? null : C[0];
  }
  function n(C) {
    if (C.length === 0) return null;
    var H = C[0],
      E = C.pop();
    if (E !== H) {
      C[0] = E;
      e: for (var L = 0, O = C.length, se = O >>> 1; L < se; ) {
        var we = 2 * (L + 1) - 1,
          Ti = C[we],
          Wt = we + 1,
          Qn = C[Wt];
        if (0 > i(Ti, E))
          Wt < O && 0 > i(Qn, Ti)
            ? ((C[L] = Qn), (C[Wt] = E), (L = Wt))
            : ((C[L] = Ti), (C[we] = E), (L = we));
        else if (Wt < O && 0 > i(Qn, E)) (C[L] = Qn), (C[Wt] = E), (L = Wt);
        else break e;
      }
    }
    return H;
  }
  function i(C, H) {
    var E = C.sortIndex - H.sortIndex;
    return E !== 0 ? E : C.id - H.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var l = Date,
      o = l.now();
    e.unstable_now = function () {
      return l.now() - o;
    };
  }
  var c = [],
    u = [],
    d = 1,
    h = null,
    f = 3,
    g = !1,
    x = !1,
    w = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(C) {
    for (var H = r(u); H !== null; ) {
      if (H.callback === null) n(u);
      else if (H.startTime <= C)
        n(u), (H.sortIndex = H.expirationTime), t(c, H);
      else break;
      H = r(u);
    }
  }
  function b(C) {
    if (((w = !1), y(C), !x))
      if (r(c) !== null) (x = !0), $e(j);
      else {
        var H = r(u);
        H !== null && I(b, H.startTime - C);
      }
  }
  function j(C, H) {
    (x = !1), w && ((w = !1), p(T), (T = -1)), (g = !0);
    var E = f;
    try {
      for (
        y(H), h = r(c);
        h !== null && (!(h.expirationTime > H) || (C && !A()));

      ) {
        var L = h.callback;
        if (typeof L == "function") {
          (h.callback = null), (f = h.priorityLevel);
          var O = L(h.expirationTime <= H);
          (H = e.unstable_now()),
            typeof O == "function" ? (h.callback = O) : h === r(c) && n(c),
            y(H);
        } else n(c);
        h = r(c);
      }
      if (h !== null) var se = !0;
      else {
        var we = r(u);
        we !== null && I(b, we.startTime - H), (se = !1);
      }
      return se;
    } finally {
      (h = null), (f = E), (g = !1);
    }
  }
  var N = !1,
    P = null,
    T = -1,
    R = 5,
    D = -1;
  function A() {
    return !(e.unstable_now() - D < R);
  }
  function fe() {
    if (P !== null) {
      var C = e.unstable_now();
      D = C;
      var H = !0;
      try {
        H = P(!0, C);
      } finally {
        H ? Pe() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var Pe;
  if (typeof m == "function")
    Pe = function () {
      m(fe);
    };
  else if (typeof MessageChannel < "u") {
    var _e = new MessageChannel(),
      Bt = _e.port2;
    (_e.port1.onmessage = fe),
      (Pe = function () {
        Bt.postMessage(null);
      });
  } else
    Pe = function () {
      S(fe, 0);
    };
  function $e(C) {
    (P = C), N || ((N = !0), Pe());
  }
  function I(C, H) {
    T = S(function () {
      C(e.unstable_now());
    }, H);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), $e(j));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(c);
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = f;
      }
      var E = f;
      f = H;
      try {
        return C();
      } finally {
        f = E;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, H) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var E = f;
      f = C;
      try {
        return H();
      } finally {
        f = E;
      }
    }),
    (e.unstable_scheduleCallback = function (C, H, E) {
      var L = e.unstable_now();
      switch (
        (typeof E == "object" && E !== null
          ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? L + E : L))
          : (E = L),
        C)
      ) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return (
        (O = E + O),
        (C = {
          id: d++,
          callback: H,
          priorityLevel: C,
          startTime: E,
          expirationTime: O,
          sortIndex: -1,
        }),
        E > L
          ? ((C.sortIndex = E),
            t(u, C),
            r(c) === null &&
              C === r(u) &&
              (w ? (p(T), (T = -1)) : (w = !0), I(b, E - L)))
          : ((C.sortIndex = O), t(c, C), x || g || ((x = !0), $e(j))),
        C
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (C) {
      var H = f;
      return function () {
        var E = f;
        f = H;
        try {
          return C.apply(this, arguments);
        } finally {
          f = E;
        }
      };
    });
})(uu);
cu.exports = uu;
var wp = cu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bp = v,
  Me = wp;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var du = new Set(),
  yn = {};
function ir(e, t) {
  Rr(e, t), Rr(e + "Capture", t);
}
function Rr(e, t) {
  for (yn[e] = t, e = 0; e < t.length; e++) du.add(t[e]);
}
var gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ua = Object.prototype.hasOwnProperty,
  jp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  So = {},
  No = {};
function Sp(e) {
  return ua.call(No, e)
    ? !0
    : ua.call(So, e)
    ? !1
    : jp.test(e)
    ? (No[e] = !0)
    : ((So[e] = !0), !1);
}
function Np(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kp(e, t, r, n) {
  if (t === null || typeof t > "u" || Np(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, r, n, i, a, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = l);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yl = /[\-:]([a-z])/g;
function vl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, vl);
    ue[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, vl);
    ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yl, vl);
  ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wl(e, t, r, n) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kp(t, r, i, n) && (r = null),
    n || i === null
      ? Sp(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var bt = bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Kn = Symbol.for("react.element"),
  dr = Symbol.for("react.portal"),
  mr = Symbol.for("react.fragment"),
  bl = Symbol.for("react.strict_mode"),
  da = Symbol.for("react.profiler"),
  mu = Symbol.for("react.provider"),
  pu = Symbol.for("react.context"),
  jl = Symbol.for("react.forward_ref"),
  ma = Symbol.for("react.suspense"),
  pa = Symbol.for("react.suspense_list"),
  Sl = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  hu = Symbol.for("react.offscreen"),
  ko = Symbol.iterator;
function Zr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ko && e[ko]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Ri;
function sn(e) {
  if (Ri === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ri = (t && t[1]) || "";
    }
  return (
    `
` +
    Ri +
    e
  );
}
var Di = !1;
function Ii(e, t) {
  if (!e || Di) return "";
  Di = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          a = n.stack.split(`
`),
          l = i.length - 1,
          o = a.length - 1;
        1 <= l && 0 <= o && i[l] !== a[o];

      )
        o--;
      for (; 1 <= l && 0 <= o; l--, o--)
        if (i[l] !== a[o]) {
          if (l !== 1 || o !== 1)
            do
              if ((l--, o--, 0 > o || i[l] !== a[o])) {
                var c =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= l && 0 <= o);
          break;
        }
    }
  } finally {
    (Di = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? sn(e) : "";
}
function Pp(e) {
  switch (e.tag) {
    case 5:
      return sn(e.type);
    case 16:
      return sn("Lazy");
    case 13:
      return sn("Suspense");
    case 19:
      return sn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ii(e.type, !1)), e;
    case 11:
      return (e = Ii(e.type.render, !1)), e;
    case 1:
      return (e = Ii(e.type, !0)), e;
    default:
      return "";
  }
}
function ha(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mr:
      return "Fragment";
    case dr:
      return "Portal";
    case da:
      return "Profiler";
    case bl:
      return "StrictMode";
    case ma:
      return "Suspense";
    case pa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pu:
        return (e.displayName || "Context") + ".Consumer";
      case mu:
        return (e._context.displayName || "Context") + ".Provider";
      case jl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Sl:
        return (
          (t = e.displayName || null), t !== null ? t : ha(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return ha(e(t));
        } catch {}
    }
  return null;
}
function Cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ha(t);
    case 8:
      return t === bl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ep(e) {
  var t = fu(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (n = "" + l), a.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Xn(e) {
  e._valueTracker || (e._valueTracker = Ep(e));
}
function gu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = fu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Ms(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fa(e, t) {
  var r = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Po(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Jt(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xu(e, t) {
  (t = t.checked), t != null && wl(e, "checked", t, !1);
}
function ga(e, t) {
  xu(e, t);
  var r = Jt(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? xa(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && xa(e, t.type, Jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Co(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function xa(e, t, r) {
  (t !== "number" || Ms(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var an = Array.isArray;
function Sr(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Jt(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ya(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Eo(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(k(92));
      if (an(r)) {
        if (1 < r.length) throw Error(k(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Jt(r) };
}
function yu(e, t) {
  var r = Jt(t.value),
    n = Jt(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function To(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function va(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var _n,
  wu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        _n = _n || document.createElement("div"),
          _n.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _n.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var cn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(cn).forEach(function (e) {
  Tp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (cn[t] = cn[e]);
  });
});
function bu(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (cn.hasOwnProperty(e) && cn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ju(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = bu(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var Mp = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wa(e, t) {
  if (t) {
    if (Mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function ba(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ja = null;
function Nl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Sa = null,
  Nr = null,
  kr = null;
function Mo(e) {
  if ((e = On(e))) {
    if (typeof Sa != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = di(t)), Sa(e.stateNode, e.type, t));
  }
}
function Su(e) {
  Nr ? (kr ? kr.push(e) : (kr = [e])) : (Nr = e);
}
function Nu() {
  if (Nr) {
    var e = Nr,
      t = kr;
    if (((kr = Nr = null), Mo(e), t)) for (e = 0; e < t.length; e++) Mo(t[e]);
  }
}
function ku(e, t) {
  return e(t);
}
function Pu() {}
var Fi = !1;
function Cu(e, t, r) {
  if (Fi) return e(t, r);
  Fi = !0;
  try {
    return ku(e, t, r);
  } finally {
    (Fi = !1), (Nr !== null || kr !== null) && (Pu(), Nu());
  }
}
function wn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = di(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(k(231, t, typeof r));
  return r;
}
var Na = !1;
if (gt)
  try {
    var Ur = {};
    Object.defineProperty(Ur, "passive", {
      get: function () {
        Na = !0;
      },
    }),
      window.addEventListener("test", Ur, Ur),
      window.removeEventListener("test", Ur, Ur);
  } catch {
    Na = !1;
  }
function Rp(e, t, r, n, i, a, l, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (d) {
    this.onError(d);
  }
}
var un = !1,
  Rs = null,
  Ds = !1,
  ka = null,
  Dp = {
    onError: function (e) {
      (un = !0), (Rs = e);
    },
  };
function Ip(e, t, r, n, i, a, l, o, c) {
  (un = !1), (Rs = null), Rp.apply(Dp, arguments);
}
function Fp(e, t, r, n, i, a, l, o, c) {
  if ((Ip.apply(this, arguments), un)) {
    if (un) {
      var u = Rs;
      (un = !1), (Rs = null);
    } else throw Error(k(198));
    Ds || ((Ds = !0), (ka = u));
  }
}
function ar(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Eu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ro(e) {
  if (ar(e) !== e) throw Error(k(188));
}
function Hp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ar(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r) return Ro(i), e;
        if (a === n) return Ro(i), t;
        a = a.sibling;
      }
      throw Error(k(188));
    }
    if (r.return !== n.return) (r = i), (n = a);
    else {
      for (var l = !1, o = i.child; o; ) {
        if (o === r) {
          (l = !0), (r = i), (n = a);
          break;
        }
        if (o === n) {
          (l = !0), (n = i), (r = a);
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = a.child; o; ) {
          if (o === r) {
            (l = !0), (r = a), (n = i);
            break;
          }
          if (o === n) {
            (l = !0), (n = a), (r = i);
            break;
          }
          o = o.sibling;
        }
        if (!l) throw Error(k(189));
      }
    }
    if (r.alternate !== n) throw Error(k(190));
  }
  if (r.tag !== 3) throw Error(k(188));
  return r.stateNode.current === r ? e : t;
}
function Tu(e) {
  return (e = Hp(e)), e !== null ? Mu(e) : null;
}
function Mu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ru = Me.unstable_scheduleCallback,
  Do = Me.unstable_cancelCallback,
  qp = Me.unstable_shouldYield,
  Lp = Me.unstable_requestPaint,
  $ = Me.unstable_now,
  Jp = Me.unstable_getCurrentPriorityLevel,
  kl = Me.unstable_ImmediatePriority,
  Du = Me.unstable_UserBlockingPriority,
  Is = Me.unstable_NormalPriority,
  Ap = Me.unstable_LowPriority,
  Iu = Me.unstable_IdlePriority,
  li = null,
  it = null;
function zp(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(li, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Gp,
  Op = Math.log,
  Vp = Math.LN2;
function Gp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Op(e) / Vp) | 0)) | 0;
}
var $n = 64,
  es = 4194304;
function ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fs(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    l = r & 268435455;
  if (l !== 0) {
    var o = l & ~i;
    o !== 0 ? (n = ln(o)) : ((a &= l), a !== 0 && (n = ln(a)));
  } else (l = r & ~i), l !== 0 ? (n = ln(l)) : a !== 0 && (n = ln(a));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Qe(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function Bp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wp(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var l = 31 - Qe(a),
      o = 1 << l,
      c = i[l];
    c === -1
      ? (!(o & r) || o & n) && (i[l] = Bp(o, t))
      : c <= t && (e.expiredLanes |= o),
      (a &= ~o);
  }
}
function Pa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fu() {
  var e = $n;
  return ($n <<= 1), !($n & 4194240) && ($n = 64), e;
}
function Hi(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function An(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = r);
}
function Zp(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - Qe(r),
      a = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~a);
  }
}
function Pl(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Qe(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var V = 0;
function Hu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qu,
  Cl,
  Lu,
  Ju,
  Au,
  Ca = !1,
  ts = [],
  Tt = null,
  Mt = null,
  Rt = null,
  bn = new Map(),
  jn = new Map(),
  kt = [],
  Up =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Io(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tt = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jn.delete(t.pointerId);
  }
}
function Qr(e, t, r, n, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = On(t)), t !== null && Cl(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Qp(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (Tt = Qr(Tt, e, t, r, n, i)), !0;
    case "dragenter":
      return (Mt = Qr(Mt, e, t, r, n, i)), !0;
    case "mouseover":
      return (Rt = Qr(Rt, e, t, r, n, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return bn.set(a, Qr(bn.get(a) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), jn.set(a, Qr(jn.get(a) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function zu(e) {
  var t = Qt(e.target);
  if (t !== null) {
    var r = ar(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Eu(r)), t !== null)) {
          (e.blockedOn = t),
            Au(e.priority, function () {
              Lu(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function gs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (ja = n), r.target.dispatchEvent(n), (ja = null);
    } else return (t = On(r)), t !== null && Cl(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Fo(e, t, r) {
  gs(e) && r.delete(t);
}
function Yp() {
  (Ca = !1),
    Tt !== null && gs(Tt) && (Tt = null),
    Mt !== null && gs(Mt) && (Mt = null),
    Rt !== null && gs(Rt) && (Rt = null),
    bn.forEach(Fo),
    jn.forEach(Fo);
}
function Yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ca ||
      ((Ca = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Yp)));
}
function Sn(e) {
  function t(i) {
    return Yr(i, e);
  }
  if (0 < ts.length) {
    Yr(ts[0], e);
    for (var r = 1; r < ts.length; r++) {
      var n = ts[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Tt !== null && Yr(Tt, e),
      Mt !== null && Yr(Mt, e),
      Rt !== null && Yr(Rt, e),
      bn.forEach(t),
      jn.forEach(t),
      r = 0;
    r < kt.length;
    r++
  )
    (n = kt[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < kt.length && ((r = kt[0]), r.blockedOn === null); )
    zu(r), r.blockedOn === null && kt.shift();
}
var Pr = bt.ReactCurrentBatchConfig,
  Hs = !0;
function Kp(e, t, r, n) {
  var i = V,
    a = Pr.transition;
  Pr.transition = null;
  try {
    (V = 1), El(e, t, r, n);
  } finally {
    (V = i), (Pr.transition = a);
  }
}
function Xp(e, t, r, n) {
  var i = V,
    a = Pr.transition;
  Pr.transition = null;
  try {
    (V = 4), El(e, t, r, n);
  } finally {
    (V = i), (Pr.transition = a);
  }
}
function El(e, t, r, n) {
  if (Hs) {
    var i = Ea(e, t, r, n);
    if (i === null) Wi(e, t, n, qs, r), Io(e, n);
    else if (Qp(i, e, t, r, n)) n.stopPropagation();
    else if ((Io(e, n), t & 4 && -1 < Up.indexOf(e))) {
      for (; i !== null; ) {
        var a = On(i);
        if (
          (a !== null && qu(a),
          (a = Ea(e, t, r, n)),
          a === null && Wi(e, t, n, qs, r),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && n.stopPropagation();
    } else Wi(e, t, n, null, r);
  }
}
var qs = null;
function Ea(e, t, r, n) {
  if (((qs = null), (e = Nl(n)), (e = Qt(e)), e !== null))
    if (((t = ar(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Eu(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qs = e), null;
}
function Ou(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jp()) {
        case kl:
          return 1;
        case Du:
          return 4;
        case Is:
        case Ap:
          return 16;
        case Iu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  Tl = null,
  xs = null;
function Vu() {
  if (xs) return xs;
  var e,
    t = Tl,
    r = t.length,
    n,
    i = "value" in Ct ? Ct.value : Ct.textContent,
    a = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var l = r - e;
  for (n = 1; n <= l && t[r - n] === i[a - n]; n++);
  return (xs = i.slice(e, 1 < n ? 1 - n : void 0));
}
function ys(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function rs() {
  return !0;
}
function Ho() {
  return !1;
}
function De(e) {
  function t(r, n, i, a, l) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((r = e[o]), (this[o] = r ? r(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? rs
        : Ho),
      (this.isPropagationStopped = Ho),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = rs));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = rs));
      },
      persist: function () {},
      isPersistent: rs,
    }),
    t
  );
}
var Or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ml = De(Or),
  zn = X({}, Or, { view: 0, detail: 0 }),
  _p = De(zn),
  qi,
  Li,
  Kr,
  oi = X({}, zn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Kr &&
            (Kr && e.type === "mousemove"
              ? ((qi = e.screenX - Kr.screenX), (Li = e.screenY - Kr.screenY))
              : (Li = qi = 0),
            (Kr = e)),
          qi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Li;
    },
  }),
  qo = De(oi),
  $p = X({}, oi, { dataTransfer: 0 }),
  eh = De($p),
  th = X({}, zn, { relatedTarget: 0 }),
  Ji = De(th),
  rh = X({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nh = De(rh),
  sh = X({}, Or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ih = De(sh),
  ah = X({}, Or, { data: 0 }),
  Lo = De(ah),
  lh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  oh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ch = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function uh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ch[e]) ? !!t[e] : !1;
}
function Rl() {
  return uh;
}
var dh = X({}, zn, {
    key: function (e) {
      if (e.key) {
        var t = lh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? oh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rl,
    charCode: function (e) {
      return e.type === "keypress" ? ys(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ys(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mh = De(dh),
  ph = X({}, oi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Jo = De(ph),
  hh = X({}, zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rl,
  }),
  fh = De(hh),
  gh = X({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xh = De(gh),
  yh = X({}, oi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vh = De(yh),
  wh = [9, 13, 27, 32],
  Dl = gt && "CompositionEvent" in window,
  dn = null;
gt && "documentMode" in document && (dn = document.documentMode);
var bh = gt && "TextEvent" in window && !dn,
  Gu = gt && (!Dl || (dn && 8 < dn && 11 >= dn)),
  Ao = " ",
  zo = !1;
function Bu(e, t) {
  switch (e) {
    case "keyup":
      return wh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pr = !1;
function jh(e, t) {
  switch (e) {
    case "compositionend":
      return Wu(t);
    case "keypress":
      return t.which !== 32 ? null : ((zo = !0), Ao);
    case "textInput":
      return (e = t.data), e === Ao && zo ? null : e;
    default:
      return null;
  }
}
function Sh(e, t) {
  if (pr)
    return e === "compositionend" || (!Dl && Bu(e, t))
      ? ((e = Vu()), (xs = Tl = Ct = null), (pr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nh[e.type] : t === "textarea";
}
function Zu(e, t, r, n) {
  Su(n),
    (t = Ls(t, "onChange")),
    0 < t.length &&
      ((r = new Ml("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var mn = null,
  Nn = null;
function kh(e) {
  nd(e, 0);
}
function ci(e) {
  var t = gr(e);
  if (gu(t)) return e;
}
function Ph(e, t) {
  if (e === "change") return t;
}
var Uu = !1;
if (gt) {
  var Ai;
  if (gt) {
    var zi = "oninput" in document;
    if (!zi) {
      var Vo = document.createElement("div");
      Vo.setAttribute("oninput", "return;"),
        (zi = typeof Vo.oninput == "function");
    }
    Ai = zi;
  } else Ai = !1;
  Uu = Ai && (!document.documentMode || 9 < document.documentMode);
}
function Go() {
  mn && (mn.detachEvent("onpropertychange", Qu), (Nn = mn = null));
}
function Qu(e) {
  if (e.propertyName === "value" && ci(Nn)) {
    var t = [];
    Zu(t, Nn, e, Nl(e)), Cu(kh, t);
  }
}
function Ch(e, t, r) {
  e === "focusin"
    ? (Go(), (mn = t), (Nn = r), mn.attachEvent("onpropertychange", Qu))
    : e === "focusout" && Go();
}
function Eh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ci(Nn);
}
function Th(e, t) {
  if (e === "click") return ci(t);
}
function Mh(e, t) {
  if (e === "input" || e === "change") return ci(t);
}
function Rh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : Rh;
function kn(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!ua.call(t, i) || !Ke(e[i], t[i])) return !1;
  }
  return !0;
}
function Bo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wo(e, t) {
  var r = Bo(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Bo(r);
  }
}
function Yu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Yu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ku() {
  for (var e = window, t = Ms(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Ms(e.document);
  }
  return t;
}
function Il(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dh(e) {
  var t = Ku(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Yu(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Il(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          a = Math.min(n.start, i);
        (n = n.end === void 0 ? a : Math.min(n.end, i)),
          !e.extend && a > n && ((i = n), (n = a), (a = i)),
          (i = Wo(r, a));
        var l = Wo(r, n);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > n
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ih = gt && "documentMode" in document && 11 >= document.documentMode,
  hr = null,
  Ta = null,
  pn = null,
  Ma = !1;
function Zo(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Ma ||
    hr == null ||
    hr !== Ms(n) ||
    ((n = hr),
    "selectionStart" in n && Il(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (pn && kn(pn, n)) ||
      ((pn = n),
      (n = Ls(Ta, "onSelect")),
      0 < n.length &&
        ((t = new Ml("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = hr))));
}
function ns(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var fr = {
    animationend: ns("Animation", "AnimationEnd"),
    animationiteration: ns("Animation", "AnimationIteration"),
    animationstart: ns("Animation", "AnimationStart"),
    transitionend: ns("Transition", "TransitionEnd"),
  },
  Oi = {},
  Xu = {};
gt &&
  ((Xu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fr.animationend.animation,
    delete fr.animationiteration.animation,
    delete fr.animationstart.animation),
  "TransitionEvent" in window || delete fr.transitionend.transition);
function ui(e) {
  if (Oi[e]) return Oi[e];
  if (!fr[e]) return e;
  var t = fr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Xu) return (Oi[e] = t[r]);
  return e;
}
var _u = ui("animationend"),
  $u = ui("animationiteration"),
  ed = ui("animationstart"),
  td = ui("transitionend"),
  rd = new Map(),
  Uo =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  rd.set(e, t), ir(t, [e]);
}
for (var Vi = 0; Vi < Uo.length; Vi++) {
  var Gi = Uo[Vi],
    Fh = Gi.toLowerCase(),
    Hh = Gi[0].toUpperCase() + Gi.slice(1);
  zt(Fh, "on" + Hh);
}
zt(_u, "onAnimationEnd");
zt($u, "onAnimationIteration");
zt(ed, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(td, "onTransitionEnd");
Rr("onMouseEnter", ["mouseout", "mouseover"]);
Rr("onMouseLeave", ["mouseout", "mouseover"]);
Rr("onPointerEnter", ["pointerout", "pointerover"]);
Rr("onPointerLeave", ["pointerout", "pointerover"]);
ir(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ir(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ir(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ir(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ir(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var on =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qh = new Set("cancel close invalid load scroll toggle".split(" ").concat(on));
function Qo(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), Fp(n, t, void 0, e), (e.currentTarget = null);
}
function nd(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var l = n.length - 1; 0 <= l; l--) {
          var o = n[l],
            c = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), c !== a && i.isPropagationStopped())) break e;
          Qo(i, o, u), (a = c);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (
            ((o = n[l]),
            (c = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            c !== a && i.isPropagationStopped())
          )
            break e;
          Qo(i, o, u), (a = c);
        }
    }
  }
  if (Ds) throw ((e = ka), (Ds = !1), (ka = null), e);
}
function W(e, t) {
  var r = t[Ha];
  r === void 0 && (r = t[Ha] = new Set());
  var n = e + "__bubble";
  r.has(n) || (sd(t, e, 2, !1), r.add(n));
}
function Bi(e, t, r) {
  var n = 0;
  t && (n |= 4), sd(r, e, n, t);
}
var ss = "_reactListening" + Math.random().toString(36).slice(2);
function Pn(e) {
  if (!e[ss]) {
    (e[ss] = !0),
      du.forEach(function (r) {
        r !== "selectionchange" && (qh.has(r) || Bi(r, !1, e), Bi(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ss] || ((t[ss] = !0), Bi("selectionchange", !1, t));
  }
}
function sd(e, t, r, n) {
  switch (Ou(t)) {
    case 1:
      var i = Kp;
      break;
    case 4:
      i = Xp;
      break;
    default:
      i = El;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Na ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function Wi(e, t, r, n, i) {
  var a = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var o = n.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var c = l.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = l.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; o !== null; ) {
          if (((l = Qt(o)), l === null)) return;
          if (((c = l.tag), c === 5 || c === 6)) {
            n = a = l;
            continue e;
          }
          o = o.parentNode;
        }
      }
      n = n.return;
    }
  Cu(function () {
    var u = a,
      d = Nl(r),
      h = [];
    e: {
      var f = rd.get(e);
      if (f !== void 0) {
        var g = Ml,
          x = e;
        switch (e) {
          case "keypress":
            if (ys(r) === 0) break e;
          case "keydown":
          case "keyup":
            g = mh;
            break;
          case "focusin":
            (x = "focus"), (g = Ji);
            break;
          case "focusout":
            (x = "blur"), (g = Ji);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ji;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = qo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = eh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = fh;
            break;
          case _u:
          case $u:
          case ed:
            g = nh;
            break;
          case td:
            g = xh;
            break;
          case "scroll":
            g = _p;
            break;
          case "wheel":
            g = vh;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ih;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Jo;
        }
        var w = (t & 4) !== 0,
          S = !w && e === "scroll",
          p = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var b = y.stateNode;
          if (
            (y.tag === 5 &&
              b !== null &&
              ((y = b),
              p !== null && ((b = wn(m, p)), b != null && w.push(Cn(m, b, y)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < w.length &&
          ((f = new g(f, x, null, r, d)), h.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            r !== ja &&
            (x = r.relatedTarget || r.fromElement) &&
            (Qt(x) || x[xt]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((x = r.relatedTarget || r.toElement),
              (g = u),
              (x = x ? Qt(x) : null),
              x !== null &&
                ((S = ar(x)), x !== S || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = u)),
          g !== x)
        ) {
          if (
            ((w = qo),
            (b = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Jo),
              (b = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (S = g == null ? f : gr(g)),
            (y = x == null ? f : gr(x)),
            (f = new w(b, m + "leave", g, r, d)),
            (f.target = S),
            (f.relatedTarget = y),
            (b = null),
            Qt(d) === u &&
              ((w = new w(p, m + "enter", x, r, d)),
              (w.target = y),
              (w.relatedTarget = S),
              (b = w)),
            (S = b),
            g && x)
          )
            t: {
              for (w = g, p = x, m = 0, y = w; y; y = or(y)) m++;
              for (y = 0, b = p; b; b = or(b)) y++;
              for (; 0 < m - y; ) (w = or(w)), m--;
              for (; 0 < y - m; ) (p = or(p)), y--;
              for (; m--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = or(w)), (p = or(p));
              }
              w = null;
            }
          else w = null;
          g !== null && Yo(h, f, g, w, !1),
            x !== null && S !== null && Yo(h, S, x, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? gr(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var j = Ph;
        else if (Oo(f))
          if (Uu) j = Mh;
          else {
            j = Eh;
            var N = Ch;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (j = Th);
        if (j && (j = j(e, u))) {
          Zu(h, j, r, d);
          break e;
        }
        N && N(e, f, u),
          e === "focusout" &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === "number" &&
            xa(f, "number", f.value);
      }
      switch (((N = u ? gr(u) : window), e)) {
        case "focusin":
          (Oo(N) || N.contentEditable === "true") &&
            ((hr = N), (Ta = u), (pn = null));
          break;
        case "focusout":
          pn = Ta = hr = null;
          break;
        case "mousedown":
          Ma = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ma = !1), Zo(h, r, d);
          break;
        case "selectionchange":
          if (Ih) break;
        case "keydown":
        case "keyup":
          Zo(h, r, d);
      }
      var P;
      if (Dl)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        pr
          ? Bu(e, r) && (T = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Gu &&
          r.locale !== "ko" &&
          (pr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && pr && (P = Vu())
            : ((Ct = d),
              (Tl = "value" in Ct ? Ct.value : Ct.textContent),
              (pr = !0))),
        (N = Ls(u, T)),
        0 < N.length &&
          ((T = new Lo(T, e, null, r, d)),
          h.push({ event: T, listeners: N }),
          P ? (T.data = P) : ((P = Wu(r)), P !== null && (T.data = P)))),
        (P = bh ? jh(e, r) : Sh(e, r)) &&
          ((u = Ls(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Lo("onBeforeInput", "beforeinput", null, r, d)),
            h.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    nd(h, t);
  });
}
function Cn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ls(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = wn(e, r)),
      a != null && n.unshift(Cn(e, a, i)),
      (a = wn(e, t)),
      a != null && n.push(Cn(e, a, i))),
      (e = e.return);
  }
  return n;
}
function or(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yo(e, t, r, n, i) {
  for (var a = t._reactName, l = []; r !== null && r !== n; ) {
    var o = r,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === n) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((c = wn(r, a)), c != null && l.unshift(Cn(r, c, o)))
        : i || ((c = wn(r, a)), c != null && l.push(Cn(r, c, o)))),
      (r = r.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Lh = /\r\n?/g,
  Jh = /\u0000|\uFFFD/g;
function Ko(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lh,
      `
`
    )
    .replace(Jh, "");
}
function is(e, t, r) {
  if (((t = Ko(t)), Ko(e) !== t && r)) throw Error(k(425));
}
function Js() {}
var Ra = null,
  Da = null;
function Ia(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fa = typeof setTimeout == "function" ? setTimeout : void 0,
  Ah = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xo = typeof Promise == "function" ? Promise : void 0,
  zh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xo < "u"
      ? function (e) {
          return Xo.resolve(null).then(e).catch(Oh);
        }
      : Fa;
function Oh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zi(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), Sn(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  Sn(t);
}
function Dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _o(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Vr = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + Vr,
  En = "__reactProps$" + Vr,
  xt = "__reactContainer$" + Vr,
  Ha = "__reactEvents$" + Vr,
  Vh = "__reactListeners$" + Vr,
  Gh = "__reactHandles$" + Vr;
function Qt(e) {
  var t = e[nt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[xt] || r[nt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = _o(e); e !== null; ) {
          if ((r = e[nt])) return r;
          e = _o(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function On(e) {
  return (
    (e = e[nt] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function di(e) {
  return e[En] || null;
}
var qa = [],
  xr = -1;
function Ot(e) {
  return { current: e };
}
function Z(e) {
  0 > xr || ((e.current = qa[xr]), (qa[xr] = null), xr--);
}
function B(e, t) {
  xr++, (qa[xr] = e.current), (e.current = t);
}
var At = {},
  he = Ot(At),
  Se = Ot(!1),
  er = At;
function Dr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return At;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in r) i[a] = t[a];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function As() {
  Z(Se), Z(he);
}
function $o(e, t, r) {
  if (he.current !== At) throw Error(k(168));
  B(he, t), B(Se, r);
}
function id(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(k(108, Cp(e) || "Unknown", i));
  return X({}, r, n);
}
function zs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || At),
    (er = he.current),
    B(he, e),
    B(Se, Se.current),
    !0
  );
}
function ec(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(k(169));
  r
    ? ((e = id(e, t, er)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Z(Se),
      Z(he),
      B(he, e))
    : Z(Se),
    B(Se, r);
}
var dt = null,
  mi = !1,
  Ui = !1;
function ad(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
function Bh(e) {
  (mi = !0), ad(e);
}
function Vt() {
  if (!Ui && dt !== null) {
    Ui = !0;
    var e = 0,
      t = V;
    try {
      var r = dt;
      for (V = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (dt = null), (mi = !1);
    } catch (i) {
      throw (dt !== null && (dt = dt.slice(e + 1)), Ru(kl, Vt), i);
    } finally {
      (V = t), (Ui = !1);
    }
  }
  return null;
}
var yr = [],
  vr = 0,
  Os = null,
  Vs = 0,
  Fe = [],
  He = 0,
  tr = null,
  mt = 1,
  pt = "";
function Zt(e, t) {
  (yr[vr++] = Vs), (yr[vr++] = Os), (Os = e), (Vs = t);
}
function ld(e, t, r) {
  (Fe[He++] = mt), (Fe[He++] = pt), (Fe[He++] = tr), (tr = e);
  var n = mt;
  e = pt;
  var i = 32 - Qe(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var a = 32 - Qe(t) + i;
  if (30 < a) {
    var l = i - (i % 5);
    (a = (n & ((1 << l) - 1)).toString(32)),
      (n >>= l),
      (i -= l),
      (mt = (1 << (32 - Qe(t) + i)) | (r << i) | n),
      (pt = a + e);
  } else (mt = (1 << a) | (r << i) | n), (pt = e);
}
function Fl(e) {
  e.return !== null && (Zt(e, 1), ld(e, 1, 0));
}
function Hl(e) {
  for (; e === Os; )
    (Os = yr[--vr]), (yr[vr] = null), (Vs = yr[--vr]), (yr[vr] = null);
  for (; e === tr; )
    (tr = Fe[--He]),
      (Fe[He] = null),
      (pt = Fe[--He]),
      (Fe[He] = null),
      (mt = Fe[--He]),
      (Fe[He] = null);
}
var Te = null,
  Ee = null,
  U = !1,
  Be = null;
function od(e, t) {
  var r = qe(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function tc(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (Ee = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = tr !== null ? { id: mt, overflow: pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = qe(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Te = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function La(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ja(e) {
  if (U) {
    var t = Ee;
    if (t) {
      var r = t;
      if (!tc(e, t)) {
        if (La(e)) throw Error(k(418));
        t = Dt(r.nextSibling);
        var n = Te;
        t && tc(e, t)
          ? od(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Te = e));
      }
    } else {
      if (La(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (Te = e);
    }
  }
}
function rc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function as(e) {
  if (e !== Te) return !1;
  if (!U) return rc(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ia(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (La(e)) throw (cd(), Error(k(418)));
    for (; t; ) od(e, t), (t = Dt(t.nextSibling));
  }
  if ((rc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ee = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Te ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function cd() {
  for (var e = Ee; e; ) e = Dt(e.nextSibling);
}
function Ir() {
  (Ee = Te = null), (U = !1);
}
function ql(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
var Wh = bt.ReactCurrentBatchConfig;
function Xr(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(k(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(k(147, e));
      var i = n,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (l) {
            var o = i.refs;
            l === null ? delete o[a] : (o[a] = l);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!r._owner) throw Error(k(290, e));
  }
  return e;
}
function ls(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nc(e) {
  var t = e._init;
  return t(e._payload);
}
function ud(e) {
  function t(p, m) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [m]), (p.flags |= 16)) : y.push(m);
    }
  }
  function r(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function n(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = qt(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function a(p, m, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((p.flags |= 2), m) : y)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function o(p, m, y, b) {
    return m === null || m.tag !== 6
      ? ((m = ea(y, p.mode, b)), (m.return = p), m)
      : ((m = i(m, y)), (m.return = p), m);
  }
  function c(p, m, y, b) {
    var j = y.type;
    return j === mr
      ? d(p, m, y.props.children, b, y.key)
      : m !== null &&
        (m.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === St &&
            nc(j) === m.type))
      ? ((b = i(m, y.props)), (b.ref = Xr(p, m, y)), (b.return = p), b)
      : ((b = ks(y.type, y.key, y.props, null, p.mode, b)),
        (b.ref = Xr(p, m, y)),
        (b.return = p),
        b);
  }
  function u(p, m, y, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = ta(y, p.mode, b)), (m.return = p), m)
      : ((m = i(m, y.children || [])), (m.return = p), m);
  }
  function d(p, m, y, b, j) {
    return m === null || m.tag !== 7
      ? ((m = $t(y, p.mode, b, j)), (m.return = p), m)
      : ((m = i(m, y)), (m.return = p), m);
  }
  function h(p, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = ea("" + m, p.mode, y)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Kn:
          return (
            (y = ks(m.type, m.key, m.props, null, p.mode, y)),
            (y.ref = Xr(p, null, m)),
            (y.return = p),
            y
          );
        case dr:
          return (m = ta(m, p.mode, y)), (m.return = p), m;
        case St:
          var b = m._init;
          return h(p, b(m._payload), y);
      }
      if (an(m) || Zr(m))
        return (m = $t(m, p.mode, y, null)), (m.return = p), m;
      ls(p, m);
    }
    return null;
  }
  function f(p, m, y, b) {
    var j = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return j !== null ? null : o(p, m, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Kn:
          return y.key === j ? c(p, m, y, b) : null;
        case dr:
          return y.key === j ? u(p, m, y, b) : null;
        case St:
          return (j = y._init), f(p, m, j(y._payload), b);
      }
      if (an(y) || Zr(y)) return j !== null ? null : d(p, m, y, b, null);
      ls(p, y);
    }
    return null;
  }
  function g(p, m, y, b, j) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (p = p.get(y) || null), o(m, p, "" + b, j);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Kn:
          return (p = p.get(b.key === null ? y : b.key) || null), c(m, p, b, j);
        case dr:
          return (p = p.get(b.key === null ? y : b.key) || null), u(m, p, b, j);
        case St:
          var N = b._init;
          return g(p, m, y, N(b._payload), j);
      }
      if (an(b) || Zr(b)) return (p = p.get(y) || null), d(m, p, b, j, null);
      ls(m, b);
    }
    return null;
  }
  function x(p, m, y, b) {
    for (
      var j = null, N = null, P = m, T = (m = 0), R = null;
      P !== null && T < y.length;
      T++
    ) {
      P.index > T ? ((R = P), (P = null)) : (R = P.sibling);
      var D = f(p, P, y[T], b);
      if (D === null) {
        P === null && (P = R);
        break;
      }
      e && P && D.alternate === null && t(p, P),
        (m = a(D, m, T)),
        N === null ? (j = D) : (N.sibling = D),
        (N = D),
        (P = R);
    }
    if (T === y.length) return r(p, P), U && Zt(p, T), j;
    if (P === null) {
      for (; T < y.length; T++)
        (P = h(p, y[T], b)),
          P !== null &&
            ((m = a(P, m, T)), N === null ? (j = P) : (N.sibling = P), (N = P));
      return U && Zt(p, T), j;
    }
    for (P = n(p, P); T < y.length; T++)
      (R = g(P, p, T, y[T], b)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? T : R.key),
          (m = a(R, m, T)),
          N === null ? (j = R) : (N.sibling = R),
          (N = R));
    return (
      e &&
        P.forEach(function (A) {
          return t(p, A);
        }),
      U && Zt(p, T),
      j
    );
  }
  function w(p, m, y, b) {
    var j = Zr(y);
    if (typeof j != "function") throw Error(k(150));
    if (((y = j.call(y)), y == null)) throw Error(k(151));
    for (
      var N = (j = null), P = m, T = (m = 0), R = null, D = y.next();
      P !== null && !D.done;
      T++, D = y.next()
    ) {
      P.index > T ? ((R = P), (P = null)) : (R = P.sibling);
      var A = f(p, P, D.value, b);
      if (A === null) {
        P === null && (P = R);
        break;
      }
      e && P && A.alternate === null && t(p, P),
        (m = a(A, m, T)),
        N === null ? (j = A) : (N.sibling = A),
        (N = A),
        (P = R);
    }
    if (D.done) return r(p, P), U && Zt(p, T), j;
    if (P === null) {
      for (; !D.done; T++, D = y.next())
        (D = h(p, D.value, b)),
          D !== null &&
            ((m = a(D, m, T)), N === null ? (j = D) : (N.sibling = D), (N = D));
      return U && Zt(p, T), j;
    }
    for (P = n(p, P); !D.done; T++, D = y.next())
      (D = g(P, p, T, D.value, b)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? T : D.key),
          (m = a(D, m, T)),
          N === null ? (j = D) : (N.sibling = D),
          (N = D));
    return (
      e &&
        P.forEach(function (fe) {
          return t(p, fe);
        }),
      U && Zt(p, T),
      j
    );
  }
  function S(p, m, y, b) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === mr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Kn:
          e: {
            for (var j = y.key, N = m; N !== null; ) {
              if (N.key === j) {
                if (((j = y.type), j === mr)) {
                  if (N.tag === 7) {
                    r(p, N.sibling),
                      (m = i(N, y.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  N.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === St &&
                    nc(j) === N.type)
                ) {
                  r(p, N.sibling),
                    (m = i(N, y.props)),
                    (m.ref = Xr(p, N, y)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                r(p, N);
                break;
              } else t(p, N);
              N = N.sibling;
            }
            y.type === mr
              ? ((m = $t(y.props.children, p.mode, b, y.key)),
                (m.return = p),
                (p = m))
              : ((b = ks(y.type, y.key, y.props, null, p.mode, b)),
                (b.ref = Xr(p, m, y)),
                (b.return = p),
                (p = b));
          }
          return l(p);
        case dr:
          e: {
            for (N = y.key; m !== null; ) {
              if (m.key === N)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  r(p, m.sibling),
                    (m = i(m, y.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  r(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = ta(y, p.mode, b)), (m.return = p), (p = m);
          }
          return l(p);
        case St:
          return (N = y._init), S(p, m, N(y._payload), b);
      }
      if (an(y)) return x(p, m, y, b);
      if (Zr(y)) return w(p, m, y, b);
      ls(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (r(p, m.sibling), (m = i(m, y)), (m.return = p), (p = m))
          : (r(p, m), (m = ea(y, p.mode, b)), (m.return = p), (p = m)),
        l(p))
      : r(p, m);
  }
  return S;
}
var Fr = ud(!0),
  dd = ud(!1),
  Gs = Ot(null),
  Bs = null,
  wr = null,
  Ll = null;
function Jl() {
  Ll = wr = Bs = null;
}
function Al(e) {
  var t = Gs.current;
  Z(Gs), (e._currentValue = t);
}
function Aa(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Cr(e, t) {
  (Bs = e),
    (Ll = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (Ll !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (Bs === null) throw Error(k(308));
      (wr = e), (Bs.dependencies = { lanes: 0, firstContext: e });
    } else wr = wr.next = e;
  return t;
}
var Yt = null;
function zl(e) {
  Yt === null ? (Yt = [e]) : Yt.push(e);
}
function md(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), zl(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    yt(e, n)
  );
}
function yt(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Nt = !1;
function Ol(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function It(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), z & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      yt(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), zl(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    yt(e, r)
  );
}
function vs(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Pl(e, r);
  }
}
function sc(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var l = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        a === null ? (i = a = l) : (a = a.next = l), (r = r.next);
      } while (r !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Ws(e, t, r, n) {
  var i = e.updateQueue;
  Nt = !1;
  var a = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var c = o,
      u = c.next;
    (c.next = null), l === null ? (a = u) : (l.next = u), (l = c);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== l &&
        (o === null ? (d.firstBaseUpdate = u) : (o.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (a !== null) {
    var h = i.baseState;
    (l = 0), (d = u = c = null), (o = a);
    do {
      var f = o.lane,
        g = o.eventTime;
      if ((n & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var x = e,
            w = o;
          switch (((f = t), (g = r), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                h = x.call(g, h, f);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (f = typeof x == "function" ? x.call(g, h, f) : x),
                f == null)
              )
                break e;
              h = X({}, h, f);
              break e;
            case 2:
              Nt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [o]) : f.push(o));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (c = h)) : (d = d.next = g),
          (l |= f);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (f = o),
          (o = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (c = h),
      (i.baseState = c),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (nr |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function ic(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(k(191, i));
        i.call(n);
      }
    }
}
var Vn = {},
  at = Ot(Vn),
  Tn = Ot(Vn),
  Mn = Ot(Vn);
function Kt(e) {
  if (e === Vn) throw Error(k(174));
  return e;
}
function Vl(e, t) {
  switch ((B(Mn, t), B(Tn, e), B(at, Vn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : va(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = va(t, e));
  }
  Z(at), B(at, t);
}
function Hr() {
  Z(at), Z(Tn), Z(Mn);
}
function hd(e) {
  Kt(Mn.current);
  var t = Kt(at.current),
    r = va(t, e.type);
  t !== r && (B(Tn, e), B(at, r));
}
function Gl(e) {
  Tn.current === e && (Z(at), Z(Tn));
}
var Q = Ot(0);
function Zs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Qi = [];
function Bl() {
  for (var e = 0; e < Qi.length; e++)
    Qi[e]._workInProgressVersionPrimary = null;
  Qi.length = 0;
}
var ws = bt.ReactCurrentDispatcher,
  Yi = bt.ReactCurrentBatchConfig,
  rr = 0,
  Y = null,
  re = null,
  ie = null,
  Us = !1,
  hn = !1,
  Rn = 0,
  Zh = 0;
function de() {
  throw Error(k(321));
}
function Wl(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Ke(e[r], t[r])) return !1;
  return !0;
}
function Zl(e, t, r, n, i, a) {
  if (
    ((rr = a),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ws.current = e === null || e.memoizedState === null ? Kh : Xh),
    (e = r(n, i)),
    hn)
  ) {
    a = 0;
    do {
      if (((hn = !1), (Rn = 0), 25 <= a)) throw Error(k(301));
      (a += 1),
        (ie = re = null),
        (t.updateQueue = null),
        (ws.current = _h),
        (e = r(n, i));
    } while (hn);
  }
  if (
    ((ws.current = Qs),
    (t = re !== null && re.next !== null),
    (rr = 0),
    (ie = re = Y = null),
    (Us = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ul() {
  var e = Rn !== 0;
  return (Rn = 0), e;
}
function rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (Y.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function Ae() {
  if (re === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = ie === null ? Y.memoizedState : ie.next;
  if (t !== null) (ie = t), (re = e);
  else {
    if (e === null) throw Error(k(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      ie === null ? (Y.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function Dn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ki(e) {
  var t = Ae(),
    r = t.queue;
  if (r === null) throw Error(k(311));
  r.lastRenderedReducer = e;
  var n = re,
    i = n.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = a.next), (a.next = l);
    }
    (n.baseQueue = i = a), (r.pending = null);
  }
  if (i !== null) {
    (a = i.next), (n = n.baseState);
    var o = (l = null),
      c = null,
      u = a;
    do {
      var d = u.lane;
      if ((rr & d) === d)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var h = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((o = c = h), (l = n)) : (c = c.next = h),
          (Y.lanes |= d),
          (nr |= d);
      }
      u = u.next;
    } while (u !== null && u !== a);
    c === null ? (l = n) : (c.next = o),
      Ke(n, t.memoizedState) || (je = !0),
      (t.memoizedState = n),
      (t.baseState = l),
      (t.baseQueue = c),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (Y.lanes |= a), (nr |= a), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Xi(e) {
  var t = Ae(),
    r = t.queue;
  if (r === null) throw Error(k(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    a = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var l = (i = i.next);
    do (a = e(a, l.action)), (l = l.next);
    while (l !== i);
    Ke(a, t.memoizedState) || (je = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, n];
}
function fd() {}
function gd(e, t) {
  var r = Y,
    n = Ae(),
    i = t(),
    a = !Ke(n.memoizedState, i);
  if (
    (a && ((n.memoizedState = i), (je = !0)),
    (n = n.queue),
    Ql(vd.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || a || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      In(9, yd.bind(null, r, n, i, t), void 0, null),
      le === null)
    )
      throw Error(k(349));
    rr & 30 || xd(r, t, i);
  }
  return i;
}
function xd(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function yd(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), wd(t) && bd(e);
}
function vd(e, t, r) {
  return r(function () {
    wd(t) && bd(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Ke(e, r);
  } catch {
    return !0;
  }
}
function bd(e) {
  var t = yt(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function ac(e) {
  var t = rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yh.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function In(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function jd() {
  return Ae().memoizedState;
}
function bs(e, t, r, n) {
  var i = rt();
  (Y.flags |= e),
    (i.memoizedState = In(1 | t, r, void 0, n === void 0 ? null : n));
}
function pi(e, t, r, n) {
  var i = Ae();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (re !== null) {
    var l = re.memoizedState;
    if (((a = l.destroy), n !== null && Wl(n, l.deps))) {
      i.memoizedState = In(t, r, a, n);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = In(1 | t, r, a, n));
}
function lc(e, t) {
  return bs(8390656, 8, e, t);
}
function Ql(e, t) {
  return pi(2048, 8, e, t);
}
function Sd(e, t) {
  return pi(4, 2, e, t);
}
function Nd(e, t) {
  return pi(4, 4, e, t);
}
function kd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pd(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), pi(4, 4, kd.bind(null, t, e), r)
  );
}
function Yl() {}
function Cd(e, t) {
  var r = Ae();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Wl(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Ed(e, t) {
  var r = Ae();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Wl(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Td(e, t, r) {
  return rr & 21
    ? (Ke(r, t) || ((r = Fu()), (Y.lanes |= r), (nr |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = r));
}
function Uh(e, t) {
  var r = V;
  (V = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Yi.transition;
  Yi.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = r), (Yi.transition = n);
  }
}
function Md() {
  return Ae().memoizedState;
}
function Qh(e, t, r) {
  var n = Ht(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rd(e))
  )
    Dd(t, r);
  else if (((r = md(e, t, r, n)), r !== null)) {
    var i = xe();
    Ye(r, e, n, i), Id(r, t, n);
  }
}
function Yh(e, t, r) {
  var n = Ht(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Rd(e)) Dd(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var l = t.lastRenderedState,
          o = a(l, r);
        if (((i.hasEagerState = !0), (i.eagerState = o), Ke(o, l))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), zl(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = md(e, t, i, n)),
      r !== null && ((i = xe()), Ye(r, e, n, i), Id(r, t, n));
  }
}
function Rd(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Dd(e, t) {
  hn = Us = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Id(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Pl(e, r);
  }
}
var Qs = {
    readContext: Je,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  Kh = {
    readContext: Je,
    useCallback: function (e, t) {
      return (rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: lc,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        bs(4194308, 4, kd.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = rt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Qh.bind(null, Y, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ac,
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      return (rt().memoizedState = e);
    },
    useTransition: function () {
      var e = ac(!1),
        t = e[0];
      return (e = Uh.bind(null, e[1])), (rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Y,
        i = rt();
      if (U) {
        if (r === void 0) throw Error(k(407));
        r = r();
      } else {
        if (((r = t()), le === null)) throw Error(k(349));
        rr & 30 || xd(n, t, r);
      }
      i.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (i.queue = a),
        lc(vd.bind(null, n, a, e), [e]),
        (n.flags |= 2048),
        In(9, yd.bind(null, n, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = rt(),
        t = le.identifierPrefix;
      if (U) {
        var r = pt,
          n = mt;
        (r = (n & ~(1 << (32 - Qe(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Rn++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Zh++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xh = {
    readContext: Je,
    useCallback: Cd,
    useContext: Je,
    useEffect: Ql,
    useImperativeHandle: Pd,
    useInsertionEffect: Sd,
    useLayoutEffect: Nd,
    useMemo: Ed,
    useReducer: Ki,
    useRef: jd,
    useState: function () {
      return Ki(Dn);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      var t = Ae();
      return Td(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ki(Dn)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: gd,
    useId: Md,
    unstable_isNewReconciler: !1,
  },
  _h = {
    readContext: Je,
    useCallback: Cd,
    useContext: Je,
    useEffect: Ql,
    useImperativeHandle: Pd,
    useInsertionEffect: Sd,
    useLayoutEffect: Nd,
    useMemo: Ed,
    useReducer: Xi,
    useRef: jd,
    useState: function () {
      return Xi(Dn);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      var t = Ae();
      return re === null ? (t.memoizedState = e) : Td(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Xi(Dn)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: gd,
    useId: Md,
    unstable_isNewReconciler: !1,
  };
function Oe(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function za(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : X({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var hi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = xe(),
      i = Ht(e),
      a = ht(n, i);
    (a.payload = t),
      r != null && (a.callback = r),
      (t = It(e, a, i)),
      t !== null && (Ye(t, e, i, n), vs(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = xe(),
      i = Ht(e),
      a = ht(n, i);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = It(e, a, i)),
      t !== null && (Ye(t, e, i, n), vs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = xe(),
      n = Ht(e),
      i = ht(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = It(e, i, n)),
      t !== null && (Ye(t, e, n, r), vs(t, e, n));
  },
};
function oc(e, t, r, n, i, a, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, a, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !kn(r, n) || !kn(i, a)
      : !0
  );
}
function Fd(e, t, r) {
  var n = !1,
    i = At,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Je(a))
      : ((i = Ne(t) ? er : he.current),
        (n = t.contextTypes),
        (a = (n = n != null) ? Dr(e, i) : At)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hi),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function cc(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && hi.enqueueReplaceState(t, t.state, null);
}
function Oa(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = {}), Ol(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = Je(a))
    : ((a = Ne(t) ? er : he.current), (i.context = Dr(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (za(e, t, a, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && hi.enqueueReplaceState(i, i.state, null),
      Ws(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qr(e, t) {
  try {
    var r = "",
      n = t;
    do (r += Pp(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function _i(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Va(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var $h = typeof WeakMap == "function" ? WeakMap : Map;
function Hd(e, t, r) {
  (r = ht(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Ks || ((Ks = !0), (_a = n)), Va(e, t);
    }),
    r
  );
}
function qd(e, t, r) {
  (r = ht(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        Va(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        Va(e, t),
          typeof n != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    r
  );
}
function uc(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new $h();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = hf.bind(null, e, t, r)), t.then(e, e));
}
function dc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mc(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = ht(-1, 1)), (t.tag = 2), It(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var ef = bt.ReactCurrentOwner,
  je = !1;
function ge(e, t, r, n) {
  t.child = e === null ? dd(t, null, r, n) : Fr(t, e.child, r, n);
}
function pc(e, t, r, n, i) {
  r = r.render;
  var a = t.ref;
  return (
    Cr(t, i),
    (n = Zl(e, t, r, n, a, i)),
    (r = Ul()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (U && r && Fl(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function hc(e, t, r, n, i) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !no(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Ld(e, t, a, n, i))
      : ((e = ks(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var l = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : kn), r(l, n) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = qt(a, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ld(e, t, r, n, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (kn(a, n) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = n = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (je = !0);
      else return (t.lanes = e.lanes), vt(e, t, i);
  }
  return Ga(e, t, r, n, i);
}
function Jd(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(jr, Ce),
        (Ce |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(jr, Ce),
          (Ce |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = a !== null ? a.baseLanes : r),
        B(jr, Ce),
        (Ce |= n);
    }
  else
    a !== null ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
      B(jr, Ce),
      (Ce |= n);
  return ge(e, t, i, r), t.child;
}
function Ad(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ga(e, t, r, n, i) {
  var a = Ne(r) ? er : he.current;
  return (
    (a = Dr(t, a)),
    Cr(t, i),
    (r = Zl(e, t, r, n, a, i)),
    (n = Ul()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (U && n && Fl(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function fc(e, t, r, n, i) {
  if (Ne(r)) {
    var a = !0;
    zs(t);
  } else a = !1;
  if ((Cr(t, i), t.stateNode === null))
    js(e, t), Fd(t, r, n), Oa(t, r, n, i), (n = !0);
  else if (e === null) {
    var l = t.stateNode,
      o = t.memoizedProps;
    l.props = o;
    var c = l.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Je(u))
      : ((u = Ne(r) ? er : he.current), (u = Dr(t, u)));
    var d = r.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== n || c !== u) && cc(t, l, n, u)),
      (Nt = !1);
    var f = t.memoizedState;
    (l.state = f),
      Ws(t, n, l, i),
      (c = t.memoizedState),
      o !== n || f !== c || Se.current || Nt
        ? (typeof d == "function" && (za(t, r, d, n), (c = t.memoizedState)),
          (o = Nt || oc(t, r, o, n, f, c, u))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = c)),
          (l.props = n),
          (l.state = c),
          (l.context = u),
          (n = o))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (l = t.stateNode),
      pd(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Oe(t.type, o)),
      (l.props = u),
      (h = t.pendingProps),
      (f = l.context),
      (c = r.contextType),
      typeof c == "object" && c !== null
        ? (c = Je(c))
        : ((c = Ne(r) ? er : he.current), (c = Dr(t, c)));
    var g = r.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== h || f !== c) && cc(t, l, n, c)),
      (Nt = !1),
      (f = t.memoizedState),
      (l.state = f),
      Ws(t, n, l, i);
    var x = t.memoizedState;
    o !== h || f !== x || Se.current || Nt
      ? (typeof g == "function" && (za(t, r, g, n), (x = t.memoizedState)),
        (u = Nt || oc(t, r, u, n, f, x, c) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(n, x, c),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(n, x, c)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = x)),
        (l.props = n),
        (l.state = x),
        (l.context = c),
        (n = u))
      : (typeof l.componentDidUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Ba(e, t, r, n, a, i);
}
function Ba(e, t, r, n, i, a) {
  Ad(e, t);
  var l = (t.flags & 128) !== 0;
  if (!n && !l) return i && ec(t, r, !1), vt(e, t, a);
  (n = t.stateNode), (ef.current = t);
  var o =
    l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Fr(t, e.child, null, a)), (t.child = Fr(t, null, o, a)))
      : ge(e, t, o, a),
    (t.memoizedState = n.state),
    i && ec(t, r, !0),
    t.child
  );
}
function zd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $o(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $o(e, t.context, !1),
    Vl(e, t.containerInfo);
}
function gc(e, t, r, n, i) {
  return Ir(), ql(i), (t.flags |= 256), ge(e, t, r, n), t.child;
}
var Wa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Za(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Od(e, t, r) {
  var n = t.pendingProps,
    i = Q.current,
    a = !1,
    l = (t.flags & 128) !== 0,
    o;
  if (
    ((o = l) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(Q, i & 1),
    e === null)
  )
    return (
      Ja(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = n.children),
          (e = n.fallback),
          a
            ? ((n = t.mode),
              (a = t.child),
              (l = { mode: "hidden", children: l }),
              !(n & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = l))
                : (a = xi(l, n, 0, null)),
              (e = $t(e, n, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Za(r)),
              (t.memoizedState = Wa),
              e)
            : Kl(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return tf(e, t, l, n, o, i, r);
  if (a) {
    (a = n.fallback), (l = t.mode), (i = e.child), (o = i.sibling);
    var c = { mode: "hidden", children: n.children };
    return (
      !(l & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = c),
          (t.deletions = null))
        : ((n = qt(i, c)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (a = qt(o, a)) : ((a = $t(a, l, r, null)), (a.flags |= 2)),
      (a.return = t),
      (n.return = t),
      (n.sibling = a),
      (t.child = n),
      (n = a),
      (a = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Za(r)
          : {
              baseLanes: l.baseLanes | r,
              cachePool: null,
              transitions: l.transitions,
            }),
      (a.memoizedState = l),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = Wa),
      n
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (n = qt(a, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Kl(e, t) {
  return (
    (t = xi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function os(e, t, r, n) {
  return (
    n !== null && ql(n),
    Fr(t, e.child, null, r),
    (e = Kl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tf(e, t, r, n, i, a, l) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = _i(Error(k(422)))), os(e, t, l, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = n.fallback),
        (i = t.mode),
        (n = xi({ mode: "visible", children: n.children }, i, 0, null)),
        (a = $t(a, i, l, null)),
        (a.flags |= 2),
        (n.return = t),
        (a.return = t),
        (n.sibling = a),
        (t.child = n),
        t.mode & 1 && Fr(t, e.child, null, l),
        (t.child.memoizedState = Za(l)),
        (t.memoizedState = Wa),
        a);
  if (!(t.mode & 1)) return os(e, t, l, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var o = n.dgst;
    return (n = o), (a = Error(k(419))), (n = _i(a, n, void 0)), os(e, t, l, n);
  }
  if (((o = (l & e.childLanes) !== 0), je || o)) {
    if (((n = le), n !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), yt(e, i), Ye(n, e, i, -1));
    }
    return ro(), (n = _i(Error(k(421)))), os(e, t, l, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ff.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Ee = Dt(i.nextSibling)),
      (Te = t),
      (U = !0),
      (Be = null),
      e !== null &&
        ((Fe[He++] = mt),
        (Fe[He++] = pt),
        (Fe[He++] = tr),
        (mt = e.id),
        (pt = e.overflow),
        (tr = t)),
      (t = Kl(t, n.children)),
      (t.flags |= 4096),
      t);
}
function xc(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Aa(e.return, t, r);
}
function $i(e, t, r, n, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = n),
      (a.tail = r),
      (a.tailMode = i));
}
function Vd(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    a = n.tail;
  if ((ge(e, t, n.children, r), (n = Q.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xc(e, r, t);
        else if (e.tag === 19) xc(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((B(Q, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && Zs(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          $i(t, !1, i, r, a);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Zs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        $i(t, !0, r, null, a);
        break;
      case "together":
        $i(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function js(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (nr |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, r = qt(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = qt(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function rf(e, t, r) {
  switch (t.tag) {
    case 3:
      zd(t), Ir();
      break;
    case 5:
      hd(t);
      break;
    case 1:
      Ne(t.type) && zs(t);
      break;
    case 4:
      Vl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      B(Gs, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (B(Q, Q.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Od(e, t, r)
          : (B(Q, Q.current & 1),
            (e = vt(e, t, r)),
            e !== null ? e.sibling : null);
      B(Q, Q.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Vd(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(Q, Q.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Jd(e, t, r);
  }
  return vt(e, t, r);
}
var Gd, Ua, Bd, Wd;
Gd = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Ua = function () {};
Bd = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), Kt(at.current);
    var a = null;
    switch (r) {
      case "input":
        (i = fa(e, i)), (n = fa(e, n)), (a = []);
        break;
      case "select":
        (i = X({}, i, { value: void 0 })),
          (n = X({}, n, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = ya(e, i)), (n = ya(e, n)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Js);
    }
    wa(r, n);
    var l;
    r = null;
    for (u in i)
      if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var o = i[u];
          for (l in o) o.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (yn.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in n) {
      var c = n[u];
      if (
        ((o = i != null ? i[u] : void 0),
        n.hasOwnProperty(u) && c !== o && (c != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) ||
                (c && c.hasOwnProperty(l)) ||
                (r || (r = {}), (r[l] = ""));
            for (l in c)
              c.hasOwnProperty(l) &&
                o[l] !== c[l] &&
                (r || (r = {}), (r[l] = c[l]));
          } else r || (a || (a = []), a.push(u, r)), (r = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (a = a || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (a = a || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (yn.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && W("scroll", e),
                  a || o === c || (a = []))
                : (a = a || []).push(u, c));
    }
    r && (a = a || []).push("style", r);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Wd = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function _r(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function nf(e, t, r) {
  var n = t.pendingProps;
  switch ((Hl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return Ne(t.type) && As(), me(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Hr(),
        Z(Se),
        Z(he),
        Bl(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (as(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Be !== null && (tl(Be), (Be = null)))),
        Ua(e, t),
        me(t),
        null
      );
    case 5:
      Gl(t);
      var i = Kt(Mn.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Bd(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(k(166));
          return me(t), null;
        }
        if (((e = Kt(at.current)), as(t))) {
          (n = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((n[nt] = t), (n[En] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              W("cancel", n), W("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < on.length; i++) W(on[i], n);
              break;
            case "source":
              W("error", n);
              break;
            case "img":
            case "image":
            case "link":
              W("error", n), W("load", n);
              break;
            case "details":
              W("toggle", n);
              break;
            case "input":
              Po(n, a), W("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!a.multiple }),
                W("invalid", n);
              break;
            case "textarea":
              Eo(n, a), W("invalid", n);
          }
          wa(r, a), (i = null);
          for (var l in a)
            if (a.hasOwnProperty(l)) {
              var o = a[l];
              l === "children"
                ? typeof o == "string"
                  ? n.textContent !== o &&
                    (a.suppressHydrationWarning !== !0 &&
                      is(n.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    n.textContent !== "" + o &&
                    (a.suppressHydrationWarning !== !0 &&
                      is(n.textContent, o, e),
                    (i = ["children", "" + o]))
                : yn.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  W("scroll", n);
            }
          switch (r) {
            case "input":
              Xn(n), Co(n, a, !0);
              break;
            case "textarea":
              Xn(n), To(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = Js);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vu(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = l.createElement(r, { is: n.is }))
                : ((e = l.createElement(r)),
                  r === "select" &&
                    ((l = e),
                    n.multiple
                      ? (l.multiple = !0)
                      : n.size && (l.size = n.size)))
              : (e = l.createElementNS(e, r)),
            (e[nt] = t),
            (e[En] = n),
            Gd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ba(r, n)), r)) {
              case "dialog":
                W("cancel", e), W("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < on.length; i++) W(on[i], e);
                i = n;
                break;
              case "source":
                W("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (i = n);
                break;
              case "details":
                W("toggle", e), (i = n);
                break;
              case "input":
                Po(e, n), (i = fa(e, n)), W("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = X({}, n, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                Eo(e, n), (i = ya(e, n)), W("invalid", e);
                break;
              default:
                i = n;
            }
            wa(r, i), (o = i);
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var c = o[a];
                a === "style"
                  ? ju(e, c)
                  : a === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && wu(e, c))
                  : a === "children"
                  ? typeof c == "string"
                    ? (r !== "textarea" || c !== "") && vn(e, c)
                    : typeof c == "number" && vn(e, "" + c)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (yn.hasOwnProperty(a)
                      ? c != null && a === "onScroll" && W("scroll", e)
                      : c != null && wl(e, a, c, l));
              }
            switch (r) {
              case "input":
                Xn(e), Co(e, n, !1);
                break;
              case "textarea":
                Xn(e), To(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Jt(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (a = n.value),
                  a != null
                    ? Sr(e, !!n.multiple, a, !1)
                    : n.defaultValue != null &&
                      Sr(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Js);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Wd(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(k(166));
        if (((r = Kt(Mn.current)), Kt(at.current), as(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[nt] = t),
            (a = n.nodeValue !== r) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                is(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  is(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[nt] = t),
            (t.stateNode = n);
      }
      return me(t), null;
    case 13:
      if (
        (Z(Q),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Ee !== null && t.mode & 1 && !(t.flags & 128))
          cd(), Ir(), (t.flags |= 98560), (a = !1);
        else if (((a = as(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(k(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(k(317));
            a[nt] = t;
          } else
            Ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (a = !1);
        } else Be !== null && (tl(Be), (Be = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ne === 0 && (ne = 3) : ro())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Hr(), Ua(e, t), e === null && Pn(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return Al(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && As(), me(t), null;
    case 19:
      if ((Z(Q), (a = t.memoizedState), a === null)) return me(t), null;
      if (((n = (t.flags & 128) !== 0), (l = a.rendering), l === null))
        if (n) _r(a, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Zs(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    _r(a, !1),
                    n = l.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (a = r),
                    (e = n),
                    (a.flags &= 14680066),
                    (l = a.alternate),
                    l === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = l.childLanes),
                        (a.lanes = l.lanes),
                        (a.child = l.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = l.memoizedProps),
                        (a.memoizedState = l.memoizedState),
                        (a.updateQueue = l.updateQueue),
                        (a.type = l.type),
                        (e = l.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return B(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            $() > Lr &&
            ((t.flags |= 128), (n = !0), _r(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Zs(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              _r(a, !0),
              a.tail === null && a.tailMode === "hidden" && !l.alternate && !U)
            )
              return me(t), null;
          } else
            2 * $() - a.renderingStartTime > Lr &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), _r(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((r = a.last),
            r !== null ? (r.sibling = l) : (t.child = l),
            (a.last = l));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = $()),
          (t.sibling = null),
          (r = Q.current),
          B(Q, n ? (r & 1) | 2 : r & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        to(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? Ce & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function sf(e, t) {
  switch ((Hl(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && As(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hr(),
        Z(Se),
        Z(he),
        Bl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Gl(t), null;
    case 13:
      if ((Z(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(Q), null;
    case 4:
      return Hr(), null;
    case 10:
      return Al(t.type._context), null;
    case 22:
    case 23:
      return to(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var cs = !1,
  pe = !1,
  af = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function br(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        _(e, t, n);
      }
    else r.current = null;
}
function Qa(e, t, r) {
  try {
    r();
  } catch (n) {
    _(e, t, n);
  }
}
var yc = !1;
function lf(e, t) {
  if (((Ra = Hs), (e = Ku()), Il(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            a = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var l = 0,
            o = -1,
            c = -1,
            u = 0,
            d = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              h !== r || (i !== 0 && h.nodeType !== 3) || (o = l + i),
                h !== a || (n !== 0 && h.nodeType !== 3) || (c = l + n),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (f = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (f === r && ++u === i && (o = l),
                f === a && ++d === n && (c = l),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = g;
          }
          r = o === -1 || c === -1 ? null : { start: o, end: c };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Da = { focusedElem: e, selectionRange: r }, Hs = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    S = x.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Oe(t.type, w),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (b) {
          _(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (x = yc), (yc = !1), x;
}
function fn(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Qa(t, r, a);
      }
      i = i.next;
    } while (i !== n);
  }
}
function fi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Ya(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Zd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Zd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[En], delete t[Ha], delete t[Vh], delete t[Gh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ud(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ka(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Js));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ka(e, t, r), e = e.sibling; e !== null; ) Ka(e, t, r), (e = e.sibling);
}
function Xa(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Xa(e, t, r), e = e.sibling; e !== null; ) Xa(e, t, r), (e = e.sibling);
}
var oe = null,
  Ge = !1;
function jt(e, t, r) {
  for (r = r.child; r !== null; ) Qd(e, t, r), (r = r.sibling);
}
function Qd(e, t, r) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(li, r);
    } catch {}
  switch (r.tag) {
    case 5:
      pe || br(r, t);
    case 6:
      var n = oe,
        i = Ge;
      (oe = null),
        jt(e, t, r),
        (oe = n),
        (Ge = i),
        oe !== null &&
          (Ge
            ? ((e = oe),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : oe.removeChild(r.stateNode));
      break;
    case 18:
      oe !== null &&
        (Ge
          ? ((e = oe),
            (r = r.stateNode),
            e.nodeType === 8
              ? Zi(e.parentNode, r)
              : e.nodeType === 1 && Zi(e, r),
            Sn(e))
          : Zi(oe, r.stateNode));
      break;
    case 4:
      (n = oe),
        (i = Ge),
        (oe = r.stateNode.containerInfo),
        (Ge = !0),
        jt(e, t, r),
        (oe = n),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var a = i,
            l = a.destroy;
          (a = a.tag),
            l !== void 0 && (a & 2 || a & 4) && Qa(r, t, l),
            (i = i.next);
        } while (i !== n);
      }
      jt(e, t, r);
      break;
    case 1:
      if (
        !pe &&
        (br(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (o) {
          _(r, t, o);
        }
      jt(e, t, r);
      break;
    case 21:
      jt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((pe = (n = pe) || r.memoizedState !== null), jt(e, t, r), (pe = n))
        : jt(e, t, r);
      break;
    default:
      jt(e, t, r);
  }
}
function wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new af()),
      t.forEach(function (n) {
        var i = gf.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function ze(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var a = e,
          l = t,
          o = l;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (oe = o.stateNode), (Ge = !1);
              break e;
            case 3:
              (oe = o.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (oe = o.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          o = o.return;
        }
        if (oe === null) throw Error(k(160));
        Qd(a, l, i), (oe = null), (Ge = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (u) {
        _(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Yd(t, e), (t = t.sibling);
}
function Yd(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), et(e), n & 4)) {
        try {
          fn(3, e, e.return), fi(3, e);
        } catch (w) {
          _(e, e.return, w);
        }
        try {
          fn(5, e, e.return);
        } catch (w) {
          _(e, e.return, w);
        }
      }
      break;
    case 1:
      ze(t, e), et(e), n & 512 && r !== null && br(r, r.return);
      break;
    case 5:
      if (
        (ze(t, e),
        et(e),
        n & 512 && r !== null && br(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          vn(i, "");
        } catch (w) {
          _(e, e.return, w);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          l = r !== null ? r.memoizedProps : a,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            o === "input" && a.type === "radio" && a.name != null && xu(i, a),
              ba(o, l);
            var u = ba(o, a);
            for (l = 0; l < c.length; l += 2) {
              var d = c[l],
                h = c[l + 1];
              d === "style"
                ? ju(i, h)
                : d === "dangerouslySetInnerHTML"
                ? wu(i, h)
                : d === "children"
                ? vn(i, h)
                : wl(i, d, h, u);
            }
            switch (o) {
              case "input":
                ga(i, a);
                break;
              case "textarea":
                yu(i, a);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var g = a.value;
                g != null
                  ? Sr(i, !!a.multiple, g, !1)
                  : f !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Sr(i, !!a.multiple, a.defaultValue, !0)
                      : Sr(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[En] = a;
          } catch (w) {
            _(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ze(t, e), et(e), n & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (w) {
          _(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), et(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Sn(t.containerInfo);
        } catch (w) {
          _(e, e.return, w);
        }
      break;
    case 4:
      ze(t, e), et(e);
      break;
    case 13:
      ze(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            ($l = $())),
        n & 4 && wc(e);
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || d), ze(t, e), (pe = u)) : ze(t, e),
        et(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (h = M = d; M !== null; ) {
              switch (((f = M), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fn(4, f, f.return);
                  break;
                case 1:
                  br(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      _(n, r, w);
                    }
                  }
                  break;
                case 5:
                  br(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    jc(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (M = g)) : jc(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((o = h.stateNode),
                      (c = h.memoizedProps.style),
                      (l =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = bu("display", l)));
              } catch (w) {
                _(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (w) {
                _(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), et(e), n & 4 && wc(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Ud(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(k(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (vn(i, ""), (n.flags &= -33));
          var a = vc(e);
          Xa(e, a, i);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo,
            o = vc(e);
          Ka(e, o, l);
          break;
        default:
          throw Error(k(161));
      }
    } catch (c) {
      _(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function of(e, t, r) {
  (M = e), Kd(e);
}
function Kd(e, t, r) {
  for (var n = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      a = i.child;
    if (i.tag === 22 && n) {
      var l = i.memoizedState !== null || cs;
      if (!l) {
        var o = i.alternate,
          c = (o !== null && o.memoizedState !== null) || pe;
        o = cs;
        var u = pe;
        if (((cs = l), (pe = c) && !u))
          for (M = i; M !== null; )
            (l = M),
              (c = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Sc(i)
                : c !== null
                ? ((c.return = l), (M = c))
                : Sc(i);
        for (; a !== null; ) (M = a), Kd(a), (a = a.sibling);
        (M = i), (cs = o), (pe = u);
      }
      bc(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (M = a)) : bc(e);
  }
}
function bc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || fi(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !pe)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Oe(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && ic(t, a, n);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                ic(t, l, r);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (r === null && t.flags & 4) {
                r = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && r.focus();
                    break;
                  case "img":
                    c.src && (r.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && Sn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        pe || (t.flags & 512 && Ya(t));
      } catch (f) {
        _(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (M = r);
      break;
    }
    M = t.return;
  }
}
function jc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (M = r);
      break;
    }
    M = t.return;
  }
}
function Sc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            fi(4, t);
          } catch (c) {
            _(t, r, c);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (c) {
              _(t, i, c);
            }
          }
          var a = t.return;
          try {
            Ya(t);
          } catch (c) {
            _(t, a, c);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ya(t);
          } catch (c) {
            _(t, l, c);
          }
      }
    } catch (c) {
      _(t, t.return, c);
    }
    if (t === e) {
      M = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (M = o);
      break;
    }
    M = t.return;
  }
}
var cf = Math.ceil,
  Ys = bt.ReactCurrentDispatcher,
  Xl = bt.ReactCurrentOwner,
  Le = bt.ReactCurrentBatchConfig,
  z = 0,
  le = null,
  ee = null,
  ce = 0,
  Ce = 0,
  jr = Ot(0),
  ne = 0,
  Fn = null,
  nr = 0,
  gi = 0,
  _l = 0,
  gn = null,
  be = null,
  $l = 0,
  Lr = 1 / 0,
  ut = null,
  Ks = !1,
  _a = null,
  Ft = null,
  us = !1,
  Et = null,
  Xs = 0,
  xn = 0,
  $a = null,
  Ss = -1,
  Ns = 0;
function xe() {
  return z & 6 ? $() : Ss !== -1 ? Ss : (Ss = $());
}
function Ht(e) {
  return e.mode & 1
    ? z & 2 && ce !== 0
      ? ce & -ce
      : Wh.transition !== null
      ? (Ns === 0 && (Ns = Fu()), Ns)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ou(e.type))),
        e)
    : 1;
}
function Ye(e, t, r, n) {
  if (50 < xn) throw ((xn = 0), ($a = null), Error(k(185)));
  An(e, r, n),
    (!(z & 2) || e !== le) &&
      (e === le && (!(z & 2) && (gi |= r), ne === 4 && Pt(e, ce)),
      ke(e, n),
      r === 1 && z === 0 && !(t.mode & 1) && ((Lr = $() + 500), mi && Vt()));
}
function ke(e, t) {
  var r = e.callbackNode;
  Wp(e, t);
  var n = Fs(e, e === le ? ce : 0);
  if (n === 0)
    r !== null && Do(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Do(r), t === 1))
      e.tag === 0 ? Bh(Nc.bind(null, e)) : ad(Nc.bind(null, e)),
        zh(function () {
          !(z & 6) && Vt();
        }),
        (r = null);
    else {
      switch (Hu(n)) {
        case 1:
          r = kl;
          break;
        case 4:
          r = Du;
          break;
        case 16:
          r = Is;
          break;
        case 536870912:
          r = Iu;
          break;
        default:
          r = Is;
      }
      r = sm(r, Xd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Xd(e, t) {
  if (((Ss = -1), (Ns = 0), z & 6)) throw Error(k(327));
  var r = e.callbackNode;
  if (Er() && e.callbackNode !== r) return null;
  var n = Fs(e, e === le ? ce : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = _s(e, n);
  else {
    t = n;
    var i = z;
    z |= 2;
    var a = $d();
    (le !== e || ce !== t) && ((ut = null), (Lr = $() + 500), _t(e, t));
    do
      try {
        mf();
        break;
      } catch (o) {
        _d(e, o);
      }
    while (!0);
    Jl(),
      (Ys.current = a),
      (z = i),
      ee !== null ? (t = 0) : ((le = null), (ce = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Pa(e)), i !== 0 && ((n = i), (t = el(e, i)))), t === 1)
    )
      throw ((r = Fn), _t(e, 0), Pt(e, n), ke(e, $()), r);
    if (t === 6) Pt(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !uf(i) &&
          ((t = _s(e, n)),
          t === 2 && ((a = Pa(e)), a !== 0 && ((n = a), (t = el(e, a)))),
          t === 1))
      )
        throw ((r = Fn), _t(e, 0), Pt(e, n), ke(e, $()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ut(e, be, ut);
          break;
        case 3:
          if (
            (Pt(e, n), (n & 130023424) === n && ((t = $l + 500 - $()), 10 < t))
          ) {
            if (Fs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Fa(Ut.bind(null, e, be, ut), t);
            break;
          }
          Ut(e, be, ut);
          break;
        case 4:
          if ((Pt(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var l = 31 - Qe(n);
            (a = 1 << l), (l = t[l]), l > i && (i = l), (n &= ~a);
          }
          if (
            ((n = i),
            (n = $() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * cf(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Fa(Ut.bind(null, e, be, ut), n);
            break;
          }
          Ut(e, be, ut);
          break;
        case 5:
          Ut(e, be, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ke(e, $()), e.callbackNode === r ? Xd.bind(null, e) : null;
}
function el(e, t) {
  var r = gn;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = _s(e, t)),
    e !== 2 && ((t = be), (be = r), t !== null && tl(t)),
    e
  );
}
function tl(e) {
  be === null ? (be = e) : be.push.apply(be, e);
}
function uf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Ke(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Pt(e, t) {
  for (
    t &= ~_l,
      t &= ~gi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Qe(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Nc(e) {
  if (z & 6) throw Error(k(327));
  Er();
  var t = Fs(e, 0);
  if (!(t & 1)) return ke(e, $()), null;
  var r = _s(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Pa(e);
    n !== 0 && ((t = n), (r = el(e, n)));
  }
  if (r === 1) throw ((r = Fn), _t(e, 0), Pt(e, t), ke(e, $()), r);
  if (r === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ut(e, be, ut),
    ke(e, $()),
    null
  );
}
function eo(e, t) {
  var r = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = r), z === 0 && ((Lr = $() + 500), mi && Vt());
  }
}
function sr(e) {
  Et !== null && Et.tag === 0 && !(z & 6) && Er();
  var t = z;
  z |= 1;
  var r = Le.transition,
    n = V;
  try {
    if (((Le.transition = null), (V = 1), e)) return e();
  } finally {
    (V = n), (Le.transition = r), (z = t), !(z & 6) && Vt();
  }
}
function to() {
  (Ce = jr.current), Z(jr);
}
function _t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Ah(r)), ee !== null))
    for (r = ee.return; r !== null; ) {
      var n = r;
      switch ((Hl(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && As();
          break;
        case 3:
          Hr(), Z(Se), Z(he), Bl();
          break;
        case 5:
          Gl(n);
          break;
        case 4:
          Hr();
          break;
        case 13:
          Z(Q);
          break;
        case 19:
          Z(Q);
          break;
        case 10:
          Al(n.type._context);
          break;
        case 22:
        case 23:
          to();
      }
      r = r.return;
    }
  if (
    ((le = e),
    (ee = e = qt(e.current, null)),
    (ce = Ce = t),
    (ne = 0),
    (Fn = null),
    (_l = gi = nr = 0),
    (be = gn = null),
    Yt !== null)
  ) {
    for (t = 0; t < Yt.length; t++)
      if (((r = Yt[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          a = r.pending;
        if (a !== null) {
          var l = a.next;
          (a.next = i), (n.next = l);
        }
        r.pending = n;
      }
    Yt = null;
  }
  return e;
}
function _d(e, t) {
  do {
    var r = ee;
    try {
      if ((Jl(), (ws.current = Qs), Us)) {
        for (var n = Y.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        Us = !1;
      }
      if (
        ((rr = 0),
        (ie = re = Y = null),
        (hn = !1),
        (Rn = 0),
        (Xl.current = null),
        r === null || r.return === null)
      ) {
        (ne = 1), (Fn = t), (ee = null);
        break;
      }
      e: {
        var a = e,
          l = r.return,
          o = r,
          c = t;
        if (
          ((t = ce),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = o,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = dc(l);
          if (g !== null) {
            (g.flags &= -257),
              mc(g, l, o, a, t),
              g.mode & 1 && uc(a, u, t),
              (t = g),
              (c = u);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(c), (t.updateQueue = w);
            } else x.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              uc(a, u, t), ro();
              break e;
            }
            c = Error(k(426));
          }
        } else if (U && o.mode & 1) {
          var S = dc(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              mc(S, l, o, a, t),
              ql(qr(c, o));
            break e;
          }
        }
        (a = c = qr(c, o)),
          ne !== 4 && (ne = 2),
          gn === null ? (gn = [a]) : gn.push(a),
          (a = l);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var p = Hd(a, c, t);
              sc(a, p);
              break e;
            case 1:
              o = c;
              var m = a.type,
                y = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(y))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var b = qd(a, o, t);
                sc(a, b);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      tm(r);
    } catch (j) {
      (t = j), ee === r && r !== null && (ee = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function $d() {
  var e = Ys.current;
  return (Ys.current = Qs), e === null ? Qs : e;
}
function ro() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    le === null || (!(nr & 268435455) && !(gi & 268435455)) || Pt(le, ce);
}
function _s(e, t) {
  var r = z;
  z |= 2;
  var n = $d();
  (le !== e || ce !== t) && ((ut = null), _t(e, t));
  do
    try {
      df();
      break;
    } catch (i) {
      _d(e, i);
    }
  while (!0);
  if ((Jl(), (z = r), (Ys.current = n), ee !== null)) throw Error(k(261));
  return (le = null), (ce = 0), ne;
}
function df() {
  for (; ee !== null; ) em(ee);
}
function mf() {
  for (; ee !== null && !qp(); ) em(ee);
}
function em(e) {
  var t = nm(e.alternate, e, Ce);
  (e.memoizedProps = e.pendingProps),
    t === null ? tm(e) : (ee = t),
    (Xl.current = null);
}
function tm(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = sf(r, t)), r !== null)) {
        (r.flags &= 32767), (ee = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    } else if (((r = nf(r, t, Ce)), r !== null)) {
      ee = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Ut(e, t, r) {
  var n = V,
    i = Le.transition;
  try {
    (Le.transition = null), (V = 1), pf(e, t, r, n);
  } finally {
    (Le.transition = i), (V = n);
  }
  return null;
}
function pf(e, t, r, n) {
  do Er();
  while (Et !== null);
  if (z & 6) throw Error(k(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = r.lanes | r.childLanes;
  if (
    (Zp(e, a),
    e === le && ((ee = le = null), (ce = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      us ||
      ((us = !0),
      sm(Is, function () {
        return Er(), null;
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    (a = Le.transition), (Le.transition = null);
    var l = V;
    V = 1;
    var o = z;
    (z |= 4),
      (Xl.current = null),
      lf(e, r),
      Yd(r, e),
      Dh(Da),
      (Hs = !!Ra),
      (Da = Ra = null),
      (e.current = r),
      of(r),
      Lp(),
      (z = o),
      (V = l),
      (Le.transition = a);
  } else e.current = r;
  if (
    (us && ((us = !1), (Et = e), (Xs = i)),
    (a = e.pendingLanes),
    a === 0 && (Ft = null),
    zp(r.stateNode),
    ke(e, $()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ks) throw ((Ks = !1), (e = _a), (_a = null), e);
  return (
    Xs & 1 && e.tag !== 0 && Er(),
    (a = e.pendingLanes),
    a & 1 ? (e === $a ? xn++ : ((xn = 0), ($a = e))) : (xn = 0),
    Vt(),
    null
  );
}
function Er() {
  if (Et !== null) {
    var e = Hu(Xs),
      t = Le.transition,
      r = V;
    try {
      if (((Le.transition = null), (V = 16 > e ? 16 : e), Et === null))
        var n = !1;
      else {
        if (((e = Et), (Et = null), (Xs = 0), z & 6)) throw Error(k(331));
        var i = z;
        for (z |= 4, M = e.current; M !== null; ) {
          var a = M,
            l = a.child;
          if (M.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (M = u; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fn(8, d, a);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (M = h);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var f = d.sibling,
                        g = d.return;
                      if ((Zd(d), d === u)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (M = f);
                        break;
                      }
                      M = g;
                    }
                }
              }
              var x = a.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var S = w.sibling;
                    (w.sibling = null), (w = S);
                  } while (w !== null);
                }
              }
              M = a;
            }
          }
          if (a.subtreeFlags & 2064 && l !== null) (l.return = a), (M = l);
          else
            e: for (; M !== null; ) {
              if (((a = M), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fn(9, a, a.return);
                }
              var p = a.sibling;
              if (p !== null) {
                (p.return = a.return), (M = p);
                break e;
              }
              M = a.return;
            }
        }
        var m = e.current;
        for (M = m; M !== null; ) {
          l = M;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), (M = y);
          else
            e: for (l = m; M !== null; ) {
              if (((o = M), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fi(9, o);
                  }
                } catch (j) {
                  _(o, o.return, j);
                }
              if (o === l) {
                M = null;
                break e;
              }
              var b = o.sibling;
              if (b !== null) {
                (b.return = o.return), (M = b);
                break e;
              }
              M = o.return;
            }
        }
        if (
          ((z = i), Vt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(li, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (V = r), (Le.transition = t);
    }
  }
  return !1;
}
function kc(e, t, r) {
  (t = qr(r, t)),
    (t = Hd(e, t, 1)),
    (e = It(e, t, 1)),
    (t = xe()),
    e !== null && (An(e, 1, t), ke(e, t));
}
function _(e, t, r) {
  if (e.tag === 3) kc(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kc(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(n)))
        ) {
          (e = qr(r, e)),
            (e = qd(t, e, 1)),
            (t = It(t, e, 1)),
            (e = xe()),
            t !== null && (An(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hf(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & r),
    le === e &&
      (ce & r) === r &&
      (ne === 4 || (ne === 3 && (ce & 130023424) === ce && 500 > $() - $l)
        ? _t(e, 0)
        : (_l |= r)),
    ke(e, t);
}
function rm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = es), (es <<= 1), !(es & 130023424) && (es = 4194304))
      : (t = 1));
  var r = xe();
  (e = yt(e, t)), e !== null && (An(e, t, r), ke(e, r));
}
function ff(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), rm(e, r);
}
function gf(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  n !== null && n.delete(t), rm(e, r);
}
var nm;
nm = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) je = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (je = !1), rf(e, t, r);
      je = !!(e.flags & 131072);
    }
  else (je = !1), U && t.flags & 1048576 && ld(t, Vs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      js(e, t), (e = t.pendingProps);
      var i = Dr(t, he.current);
      Cr(t, r), (i = Zl(null, t, n, e, i, r));
      var a = Ul();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(n) ? ((a = !0), zs(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ol(t),
            (i.updater = hi),
            (t.stateNode = i),
            (i._reactInternals = t),
            Oa(t, n, e, r),
            (t = Ba(null, t, n, !0, a, r)))
          : ((t.tag = 0), U && a && Fl(t), ge(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (js(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = yf(n)),
          (e = Oe(n, e)),
          i)
        ) {
          case 0:
            t = Ga(null, t, n, e, r);
            break e;
          case 1:
            t = fc(null, t, n, e, r);
            break e;
          case 11:
            t = pc(null, t, n, e, r);
            break e;
          case 14:
            t = hc(null, t, n, Oe(n.type, e), r);
            break e;
        }
        throw Error(k(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Oe(n, i)),
        Ga(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Oe(n, i)),
        fc(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((zd(t), e === null)) throw Error(k(387));
        (n = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          pd(e, t),
          Ws(t, n, null, r);
        var l = t.memoizedState;
        if (((n = l.element), a.isDehydrated))
          if (
            ((a = {
              element: n,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = qr(Error(k(423)), t)), (t = gc(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = qr(Error(k(424)), t)), (t = gc(e, t, n, r, i));
            break e;
          } else
            for (
              Ee = Dt(t.stateNode.containerInfo.firstChild),
                Te = t,
                U = !0,
                Be = null,
                r = dd(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Ir(), n === i)) {
            t = vt(e, t, r);
            break e;
          }
          ge(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        hd(t),
        e === null && Ja(t),
        (n = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Ia(n, i) ? (l = null) : a !== null && Ia(n, a) && (t.flags |= 32),
        Ad(e, t),
        ge(e, t, l, r),
        t.child
      );
    case 6:
      return e === null && Ja(t), null;
    case 13:
      return Od(e, t, r);
    case 4:
      return (
        Vl(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Fr(t, null, n, r)) : ge(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Oe(n, i)),
        pc(e, t, n, i, r)
      );
    case 7:
      return ge(e, t, t.pendingProps, r), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (l = i.value),
          B(Gs, n._currentValue),
          (n._currentValue = l),
          a !== null)
        )
          if (Ke(a.value, l)) {
            if (a.children === i.children && !Se.current) {
              t = vt(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var o = a.dependencies;
              if (o !== null) {
                l = a.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === n) {
                    if (a.tag === 1) {
                      (c = ht(-1, r & -r)), (c.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c);
                      }
                    }
                    (a.lanes |= r),
                      (c = a.alternate),
                      c !== null && (c.lanes |= r),
                      Aa(a.return, r, t),
                      (o.lanes |= r);
                    break;
                  }
                  c = c.next;
                }
              } else if (a.tag === 10) l = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((l = a.return), l === null)) throw Error(k(341));
                (l.lanes |= r),
                  (o = l.alternate),
                  o !== null && (o.lanes |= r),
                  Aa(l, r, t),
                  (l = a.sibling);
              } else l = a.child;
              if (l !== null) l.return = a;
              else
                for (l = a; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((a = l.sibling), a !== null)) {
                    (a.return = l.return), (l = a);
                    break;
                  }
                  l = l.return;
                }
              a = l;
            }
        ge(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        Cr(t, r),
        (i = Je(i)),
        (n = n(i)),
        (t.flags |= 1),
        ge(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = Oe(n, t.pendingProps)),
        (i = Oe(n.type, i)),
        hc(e, t, n, i, r)
      );
    case 15:
      return Ld(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Oe(n, i)),
        js(e, t),
        (t.tag = 1),
        Ne(n) ? ((e = !0), zs(t)) : (e = !1),
        Cr(t, r),
        Fd(t, n, i),
        Oa(t, n, i, r),
        Ba(null, t, n, !0, e, r)
      );
    case 19:
      return Vd(e, t, r);
    case 22:
      return Jd(e, t, r);
  }
  throw Error(k(156, t.tag));
};
function sm(e, t) {
  return Ru(e, t);
}
function xf(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function qe(e, t, r, n) {
  return new xf(e, t, r, n);
}
function no(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yf(e) {
  if (typeof e == "function") return no(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === jl)) return 11;
    if (e === Sl) return 14;
  }
  return 2;
}
function qt(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = qe(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function ks(e, t, r, n, i, a) {
  var l = 2;
  if (((n = e), typeof e == "function")) no(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case mr:
        return $t(r.children, i, a, t);
      case bl:
        (l = 8), (i |= 8);
        break;
      case da:
        return (
          (e = qe(12, r, t, i | 2)), (e.elementType = da), (e.lanes = a), e
        );
      case ma:
        return (e = qe(13, r, t, i)), (e.elementType = ma), (e.lanes = a), e;
      case pa:
        return (e = qe(19, r, t, i)), (e.elementType = pa), (e.lanes = a), e;
      case hu:
        return xi(r, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mu:
              l = 10;
              break e;
            case pu:
              l = 9;
              break e;
            case jl:
              l = 11;
              break e;
            case Sl:
              l = 14;
              break e;
            case St:
              (l = 16), (n = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qe(l, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = a), t
  );
}
function $t(e, t, r, n) {
  return (e = qe(7, e, n, t)), (e.lanes = r), e;
}
function xi(e, t, r, n) {
  return (
    (e = qe(22, e, n, t)),
    (e.elementType = hu),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ea(e, t, r) {
  return (e = qe(6, e, null, t)), (e.lanes = r), e;
}
function ta(e, t, r) {
  return (
    (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vf(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hi(0)),
    (this.expirationTimes = Hi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hi(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function so(e, t, r, n, i, a, l, o, c) {
  return (
    (e = new vf(e, t, r, o, c)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = qe(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ol(a),
    e
  );
}
function wf(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dr,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function im(e) {
  if (!e) return At;
  e = e._reactInternals;
  e: {
    if (ar(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Ne(r)) return id(e, r, t);
  }
  return t;
}
function am(e, t, r, n, i, a, l, o, c) {
  return (
    (e = so(r, n, !0, e, i, a, l, o, c)),
    (e.context = im(null)),
    (r = e.current),
    (n = xe()),
    (i = Ht(r)),
    (a = ht(n, i)),
    (a.callback = t ?? null),
    It(r, a, i),
    (e.current.lanes = i),
    An(e, i, n),
    ke(e, n),
    e
  );
}
function yi(e, t, r, n) {
  var i = t.current,
    a = xe(),
    l = Ht(i);
  return (
    (r = im(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ht(a, l)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = It(i, t, l)),
    e !== null && (Ye(e, i, l, a), vs(e, i, l)),
    l
  );
}
function $s(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function io(e, t) {
  Pc(e, t), (e = e.alternate) && Pc(e, t);
}
function bf() {
  return null;
}
var lm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ao(e) {
  this._internalRoot = e;
}
vi.prototype.render = ao.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  yi(e, t, null, null);
};
vi.prototype.unmount = ao.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    sr(function () {
      yi(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function vi(e) {
  this._internalRoot = e;
}
vi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ju();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < kt.length && t !== 0 && t < kt[r].priority; r++);
    kt.splice(r, 0, e), r === 0 && zu(e);
  }
};
function lo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cc() {}
function jf(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var u = $s(l);
        a.call(u);
      };
    }
    var l = am(t, n, e, 0, null, !1, !1, "", Cc);
    return (
      (e._reactRootContainer = l),
      (e[xt] = l.current),
      Pn(e.nodeType === 8 ? e.parentNode : e),
      sr(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var o = n;
    n = function () {
      var u = $s(c);
      o.call(u);
    };
  }
  var c = so(e, 0, !1, null, null, !1, !1, "", Cc);
  return (
    (e._reactRootContainer = c),
    (e[xt] = c.current),
    Pn(e.nodeType === 8 ? e.parentNode : e),
    sr(function () {
      yi(t, c, r, n);
    }),
    c
  );
}
function bi(e, t, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var l = a;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var c = $s(l);
        o.call(c);
      };
    }
    yi(t, l, e, i);
  } else l = jf(r, t, e, i, n);
  return $s(l);
}
qu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ln(t.pendingLanes);
        r !== 0 &&
          (Pl(t, r | 1), ke(t, $()), !(z & 6) && ((Lr = $() + 500), Vt()));
      }
      break;
    case 13:
      sr(function () {
        var n = yt(e, 1);
        if (n !== null) {
          var i = xe();
          Ye(n, e, 1, i);
        }
      }),
        io(e, 1);
  }
};
Cl = function (e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var r = xe();
      Ye(t, e, 134217728, r);
    }
    io(e, 134217728);
  }
};
Lu = function (e) {
  if (e.tag === 13) {
    var t = Ht(e),
      r = yt(e, t);
    if (r !== null) {
      var n = xe();
      Ye(r, e, t, n);
    }
    io(e, t);
  }
};
Ju = function () {
  return V;
};
Au = function (e, t) {
  var r = V;
  try {
    return (V = e), t();
  } finally {
    V = r;
  }
};
Sa = function (e, t, r) {
  switch (t) {
    case "input":
      if ((ga(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = di(n);
            if (!i) throw Error(k(90));
            gu(n), ga(n, i);
          }
        }
      }
      break;
    case "textarea":
      yu(e, r);
      break;
    case "select":
      (t = r.value), t != null && Sr(e, !!r.multiple, t, !1);
  }
};
ku = eo;
Pu = sr;
var Sf = { usingClientEntryPoint: !1, Events: [On, gr, di, Su, Nu, eo] },
  $r = {
    findFiberByHostInstance: Qt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Nf = {
    bundleType: $r.bundleType,
    version: $r.version,
    rendererPackageName: $r.rendererPackageName,
    rendererConfig: $r.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Tu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $r.findFiberByHostInstance || bf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ds.isDisabled && ds.supportsFiber)
    try {
      (li = ds.inject(Nf)), (it = ds);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sf;
Re.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lo(t)) throw Error(k(200));
  return wf(e, t, null, r);
};
Re.createRoot = function (e, t) {
  if (!lo(e)) throw Error(k(299));
  var r = !1,
    n = "",
    i = lm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = so(e, 1, !1, null, null, r, !1, n, i)),
    (e[xt] = t.current),
    Pn(e.nodeType === 8 ? e.parentNode : e),
    new ao(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Tu(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return sr(e);
};
Re.hydrate = function (e, t, r) {
  if (!wi(t)) throw Error(k(200));
  return bi(null, e, t, !0, r);
};
Re.hydrateRoot = function (e, t, r) {
  if (!lo(e)) throw Error(k(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    a = "",
    l = lm;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
    (t = am(t, null, e, 1, r ?? null, i, !1, a, l)),
    (e[xt] = t.current),
    Pn(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new vi(t);
};
Re.render = function (e, t, r) {
  if (!wi(t)) throw Error(k(200));
  return bi(null, e, t, !1, r);
};
Re.unmountComponentAtNode = function (e) {
  if (!wi(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (sr(function () {
        bi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = eo;
Re.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!wi(r)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return bi(e, t, r, !1, n);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function om() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om);
    } catch (e) {
      console.error(e);
    }
}
om(), (ou.exports = Re);
var kf = ou.exports,
  cm,
  Ec = kf;
(cm = Ec.createRoot), Ec.hydrateRoot;
/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Tc = "popstate";
function Pf(e = {}) {
  function t(n, i) {
    let { pathname: a, search: l, hash: o } = n.location;
    return rl(
      "",
      { pathname: a, search: l, hash: o },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function r(n, i) {
    return typeof i == "string" ? i : Hn(i);
  }
  return Ef(t, r, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Xe(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Cf() {
  return Math.random().toString(36).substring(2, 10);
}
function Mc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function rl(e, t, r = null, n) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Gr(t) : t),
    state: r,
    key: (t && t.key) || n || Cf(),
  };
}
function Hn({ pathname: e = "/", search: t = "", hash: r = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Gr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function Ef(e, t, r, n = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = n,
    l = i.history,
    o = "POP",
    c = null,
    u = d();
  u == null && ((u = 0), l.replaceState({ ...l.state, idx: u }, ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function h() {
    o = "POP";
    let S = d(),
      p = S == null ? null : S - u;
    (u = S), c && c({ action: o, location: w.location, delta: p });
  }
  function f(S, p) {
    o = "PUSH";
    let m = rl(w.location, S, p);
    u = d() + 1;
    let y = Mc(m, u),
      b = w.createHref(m);
    try {
      l.pushState(y, "", b);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      i.location.assign(b);
    }
    a && c && c({ action: o, location: w.location, delta: 1 });
  }
  function g(S, p) {
    o = "REPLACE";
    let m = rl(w.location, S, p);
    u = d();
    let y = Mc(m, u),
      b = w.createHref(m);
    l.replaceState(y, "", b),
      a && c && c({ action: o, location: w.location, delta: 0 });
  }
  function x(S) {
    return Tf(S);
  }
  let w = {
    get action() {
      return o;
    },
    get location() {
      return e(i, l);
    },
    listen(S) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Tc, h),
        (c = S),
        () => {
          i.removeEventListener(Tc, h), (c = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: x,
    encodeLocation(S) {
      let p = x(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: g,
    go(S) {
      return l.go(S);
    },
  };
  return w;
}
function Tf(e, t = !1) {
  let r = "http://localhost";
  typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    K(r, "No window.location.(origin|href) available to create URL");
  let n = typeof e == "string" ? e : Hn(e);
  return (
    (n = n.replace(/ $/, "%20")),
    !t && n.startsWith("//") && (n = r + n),
    new URL(n, r)
  );
}
function um(e, t, r = "/") {
  return Mf(e, t, r, !1);
}
function Mf(e, t, r, n) {
  let i = typeof t == "string" ? Gr(t) : t,
    a = wt(i.pathname || "/", r);
  if (a == null) return null;
  let l = dm(e);
  Rf(l);
  let o = null;
  for (let c = 0; o == null && c < l.length; ++c) {
    let u = Vf(a);
    o = zf(l[c], u, n);
  }
  return o;
}
function dm(e, t = [], r = [], n = "") {
  let i = (a, l, o) => {
    let c = {
      relativePath: o === void 0 ? a.path || "" : o,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: l,
      route: a,
    };
    c.relativePath.startsWith("/") &&
      (K(
        c.relativePath.startsWith(n),
        `Absolute route path "${c.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (c.relativePath = c.relativePath.slice(n.length)));
    let u = ft([n, c.relativePath]),
      d = r.concat(c);
    a.children &&
      a.children.length > 0 &&
      (K(
        a.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
      ),
      dm(a.children, t, d, u)),
      !(a.path == null && !a.index) &&
        t.push({ path: u, score: Jf(u, a.index), routesMeta: d });
  };
  return (
    e.forEach((a, l) => {
      var o;
      if (a.path === "" || !((o = a.path) != null && o.includes("?"))) i(a, l);
      else for (let c of mm(a.path)) i(a, l, c);
    }),
    t
  );
}
function mm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    i = r.endsWith("?"),
    a = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [a, ""] : [a];
  let l = mm(n.join("/")),
    o = [];
  return (
    o.push(...l.map((c) => (c === "" ? a : [a, c].join("/")))),
    i && o.push(...l),
    o.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function Rf(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Af(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
var Df = /^:[\w-]+$/,
  If = 3,
  Ff = 2,
  Hf = 1,
  qf = 10,
  Lf = -2,
  Rc = (e) => e === "*";
function Jf(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Rc) && (n += Lf),
    t && (n += Ff),
    r
      .filter((i) => !Rc(i))
      .reduce((i, a) => i + (Df.test(a) ? If : a === "" ? Hf : qf), n)
  );
}
function Af(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function zf(e, t, r = !1) {
  let { routesMeta: n } = e,
    i = {},
    a = "/",
    l = [];
  for (let o = 0; o < n.length; ++o) {
    let c = n[o],
      u = o === n.length - 1,
      d = a === "/" ? t : t.slice(a.length) || "/",
      h = ei(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        d
      ),
      f = c.route;
    if (
      (!h &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (h = ei(
          { path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 },
          d
        )),
      !h)
    )
      return null;
    Object.assign(i, h.params),
      l.push({
        params: i,
        pathname: ft([a, h.pathname]),
        pathnameBase: Zf(ft([a, h.pathnameBase])),
        route: f,
      }),
      h.pathnameBase !== "/" && (a = ft([a, h.pathnameBase]));
  }
  return l;
}
function ei(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Of(e.path, e.caseSensitive, e.end),
    i = t.match(r);
  if (!i) return null;
  let a = i[0],
    l = a.replace(/(.)\/+$/, "$1"),
    o = i.slice(1);
  return {
    params: n.reduce((u, { paramName: d, isOptional: h }, f) => {
      if (d === "*") {
        let x = o[f] || "";
        l = a.slice(0, a.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const g = o[f];
      return (
        h && !g ? (u[d] = void 0) : (u[d] = (g || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: a,
    pathnameBase: l,
    pattern: e,
  };
}
function Of(e, t = !1, r = !0) {
  Xe(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let n = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, o, c) => (
            n.push({ paramName: o, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), n]
  );
}
function Vf(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Xe(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function wt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Gf(e, t = "/") {
  let {
    pathname: r,
    search: n = "",
    hash: i = "",
  } = typeof e == "string" ? Gr(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Bf(r, t)) : t,
    search: Uf(n),
    hash: Qf(i),
  };
}
function Bf(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function ra(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    n
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Wf(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function pm(e) {
  let t = Wf(e);
  return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
}
function hm(e, t, r, n = !1) {
  let i;
  typeof e == "string"
    ? (i = Gr(e))
    : ((i = { ...e }),
      K(
        !i.pathname || !i.pathname.includes("?"),
        ra("?", "pathname", "search", i)
      ),
      K(
        !i.pathname || !i.pathname.includes("#"),
        ra("#", "pathname", "hash", i)
      ),
      K(!i.search || !i.search.includes("#"), ra("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "",
    l = a ? "/" : i.pathname,
    o;
  if (l == null) o = r;
  else {
    let h = t.length - 1;
    if (!n && l.startsWith("..")) {
      let f = l.split("/");
      for (; f[0] === ".."; ) f.shift(), (h -= 1);
      i.pathname = f.join("/");
    }
    o = h >= 0 ? t[h] : "/";
  }
  let c = Gf(i, o),
    u = l && l !== "/" && l.endsWith("/"),
    d = (a || l === ".") && r.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
var ft = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Zf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Uf = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qf = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Yf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var fm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(fm);
var Kf = ["GET", ...fm];
new Set(Kf);
var Br = v.createContext(null);
Br.displayName = "DataRouter";
var ji = v.createContext(null);
ji.displayName = "DataRouterState";
v.createContext(!1);
var gm = v.createContext({ isTransitioning: !1 });
gm.displayName = "ViewTransition";
var Xf = v.createContext(new Map());
Xf.displayName = "Fetchers";
var _f = v.createContext(null);
_f.displayName = "Await";
var lt = v.createContext(null);
lt.displayName = "Navigation";
var Gn = v.createContext(null);
Gn.displayName = "Location";
var ot = v.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ot.displayName = "Route";
var oo = v.createContext(null);
oo.displayName = "RouteError";
function $f(e, { relative: t } = {}) {
  K(Bn(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: r, navigator: n } = v.useContext(lt),
    { hash: i, pathname: a, search: l } = Wn(e, { relative: t }),
    o = a;
  return (
    r !== "/" && (o = a === "/" ? r : ft([r, a])),
    n.createHref({ pathname: o, search: l, hash: i })
  );
}
function Bn() {
  return v.useContext(Gn) != null;
}
function Gt() {
  return (
    K(
      Bn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    v.useContext(Gn).location
  );
}
var xm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ym(e) {
  v.useContext(lt).static || v.useLayoutEffect(e);
}
function lr() {
  let { isDataRoute: e } = v.useContext(ot);
  return e ? p0() : e0();
}
function e0() {
  K(
    Bn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = v.useContext(Br),
    { basename: t, navigator: r } = v.useContext(lt),
    { matches: n } = v.useContext(ot),
    { pathname: i } = Gt(),
    a = JSON.stringify(pm(n)),
    l = v.useRef(!1);
  return (
    ym(() => {
      l.current = !0;
    }),
    v.useCallback(
      (c, u = {}) => {
        if ((Xe(l.current, xm), !l.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let d = hm(c, JSON.parse(a), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : ft([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, a, i, e]
    )
  );
}
v.createContext(null);
function t0() {
  let { matches: e } = v.useContext(ot),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Wn(e, { relative: t } = {}) {
  let { matches: r } = v.useContext(ot),
    { pathname: n } = Gt(),
    i = JSON.stringify(pm(r));
  return v.useMemo(() => hm(e, JSON.parse(i), n, t === "path"), [e, i, n, t]);
}
function r0(e, t) {
  return vm(e, t);
}
function vm(e, t, r, n) {
  var p;
  K(
    Bn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: i } = v.useContext(lt),
    { matches: a } = v.useContext(ot),
    l = a[a.length - 1],
    o = l ? l.params : {},
    c = l ? l.pathname : "/",
    u = l ? l.pathnameBase : "/",
    d = l && l.route;
  {
    let m = (d && d.path) || "";
    wm(
      c,
      !d || m.endsWith("*") || m.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${
        m === "/" ? "*" : `${m}/*`
      }">.`
    );
  }
  let h = Gt(),
    f;
  if (t) {
    let m = typeof t == "string" ? Gr(t) : t;
    K(
      u === "/" || ((p = m.pathname) == null ? void 0 : p.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`
    ),
      (f = m);
  } else f = h;
  let g = f.pathname || "/",
    x = g;
  if (u !== "/") {
    let m = u.replace(/^\//, "").split("/");
    x = "/" + g.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let w = um(e, { pathname: x });
  Xe(
    d || w != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ),
    Xe(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let S = l0(
    w &&
      w.map((m) =>
        Object.assign({}, m, {
          params: Object.assign({}, o, m.params),
          pathname: ft([
            u,
            i.encodeLocation
              ? i.encodeLocation(m.pathname).pathname
              : m.pathname,
          ]),
          pathnameBase:
            m.pathnameBase === "/"
              ? u
              : ft([
                  u,
                  i.encodeLocation
                    ? i.encodeLocation(m.pathnameBase).pathname
                    : m.pathnameBase,
                ]),
        })
      ),
    a,
    r,
    n
  );
  return t && S
    ? v.createElement(
        Gn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...f,
            },
            navigationType: "POP",
          },
        },
        S
      )
    : S;
}
function n0() {
  let e = m0(),
    t = Yf(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = "rgba(200,200,200, 0.5)",
    i = { padding: "0.5rem", backgroundColor: n },
    a = { padding: "2px 4px", backgroundColor: n },
    l = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (l = v.createElement(
      v.Fragment,
      null,
      v.createElement("p", null, "ðŸ’¿ Hey developer ðŸ‘‹"),
      v.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        v.createElement("code", { style: a }, "ErrorBoundary"),
        " or",
        " ",
        v.createElement("code", { style: a }, "errorElement"),
        " prop on your route."
      )
    )),
    v.createElement(
      v.Fragment,
      null,
      v.createElement("h2", null, "Unexpected Application Error!"),
      v.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? v.createElement("pre", { style: i }, r) : null,
      l
    )
  );
}
var s0 = v.createElement(n0, null),
  i0 = class extends v.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? v.createElement(
            ot.Provider,
            { value: this.props.routeContext },
            v.createElement(oo.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function a0({ routeContext: e, match: t, children: r }) {
  let n = v.useContext(Br);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    v.createElement(ot.Provider, { value: e }, r)
  );
}
function l0(e, t = [], r = null, n = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r == null ? void 0 : r.errors;
  if (a != null) {
    let c = i.findIndex(
      (u) => u.route.id && (a == null ? void 0 : a[u.route.id]) !== void 0
    );
    K(
      c >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ),
      (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let l = !1,
    o = -1;
  if (r)
    for (let c = 0; c < i.length; c++) {
      let u = i[c];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (o = c),
        u.route.id)
      ) {
        let { loaderData: d, errors: h } = r,
          f =
            u.route.loader &&
            !d.hasOwnProperty(u.route.id) &&
            (!h || h[u.route.id] === void 0);
        if (u.route.lazy || f) {
          (l = !0), o >= 0 ? (i = i.slice(0, o + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, u, d) => {
    let h,
      f = !1,
      g = null,
      x = null;
    r &&
      ((h = a && u.route.id ? a[u.route.id] : void 0),
      (g = u.route.errorElement || s0),
      l &&
        (o < 0 && d === 0
          ? (wm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (f = !0),
            (x = null))
          : o === d &&
            ((f = !0), (x = u.route.hydrateFallbackElement || null))));
    let w = t.concat(i.slice(0, d + 1)),
      S = () => {
        let p;
        return (
          h
            ? (p = g)
            : f
            ? (p = x)
            : u.route.Component
            ? (p = v.createElement(u.route.Component, null))
            : u.route.element
            ? (p = u.route.element)
            : (p = c),
          v.createElement(a0, {
            match: u,
            routeContext: { outlet: c, matches: w, isDataRoute: r != null },
            children: p,
          })
        );
      };
    return r && (u.route.ErrorBoundary || u.route.errorElement || d === 0)
      ? v.createElement(i0, {
          location: r.location,
          revalidation: r.revalidation,
          component: g,
          error: h,
          children: S(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : S();
  }, null);
}
function co(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function o0(e) {
  let t = v.useContext(Br);
  return K(t, co(e)), t;
}
function c0(e) {
  let t = v.useContext(ji);
  return K(t, co(e)), t;
}
function u0(e) {
  let t = v.useContext(ot);
  return K(t, co(e)), t;
}
function uo(e) {
  let t = u0(e),
    r = t.matches[t.matches.length - 1];
  return (
    K(r.route.id, `${e} can only be used on routes that contain a unique "id"`),
    r.route.id
  );
}
function d0() {
  return uo("useRouteId");
}
function m0() {
  var n;
  let e = v.useContext(oo),
    t = c0("useRouteError"),
    r = uo("useRouteError");
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function p0() {
  let { router: e } = o0("useNavigate"),
    t = uo("useNavigate"),
    r = v.useRef(!1);
  return (
    ym(() => {
      r.current = !0;
    }),
    v.useCallback(
      async (i, a = {}) => {
        Xe(r.current, xm),
          r.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : await e.navigate(i, { fromRouteId: t, ...a }));
      },
      [e, t]
    )
  );
}
var Dc = {};
function wm(e, t, r) {
  !t && !Dc[e] && ((Dc[e] = !0), Xe(!1, r));
}
v.memo(h0);
function h0({ routes: e, future: t, state: r }) {
  return vm(e, void 0, r, t);
}
function te(e) {
  K(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function f0({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: n = "POP",
  navigator: i,
  static: a = !1,
}) {
  K(
    !Bn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let l = e.replace(/^\/*/, "/"),
    o = v.useMemo(
      () => ({ basename: l, navigator: i, static: a, future: {} }),
      [l, i, a]
    );
  typeof r == "string" && (r = Gr(r));
  let {
      pathname: c = "/",
      search: u = "",
      hash: d = "",
      state: h = null,
      key: f = "default",
    } = r,
    g = v.useMemo(() => {
      let x = wt(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: u, hash: d, state: h, key: f },
            navigationType: n,
          };
    }, [l, c, u, d, h, f, n]);
  return (
    Xe(
      g != null,
      `<Router basename="${l}"> is not able to match the URL "${c}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    g == null
      ? null
      : v.createElement(
          lt.Provider,
          { value: o },
          v.createElement(Gn.Provider, { children: t, value: g })
        )
  );
}
function g0({ children: e, location: t }) {
  return r0(nl(e), t);
}
function nl(e, t = []) {
  let r = [];
  return (
    v.Children.forEach(e, (n, i) => {
      if (!v.isValidElement(n)) return;
      let a = [...t, i];
      if (n.type === v.Fragment) {
        r.push.apply(r, nl(n.props.children, a));
        return;
      }
      K(
        n.type === te,
        `[${
          typeof n.type == "string" ? n.type : n.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        K(
          !n.props.index || !n.props.children,
          "An index route cannot have child routes."
        );
      let l = {
        id: n.props.id || a.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        hydrateFallbackElement: n.props.hydrateFallbackElement,
        HydrateFallback: n.props.HydrateFallback,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.hasErrorBoundary === !0 ||
          n.props.ErrorBoundary != null ||
          n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (l.children = nl(n.props.children, a)), r.push(l);
    }),
    r
  );
}
var Ps = "get",
  Cs = "application/x-www-form-urlencoded";
function Si(e) {
  return e != null && typeof e.tagName == "string";
}
function x0(e) {
  return Si(e) && e.tagName.toLowerCase() === "button";
}
function y0(e) {
  return Si(e) && e.tagName.toLowerCase() === "form";
}
function v0(e) {
  return Si(e) && e.tagName.toLowerCase() === "input";
}
function w0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function b0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !w0(e);
}
function sl(e = "") {
  return new URLSearchParams(
    typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((i) => [r, i]) : [[r, n]]);
        }, [])
  );
}
function j0(e, t) {
  let r = sl(e);
  return (
    t &&
      t.forEach((n, i) => {
        r.has(i) ||
          t.getAll(i).forEach((a) => {
            r.append(i, a);
          });
      }),
    r
  );
}
var ms = null;
function S0() {
  if (ms === null)
    try {
      new FormData(document.createElement("form"), 0), (ms = !1);
    } catch {
      ms = !0;
    }
  return ms;
}
var N0 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function na(e) {
  return e != null && !N0.has(e)
    ? (Xe(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cs}"`
      ),
      null)
    : e;
}
function k0(e, t) {
  let r, n, i, a, l;
  if (y0(e)) {
    let o = e.getAttribute("action");
    (n = o ? wt(o, t) : null),
      (r = e.getAttribute("method") || Ps),
      (i = na(e.getAttribute("enctype")) || Cs),
      (a = new FormData(e));
  } else if (x0(e) || (v0(e) && (e.type === "submit" || e.type === "image"))) {
    let o = e.form;
    if (o == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let c = e.getAttribute("formaction") || o.getAttribute("action");
    if (
      ((n = c ? wt(c, t) : null),
      (r = e.getAttribute("formmethod") || o.getAttribute("method") || Ps),
      (i =
        na(e.getAttribute("formenctype")) ||
        na(o.getAttribute("enctype")) ||
        Cs),
      (a = new FormData(o, e)),
      !S0())
    ) {
      let { name: u, type: d, value: h } = e;
      if (d === "image") {
        let f = u ? `${u}.` : "";
        a.append(`${f}x`, "0"), a.append(`${f}y`, "0");
      } else u && a.append(u, h);
    }
  } else {
    if (Si(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Ps), (n = null), (i = Cs), (l = e);
  }
  return (
    a && i === "text/plain" && ((l = a), (a = void 0)),
    { action: n, method: r.toLowerCase(), encType: i, formData: a, body: l }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function mo(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function P0(e, t, r) {
  let n =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    n.pathname === "/"
      ? (n.pathname = `_root.${r}`)
      : t && wt(n.pathname, t) === "/"
      ? (n.pathname = `${t.replace(/\/$/, "")}/_root.${r}`)
      : (n.pathname = `${n.pathname.replace(/\/$/, "")}.${r}`),
    n
  );
}
async function C0(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function E0(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function T0(e, t, r) {
  let n = await Promise.all(
    e.map(async (i) => {
      let a = t.routes[i.route.id];
      if (a) {
        let l = await C0(a, r);
        return l.links ? l.links() : [];
      }
      return [];
    })
  );
  return I0(
    n
      .flat(1)
      .filter(E0)
      .filter((i) => i.rel === "stylesheet" || i.rel === "preload")
      .map((i) =>
        i.rel === "stylesheet"
          ? { ...i, rel: "prefetch", as: "style" }
          : { ...i, rel: "prefetch" }
      )
  );
}
function Ic(e, t, r, n, i, a) {
  let l = (c, u) => (r[u] ? c.route.id !== r[u].route.id : !0),
    o = (c, u) => {
      var d;
      return (
        r[u].pathname !== c.pathname ||
        (((d = r[u].route.path) == null ? void 0 : d.endsWith("*")) &&
          r[u].params["*"] !== c.params["*"])
      );
    };
  return a === "assets"
    ? t.filter((c, u) => l(c, u) || o(c, u))
    : a === "data"
    ? t.filter((c, u) => {
        var h;
        let d = n.routes[c.route.id];
        if (!d || !d.hasLoader) return !1;
        if (l(c, u) || o(c, u)) return !0;
        if (c.route.shouldRevalidate) {
          let f = c.route.shouldRevalidate({
            currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
            currentParams: ((h = r[0]) == null ? void 0 : h.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: c.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof f == "boolean") return f;
        }
        return !0;
      })
    : [];
}
function M0(e, t, { includeHydrateFallback: r } = {}) {
  return R0(
    e
      .map((n) => {
        let i = t.routes[n.route.id];
        if (!i) return [];
        let a = [i.module];
        return (
          i.clientActionModule && (a = a.concat(i.clientActionModule)),
          i.clientLoaderModule && (a = a.concat(i.clientLoaderModule)),
          r &&
            i.hydrateFallbackModule &&
            (a = a.concat(i.hydrateFallbackModule)),
          i.imports && (a = a.concat(i.imports)),
          a
        );
      })
      .flat(1)
  );
}
function R0(e) {
  return [...new Set(e)];
}
function D0(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function I0(e, t) {
  let r = new Set();
  return (
    new Set(t),
    e.reduce((n, i) => {
      let a = JSON.stringify(D0(i));
      return r.has(a) || (r.add(a), n.push({ key: a, link: i })), n;
    }, [])
  );
}
function bm() {
  let e = v.useContext(Br);
  return (
    mo(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function F0() {
  let e = v.useContext(ji);
  return (
    mo(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var po = v.createContext(void 0);
po.displayName = "FrameworkContext";
function jm() {
  let e = v.useContext(po);
  return (
    mo(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function H0(e, t) {
  let r = v.useContext(po),
    [n, i] = v.useState(!1),
    [a, l] = v.useState(!1),
    {
      onFocus: o,
      onBlur: c,
      onMouseEnter: u,
      onMouseLeave: d,
      onTouchStart: h,
    } = t,
    f = v.useRef(null);
  v.useEffect(() => {
    if ((e === "render" && l(!0), e === "viewport")) {
      let w = (p) => {
          p.forEach((m) => {
            l(m.isIntersecting);
          });
        },
        S = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        f.current && S.observe(f.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]),
    v.useEffect(() => {
      if (n) {
        let w = setTimeout(() => {
          l(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [n]);
  let g = () => {
      i(!0);
    },
    x = () => {
      i(!1), l(!1);
    };
  return r
    ? e !== "intent"
      ? [a, f, {}]
      : [
          a,
          f,
          {
            onFocus: en(o, g),
            onBlur: en(c, x),
            onMouseEnter: en(u, g),
            onMouseLeave: en(d, x),
            onTouchStart: en(h, g),
          },
        ]
    : [!1, f, {}];
}
function en(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function q0({ page: e, ...t }) {
  let { router: r } = bm(),
    n = v.useMemo(() => um(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? v.createElement(J0, { page: e, matches: n, ...t }) : null;
}
function L0(e) {
  let { manifest: t, routeModules: r } = jm(),
    [n, i] = v.useState([]);
  return (
    v.useEffect(() => {
      let a = !1;
      return (
        T0(e, t, r).then((l) => {
          a || i(l);
        }),
        () => {
          a = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function J0({ page: e, matches: t, ...r }) {
  let n = Gt(),
    { manifest: i, routeModules: a } = jm(),
    { basename: l } = bm(),
    { loaderData: o, matches: c } = F0(),
    u = v.useMemo(() => Ic(e, t, c, i, n, "data"), [e, t, c, i, n]),
    d = v.useMemo(() => Ic(e, t, c, i, n, "assets"), [e, t, c, i, n]),
    h = v.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let x = new Set(),
        w = !1;
      if (
        (t.forEach((p) => {
          var y;
          let m = i.routes[p.route.id];
          !m ||
            !m.hasLoader ||
            ((!u.some((b) => b.route.id === p.route.id) &&
              p.route.id in o &&
              (y = a[p.route.id]) != null &&
              y.shouldRevalidate) ||
            m.hasClientLoader
              ? (w = !0)
              : x.add(p.route.id));
        }),
        x.size === 0)
      )
        return [];
      let S = P0(e, l, "data");
      return (
        w &&
          x.size > 0 &&
          S.searchParams.set(
            "_routes",
            t
              .filter((p) => x.has(p.route.id))
              .map((p) => p.route.id)
              .join(",")
          ),
        [S.pathname + S.search]
      );
    }, [l, o, n, i, u, t, e, a]),
    f = v.useMemo(() => M0(d, i), [d, i]),
    g = L0(d);
  return v.createElement(
    v.Fragment,
    null,
    h.map((x) =>
      v.createElement("link", {
        key: x,
        rel: "prefetch",
        as: "fetch",
        href: x,
        ...r,
      })
    ),
    f.map((x) =>
      v.createElement("link", { key: x, rel: "modulepreload", href: x, ...r })
    ),
    g.map(({ key: x, link: w }) => v.createElement("link", { key: x, ...w }))
  );
}
function A0(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Sm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Sm && (window.__reactRouterVersion = "7.7.1");
} catch {}
function z0({ basename: e, children: t, window: r }) {
  let n = v.useRef();
  n.current == null && (n.current = Pf({ window: r, v5Compat: !0 }));
  let i = n.current,
    [a, l] = v.useState({ action: i.action, location: i.location }),
    o = v.useCallback(
      (c) => {
        v.startTransition(() => l(c));
      },
      [l]
    );
  return (
    v.useLayoutEffect(() => i.listen(o), [i, o]),
    v.createElement(f0, {
      basename: e,
      children: t,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
var Nm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  F = v.forwardRef(function (
    {
      onClick: t,
      discover: r = "render",
      prefetch: n = "none",
      relative: i,
      reloadDocument: a,
      replace: l,
      state: o,
      target: c,
      to: u,
      preventScrollReset: d,
      viewTransition: h,
      ...f
    },
    g
  ) {
    let { basename: x } = v.useContext(lt),
      w = typeof u == "string" && Nm.test(u),
      S,
      p = !1;
    if (typeof u == "string" && w && ((S = u), Sm))
      try {
        let R = new URL(window.location.href),
          D = u.startsWith("//") ? new URL(R.protocol + u) : new URL(u),
          A = wt(D.pathname, x);
        D.origin === R.origin && A != null
          ? (u = A + D.search + D.hash)
          : (p = !0);
      } catch {
        Xe(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let m = $f(u, { relative: i }),
      [y, b, j] = H0(n, f),
      N = B0(u, {
        replace: l,
        state: o,
        target: c,
        preventScrollReset: d,
        relative: i,
        viewTransition: h,
      });
    function P(R) {
      t && t(R), R.defaultPrevented || N(R);
    }
    let T = v.createElement("a", {
      ...f,
      ...j,
      href: S || m,
      onClick: p || a ? t : P,
      ref: A0(g, b),
      target: c,
      "data-discover": !w && r === "render" ? "true" : void 0,
    });
    return y && !w
      ? v.createElement(v.Fragment, null, T, v.createElement(q0, { page: m }))
      : T;
  });
F.displayName = "Link";
var O0 = v.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: i = !1,
    style: a,
    to: l,
    viewTransition: o,
    children: c,
    ...u
  },
  d
) {
  let h = Wn(l, { relative: u.relative }),
    f = Gt(),
    g = v.useContext(ji),
    { navigator: x, basename: w } = v.useContext(lt),
    S = g != null && K0(h) && o === !0,
    p = x.encodeLocation ? x.encodeLocation(h).pathname : h.pathname,
    m = f.pathname,
    y =
      g && g.navigation && g.navigation.location
        ? g.navigation.location.pathname
        : null;
  r ||
    ((m = m.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (p = p.toLowerCase())),
    y && w && (y = wt(y, w) || y);
  const b = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let j = m === p || (!i && m.startsWith(p) && m.charAt(b) === "/"),
    N =
      y != null &&
      (y === p || (!i && y.startsWith(p) && y.charAt(p.length) === "/")),
    P = { isActive: j, isPending: N, isTransitioning: S },
    T = j ? t : void 0,
    R;
  typeof n == "function"
    ? (R = n(P))
    : (R = [
        n,
        j ? "active" : null,
        N ? "pending" : null,
        S ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let D = typeof a == "function" ? a(P) : a;
  return v.createElement(
    F,
    {
      ...u,
      "aria-current": T,
      className: R,
      ref: d,
      style: D,
      to: l,
      viewTransition: o,
    },
    typeof c == "function" ? c(P) : c
  );
});
O0.displayName = "NavLink";
var V0 = v.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: n,
      replace: i,
      state: a,
      method: l = Ps,
      action: o,
      onSubmit: c,
      relative: u,
      preventScrollReset: d,
      viewTransition: h,
      ...f
    },
    g
  ) => {
    let x = Q0(),
      w = Y0(o, { relative: u }),
      S = l.toLowerCase() === "get" ? "get" : "post",
      p = typeof o == "string" && Nm.test(o),
      m = (y) => {
        if ((c && c(y), y.defaultPrevented)) return;
        y.preventDefault();
        let b = y.nativeEvent.submitter,
          j = (b == null ? void 0 : b.getAttribute("formmethod")) || l;
        x(b || y.currentTarget, {
          fetcherKey: t,
          method: j,
          navigate: r,
          replace: i,
          state: a,
          relative: u,
          preventScrollReset: d,
          viewTransition: h,
        });
      };
    return v.createElement("form", {
      ref: g,
      method: S,
      action: w,
      onSubmit: n ? c : m,
      ...f,
      "data-discover": !p && e === "render" ? "true" : void 0,
    });
  }
);
V0.displayName = "Form";
function G0(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function km(e) {
  let t = v.useContext(Br);
  return K(t, G0(e)), t;
}
function B0(
  e,
  {
    target: t,
    replace: r,
    state: n,
    preventScrollReset: i,
    relative: a,
    viewTransition: l,
  } = {}
) {
  let o = lr(),
    c = Gt(),
    u = Wn(e, { relative: a });
  return v.useCallback(
    (d) => {
      if (b0(d, t)) {
        d.preventDefault();
        let h = r !== void 0 ? r : Hn(c) === Hn(u);
        o(e, {
          replace: h,
          state: n,
          preventScrollReset: i,
          relative: a,
          viewTransition: l,
        });
      }
    },
    [c, o, u, r, n, t, e, i, a, l]
  );
}
function W0(e) {
  Xe(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let t = v.useRef(sl(e)),
    r = v.useRef(!1),
    n = Gt(),
    i = v.useMemo(() => j0(n.search, r.current ? null : t.current), [n.search]),
    a = lr(),
    l = v.useCallback(
      (o, c) => {
        const u = sl(typeof o == "function" ? o(new URLSearchParams(i)) : o);
        (r.current = !0), a("?" + u, c);
      },
      [a, i]
    );
  return [i, l];
}
var Z0 = 0,
  U0 = () => `__${String(++Z0)}__`;
function Q0() {
  let { router: e } = km("useSubmit"),
    { basename: t } = v.useContext(lt),
    r = d0();
  return v.useCallback(
    async (n, i = {}) => {
      let { action: a, method: l, encType: o, formData: c, body: u } = k0(n, t);
      if (i.navigate === !1) {
        let d = i.fetcherKey || U0();
        await e.fetch(d, r, i.action || a, {
          preventScrollReset: i.preventScrollReset,
          formData: c,
          body: u,
          formMethod: i.method || l,
          formEncType: i.encType || o,
          flushSync: i.flushSync,
        });
      } else
        await e.navigate(i.action || a, {
          preventScrollReset: i.preventScrollReset,
          formData: c,
          body: u,
          formMethod: i.method || l,
          formEncType: i.encType || o,
          replace: i.replace,
          state: i.state,
          fromRouteId: r,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [e, t, r]
  );
}
function Y0(e, { relative: t } = {}) {
  let { basename: r } = v.useContext(lt),
    n = v.useContext(ot);
  K(n, "useFormAction must be used inside a RouteContext");
  let [i] = n.matches.slice(-1),
    a = { ...Wn(e || ".", { relative: t }) },
    l = Gt();
  if (e == null) {
    a.search = l.search;
    let o = new URLSearchParams(a.search),
      c = o.getAll("index");
    if (c.some((d) => d === "")) {
      o.delete("index"),
        c.filter((h) => h).forEach((h) => o.append("index", h));
      let d = o.toString();
      a.search = d ? `?${d}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (a.pathname = a.pathname === "/" ? r : ft([r, a.pathname])),
    Hn(a)
  );
}
function K0(e, { relative: t } = {}) {
  let r = v.useContext(gm);
  K(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = km("useViewTransitionState"),
    i = Wn(e, { relative: t });
  if (!r.isTransitioning) return !1;
  let a = wt(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    l = wt(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return ei(i.pathname, l) != null || ei(i.pathname, a) != null;
}
const Pm = v.createContext(null),
  X0 = (e, t) => {
    switch (t.type) {
      case "ADD_ITEM": {
        const r = e.items.find((a) => a.id === t.payload.id);
        let n;
        r
          ? (n = e.items.map((a) =>
              a.id === t.payload.id ? { ...a, quantity: a.quantity + 1 } : a
            ))
          : (n = [...e.items, { ...t.payload, quantity: 1 }]);
        const i = n.reduce((a, l) => a + l.price * l.quantity, 0);
        return { items: n, total: i };
      }
      case "REMOVE_ITEM": {
        const r = e.items.filter((i) => i.id !== t.payload),
          n = r.reduce((i, a) => i + a.price * a.quantity, 0);
        return { items: r, total: n };
      }
      case "UPDATE_QUANTITY": {
        const r = e.items
            .map((i) =>
              i.id === t.payload.id
                ? { ...i, quantity: Math.max(0, t.payload.quantity) }
                : i
            )
            .filter((i) => i.quantity > 0),
          n = r.reduce((i, a) => i + a.price * a.quantity, 0);
        return { items: r, total: n };
      }
      case "CLEAR_CART":
        return { items: [], total: 0 };
      case "LOAD_CART": {
        const r = t.payload.reduce((n, i) => n + i.price * i.quantity, 0);
        return { items: t.payload, total: r };
      }
      default:
        return e;
    }
  },
  _0 = ({ children: e }) => {
    const [t, r] = v.useReducer(X0, { items: [], total: 0 });
    return (
      v.useEffect(() => {
        const n = localStorage.getItem("cart");
        n && r({ type: "LOAD_CART", payload: JSON.parse(n) });
      }, []),
      v.useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(t.items));
      }, [t.items]),
      s.jsx(Pm.Provider, { value: { state: t, dispatch: r }, children: e })
    );
  },
  Wr = () => {
    const e = v.useContext(Pm);
    if (!e) throw new Error("useCart must be used within a CartProvider");
    return e;
  },
  Cm = v.createContext(null),
  $0 = ({ children: e }) => {
    const [t, r] = v.useState(null),
      [n, i] = v.useState(!0);
    v.useEffect(() => {
      const c = localStorage.getItem("user");
      c && r(JSON.parse(c)), i(!1);
    }, []);
    const a = async (c, u) => {
        if (c === "admin@itshop.com" && u === "admin123") {
          const d = {
            id: "1",
            email: "admin@itshop.com",
            name: "Admin User",
            role: "admin",
          };
          return r(d), localStorage.setItem("user", JSON.stringify(d)), !0;
        } else if (c && u) {
          const d = { id: "2", email: c, name: c.split("@")[0], role: "user" };
          return r(d), localStorage.setItem("user", JSON.stringify(d)), !0;
        }
        return !1;
      },
      l = async (c, u, d) => {
        if (c && u && d) {
          const h = {
            id: Date.now().toString(),
            email: c,
            name: d,
            role: "user",
          };
          return r(h), localStorage.setItem("user", JSON.stringify(h)), !0;
        }
        return !1;
      },
      o = () => {
        r(null), localStorage.removeItem("user");
      };
    return s.jsx(Cm.Provider, {
      value: { user: t, login: a, register: l, logout: o, loading: n },
      children: e,
    });
  },
  Zn = () => {
    const e = v.useContext(Cm);
    if (!e) throw new Error("useAuth must be used within an AuthProvider");
    return e;
  },
  Em = v.createContext(null),
  eg = ({ children: e }) => {
    const [t, r] = v.useState([]);
    v.useEffect(() => {
      const l = localStorage.getItem("wishlist");
      l && r(JSON.parse(l));
    }, []),
      v.useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(t));
      }, [t]);
    const n = (l) => {
        r((o) => (o.find((c) => c.id === l.id) ? o : [...o, l]));
      },
      i = (l) => {
        r((o) => o.filter((c) => c.id !== l));
      },
      a = (l) => t.some((o) => o.id === l);
    return s.jsx(Em.Provider, {
      value: {
        items: t,
        addToWishlist: n,
        removeFromWishlist: i,
        isInWishlist: a,
      },
      children: e,
    });
  },
  Ni = () => {
    const e = v.useContext(Em);
    if (!e)
      throw new Error("useWishlist must be used within a WishlistProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var tg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rg = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  q = (e, t) => {
    const r = v.forwardRef(
      (
        {
          color: n = "currentColor",
          size: i = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: l,
          className: o = "",
          children: c,
          ...u
        },
        d
      ) =>
        v.createElement(
          "svg",
          {
            ref: d,
            ...tg,
            width: i,
            height: i,
            stroke: n,
            strokeWidth: l ? (Number(a) * 24) / Number(i) : a,
            className: ["lucide", `lucide-${rg(e)}`, o].join(" "),
            ...u,
          },
          [
            ...t.map(([h, f]) => v.createElement(h, f)),
            ...(Array.isArray(c) ? c : [c]),
          ]
        )
    );
    return (r.displayName = `${e}`), r;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fc = q("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jr = q("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const il = q("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = q("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = q("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ig = q("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ti = q("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = q("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lg = q("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hc = q("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const og = q("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cg = q("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ug = q("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = q("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4",
    },
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej",
    },
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ri = q("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = q("Filter", [
  [
    "polygon",
    { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dg = q("Grid3x3", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mg = q("Hammer", [
  ["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a" }],
  ["path", { d: "m18 15 4-4", key: "16gjal" }],
  [
    "path",
    {
      d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
      key: "b7pghm",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = q("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ki = q("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hg = q("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = q("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qn = q("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pi = q("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = q("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = q("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yg = q("MonitorSpeaker", [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  [
    "rect",
    { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" },
  ],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vg = q("Network", [
  [
    "rect",
    { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" },
  ],
  [
    "rect",
    { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" },
  ],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wg = q("Package", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay",
    },
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ho = q("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = q("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ni = q("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bg = q("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sa = q("Server", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jg = q("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qc = q("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sg = q("ShoppingBag", [
  [
    "path",
    { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" },
  ],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ci = q("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lc = q("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fo = q("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const go = q("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dm = q("Truck", [
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i",
    },
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Im = q("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ln = q("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ng = q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kg = q("Zap", [
    [
      "polygon",
      { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" },
    ],
  ]),
  xo = "/assets/SERVER-DIRECT-4%20(1)-BX7mZNF4.jpg",
  Pg = () => {
    const [e, t] = v.useState(!1),
      [r, n] = v.useState(!1),
      [i, a] = v.useState(""),
      { state: l } = Wr(),
      { items: o } = Ni(),
      { user: c, logout: u } = Zn(),
      d = lr(),
      h = [
        { name: "Servers", href: "/products?category=servers" },
        { name: "Storage", href: "/products?category=storage" },
        { name: "Networking", href: "/products?category=networking" },
        { name: "Memory", href: "/products?category=memory" },
        { name: "Processors", href: "/products?category=processors" },
        { name: "Desktops", href: "/products?category=desktops" },
      ],
      f = (x) => {
        x.preventDefault(),
          i.trim() &&
            (d(`/products?search=${encodeURIComponent(i.trim())}`), a(""));
      },
      g = () => {
        u(), d("/");
      };
    return s.jsxs("header", {
      className: "bg-white shadow-lg sticky top-0 z-50",
      children: [
        
        s.jsx("div", {
          className: "max-w-7xl mx-auto px-4 bg-white sm:px-6 lg:px-8",
          children: s.jsxs("div", {
            className: "flex justify-between  items-center py-2",
            children: [
              s.jsx(F, {
                to: "/",
                className: "flex items-center space-x-2",
                children: s.jsx("div", {
                  className:
                    "w-90 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white",
                  children: s.jsx("img", {
                    src: xo,
                    alt: "Computer Direct IT Logo",
                    className: "h-12",
                  }),
                }),
              }),
              s.jsx("div", {
                className: "hidden md:flex flex-1 max-w-2xl mx-8",
                children: s.jsx("form", {
                  onSubmit: f,
                  className: "w-full",
                  children: s.jsxs("div", {
                    className: "relative",
                    children: [
                      s.jsx("input", {
                        type: "text",
                        value: i,
                        onChange: (x) => a(x.target.value),
                        placeholder:
                          "Search for servers, storage, networking...",
                        className: "w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        className:
                          "absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 transition-colors",
                        children: s.jsx(ni, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
                }),
              }),
              s.jsx("div", {
  className: "flex items-center space-x-4",
  children: s.jsx("button", {
    onClick: () => t(!e),
    className:
      "md:hidden text-slate-700 hover:text-blue-600 transition-colors",
    children: e
      ? s.jsx(Ng, { className: "w-6 h-6" })
      : s.jsx(gg, { className: "w-6 h-6" }),
  }),
}),
            ],
          }),
        }),
        s.jsx("nav", {
          className: "bg-[#f2a92a] border-t border-gray-200",
          children: s.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: s.jsxs("div", {
              className:
                "hidden md:flex items-center text-white justify-between py-2",
              children: [
                s.jsxs("div", {
                  className: "flex space-x-8",
                  children: [
                    s.jsx(F, {
                      to: "/products",
                      className: "font-medium hover:text-[#122853]",
                      children: "All Products",
                    }),
                    h.map((x) =>
                      s.jsx(
                        F,
                        {
                          to: x.href,
                          className: "font-medium hover:text-[#122853]",
                          children: x.name,
                        },
                        x.name
                      )
                    ),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex items-center space-x-4 text-sm text-white",
                  children: [
                    s.jsxs("span", {
                      className: "flex items-center space-x-1",
                      children: [
                        s.jsx("span", { children: "New arrivals weekly" }),
                      ],
                    }),
                    s.jsx("span", { children: "|" }),
                    s.jsx("span", { children: "Bulk pricing available" }),
                  ],
                }),
              ],
            }),
          }),
        }),
        e &&
          s.jsx("div", {
            className: "md:hidden bg-white border-t border-gray-200",
            children: s.jsxs("div", {
              className: "px-4 py-6 space-y-4",
              children: [
                s.jsx("form", {
                  onSubmit: f,
                  children: s.jsxs("div", {
                    className: "relative",
                    children: [
                      s.jsx("input", {
                        type: "text",
                        value: i,
                        onChange: (x) => a(x.target.value),
                        placeholder: "Search products...",
                        className: "w-full pl-4 pr-12 py-3 border rounded-full focus:ring-2 focus:ring-blue-500",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        className:
                          "absolute right-2 top-1/2 transform -translate-y-1/2",
                        children: s.jsx(ni, {
                          className: "w-5 h-5 text-gray-500",
                        }),
                      }),
                    ],
                  }),
                }),
                s.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    s.jsx(F, {
                      to: "/products",
                      onClick: () => t(!1),
                      className: "block py-2 font-medium hover:text-blue-600",
                      children: "All Products",
                    }),
                    h.map((x) =>
                      s.jsx(
                        F,
                        {
                          to: x.href,
                          onClick: () => t(!1),
                          className: "block py-2 hover:text-blue-600",
                          children: x.name,
                        },
                        x.name
                      )
                    ),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Cg =
    "/assets/assets_task_01k45rwgste0wav8hr8rw27p6e_1756835637_img_1-BaY10UgY.png",
  Eg = "/assets/payment_icons%20(4)-D1W2rS-l.webp",
  Tg = () =>
    s.jsx("footer", {
      className: "bg-[#193154] text-black border-t",
      children: s.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-black",
        children: [
          s.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: [
              s.jsxs("div", {
                className: "space-y-4",
                children: [
                  s.jsx("div", {
                    className: "flex items-center space-x-2",
                    children: s.jsx(F, {
                      to: "/",
                      className: "text-xl font-bold",
                      children: s.jsx("img", {
                        src: Cg,
                        alt: "Computer Direct Logo",
                        className: "h-12 w-90",
                      }),
                    }),
                  }),
                  s.jsx("p", {
                    className: "text-white text-sm leading-relaxed",
                    children:
                      "Your enterprise IT hardware partner for dependable new and refurbished equipment, backed by experienced technical support.",
                  }),
                  s.jsxs("div", {
                    className: "flex space-x-4 text-xl",
                    
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "space-y-4",
                children: [
                  s.jsx("h3", {
                    className: "text-lg text-[#f2a92a] font-semibold",
                    children: "Products",
                  }),
                  s.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/products?category=servers",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Servers",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/products?category=storage",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Storage Solutions",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/products?category=networking",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Networking Equipment",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/products?category=memory",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Memory & RAM",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/products?category=processors",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Processors",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/products?category=graphics",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Graphics Cards",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "space-y-4",
                children: [
                  s.jsx("h3", {
                    className: "text-lg text-[#f2a92a] font-semibold",
                    children: "Support",
                  }),
                  s.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/warranty",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Warranty",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/returns",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Returns & Exchanges",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/shipping",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Shipping Info",
                        }),
                      }),

                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/privacy",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Privacy Policy",
                        }),
                      }),
                      
                      s.jsx("li", {
                        children: s.jsx(F, {
                          to: "/terms",
                          className:
                            "text-white hover:text-[#f2a92a] transition-colors text-sm",
                          children: "Terms & Condition",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "space-y-4",
                children: [
                  s.jsx("h3", {
                    className: "text-lg text-[#f2a92a] font-semibold",
                    children: "Contact",
                  }),
                  s.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          s.jsx(ho, { className: "w-4 h-4 text-white" }),
                          s.jsx("span", {
                            className: "text-white text-sm",
                            children: "+1 737 210 4824",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          s.jsx(Pi, { className: "w-4 h-4 text-white" }),
                          s.jsx("span", {
                            className: "text-white text-sm",
                            children: "support@gtrsupply.com",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center",
            children: [
              s.jsxs("div", {
                className:
                  "flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6",
                children: [
                  s.jsx("p", {
                    className: "text-white text-sm",
                    children: "© 2026, GTR Supply. All rights reserved.",
                  }),
                  
                
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Mg = () => (
    v.useEffect(() => {
      const e = document.createElement("script");
      (e.src = "https://cdn.tailwindcss.com"), document.head.appendChild(e);
      const t = document.createElement("script");
      return (
        (t.innerHTML = `
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '#092b50'
            },
            backgroundImage: {
              'hex-pattern': "url('https://www.servermonkey.com/media/wysiwyg/breacrumb-bg.png')"
            }
          }
        }
      }
    `),
        document.head.appendChild(t),
        () => {
          document.head.removeChild(e), document.head.removeChild(t);
        }
      );
    }, []),
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("section", {
          className:
            "bg-hex-pattern bg-repeat bg-center py-24 px-6 md:px-16 lg:px-28",
          children: s.jsxs("div", {
            className: "max-w-5xl mx-auto text-center",
            children: [
              s.jsxs("h1", {
                className:
                  "text-4xl md:text-5xl font-extrabold text-gray-900 mb-6",
                children: [
                  "Enterprise IT Hardware Solutions by ",
                  s.jsx("span", {
                    className: "text-primary",
                    children: "GTR Supply",
                  }),
                ],
              }),
              s.jsx("p", {
                className: "text-xl text-gray-600 mb-8",
                children:
                  "Powering Business Infrastructure with Premium IT Hardware",
              }),
              s.jsxs("div", {
                className: "flex flex-col sm:flex-row justify-center gap-4",
                children: [
                  s.jsx("button", {
                    className:
                      "bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105",
                    children: "View Products",
                  }),
                  s.jsx("button", {
                    className:
                      "border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105",
                    children: "Request Quote",
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsx("section", {
          className: "bg-white py-16 px-6 md:px-12 lg:px-20",
          children: s.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              s.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  s.jsxs("div", {
                    className:
                      "inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4",
                    children: [
                      s.jsx(sa, { className: "w-5 h-5" }),
                      s.jsx("span", {
                        className: "text-sm font-medium",
                        children: "Our Products",
                      }),
                    ],
                  }),
                  s.jsx("h2", {
                    className:
                      "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                    children: "Complete IT Hardware Solutions",
                  }),
                  s.jsx("p", {
                    className: "text-gray-600 max-w-2xl mx-auto",
                    children:
                      "From enterprise servers to high-performance workstations, we provide the hardware infrastructure your business needs to thrive in today's digital landscape.",
                  }),
                ],
              }),
              s.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: [
                  {
                    title: "Enterprise Servers",
                    desc: "High-performance rack and tower servers designed for mission-critical applications and maximum uptime.",
                    icon: sa,
                    features: [
                      "Dell PowerEdge",
                      "HP ProLiant",
                      "Custom Configurations",
                    ],
                  },
                  {
                    title: "Storage Solutions",
                    desc: "Scalable storage systems including NAS, SAN, and cloud-ready storage for growing businesses.",
                    icon: pg,
                    features: [
                      "Network Storage",
                      "Backup Solutions",
                      "Data Protection",
                    ],
                  },
                  {
                    title: "Network Equipment",
                    desc: "Professional networking hardware including switches, routers, and wireless solutions.",
                    icon: vg,
                    features: [
                      "Cisco Hardware",
                      "Managed Switches",
                      "Enterprise WiFi",
                    ],
                  },
                  {
                    title: "Workstations",
                    desc: "High-performance workstations for CAD, engineering, and professional computing needs.",
                    icon: yg,
                    features: [
                      "CAD Workstations",
                      "Gaming PCs",
                      "Custom Builds",
                    ],
                  },
                ].map((e, t) =>
                  s.jsxs(
                    "div",
                    {
                      className:
                        "bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group",
                      children: [
                        s.jsx("div", {
                          className:
                            "bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",
                          children: s.jsx(e.icon, {
                            className: "w-6 h-6 text-primary",
                          }),
                        }),
                        s.jsx("h3", {
                          className: "font-semibold text-lg text-gray-900 mb-2",
                          children: e.title,
                        }),
                        s.jsx("p", {
                          className: "text-sm text-gray-600 mb-4",
                          children: e.desc,
                        }),
                        s.jsx("ul", {
                          className: "space-y-1 mb-4",
                          children: e.features.map((r, n) =>
                            s.jsxs(
                              "li",
                              {
                                className:
                                  "flex items-center text-xs text-gray-500",
                                children: [
                                  s.jsx(ig, {
                                    className: "w-3 h-3 text-primary mr-2",
                                  }),
                                  r,
                                ],
                              },
                              n
                            )
                          ),
                        }),
                        s.jsxs("button", {
                          className:
                            "text-primary font-medium text-sm flex items-center hover:underline",
                          children: [
                            "View Products ",
                            s.jsx(Jr, { className: "ml-1 w-4 h-4" }),
                          ],
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        }),
        s.jsx("section", {
          className: "bg-gray-50 py-20 px-6 md:px-12 lg:px-24",
          children: s.jsxs("div", {
            className:
              "max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12",
            children: [
              s.jsxs("div", {
                className: "flex-1",
                children: [
                  s.jsxs("div", {
                    className:
                      "inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6",
                    children: [
                      s.jsx(il, { className: "w-5 h-5" }),
                      s.jsx("span", {
                        className: "text-sm font-medium",
                        children: "Featured Solution",
                      }),
                    ],
                  }),
                  s.jsxs("h2", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: [
                      "Enterprise-Grade ",
                      s.jsx("span", {
                        className: "text-primary",
                        children: "Server Solutions",
                      }),
                    ],
                  }),
                  s.jsx("p", {
                    className: "text-lg text-gray-600 mb-6",
                    children:
                      "Our flagship server lineup delivers unmatched performance, reliability, and scalability for businesses of all sizes. Built with enterprise-grade components and backed by comprehensive support.",
                  }),
                  s.jsxs("div", {
                    className: "grid grid-cols-2 gap-6 mb-8",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          s.jsx(qc, { className: "w-6 h-6 text-primary" }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("p", {
                                className: "font-semibold text-gray-900",
                                children: "99.9% Uptime",
                              }),
                              s.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "Guaranteed reliability",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          s.jsx(kg, { className: "w-6 h-6 text-primary" }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("p", {
                                className: "font-semibold text-gray-900",
                                children: "24/7 Support",
                              }),
                              s.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "Expert technical assistance",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    className:
                      "bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105",
                    children: "Configure Your Server",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  s.jsx("div", {
                    className:
                      "rounded-3xl bg-white overflow-hidden shadow-2xl",
                    children: s.jsx("img", {
                      src: "https://mindtech.ae/wp-content/uploads/asus-tuf-gt502-horizon-pre-build-gaming-pc.webp",
                      alt: "Enterprise Server Rack",
                      className: "w-full h-96 object-contain",
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "absolute -bottom-4 -left-4 bg-white shadow-xl rounded-xl px-6 py-4",
                    children: s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx("div", {
                          className:
                            "w-3 h-3 bg-green-500 rounded-full animate-pulse",
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("p", {
                              className: "font-semibold text-gray-900",
                              children: "System Online",
                            }),
                            s.jsx("p", {
                              className: "text-xs text-gray-500",
                              children: "Performance: Optimal",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsx("section", {
          className: "bg-white py-20 px-6 md:px-12 lg:px-24",
          children: s.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              s.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  s.jsx("h2", {
                    className: "text-3xl font-bold text-gray-900 mb-4",
                    children: "Why Choose GTR Supply?",
                  }),
                  s.jsx("p", {
                    className: "text-gray-600 max-w-2xl mx-auto",
                    children:
                      "We've been powering businesses with reliable IT hardware solutions for over two decades.",
                  }),
                ],
              }),
              s.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
                children: [
                  {
                    title: "Enterprise Quality",
                    desc: "Only premium, enterprise-grade hardware from trusted manufacturers like Dell, HP, and Cisco.",
                    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                  {
                    title: "Custom Configurations",
                    desc: "Tailored solutions to meet your specific business requirements and performance needs.",
                    iconPath:
                      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                  },
                  {
                    title: "Expert Support",
                    desc: "Dedicated technical support team with deep expertise in enterprise IT infrastructure.",
                    iconPath:
                      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  },
                ].map((e, t) =>
                  s.jsxs(
                    "div",
                    {
                      className: "text-center group",
                      children: [
                        s.jsx("div", {
                          className:
                            "bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors",
                          children: s.jsx("svg", {
                            className: "w-8 h-8 text-primary",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            viewBox: "0 0 24 24",
                            children: s.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: e.iconPath,
                            }),
                          }),
                        }),
                        s.jsx("h3", {
                          className: "font-semibold text-lg text-gray-900 mb-2",
                          children: e.title,
                        }),
                        s.jsx("p", {
                          className: "text-gray-600",
                          children: e.desc,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
              s.jsx("div", {
                className:
                  "bg-primary text-white rounded-2xl shadow-lg p-10 grid grid-cols-2 md:grid-cols-4 text-center gap-6",
                children: [
                  { value: "5000+", label: "Systems Deployed", icon: sa },
                  { value: "500+", label: "Enterprise Clients", icon: Ln },
                  { value: "25+", label: "Years Experience", icon: il },
                  { value: "99.9%", label: "Uptime Guarantee", icon: qc },
                ].map((e, t) =>
                  s.jsxs(
                    "div",
                    {
                      className:
                        "transition-transform duration-300 hover:scale-105",
                      children: [
                        s.jsx("div", {
                          className: "mb-2",
                          children: s.jsx(e.icon, {
                            className: "w-8 h-8 mx-auto",
                          }),
                        }),
                        s.jsx("p", {
                          className: "text-3xl font-bold",
                          children: e.value,
                        }),
                        s.jsx("p", {
                          className: "text-sm opacity-80 uppercase",
                          children: e.label,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        }),
        s.jsx("section", {
          className: "bg-gray-400 my-4 py-20 text-center px-4",
          children: s.jsxs("div", {
            className: "max-w-2xl mx-auto",
            children: [
              s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-white mb-4",
                children: "Ready to Upgrade Your IT Infrastructure?",
              }),
              s.jsx("p", {
                className: "text-gray-100 mb-8 text-lg",
                children:
                  "Get in touch with our experts to discuss your hardware requirements and receive a customized quote for your business needs.",
              }),
              s.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row justify-center items-center gap-4",
                children: [
                  s.jsx("button", {
                    className:
                      "bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105",
                    children: "REQUEST A QUOTE",
                  }),
                  s.jsx("button", {
                    className:
                      "border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105",
                    children: "VIEW CATALOG",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
var Rg = typeof Element < "u",
  Dg = typeof Map == "function",
  Ig = typeof Set == "function",
  Fg = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Es(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, i;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Es(e[n], t[n])) return !1;
      return !0;
    }
    var a;
    if (Dg && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Es(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (Ig && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (Fg && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
    if (Rg && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") &&
          e.$$typeof
        ) &&
        !Es(e[i[n]], t[i[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Hg = function (t, r) {
  try {
    return Es(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const qg = ii(Hg);
var Lg = function (e, t, r, n, i, a, l, o) {
    if (!e) {
      var c;
      if (t === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var u = [r, n, i, a, l, o],
          d = 0;
        (c = new Error(
          t.replace(/%s/g, function () {
            return u[d++];
          })
        )),
          (c.name = "Invariant Violation");
      }
      throw ((c.framesToPop = 1), c);
    }
  },
  Jg = Lg;
const Jc = ii(Jg);
var Ag = function (t, r, n, i) {
  var a = n ? n.call(i, t, r) : void 0;
  if (a !== void 0) return !!a;
  if (t === r) return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r) return !1;
  var l = Object.keys(t),
    o = Object.keys(r);
  if (l.length !== o.length) return !1;
  for (
    var c = Object.prototype.hasOwnProperty.bind(r), u = 0;
    u < l.length;
    u++
  ) {
    var d = l[u];
    if (!c(d)) return !1;
    var h = t[d],
      f = r[d];
    if (
      ((a = n ? n.call(i, h, f, d) : void 0),
      a === !1 || (a === void 0 && h !== f))
    )
      return !1;
  }
  return !0;
};
const zg = ii(Ag);
var Fm = ((e) => (
    (e.BASE = "base"),
    (e.BODY = "body"),
    (e.HEAD = "head"),
    (e.HTML = "html"),
    (e.LINK = "link"),
    (e.META = "meta"),
    (e.NOSCRIPT = "noscript"),
    (e.SCRIPT = "script"),
    (e.STYLE = "style"),
    (e.TITLE = "title"),
    (e.FRAGMENT = "Symbol(react.fragment)"),
    e
  ))(Fm || {}),
  ia = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  Ac = Object.values(Fm),
  yo = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  Og = Object.entries(yo).reduce((e, [t, r]) => ((e[r] = t), e), {}),
  Ue = "data-rh",
  Tr = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  Mr = (e, t) => {
    for (let r = e.length - 1; r >= 0; r -= 1) {
      const n = e[r];
      if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
    }
    return null;
  },
  Vg = (e) => {
    let t = Mr(e, "title");
    const r = Mr(e, Tr.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join("")), r && t))
      return r.replace(/%s/g, () => t);
    const n = Mr(e, Tr.DEFAULT_TITLE);
    return t || n || void 0;
  },
  Gg = (e) => Mr(e, Tr.ON_CHANGE_CLIENT_STATE) || (() => {}),
  aa = (e, t) =>
    t
      .filter((r) => typeof r[e] < "u")
      .map((r) => r[e])
      .reduce((r, n) => ({ ...r, ...n }), {}),
  Bg = (e, t) =>
    t
      .filter((r) => typeof r.base < "u")
      .map((r) => r.base)
      .reverse()
      .reduce((r, n) => {
        if (!r.length) {
          const i = Object.keys(n);
          for (let a = 0; a < i.length; a += 1) {
            const o = i[a].toLowerCase();
            if (e.indexOf(o) !== -1 && n[o]) return r.concat(n);
          }
        }
        return r;
      }, []),
  Wg = (e) => console && typeof console.warn == "function" && console.warn(e),
  tn = (e, t, r) => {
    const n = {};
    return r
      .filter((i) =>
        Array.isArray(i[e])
          ? !0
          : (typeof i[e] < "u" &&
              Wg(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof i[
                  e
                ]}"`
              ),
            !1)
      )
      .map((i) => i[e])
      .reverse()
      .reduce((i, a) => {
        const l = {};
        a.filter((c) => {
          let u;
          const d = Object.keys(c);
          for (let f = 0; f < d.length; f += 1) {
            const g = d[f],
              x = g.toLowerCase();
            t.indexOf(x) !== -1 &&
              !(u === "rel" && c[u].toLowerCase() === "canonical") &&
              !(x === "rel" && c[x].toLowerCase() === "stylesheet") &&
              (u = x),
              t.indexOf(g) !== -1 &&
                (g === "innerHTML" || g === "cssText" || g === "itemprop") &&
                (u = g);
          }
          if (!u || !c[u]) return !1;
          const h = c[u].toLowerCase();
          return (
            n[u] || (n[u] = {}),
            l[u] || (l[u] = {}),
            n[u][h] ? !1 : ((l[u][h] = !0), !0)
          );
        })
          .reverse()
          .forEach((c) => i.push(c));
        const o = Object.keys(l);
        for (let c = 0; c < o.length; c += 1) {
          const u = o[c],
            d = { ...n[u], ...l[u] };
          n[u] = d;
        }
        return i;
      }, [])
      .reverse();
  },
  Zg = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let r = 0; r < e.length; r += 1) if (e[r][t]) return !0;
    }
    return !1;
  },
  Ug = (e) => ({
    baseTag: Bg(["href"], e),
    bodyAttributes: aa("bodyAttributes", e),
    defer: Mr(e, Tr.DEFER),
    encode: Mr(e, Tr.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: aa("htmlAttributes", e),
    linkTags: tn("link", ["rel", "href"], e),
    metaTags: tn(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      e
    ),
    noscriptTags: tn("noscript", ["innerHTML"], e),
    onChangeClientState: Gg(e),
    scriptTags: tn("script", ["src", "innerHTML"], e),
    styleTags: tn("style", ["cssText"], e),
    title: Vg(e),
    titleAttributes: aa("titleAttributes", e),
    prioritizeSeoTags: Zg(e, Tr.PRIORITIZE_SEO_TAGS),
  }),
  Hm = (e) => (Array.isArray(e) ? e.join("") : e),
  Qg = (e, t) => {
    const r = Object.keys(e);
    for (let n = 0; n < r.length; n += 1)
      if (t[r[n]] && t[r[n]].includes(e[r[n]])) return !0;
    return !1;
  },
  la = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (r, n) => (Qg(n, t) ? r.priority.push(n) : r.default.push(n), r),
          { priority: [], default: [] }
        )
      : { default: e, priority: [] },
  zc = (e, t) => ({ ...e, [t]: void 0 }),
  Yg = ["noscript", "script", "style"],
  al = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  qm = (e) =>
    Object.keys(e).reduce((t, r) => {
      const n = typeof e[r] < "u" ? `${r}="${e[r]}"` : `${r}`;
      return t ? `${t} ${n}` : n;
    }, ""),
  Kg = (e, t, r, n) => {
    const i = qm(r),
      a = Hm(t);
    return i
      ? `<${e} ${Ue}="true" ${i}>${al(a, n)}</${e}>`
      : `<${e} ${Ue}="true">${al(a, n)}</${e}>`;
  },
  Xg = (e, t, r = !0) =>
    t.reduce((n, i) => {
      const a = i,
        l = Object.keys(a)
          .filter((u) => !(u === "innerHTML" || u === "cssText"))
          .reduce((u, d) => {
            const h = typeof a[d] > "u" ? d : `${d}="${al(a[d], r)}"`;
            return u ? `${u} ${h}` : h;
          }, ""),
        o = a.innerHTML || a.cssText || "",
        c = Yg.indexOf(e) === -1;
      return `${n}<${e} ${Ue}="true" ${l}${c ? "/>" : `>${o}</${e}>`}`;
    }, ""),
  Lm = (e, t = {}) =>
    Object.keys(e).reduce((r, n) => {
      const i = yo[n];
      return (r[i || n] = e[n]), r;
    }, t),
  _g = (e, t, r) => {
    const n = { key: t, [Ue]: !0 },
      i = Lm(r, n);
    return [Ze.createElement("title", i, t)];
  },
  Ts = (e, t) =>
    t.map((r, n) => {
      const i = { key: n, [Ue]: !0 };
      return (
        Object.keys(r).forEach((a) => {
          const o = yo[a] || a;
          if (o === "innerHTML" || o === "cssText") {
            const c = r.innerHTML || r.cssText;
            i.dangerouslySetInnerHTML = { __html: c };
          } else i[o] = r[a];
        }),
        Ze.createElement(e, i)
      );
    }),
  Ie = (e, t, r = !0) => {
    switch (e) {
      case "title":
        return {
          toComponent: () => _g(e, t.title, t.titleAttributes),
          toString: () => Kg(e, t.title, t.titleAttributes, r),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => Lm(t), toString: () => qm(t) };
      default:
        return { toComponent: () => Ts(e, t), toString: () => Xg(e, t, r) };
    }
  },
  $g = ({ metaTags: e, linkTags: t, scriptTags: r, encode: n }) => {
    const i = la(e, ia.meta),
      a = la(t, ia.link),
      l = la(r, ia.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...Ts("meta", i.priority),
          ...Ts("link", a.priority),
          ...Ts("script", l.priority),
        ],
        toString: () =>
          `${Ie("meta", i.priority, n)} ${Ie("link", a.priority, n)} ${Ie(
            "script",
            l.priority,
            n
          )}`,
      },
      metaTags: i.default,
      linkTags: a.default,
      scriptTags: l.default,
    };
  },
  ex = (e) => {
    const {
      baseTag: t,
      bodyAttributes: r,
      encode: n = !0,
      htmlAttributes: i,
      noscriptTags: a,
      styleTags: l,
      title: o = "",
      titleAttributes: c,
      prioritizeSeoTags: u,
    } = e;
    let { linkTags: d, metaTags: h, scriptTags: f } = e,
      g = { toComponent: () => {}, toString: () => "" };
    return (
      u &&
        ({
          priorityMethods: g,
          linkTags: d,
          metaTags: h,
          scriptTags: f,
        } = $g(e)),
      {
        priority: g,
        base: Ie("base", t, n),
        bodyAttributes: Ie("bodyAttributes", r, n),
        htmlAttributes: Ie("htmlAttributes", i, n),
        link: Ie("link", d, n),
        meta: Ie("meta", h, n),
        noscript: Ie("noscript", a, n),
        script: Ie("script", f, n),
        style: Ie("style", l, n),
        title: Ie("title", { title: o, titleAttributes: c }, n),
      }
    );
  },
  ll = ex,
  ps = [],
  Jm = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  ol = class {
    constructor(e, t) {
      ct(this, "instances", []);
      ct(this, "canUseDOM", Jm);
      ct(this, "context");
      ct(this, "value", {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? ps : this.instances),
          add: (e) => {
            (this.canUseDOM ? ps : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? ps : this.instances).indexOf(e);
            (this.canUseDOM ? ps : this.instances).splice(t, 1);
          },
        },
      });
      (this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = ll({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          }));
    }
  },
  tx = {},
  Am = Ze.createContext(tx),
  Xt,
  zm =
    ((Xt = class extends v.Component {
      constructor(r) {
        super(r);
        ct(this, "helmetData");
        this.helmetData = new ol(this.props.context || {}, Xt.canUseDOM);
      }
      render() {
        return Ze.createElement(
          Am.Provider,
          { value: this.helmetData.value },
          this.props.children
        );
      }
    }),
    ct(Xt, "canUseDOM", Jm),
    Xt),
  cr = (e, t) => {
    const r = document.head || document.querySelector("head"),
      n = r.querySelectorAll(`${e}[${Ue}]`),
      i = [].slice.call(n),
      a = [];
    let l;
    return (
      t &&
        t.length &&
        t.forEach((o) => {
          const c = document.createElement(e);
          for (const u in o)
            if (Object.prototype.hasOwnProperty.call(o, u))
              if (u === "innerHTML") c.innerHTML = o.innerHTML;
              else if (u === "cssText")
                c.styleSheet
                  ? (c.styleSheet.cssText = o.cssText)
                  : c.appendChild(document.createTextNode(o.cssText));
              else {
                const d = u,
                  h = typeof o[d] > "u" ? "" : o[d];
                c.setAttribute(u, h);
              }
          c.setAttribute(Ue, "true"),
            i.some((u, d) => ((l = d), c.isEqualNode(u)))
              ? i.splice(l, 1)
              : a.push(c);
        }),
      i.forEach((o) => {
        var c;
        return (c = o.parentNode) == null ? void 0 : c.removeChild(o);
      }),
      a.forEach((o) => r.appendChild(o)),
      { oldTags: i, newTags: a }
    );
  },
  cl = (e, t) => {
    const r = document.getElementsByTagName(e)[0];
    if (!r) return;
    const n = r.getAttribute(Ue),
      i = n ? n.split(",") : [],
      a = [...i],
      l = Object.keys(t);
    for (const o of l) {
      const c = t[o] || "";
      r.getAttribute(o) !== c && r.setAttribute(o, c),
        i.indexOf(o) === -1 && i.push(o);
      const u = a.indexOf(o);
      u !== -1 && a.splice(u, 1);
    }
    for (let o = a.length - 1; o >= 0; o -= 1) r.removeAttribute(a[o]);
    i.length === a.length
      ? r.removeAttribute(Ue)
      : r.getAttribute(Ue) !== l.join(",") && r.setAttribute(Ue, l.join(","));
  },
  rx = (e, t) => {
    typeof e < "u" && document.title !== e && (document.title = Hm(e)),
      cl("title", t);
  },
  Oc = (e, t) => {
    const {
      baseTag: r,
      bodyAttributes: n,
      htmlAttributes: i,
      linkTags: a,
      metaTags: l,
      noscriptTags: o,
      onChangeClientState: c,
      scriptTags: u,
      styleTags: d,
      title: h,
      titleAttributes: f,
    } = e;
    cl("body", n), cl("html", i), rx(h, f);
    const g = {
        baseTag: cr("base", r),
        linkTags: cr("link", a),
        metaTags: cr("meta", l),
        noscriptTags: cr("noscript", o),
        scriptTags: cr("script", u),
        styleTags: cr("style", d),
      },
      x = {},
      w = {};
    Object.keys(g).forEach((S) => {
      const { newTags: p, oldTags: m } = g[S];
      p.length && (x[S] = p), m.length && (w[S] = g[S].oldTags);
    }),
      t && t(),
      c(e, x, w);
  },
  rn = null,
  nx = (e) => {
    rn && cancelAnimationFrame(rn),
      e.defer
        ? (rn = requestAnimationFrame(() => {
            Oc(e, () => {
              rn = null;
            });
          }))
        : (Oc(e), (rn = null));
  },
  sx = nx,
  Vc = class extends v.Component {
    constructor() {
      super(...arguments);
      ct(this, "rendered", !1);
    }
    shouldComponentUpdate(t) {
      return !zg(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      t.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: r } = this.props.context;
      let n = null;
      const i = Ug(
        t.get().map((a) => {
          const l = { ...a.props };
          return delete l.context, l;
        })
      );
      zm.canUseDOM ? sx(i) : ll && (n = ll(i)), r(n);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      t.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  ca,
  Un =
    ((ca = class extends v.Component {
      shouldComponentUpdate(e) {
        return !qg(zc(this.props, "helmetData"), zc(e, "helmetData"));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case "script":
          case "noscript":
            return { innerHTML: t };
          case "style":
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(e, t, r, n) {
        return {
          ...t,
          [e.type]: [
            ...(t[e.type] || []),
            { ...r, ...this.mapNestedChildrenToProps(e, n) },
          ],
        };
      }
      mapObjectTypeChildren(e, t, r, n) {
        switch (e.type) {
          case "title":
            return { ...t, [e.type]: n, titleAttributes: { ...r } };
          case "body":
            return { ...t, bodyAttributes: { ...r } };
          case "html":
            return { ...t, htmlAttributes: { ...r } };
          default:
            return { ...t, [e.type]: { ...r } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let r = { ...t };
        return (
          Object.keys(e).forEach((n) => {
            r = { ...r, [n]: e[n] };
          }),
          r
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          Jc(
            Ac.some((r) => e.type === r),
            typeof e.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${Ac.join(
                  ", "
                )} are allowed. Helmet does not support rendering <${
                  e.type
                }> elements. Refer to our API for more information.`
          ),
          Jc(
            !t ||
              typeof t == "string" ||
              (Array.isArray(t) && !t.some((r) => typeof r != "string")),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let r = {};
        return (
          Ze.Children.forEach(e, (n) => {
            if (!n || !n.props) return;
            const { children: i, ...a } = n.props,
              l = Object.keys(a).reduce(
                (c, u) => ((c[Og[u] || u] = a[u]), c),
                {}
              );
            let { type: o } = n;
            switch (
              (typeof o == "symbol"
                ? (o = o.toString())
                : this.warnOnInvalidChildren(n, i),
              o)
            ) {
              case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(i, t);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                r = this.flattenArrayTypeChildren(n, r, l, i);
                break;
              default:
                t = this.mapObjectTypeChildren(n, t, l, i);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(r, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let r = { ...t },
          { helmetData: n } = t;
        if (
          (e && (r = this.mapChildrenToProps(e, r)), n && !(n instanceof ol))
        ) {
          const i = n;
          (n = new ol(i.context, !0)), delete r.helmetData;
        }
        return n
          ? Ze.createElement(Vc, { ...r, context: n.value })
          : Ze.createElement(Am.Consumer, null, (i) =>
              Ze.createElement(Vc, { ...r, context: i })
            );
      }
    }),
    ct(ca, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    ca);
function Ei(e, t, r, n) {
  return new (r || (r = Promise))(function (i, a) {
    function l(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function o(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      var d;
      u.done
        ? i(u.value)
        : ((d = u.value),
          d instanceof r
            ? d
            : new r(function (h) {
                h(d);
              })).then(l, o);
    }
    c((n = n.apply(e, [])).next());
  });
}
function Lt(e, t) {
  var r,
    n,
    i,
    a,
    l = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (a = { next: o(0), throw: o(1), return: o(2) }),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function o(c) {
    return function (u) {
      return (function (d) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; l; )
          try {
            if (
              ((r = 1),
              n &&
                (i =
                  2 & d[0]
                    ? n.return
                    : d[0]
                    ? n.throw || ((i = n.return) && i.call(n), 0)
                    : n.next) &&
                !(i = i.call(n, d[1])).done)
            )
              return i;
            switch (((n = 0), i && (d = [2 & d[0], i.value]), d[0])) {
              case 0:
              case 1:
                i = d;
                break;
              case 4:
                return l.label++, { value: d[1], done: !1 };
              case 5:
                l.label++, (n = d[1]), (d = [0]);
                continue;
              case 7:
                (d = l.ops.pop()), l.trys.pop();
                continue;
              default:
                if (
                  ((i = l.trys),
                  !(
                    (i = i.length > 0 && i[i.length - 1]) ||
                    (d[0] !== 6 && d[0] !== 2)
                  ))
                ) {
                  l = 0;
                  continue;
                }
                if (d[0] === 3 && (!i || (d[1] > i[0] && d[1] < i[3]))) {
                  l.label = d[1];
                  break;
                }
                if (d[0] === 6 && l.label < i[1]) {
                  (l.label = i[1]), (i = d);
                  break;
                }
                if (i && l.label < i[2]) {
                  (l.label = i[2]), l.ops.push(d);
                  break;
                }
                i[2] && l.ops.pop(), l.trys.pop();
                continue;
            }
            d = t.call(e, l);
          } catch (h) {
            (d = [6, h]), (n = 0);
          } finally {
            r = i = 0;
          }
        if (5 & d[0]) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      })([c, u]);
    };
  }
}
function ul(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function We(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n,
    i,
    a = r.call(e),
    l = [];
  try {
    for (; (t === void 0 || t-- > 0) && !(n = a.next()).done; ) l.push(n.value);
  } catch (o) {
    i = { error: o };
  } finally {
    try {
      n && !n.done && (r = a.return) && r.call(a);
    } finally {
      if (i) throw i.error;
    }
  }
  return l;
}
function st(e, t, r) {
  if (arguments.length === 2)
    for (var n, i = 0, a = t.length; i < a; i++)
      (!n && i in t) ||
        (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function Gc(e, t, r, n, i) {
  for (var a = [], l = 5; l < arguments.length; l++) a[l - 5] = arguments[l];
  return Ei(this, void 0, void 0, function () {
    var o, c, u, d, h, f;
    return Lt(this, function (g) {
      switch (g.label) {
        case 0:
          g.trys.push([0, 12, 13, 14]),
            (o = ul(a)),
            (c = o.next()),
            (g.label = 1);
        case 1:
          if (c.done) return [3, 11];
          switch (((u = c.value), typeof u)) {
            case "string":
              return [3, 2];
            case "number":
              return [3, 4];
            case "function":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          return [4, ix(e, t, u, r, n, i)];
        case 3:
          return g.sent(), [3, 10];
        case 4:
          return [4, Om(u)];
        case 5:
          return g.sent(), [3, 10];
        case 6:
          return [4, u.apply(void 0, st([e, t, r, n, i], We(a), !1))];
        case 7:
          return g.sent(), [3, 10];
        case 8:
          return [4, u];
        case 9:
          g.sent(), (g.label = 10);
        case 10:
          return (c = o.next()), [3, 1];
        case 11:
          return [3, 14];
        case 12:
          return (d = g.sent()), (h = { error: d }), [3, 14];
        case 13:
          try {
            c && !c.done && (f = o.return) && f.call(o);
          } finally {
            if (h) throw h.error;
          }
          return [7];
        case 14:
          return [2];
      }
    });
  });
}
function ix(e, t, r, n, i, a) {
  return Ei(this, void 0, void 0, function () {
    var l, o;
    return Lt(this, function (c) {
      switch (c.label) {
        case 0:
          return (
            (l = e.textContent || ""),
            (o = (function (u, d) {
              var h = We(d).slice(0);
              return st(st([], We(u), !1), [NaN], !1).findIndex(function (
                f,
                g
              ) {
                return h[g] !== f;
              });
            })(l, r)),
            [
              4,
              ax(
                e,
                st(st([], We(ox(l, t, o)), !1), We(lx(r, t, o)), !1),
                n,
                i,
                a
              ),
            ]
          );
        case 1:
          return c.sent(), [2];
      }
    });
  });
}
function Om(e) {
  return Ei(this, void 0, void 0, function () {
    return Lt(this, function (t) {
      switch (t.label) {
        case 0:
          return [
            4,
            new Promise(function (r) {
              return setTimeout(r, e);
            }),
          ];
        case 1:
          return t.sent(), [2];
      }
    });
  });
}
function ax(e, t, r, n, i) {
  return Ei(this, void 0, void 0, function () {
    var a, l, o, c, u, d, h, f, g, x, w, S, p;
    return Lt(this, function (m) {
      switch (m.label) {
        case 0:
          if (((a = t), i)) {
            for (l = 0, o = 1; o < t.length; o++)
              if (
                ((c = We([t[o - 1], t[o]], 2)),
                (u = c[0]),
                (d = c[1]).length > u.length || d === "")
              ) {
                l = o;
                break;
              }
            a = t.slice(l, t.length);
          }
          m.label = 1;
        case 1:
          m.trys.push([1, 6, 7, 8]),
            (h = ul(
              (function (y) {
                var b, j, N, P, T, R, D;
                return Lt(this, function (A) {
                  switch (A.label) {
                    case 0:
                      (b = function (fe) {
                        return Lt(this, function (Pe) {
                          switch (Pe.label) {
                            case 0:
                              return [
                                4,
                                {
                                  op: function (_e) {
                                    return requestAnimationFrame(function () {
                                      return (_e.textContent = fe);
                                    });
                                  },
                                  opCode: function (_e) {
                                    var Bt = _e.textContent || "";
                                    return fe === "" || Bt.length > fe.length
                                      ? "DELETE"
                                      : "WRITING";
                                  },
                                },
                              ];
                            case 1:
                              return Pe.sent(), [2];
                          }
                        });
                      }),
                        (A.label = 1);
                    case 1:
                      A.trys.push([1, 6, 7, 8]),
                        (j = ul(y)),
                        (N = j.next()),
                        (A.label = 2);
                    case 2:
                      return N.done ? [3, 5] : ((P = N.value), [5, b(P)]);
                    case 3:
                      A.sent(), (A.label = 4);
                    case 4:
                      return (N = j.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (T = A.sent()), (R = { error: T }), [3, 8];
                    case 7:
                      try {
                        N && !N.done && (D = j.return) && D.call(j);
                      } finally {
                        if (R) throw R.error;
                      }
                      return [7];
                    case 8:
                      return [2];
                  }
                });
              })(a)
            )),
            (f = h.next()),
            (m.label = 2);
        case 2:
          return f.done
            ? [3, 5]
            : ((g = f.value),
              (x =
                g.opCode(e) === "WRITING"
                  ? r + r * (Math.random() - 0.5)
                  : n + n * (Math.random() - 0.5)),
              g.op(e),
              [4, Om(x)]);
        case 3:
          m.sent(), (m.label = 4);
        case 4:
          return (f = h.next()), [3, 2];
        case 5:
          return [3, 8];
        case 6:
          return (w = m.sent()), (S = { error: w }), [3, 8];
        case 7:
          try {
            f && !f.done && (p = h.return) && p.call(h);
          } finally {
            if (S) throw S.error;
          }
          return [7];
        case 8:
          return [2];
      }
    });
  });
}
function lx(e, t, r) {
  var n, i;
  return (
    r === void 0 && (r = 0),
    Lt(this, function (a) {
      switch (a.label) {
        case 0:
          (n = t(e)), (i = n.length), (a.label = 1);
        case 1:
          return r < i ? [4, n.slice(0, ++r).join("")] : [3, 3];
        case 2:
          return a.sent(), [3, 1];
        case 3:
          return [2];
      }
    })
  );
}
function ox(e, t, r) {
  var n, i;
  return (
    r === void 0 && (r = 0),
    Lt(this, function (a) {
      switch (a.label) {
        case 0:
          (n = t(e)), (i = n.length), (a.label = 1);
        case 1:
          return i > r ? [4, n.slice(0, --i).join("")] : [3, 3];
        case 2:
          return a.sent(), [3, 1];
        case 3:
          return [2];
      }
    })
  );
}
var cx = "index-module_type__E-SaG";
(function (e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (typeof document < "u") {
    var n = document.head || document.getElementsByTagName("head")[0],
      i = document.createElement("style");
    (i.type = "text/css"),
      r === "top" && n.firstChild
        ? n.insertBefore(i, n.firstChild)
        : n.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e));
  }
})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);
var ux = v.memo(
    v.forwardRef(function (e, t) {
      var r = e.sequence,
        n = e.repeat,
        i = e.className,
        a = e.speed,
        l = a === void 0 ? 40 : a,
        o = e.deletionSpeed,
        c = e.omitDeletionAnimation,
        u = c !== void 0 && c,
        d = e.preRenderFirstString,
        h = d !== void 0 && d,
        f = e.wrapper,
        g = f === void 0 ? "span" : f,
        x = e.splitter,
        w =
          x === void 0
            ? function (E) {
                return st([], We(E), !1);
              }
            : x,
        S = e.cursor,
        p = S === void 0 || S,
        m = e.style,
        y = (function (E, L) {
          var O = {};
          for (var se in E)
            Object.prototype.hasOwnProperty.call(E, se) &&
              L.indexOf(se) < 0 &&
              (O[se] = E[se]);
          if (E != null && typeof Object.getOwnPropertySymbols == "function") {
            var we = 0;
            for (se = Object.getOwnPropertySymbols(E); we < se.length; we++)
              L.indexOf(se[we]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(E, se[we]) &&
                (O[se[we]] = E[se[we]]);
          }
          return O;
        })(e, [
          "sequence",
          "repeat",
          "className",
          "speed",
          "deletionSpeed",
          "omitDeletionAnimation",
          "preRenderFirstString",
          "wrapper",
          "splitter",
          "cursor",
          "style",
        ]),
        b = y["aria-label"],
        j = y["aria-hidden"],
        N = y.role;
      o || (o = l);
      var P = new Array(2).fill(40);
      [l, o].forEach(function (E, L) {
        switch (typeof E) {
          case "number":
            P[L] = Math.abs(E - 100);
            break;
          case "object":
            var O = E.type,
              se = E.value;
            if (typeof se != "number") break;
            O === "keyStrokeDelayInMs" && (P[L] = se);
        }
      });
      var T,
        R,
        D,
        A,
        fe,
        Pe,
        _e = P[0],
        Bt = P[1],
        $e = (function (E, L) {
          L === void 0 && (L = null);
          var O = v.useRef(L);
          return (
            v.useEffect(
              function () {
                E &&
                  (typeof E == "function"
                    ? E(O.current)
                    : (E.current = O.current));
              },
              [E]
            ),
            O
          );
        })(t),
        I = cx;
      (T = i ? "".concat(p ? I + " " : "").concat(i) : p ? I : ""),
        (R = v.useRef(function () {
          var E,
            L = r;
          n === 1 / 0
            ? (E = Gc)
            : typeof n == "number" &&
              (L = Array(1 + n)
                .fill(r)
                .flat());
          var O = E ? st(st([], We(L), !1), [E], !1) : st([], We(L), !1);
          return (
            Gc.apply(void 0, st([$e.current, w, _e, Bt, u], We(O), !1)),
            function () {
              $e.current;
            }
          );
        })),
        (D = v.useRef()),
        (A = v.useRef(!1)),
        (fe = v.useRef(!1)),
        (Pe = We(v.useState(0), 2)[1]),
        A.current && (fe.current = !0),
        v.useEffect(function () {
          return (
            A.current || ((D.current = R.current()), (A.current = !0)),
            Pe(function (E) {
              return E + 1;
            }),
            function () {
              fe.current && D.current && D.current();
            }
          );
        }, []);
      var C = g,
        H = h
          ? r.find(function (E) {
              return typeof E == "string";
            }) || ""
          : null;
      return Ze.createElement(C, {
        "aria-hidden": j,
        "aria-label": b,
        role: N,
        style: m,
        className: T,
        children: b
          ? Ze.createElement("span", {
              "aria-hidden": "true",
              ref: $e,
              children: H,
            })
          : H,
        ref: b ? void 0 : $e,
      });
    }),
    function (e, t) {
      return !0;
    }
  ),
  vo = {},
  dl = { exports: {} };
(function (e, t) {
  (function (r, n) {
    n(t);
  })(_m, function (r) {
    var n = function () {
        return (
          (n =
            Object.assign ||
            function (a) {
              for (var l, o = 1, c = arguments.length; o < c; o++)
                for (var u in (l = arguments[o]))
                  Object.prototype.hasOwnProperty.call(l, u) && (a[u] = l[u]);
              return a;
            }),
          n.apply(this, arguments)
        );
      },
      i = (function () {
        function a(l, o, c) {
          var u = this;
          (this.endVal = o),
            (this.options = c),
            (this.version = "2.9.0"),
            (this.defaults = {
              startVal: 0,
              decimalPlaces: 0,
              duration: 2,
              useEasing: !0,
              useGrouping: !0,
              useIndianSeparators: !1,
              smartEasingThreshold: 999,
              smartEasingAmount: 333,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: "",
              enableScrollSpy: !1,
              scrollSpyDelay: 200,
              scrollSpyOnce: !1,
            }),
            (this.finalEndVal = null),
            (this.useEasing = !0),
            (this.countDown = !1),
            (this.error = ""),
            (this.startVal = 0),
            (this.paused = !0),
            (this.once = !1),
            (this.count = function (d) {
              u.startTime || (u.startTime = d);
              var h = d - u.startTime;
              (u.remaining = u.duration - h),
                u.useEasing
                  ? u.countDown
                    ? (u.frameVal =
                        u.startVal -
                        u.easingFn(h, 0, u.startVal - u.endVal, u.duration))
                    : (u.frameVal = u.easingFn(
                        h,
                        u.startVal,
                        u.endVal - u.startVal,
                        u.duration
                      ))
                  : (u.frameVal =
                      u.startVal + (u.endVal - u.startVal) * (h / u.duration));
              var f = u.countDown
                ? u.frameVal < u.endVal
                : u.frameVal > u.endVal;
              (u.frameVal = f ? u.endVal : u.frameVal),
                (u.frameVal = Number(
                  u.frameVal.toFixed(u.options.decimalPlaces)
                )),
                u.printValue(u.frameVal),
                h < u.duration
                  ? (u.rAF = requestAnimationFrame(u.count))
                  : u.finalEndVal !== null
                  ? u.update(u.finalEndVal)
                  : u.options.onCompleteCallback &&
                    u.options.onCompleteCallback();
            }),
            (this.formatNumber = function (d) {
              var h,
                f,
                g,
                x,
                w = d < 0 ? "-" : "";
              h = Math.abs(d).toFixed(u.options.decimalPlaces);
              var S = (h += "").split(".");
              if (
                ((f = S[0]),
                (g = S.length > 1 ? u.options.decimal + S[1] : ""),
                u.options.useGrouping)
              ) {
                x = "";
                for (var p = 3, m = 0, y = 0, b = f.length; y < b; ++y)
                  u.options.useIndianSeparators &&
                    y === 4 &&
                    ((p = 2), (m = 1)),
                    y !== 0 && m % p == 0 && (x = u.options.separator + x),
                    m++,
                    (x = f[b - y - 1] + x);
                f = x;
              }
              return (
                u.options.numerals &&
                  u.options.numerals.length &&
                  ((f = f.replace(/[0-9]/g, function (j) {
                    return u.options.numerals[+j];
                  })),
                  (g = g.replace(/[0-9]/g, function (j) {
                    return u.options.numerals[+j];
                  }))),
                w + u.options.prefix + f + g + u.options.suffix
              );
            }),
            (this.easeOutExpo = function (d, h, f, g) {
              return (f * (1 - Math.pow(2, (-10 * d) / g)) * 1024) / 1023 + h;
            }),
            (this.options = n(n({}, this.defaults), c)),
            (this.formattingFn = this.options.formattingFn
              ? this.options.formattingFn
              : this.formatNumber),
            (this.easingFn = this.options.easingFn
              ? this.options.easingFn
              : this.easeOutExpo),
            (this.el = typeof l == "string" ? document.getElementById(l) : l),
            (o = o ?? this.parse(this.el.innerHTML)),
            (this.startVal = this.validateValue(this.options.startVal)),
            (this.frameVal = this.startVal),
            (this.endVal = this.validateValue(o)),
            (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
            this.resetDuration(),
            (this.options.separator = String(this.options.separator)),
            (this.useEasing = this.options.useEasing),
            this.options.separator === "" && (this.options.useGrouping = !1),
            this.el
              ? this.printValue(this.startVal)
              : (this.error = "[CountUp] target is null or undefined"),
            typeof window < "u" &&
              this.options.enableScrollSpy &&
              (this.error
                ? console.error(this.error, l)
                : ((window.onScrollFns = window.onScrollFns || []),
                  window.onScrollFns.push(function () {
                    return u.handleScroll(u);
                  }),
                  (window.onscroll = function () {
                    window.onScrollFns.forEach(function (d) {
                      return d();
                    });
                  }),
                  this.handleScroll(this)));
        }
        return (
          (a.prototype.handleScroll = function (l) {
            if (l && window && !l.once) {
              var o = window.innerHeight + window.scrollY,
                c = l.el.getBoundingClientRect(),
                u = c.top + window.pageYOffset,
                d = c.top + c.height + window.pageYOffset;
              d < o && d > window.scrollY && l.paused
                ? ((l.paused = !1),
                  setTimeout(function () {
                    return l.start();
                  }, l.options.scrollSpyDelay),
                  l.options.scrollSpyOnce && (l.once = !0))
                : (window.scrollY > d || u > o) && !l.paused && l.reset();
            }
          }),
          (a.prototype.determineDirectionAndSmartEasing = function () {
            var l = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > l;
            var o = l - this.startVal;
            if (
              Math.abs(o) > this.options.smartEasingThreshold &&
              this.options.useEasing
            ) {
              this.finalEndVal = l;
              var c = this.countDown ? 1 : -1;
              (this.endVal = l + c * this.options.smartEasingAmount),
                (this.duration = this.duration / 2);
            } else (this.endVal = l), (this.finalEndVal = null);
            this.finalEndVal !== null
              ? (this.useEasing = !1)
              : (this.useEasing = this.options.useEasing);
          }),
          (a.prototype.start = function (l) {
            this.error ||
              (this.options.onStartCallback && this.options.onStartCallback(),
              l && (this.options.onCompleteCallback = l),
              this.duration > 0
                ? (this.determineDirectionAndSmartEasing(),
                  (this.paused = !1),
                  (this.rAF = requestAnimationFrame(this.count)))
                : this.printValue(this.endVal));
          }),
          (a.prototype.pauseResume = function () {
            this.paused
              ? ((this.startTime = null),
                (this.duration = this.remaining),
                (this.startVal = this.frameVal),
                this.determineDirectionAndSmartEasing(),
                (this.rAF = requestAnimationFrame(this.count)))
              : cancelAnimationFrame(this.rAF),
              (this.paused = !this.paused);
          }),
          (a.prototype.reset = function () {
            cancelAnimationFrame(this.rAF),
              (this.paused = !0),
              this.resetDuration(),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              this.printValue(this.startVal);
          }),
          (a.prototype.update = function (l) {
            cancelAnimationFrame(this.rAF),
              (this.startTime = null),
              (this.endVal = this.validateValue(l)),
              this.endVal !== this.frameVal &&
                ((this.startVal = this.frameVal),
                this.finalEndVal == null && this.resetDuration(),
                (this.finalEndVal = null),
                this.determineDirectionAndSmartEasing(),
                (this.rAF = requestAnimationFrame(this.count)));
          }),
          (a.prototype.printValue = function (l) {
            var o;
            if (this.el) {
              var c = this.formattingFn(l);
              !((o = this.options.plugin) === null || o === void 0) && o.render
                ? this.options.plugin.render(this.el, c)
                : this.el.tagName === "INPUT"
                ? (this.el.value = c)
                : this.el.tagName === "text" || this.el.tagName === "tspan"
                ? (this.el.textContent = c)
                : (this.el.innerHTML = c);
            }
          }),
          (a.prototype.ensureNumber = function (l) {
            return typeof l == "number" && !isNaN(l);
          }),
          (a.prototype.validateValue = function (l) {
            var o = Number(l);
            return this.ensureNumber(o)
              ? o
              : ((this.error = "[CountUp] invalid start or end value: ".concat(
                  l
                )),
                null);
          }),
          (a.prototype.resetDuration = function () {
            (this.startTime = null),
              (this.duration = 1e3 * Number(this.options.duration)),
              (this.remaining = this.duration);
          }),
          (a.prototype.parse = function (l) {
            var o = function (h) {
                return h.replace(/([.,'Â  ])/g, "\\$1");
              },
              c = o(this.options.separator),
              u = o(this.options.decimal),
              d = l
                .replace(new RegExp(c, "g"), "")
                .replace(new RegExp(u, "g"), ".");
            return parseFloat(d);
          }),
          a
        );
      })();
    r.CountUp = i;
  });
})(dl, dl.exports);
var dx = dl.exports;
Object.defineProperty(vo, "__esModule", { value: !0 });
var ae = v,
  mx = dx;
function px(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      l,
      o = [],
      c = !0,
      u = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (o.push(n.value), o.length !== t);
          c = !0
        );
    } catch (d) {
      (u = !0), (i = d);
    } finally {
      try {
        if (!c && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return o;
  }
}
function Bc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bc(Object(r), !0).forEach(function (n) {
          gx(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Bc(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function hx(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fx(e) {
  var t = hx(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function gx(e, t, r) {
  return (
    (t = fx(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ml() {
  return (
    (ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ml.apply(this, arguments)
  );
}
function xx(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Vm(e, t) {
  if (e == null) return {};
  var r = xx(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function yx(e, t) {
  return vx(e) || px(e, t) || wx(e, t) || bx();
}
function vx(e) {
  if (Array.isArray(e)) return e;
}
function wx(e, t) {
  if (e) {
    if (typeof e == "string") return Wc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Wc(e, t);
  }
}
function Wc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var jx =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? ae.useLayoutEffect
    : ae.useEffect;
function Ve(e) {
  var t = ae.useRef(e);
  return (
    jx(function () {
      t.current = e;
    }),
    ae.useCallback(function () {
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      return t.current.apply(void 0, n);
    }, [])
  );
}
var Sx = function (t, r) {
    var n = r.decimal,
      i = r.decimals,
      a = r.duration,
      l = r.easingFn,
      o = r.end,
      c = r.formattingFn,
      u = r.numerals,
      d = r.prefix,
      h = r.separator,
      f = r.start,
      g = r.suffix,
      x = r.useEasing,
      w = r.useGrouping,
      S = r.useIndianSeparators,
      p = r.enableScrollSpy,
      m = r.scrollSpyDelay,
      y = r.scrollSpyOnce,
      b = r.plugin;
    return new mx.CountUp(t, o, {
      startVal: f,
      duration: a,
      decimal: n,
      decimalPlaces: i,
      easingFn: l,
      formattingFn: c,
      numerals: u,
      separator: h,
      prefix: d,
      suffix: g,
      plugin: b,
      useEasing: x,
      useIndianSeparators: S,
      useGrouping: w,
      enableScrollSpy: p,
      scrollSpyDelay: m,
      scrollSpyOnce: y,
    });
  },
  Nx = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate",
  ],
  kx = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: !0,
    enableReinitialize: !0,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1,
  },
  Gm = function (t) {
    var r = Object.fromEntries(
        Object.entries(t).filter(function (R) {
          var D = yx(R, 2),
            A = D[1];
          return A !== void 0;
        })
      ),
      n = ae.useMemo(
        function () {
          return si(si({}, kx), r);
        },
        [t]
      ),
      i = n.ref,
      a = n.startOnMount,
      l = n.enableReinitialize,
      o = n.delay,
      c = n.onEnd,
      u = n.onStart,
      d = n.onPauseResume,
      h = n.onReset,
      f = n.onUpdate,
      g = Vm(n, Nx),
      x = ae.useRef(),
      w = ae.useRef(),
      S = ae.useRef(!1),
      p = Ve(function () {
        return Sx(typeof i == "string" ? i : i.current, g);
      }),
      m = Ve(function (R) {
        var D = x.current;
        if (D && !R) return D;
        var A = p();
        return (x.current = A), A;
      }),
      y = Ve(function () {
        var R = function () {
          return m(!0).start(function () {
            c == null || c({ pauseResume: b, reset: j, start: P, update: N });
          });
        };
        o && o > 0 ? (w.current = setTimeout(R, o * 1e3)) : R(),
          u == null || u({ pauseResume: b, reset: j, update: N });
      }),
      b = Ve(function () {
        m().pauseResume(), d == null || d({ reset: j, start: P, update: N });
      }),
      j = Ve(function () {
        m().el &&
          (w.current && clearTimeout(w.current),
          m().reset(),
          h == null || h({ pauseResume: b, start: P, update: N }));
      }),
      N = Ve(function (R) {
        m().update(R), f == null || f({ pauseResume: b, reset: j, start: P });
      }),
      P = Ve(function () {
        j(), y();
      }),
      T = Ve(function (R) {
        a && (R && j(), y());
      });
    return (
      ae.useEffect(
        function () {
          S.current ? l && T(!0) : ((S.current = !0), T());
        },
        [
          l,
          S,
          T,
          o,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.formattingFn,
        ]
      ),
      ae.useEffect(
        function () {
          return function () {
            j();
          };
        },
        [j]
      ),
      { start: P, pauseResume: b, reset: j, update: N, getCountUp: m }
    );
  },
  Px = ["className", "redraw", "containerProps", "children", "style"],
  Cx = function (t) {
    var r = t.className,
      n = t.redraw,
      i = t.containerProps,
      a = t.children,
      l = t.style,
      o = Vm(t, Px),
      c = ae.useRef(null),
      u = ae.useRef(!1),
      d = Gm(
        si(
          si({}, o),
          {},
          {
            ref: c,
            startOnMount: typeof a != "function" || t.delay === 0,
            enableReinitialize: !1,
          }
        )
      ),
      h = d.start,
      f = d.reset,
      g = d.update,
      x = d.pauseResume,
      w = d.getCountUp,
      S = Ve(function () {
        h();
      }),
      p = Ve(function (b) {
        t.preserveValue || f(), g(b);
      }),
      m = Ve(function () {
        if (
          typeof t.children == "function" &&
          !(c.current instanceof Element)
        ) {
          console.error(
            `Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`
          );
          return;
        }
        w();
      });
    ae.useEffect(
      function () {
        m();
      },
      [m]
    ),
      ae.useEffect(
        function () {
          u.current && p(t.end);
        },
        [t.end, p]
      );
    var y = n && t;
    return (
      ae.useEffect(
        function () {
          n && u.current && S();
        },
        [S, n, y]
      ),
      ae.useEffect(
        function () {
          !n && u.current && S();
        },
        [
          S,
          n,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.className,
          t.formattingFn,
        ]
      ),
      ae.useEffect(function () {
        u.current = !0;
      }, []),
      typeof a == "function"
        ? a({
            countUpRef: c,
            start: h,
            reset: f,
            update: g,
            pauseResume: x,
            getCountUp: w,
          })
        : ae.createElement(
            "span",
            ml({ className: r, ref: c, style: l }, i),
            typeof t.start < "u" ? w().formattingFn(t.start) : ""
          )
    );
  },
  Ex = (vo.default = Cx);
vo.useCountUp = Gm;
const Tx = "/assets/main.png",
  Mx = "/assets/slider-3-server-group-G69dP98Q.webp",
  Rx = "/assets/1--Nk7-eOf.png",
  Dx = "/assets/2-Bk5QYfz1.png",
  Ix = "/assets/3-CxbFhfT4.png",
  Fx = "/assets/4-JhjUcOEq.png",
  Hx = "/assets/5-Dxd0wH_5.png",
  qx =
    "data:image/webp;base64,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",
  Lx =
    "data:image/webp;base64,UklGRsYFAABXRUJQVlA4WAoAAAAQAAAAfgAAfgAAQUxQSF8EAAABoIdt++G4erNb23YX6dTd2m7XtW3btm3btts9td0e27b1/DEzSZp0jhERE6D//f/XZFfk+Fmd8jlX6zcwr0/rTImXwfEBvXfAqzkcqTqvl5Wk/Od4HOREPb/MJOsX6e5EwwbKNpqHzhKz8MC0ykoWbJceUjlI6HXM++VhGkjvHFk/4OV+0eO/4rIHbj4Jdo7tnHFJyvk6J+y2sFyOmZ5fMsic9UP2Wg2DXM5Rgedlnf1bHnUtki9mD7SVcxq8b5O82GUsP2khB3W9SzOLymelFtteevPE0PRy1HbQQlI0n8ih58NbF96Cnk6lDo+BS7Xl4CmzJ9bTOEu9wm5bwzCK5U9Tp6RhGBF1kptcRs1CbrdRv6CrcLl0KTMUrJdX+eoWcrsL1QpX5uKG50UjUktKVW/isrUr546slVwZY4oahlG+WhJTUKmqbre7SFRu79KvwfNPUnbC3CXYpPBnAa7kU9E3ARJyKtd5gBdC9CLe/pBJrrFvY9tWaZYA/NIoyOQq9yHAwazeSe97RmJdAPbItrbJkNTYlFtSQVNNlcPrI0p7A+Ct2zffhE6SXgfmyLYb8G1K+fIqsKB+rDlq0OtFtBqYbGeYckoqBnyYRFKqb4AC2nqpRWRsdIMPgZGRMfV70UfXgbv1E0uJIt+eIukQ0MGuJvBYPr0NxMm2RCFtBubZRZhCJFUAPkknKcu3QEiiAbJ8EwiXpE55awDPJpFlgfqSzgB97GKAl3zXxU7yE0PWKd4Fapikc0Bbefw0K2b3jgdpvgBKO0VRX+T+BagXKF092hIoiV4BrgVK3NNA4wAulPKmr58sjIqLi4trGJ82oFJ9gHl1eCDYRzyp9E9G7i9MMD+L1dkAcAeWwi5b8PE4l7+NKBgSElKw0rVGkrYGkNTzDRPcKuBnTWWZpVTAKcXYz0x8lsu/ullZ+ldy76Qs038EuOJfXf2gvP9I7ssA5fyqi0c7gLl2JUzhNp/6i1yvAGOVAPS2iwRe8Y8twDQv8jyp6t5pJDBFJ4AeATABOGQXA7we7H/LgKHaACy26wtc8Y8I4NcQm9PASvlH/qweZP0aKKFGwCcpbB4DI31zC+jokY4BDzNajAbI70WmbwDDJulbQFWLsGdibfLfB45IehY4F2SxCvg6nW9uAM09y/gW8GaXXFlr7gfoKC+SfQfktdE7QISFtnBuZIXsOess+g54I52ksG+Buy1zZI89B1BHPq0IcDrII2U7D/DztwBftZM3/QDm2LQCWO+yqADww8+Yj2WRufhDgB++A3g/Uj4teODahQvn73QO9kjqnPAz5lfn5pE35S8mnD+fcD3Sovjp8+fPJ9xsYRF8C+sP9zaVbVD/a1g+GptOvk2TSuYsQV5IeeI7dWoTESR70+cZpfSJZc5gkTaZzJkspIjm7Tu0a1E2uTwPadqpU6siCviywCep5Nylgefl4C2ArU62CCjrZO/BSjl4PzggBy/FTxPk4DUerwrV//7/+yQAVlA4IEABAABwDQCdASp/AH8APlEkj0SjoiGVRJA4BQSm7esA4dNJfnP4AbWZy/8Vf2q/1UwA+wDFQPWqslrIyC9XsbbnJ17G25uxiPBvFHM/GeAFNbXHdtGkfaCZabCfd2df9QhYwOxwuu3d3PXT6dS5ru80DLO25ycwAAD+/cCAAAAGf//WHq4g32/qyTSBnMP0m2GcIY42wvwhxTqIOVTX+T2foKubrgXkRnv/CHFNucNn8wA7QsB83BORZY9hO//9ZOreylZAKyBJBFpl4BE2LlgJcnoWkJTuQIWA2hQSCxrpI2UIxlv2hNzFpD563suKq0QRidAQ1DPiMn0nPH3EjcWb3xtnJm5hFqV4dDsfn3GjkjbbVH9vfpczKOmp+26wRTozkzb6kfft79LmMmrr+qt1LuNWF811w56ZWIxCdJAAAAAAAA==",
  Jx = "/assets/desktop.png",
  Ax = "/assets/storage.png",
  zx = "/assets/processor.png",
  Ox = "/assets/image-KXW5wt-w.png",
  Vx = "/assets/secondCardimg-HIsNlR00.png",
  Gx = () =>
    s.jsxs(Un, {
      children: [
        s.jsx("title", {
          children: "GTR Supply | Enterprise IT Hardware Solutions",
        }),
        s.jsx("meta", {
          name: "description",
          content:
            "GTR Supply is a B2B company specializing in desktops, refurbished servers, data storage, IP phones, and networking equipment.",
        }),
        s.jsx("link", { rel: "canonical", href: "https://serverdirect.us/" }),
      ],
    }),
  Bx = [
    { number: 5e4, suffix: "+", label: "Happy Customers" },
    { number: 99.9, suffix: "%", label: "Uptime Guarantee" },
    { number: 24, suffix: "/7", label: "Support Available" },
    { number: 30, suffix: " Day", label: "Return Policy" },
  ],
  Wx = [
    {
      title: "Reliable, high-performance storage built for business workloads.",
      subtitle: "Enterprise Storage Solutions",
      buttonLabel: "Shop Storage Products",
      bgImage: Ox,
    },
    {
      title: "Scalable, dependable storage for demanding IT environments.",
      subtitle: "Enterprise Data Storage",
      buttonLabel: "Shop Now",
      bgImage: Vx,
    },
  ],
  Zx = [
    { name: "Tesla", src: Rx },
    { name: "Pfizer", src: Dx },
    { name: "Raytheon Technologies", src: Ix },
    { name: "MIT", src: Fx },
    { name: "St. Jude", src: Hx },
    { name: "IBM", src: qx },
    { name: "Fujitsu", src: Lx },
  ],
  Ux = [
    {
      name: "Desktops",
      image: Jx,
      href: "/products?category=desktops",
      description:
        "Uncompromising desktop power for mission-critical performance.",
    },
    {
      name: "Storage",
      image: Ax,
      href: "/products?category=storage",
      description:
        "Flexible, high-capacity storage designed for demanding data environments.",
    },
    {
      name: "Processors",
      image: zx,
      href: "/products?category=processors",
      description:
        "Professional-grade processors for reliable, high-speed computing.",
    },
  ],
  Qx = [
    {
      label: "WhatsApp",
      subtitle: "Chat: +1 737 210 4824",
      icon: "https://cdn-icons-png.freepik.com/256/134/134937.png?ga=GA1.1.42662198.1754514420&semt=ais_white_label",
      aria: "WhatsApp contact chat +1 737 210 4824",
    },
    {
      label: "Phone",
      subtitle: "Or call us now:",
      phone: "+1 737 210 4824",
      icon: "https://cdn-icons-png.freepik.com/256/7044/7044732.png?ga=GA1.1.42662198.1754514420&semt=ais_white_label",
      aria: "Phone contact call number +1 737 210 4824",
    },
    {
      label: "Teams",
      email: "support@gtrsupply.com",
      subtitle: "Reach us now on Email",
      icon: "https://cdn-icons-png.freepik.com/256/15238/15238349.png?uid=R200013273&ga=GA1.1.423106261.1744311874&semt=ais_white_label",
      aria: "Teams contact email support@gtrsupply.com",
    },
  ],
  Zc = [
    {
      title: "Products",
      items: [
        {
          q: "What types of products do you offer?",
          a: "We provide enterprise IT hardware including desktops, workstations, servers, storage systems, networking gear, and accessories.",
        },
        {
          q: "Are your products brand new or refurbished?",
          a: "Both. We stock factory-new units and professionally refurbished equipment that is fully tested and backed by warranty.",
        },
        {
          q: "Can I request a specific brand or manufacturer?",
          a: "Yesâ€”tell us the brand or part number and weâ€™ll source it or suggest a footprint-compatible alternative.",
        },
        {
          q: "Do you sell components separately?",
          a: "Absolutely. CPUs, memory, drives, NICs, GPUs and more are available individually or pre-installed.",
        },
      ],
    },
    {
      title: "Condition",
      items: [
        {
          q: "Are your products tested before shipping?",
          a: "All refurbished items undergo multi-point diagnostics, burn-in testing, and firmware validation before they ship.",
        },
        {
          q: "What cosmetic condition should I expect?",
          a: "Refurbished units may show light wear (B/A grade). Functional quality and performance remain enterprise-grade.",
        },
      ],
    },
    {
      title: "Warranty & Return",
      items: [
        {
          q: "What is your warranty policy?",
          a: "Standard warranty starts at 30 days and extends up to 1 year depending on the product line. Extended coverage is available.",
        },
        {
          q: "What is your return policy?",
          a: "Hassle-free returns within 30 days of delivery. Items must be in original condition with all accessories.",
        },
      ],
    },
    {
      title: "Shipping",
      items: [
        {
          q: "Which carriers do you use?",
          a: "We ship via UPS, FedEx, DHL and freight partners for pallets. Expedited options are available at checkout.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes. We support DDP/DAP incoterms and provide commercial invoices and export documentation.",
        },
      ],
    },
    {
      title: "Payments",
      items: [
        {
          q: "What payment methods are accepted?",
          a: "Credit cards, ACH, wire transfers, Net terms (on approval), and major purchase platforms.",
        },
        {
          q: "Do you offer bulk pricing?",
          a: "Yesâ€”volume discounts apply for large or recurring orders. Contact sales for a tailored quote.",
        },
      ],
    },
    {
      title: "Order Status",
      items: [
        {
          q: "How can I track my order?",
          a: "Youâ€™ll receive a tracking link when your order ships. You can also view status in your account dashboard.",
        },
        {
          q: "Can I change or cancel an order?",
          a: "Contact us as soon as possible. Changes are usually possible before fulfillment is completed.",
        },
      ],
    },
  ],
  Yx = () => {
    const [e, t] = v.useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        details: "",
      }),
      [r, n] = v.useState(!1),
      [i, a] = v.useState(null),
      l = (g) => t((x) => ({ ...x, [g.target.name]: g.target.value }));
    async function o(g) {
      g.preventDefault(), n(!0), a(null);
      try {
        await new Promise((x) => setTimeout(x, 800)),
          a({ type: "ok", msg: "Thanks! We'll get back to you shortly." }),
          t({ name: "", email: "", phone: "", projectType: "", details: "" });
      } catch {
        a({ type: "error", msg: "Something went wrong. Please try again." });
      } finally {
        n(!1);
      }
    }
    const [c, u] = v.useState(0),
      [d, h] = v.useState(null),
      f = Zc[c].items;
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(Gx, {}),
        s.jsxs("div", {
          className: "min-h-screen",
          children: [
            s.jsx("section", {
              className: "bg-[#193154] text-black py-12",
              children: s.jsxs("div", {
                className:
                  "max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between",
                children: [
                  s.jsxs("div", {
                    className: "max-w-2xl space-y-6",
                    children: [
                      s.jsx("p", {
                        className: "text-[#f6f8f1] text-sm font-semibold",
                        children: "Powering Enterprise IT",
                      }),
                      s.jsxs("h1", {
                        className:
                          "text-4xl md:text-5xl text-[#f6f8f1] font-bold leading-tight",
                        children: [
                          "Enterprise IT Systems",
                          s.jsx("span", {
                            className: "block text-[#f2a92a] py-4",
                            children: s.jsx(ux, {
                              sequence: [
                                "Reliability",
                                2e3,
                                "Performance",
                                500,
                                "Uptime",
                                2e3,
                                "Scale",
                                2e3,
                                "Support",
                                2e3,
                              ],
                              wrapper: "span",
                              speed: 50,
                              repeat: 1 / 0,
                            }),
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-lg text-[#f6f8f1]",
                        children:
                          "Supplying premium new and refurbished IT hardware backed by enterprise-grade support and reliable warranties.",
                      }),
                      s.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [
                          s.jsx(F, {
                            to: "/products",
                            className:
                              "bg-[#748cac] hover:bg-[#f2a92a] text-white px-6 py-3 rounded-md font-semibold",
                            children: "Browse Products",
                          }),
                          s.jsxs("a", {
    href: "https://wa.me/17372104824?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote",
    target: "_blank",
    rel: "noopener noreferrer",
    className:
      "flex items-center space-x-2 text-blue-100 hover:bg-[#f2a92a] border border-[#f6f8f1] hover:border-0 px-6 py-3 rounded-md font-semibold",
    children: [
      s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5", viewBox: "0 0 24 24", fill: "currentColor", children: s.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
      s.jsx("span", { children: "Contact on Whatsapp" }),
    ],
  }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "mt-10 lg:mt-0",
                    children: s.jsx("img", {
                      src: Tx,
                      alt: "Server Equipment",
                      className: "w-full max-w-md rounded-lg",
                    }),
                  }),
                ],
              }),
            }),
            
            s.jsx("section", {
              className: "py-20 bg-gray-50",
              children: s.jsxs("div", {
                className: "max-w-7xl mx-auto px-4",
                children: [
                  s.jsxs("div", {
                    className: "text-center mb-16",
                    children: [
                      s.jsx("h2", {
                        className:
                          "text-3xl lg:text-4xl font-bold text-slate-900 mb-4",
                        children: "Product Categories",
                      }),
                      s.jsx("p", {
                        className: "text-xl text-gray-600",
                        children:
                          "Explore our comprehensive range of enterprise IT hardware",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: Ux.map((g, x) =>
                      s.jsxs(
                        F,
                        {
                          to: g.href,
                          className:
                            "group bg-white rounded-2xl border border-gray-300 overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-2",
                          children: [
                            s.jsx("div", {
                              className: "relative h-48 overflow-hidden",
                              children: s.jsx("img", {
                                src: g.image,
                                alt: g.name,
                                className: "w-full h-full object-contain group-hover:scale-110 transition-transform duration-300",
                              }),
                            }),
                            s.jsxs("div", {
                              className: "p-6",
                              children: [
                                s.jsx("h3", {
                                  className:
                                    "text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors",
                                  children: g.name,
                                }),
                                s.jsx("p", {
                                  className: "text-gray-600 mb-4",
                                  children: g.description,
                                }),
                                s.jsxs("div", {
                                  className:
                                    "flex items-center text-blue-600 font-medium",
                                  children: [
                                    s.jsx("span", { children: "Shop Now" }),
                                    s.jsx(Jr, {
                                      className:
                                        "w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        x
                      )
                    ),
                  }),
                ],
              }),
            }),

            s.jsx("section", {
              className: "bg-white py-12",
              children: s.jsx("div", {
                className:
                  "max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4",
                children: Wx.map((g, x) =>
                  s.jsx(
                    "section",
                    {
                      className:
                        "flex flex-col justify-between rounded-xl min-h-[300px] flex-1 p-10",
                      style: {
                        backgroundImage: `url(${g.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "inset 0 0 0 1000px rgba(14, 13, 13, 0.57)",
                      },
                      children: s.jsxs("div", {
                        className: "max-w-[460px]",
                        children: [
                          s.jsx("p", {
                            className: "text-sm text-[#f6f8f1] mb-1",
                            children: g.subtitle,
                          }),
                          s.jsx("h3", {
                            className:
                              "text-3xl font-bold leading-tight text-[#f6f8f1] mb-6",
                            children: g.title,
                          }),
                          s.jsx(F, {
                            to: "/",
                            className:
                              "inline-block border border-[#748cac] rounded-md px-6 py-2 bg-[#193154] text-[#f6f8f1] font-medium hover:bg-[#f2a92a] hover:border-0 transition",
                            children: g.buttonLabel,
                          }),
                        ],
                      }),
                    },
                    x
                  )
                ),
              }),
            }),

            s.jsx("section", {
              className: "py-20 px-5 text-black",
              children: s.jsxs("div", {
                className:
                  "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-10",
                children: [
                  s.jsxs("div", {
                    className: "flex-1 max-w-xl text-center",
                    children: [
                      s.jsxs("h2", {
                        className: "text-4xl font-semibold mb-4",
                        children: [
                          "Meet ",
                          s.jsx("span", {
                            className: "text-[#f2a92a] font-bold",
                            children: "GTR Supply",
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-[#193154] mb-6",
                        children:
                          "GTR Supply is a B2B technology provider offering desktops, refurbished servers, data storage solutions, IP phones, and networking equipment.",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "flex-1 min-w-[300px] max-w-md",
                    children: s.jsx("img", {
                      src: Mx,
                      alt: "Server hardware demo",
                      className: "w-full rounded-lg",
                    }),
                  }),
                ],
              }),
            }),
            s.jsx("section", {
              className: "py-16 bg-white",
              children: s.jsx("div", {
                className: "max-w-7xl mx-auto px-4",
                children: s.jsx("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
                  children: Bx.map((g, x) =>
                    s.jsxs(
                      "div",
                      {
                        children: [
                          s.jsxs("div", {
                            className: "text-3xl font-bold text-[#193154] mb-2",
                            children: [
                              s.jsx(Ex, { end: g.number, duration: 2 }),
                              g.suffix,
                            ],
                          }),
                          s.jsx("div", {
                            className: "text-gray-600 font-medium",
                            children: g.label,
                          }),
                        ],
                      },
                      x
                    )
                  ),
                }),
              }),
            }),
            
            s.jsx("section", {
              className: "py-16",
              children: s.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 text-center",
                children: [
                  s.jsx("h2", {
                    className: "text-3xl font-semibold text-[#193154] mb-10",
                    children: "Our Trusted Partners",
                  }),
                  s.jsx("div", {
                    className:
                      "flex flex-wrap justify-center items-center gap-12",
                    children: Zx.map((g, x) =>
                      s.jsx(
                        "img",
                        {
                          src: g.src,
                          alt: g.name,
                          className:
                            "object-cover grayscale hover:grayscale-0 transition duration-300",
                        },
                        x
                      )
                    ),
                  }),
                ],
              }),
            }),
            s.jsx("section", {
              className: "py-12 px-4 flex justify-center",
              children: s.jsx("div", {
                className: "flex flex-wrap gap-4 max-w-6xl w-full",
                children: Qx.map((g, x) =>
                  s.jsxs(
                    "div",
                    {
                      className:
                        "bg-[#e6f5f5] transition-colors rounded-lg p-6 flex items-center gap-4 shadow-md flex-1 min-w-[280px]",
                      "aria-label": g.aria,
                      children: [
                        s.jsx("div", {
                          className:
                            "w-12 h-12 rounded-full bg-white shadow flex items-center justify-center",
                          children: s.jsx("img", {
                            src: g.icon,
                            alt: `${g.label} icon`,
                            className: "w-7 h-7 object-contain",
                          }),
                        }),
                        s.jsx("div", {
                          className: "flex flex-col gap-0.5",
                          children:
                            g.label === "Teams"
                              ? s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsxs("div", {
                                      className:
                                        "text-[1.05rem] font-bold text-[#082d74]",
                                      children: [
                                        "Email:",
                                        " ",
                                        s.jsx("a", {
                                          href: `mailto:${g.email}`,
                                          className:
                                            "underline hover:text-blue-900",
                                          children: g.email,
                                        }),
                                      ],
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-[#151515]",
                                      children: g.subtitle,
                                    }),
                                  ],
                                })
                              : g.label === "Phone"
                              ? s.jsxs("div", {
                                  className: "text-sm text-[#151515]",
                                  children: [
                                    g.subtitle,
                                    " ",
                                    s.jsx("span", {
                                      className: "font-bold",
                                      children: g.phone,
                                    }),
                                  ],
                                })
                              : s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx("div", {
                                      className:
                                        "text-[1.05rem] font-bold text-[#082d74]",
                                      children: g.label,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-[#151515]",
                                      children: g.subtitle,
                                    }),
                                  ],
                                }),
                        }),
                      ],
                    },
                    x
                  )
                ),
              }),
            }),
          ],
        }),
      ],
    });
  },
  Bm = v.memo(
    ({
      product: e,
      viewMode: t,
      onAddToCart: r,
      onWishlistToggle: n,
      isInWishlist: i,
    }) =>
      s.jsxs("div", {
        className: `bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group flex flex-col ${
          t === "list" ? "flex" : ""
        }`,
        children: [
          s.jsxs("div", {
            className: `relative ${t === "list" ? "w-48 flex-shrink-0" : ""}`,
            children: [
              s.jsx(F, {
                to: `/products/${e.id}`,
                children: s.jsx("img", {
                  src: e.image,
                  alt: e.name,
                  className: `w-full object-contain transition-transform duration-200 group-hover:scale-105 ${
                    t === "list" ? "h-32 rounded-l-lg" : "h-48 rounded-t-lg"
                  }`,
                  loading: "lazy",
                }),
              }),
              s.jsx("div", {
                className: "absolute top-2 left-2 flex flex-col space-y-1",
                children: s.jsx("span", {
                  className: `px-2 py-1 text-xs font-medium rounded-full ${
                    e.condition === "new"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`,
                  children: e.condition === "new" ? "New" : "Refurbished",
                }),
              }),
              
            ],
          }),
          s.jsxs("div", {
            className: `p-4 flex flex-col flex-1 ${
              t === "list" ? "justify-between" : ""
            }`,
            children: [
              s.jsxs("div", {
                className: "flex-1",
                children: [
                  s.jsxs("div", {
                    className: "mb-2",
                    children: [
                      s.jsxs("p", {
                        className:
                          "text-xs text-gray-500 uppercase tracking-wide font-medium",
                        children: [e.brand, " â€¢ ", e.category],
                      }),
                      s.jsx(F, {
                        to: `/products/${e.id}`,
                        children: s.jsx("h3", {
                          className:
                            "font-semibold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2 leading-tight",
                          children: e.name,
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex items-center mb-3",
                    children: [
                      s.jsx("div", {
                        className: "flex items-center",
                        children: Array.from({ length: 5 }).map((a, l) =>
                          s.jsx(
                            fo,
                            {
                              className: `w-4 h-4 ${
                                l < Math.floor(e.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`,
                            },
                            l
                          )
                        ),
                      }),
                      s.jsxs("span", {
                        className: "ml-2 text-sm text-gray-600",
                        children: [e.rating, " (", e.reviews, ")"],
                      }),
                    ],
                  }),
                  t === "grid" &&
                    e.specifications &&
                    s.jsx("div", {
                      className: "mb-4 text-sm text-gray-600 min-h-[3rem]",
                      children: Object.entries(e.specifications)
                        .slice(0, 2)
                        .map(([a, l]) =>
                          s.jsxs(
                            "div",
                            {
                              className: "flex justify-between",
                              children: [
                                s.jsxs("span", {
                                  className: "font-medium",
                                  children: [a, ":"],
                                }),
                                s.jsx("span", { children: l }),
                              ],
                            },
                            a
                          )
                        ),
                    }),
                ],
              }),
              // ...existing code...
              s.jsx("div", {
                className: "mt-auto",
                children: s.jsxs("button", {
                  onClick: (ev) => { ev.preventDefault(); ev.stopPropagation(); window.open(`https://wa.me/17372104824?text=${encodeURIComponent(`Hi, I'm interested in ${e.name}`)}`, '_blank'); },
                  disabled: !e.inStock,
                  className: `w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg font-medium transition-all duration-200 ${
                    e.inStock
                      ? "bg-[#132c52] hover:bg-[#f7a414] text-white hover:shadow-lg transform hover:-translate-y-0.5"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`,
                  children: [
                    s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", children: s.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                    s.jsx("span", {
                      children: e.inStock ? "Contact on Whatsapp" : "Out of Stock",
                    }),
                  ],
                }),
              }),
// ...existing code...
            ],
          }),
        ],
      })
  );
Bm.displayName = "ProductCard";
const Wm = v.memo(
  ({
    showFilters: e,
    selectedBrand: t,
    selectedCondition: r,
    minPrice: n,
    maxPrice: i,
    updateSearchParams: a,
    products: l,
  }) => {
    const {
      brands: o,
      conditions: c,
      priceRange: u,
    } = v.useMemo(() => {
      const d = new Set(l.map((g) => g.brand)),
        h = new Set(l.map((g) => g.condition)),
        f = l.map((g) => g.price);
      return {
        brands: Array.from(d).sort(),
        conditions: Array.from(h).sort(),
        priceRange: { min: Math.min(...f), max: Math.max(...f) },
      };
    }, [l]);
    return e
      ? s.jsx("div", {
          className: "mt-6 pt-6 border-t border-gray-200",
          children: s.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: ["Brand (", o.length, ")"],
                  }),
                  s.jsxs("select", {
                    value: t,
                    onChange: (d) => a("brand", d.target.value),
                    className:
                      "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    children: [
                      s.jsx("option", { value: "", children: "All Brands" }),
                      o.map((d) =>
                        s.jsx("option", { value: d, children: d }, d)
                      ),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "Condition",
                  }),
                  s.jsxs("select", {
                    value: r,
                    onChange: (d) => a("condition", d.target.value),
                    className:
                      "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    children: [
                      s.jsx("option", {
                        value: "",
                        children: "All Conditions",
                      }),
                      c.map((d) =>
                        s.jsx(
                          "option",
                          {
                            value: d,
                            children: d.charAt(0).toUpperCase() + d.slice(1),
                          },
                          d
                        )
                      ),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: [
                      "Price Range ($",
                      u.min.toLocaleString(),
                      " - $",
                      u.max.toLocaleString(),
                      ")",
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex space-x-2",
                    children: [
                      s.jsx("input", {
                        type: "number",
                        placeholder: "Min",
                        min: u.min,
                        max: u.max,
                        value: n || "",
                        onChange: (d) => a("minPrice", d.target.value),
                        className:
                          "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      }),
                      s.jsx("input", {
                        type: "number",
                        placeholder: "Max",
                        min: u.min,
                        max: u.max,
                        value: i === 5e4 ? "" : i,
                        onChange: (d) => a("maxPrice", d.target.value),
                        className:
                          "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "Quick Filters",
                  }),
                  s.jsxs("div", {
                    className: "flex flex-col space-y-2",
                    children: [
                      s.jsx("button", {
                        onClick: () => a("condition", "new"),
                        className: `text-left px-3 py-1 rounded text-sm transition-colors ${
                          r === "new"
                            ? "bg-blue-100 text-blue-800"
                            : "text-gray-600 hover:bg-gray-100"
                        }`,
                        children: "New Only",
                      }),
                      s.jsx("button", {
                        onClick: () => a("condition", "refurbished"),
                        className: `text-left px-3 py-1 rounded text-sm transition-colors ${
                          r === "refurbished"
                            ? "bg-blue-100 text-blue-800"
                            : "text-gray-600 hover:bg-gray-100"
                        }`,
                        children: "Refurbished Only",
                      }),
                      s.jsx("button", {
                        onClick: () => {
                          a("maxPrice", "1000");
                        },
                        className:
                          "text-left px-3 py-1 rounded text-sm text-gray-600 hover:bg-gray-100 transition-colors",
                        children: "Under $1,000",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  }
);
Wm.displayName = "ProductFilters";
const Zm = v.memo(({ currentPage: e, totalPages: t, onPageChange: r }) => {
  const i = (() => {
    const l = [],
      o = [];
    for (let c = Math.max(2, e - 2); c <= Math.min(t - 1, e + 2); c++)
      l.push(c);
    return (
      e - 2 > 2 ? o.push(1, "...") : o.push(1),
      o.push(...l),
      e + 2 < t - 1 ? o.push("...", t) : t > 1 && o.push(t),
      o.filter((c, u, d) => d.indexOf(c) === u)
    );
  })();
  return s.jsxs("div", {
    className: "flex items-center justify-center space-x-1",
    children: [
      s.jsxs("button", {
        onClick: () => r(e - 1),
        disabled: e === 1,
        className: `flex items-center px-3 py-2 rounded-lg border transition-colors ${
          e === 1
            ? "text-gray-400 border-gray-200 cursor-not-allowed"
            : "text-gray-600 border-gray-300 hover:bg-gray-50"
        }`,
        children: [s.jsx(ag, { className: "w-4 h-4 mr-1" }), "Previous"],
      }),
      s.jsx("div", {
        className: "flex items-center space-x-1",
        children: i.map((a, l) =>
          s.jsx(
            Ze.Fragment,
            {
              children:
                a === "..."
                  ? s.jsx("span", {
                      className: "px-3 py-2 text-gray-400",
                      children: "...",
                    })
                  : s.jsx("button", {
                      onClick: () => r(a),
                      className: `px-3 py-2 rounded-lg border transition-colors ${
                        e === a
                          ? "bg-blue-600 text-white border-blue-600"
                          : "text-gray-600 border-gray-300 hover:bg-gray-50"
                      }`,
                      children: a,
                    }),
            },
            l
          )
        ),
      }),
      s.jsxs("button", {
        onClick: () => r(e + 1),
        disabled: e === t,
        className: `flex items-center px-3 py-2 rounded-lg border transition-colors ${
          e === t
            ? "text-gray-400 border-gray-200 cursor-not-allowed"
            : "text-gray-600 border-gray-300 hover:bg-gray-50"
        }`,
        children: ["Next", s.jsx(lg, { className: "w-4 h-4 ml-1" })],
      }),
    ],
  });
});
Zm.displayName = "Pagination";
const Um = () => [
    {
      id: "desktop-1",
      name: "Optiplex-9020 - Dell Optiplex 9020 MT i7 4790 16GB GTX 1650 512GB SSD 1TB HDD Windows 10 Pro",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Categories/desktoppc.webp",
      rating: 4.9,
      reviews: 120,
      inStock: !0,
      specifications: { Processor: "MT i7 4790", RAM: "16GB" },
    },
    {
      id: "desktop-2",
      name: "DX60AV - HP ProDesk 600 G5 SFF Intel Core i3-9300 3.70GHz 16GB RAM 256GB M.2 Win 11 Pro",
      brand: "HP",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Categories/desktoppc.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "Intel Core i3-9300", RAM: "16GB" },
    },
    {
      id: "desktop-3",
      name: "C68TT - Dell Wyse 5070 Celeron J4105 Thin Client",
      brand: "dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Categories/desktoppc.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "//", RAM: "//" },
    },
    {
      id: "desktop-4",
      name: "HP 4BV85UT#ABA ProDesk 400 G5 SFF Intel Core i3-8100 3.60GHz 500GB SATA Hard Drive 4GB DDR4 SDRAM 10 Pro Desktop PC",
      brand: "HP",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Categories/desktoppc.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "Intel Core i3-8100", RAM: "4GB " },
    },
    {
      id: "desktop-5",
      name: "Dell OptiPlex 7000 7020 Plus Desktop Computer - Intel Core i7 14th Gen i7-14700 - vPro Technology - 16 GB - 256 GB SSD",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Categories/desktoppc.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "i7-14700", RAM: "16GB" },
    },
    {
      id: "desktop-6",
      name: "HP NP119AA Pavilion Slimline s5120la E5200 2.5GHz 4GB RAM 320GB Hard Drive Desktop",
      brand: "HP",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/All-Desktop-PC-Gen.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "s5120la E5200", RAM: "4GB" },
    },
    {
      id: "desktop-7",
      name: "HP P5778T Vectra Vl420Dt Intel Pentium 4 1.6GHz 128MB RAM 20GB Hard Drive Desktop",
      brand: "HP",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/All-Desktop-PC-Gen.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "Intel Pentium 4", RAM: "128MB" },
    },
    {
      id: "desktop-8",
      name: "Lenovo 11DN0097US ThinkCentre M80q Core i3-10100T 3GHz Quad-core (4 Core) 8GB DDR4 128GB M.2 PCIE NVMe 3.0 x2 SSD Win 10 Pro Tiny - Black",
      brand: "Lenovo",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/11dn0097us-o_lzvoyiheh8d890xp.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "i3-10100T", RAM: "8GB" },
    },
    {
      id: "desktop-9",
      name: "Lenovo 11LV008AUS ThinkCentre M60e Core i3-1005G1 1.20GHz 2-Core 8GB DDR4 256GB NVMe M.2 PCIE PCIE NVMe 3.0 x4 SSD Tiny - Black",
      brand: "Lenovo",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/11lv008aus-o_hcxhghrt0ecaoqsk.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "i3-1005G1", RAM: "8GB" },
    },
    {
      id: "desktop-10",
      name: "Dell Aurora-R10F Alienware Aurora R10 Ryzen 7 5800X 64GB RAM RTX 3080 10GB 2TB SSD Desktop PC",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/11lv008aus-o_hcxhghrt0ecaoqsk.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "Ryzen 7 5800X", RAM: "64GB" },
    },
    {
      id: "desktop-11",
      name: "Lenovo 11DT002AUS ThinkCentre M70q Intel Core i5 i5-10400T 8GB DDR4-SDRAM 256 GB SSD mini PC",
      brand: "Lenovo",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/11dt002aus_1jldw7n9eee9rmvn.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "i5-10400T", RAM: "8GB" },
    },
    {
      id: "desktop-12",
      name: "Lenovo 12JF0002US ThinkCentre neo 50s Gen4 Core i5-13400 2.50GHz (10 Core) 16GB DDR4 256GB M.2 PCIE NVMe 4.0 x4 SSD SFF - Black",
      brand: "Lenovo",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/12jf0002us-o_fkzf3uk6jiy2past.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "i5-13400", RAM: "16GB" },
    },
    {
      id: "desktop-13",
      name: "Lenovo F0G100SHUS 23.8-inch IdeaCentre 3 Ryzen 5 7530U 8GB Ram 512GB Hard Drive All-in-One Computer",
      brand: "Lenovo",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/f0g100shus-o_obw3kg98wyhdzirt.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "Ryzen 5 7530U", RAM: "8GB" },
    },
    {
      id: "desktop-14",
      name: "Dell OPTIPLEX9010AIOI7 Intel Core i5 3570S 3.1GHz 4GB RAM 500GB HDD DVDRW ?DDR3 SDRAM LAN Webcam Integrated Graphics Windows 7? All-in-One Desktop",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/optiplex9010-o_8nwgtygjh3dlvgyf.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "i5 3570S", RAM: "4GB" },
    },
    {
      id: "desktop-15",
      name: "Dell OPTIPLEX7050I5 Intel Core i5-7500 256GB SSD 8GB RAM 1 X DisplayPort 1 X DVI 1 X RJ/45 1 X HDMI 1 X USB Windows 10 Pro Desktop",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "desktops",
      image:
        "https://cdn.cmshardware.com/images/Images/Products/optiplex7050i5-o_ay0gz89nc8kg6kat.webp",
      rating: 4.9,
      reviews: 230,
      inStock: !0,
      specifications: { Processor: "i5-7500", RAM: "8GB" },
    },
    {
      id: "memory-1",
      name: "Cisco 64GB UCS-ML-X64G4RS-H DDR4 2666MHz (PC4-21300V-L) 4Rx4 Server Memory",
      brand: "Cisco",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/1/815101_b21_samsung_64gb_1x64gb_pc4_21300_4drx4_memory_1_8_c2cc.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.8,
      reviews: 90,
      inStock: !0,
      specifications: { Capacity: "64GB", DDR: "DDR4" },
    },
    {
      id: "memory-2",
      name: "Cisco 64GB P06192-001 PC4-23400Y-R 2Rx4 Server Memory Kit",
      brand: "Samsung",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/U/C/UCS_MR_X64G2RT_H_cisco_64gb_1x64gb_pc4_23400y_2rx4_memory_1_0753.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "64GB", Speed: "DDR4" },
    },
    {
      id: "memory-3",
      name: "Hynix 8GB HMA81GR7AFR8N-VK PC4-21300V-R 1RX8 Server Memory",
      brand: "Hynix",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/5/1/51375_f48f.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "8GB", Speed: "DDR4" },
    },
    {
      id: "memory-4",
      name: "Dell 16GB AA940922 2Rx8 PC4-21300V-E Server Memory",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/S/N/SNPDFK3YC_16G_dell_16gb_1x16gb_pc4_21300v_2rx8_memory_01_698d.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "16GB", Speed: "DDR4" },
    },
    {
      id: "memory-5",
      name: "Samsung 32GB 868843-001 PC4-20800V 2Rx4 Server Memory",
      brand: "Samsung",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/5/3/53160_dd1c.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "32GB", Speed: "DDR4" },
    },
    {
      id: "memory-6",
      name: "Cisco 16GB UCS-MR-X16G1RS-H PC4-21300V 1Rx4 Server Memory",
      brand: "Cisco",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/5/1/51111_4a81.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "16GB", Speed: "DDR4" },
    },
    {
      id: "memory-7",
      name: "Crucial 8GB CT8G4RFD8266 PC4-20800VR 2Rx8 Server Memory",
      brand: "Crucial",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/5/2/52222_e0dc.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "8GB", Speed: "DDR4" },
    },
    {
      id: "memory-8",
      name: "HP 32GB 809083-091 PC4-19200T-R 2Rx4 Server Memory",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/2/42905_5b7d.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "32GB", Speed: "DDR4" },
    },
    {
      id: "memory-9",
      name: "Samsung 128GB UCS-MR-128G8RS-H PC4-21300V-R 8Rx4 Server Memory",
      brand: "Samsung",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/m/3/m393aak40b42_cwd_samsung_128gb_1x128gb_pc4_2666v_2s4rx4_memory_1_1_95b3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "32GB", Speed: "DDR4" },
    },
    {
      id: "memory-10",
      name: "Samsung 64GB 850882-001 PC4-21300-LR 4DRX4 Server Memory",
      brand: "Samsung",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/1/815101_b21_samsung_64gb_1x64gb_pc4_21300_4drx4_memory_1_2_174f.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "64GB", Speed: "DDR4" },
    },
    {
      id: "memory-11",
      name: "Lenovo 32GB 47J0254 PC4-2133P 4Rx4 Server Memory",
      brand: "Lenovo",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/5/45684_111e.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "32GB", Speed: "DDR4" },
    },
    {
      id: "memory-12",
      name: "Hynix 64GB HMAA8GL7MMR4N-UH PC4-2400T 4Rx4 Server Memory",
      brand: "Hynix",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/4/44598_e0b9.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "64GB", Speed: "DDR4" },
    },
    {
      id: "memory-13",
      name: "SAMSUNG 32GB 815100-B21 PC4-21300V-R 2RX4 Server Memory",
      brand: "Samsung",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/8/48783_3864.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "32GB", Speed: "DDR4" },
    },
    {
      id: "memory-14",
      name: "Hynix 16GB HMA42GR7AFR4N-UH 2RX4 PC4-2400T Server Memory",
      brand: "Hynix",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/6/46816_e2d4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "16GB", Speed: "DDR4" },
    },
    {
      id: "memory-15",
      name: "Hynix 16GB HMA42GR7AFR4N-UH 2RX4 PC4-2400T Server Memory",
      brand: "Hynix",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/6/46816_e2d4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "16GB", Speed: "DDR4" },
    },
    {
      id: "memory-16",
      name: "Hynix 8GB 815097-B21 1RX8 PC4-21300V-R Server Memory",
      brand: "Hynix",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/5/1/51371_0951.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "8GB", Speed: "DDR4" },
    },
    {
      id: "memory-17",
      name: "HP 8GB 851353-B21 1RX8 PC4-2400T Server Memory",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/5/45590_5973.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "8GB", Speed: "DDR4" },
    },
    {
      id: "memory-18",
      name: "HP 32GB 809083-091 PC4-19200T-R 2Rx4 Server Memory",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/2/42905_5b7d.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "32GB", Speed: "DDR4" },
    },
    {
      id: "memory-19",
      name: "Samsung 64GB 850882-001 PC4-21300-LR 4DRX4 Server Memory",
      brand: "Samsung",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/1/815101_b21_samsung_64gb_1x64gb_pc4_21300_4drx4_memory_1_2_174f.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "64GB", Speed: "DDR4" },
    },
    {
      id: "memory-20",
      name: "Lenovo 32GB 47J0254 PC4-2133P 4Rx4 Server Memory",
      brand: "Lenovo",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/5/45684_111e.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "32GB", Speed: "DDR4" },
    },
    {
      id: "memory-21",
      name: "Samsung 32GB 868843-001 PC4-20800V 2Rx4 Server Memory",
      brand: "Samsung",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/5/3/53160_dd1c.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "32GB", Speed: "DDR4" },
    },
    {
      id: "memory-22",
      name: "Cisco 16GB UCS-MR-X16G1RS-H PC4-21300V 1Rx4 Server Memory",
      brand: "Cisco",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/5/1/51111_4a81.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "16GB", Speed: "DDR4" },
    },
    {
      id: "memory-23s",
      name: "Samsung 128GB UCS-MR-128G8RS-H PC4-21300V-R 8Rx4 Server Memory",
      brand: "Samsung",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "memory",
      image:
        "https://www.techbuyer.com/media/catalog/product/m/3/m393aak40b42_cwd_samsung_128gb_1x128gb_pc4_2666v_2s4rx4_memory_1_1_95b3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "128GB", Speed: "DDR4" },
    },
    {
      id: "storage-1",
      name: "Seagate ST91000640SS Hard Drive 1TB 7.2K Dual Port SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/s/t/st91000640ss_seagate_1tb_6g_constellation_2.5in_sas_hdd_11_caa4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.8,
      reviews: 90,
      inStock: !0,
      specifications: { Capacity: "1 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-2",
      name: "SEAGATE ST10000NM0096 10TB Hard Drive 7.2K SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/S/T/ST10000NM0096_seagate_10tb_12gbps_7.2k_3.5in_sas_hdd_1_9ce5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "10 TB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "storage-3",
      name: "Seagate 2C6200-001 Hard Drive 300GB 10K SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/s/t/st300mm0048_seagate_300gb_10k_2.5in_sas_hdd_1_1_1_aca5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "300 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-4",
      name: "Seagate ST900MM0168 900GB Hard Drive 10k SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/S/T/ST900MM0168_seagate_900gb_10k_sas_hdd_01_e830.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "900 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-5",
      name: "Seagate 9YZ254-002 Constellation Hard Drive 1TB 7.2K SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/s/t/st1000nm0001b_seagate_1tb_7.2k_sas_6g_3.5_hdd_1_14_0100.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1  TB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "storage-6",
      name: "Seagate 9WH066-175 Hard Drive 900GB 10K SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/s/t/st900mm0006_seagate_900gb_10k_2.5in_sas_hdd_1_2_cfd7.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "900 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-7",
      name: "Seagate ST1200MM0088 Hard Drive 1.2TB 10K SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/3/6/36rh9_dell_1.2tb_10k_2.5in_sas_hdd_1_2_7726.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1.2 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-8",
      name: "Seagate ST5000DX000 Hard Drive 5TB 7.2K SATA 3.5inch 6Gbps HDD",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/S/T/ST5000DX000_seagate_5tb_7.2k_3.5in_sata_hdd_1_a0cc.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "5 TB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "storage-9",
      name: "Seagate ST1000NM0023 Hard Drive 1TB 7.2K SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/s/t/st1000nm0023_seagate_1tb_6g_7.2k_3.5in_sas_hdd_1_bacd.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1 TB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "storage-10",
      name: "Seagate ST2000NM0045 Hard Drive 2TB 7.2K SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/s/t/st2000nm0045_seagate_2tb_7.2k_12g_3.5in_sas_hdd_1_c466.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1 TB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "storage-11",
      name: "HP 781518-B21 Hard Drive 1.2TB 10K SAS",
      brand: "HP/HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/8/781518_b21_hp_1.2tb_12g_10k_2.5in_sas_hdd_1_1505.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1.2 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-12",
      name: "Dell ST1200MM0099 1.2TB 10K SAS Hard Drive",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/D/E/DELL_2.5IN_HDD__1__84f6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1.2 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-13",
      name: "HP 781577-001 Hard Drive 600GB SAS 10K SC ENT",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/8/781516_b21_hp_600gb_12g_10k_2.5in_sas_hdd_1_9_801e.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "600 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-14",
      name: "HP 787653-001 MSA 2TB 7.2K 12G 2.5inch SAS HDD",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/j/9/j9f51a_hp_msa_2tb_12g_7.2k_2.5in_sas_hdd_1_2_500f.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: " 2 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-15",
      name: "Dell HUH721212AL5200 Hard Drive 12TB 7.2K SAS",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/D/E/DELL_3.5IN_HDD__1__389e.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:capacity:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: " 12 TB", FormFactor: " 3.5 Inch (LFF)" },
    },
    {
      id: "storage-16",
      name: "Dell 67TMT Hard Drive 2TB 7.2K LFF SAS",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/D/E/DELL_3.5IN_HDD__1__389e.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: " 2 TB", FormFactor: " 3.5 Inch (LFF)" },
    },
    {
      id: "storage-17",
      name: "Dell 0GP881 Hard Drive 146GB 10K SAS",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/G/P/GP881_dell_146gb_10k_2.5in_sas_hdd_1_9821.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: " 146 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-18",
      name: "Dell W4K81-EQ EqualLogic 900GB 10K SAS Hard Drive",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/w/4/w4k81_dell_equalogic_900gb_2.5in_sas_hdd_1_5_46e9.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: " 900 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-19",
      name: "HP 653954-001 1TB Hard Disk Drive SAS",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/6/5/652749_b21_hp_1tb_6g_7.2k_2.5in_sas_hdd_1_1_8_b88e.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-20",
      name: "HPE Gen 8/ Gen9/ Gen10 14.4TB Storage Bundle",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/9/791034_B21_hp_bundle__d8d8.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "14.4 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-21",
      name: "Dell 08JRN4 Hard Drive 900GB 10K SFF SAS",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/D/E/DELL_2.5IN_HDD__1__84f6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "900 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-22",
      name: "HPE Gen 8/ Gen9/ Gen10 9.6TB Storage Bundle",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/1/718162_B21_hp_Bundle__ef6a.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "9.6 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-23",
      name: "HP 765266-004 Hard Drive 6TB 7.2K SAS",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/6/765259_b21_hp_6tb_7.2k_3.5in_ssas_hdd_1_7_fc6d.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "6 TB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "storage-24",
      name: "Dell T871K Hard Drive 300GB 10K SAS",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/D/E/DELL_2.5IN_HDD__1__84f6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "300 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-25",
      name: "Dell YJ0GR Hard Drive 300GB 10K SFF SAS",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/Y/J/YJ0GR_dell_300gb_10k_6gbps_2.5in_sas_hdd_1_11e3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "300 GB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-26",
      name: "Seagate 9YZ254-002 Constellation Hard Drive 1TB 7.2K SAS",
      brand: "Seagate",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/s/t/st1000nm0001b_seagate_1tb_7.2k_sas_6g_3.5_hdd_1_14_0100.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1 TB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "storage-27",
      name: "HP P05394-001 Hard Drive 600GB 15K DS SCC SAS",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/p/0/p04695_b21_hp_600gb_15k_3.5in_sas_hdd_1_2_1f8b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "600 GB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "storage-28",
      name: "NetApp 108-00321 1.2TB 10K 6G 2.5inch SAS HDD",
      brand: "Netapp",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/x/4/x425a_r6_netapp_1.2tb_10k_2.5in_sas_hdd_1_4_c7b8.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1.2 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-29",
      name: "Dell 68V42-CL 1.2TB Hard Disk Drive SAS",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/6/8/68v42_cl_dell_compellent_1.2tb_6gb_2.5in_sas_hdd_1_f16f.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1.2 TB", FormFactor: "2.5 Inch (SFF)" },
    },
    {
      id: "storage-30",
      name: "IBM 42D0778 Hard Drive 1TB 7.2K SAS",
      brand: "IBM",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "storage",
      image:
        "https://www.techbuyer.com/media/catalog/product/4/2/42d0778_ibm_1tb_7.2k_6gbps_3.5in_sas_hdd_1_1_8b57.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 45,
      inStock: !0,
      specifications: { Capacity: "1 TB", FormFactor: "3.5 Inch (LFF)" },
    },
    {
      id: "server-1",
      name: "Dell PowerEdge R730XD 24 SFF + 2 SFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/R/7/R730xd_d639.png?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "26 SFF" },
    },
    {
      id: "server-2",
      name: "HPE ProLiant BL460c Gen10 2 SFF Configure To Order Blade Server",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/0/P09524_B21_hp_bl460c_g10_blade_02_8a71.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "2 SFF" },
    },
    {
      id: "server-3",
      name: "Dell PowerEdge R740XD 24 SFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/r/7/r740xd_edec.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "24 SFF" },
    },
    {
      id: "server-4",
      name: "Dell PowerEdge R740XD 12 LFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/r/7/r740xd_12lff_copy_2fdd.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "12 LFF" },
    },
    {
      id: "server-5",
      name: "Dell PowerEdge R640 8SFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/r/6/r640_6dab.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "server-6",
      name: "Dell PowerEdge R640 10SFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/r/6/r640__1__5f2c.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "10 SFF" },
    },
    {
      id: "server-7",
      name: "Dell PowerEdge R730 8SFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/E/PER730ENT_H730MINI_8SFF_DVD_dell_r730_8sff_dvd_blanks_chassis_01_ab58.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "server-8",
      name: "Dell PowerEdge R730 8SFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/E/PER730ENT_H730MINI_8SFF_DVD_dell_r730_8sff_dvd_blanks_chassis_01_ab58.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "server-9",
      name: "Dell PowerEdge R740 8LFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/E/PER730ENT_H730MINI_8SFF_DVD_dell_r730_8sff_dvd_blanks_chassis_01_ab58.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 LFF" },
    },
    {
      id: "server-10",
      name: "Dell PowerEdge R740 8SFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/D/E/DELL_r740_lff_with_bezel_server_1_5391.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "server-11",
      name: "Dell PowerEdge R740 16SFF Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/D/E/DELL_r740_sff_with_bezel_server_1_5483.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "16 SFF" },
    },
    {
      id: "server-12",
      name: "Dell PowerEdge M640 CTO Chassis",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/E/PEM640EXP_S140_2SFF_DUALSAS_dell_m640_blade_server_03_04e1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "2 SFF" },
    },
    {
      id: "server-13",
      name: "Dell Poweredge R740Xd 24SFF Server Chassis",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/r/7/r740xd_8353.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "24 SFF" },
    },
    {
      id: "server-14",
      name: "Dell PowerEdge R640 Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/E/PER640ENT_H740PMINI_8SFF_dell_h740pmini_8sff_dell_server_01_933c.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "server-15",
      name: "Dell PowerEdge M640 S140 Blade Chassis",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/E/PEM640ENT_S140_SATA_dell_pem640_percs140_sata_ent_blade_01_44e7.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "2 SFF" },
    },
    {
      id: "server-16",
      name: "Dell PowerEdge R750 16 SFF + 8 NVMe Configure To Order Rack Server",
      brand: "Dell",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/d/e/dell_r750_server_copy_5ff9.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "16 SFF (8 NVMe)" },
    },
    {
      id: "server-17",
      name: "HPE ProLiant DL380 Gen10 CTO Rack Server",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/6/868703_B21_DVD_hp_dl380_g10_8sff_dvd_server_01_07b6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "16 SFF" },
    },
    {
      id: "server-18",
      name: "HPE ProLiant DL360 G10 8 SFF + 2 SFF NVMe Rack Server Chassis",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/1/P19766_B21_2NVME_hp_proliant_dl360_g10_8sff_2nvme_server_01_8d74.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF 2 SFF" },
    },
    {
      id: "server-19",
      name: "HPE ProLiant DL380 Gen10 24 SFF Configure To Order Rack Server",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/d/l/dl380_G10__de2c.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "24 SFF" },
    },
    {
      id: "server-20",
      name: "HPE ProLiant BL460c Gen10 2 SFF Configure To Order Blade Server",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/0/P09524_B21_hp_bl460c_g10_blade_02_8a71.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "2 SFF" },
    },
    {
      id: "server-21",
      name: "HPE ProLiant DL380 Gen10 8 SFF Configure To Order Rack Server",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/d/l/dl380_G10__de2c.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "server-22",
      name: "HPE ProLiant DL580 Gen10 8 SFF Configure To Order Rack Server",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/d/l/dl580_G10__f347.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "server-23",
      name: "HP ProLiant DL380 Gen9 16 SFF Rack Server Chassis",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/h/p/hp_dl380_g9_16sff_dvd_server_1_1_2d60.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "16 SFF" },
    },
    {
      id: "server-24",
      name: "HPE ProLiant DL380 Gen9 8 SFF Configure To Order Rack Server",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/h/p/hp_dl380_gen9_server_e860.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "server-25",
      name: "HPE ProLiant DL385 Gen10 Plus 8 SFF Rack Server Chassis",
      brand: "HP/ HPE",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "Servers",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/1/P14278_B21_hp_g10_8sff_server_01_ae9e.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: { DriveBays: "8 SFF" },
    },
    {
      id: "cpu-1",
      name: "Intel Xeon Processor E5-2699 v2",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "refurbished",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/3/73432_2ba5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.7,
      reviews: 72,
      inStock: !0,
      specifications: {
        Cores: "18 cores",
        Threads: "36 threads",
        "Base Clock": "2.3 GHz",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-2",
      name: "Intel Xeon Processor E5-2690 v4 UCS-CPU-E52690E",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/0/70250_79c0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "14 cores",
        Threads: "28 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-3",
      name: "Intel Xeon Processor E5-2698 v2",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/1/81645_06a1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "16 cores",
        Threads: "32 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-4",
      name: "Intel Xeon Platinum 8168 Processor CD8067303327701",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/S/R/SR37J_intel_8168_platinum_cpu_01_8982.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "24 cores",
        Threads: " threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-5",
      name: "IBM Intel Xeon Platinum 8176 Processor 01KR003",
      brand: "IBM",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/9/89975_91bd.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "28 cores",
        Threads: "56 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-6",
      name: "Intel Xeon Processor E5-2680 v2",
      brand: "IBM",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/1/71526_afb9.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "12 cores",
        Threads: "24 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-7",
      name: "Intel Xeon Gold Processor 6252",
      brand: "IBM",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/7/1/71526_afb9.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "24 cores",
        Threads: "48 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-7",
      name: "Intel Xeon E5-2637 v4 Processor PKK1D",
      brand: "IBM",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/s/r/sr2p3_intel_e5_2637_v4_cpu_1_2_173a.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "15MB cores",
        Threads: "0 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-8",
      name: "Intel Xeon Processor Gold 6135",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/S/R/SR3B2_intel_6136_gold_cpu_1_e522.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "12 cores",
        Threads: "24 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-9",
      name: "Intel Xeon Processor Platinum 8167M SR3A0",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/S/R/SR3A0_intel_platinum_8167m_cpu_1_2ae3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "26 cores",
        Threads: " threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-10",
      name: "Intel Xeon Silver Processor 4110 SILVER4110",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/5/85013_c8d1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "8 cores",
        Threads: "16 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-11",
      name: "Intel Xeon Processor E5 2697A v4 E5 E5-2697AV4",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/9/1/91009_d8e5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "16 cores",
        Threads: "32 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-12",
      name: "Cisco Intel Xeon Processor E5-2699 v3 UCS-CPU-E52699DC",
      brand: "Cisco",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/6/6/66678_c5b6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "18 cores",
        Threads: "36 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-13",
      name: "Intel Xeon Processor E5 2699 v4 E5 E5-2699V4",
      brand: "Intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/6/6/66678_c5b6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "22 cores",
        Threads: "44 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-14",
      name: "IBM Intel Xeon Platinum 8176 Processor 01KR003",
      brand: "IBM",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/9/89975_91bd.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "28 cores",
        Threads: "56 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-15",
      name: "Intel Xeon Processor E5-2637 V4 00YJ692",
      brand: "intel",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/8/5/85197_85bb.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "4 cores",
        Threads: "8 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-16",
      name: "AMD EPYC Processor 7551",
      brand: "AMD",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/S/PS7551BDVIHAF_amd_epyc_32core_cpu_01_762c.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "32 cores",
        Threads: "64 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-17",
      name: "AMD EPYC 7551 Processor",
      brand: "AMD",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/S/PS7551BDVIHAF_amd_epyc_32core_cpu_01_9905.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "32 cores",
        Threads: "64 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-18",
      name: "AMD EPYC 7551 P00650-001 32-Core 64MB 2GHz Processor",
      brand: "AMD",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/S/PS7551BDVIHAF_amd_epyc_32core_cpu_01_de71.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "2 cores",
        Threads: "64 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-19",
      name: "AMD EPYC Processor 7571 PS7571BDVIHAF",
      brand: "AMD",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/S/PS7571BDVIHAF_AMD_stock_9f85.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "32 cores",
        Threads: "64 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-20",
      name: "AMD EPYC Processor 7251 PS7251BFAFWOF",
      brand: "AMD",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/S/PS7251BFV8SAF_amd_epyc_7251_cpu_01_4b2f.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "8 cores",
        Threads: "64 threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-21",
      name: "AMD EPYC Processor 7251 PS7251BFV8SAF",
      brand: "AMD",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/S/PS7251BFV8SAF_amd_epyc_7251_cpu_01_6dab.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "8 cores",
        Threads: " threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-22",
      name: "AMD EPYC 7251 7251 8-Core 32MB 2.1GHz Processor",
      brand: "AMD",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/S/PS7251BFV8SAF_amd_epyc_7251_cpu_01_6dab.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "8 cores",
        Threads: " threads",
        "Max Turbo": "3.6 GHz",
      },
    },
    {
      id: "cpu-23",
      name: "AMD EPYC 7351 881169-B21 16-Core 64MB 2.4GHz ProLiant DL385 CPU Kit",
      brand: "AMD",
      price: "0.00",
      originalPrice: "0.00",
      condition: "new",
      category: "processors",
      image:
        "https://www.techbuyer.com/media/catalog/product/P/S/PS7351BEVGPAF_amd_16core_cpu_01_0ebe.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      rating: 4.9,
      reviews: 88,
      inStock: !0,
      specifications: {
        Cores: "16 cores",
        Threads: " threads",
        "Max Turbo": "3.6 GHz",
      },
    },
  ],
  nn = 12,
  Kx = () => {
    const [e, t] = W0(),
      [r, n] = v.useState("grid"),
      [i, a] = v.useState("name"),
      [l, o] = v.useState(!1),
      [c, u] = v.useState(e.get("search") || ""),
      [d, h] = v.useState(1),
      [f, g] = v.useState(!1),
      { dispatch: x } = Wr(),
      { addToWishlist: w, removeFromWishlist: S, isInWishlist: p } = Ni(),
      m = e.get("category") || "",
      y = e.get("brand") || "",
      b = e.get("condition") || "",
      j = parseFloat(e.get("minPrice") || "0"),
      N = parseFloat(e.get("maxPrice") || "50000"),
      P = (I) => parseFloat(I.replace(/[^0-9.]/g, "")),
      T = v.useMemo(() => {
        const I = Um();
        return m
          ? I.filter((C) => C.category.toLowerCase() === m.toLowerCase())
          : I;
      }, [m]),
      R = v.useMemo(
        () =>
          T.filter((I) => {
            const C = P(I.price),
              H =
                !c ||
                I.name.toLowerCase().includes(c.toLowerCase()) ||
                I.brand.toLowerCase().includes(c.toLowerCase()) ||
                I.category.toLowerCase().includes(c.toLowerCase()),
              E = !y || I.brand === y,
              L = !b || I.condition === b,
              O = C >= j && C <= N;
            return H && E && L && O;
          }).sort((I, C) => {
            const H = P(I.price),
              E = P(C.price);
            switch (i) {
              case "price-low":
                return H - E;
              case "price-high":
                return E - H;
              case "rating":
                return C.rating - I.rating;
              case "popularity":
                return C.reviews - I.reviews;
              case "name":
              default:
                return I.name.localeCompare(C.name);
            }
          }),
        [T, c, y, b, j, N, i]
      ),
      D = v.useMemo(() => {
        const I = (d - 1) * nn,
          C = I + nn;
        return R.slice(I, C);
      }, [R, d]),
      A = Math.ceil(R.length / nn);
    v.useEffect(() => {
      h(1);
    }, [c, y, b, j, N, m]);
    const fe = v.useCallback(
        (I, C) => {
          t((H) => {
            const E = new URLSearchParams(H);
            return C ? E.set(I, C) : E.delete(I), E;
          });
        },
        [t]
      ),
      Pe = v.useCallback(
        (I) => {
          x({
            type: "ADD_ITEM",
            payload: {
              id: I.id,
              name: I.name,
              price: I.price,
              image: I.image,
              condition: I.condition,
            },
          });
        },
        [x]
      ),
      _e = v.useCallback(
        (I) => {
          p(I.id)
            ? S(I.id)
            : w({
                id: I.id,
                name: I.name,
                price: I.price,
                image: I.image,
                condition: I.condition,
              });
        },
        [w, S, p]
      ),
      Bt = v.useCallback((I) => {
        h(I), window.scrollTo({ top: 0, behavior: "smooth" });
      }, []),
      $e = v.useCallback(() => {
        t(new URLSearchParams()), u(""), h(1);
      }, [t]);
    return s.jsx("div", {
      className: "min-h-screen bg-gray-50",
      children: s.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: [
          s.jsxs("div", {
            className: "mb-8",
            children: [
              s.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: m
                  ? `${m.charAt(0).toUpperCase() + m.slice(1)} Products`
                  : "All Products",
              }),
              s.jsxs("p", {
                className: "text-gray-600",
                children: [
                  "Showing ",
                  (d - 1) * nn + 1,
                  "-",
                  Math.min(d * nn, R.length),
                  " of ",
                  R.length,
                  " products",
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8",
            children: [
              s.jsxs("div", {
                className:
                  "flex flex-col lg:flex-row gap-4 items-center justify-between",
                children: [
                  s.jsxs("div", {
                    className: "relative flex-1 max-w-md",
                    children: [
                      s.jsx(ni, {
                        className:
                          "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                      }),
                      s.jsx("input", {
                        type: "text",
                        value: c,
                        onChange: (I) => u(I.target.value),
                        placeholder: "Search products...",
                        className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      s.jsxs("select", {
                        value: i,
                        onChange: (I) => a(I.target.value),
                        className: "border border-gray-300 rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        children: [
                          s.jsx("option", {
                            value: "name",
                            children: "Sort by Name",
                          }),
                          s.jsx("option", {
                            value: "price-low",
                            children: "Price: Low to High",
                          }),
                          s.jsx("option", {
                            value: "price-high",
                            children: "Price: High to Low",
                          }),
                          s.jsx("option", {
                            value: "rating",
                            children: "Highest Rated",
                          }),
                          s.jsx("option", {
                            value: "popularity",
                            children: "Most Popular",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex border border-gray-300 rounded-lg",
                        children: [
                          s.jsx("button", {
                            onClick: () => n("grid"),
                            className: `p-2 ${
                              r === "grid"
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`,
                            children: s.jsx(dg, { className: "w-5 h-5" }),
                          }),
                          s.jsx("button", {
                            onClick: () => n("list"),
                            className: `p-2 ${
                              r === "list"
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`,
                            children: s.jsx(fg, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                      s.jsxs("button", {
                        onClick: () => o(!l),
                        className:
                          "flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors",
                        children: [
                          s.jsx(Mm, { className: "w-5 h-5" }),
                          " ",
                          s.jsx("span", { children: "Filters" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx(Wm, {
                showFilters: l,
                selectedBrand: y,
                selectedCondition: b,
                minPrice: j,
                maxPrice: N,
                updateSearchParams: fe,
                products: T,
              }),
            ],
          }),
          f
            ? s.jsx("div", {
                className: "flex justify-center items-center py-12",
                children: s.jsx("div", {
                  className:
                    "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600",
                }),
              })
            : s.jsxs(s.Fragment, {
                children: [
                  s.jsx("div", {
                    className: `grid gap-6 mb-8 ${
                      r === "grid"
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        : "grid-cols-1"
                    }`,
                    children: D.map((I) =>
                      s.jsx(
                        F,
                        {
                          to: `/product/${I.id}`,
                          children: s.jsx(Bm, {
                            product: I,
                            viewMode: r,
                            onAddToCart: Pe,
                            onWishlistToggle: _e,
                            isInWishlist: p(I.id),
                          }),
                        },
                        I.id
                      )
                    ),
                  }),
                  A > 1 &&
                    s.jsx(Zm, {
                      currentPage: d,
                      totalPages: A,
                      onPageChange: Bt,
                    }),
                ],
              }),
          R.length === 0 &&
            !f &&
            s.jsxs("div", {
              className: "text-center py-12",
              children: [
                s.jsx("p", {
                  className: "text-gray-500 text-lg mb-4",
                  children: "No products found matching your criteria.",
                }),
                s.jsx("button", {
                  onClick: $e,
                  className: "text-blue-600 hover:text-blue-700 font-medium",
                  children: "Clear all filters",
                }),
              ],
            }),
        ],
      }),
    });
  };
function Uc({ title: e, description: t, image: r, url: n }) {
  return s.jsxs(Un, {
    children: [
      s.jsx("title", {
        children: e ? `${e} | GTR Supply` : "Product | GTR Supply",
      }),
      s.jsx("meta", {
        name: "description",
        content: t || "Detailed specs, warranty and availability.",
      }),
      n && s.jsx("link", { rel: "canonical", href: n }),
      r && s.jsx("meta", { property: "og:image", content: r }),
    ],
  });
}
const Xx = () => {
  const { id: e } = t0(),
    t = lr(),
    [r, n] = v.useState(0),
    [i, a] = v.useState(1),
    [l, o] = v.useState("specs"),
    { dispatch: c } = Wr(),
    { addToWishlist: u, removeFromWishlist: d, isInWishlist: h } = Ni(),
    g = Um().find((j) => j.id === e);
  if (!g)
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(Uc, {
          title: "Product Not Found",
          description: "The product you're looking for doesn't exist.",
          url: "https://serverdirect.us/products",
        }),
        s.jsx("div", {
          className: "min-h-screen bg-gray-50 font-sans",
          children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
              s.jsxs("button", {
                onClick: () => t("/products"),
                className:
                  "flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors",
                children: [
                  s.jsx(Fc, { className: "w-4 h-4 mr-2" }),
                  "Back to Products",
                ],
              }),
              s.jsxs("div", {
                className: "text-center",
                children: [
                  s.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Product Not Found",
                  }),
                  s.jsx("p", {
                    className: "text-gray-600",
                    children: "The product you're looking for doesn't exist.",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  const x = {
      ...g,
      images: [
        g.image,
        g.image.replace(
          /\?.*$/,
          "?quality=80&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=:"
        ),
        g.image.replace(
          /\?.*$/,
          "?quality=80&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=:"
        ),
      ].filter(Boolean),
      quantity: Math.floor(Math.random() * 20) + 5,
      description: _x(g.category, g.condition),
      features: $x(g.category, g.condition),
      bulkPricing: ey(parseFloat(g.price.replace(/[$,]/g, ""))),
    },
    w = parseFloat(x.price.replace(/[$,]/g, "")),
    S = x.originalPrice
      ? parseFloat(x.originalPrice.replace(/[$,]/g, ""))
      : null,
    p = () => {
      for (let j = 0; j < i; j++)
        c({
          type: "ADD_ITEM",
          payload: {
            id: x.id,
            name: x.name,
            price: w,
            image: x.images[0],
            condition: x.condition,
          },
        });
    },
    m = () => {
      const j = {
        id: x.id,
        name: x.name,
        price: w,
        image: x.images[0],
        condition: x.condition,
      };
      h(x.id) ? d(x.id) : u(j);
    },
    y = (j) => {
      o((N) => (N === j ? null : j));
    },
    b = `https://serverdirect.us/products/${e}`;
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(Uc, {
        title: x.name,
        description: x.description,
        image: x.images[0],
        url: b,
      }),
      s.jsx("div", {
        className: "min-h-screen bg-gray-50 font-sans",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
          children: [
            s.jsxs("button", {
              onClick: () => t(-1),
              className:
                "flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors",
              children: [
                s.jsx(Fc, { className: "w-4 h-4 mr-2" }),
                "Back to Products",
              ],
            }),
            s.jsxs("div", {
              className: "grid lg:grid-cols-2 gap-12",
              children: [
                s.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    s.jsx("div", {
                      className:
                        "aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden",
                      children: s.jsx("img", {
                        src: x.images[r],
                        alt: x.name,
                        className: "w-full h-full object-contain p-4",
                      }),
                    }),
                    x.images.length > 1 &&
                      s.jsx("div", {
                        className: "flex space-x-2",
                        children: x.images.map((j, N) =>
                          s.jsx(
                            "button",
                            {
                              onClick: () => n(N),
                              className: `w-20 h-20 border-2 rounded-lg overflow-hidden ${
                                r === N ? "border-blue-600" : "border-gray-200"
                              }`,
                              children: s.jsx("img", {
                                src: j,
                                alt: `${x.name} view ${N + 1}`,
                                className: "w-full h-full object-contain p-1",
                              }),
                            },
                            N
                          )
                        ),
                      }),
                  ],
                }),
                s.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("p", {
                          className:
                            "text-sm text-gray-500 uppercase tracking-wide mb-2",
                          children: x.brand,
                        }),
                        s.jsx("h1", {
                          className: "text-3xl font-bold text-slate-900 mb-4",
                          children: x.name,
                        }),
                        s.jsxs("div", {
                          className: "flex items-center space-x-4 mb-4",
                          children: [
                            s.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                s.jsx("div", {
                                  className: "flex text-yellow-400",
                                  children: Array.from({ length: 5 }).map(
                                    (j, N) =>
                                      s.jsx(
                                        fo,
                                        {
                                          className: `w-5 h-5 ${
                                            N < Math.floor(x.rating)
                                              ? "fill-current"
                                              : "text-gray-300"
                                          }`,
                                        },
                                        N
                                      )
                                  ),
                                }),
                                s.jsxs("span", {
                                  className: "ml-2 text-sm text-gray-600",
                                  children: ["(", x.reviews, " reviews)"],
                                }),
                              ],
                            }),
                            s.jsx("span", {
                              className: `px-3 py-1 text-sm font-medium rounded-full ${
                                x.condition === "new"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`,
                              children:
                                x.condition === "new"
                                  ? "New"
                                  : "Certified Refurbished",
                            }),
                          ],
                        }),
                        
                        s.jsx("p", {
                          className: "text-gray-600 leading-relaxed mb-6",
                          children: x.description,
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "border-t border-gray-200 pt-6",
                      children: [
                        
                        s.jsxs("div", {
                          className: "flex space-x-4",
                          children: [
                            s.jsxs("button", {
                              onClick: (ev) => { ev.preventDefault(); ev.stopPropagation(); window.open(`https://wa.me/17372104824?text=${encodeURIComponent(`Hi, I'm interested in ${x.name}`)}`, '_blank'); },
                              disabled: !x.inStock,
                              className:
                                "flex-1 bg-[#132c52] hover:bg-[#0a4545] disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors",
                                
                              children: [
                                s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5", viewBox: "0 0 24 24", fill: "currentColor", children: s.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                                s.jsx("span", { children: "Contact on Whatsapp" }),
                              ],
                            }),
                            
                          ],
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "border-t border-gray-200 pt-6",
                      children: s.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              s.jsx(Dm, { className: "w-5 h-5 text-blue-600" }),
                              s.jsx("span", {
                                className: "text-sm text-gray-600",
                                children: "Fast shipping",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              s.jsx(il, {
                                className: "w-5 h-5 text-purple-600",
                              }),
                              s.jsx("span", {
                                className: "text-sm text-gray-600",
                                children: "Certified quality",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "mt-16 grid lg:grid-cols-3 gap-8",
              children: [
                s.jsxs("div", {
                  className: "lg:col-span-2 space-y-6",
                  children: [
                    s.jsxs("div", {
                      className: "bg-white rounded-lg border border-gray-200",
                      children: [
                        s.jsxs("button", {
                          onClick: () => y("specs"),
                          className:
                            "w-full flex items-center justify-between p-6 text-left",
                          children: [
                            s.jsx("h3", {
                              className: "text-xl font-semibold text-slate-900",
                              children: "Technical Specifications",
                            }),
                            l === "specs"
                              ? s.jsx(Hc, { className: "w-5 h-5" })
                              : s.jsx(ti, { className: "w-5 h-5" }),
                          ],
                        }),
                        l === "specs" &&
                          s.jsx("div", {
                            className: "px-6 pb-6",
                            children: s.jsx("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: Object.entries(x.specifications).map(
                                ([j, N]) =>
                                  s.jsxs(
                                    "div",
                                    {
                                      className: "flex flex-col",
                                      children: [
                                        s.jsx("dt", {
                                          className:
                                            "text-sm font-medium text-gray-500",
                                          children: j,
                                        }),
                                        s.jsx("dd", {
                                          className:
                                            "text-sm text-slate-900 mt-1",
                                          children: N,
                                        }),
                                      ],
                                    },
                                    j
                                  )
                              ),
                            }),
                          }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "bg-white rounded-lg border border-gray-200",
                      children: [
                        s.jsxs("button", {
                          onClick: () => y("features"),
                          className:
                            "w-full flex items-center justify-between p-6 text-left",
                          children: [
                            s.jsx("h3", {
                              className: "text-xl font-semibold text-slate-900",
                              children: "Key Features",
                            }),
                            l === "features"
                              ? s.jsx(Hc, { className: "w-5 h-5" })
                              : s.jsx(ti, { className: "w-5 h-5" }),
                          ],
                        }),
                        l === "features" &&
                          s.jsx("div", {
                            className: "px-6 pb-6",
                            children: s.jsx("ul", {
                              className: "space-y-3",
                              children: x.features.map((j, N) =>
                                s.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start space-x-3",
                                    children: [
                                      s.jsx("div", {
                                        className:
                                          "w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-700",
                                        children: j,
                                      }),
                                    ],
                                  },
                                  N
                                )
                              ),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
function _x(e, t) {
  const r =
      t === "new"
        ? "Brand new with full manufacturer warranty."
        : "Fully tested and 100% functional. Cosmetic wear includes minor marks, light scratches, and small dents on casing (not visible when powered on). All ports work and functionality is intact.",
    n = {
      desktops: `High-performance desktop computer perfect for business or personal use. ${r}`,
      memory: `Server-grade memory module designed for enterprise applications. ${r}`,
      storage: `Enterprise-class storage solution with excellent reliability and performance. ${r}`,
      processors: `Professional-grade processor designed for demanding workloads and applications. ${r}`,
      Servers: `Enterprise server hardware built for mission-critical applications. ${r}`,
      default: `Quality hardware component designed for professional use. ${r}`,
    };
  return n[e] || n.default;
}
function $x(e, t) {
  const r =
    t === "new"
      ? [
          "Brand new condition with original packaging",
          "Full manufacturer warranty included",
          "Latest firmware and drivers pre-installed",
          "Comprehensive quality assurance testing",
        ]
      : [
          "Comprehensively tested and 100% functional",
          "Professional refurbishment process completed",
          "All components verified for optimal performance",
          "Quality assurance certification included",
        ];
  return (
    {
      desktops: [
        ...r,
        "Ready-to-use out of the box",
        "Multiple connectivity options",
        "Energy-efficient design",
        "Compact form factor",
      ],
      memory: [
        ...r,
        "ECC error correction capability",
        "High-speed data transfer rates",
        "Server-grade reliability",
        "Easy installation process",
      ],
      storage: [
        ...r,
        "High-capacity storage solution",
        "Fast data access speeds",
        "Enterprise-grade durability",
        "Hot-swappable design",
      ],
      processors: [
        ...r,
        "Multi-core processing power",
        "Advanced instruction set",
        "Thermal management features",
        "Virtualization support",
      ],
      Servers: [
        ...r,
        "Rack-mountable design",
        "Redundant power supplies",
        "Remote management capabilities",
        "Scalable architecture",
      ],
    }[e] || r
  );
}
function ey(e) {
  return [
    { quantity: "1-4 units", price: e.toLocaleString() },
    { quantity: "5-9 units", price: Math.round(e * 0.92).toLocaleString() },
    { quantity: "10-19 units", price: Math.round(e * 0.84).toLocaleString() },
    { quantity: "20+ units", price: Math.round(e * 0.76).toLocaleString() },
  ];
}
const ty = () => {
    const { state: e, dispatch: t } = Wr(),
      r = (a, l) => {
        t({ type: "UPDATE_QUANTITY", payload: { id: a, quantity: l } });
      },
      n = (a) => {
        t({ type: "REMOVE_ITEM", payload: a });
      },
      i = () => {
        t({ type: "CLEAR_CART" });
      };
    return e.items.length === 0
      ? s.jsx("div", {
          className: "min-h-screen bg-gray-50 py-16",
          children: s.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx(Sg, {
                  className: "w-24 h-24 text-gray-300 mx-auto mb-6",
                }),
                s.jsx("h2", {
                  className: "text-3xl font-bold text-slate-900 mb-4",
                  children: "Your cart is empty",
                }),
                s.jsx("p", {
                  className: "text-gray-600 mb-8",
                  children: "Add some products to get started",
                }),
                s.jsxs(F, {
                  to: "/products",
                  className:
                    "bg-[#122853] hover:bg-[#f5a51c] text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center space-x-2",
                  children: [
                    s.jsx("span", { children: "Browse Products" }),
                    s.jsx(Jr, { className: "w-5 h-5" }),
                  ],
                }),
              ],
            }),
          }),
        })
      : s.jsx("div", {
          className: "min-h-screen bg-gray-50 py-8",
          children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                  s.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900",
                    children: "Shopping Cart",
                  }),
                  s.jsx("button", {
                    onClick: i,
                    className:
                      "text-red-600 hover:text-red-700 font-medium transition-colors",
                    children: "Clear Cart",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                  s.jsx("div", {
                    className: "lg:col-span-2 space-y-4",
                    children: e.items.map((a) =>
                      s.jsx(
                        "div",
                        {
                          className:
                            "bg-white rounded-lg border border-gray-200 p-6",
                          children: s.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              s.jsx(F, {
                                to: `/products/${a.id}`,
                                children: s.jsx("img", {
                                  src: a.image,
                                  alt: a.name,
                                  className:
                                    "w-20 h-20 object-cover rounded-lg hover:opacity-90 transition-opacity",
                                }),
                              }),
                              s.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  s.jsx(F, {
                                    to: `/products/${a.id}`,
                                    children: s.jsx("h3", {
                                      className:
                                        "font-semibold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2",
                                      children: a.name,
                                    }),
                                  }),
                                  s.jsxs("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: [
                                      "Condition: ",
                                      a.condition === "new"
                                        ? "New"
                                        : "Refurbished",
                                    ],
                                  }),
                                  s.jsxs("p", {
                                    className:
                                      "text-lg font-bold text-slate-900 mt-2",
                                    children: ["$", a.price.toLocaleString()],
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  s.jsx("button", {
                                    onClick: () => r(a.id, a.quantity - 1),
                                    className:
                                      "p-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors",
                                    children: s.jsx(xg, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                  s.jsx("span", {
                                    className: "w-8 text-center font-medium",
                                    children: a.quantity,
                                  }),
                                  s.jsx("button", {
                                    onClick: () => r(a.id, a.quantity + 1),
                                    className:
                                      "p-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors",
                                    children: s.jsx(Rm, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "text-right",
                                children: [
                                  s.jsxs("p", {
                                    className: "font-bold text-slate-900",
                                    children: [
                                      "$",
                                      (a.price * a.quantity).toLocaleString(),
                                    ],
                                  }),
                                  s.jsx("button", {
                                    onClick: () => n(a.id),
                                    className:
                                      "text-red-600 hover:text-red-700 mt-2 transition-colors",
                                    children: s.jsx(go, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        a.id
                      )
                    ),
                  }),
                  s.jsxs("div", {
                    className:
                      "bg-white rounded-lg border border-gray-200 p-6 h-fit",
                    children: [
                      s.jsx("h3", {
                        className: "text-xl font-semibold text-slate-900 mb-4",
                        children: "Order Summary",
                      }),
                      s.jsxs("div", {
                        className: "space-y-3 mb-6",
                        children: [
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-gray-600",
                                children: "Subtotal",
                              }),
                              s.jsxs("span", {
                                className: "font-medium",
                                children: ["$", e.total.toLocaleString()],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-gray-600",
                                children: "Shipping",
                              }),
                              s.jsx("span", {
                                className: "font-medium text-green-600",
                                children: e.total >= 500 ? "Free" : "$50",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-gray-600",
                                children: "Tax",
                              }),
                              s.jsxs("span", {
                                className: "font-medium",
                                children: [
                                  "$",
                                  Math.round(e.total * 0.08).toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                          s.jsx("hr", { className: "border-gray-200" }),
                          s.jsxs("div", {
                            className: "flex justify-between text-lg font-bold",
                            children: [
                              s.jsx("span", { children: "Total" }),
                              s.jsxs("span", {
                                children: [
                                  "$",
                                  (
                                    e.total +
                                    (e.total < 500 ? 50 : 0) +
                                    Math.round(e.total * 0.08)
                                  ).toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.total < 500 &&
                        s.jsx("div", {
                          className:
                            "bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6",
                          children: s.jsxs("p", {
                            className: "text-sm text-blue-800",
                            children: [
                              "Add $",
                              (500 - e.total).toLocaleString(),
                              " more for free shipping!",
                            ],
                          }),
                        }),
                      s.jsxs(F, {
                        to: "/checkout",
                        className:
                          "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2",
                        children: [
                          s.jsx("span", { children: "Proceed to Checkout" }),
                          s.jsx(Jr, { className: "w-5 h-5" }),
                        ],
                      }),
                      s.jsx(F, {
                        to: "/products",
                        className:
                          "w-full mt-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors text-center block",
                        children: "Continue Shopping",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  ry = () => {
    const { items: e, removeFromWishlist: t } = Ni(),
      { dispatch: r } = Wr(),
      n = (i) => {
        r({
          type: "ADD_ITEM",
          payload: {
            id: i.id,
            name: i.name,
            price: i.price,
            image: i.image,
            condition: i.condition,
          },
        });
      };
    return e.length === 0
      ? s.jsx("div", {
          className: "min-h-screen bg-gray-50 py-16",
          children: s.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx(ki, {
                  className: "w-24 h-24 text-gray-300 mx-auto mb-6",
                }),
                s.jsx("h2", {
                  className: "text-3xl font-bold text-slate-900 mb-4",
                  children: "Your wishlist is empty",
                }),
                s.jsx("p", {
                  className: "text-gray-600 mb-8",
                  children: "Save items you're interested in for later",
                }),
                s.jsxs(F, {
                  to: "/products",
                  className:
                    "bg-[#193154] hover:bg-[#f2a92a] text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center space-x-2",
                  children: [
                    s.jsx("span", { children: "Browse Products" }),
                    s.jsx(Jr, { className: "w-5 h-5" }),
                  ],
                }),
              ],
            }),
          }),
        })
      : s.jsx("div", {
          className: "min-h-screen bg-gray-50 py-8",
          children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              s.jsxs("div", {
                className: "mb-8",
                children: [
                  s.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900 mb-2",
                    children: "My Wishlist",
                  }),
                  s.jsxs("p", {
                    className: "text-gray-600",
                    children: [
                      e.length,
                      " ",
                      e.length === 1 ? "item" : "items",
                      " saved",
                    ],
                  }),
                ],
              }),
              s.jsx("div", {
                className:
                  "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: e.map((i) =>
                  s.jsxs(
                    "div",
                    {
                      className:
                        "bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
                      children: [
                        s.jsxs("div", {
                          className: "relative",
                          children: [
                            s.jsx(F, {
                              to: `/products/${i.id}`,
                              children: s.jsx("img", {
                                src: i.image,
                                alt: i.name,
                                className:
                                  "w-full h-48 object-cover rounded-t-lg hover:opacity-90 transition-opacity",
                              }),
                            }),
                            s.jsx("button", {
                              onClick: () => t(i.id),
                              className:
                                "absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-red-600 hover:bg-red-50 transition-colors",
                              children: s.jsx(go, { className: "w-4 h-4" }),
                            }),
                            s.jsx("div", {
                              className: "absolute top-2 left-2",
                              children: s.jsx("span", {
                                className: `px-2 py-1 text-xs font-medium rounded-full ${
                                  i.condition === "new"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`,
                                children:
                                  i.condition === "new" ? "New" : "Refurbished",
                              }),
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "p-4",
                          children: [
                            s.jsx(F, {
                              to: `/products/${i.id}`,
                              children: s.jsx("h3", {
                                className:
                                  "font-semibold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2 mb-2",
                                children: i.name,
                              }),
                            }),
                            s.jsx("div", {
                              className: "mb-4",
                              children: s.jsxs("span", {
                                className: "text-2xl font-bold text-slate-900",
                                children: ["$", i.price.toLocaleString()],
                              }),
                            }),
                            s.jsxs("div", {
                              className: "flex space-x-2",
                              children: [
                                s.jsxs("button", {
                                  onClick: () => n(i),
                                  className:
                                    "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2",
                                  children: [
                                    s.jsx(Ci, { className: "w-4 h-4" }),
                                    s.jsx("span", { children: "Add to Cart" }),
                                  ],
                                }),
                                s.jsx(F, {
                                  to: `/products/${i.id}`,
                                  className:
                                    "px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors",
                                  children: "View",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    i.id
                  )
                ),
              }),
            ],
          }),
        });
  },
  ny = () => {
    const [e, t] = v.useState(""),
      [r, n] = v.useState(""),
      [i, a] = v.useState(!1),
      [l, o] = v.useState(""),
      [c, u] = v.useState(!1),
      { login: d } = Zn(),
      h = lr(),
      f = async (g) => {
        g.preventDefault(), o(""), u(!0);
        try {
          (await d(e, r)) ? h("/") : o("Invalid email or password");
        } catch {
          o("Login failed. Please try again.");
        } finally {
          u(!1);
        }
      };
    return s.jsx("div", {
      className:
        "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
      children: s.jsxs("div", {
        className: "max-w-md w-full space-y-8",
        children: [
          s.jsxs("div", {
            className: "text-center",
            children: [
              s.jsx("div", {
                className: "mx-auto w-40 h-16 mb-4",
                children: s.jsx("img", {
                  src: xo,
                  alt: "IT Icon",
                  className: "w-full h-full object-contain rounded-lg",
                }),
              }),
              s.jsx("h2", {
                className: "text-3xl font-bold text-[#122853]",
                children: "Sign in to your account",
              }),
              s.jsxs("p", {
                className: "mt-2 text-gray-600",
                children: [
                  "Or",
                  " ",
                  s.jsx(F, {
                    to: "/register",
                    className:
                      "text-[#122853] hover:text-[#f2a92a] font-medium",
                    children: "create a new account",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-sm border border-gray-200 p-8",
            children: [
              s.jsxs("form", {
                onSubmit: f,
                className: "space-y-6",
                children: [
                  l &&
                    s.jsx("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",
                      children: l,
                    }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        htmlFor: "email",
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "Email Address",
                      }),
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx(Pi, {
                            className:
                              "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                          }),
                          s.jsx("input", {
                            id: "email",
                            type: "email",
                            required: !0,
                            value: e,
                            onChange: (g) => t(g.target.value),
                            className:
                              "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                            placeholder: "Enter your email",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        htmlFor: "password",
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "Password",
                      }),
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx(qn, {
                            className:
                              "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                          }),
                          s.jsx("input", {
                            id: "password",
                            type: i ? "text" : "password",
                            required: !0,
                            value: r,
                            onChange: (g) => n(g.target.value),
                            className:
                              "w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                            placeholder: "Enter your password",
                          }),
                          s.jsx("button", {
                            type: "button",
                            onClick: () => a(!i),
                            className:
                              "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
                            children: i
                              ? s.jsx(Tm, { className: "w-5 h-5" })
                              : s.jsx(ri, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    type: "submit",
                    disabled: c,
                    className:
                      "w-full bg-[#193154] hover:bg-[#f2a92a] disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors",
                    children: c ? "Signing in..." : "Sign In",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "mt-6",
                children: [
                  s.jsxs("div", {
                    className: "relative",
                    children: [
                      s.jsx("div", {
                        className: "absolute inset-0 flex items-center",
                        children: s.jsx("div", {
                          className: "w-full border-t border-gray-300",
                        }),
                      }),
                      s.jsx("div", {
                        className: "relative flex justify-center text-sm",
                        children: s.jsx("span", {
                          className: "px-2 bg-white text-gray-500",
                          children: "Demo Credentials",
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "mt-4 text-sm text-gray-600 bg-gray-50 rounded-lg p-4",
                    children: [
                      s.jsx("p", {
                        className: "font-medium mb-2",
                        children: "Try these demo accounts:",
                      }),
                      s.jsxs("p", {
                        children: [
                          s.jsx("strong", { children: "Admin:" }),
                          " admin@itshop.com / admin123",
                        ],
                      }),
                      s.jsxs("p", {
                        children: [
                          s.jsx("strong", { children: "User:" }),
                          " Any email / Any password",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  sy = () => {
    const [e, t] = v.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }),
      [r, n] = v.useState(!1),
      [i, a] = v.useState(""),
      [l, o] = v.useState(!1),
      { register: c } = Zn(),
      u = lr(),
      d = async (f) => {
        if ((f.preventDefault(), a(""), e.password !== e.confirmPassword)) {
          a("Passwords do not match");
          return;
        }
        if (e.password.length < 6) {
          a("Password must be at least 6 characters long");
          return;
        }
        o(!0);
        try {
          (await c(e.email, e.password, e.name))
            ? u("/")
            : a("Registration failed. Please try again.");
        } catch {
          a("Registration failed. Please try again.");
        } finally {
          o(!1);
        }
      },
      h = (f) => {
        t((g) => ({ ...g, [f.target.name]: f.target.value }));
      };
    return s.jsx("div", {
      className:
        "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
      children: s.jsxs("div", {
        className: "max-w-md w-full space-y-8",
        children: [
          s.jsxs("div", {
            className: "text-center",
            children: [
              s.jsx("div", {
                className: "mx-auto w-40 h-16 mb-4",
                children: s.jsx("img", {
                  src: xo,
                  alt: "IT Icon",
                  className: "w-full h-full object-contain rounded-lg",
                }),
              }),
              s.jsx("h2", {
                className: "text-3xl font-bold text-[#193154]",
                children: "Create your account",
              }),
              s.jsxs("p", {
                className: "mt-2 text-gray-600",
                children: [
                  "Already have an account?",
                  " ",
                  s.jsx(F, {
                    to: "/login",
                    className:
                      "text-[#193154] hover:text-[#f2a92a] font-medium",
                    children: "Sign in",
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", {
            className:
              "bg-white rounded-lg shadow-sm border border-gray-200 p-8",
            children: s.jsxs("form", {
              onSubmit: d,
              className: "space-y-6",
              children: [
                i &&
                  s.jsx("div", {
                    className:
                      "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",
                    children: i,
                  }),
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      htmlFor: "name",
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: "Full Name",
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx(Im, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                        }),
                        s.jsx("input", {
                          id: "name",
                          name: "name",
                          type: "text",
                          required: !0,
                          value: e.name,
                          onChange: h,
                          className:
                            "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                          placeholder: "Enter your full name",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: "Email Address",
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx(Pi, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                        }),
                        s.jsx("input", {
                          id: "email",
                          name: "email",
                          type: "email",
                          required: !0,
                          value: e.email,
                          onChange: h,
                          className:
                            "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                          placeholder: "Enter your email",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: "Password",
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx(qn, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                        }),
                        s.jsx("input", {
                          id: "password",
                          name: "password",
                          type: r ? "text" : "password",
                          required: !0,
                          value: e.password,
                          onChange: h,
                          className:
                            "w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                          placeholder: "Create a password",
                        }),
                        s.jsx("button", {
                          type: "button",
                          onClick: () => n(!r),
                          className:
                            "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
                          children: r
                            ? s.jsx(Tm, { className: "w-5 h-5" })
                            : s.jsx(ri, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      htmlFor: "confirmPassword",
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: "Confirm Password",
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx(qn, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                        }),
                        s.jsx("input", {
                          id: "confirmPassword",
                          name: "confirmPassword",
                          type: "password",
                          required: !0,
                          value: e.confirmPassword,
                          onChange: h,
                          className:
                            "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                          placeholder: "Confirm your password",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("button", {
                  type: "submit",
                  disabled: l,
                  className:
                    "w-full bg-[#193154] hover:bg-[#f2a92a] disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors",
                  children: l ? "Creating account..." : "Create Account",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  iy = [
    {
      id: "1",
      name: "Dell PowerEdge R740 Server",
      brand: "Dell",
      price: 2499,
      category: "servers",
      condition: "refurbished",
      stock: 15,
      status: "active",
    },
    {
      id: "2",
      name: "HPE ProLiant DL380 Gen10",
      brand: "HPE",
      price: 3199,
      category: "servers",
      condition: "new",
      stock: 8,
      status: "active",
    },
    {
      id: "3",
      name: "NetApp FAS2750 Storage",
      brand: "NetApp",
      price: 4599,
      category: "storage",
      condition: "refurbished",
      stock: 5,
      status: "active",
    },
  ],
  ay = [
    {
      id: "ORD-001",
      customer: "John Smith",
      email: "john@company.com",
      total: 2499,
      status: "processing",
      date: "2025-01-15",
      items: 1,
    },
    {
      id: "ORD-002",
      customer: "Sarah Johnson",
      email: "sarah@techcorp.com",
      total: 6798,
      status: "shipped",
      date: "2025-01-14",
      items: 2,
    },
    {
      id: "ORD-003",
      customer: "Mike Wilson",
      email: "mike@startupxyz.com",
      total: 1299,
      status: "delivered",
      date: "2025-01-13",
      items: 3,
    },
  ],
  ly = () => {
    const { user: e } = Zn(),
      [t, r] = v.useState("overview"),
      [n] = v.useState(iy),
      [i] = v.useState(ay);
    if (!e || e.role !== "admin")
      return s.jsx("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center",
        children: s.jsxs("div", {
          className: "text-center",
          children: [
            s.jsx("h2", {
              className: "text-2xl font-bold text-slate-900 mb-4",
              children: "Access Denied",
            }),
            s.jsx("p", {
              className: "text-gray-600",
              children: "You need admin privileges to access this page.",
            }),
          ],
        }),
      });
    const a = [
        {
          title: "Total Revenue",
          value: "$125,430",
          change: "+12.5%",
          icon: ug,
          color: "text-green-600",
        },
        {
          title: "Total Orders",
          value: "1,234",
          change: "+8.2%",
          icon: ng,
          color: "text-blue-600",
        },
        {
          title: "Products",
          value: "456",
          change: "+3.1%",
          icon: wg,
          color: "text-purple-600",
        },
        {
          title: "Customers",
          value: "2,891",
          change: "+15.3%",
          icon: Ln,
          color: "text-orange-600",
        },
      ],
      l = (o) => {
        switch (o) {
          case "pending":
            return "bg-yellow-100 text-yellow-800";
          case "processing":
            return "bg-blue-100 text-blue-800";
          case "shipped":
            return "bg-purple-100 text-purple-800";
          case "delivered":
            return "bg-green-100 text-green-800";
          case "active":
            return "bg-green-100 text-green-800";
          case "inactive":
            return "bg-gray-100 text-gray-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      };
    return s.jsx("div", {
      className: "min-h-screen bg-gray-50",
      children: s.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: [
          s.jsxs("div", {
            className: "mb-8",
            children: [
              s.jsx("h1", {
                className: "text-3xl font-bold text-slate-900",
                children: "Admin Dashboard",
              }),
              s.jsx("p", {
                className: "text-gray-600",
                children: "Manage your IT hardware store",
              }),
            ],
          }),
          s.jsx("div", {
            className:
              "bg-white rounded-lg shadow-sm border border-gray-200 mb-8",
            children: s.jsx("div", {
              className: "flex border-b border-gray-200",
              children: [
                { id: "overview", label: "Overview" },
                { id: "products", label: "Products" },
                { id: "orders", label: "Orders" },
                { id: "customers", label: "Customers" },
              ].map((o) =>
                s.jsx(
                  "button",
                  {
                    onClick: () => r(o.id),
                    className: `px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                      t === o.id
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-gray-800"
                    }`,
                    children: o.label,
                  },
                  o.id
                )
              ),
            }),
          }),
          t === "overview" &&
            s.jsxs("div", {
              className: "space-y-8",
              children: [
                s.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                  children: a.map((o, c) =>
                    s.jsx(
                      "div",
                      {
                        className:
                          "bg-white rounded-lg border border-gray-200 p-6",
                        children: s.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            s.jsxs("div", {
                              children: [
                                s.jsx("p", {
                                  className: "text-sm text-gray-600 mb-1",
                                  children: o.title,
                                }),
                                s.jsx("p", {
                                  className:
                                    "text-2xl font-bold text-slate-900",
                                  children: o.value,
                                }),
                                s.jsx("p", {
                                  className: `text-sm font-medium ${o.color}`,
                                  children: o.change,
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "p-3 rounded-lg bg-gray-50",
                              children: s.jsx(o.icon, {
                                className: `w-6 h-6 ${o.color}`,
                              }),
                            }),
                          ],
                        }),
                      },
                      c
                    )
                  ),
                }),
                s.jsxs("div", {
                  className: "bg-white rounded-lg border border-gray-200",
                  children: [
                    s.jsx("div", {
                      className: "p-6 border-b border-gray-200",
                      children: s.jsx("h3", {
                        className: "text-lg font-semibold text-slate-900",
                        children: "Recent Orders",
                      }),
                    }),
                    s.jsx("div", {
                      className: "overflow-x-auto",
                      children: s.jsxs("table", {
                        className: "w-full",
                        children: [
                          s.jsx("thead", {
                            className: "bg-gray-50",
                            children: s.jsxs("tr", {
                              children: [
                                s.jsx("th", {
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Order ID",
                                }),
                                s.jsx("th", {
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Customer",
                                }),
                                s.jsx("th", {
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Total",
                                }),
                                s.jsx("th", {
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Status",
                                }),
                                s.jsx("th", {
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Date",
                                }),
                              ],
                            }),
                          }),
                          s.jsx("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: i
                              .slice(0, 5)
                              .map((o) =>
                                s.jsxs(
                                  "tr",
                                  {
                                    className: "hover:bg-gray-50",
                                    children: [
                                      s.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900",
                                        children: o.id,
                                      }),
                                      s.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: s.jsxs("div", {
                                          children: [
                                            s.jsx("div", {
                                              className:
                                                "text-sm font-medium text-slate-900",
                                              children: o.customer,
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "text-sm text-gray-500",
                                              children: o.email,
                                            }),
                                          ],
                                        }),
                                      }),
                                      s.jsxs("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap text-sm text-slate-900",
                                        children: [
                                          "$",
                                          o.total.toLocaleString(),
                                        ],
                                      }),
                                      s.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: s.jsx("span", {
                                          className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${l(
                                            o.status
                                          )}`,
                                          children: o.status,
                                        }),
                                      }),
                                      s.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: o.date,
                                      }),
                                    ],
                                  },
                                  o.id
                                )
                              ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          t === "products" &&
            s.jsxs("div", {
              className: "space-y-6",
              children: [
                s.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [
                    s.jsx("h2", {
                      className: "text-2xl font-bold text-slate-900",
                      children: "Products",
                    }),
                    s.jsxs("button", {
                      className:
                        "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors",
                      children: [
                        s.jsx(Rm, { className: "w-4 h-4" }),
                        s.jsx("span", { children: "Add Product" }),
                      ],
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "bg-white rounded-lg border border-gray-200",
                  children: s.jsx("div", {
                    className: "overflow-x-auto",
                    children: s.jsxs("table", {
                      className: "w-full",
                      children: [
                        s.jsx("thead", {
                          className: "bg-gray-50",
                          children: s.jsxs("tr", {
                            children: [
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Product",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Category",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Price",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Stock",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Status",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Actions",
                              }),
                            ],
                          }),
                        }),
                        s.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: n.map((o) =>
                            s.jsxs(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: [
                                  s.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: s.jsxs("div", {
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "text-sm font-medium text-slate-900",
                                          children: o.name,
                                        }),
                                        s.jsx("div", {
                                          className: "text-sm text-gray-500",
                                          children: o.brand,
                                        }),
                                      ],
                                    }),
                                  }),
                                  s.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: s.jsx("span", {
                                      className:
                                        "text-sm text-slate-900 capitalize",
                                      children: o.category,
                                    }),
                                  }),
                                  s.jsxs("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm text-slate-900",
                                    children: ["$", o.price.toLocaleString()],
                                  }),
                                  s.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: s.jsx("span", {
                                      className: `text-sm ${
                                        o.stock < 10
                                          ? "text-red-600 font-medium"
                                          : "text-slate-900"
                                      }`,
                                      children: o.stock,
                                    }),
                                  }),
                                  s.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: s.jsx("span", {
                                      className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${l(
                                        o.status
                                      )}`,
                                      children: o.status,
                                    }),
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                    children: s.jsxs("div", {
                                      className: "flex space-x-2",
                                      children: [
                                        s.jsx("button", {
                                          className:
                                            "text-blue-600 hover:text-blue-800 transition-colors",
                                          children: s.jsx(ri, {
                                            className: "w-4 h-4",
                                          }),
                                        }),
                                        s.jsx("button", {
                                          className:
                                            "text-green-600 hover:text-green-800 transition-colors",
                                          children: s.jsx(Lc, {
                                            className: "w-4 h-4",
                                          }),
                                        }),
                                        s.jsx("button", {
                                          className:
                                            "text-red-600 hover:text-red-800 transition-colors",
                                          children: s.jsx(go, {
                                            className: "w-4 h-4",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              o.id
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          t === "orders" &&
            s.jsxs("div", {
              className: "space-y-6",
              children: [
                s.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [
                    s.jsx("h2", {
                      className: "text-2xl font-bold text-slate-900",
                      children: "Orders",
                    }),
                    s.jsx("div", {
                      className: "flex space-x-2",
                      children: s.jsxs("select", {
                        className:
                          "border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        children: [
                          s.jsx("option", {
                            value: "",
                            children: "All Status",
                          }),
                          s.jsx("option", {
                            value: "pending",
                            children: "Pending",
                          }),
                          s.jsx("option", {
                            value: "processing",
                            children: "Processing",
                          }),
                          s.jsx("option", {
                            value: "shipped",
                            children: "Shipped",
                          }),
                          s.jsx("option", {
                            value: "delivered",
                            children: "Delivered",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "bg-white rounded-lg border border-gray-200",
                  children: s.jsx("div", {
                    className: "overflow-x-auto",
                    children: s.jsxs("table", {
                      className: "w-full",
                      children: [
                        s.jsx("thead", {
                          className: "bg-gray-50",
                          children: s.jsxs("tr", {
                            children: [
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Order ID",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Customer",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Items",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Total",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Status",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Date",
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Actions",
                              }),
                            ],
                          }),
                        }),
                        s.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: i.map((o) =>
                            s.jsxs(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: [
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900",
                                    children: o.id,
                                  }),
                                  s.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: s.jsxs("div", {
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "text-sm font-medium text-slate-900",
                                          children: o.customer,
                                        }),
                                        s.jsx("div", {
                                          className: "text-sm text-gray-500",
                                          children: o.email,
                                        }),
                                      ],
                                    }),
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm text-slate-900",
                                    children: o.items,
                                  }),
                                  s.jsxs("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm text-slate-900",
                                    children: ["$", o.total.toLocaleString()],
                                  }),
                                  s.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: s.jsx("span", {
                                      className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${l(
                                        o.status
                                      )}`,
                                      children: o.status,
                                    }),
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                    children: o.date,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                    children: s.jsxs("div", {
                                      className: "flex space-x-2",
                                      children: [
                                        s.jsx("button", {
                                          className:
                                            "text-blue-600 hover:text-blue-800 transition-colors",
                                          children: s.jsx(ri, {
                                            className: "w-4 h-4",
                                          }),
                                        }),
                                        s.jsx("button", {
                                          className:
                                            "text-green-600 hover:text-green-800 transition-colors",
                                          children: s.jsx(Lc, {
                                            className: "w-4 h-4",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              o.id
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          t === "customers" &&
            s.jsxs("div", {
              className:
                "bg-white rounded-lg border border-gray-200 p-8 text-center",
              children: [
                s.jsx(Ln, {
                  className: "w-16 h-16 text-gray-300 mx-auto mb-4",
                }),
                s.jsx("h3", {
                  className: "text-xl font-semibold text-slate-900 mb-2",
                  children: "Customer Management",
                }),
                s.jsx("p", {
                  className: "text-gray-600",
                  children:
                    "Customer management features will be implemented here.",
                }),
              ],
            }),
        ],
      }),
    });
  },
  oy = () => {
    const { state: e, dispatch: t } = Wr(),
      { user: r } = Zn(),
      n = lr(),
      [i, a] = v.useState({
        email: (r == null ? void 0 : r.email) || "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "United States",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        nameOnCard: "",
      }),
      [l, o] = v.useState(!1),
      [c, u] = v.useState({}),
      d = e.total,
      h = d >= 500 ? 0 : 50,
      f = Math.round(d * 0.08),
      g = d + h + f,
      x = (p) => {
        const { name: m, value: y } = p.target;
        a((b) => ({ ...b, [m]: y })), c[m] && u((b) => ({ ...b, [m]: "" }));
      },
      w = () => {
        const p = {};
        return (
          i.firstName.trim() || (p.firstName = "First name is required"),
          i.lastName.trim() || (p.lastName = "Last name is required"),
          i.email.trim() || (p.email = "Email is required"),
          i.address.trim() || (p.address = "Address is required"),
          i.city.trim() || (p.city = "City is required"),
          i.state.trim() || (p.state = "State is required"),
          i.zipCode.trim() || (p.zipCode = "ZIP code is required"),
          i.cardNumber.trim() || (p.cardNumber = "Card number is required"),
          i.expiryDate.trim() || (p.expiryDate = "Expiry date is required"),
          i.cvv.trim() || (p.cvv = "CVV is required"),
          i.nameOnCard.trim() || (p.nameOnCard = "Name on card is required"),
          u(p),
          Object.keys(p).length === 0
        );
      },
      S = async (p) => {
        if ((p.preventDefault(), !!w())) {
          o(!0);
          try {
            await new Promise((m) => setTimeout(m, 2e3)),
              t({ type: "CLEAR_CART" }),
              n("/order-success");
          } catch (m) {
            console.error("Payment failed:", m);
          } finally {
            o(!1);
          }
        }
      };
    return e.items.length === 0
      ? (n("/cart"), null)
      : s.jsx("div", {
          className: "min-h-screen bg-gray-50 py-8",
          children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              s.jsxs("div", {
                className: "mb-8",
                children: [
                  s.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900",
                    children: "Checkout",
                  }),
                  s.jsx("p", {
                    className: "text-gray-600",
                    children: "Complete your order",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [
                  s.jsx("div", {
                    className: "space-y-6",
                    children: s.jsxs("form", {
                      onSubmit: S,
                      className: "space-y-6",
                      children: [
                        s.jsxs("div", {
                          className:
                            "bg-white rounded-lg border border-gray-200 p-6",
                          children: [
                            s.jsx("h3", {
                              className:
                                "text-lg font-semibold text-slate-900 mb-4",
                              children: "Contact Information",
                            }),
                            s.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("label", {
                                      className:
                                        "block text-sm font-medium text-gray-700 mb-2",
                                      children: "First Name",
                                    }),
                                    s.jsx("input", {
                                      type: "text",
                                      name: "firstName",
                                      value: i.firstName,
                                      onChange: x,
                                      className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        c.firstName
                                          ? "border-red-500"
                                          : "border-gray-300"
                                      }`,
                                    }),
                                    c.firstName &&
                                      s.jsx("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: c.firstName,
                                      }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("label", {
                                      className:
                                        "block text-sm font-medium text-gray-700 mb-2",
                                      children: "Last Name",
                                    }),
                                    s.jsx("input", {
                                      type: "text",
                                      name: "lastName",
                                      value: i.lastName,
                                      onChange: x,
                                      className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        c.lastName
                                          ? "border-red-500"
                                          : "border-gray-300"
                                      }`,
                                    }),
                                    c.lastName &&
                                      s.jsx("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: c.lastName,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "mt-4",
                              children: [
                                s.jsx("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: "Email",
                                }),
                                s.jsx("input", {
                                  type: "email",
                                  name: "email",
                                  value: i.email,
                                  onChange: x,
                                  className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                    c.email
                                      ? "border-red-500"
                                      : "border-gray-300"
                                  }`,
                                }),
                                c.email &&
                                  s.jsx("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: c.email,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className:
                            "bg-white rounded-lg border border-gray-200 p-6",
                          children: [
                            s.jsxs("h3", {
                              className:
                                "text-lg font-semibold text-slate-900 mb-4 flex items-center",
                              children: [
                                s.jsx(Dm, { className: "w-5 h-5 mr-2" }),
                                "Shipping Address",
                              ],
                            }),
                            s.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("label", {
                                      className:
                                        "block text-sm font-medium text-gray-700 mb-2",
                                      children: "Address",
                                    }),
                                    s.jsx("input", {
                                      type: "text",
                                      name: "address",
                                      value: i.address,
                                      onChange: x,
                                      className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        c.address
                                          ? "border-red-500"
                                          : "border-gray-300"
                                      }`,
                                    }),
                                    c.address &&
                                      s.jsx("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: c.address,
                                      }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-3 gap-4",
                                  children: [
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-2",
                                          children: "City",
                                        }),
                                        s.jsx("input", {
                                          type: "text",
                                          name: "city",
                                          value: i.city,
                                          onChange: x,
                                          className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            c.city
                                              ? "border-red-500"
                                              : "border-gray-300"
                                          }`,
                                        }),
                                        c.city &&
                                          s.jsx("p", {
                                            className:
                                              "text-red-500 text-sm mt-1",
                                            children: c.city,
                                          }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-2",
                                          children: "State",
                                        }),
                                        s.jsx("input", {
                                          type: "text",
                                          name: "state",
                                          value: i.state,
                                          onChange: x,
                                          className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            c.state
                                              ? "border-red-500"
                                              : "border-gray-300"
                                          }`,
                                        }),
                                        c.state &&
                                          s.jsx("p", {
                                            className:
                                              "text-red-500 text-sm mt-1",
                                            children: c.state,
                                          }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-2",
                                          children: "ZIP Code",
                                        }),
                                        s.jsx("input", {
                                          type: "text",
                                          name: "zipCode",
                                          value: i.zipCode,
                                          onChange: x,
                                          className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            c.zipCode
                                              ? "border-red-500"
                                              : "border-gray-300"
                                          }`,
                                        }),
                                        c.zipCode &&
                                          s.jsx("p", {
                                            className:
                                              "text-red-500 text-sm mt-1",
                                            children: c.zipCode,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className:
                            "bg-white rounded-lg border border-gray-200 p-6",
                          children: [
                            s.jsxs("h3", {
                              className:
                                "text-lg font-semibold text-slate-900 mb-4 flex items-center",
                              children: [
                                s.jsx(cg, { className: "w-5 h-5 mr-2" }),
                                "Payment Information",
                              ],
                            }),
                            s.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("label", {
                                      className:
                                        "block text-sm font-medium text-gray-700 mb-2",
                                      children: "Card Number",
                                    }),
                                    s.jsx("input", {
                                      type: "text",
                                      name: "cardNumber",
                                      value: i.cardNumber,
                                      onChange: x,
                                      placeholder: "1234 5678 9012 3456",
                                      className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        c.cardNumber
                                          ? "border-red-500"
                                          : "border-gray-300"
                                      }`,
                                    }),
                                    c.cardNumber &&
                                      s.jsx("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: c.cardNumber,
                                      }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className: "grid grid-cols-2 gap-4",
                                  children: [
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-2",
                                          children: "Expiry Date",
                                        }),
                                        s.jsx("input", {
                                          type: "text",
                                          name: "expiryDate",
                                          value: i.expiryDate,
                                          onChange: x,
                                          placeholder: "MM/YY",
                                          className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            c.expiryDate
                                              ? "border-red-500"
                                              : "border-gray-300"
                                          }`,
                                        }),
                                        c.expiryDate &&
                                          s.jsx("p", {
                                            className:
                                              "text-red-500 text-sm mt-1",
                                            children: c.expiryDate,
                                          }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-2",
                                          children: "CVV",
                                        }),
                                        s.jsx("input", {
                                          type: "text",
                                          name: "cvv",
                                          value: i.cvv,
                                          onChange: x,
                                          placeholder: "123",
                                          className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            c.cvv
                                              ? "border-red-500"
                                              : "border-gray-300"
                                          }`,
                                        }),
                                        c.cvv &&
                                          s.jsx("p", {
                                            className:
                                              "text-red-500 text-sm mt-1",
                                            children: c.cvv,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("label", {
                                      className:
                                        "block text-sm font-medium text-gray-700 mb-2",
                                      children: "Name on Card",
                                    }),
                                    s.jsx("input", {
                                      type: "text",
                                      name: "nameOnCard",
                                      value: i.nameOnCard,
                                      onChange: x,
                                      className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        c.nameOnCard
                                          ? "border-red-500"
                                          : "border-gray-300"
                                      }`,
                                    }),
                                    c.nameOnCard &&
                                      s.jsx("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: c.nameOnCard,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("button", {
                          type: "submit",
                          disabled: l,
                          className:
                            "w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2",
                          children: [
                            s.jsx(qn, { className: "w-5 h-5" }),
                            s.jsx("span", {
                              children: l
                                ? "Processing..."
                                : `Complete Order - $${g.toLocaleString()}`,
                            }),
                            !l && s.jsx(Jr, { className: "w-5 h-5" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  s.jsxs("div", {
                    className:
                      "bg-white rounded-lg border border-gray-200 p-6 h-fit",
                    children: [
                      s.jsx("h3", {
                        className: "text-lg font-semibold text-slate-900 mb-4",
                        children: "Order Summary",
                      }),
                      s.jsx("div", {
                        className: "space-y-4 mb-6",
                        children: e.items.map((p) =>
                          s.jsxs(
                            "div",
                            {
                              className: "flex items-center space-x-3",
                              children: [
                                s.jsx("img", {
                                  src: p.image,
                                  alt: p.name,
                                  className:
                                    "w-16 h-16 object-cover rounded-lg",
                                }),
                                s.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    s.jsx("h4", {
                                      className:
                                        "font-medium text-slate-900 line-clamp-2",
                                      children: p.name,
                                    }),
                                    s.jsxs("p", {
                                      className: "text-sm text-gray-500",
                                      children: ["Qty: ", p.quantity],
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "text-right",
                                  children: s.jsxs("p", {
                                    className: "font-medium text-slate-900",
                                    children: [
                                      "$",
                                      (p.price * p.quantity).toLocaleString(),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            p.id
                          )
                        ),
                      }),
                      s.jsxs("div", {
                        className: "space-y-3 pt-4 border-t border-gray-200",
                        children: [
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-gray-600",
                                children: "Subtotal",
                              }),
                              s.jsxs("span", {
                                className: "font-medium",
                                children: ["$", d.toLocaleString()],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-gray-600",
                                children: "Shipping",
                              }),
                              s.jsx("span", {
                                className: "font-medium text-green-600",
                                children: h === 0 ? "Free" : `$${h}`,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-gray-600",
                                children: "Tax",
                              }),
                              s.jsxs("span", {
                                className: "font-medium",
                                children: ["$", f.toLocaleString()],
                              }),
                            ],
                          }),
                          s.jsx("hr", { className: "border-gray-200" }),
                          s.jsxs("div", {
                            className: "flex justify-between text-lg font-bold",
                            children: [
                              s.jsx("span", { children: "Total" }),
                              s.jsxs("span", {
                                children: ["$", g.toLocaleString()],
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className:
                          "mt-6 p-4 bg-green-50 border border-green-200 rounded-lg",
                        children: s.jsxs("p", {
                          className: "text-sm text-green-800 flex items-center",
                          children: [
                            s.jsx(qn, { className: "w-4 h-4 mr-2" }),
                            "Your payment information is secure and encrypted",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  cy = () =>
    s.jsxs("div", {
      className: "bg-white px-6 md:px-10 py-10 text-gray-800 max-w-7xl mx-auto",
      style: {
        fontFamily:
          "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      },
      children: [
        s.jsx("h1", {
          className: "text-3xl font-bold mb-6 text-center",
          children: "WARRANTY INFO",
        }),
        s.jsx("section", {
          className: "mb-6",
          children: s.jsx("p", {
            children:
              "Except for the warranties explicitly stated in this document, GTR Supply makes no other representations or warranties, either express or implied, about any products sold. This includes disclaiming any implied warranties of merchantability or fitness for a particular purpose. Any warranties arising from trade usage, the course of dealing, or the course of performance are also expressly disclaimed. GTR Supply serves as a distributor and reseller, not as a manufacturer of the products sold.",
          }),
        }),
        s.jsxs("section", {
          className: "mb-6",
          children: [
            s.jsx("h2", {
              className: "font-semibold mb-2",
              children: "Refurbished Product Warranty:",
            }),
            s.jsxs("p", {
              children: [
                "All certified refurbished products listed on GTR Supply come with a 90-day replacement policy. If a refund is your preferred route, please note that the warranty coverage is 30 days from the order receiving date. ",
                s.jsx("em", {
                  children: "Further details about returns in return section",
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          className: "mb-6",
          children: [
            s.jsx("h2", {
              className: "font-semibold mb-2",
              children: "Manufacturer Warranty:",
            }),
            s.jsx("p", {
              children:
                "Some products sold at GTR Supply come with 1+ year manufacturer warranty, covering returns, replacements, and support.GTR Supply will pass on these warranties to you, the customer. For any warranty claims or support, please contact the manufacturer directly, following their terms and conditions. Manufacturer warranties may vary by category, and some items cannot be returned once their packaging is opened, like sealed retail boxed items.",
            }),
          ],
        }),
        s.jsxs("section", {
          className: "mb-6",
          children: [
            s.jsx("h2", {
              className: "font-semibold mb-2",
              children: "Service Expectations:",
            }),
            s.jsx("p", {
              children:
                "You expressly acknowledge that GTR Supply offers no guarantees that its services will: (a) Align with your requirements; (b) Be continuous, prompt, secure, or free from errors; (c) Satisfy your expectations; (d) Correct any software/program errors.",
            }),
          ],
        }),
        s.jsxs("section", {
          className: "mb-6",
          children: [
            s.jsx("h2", {
              className: "font-semibold mb-2",
              children: "User Responsibility:",
            }),
            s.jsx("p", {
              children:
                "Any materials downloaded or acquired through the use of GTR Supply services are at your sole discretion and risk. You bear complete responsibility for any damage to your computer system or data loss resulting from such activities. No advice or information obtained from GTR Supply, whether oral or written, shall create any warranty not explicitly mentioned in these terms and conditions.",
            }),
          ],
        }),
        s.jsxs("section", {
          className: "mb-6",
          children: [
            s.jsx("h2", {
              className: "font-semibold mb-2",
              children: "Limitation of Liability:",
            }),
            s.jsx("p", {
              children:
                "Under no circumstances shall GTR Supply be held responsible for any direct, indirect, incidental, special, punitive, or consequential damages, whether resulting from the use, misuse, or inability to use any product purchased from GTR Supply. This applies irrespective of the basis of the liability claim and whether GTR Supply had been advised of the potential for such damages or loss.",
            }),
          ],
        }),
        s.jsxs("section", {
          className: "mb-6",
          children: [
            s.jsx("h2", {
              className: "font-semibold mb-2",
              children: "Exclusions:",
            }),
            s.jsx("p", {
              className: "mb-2",
              children:
                "GTR Supply disclaims all responsibility for any personal injuries or property damage, potentially resulting from the use of products/services purchased, including, but not limited to, applications in military, medical, traffic control, and disaster prevention or any related equipment.",
            }),
            s.jsxs("ul", {
              className: "list-decimal list-inside pl-4",
              children: [
                s.jsx("li", {
                  children: "Missing memory or flash cards resulting in faults",
                }),
                s.jsx("li", {
                  children:
                    "Software-related issues (which will incur additional charges)",
                }),
                s.jsx("li", {
                  children: "Any customer-induced damage or alterations",
                }),
                s.jsx("li", {
                  children: "Parts not supplied by  GTR Supply",
                }),
                s.jsx("li", {
                  children: "Misuse, unauthorized repairs, or modifications",
                }),
                s.jsx("li", {
                  children:
                    "Natural or human-made disasters affecting the product",
                }),
                s.jsx("li", {
                  children:
                    "Malfunctions due to unauthorized or self-compiled software",
                }),
                s.jsx("li", {
                  children:
                    "Virus infections because of inadequate maintenance",
                }),
                s.jsx("li", {
                  children: "Issues due to non-standard expansion cards",
                }),
              ],
            }),
          ],
        }),
        s.jsx("section", {
          className: "mb-6",
          children: s.jsx("p", {
            children:
              "Please report any damages that occurred during transit within 2 working days of delivery, and provide pictures as documentation. All valid claims will be processed upon receipt of the returned component(s). Maintain the warranty card along with a copy of the invoice for all warranty claims.",
          }),
        }),
        s.jsxs("section", {
          children: [
            s.jsx("p", {
              className: "mb-1 font-semibold",
              children:
                "For more information or if you have questions, you can reach us at:",
            }),
            s.jsx("p", {
              className: "mb-1",
              children: "Telephone: +1 737 210 4824",
            }),
            s.jsxs("p", {
              children: [
                "Email:",
                " ",
                s.jsx("a", {
                  href: "mailto:support@gtrsupply.com",
                  className: "text-blue-600 underline",
                  children: "support@gtrsupply.com",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Qc = [
    {
      sectionTitle: "Storage Devices",
      items: [
        {
          title: "Hard Drives",
          path: "/storage-devices/hard-drives",
          subcategories: [
            {
              title: "Server Hard Drives",
              path: "/storage-devices/hard-drives/server",
            },
            {
              title: "Desktop Hard Drives",
              path: "/storage-devices/hard-drives/desktop",
            },
            {
              title: "Laptop Hard Drives",
              path: "/storage-devices/hard-drives/laptop",
            },
            {
              title: "Printer Hard Drives",
              path: "/storage-devices/hard-drives/printer",
            },
            {
              title: "External Hard Drives",
              path: "/storage-devices/hard-drives/external",
            },
          ],
        },
        { title: "Solid State Drives", path: "/storage-devices/ssd" },
        {
          title: "Storage Accessories",
          path: "/storage-devices/accessories",
          subcategories: [
            {
              title: "Tray/Caddy",
              path: "/storage-devices/accessories/tray-caddy",
            },
          ],
        },
        { title: "Hard Drive Enclosure", path: "/storage-devices/enclosure" },
        {
          title: "Controllers",
          path: "/storage-devices/controllers",
          subcategories: [
            { title: "SATA/SAS Controllers", path: "/controllers/sata-sas" },
            { title: "SCSI Controllers", path: "/controllers/scsi" },
            { title: "Fibre Channel Controllers", path: "/controllers/fibre" },
            { title: "Storage Controllers", path: "/controllers/storage" },
            { title: "RAID Controllers", path: "/controllers/raid" },
          ],
        },
        { title: "Tape Drives", path: "/storage-devices/tape-drives" },
        { title: "Tape Media", path: "/storage-devices/tape-media" },
        {
          title: "Tape Libraries & Autoloaders",
          path: "/storage-devices/tape-libraries",
        },
        { title: "USB Flash Drives", path: "/storage-devices/usb" },
        { title: "Memory Cards", path: "/storage-devices/memory-cards" },
        { title: "I/O Cards/Panel", path: "/storage-devices/io-cards" },
        { title: "Floppy Drives", path: "/storage-devices/floppy-drives" },
        { title: "Network Storage Devices", path: "/storage-devices/network" },
        { title: "Host Bus Adapter", path: "/storage-devices/hba" },
        { title: "Host Channel Adapter", path: "/storage-devices/hca" },
        {
          title: "Optical Drives & Burners",
          path: "/optical-drives",
          subcategories: [
            {
              title: "CD & DVD Burners",
              path: "/optical-drives/cd-dvd-burners",
            },
            { title: "CD Drives", path: "/optical-drives/cd" },
            { title: "DVD Drives", path: "/optical-drives/dvd" },
            { title: "Blu-ray Drives", path: "/optical-drives/blu-ray" },
            {
              title: "CD DVD & Blu-ray Accessories",
              path: "/optical-drives/accessories",
            },
            {
              title: "Blu-ray Burners",
              path: "/optical-drives/blu-ray-burners",
            },
            {
              title: "External CD DVD & Blu-ray Drives",
              path: "/optical-drives/external",
            },
          ],
        },
        {
          title: "Optical Media",
          path: "/optical-media",
          subcategories: [
            { title: "CD Disk", path: "/optical-media/cd" },
            { title: "DVD Disk", path: "/optical-media/dvd" },
            { title: "Blu-ray Disk", path: "/optical-media/blu-ray" },
          ],
        },
        { title: "Storage Array", path: "/storage-devices/array" },
      ],
    },
    {
      sectionTitle: "Processors",
      items: [
        { title: "Server Processors", path: "/processors/server" },
        { title: "Desktop Processors", path: "/processors/desktop" },
        { title: "Laptop Processors", path: "/processors/laptop" },
        { title: "Processor Boards", path: "/processors/boards" },
        { title: "VRM", path: "/processors/vrm" },
      ],
    },
    {
      sectionTitle: "Input Devices",
      items: [
        {
          title: "KVM Switches",
          path: "/input/kvm",
          subcategories: [
            { title: "KVM LCD & Keyboard Combo", path: "/input/kvm/lcd-combo" },
          ],
        },
        { title: "Keyboards", path: "/input/keyboards" },
        { title: "Mouse", path: "/input/mouse" },
        { title: "Keyboard & Mouse Combo", path: "/input/combo" },
        { title: "Input Device Accessories", path: "/input/accessories" },
      ],
    },
  ],
  Ar = (e) => e.map((t) => (typeof t == "string" ? { title: t } : t)),
  uy = (e, t) => (t == null ? void 0 : t.toLowerCase().includes(e)) ?? !1;
function dy(e, t) {
  if (!t) return e;
  const r = e.items.map((n) => Qm(n, t)).filter(Boolean);
  return r.length ? { ...e, items: r } : null;
}
function Qm(e, t) {
  const r = uy(t, e.title),
    i = Ar(e.subcategories || [])
      .map((a) => Qm(a, t))
      .filter(Boolean);
  return r || i.length
    ? { ...e, subcategories: i.length ? i : e.subcategories }
    : null;
}
function my(e) {
  const t = [],
    r = (n) => {
      t.push({ title: n.title, path: n.path }),
        Ar(n.subcategories || []).forEach(r);
    };
  return e.forEach((n) => n.items.forEach(r)), t;
}
const
  hy = [
    "Products",
    "Condition",
    "Warranty & Return",
    "Shipping",
    "Payments",
    "Order Status",
  ],
  Kc = {
    Products: [
      {
        question: "What types of products do you offer?",
        answer:
          "We offer storage, memory, processors, and complete server solutions.",
      },
      {
        question: "Are your products brand new or refurbished?",
        answer:
          "We carry new, used, and certified refurbished hardware depending on availability.",
      },
      {
        question: "Can I request a specific brand or manufacturer?",
        answer:
          "Yes, you can mention your preferred brand during purchase or via support.",
      },
      {
        question: "Do you sell components separately?",
        answer:
          "Yes, components like RAM, SSDs, and power supplies are available individually.",
      },
      {
        question: "Are your products tested before shipping?",
        answer:
          "Yes, all products undergo rigorous quality testing before dispatch.",
      },
      {
        question: "Can I get bulk pricing on large orders?",
        answer:
          "Yes, bulk discounts are available. Please contact sales for a quote.",
      },
    ],
    Condition: [
      {
        question: 'What does "like new" condition mean?',
        answer:
          '"Like new" refers to products with no cosmetic damage and fully functional.',
      },
      {
        question: "Are used products reliable?",
        answer:
          "Yes, used products are tested and verified to meet operational standards.",
      },
      {
        question: "Do refurbished items include all accessories?",
        answer:
          "Most refurbished items come with necessary accessories unless stated otherwise.",
      },
      {
        question:
          "Can I return a product if the condition is not as described?",
        answer:
          "Absolutely. Contact support within the return window if thereâ€™s an issue.",
      },
      {
        question: "Are cosmetic defects covered under warranty?",
        answer:
          "No, cosmetic wear is not covered unless it affects functionality.",
      },
      {
        question: "Do you provide product images before purchase?",
        answer:
          "Images are available for most listings. Contact sales for more specific requests.",
      },
    ],
    "Warranty & Return": [
      {
        question: "What is the standard warranty on your products?",
        answer:
          "Most products include a 1-year standard warranty. Extended options are available.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "Submit a support ticket with your order number and reason for return.",
      },
      {
        question: "Do I have to pay for return shipping?",
        answer:
          "Return shipping costs may apply unless the product is defective.",
      },
      {
        question: "Can I exchange a product instead of returning?",
        answer:
          "Yes, we offer exchanges for eligible items based on stock availability.",
      },
      {
        question: "What items are non-returnable?",
        answer:
          "Custom orders, software licenses, and damaged items may not qualify.",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Refunds are usually processed within 5â€“7 business days after inspection.",
      },
    ],
    Shipping: [
      {
        question: "How can I track my package from GTR Supply?",
        answer:
          "Use the tracking number provided via email or account dashboard.",
      },
      {
        question: "What should I do if my tracking number isn't working?",
        answer:
          "Please wait a few hours or contact support if the issue persists.",
      },
      {
        question: "Can I reschedule the delivery time with FedEx or DHL?",
        answer:
          "Yes, directly coordinate with the carrier using your tracking number.",
      },
      {
        question: "Does GTR Supply ship internationally?",
        answer: "Yes, using DHL and FedEx International. Customs duties apply.",
      },
      {
        question: "Can I ship to an APO or FPO address?",
        answer: "Yes, we support APO/FPO shipping for qualified products.",
      },
      {
        question: "What does free standard shipping include?",
        answer: "Ground shipping within domestic regions on eligible items.",
      },
    ],
    Payments: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit/debit cards, PayPal, wire transfer, and Net terms for approved customers.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes, we use encrypted payment gateways and do not store sensitive information.",
      },
      {
        question: "Can I pay in installments?",
        answer:
          "Installment options are available via select payment providers.",
      },
      {
        question: "Do you accept purchase orders?",
        answer:
          "Yes, POs are accepted from verified corporate or educational institutions.",
      },
      {
        question: "Can I apply a coupon or discount code?",
        answer: "Yes, you can apply available promo codes during checkout.",
      },
      {
        question: "Will I get an invoice after payment?",
        answer:
          "Yes, a digital invoice is sent to your email immediately after order confirmation.",
      },
    ],
    "Order Status": [
      {
        question: "How can I check my order status?",
        answer:
          "Log in to your account dashboard or use the order tracking link sent to your email.",
      },
      {
        question: 'What does "Processing" mean in order status?',
        answer:
          '"Processing" means your order has been received and is being prepared for shipment.',
      },
      {
        question: "Can I cancel or modify my order after placing it?",
        answer:
          "Yes, if the order has not yet shipped. Contact support immediately.",
      },
      {
        question: "I havenâ€™t received confirmation. What should I do?",
        answer:
          "Check your spam folder or contact support to confirm your email address.",
      },
      {
        question: "Why was my order delayed?",
        answer:
          "Delays may occur due to inventory, payment verification, or courier issues.",
      },
      {
        question: 'What does "Shipped" status mean?',
        answer:
          '"Shipped" means your package has left our facility and is en route to you.',
      },
    ],
  },
  fy = () => {
    var a;
    const [e, t] = v.useState("Products"),
      [r, n] = v.useState(null),
      i = v.useMemo(
        () => ({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: Object.values(Kc)
            .flat()
            .map(({ question: l, answer: o }) => ({
              "@type": "Question",
              name: l,
              acceptedAnswer: { "@type": "Answer", text: o },
            })),
        }),
        []
      );
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs(Un, {
          children: [
            s.jsx("title", { children: "Support Center | GTR Supply" }),
            s.jsx("meta", {
              name: "description",
              content:
                "Warranty help, shipping info, returns, payments, and order status.",
            }),
            s.jsx("link", {
              rel: "canonical",
              href: "https://serverdirect.us/support",
            }),
            s.jsx("script", {
              type: "application/ld+json",
              children: JSON.stringify(i),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "min-h-screen bg-gray-50 px-4 py-10",
          children: [
            s.jsxs("section", {
              className: "max-w-7xl mx-auto text-center lg:text-left mb-12",
              children: [
                s.jsx("h1", {
                  className:
                    "text-3xl md:text-4xl font-semibold text-black mb-4",
                  children: "Welcome to the Support Center",
                }),
                s.jsx("p", {
                  className:
                    "max-w-2xl text-gray-700 text-sm md:text-base mb-6",
                  children:
                    "In order to streamline support requests and better serve you, we utilize a support ticket system...",
                }),
                s.jsxs("div", {
                  className:
                    "w-full max-w-xl mx-auto lg:mx-0 flex rounded-md shadow overflow-hidden border",
                  children: [
                    s.jsx("input", {
                      type: "text",
                      placeholder: "Search our knowledge base",
                      className:
                        "flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none",
                    }),
                    s.jsx("button", {
                      className:
                        "bg-[#132c52] text-white px-6 py-2 text-sm font-semibold hover:bg-[#0263a3] transition-colors",
                      children: "ðŸ” Search",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "max-w-4xl mx-auto text-center px-4",
              children: [
                s.jsx("p", {
                  className:
                    "text-[#4b5c77] font-semibold text-black mb-3 tracking-wide",
                  children: "How can we help?",
                }),
                s.jsx("h1", {
                  className:
                    "text-6xl font-bold text-[#132c52] mb-6 leading-tight",
                  children: "Frequently Asked Questions",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "max-w-7xl mx-auto flex flex-col lg:flex-row gap-6",
              children: [
                s.jsx("aside", {
                  className: "w-full lg:w-1/4 bg-white shadow-sm rounded p-4",
                  children: hy.map((l) =>
                    s.jsx(
                      "div",
                      {
                        onClick: () => {
                          t(l), n(null);
                        },
                        className: `py-3 px-4 cursor-pointer border-l-4 transition-colors duration-200 ${
                          e === l
                            ? "border-[#132c52] text-[#0272bc] bg-gray-50"
                            : "border-transparent text-gray-700 hover:text-[#0272bc]"
                        }`,
                        children: l,
                      },
                      l
                    )
                  ),
                }),
                s.jsx("main", {
                  className: "flex-1 bg-white shadow-sm rounded p-4",
                  children:
                    (a = Kc[e]) == null
                      ? void 0
                      : a.map((l, o) =>
                          s.jsxs(
                            "div",
                            {
                              className: "border-b border-gray-200",
                              children: [
                                s.jsxs("button", {
                                  onClick: () => n(o === r ? null : o),
                                  className:
                                    "w-full text-left py-4 px-2 flex justify-between items-center hover:bg-gray-50 transition",
                                  children: [
                                    s.jsx("span", {
                                      className:
                                        "text-sm font-medium text-black",
                                      children: l.question,
                                    }),
                                    s.jsx("svg", {
                                      className: `w-4 h-4 transition-transform ${
                                        r === o ? "rotate-180" : ""
                                      }`,
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      viewBox: "0 0 24 24",
                                      children: s.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19 9l-7 7-7-7",
                                      }),
                                    }),
                                  ],
                                }),
                                r === o &&
                                  s.jsx("div", {
                                    className:
                                      "px-4 pb-4 text-sm text-gray-600",
                                    children: l.answer,
                                  }),
                              ],
                            },
                            o
                          )
                        ),
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex flex-wrap justify-center gap-6 p-8 bg-gray-50",
              children: [
                s.jsxs("div", {
                  className:
                    "bg-white rounded-xl border border-gray-200 p-8 w-72 text-center shadow-sm",
                  children: [
                    s.jsx("h2", {
                      className: "text-lg font-semibold text-blue-900 mb-4",
                      children: "Call support",
                    }),
                    s.jsx("a", {
                      href: "tel:+17575781088",
                      className:
                        "inline-block border border-orange-400 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-orange-100 transition",
                      children: "+1 737 210 4824 Â»",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "bg-white rounded-xl border border-gray-200 p-8 w-72 text-center shadow-sm",
                  children: [
                    s.jsx("h2", {
                      className: "text-lg font-semibold text-blue-900 mb-4",
                      children: "Support",
                    }),
                    s.jsx("a", {
                      href: "mailto:alan@serverdirect.us",
                      className:
                        "inline-block border border-orange-400 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-orange-100 transition",
                      children: "Email Us Â»",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "bg-white rounded-xl border border-gray-200 p-8 w-72 text-center shadow-sm",
                  children: [
                    s.jsx("h2", {
                      className: "text-lg font-semibold text-blue-900 mb-4",
                      children: "Orders",
                    }),
                    s.jsx("a", {
                      href: "mailto:alan@serverdirect.us",
                      className:
                        "inline-block border border-orange-400 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-orange-100 transition",
                      children: "alan@serverdirect.us Â»",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  gy = () =>
    s.jsxs("section", {
      className: "px-6 py-12 max-w-7xl mx-auto  text-slate-800",
      style: {
        fontFamily:
          "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      },
      children: [
        s.jsx("h1", {
          className: "text-3xl font-bold mb-8 text-blue-800",
          children: "Shipping Information",
        }),
        s.jsxs("div", {
          className: "space-y-10",
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "Tracking Your Package",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children: s.jsx("strong", {
                    children: "Why Isn't My Tracking Number Working?",
                  }),
                }),
                s.jsx("p", {
                  children:
                    "If you're experiencing issues with your tracking number, it's possible that one of your packages has been separated from the rest of your order. We recommend waiting a few days for all your items to arrive. Should you encounter any inconsistencies, please inform our shipping department so we can assist you. For packages that may have been damaged during transit, please reach out to the carrier directly for resolution.",
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "Scheduling and Delivery Concerns",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children: s.jsx("strong", {
                    children:
                      "How Can I Reschedule My Delivery Time with FedEx and DHL?",
                  }),
                }),
                s.jsx("p", {
                  children:
                    "Refer to the InfoNotice you've received. It often provides options for rescheduling your delivery. You can leave this notice for the delivery driver with instructions or use the carrier's online platform to adjust the time or location.",
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "International Shipping",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children: s.jsx("strong", {
                    children: "Does Computer Direct Ship Internationally?",
                  }),
                }),
                s.jsx("p", {
                  children:
                    "Yes. We ship globally through DHL and FedEx International. Customers are responsible for any customs and duties.",
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "APO/FPO Addresses",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children: s.jsx("strong", {
                    children: "Can I Ship to an APO or FPO Address?",
                  }),
                }),
                s.jsx("p", {
                  children:
                    "Yes, but delivery can take 5 to 10 working days. Thank you for your patience.",
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "Contacting Shipping Carriers",
                }),
                s.jsxs("ul", {
                  className:
                    "list-disc list-inside text-sm text-slate-700 mt-2",
                  children: [
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "FedEx:" }),
                        " +1 737 210 4824 | ",
                        s.jsx("a", {
                          href: "https://www.fedex.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-blue-600 underline",
                          children: "FedEx Website",
                        }),
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "DHL:" }),
                        " +1 737 210 4824 | ",
                        s.jsx("a", {
                          href: "https://www.dhl.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-blue-600 underline",
                          children: "DHL Website",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "Free Standard Shipping",
                }),
                s.jsx("p", {
                  children:
                    "Orders are typically processed within 1-3 days and delivered in 4-6 business days. Free shipping excludes Alaska and Hawaii. We use FedEx, DHL, and USPS for ground deliveries (8 a.m. â€“ 8 p.m.).",
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "Shipping Times and Cut-Off",
                }),
                s.jsxs("p", {
                  className: "mb-2",
                  children: [
                    "Orders placed before ",
                    s.jsx("strong", { children: "2pm PST" }),
                    " ship the same day. Otherwise, they ship the next day.",
                  ],
                }),
                s.jsxs("ul", {
                  className: "list-disc list-inside text-sm text-slate-700",
                  children: [
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", {
                          children: "Quick Arrival (3 to 7 Days):",
                        }),
                        " U.S. only",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "3-Day Transit:" }),
                        " U.S. only",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "2-Day Option:" }),
                        " U.S. only",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "Next-Day Standard:" }),
                        " Order by 2 p.m. PST",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "Priority Next-Day:" }),
                        " By 10:30 a.m. the next day",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "International:" }),
                        " Via FedEx/DHL - order by 2 p.m. PST",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "APO/FPO:" }),
                        " Registered Mail, delivery varies",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "Canada & Puerto Rico:" }),
                        " FedEx/DHL - 2 p.m. cutoff",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsx("strong", { children: "Saturday Delivery:" }),
                        " Order by 12 p.m. Friday",
                      ],
                    }),
                  ],
                }),
                s.jsxs("p", {
                  className: "mt-2",
                  children: [
                    "For special needs, contact our sales team at ",
                    s.jsx("strong", { children: "+1 737 210 4824" }),
                    ".",
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "Shipping Delays",
                }),
                s.jsx("p", {
                  children:
                    "Orders are not processed or shipped on weekends or major holidays. While we try to ship the same day, delays may occur.",
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2",
                  children: "Missing Items",
                }),
                s.jsxs("p", {
                  children: [
                    "If any item is missing from your order, please contact our shipping support at ",
                    s.jsx("strong", { children: "+1 737 210 4824" }),
                    ".",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

  // Add this Privacy Policy component before xy = ()
  yy = () =>
    s.jsxs("div", {
      className: "bg-white text-black-800 px-6 py-14 max-w-7xl mx-auto",
      style: {
        fontFamily:
          "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        lineHeight: "1.7",
      },
      children: [
        s.jsxs("header", {
          children: [
            s.jsx("h1", {
              className: "text-4xl font-bold mb-6 text-black-700",
              children: "Privacy Policy",
            }),
            s.jsx("p", {
              className: "mb-10",
              children:
                "At GTR Supply (gtrsupply.com), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.",
            }),
          ],
        }),
        s.jsxs("section", {
          className: "space-y-10",
          children: [
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "INFORMATION WE COLLECT",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children:
                    "We may collect personal information that you voluntarily provide when using our services, including:",
                }),
                s.jsxs("ul", {
                  className: "list-disc ml-6 space-y-2",
                  children: [
                    s.jsx("li", { children: "Name and contact information (email, phone number, address)" }),
                    s.jsx("li", { children: "Billing and shipping addresses" }),
                    s.jsx("li", { children: "Payment information (credit card details are processed securely through third-party providers)" }),
                    s.jsx("li", { children: "Order history and preferences" }),
                    s.jsx("li", { children: "Communications with our customer service team" }),
                  ],
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "HOW WE USE YOUR INFORMATION",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children: "We use the information we collect to:",
                }),
                s.jsxs("ul", {
                  className: "list-disc ml-6 space-y-2",
                  children: [
                    s.jsx("li", { children: "Process and fulfill your orders" }),
                    s.jsx("li", { children: "Communicate with you about your orders, inquiries, and support requests" }),
                    s.jsx("li", { children: "Send promotional emails and newsletters (with your consent)" }),
                    s.jsx("li", { children: "Improve our website, products, and services" }),
                    s.jsx("li", { children: "Prevent fraud and enhance security" }),
                    s.jsx("li", { children: "Comply with legal obligations" }),
                  ],
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "COOKIES AND TRACKING TECHNOLOGIES",
                }),
                s.jsx("p", {
                  children:
                    "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage cookie preferences through your browser settings.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "INFORMATION SHARING",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children:
                    "We do not sell, trade, or rent your personal information to third parties. We may share your information with:",
                }),
                s.jsxs("ul", {
                  className: "list-disc ml-6 space-y-2",
                  children: [
                    s.jsx("li", { children: "Service providers who assist in order fulfillment, payment processing, and shipping" }),
                    s.jsx("li", { children: "Legal authorities when required by law or to protect our rights" }),
                    s.jsx("li", { children: "Business partners with your explicit consent" }),
                  ],
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "DATA SECURITY",
                }),
                s.jsx("p", {
                  children:
                    "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "YOUR RIGHTS",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children: "You have the right to:",
                }),
                s.jsxs("ul", {
                  className: "list-disc ml-6 space-y-2",
                  children: [
                    s.jsx("li", { children: "Access and receive a copy of your personal data" }),
                    s.jsx("li", { children: "Request correction of inaccurate information" }),
                    s.jsx("li", { children: "Request deletion of your personal data" }),
                    s.jsx("li", { children: "Opt-out of marketing communications" }),
                    s.jsx("li", { children: "Withdraw consent where processing is based on consent" }),
                  ],
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "THIRD-PARTY LINKS",
                }),
                s.jsx("p", {
                  children:
                    "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "CHILDREN'S PRIVACY",
                }),
                s.jsx("p", {
                  children:
                    "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "CHANGES TO THIS POLICY",
                }),
                s.jsx("p", {
                  children:
                    "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "CONTACT US",
                }),
                s.jsx("address", {
                  className: "not-italic leading-relaxed",
                  children: s.jsxs("p", {
                    children: [
                      "If you have questions about this Privacy Policy, please contact us at:",
                      s.jsx("br", {}),
                      s.jsx("strong", { children: "Phone:" }),
                      " 1 757 578 1088",
                      s.jsx("br", {}),
                      s.jsx("strong", { children: "Email:" }),
                      " ",
                      s.jsx("a", {
                        href: "mailto:support@gtrsupply.com",
                        className: "text-blue-600 underline",
                        children: "support@gtrsupply.com",
                      }),
                      s.jsx("br", {}),
                      s.jsx("strong", { children: "Website:" }),
                      " ",
                      s.jsx("a", {
                        href: "https://gtrsupply.com",
                        className: "text-blue-600 underline",
                        children: "gtrsupply.com",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  
  xy = () =>
    s.jsxs("div", {
      className: "bg-white text-black-800 px-6 py-14 max-w-7xl mx-auto",
      style: {
        fontFamily:
          "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        lineHeight: "1.7",
      },
      children: [
        s.jsxs("header", {
          children: [
            s.jsx("h1", {
              className: "text-4xl font-bold mb-6 text-black-700",
              children: "Terms and Conditions",
            }),
            s.jsx("p", {
              className: "mb-10",
              children:
                'These Legal Terms constitute a legally binding agreement between you, whether personally or on behalf of an entity ("you"), and GTR Supply, concerning your access to and use of our website and services.',
            }),
          ],
        }),
        s.jsxs("section", {
          className: "space-y-10 ",
          children: [
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "AGREEMENT TO OUR LEGAL TERMS",
                }),
                s.jsx("p", {
                  children:
                    "By accessing our Services, you confirm that you have read, understood, and agreed to these Legal Terms. If you disagree with any part, you must discontinue use immediately.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "OUR SERVICES",
                }),
                s.jsx("p", {
                  children:
                    "We provide IT products and related services via our website. Usage is restricted to individuals over 18 and those complying with local laws.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "INTELLECTUAL PROPERTY",
                }),
                s.jsx("p", {
                  children:
                    "All content, code, designs, and trademarks are the property of GTR Supply. Use of our content is for personal or internal business purposes only unless expressly permitted.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "PURCHASES & PAYMENTS",
                }),
                s.jsx("p", {
                  children:
                    "We accept major credit cards and wire transfers. Prices may change without notice. Customers are responsible for ensuring accurate billing information.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "RETURN POLICY",
                }),
                s.jsx("p", {
                  children:
                    "Review our Return Policy before purchase. Return requests are handled according to our published guidelines.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "PROHIBITED ACTIVITIES",
                }),
                s.jsxs("ul", {
                  className: "list-disc ml-6 space-y-2",
                  children: [
                    s.jsx("li", {
                      children: "Scraping or unauthorized data extraction",
                    }),
                    s.jsx("li", {
                      children: "Use for illegal or fraudulent purposes",
                    }),
                    s.jsx("li", {
                      children: "Spamming, hacking, or system interference",
                    }),
                    s.jsx("li", {
                      children: "Violating any third-party rights",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "THIRD-PARTY LINKS",
                }),
                s.jsx("p", {
                  children:
                    "Our website may contain links to third-party services. We are not responsible for their content, practices, or data usage.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "GOVERNING LAW & DISPUTES",
                }),
                s.jsx("p", {
                  children:
                    "These terms are governed by California law. Disputes must be filed in courts located in Fremont, California.",
                }),
              ],
            }),
            s.jsxs("article", {
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-semibold mb-2 text-black-600",
                  children: "CONTACT US",
                }),
                s.jsx("address", {
                  className: "not-italic leading-relaxed",
                  children: s.jsxs("p", {
                    children: [
                      "For questions or concerns, contact us at:",
                      s.jsx("br", {}),
                      s.jsx("strong", { children: "Phone:" }),
                      " 1 757 578 1088",
                      s.jsx("br", {}),
                      s.jsx("strong", { children: "Email:" }),
                      " ",
                      s.jsx("a", {
                        href: "mailto:support@gtrsupply.com",
                        className: "text-blue-600 underline",
                        children: "support@gtrsupply.com",
                      }),
                      s.jsx("br", {}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });


const wy = () =>
    s.jsxs("div", {
      className: "bg-white px-6 md:px-10 py-10 text-gray-800 max-w-7xl mx-auto",
      style: {
        fontFamily:
          "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      },
      children: [
        s.jsx("h1", {
          className: "text-3xl font-bold mb-6 text-center",
          children: "RETURN POLICY",
        }),
        s.jsx("section", {
          className: "mb-6",
          children: s.jsx("p", {
            children:
              "Thank you for your purchase. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a full refund or an exchange. Please see below for more information on our return policy.",
          }),
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "RETURNS & REFUNDS",
        }),
        s.jsx("p", {
          className: "mb-4",
          children:
            "We are committed to delivering top-notch quality and value. If you are unsatisfied with your purchase, you can return the product for a full refund or exchange, provided it meets the following conditions:",
        }),
        s.jsxs("ul", {
          className: "list-disc list-inside mb-6",
          children: [
            s.jsx("li", {
              children:
                "The product must be unused, in its original condition and packaging",
            }),
            s.jsx("li", {
              children: "All original tags and labels must be intact",
            }),
            s.jsx("li", {
              children:
                "Used or customer-damaged products are not eligible for a refund",
            }),
          ],
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "RETURN PROCESS",
        }),
        s.jsx("p", { className: "mb-4", children: "To initiate a return:" }),
        s.jsxs("ul", {
          className: "list-disc list-inside mb-6",
          children: [
            s.jsxs("li", {
              children: [
                "Complete the RMA form or email ",
                s.jsx("a", {
                  href: "mailto:alan@serverdirect.us",
                  className: "text-blue-600 underline",
                  children: "alan@serverdirect.com",
                }),
                " to request a Return Merchandise Authorization (RMA) number.",
              ],
            }),
            s.jsx("li", {
              children:
                "After receiving the RMA number, securely package the item along with proof of purchase.",
            }),
            s.jsx("li", { children: "Ship the item to:" }),
            s.jsxs("div", {
              className: "ml-6 my-2",
              children: [
                s.jsx("p", { children: "GTR Supply" }),
                s.jsx("p", { children: "Attn: Returns, RMA #" }),
                s.jsx("p", { children: "1800 W Hawthorne Lane" }),
                s.jsx("p", { children: "Ste Q1" }),
                s.jsx("p", { children: "West Chicago IL 60185" }),
              ],
            }),
            s.jsx("li", {
              children: "Customers are responsible for return shipping costs",
            }),
            s.jsx("li", {
              children:
                "Use a trackable shipping method to ensure the safe return of your package",
            }),
            s.jsx("li", {
              children:
                "Once received and inspected, a refund will be issued within 10 business days",
            }),
          ],
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "RETURN POLICY",
        }),
        s.jsxs("ul", {
          className: "list-disc list-inside mb-6",
          children: [
            s.jsx("li", {
              children:
                "Returns must be postmarked within 30 days of the purchase date",
            }),
            s.jsx("li", {
              children: "Include all original tags, labels, and packaging",
            }),
            s.jsx("li", {
              children: "Product must be in unused and original condition",
            }),
          ],
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "REFUND POLICY",
        }),
        s.jsx("p", {
          className: "mb-6",
          children:
            "Refunds or exchanges are processed within 10 business days after the returned item is received and inspected. Customers will receive email notifications upon completion.",
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "CANCELLATION POLICY",
        }),
        s.jsx("p", {
          className: "mb-6",
          children:
            "Orders cannot be canceled once they are processed or shipped. If you cancel before processing, a 15% cancellation fee will apply to cover restocking and refund charges.",
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "LATE OR MISSING REFUNDS",
        }),
        s.jsxs("ul", {
          className: "list-disc list-inside mb-6",
          children: [
            s.jsx("li", {
              children: "Check your bank account and transaction history",
            }),
            s.jsx("li", {
              children:
                "Contact your credit card provider and bank, as processing times may vary",
            }),
            s.jsx("li", {
              children:
                "Credit card companies can take up to 30 days to post refunds",
            }),
            s.jsx("li", {
              children:
                "If the refund is still not received, contact us for assistance",
            }),
          ],
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "DELIVERY INFORMATION",
        }),
        s.jsxs("p", {
          className: "mb-6",
          children: [
            "Orders ship within 2 to 5 business days. If your order does not arrive within the estimated delivery window, please contact us at ",
            s.jsx("a", {
              href: "mailto:support@gtrsupply.com",
              className: "text-blue-600 underline",
              children: "support@gtrsupply.com",
            }),
            ".",
            s.jsx("br", {}),
            s.jsx("br", {}),
            "Delays caused by incorrect shipping details or missed deliveries are excluded from this timeframe.",
          ],
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "TRACKING INFORMATION",
        }),
        s.jsx("p", {
          className: "mb-6",
          children:
            "Tracking numbers will be emailed to customers once available.",
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "ADDRESS ERRORS",
        }),
        s.jsx("p", {
          className: "mb-6",
          children:
            "If you entered the wrong shipping address, email us immediately. While we will try to assist, changes cannot be guaranteed after the order is processed or shipped. Incorrect shipping details are the customerâ€™s responsibility.",
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "INVALID REASONS FOR RETURN / DENIAL OF REPLACEMENT",
        }),
        s.jsxs("ul", {
          className: "list-disc list-inside mb-6",
          children: [
            s.jsx("li", {
              children:
                "Change of mind: Orders cannot be returned for this reason",
            }),
            s.jsx("li", {
              children:
                "Found a lower price elsewhere: Price comparisons must be made before ordering",
            }),
            s.jsx("li", {
              children:
                "Non-matching RMA details: Items must match the RMA form",
            }),
            s.jsx("li", {
              children: "Tampered or damaged products are not eligible",
            }),
          ],
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "EXCEPTIONS",
        }),
        s.jsx("p", {
          className: "mb-2",
          children: "For defective or damaged products:",
        }),
        s.jsx("ul", {
          className: "list-disc list-inside mb-4",
          children: s.jsx("li", {
            children: "Contact us for a refund or exchange",
          }),
        }),
        s.jsx("p", { className: "mb-2", children: "Restocking fees apply:" }),
        s.jsxs("ul", {
          className: "list-disc list-inside mb-6",
          children: [
            s.jsx("li", { children: "25% for most returns" }),
            s.jsxs("li", {
              children: [
                "50% for returns with:",
                s.jsxs("ul", {
                  className: "list-disc list-inside ml-6",
                  children: [
                    s.jsx("li", { children: "Missing or replaced components" }),
                    s.jsx("li", {
                      children:
                        "Items found functional after being reported defective",
                    }),
                    s.jsx("li", { children: "Post-warranty RMA eligibility" }),
                    s.jsx("li", { children: "Damaged or tampered packaging" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: "CONTACT INFORMATION",
        }),
        s.jsx("p", {
          className: "mb-1",
          children: "Phone: +1 737 210 4824",
        }),
        s.jsxs("p", {
          children: [
            "Email: ",
            s.jsx("a", {
              href: "mailto:support@gtrsupply.com",
              className: "text-blue-600 underline",
              children: "support@gtrsupply.com",
            }),
          ],
        }),
      ],
    }),
  by = "_main_1wn89_1",
  jy = "_container_1wn89_19",
  Sy = "_mainForm_1wn89_45",
  Ny = "_formGroup_1wn89_55",
  ky = "_nameFields_1wn89_63",
  Py = "_required_1wn89_75",
  Cy = "_submitButton_1wn89_127",
  Ey = "_sidebar_1wn89_159",
  Ty = "_sectionTitle_1wn89_175",
  My = "_sectionDesc_1wn89_189",
  Ry = "_firstBtn_1wn89_201",
  Dy = "_contactInfo_1wn89_249",
  G = {
    main: by,
    container: jy,
    mainForm: Sy,
    formGroup: Ny,
    nameFields: ky,
    required: Py,
    submitButton: Cy,
    sidebar: Ey,
    sectionTitle: Ty,
    sectionDesc: My,
    firstBtn: Ry,
    contactInfo: Dy,
  },
  Iy = () =>
    s.jsxs("main", {
      className: G.main,
      children: [
        s.jsxs("div", {
          className: "max-w-4xl mx-auto text-center px-4",
          children: [
            s.jsx("p", {
              className:
                "text-base font-semibold text-black-600 mb-3 tracking-wide",
              children: "How can we help?",
            }),
            s.jsx("h1", {
              className: "text-6xl font-bold text-sky-800 mb-6 leading-tight",
              children: "Contact Sales",
            }),
            s.jsx("p", {
              className:
                "text-lg text-black-600 leading-relaxed max-w-2xl mx-auto pb-5",
              children:
                "Weâ€™re here to help you achieve your IT hardware goalsâ€”letâ€™s get started.",
            }),
          ],
        }),
        s.jsxs("div", {
          className: G.container,
          children: [
            s.jsxs("form", {
              className: G.mainForm,
              children: [
                s.jsxs("div", {
                  className: `${G.formGroup} ${G.nameFields}`,
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsxs("label", {
                          htmlFor: "first-name",
                          style: { marginTop: "20px" },
                          children: [
                            "First Name",
                            s.jsx("span", {
                              className: G.required,
                              children: "*",
                            }),
                          ],
                        }),
                        s.jsx("input", {
                          type: "text",
                          id: "first-name",
                          style: { width: "100%", paddingLeft: "20px" },
                          required: !0,
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsxs("label", {
                          htmlFor: "last-name",
                          children: [
                            "Last Name",
                            s.jsx("span", {
                              className: G.required,
                              children: "*",
                            }),
                          ],
                        }),
                        s.jsx("input", {
                          type: "text",
                          id: "last-name",
                          style: { width: "100%", paddingLeft: "20px" },
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: G.formGroup,
                  children: [
                    s.jsxs("label", {
                      htmlFor: "email",
                      children: [
                        "Email Address",
                        s.jsx("span", { className: G.required, children: "*" }),
                      ],
                    }),
                    s.jsx("input", {
                      type: "email",
                      id: "email",
                      style: { paddingLeft: "20px" },
                      placeholder:
                        "For EDU discount, use your EDU email if applicable.",
                      required: !0,
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: G.formGroup,
                  children: [
                    s.jsxs("label", {
                      htmlFor: "company",
                      children: [
                        "Company Name",
                        s.jsx("span", { className: G.required, children: "*" }),
                      ],
                    }),
                    s.jsx("input", {
                      type: "text",
                      style: { paddingLeft: "20px" },
                      id: "company",
                      required: !0,
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: G.formGroup,
                  children: [
                    s.jsxs("label", {
                      htmlFor: "industry",
                      children: [
                        "Industry",
                        s.jsx("span", { className: G.required, children: "*" }),
                      ],
                    }),
                    s.jsxs("select", {
                      id: "industry",
                      style: { paddingLeft: "10px" },
                      required: !0,
                      children: [
                        s.jsx("option", { value: "", children: "Select" }),
                        s.jsx("option", { children: "Retail" }),
                        s.jsx("option", { children: "WholeSale" }),
                        s.jsx("option", { children: "Education" }),
                        s.jsx("option", { children: "Government" }),
                        s.jsx("option", { children: "Healthcare" }),
                        s.jsx("option", { children: "Other" }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: G.formGroup,
                  children: [
                    s.jsxs("label", {
                      htmlFor: "job-title",
                      children: [
                        "Job Title",
                        s.jsx("span", { className: G.required, children: "*" }),
                      ],
                    }),
                    s.jsx("input", {
                      type: "text",
                      id: "job-title",
                      style: { paddingLeft: "20px" },
                      placeholder:
                        "Ex: Data Scientist, System Admin, Professor, Student",
                      required: !0,
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: G.formGroup,
                  children: [
                    s.jsxs("label", {
                      htmlFor: "phone",
                      children: [
                        "Phone Number",
                        s.jsx("span", { className: G.required, children: "*" }),
                      ],
                    }),
                    s.jsx("input", {
                      type: "tel",
                      style: { paddingLeft: "20px" },
                      id: "phone",
                      required: !0,
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: G.formGroup,
                  children: [
                    s.jsx("label", { htmlFor: "message", children: "Message" }),
                    s.jsx("br", {}),
                    s.jsx("textarea", {
                      id: "message",
                      rows: 7,
                      style: { paddingLeft: "10px", paddingTop: "10px" },
                      placeholder: "Type your message here...",
                    }),
                  ],
                }),
                s.jsx("button", {
                  type: "submit",
                  className: G.submitButton,
                  children: "Submit",
                }),
              ],
            }),
            s.jsxs("div", {
              className: G.sidebar,
              children: [
                s.jsxs("div", {
                  children: [
                    s.jsx("p", {
                      className: G.sectionTitle,
                      children: "Technical Support",
                    }),
                    s.jsx("p", {
                      className: G.sectionDesc,
                      children:
                        "Our technicians are ready to handle your most pressing questions.",
                    }),
                    s.jsx("a", {
                      href: "#",
                      className: G.firstBtn,
                      children: "Submit a ticket â†’",
                    }),
                  ],
                }),
                s.jsx("br", {}),
                s.jsx("hr", {}),
                s.jsx("br", {}),
                s.jsxs("div", {
                  children: [
                    s.jsx("p", {
                      className: G.sectionTitle,
                      children: "RMA Requests",
                    }),
                    s.jsx("p", {
                      className: G.sectionDesc,
                      children:
                        "Submit a form for any parts youâ€™ve isolated as defective. Weâ€™ll review it ASAP.",
                    }),
                    s.jsx("a", {
                      href: "#",
                      className: G.firstBtn,
                      children: "Submit a form â†’",
                    }),
                  ],
                }),
                s.jsx("br", {}),
                s.jsx("hr", {}),
                s.jsx("br", {}),
                s.jsxs("div", {
                  className: G.contactInfo,
                  children: [
                    s.jsxs("p", {
                      children: [
                        s.jsx("strong", { children: "P" }),
                        " |  757 578 1088",
                      ],
                    }),
                    s.jsx("p", {
                      children: s.jsx("a", {
                        href: "mailto:sales@serverdirect.com",
                        children: "sales@serverdirect.com",
                      }),
                    }),
                    s.jsx("p", {
                      children: s.jsx("a", { href: "#", children: "Find us" }),
                    }),
                    s.jsx("p", {
                      children: s.jsx("a", {
                        href: "#",
                        children: "Partner with us",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
function ur({ children: e }) {
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(Un, {
        children: s.jsx("meta", {
          name: "robots",
          content: "noindex,nofollow",
        }),
      }),
      e,
    ],
  });
}
const tt = {
  title: "GTR Supply | Buy Refurbished Servers & IT Equipment",
  description:
    "GTR Supply is a B2B company specializing in desktops, refurbished servers, data storage, IP phones, and networking equipment.",
  openGraph: {
    type: "website",
    url: "https://serverdirect.us/",
    title: "GTR Supply",
    description:
      "GTR Supply is a B2B company specializing in desktops, refurbished servers, data storage, IP phones, and networking equipment.",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://serverdirect.us/" },
};
function Fy() {
  return s.jsx($0, {
    children: s.jsx(_0, {
      children: s.jsx(eg, {
        children: s.jsxs(zm, {
          children: [
            s.jsxs(Un, {
              children: [
                s.jsx("title", { children: tt.title }),
                s.jsx("meta", { name: "description", content: tt.description }),
                s.jsx("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                s.jsx("meta", { charSet: "utf-8" }),
                s.jsx("link", {
                  rel: "canonical",
                  href: tt.alternates.canonical,
                }),
                s.jsx("meta", {
                  name: "robots",
                  content:
                    "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
                }),
                s.jsx("meta", { name: "theme-color", content: "#0ea5e9" }),
                s.jsx("link", {
                  rel: "icon",
                  href: "data:image/png;base64,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",
                }),
                s.jsx("link", {
                  rel: "apple-touch-icon",
                  href: "data:image/png;base64,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",
                }),
                s.jsx("link", { rel: "manifest", href: "/site.webmanifest" }),
                s.jsx("meta", {
                  property: "og:site_name",
                  content: "GTR Supply",
                }),
                s.jsx("meta", {
                  property: "og:type",
                  content: tt.openGraph.type,
                }),
                s.jsx("meta", {
                  property: "og:url",
                  content: tt.openGraph.url,
                }),
                s.jsx("meta", {
                  property: "og:title",
                  content: tt.openGraph.title,
                }),
                s.jsx("meta", {
                  property: "og:description",
                  content: tt.openGraph.description,
                }),
                s.jsx("meta", {
                  property: "og:image",
                  content:
                    "data:image/png;base64,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",
                }),
                s.jsx("meta", { property: "og:locale", content: "en_US" }),
                s.jsx("meta", {
                  name: "twitter:card",
                  content: tt.twitter.card,
                }),
                s.jsx("meta", {
                  name: "twitter:title",
                  content: tt.openGraph.title,
                }),
                s.jsx("meta", {
                  name: "twitter:description",
                  content: tt.openGraph.description,
                }),
                s.jsx("meta", {
                  name: "twitter:image",
                  content:
                    "data:image/png;base64,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",
                }),
                s.jsx("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "",
                }),
                s.jsx("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                s.jsx("script", {
                  type: "application/ld+json",
                  children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "GTR Supply",
                    url: "https://serverdirect.us/",
                    logo: "data:image/png;base64,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",
                    sameAs: [
                      "https://www.facebook.com/",
                      "https://www.linkedin.com/",
                    ],
                    contactPoint: [
                      {
                        "@type": "ContactPoint",
                        telephone: "+1-000-000-0000",
                        contactType: "customer service",
                        areaServed: "US",
                      },
                    ],
                  }),
                }),
                s.jsx("script", {
                  type: "application/ld+json",
                  children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "GTR Supply",
                    url: "https://serverdirect.us/",
                    potentialAction: {
                      "@type": "SearchAction",
                      target:
                        "https://serverdirect.us/products?q={search_term_string}",
                      "query-input": "required name=search_term_string",
                    },
                  }),
                }),
              ],
            }),
            s.jsx(z0, {
              children: s.jsxs("div", {
                className: "min-h-screen bg-gray-50 flex flex-col",
                children: [
                  s.jsx(Pg, {}),
                  s.jsx("main", {
                    className: "flex-1",
                    children: s.jsxs(g0, {
                      children: [
                        s.jsx(te, { path: "/", element: s.jsx(Yx, {}) }),
                        s.jsx(te, {
                          path: "/products",
                          element: s.jsx(Kx, {}),
                        }),
                        s.jsx(te, {
                          path: "/products/:id",
                          element: s.jsx(Xx, {}),
                        }),
                        s.jsx(te, {
                          path: "/cart",
                          element: s.jsx(ur, { children: s.jsx(ty, {}) }),
                        }),
                        s.jsx(te, {
                          path: "/wishlist",
                          element: s.jsx(ur, { children: s.jsx(ry, {}) }),
                        }),
                        s.jsx(te, {
                          path: "/login",
                          element: s.jsx(ur, { children: s.jsx(ny, {}) }),
                        }),
                        s.jsx(te, {
                          path: "/register",
                          element: s.jsx(ur, { children: s.jsx(sy, {}) }),
                        }),
                        s.jsx(te, {
                          path: "/admin",
                          element: s.jsx(ur, { children: s.jsx(ly, {}) }),
                        }),
                        s.jsx(te, {
                          path: "/checkout",
                          element: s.jsx(ur, { children: s.jsx(oy, {}) }),
                        }),
                        s.jsx(te, {
                          path: "/about-us",
                          element: s.jsx(Mg, {}),
                        }),
                        s.jsx(te, { path: "/returns", element: s.jsx(wy, {}) }),
                        s.jsx(te, {
                          path: "/shipping",
                          element: s.jsx(gy, {}),
                        }),
                        s.jsx(te, { path: "/terms", element: s.jsx(xy, {}) }),
                        s.jsx(te, { path: "/privacy", element: s.jsx(yy, {}) }),
                        s.jsx(te, { path: "/support", element: s.jsx(fy, {}) }),
                        
                        s.jsx(te, {
                          path: "/warranty",
                          element: s.jsx(cy, {}),
                        }),
                        s.jsx(te, {
                          path: "/contact-v1",
                          element: s.jsx(Iy, {}),
                        }),
                      ],
                    }),
                  }),
                  s.jsx(Tg, {}),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
cm(document.getElementById("root")).render(
  s.jsx(v.StrictMode, { children: s.jsx(Fy, {}) })
);
