var Ys = Object.defineProperty;
var Us = (e, t, r) => t in e ? Ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _r = (e, t, r) => Us(e, typeof t != "symbol" ? t + "" : t, r);
import * as F from "react";
import me, { forwardRef as Vi, useState as at, useRef as Ue, useEffect as Or, useLayoutEffect as Ks, createContext as ba, useContext as Xs } from "react";
import * as Qs from "react-dom";
import $r from "react-dom";
function _s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = { exports: {} }, gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function $s() {
  if (lo) return gr;
  lo = 1;
  var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, s, c) {
    var u, d = {}, y = null, A = null;
    c !== void 0 && (y = "" + c), s.key !== void 0 && (y = "" + s.key), s.ref !== void 0 && (A = s.ref);
    for (u in s) n.call(s, u) && !o.hasOwnProperty(u) && (d[u] = s[u]);
    if (l && l.defaultProps) for (u in s = l.defaultProps, s) d[u] === void 0 && (d[u] = s[u]);
    return { $$typeof: t, type: l, key: y, ref: A, props: d, _owner: i.current };
  }
  return gr.Fragment = r, gr.jsx = a, gr.jsxs = a, gr;
}
var hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function el() {
  return co || (co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), g = Symbol.iterator, f = "@@iterator";
    function v(E) {
      if (E === null || typeof E != "object")
        return null;
      var N = g && E[g] || E[f];
      return typeof N == "function" ? N : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(E) {
      {
        for (var N = arguments.length, Z = new Array(N > 1 ? N - 1 : 0), $ = 1; $ < N; $++)
          Z[$ - 1] = arguments[$];
        b("error", E, Z);
      }
    }
    function b(E, N, Z) {
      {
        var $ = m.ReactDebugCurrentFrame, se = $.getStackAddendum();
        se !== "" && (N += "%s", Z = Z.concat([se]));
        var Ae = Z.map(function(ie) {
          return String(ie);
        });
        Ae.unshift("Warning: " + N), Function.prototype.apply.call(console[E], console, Ae);
      }
    }
    var x = !1, S = !1, w = !1, T = !1, I = !1, V;
    V = Symbol.for("react.module.reference");
    function P(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === n || E === o || I || E === i || E === c || E === u || T || E === A || x || S || w || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === d || E.$$typeof === a || E.$$typeof === l || E.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === V || E.getModuleId !== void 0));
    }
    function M(E, N, Z) {
      var $ = E.displayName;
      if ($)
        return $;
      var se = N.displayName || N.name || "";
      return se !== "" ? Z + "(" + se + ")" : Z;
    }
    function p(E) {
      return E.displayName || "Context";
    }
    function R(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case l:
            var N = E;
            return p(N) + ".Consumer";
          case a:
            var Z = E;
            return p(Z._context) + ".Provider";
          case s:
            return M(E, E.render, "ForwardRef");
          case d:
            var $ = E.displayName || null;
            return $ !== null ? $ : R(E.type) || "Memo";
          case y: {
            var se = E, Ae = se._payload, ie = se._init;
            try {
              return R(ie(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, j = 0, G, D, W, J, O, H, z;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function q() {
      {
        if (j === 0) {
          G = console.log, D = console.info, W = console.warn, J = console.error, O = console.group, H = console.groupCollapsed, z = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        j++;
      }
    }
    function Q() {
      {
        if (j--, j === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, E, {
              value: G
            }),
            info: k({}, E, {
              value: D
            }),
            warn: k({}, E, {
              value: W
            }),
            error: k({}, E, {
              value: J
            }),
            group: k({}, E, {
              value: O
            }),
            groupCollapsed: k({}, E, {
              value: H
            }),
            groupEnd: k({}, E, {
              value: z
            })
          });
        }
        j < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = m.ReactCurrentDispatcher, K;
    function U(E, N, Z) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (se) {
            var $ = se.stack.trim().match(/\n( *(at )?)/);
            K = $ && $[1] || "";
          }
        return `
` + K + E;
      }
    }
    var re = !1, te;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      te = new he();
    }
    function B(E, N) {
      if (!E || re)
        return "";
      {
        var Z = te.get(E);
        if (Z !== void 0)
          return Z;
      }
      var $;
      re = !0;
      var se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = Y.current, Y.current = null, q();
      try {
        if (N) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (Ve) {
              $ = Ve;
            }
            Reflect.construct(E, [], ie);
          } else {
            try {
              ie.call();
            } catch (Ve) {
              $ = Ve;
            }
            E.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ve) {
            $ = Ve;
          }
          E();
        }
      } catch (Ve) {
        if (Ve && $ && typeof Ve.stack == "string") {
          for (var ne = Ve.stack.split(`
`), Me = $.stack.split(`
`), Ce = ne.length - 1, Ee = Me.length - 1; Ce >= 1 && Ee >= 0 && ne[Ce] !== Me[Ee]; )
            Ee--;
          for (; Ce >= 1 && Ee >= 0; Ce--, Ee--)
            if (ne[Ce] !== Me[Ee]) {
              if (Ce !== 1 || Ee !== 1)
                do
                  if (Ce--, Ee--, Ee < 0 || ne[Ce] !== Me[Ee]) {
                    var Ye = `
` + ne[Ce].replace(" at new ", " at ");
                    return E.displayName && Ye.includes("<anonymous>") && (Ye = Ye.replace("<anonymous>", E.displayName)), typeof E == "function" && te.set(E, Ye), Ye;
                  }
                while (Ce >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        re = !1, Y.current = Ae, Q(), Error.prepareStackTrace = se;
      }
      var Ut = E ? E.displayName || E.name : "", Vt = Ut ? U(Ut) : "";
      return typeof E == "function" && te.set(E, Vt), Vt;
    }
    function we(E, N, Z) {
      return B(E, !1);
    }
    function Pe(E) {
      var N = E.prototype;
      return !!(N && N.isReactComponent);
    }
    function Le(E, N, Z) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return B(E, Pe(E));
      if (typeof E == "string")
        return U(E);
      switch (E) {
        case c:
          return U("Suspense");
        case u:
          return U("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case s:
            return we(E.render);
          case d:
            return Le(E.type, N, Z);
          case y: {
            var $ = E, se = $._payload, Ae = $._init;
            try {
              return Le(Ae(se), N, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, tt = {}, ft = m.ReactDebugCurrentFrame;
    function rt(E) {
      if (E) {
        var N = E._owner, Z = Le(E.type, E._source, N ? N.type : null);
        ft.setExtraStackFrame(Z);
      } else
        ft.setExtraStackFrame(null);
    }
    function ze(E, N, Z, $, se) {
      {
        var Ae = Function.call.bind(et);
        for (var ie in E)
          if (Ae(E, ie)) {
            var ne = void 0;
            try {
              if (typeof E[ie] != "function") {
                var Me = Error(($ || "React class") + ": " + Z + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Me.name = "Invariant Violation", Me;
              }
              ne = E[ie](N, ie, $, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ce) {
              ne = Ce;
            }
            ne && !(ne instanceof Error) && (rt(se), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", Z, ie, typeof ne), rt(null)), ne instanceof Error && !(ne.message in tt) && (tt[ne.message] = !0, rt(se), h("Failed %s type: %s", Z, ne.message), rt(null));
          }
      }
    }
    var pt = Array.isArray;
    function At(E) {
      return pt(E);
    }
    function Ot(E) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, Z = N && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Z;
      }
    }
    function Pt(E) {
      try {
        return Lt(E), !1;
      } catch {
        return !0;
      }
    }
    function Lt(E) {
      return "" + E;
    }
    function jt(E) {
      if (Pt(E))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ot(E)), Lt(E);
    }
    var mt = m.ReactCurrentOwner, zt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xt, Yt;
    function je(E) {
      if (et.call(E, "ref")) {
        var N = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Wt(E) {
      if (et.call(E, "key")) {
        var N = Object.getOwnPropertyDescriptor(E, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function gt(E, N) {
      typeof E.ref == "string" && mt.current;
    }
    function Ge(E, N) {
      {
        var Z = function() {
          xt || (xt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        Z.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Yn(E, N) {
      {
        var Z = function() {
          Yt || (Yt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        Z.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var pr = function(E, N, Z, $, se, Ae, ie) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: N,
        ref: Z,
        props: ie,
        // Record the component responsible for creating this element.
        _owner: Ae
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Un(E, N, Z, $, se) {
      {
        var Ae, ie = {}, ne = null, Me = null;
        Z !== void 0 && (jt(Z), ne = "" + Z), Wt(N) && (jt(N.key), ne = "" + N.key), je(N) && (Me = N.ref, gt(N, se));
        for (Ae in N)
          et.call(N, Ae) && !zt.hasOwnProperty(Ae) && (ie[Ae] = N[Ae]);
        if (E && E.defaultProps) {
          var Ce = E.defaultProps;
          for (Ae in Ce)
            ie[Ae] === void 0 && (ie[Ae] = Ce[Ae]);
        }
        if (ne || Me) {
          var Ee = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ne && Ge(ie, Ee), Me && Yn(ie, Ee);
        }
        return pr(E, ne, Me, se, $, mt.current, ie);
      }
    }
    var Et = m.ReactCurrentOwner, Ur = m.ReactDebugCurrentFrame;
    function It(E) {
      if (E) {
        var N = E._owner, Z = Le(E.type, E._source, N ? N.type : null);
        Ur.setExtraStackFrame(Z);
      } else
        Ur.setExtraStackFrame(null);
    }
    var Ar;
    Ar = !1;
    function mr(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function Kr() {
      {
        if (Et.current) {
          var E = R(Et.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Kn(E) {
      return "";
    }
    var Xr = {};
    function Xn(E) {
      {
        var N = Kr();
        if (!N) {
          var Z = typeof E == "string" ? E : E.displayName || E.name;
          Z && (N = `

Check the top-level render call using <` + Z + ">.");
        }
        return N;
      }
    }
    function ee(E, N) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var Z = Xn(N);
        if (Xr[Z])
          return;
        Xr[Z] = !0;
        var $ = "";
        E && E._owner && E._owner !== Et.current && ($ = " It was passed a child from " + R(E._owner.type) + "."), It(E), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, $), It(null);
      }
    }
    function We(E, N) {
      {
        if (typeof E != "object")
          return;
        if (At(E))
          for (var Z = 0; Z < E.length; Z++) {
            var $ = E[Z];
            mr($) && ee($, N);
          }
        else if (mr(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var se = v(E);
          if (typeof se == "function" && se !== E.entries)
            for (var Ae = se.call(E), ie; !(ie = Ae.next()).done; )
              mr(ie.value) && ee(ie.value, N);
        }
      }
    }
    function Qr(E) {
      {
        var N = E.type;
        if (N == null || typeof N == "string")
          return;
        var Z;
        if (typeof N == "function")
          Z = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === d))
          Z = N.propTypes;
        else
          return;
        if (Z) {
          var $ = R(N);
          ze(Z, E.props, "prop", $, E);
        } else if (N.PropTypes !== void 0 && !Ar) {
          Ar = !0;
          var se = R(N);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gs(E) {
      {
        for (var N = Object.keys(E.props), Z = 0; Z < N.length; Z++) {
          var $ = N[Z];
          if ($ !== "children" && $ !== "key") {
            It(E), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), It(null);
            break;
          }
        }
        E.ref !== null && (It(E), h("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    var ao = {};
    function so(E, N, Z, $, se, Ae) {
      {
        var ie = P(E);
        if (!ie) {
          var ne = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = Kn();
          Me ? ne += Me : ne += Kr();
          var Ce;
          E === null ? Ce = "null" : At(E) ? Ce = "array" : E !== void 0 && E.$$typeof === t ? (Ce = "<" + (R(E.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof E, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, ne);
        }
        var Ee = Un(E, N, Z, se, Ae);
        if (Ee == null)
          return Ee;
        if (ie) {
          var Ye = N.children;
          if (Ye !== void 0)
            if ($)
              if (At(Ye)) {
                for (var Ut = 0; Ut < Ye.length; Ut++)
                  We(Ye[Ut], E);
                Object.freeze && Object.freeze(Ye);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(Ye, E);
        }
        if (et.call(N, "key")) {
          var Vt = R(E), Ve = Object.keys(N).filter(function(zs) {
            return zs !== "key";
          }), Qn = Ve.length > 0 ? "{key: someKey, " + Ve.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ao[Vt + Qn]) {
            var qs = Ve.length > 0 ? "{" + Ve.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qn, Vt, qs, Vt), ao[Vt + Qn] = !0;
          }
        }
        return E === n ? Gs(Ee) : Qr(Ee), Ee;
      }
    }
    function Bs(E, N, Z) {
      return so(E, N, Z, !0);
    }
    function Hs(E, N, Z) {
      return so(E, N, Z, !1);
    }
    var Js = Hs, Zs = Bs;
    hr.Fragment = n, hr.jsx = Js, hr.jsxs = Zs;
  }()), hr;
}
process.env.NODE_ENV === "production" ? gi.exports = $s() : gi.exports = el();
var X = gi.exports;
function uo(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Di(e = {}, t = {}) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter((n) => r.indexOf(n) < 0).forEach((n) => {
    typeof e[n] > "u" ? e[n] = t[n] : uo(t[n]) && uo(e[n]) && Object.keys(t[n]).length > 0 && Di(e[n], t[n]);
  });
}
const Ca = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
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
function lt() {
  const e = typeof document < "u" ? document : {};
  return Di(e, Ca), e;
}
const tl = {
  document: Ca,
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
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  }
};
function Oe() {
  const e = typeof window < "u" ? window : {};
  return Di(e, tl), e;
}
function rl(e = "") {
  return e.trim().split(" ").filter((t) => !!t.trim());
}
function nl(e) {
  const t = e;
  Object.keys(t).forEach((r) => {
    try {
      t[r] = null;
    } catch {
    }
    try {
      delete t[r];
    } catch {
    }
  });
}
function Sa(e, t = 0) {
  return setTimeout(e, t);
}
function An() {
  return Date.now();
}
function il(e) {
  const t = Oe();
  let r;
  return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r;
}
function ol(e, t = "x") {
  const r = Oe();
  let n, i, o;
  const a = il(e);
  return r.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((l) => l.replace(",", ".")).join(", ")), o = new r.WebKitCSSMatrix(i === "none" ? "" : i)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), t === "x" && (r.WebKitCSSMatrix ? i = o.m41 : n.length === 16 ? i = parseFloat(n[12]) : i = parseFloat(n[4])), t === "y" && (r.WebKitCSSMatrix ? i = o.m42 : n.length === 16 ? i = parseFloat(n[13]) : i = parseFloat(n[5])), i || 0;
}
function en(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function al(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Be(...e) {
  const t = Object(e[0]), r = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < e.length; n += 1) {
    const i = e[n];
    if (i != null && !al(i)) {
      const o = Object.keys(Object(i)).filter((a) => r.indexOf(a) < 0);
      for (let a = 0, l = o.length; a < l; a += 1) {
        const s = o[a], c = Object.getOwnPropertyDescriptor(i, s);
        c !== void 0 && c.enumerable && (en(t[s]) && en(i[s]) ? i[s].__swiper__ ? t[s] = i[s] : Be(t[s], i[s]) : !en(t[s]) && en(i[s]) ? (t[s] = {}, i[s].__swiper__ ? t[s] = i[s] : Be(t[s], i[s])) : t[s] = i[s]);
      }
    }
  }
  return t;
}
function Kt(e, t, r) {
  e.style.setProperty(t, r);
}
function xa({
  swiper: e,
  targetPosition: t,
  side: r
}) {
  const n = Oe(), i = -e.translate;
  let o = null, a;
  const l = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const s = t > i ? "next" : "prev", c = (d, y) => s === "next" && d >= y || s === "prev" && d <= y, u = () => {
    a = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = a);
    const d = Math.max(Math.min((a - o) / l, 1), 0), y = 0.5 - Math.cos(d * Math.PI) / 2;
    let A = i + y * (t - i);
    if (c(A, t) && (A = t), e.wrapperEl.scrollTo({
      [r]: A
    }), c(A, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [r]: A
        });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(u);
  };
  u();
}
function st(e, t = "") {
  const r = Oe(), n = [...e.children];
  return r.HTMLSlotElement && e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter((i) => i.matches(t)) : n;
}
function sl(e, t) {
  const r = [t];
  for (; r.length > 0; ) {
    const n = r.shift();
    if (e === n)
      return !0;
    r.push(...n.children, ...n.shadowRoot ? n.shadowRoot.children : [], ...n.assignedElements ? n.assignedElements() : []);
  }
}
function ll(e, t) {
  const r = Oe();
  let n = t.contains(e);
  return !n && r.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(e), n || (n = sl(e, t))), n;
}
function mn(e) {
  try {
    console.warn(e);
    return;
  } catch {
  }
}
function gn(e, t = []) {
  const r = document.createElement(e);
  return r.classList.add(...Array.isArray(t) ? t : rl(t)), r;
}
function cl(e, t) {
  const r = [];
  for (; e.previousElementSibling; ) {
    const n = e.previousElementSibling;
    t ? n.matches(t) && r.push(n) : r.push(n), e = n;
  }
  return r;
}
function ul(e, t) {
  const r = [];
  for (; e.nextElementSibling; ) {
    const n = e.nextElementSibling;
    t ? n.matches(t) && r.push(n) : r.push(n), e = n;
  }
  return r;
}
function wt(e, t) {
  return Oe().getComputedStyle(e, null).getPropertyValue(t);
}
function hn(e) {
  let t = e, r;
  if (t) {
    for (r = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (r += 1);
    return r;
  }
}
function Ea(e, t) {
  const r = [];
  let n = e.parentElement;
  for (; n; )
    t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
  return r;
}
function hi(e, t, r) {
  const n = Oe();
  return e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"));
}
function Te(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function Pr(e, t = "") {
  typeof trustedTypes < "u" ? e.innerHTML = trustedTypes.createPolicy("html", {
    createHTML: (r) => r
  }).createHTML(t) : e.innerHTML = t;
}
let _n;
function dl() {
  const e = Oe(), t = lt();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
  };
}
function Ia() {
  return _n || (_n = dl()), _n;
}
let $n;
function fl({
  userAgent: e
} = {}) {
  const t = Ia(), r = Oe(), n = r.navigator.platform, i = e || r.navigator.userAgent, o = {
    ios: !1,
    android: !1
  }, a = r.screen.width, l = r.screen.height, s = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const u = i.match(/(iPod)(.*OS\s([\d_]+))?/), d = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), y = n === "Win32";
  let A = n === "MacIntel";
  const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !c && A && t.touch && g.indexOf(`${a}x${l}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), A = !1), s && !y && (o.os = "android", o.android = !0), (c || d || u) && (o.os = "ios", o.ios = !0), o;
}
function wa(e = {}) {
  return $n || ($n = fl(e)), $n;
}
let ei;
function pl() {
  const e = Oe(), t = wa();
  let r = !1;
  function n() {
    const l = e.navigator.userAgent.toLowerCase();
    return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
  }
  if (n()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [s, c] = l.split("Version/")[1].split(" ")[0].split(".").map((u) => Number(u));
      r = s < 16 || s === 16 && c < 2;
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), o = n(), a = o || i && t.ios;
  return {
    isSafari: r || o,
    needPerspectiveFix: r,
    need3dFix: a,
    isWebView: i
  };
}
function Ta() {
  return ei || (ei = pl()), ei;
}
function Al({
  swiper: e,
  on: t,
  emit: r
}) {
  const n = Oe();
  let i = null, o = null;
  const a = () => {
    !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
  }, l = () => {
    !e || e.destroyed || !e.initialized || (i = new ResizeObserver((u) => {
      o = n.requestAnimationFrame(() => {
        const {
          width: d,
          height: y
        } = e;
        let A = d, g = y;
        u.forEach(({
          contentBoxSize: f,
          contentRect: v,
          target: m
        }) => {
          m && m !== e.el || (A = v ? v.width : (f[0] || f).inlineSize, g = v ? v.height : (f[0] || f).blockSize);
        }), (A !== d || g !== y) && a();
      });
    }), i.observe(e.el));
  }, s = () => {
    o && n.cancelAnimationFrame(o), i && i.unobserve && e.el && (i.unobserve(e.el), i = null);
  }, c = () => {
    !e || e.destroyed || !e.initialized || r("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      l();
      return;
    }
    n.addEventListener("resize", a), n.addEventListener("orientationchange", c);
  }), t("destroy", () => {
    s(), n.removeEventListener("resize", a), n.removeEventListener("orientationchange", c);
  });
}
function ml({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n
}) {
  const i = [], o = Oe(), a = (c, u = {}) => {
    const d = o.MutationObserver || o.WebkitMutationObserver, y = new d((A) => {
      if (e.__preventObserver__) return;
      if (A.length === 1) {
        n("observerUpdate", A[0]);
        return;
      }
      const g = function() {
        n("observerUpdate", A[0]);
      };
      o.requestAnimationFrame ? o.requestAnimationFrame(g) : o.setTimeout(g, 0);
    });
    y.observe(c, {
      attributes: typeof u.attributes > "u" ? !0 : u.attributes,
      childList: e.isElement || (typeof u.childList > "u" ? !0 : u).childList,
      characterData: typeof u.characterData > "u" ? !0 : u.characterData
    }), i.push(y);
  }, l = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const c = Ea(e.hostEl);
        for (let u = 0; u < c.length; u += 1)
          a(c[u]);
      }
      a(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), a(e.wrapperEl, {
        attributes: !1
      });
    }
  }, s = () => {
    i.forEach((c) => {
      c.disconnect();
    }), i.splice(0, i.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), r("init", l), r("destroy", s);
}
var gl = {
  on(e, t, r) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
    const i = r ? "unshift" : "push";
    return e.split(" ").forEach((o) => {
      n.eventsListeners[o] || (n.eventsListeners[o] = []), n.eventsListeners[o][i](t);
    }), n;
  },
  once(e, t, r) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
    function i(...o) {
      n.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(n, o);
    }
    return i.__emitterProxy = t, n.on(e, i, r);
  },
  onAny(e, t) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
    const n = t ? "unshift" : "push";
    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const r = t.eventsAnyListeners.indexOf(e);
    return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
  },
  off(e, t) {
    const r = this;
    return !r.eventsListeners || r.destroyed || !r.eventsListeners || e.split(" ").forEach((n) => {
      typeof t > "u" ? r.eventsListeners[n] = [] : r.eventsListeners[n] && r.eventsListeners[n].forEach((i, o) => {
        (i === t || i.__emitterProxy && i.__emitterProxy === t) && r.eventsListeners[n].splice(o, 1);
      });
    }), r;
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let r, n, i;
    return typeof e[0] == "string" || Array.isArray(e[0]) ? (r = e[0], n = e.slice(1, e.length), i = t) : (r = e[0].events, n = e[0].data, i = e[0].context || t), n.unshift(i), (Array.isArray(r) ? r : r.split(" ")).forEach((a) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((l) => {
        l.apply(i, [a, ...n]);
      }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach((l) => {
        l.apply(i, n);
      });
    }), t;
  }
};
function hl() {
  const e = this;
  let t, r;
  const n = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = n.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? r = e.params.height : r = n.clientHeight, !(t === 0 && e.isHorizontal() || r === 0 && e.isVertical()) && (t = t - parseInt(wt(n, "padding-left") || 0, 10) - parseInt(wt(n, "padding-right") || 0, 10), r = r - parseInt(wt(n, "padding-top") || 0, 10) - parseInt(wt(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
    width: t,
    height: r,
    size: e.isHorizontal() ? t : r
  }));
}
function yl() {
  const e = this;
  function t(P, M) {
    return parseFloat(P.getPropertyValue(e.getDirectionLabel(M)) || 0);
  }
  const r = e.params, {
    wrapperEl: n,
    slidesEl: i,
    rtlTranslate: o,
    wrongRTL: a
  } = e, l = e.virtual && r.virtual.enabled, s = l ? e.virtual.slides.length : e.slides.length, c = st(i, `.${e.params.slideClass}, swiper-slide`), u = l ? e.virtual.slides.length : c.length;
  let d = [];
  const y = [], A = [];
  let g = r.slidesOffsetBefore;
  typeof g == "function" && (g = r.slidesOffsetBefore.call(e));
  let f = r.slidesOffsetAfter;
  typeof f == "function" && (f = r.slidesOffsetAfter.call(e));
  const v = e.snapGrid.length, m = e.slidesGrid.length, h = e.size - g - f;
  let b = r.spaceBetween, x = -g, S = 0, w = 0;
  if (typeof h > "u")
    return;
  typeof b == "string" && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * h : typeof b == "string" && (b = parseFloat(b)), e.virtualSize = -b - g - f, c.forEach((P) => {
    o ? P.style.marginLeft = "" : P.style.marginRight = "", P.style.marginBottom = "", P.style.marginTop = "";
  }), r.centeredSlides && r.cssMode && (Kt(n, "--swiper-centered-offset-before", ""), Kt(n, "--swiper-centered-offset-after", "")), r.cssMode && (Kt(n, "--swiper-slides-offset-before", `${g}px`), Kt(n, "--swiper-slides-offset-after", `${f}px`));
  const T = r.grid && r.grid.rows > 1 && e.grid;
  T ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let I;
  const V = r.slidesPerView === "auto" && r.breakpoints && Object.keys(r.breakpoints).filter((P) => typeof r.breakpoints[P].slidesPerView < "u").length > 0;
  for (let P = 0; P < u; P += 1) {
    I = 0;
    const M = c[P];
    if (!(M && (T && e.grid.updateSlide(P, M, c), wt(M, "display") === "none"))) {
      if (l && r.slidesPerView === "auto")
        r.virtual.slidesPerViewAutoSlideSize && (I = r.virtual.slidesPerViewAutoSlideSize), I && M && (r.roundLengths && (I = Math.floor(I)), M.style[e.getDirectionLabel("width")] = `${I}px`);
      else if (r.slidesPerView === "auto") {
        V && (M.style[e.getDirectionLabel("width")] = "");
        const p = getComputedStyle(M), R = M.style.transform, k = M.style.webkitTransform;
        if (R && (M.style.transform = "none"), k && (M.style.webkitTransform = "none"), r.roundLengths)
          I = e.isHorizontal() ? hi(M, "width") : hi(M, "height");
        else {
          const j = t(p, "width"), G = t(p, "padding-left"), D = t(p, "padding-right"), W = t(p, "margin-left"), J = t(p, "margin-right"), O = p.getPropertyValue("box-sizing");
          if (O && O === "border-box")
            I = j + W + J;
          else {
            const {
              clientWidth: H,
              offsetWidth: z
            } = M;
            I = j + G + D + W + J + (z - H);
          }
        }
        R && (M.style.transform = R), k && (M.style.webkitTransform = k), r.roundLengths && (I = Math.floor(I));
      } else
        I = (h - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (I = Math.floor(I)), M && (M.style[e.getDirectionLabel("width")] = `${I}px`);
      M && (M.swiperSlideSize = I), A.push(I), r.centeredSlides ? (x = x + I / 2 + S / 2 + b, S === 0 && P !== 0 && (x = x - h / 2 - b), P === 0 && (x = x - h / 2 - b), Math.abs(x) < 1 / 1e3 && (x = 0), r.roundLengths && (x = Math.floor(x)), w % r.slidesPerGroup === 0 && d.push(x), y.push(x)) : (r.roundLengths && (x = Math.floor(x)), (w - Math.min(e.params.slidesPerGroupSkip, w)) % e.params.slidesPerGroup === 0 && d.push(x), y.push(x), x = x + I + b), e.virtualSize += I + b, S = I, w += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, h) + f, o && a && (r.effect === "slide" || r.effect === "coverflow") && (n.style.width = `${e.virtualSize + b}px`), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`), T && e.grid.updateWrapperSize(I, d), !r.centeredSlides) {
    const P = r.slidesPerView !== "auto" && r.slidesPerView % 1 !== 0, M = r.snapToSlideEdge && !r.loop && (r.slidesPerView === "auto" || P);
    let p = d.length;
    if (M) {
      let k;
      if (r.slidesPerView === "auto") {
        k = 1;
        let j = 0;
        for (let G = A.length - 1; G >= 0 && (j += A[G] + (G < A.length - 1 ? b : 0), j <= h); G -= 1)
          k = A.length - G;
      } else
        k = Math.floor(r.slidesPerView);
      p = Math.max(u - k, 0);
    }
    const R = [];
    for (let k = 0; k < d.length; k += 1) {
      let j = d[k];
      r.roundLengths && (j = Math.floor(j)), M ? k <= p && R.push(j) : d[k] <= e.virtualSize - h && R.push(j);
    }
    d = R, Math.floor(e.virtualSize - h) - Math.floor(d[d.length - 1]) > 1 && (M || d.push(e.virtualSize - h));
  }
  if (l && r.loop) {
    const P = A[0] + b;
    if (r.slidesPerGroup > 1) {
      const M = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup), p = P * r.slidesPerGroup;
      for (let R = 0; R < M; R += 1)
        d.push(d[d.length - 1] + p);
    }
    for (let M = 0; M < e.virtual.slidesBefore + e.virtual.slidesAfter; M += 1)
      r.slidesPerGroup === 1 && d.push(d[d.length - 1] + P), y.push(y[y.length - 1] + P), e.virtualSize += P;
  }
  if (d.length === 0 && (d = [0]), b !== 0) {
    const P = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((M, p) => !r.cssMode || r.loop ? !0 : p !== c.length - 1).forEach((M) => {
      M.style[P] = `${b}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let P = 0;
    A.forEach((p) => {
      P += p + (b || 0);
    }), P -= b;
    const M = P > h ? P - h : 0;
    d = d.map((p) => p <= 0 ? -g : p > M ? M + f : p);
  }
  if (r.centerInsufficientSlides) {
    let P = 0;
    A.forEach((p) => {
      P += p + (b || 0);
    }), P -= b;
    const M = (g || 0) + (f || 0);
    if (P + M < h) {
      const p = (h - P - M) / 2;
      d.forEach((R, k) => {
        d[k] = R - p;
      }), y.forEach((R, k) => {
        y[k] = R + p;
      });
    }
  }
  if (Object.assign(e, {
    slides: c,
    snapGrid: d,
    slidesGrid: y,
    slidesSizesGrid: A
  }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
    Kt(n, "--swiper-centered-offset-before", `${-d[0]}px`), Kt(n, "--swiper-centered-offset-after", `${e.size / 2 - A[A.length - 1] / 2}px`);
    const P = -e.snapGrid[0], M = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((p) => p + P), e.slidesGrid = e.slidesGrid.map((p) => p + M);
  }
  if (u !== s && e.emit("slidesLengthChange"), d.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), y.length !== m && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !l && !r.cssMode && (r.effect === "slide" || r.effect === "fade")) {
    const P = `${r.containerModifierClass}backface-hidden`, M = e.el.classList.contains(P);
    u <= r.maxBackfaceHiddenSlides ? M || e.el.classList.add(P) : M && e.el.classList.remove(P);
  }
}
function vl(e) {
  const t = this, r = [], n = t.virtual && t.params.virtual.enabled;
  let i = 0, o;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const a = (l) => n ? t.slides[t.getSlideIndexByData(l)] : t.slides[l];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        r.push(l);
      });
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const l = t.activeIndex + o;
        if (l > t.slides.length && !n) break;
        r.push(a(l));
      }
  else
    r.push(a(t.activeIndex));
  for (o = 0; o < r.length; o += 1)
    if (typeof r[o] < "u") {
      const l = r[o].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function bl() {
  const e = this, t = e.slides, r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment();
}
const fo = (e, t, r) => {
  t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r);
};
function Cl(e = this && this.translate || 0) {
  const t = this, r = t.params, {
    slides: n,
    rtlTranslate: i,
    snapGrid: o
  } = t;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let a = -e;
  i && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let l = r.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : typeof l == "string" && (l = parseFloat(l));
  for (let s = 0; s < n.length; s += 1) {
    const c = n[s];
    let u = c.swiperSlideOffset;
    r.cssMode && r.centeredSlides && (u -= n[0].swiperSlideOffset);
    const d = (a + (r.centeredSlides ? t.minTranslate() : 0) - u) / (c.swiperSlideSize + l), y = (a - o[0] + (r.centeredSlides ? t.minTranslate() : 0) - u) / (c.swiperSlideSize + l), A = -(a - u), g = A + t.slidesSizesGrid[s], f = A >= 0 && A <= t.size - t.slidesSizesGrid[s], v = A >= 0 && A < t.size - 1 || g > 1 && g <= t.size || A <= 0 && g >= t.size;
    v && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(s)), fo(c, v, r.slideVisibleClass), fo(c, f, r.slideFullyVisibleClass), c.progress = i ? -d : d, c.originalProgress = i ? -y : y;
  }
}
function Sl(e) {
  const t = this;
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * u || 0;
  }
  const r = t.params, n = t.maxTranslate() - t.minTranslate();
  let {
    progress: i,
    isBeginning: o,
    isEnd: a,
    progressLoop: l
  } = t;
  const s = o, c = a;
  if (n === 0)
    i = 0, o = !0, a = !0;
  else {
    i = (e - t.minTranslate()) / n;
    const u = Math.abs(e - t.minTranslate()) < 1, d = Math.abs(e - t.maxTranslate()) < 1;
    o = u || i <= 0, a = d || i >= 1, u && (i = 0), d && (i = 1);
  }
  if (r.loop) {
    const u = t.getSlideIndexByData(0), d = t.getSlideIndexByData(t.slides.length - 1), y = t.slidesGrid[u], A = t.slidesGrid[d], g = t.slidesGrid[t.slidesGrid.length - 1], f = Math.abs(e);
    f >= y ? l = (f - y) / g : l = (f + g - A) / g, l > 1 && (l -= 1);
  }
  Object.assign(t, {
    progress: i,
    progressLoop: l,
    isBeginning: o,
    isEnd: a
  }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), o && !s && t.emit("reachBeginning toEdge"), a && !c && t.emit("reachEnd toEdge"), (s && !o || c && !a) && t.emit("fromEdge"), t.emit("progress", i);
}
const ti = (e, t, r) => {
  t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r);
};
function xl() {
  const e = this, {
    slides: t,
    params: r,
    slidesEl: n,
    activeIndex: i
  } = e, o = e.virtual && r.virtual.enabled, a = e.grid && r.grid && r.grid.rows > 1, l = (d) => st(n, `.${r.slideClass}${d}, swiper-slide${d}`)[0];
  let s, c, u;
  if (o)
    if (r.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d), d >= e.virtual.slides.length && (d -= e.virtual.slides.length), s = l(`[data-swiper-slide-index="${d}"]`);
    } else
      s = l(`[data-swiper-slide-index="${i}"]`);
  else
    a ? (s = t.find((d) => d.column === i), u = t.find((d) => d.column === i + 1), c = t.find((d) => d.column === i - 1)) : s = t[i];
  s && (a || (u = ul(s, `.${r.slideClass}, swiper-slide`)[0], r.loop && !u && (u = t[0]), c = cl(s, `.${r.slideClass}, swiper-slide`)[0], r.loop && !c === 0 && (c = t[t.length - 1]))), t.forEach((d) => {
    ti(d, d === s, r.slideActiveClass), ti(d, d === u, r.slideNextClass), ti(d, d === c, r.slidePrevClass);
  }), e.emitSlidesClasses();
}
const ln = (e, t) => {
  if (!e || e.destroyed || !e.params) return;
  const r = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, n = t.closest(r());
  if (n) {
    let i = n.querySelector(`.${e.params.lazyPreloaderClass}`);
    !i && e.isElement && (n.shadowRoot ? i = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      n.shadowRoot && (i = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), i && !i.lazyPreloaderManaged && i.remove());
    })), i && !i.lazyPreloaderManaged && i.remove();
  }
}, ri = (e, t) => {
  if (!e.slides[t]) return;
  const r = e.slides[t].querySelector('[loading="lazy"]');
  r && r.removeAttribute("loading");
}, yi = (e) => {
  if (!e || e.destroyed || !e.params) return;
  let t = e.params.lazyPreloadPrevNext;
  const r = e.slides.length;
  if (!r || !t || t < 0) return;
  t = Math.min(t, r);
  const n = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), i = e.activeIndex;
  if (e.params.grid && e.params.grid.rows > 1) {
    const a = i, l = [a - t];
    l.push(...Array.from({
      length: t
    }).map((s, c) => a + n + c)), e.slides.forEach((s, c) => {
      l.includes(s.column) && ri(e, c);
    });
    return;
  }
  const o = i + n - 1;
  if (e.params.rewind || e.params.loop)
    for (let a = i - t; a <= o + t; a += 1) {
      const l = (a % r + r) % r;
      (l < i || l > o) && ri(e, l);
    }
  else
    for (let a = Math.max(i - t, 0); a <= Math.min(o + t, r - 1); a += 1)
      a !== i && (a > o || a < i) && ri(e, a);
};
function El(e) {
  const {
    slidesGrid: t,
    params: r
  } = e, n = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let o = 0; o < t.length; o += 1)
    typeof t[o + 1] < "u" ? n >= t[o] && n < t[o + 1] - (t[o + 1] - t[o]) / 2 ? i = o : n >= t[o] && n < t[o + 1] && (i = o + 1) : n >= t[o] && (i = o);
  return r.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Il(e) {
  const t = this, r = t.rtlTranslate ? t.translate : -t.translate, {
    snapGrid: n,
    params: i,
    activeIndex: o,
    realIndex: a,
    snapIndex: l
  } = t;
  let s = e, c;
  const u = (A) => {
    let g = A - t.virtual.slidesBefore;
    return g < 0 && (g = t.virtual.slides.length + g), g >= t.virtual.slides.length && (g -= t.virtual.slides.length), g;
  };
  if (typeof s > "u" && (s = El(t)), n.indexOf(r) >= 0)
    c = n.indexOf(r);
  else {
    const A = Math.min(i.slidesPerGroupSkip, s);
    c = A + Math.floor((s - A) / i.slidesPerGroup);
  }
  if (c >= n.length && (c = n.length - 1), s === o && !t.params.loop) {
    c !== l && (t.snapIndex = c, t.emit("snapIndexChange"));
    return;
  }
  if (s === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(s);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let y;
  if (t.virtual && i.virtual.enabled)
    i.loop ? y = u(s) : y = s;
  else if (d) {
    const A = t.slides.find((f) => f.column === s);
    let g = parseInt(A.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(A), 0)), y = Math.floor(g / i.grid.rows);
  } else if (t.slides[s]) {
    const A = t.slides[s].getAttribute("data-swiper-slide-index");
    A ? y = parseInt(A, 10) : y = s;
  } else
    y = s;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: c,
    previousRealIndex: a,
    realIndex: y,
    previousIndex: o,
    activeIndex: s
  }), t.initialized && yi(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== y && t.emit("realIndexChange"), t.emit("slideChange"));
}
function wl(e, t) {
  const r = this, n = r.params;
  let i = e.closest(`.${n.slideClass}, swiper-slide`);
  !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
    !i && l.matches && l.matches(`.${n.slideClass}, swiper-slide`) && (i = l);
  });
  let o = !1, a;
  if (i) {
    for (let l = 0; l < r.slides.length; l += 1)
      if (r.slides[l] === i) {
        o = !0, a = l;
        break;
      }
  }
  if (i && o)
    r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = a;
  else {
    r.clickedSlide = void 0, r.clickedIndex = void 0;
    return;
  }
  n.slideToClickedSlide && r.clickedIndex !== void 0 && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide();
}
var Tl = {
  updateSize: hl,
  updateSlides: yl,
  updateAutoHeight: vl,
  updateSlidesOffset: bl,
  updateSlidesProgress: Cl,
  updateProgress: Sl,
  updateSlidesClasses: xl,
  updateActiveIndex: Il,
  updateClickedSlide: wl
};
function Rl(e = this.isHorizontal() ? "x" : "y") {
  const t = this, {
    params: r,
    rtlTranslate: n,
    translate: i,
    wrapperEl: o
  } = t;
  if (r.virtualTranslate)
    return n ? -i : i;
  if (r.cssMode)
    return i;
  let a = ol(o, e);
  return a += t.cssOverflowAdjustment(), n && (a = -a), a || 0;
}
function kl(e, t) {
  const r = this, {
    rtlTranslate: n,
    params: i,
    wrapperEl: o,
    progress: a
  } = r;
  let l = 0, s = 0;
  const c = 0;
  r.isHorizontal() ? l = n ? -e : e : s = e, i.roundLengths && (l = Math.floor(l), s = Math.floor(s)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : s, i.cssMode ? o[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -s : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : s -= r.cssOverflowAdjustment(), o.style.transform = `translate3d(${l}px, ${s}px, ${c}px)`);
  let u;
  const d = r.maxTranslate() - r.minTranslate();
  d === 0 ? u = 0 : u = (e - r.minTranslate()) / d, u !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t);
}
function Ml() {
  return -this.snapGrid[0];
}
function Ol() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Pl(e = 0, t = this.params.speed, r = !0, n = !0, i) {
  const o = this, {
    params: a,
    wrapperEl: l
  } = o;
  if (o.animating && a.preventInteractionOnTransition)
    return !1;
  const s = o.minTranslate(), c = o.maxTranslate();
  let u;
  if (n && e > s ? u = s : n && e < c ? u = c : u = e, o.updateProgress(u), a.cssMode) {
    const d = o.isHorizontal();
    if (t === 0)
      l[d ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!o.support.smoothScroll)
        return xa({
          swiper: o,
          targetPosition: -u,
          side: d ? "left" : "top"
        }), !0;
      l.scrollTo({
        [d ? "left" : "top"]: -u,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return t === 0 ? (o.setTransition(0), o.setTranslate(u), r && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(u), r && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(y) {
    !o || o.destroyed || y.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, o.animating = !1, r && o.emit("transitionEnd"));
  }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0;
}
var Ll = {
  getTranslate: Rl,
  setTranslate: kl,
  minTranslate: Ml,
  maxTranslate: Ol,
  translateTo: Pl
};
function jl(e, t) {
  const r = this;
  r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), r.emit("setTransition", e, t);
}
function Ra({
  swiper: e,
  runCallbacks: t,
  direction: r,
  step: n
}) {
  const {
    activeIndex: i,
    previousIndex: o
  } = e;
  let a = r;
  a || (i > o ? a = "next" : i < o ? a = "prev" : a = "reset"), e.emit(`transition${n}`), t && a === "reset" ? e.emit(`slideResetTransition${n}`) : t && i !== o && (e.emit(`slideChangeTransition${n}`), a === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`));
}
function Wl(e = !0, t) {
  const r = this, {
    params: n
  } = r;
  n.cssMode || (n.autoHeight && r.updateAutoHeight(), Ra({
    swiper: r,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }));
}
function Vl(e = !0, t) {
  const r = this, {
    params: n
  } = r;
  r.animating = !1, !n.cssMode && (r.setTransition(0), Ra({
    swiper: r,
    runCallbacks: e,
    direction: t,
    step: "End"
  }));
}
var Dl = {
  setTransition: jl,
  transitionStart: Wl,
  transitionEnd: Vl
};
function Nl(e = 0, t, r = !0, n, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const o = this;
  let a = e;
  a < 0 && (a = 0);
  const {
    params: l,
    snapGrid: s,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: y,
    wrapperEl: A,
    enabled: g
  } = o;
  if (!g && !n && !i || o.destroyed || o.animating && l.preventInteractionOnTransition)
    return !1;
  typeof t > "u" && (t = o.params.speed);
  const f = Math.min(o.params.slidesPerGroupSkip, a);
  let v = f + Math.floor((a - f) / o.params.slidesPerGroup);
  v >= s.length && (v = s.length - 1);
  const m = -s[v];
  if (l.normalizeSlideIndex)
    for (let T = 0; T < c.length; T += 1) {
      const I = -Math.floor(m * 100), V = Math.floor(c[T] * 100), P = Math.floor(c[T + 1] * 100);
      typeof c[T + 1] < "u" ? I >= V && I < P - (P - V) / 2 ? a = T : I >= V && I < P && (a = T + 1) : I >= V && (a = T);
    }
  if (o.initialized && a !== d && (!o.allowSlideNext && (y ? m > o.translate && m > o.minTranslate() : m < o.translate && m < o.minTranslate()) || !o.allowSlidePrev && m > o.translate && m > o.maxTranslate() && (d || 0) !== a))
    return !1;
  a !== (u || 0) && r && o.emit("beforeSlideChangeStart"), o.updateProgress(m);
  let h;
  a > d ? h = "next" : a < d ? h = "prev" : h = "reset";
  const b = o.virtual && o.params.virtual.enabled;
  if (!(b && i) && (y && -m === o.translate || !y && m === o.translate))
    return o.updateActiveIndex(a), l.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), l.effect !== "slide" && o.setTranslate(m), h !== "reset" && (o.transitionStart(r, h), o.transitionEnd(r, h)), !1;
  if (l.cssMode) {
    const T = o.isHorizontal(), I = y ? m : -m;
    if (t === 0)
      b && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), b && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        A[T ? "scrollLeft" : "scrollTop"] = I;
      })) : A[T ? "scrollLeft" : "scrollTop"] = I, b && requestAnimationFrame(() => {
        o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1;
      });
    else {
      if (!o.support.smoothScroll)
        return xa({
          swiper: o,
          targetPosition: I,
          side: T ? "left" : "top"
        }), !0;
      A.scrollTo({
        [T ? "left" : "top"]: I,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const w = Ta().isSafari;
  return b && !i && w && o.isElement && o.virtual.update(!1, !1, a), o.setTransition(t), o.setTranslate(m), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, n), o.transitionStart(r, h), t === 0 ? o.transitionEnd(r, h) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(I) {
    !o || o.destroyed || I.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(r, h));
  }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0;
}
function Fl(e = 0, t, r = !0, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const o = i.grid && i.params.grid && i.params.grid.rows > 1;
  let a = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled)
      a = a + i.virtual.slidesBefore;
    else {
      let l;
      if (o) {
        const f = a * i.params.grid.rows;
        l = i.slides.find((v) => v.getAttribute("data-swiper-slide-index") * 1 === f).column;
      } else
        l = i.getSlideIndexByData(a);
      const s = o ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length, {
        centeredSlides: c,
        slidesOffsetBefore: u,
        slidesOffsetAfter: d
      } = i.params, y = c || !!u || !!d;
      let A = i.params.slidesPerView;
      A === "auto" ? A = i.slidesPerViewDynamic() : (A = Math.ceil(parseFloat(i.params.slidesPerView, 10)), y && A % 2 === 0 && (A = A + 1));
      let g = s - l < A;
      if (y && (g = g || l < Math.ceil(A / 2)), n && y && i.params.slidesPerView !== "auto" && !o && (g = !1), g) {
        const f = y ? l < i.activeIndex ? "prev" : "next" : l - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? l + 1 : l - s + 1,
          slideRealIndex: f === "next" ? i.realIndex : void 0
        });
      }
      if (o) {
        const f = a * i.params.grid.rows;
        a = i.slides.find((v) => v.getAttribute("data-swiper-slide-index") * 1 === f).column;
      } else
        a = i.getSlideIndexByData(a);
    }
  return requestAnimationFrame(() => {
    i.slideTo(a, t, r, n);
  }), i;
}
function Gl(e, t = !0, r) {
  const n = this, {
    enabled: i,
    params: o,
    animating: a
  } = n;
  if (!i || n.destroyed) return n;
  typeof e > "u" && (e = n.params.speed);
  let l = o.slidesPerGroup;
  o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (l = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const s = n.activeIndex < o.slidesPerGroupSkip ? 1 : l, c = n.virtual && o.virtual.enabled;
  if (o.loop) {
    if (a && !c && o.loopPreventsSliding) return !1;
    if (n.loopFix({
      direction: "next"
    }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && o.cssMode)
      return requestAnimationFrame(() => {
        n.slideTo(n.activeIndex + s, e, t, r);
      }), !0;
  }
  return o.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + s, e, t, r);
}
function Bl(e, t = !0, r) {
  const n = this, {
    params: i,
    snapGrid: o,
    slidesGrid: a,
    rtlTranslate: l,
    enabled: s,
    animating: c
  } = n;
  if (!s || n.destroyed) return n;
  typeof e > "u" && (e = n.params.speed);
  const u = n.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !u && i.loopPreventsSliding) return !1;
    n.loopFix({
      direction: "prev"
    }), n._clientLeft = n.wrapperEl.clientLeft;
  }
  const d = l ? n.translate : -n.translate;
  function y(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const A = y(d), g = o.map((h) => y(h)), f = i.freeMode && i.freeMode.enabled;
  let v = o[g.indexOf(A) - 1];
  if (typeof v > "u" && (i.cssMode || f)) {
    let h;
    o.forEach((b, x) => {
      A >= b && (h = x);
    }), typeof h < "u" && (v = f ? o[h] : o[h > 0 ? h - 1 : h]);
  }
  let m = 0;
  if (typeof v < "u" && (m = a.indexOf(v), m < 0 && (m = n.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (m = m - n.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && n.isBeginning) {
    const h = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
    return n.slideTo(h, e, t, r);
  } else if (i.loop && n.activeIndex === 0 && i.cssMode)
    return requestAnimationFrame(() => {
      n.slideTo(m, e, t, r);
    }), !0;
  return n.slideTo(m, e, t, r);
}
function Hl(e, t = !0, r) {
  const n = this;
  if (!n.destroyed)
    return typeof e > "u" && (e = n.params.speed), n.slideTo(n.activeIndex, e, t, r);
}
function Jl(e, t = !0, r, n = 0.5) {
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let o = i.activeIndex;
  const a = Math.min(i.params.slidesPerGroupSkip, o), l = a + Math.floor((o - a) / i.params.slidesPerGroup), s = i.rtlTranslate ? i.translate : -i.translate;
  if (s >= i.snapGrid[l]) {
    const c = i.snapGrid[l], u = i.snapGrid[l + 1];
    s - c > (u - c) * n && (o += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[l - 1], u = i.snapGrid[l];
    s - c <= (u - c) * n && (o -= i.params.slidesPerGroup);
  }
  return o = Math.max(o, 0), o = Math.min(o, i.slidesGrid.length - 1), i.slideTo(o, e, t, r);
}
function Zl() {
  const e = this;
  if (e.destroyed) return;
  const {
    params: t,
    slidesEl: r
  } = e, n = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.getSlideIndexWhenGrid(e.clickedIndex), o;
  const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`, l = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating) return;
    o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(o) : i > (l ? (e.slides.length - n) / 2 - (e.params.grid.rows - 1) : e.slides.length - n) ? (e.loopFix(), i = e.getSlideIndex(st(r, `${a}[data-swiper-slide-index="${o}"]`)[0]), Sa(() => {
      e.slideTo(i);
    })) : e.slideTo(i);
  } else
    e.slideTo(i);
}
var ql = {
  slideTo: Nl,
  slideToLoop: Fl,
  slideNext: Gl,
  slidePrev: Bl,
  slideReset: Hl,
  slideToClosest: Jl,
  slideToClickedSlide: Zl
};
function zl(e, t) {
  const r = this, {
    params: n,
    slidesEl: i
  } = r;
  if (!n.loop || r.virtual && r.params.virtual.enabled) return;
  const o = () => {
    st(i, `.${n.slideClass}, swiper-slide`).forEach((g, f) => {
      g.setAttribute("data-swiper-slide-index", f);
    });
  }, a = () => {
    const A = st(i, `.${n.slideBlankClass}`);
    A.forEach((g) => {
      g.remove();
    }), A.length > 0 && (r.recalcSlides(), r.updateSlides());
  }, l = r.grid && n.grid && n.grid.rows > 1;
  n.loopAddBlankSlides && (n.slidesPerGroup > 1 || l) && a();
  const s = n.slidesPerGroup * (l ? n.grid.rows : 1), c = r.slides.length % s !== 0, u = l && r.slides.length % n.grid.rows !== 0, d = (A) => {
    for (let g = 0; g < A; g += 1) {
      const f = r.isElement ? gn("swiper-slide", [n.slideBlankClass]) : gn("div", [n.slideClass, n.slideBlankClass]);
      r.slidesEl.append(f);
    }
  };
  if (c) {
    if (n.loopAddBlankSlides) {
      const A = s - r.slides.length % s;
      d(A), r.recalcSlides(), r.updateSlides();
    } else
      mn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    o();
  } else if (u) {
    if (n.loopAddBlankSlides) {
      const A = n.grid.rows - r.slides.length % n.grid.rows;
      d(A), r.recalcSlides(), r.updateSlides();
    } else
      mn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    o();
  } else
    o();
  const y = n.centeredSlides || !!n.slidesOffsetBefore || !!n.slidesOffsetAfter;
  r.loopFix({
    slideRealIndex: e,
    direction: y ? void 0 : "next",
    initial: t
  });
}
function Yl({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: r,
  setTranslate: n,
  activeSlideIndex: i,
  initial: o,
  byController: a,
  byMousewheel: l
} = {}) {
  const s = this;
  if (!s.params.loop) return;
  s.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: u,
    allowSlideNext: d,
    slidesEl: y,
    params: A
  } = s, {
    centeredSlides: g,
    slidesOffsetBefore: f,
    slidesOffsetAfter: v,
    initialSlide: m
  } = A, h = g || !!f || !!v;
  if (s.allowSlidePrev = !0, s.allowSlideNext = !0, s.virtual && A.virtual.enabled) {
    t && (!h && s.snapIndex === 0 ? s.slideTo(s.virtual.slides.length, 0, !1, !0) : h && s.snapIndex < A.slidesPerView ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0) : s.snapIndex === s.snapGrid.length - 1 && s.slideTo(s.virtual.slidesBefore, 0, !1, !0)), s.allowSlidePrev = u, s.allowSlideNext = d, s.emit("loopFix");
    return;
  }
  let b = A.slidesPerView;
  b === "auto" ? b = s.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(A.slidesPerView, 10)), h && b % 2 === 0 && (b = b + 1));
  const x = A.slidesPerGroupAuto ? b : A.slidesPerGroup;
  let S = h ? Math.max(x, Math.ceil(b / 2)) : x;
  S % x !== 0 && (S += x - S % x), S += A.loopAdditionalSlides, s.loopedSlides = S;
  const w = s.grid && A.grid && A.grid.rows > 1;
  c.length < b + S || s.params.effect === "cards" && c.length < b + S * 2 ? mn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && A.grid.fill === "row" && mn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const T = [], I = [], V = w ? Math.ceil(c.length / A.grid.rows) : c.length, P = o && V - m < b && !h;
  let M = P ? m : s.activeIndex;
  typeof i > "u" ? i = s.getSlideIndex(c.find((W) => W.classList.contains(A.slideActiveClass))) : M = i;
  const p = r === "next" || !r, R = r === "prev" || !r;
  let k = 0, j = 0;
  const D = (w ? c[i].column : i) + (h && typeof n > "u" ? -b / 2 + 0.5 : 0);
  if (D < S) {
    k = Math.max(S - D, x);
    for (let W = 0; W < S - D; W += 1) {
      const J = W - Math.floor(W / V) * V;
      if (w) {
        const O = V - J - 1;
        for (let H = c.length - 1; H >= 0; H -= 1)
          c[H].column === O && T.push(H);
      } else
        T.push(V - J - 1);
    }
  } else if (D + b > V - S) {
    j = Math.max(D - (V - S * 2), x), P && (j = Math.max(j, b - V + m + 1));
    for (let W = 0; W < j; W += 1) {
      const J = W - Math.floor(W / V) * V;
      w ? c.forEach((O, H) => {
        O.column === J && I.push(H);
      }) : I.push(J);
    }
  }
  if (s.__preventObserver__ = !0, requestAnimationFrame(() => {
    s.__preventObserver__ = !1;
  }), s.params.effect === "cards" && c.length < b + S * 2 && (I.includes(i) && I.splice(I.indexOf(i), 1), T.includes(i) && T.splice(T.indexOf(i), 1)), R && T.forEach((W) => {
    c[W].swiperLoopMoveDOM = !0, y.prepend(c[W]), c[W].swiperLoopMoveDOM = !1;
  }), p && I.forEach((W) => {
    c[W].swiperLoopMoveDOM = !0, y.append(c[W]), c[W].swiperLoopMoveDOM = !1;
  }), s.recalcSlides(), A.slidesPerView === "auto" ? s.updateSlides() : w && (T.length > 0 && R || I.length > 0 && p) && s.slides.forEach((W, J) => {
    s.grid.updateSlide(J, W, s.slides);
  }), A.watchSlidesProgress && s.updateSlidesOffset(), t) {
    if (T.length > 0 && R) {
      if (typeof e > "u") {
        const W = s.slidesGrid[M], O = s.slidesGrid[M + k] - W;
        l ? s.setTranslate(s.translate - O) : (s.slideTo(M + Math.ceil(k), 0, !1, !0), n && (s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - O, s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - O));
      } else if (n) {
        const W = w ? T.length / A.grid.rows : T.length;
        s.slideTo(s.activeIndex + W, 0, !1, !0), s.touchEventsData.currentTranslate = s.translate;
      }
    } else if (I.length > 0 && p)
      if (typeof e > "u") {
        const W = s.slidesGrid[M], O = s.slidesGrid[M - j] - W;
        l ? s.setTranslate(s.translate - O) : (s.slideTo(M - j, 0, !1, !0), n && (s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - O, s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - O));
      } else {
        const W = w ? I.length / A.grid.rows : I.length;
        s.slideTo(s.activeIndex - W, 0, !1, !0);
      }
  }
  if (s.allowSlidePrev = u, s.allowSlideNext = d, s.controller && s.controller.control && !a) {
    const W = {
      slideRealIndex: e,
      direction: r,
      setTranslate: n,
      activeSlideIndex: i,
      byController: !0
    };
    Array.isArray(s.controller.control) ? s.controller.control.forEach((J) => {
      !J.destroyed && J.params.loop && J.loopFix({
        ...W,
        slideTo: J.params.slidesPerView === A.slidesPerView ? t : !1
      });
    }) : s.controller.control instanceof s.constructor && s.controller.control.params.loop && s.controller.control.loopFix({
      ...W,
      slideTo: s.controller.control.params.slidesPerView === A.slidesPerView ? t : !1
    });
  }
  s.emit("loopFix");
}
function Ul() {
  const e = this, {
    params: t,
    slidesEl: r
  } = e;
  if (!t.loop || !r || e.virtual && e.params.virtual.enabled) return;
  e.recalcSlides();
  const n = [];
  e.slides.forEach((i) => {
    const o = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
    n[o] = i;
  }), e.slides.forEach((i) => {
    i.removeAttribute("data-swiper-slide-index");
  }), n.forEach((i) => {
    r.append(i);
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
var Kl = {
  loopCreate: zl,
  loopFix: Yl,
  loopDestroy: Ul
};
function Xl(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
  const r = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function Ql() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var _l = {
  setGrabCursor: Xl,
  unsetGrabCursor: Ql
};
function $l(e, t = this) {
  function r(n) {
    if (!n || n === lt() || n === Oe()) return null;
    n.assignedSlot && (n = n.assignedSlot);
    const i = n.closest(e);
    return !i && !n.getRootNode ? null : i || r(n.getRootNode().host);
  }
  return r(t);
}
function po(e, t, r) {
  const n = Oe(), {
    params: i
  } = e, o = i.edgeSwipeDetection, a = i.edgeSwipeThreshold;
  return o && (r <= a || r >= n.innerWidth - a) ? o === "prevent" ? (t.preventDefault(), !0) : !1 : !0;
}
function ec(e) {
  const t = this, r = lt();
  let n = e;
  n.originalEvent && (n = n.originalEvent);
  const i = t.touchEventsData;
  if (n.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== n.pointerId)
      return;
    i.pointerId = n.pointerId;
  } else n.type === "touchstart" && n.targetTouches.length === 1 && (i.touchId = n.targetTouches[0].identifier);
  if (n.type === "touchstart") {
    po(t, n, n.targetTouches[0].pageX);
    return;
  }
  const {
    params: o,
    touches: a,
    enabled: l
  } = t;
  if (!l || !o.simulateTouch && n.pointerType === "mouse" || t.animating && o.preventInteractionOnTransition)
    return;
  !t.animating && o.cssMode && o.loop && t.loopFix();
  let s = n.target;
  if (o.touchEventsTarget === "wrapper" && !ll(s, t.wrapperEl) || "which" in n && n.which === 3 || "button" in n && n.button > 0 || i.isTouched && i.isMoved) return;
  const c = !!o.noSwipingClass && o.noSwipingClass !== "", u = n.composedPath ? n.composedPath() : n.path;
  c && n.target && n.target.shadowRoot && u && (s = u[0]);
  const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`, y = !!(n.target && n.target.shadowRoot);
  if (o.noSwiping && (y ? $l(d, s) : s.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !s.closest(o.swipeHandler))
    return;
  a.currentX = n.pageX, a.currentY = n.pageY;
  const A = a.currentX, g = a.currentY;
  if (!po(t, n, A))
    return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), a.startX = A, a.startY = g, i.touchStartTime = An(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (i.allowThresholdMove = !1);
  let f = !0;
  s.matches(i.focusableElements) && (f = !1, s.nodeName === "SELECT" && (i.isTouched = !1)), r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== s && (n.pointerType === "mouse" || n.pointerType !== "mouse" && !s.matches(i.focusableElements)) && r.activeElement.blur();
  const v = f && t.allowTouchMove && o.touchStartPreventDefault;
  (o.touchStartForcePreventDefault || v) && !s.isContentEditable && n.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n);
}
function tc(e) {
  const t = lt(), r = this, n = r.touchEventsData, {
    params: i,
    touches: o,
    rtlTranslate: a,
    enabled: l
  } = r;
  if (!l || !i.simulateTouch && e.pointerType === "mouse") return;
  let s = e;
  if (s.originalEvent && (s = s.originalEvent), s.type === "pointermove" && (n.touchId !== null || s.pointerId !== n.pointerId))
    return;
  let c;
  if (s.type === "touchmove") {
    if (c = [...s.changedTouches].find((S) => S.identifier === n.touchId), !c || c.identifier !== n.touchId) return;
  } else
    c = s;
  if (!n.isTouched) {
    n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", s);
    return;
  }
  const u = c.pageX, d = c.pageY;
  if (s.preventedByNestedSwiper) {
    o.startX = u, o.startY = d;
    return;
  }
  if (!r.allowTouchMove) {
    s.target.matches(n.focusableElements) || (r.allowClick = !1), n.isTouched && (Object.assign(o, {
      startX: u,
      startY: d,
      currentX: u,
      currentY: d
    }), n.touchStartTime = An());
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop)
    if (r.isVertical()) {
      if (d < o.startY && r.translate <= r.maxTranslate() || d > o.startY && r.translate >= r.minTranslate()) {
        n.isTouched = !1, n.isMoved = !1;
        return;
      }
    } else {
      if (a && (u > o.startX && -r.translate <= r.maxTranslate() || u < o.startX && -r.translate >= r.minTranslate()))
        return;
      if (!a && (u < o.startX && r.translate <= r.maxTranslate() || u > o.startX && r.translate >= r.minTranslate()))
        return;
    }
  if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== s.target && s.pointerType !== "mouse" && t.activeElement.blur(), t.activeElement && s.target === t.activeElement && s.target.matches(n.focusableElements)) {
    n.isMoved = !0, r.allowClick = !1;
    return;
  }
  n.allowTouchCallbacks && r.emit("touchMove", s), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = u, o.currentY = d;
  const y = o.currentX - o.startX, A = o.currentY - o.startY;
  if (r.params.threshold && Math.sqrt(y ** 2 + A ** 2) < r.params.threshold) return;
  if (typeof n.isScrolling > "u") {
    let S;
    r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : y * y + A * A >= 25 && (S = Math.atan2(Math.abs(A), Math.abs(y)) * 180 / Math.PI, n.isScrolling = r.isHorizontal() ? S > i.touchAngle : 90 - S > i.touchAngle);
  }
  if (n.isScrolling && r.emit("touchMoveOpposite", s), typeof n.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (n.startMoving = !0), n.isScrolling || s.type === "touchmove" && n.preventTouchMoveFromPointerMove) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving)
    return;
  r.allowClick = !1, !i.cssMode && s.cancelable && s.preventDefault(), i.touchMoveStopPropagation && !i.nested && s.stopPropagation();
  let g = r.isHorizontal() ? y : A, f = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
  i.oneWayMovement && (g = Math.abs(g) * (a ? 1 : -1), f = Math.abs(f) * (a ? 1 : -1)), o.diff = g, g *= i.touchRatio, a && (g = -g, f = -f);
  const v = r.touchesDirection;
  r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = f > 0 ? "prev" : "next";
  const m = r.params.loop && !i.cssMode, h = r.touchesDirection === "next" && r.allowSlideNext || r.touchesDirection === "prev" && r.allowSlidePrev;
  if (!n.isMoved) {
    if (m && h && r.loopFix({
      direction: r.swipeDirection
    }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
      const S = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      r.wrapperEl.dispatchEvent(S);
    }
    n.allowMomentumBounce = !1, i.grabCursor && (r.allowSlideNext === !0 || r.allowSlidePrev === !0) && r.setGrabCursor(!0), r.emit("sliderFirstMove", s);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), i._loopSwapReset !== !1 && n.isMoved && n.allowThresholdMove && v !== r.touchesDirection && m && h && Math.abs(g) >= 1) {
    Object.assign(o, {
      startX: u,
      startY: d,
      currentX: u,
      currentY: d,
      startTranslate: n.currentTranslate
    }), n.loopSwapReset = !0, n.startTranslate = n.currentTranslate;
    return;
  }
  r.emit("sliderMove", s), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
  let b = !0, x = i.resistanceRatio;
  if (i.touchReleaseOnEdges && (x = 0), g > 0 ? (m && h && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - (i.slidesPerView !== "auto" && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), n.currentTranslate > r.minTranslate() && (b = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + g) ** x))) : g < 0 && (m && h && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + (i.slidesPerView !== "auto" && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: r.slides.length - (i.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
  }), n.currentTranslate < r.maxTranslate() && (b = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - g) ** x))), b && (s.preventedByNestedSwiper = !0), !r.allowSlideNext && r.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && r.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && !r.allowSlideNext && (n.currentTranslate = n.startTranslate), i.threshold > 0)
    if (Math.abs(g) > i.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && r.freeMode || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate));
}
function rc(e) {
  const t = this, r = t.touchEventsData;
  let n = e;
  n.originalEvent && (n = n.originalEvent);
  let i;
  if (n.type === "touchend" || n.type === "touchcancel") {
    if (i = [...n.changedTouches].find((S) => S.identifier === r.touchId), !i || i.identifier !== r.touchId) return;
  } else {
    if (r.touchId !== null || n.pointerId !== r.pointerId) return;
    i = n;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (t.browser.isSafari || t.browser.isWebView)))
    return;
  r.pointerId = null, r.touchId = null;
  const {
    params: a,
    touches: l,
    rtlTranslate: s,
    slidesGrid: c,
    enabled: u
  } = t;
  if (!u || !a.simulateTouch && n.pointerType === "mouse") return;
  if (r.allowTouchCallbacks && t.emit("touchEnd", n), r.allowTouchCallbacks = !1, !r.isTouched) {
    r.isMoved && a.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
    return;
  }
  a.grabCursor && r.isMoved && r.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const d = An(), y = d - r.touchStartTime;
  if (t.allowClick) {
    const S = n.path || n.composedPath && n.composedPath();
    t.updateClickedSlide(S && S[0] || n.target, S), t.emit("tap click", n), y < 300 && d - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", n);
  }
  if (r.lastClickTime = An(), Sa(() => {
    t.destroyed || (t.allowClick = !0);
  }), !r.isTouched || !r.isMoved || !t.swipeDirection || l.diff === 0 && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
    return;
  }
  r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
  let A;
  if (a.followFinger ? A = s ? t.translate : -t.translate : A = -r.currentTranslate, a.cssMode)
    return;
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({
      currentPos: A
    });
    return;
  }
  const g = A >= -t.maxTranslate() && !t.params.loop;
  let f = 0, v = t.slidesSizesGrid[0];
  for (let S = 0; S < c.length; S += S < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const w = S < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof c[S + w] < "u" ? (g || A >= c[S] && A < c[S + w]) && (f = S, v = c[S + w] - c[S]) : (g || A >= c[S]) && (f = S, v = c[c.length - 1] - c[c.length - 2]);
  }
  let m = null, h = null;
  a.rewind && (t.isBeginning ? h = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
  const b = (A - c[f]) / v, x = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (y > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? m : f + x) : t.slideTo(f)), t.swipeDirection === "prev" && (b > 1 - a.longSwipesRatio ? t.slideTo(f + x) : h !== null && b < 0 && Math.abs(b) > a.longSwipesRatio ? t.slideTo(h) : t.slideTo(f));
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl) ? n.target === t.navigation.nextEl ? t.slideTo(f + x) : t.slideTo(f) : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : f + x), t.swipeDirection === "prev" && t.slideTo(h !== null ? h : f));
  }
}
function Ao() {
  const e = this, {
    params: t,
    el: r
  } = e;
  if (r && r.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const {
    allowSlideNext: n,
    allowSlidePrev: i,
    snapGrid: o
  } = e, a = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const l = a && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !l ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
  }, 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function nc(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function ic() {
  const e = this, {
    wrapperEl: t,
    rtlTranslate: r,
    enabled: n
  } = e;
  if (!n) return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let i;
  const o = e.maxTranslate() - e.minTranslate();
  o === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / o, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function oc(e) {
  const t = this;
  ln(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update();
}
function ac() {
  const e = this;
  e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const ka = (e, t) => {
  const r = lt(), {
    params: n,
    el: i,
    wrapperEl: o,
    device: a
  } = e, l = !!n.nested, s = t === "on" ? "addEventListener" : "removeEventListener", c = t;
  !i || typeof i == "string" || (r[s]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: l
  }), i[s]("touchstart", e.onTouchStart, {
    passive: !1
  }), i[s]("pointerdown", e.onTouchStart, {
    passive: !1
  }), r[s]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: l
  }), r[s]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: l
  }), r[s]("touchend", e.onTouchEnd, {
    passive: !0
  }), r[s]("pointerup", e.onTouchEnd, {
    passive: !0
  }), r[s]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), r[s]("touchcancel", e.onTouchEnd, {
    passive: !0
  }), r[s]("pointerout", e.onTouchEnd, {
    passive: !0
  }), r[s]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), r[s]("contextmenu", e.onTouchEnd, {
    passive: !0
  }), (n.preventClicks || n.preventClicksPropagation) && i[s]("click", e.onClick, !0), n.cssMode && o[s]("scroll", e.onScroll), n.updateOnWindowResize ? e[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ao, !0) : e[c]("observerUpdate", Ao, !0), i[s]("load", e.onLoad, {
    capture: !0
  }));
};
function sc() {
  const e = this, {
    params: t
  } = e;
  e.onTouchStart = ec.bind(e), e.onTouchMove = tc.bind(e), e.onTouchEnd = rc.bind(e), e.onDocumentTouchStart = ac.bind(e), t.cssMode && (e.onScroll = ic.bind(e)), e.onClick = nc.bind(e), e.onLoad = oc.bind(e), ka(e, "on");
}
function lc() {
  ka(this, "off");
}
var cc = {
  attachEvents: sc,
  detachEvents: lc
};
const mo = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function uc() {
  const e = this, {
    realIndex: t,
    initialized: r,
    params: n,
    el: i
  } = e, o = n.breakpoints;
  if (!o || o && Object.keys(o).length === 0) return;
  const a = lt(), l = n.breakpointsBase === "window" || !n.breakpointsBase ? n.breakpointsBase : "container", s = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? e.el : a.querySelector(n.breakpointsBase), c = e.getBreakpoint(o, l, s);
  if (!c || e.currentBreakpoint === c) return;
  const d = (c in o ? o[c] : void 0) || e.originalParams, y = mo(e, n), A = mo(e, d), g = e.params.grabCursor, f = d.grabCursor, v = n.enabled;
  y && !A ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !y && A && (i.classList.add(`${n.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && n.grid.fill === "column") && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), g && !f ? e.unsetGrabCursor() : !g && f && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((w) => {
    if (typeof d[w] > "u") return;
    const T = n[w] && n[w].enabled, I = d[w] && d[w].enabled;
    T && !I && e[w].disable(), !T && I && e[w].enable();
  });
  const m = d.direction && d.direction !== n.direction, h = n.loop && (d.slidesPerView !== n.slidesPerView || m), b = n.loop;
  m && r && e.changeDirection(), Be(e.params, d);
  const x = e.params.enabled, S = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), v && !x ? e.disable() : !v && x && e.enable(), e.currentBreakpoint = c, e.emit("_beforeBreakpoint", d), r && (h ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !b && S ? (e.loopCreate(t), e.updateSlides()) : b && !S && e.loopDestroy()), e.emit("breakpoint", d);
}
function dc(e, t = "window", r) {
  if (!e || t === "container" && !r) return;
  let n = !1;
  const i = Oe(), o = t === "window" ? i.innerHeight : r.clientHeight, a = Object.keys(e).map((l) => {
    if (typeof l == "string" && l.indexOf("@") === 0) {
      const s = parseFloat(l.substr(1));
      return {
        value: o * s,
        point: l
      };
    }
    return {
      value: l,
      point: l
    };
  });
  a.sort((l, s) => parseInt(l.value, 10) - parseInt(s.value, 10));
  for (let l = 0; l < a.length; l += 1) {
    const {
      point: s,
      value: c
    } = a[l];
    t === "window" ? i.matchMedia(`(min-width: ${c}px)`).matches && (n = s) : c <= r.clientWidth && (n = s);
  }
  return n || "max";
}
var fc = {
  setBreakpoint: uc,
  getBreakpoint: dc
};
function pc(e, t) {
  const r = [];
  return e.forEach((n) => {
    typeof n == "object" ? Object.keys(n).forEach((i) => {
      n[i] && r.push(t + i);
    }) : typeof n == "string" && r.push(t + n);
  }), r;
}
function Ac() {
  const e = this, {
    classNames: t,
    params: r,
    rtl: n,
    el: i,
    device: o
  } = e, a = pc(["initialized", r.direction, {
    "free-mode": e.params.freeMode && r.freeMode.enabled
  }, {
    autoheight: r.autoHeight
  }, {
    rtl: n
  }, {
    grid: r.grid && r.grid.rows > 1
  }, {
    "grid-column": r.grid && r.grid.rows > 1 && r.grid.fill === "column"
  }, {
    android: o.android
  }, {
    ios: o.ios
  }, {
    "css-mode": r.cssMode
  }, {
    centered: r.cssMode && r.centeredSlides
  }, {
    "watch-progress": r.watchSlidesProgress
  }], r.containerModifierClass);
  t.push(...a), i.classList.add(...t), e.emitContainerClasses();
}
function mc() {
  const e = this, {
    el: t,
    classNames: r
  } = e;
  !t || typeof t == "string" || (t.classList.remove(...r), e.emitContainerClasses());
}
var gc = {
  addClasses: Ac,
  removeClasses: mc
};
function hc() {
  const e = this, {
    isLocked: t,
    params: r
  } = e, {
    slidesOffsetBefore: n
  } = r;
  if (n) {
    const i = e.slides.length - 1, o = e.slidesGrid[i] + e.slidesSizesGrid[i] + n * 2;
    e.isLocked = e.size > o;
  } else
    e.isLocked = e.snapGrid.length === 1;
  r.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), r.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var yc = {
  checkOverflow: hc
}, vi = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
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
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  snapToSlideEdge: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
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
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function vc(e, t) {
  return function(n = {}) {
    const i = Object.keys(n)[0], o = n[i];
    if (typeof o != "object" || o === null) {
      Be(t, n);
      return;
    }
    if (e[i] === !0 && (e[i] = {
      enabled: !0
    }), i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), !(i in e && "enabled" in o)) {
      Be(t, n);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = {
      enabled: !1
    }), Be(t, n);
  };
}
const ni = {
  eventsEmitter: gl,
  update: Tl,
  translate: Ll,
  transition: Dl,
  slide: ql,
  loop: Kl,
  grabCursor: _l,
  events: cc,
  breakpoints: fc,
  checkOverflow: yc,
  classes: gc
}, ii = {};
let Ni = class yt {
  constructor(...t) {
    let r, n;
    t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? n = t[0] : [r, n] = t, n || (n = {}), n = Be({}, n), r && !n.el && (n.el = r);
    const i = lt();
    if (n.el && typeof n.el == "string" && i.querySelectorAll(n.el).length > 1) {
      const s = [];
      return i.querySelectorAll(n.el).forEach((c) => {
        const u = Be({}, n, {
          el: c
        });
        s.push(new yt(u));
      }), s;
    }
    const o = this;
    o.__swiper__ = !0, o.support = Ia(), o.device = wa({
      userAgent: n.userAgent
    }), o.browser = Ta(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules);
    const a = {};
    o.modules.forEach((s) => {
      s({
        params: n,
        swiper: o,
        extendParams: vc(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o)
      });
    });
    const l = Be({}, vi, a);
    return o.params = Be({}, l, ii, n), o.originalParams = Be({}, o.params), o.passedParams = Be({}, n), o.params && o.params.on && Object.keys(o.params.on).forEach((s) => {
      o.on(s, o.params.on[s]);
    }), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
      enabled: o.params.enabled,
      el: r,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return o.params.direction === "horizontal";
      },
      isVertical() {
        return o.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: o.params.allowSlideNext,
      allowSlidePrev: o.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: o.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: o.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), o.emit("_swiper"), o.params.init && o.init(), o;
  }
  getDirectionLabel(t) {
    return this.isHorizontal() ? t : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[t];
  }
  getSlideIndex(t) {
    const {
      slidesEl: r,
      params: n
    } = this, i = st(r, `.${n.slideClass}, swiper-slide`), o = hn(i[0]);
    return hn(t) - o;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.find((r) => r.getAttribute("data-swiper-slide-index") * 1 === t));
  }
  getSlideIndexWhenGrid(t) {
    return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? t = Math.floor(t / this.params.grid.rows) : this.params.grid.fill === "row" && (t = t % Math.ceil(this.slides.length / this.params.grid.rows))), t;
  }
  recalcSlides() {
    const t = this, {
      slidesEl: r,
      params: n
    } = t;
    t.slides = st(r, `.${n.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, r) {
    const n = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = n.minTranslate(), a = (n.maxTranslate() - i) * t + i;
    n.translateTo(a, typeof r > "u" ? 0 : r), n.updateActiveIndex(), n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const r = t.el.className.split(" ").filter((n) => n.indexOf("swiper") === 0 || n.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", r.join(" "));
  }
  getSlideClasses(t) {
    const r = this;
    return r.destroyed ? "" : t.className.split(" ").filter((n) => n.indexOf("swiper-slide") === 0 || n.indexOf(r.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const r = [];
    t.slides.forEach((n) => {
      const i = t.getSlideClasses(n);
      r.push({
        slideEl: n,
        classNames: i
      }), t.emit("_slideClass", n, i);
    }), t.emit("_slideClasses", r);
  }
  slidesPerViewDynamic(t = "current", r = !1) {
    const n = this, {
      params: i,
      slides: o,
      slidesGrid: a,
      slidesSizesGrid: l,
      size: s,
      activeIndex: c
    } = n;
    let u = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = o[c] ? Math.ceil(o[c].swiperSlideSize) : 0, y;
      for (let A = c + 1; A < o.length; A += 1)
        o[A] && !y && (d += Math.ceil(o[A].swiperSlideSize), u += 1, d > s && (y = !0));
      for (let A = c - 1; A >= 0; A -= 1)
        o[A] && !y && (d += o[A].swiperSlideSize, u += 1, d > s && (y = !0));
    } else if (t === "current")
      for (let d = c + 1; d < o.length; d += 1)
        (r ? a[d] + l[d] - a[c] < s : a[d] - a[c] < s) && (u += 1);
    else
      for (let d = c - 1; d >= 0; d -= 1)
        a[c] - a[d] < s && (u += 1);
    return u;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const {
      snapGrid: r,
      params: n
    } = t;
    n.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
      a.complete && ln(t, a);
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function i() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate, l = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let o;
    if (n.freeMode && n.freeMode.enabled && !n.cssMode)
      i(), n.autoHeight && t.updateAutoHeight();
    else {
      if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && t.isEnd && !n.centeredSlides) {
        const a = t.virtual && n.virtual.enabled ? t.virtual.slides : t.slides;
        o = t.slideTo(a.length - 1, 0, !1, !0);
      } else
        o = t.slideTo(t.activeIndex, 0, !1, !0);
      o || i();
    }
    n.watchOverflow && r !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, r = !0) {
    const n = this, i = n.params.direction;
    return t || (t = i === "horizontal" ? "vertical" : "horizontal"), t === i || t !== "horizontal" && t !== "vertical" || (n.el.classList.remove(`${n.params.containerModifierClass}${i}`), n.el.classList.add(`${n.params.containerModifierClass}${t}`), n.emitContainerClasses(), n.params.direction = t, n.slides.forEach((o) => {
      t === "vertical" ? o.style.width = "" : o.style.height = "";
    }), n.emit("changeDirection"), r && n.update()), n;
  }
  changeLanguageDirection(t) {
    const r = this;
    r.rtl && t === "rtl" || !r.rtl && t === "ltr" || (r.rtl = t === "rtl", r.rtlTranslate = r.params.direction === "horizontal" && r.rtl, r.rtl ? (r.el.classList.add(`${r.params.containerModifierClass}rtl`), r.el.dir = "rtl") : (r.el.classList.remove(`${r.params.containerModifierClass}rtl`), r.el.dir = "ltr"), r.update());
  }
  mount(t) {
    const r = this;
    if (r.mounted) return !0;
    let n = t || r.params.el;
    if (typeof n == "string" && (n = document.querySelector(n)), !n)
      return !1;
    n.swiper = r, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === r.params.swiperElementNodeName.toUpperCase() && (r.isElement = !0);
    const i = () => `.${(r.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(i()) : st(n, i())[0];
    return !a && r.params.createElements && (a = gn("div", r.params.wrapperClass), n.append(a), st(n, `.${r.params.slideClass}`).forEach((l) => {
      a.append(l);
    })), Object.assign(r, {
      el: n,
      wrapperEl: a,
      slidesEl: r.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : a,
      hostEl: r.isElement ? n.parentNode.host : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || wt(n, "direction") === "rtl",
      rtlTranslate: r.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || wt(n, "direction") === "rtl"),
      wrongRTL: wt(a, "display") === "-webkit-box"
    }), !0;
  }
  init(t) {
    const r = this;
    if (r.initialized || r.mount(t) === !1) return r;
    r.emit("beforeInit"), r.params.breakpoints && r.setBreakpoint(), r.addClasses(), r.updateSize(), r.updateSlides(), r.params.watchOverflow && r.checkOverflow(), r.params.grabCursor && r.enabled && r.setGrabCursor(), r.params.loop && r.virtual && r.params.virtual.enabled ? r.slideTo(r.params.initialSlide + r.virtual.slidesBefore, 0, r.params.runCallbacksOnInit, !1, !0) : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit, !1, !0), r.params.loop && r.loopCreate(void 0, !0), r.attachEvents();
    const i = [...r.el.querySelectorAll('[loading="lazy"]')];
    return r.isElement && i.push(...r.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((o) => {
      o.complete ? ln(r, o) : o.addEventListener("load", (a) => {
        ln(r, a.target);
      });
    }), yi(r), r.initialized = !0, yi(r), r.emit("init"), r.emit("afterInit"), r;
  }
  destroy(t = !0, r = !0) {
    const n = this, {
      params: i,
      el: o,
      wrapperEl: a,
      slides: l
    } = n;
    return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), r && (n.removeClasses(), o && typeof o != "string" && o.removeAttribute("style"), a && a.removeAttribute("style"), l && l.length && l.forEach((s) => {
      s.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), s.removeAttribute("style"), s.removeAttribute("data-swiper-slide-index");
    })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((s) => {
      n.off(s);
    }), t !== !1 && (n.el && typeof n.el != "string" && (n.el.swiper = null), nl(n)), n.destroyed = !0), null;
  }
  static extendDefaults(t) {
    Be(ii, t);
  }
  static get extendedDefaults() {
    return ii;
  }
  static get defaults() {
    return vi;
  }
  static installModule(t) {
    yt.prototype.__modules__ || (yt.prototype.__modules__ = []);
    const r = yt.prototype.__modules__;
    typeof t == "function" && r.indexOf(t) < 0 && r.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((r) => yt.installModule(r)), yt) : (yt.installModule(t), yt);
  }
};
Object.keys(ni).forEach((e) => {
  Object.keys(ni[e]).forEach((t) => {
    Ni.prototype[t] = ni[e][t];
  });
});
Ni.use([Al, ml]);
const Ma = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_snapToSlideEdge",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function Jt(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function nr(e, t) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter((n) => r.indexOf(n) < 0).forEach((n) => {
    typeof e[n] > "u" ? e[n] = t[n] : Jt(t[n]) && Jt(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : nr(e[n], t[n]) : e[n] = t[n];
  });
}
function Oa(e = {}) {
  return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u";
}
function Pa(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function La(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function ja(e = "") {
  const t = e.split(" ").map((n) => n.trim()).filter((n) => !!n), r = [];
  return t.forEach((n) => {
    r.indexOf(n) < 0 && r.push(n);
  }), r.join(" ");
}
function bc(e = "") {
  return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper";
}
function Cc({
  swiper: e,
  slides: t,
  passedParams: r,
  changedParams: n,
  nextEl: i,
  prevEl: o,
  scrollbarEl: a,
  paginationEl: l
}) {
  const s = n.filter((I) => I !== "children" && I !== "direction" && I !== "wrapperClass"), {
    params: c,
    pagination: u,
    navigation: d,
    scrollbar: y,
    virtual: A,
    thumbs: g
  } = e;
  let f, v, m, h, b, x, S, w;
  n.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (f = !0), n.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (v = !0), n.includes("pagination") && r.pagination && (r.pagination.el || l) && (c.pagination || c.pagination === !1) && u && !u.el && (m = !0), n.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || a) && (c.scrollbar || c.scrollbar === !1) && y && !y.el && (h = !0), n.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || i) && (c.navigation || c.navigation === !1) && d && !d.prevEl && !d.nextEl && (b = !0);
  const T = (I) => {
    e[I] && (e[I].destroy(), I === "navigation" ? (e.isElement && (e[I].prevEl.remove(), e[I].nextEl.remove()), c[I].prevEl = void 0, c[I].nextEl = void 0, e[I].prevEl = void 0, e[I].nextEl = void 0) : (e.isElement && e[I].el.remove(), c[I].el = void 0, e[I].el = void 0));
  };
  n.includes("loop") && e.isElement && (c.loop && !r.loop ? x = !0 : !c.loop && r.loop ? S = !0 : w = !0), s.forEach((I) => {
    if (Jt(c[I]) && Jt(r[I]))
      Object.assign(c[I], r[I]), (I === "navigation" || I === "pagination" || I === "scrollbar") && "enabled" in r[I] && !r[I].enabled && T(I);
    else {
      const V = r[I];
      (V === !0 || V === !1) && (I === "navigation" || I === "pagination" || I === "scrollbar") ? V === !1 && T(I) : c[I] = r[I];
    }
  }), s.includes("controller") && !v && e.controller && e.controller.control && c.controller && c.controller.control && (e.controller.control = c.controller.control), n.includes("children") && t && A && c.virtual.enabled ? (A.slides = t, A.update(!0)) : n.includes("virtual") && A && c.virtual.enabled && (t && (A.slides = t), A.update(!0)), n.includes("children") && t && c.loop && (w = !0), f && g.init() && g.update(!0), v && (e.controller.control = c.controller.control), m && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), e.el.appendChild(l)), l && (c.pagination.el = l), u.init(), u.render(), u.update()), h && (e.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), e.el.appendChild(a)), a && (c.scrollbar.el = a), y.init(), y.updateSize(), y.setTranslate()), b && (e.isElement && ((!i || typeof i == "string") && (i = document.createElement("div"), i.classList.add("swiper-button-next"), Pr(i, e.navigation.arrowSvg), i.part.add("button-next"), e.el.appendChild(i)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), Pr(o, e.navigation.arrowSvg), o.part.add("button-prev"), e.el.appendChild(o))), i && (c.navigation.nextEl = i), o && (c.navigation.prevEl = o), d.init(), d.update()), n.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev), n.includes("direction") && e.changeDirection(r.direction, !1), (x || w) && e.loopDestroy(), (S || w) && e.loopCreate(), e.update();
}
function Sc(e = {}, t = !0) {
  const r = {
    on: {}
  }, n = {}, i = {};
  nr(r, vi), r._emitClasses = !0, r.init = !1;
  const o = {}, a = Ma.map((s) => s.replace(/_/, "")), l = Object.assign({}, e);
  return Object.keys(l).forEach((s) => {
    typeof e[s] > "u" || (a.indexOf(s) >= 0 ? Jt(e[s]) ? (r[s] = {}, i[s] = {}, nr(r[s], e[s]), nr(i[s], e[s])) : (r[s] = e[s], i[s] = e[s]) : s.search(/on[A-Z]/) === 0 && typeof e[s] == "function" ? t ? n[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : r.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : o[s] = e[s]);
  }), ["navigation", "pagination", "scrollbar"].forEach((s) => {
    r[s] === !0 && (r[s] = {}), r[s] === !1 && delete r[s];
  }), {
    params: r,
    passedParams: i,
    rest: o,
    events: n
  };
}
function xc({
  el: e,
  nextEl: t,
  prevEl: r,
  paginationEl: n,
  scrollbarEl: i,
  swiper: o
}, a) {
  Oa(a) && t && r && (o.params.navigation.nextEl = t, o.originalParams.navigation.nextEl = t, o.params.navigation.prevEl = r, o.originalParams.navigation.prevEl = r), Pa(a) && n && (o.params.pagination.el = n, o.originalParams.pagination.el = n), La(a) && i && (o.params.scrollbar.el = i, o.originalParams.scrollbar.el = i), o.init(e);
}
function Ec(e, t, r, n, i) {
  const o = [];
  if (!t) return o;
  const a = (s) => {
    o.indexOf(s) < 0 && o.push(s);
  };
  if (r && n) {
    const s = n.map(i), c = r.map(i);
    s.join("") !== c.join("") && a("children"), n.length !== r.length && a("children");
  }
  return Ma.filter((s) => s[0] === "_").map((s) => s.replace(/_/, "")).forEach((s) => {
    if (s in e && s in t)
      if (Jt(e[s]) && Jt(t[s])) {
        const c = Object.keys(e[s]), u = Object.keys(t[s]);
        c.length !== u.length ? a(s) : (c.forEach((d) => {
          e[s][d] !== t[s][d] && a(s);
        }), u.forEach((d) => {
          e[s][d] !== t[s][d] && a(s);
        }));
      } else e[s] !== t[s] && a(s);
  }), o;
}
const Ic = (e) => {
  !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function yn() {
  return yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yn.apply(this, arguments);
}
function Wa(e) {
  return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function Va(e) {
  const t = [];
  return me.Children.toArray(e).forEach((r) => {
    Wa(r) ? t.push(r) : r.props && r.props.children && Va(r.props.children).forEach((n) => t.push(n));
  }), t;
}
function wc(e) {
  const t = [], r = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return me.Children.toArray(e).forEach((n) => {
    if (Wa(n))
      t.push(n);
    else if (n.props && n.props.slot && r[n.props.slot])
      r[n.props.slot].push(n);
    else if (n.props && n.props.children) {
      const i = Va(n.props.children);
      i.length > 0 ? i.forEach((o) => t.push(o)) : r["container-end"].push(n);
    } else
      r["container-end"].push(n);
  }), {
    slides: t,
    slots: r
  };
}
function Tc(e, t, r) {
  if (!r) return null;
  const n = (u) => {
    let d = u;
    return u < 0 ? d = t.length + u : d >= t.length && (d = d - t.length), d;
  }, i = e.isHorizontal() ? {
    [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
  } : {
    top: `${r.offset}px`
  }, {
    from: o,
    to: a
  } = r, l = e.params.loop ? -t.length : 0, s = e.params.loop ? t.length * 2 : t.length, c = [];
  for (let u = l; u < s; u += 1)
    u >= o && u <= a && c.push(t[n(u)]);
  return c.map((u, d) => /* @__PURE__ */ me.cloneElement(u, {
    swiper: e,
    style: i,
    key: u.props.virtualIndex || u.key || `slide-${d}`
  }));
}
function Tr(e, t) {
  return typeof window > "u" ? Or(e, t) : Ks(e, t);
}
const go = /* @__PURE__ */ ba(null), Rc = /* @__PURE__ */ ba(null), Da = /* @__PURE__ */ Vi(({
  className: e,
  tag: t = "div",
  wrapperTag: r = "div",
  children: n,
  onSwiper: i,
  ...o
} = {}, a) => {
  let l = !1;
  const [s, c] = at("swiper"), [u, d] = at(null), [y, A] = at(!1), g = Ue(!1), f = Ue(null), v = Ue(null), m = Ue(null), h = Ue(null), b = Ue(null), x = Ue(null), S = Ue(null), w = Ue(null), {
    params: T,
    passedParams: I,
    rest: V,
    events: P
  } = Sc(o), {
    slides: M,
    slots: p
  } = wc(n), R = () => {
    A(!y);
  };
  Object.assign(T.on, {
    _containerClasses(W, J) {
      c(J);
    }
  });
  const k = () => {
    Object.assign(T.on, P), l = !0;
    const W = {
      ...T
    };
    if (delete W.wrapperClass, v.current = new Ni(W), v.current.virtual && v.current.params.virtual.enabled) {
      v.current.virtual.slides = M;
      const J = {
        cache: !1,
        slides: M,
        renderExternal: d,
        renderExternalUpdate: !1
      };
      nr(v.current.params.virtual, J), nr(v.current.originalParams.virtual, J);
    }
  };
  f.current || k(), v.current && v.current.on("_beforeBreakpoint", R);
  const j = () => {
    l || !P || !v.current || Object.keys(P).forEach((W) => {
      v.current.on(W, P[W]);
    });
  }, G = () => {
    !P || !v.current || Object.keys(P).forEach((W) => {
      v.current.off(W, P[W]);
    });
  };
  Or(() => () => {
    v.current && v.current.off("_beforeBreakpoint", R);
  }), Or(() => {
    !g.current && v.current && (v.current.emitSlidesClasses(), g.current = !0);
  }), Tr(() => {
    if (a && (a.current = f.current), !!f.current)
      return v.current.destroyed && k(), xc({
        el: f.current,
        nextEl: b.current,
        prevEl: x.current,
        paginationEl: S.current,
        scrollbarEl: w.current,
        swiper: v.current
      }, T), i && !v.current.destroyed && i(v.current), () => {
        v.current && !v.current.destroyed && v.current.destroy(!0, !1);
      };
  }, []), Tr(() => {
    j();
    const W = Ec(I, m.current, M, h.current, (J) => J.key);
    return m.current = I, h.current = M, W.length && v.current && !v.current.destroyed && Cc({
      swiper: v.current,
      slides: M,
      passedParams: I,
      changedParams: W,
      nextEl: b.current,
      prevEl: x.current,
      scrollbarEl: w.current,
      paginationEl: S.current
    }), () => {
      G();
    };
  }), Tr(() => {
    Ic(v.current);
  }, [u]);
  function D() {
    return T.virtual ? Tc(v.current, M, u) : M.map((W, J) => /* @__PURE__ */ me.cloneElement(W, {
      swiper: v.current,
      swiperSlideIndex: J
    }));
  }
  return /* @__PURE__ */ me.createElement(t, yn({
    ref: f,
    className: ja(`${s}${e ? ` ${e}` : ""}`)
  }, V), /* @__PURE__ */ me.createElement(Rc.Provider, {
    value: v.current
  }, p["container-start"], /* @__PURE__ */ me.createElement(r, {
    className: bc(T.wrapperClass)
  }, p["wrapper-start"], D(), p["wrapper-end"]), Oa(T) && /* @__PURE__ */ me.createElement(me.Fragment, null, /* @__PURE__ */ me.createElement("div", {
    ref: x,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ me.createElement("div", {
    ref: b,
    className: "swiper-button-next"
  })), La(T) && /* @__PURE__ */ me.createElement("div", {
    ref: w,
    className: "swiper-scrollbar"
  }), Pa(T) && /* @__PURE__ */ me.createElement("div", {
    ref: S,
    className: "swiper-pagination"
  }), p["container-end"]));
});
Da.displayName = "Swiper";
const bi = /* @__PURE__ */ Vi(({
  tag: e = "div",
  children: t,
  className: r = "",
  swiper: n,
  zoom: i,
  lazy: o,
  virtualIndex: a,
  swiperSlideIndex: l,
  ...s
} = {}, c) => {
  const u = Ue(null), [d, y] = at("swiper-slide"), [A, g] = at(!1);
  function f(b, x, S) {
    x === u.current && y(S);
  }
  Tr(() => {
    if (typeof l < "u" && (u.current.swiperSlideIndex = l), c && (c.current = u.current), !(!u.current || !n)) {
      if (n.destroyed) {
        d !== "swiper-slide" && y("swiper-slide");
        return;
      }
      return n.on("_slideClass", f), () => {
        n && n.off("_slideClass", f);
      };
    }
  }), Tr(() => {
    n && u.current && !n.destroyed && y(n.getSlideClasses(u.current));
  }, [n]);
  const v = {
    isActive: d.indexOf("swiper-slide-active") >= 0,
    isVisible: d.indexOf("swiper-slide-visible") >= 0,
    isPrev: d.indexOf("swiper-slide-prev") >= 0,
    isNext: d.indexOf("swiper-slide-next") >= 0
  }, m = () => typeof t == "function" ? t(v) : t, h = () => {
    g(!0);
  };
  return /* @__PURE__ */ me.createElement(e, yn({
    ref: u,
    className: ja(`${d}${r ? ` ${r}` : ""}`),
    "data-swiper-slide-index": a,
    onLoad: h
  }, s), i && /* @__PURE__ */ me.createElement(go.Provider, {
    value: v
  }, /* @__PURE__ */ me.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof i == "number" ? i : void 0
  }, m(), o && !A && /* @__PURE__ */ me.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (b) => {
      b && (b.lazyPreloaderManaged = !0);
    }
  }))), !i && /* @__PURE__ */ me.createElement(go.Provider, {
    value: v
  }, m(), o && !A && /* @__PURE__ */ me.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (b) => {
      b && (b.lazyPreloaderManaged = !0);
    }
  })));
});
bi.displayName = "SwiperSlide";
function Ci() {
  return Ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ci.apply(null, arguments);
}
function kc(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Mc(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Oc = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(i) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, o), n.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Mc(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = kc(i);
      try {
        o.insertRule(n, o.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var i;
      return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ke = "-ms-", vn = "-moz-", oe = "-webkit-", Na = "comm", Fi = "rule", Gi = "decl", Pc = "@import", Fa = "@keyframes", Lc = "@layer", jc = Math.abs, wn = String.fromCharCode, Wc = Object.assign;
function Vc(e, t) {
  return Re(e, 0) ^ 45 ? (((t << 2 ^ Re(e, 0)) << 2 ^ Re(e, 1)) << 2 ^ Re(e, 2)) << 2 ^ Re(e, 3) : 0;
}
function Ga(e) {
  return e.trim();
}
function Dc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ae(e, t, r) {
  return e.replace(t, r);
}
function Si(e, t) {
  return e.indexOf(t);
}
function Re(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lr(e, t, r) {
  return e.slice(t, r);
}
function it(e) {
  return e.length;
}
function Bi(e) {
  return e.length;
}
function tn(e, t) {
  return t.push(e), e;
}
function Nc(e, t) {
  return e.map(t).join("");
}
var Tn = 1, ar = 1, Ba = 0, Fe = 0, Ie = 0, fr = "";
function Rn(e, t, r, n, i, o, a) {
  return { value: e, root: t, parent: r, type: n, props: i, children: o, line: Tn, column: ar, length: a, return: "" };
}
function yr(e, t) {
  return Wc(Rn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Fc() {
  return Ie;
}
function Gc() {
  return Ie = Fe > 0 ? Re(fr, --Fe) : 0, ar--, Ie === 10 && (ar = 1, Tn--), Ie;
}
function Je() {
  return Ie = Fe < Ba ? Re(fr, Fe++) : 0, ar++, Ie === 10 && (ar = 1, Tn++), Ie;
}
function ct() {
  return Re(fr, Fe);
}
function cn() {
  return Fe;
}
function Hr(e, t) {
  return Lr(fr, e, t);
}
function jr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ha(e) {
  return Tn = ar = 1, Ba = it(fr = e), Fe = 0, [];
}
function Ja(e) {
  return fr = "", e;
}
function un(e) {
  return Ga(Hr(Fe - 1, xi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Bc(e) {
  for (; (Ie = ct()) && Ie < 33; )
    Je();
  return jr(e) > 2 || jr(Ie) > 3 ? "" : " ";
}
function Hc(e, t) {
  for (; --t && Je() && !(Ie < 48 || Ie > 102 || Ie > 57 && Ie < 65 || Ie > 70 && Ie < 97); )
    ;
  return Hr(e, cn() + (t < 6 && ct() == 32 && Je() == 32));
}
function xi(e) {
  for (; Je(); )
    switch (Ie) {
      case e:
        return Fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xi(Ie);
        break;
      case 40:
        e === 41 && xi(e);
        break;
      case 92:
        Je();
        break;
    }
  return Fe;
}
function Jc(e, t) {
  for (; Je() && e + Ie !== 57; )
    if (e + Ie === 84 && ct() === 47)
      break;
  return "/*" + Hr(t, Fe - 1) + "*" + wn(e === 47 ? e : Je());
}
function Zc(e) {
  for (; !jr(ct()); )
    Je();
  return Hr(e, Fe);
}
function qc(e) {
  return Ja(dn("", null, null, null, [""], e = Ha(e), 0, [0], e));
}
function dn(e, t, r, n, i, o, a, l, s) {
  for (var c = 0, u = 0, d = a, y = 0, A = 0, g = 0, f = 1, v = 1, m = 1, h = 0, b = "", x = i, S = o, w = n, T = b; v; )
    switch (g = h, h = Je()) {
      case 40:
        if (g != 108 && Re(T, d - 1) == 58) {
          Si(T += ae(un(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += un(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Bc(g);
        break;
      case 92:
        T += Hc(cn() - 1, 7);
        continue;
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            tn(zc(Jc(Je(), cn()), t, r), s);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * f:
        l[c++] = it(T) * m;
      case 125 * f:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            m == -1 && (T = ae(T, /\f/g, "")), A > 0 && it(T) - d && tn(A > 32 ? yo(T + ";", n, r, d - 1) : yo(ae(T, " ", "") + ";", n, r, d - 2), s);
            break;
          case 59:
            T += ";";
          default:
            if (tn(w = ho(T, t, r, c, u, i, l, b, x = [], S = [], d), o), h === 123)
              if (u === 0)
                dn(T, t, w, w, x, o, d, l, S);
              else
                switch (y === 99 && Re(T, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dn(e, w, w, n && tn(ho(e, w, w, 0, 0, i, l, b, i, x = [], d), S), i, S, d, l, n ? x : S);
                    break;
                  default:
                    dn(T, w, w, w, [""], S, 0, l, S);
                }
        }
        c = u = A = 0, f = m = 1, b = T = "", d = a;
        break;
      case 58:
        d = 1 + it(T), A = g;
      default:
        if (f < 1) {
          if (h == 123)
            --f;
          else if (h == 125 && f++ == 0 && Gc() == 125)
            continue;
        }
        switch (T += wn(h), h * f) {
          case 38:
            m = u > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[c++] = (it(T) - 1) * m, m = 1;
            break;
          case 64:
            ct() === 45 && (T += un(Je())), y = ct(), u = d = it(b = T += Zc(cn())), h++;
            break;
          case 45:
            g === 45 && it(T) == 2 && (f = 0);
        }
    }
  return o;
}
function ho(e, t, r, n, i, o, a, l, s, c, u) {
  for (var d = i - 1, y = i === 0 ? o : [""], A = Bi(y), g = 0, f = 0, v = 0; g < n; ++g)
    for (var m = 0, h = Lr(e, d + 1, d = jc(f = a[g])), b = e; m < A; ++m)
      (b = Ga(f > 0 ? y[m] + " " + h : ae(h, /&\f/g, y[m]))) && (s[v++] = b);
  return Rn(e, t, r, i === 0 ? Fi : l, s, c, u);
}
function zc(e, t, r) {
  return Rn(e, t, r, Na, wn(Fc()), Lr(e, 2, -2), 0);
}
function yo(e, t, r, n) {
  return Rn(e, t, r, Gi, Lr(e, 0, n), Lr(e, n + 1, -1), n);
}
function ir(e, t) {
  for (var r = "", n = Bi(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Yc(e, t, r, n) {
  switch (e.type) {
    case Lc:
      if (e.children.length) break;
    case Pc:
    case Gi:
      return e.return = e.return || e.value;
    case Na:
      return "";
    case Fa:
      return e.return = e.value + "{" + ir(e.children, n) + "}";
    case Fi:
      e.value = e.props.join(",");
  }
  return it(r = ir(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Uc(e) {
  var t = Bi(e);
  return function(r, n, i, o) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](r, n, i, o) || "";
    return a;
  };
}
function Kc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Za(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xc = function(t, r, n) {
  for (var i = 0, o = 0; i = o, o = ct(), i === 38 && o === 12 && (r[n] = 1), !jr(o); )
    Je();
  return Hr(t, Fe);
}, Qc = function(t, r) {
  var n = -1, i = 44;
  do
    switch (jr(i)) {
      case 0:
        i === 38 && ct() === 12 && (r[n] = 1), t[n] += Xc(Fe - 1, r, n);
        break;
      case 2:
        t[n] += un(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = ct() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += wn(i);
    }
  while (i = Je());
  return t;
}, _c = function(t, r) {
  return Ja(Qc(Ha(t), r));
}, vo = /* @__PURE__ */ new WeakMap(), $c = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !vo.get(n)) && !i) {
      vo.set(t, !0);
      for (var o = [], a = _c(r, o), l = n.props, s = 0, c = 0; s < a.length; s++)
        for (var u = 0; u < l.length; u++, c++)
          t.props[c] = o[s] ? a[s].replace(/&\f/g, l[u]) : l[u] + " " + a[s];
    }
  }
}, eu = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function qa(e, t) {
  switch (Vc(e, t)) {
    case 5103:
      return oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + vn + e + ke + e + e;
    case 6828:
    case 4268:
      return oe + e + ke + e + e;
    case 6165:
      return oe + e + ke + "flex-" + e + e;
    case 5187:
      return oe + e + ae(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + ke + "flex-$1$2") + e;
    case 5443:
      return oe + e + ke + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + ke + "flex-line-pack" + ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + ke + ae(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + ke + ae(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ae(e, "-grow", "") + oe + e + ke + ae(e, "grow", "positive") + e;
    case 4554:
      return oe + ae(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ae(ae(ae(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return ae(ae(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (it(e) - 1 - t > 6) switch (Re(e, t + 1)) {
        case 109:
          if (Re(e, t + 4) !== 45) break;
        case 102:
          return ae(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + vn + (Re(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Si(e, "stretch") ? qa(ae(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Re(e, t + 1) !== 115) break;
    case 6444:
      switch (Re(e, it(e) - 3 - (~Si(e, "!important") && 10))) {
        case 107:
          return ae(e, ":", ":" + oe) + e;
        case 101:
          return ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (Re(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Re(e, t + 11)) {
        case 114:
          return oe + e + ke + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + ke + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + ke + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + ke + e + e;
  }
  return e;
}
var tu = function(t, r, n, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Gi:
      t.return = qa(t.value, t.length);
      break;
    case Fa:
      return ir([yr(t, {
        value: ae(t.value, "@", "@" + oe)
      })], i);
    case Fi:
      if (t.length) return Nc(t.props, function(o) {
        switch (Dc(o, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ir([yr(t, {
              props: [ae(o, /:(read-\w+)/, ":" + vn + "$1")]
            })], i);
          case "::placeholder":
            return ir([yr(t, {
              props: [ae(o, /:(plac\w+)/, ":" + oe + "input-$1")]
            }), yr(t, {
              props: [ae(o, /:(plac\w+)/, ":" + vn + "$1")]
            }), yr(t, {
              props: [ae(o, /:(plac\w+)/, ke + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, ru = [tu], nu = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var v = f.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || ru, o = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(f) {
      for (var v = f.getAttribute("data-emotion").split(" "), m = 1; m < v.length; m++)
        o[v[m]] = !0;
      l.push(f);
    }
  );
  var s, c = [$c, eu];
  {
    var u, d = [Yc, Kc(function(f) {
      u.insert(f);
    })], y = Uc(c.concat(i, d)), A = function(v) {
      return ir(qc(v), y);
    };
    s = function(v, m, h, b) {
      u = h, A(v ? v + "{" + m.styles + "}" : m.styles), b && (g.inserted[m.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new Oc({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: s
  };
  return g.sheet.hydrate(l), g;
}, Ei = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function iu() {
  if (bo) return le;
  bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, A = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
  function b(S) {
    if (typeof S == "object" && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case t:
          switch (S = S.type, S) {
            case s:
            case c:
            case n:
            case o:
            case i:
            case d:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case u:
                case g:
                case A:
                case a:
                  return S;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function x(S) {
    return b(S) === c;
  }
  return le.AsyncMode = s, le.ConcurrentMode = c, le.ContextConsumer = l, le.ContextProvider = a, le.Element = t, le.ForwardRef = u, le.Fragment = n, le.Lazy = g, le.Memo = A, le.Portal = r, le.Profiler = o, le.StrictMode = i, le.Suspense = d, le.isAsyncMode = function(S) {
    return x(S) || b(S) === s;
  }, le.isConcurrentMode = x, le.isContextConsumer = function(S) {
    return b(S) === l;
  }, le.isContextProvider = function(S) {
    return b(S) === a;
  }, le.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, le.isForwardRef = function(S) {
    return b(S) === u;
  }, le.isFragment = function(S) {
    return b(S) === n;
  }, le.isLazy = function(S) {
    return b(S) === g;
  }, le.isMemo = function(S) {
    return b(S) === A;
  }, le.isPortal = function(S) {
    return b(S) === r;
  }, le.isProfiler = function(S) {
    return b(S) === o;
  }, le.isStrictMode = function(S) {
    return b(S) === i;
  }, le.isSuspense = function(S) {
    return b(S) === d;
  }, le.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === c || S === o || S === i || S === d || S === y || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === A || S.$$typeof === a || S.$$typeof === l || S.$$typeof === u || S.$$typeof === v || S.$$typeof === m || S.$$typeof === h || S.$$typeof === f);
  }, le.typeOf = b, le;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function ou() {
  return Co || (Co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, A = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
    function b(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === n || B === c || B === o || B === i || B === d || B === y || typeof B == "object" && B !== null && (B.$$typeof === g || B.$$typeof === A || B.$$typeof === a || B.$$typeof === l || B.$$typeof === u || B.$$typeof === v || B.$$typeof === m || B.$$typeof === h || B.$$typeof === f);
    }
    function x(B) {
      if (typeof B == "object" && B !== null) {
        var we = B.$$typeof;
        switch (we) {
          case t:
            var Pe = B.type;
            switch (Pe) {
              case s:
              case c:
              case n:
              case o:
              case i:
              case d:
                return Pe;
              default:
                var Le = Pe && Pe.$$typeof;
                switch (Le) {
                  case l:
                  case u:
                  case g:
                  case A:
                  case a:
                    return Le;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var S = s, w = c, T = l, I = a, V = t, P = u, M = n, p = g, R = A, k = r, j = o, G = i, D = d, W = !1;
    function J(B) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(B) || x(B) === s;
    }
    function O(B) {
      return x(B) === c;
    }
    function H(B) {
      return x(B) === l;
    }
    function z(B) {
      return x(B) === a;
    }
    function _(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function q(B) {
      return x(B) === u;
    }
    function Q(B) {
      return x(B) === n;
    }
    function Y(B) {
      return x(B) === g;
    }
    function K(B) {
      return x(B) === A;
    }
    function U(B) {
      return x(B) === r;
    }
    function re(B) {
      return x(B) === o;
    }
    function te(B) {
      return x(B) === i;
    }
    function he(B) {
      return x(B) === d;
    }
    ce.AsyncMode = S, ce.ConcurrentMode = w, ce.ContextConsumer = T, ce.ContextProvider = I, ce.Element = V, ce.ForwardRef = P, ce.Fragment = M, ce.Lazy = p, ce.Memo = R, ce.Portal = k, ce.Profiler = j, ce.StrictMode = G, ce.Suspense = D, ce.isAsyncMode = J, ce.isConcurrentMode = O, ce.isContextConsumer = H, ce.isContextProvider = z, ce.isElement = _, ce.isForwardRef = q, ce.isFragment = Q, ce.isLazy = Y, ce.isMemo = K, ce.isPortal = U, ce.isProfiler = re, ce.isStrictMode = te, ce.isSuspense = he, ce.isValidElementType = b, ce.typeOf = x;
  }()), ce;
}
process.env.NODE_ENV === "production" ? Ei.exports = iu() : Ei.exports = ou();
var za = Ei.exports, au = !0;
function su(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
  }), n;
}
var Ya = function(t, r, n) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  au === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, lu = function(t, r, n) {
  Ya(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var o = r;
    do
      t.insert(r === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function cu(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var uu = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, du = /[A-Z]|^ms/g, fu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ua = function(t) {
  return t.charCodeAt(1) === 45;
}, So = function(t) {
  return t != null && typeof t != "boolean";
}, oi = /* @__PURE__ */ Za(function(e) {
  return Ua(e) ? e : e.replace(du, "-$&").toLowerCase();
}), xo = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(fu, function(n, i, o) {
          return ot = {
            name: i,
            styles: o,
            next: ot
          }, i;
        });
  }
  return uu[t] !== 1 && !Ua(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Wr(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return ot = {
          name: i.name,
          styles: i.styles,
          next: ot
        }, i.name;
      var o = r;
      if (o.styles !== void 0) {
        var a = o.next;
        if (a !== void 0)
          for (; a !== void 0; )
            ot = {
              name: a.name,
              styles: a.styles,
              next: ot
            }, a = a.next;
        var l = o.styles + ";";
        return l;
      }
      return pu(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = ot, c = r(e);
        return ot = s, Wr(e, t, c);
      }
      break;
    }
  }
  var u = r;
  if (t == null)
    return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function pu(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += Wr(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var a = r[o];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? n += o + "{" + t[l] + "}" : So(l) && (n += oi(o) + ":" + xo(o, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          So(a[s]) && (n += oi(o) + ":" + xo(o, a[s]) + ";");
      else {
        var c = Wr(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            n += oi(o) + ":" + c + ";";
            break;
          }
          default:
            n += o + "{" + c + "}";
        }
      }
    }
  return n;
}
var Eo = /label:\s*([^\s;{]+)\s*(;|$)/g, ot;
function Ka(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, i = "";
  ot = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    n = !1, i += Wr(r, t, o);
  else {
    var a = o;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Wr(r, t, e[l]), n) {
      var s = o;
      i += s[l];
    }
  Eo.lastIndex = 0;
  for (var c = "", u; (u = Eo.exec(i)) !== null; )
    c += "-" + u[1];
  var d = cu(i) + c;
  return {
    name: d,
    styles: i,
    next: ot
  };
}
var Au = function(t) {
  return t();
}, mu = F.useInsertionEffect ? F.useInsertionEffect : !1, gu = mu || Au, Xa = /* @__PURE__ */ F.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ nu({
    key: "css"
  }) : null
);
Xa.Provider;
var hu = function(t) {
  return /* @__PURE__ */ Vi(function(r, n) {
    var i = Xs(Xa);
    return t(r, i, n);
  });
}, Qa = /* @__PURE__ */ F.createContext({}), yu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vu = /* @__PURE__ */ Za(
  function(e) {
    return yu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bu = vu, Cu = function(t) {
  return t !== "theme";
}, Io = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? bu : Cu;
}, wo = function(t, r, n) {
  var i;
  if (r) {
    var o = r.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(a) {
      return t.__emotion_forwardProp(a) && o(a);
    } : o;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, Su = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return Ya(r, n, i), gu(function() {
    return lu(r, n, i);
  }), null;
}, xu = function e(t, r) {
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, o, a;
  r !== void 0 && (o = r.label, a = r.target);
  var l = wo(t, r, n), s = l || Io(i), c = !s("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && d.push("label:" + o + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      var y = u[0];
      d.push(y[0]);
      for (var A = u.length, g = 1; g < A; g++)
        d.push(u[g], y[g]);
    }
    var f = hu(function(v, m, h) {
      var b = c && v.as || i, x = "", S = [], w = v;
      if (v.theme == null) {
        w = {};
        for (var T in v)
          w[T] = v[T];
        w.theme = F.useContext(Qa);
      }
      typeof v.className == "string" ? x = su(m.registered, S, v.className) : v.className != null && (x = v.className + " ");
      var I = Ka(d.concat(S), m.registered, w);
      x += m.key + "-" + I.name, a !== void 0 && (x += " " + a);
      var V = c && l === void 0 ? Io(b) : s, P = {};
      for (var M in v)
        c && M === "as" || V(M) && (P[M] = v[M]);
      return P.className = x, h && (P.ref = h), /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement(Su, {
        cache: m,
        serialized: I,
        isStringTag: typeof b == "string"
      }), /* @__PURE__ */ F.createElement(b, P));
    });
    return f.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = i, f.__emotion_styles = d, f.__emotion_forwardProp = l, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + a;
      }
    }), f.withComponent = function(v, m) {
      var h = e(v, Ci({}, r, m, {
        shouldForwardProp: wo(f, m, !0)
      }));
      return h.apply(void 0, d);
    }, f;
  };
}, Eu = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Se = xu.bind(null);
Eu.forEach(function(e) {
  Se[e] = Se(e);
});
var Ii = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ai, To;
function Iu() {
  if (To) return ai;
  To = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var s = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ai = i() ? Object.assign : function(o, a) {
    for (var l, s = n(o), c, u = 1; u < arguments.length; u++) {
      l = Object(arguments[u]);
      for (var d in l)
        t.call(l, d) && (s[d] = l[d]);
      if (e) {
        c = e(l);
        for (var y = 0; y < c.length; y++)
          r.call(l, c[y]) && (s[c[y]] = l[c[y]]);
      }
    }
    return s;
  }, ai;
}
var si, Ro;
function Hi() {
  if (Ro) return si;
  Ro = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return si = e, si;
}
var li, ko;
function _a() {
  return ko || (ko = 1, li = Function.call.bind(Object.prototype.hasOwnProperty)), li;
}
var ci, Mo;
function wu() {
  if (Mo) return ci;
  Mo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Hi(), r = {}, n = _a();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, l, s, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (n(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var y = Error(
                (s || "React class") + ": " + l + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            d = o[u](a, u, s, l, null, t);
          } catch (g) {
            d = g;
          }
          if (d && !(d instanceof Error) && e(
            (s || "React class") + ": type specification of " + l + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var A = c ? c() : "";
            e(
              "Failed " + l + " type: " + d.message + (A ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ci = i, ci;
}
var ui, Oo;
function Tu() {
  if (Oo) return ui;
  Oo = 1;
  var e = za, t = Iu(), r = Hi(), n = _a(), i = wu(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var s = "Warning: " + l;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return ui = function(l, s) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var H = O && (c && O[c] || O[u]);
      if (typeof H == "function")
        return H;
    }
    var y = "<<anonymous>>", A = {
      array: m("array"),
      bigint: m("bigint"),
      bool: m("boolean"),
      func: m("function"),
      number: m("number"),
      object: m("object"),
      string: m("string"),
      symbol: m("symbol"),
      any: h(),
      arrayOf: b,
      element: x(),
      elementType: S(),
      instanceOf: w,
      node: P(),
      objectOf: I,
      oneOf: T,
      oneOfType: V,
      shape: p,
      exact: R
    };
    function g(O, H) {
      return O === H ? O !== 0 || 1 / O === 1 / H : O !== O && H !== H;
    }
    function f(O, H) {
      this.message = O, this.data = H && typeof H == "object" ? H : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function v(O) {
      if (process.env.NODE_ENV !== "production")
        var H = {}, z = 0;
      function _(Q, Y, K, U, re, te, he) {
        if (U = U || y, te = te || K, he !== r) {
          if (s) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = U + ":" + K;
            !H[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), H[we] = !0, z++);
          }
        }
        return Y[K] == null ? Q ? Y[K] === null ? new f("The " + re + " `" + te + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new f("The " + re + " `" + te + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : O(Y, K, U, re, te);
      }
      var q = _.bind(null, !1);
      return q.isRequired = _.bind(null, !0), q;
    }
    function m(O) {
      function H(z, _, q, Q, Y, K) {
        var U = z[_], re = G(U);
        if (re !== O) {
          var te = D(U);
          return new f(
            "Invalid " + Q + " `" + Y + "` of type " + ("`" + te + "` supplied to `" + q + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return v(H);
    }
    function h() {
      return v(a);
    }
    function b(O) {
      function H(z, _, q, Q, Y) {
        if (typeof O != "function")
          return new f("Property `" + Y + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var K = z[_];
        if (!Array.isArray(K)) {
          var U = G(K);
          return new f("Invalid " + Q + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected an array."));
        }
        for (var re = 0; re < K.length; re++) {
          var te = O(K, re, q, Q, Y + "[" + re + "]", r);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return v(H);
    }
    function x() {
      function O(H, z, _, q, Q) {
        var Y = H[z];
        if (!l(Y)) {
          var K = G(Y);
          return new f("Invalid " + q + " `" + Q + "` of type " + ("`" + K + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(O);
    }
    function S() {
      function O(H, z, _, q, Q) {
        var Y = H[z];
        if (!e.isValidElementType(Y)) {
          var K = G(Y);
          return new f("Invalid " + q + " `" + Q + "` of type " + ("`" + K + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(O);
    }
    function w(O) {
      function H(z, _, q, Q, Y) {
        if (!(z[_] instanceof O)) {
          var K = O.name || y, U = J(z[_]);
          return new f("Invalid " + Q + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return v(H);
    }
    function T(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function H(z, _, q, Q, Y) {
        for (var K = z[_], U = 0; U < O.length; U++)
          if (g(K, O[U]))
            return null;
        var re = JSON.stringify(O, function(he, B) {
          var we = D(B);
          return we === "symbol" ? String(B) : B;
        });
        return new f("Invalid " + Q + " `" + Y + "` of value `" + String(K) + "` " + ("supplied to `" + q + "`, expected one of " + re + "."));
      }
      return v(H);
    }
    function I(O) {
      function H(z, _, q, Q, Y) {
        if (typeof O != "function")
          return new f("Property `" + Y + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var K = z[_], U = G(K);
        if (U !== "object")
          return new f("Invalid " + Q + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected an object."));
        for (var re in K)
          if (n(K, re)) {
            var te = O(K, re, q, Q, Y + "." + re, r);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return v(H);
    }
    function V(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var H = 0; H < O.length; H++) {
        var z = O[H];
        if (typeof z != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + W(z) + " at index " + H + "."
          ), a;
      }
      function _(q, Q, Y, K, U) {
        for (var re = [], te = 0; te < O.length; te++) {
          var he = O[te], B = he(q, Q, Y, K, U, r);
          if (B == null)
            return null;
          B.data && n(B.data, "expectedType") && re.push(B.data.expectedType);
        }
        var we = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new f("Invalid " + K + " `" + U + "` supplied to " + ("`" + Y + "`" + we + "."));
      }
      return v(_);
    }
    function P() {
      function O(H, z, _, q, Q) {
        return k(H[z]) ? null : new f("Invalid " + q + " `" + Q + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return v(O);
    }
    function M(O, H, z, _, q) {
      return new f(
        (O || "React class") + ": " + H + " type `" + z + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function p(O) {
      function H(z, _, q, Q, Y) {
        var K = z[_], U = G(K);
        if (U !== "object")
          return new f("Invalid " + Q + " `" + Y + "` of type `" + U + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var re in O) {
          var te = O[re];
          if (typeof te != "function")
            return M(q, Q, Y, re, D(te));
          var he = te(K, re, q, Q, Y + "." + re, r);
          if (he)
            return he;
        }
        return null;
      }
      return v(H);
    }
    function R(O) {
      function H(z, _, q, Q, Y) {
        var K = z[_], U = G(K);
        if (U !== "object")
          return new f("Invalid " + Q + " `" + Y + "` of type `" + U + "` " + ("supplied to `" + q + "`, expected `object`."));
        var re = t({}, z[_], O);
        for (var te in re) {
          var he = O[te];
          if (n(O, te) && typeof he != "function")
            return M(q, Q, Y, te, D(he));
          if (!he)
            return new f(
              "Invalid " + Q + " `" + Y + "` key `" + te + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(z[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var B = he(K, te, q, Q, Y + "." + te, r);
          if (B)
            return B;
        }
        return null;
      }
      return v(H);
    }
    function k(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(k);
          if (O === null || l(O))
            return !0;
          var H = d(O);
          if (H) {
            var z = H.call(O), _;
            if (H !== O.entries) {
              for (; !(_ = z.next()).done; )
                if (!k(_.value))
                  return !1;
            } else
              for (; !(_ = z.next()).done; ) {
                var q = _.value;
                if (q && !k(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(O, H) {
      return O === "symbol" ? !0 : H ? H["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && H instanceof Symbol : !1;
    }
    function G(O) {
      var H = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : j(H, O) ? "symbol" : H;
    }
    function D(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var H = G(O);
      if (H === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return H;
    }
    function W(O) {
      var H = D(O);
      switch (H) {
        case "array":
        case "object":
          return "an " + H;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + H;
        default:
          return H;
      }
    }
    function J(O) {
      return !O.constructor || !O.constructor.name ? y : O.constructor.name;
    }
    return A.checkPropTypes = i, A.resetWarningCache = i.resetWarningCache, A.PropTypes = A, A;
  }, ui;
}
var di, Po;
function Ru() {
  if (Po) return di;
  Po = 1;
  var e = Hi();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, di = function() {
    function n(a, l, s, c, u, d) {
      if (d !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, di;
}
if (process.env.NODE_ENV !== "production") {
  var ku = za, Mu = !0;
  Ii.exports = Tu()(ku.isElement, Mu);
} else
  Ii.exports = Ru()();
var Ou = Ii.exports;
const C = /* @__PURE__ */ _s(Ou);
function $a(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = $a(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Vr() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = $a(e)) && (n && (n += " "), n += t);
  return n;
}
const Lo = {};
function Pu(e, t) {
  const r = F.useRef(Lo);
  return r.current === Lo && (r.current = e(t)), r;
}
const Lu = [];
function ju(e) {
  F.useEffect(e, Lu);
}
class kn {
  constructor() {
    _r(this, "currentId", null);
    _r(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    _r(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new kn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function xr() {
  const e = Pu(kn.create).current;
  return ju(e.disposeEffect), e;
}
function Ji(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Wu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function es(e, t, r, n, i) {
  const o = e[t], a = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const s = o.type;
  return typeof s == "function" && !Wu(s) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Zi = Ji(C.element, es);
Zi.isRequired = Ji(C.element.isRequired, es);
function ts(e, t, r = void 0) {
  const n = {};
  for (const i in e) {
    const o = e[i];
    let a = "", l = !0;
    for (let s = 0; s < o.length; s += 1) {
      const c = o[s];
      c && (a += (l === !0 ? "" : " ") + t(c), l = !1, r && r[c] && (a += " " + r[c]));
    }
    n[i] = a;
  }
  return n;
}
const Vu = /* @__PURE__ */ F.createContext();
process.env.NODE_ENV !== "production" && (C.node, C.bool);
const rs = () => F.useContext(Vu) ?? !1;
function jo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function qi(e) {
  var t;
  return parseInt(F.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function Tt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Jr(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Tt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var wi = { exports: {} }, fe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo;
function Du() {
  if (Wo) return fe;
  Wo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), A = Symbol.for("react.client.reference");
  function g(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case e:
          switch (f = f.type, f) {
            case r:
            case i:
            case n:
            case s:
            case c:
            case y:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case l:
                case d:
                case u:
                  return f;
                case o:
                  return f;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return fe.ContextConsumer = o, fe.ContextProvider = a, fe.Element = e, fe.ForwardRef = l, fe.Fragment = r, fe.Lazy = d, fe.Memo = u, fe.Portal = t, fe.Profiler = i, fe.StrictMode = n, fe.Suspense = s, fe.SuspenseList = c, fe.isContextConsumer = function(f) {
    return g(f) === o;
  }, fe.isContextProvider = function(f) {
    return g(f) === a;
  }, fe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, fe.isForwardRef = function(f) {
    return g(f) === l;
  }, fe.isFragment = function(f) {
    return g(f) === r;
  }, fe.isLazy = function(f) {
    return g(f) === d;
  }, fe.isMemo = function(f) {
    return g(f) === u;
  }, fe.isPortal = function(f) {
    return g(f) === t;
  }, fe.isProfiler = function(f) {
    return g(f) === i;
  }, fe.isStrictMode = function(f) {
    return g(f) === n;
  }, fe.isSuspense = function(f) {
    return g(f) === s;
  }, fe.isSuspenseList = function(f) {
    return g(f) === c;
  }, fe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === i || f === n || f === s || f === c || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === u || f.$$typeof === a || f.$$typeof === o || f.$$typeof === l || f.$$typeof === A || f.getModuleId !== void 0);
  }, fe.typeOf = g, fe;
}
var pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vo;
function Nu() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var v = f.$$typeof;
        switch (v) {
          case t:
            switch (f = f.type, f) {
              case n:
              case o:
              case i:
              case c:
              case u:
              case A:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case l:
                  case s:
                  case y:
                  case d:
                    return f;
                  case a:
                    return f;
                  default:
                    return v;
                }
            }
          case r:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), A = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    pe.ContextConsumer = a, pe.ContextProvider = l, pe.Element = t, pe.ForwardRef = s, pe.Fragment = n, pe.Lazy = y, pe.Memo = d, pe.Portal = r, pe.Profiler = o, pe.StrictMode = i, pe.Suspense = c, pe.SuspenseList = u, pe.isContextConsumer = function(f) {
      return e(f) === a;
    }, pe.isContextProvider = function(f) {
      return e(f) === l;
    }, pe.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, pe.isForwardRef = function(f) {
      return e(f) === s;
    }, pe.isFragment = function(f) {
      return e(f) === n;
    }, pe.isLazy = function(f) {
      return e(f) === y;
    }, pe.isMemo = function(f) {
      return e(f) === d;
    }, pe.isPortal = function(f) {
      return e(f) === r;
    }, pe.isProfiler = function(f) {
      return e(f) === o;
    }, pe.isStrictMode = function(f) {
      return e(f) === i;
    }, pe.isSuspense = function(f) {
      return e(f) === c;
    }, pe.isSuspenseList = function(f) {
      return e(f) === u;
    }, pe.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === o || f === i || f === c || f === u || typeof f == "object" && f !== null && (f.$$typeof === y || f.$$typeof === d || f.$$typeof === l || f.$$typeof === a || f.$$typeof === s || f.$$typeof === g || f.getModuleId !== void 0);
    }, pe.typeOf = e;
  }()), pe;
}
process.env.NODE_ENV === "production" ? wi.exports = Du() : wi.exports = Nu();
var bn = wi.exports;
function vt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ns(e) {
  if (/* @__PURE__ */ F.isValidElement(e) || bn.isValidElementType(e) || !vt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = ns(e[r]);
  }), t;
}
function Ze(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return vt(e) && vt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ F.isValidElement(t[i]) || bn.isValidElementType(t[i]) ? n[i] = t[i] : vt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && vt(e[i]) ? n[i] = Ze(e[i], t[i], r) : r.clone ? n[i] = vt(t[i]) ? ns(t[i]) : t[i] : n[i] = t[i];
  }), n;
}
function Rr(e, t) {
  return t ? Ze(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const kt = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.string, C.object, C.array]) : {};
function Do(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, i) => {
    var a, l;
    const o = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(o)) == null ? void 0 : a[1]) || 0) - +(((l = i.match(o)) == null ? void 0 : l[1]) || 0);
  });
  return r.length ? r.reduce((n, i) => {
    const o = t[i];
    return delete n[i], n[i] = o, n;
  }, {
    ...t
  }) : t;
}
function Fu(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Gu(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Tt(18, `(${t})`));
    return null;
  }
  const [, n, i] = r, o = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(i).up(o);
}
function Bu(e) {
  const t = (o, a) => o.replace("@media", a ? `@container ${a}` : "@container");
  function r(o, a) {
    o.up = (...l) => t(e.breakpoints.up(...l), a), o.down = (...l) => t(e.breakpoints.down(...l), a), o.between = (...l) => t(e.breakpoints.between(...l), a), o.only = (...l) => t(e.breakpoints.only(...l), a), o.not = (...l) => {
      const s = t(e.breakpoints.not(...l), a);
      return s.includes("not all and") ? s.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : s;
    };
  }
  const n = {}, i = (o) => (r(n, o), n);
  return r(i), {
    ...e,
    containerQueries: i
  };
}
const Mn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, No = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Mn[e]}px)`
}, Hu = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Mn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function bt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints || No;
    return t.reduce((a, l, s) => (a[o.up(o.keys[s])] = r(t[s]), a), {});
  }
  if (typeof t == "object") {
    const o = n.breakpoints || No;
    return Object.keys(t).reduce((a, l) => {
      if (Fu(o.keys, l)) {
        const s = Gu(n.containerQueries ? n : Hu, l);
        s && (a[s] = r(t[l], l));
      } else if (Object.keys(o.values || Mn).includes(l)) {
        const s = o.up(l);
        a[s] = r(t[l], l);
      } else {
        const s = l;
        a[s] = t[s];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Ju(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, i) => {
    const o = e.up(i);
    return n[o] = {}, n;
  }, {})) || {};
}
function Fo(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function On(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Cn(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = On(e, r) || n, t && (i = t(i, n, e)), i;
}
function xe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, o = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], s = a.theme, c = On(s, n) || {};
    return bt(a, l, (d) => {
      let y = Cn(c, i, d);
      return d === y && typeof d == "string" && (y = Cn(c, i, `${t}${d === "default" ? "" : Jr(d)}`, d)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: kt
  } : {}, o.filterProps = [t], o;
}
function Zu(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const qu = {
  m: "margin",
  p: "padding"
}, zu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Go = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Yu = Zu((e) => {
  if (e.length > 2)
    if (Go[e])
      e = Go[e];
    else
      return [e];
  const [t, r] = e.split(""), n = qu[t], i = zu[r] || "";
  return Array.isArray(i) ? i.map((o) => n + o) : [n + i];
}), Pn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ln = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Uu = [...Pn, ...Ln];
function Zr(e, t, r, n) {
  const i = On(e, t, !0) ?? r;
  return typeof i == "number" || typeof i == "string" ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && typeof o != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${o}.`), typeof i == "string" ? i.startsWith("var(") && o === 0 ? 0 : i.startsWith("var(") && o === 1 ? i : `calc(${o} * ${i})` : i * o) : Array.isArray(i) ? (o) => {
    if (typeof o == "string")
      return o;
    const a = Math.abs(o);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[a];
    return o >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function zi(e) {
  return Zr(e, "spacing", 8, "spacing");
}
function qr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ku(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = qr(t, r), n), {});
}
function Xu(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const i = Yu(r), o = Ku(i, n), a = e[r];
  return bt(e, a, o);
}
function is(e, t) {
  const r = zi(e.theme);
  return Object.keys(e).map((n) => Xu(e, t, n, r)).reduce(Rr, {});
}
function ye(e) {
  return is(e, Pn);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? Pn.reduce((e, t) => (e[t] = kt, e), {}) : {};
ye.filterProps = Pn;
function ve(e) {
  return is(e, Ln);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? Ln.reduce((e, t) => (e[t] = kt, e), {}) : {};
ve.filterProps = Ln;
process.env.NODE_ENV !== "production" && Uu.reduce((e, t) => (e[t] = kt, e), {});
function jn(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((o) => {
    n[o] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, o) => t[o] ? Rr(i, t[o](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function Ke(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $e(e, t) {
  return xe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Qu = $e("border", Ke), _u = $e("borderTop", Ke), $u = $e("borderRight", Ke), ed = $e("borderBottom", Ke), td = $e("borderLeft", Ke), rd = $e("borderColor"), nd = $e("borderTopColor"), id = $e("borderRightColor"), od = $e("borderBottomColor"), ad = $e("borderLeftColor"), sd = $e("outline", Ke), ld = $e("outlineColor"), Wn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Zr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: qr(t, n)
    });
    return bt(e, e.borderRadius, r);
  }
  return null;
};
Wn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: kt
} : {};
Wn.filterProps = ["borderRadius"];
jn(Qu, _u, $u, ed, td, rd, nd, id, od, ad, Wn, sd, ld);
const Vn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Zr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: qr(t, n)
    });
    return bt(e, e.gap, r);
  }
  return null;
};
Vn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: kt
} : {};
Vn.filterProps = ["gap"];
const Dn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Zr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: qr(t, n)
    });
    return bt(e, e.columnGap, r);
  }
  return null;
};
Dn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: kt
} : {};
Dn.filterProps = ["columnGap"];
const Nn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Zr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: qr(t, n)
    });
    return bt(e, e.rowGap, r);
  }
  return null;
};
Nn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: kt
} : {};
Nn.filterProps = ["rowGap"];
const cd = xe({
  prop: "gridColumn"
}), ud = xe({
  prop: "gridRow"
}), dd = xe({
  prop: "gridAutoFlow"
}), fd = xe({
  prop: "gridAutoColumns"
}), pd = xe({
  prop: "gridAutoRows"
}), Ad = xe({
  prop: "gridTemplateColumns"
}), md = xe({
  prop: "gridTemplateRows"
}), gd = xe({
  prop: "gridTemplateAreas"
}), hd = xe({
  prop: "gridArea"
});
jn(Vn, Dn, Nn, cd, ud, dd, fd, pd, Ad, md, gd, hd);
function or(e, t) {
  return t === "grey" ? t : e;
}
const yd = xe({
  prop: "color",
  themeKey: "palette",
  transform: or
}), vd = xe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: or
}), bd = xe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: or
});
jn(yd, vd, bd);
function He(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Cd = xe({
  prop: "width",
  transform: He
}), Yi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var i, o, a, l, s;
      const n = ((a = (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : o.values) == null ? void 0 : a[r]) || Mn[r];
      return n ? ((s = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : s.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: He(r)
      };
    };
    return bt(e, e.maxWidth, t);
  }
  return null;
};
Yi.filterProps = ["maxWidth"];
const Sd = xe({
  prop: "minWidth",
  transform: He
}), xd = xe({
  prop: "height",
  transform: He
}), Ed = xe({
  prop: "maxHeight",
  transform: He
}), Id = xe({
  prop: "minHeight",
  transform: He
});
xe({
  prop: "size",
  cssProperty: "width",
  transform: He
});
xe({
  prop: "size",
  cssProperty: "height",
  transform: He
});
const wd = xe({
  prop: "boxSizing"
});
jn(Cd, Yi, Sd, xd, Ed, Id, wd);
const Fn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ke
  },
  borderTop: {
    themeKey: "borders",
    transform: Ke
  },
  borderRight: {
    themeKey: "borders",
    transform: Ke
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ke
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ke
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ke
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Wn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: or
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: or
  },
  backgroundColor: {
    themeKey: "palette",
    transform: or
  },
  // spacing
  p: {
    style: ve
  },
  pt: {
    style: ve
  },
  pr: {
    style: ve
  },
  pb: {
    style: ve
  },
  pl: {
    style: ve
  },
  px: {
    style: ve
  },
  py: {
    style: ve
  },
  padding: {
    style: ve
  },
  paddingTop: {
    style: ve
  },
  paddingRight: {
    style: ve
  },
  paddingBottom: {
    style: ve
  },
  paddingLeft: {
    style: ve
  },
  paddingX: {
    style: ve
  },
  paddingY: {
    style: ve
  },
  paddingInline: {
    style: ve
  },
  paddingInlineStart: {
    style: ve
  },
  paddingInlineEnd: {
    style: ve
  },
  paddingBlock: {
    style: ve
  },
  paddingBlockStart: {
    style: ve
  },
  paddingBlockEnd: {
    style: ve
  },
  m: {
    style: ye
  },
  mt: {
    style: ye
  },
  mr: {
    style: ye
  },
  mb: {
    style: ye
  },
  ml: {
    style: ye
  },
  mx: {
    style: ye
  },
  my: {
    style: ye
  },
  margin: {
    style: ye
  },
  marginTop: {
    style: ye
  },
  marginRight: {
    style: ye
  },
  marginBottom: {
    style: ye
  },
  marginLeft: {
    style: ye
  },
  marginX: {
    style: ye
  },
  marginY: {
    style: ye
  },
  marginInline: {
    style: ye
  },
  marginInlineStart: {
    style: ye
  },
  marginInlineEnd: {
    style: ye
  },
  marginBlock: {
    style: ye
  },
  marginBlockStart: {
    style: ye
  },
  marginBlockEnd: {
    style: ye
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Vn
  },
  rowGap: {
    style: Nn
  },
  columnGap: {
    style: Dn
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: He
  },
  maxWidth: {
    style: Yi
  },
  minWidth: {
    transform: He
  },
  height: {
    transform: He
  },
  maxHeight: {
    transform: He
  },
  minHeight: {
    transform: He
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Td(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Rd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kd() {
  function e(r, n, i, o) {
    const a = {
      [r]: n,
      theme: i
    }, l = o[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: s = r,
      themeKey: c,
      transform: u,
      style: d
    } = l;
    if (n == null)
      return null;
    if (c === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = On(i, c) || {};
    return d ? d(a) : bt(a, n, (g) => {
      let f = Cn(y, u, g);
      return g === f && typeof g == "string" && (f = Cn(y, u, `${r}${g === "default" ? "" : Jr(g)}`, g)), s === !1 ? f : {
        [s]: f
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: i = {},
      nested: o
    } = r || {};
    if (!n)
      return null;
    const a = i.unstable_sxConfig ?? Fn;
    function l(s) {
      let c = s;
      if (typeof s == "function")
        c = s(i);
      else if (typeof s != "object")
        return s;
      if (!c)
        return null;
      const u = Ju(i.breakpoints), d = Object.keys(u);
      let y = u;
      return Object.keys(c).forEach((A) => {
        const g = Rd(c[A], i);
        if (g != null)
          if (typeof g == "object")
            if (a[A])
              y = Rr(y, e(A, g, i, a));
            else {
              const f = bt({
                theme: i
              }, g, (v) => ({
                [A]: v
              }));
              Td(f, g) ? y[A] = t({
                sx: g,
                theme: i,
                nested: !0
              }) : y = Rr(y, f);
            }
          else
            y = Rr(y, e(A, g, i, a));
      }), !o && i.modularCssLayers ? {
        "@layer sx": Do(i, Fo(d, y))
      } : Do(i, Fo(d, y));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return t;
}
const sr = kd();
sr.filterProps = ["sx"];
/**
 * @mui/styled-engine v7.3.7
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Md(e, t) {
  const r = Se(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Od(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Bo = [];
function Bt(e) {
  return Bo[0] = e, Ka(Bo);
}
const Pd = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Ld(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...i
  } = e, o = Pd(t), a = Object.keys(o);
  function l(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function s(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function c(y, A) {
    const g = a.indexOf(A);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : A) - n / 100}${r})`;
  }
  function u(y) {
    return a.indexOf(y) + 1 < a.length ? c(y, a[a.indexOf(y) + 1]) : l(y);
  }
  function d(y) {
    const A = a.indexOf(y);
    return A === 0 ? l(a[1]) : A === a.length - 1 ? s(a[A]) : c(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: o,
    up: l,
    down: s,
    between: c,
    only: u,
    not: d,
    unit: r,
    ...i
  };
}
const jd = {
  borderRadius: 4
};
function os(e = 8, t = zi({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((o) => {
    const a = t(o);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Wd(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let i = r.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Ui(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: o = {},
    ...a
  } = e, l = Ld(r), s = os(i);
  let c = Ze({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: s,
    shape: {
      ...jd,
      ...o
    }
  }, a);
  return c = Bu(c), c.applyStyles = Wd, c = t.reduce((u, d) => Ze(u, d), c), c.unstable_sxConfig = {
    ...Fn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, c.unstable_sx = function(d) {
    return sr({
      sx: d,
      theme: this
    });
  }, c;
}
function Vd(e) {
  return Object.keys(e).length === 0;
}
function Dd(e = null) {
  const t = F.useContext(Qa);
  return !t || Vd(t) ? e : t;
}
const Nd = Ui();
function Fd(e = Nd) {
  return Dd(e);
}
const Ho = (e) => e, Gd = () => {
  let e = Ho;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ho;
    }
  };
}, Bd = Gd(), Hd = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Gn(e, t, r = "Mui") {
  const n = Hd[t];
  return n ? `${r}-${n}` : `${Bd.generate(e)}-${t}`;
}
function as(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = Gn(e, i, r);
  }), n;
}
function ss(e, t = "") {
  return e.displayName || e.name || t;
}
function Jo(e, t, r) {
  const n = ss(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Jd(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ss(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case bn.ForwardRef:
          return Jo(e, e.render, "ForwardRef");
        case bn.Memo:
          return Jo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ls(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Bt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Bt(i.style));
  }), n;
}
const Zd = Ui();
function fi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Gt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function qd(e) {
  return e ? (t, r) => r[e] : null;
}
function zd(e, t, r) {
  e.theme = Xd(e.theme) ? r : e.theme[t] || e.theme;
}
function fn(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((i) => fn(e, i, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let i;
    if (n.isProcessed)
      i = r ? Gt(n.style, r) : n.style;
    else {
      const {
        variants: o,
        ...a
      } = n;
      i = r ? Gt(Bt(a), r) : a;
    }
    return cs(e, n.variants, [i], r);
  }
  return n != null && n.isProcessed ? r ? Gt(Bt(n.style), r) : n.style : r ? Gt(Bt(n), r) : n;
}
function cs(e, t, r = [], n = void 0) {
  var o;
  let i;
  e: for (let a = 0; a < t.length; a += 1) {
    const l = t[a];
    if (typeof l.props == "function") {
      if (i ?? (i = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(i))
        continue;
    } else
      for (const s in l.props)
        if (e[s] !== l.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== l.props[s])
          continue e;
    typeof l.style == "function" ? (i ?? (i = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? Gt(Bt(l.style(i)), n) : l.style(i))) : r.push(n ? Gt(Bt(l.style), n) : l.style);
  }
  return r;
}
function Yd(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Zd,
    rootShouldForwardProp: n = fi,
    slotShouldForwardProp: i = fi
  } = e;
  function o(l) {
    zd(l, t, r);
  }
  return (l, s = {}) => {
    Od(l, (w) => w.filter((T) => T !== sr));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: A = qd(us(u)),
      ...g
    } = s, f = c && c.startsWith("Mui") || u ? "components" : "custom", v = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), m = y || !1;
    let h = fi;
    u === "Root" || u === "root" ? h = n : u ? h = i : Qd(l) && (h = void 0);
    const b = Md(l, {
      shouldForwardProp: h,
      label: Kd(c, u),
      ...g
    }), x = (w) => {
      if (w.__emotion_real === w)
        return w;
      if (typeof w == "function")
        return function(I) {
          return fn(I, w, I.theme.modularCssLayers ? f : void 0);
        };
      if (vt(w)) {
        const T = ls(w);
        return function(V) {
          return T.variants ? fn(V, T, V.theme.modularCssLayers ? f : void 0) : V.theme.modularCssLayers ? Gt(T.style, f) : T.style;
        };
      }
      return w;
    }, S = (...w) => {
      const T = [], I = w.map(x), V = [];
      if (T.push(o), c && A && V.push(function(R) {
        var D, W;
        const j = (W = (D = R.theme.components) == null ? void 0 : D[c]) == null ? void 0 : W.styleOverrides;
        if (!j)
          return null;
        const G = {};
        for (const J in j)
          G[J] = fn(R, j[J], R.theme.modularCssLayers ? "theme" : void 0);
        return A(R, G);
      }), c && !v && V.push(function(R) {
        var G, D;
        const k = R.theme, j = (D = (G = k == null ? void 0 : k.components) == null ? void 0 : G[c]) == null ? void 0 : D.variants;
        return j ? cs(R, j, [], R.theme.modularCssLayers ? "theme" : void 0) : null;
      }), m || V.push(sr), Array.isArray(I[0])) {
        const p = I.shift(), R = new Array(T.length).fill(""), k = new Array(V.length).fill("");
        let j;
        j = [...R, ...p, ...k], j.raw = [...R, ...p.raw, ...k], T.unshift(j);
      }
      const P = [...T, ...I, ...V], M = b(...P);
      return l.muiName && (M.muiName = l.muiName), process.env.NODE_ENV !== "production" && (M.displayName = Ud(c, u, l)), M;
    };
    return b.withConfig && (S.withConfig = b.withConfig), S;
  };
}
function Ud(e, t, r) {
  return e ? `${e}${Jr(t || "")}` : `Styled(${Jd(r)})`;
}
function Kd(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${us(t || "Root")}`), r;
}
function Xd(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Qd(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function us(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Ti(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const o = i;
      if (o === "components" || o === "slots")
        n[o] = {
          ...e[o],
          ...n[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const a = e[o], l = t[o];
        if (!l)
          n[o] = a || {};
        else if (!a)
          n[o] = l;
        else {
          n[o] = {
            ...l
          };
          for (const s in a)
            if (Object.prototype.hasOwnProperty.call(a, s)) {
              const c = s;
              n[o][c] = Ti(a[c], l[c], r);
            }
        }
      } else o === "className" && r && t.className ? n.className = Vr(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : o === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
const Dr = typeof window < "u" ? F.useLayoutEffect : F.useEffect;
function _d(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Ki(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), _d(e, t, r);
}
function $d(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Rt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Rt($d(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Tt(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Tt(10, i));
  } else
    n = n.split(",");
  return n = n.map((o) => parseFloat(o)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const ef = (e) => {
  const t = Rt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Er = (e, t) => {
  try {
    return ef(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Bn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ds(e) {
  e = Rt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, o = n * Math.min(i, 1 - i), a = (c, u = (c + r / 30) % 12) => i - o * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let l = "rgb";
  const s = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", s.push(t[3])), Bn({
    type: l,
    values: s
  });
}
function Ri(e) {
  e = Rt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Rt(ds(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Zo(e, t) {
  const r = Ri(e), n = Ri(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function fs(e, t) {
  return e = Rt(e), t = Ki(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Bn(e);
}
function Dt(e, t, r) {
  try {
    return fs(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Hn(e, t) {
  if (e = Rt(e), t = Ki(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Bn(e);
}
function ue(e, t, r) {
  try {
    return Hn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Jn(e, t) {
  if (e = Rt(e), t = Ki(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Bn(e);
}
function de(e, t, r) {
  try {
    return Jn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function tf(e, t = 0.15) {
  return Ri(e) > 0.5 ? Hn(e, t) : Jn(e, t);
}
function rn(e, t, r) {
  try {
    return tf(e, t);
  } catch {
    return e;
  }
}
const rf = "exact-prop: ​";
function nf(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [rf]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const of = /* @__PURE__ */ F.createContext(void 0);
process.env.NODE_ENV !== "production" && (C.node, C.object);
function af(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const i = t.components[r];
  return i.defaultProps ? Ti(i.defaultProps, n, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? Ti(i, n, t.components.mergeClassNameAndStyle) : n;
}
function sf({
  props: e,
  name: t
}) {
  const r = F.useContext(of);
  return af({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let qo = 0;
function lf(e) {
  const [t, r] = F.useState(e), n = e || t;
  return F.useEffect(() => {
    t == null && (qo += 1, r(`mui-${qo}`));
  }, [t]), n;
}
const cf = {
  ...F
}, zo = cf.useId;
function uf(e) {
  if (zo !== void 0) {
    const t = zo();
    return e ?? t;
  }
  return lf(e);
}
const Yo = {
  theme: void 0
};
function df(e) {
  let t, r;
  return function(i) {
    let o = t;
    return (o === void 0 || i.theme !== r) && (Yo.theme = i.theme, o = ls(e(Yo)), t = o, r = i.theme), o;
  };
}
function ff(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const i = n[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...n.slice(1))})` : `, ${i}`;
  }
  return (n, ...i) => `var(--${e ? `${e}-` : ""}${n}${t(...i)})`;
}
const Uo = (e, t, r, n = []) => {
  let i = e;
  t.forEach((o, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(o)] = r : i && typeof i == "object" && (i[o] = r) : i && typeof i == "object" && (i[o] || (i[o] = n.includes(o) ? [] : {}), i = i[o]);
  });
}, pf = (e, t, r) => {
  function n(i, o = [], a = []) {
    Object.entries(i).forEach(([l, s]) => {
      (!r || r && !r([...o, l])) && s != null && (typeof s == "object" && Object.keys(s).length > 0 ? n(s, [...o, l], Array.isArray(s) ? [...a, l] : a) : t([...o, l], s, a));
    });
  }
  n(e);
}, Af = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function pi(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, i = {}, o = {}, a = {};
  return pf(
    e,
    (l, s, c) => {
      if ((typeof s == "string" || typeof s == "number") && (!n || !n(l, s))) {
        const u = `--${r ? `${r}-` : ""}${l.join("-")}`, d = Af(l, s);
        Object.assign(i, {
          [u]: d
        }), Uo(o, l, `var(${u})`, c), Uo(a, l, `var(${u}, ${d})`, c);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: o,
    varsWithDefaults: a
  };
}
function mf(e, t = {}) {
  const {
    getSelector: r = m,
    disableCssColorScheme: n,
    colorSchemeSelector: i,
    enableContrastVars: o
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: s = "light",
    ...c
  } = e, {
    vars: u,
    css: d,
    varsWithDefaults: y
  } = pi(c, t);
  let A = y;
  const g = {}, {
    [s]: f,
    ...v
  } = a;
  if (Object.entries(v || {}).forEach(([x, S]) => {
    const {
      vars: w,
      css: T,
      varsWithDefaults: I
    } = pi(S, t);
    A = Ze(A, I), g[x] = {
      css: T,
      vars: w
    };
  }), f) {
    const {
      css: x,
      vars: S,
      varsWithDefaults: w
    } = pi(f, t);
    A = Ze(A, w), g[s] = {
      css: x,
      vars: S
    };
  }
  function m(x, S) {
    var T, I;
    let w = i;
    if (i === "class" && (w = ".%s"), i === "data" && (w = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (w = `[${i}="%s"]`), x) {
      if (w === "media")
        return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = (T = a[x]) == null ? void 0 : T.palette) == null ? void 0 : I.mode) || x})`]: {
            ":root": S
          }
        };
      if (w)
        return e.defaultColorScheme === x ? `:root, ${w.replace("%s", String(x))}` : w.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: A,
    generateThemeVars: () => {
      let x = {
        ...u
      };
      return Object.entries(g).forEach(([, {
        vars: S
      }]) => {
        x = Ze(x, S);
      }), x;
    },
    generateStyleSheets: () => {
      var V, P;
      const x = [], S = e.defaultColorScheme || "light";
      function w(M, p) {
        Object.keys(p).length && x.push(typeof M == "string" ? {
          [M]: {
            ...p
          }
        } : M);
      }
      w(r(void 0, {
        ...d
      }), d);
      const {
        [S]: T,
        ...I
      } = g;
      if (T) {
        const {
          css: M
        } = T, p = (P = (V = a[S]) == null ? void 0 : V.palette) == null ? void 0 : P.mode, R = !n && p ? {
          colorScheme: p,
          ...M
        } : {
          ...M
        };
        w(r(S, {
          ...R
        }), R);
      }
      return Object.entries(I).forEach(([M, {
        css: p
      }]) => {
        var j, G;
        const R = (G = (j = a[M]) == null ? void 0 : j.palette) == null ? void 0 : G.mode, k = !n && R ? {
          colorScheme: R,
          ...p
        } : {
          ...p
        };
        w(r(M, {
          ...k
        }), k);
      }), o && x.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), x;
    }
  };
}
function gf(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Nr = {
  black: "#000",
  white: "#fff"
}, hf = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Xt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Qt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, vr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, _t = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, $t = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, er = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function ps() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Nr.white,
      default: Nr.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const As = ps();
function ms() {
  return {
    text: {
      primary: Nr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Nr.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const ki = ms();
function Ko(e, t, r, n) {
  const i = n.light || n, o = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Jn(e.main, i) : t === "dark" && (e.dark = Hn(e.main, o)));
}
function Xo(e, t, r, n, i) {
  const o = i.light || i, a = i.dark || i * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(o * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function yf(e = "light") {
  return e === "dark" ? {
    main: _t[200],
    light: _t[50],
    dark: _t[400]
  } : {
    main: _t[700],
    light: _t[400],
    dark: _t[800]
  };
}
function vf(e = "light") {
  return e === "dark" ? {
    main: Xt[200],
    light: Xt[50],
    dark: Xt[400]
  } : {
    main: Xt[500],
    light: Xt[300],
    dark: Xt[700]
  };
}
function bf(e = "light") {
  return e === "dark" ? {
    main: Qt[500],
    light: Qt[300],
    dark: Qt[700]
  } : {
    main: Qt[700],
    light: Qt[400],
    dark: Qt[800]
  };
}
function Cf(e = "light") {
  return e === "dark" ? {
    main: $t[400],
    light: $t[300],
    dark: $t[700]
  } : {
    main: $t[700],
    light: $t[500],
    dark: $t[900]
  };
}
function Sf(e = "light") {
  return e === "dark" ? {
    main: er[400],
    light: er[300],
    dark: er[700]
  } : {
    main: er[800],
    light: er[500],
    dark: er[900]
  };
}
function xf(e = "light") {
  return e === "dark" ? {
    main: vr[400],
    light: vr[300],
    dark: vr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: vr[500],
    dark: vr[900]
  };
}
function Ef(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Xi(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: i,
    ...o
  } = e, a = e.primary || yf(t), l = e.secondary || vf(t), s = e.error || bf(t), c = e.info || Cf(t), u = e.success || Sf(t), d = e.warning || xf(t);
  function y(v) {
    if (i)
      return Ef(v);
    const m = Zo(v, ki.text.primary) >= r ? ki.text.primary : As.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const h = Zo(v, m);
      h < 3 && console.error([`MUI: The contrast ratio of ${h}:1 for ${m} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const A = ({
    color: v,
    name: m,
    mainShade: h = 500,
    lightShade: b = 300,
    darkShade: x = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[h] && (v.main = v[h]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${h}\` property.` : Tt(11, m ? ` (${m})` : "", h));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Tt(12, m ? ` (${m})` : "", JSON.stringify(v.main)));
    return i ? (Xo(i, v, "light", b, n), Xo(i, v, "dark", x, n)) : (Ko(v, "light", b, n), Ko(v, "dark", x, n)), v.contrastText || (v.contrastText = y(v.main)), v;
  };
  let g;
  return t === "light" ? g = ps() : t === "dark" && (g = ms()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ze({
    // A collection of common colors.
    common: {
      ...Nr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: A({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: A({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: A({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: A({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: A({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: A({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: hf,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: A,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...g
  }, o);
}
function If(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [i, o] = n;
    typeof o == "object" && (t[i] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
  }), t;
}
function wf(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Tf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Qo = {
  textTransform: "uppercase"
}, _o = '"Roboto", "Helvetica", "Arial", sans-serif';
function Rf(e, t) {
  const {
    fontFamily: r = _o,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: o = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: s = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: u,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof s != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, A = u || ((v) => `${v / s * y}rem`), g = (v, m, h, b, x) => ({
    fontFamily: r,
    fontWeight: v,
    fontSize: A(m),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === _o ? {
      letterSpacing: `${Tf(b / m)}em`
    } : {},
    ...x,
    ...c
  }), f = {
    h1: g(i, 96, 1.167, -1.5),
    h2: g(i, 60, 1.2, -0.5),
    h3: g(o, 48, 1.167, 0),
    h4: g(o, 34, 1.235, 0.25),
    h5: g(o, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(o, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(o, 16, 1.5, 0.15),
    body2: g(o, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, Qo),
    caption: g(o, 12, 1.66, 0.4),
    overline: g(o, 12, 2.66, 1, Qo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ze({
    htmlFontSize: s,
    pxToRem: A,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: i,
    fontWeightRegular: o,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...f
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const kf = 0.2, Mf = 0.14, Of = 0.12;
function ge(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${kf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Mf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Of})`].join(",");
}
const Pf = ["none", ge(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ge(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ge(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ge(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ge(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ge(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ge(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ge(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ge(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ge(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ge(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ge(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ge(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ge(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ge(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ge(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ge(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ge(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ge(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ge(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ge(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ge(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ge(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ge(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Lf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, jf = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function $o(e) {
  return `${Math.round(e)}ms`;
}
function Wf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Vf(e) {
  const t = {
    ...Lf,
    ...e.easing
  }, r = {
    ...jf,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Wf,
    create: (i = ["all"], o = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: s = 0,
        ...c
      } = o;
      if (process.env.NODE_ENV !== "production") {
        const u = (y) => typeof y == "string", d = (y) => !Number.isNaN(parseFloat(y));
        !u(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !u(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), u(l) || console.error('MUI: Argument "easing" must be a string.'), !d(s) && !u(s) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof o != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((u) => `${u} ${typeof a == "string" ? a : $o(a)} ${l} ${typeof s == "string" ? s : $o(s)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Df = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Nf(e) {
  return vt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function gs(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const i = Object.entries(n);
    for (let o = 0; o < i.length; o++) {
      const [a, l] = i[o];
      !Nf(l) || a.startsWith("unstable_") ? delete n[a] : vt(l) && (n[a] = {
        ...l
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ea(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Ff = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function Gf(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : fs(t, Ff(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${ea(r)})` : Jn(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${ea(r)})` : Hn(t, r);
    }
  });
}
function Mi(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: i,
    palette: o = {},
    transitions: a = {},
    typography: l = {},
    shape: s,
    colorSpace: c,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Tt(20));
  const d = Xi({
    ...o,
    colorSpace: c
  }), y = Ui(e);
  let A = Ze(y, {
    mixins: wf(y.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Pf.slice(),
    typography: Rf(d, l),
    transitions: Vf(a),
    zIndex: {
      ...Df
    }
  });
  if (A = Ze(A, u), A = t.reduce((g, f) => Ze(g, f), A), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (v, m) => {
      let h;
      for (h in v) {
        const b = v[h];
        if (g.includes(h) && Object.keys(b).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = Gn("", h);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${h}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: b
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[h] = {};
        }
      }
    };
    Object.keys(A.components).forEach((v) => {
      const m = A.components[v].styleOverrides;
      m && v.startsWith("Mui") && f(m, v);
    });
  }
  return A.unstable_sxConfig = {
    ...Fn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, A.unstable_sx = function(f) {
    return sr({
      sx: f,
      theme: this
    });
  }, A.toRuntimeSource = gs, Gf(A), A;
}
function Bf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Hf = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Bf(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function hs(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ys(e) {
  return e === "dark" ? Hf : [];
}
function Jf(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: i,
    ...o
  } = e, a = Xi({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...hs(a.mode),
      ...r
    },
    overlays: n || ys(a.mode),
    ...o
  };
}
function Zf(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const qf = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], zf = (e) => (t, r) => {
  const n = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let o = i;
  if (i === "class" && (o = ".%s"), i === "data" && (o = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (o = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return qf(e.cssVarPrefix).forEach((l) => {
        a[l] = r[l], delete r[l];
      }), o === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : o ? {
        [o.replace("%s", t)]: a,
        [`${n}, ${o.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (o && o !== "media")
      return `${n}, ${o.replace("%s", String(t))}`;
  } else if (t) {
    if (o === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (o)
      return o.replace("%s", String(t));
  }
  return n;
};
function Yf(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function L(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ir(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ds(e);
}
function ht(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Er(Ir(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Uf(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const nt = (e) => {
  try {
    return e();
  } catch {
  }
}, Kf = (e = "mui") => ff(e);
function Ai(e, t, r, n, i) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const o = i === "dark" ? "dark" : "light";
  if (!n) {
    t[i] = Jf({
      ...r,
      palette: {
        mode: o,
        ...r == null ? void 0 : r.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...l
  } = Mi({
    ...n,
    palette: {
      mode: o,
      ...r == null ? void 0 : r.palette
    },
    colorSpace: e
  });
  return t[i] = {
    ...r,
    palette: a,
    opacity: {
      ...hs(o),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || ys(o)
  }, l;
}
function Xf(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: i = !1,
    cssVarPrefix: o = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = Zf,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, d = Object.keys(r)[0], y = n || (r.light && d !== "light" ? "light" : d), A = Kf(o), {
    [y]: g,
    light: f,
    dark: v,
    ...m
  } = r, h = {
    ...m
  };
  let b = g;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (b = !0), !b)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${y}\` option is either missing or invalid.` : Tt(21, y));
  let x;
  a && (x = "oklch");
  const S = Ai(x, h, b, u, y);
  f && !h.light && Ai(x, h, f, void 0, "light"), v && !h.dark && Ai(x, h, v, void 0, "dark");
  let w = {
    defaultColorScheme: y,
    ...S,
    cssVarPrefix: o,
    colorSchemeSelector: s,
    rootSelector: c,
    getCssVar: A,
    colorSchemes: h,
    font: {
      ...If(S.typography),
      ...S.font
    },
    spacing: Uf(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach((M) => {
    const p = w.colorSchemes[M].palette, R = (j) => {
      const G = j.split("-"), D = G[1], W = G[2];
      return A(j, p[D][W]);
    };
    p.mode === "light" && (L(p.common, "background", "#fff"), L(p.common, "onBackground", "#000")), p.mode === "dark" && (L(p.common, "background", "#000"), L(p.common, "onBackground", "#fff"));
    function k(j, G, D) {
      if (x) {
        let W;
        return j === Dt && (W = `transparent ${((1 - D) * 100).toFixed(0)}%`), j === ue && (W = `#000 ${(D * 100).toFixed(0)}%`), j === de && (W = `#fff ${(D * 100).toFixed(0)}%`), `color-mix(in ${x}, ${G}, ${W})`;
      }
      return j(G, D);
    }
    if (Yf(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      L(p.Alert, "errorColor", k(ue, p.error.light, 0.6)), L(p.Alert, "infoColor", k(ue, p.info.light, 0.6)), L(p.Alert, "successColor", k(ue, p.success.light, 0.6)), L(p.Alert, "warningColor", k(ue, p.warning.light, 0.6)), L(p.Alert, "errorFilledBg", R("palette-error-main")), L(p.Alert, "infoFilledBg", R("palette-info-main")), L(p.Alert, "successFilledBg", R("palette-success-main")), L(p.Alert, "warningFilledBg", R("palette-warning-main")), L(p.Alert, "errorFilledColor", nt(() => p.getContrastText(p.error.main))), L(p.Alert, "infoFilledColor", nt(() => p.getContrastText(p.info.main))), L(p.Alert, "successFilledColor", nt(() => p.getContrastText(p.success.main))), L(p.Alert, "warningFilledColor", nt(() => p.getContrastText(p.warning.main))), L(p.Alert, "errorStandardBg", k(de, p.error.light, 0.9)), L(p.Alert, "infoStandardBg", k(de, p.info.light, 0.9)), L(p.Alert, "successStandardBg", k(de, p.success.light, 0.9)), L(p.Alert, "warningStandardBg", k(de, p.warning.light, 0.9)), L(p.Alert, "errorIconColor", R("palette-error-main")), L(p.Alert, "infoIconColor", R("palette-info-main")), L(p.Alert, "successIconColor", R("palette-success-main")), L(p.Alert, "warningIconColor", R("palette-warning-main")), L(p.AppBar, "defaultBg", R("palette-grey-100")), L(p.Avatar, "defaultBg", R("palette-grey-400")), L(p.Button, "inheritContainedBg", R("palette-grey-300")), L(p.Button, "inheritContainedHoverBg", R("palette-grey-A100")), L(p.Chip, "defaultBorder", R("palette-grey-400")), L(p.Chip, "defaultAvatarColor", R("palette-grey-700")), L(p.Chip, "defaultIconColor", R("palette-grey-700")), L(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), L(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), L(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), L(p.LinearProgress, "primaryBg", k(de, p.primary.main, 0.62)), L(p.LinearProgress, "secondaryBg", k(de, p.secondary.main, 0.62)), L(p.LinearProgress, "errorBg", k(de, p.error.main, 0.62)), L(p.LinearProgress, "infoBg", k(de, p.info.main, 0.62)), L(p.LinearProgress, "successBg", k(de, p.success.main, 0.62)), L(p.LinearProgress, "warningBg", k(de, p.warning.main, 0.62)), L(p.Skeleton, "bg", x ? k(Dt, p.text.primary, 0.11) : `rgba(${R("palette-text-primaryChannel")} / 0.11)`), L(p.Slider, "primaryTrack", k(de, p.primary.main, 0.62)), L(p.Slider, "secondaryTrack", k(de, p.secondary.main, 0.62)), L(p.Slider, "errorTrack", k(de, p.error.main, 0.62)), L(p.Slider, "infoTrack", k(de, p.info.main, 0.62)), L(p.Slider, "successTrack", k(de, p.success.main, 0.62)), L(p.Slider, "warningTrack", k(de, p.warning.main, 0.62));
      const j = x ? k(ue, p.background.default, 0.6825) : rn(p.background.default, 0.8);
      L(p.SnackbarContent, "bg", j), L(p.SnackbarContent, "color", nt(() => x ? ki.text.primary : p.getContrastText(j))), L(p.SpeedDialAction, "fabHoverBg", rn(p.background.paper, 0.15)), L(p.StepConnector, "border", R("palette-grey-400")), L(p.StepContent, "border", R("palette-grey-400")), L(p.Switch, "defaultColor", R("palette-common-white")), L(p.Switch, "defaultDisabledColor", R("palette-grey-100")), L(p.Switch, "primaryDisabledColor", k(de, p.primary.main, 0.62)), L(p.Switch, "secondaryDisabledColor", k(de, p.secondary.main, 0.62)), L(p.Switch, "errorDisabledColor", k(de, p.error.main, 0.62)), L(p.Switch, "infoDisabledColor", k(de, p.info.main, 0.62)), L(p.Switch, "successDisabledColor", k(de, p.success.main, 0.62)), L(p.Switch, "warningDisabledColor", k(de, p.warning.main, 0.62)), L(p.TableCell, "border", k(de, k(Dt, p.divider, 1), 0.88)), L(p.Tooltip, "bg", k(Dt, p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      L(p.Alert, "errorColor", k(de, p.error.light, 0.6)), L(p.Alert, "infoColor", k(de, p.info.light, 0.6)), L(p.Alert, "successColor", k(de, p.success.light, 0.6)), L(p.Alert, "warningColor", k(de, p.warning.light, 0.6)), L(p.Alert, "errorFilledBg", R("palette-error-dark")), L(p.Alert, "infoFilledBg", R("palette-info-dark")), L(p.Alert, "successFilledBg", R("palette-success-dark")), L(p.Alert, "warningFilledBg", R("palette-warning-dark")), L(p.Alert, "errorFilledColor", nt(() => p.getContrastText(p.error.dark))), L(p.Alert, "infoFilledColor", nt(() => p.getContrastText(p.info.dark))), L(p.Alert, "successFilledColor", nt(() => p.getContrastText(p.success.dark))), L(p.Alert, "warningFilledColor", nt(() => p.getContrastText(p.warning.dark))), L(p.Alert, "errorStandardBg", k(ue, p.error.light, 0.9)), L(p.Alert, "infoStandardBg", k(ue, p.info.light, 0.9)), L(p.Alert, "successStandardBg", k(ue, p.success.light, 0.9)), L(p.Alert, "warningStandardBg", k(ue, p.warning.light, 0.9)), L(p.Alert, "errorIconColor", R("palette-error-main")), L(p.Alert, "infoIconColor", R("palette-info-main")), L(p.Alert, "successIconColor", R("palette-success-main")), L(p.Alert, "warningIconColor", R("palette-warning-main")), L(p.AppBar, "defaultBg", R("palette-grey-900")), L(p.AppBar, "darkBg", R("palette-background-paper")), L(p.AppBar, "darkColor", R("palette-text-primary")), L(p.Avatar, "defaultBg", R("palette-grey-600")), L(p.Button, "inheritContainedBg", R("palette-grey-800")), L(p.Button, "inheritContainedHoverBg", R("palette-grey-700")), L(p.Chip, "defaultBorder", R("palette-grey-700")), L(p.Chip, "defaultAvatarColor", R("palette-grey-300")), L(p.Chip, "defaultIconColor", R("palette-grey-300")), L(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), L(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), L(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), L(p.LinearProgress, "primaryBg", k(ue, p.primary.main, 0.5)), L(p.LinearProgress, "secondaryBg", k(ue, p.secondary.main, 0.5)), L(p.LinearProgress, "errorBg", k(ue, p.error.main, 0.5)), L(p.LinearProgress, "infoBg", k(ue, p.info.main, 0.5)), L(p.LinearProgress, "successBg", k(ue, p.success.main, 0.5)), L(p.LinearProgress, "warningBg", k(ue, p.warning.main, 0.5)), L(p.Skeleton, "bg", x ? k(Dt, p.text.primary, 0.13) : `rgba(${R("palette-text-primaryChannel")} / 0.13)`), L(p.Slider, "primaryTrack", k(ue, p.primary.main, 0.5)), L(p.Slider, "secondaryTrack", k(ue, p.secondary.main, 0.5)), L(p.Slider, "errorTrack", k(ue, p.error.main, 0.5)), L(p.Slider, "infoTrack", k(ue, p.info.main, 0.5)), L(p.Slider, "successTrack", k(ue, p.success.main, 0.5)), L(p.Slider, "warningTrack", k(ue, p.warning.main, 0.5));
      const j = x ? k(de, p.background.default, 0.985) : rn(p.background.default, 0.98);
      L(p.SnackbarContent, "bg", j), L(p.SnackbarContent, "color", nt(() => x ? As.text.primary : p.getContrastText(j))), L(p.SpeedDialAction, "fabHoverBg", rn(p.background.paper, 0.15)), L(p.StepConnector, "border", R("palette-grey-600")), L(p.StepContent, "border", R("palette-grey-600")), L(p.Switch, "defaultColor", R("palette-grey-300")), L(p.Switch, "defaultDisabledColor", R("palette-grey-600")), L(p.Switch, "primaryDisabledColor", k(ue, p.primary.main, 0.55)), L(p.Switch, "secondaryDisabledColor", k(ue, p.secondary.main, 0.55)), L(p.Switch, "errorDisabledColor", k(ue, p.error.main, 0.55)), L(p.Switch, "infoDisabledColor", k(ue, p.info.main, 0.55)), L(p.Switch, "successDisabledColor", k(ue, p.success.main, 0.55)), L(p.Switch, "warningDisabledColor", k(ue, p.warning.main, 0.55)), L(p.TableCell, "border", k(ue, k(Dt, p.divider, 1), 0.68)), L(p.Tooltip, "bg", k(Dt, p.grey[700], 0.92));
    }
    ht(p.background, "default"), ht(p.background, "paper"), ht(p.common, "background"), ht(p.common, "onBackground"), ht(p, "divider"), Object.keys(p).forEach((j) => {
      const G = p[j];
      j !== "tonalOffset" && G && typeof G == "object" && (G.main && L(p[j], "mainChannel", Er(Ir(G.main))), G.light && L(p[j], "lightChannel", Er(Ir(G.light))), G.dark && L(p[j], "darkChannel", Er(Ir(G.dark))), G.contrastText && L(p[j], "contrastTextChannel", Er(Ir(G.contrastText))), j === "text" && (ht(p[j], "primary"), ht(p[j], "secondary")), j === "action" && (G.active && ht(p[j], "active"), G.selected && ht(p[j], "selected")));
    });
  }), w = t.reduce((M, p) => Ze(M, p), w);
  const T = {
    prefix: o,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: zf(w),
    enableContrastVars: a
  }, {
    vars: I,
    generateThemeVars: V,
    generateStyleSheets: P
  } = mf(w, T);
  return w.vars = I, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([M, p]) => {
    w[M] = p;
  }), w.generateThemeVars = V, w.generateStyleSheets = P, w.generateSpacing = function() {
    return os(u.spacing, zi(this));
  }, w.getColorSchemeSelector = gf(s), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = l, w.unstable_sxConfig = {
    ...Fn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(p) {
    return sr({
      sx: p,
      theme: this
    });
  }, w.toRuntimeSource = gs, w;
}
function ta(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Xi({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Qf(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: o = r == null ? void 0 : r.mode,
    ...a
  } = e, l = o || "light", s = i == null ? void 0 : i[l], c = {
    ...i,
    ...r ? {
      [l]: {
        ...typeof s != "boolean" && s,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Mi(e, ...t);
    let u = r;
    "palette" in e || c[l] && (c[l] !== !0 ? u = c[l].palette : l === "dark" && (u = {
      mode: "dark"
    }));
    const d = Mi({
      ...e,
      palette: u
    }, ...t);
    return d.defaultColorScheme = l, d.colorSchemes = c, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: d.palette
    }, ta(d, "dark", c.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: d.palette
    }, ta(d, "light", c.light)), d;
  }
  return !r && !("light" in c) && l === "light" && (c.light = !0), Xf({
    ...a,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const vs = Qf(), bs = "$$material";
function Cs() {
  const e = Fd(vs);
  return process.env.NODE_ENV !== "production" && F.useDebugValue(e), e[bs] || e;
}
function _f(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const $f = (e) => _f(e) && e !== "classes", Zn = Yd({
  themeId: bs,
  defaultTheme: vs,
  rootShouldForwardProp: $f
}), Qi = df;
process.env.NODE_ENV !== "production" && (C.node, C.object.isRequired);
function Ss(e) {
  return sf(e);
}
function ep(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Oi(e, t) {
  return Oi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Oi(e, t);
}
function tp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Oi(e, t);
}
const ra = {
  disabled: !1
};
var rp = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.shape({
  enter: C.number,
  exit: C.number,
  appear: C.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && C.oneOfType([C.string, C.shape({
  enter: C.string,
  exit: C.string,
  active: C.string
}), C.shape({
  enter: C.string,
  enterDone: C.string,
  enterActive: C.string,
  exit: C.string,
  exitDone: C.string,
  exitActive: C.string
})]);
const xs = me.createContext(null);
var np = function(t) {
  return t.scrollTop;
}, wr = "unmounted", Nt = "exited", Ft = "entering", rr = "entered", Pi = "exiting", St = /* @__PURE__ */ function(e) {
  tp(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var a = i, l = a && !a.isMounting ? n.enter : n.appear, s;
    return o.appearStatus = null, n.in ? l ? (s = Nt, o.appearStatus = Ft) : s = rr : n.unmountOnExit || n.mountOnEnter ? s = wr : s = Nt, o.state = {
      status: s
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var a = i.in;
    return a && o.status === wr ? {
      status: Nt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Ft && a !== rr && (o = Ft) : (a === Ft || a === rr) && (o = Pi);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, o, a, l;
    return o = a = l = i, i != null && typeof i != "number" && (o = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: o,
      enter: a,
      appear: l
    };
  }, r.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === Ft) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : $r.findDOMNode(this);
          a && np(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Nt && this.setState({
      status: wr
    });
  }, r.performEnter = function(i) {
    var o = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, s = this.props.nodeRef ? [l] : [$r.findDOMNode(this), l], c = s[0], u = s[1], d = this.getTimeouts(), y = l ? d.appear : d.enter;
    if (!i && !a || ra.disabled) {
      this.safeSetState({
        status: rr
      }, function() {
        o.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: Ft
    }, function() {
      o.props.onEntering(c, u), o.onTransitionEnd(y, function() {
        o.safeSetState({
          status: rr
        }, function() {
          o.props.onEntered(c, u);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, o = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : $r.findDOMNode(this);
    if (!o || ra.disabled) {
      this.safeSetState({
        status: Nt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Pi
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Nt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, r.setNextCallback = function(i) {
    var o = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, o.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var a = this.props.nodeRef ? this.props.nodeRef.current : $r.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], c = s[0], u = s[1];
      this.props.addEndListener(c, u);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === wr)
      return null;
    var o = this.props, a = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var l = ep(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ me.createElement(xs.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : me.cloneElement(me.Children.only(a), l))
    );
  }, t;
}(me.Component);
St.contextType = xs;
St.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: C.shape({
    current: typeof Element > "u" ? C.any : function(e, t, r, n, i, o) {
      var a = e[t];
      return C.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, i, o);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: C.oneOfType([C.func.isRequired, C.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: C.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: C.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: C.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: C.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: C.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: C.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = rp;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      i[o - 1] = arguments[o];
    return r.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: C.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: C.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: C.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: C.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: C.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: C.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: C.func
} : {};
function tr() {
}
St.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: tr,
  onEntering: tr,
  onEntered: tr,
  onExit: tr,
  onExiting: tr,
  onExited: tr
};
St.UNMOUNTED = wr;
St.EXITED = Nt;
St.ENTERING = Ft;
St.ENTERED = rr;
St.EXITING = Pi;
const ip = (e) => e.scrollTop;
function na(e, t) {
  const {
    timeout: r,
    easing: n,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: i.transitionDelay
  };
}
function Zt(...e) {
  const t = F.useRef(void 0), r = F.useCallback((n) => {
    const i = e.map((o) => {
      if (o == null)
        return null;
      if (typeof o == "function") {
        const a = o, l = a(n);
        return typeof l == "function" ? l : () => {
          a(null);
        };
      }
      return o.current = n, () => {
        o.current = null;
      };
    });
    return () => {
      i.forEach((o) => o == null ? void 0 : o());
    };
  }, e);
  return F.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
function Li(e) {
  return `scale(${e}, ${e ** 2})`;
}
const op = {
  entering: {
    opacity: 1,
    transform: Li(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, mi = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Sn = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: i = !0,
    children: o,
    easing: a,
    in: l,
    onEnter: s,
    onEntered: c,
    onEntering: u,
    onExit: d,
    onExited: y,
    onExiting: A,
    style: g,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = St,
    ...m
  } = t, h = xr(), b = F.useRef(), x = Cs(), S = F.useRef(null), w = Zt(S, qi(o), r), T = (j) => (G) => {
    if (j) {
      const D = S.current;
      G === void 0 ? j(D) : j(D, G);
    }
  }, I = T(u), V = T((j, G) => {
    ip(j);
    const {
      duration: D,
      delay: W,
      easing: J
    } = na({
      style: g,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let O;
    f === "auto" ? (O = x.transitions.getAutoHeightDuration(j.clientHeight), b.current = O) : O = D, j.style.transition = [x.transitions.create("opacity", {
      duration: O,
      delay: W
    }), x.transitions.create("transform", {
      duration: mi ? O : O * 0.666,
      delay: W,
      easing: J
    })].join(","), s && s(j, G);
  }), P = T(c), M = T(A), p = T((j) => {
    const {
      duration: G,
      delay: D,
      easing: W
    } = na({
      style: g,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let J;
    f === "auto" ? (J = x.transitions.getAutoHeightDuration(j.clientHeight), b.current = J) : J = G, j.style.transition = [x.transitions.create("opacity", {
      duration: J,
      delay: D
    }), x.transitions.create("transform", {
      duration: mi ? J : J * 0.666,
      delay: mi ? D : D || J * 0.333,
      easing: W
    })].join(","), j.style.opacity = 0, j.style.transform = Li(0.75), d && d(j);
  }), R = T(y), k = (j) => {
    f === "auto" && h.start(b.current || 0, j), n && n(S.current, j);
  };
  return /* @__PURE__ */ X.jsx(v, {
    appear: i,
    in: l,
    nodeRef: S,
    onEnter: V,
    onEntered: P,
    onEntering: I,
    onExit: p,
    onExited: R,
    onExiting: M,
    addEndListener: k,
    timeout: f === "auto" ? null : f,
    ...m,
    children: (j, {
      ownerState: G,
      ...D
    }) => /* @__PURE__ */ F.cloneElement(o, {
      style: {
        opacity: 0,
        transform: Li(0.75),
        visibility: j === "exited" && !l ? "hidden" : void 0,
        ...op[j],
        ...g,
        ...o.props.style
      },
      ref: w,
      ...D
    })
  });
});
process.env.NODE_ENV !== "production" && (Sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: C.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: C.bool,
  /**
   * A single child content element.
   */
  children: Zi.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: C.oneOfType([C.shape({
    enter: C.string,
    exit: C.string
  }), C.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: C.bool,
  /**
   * @ignore
   */
  onEnter: C.func,
  /**
   * @ignore
   */
  onEntered: C.func,
  /**
   * @ignore
   */
  onEntering: C.func,
  /**
   * @ignore
   */
  onExit: C.func,
  /**
   * @ignore
   */
  onExited: C.func,
  /**
   * @ignore
   */
  onExiting: C.func,
  /**
   * @ignore
   */
  style: C.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: C.oneOfType([C.oneOf(["auto"]), C.number, C.shape({
    appear: C.number,
    enter: C.number,
    exit: C.number
  })])
});
Sn && (Sn.muiSupportAuto = !0);
const Es = C.oneOfType([C.func, C.object]);
function Fr(e, t, r, n, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const o = e[t], a = i || t;
  return o == null ? null : o && o.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
function ia(e) {
  return e && e.ownerDocument || document;
}
var De = "top", Qe = "bottom", _e = "right", Ne = "left", _i = "auto", zr = [De, Qe, _e, Ne], lr = "start", Gr = "end", ap = "clippingParents", Is = "viewport", br = "popper", sp = "reference", oa = /* @__PURE__ */ zr.reduce(function(e, t) {
  return e.concat([t + "-" + lr, t + "-" + Gr]);
}, []), ws = /* @__PURE__ */ [].concat(zr, [_i]).reduce(function(e, t) {
  return e.concat([t, t + "-" + lr, t + "-" + Gr]);
}, []), lp = "beforeRead", cp = "read", up = "afterRead", dp = "beforeMain", fp = "main", pp = "afterMain", Ap = "beforeWrite", mp = "write", gp = "afterWrite", hp = [lp, cp, up, dp, fp, pp, Ap, mp, gp];
function dt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function qt(e) {
  var t = qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Xe(e) {
  var t = qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function $i(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function yp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !Xe(o) || !dt(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function vp(e) {
  var t = e.state, r = {
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
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], o = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), l = a.reduce(function(s, c) {
        return s[c] = "", s;
      }, {});
      !Xe(i) || !dt(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(s) {
        i.removeAttribute(s);
      }));
    });
  };
}
const bp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yp,
  effect: vp,
  requires: ["computeStyles"]
};
function ut(e) {
  return e.split("-")[0];
}
var Ht = Math.max, xn = Math.min, cr = Math.round;
function ji() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ts() {
  return !/^((?!chrome|android).)*safari/i.test(ji());
}
function ur(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, o = 1;
  t && Xe(e) && (i = e.offsetWidth > 0 && cr(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && cr(n.height) / e.offsetHeight || 1);
  var a = qt(e) ? qe(e) : window, l = a.visualViewport, s = !Ts() && r, c = (n.left + (s && l ? l.offsetLeft : 0)) / i, u = (n.top + (s && l ? l.offsetTop : 0)) / o, d = n.width / i, y = n.height / o;
  return {
    width: d,
    height: y,
    top: u,
    right: c + d,
    bottom: u + y,
    left: c,
    x: c,
    y: u
  };
}
function eo(e) {
  var t = ur(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Rs(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && $i(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ct(e) {
  return qe(e).getComputedStyle(e);
}
function Cp(e) {
  return ["table", "td", "th"].indexOf(dt(e)) >= 0;
}
function Mt(e) {
  return ((qt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function qn(e) {
  return dt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    ($i(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mt(e)
  );
}
function aa(e) {
  return !Xe(e) || // https://github.com/popperjs/popper-core/issues/837
  Ct(e).position === "fixed" ? null : e.offsetParent;
}
function Sp(e) {
  var t = /firefox/i.test(ji()), r = /Trident/i.test(ji());
  if (r && Xe(e)) {
    var n = Ct(e);
    if (n.position === "fixed")
      return null;
  }
  var i = qn(e);
  for ($i(i) && (i = i.host); Xe(i) && ["html", "body"].indexOf(dt(i)) < 0; ) {
    var o = Ct(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Yr(e) {
  for (var t = qe(e), r = aa(e); r && Cp(r) && Ct(r).position === "static"; )
    r = aa(r);
  return r && (dt(r) === "html" || dt(r) === "body" && Ct(r).position === "static") ? t : r || Sp(e) || t;
}
function to(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function kr(e, t, r) {
  return Ht(e, xn(t, r));
}
function xp(e, t, r) {
  var n = kr(e, t, r);
  return n > r ? r : n;
}
function ks() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ms(e) {
  return Object.assign({}, ks(), e);
}
function Os(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Ep = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ms(typeof t != "number" ? t : Os(t, zr));
};
function Ip(e) {
  var t, r = e.state, n = e.name, i = e.options, o = r.elements.arrow, a = r.modifiersData.popperOffsets, l = ut(r.placement), s = to(l), c = [Ne, _e].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!o || !a)) {
    var d = Ep(i.padding, r), y = eo(o), A = s === "y" ? De : Ne, g = s === "y" ? Qe : _e, f = r.rects.reference[u] + r.rects.reference[s] - a[s] - r.rects.popper[u], v = a[s] - r.rects.reference[s], m = Yr(o), h = m ? s === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = f / 2 - v / 2, x = d[A], S = h - y[u] - d[g], w = h / 2 - y[u] / 2 + b, T = kr(x, w, S), I = s;
    r.modifiersData[n] = (t = {}, t[I] = T, t.centerOffset = T - w, t);
  }
}
function wp(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Rs(t.elements.popper, i) && (t.elements.arrow = i));
}
const Tp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ip,
  effect: wp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function dr(e) {
  return e.split("-")[1];
}
var Rp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function kp(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: cr(r * i) / i || 0,
    y: cr(n * i) / i || 0
  };
}
function sa(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, l = e.position, s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, y = a.x, A = y === void 0 ? 0 : y, g = a.y, f = g === void 0 ? 0 : g, v = typeof u == "function" ? u({
    x: A,
    y: f
  }) : {
    x: A,
    y: f
  };
  A = v.x, f = v.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), b = Ne, x = De, S = window;
  if (c) {
    var w = Yr(r), T = "clientHeight", I = "clientWidth";
    if (w === qe(r) && (w = Mt(r), Ct(w).position !== "static" && l === "absolute" && (T = "scrollHeight", I = "scrollWidth")), w = w, i === De || (i === Ne || i === _e) && o === Gr) {
      x = Qe;
      var V = d && w === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[T]
      );
      f -= V - n.height, f *= s ? 1 : -1;
    }
    if (i === Ne || (i === De || i === Qe) && o === Gr) {
      b = _e;
      var P = d && w === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[I]
      );
      A -= P - n.width, A *= s ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, c && Rp), p = u === !0 ? kp({
    x: A,
    y: f
  }, qe(r)) : {
    x: A,
    y: f
  };
  if (A = p.x, f = p.y, s) {
    var R;
    return Object.assign({}, M, (R = {}, R[x] = h ? "0" : "", R[b] = m ? "0" : "", R.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + A + "px, " + f + "px)" : "translate3d(" + A + "px, " + f + "px, 0)", R));
  }
  return Object.assign({}, M, (t = {}, t[x] = h ? f + "px" : "", t[b] = m ? A + "px" : "", t.transform = "", t));
}
function Mp(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l, c = {
    placement: ut(t.placement),
    variation: dr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, sa(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, sa(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Op = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mp,
  data: {}
};
var nn = {
  passive: !0
};
function Pp(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, l = a === void 0 ? !0 : a, s = qe(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, nn);
  }), l && s.addEventListener("resize", r.update, nn), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, nn);
    }), l && s.removeEventListener("resize", r.update, nn);
  };
}
const Lp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Pp,
  data: {}
};
var jp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function pn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return jp[t];
  });
}
var Wp = {
  start: "end",
  end: "start"
};
function la(e) {
  return e.replace(/start|end/g, function(t) {
    return Wp[t];
  });
}
function ro(e) {
  var t = qe(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function no(e) {
  return ur(Mt(e)).left + ro(e).scrollLeft;
}
function Vp(e, t) {
  var r = qe(e), n = Mt(e), i = r.visualViewport, o = n.clientWidth, a = n.clientHeight, l = 0, s = 0;
  if (i) {
    o = i.width, a = i.height;
    var c = Ts();
    (c || !c && t === "fixed") && (l = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l + no(e),
    y: s
  };
}
function Dp(e) {
  var t, r = Mt(e), n = ro(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = Ht(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ht(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -n.scrollLeft + no(e), s = -n.scrollTop;
  return Ct(i || r).direction === "rtl" && (l += Ht(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: s
  };
}
function io(e) {
  var t = Ct(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Ps(e) {
  return ["html", "body", "#document"].indexOf(dt(e)) >= 0 ? e.ownerDocument.body : Xe(e) && io(e) ? e : Ps(qn(e));
}
function Mr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Ps(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = qe(n), a = i ? [o].concat(o.visualViewport || [], io(n) ? n : []) : n, l = t.concat(a);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Mr(qn(a)))
  );
}
function Wi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Np(e, t) {
  var r = ur(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ca(e, t, r) {
  return t === Is ? Wi(Vp(e, r)) : qt(t) ? Np(t, r) : Wi(Dp(Mt(e)));
}
function Fp(e) {
  var t = Mr(qn(e)), r = ["absolute", "fixed"].indexOf(Ct(e).position) >= 0, n = r && Xe(e) ? Yr(e) : e;
  return qt(n) ? t.filter(function(i) {
    return qt(i) && Rs(i, n) && dt(i) !== "body";
  }) : [];
}
function Gp(e, t, r, n) {
  var i = t === "clippingParents" ? Fp(e) : [].concat(t), o = [].concat(i, [r]), a = o[0], l = o.reduce(function(s, c) {
    var u = ca(e, c, n);
    return s.top = Ht(u.top, s.top), s.right = xn(u.right, s.right), s.bottom = xn(u.bottom, s.bottom), s.left = Ht(u.left, s.left), s;
  }, ca(e, a, n));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ls(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ut(n) : null, o = n ? dr(n) : null, a = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, s;
  switch (i) {
    case De:
      s = {
        x: a,
        y: t.y - r.height
      };
      break;
    case Qe:
      s = {
        x: a,
        y: t.y + t.height
      };
      break;
    case _e:
      s = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Ne:
      s = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var c = i ? to(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case lr:
        s[c] = s[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Gr:
        s[c] = s[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return s;
}
function Br(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, o = r.strategy, a = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? ap : l, c = r.rootBoundary, u = c === void 0 ? Is : c, d = r.elementContext, y = d === void 0 ? br : d, A = r.altBoundary, g = A === void 0 ? !1 : A, f = r.padding, v = f === void 0 ? 0 : f, m = Ms(typeof v != "number" ? v : Os(v, zr)), h = y === br ? sp : br, b = e.rects.popper, x = e.elements[g ? h : y], S = Gp(qt(x) ? x : x.contextElement || Mt(e.elements.popper), s, u, a), w = ur(e.elements.reference), T = Ls({
    reference: w,
    element: b,
    placement: i
  }), I = Wi(Object.assign({}, b, T)), V = y === br ? I : w, P = {
    top: S.top - V.top + m.top,
    bottom: V.bottom - S.bottom + m.bottom,
    left: S.left - V.left + m.left,
    right: V.right - S.right + m.right
  }, M = e.modifiersData.offset;
  if (y === br && M) {
    var p = M[i];
    Object.keys(P).forEach(function(R) {
      var k = [_e, Qe].indexOf(R) >= 0 ? 1 : -1, j = [De, Qe].indexOf(R) >= 0 ? "y" : "x";
      P[R] += p[j] * k;
    });
  }
  return P;
}
function Bp(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, c = s === void 0 ? ws : s, u = dr(n), d = u ? l ? oa : oa.filter(function(g) {
    return dr(g) === u;
  }) : zr, y = d.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  y.length === 0 && (y = d);
  var A = y.reduce(function(g, f) {
    return g[f] = Br(e, {
      placement: f,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[ut(f)], g;
  }, {});
  return Object.keys(A).sort(function(g, f) {
    return A[g] - A[f];
  });
}
function Hp(e) {
  if (ut(e) === _i)
    return [];
  var t = pn(e);
  return [la(e), t, la(t)];
}
function Jp(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, l = a === void 0 ? !0 : a, s = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, y = r.altBoundary, A = r.flipVariations, g = A === void 0 ? !0 : A, f = r.allowedAutoPlacements, v = t.options.placement, m = ut(v), h = m === v, b = s || (h || !g ? [pn(v)] : Hp(v)), x = [v].concat(b).reduce(function(q, Q) {
      return q.concat(ut(Q) === _i ? Bp(t, {
        placement: Q,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: f
      }) : Q);
    }, []), S = t.rects.reference, w = t.rects.popper, T = /* @__PURE__ */ new Map(), I = !0, V = x[0], P = 0; P < x.length; P++) {
      var M = x[P], p = ut(M), R = dr(M) === lr, k = [De, Qe].indexOf(p) >= 0, j = k ? "width" : "height", G = Br(t, {
        placement: M,
        boundary: u,
        rootBoundary: d,
        altBoundary: y,
        padding: c
      }), D = k ? R ? _e : Ne : R ? Qe : De;
      S[j] > w[j] && (D = pn(D));
      var W = pn(D), J = [];
      if (o && J.push(G[p] <= 0), l && J.push(G[D] <= 0, G[W] <= 0), J.every(function(q) {
        return q;
      })) {
        V = M, I = !1;
        break;
      }
      T.set(M, J);
    }
    if (I)
      for (var O = g ? 3 : 1, H = function(Q) {
        var Y = x.find(function(K) {
          var U = T.get(K);
          if (U)
            return U.slice(0, Q).every(function(re) {
              return re;
            });
        });
        if (Y)
          return V = Y, "break";
      }, z = O; z > 0; z--) {
        var _ = H(z);
        if (_ === "break") break;
      }
    t.placement !== V && (t.modifiersData[n]._skip = !0, t.placement = V, t.reset = !0);
  }
}
const Zp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Jp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ua(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function da(e) {
  return [De, _e, Qe, Ne].some(function(t) {
    return e[t] >= 0;
  });
}
function qp(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, o = t.modifiersData.preventOverflow, a = Br(t, {
    elementContext: "reference"
  }), l = Br(t, {
    altBoundary: !0
  }), s = ua(a, n), c = ua(l, i, o), u = da(s), d = da(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const zp = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: qp
};
function Yp(e, t, r) {
  var n = ut(e), i = [Ne, De].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = o[0], l = o[1];
  return a = a || 0, l = (l || 0) * i, [Ne, _e].indexOf(n) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Up(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, o = i === void 0 ? [0, 0] : i, a = ws.reduce(function(u, d) {
    return u[d] = Yp(d, t.rects, o), u;
  }, {}), l = a[t.placement], s = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = a;
}
const Kp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Up
};
function Xp(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Qp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Xp,
  data: {}
};
function _p(e) {
  return e === "x" ? "y" : "x";
}
function $p(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, l = a === void 0 ? !1 : a, s = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, y = r.tether, A = y === void 0 ? !0 : y, g = r.tetherOffset, f = g === void 0 ? 0 : g, v = Br(t, {
    boundary: s,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), m = ut(t.placement), h = dr(t.placement), b = !h, x = to(m), S = _p(x), w = t.modifiersData.popperOffsets, T = t.rects.reference, I = t.rects.popper, V = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, P = typeof V == "number" ? {
    mainAxis: V,
    altAxis: V
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, V), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, p = {
    x: 0,
    y: 0
  };
  if (w) {
    if (o) {
      var R, k = x === "y" ? De : Ne, j = x === "y" ? Qe : _e, G = x === "y" ? "height" : "width", D = w[x], W = D + v[k], J = D - v[j], O = A ? -I[G] / 2 : 0, H = h === lr ? T[G] : I[G], z = h === lr ? -I[G] : -T[G], _ = t.elements.arrow, q = A && _ ? eo(_) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ks(), Y = Q[k], K = Q[j], U = kr(0, T[G], q[G]), re = b ? T[G] / 2 - O - U - Y - P.mainAxis : H - U - Y - P.mainAxis, te = b ? -T[G] / 2 + O + U + K + P.mainAxis : z + U + K + P.mainAxis, he = t.elements.arrow && Yr(t.elements.arrow), B = he ? x === "y" ? he.clientTop || 0 : he.clientLeft || 0 : 0, we = (R = M == null ? void 0 : M[x]) != null ? R : 0, Pe = D + re - we - B, Le = D + te - we, et = kr(A ? xn(W, Pe) : W, D, A ? Ht(J, Le) : J);
      w[x] = et, p[x] = et - D;
    }
    if (l) {
      var tt, ft = x === "x" ? De : Ne, rt = x === "x" ? Qe : _e, ze = w[S], pt = S === "y" ? "height" : "width", At = ze + v[ft], Ot = ze - v[rt], Pt = [De, Ne].indexOf(m) !== -1, Lt = (tt = M == null ? void 0 : M[S]) != null ? tt : 0, jt = Pt ? At : ze - T[pt] - I[pt] - Lt + P.altAxis, mt = Pt ? ze + T[pt] + I[pt] - Lt - P.altAxis : Ot, zt = A && Pt ? xp(jt, ze, mt) : kr(A ? jt : At, ze, A ? mt : Ot);
      w[S] = zt, p[S] = zt - ze;
    }
    t.modifiersData[n] = p;
  }
}
const eA = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $p,
  requiresIfExists: ["offset"]
};
function tA(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function rA(e) {
  return e === qe(e) || !Xe(e) ? ro(e) : tA(e);
}
function nA(e) {
  var t = e.getBoundingClientRect(), r = cr(t.width) / e.offsetWidth || 1, n = cr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function iA(e, t, r) {
  r === void 0 && (r = !1);
  var n = Xe(t), i = Xe(t) && nA(t), o = Mt(t), a = ur(e, i, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((dt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  io(o)) && (l = rA(t)), Xe(t) ? (s = ur(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : o && (s.x = no(o))), {
    x: a.left + l.scrollLeft - s.x,
    y: a.top + l.scrollTop - s.y,
    width: a.width,
    height: a.height
  };
}
function oA(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(l) {
      if (!r.has(l)) {
        var s = t.get(l);
        s && i(s);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || i(o);
  }), n;
}
function aA(e) {
  var t = oA(e);
  return hp.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function sA(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function lA(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var fa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pa() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function cA(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? fa : i;
  return function(l, s, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fa, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], y = !1, A = {
      state: u,
      setOptions: function(m) {
        var h = typeof m == "function" ? m(u.options) : m;
        f(), u.options = Object.assign({}, o, u.options, h), u.scrollParents = {
          reference: qt(l) ? Mr(l) : l.contextElement ? Mr(l.contextElement) : [],
          popper: Mr(s)
        };
        var b = aA(lA([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = b.filter(function(x) {
          return x.enabled;
        }), g(), A.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var m = u.elements, h = m.reference, b = m.popper;
          if (pa(h, b)) {
            u.rects = {
              reference: iA(h, Yr(b), u.options.strategy === "fixed"),
              popper: eo(b)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(P) {
              return u.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var x = 0; x < u.orderedModifiers.length; x++) {
              if (u.reset === !0) {
                u.reset = !1, x = -1;
                continue;
              }
              var S = u.orderedModifiers[x], w = S.fn, T = S.options, I = T === void 0 ? {} : T, V = S.name;
              typeof w == "function" && (u = w({
                state: u,
                options: I,
                name: V,
                instance: A
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sA(function() {
        return new Promise(function(v) {
          A.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        f(), y = !0;
      }
    };
    if (!pa(l, s))
      return A;
    A.setOptions(c).then(function(v) {
      !y && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function g() {
      u.orderedModifiers.forEach(function(v) {
        var m = v.name, h = v.options, b = h === void 0 ? {} : h, x = v.effect;
        if (typeof x == "function") {
          var S = x({
            state: u,
            name: m,
            instance: A,
            options: b
          }), w = function() {
          };
          d.push(S || w);
        }
      });
    }
    function f() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return A;
  };
}
var uA = [Lp, Qp, Op, bp, Kp, Zp, eA, Tp, zp], dA = /* @__PURE__ */ cA({
  defaultModifiers: uA
});
function fA(e) {
  return typeof e == "string";
}
function js(e, t, r) {
  return e === void 0 || fA(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function pA(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Aa(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Ws(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: i,
    className: o
  } = e;
  if (!t) {
    const A = Vr(r == null ? void 0 : r.className, o, i == null ? void 0 : i.className, n == null ? void 0 : n.className), g = {
      ...r == null ? void 0 : r.style,
      ...i == null ? void 0 : i.style,
      ...n == null ? void 0 : n.style
    }, f = {
      ...r,
      ...i,
      ...n
    };
    return A.length > 0 && (f.className = A), Object.keys(g).length > 0 && (f.style = g), {
      props: f,
      internalRef: void 0
    };
  }
  const a = pA({
    ...i,
    ...n
  }), l = Aa(n), s = Aa(i), c = t(a), u = Vr(c == null ? void 0 : c.className, r == null ? void 0 : r.className, o, i == null ? void 0 : i.className, n == null ? void 0 : n.className), d = {
    ...c == null ? void 0 : c.style,
    ...r == null ? void 0 : r.style,
    ...i == null ? void 0 : i.style,
    ...n == null ? void 0 : n.style
  }, y = {
    ...c,
    ...r,
    ...s,
    ...l
  };
  return u.length > 0 && (y.className = u), Object.keys(d).length > 0 && (y.style = d), {
    props: y,
    internalRef: c.ref
  };
}
function Vs(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function AA(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: i = !1,
    ...o
  } = e, a = i ? {} : Vs(r, n), {
    props: l,
    internalRef: s
  } = Ws({
    ...o,
    externalSlotProps: a
  }), c = Zt(s, a == null ? void 0 : a.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return js(t, {
    ...l,
    ref: c
  }, n);
}
function ma(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function mA(e) {
  return typeof e == "function" ? e() : e;
}
const En = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const {
    children: n,
    container: i,
    disablePortal: o = !1
  } = t, [a, l] = F.useState(null), s = Zt(/* @__PURE__ */ F.isValidElement(n) ? qi(n) : null, r);
  if (Dr(() => {
    o || l(mA(i) || document.body);
  }, [i, o]), Dr(() => {
    if (a && !o)
      return ma(r, a), () => {
        ma(r, null);
      };
  }, [r, a, o]), o) {
    if (/* @__PURE__ */ F.isValidElement(n)) {
      const c = {
        ref: s
      };
      return /* @__PURE__ */ F.cloneElement(n, c);
    }
    return n;
  }
  return a && /* @__PURE__ */ Qs.createPortal(n, a);
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: C.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: C.oneOfType([Fr, C.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: C.bool
});
process.env.NODE_ENV !== "production" && (En.propTypes = nf(En.propTypes));
function gA(e) {
  return Gn("MuiPopper", e);
}
as("MuiPopper", ["root"]);
function hA(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function In(e) {
  return typeof e == "function" ? e() : e;
}
function zn(e) {
  return e.nodeType !== void 0;
}
function yA(e) {
  return !zn(e);
}
const vA = (e) => {
  const {
    classes: t
  } = e;
  return ts({
    root: ["root"]
  }, gA, t);
}, bA = {}, CA = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: i,
    direction: o,
    disablePortal: a,
    modifiers: l,
    open: s,
    placement: c,
    popperOptions: u,
    popperRef: d,
    slotProps: y = {},
    slots: A = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...v
  } = t, m = F.useRef(null), h = Zt(m, r), b = F.useRef(null), x = Zt(b, d), S = F.useRef(x);
  Dr(() => {
    S.current = x;
  }, [x]), F.useImperativeHandle(d, () => b.current, []);
  const w = hA(c, o), [T, I] = F.useState(w), [V, P] = F.useState(In(n));
  F.useEffect(() => {
    b.current && b.current.forceUpdate();
  }), F.useEffect(() => {
    n && P(In(n));
  }, [n]), Dr(() => {
    if (!V || !s)
      return;
    const j = (W) => {
      I(W.placement);
    };
    if (process.env.NODE_ENV !== "production" && V && zn(V) && V.nodeType === 1) {
      const W = V.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && W.top === 0 && W.left === 0 && W.right === 0 && W.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let G = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: W
      }) => {
        j(W);
      }
    }];
    l != null && (G = G.concat(l)), u && u.modifiers != null && (G = G.concat(u.modifiers));
    const D = dA(V, m.current, {
      placement: w,
      ...u,
      modifiers: G
    });
    return S.current(D), () => {
      D.destroy(), S.current(null);
    };
  }, [V, a, l, s, u, w]);
  const M = {
    placement: T
  };
  g !== null && (M.TransitionProps = g);
  const p = vA(t), R = A.root ?? "div", k = AA({
    elementType: R,
    externalSlotProps: y.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: h
    },
    ownerState: t,
    className: p.root
  });
  return /* @__PURE__ */ X.jsx(R, {
    ...k,
    children: typeof i == "function" ? i(M) : i
  });
}), Ds = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: i,
    container: o,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: s = !1,
    modifiers: c,
    open: u,
    placement: d = "bottom",
    popperOptions: y = bA,
    popperRef: A,
    style: g,
    transition: f = !1,
    slotProps: v = {},
    slots: m = {},
    ...h
  } = t, [b, x] = F.useState(!0), S = () => {
    x(!1);
  }, w = () => {
    x(!0);
  };
  if (!s && !u && (!f || b))
    return null;
  let T;
  if (o)
    T = o;
  else if (n) {
    const P = In(n);
    T = P && zn(P) ? ia(P).body : ia(null).body;
  }
  const I = !u && s && (!f || b) ? "none" : void 0, V = f ? {
    in: u,
    onEnter: S,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ X.jsx(En, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ X.jsx(CA, {
      anchorEl: n,
      direction: a,
      disablePortal: l,
      modifiers: c,
      ref: r,
      open: f ? !b : u,
      placement: d,
      popperOptions: y,
      popperRef: A,
      slotProps: v,
      slots: m,
      ...h,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: I,
        ...g
      },
      TransitionProps: V,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Ji(C.oneOfType([Fr, C.object, C.func]), (e) => {
    if (e.open) {
      const t = In(e.anchorEl);
      if (t && zn(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || yA(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: C.oneOfType([C.node, C.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: C.oneOfType([Fr, C.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: C.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: C.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: C.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: C.arrayOf(C.shape({
    data: C.object,
    effect: C.func,
    enabled: C.bool,
    fn: C.func,
    name: C.any,
    options: C.object,
    phase: C.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: C.arrayOf(C.string),
    requiresIfExists: C.arrayOf(C.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: C.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: C.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: C.shape({
    modifiers: C.array,
    onFirstUpdate: C.func,
    placement: C.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: C.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Es,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: C.shape({
    root: C.oneOfType([C.func, C.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: C.shape({
    root: C.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: C.bool
});
const SA = Zn(Ds, {
  name: "MuiPopper",
  slot: "Root"
})({}), oo = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const n = rs(), i = Ss({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: o,
    component: a,
    components: l,
    componentsProps: s,
    container: c,
    disablePortal: u,
    keepMounted: d,
    modifiers: y,
    open: A,
    placement: g,
    popperOptions: f,
    popperRef: v,
    transition: m,
    slots: h,
    slotProps: b,
    ...x
  } = i, S = (h == null ? void 0 : h.root) ?? (l == null ? void 0 : l.Root), w = {
    anchorEl: o,
    container: c,
    disablePortal: u,
    keepMounted: d,
    modifiers: y,
    open: A,
    placement: g,
    popperOptions: f,
    popperRef: v,
    transition: m,
    ...x
  };
  return /* @__PURE__ */ X.jsx(SA, {
    as: a,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: S
    },
    slotProps: b ?? s,
    ...w,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (oo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: C.oneOfType([Fr, C.object, C.func]),
  /**
   * Popper render function or node.
   */
  children: C.oneOfType([C.node, C.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: C.shape({
    Root: C.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: C.shape({
    root: C.oneOfType([C.func, C.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: C.oneOfType([Fr, C.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: C.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: C.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: C.arrayOf(C.shape({
    data: C.object,
    effect: C.func,
    enabled: C.bool,
    fn: C.func,
    name: C.any,
    options: C.object,
    phase: C.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: C.arrayOf(C.string),
    requiresIfExists: C.arrayOf(C.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: C.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: C.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: C.shape({
    modifiers: C.array,
    onFirstUpdate: C.func,
    placement: C.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: C.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Es,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: C.shape({
    root: C.oneOfType([C.func, C.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: C.shape({
    root: C.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: C.bool
});
function ga(e) {
  const t = F.useRef(e);
  return Dr(() => {
    t.current = e;
  }), F.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function xA(e) {
  const {
    controlled: t,
    default: r,
    name: n,
    state: i = "value"
  } = e, {
    current: o
  } = F.useRef(t !== void 0), [a, l] = F.useState(r), s = o ? t : a;
  if (process.env.NODE_ENV !== "production") {
    F.useEffect(() => {
      o !== (t !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${i} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, n, t]);
    const {
      current: u
    } = F.useRef(r);
    F.useEffect(() => {
      !o && JSON.stringify(r) !== JSON.stringify(u) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const c = F.useCallback((u) => {
    o || l(u);
  }, []);
  return [s, c];
}
function on(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: i,
    externalForwardedProps: o,
    internalForwardedProps: a,
    shouldForwardComponentProp: l = !1,
    ...s
  } = t, {
    component: c,
    slots: u = {
      [e]: void 0
    },
    slotProps: d = {
      [e]: void 0
    },
    ...y
  } = o, A = u[e] || n, g = Vs(d[e], i), {
    props: {
      component: f,
      ...v
    },
    internalRef: m
  } = Ws({
    className: r,
    ...s,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: g
  }), h = Zt(m, g == null ? void 0 : g.ref, t.ref), b = e === "root" ? f || c : f, x = js(A, {
    ...e === "root" && !c && !u[e] && a,
    ...e !== "root" && !u[e] && a,
    ...v,
    ...b && !l && {
      as: b
    },
    ...b && l && {
      component: b
    },
    ref: h
  }, i);
  return [A, x];
}
function EA(e) {
  return Gn("MuiTooltip", e);
}
const be = as("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function IA(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wA = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: i,
    placement: o
  } = e, a = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", i && "touch", `tooltipPlacement${Jr(o.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return ts(a, EA, t);
}, TA = Zn(oo, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(Qi(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${be.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${be.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${be.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${be.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${be.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${be.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${be.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${be.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), RA = Zn("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${Jr(r.placement.split("-")[0])}`]];
  }
})(Qi(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${be.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${be.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${be.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${be.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${IA(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${be.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${be.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${be.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${be.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${be.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${be.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${be.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${be.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${be.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${be.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), kA = Zn("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(Qi(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let an = !1;
const ha = new kn();
let Cr = {
  x: 0,
  y: 0
};
function sn(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const Ns = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const n = Ss({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: i = !1,
    children: o,
    classes: a,
    components: l = {},
    componentsProps: s = {},
    describeChild: c = !1,
    disableFocusListener: u = !1,
    disableHoverListener: d = !1,
    disableInteractive: y = !1,
    disableTouchListener: A = !1,
    enterDelay: g = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: v = 700,
    followCursor: m = !1,
    id: h,
    leaveDelay: b = 0,
    leaveTouchDelay: x = 1500,
    onClose: S,
    onOpen: w,
    open: T,
    placement: I = "bottom",
    PopperComponent: V,
    PopperProps: P = {},
    slotProps: M = {},
    slots: p = {},
    title: R,
    TransitionComponent: k,
    TransitionProps: j,
    ...G
  } = n, D = /* @__PURE__ */ F.isValidElement(o) ? o : /* @__PURE__ */ X.jsx("span", {
    children: o
  }), W = Cs(), J = rs(), [O, H] = F.useState(), [z, _] = F.useState(null), q = F.useRef(!1), Q = y || m, Y = xr(), K = xr(), U = xr(), re = xr(), [te, he] = xA({
    controlled: T,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let B = te;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ee
    } = F.useRef(T !== void 0);
    F.useEffect(() => {
      O && O.disabled && !ee && R !== "" && O.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [R, O, ee]);
  }
  const we = uf(h), Pe = F.useRef(), Le = ga(() => {
    Pe.current !== void 0 && (document.body.style.WebkitUserSelect = Pe.current, Pe.current = void 0), re.clear();
  });
  F.useEffect(() => Le, [Le]);
  const et = (ee) => {
    ha.clear(), an = !0, he(!0), w && !B && w(ee);
  }, tt = ga(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ee) => {
      ha.start(800 + b, () => {
        an = !1;
      }), he(!1), S && B && S(ee), Y.start(W.transitions.duration.shortest, () => {
        q.current = !1;
      });
    }
  ), ft = (ee) => {
    q.current && ee.type !== "touchstart" || (O && O.removeAttribute("title"), K.clear(), U.clear(), g || an && f ? K.start(an ? f : g, () => {
      et(ee);
    }) : et(ee));
  }, rt = (ee) => {
    K.clear(), U.start(b, () => {
      tt(ee);
    });
  }, [, ze] = F.useState(!1), pt = (ee) => {
    jo(ee.target) || (ze(!1), rt(ee));
  }, At = (ee) => {
    O || H(ee.currentTarget), jo(ee.target) && (ze(!0), ft(ee));
  }, Ot = (ee) => {
    q.current = !0;
    const We = D.props;
    We.onTouchStart && We.onTouchStart(ee);
  }, Pt = (ee) => {
    Ot(ee), U.clear(), Y.clear(), Le(), Pe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", re.start(v, () => {
      document.body.style.WebkitUserSelect = Pe.current, ft(ee);
    });
  }, Lt = (ee) => {
    D.props.onTouchEnd && D.props.onTouchEnd(ee), Le(), U.start(x, () => {
      tt(ee);
    });
  };
  F.useEffect(() => {
    if (!B)
      return;
    function ee(We) {
      We.key === "Escape" && tt(We);
    }
    return document.addEventListener("keydown", ee), () => {
      document.removeEventListener("keydown", ee);
    };
  }, [tt, B]);
  const jt = Zt(qi(D), H, r);
  !R && R !== 0 && (B = !1);
  const mt = F.useRef(), zt = (ee) => {
    const We = D.props;
    We.onMouseMove && We.onMouseMove(ee), Cr = {
      x: ee.clientX,
      y: ee.clientY
    }, mt.current && mt.current.update();
  }, xt = {}, Yt = typeof R == "string";
  c ? (xt.title = !B && Yt && !d ? R : null, xt["aria-describedby"] = B ? we : null) : (xt["aria-label"] = Yt ? R : null, xt["aria-labelledby"] = B && !Yt ? we : null);
  const je = {
    ...xt,
    ...G,
    ...D.props,
    className: Vr(G.className, D.props.className),
    onTouchStart: Ot,
    ref: jt,
    ...m ? {
      onMouseMove: zt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (je["data-mui-internal-clone-element"] = !0, F.useEffect(() => {
    O && !O.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [O]));
  const Wt = {};
  A || (je.onTouchStart = Pt, je.onTouchEnd = Lt), d || (je.onMouseOver = sn(ft, je.onMouseOver), je.onMouseLeave = sn(rt, je.onMouseLeave), Q || (Wt.onMouseOver = ft, Wt.onMouseLeave = rt)), u || (je.onFocus = sn(At, je.onFocus), je.onBlur = sn(pt, je.onBlur), Q || (Wt.onFocus = At, Wt.onBlur = pt)), process.env.NODE_ENV !== "production" && D.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${D.props.title}\` or the Tooltip component.`].join(`
`));
  const gt = {
    ...n,
    isRtl: J,
    arrow: i,
    disableInteractive: Q,
    placement: I,
    PopperComponentProp: V,
    touch: q.current
  }, Ge = typeof M.popper == "function" ? M.popper(gt) : M.popper, Yn = F.useMemo(() => {
    var We, Qr;
    let ee = [{
      name: "arrow",
      enabled: !!z,
      options: {
        element: z,
        padding: 4
      }
    }];
    return (We = P.popperOptions) != null && We.modifiers && (ee = ee.concat(P.popperOptions.modifiers)), (Qr = Ge == null ? void 0 : Ge.popperOptions) != null && Qr.modifiers && (ee = ee.concat(Ge.popperOptions.modifiers)), {
      ...P.popperOptions,
      ...Ge == null ? void 0 : Ge.popperOptions,
      modifiers: ee
    };
  }, [z, P.popperOptions, Ge == null ? void 0 : Ge.popperOptions]), pr = wA(gt), Un = typeof M.transition == "function" ? M.transition(gt) : M.transition, Et = {
    slots: {
      popper: l.Popper,
      transition: l.Transition ?? k,
      tooltip: l.Tooltip,
      arrow: l.Arrow,
      ...p
    },
    slotProps: {
      arrow: M.arrow ?? s.arrow,
      popper: {
        ...P,
        ...Ge ?? s.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: M.tooltip ?? s.tooltip,
      transition: {
        ...j,
        ...Un ?? s.transition
      }
    }
  }, [Ur, It] = on("popper", {
    elementType: TA,
    externalForwardedProps: Et,
    ownerState: gt,
    className: Vr(pr.popper, P == null ? void 0 : P.className)
  }), [Ar, mr] = on("transition", {
    elementType: Sn,
    externalForwardedProps: Et,
    ownerState: gt
  }), [Kr, Kn] = on("tooltip", {
    elementType: RA,
    className: pr.tooltip,
    externalForwardedProps: Et,
    ownerState: gt
  }), [Xr, Xn] = on("arrow", {
    elementType: kA,
    className: pr.arrow,
    externalForwardedProps: Et,
    ownerState: gt,
    ref: _
  });
  return /* @__PURE__ */ X.jsxs(F.Fragment, {
    children: [/* @__PURE__ */ F.cloneElement(D, je), /* @__PURE__ */ X.jsx(Ur, {
      as: V ?? oo,
      placement: I,
      anchorEl: m ? {
        getBoundingClientRect: () => ({
          top: Cr.y,
          left: Cr.x,
          right: Cr.x,
          bottom: Cr.y,
          width: 0,
          height: 0
        })
      } : O,
      popperRef: mt,
      open: O ? B : !1,
      id: we,
      transition: !0,
      ...Wt,
      ...It,
      popperOptions: Yn,
      children: ({
        TransitionProps: ee
      }) => /* @__PURE__ */ X.jsx(Ar, {
        timeout: W.transitions.duration.shorter,
        ...ee,
        ...mr,
        children: /* @__PURE__ */ X.jsxs(Kr, {
          ...Kn,
          children: [R, i ? /* @__PURE__ */ X.jsx(Xr, {
            ...Xn
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: C.bool,
  /**
   * Tooltip reference element.
   */
  children: Zi.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: C.shape({
    Arrow: C.elementType,
    Popper: C.elementType,
    Tooltip: C.elementType,
    Transition: C.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: C.shape({
    arrow: C.object,
    popper: C.object,
    tooltip: C.object,
    transition: C.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: C.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: C.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: C.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: C.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: C.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: C.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: C.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: C.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: C.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: C.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: C.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: C.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: C.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: C.func,
  /**
   * If `true`, the component is shown.
   */
  open: C.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: C.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: C.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: C.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: C.shape({
    arrow: C.oneOfType([C.func, C.object]),
    popper: C.oneOfType([C.func, C.object]),
    tooltip: C.oneOfType([C.func, C.object]),
    transition: C.oneOfType([C.func, C.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: C.shape({
    arrow: C.elementType,
    popper: C.elementType,
    tooltip: C.elementType,
    transition: C.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: C.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: C.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: C.object
});
const MA = "data:image/jpeg;base64,/9j/4SACRXhpZgAATU0AKgAAAAgADAEAAAMAAAABAoAAAAEBAAMAAAABAasAAAECAAMAAAADAAAAngEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEVAAMAAAABAAMAAAEaAAUAAAABAAAApAEbAAUAAAABAAAArAEoAAMAAAABAAIAAAExAAIAAAAhAAAAtAEyAAIAAAAUAAAA1YdpAAQAAAABAAAA7AAAASQACAAIAAgACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIDI3LjEgKE1hY2ludG9zaCkAMjAyNToxMjowMiAyMToyMDo1MQAAAAAABJAAAAcAAAAEMDIzMaABAAMAAAAB//8AAKACAAQAAAABAAABq6ADAAQAAAABAAABqwAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAFyARsABQAAAAEAAAF6ASgAAwAAAAEAAgAAAgEABAAAAAEAAAGCAgIABAAAAAEAAB54AAAAAAAAAEgAAAABAAAASAAAAAH/2P/tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAoACgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A4R7YHiq1n3I1lqrPetOcotLGCxJhR3BIlQKrykzgMnEFCKcrU6T9Wer9WIONSWU/6ez2s/sf6T+woZyG50X6RGpcpWMPEycy70cdjnu8GguXb2f4t8NmNW05ThlH6TtIJj81n7q6b6pfVXG6Liy+L7y4uL41JP8A5FqgyZ4wFjf8rSJWNHhOnfUPrGRYDlAU1TqBq4hdd0j6q9K6Jkbm7sm8CX2P12g/m/utXWOhvqWvbtDBIasDqOaMep5Bi28SR4Sqk+YyEWZHhI2Y+KzwgajWReP+vmTZYwNYP0BsBJjw3f8Aflx1O31JPbgL1nP6VjZvSizIaNtjNPGV5Vn45w8t+PEGoxPEj80qxymYEcNax9XmuiKBjbaNzG1F3ccDzVGZJJ5KGbHHk6Jw5XZZeIjwRHHw34siNITQlvT7gm2Cu1C0Jw0JaJwiAgksLAAFCER6Go5brxs//9DztwQyFdd0/N9L1vRd6cTPl47VTIV4kHYgtYWN2eLiXZdwqqie5PAW7V9Rcy1u4ZDR5bD/AOSQPqvtqzybgWtIG0kd5Xeutew7mO9vlx8lQ5rmTjlw0uHEZUHnumfU7Exa2u6hWLnkyQeD5Lr8ayr0GY2KwUMrEBgAGgH5sfRVfHyXOsaXAObKNmOrbdUaXQ5x4CpHLKdni33CMtk9dOn5uR1IuOc0MeZH0vJbHTcm+msPJ3SIElAzKscscGN/S8ucoVW1Ow2lrx7dCJ7qvKBExIa8OujZhKJgYfvaOxkZb/2e50ST9IDmFz2R0p3UsptoyA2tgALPzlax853ogPBNcnUKDLMWu45NbtLfpSeCFISJV2oMJxzgSY0deH6N3JrjGNdXv2NgfFcjX0HDys+y3qG2x5Ag+H8ldC3qNJB22D2zKyM6v13xUIc8gl40/FMhk4ZUCRajE6gfa8r9auiYuA8XYvsDjBZ2+LVzq9C6/wBA6jkYPt22FokA8rz+2qyqx1djS17TDgfFaOGYI4ePiI/JdivhFsZSkpJKVercpB6gkiCQqmZdKimSQu1P/9GBsrGMa21CY1cAss/V/DsH2kMALjJE6fHatEXBzya2E+SPTURU4PEbjICpDLPURJiT2YjxyOosDZDkYGKythZAcOHR2hamFg3W4gDtO4B5AQcTplt9gaPoD8FoWY93T8dzhaD4A+KbPiyekm+ieLhNgepE2oY7YJj4rNxsmy/rdYMmlhIntwg5eZm2UneInUELP6ddl1WOJGk6FMMDAjUIiDIkka9ntcumsOeRru1WXhdLLfV9QljXP9o+K0ui15HUGtutaW1N4c4aOPklk5VdeVlYjWNsoxy3Ws/pWv8A8I4/yK3fTRGPjEzZAGthAkYbgad2Den049EEudJ1Pb+qFk9UbViuY8YznVjWxncSfYdP3lrV5FdwIY71DS4gsaN0Pjwb+ejN6blMxq33PAyQPUsbBJE/RbooSBrEjYVbNCUieKOo3r9Fwm3Y+VYymvH2Njc+REfyVo1imjG4BsP0W+Cl1K7C6bjb8rJqxWvl7HFzd7xP+DrG97/7KhikMrdfklrzyHdtsTu3Je2dP0QdASK80mIJJH4GJiP6rn9S6je6h9FDYvIIY88ErzDqF1t2S91w22gkPHeR7T+RemZmILWOtrLaw+W73AkCPpvbB9z2fmrzvrGMyq51g9b3PIL72hpf/wAJXCu8uMUZcMfm63qoYzGNgERPdzkgtXpv1c6nnNNrGenWBua54PuP5rQ1v7yq9Q6blYTybqyxhdtB00dG5zP7KtcUbq9UWNmmUklbxOk9TzGF+Li23Mby9jCWj+39FEkDfRTUSW9V9TOrOcBcG1AR6ke9zZ/kthrnf1XqtlfVzPpYbGAWsEyILHQBO/a/27f7aaJxJoEErRIE0C//0h4/UcZj3bfojQrQY1l7PWadwPZYOD02wZYbBbuOoPl3XS0014Qgy4nsq+WERpEklcY0fS2ca1tDQ1hh0LP6tkmyypol0n3AK1vaHOtdoI4WVlnKc/7RjsLmgw0KCI9Rl0ANebHEdZbqy8uislkcj6Eaqt0Wj7b1EV2MczGaC62Zbp2aFdxsW2htmVlBsBpe97uA0DcU+P165jsS3p1LfRyrDXZk5Fbm1hsFsUlrm/pPVH7yXtSkDW3eXy/vJiKN/bT2OM4Ve1h3bPoM7Brfd9H/AKCw83p7a8P9HbusBl9znbWusc79ZNljB+m9N/v9X/BM/QqxgdSqyMWn1A6l1ryLWne4vcA9/p1v/RbG2sY6yrfSq9lbupZFQZddj1ubNNTNtYisfn2bbf8ACN99X/Q3+nejAzhGpy1ka9P+LGMUS4Noioju53TLup9NyHjbfZ9oc0eoKzpuL2evbtc11Ps9Nn7628s5eJSyQbXkCvc6wzP0XWfm/Ta3+c3/AOE2bFVrsYJNdVgz31NNoa9tbamb31tx2PZ/PWVPrs/O/wCHs9LerH7Q6dbb9mcXUXn3Prfq32tZpvBex1npOr/mv0n/AF1Vsw4wRYMtJanr5IhkmImgYR+USA/7pxes4uFjWF2Q2lxDtnqvYDWNrS7YaP0lT62PGN+nt/Tfz1/p/ot6C/JfWGMyJstaTXnMEAGwt9b1XbfT+n9N/t2WV+n/AKVbWV06i0HK6jcBjj3GoS1paSHtruBd+kf6jGvq9H9O/wDm/wDjMTqlhGC9+LOG54aKHZFZaHbnMq/V6qDZZRTVQ2r9Iyv9Ez+cqTYiWkbJN6M8MwkQJRiO9fu7/wCNLhRHJre1mHjtipkutbWANHfzhY0/ylo4PS8b7P8Ap2DIJ99bSG7hx9F30dyodKx/sXT259jXZT3VkMx2gCv1J1ssc7f7Pb/Of+jUZ3VX4rfUyCzLzby65jaA1zWsa/7Oyulm6v8AR+p77H7v8J/pFKMc74o0SSSvllgQIHi2r0/1XSxaLKg0BgY9xJjyd9HdtO36SzczomPnZJkEhsWXOcARLR9NpaP0e7b/ADf7inV1S8H1Mj0m2FvoNyQQAHHV3oUv2epY7d7PzGM/nLK1otJFANNhLIA4a1znkauPqez2bt9u7/ikvckJ6muHevzYziqPpv1dZb/815avoHQrMhhfiXZWQ52/e0BrT/WZvY1y2LszCx8D0cVgqpZ7WsB9JoDidzp2l7m/S/ma1HPzMXp5e9rfUyDWXOsbZsAa0va3dvFlbf3lzHUMjIyPdnscWODrPa17WubZt9lTC8N/Mr2ezZ7/AObVmJMxZuh/zv7sWvw9ZHQfy9Laf9YBBuoqYytpeaHu52+2uyytu51l3ub9Fz2M/wAIuey8/Iynve9xdTYX7XOkmYc3YbP6v0/Td6atNyrG5Y9javU/RHe8HayDVDKh/M+97vU9/wD1tiH1W+x5FJcAGOAroYQBJDWy6hn5/wD26nGQ4hECrF6M0QCAeEDwf//T0MnJpxptc33geweJVbC/amW/1boraTIbGsKz+zXBzrMizfHAULeoV1e0c9oVGeThjwRBJ6k7reK6ITZbHFgrmB+eQk3Ow6WBrQSGDT/UrGu6+37R6bf0lp02dlEvyrPpMFTSfFCHFR4t/wB3skRJ3Gzp9Sy6M7p+TjH9Gbay3c87Gtkj3ud+6xVqcL1cCivGZup9Noumthc6xmn2jdV6e57meyv0vV9RQPpuqcLbfSLnBg0Ja8H2+k7Zv/OVoUWC91T3bH+sxrZDohrdvtAfs3b27tzvT97/AOd/waeTHg4L3JNfT/0FMiY8I01Ls4I/R1DcGOa2C0EPMCdbHkv/ADff/pkDJovyspm31m4zX1Nb6bQZeHVZFVv2n6XoMczbczZ6Pv8AtF1dqzehZcW3Fz/RqJAcHkD9IH+xuo9130lq1ZIaK7RsbXVY4B7XF4sDC6rbu2e33n1d21Q3t4af3VtDikAbIa2cDj3+hZTY5jjd6NjHAFjdvva5zBWz9ac277LW/wBWz1v+tqliftE59br7K8TEFjftFTbZLbBvZW13LnPu/mMj9J6f6P8AnVdyPrIyvFNlQaXE7vRf7nsh3ofpPa29rtzdn/XP3PSVbA6p0bPsfjNxywFv2h+4CC9rS679KLGv3s9X0f0lX6RnvY9NyYzGjodK9PT/AAWXBIe2Y1uf0h/0vlbeY+h2YWNfteA8Wm7cHNj85le9te5jD/O7f+4653rN/oPqeH+njsruFjWBxcKz6VVlld5bVZvfvr/4Ozf+j/P9Sx1bJw8gYz6mtxqHP+ym12pZSNv2jY5+7I9ZrNvpbPT/AEv+kYqvUsfEZlNy3hrqH44bRjNaQ5rAW7LLiGN/Rua5l2z/AAuZZbanctjhI2QeKj9EHHwk2TwnWv6y/S88ZeGMWu51m5lbG12sa4Fgf6WQWttbZ6W5r2Ve3/tP9Or/AEZsfMtuy8uir0BaLLMKhtpDW49VAsaxjWaMyHX/AKW+zY3/ALkfpa1ytLrsbKr2epc5n0R7ttkfpHtZDWWv37fU9zNl2z+utrpFmJmfWRhcbPXawsyTawMa/IE7nbWe6t32Zrasiv8A7Uf4Wz+cU4FA12Oqyo2T0THoh+30m7JbY2ybL2Qz6Rc57aq3sNLfT9tf0fp2/wDgXRn1qcBj7Kt2Za3d6MBo3CPWLXOdsrr/AD373f8AFIdxwBkWW2Yrssk/zvpsc1rdD6bXPPuq+j6jKv8Artv+DQrLX25DW4lwrxLKg66t8Nc5orf7mzva59jn/ovR9P0/+EVaUJVdcVdapmMxP0Wcd79i57cZzqqLxbQMs3kuu1LKth21iut7X21Y7WM9Fns2X2fzio39MoyfTDb3kvbLn2tLi9jCbW1WemGVN+k/6dX9H/mvS/mX6/p5NdLq7PTbc0NtDrSwsa1jR+l3+9ldn+kt9T6dexc/1brbcUHHodZdY5oDr3u2NDXQ+z064/wu7/CJ0J5ZERiACP4f4S04YRJJlY/xv+d6XLzjRjN9Cv8AS5duuRkOMhkO9T9Whw930GPvs/0SrX9SeYyWmL2NAc4AEz+bZU6z+ae1v7nvVO7KYXOiSHcg6caNbP5yALKC4PtDrI4rB2t8vcrkcWxNkoEj5P8A/9TD/avUm5h+0Wex50E6ASn6v1G6qtoqh0/ScuYv6m+1++dSoN6jbB3ukHsVHHFGJuI33XemIHDuA9X0z0Lj9oDQHsHuJOpK1PtePeA1xDT4lcPj9YOO07J11hWGZHUsgG6ra6YAr3BrnTI/Rh3847+Qz3psoAa7E6KiSQRT04zK+lvGbY4W1MeGBh4LnnbuMe5rambrFoPvZU1uURaaSdze7yIa3Rtn89Zu+g3/AK7/AIFU/qlhZldJ6j1Jja67BtoqsHuBDtu97X/Q/kb1q5FeJ1jGute59eDgtc52YQ2XGqS77Mzft/4L1LGsVaZBlwj1EEeVrOCyL0rX6tT6q9KxTuvcXW0kPeylx9QCt5sra255Z7MmuyqzY/8AR2fo/wBH+iWr1jN6f0vFffWHVMawOtIc7cdxbX7mOfve/wCh6nsfs+nYq+FfRj4OPcLBTY9oJpDmgNaHPAqY1oc92R+mq9X1rn/6Ox657re+435Hpl9BJrFj7f0ZH59+Kytzd3+Cr9jLf+H/AEb0yURKVH5evn+kniqdQNVue7nfWPq1eRXj2Y1jqhO670AGgFwO9hbFXqW1/S9VlnoomJ0+718bIwrXWPlrqLQRI3/u6fzlu7+a9P8A7cWV1boWZ0+up19bqW5TC6qp7gXiDt2v+i1v7/8Axb/7C67HyRkspwMek4VVoeXXVj02WMeG+m7Eso/Op3bdlv6Kv/C1XKYcIjGMfVv/AC4mXbU+n+X7qPK6fgP6rkttLvs2LDLDuhjC9urWvp9P/R/pv5zZv/trn8/rOR1CzJcTDYL/AKR3RH6PayWfm7PT/wCL/wC29PMw8PGaWYYyHVuJbfbaAdWBpdt91dvqu9X0brK/Tp9P/TfmYeXXdjvc121/2sD0qwZLWtPtp1/dY5vp/wDBqSBjGNROpCTrr2df6ruufkM3NY8taXPfa5oHAn09w+l+k9K3012Vo6dTjvyRU31XtFbbiAXWbRubsuqndXsd6n0/+trhPqz1I1C3Gsbtrc9jLPSqNrwCH1bne9j/AErHvb6vpNt/m/8ABWf0jtftGTNeK/Y4CoPDjucLG7S6043ptDPpH0/Yz1LKP01dP83Wm5cZo0wSAvtX2+bXObh+iyn1rfUtaQHMedljmFtjfsxPp7vV2M37G/6VY/U8j0A4XWsayl7SylzIsEt9aoO2m5rbGu/R7GbP6/8AOKf1jaC9nUMZodbX6b72PECKh9L7I9v6V9bnfTr/AHP0i5vLZk4te4M9Oi1oLLPa47CdzWssd72/T/wfppQA37o+bevqnyetdSrx/TZDabmNkHbYCz3O+g+tv0PUez2ezf6iyM7LfcC61xsc7u4z89Nv9ZSd6r9x9TcY1PfQKhdIfqTPmpogH6LqpgmTplIp/9Xy4tUdpRQE+0KTgW8SMVk8rd6O7pFOMx3UHusb6hNlBaSxrWxtc7Z73te4rIAU2Dn4QicQkKW+4Qbe7yeuYud09pxsunEpY0VATue1rR7fQxoZu4Rb78ej6pXYXT73WerXtBe4VkNdYLbi95Oxtl2//XYuCbY9rtzTB0Ejy0C2aurD9hV4rnNc+ux/qscASWv1qfq327Hj2fy1Vlyxx1LeIlxKEhelvQda6tUMa6kk4dgDWlgAFhbHqO9SjaxzrrXf9bWPg34OV1PGaB7DG1t4BAtDf0TXMr2NdWx+yx/82squ6u+592Qx17dxcaq3CsE/S97nB7vT/e2K7h9Huzg29kVX5AddRWWy22tpLLC5zPdWx1jXs/6v6agMdCCSPHsyxEYASkauh9XY+sOBf1bqz7G5DvslTGMY2uouZ7W7r3+q4tqY+zIdapdIwM7p7drMu841ocW1em706rG/n+r721/8G+v6apYPTuoU5HpZFbW2EEux2w4AEQxrme72N/0m/fXYzYtgZvXKhvoyGUgk0hhb7Q4N/Nuj6NjrP8/9Gz06v55lGIqUhwiqFaLp5AImX7XCvxb3222usINri2bSWNAM799Xv25Nrfezd/gv5v8A4O30+lvoWMysa3Irgl3oPa+xjX/o/tLQR/hbHfmu/wAD+k/l329Qw89uScysjOw64dfivdteC/8AmnOpd9JmR7/T3++ll1tX+EUukYPUsW1j7r6bcZzHNuocw/o3PHsLGO2WW+lW3cyu5jP3LU8kAGwI0Ovp/wAQojMyAI2JSdL6fj9Gyuo1Y7vRtayn08iNx9M7vR9hGy1z3j9Lt9L9Nb+k/fUbes2u21Pc26wEF5Y51DiCG2WNd6HqezZ+kb7P+KsVPqnWGY93ouaWEgNfU1xJMgs97rd+xtW3YsbKxWuxnXMa5jngba2EBgJ93Zps7/o9385+f6ajE5zIJlw+P7395iz4sgmDGyD27vQZ3Vek30uZmOdiXF4aGxubDnDe1j6vo769+/6HprkcXqhNrhduvbu0l5+jJLg0S1r90/QsQbL3FxbYXvLWlrWOIdtgH1N0Bu7l/v2KH26+toNH6GBDdrRJmR9J273OVjHAgV362mIMR6tZHcfovQX9OwMv9Jhv2tABAad4a4/S30t/TVu/7eo9Ni5jqVRqvDSQ46+5vB/ltmHe/wDlLabiutx2ufkNFrQQwFrW2PftrIabAXb36bf9MsbqbbW3BlzYewEFw1DwHFvqN/kOTscSD83F+a67DSSTplOp/9bzIKYUQFMKyAwlUKQB5SAUgnALCVgEi4tBjvypQhXHRGQ0Nqjuxr3X2toYBvsIa2SGjX+U/az/ADl3NZwGYbcFzXbOn7q26Bjw6d/vsZt9PIdtb9Cv0/T9l36TK9arhcOyqnMotubvqrsY6xpEy0EF3t9u5d19pL863DxhXe7L2tuttLjXvaHfv/zr/R/na7P+E/wyzuYGw/AL8p+Xs6/SrMMvFG4es4OeCYLg10bG/wAhr532V/zaf6wvrx/q3kxu9QtrfSKgXvDwW2eo17W7mVV7Xb7P/PaxekPrwupZF9hLKH1kn1GOdcyHegwNdHqO9N7bN9tn8/8Azn88n6ll51/WmsFNrqnFzSTYYsYR7ybKt/6tvd7WV/4PZs/4KCEZGW+kRxH/AL1kiIyiddK6twXNx7sDDph1TfTeNpcG7bB/SN13qMe6t1lnpW17/S/SektrM6pi0vsawhtroa5zwDOsurv9SPzfU2rnepHHzGudU77V1TDdqGODQ4OP6OLXtf7dzf8Arf8AM/zavZmZXSw5OSwVb7BS0AExoyy4OdUze/G9nqWbf5z9J+iT5yiTAAHUmMx+lxf90vGICA0+UaV11anUsbpWX6mRbkY+PkV6i6xpc9pcR7W7ne//AAnpbKcjY/8A8Epuv6JXhsxca+66uv2Nitzoc50/p7rDRT6j49uxjP8AMWf1C7BHqOxsQ0vpALiNIZsLdm18+9nqtf8Azn59azftznVgPHn6bTtkfm+pZX9NOOHFQJ4q/RjbJEnp+P8A6CrMx6se00gBtg4eZh0wf0b/AHsd6bvZv/PVW2kjR/sDZAHIk+5ug/ORLbsYP9SHBj3OPpHQT+dO3/qFXspdZV6lQkNI45/rORj9R5rJRs6fglpLiGtbYWh+gaO5j+SoOvyMfLDTWHWgFljHDcHh2hY78538lAc/0yGzuadSR46fR/q7VYZ1Gtt1eRY0330fzJJIEjWv1f8Ain+72J3CQbriCbFdmpkVelbs2lmgOxxBcJHDtqEpPc57y953OcSXE9yUykF0LWF//9fzUKQCiFMBWw1yyATgJBSATwFhKkJ7JKOAlsEomNoEqappJEjnst3Gzi9tt1uS7GIsc6lwIL5skv2U1se+36Xv9np/8Ws4NTbYO4D3NmDAMSNvdQ5uWEwO42Txg1xdHYx+rnHcMh7XuNjgzHL3NNrmgw59m+z9C38z/wBW22qWV1/NxHOsstORU1zmYgY4tY6C31PW9JzbK76qHuq/wf8A139IudsynMe2WtLmcOjuDubIMt7KL+oOfc14rbUxpEV16NaBG702mdu/85UTgo6jb+XpbMQKFbN/9oEPyH4pFdGTtL2OaBDm+7dVv91fpuWl0nreZjmLcp9rHuAILtzhucx/6BjPd6vuesRmXUb3iqsOY8AAOgan6Vvv37XLQoY9mS24OZU9+0G2sgmLXWeo4ep9CxtrWN3Nd61aU8QkDYvzXxmQa2bXUR1HLynV27HW2vOOHbQwNDX+221231N27b6lvqe9lf6RZN2JbQbclpD6mPNZc3gkez6JP0f7K1zgU42Ux9ZLwwOsa5zt2rR+f6jWsd73M/tqn1h4Zi7Axj77HGy21pdvaCP5l7Xez2/4T/hFEJSEowJsEfgyAxMSQKo7eLRsdS9o9SNp1Djp/WG0bfoqp9oNZeA1vuaWd9ARHY/9UhOse8yT92igrAgAxmVsi6W7Y7zPdMmTp6FJJJwElP8A/9DzYKYUAphXA1izH+5TAUG+PgpiSfM+CeFhZAa6J4800KScFhVCWokeOiXZOGyQ3xRQ0MlmsqqQtO6rcCqxxiq2XGSbDax5BVEtWERt9jWemdWzIHgR3b+6rDMXxTux2wmexKl3uxtFZ1DLtDW3WG0MYa2B+sNP7qAXvMy4+76WvMeKK+hw4Qi0jlRmBG4Xgg7MU6UKQbKFJYwnhTDE+1OEUcTCE6lCaEeFFv8A/9n/7SfKUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAA8cAVoAAxslRxwCAAACAAAAOEJJTQQlAAAAAAAQzc/6fajHvgkFcHaurwXDTjhCSU0EOgAAAAAA5QAAABAAAAABAAAAAAALcHJpbnRPdXRwdXQAAAAFAAAAAFBzdFNib29sAQAAAABJbnRlZW51bQAAAABJbnRlAAAAAENscm0AAAAPcHJpbnRTaXh0ZWVuQml0Ym9vbAAAAAALcHJpbnRlck5hbWVURVhUAAAAAQAAAAAAD3ByaW50UHJvb2ZTZXR1cE9iamMAAAAMAFAAcgBvAG8AZgAgAFMAZQB0AHUAcAAAAAAACnByb29mU2V0dXAAAAABAAAAAEJsdG5lbnVtAAAADGJ1aWx0aW5Qcm9vZgAAAAlwcm9vZkNNWUsAOEJJTQQ7AAAAAAItAAAAEAAAAAEAAAAAABJwcmludE91dHB1dE9wdGlvbnMAAAAXAAAAAENwdG5ib29sAAAAAABDbGJyYm9vbAAAAAAAUmdzTWJvb2wAAAAAAENybkNib29sAAAAAABDbnRDYm9vbAAAAAAATGJsc2Jvb2wAAAAAAE5ndHZib29sAAAAAABFbWxEYm9vbAAAAAAASW50cmJvb2wAAAAAAEJja2dPYmpjAAAAAQAAAAAAAFJHQkMAAAADAAAAAFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBSAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAAAAAAQY3JvcFdoZW5QcmludGluZ2Jvb2wAAAAADmNyb3BSZWN0Qm90dG9tbG9uZwAAAAAAAAAMY3JvcFJlY3RMZWZ0bG9uZwAAAAAAAAANY3JvcFJlY3RSaWdodGxvbmcAAAAAAAAAC2Nyb3BSZWN0VG9wbG9uZwAAAAAAOEJJTQPtAAAAAAAQAEgAAAABAAEASAAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAThCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQREAAAAAAAQAAAAAgAAAkAAAAJAAAAAADhCSU0ESQAAAAAABAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANRAAAABgAAAAAAAAAAAAABqwAAAasAAAAOAGYAYQBsAGwAYgBhAGMAawAtAGkAbQBhAGcAZQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABqwAAAasAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAasAAAAAUmdodGxvbmcAAAGrAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVl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dHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJFRDEyNTE3NUY4NEUxOEUyQkU5MkM5QzYyRTRFNkQ3QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowODU1YmI1Ni1hNjg2LTRlZDctYmQ3My00OWI0Y2Q4NTc3NjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iRUQxMjUxNzVGODRFMThFMkJFOTJDOUM2MkU0RTZEN0EiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMTItMDJUMjE6MTM6MTktMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMTItMDJUMjE6MjA6NTEtMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTEyLTAyVDIxOjIwOjUxLTA4OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDg1NWJiNTYtYTY4Ni00ZWQ3LWJkNzMtNDliNGNkODU3NzY3IiBzdEV2dDp3aGVuPSIyMDI1LTEyLTAyVDIxOjIwOjUxLTA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjcuMSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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", OA = "data:image/png;base64,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", PA = "data:image/png;base64,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", LA = "data:image/png;base64,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", jA = "data:image/png;base64,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", WA = "data:image/png;base64,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", VA = "data:image/png;base64,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", DA = "data:image/png;base64,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", NA = "data:image/png;base64,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", FA = "data:image/png;base64,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";
function GA({
  index: e,
  item: t,
  onAddToCart: r = null
}) {
  const n = {
    beta_caryophylene: PA,
    bisabolol: OA,
    delta_limonene: jA,
    humulene: LA,
    linalool: WA,
    myrcene: VA,
    ocimene: DA,
    pinene: NA,
    terpinolene: FA
  }, i = {
    bisabolol: "Bisabolol",
    borneol: "Borneol",
    camphene: "Camphene",
    three_carene: "3-Carene",
    alpha_caryophylene: "α-Caryophylene",
    beta_caryophylene: "β-Caryophylene",
    alpha_cedrene: "α-Cedrene",
    cedrol: "Cedrol",
    eight_cineole: "8-Cineole",
    eucalyptol: "Eucalyptol",
    farnesene: "Farnesene",
    fenchol: "Fenchol",
    fenchone: "Fenchone",
    geraniol: "Geraniol",
    geranyl_a: "Geranyl-A",
    guaiol: "Guaiol",
    hexahydrothymol: "Hexahydrothymol",
    humulene: "Humulene",
    isoborneol: "Isoborneol",
    isopulegol: "Isopulegol",
    delta_limonene: "δ-Limonene",
    linalool: "Linalool",
    p_mentha: "P-Mentha",
    myrcene: "Myrcene",
    nerol: "Nerol",
    nerolidol: "Nerolidol",
    ocimene: "Ocimene",
    phytol: "Phytol",
    pinene: "Pinene",
    beta_pinene: "β-Pinene",
    pulegone: "Pulegone",
    sabinene: "Sabinene",
    sabinene_h: "Sabinene-H",
    alpha_terpinene: "α-Terpinene",
    gamma_terpinene: "γ-Terpinene",
    alpha_terpineol: "α-Terpineol",
    gamma_terpineol: "γ-Terpineol",
    terpinolene: "Terpinolene",
    valencene: "Valencene"
  }, o = {
    delta_limonene: "Hints of Citrus",
    linalool: "Floral Hints",
    alpha_caryophylene: "Hints of Pepper",
    beta_caryophylene: "Hints of Pepper",
    humulene: "Hints of Spice",
    myrcene: "Earthy Aroma Hints",
    ocimene: "Minty Aroma Hints",
    bisabolol: "Floral & Woody Aroma Hints",
    terpinolene: "Hints of Herbal & Pine",
    pinene: "Hints of Pine",
    beta_pinene: "Hints of Pine"
  }, a = Se.div`
    background: #ffffff;
    border: 2px solid #cecece;
    border-radius: 30px;
    text-align: center;
    overflow: hidden;
  `, l = Se.div`
    padding: 10px 15px;
  `, s = Se.div`
    font-size: 125%;
    font-weight: 700;
    color: #e4002b;
    margin-bottom: 0.5em;
  `, c = Se.div`
    font-size: 100%;
    font-weight: 500;
    text-transform: uppercase;
  `, u = Se.div`
    font-size: 100%;
    font-weight: 500;
    text-transform: uppercase;
    color: #e4002b;
    margin-bottom: 0.5em;
  `, d = Se.div`
    font-size: 125%;
    font-weight: 700;
  `, y = Se.div`
    font-size: 100%;
    font-weight: 500;
  `, A = Se.div`
    margin-top: 10px;
    border-color: #cecece;
    border-width: 2px;
    border-radius: 32px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
  `, g = Se.div`
    color: #adadad;
    font-size: 75%;
    font-weight: 600;
    text-transform: uppercase;
  `, f = Se.button`
    margin-top: 10px;
    width: 100%;
    background-color: #e4002b;
    border-radius: 32px;
    color: white;
    font-size: 100%;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: #bf0030;
    }
  `, v = Se.img`
    margin-inline: auto;
  `, m = () => Object.entries(t.terpenes).sort((h, b) => b[1] - h[1]).map((h) => h[0]).slice(0, 3);
  return /* @__PURE__ */ X.jsxs(a, { children: [
    /* @__PURE__ */ X.jsx(
      v,
      {
        src: t.image_url || MA,
        width: 244,
        height: 218
      }
    ),
    /* @__PURE__ */ X.jsxs(l, { children: [
      /* @__PURE__ */ X.jsx(s, { children: t.strain }),
      /* @__PURE__ */ X.jsxs(c, { children: [
        "THC: ",
        t.thc_content,
        "% | ",
        t.cannabis_type.toUpperCase()
      ] }),
      /* @__PURE__ */ X.jsx(u, { children: t.brand }),
      /* @__PURE__ */ X.jsxs(d, { children: [
        "$",
        t.price
      ] }),
      /* @__PURE__ */ X.jsxs(y, { children: [
        t.grams,
        "g"
      ] }),
      /* @__PURE__ */ X.jsx(A, { children: m().map((h, b) => /* @__PURE__ */ X.jsx(Ns, { title: `${i[h]}: ${o[h]}`, arrow: !0, children: /* @__PURE__ */ X.jsx("img", { src: n[h], alt: i[h], width: 53, height: 53 }, h) }, h)) }),
      /* @__PURE__ */ X.jsx(g, { children: "Terpene Profile" }),
      /* @__PURE__ */ X.jsx(f, { onClick: () => r(t), children: "Add to Cart" })
    ] })
  ] });
}
const BA = (e) => /* @__PURE__ */ F.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 140 306.1", ...e }, /* @__PURE__ */ F.createElement("defs", null, /* @__PURE__ */ F.createElement("style", null, `
      .cls-1 {
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 10px;
      }
    `)), /* @__PURE__ */ F.createElement("path", { className: "cls-1", d: "M139.81,301.1h-68.7V80.6l-49.56,11.76L6.01,29.36,92.11,5h47.7" })), HA = (e) => /* @__PURE__ */ F.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 155 309.04", ...e }, /* @__PURE__ */ F.createElement("defs", null, /* @__PURE__ */ F.createElement("style", null, `
      .cls-1 {
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 10px;
      }
    `)), /* @__PURE__ */ F.createElement("path", { className: "cls-1", d: "M173.72,237.68h-57.19l50.4-35.28c2.32-1.68,4.58-3.33,6.79-4.97" }), /* @__PURE__ */ F.createElement("path", { className: "cls-1", d: "M173.72,12.93c-13.93-5.15-29.79-7.93-47.11-7.93-56.7,0-88.2,22.26-119.7,63l55.02,45.78c23.1-26.46,38.64-38.22,58.38-38.22s33.18,11.34,33.18,30.24c0,17.64-10.92,31.5-38.22,52.92L5.23,242.72v61.32h168.49" })), JA = (e) => /* @__PURE__ */ F.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 155 309.88", ...e }, /* @__PURE__ */ F.createElement("defs", null, /* @__PURE__ */ F.createElement("style", null, `
      .cls-1 {
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 10px;
      }
    `)), /* @__PURE__ */ F.createElement("path", { className: "cls-1", d: "M158.2,5H27.52v65.94h112.14l-67.2,60.9,11.34,42.42h34.44c18.64,0,32.14,4.08,39.96,11.43" }), /* @__PURE__ */ F.createElement("path", { className: "cls-1", d: "M158.2,225.13c-6.45,6.37-16.58,10.03-29.46,10.03-27.3,0-49.14-12.18-70.14-33.6L6.94,252.8c28.98,31.5,68.46,52.08,125.16,52.08,9.07,0,17.79-.74,26.1-2.15" }));
function ya({
  storeSlug: e,
  productType: t,
  type: r = "value",
  minimumPrice: n = null,
  maximumPrice: i = null,
  count: o = 3,
  originalMenuItemId: a = null,
  baseUrl: l = "https://demo-api.littledragon.keithswork.com",
  onAddToCart: s = null
}) {
  const [c, u] = at(null), [d, y] = at(!0), [A, g] = at(null), [f, v] = at(""), m = {
    value: "#32936f",
    exotic: "#2274a5",
    similar: "#e4002b",
    best: "#ffbf00"
  }, h = (M) => M === "best" ? "Best Overall" : M === "value" ? "Best Value - High Quality Terpene Profiles" : M === "exotic" ? "Rare & Standout Terpene Profiles" : M === "similar" ? `Because You Bought: ${f}` : "", b = (M) => M === "similar" ? "Curated recommendations inspired by your recent purchases. More of what you're likely to love" : "Terpenes give Cannabis its aroma, flavor & quality", x = Se.div`
    background: ${m[r]};
    padding: 6px;
    border-radius: 30px;
    max-width: 1410px;
    margin-inline: auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
  `, S = Se.div`
    background: white;
    border-radius: 30px;
    margin-inline: auto;
  `, w = Se.div`
    padding: 3rem;
    text-align: center;
  `, T = Se.p`
    margin-top: 1rem;
    color: rgb(75, 85, 99);
  `, I = Se.h2`
    color: white;
    font-size: 150%;
    margin: 20px;
    padding: 0;
    line-height: 1;
    font-weight: 800;
    text-transform: uppercase;
  `, V = Se.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  `, P = Se.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  `;
  return Or(() => {
    (async () => {
      y(!0), g(null);
      try {
        const p = await fetch(
          `${l}/${e}/recommendations/${t}?type=${r}&min_price=${n}&max_price=${i}&original_id=${a}&count=${o}`
        );
        if (!p.ok)
          throw new Error(`HTTP error! status: ${p.status}`);
        const R = await p.json();
        u(R.recommendations), R.original ? v(`${R.original.brand} ${R.original.strain}`) : v(null);
      } catch (p) {
        g(p.message), u(null);
      } finally {
        y(!1);
      }
    })();
  }, [e, r, n, i, o, l, a]), /* @__PURE__ */ X.jsxs(x, { children: [
    /* @__PURE__ */ X.jsx(I, { children: /* @__PURE__ */ X.jsx(Tooltip, { title: b(r), arrow: !0, children: h(r) }) }),
    /* @__PURE__ */ X.jsxs(S, { children: [
      d && /* @__PURE__ */ X.jsx(w, { children: /* @__PURE__ */ X.jsx(T, { children: "Loading recommendations..." }) }),
      A && r === "similar" && a === null && /* @__PURE__ */ X.jsx(w, { children: /* @__PURE__ */ X.jsx(T, { children: "No original item selected to do a recommendation of similar items" }) }),
      !d && !A && (!c || c.length === 0) && /* @__PURE__ */ X.jsx(w, { children: /* @__PURE__ */ X.jsx(T, { children: "No recommendations found" }) }),
      !d && !A && c && /* @__PURE__ */ X.jsx(V, { children: c.map((M, p) => /* @__PURE__ */ X.jsxs(P, { children: [
        p === 0 && /* @__PURE__ */ X.jsx(BA, { height: 300, style: { color: m[r], opacity: 0.5, marginBottom: "50px" } }),
        p === 1 && /* @__PURE__ */ X.jsx(HA, { height: 300, style: { color: m[r], opacity: 0.5, marginBottom: "50px" } }),
        p === 2 && /* @__PURE__ */ X.jsx(JA, { height: 300, style: { color: m[r], opacity: 0.5, marginBottom: "50px" } }),
        /* @__PURE__ */ X.jsx(GA, { item: M, onAddToCart: s })
      ] }, p)) })
    ] })
  ] });
}
function Fs(e, t, r, n) {
  return e.params.createElements && Object.keys(n).forEach((i) => {
    if (!r[i] && r.auto === !0) {
      let o = st(e.el, `.${n[i]}`)[0];
      o || (o = gn("div", n[i]), o.className = n[i], e.el.append(o)), r[i] = o, t[i] = o;
    }
  }), r;
}
const va = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
function ZA({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n
}) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      addIcons: !0,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), e.navigation = {
    nextEl: null,
    prevEl: null,
    arrowSvg: va
  };
  function i(A) {
    let g;
    return A && typeof A == "string" && e.isElement && (g = e.el.querySelector(A) || e.hostEl.querySelector(A), g) ? g : (A && (typeof A == "string" && (g = [...document.querySelectorAll(A)]), e.params.uniqueNavElements && typeof A == "string" && g && g.length > 1 && e.el.querySelectorAll(A).length === 1 ? g = e.el.querySelector(A) : g && g.length === 1 && (g = g[0])), A && !g ? A : g);
  }
  function o(A, g) {
    const f = e.params.navigation;
    A = Te(A), A.forEach((v) => {
      v && (v.classList[g ? "add" : "remove"](...f.disabledClass.split(" ")), v.tagName === "BUTTON" && (v.disabled = g), e.params.watchOverflow && e.enabled && v.classList[e.isLocked ? "add" : "remove"](f.lockClass));
    });
  }
  function a() {
    const {
      nextEl: A,
      prevEl: g
    } = e.navigation;
    if (e.params.loop) {
      o(g, !1), o(A, !1);
      return;
    }
    o(g, e.isBeginning && !e.params.rewind), o(A, e.isEnd && !e.params.rewind);
  }
  function l(A) {
    A.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), n("navigationPrev"));
  }
  function s(A) {
    A.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), n("navigationNext"));
  }
  function c() {
    const A = e.params.navigation;
    if (e.params.navigation = Fs(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(A.nextEl || A.prevEl)) return;
    let g = i(A.nextEl), f = i(A.prevEl);
    Object.assign(e.navigation, {
      nextEl: g,
      prevEl: f
    }), g = Te(g), f = Te(f);
    const v = (m, h) => {
      if (m) {
        if (A.addIcons && m.matches(".swiper-button-next,.swiper-button-prev") && !m.querySelector("svg")) {
          const b = document.createElement("div");
          Pr(b, va), m.appendChild(b.querySelector("svg")), b.remove();
        }
        m.addEventListener("click", h === "next" ? s : l);
      }
      !e.enabled && m && m.classList.add(...A.lockClass.split(" "));
    };
    g.forEach((m) => v(m, "next")), f.forEach((m) => v(m, "prev"));
  }
  function u() {
    let {
      nextEl: A,
      prevEl: g
    } = e.navigation;
    A = Te(A), g = Te(g);
    const f = (v, m) => {
      v.removeEventListener("click", m === "next" ? s : l), v.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    A.forEach((v) => f(v, "next")), g.forEach((v) => f(v, "prev"));
  }
  r("init", () => {
    e.params.navigation.enabled === !1 ? y() : (c(), a());
  }), r("toEdge fromEdge lock unlock", () => {
    a();
  }), r("destroy", () => {
    u();
  }), r("enable disable", () => {
    let {
      nextEl: A,
      prevEl: g
    } = e.navigation;
    if (A = Te(A), g = Te(g), e.enabled) {
      a();
      return;
    }
    [...A, ...g].filter((f) => !!f).forEach((f) => f.classList.add(e.params.navigation.lockClass));
  }), r("click", (A, g) => {
    let {
      nextEl: f,
      prevEl: v
    } = e.navigation;
    f = Te(f), v = Te(v);
    const m = g.target;
    let h = v.includes(m) || f.includes(m);
    if (e.isElement && !h) {
      const b = g.path || g.composedPath && g.composedPath();
      b && (h = b.find((x) => f.includes(x) || v.includes(x)));
    }
    if (e.params.navigation.hideOnClick && !h) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === m || e.pagination.el.contains(m))) return;
      let b;
      f.length ? b = f[0].classList.contains(e.params.navigation.hiddenClass) : v.length && (b = v[0].classList.contains(e.params.navigation.hiddenClass)), n(b === !0 ? "navigationShow" : "navigationHide"), [...f, ...v].filter((x) => !!x).forEach((x) => x.classList.toggle(e.params.navigation.hiddenClass));
    }
  });
  const d = () => {
    e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), a();
  }, y = () => {
    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u();
  };
  Object.assign(e.navigation, {
    enable: d,
    disable: y,
    update: a,
    init: c,
    destroy: u
  });
}
function Sr(e = "") {
  return `.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
function qA({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n
}) {
  const i = "swiper-pagination";
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
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (m) => m,
      formatFractionTotal: (m) => m,
      bulletClass: `${i}-bullet`,
      bulletActiveClass: `${i}-bullet-active`,
      modifierClass: `${i}-`,
      currentClass: `${i}-current`,
      totalClass: `${i}-total`,
      hiddenClass: `${i}-hidden`,
      progressbarFillClass: `${i}-progressbar-fill`,
      progressbarOppositeClass: `${i}-progressbar-opposite`,
      clickableClass: `${i}-clickable`,
      lockClass: `${i}-lock`,
      horizontalClass: `${i}-horizontal`,
      verticalClass: `${i}-vertical`,
      paginationDisabledClass: `${i}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let o, a = 0;
  function l() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function s(m, h) {
    const {
      bulletActiveClass: b
    } = e.params.pagination;
    m && (m = m[`${h === "prev" ? "previous" : "next"}ElementSibling`], m && (m.classList.add(`${b}-${h}`), m = m[`${h === "prev" ? "previous" : "next"}ElementSibling`], m && m.classList.add(`${b}-${h}-${h}`)));
  }
  function c(m, h, b) {
    if (m = m % b, h = h % b, h === m + 1)
      return "next";
    if (h === m - 1)
      return "previous";
  }
  function u(m) {
    const h = m.target.closest(Sr(e.params.pagination.bulletClass));
    if (!h)
      return;
    m.preventDefault();
    const b = hn(h) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === b) return;
      const x = c(e.realIndex, b, e.slides.length);
      x === "next" ? e.slideNext() : x === "previous" ? e.slidePrev() : e.slideToLoop(b);
    } else
      e.slideTo(b);
  }
  function d() {
    const m = e.rtl, h = e.params.pagination;
    if (l()) return;
    let b = e.pagination.el;
    b = Te(b);
    let x, S;
    const w = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, T = e.params.loop ? Math.ceil(w / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (S = e.previousRealIndex || 0, x = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (x = e.snapIndex, S = e.previousSnapIndex) : (S = e.previousIndex || 0, x = e.activeIndex || 0), h.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const I = e.pagination.bullets;
      let V, P, M;
      if (h.dynamicBullets && (o = hi(I[0], e.isHorizontal() ? "width" : "height"), b.forEach((p) => {
        p.style[e.isHorizontal() ? "width" : "height"] = `${o * (h.dynamicMainBullets + 4)}px`;
      }), h.dynamicMainBullets > 1 && S !== void 0 && (a += x - (S || 0), a > h.dynamicMainBullets - 1 ? a = h.dynamicMainBullets - 1 : a < 0 && (a = 0)), V = Math.max(x - a, 0), P = V + (Math.min(I.length, h.dynamicMainBullets) - 1), M = (P + V) / 2), I.forEach((p) => {
        const R = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((k) => `${h.bulletActiveClass}${k}`)].map((k) => typeof k == "string" && k.includes(" ") ? k.split(" ") : k).flat();
        p.classList.remove(...R);
      }), b.length > 1)
        I.forEach((p) => {
          const R = hn(p);
          R === x ? p.classList.add(...h.bulletActiveClass.split(" ")) : e.isElement && p.setAttribute("part", "bullet"), h.dynamicBullets && (R >= V && R <= P && p.classList.add(...`${h.bulletActiveClass}-main`.split(" ")), R === V && s(p, "prev"), R === P && s(p, "next"));
        });
      else {
        const p = I[x];
        if (p && p.classList.add(...h.bulletActiveClass.split(" ")), e.isElement && I.forEach((R, k) => {
          R.setAttribute("part", k === x ? "bullet-active" : "bullet");
        }), h.dynamicBullets) {
          const R = I[V], k = I[P];
          for (let j = V; j <= P; j += 1)
            I[j] && I[j].classList.add(...`${h.bulletActiveClass}-main`.split(" "));
          s(R, "prev"), s(k, "next");
        }
      }
      if (h.dynamicBullets) {
        const p = Math.min(I.length, h.dynamicMainBullets + 4), R = (o * p - o) / 2 - M * o, k = m ? "right" : "left";
        I.forEach((j) => {
          j.style[e.isHorizontal() ? k : "top"] = `${R}px`;
        });
      }
    }
    b.forEach((I, V) => {
      if (h.type === "fraction" && (I.querySelectorAll(Sr(h.currentClass)).forEach((P) => {
        P.textContent = h.formatFractionCurrent(x + 1);
      }), I.querySelectorAll(Sr(h.totalClass)).forEach((P) => {
        P.textContent = h.formatFractionTotal(T);
      })), h.type === "progressbar") {
        let P;
        h.progressbarOpposite ? P = e.isHorizontal() ? "vertical" : "horizontal" : P = e.isHorizontal() ? "horizontal" : "vertical";
        const M = (x + 1) / T;
        let p = 1, R = 1;
        P === "horizontal" ? p = M : R = M, I.querySelectorAll(Sr(h.progressbarFillClass)).forEach((k) => {
          k.style.transform = `translate3d(0,0,0) scaleX(${p}) scaleY(${R})`, k.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      h.type === "custom" && h.renderCustom ? (Pr(I, h.renderCustom(e, x + 1, T)), V === 0 && n("paginationRender", I)) : (V === 0 && n("paginationRender", I), n("paginationUpdate", I)), e.params.watchOverflow && e.enabled && I.classList[e.isLocked ? "add" : "remove"](h.lockClass);
    });
  }
  function y() {
    const m = e.params.pagination;
    if (l()) return;
    const h = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let b = e.pagination.el;
    b = Te(b);
    let x = "";
    if (m.type === "bullets") {
      let S = e.params.loop ? Math.ceil(h / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && S > h && (S = h);
      for (let w = 0; w < S; w += 1)
        m.renderBullet ? x += m.renderBullet.call(e, w, m.bulletClass) : x += `<${m.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${m.bulletClass}"></${m.bulletElement}>`;
    }
    m.type === "fraction" && (m.renderFraction ? x = m.renderFraction.call(e, m.currentClass, m.totalClass) : x = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`), m.type === "progressbar" && (m.renderProgressbar ? x = m.renderProgressbar.call(e, m.progressbarFillClass) : x = `<span class="${m.progressbarFillClass}"></span>`), e.pagination.bullets = [], b.forEach((S) => {
      m.type !== "custom" && Pr(S, x || ""), m.type === "bullets" && e.pagination.bullets.push(...S.querySelectorAll(Sr(m.bulletClass)));
    }), m.type !== "custom" && n("paginationRender", b[0]);
  }
  function A() {
    e.params.pagination = Fs(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const m = e.params.pagination;
    if (!m.el) return;
    let h;
    typeof m.el == "string" && e.isElement && (h = e.el.querySelector(m.el)), !h && typeof m.el == "string" && (h = [...document.querySelectorAll(m.el)]), h || (h = m.el), !(!h || h.length === 0) && (e.params.uniqueNavElements && typeof m.el == "string" && Array.isArray(h) && h.length > 1 && (h = [...e.el.querySelectorAll(m.el)], h.length > 1 && (h = h.find((b) => Ea(b, ".swiper")[0] === e.el))), Array.isArray(h) && h.length === 1 && (h = h[0]), Object.assign(e.pagination, {
      el: h
    }), h = Te(h), h.forEach((b) => {
      m.type === "bullets" && m.clickable && b.classList.add(...(m.clickableClass || "").split(" ")), b.classList.add(m.modifierClass + m.type), b.classList.add(e.isHorizontal() ? m.horizontalClass : m.verticalClass), m.type === "bullets" && m.dynamicBullets && (b.classList.add(`${m.modifierClass}${m.type}-dynamic`), a = 0, m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)), m.type === "progressbar" && m.progressbarOpposite && b.classList.add(m.progressbarOppositeClass), m.clickable && b.addEventListener("click", u), e.enabled || b.classList.add(m.lockClass);
    }));
  }
  function g() {
    const m = e.params.pagination;
    if (l()) return;
    let h = e.pagination.el;
    h && (h = Te(h), h.forEach((b) => {
      b.classList.remove(m.hiddenClass), b.classList.remove(m.modifierClass + m.type), b.classList.remove(e.isHorizontal() ? m.horizontalClass : m.verticalClass), m.clickable && (b.classList.remove(...(m.clickableClass || "").split(" ")), b.removeEventListener("click", u));
    })), e.pagination.bullets && e.pagination.bullets.forEach((b) => b.classList.remove(...m.bulletActiveClass.split(" ")));
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const m = e.params.pagination;
    let {
      el: h
    } = e.pagination;
    h = Te(h), h.forEach((b) => {
      b.classList.remove(m.horizontalClass, m.verticalClass), b.classList.add(e.isHorizontal() ? m.horizontalClass : m.verticalClass);
    });
  }), r("init", () => {
    e.params.pagination.enabled === !1 ? v() : (A(), y(), d());
  }), r("activeIndexChange", () => {
    typeof e.snapIndex > "u" && d();
  }), r("snapIndexChange", () => {
    d();
  }), r("snapGridLengthChange", () => {
    y(), d();
  }), r("destroy", () => {
    g();
  }), r("enable disable", () => {
    let {
      el: m
    } = e.pagination;
    m && (m = Te(m), m.forEach((h) => h.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), r("lock unlock", () => {
    d();
  }), r("click", (m, h) => {
    const b = h.target, x = Te(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && x && x.length > 0 && !b.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && b === e.navigation.nextEl || e.navigation.prevEl && b === e.navigation.prevEl)) return;
      const S = x[0].classList.contains(e.params.pagination.hiddenClass);
      n(S === !0 ? "paginationShow" : "paginationHide"), x.forEach((w) => w.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const f = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: m
    } = e.pagination;
    m && (m = Te(m), m.forEach((h) => h.classList.remove(e.params.pagination.paginationDisabledClass))), A(), y(), d();
  }, v = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: m
    } = e.pagination;
    m && (m = Te(m), m.forEach((h) => h.classList.add(e.params.pagination.paginationDisabledClass))), g();
  };
  Object.assign(e.pagination, {
    enable: f,
    disable: v,
    render: y,
    update: d,
    init: A,
    destroy: g
  });
}
function zA({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n,
  params: i
}) {
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, t({
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
  let o, a, l = i && i.autoplay ? i.autoplay.delay : 3e3, s = i && i.autoplay ? i.autoplay.delay : 3e3, c, u = (/* @__PURE__ */ new Date()).getTime(), d, y, A, g, f, v;
  function m(D) {
    !e || e.destroyed || !e.wrapperEl || D.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", m), !(v || D.detail && D.detail.bySwiperTouchMove) && V());
  }
  const h = () => {
    if (e.destroyed || !e.autoplay.running) return;
    e.autoplay.paused ? d = !0 : d && (s = c, d = !1);
    const D = e.autoplay.paused ? c : u + s - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = D, n("autoplayTimeLeft", D, D / l), a = requestAnimationFrame(() => {
      h();
    });
  }, b = () => {
    let D;
    return e.virtual && e.params.virtual.enabled ? D = e.slides.find((J) => J.classList.contains("swiper-slide-active")) : D = e.slides[e.activeIndex], D ? parseInt(D.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, x = () => {
    let D = e.params.autoplay.delay;
    const W = b();
    return !Number.isNaN(W) && W > 0 && (D = W), D;
  }, S = (D) => {
    if (e.destroyed || !e.autoplay.running) return;
    cancelAnimationFrame(a), h();
    let W = D;
    typeof W > "u" && (W = x(), l = W, s = W), c = W;
    const J = e.params.speed, O = () => {
      !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(J, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, J, !0, !0), n("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(J, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, J, !0, !0), n("autoplay")), e.params.cssMode && (u = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        S();
      })));
    };
    return W > 0 ? (clearTimeout(o), o = setTimeout(() => {
      O();
    }, W)) : requestAnimationFrame(() => {
      O();
    }), W;
  }, w = () => {
    u = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, S(), n("autoplayStart");
  }, T = () => {
    e.autoplay.running = !1, clearTimeout(o), cancelAnimationFrame(a), n("autoplayStop");
  }, I = (D, W) => {
    if (e.destroyed || !e.autoplay.running) return;
    clearTimeout(o), D || (f = !0);
    const J = () => {
      n("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", m) : V();
    };
    if (e.autoplay.paused = !0, W) {
      J();
      return;
    }
    c = (c || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - u), !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), J());
  }, V = () => {
    e.isEnd && c < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (u = (/* @__PURE__ */ new Date()).getTime(), f ? (f = !1, S(c)) : S(), e.autoplay.paused = !1, n("autoplayResume"));
  }, P = () => {
    if (e.destroyed || !e.autoplay.running) return;
    const D = lt();
    D.visibilityState === "hidden" && (f = !0, I(!0)), D.visibilityState === "visible" && V();
  }, M = (D) => {
    D.pointerType === "mouse" && (f = !0, v = !0, !(e.animating || e.autoplay.paused) && I(!0));
  }, p = (D) => {
    D.pointerType === "mouse" && (v = !1, e.autoplay.paused && V());
  }, R = () => {
    e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", M), e.el.addEventListener("pointerleave", p));
  }, k = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", M), e.el.removeEventListener("pointerleave", p));
  }, j = () => {
    lt().addEventListener("visibilitychange", P);
  }, G = () => {
    lt().removeEventListener("visibilitychange", P);
  };
  r("init", () => {
    e.params.autoplay.enabled && (R(), j(), w());
  }), r("destroy", () => {
    k(), G(), e.autoplay.running && T();
  }), r("_freeModeStaticRelease", () => {
    (A || f) && V();
  }), r("_freeModeNoMomentumRelease", () => {
    e.params.autoplay.disableOnInteraction ? T() : I(!0, !0);
  }), r("beforeTransitionStart", (D, W, J) => {
    e.destroyed || !e.autoplay.running || (J || !e.params.autoplay.disableOnInteraction ? I(!0, !0) : T());
  }), r("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        T();
        return;
      }
      y = !0, A = !1, f = !1, g = setTimeout(() => {
        f = !0, A = !0, I(!0);
      }, 200);
    }
  }), r("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !y)) {
      if (clearTimeout(g), clearTimeout(o), e.params.autoplay.disableOnInteraction) {
        A = !1, y = !1;
        return;
      }
      A && e.params.cssMode && V(), A = !1, y = !1;
    }
  }), r("slideChange", () => {
    e.destroyed || !e.autoplay.running || e.autoplay.paused && (c = x(), l = x());
  }), Object.assign(e.autoplay, {
    start: w,
    stop: T,
    pause: I,
    resume: V
  });
}
function XA({
  storeSlug: e,
  productType: t,
  baseUrl: r = "https://demo-api.littledragon.keithswork.com",
  onAddToCart: n = null,
  userId: i = null
}) {
  const [o, a] = at([]), l = Ue(null), s = Ue(null), c = (u, d, y) => {
    l.current.style.setProperty("--progress", 1 - y), s.current.textContent = `${Math.ceil(d / 1e3)}s`;
  };
  return Or(() => {
    i === null ? a([]) : (async () => {
      try {
        const d = await fetch(
          `${r}/${e}/users/${i}/recommendations/${t}`
        );
        if (!d.ok)
          throw new Error(`HTTP error! status: ${d.status}`);
        const y = await d.json();
        a(y || []);
      } catch (d) {
        setError(d.message), setRecommendations(null);
      } finally {
        setLoading(!1);
      }
    })();
  }, [i]), /* @__PURE__ */ X.jsxs(
    Da,
    {
      autoplay: { delay: 1e4, disableOnInteraction: !0 },
      pagination: { clickable: !0 },
      loop: !0,
      modules: [zA, ZA, qA],
      centeredSlides: !0,
      spaceBetween: 30,
      onAutoplayTimeLeft: c,
      children: [
        /* @__PURE__ */ X.jsx(bi, { children: /* @__PURE__ */ X.jsx(
          ya,
          {
            storeSlug: e,
            productType: t,
            type: "value",
            baseUrl: r,
            onAddToCart: n
          }
        ) }),
        /* @__PURE__ */ X.jsx(bi, { children: /* @__PURE__ */ X.jsx(
          ya,
          {
            storeSlug: e,
            productType: t,
            type: "exotic",
            baseUrl: r,
            onAddToCart: n
          }
        ) }),
        /* @__PURE__ */ X.jsxs("div", { className: "autoplay-progress", slot: "container-end", children: [
          /* @__PURE__ */ X.jsx("svg", { viewBox: "0 0 48 48", ref: l, children: /* @__PURE__ */ X.jsx("circle", { cx: "24", cy: "24", r: "20" }) }),
          /* @__PURE__ */ X.jsx("span", { ref: s })
        ] })
      ]
    }
  );
}
export {
  XA as default
};
