var Na = Object.defineProperty;
var Ya = (e, t, r) => t in e ? Na(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Vr = (e, t, r) => Ya(e, typeof t != "symbol" ? t + "" : t, r);
import * as M from "react";
import Ot, { forwardRef as Fa, useContext as Za, useState as Dr, useEffect as Ja } from "react";
import * as Ga from "react-dom";
import Nr from "react-dom";
function Ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zn = { exports: {} }, or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function Ha() {
  if (To) return or;
  To = 1;
  var e = Ot, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, A) {
    var f, m = {}, g = null, y = null;
    A !== void 0 && (g = "" + A), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (f in c) n.call(c, f) && !i.hasOwnProperty(f) && (m[f] = c[f]);
    if (s && s.defaultProps) for (f in c = s.defaultProps, c) m[f] === void 0 && (m[f] = c[f]);
    return { $$typeof: t, type: s, key: g, ref: y, props: m, _owner: o.current };
  }
  return or.Fragment = r, or.jsx = a, or.jsxs = a, or;
}
var ir = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function qa() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ot, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), h = Symbol.iterator, u = "@@iterator";
    function b(d) {
      if (d === null || typeof d != "object")
        return null;
      var j = h && d[h] || d[u];
      return typeof j == "function" ? j : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(d) {
      {
        for (var j = arguments.length, N = new Array(j > 1 ? j - 1 : 0), z = 1; z < j; z++)
          N[z - 1] = arguments[z];
        R("error", d, N);
      }
    }
    function R(d, j, N) {
      {
        var z = x.ReactDebugCurrentFrame, ae = z.getStackAddendum();
        ae !== "" && (j += "%s", N = N.concat([ae]));
        var de = N.map(function(ne) {
          return String(ne);
        });
        de.unshift("Warning: " + j), Function.prototype.apply.call(console[d], console, de);
      }
    }
    var C = !1, v = !1, E = !1, O = !1, J = !1, F;
    F = Symbol.for("react.module.reference");
    function Y(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || J || d === o || d === A || d === f || O || d === y || C || v || E || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === m || d.$$typeof === a || d.$$typeof === s || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === F || d.getModuleId !== void 0));
    }
    function L(d, j, N) {
      var z = d.displayName;
      if (z)
        return z;
      var ae = j.displayName || j.name || "";
      return ae !== "" ? N + "(" + ae + ")" : N;
    }
    function l(d) {
      return d.displayName || "Context";
    }
    function T(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case A:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case s:
            var j = d;
            return l(j) + ".Consumer";
          case a:
            var N = d;
            return l(N._context) + ".Provider";
          case c:
            return L(d, d.render, "ForwardRef");
          case m:
            var z = d.displayName || null;
            return z !== null ? z : T(d.type) || "Memo";
          case g: {
            var ae = d, de = ae._payload, ne = ae._init;
            try {
              return T(ne(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, W = 0, V, Z, ee, le, w, D, B;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function G() {
      {
        if (W === 0) {
          V = console.log, Z = console.info, ee = console.warn, le = console.error, w = console.group, D = console.groupCollapsed, B = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        W++;
      }
    }
    function X() {
      {
        if (W--, W === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, d, {
              value: V
            }),
            info: k({}, d, {
              value: Z
            }),
            warn: k({}, d, {
              value: ee
            }),
            error: k({}, d, {
              value: le
            }),
            group: k({}, d, {
              value: w
            }),
            groupCollapsed: k({}, d, {
              value: D
            }),
            groupEnd: k({}, d, {
              value: B
            })
          });
        }
        W < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = x.ReactCurrentDispatcher, q;
    function H(d, j, N) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (ae) {
            var z = ae.stack.trim().match(/\n( *(at )?)/);
            q = z && z[1] || "";
          }
        return `
` + q + d;
      }
    }
    var _ = !1, $;
    {
      var ge = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new ge();
    }
    function P(d, j) {
      if (!d || _)
        return "";
      {
        var N = $.get(d);
        if (N !== void 0)
          return N;
      }
      var z;
      _ = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = U.current, U.current = null, G();
      try {
        if (j) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (We) {
              z = We;
            }
            Reflect.construct(d, [], ne);
          } else {
            try {
              ne.call();
            } catch (We) {
              z = We;
            }
            d.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (We) {
            z = We;
          }
          d();
        }
      } catch (We) {
        if (We && z && typeof We.stack == "string") {
          for (var re = We.stack.split(`
`), ke = z.stack.split(`
`), ve = re.length - 1, Ee = ke.length - 1; ve >= 1 && Ee >= 0 && re[ve] !== ke[Ee]; )
            Ee--;
          for (; ve >= 1 && Ee >= 0; ve--, Ee--)
            if (re[ve] !== ke[Ee]) {
              if (ve !== 1 || Ee !== 1)
                do
                  if (ve--, Ee--, Ee < 0 || re[ve] !== ke[Ee]) {
                    var Ge = `
` + re[ve].replace(" at new ", " at ");
                    return d.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", d.displayName)), typeof d == "function" && $.set(d, Ge), Ge;
                  }
                while (ve >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        _ = !1, U.current = de, X(), Error.prepareStackTrace = ae;
      }
      var Nt = d ? d.displayName || d.name : "", St = Nt ? H(Nt) : "";
      return typeof d == "function" && $.set(d, St), St;
    }
    function we(d, j, N) {
      return P(d, !1);
    }
    function Re(d) {
      var j = d.prototype;
      return !!(j && j.isReactComponent);
    }
    function Oe(d, j, N) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return P(d, Re(d));
      if (typeof d == "string")
        return H(d);
      switch (d) {
        case A:
          return H("Suspense");
        case f:
          return H("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return we(d.render);
          case m:
            return Oe(d.type, j, N);
          case g: {
            var z = d, ae = z._payload, de = z._init;
            try {
              return Oe(de(ae), j, N);
            } catch {
            }
          }
        }
      return "";
    }
    var Ke = Object.prototype.hasOwnProperty, ze = {}, ot = x.ReactDebugCurrentFrame;
    function Qe(d) {
      if (d) {
        var j = d._owner, N = Oe(d.type, d._source, j ? j.type : null);
        ot.setExtraStackFrame(N);
      } else
        ot.setExtraStackFrame(null);
    }
    function Je(d, j, N, z, ae) {
      {
        var de = Function.call.bind(Ke);
        for (var ne in d)
          if (de(d, ne)) {
            var re = void 0;
            try {
              if (typeof d[ne] != "function") {
                var ke = Error((z || "React class") + ": " + N + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              re = d[ne](j, ne, z, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              re = ve;
            }
            re && !(re instanceof Error) && (Qe(ae), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", N, ne, typeof re), Qe(null)), re instanceof Error && !(re.message in ze) && (ze[re.message] = !0, Qe(ae), S("Failed %s type: %s", N, re.message), Qe(null));
          }
      }
    }
    var it = Array.isArray;
    function at(d) {
      return it(d);
    }
    function Ct(d) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, N = j && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return N;
      }
    }
    function It(d) {
      try {
        return Et(d), !1;
      } catch {
        return !0;
      }
    }
    function Et(d) {
      return "" + d;
    }
    function xt(d) {
      if (It(d))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ct(d)), Et(d);
    }
    var st = x.ReactCurrentOwner, Vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dt, Dt;
    function je(d) {
      if (Ke.call(d, "ref")) {
        var j = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function wt(d) {
      if (Ke.call(d, "key")) {
        var j = Object.getOwnPropertyDescriptor(d, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function ct(d, j) {
      typeof d.ref == "string" && st.current;
    }
    function De(d, j) {
      {
        var N = function() {
          dt || (dt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        N.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function wn(d, j) {
      {
        var N = function() {
          Dt || (Dt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        N.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var tr = function(d, j, N, z, ae, de, ne) {
      var re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: j,
        ref: N,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return re._store = {}, Object.defineProperty(re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(re.props), Object.freeze(re)), re;
    };
    function Sn(d, j, N, z, ae) {
      {
        var de, ne = {}, re = null, ke = null;
        N !== void 0 && (xt(N), re = "" + N), wt(j) && (xt(j.key), re = "" + j.key), je(j) && (ke = j.ref, ct(j, ae));
        for (de in j)
          Ke.call(j, de) && !Vt.hasOwnProperty(de) && (ne[de] = j[de]);
        if (d && d.defaultProps) {
          var ve = d.defaultProps;
          for (de in ve)
            ne[de] === void 0 && (ne[de] = ve[de]);
        }
        if (re || ke) {
          var Ee = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          re && De(ne, Ee), ke && wn(ne, Ee);
        }
        return tr(d, re, ke, ae, z, st.current, ne);
      }
    }
    var mt = x.ReactCurrentOwner, Mr = x.ReactDebugCurrentFrame;
    function gt(d) {
      if (d) {
        var j = d._owner, N = Oe(d.type, d._source, j ? j.type : null);
        Mr.setExtraStackFrame(N);
      } else
        Mr.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function nr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Wr() {
      {
        if (mt.current) {
          var d = T(mt.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Tn(d) {
      return "";
    }
    var Pr = {};
    function kn(d) {
      {
        var j = Wr();
        if (!j) {
          var N = typeof d == "string" ? d : d.displayName || d.name;
          N && (j = `

Check the top-level render call using <` + N + ">.");
        }
        return j;
      }
    }
    function Q(d, j) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var N = kn(j);
        if (Pr[N])
          return;
        Pr[N] = !0;
        var z = "";
        d && d._owner && d._owner !== mt.current && (z = " It was passed a child from " + T(d._owner.type) + "."), gt(d), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, z), gt(null);
      }
    }
    function Me(d, j) {
      {
        if (typeof d != "object")
          return;
        if (at(d))
          for (var N = 0; N < d.length; N++) {
            var z = d[N];
            nr(z) && Q(z, j);
          }
        else if (nr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ae = b(d);
          if (typeof ae == "function" && ae !== d.entries)
            for (var de = ae.call(d), ne; !(ne = de.next()).done; )
              nr(ne.value) && Q(ne.value, j);
        }
      }
    }
    function Lr(d) {
      {
        var j = d.type;
        if (j == null || typeof j == "string")
          return;
        var N;
        if (typeof j == "function")
          N = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === m))
          N = j.propTypes;
        else
          return;
        if (N) {
          var z = T(j);
          Je(N, d.props, "prop", z, d);
        } else if (j.PropTypes !== void 0 && !rr) {
          rr = !0;
          var ae = T(j);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ja(d) {
      {
        for (var j = Object.keys(d.props), N = 0; N < j.length; N++) {
          var z = j[N];
          if (z !== "children" && z !== "key") {
            gt(d), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), gt(null);
            break;
          }
        }
        d.ref !== null && (gt(d), S("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    var wo = {};
    function So(d, j, N, z, ae, de) {
      {
        var ne = Y(d);
        if (!ne) {
          var re = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = Tn();
          ke ? re += ke : re += Wr();
          var ve;
          d === null ? ve = "null" : at(d) ? ve = "array" : d !== void 0 && d.$$typeof === t ? (ve = "<" + (T(d.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof d, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, re);
        }
        var Ee = Sn(d, j, N, ae, de);
        if (Ee == null)
          return Ee;
        if (ne) {
          var Ge = j.children;
          if (Ge !== void 0)
            if (z)
              if (at(Ge)) {
                for (var Nt = 0; Nt < Ge.length; Nt++)
                  Me(Ge[Nt], d);
                Object.freeze && Object.freeze(Ge);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(Ge, d);
        }
        if (Ke.call(j, "key")) {
          var St = T(d), We = Object.keys(j).filter(function(Da) {
            return Da !== "key";
          }), Rn = We.length > 0 ? "{key: someKey, " + We.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wo[St + Rn]) {
            var Va = We.length > 0 ? "{" + We.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rn, St, Va, St), wo[St + Rn] = !0;
          }
        }
        return d === n ? ja(Ee) : Lr(Ee), Ee;
      }
    }
    function Ma(d, j, N) {
      return So(d, j, N, !0);
    }
    function Wa(d, j, N) {
      return So(d, j, N, !1);
    }
    var Pa = Wa, La = Ma;
    ir.Fragment = n, ir.jsx = Pa, ir.jsxs = La;
  }()), ir;
}
process.env.NODE_ENV === "production" ? Zn.exports = Ha() : Zn.exports = qa();
var te = Zn.exports;
function Jn() {
  return Jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jn.apply(null, arguments);
}
function Ba(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Xa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ka = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Xa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ba(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Te = "-ms-", zr = "-moz-", oe = "-webkit-", Oi = "comm", no = "rule", oo = "decl", za = "@import", ji = "@keyframes", Qa = "@layer", $a = Math.abs, nn = String.fromCharCode, _a = Object.assign;
function es(e, t) {
  return Se(e, 0) ^ 45 ? (((t << 2 ^ Se(e, 0)) << 2 ^ Se(e, 1)) << 2 ^ Se(e, 2)) << 2 ^ Se(e, 3) : 0;
}
function Mi(e) {
  return e.trim();
}
function ts(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, r) {
  return e.replace(t, r);
}
function Gn(e, t) {
  return e.indexOf(t);
}
function Se(e, t) {
  return e.charCodeAt(t) | 0;
}
function hr(e, t, r) {
  return e.slice(t, r);
}
function _e(e) {
  return e.length;
}
function io(e) {
  return e.length;
}
function Yr(e, t) {
  return t.push(e), e;
}
function rs(e, t) {
  return e.map(t).join("");
}
var on = 1, Xt = 1, Wi = 0, Ve = 0, xe = 0, er = "";
function an(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: on, column: Xt, length: a, return: "" };
}
function ar(e, t) {
  return _a(an("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ns() {
  return xe;
}
function os() {
  return xe = Ve > 0 ? Se(er, --Ve) : 0, Xt--, xe === 10 && (Xt = 1, on--), xe;
}
function Ye() {
  return xe = Ve < Wi ? Se(er, Ve++) : 0, Xt++, xe === 10 && (Xt = 1, on++), xe;
}
function tt() {
  return Se(er, Ve);
}
function Hr() {
  return Ve;
}
function Sr(e, t) {
  return hr(er, e, t);
}
function yr(e) {
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
function Pi(e) {
  return on = Xt = 1, Wi = _e(er = e), Ve = 0, [];
}
function Li(e) {
  return er = "", e;
}
function qr(e) {
  return Mi(Sr(Ve - 1, Un(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function is(e) {
  for (; (xe = tt()) && xe < 33; )
    Ye();
  return yr(e) > 2 || yr(xe) > 3 ? "" : " ";
}
function as(e, t) {
  for (; --t && Ye() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return Sr(e, Hr() + (t < 6 && tt() == 32 && Ye() == 32));
}
function Un(e) {
  for (; Ye(); )
    switch (xe) {
      case e:
        return Ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Un(xe);
        break;
      case 40:
        e === 41 && Un(e);
        break;
      case 92:
        Ye();
        break;
    }
  return Ve;
}
function ss(e, t) {
  for (; Ye() && e + xe !== 57; )
    if (e + xe === 84 && tt() === 47)
      break;
  return "/*" + Sr(t, Ve - 1) + "*" + nn(e === 47 ? e : Ye());
}
function cs(e) {
  for (; !yr(tt()); )
    Ye();
  return Sr(e, Ve);
}
function ls(e) {
  return Li(Br("", null, null, null, [""], e = Pi(e), 0, [0], e));
}
function Br(e, t, r, n, o, i, a, s, c) {
  for (var A = 0, f = 0, m = a, g = 0, y = 0, h = 0, u = 1, b = 1, x = 1, S = 0, R = "", C = o, v = i, E = n, O = R; b; )
    switch (h = S, S = Ye()) {
      case 40:
        if (h != 108 && Se(O, m - 1) == 58) {
          Gn(O += ie(qr(S), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += qr(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += is(h);
        break;
      case 92:
        O += as(Hr() - 1, 7);
        continue;
      case 47:
        switch (tt()) {
          case 42:
          case 47:
            Yr(us(ss(Ye(), Hr()), t, r), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * u:
        s[A++] = _e(O) * x;
      case 125 * u:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            b = 0;
          case 59 + f:
            x == -1 && (O = ie(O, /\f/g, "")), y > 0 && _e(O) - m && Yr(y > 32 ? Oo(O + ";", n, r, m - 1) : Oo(ie(O, " ", "") + ";", n, r, m - 2), c);
            break;
          case 59:
            O += ";";
          default:
            if (Yr(E = Ro(O, t, r, A, f, o, s, R, C = [], v = [], m), i), S === 123)
              if (f === 0)
                Br(O, t, E, E, C, i, m, s, v);
              else
                switch (g === 99 && Se(O, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Br(e, E, E, n && Yr(Ro(e, E, E, 0, 0, o, s, R, o, C = [], m), v), o, v, m, s, n ? C : v);
                    break;
                  default:
                    Br(O, E, E, E, [""], v, 0, s, v);
                }
        }
        A = f = y = 0, u = x = 1, R = O = "", m = a;
        break;
      case 58:
        m = 1 + _e(O), y = h;
      default:
        if (u < 1) {
          if (S == 123)
            --u;
          else if (S == 125 && u++ == 0 && os() == 125)
            continue;
        }
        switch (O += nn(S), S * u) {
          case 38:
            x = f > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            s[A++] = (_e(O) - 1) * x, x = 1;
            break;
          case 64:
            tt() === 45 && (O += qr(Ye())), g = tt(), f = m = _e(R = O += cs(Hr())), S++;
            break;
          case 45:
            h === 45 && _e(O) == 2 && (u = 0);
        }
    }
  return i;
}
function Ro(e, t, r, n, o, i, a, s, c, A, f) {
  for (var m = o - 1, g = o === 0 ? i : [""], y = io(g), h = 0, u = 0, b = 0; h < n; ++h)
    for (var x = 0, S = hr(e, m + 1, m = $a(u = a[h])), R = e; x < y; ++x)
      (R = Mi(u > 0 ? g[x] + " " + S : ie(S, /&\f/g, g[x]))) && (c[b++] = R);
  return an(e, t, r, o === 0 ? no : s, c, A, f);
}
function us(e, t, r) {
  return an(e, t, r, Oi, nn(ns()), hr(e, 2, -2), 0);
}
function Oo(e, t, r, n) {
  return an(e, t, r, oo, hr(e, 0, n), hr(e, n + 1, -1), n);
}
function qt(e, t) {
  for (var r = "", n = io(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function fs(e, t, r, n) {
  switch (e.type) {
    case Qa:
      if (e.children.length) break;
    case za:
    case oo:
      return e.return = e.return || e.value;
    case Oi:
      return "";
    case ji:
      return e.return = e.value + "{" + qt(e.children, n) + "}";
    case no:
      e.value = e.props.join(",");
  }
  return _e(r = qt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function As(e) {
  var t = io(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function ps(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Vi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ds = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = tt(), o === 38 && i === 12 && (r[n] = 1), !yr(i); )
    Ye();
  return Sr(t, Ve);
}, ms = function(t, r) {
  var n = -1, o = 44;
  do
    switch (yr(o)) {
      case 0:
        o === 38 && tt() === 12 && (r[n] = 1), t[n] += ds(Ve - 1, r, n);
        break;
      case 2:
        t[n] += qr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = tt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += nn(o);
    }
  while (o = Ye());
  return t;
}, gs = function(t, r) {
  return Li(ms(Pi(t), r));
}, jo = /* @__PURE__ */ new WeakMap(), hs = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !jo.get(n)) && !o) {
      jo.set(t, !0);
      for (var i = [], a = gs(r, i), s = n.props, c = 0, A = 0; c < a.length; c++)
        for (var f = 0; f < s.length; f++, A++)
          t.props[A] = i[c] ? a[c].replace(/&\f/g, s[f]) : s[f] + " " + a[c];
    }
  }
}, ys = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Di(e, t) {
  switch (es(e, t)) {
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
      return oe + e + zr + e + Te + e + e;
    case 6828:
    case 4268:
      return oe + e + Te + e + e;
    case 6165:
      return oe + e + Te + "flex-" + e + e;
    case 5187:
      return oe + e + ie(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + Te + "flex-$1$2") + e;
    case 5443:
      return oe + e + Te + "flex-item-" + ie(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + Te + "flex-line-pack" + ie(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + Te + ie(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + Te + ie(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ie(e, "-grow", "") + oe + e + Te + ie(e, "grow", "positive") + e;
    case 4554:
      return oe + ie(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return ie(ie(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
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
      if (_e(e) - 1 - t > 6) switch (Se(e, t + 1)) {
        case 109:
          if (Se(e, t + 4) !== 45) break;
        case 102:
          return ie(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + zr + (Se(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Gn(e, "stretch") ? Di(ie(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Se(e, t + 1) !== 115) break;
    case 6444:
      switch (Se(e, _e(e) - 3 - (~Gn(e, "!important") && 10))) {
        case 107:
          return ie(e, ":", ":" + oe) + e;
        case 101:
          return ie(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (Se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + Te + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Se(e, t + 11)) {
        case 114:
          return oe + e + Te + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + Te + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + Te + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + Te + e + e;
  }
  return e;
}
var bs = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case oo:
      t.return = Di(t.value, t.length);
      break;
    case ji:
      return qt([ar(t, {
        value: ie(t.value, "@", "@" + oe)
      })], o);
    case no:
      if (t.length) return rs(t.props, function(i) {
        switch (ts(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return qt([ar(t, {
              props: [ie(i, /:(read-\w+)/, ":" + zr + "$1")]
            })], o);
          case "::placeholder":
            return qt([ar(t, {
              props: [ie(i, /:(plac\w+)/, ":" + oe + "input-$1")]
            }), ar(t, {
              props: [ie(i, /:(plac\w+)/, ":" + zr + "$1")]
            }), ar(t, {
              props: [ie(i, /:(plac\w+)/, Te + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, vs = [bs], Cs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(u) {
      var b = u.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || vs, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(u) {
      for (var b = u.getAttribute("data-emotion").split(" "), x = 1; x < b.length; x++)
        i[b[x]] = !0;
      s.push(u);
    }
  );
  var c, A = [hs, ys];
  {
    var f, m = [fs, ps(function(u) {
      f.insert(u);
    })], g = As(A.concat(o, m)), y = function(b) {
      return qt(ls(b), g);
    };
    c = function(b, x, S, R) {
      f = S, y(b ? b + "{" + x.styles + "}" : x.styles), R && (h.inserted[x.name] = !0);
    };
  }
  var h = {
    key: r,
    sheet: new Ka({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return h.sheet.hydrate(s), h;
}, Hn = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function Is() {
  if (Mo) return se;
  Mo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, A = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function R(v) {
    if (typeof v == "object" && v !== null) {
      var E = v.$$typeof;
      switch (E) {
        case t:
          switch (v = v.type, v) {
            case c:
            case A:
            case n:
            case i:
            case o:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case f:
                case h:
                case y:
                case a:
                  return v;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function C(v) {
    return R(v) === A;
  }
  return se.AsyncMode = c, se.ConcurrentMode = A, se.ContextConsumer = s, se.ContextProvider = a, se.Element = t, se.ForwardRef = f, se.Fragment = n, se.Lazy = h, se.Memo = y, se.Portal = r, se.Profiler = i, se.StrictMode = o, se.Suspense = m, se.isAsyncMode = function(v) {
    return C(v) || R(v) === c;
  }, se.isConcurrentMode = C, se.isContextConsumer = function(v) {
    return R(v) === s;
  }, se.isContextProvider = function(v) {
    return R(v) === a;
  }, se.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, se.isForwardRef = function(v) {
    return R(v) === f;
  }, se.isFragment = function(v) {
    return R(v) === n;
  }, se.isLazy = function(v) {
    return R(v) === h;
  }, se.isMemo = function(v) {
    return R(v) === y;
  }, se.isPortal = function(v) {
    return R(v) === r;
  }, se.isProfiler = function(v) {
    return R(v) === i;
  }, se.isStrictMode = function(v) {
    return R(v) === o;
  }, se.isSuspense = function(v) {
    return R(v) === m;
  }, se.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === A || v === i || v === o || v === m || v === g || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === y || v.$$typeof === a || v.$$typeof === s || v.$$typeof === f || v.$$typeof === b || v.$$typeof === x || v.$$typeof === S || v.$$typeof === u);
  }, se.typeOf = R, se;
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
var Wo;
function Es() {
  return Wo || (Wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, A = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function R(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === A || P === i || P === o || P === m || P === g || typeof P == "object" && P !== null && (P.$$typeof === h || P.$$typeof === y || P.$$typeof === a || P.$$typeof === s || P.$$typeof === f || P.$$typeof === b || P.$$typeof === x || P.$$typeof === S || P.$$typeof === u);
    }
    function C(P) {
      if (typeof P == "object" && P !== null) {
        var we = P.$$typeof;
        switch (we) {
          case t:
            var Re = P.type;
            switch (Re) {
              case c:
              case A:
              case n:
              case i:
              case o:
              case m:
                return Re;
              default:
                var Oe = Re && Re.$$typeof;
                switch (Oe) {
                  case s:
                  case f:
                  case h:
                  case y:
                  case a:
                    return Oe;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var v = c, E = A, O = s, J = a, F = t, Y = f, L = n, l = h, T = y, k = r, W = i, V = o, Z = m, ee = !1;
    function le(P) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(P) || C(P) === c;
    }
    function w(P) {
      return C(P) === A;
    }
    function D(P) {
      return C(P) === s;
    }
    function B(P) {
      return C(P) === a;
    }
    function K(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function G(P) {
      return C(P) === f;
    }
    function X(P) {
      return C(P) === n;
    }
    function U(P) {
      return C(P) === h;
    }
    function q(P) {
      return C(P) === y;
    }
    function H(P) {
      return C(P) === r;
    }
    function _(P) {
      return C(P) === i;
    }
    function $(P) {
      return C(P) === o;
    }
    function ge(P) {
      return C(P) === m;
    }
    ce.AsyncMode = v, ce.ConcurrentMode = E, ce.ContextConsumer = O, ce.ContextProvider = J, ce.Element = F, ce.ForwardRef = Y, ce.Fragment = L, ce.Lazy = l, ce.Memo = T, ce.Portal = k, ce.Profiler = W, ce.StrictMode = V, ce.Suspense = Z, ce.isAsyncMode = le, ce.isConcurrentMode = w, ce.isContextConsumer = D, ce.isContextProvider = B, ce.isElement = K, ce.isForwardRef = G, ce.isFragment = X, ce.isLazy = U, ce.isMemo = q, ce.isPortal = H, ce.isProfiler = _, ce.isStrictMode = $, ce.isSuspense = ge, ce.isValidElementType = R, ce.typeOf = C;
  }()), ce;
}
process.env.NODE_ENV === "production" ? Hn.exports = Is() : Hn.exports = Es();
var Ni = Hn.exports, xs = !0;
function ws(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Yi = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  xs === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Ss = function(t, r, n) {
  Yi(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ts(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
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
var ks = {
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
}, Rs = /[A-Z]|^ms/g, Os = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Fi = function(t) {
  return t.charCodeAt(1) === 45;
}, Po = function(t) {
  return t != null && typeof t != "boolean";
}, On = /* @__PURE__ */ Vi(function(e) {
  return Fi(e) ? e : e.replace(Rs, "-$&").toLowerCase();
}), Lo = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Os, function(n, o, i) {
          return et = {
            name: o,
            styles: i,
            next: et
          }, o;
        });
  }
  return ks[t] !== 1 && !Fi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function br(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return et = {
          name: o.name,
          styles: o.styles,
          next: et
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            et = {
              name: a.name,
              styles: a.styles,
              next: et
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return js(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = et, A = r(e);
        return et = c, br(e, t, A);
      }
      break;
    }
  }
  var f = r;
  if (t == null)
    return f;
  var m = t[f];
  return m !== void 0 ? m : f;
}
function js(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += br(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : Po(s) && (n += On(i) + ":" + Lo(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var c = 0; c < a.length; c++)
          Po(a[c]) && (n += On(i) + ":" + Lo(i, a[c]) + ";");
      else {
        var A = br(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += On(i) + ":" + A + ";";
            break;
          }
          default:
            n += i + "{" + A + "}";
        }
      }
    }
  return n;
}
var Vo = /label:\s*([^\s;{]+)\s*(;|$)/g, et;
function Zi(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  et = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += br(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += br(r, t, e[s]), n) {
      var c = i;
      o += c[s];
    }
  Vo.lastIndex = 0;
  for (var A = "", f; (f = Vo.exec(o)) !== null; )
    A += "-" + f[1];
  var m = Ts(o) + A;
  return {
    name: m,
    styles: o,
    next: et
  };
}
var Ms = function(t) {
  return t();
}, Ws = M.useInsertionEffect ? M.useInsertionEffect : !1, Ps = Ws || Ms, Ji = /* @__PURE__ */ M.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Cs({
    key: "css"
  }) : null
);
Ji.Provider;
var Ls = function(t) {
  return /* @__PURE__ */ Fa(function(r, n) {
    var o = Za(Ji);
    return t(r, o, n);
  });
}, Gi = /* @__PURE__ */ M.createContext({}), Vs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ds = /* @__PURE__ */ Vi(
  function(e) {
    return Vs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ns = Ds, Ys = function(t) {
  return t !== "theme";
}, Do = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ns : Ys;
}, No = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Fs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Yi(r, n, o), Ps(function() {
    return Ss(r, n, o);
  }), null;
}, Zs = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = No(t, r, n), c = s || Do(o), A = !c("as");
  return function() {
    var f = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      var g = f[0];
      m.push(g[0]);
      for (var y = f.length, h = 1; h < y; h++)
        m.push(f[h], g[h]);
    }
    var u = Ls(function(b, x, S) {
      var R = A && b.as || o, C = "", v = [], E = b;
      if (b.theme == null) {
        E = {};
        for (var O in b)
          E[O] = b[O];
        E.theme = M.useContext(Gi);
      }
      typeof b.className == "string" ? C = ws(x.registered, v, b.className) : b.className != null && (C = b.className + " ");
      var J = Zi(m.concat(v), x.registered, E);
      C += x.key + "-" + J.name, a !== void 0 && (C += " " + a);
      var F = A && s === void 0 ? Do(R) : c, Y = {};
      for (var L in b)
        A && L === "as" || F(L) && (Y[L] = b[L]);
      return Y.className = C, S && (Y.ref = S), /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(Fs, {
        cache: x,
        serialized: J,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ M.createElement(R, Y));
    });
    return u.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", u.defaultProps = t.defaultProps, u.__emotion_real = u, u.__emotion_base = o, u.__emotion_styles = m, u.__emotion_forwardProp = s, Object.defineProperty(u, "toString", {
      value: function() {
        return "." + a;
      }
    }), u.withComponent = function(b, x) {
      var S = e(b, Jn({}, r, x, {
        shouldForwardProp: No(u, x, !0)
      }));
      return S.apply(void 0, m);
    }, u;
  };
}, Js = [
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
], Ce = Zs.bind(null);
Js.forEach(function(e) {
  Ce[e] = Ce(e);
});
var qn = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jn, Yo;
function Gs() {
  if (Yo) return jn;
  Yo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var A = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        A[f] = f;
      }), Object.keys(Object.assign({}, A)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return jn = o() ? Object.assign : function(i, a) {
    for (var s, c = n(i), A, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var m in s)
        t.call(s, m) && (c[m] = s[m]);
      if (e) {
        A = e(s);
        for (var g = 0; g < A.length; g++)
          r.call(s, A[g]) && (c[A[g]] = s[A[g]]);
      }
    }
    return c;
  }, jn;
}
var Mn, Fo;
function ao() {
  if (Fo) return Mn;
  Fo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mn = e, Mn;
}
var Wn, Zo;
function Ui() {
  return Zo || (Zo = 1, Wn = Function.call.bind(Object.prototype.hasOwnProperty)), Wn;
}
var Pn, Jo;
function Us() {
  if (Jo) return Pn;
  Jo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ao(), r = {}, n = Ui();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, A) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var m;
          try {
            if (typeof i[f] != "function") {
              var g = Error(
                (c || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = i[f](a, f, c, s, null, t);
          } catch (h) {
            m = h;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var y = A ? A() : "";
            e(
              "Failed " + s + " type: " + m.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Pn = o, Pn;
}
var Ln, Go;
function Hs() {
  if (Go) return Ln;
  Go = 1;
  var e = Ni, t = Gs(), r = ao(), n = Ui(), o = Us(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Ln = function(s, c) {
    var A = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(w) {
      var D = w && (A && w[A] || w[f]);
      if (typeof D == "function")
        return D;
    }
    var g = "<<anonymous>>", y = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: S(),
      arrayOf: R,
      element: C(),
      elementType: v(),
      instanceOf: E,
      node: Y(),
      objectOf: J,
      oneOf: O,
      oneOfType: F,
      shape: l,
      exact: T
    };
    function h(w, D) {
      return w === D ? w !== 0 || 1 / w === 1 / D : w !== w && D !== D;
    }
    function u(w, D) {
      this.message = w, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function b(w) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, B = 0;
      function K(X, U, q, H, _, $, ge) {
        if (H = H || g, $ = $ || q, ge !== r) {
          if (c) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = H + ":" + q;
            !D[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[we] = !0, B++);
          }
        }
        return U[q] == null ? X ? U[q] === null ? new u("The " + _ + " `" + $ + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new u("The " + _ + " `" + $ + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : w(U, q, H, _, $);
      }
      var G = K.bind(null, !1);
      return G.isRequired = K.bind(null, !0), G;
    }
    function x(w) {
      function D(B, K, G, X, U, q) {
        var H = B[K], _ = V(H);
        if (_ !== w) {
          var $ = Z(H);
          return new u(
            "Invalid " + X + " `" + U + "` of type " + ("`" + $ + "` supplied to `" + G + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return b(D);
    }
    function S() {
      return b(a);
    }
    function R(w) {
      function D(B, K, G, X, U) {
        if (typeof w != "function")
          return new u("Property `" + U + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var q = B[K];
        if (!Array.isArray(q)) {
          var H = V(q);
          return new u("Invalid " + X + " `" + U + "` of type " + ("`" + H + "` supplied to `" + G + "`, expected an array."));
        }
        for (var _ = 0; _ < q.length; _++) {
          var $ = w(q, _, G, X, U + "[" + _ + "]", r);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return b(D);
    }
    function C() {
      function w(D, B, K, G, X) {
        var U = D[B];
        if (!s(U)) {
          var q = V(U);
          return new u("Invalid " + G + " `" + X + "` of type " + ("`" + q + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(w);
    }
    function v() {
      function w(D, B, K, G, X) {
        var U = D[B];
        if (!e.isValidElementType(U)) {
          var q = V(U);
          return new u("Invalid " + G + " `" + X + "` of type " + ("`" + q + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(w);
    }
    function E(w) {
      function D(B, K, G, X, U) {
        if (!(B[K] instanceof w)) {
          var q = w.name || g, H = le(B[K]);
          return new u("Invalid " + X + " `" + U + "` of type " + ("`" + H + "` supplied to `" + G + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return b(D);
    }
    function O(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function D(B, K, G, X, U) {
        for (var q = B[K], H = 0; H < w.length; H++)
          if (h(q, w[H]))
            return null;
        var _ = JSON.stringify(w, function(ge, P) {
          var we = Z(P);
          return we === "symbol" ? String(P) : P;
        });
        return new u("Invalid " + X + " `" + U + "` of value `" + String(q) + "` " + ("supplied to `" + G + "`, expected one of " + _ + "."));
      }
      return b(D);
    }
    function J(w) {
      function D(B, K, G, X, U) {
        if (typeof w != "function")
          return new u("Property `" + U + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var q = B[K], H = V(q);
        if (H !== "object")
          return new u("Invalid " + X + " `" + U + "` of type " + ("`" + H + "` supplied to `" + G + "`, expected an object."));
        for (var _ in q)
          if (n(q, _)) {
            var $ = w(q, _, G, X, U + "." + _, r);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return b(D);
    }
    function F(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var D = 0; D < w.length; D++) {
        var B = w[D];
        if (typeof B != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(B) + " at index " + D + "."
          ), a;
      }
      function K(G, X, U, q, H) {
        for (var _ = [], $ = 0; $ < w.length; $++) {
          var ge = w[$], P = ge(G, X, U, q, H, r);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && _.push(P.data.expectedType);
        }
        var we = _.length > 0 ? ", expected one of type [" + _.join(", ") + "]" : "";
        return new u("Invalid " + q + " `" + H + "` supplied to " + ("`" + U + "`" + we + "."));
      }
      return b(K);
    }
    function Y() {
      function w(D, B, K, G, X) {
        return k(D[B]) ? null : new u("Invalid " + G + " `" + X + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return b(w);
    }
    function L(w, D, B, K, G) {
      return new u(
        (w || "React class") + ": " + D + " type `" + B + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function l(w) {
      function D(B, K, G, X, U) {
        var q = B[K], H = V(q);
        if (H !== "object")
          return new u("Invalid " + X + " `" + U + "` of type `" + H + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var _ in w) {
          var $ = w[_];
          if (typeof $ != "function")
            return L(G, X, U, _, Z($));
          var ge = $(q, _, G, X, U + "." + _, r);
          if (ge)
            return ge;
        }
        return null;
      }
      return b(D);
    }
    function T(w) {
      function D(B, K, G, X, U) {
        var q = B[K], H = V(q);
        if (H !== "object")
          return new u("Invalid " + X + " `" + U + "` of type `" + H + "` " + ("supplied to `" + G + "`, expected `object`."));
        var _ = t({}, B[K], w);
        for (var $ in _) {
          var ge = w[$];
          if (n(w, $) && typeof ge != "function")
            return L(G, X, U, $, Z(ge));
          if (!ge)
            return new u(
              "Invalid " + X + " `" + U + "` key `" + $ + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(B[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var P = ge(q, $, G, X, U + "." + $, r);
          if (P)
            return P;
        }
        return null;
      }
      return b(D);
    }
    function k(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(k);
          if (w === null || s(w))
            return !0;
          var D = m(w);
          if (D) {
            var B = D.call(w), K;
            if (D !== w.entries) {
              for (; !(K = B.next()).done; )
                if (!k(K.value))
                  return !1;
            } else
              for (; !(K = B.next()).done; ) {
                var G = K.value;
                if (G && !k(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function W(w, D) {
      return w === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function V(w) {
      var D = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : W(D, w) ? "symbol" : D;
    }
    function Z(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var D = V(w);
      if (D === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return D;
    }
    function ee(w) {
      var D = Z(w);
      switch (D) {
        case "array":
        case "object":
          return "an " + D;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + D;
        default:
          return D;
      }
    }
    function le(w) {
      return !w.constructor || !w.constructor.name ? g : w.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, Ln;
}
var Vn, Uo;
function qs() {
  if (Uo) return Vn;
  Uo = 1;
  var e = ao();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Vn = function() {
    function n(a, s, c, A, f, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Vn;
}
if (process.env.NODE_ENV !== "production") {
  var Bs = Ni, Xs = !0;
  qn.exports = Hs()(Bs.isElement, Xs);
} else
  qn.exports = qs()();
var Ks = qn.exports;
const p = /* @__PURE__ */ Ua(Ks);
function Hi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Hi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function vr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Hi(e)) && (n && (n += " "), n += t);
  return n;
}
const Ho = {};
function zs(e, t) {
  const r = M.useRef(Ho);
  return r.current === Ho && (r.current = e(t)), r;
}
const Qs = [];
function $s(e) {
  M.useEffect(e, Qs);
}
class sn {
  constructor() {
    Vr(this, "currentId", null);
    Vr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Vr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new sn();
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
function ur() {
  const e = zs(sn.create).current;
  return $s(e.disposeEffect), e;
}
function so(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function _s(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function qi(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  const c = i.type;
  return typeof c == "function" && !_s(c) && (s = "Did you accidentally use a plain function component for an element instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const co = so(p.element, qi);
co.isRequired = so(p.element.isRequired, qi);
function Bi(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let c = 0; c < i.length; c += 1) {
      const A = i[c];
      A && (a += (s === !0 ? "" : " ") + t(A), s = !1, r && r[A] && (a += " " + r[A]));
    }
    n[o] = a;
  }
  return n;
}
const ec = /* @__PURE__ */ M.createContext();
process.env.NODE_ENV !== "production" && (p.node, p.bool);
const Xi = () => M.useContext(ec) ?? !1;
function qo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function lo(e) {
  var t;
  return parseInt(M.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function ht(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Tr(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ht(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Bn = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function tc() {
  if (Bo) return Ae;
  Bo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
  function h(u) {
    if (typeof u == "object" && u !== null) {
      var b = u.$$typeof;
      switch (b) {
        case e:
          switch (u = u.type, u) {
            case r:
            case o:
            case n:
            case c:
            case A:
            case g:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case s:
                case m:
                case f:
                  return u;
                case i:
                  return u;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Ae.ContextConsumer = i, Ae.ContextProvider = a, Ae.Element = e, Ae.ForwardRef = s, Ae.Fragment = r, Ae.Lazy = m, Ae.Memo = f, Ae.Portal = t, Ae.Profiler = o, Ae.StrictMode = n, Ae.Suspense = c, Ae.SuspenseList = A, Ae.isContextConsumer = function(u) {
    return h(u) === i;
  }, Ae.isContextProvider = function(u) {
    return h(u) === a;
  }, Ae.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, Ae.isForwardRef = function(u) {
    return h(u) === s;
  }, Ae.isFragment = function(u) {
    return h(u) === r;
  }, Ae.isLazy = function(u) {
    return h(u) === m;
  }, Ae.isMemo = function(u) {
    return h(u) === f;
  }, Ae.isPortal = function(u) {
    return h(u) === t;
  }, Ae.isProfiler = function(u) {
    return h(u) === o;
  }, Ae.isStrictMode = function(u) {
    return h(u) === n;
  }, Ae.isSuspense = function(u) {
    return h(u) === c;
  }, Ae.isSuspenseList = function(u) {
    return h(u) === A;
  }, Ae.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === o || u === n || u === c || u === A || typeof u == "object" && u !== null && (u.$$typeof === m || u.$$typeof === f || u.$$typeof === a || u.$$typeof === i || u.$$typeof === s || u.$$typeof === y || u.getModuleId !== void 0);
  }, Ae.typeOf = h, Ae;
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
var Xo;
function rc() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var b = u.$$typeof;
        switch (b) {
          case t:
            switch (u = u.type, u) {
              case n:
              case i:
              case o:
              case A:
              case f:
              case y:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case s:
                  case c:
                  case g:
                  case m:
                    return u;
                  case a:
                    return u;
                  default:
                    return b;
                }
            }
          case r:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    pe.ContextConsumer = a, pe.ContextProvider = s, pe.Element = t, pe.ForwardRef = c, pe.Fragment = n, pe.Lazy = g, pe.Memo = m, pe.Portal = r, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = A, pe.SuspenseList = f, pe.isContextConsumer = function(u) {
      return e(u) === a;
    }, pe.isContextProvider = function(u) {
      return e(u) === s;
    }, pe.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, pe.isForwardRef = function(u) {
      return e(u) === c;
    }, pe.isFragment = function(u) {
      return e(u) === n;
    }, pe.isLazy = function(u) {
      return e(u) === g;
    }, pe.isMemo = function(u) {
      return e(u) === m;
    }, pe.isPortal = function(u) {
      return e(u) === r;
    }, pe.isProfiler = function(u) {
      return e(u) === i;
    }, pe.isStrictMode = function(u) {
      return e(u) === o;
    }, pe.isSuspense = function(u) {
      return e(u) === A;
    }, pe.isSuspenseList = function(u) {
      return e(u) === f;
    }, pe.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === A || u === f || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === m || u.$$typeof === s || u.$$typeof === a || u.$$typeof === c || u.$$typeof === h || u.getModuleId !== void 0);
    }, pe.typeOf = e;
  }()), pe;
}
process.env.NODE_ENV === "production" ? Bn.exports = tc() : Bn.exports = rc();
var Qr = Bn.exports;
function ut(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ki(e) {
  if (/* @__PURE__ */ M.isValidElement(e) || Qr.isValidElementType(e) || !ut(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ki(e[r]);
  }), t;
}
function Fe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return ut(e) && ut(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ M.isValidElement(t[o]) || Qr.isValidElementType(t[o]) ? n[o] = t[o] : ut(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && ut(e[o]) ? n[o] = Fe(e[o], t[o], r) : r.clone ? n[o] = ut(t[o]) ? Ki(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function dr(e, t) {
  return t ? Fe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const bt = process.env.NODE_ENV !== "production" ? p.oneOfType([p.number, p.string, p.object, p.array]) : {};
function Ko(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function nc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function oc(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ht(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function ic(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const c = t(e.breakpoints.not(...s), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const cn = {
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
}, zo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${cn[e]}px)`
}, ac = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : cn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function ft(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || zo;
    return t.reduce((a, s, c) => (a[i.up(i.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || zo;
    return Object.keys(t).reduce((a, s) => {
      if (nc(i.keys, s)) {
        const c = oc(n.containerQueries ? n : ac, s);
        c && (a[c] = r(t[s], s));
      } else if (Object.keys(i.values || cn).includes(s)) {
        const c = i.up(s);
        a[c] = r(t[s], s);
      } else {
        const c = s;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function sc(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Qo(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function ln(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function $r(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = ln(e, r) || n, t && (o = t(o, n, e)), o;
}
function Ie(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], c = a.theme, A = ln(c, n) || {};
    return ft(a, s, (m) => {
      let g = $r(A, o, m);
      return m === g && typeof m == "string" && (g = $r(A, o, `${t}${m === "default" ? "" : Tr(m)}`, m)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: bt
  } : {}, i.filterProps = [t], i;
}
function cc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const lc = {
  m: "margin",
  p: "padding"
}, uc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $o = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, fc = cc((e) => {
  if (e.length > 2)
    if ($o[e])
      e = $o[e];
    else
      return [e];
  const [t, r] = e.split(""), n = lc[t], o = uc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), un = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], fn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ac = [...un, ...fn];
function kr(e, t, r, n) {
  const o = ln(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function uo(e) {
  return kr(e, "spacing", 8, "spacing");
}
function Rr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function pc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Rr(t, r), n), {});
}
function dc(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = fc(r), i = pc(o, n), a = e[r];
  return ft(e, a, i);
}
function zi(e, t) {
  const r = uo(e.theme);
  return Object.keys(e).map((n) => dc(e, t, n, r)).reduce(dr, {});
}
function he(e) {
  return zi(e, un);
}
he.propTypes = process.env.NODE_ENV !== "production" ? un.reduce((e, t) => (e[t] = bt, e), {}) : {};
he.filterProps = un;
function ye(e) {
  return zi(e, fn);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? fn.reduce((e, t) => (e[t] = bt, e), {}) : {};
ye.filterProps = fn;
process.env.NODE_ENV !== "production" && Ac.reduce((e, t) => (e[t] = bt, e), {});
function An(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? dr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Xe(e, t) {
  return Ie({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const mc = Xe("border", Ue), gc = Xe("borderTop", Ue), hc = Xe("borderRight", Ue), yc = Xe("borderBottom", Ue), bc = Xe("borderLeft", Ue), vc = Xe("borderColor"), Cc = Xe("borderTopColor"), Ic = Xe("borderRightColor"), Ec = Xe("borderBottomColor"), xc = Xe("borderLeftColor"), wc = Xe("outline", Ue), Sc = Xe("outlineColor"), pn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = kr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Rr(t, n)
    });
    return ft(e, e.borderRadius, r);
  }
  return null;
};
pn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: bt
} : {};
pn.filterProps = ["borderRadius"];
An(mc, gc, hc, yc, bc, vc, Cc, Ic, Ec, xc, pn, wc, Sc);
const dn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = kr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Rr(t, n)
    });
    return ft(e, e.gap, r);
  }
  return null;
};
dn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: bt
} : {};
dn.filterProps = ["gap"];
const mn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = kr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Rr(t, n)
    });
    return ft(e, e.columnGap, r);
  }
  return null;
};
mn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: bt
} : {};
mn.filterProps = ["columnGap"];
const gn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = kr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Rr(t, n)
    });
    return ft(e, e.rowGap, r);
  }
  return null;
};
gn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: bt
} : {};
gn.filterProps = ["rowGap"];
const Tc = Ie({
  prop: "gridColumn"
}), kc = Ie({
  prop: "gridRow"
}), Rc = Ie({
  prop: "gridAutoFlow"
}), Oc = Ie({
  prop: "gridAutoColumns"
}), jc = Ie({
  prop: "gridAutoRows"
}), Mc = Ie({
  prop: "gridTemplateColumns"
}), Wc = Ie({
  prop: "gridTemplateRows"
}), Pc = Ie({
  prop: "gridTemplateAreas"
}), Lc = Ie({
  prop: "gridArea"
});
An(dn, mn, gn, Tc, kc, Rc, Oc, jc, Mc, Wc, Pc, Lc);
function Bt(e, t) {
  return t === "grey" ? t : e;
}
const Vc = Ie({
  prop: "color",
  themeKey: "palette",
  transform: Bt
}), Dc = Ie({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Bt
}), Nc = Ie({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Bt
});
An(Vc, Dc, Nc);
function Ne(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Yc = Ie({
  prop: "width",
  transform: Ne
}), fo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, c;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || cn[r];
      return n ? ((c = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ne(r)
      };
    };
    return ft(e, e.maxWidth, t);
  }
  return null;
};
fo.filterProps = ["maxWidth"];
const Fc = Ie({
  prop: "minWidth",
  transform: Ne
}), Zc = Ie({
  prop: "height",
  transform: Ne
}), Jc = Ie({
  prop: "maxHeight",
  transform: Ne
}), Gc = Ie({
  prop: "minHeight",
  transform: Ne
});
Ie({
  prop: "size",
  cssProperty: "width",
  transform: Ne
});
Ie({
  prop: "size",
  cssProperty: "height",
  transform: Ne
});
const Uc = Ie({
  prop: "boxSizing"
});
An(Yc, fo, Fc, Zc, Jc, Gc, Uc);
const hn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ue
  },
  borderTop: {
    themeKey: "borders",
    transform: Ue
  },
  borderRight: {
    themeKey: "borders",
    transform: Ue
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ue
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ue
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
    transform: Ue
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: pn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Bt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Bt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Bt
  },
  // spacing
  p: {
    style: ye
  },
  pt: {
    style: ye
  },
  pr: {
    style: ye
  },
  pb: {
    style: ye
  },
  pl: {
    style: ye
  },
  px: {
    style: ye
  },
  py: {
    style: ye
  },
  padding: {
    style: ye
  },
  paddingTop: {
    style: ye
  },
  paddingRight: {
    style: ye
  },
  paddingBottom: {
    style: ye
  },
  paddingLeft: {
    style: ye
  },
  paddingX: {
    style: ye
  },
  paddingY: {
    style: ye
  },
  paddingInline: {
    style: ye
  },
  paddingInlineStart: {
    style: ye
  },
  paddingInlineEnd: {
    style: ye
  },
  paddingBlock: {
    style: ye
  },
  paddingBlockStart: {
    style: ye
  },
  paddingBlockEnd: {
    style: ye
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
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
    style: dn
  },
  rowGap: {
    style: gn
  },
  columnGap: {
    style: mn
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
    transform: Ne
  },
  maxWidth: {
    style: fo
  },
  minWidth: {
    transform: Ne
  },
  height: {
    transform: Ne
  },
  maxHeight: {
    transform: Ne
  },
  minHeight: {
    transform: Ne
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
function Hc(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function qc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bc() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: A,
      transform: f,
      style: m
    } = s;
    if (n == null)
      return null;
    if (A === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = ln(o, A) || {};
    return m ? m(a) : ft(a, n, (h) => {
      let u = $r(g, f, h);
      return h === u && typeof h == "string" && (u = $r(g, f, `${r}${h === "default" ? "" : Tr(h)}`, h)), c === !1 ? u : {
        [c]: u
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = r || {};
    if (!n)
      return null;
    const a = o.unstable_sxConfig ?? hn;
    function s(c) {
      let A = c;
      if (typeof c == "function")
        A = c(o);
      else if (typeof c != "object")
        return c;
      if (!A)
        return null;
      const f = sc(o.breakpoints), m = Object.keys(f);
      let g = f;
      return Object.keys(A).forEach((y) => {
        const h = qc(A[y], o);
        if (h != null)
          if (typeof h == "object")
            if (a[y])
              g = dr(g, e(y, h, o, a));
            else {
              const u = ft({
                theme: o
              }, h, (b) => ({
                [y]: b
              }));
              Hc(u, h) ? g[y] = t({
                sx: h,
                theme: o,
                nested: !0
              }) : g = dr(g, u);
            }
          else
            g = dr(g, e(y, h, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Ko(o, Qo(m, g))
      } : Ko(o, Qo(m, g));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const Kt = Bc();
Kt.filterProps = ["sx"];
/**
 * @mui/styled-engine v7.3.7
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Xc(e, t) {
  const r = Ce(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Kc(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const _o = [];
function Mt(e) {
  return _o[0] = e, Zi(_o);
}
const zc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Qc(e) {
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
    ...o
  } = e, i = zc(t), a = Object.keys(i);
  function s(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function A(g, y) {
    const h = a.indexOf(y);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(h !== -1 && typeof t[a[h]] == "number" ? t[a[h]] : y) - n / 100}${r})`;
  }
  function f(g) {
    return a.indexOf(g) + 1 < a.length ? A(g, a[a.indexOf(g) + 1]) : s(g);
  }
  function m(g) {
    const y = a.indexOf(g);
    return y === 0 ? s(a[1]) : y === a.length - 1 ? c(a[y]) : A(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: c,
    between: A,
    only: f,
    not: m,
    unit: r,
    ...o
  };
}
const $c = {
  borderRadius: 4
};
function Qi(e = 8, t = uo({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function _c(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Ao(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = Qc(r), c = Qi(o);
  let A = Fe({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...$c,
      ...i
    }
  }, a);
  return A = ic(A), A.applyStyles = _c, A = t.reduce((f, m) => Fe(f, m), A), A.unstable_sxConfig = {
    ...hn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, A.unstable_sx = function(m) {
    return Kt({
      sx: m,
      theme: this
    });
  }, A;
}
function el(e) {
  return Object.keys(e).length === 0;
}
function tl(e = null) {
  const t = M.useContext(Gi);
  return !t || el(t) ? e : t;
}
const rl = Ao();
function nl(e = rl) {
  return tl(e);
}
const ei = (e) => e, ol = () => {
  let e = ei;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ei;
    }
  };
}, il = ol(), al = {
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
function yn(e, t, r = "Mui") {
  const n = al[t];
  return n ? `${r}-${n}` : `${il.generate(e)}-${t}`;
}
function $i(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = yn(e, o, r);
  }), n;
}
function _i(e, t = "") {
  return e.displayName || e.name || t;
}
function ti(e, t, r) {
  const n = _i(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function sl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return _i(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Qr.ForwardRef:
          return ti(e, e.render, "ForwardRef");
        case Qr.Memo:
          return ti(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ea(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Mt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Mt(o.style));
  }), n;
}
const cl = Ao();
function Dn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function jt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function ll(e) {
  return e ? (t, r) => r[e] : null;
}
function ul(e, t, r) {
  e.theme = dl(e.theme) ? r : e.theme[t] || e.theme;
}
function Xr(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => Xr(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? jt(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = r ? jt(Mt(a), r) : a;
    }
    return ta(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? jt(Mt(n.style), r) : n.style : r ? jt(Mt(n), r) : n;
}
function ta(e, t, r = [], n = void 0) {
  var i;
  let o;
  e: for (let a = 0; a < t.length; a += 1) {
    const s = t[a];
    if (typeof s.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(o))
        continue;
    } else
      for (const c in s.props)
        if (e[c] !== s.props[c] && ((i = e.ownerState) == null ? void 0 : i[c]) !== s.props[c])
          continue e;
    typeof s.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? jt(Mt(s.style(o)), n) : s.style(o))) : r.push(n ? jt(Mt(s.style), n) : s.style);
  }
  return r;
}
function fl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = cl,
    rootShouldForwardProp: n = Dn,
    slotShouldForwardProp: o = Dn
  } = e;
  function i(s) {
    ul(s, t, r);
  }
  return (s, c = {}) => {
    Kc(s, (E) => E.filter((O) => O !== Kt));
    const {
      name: A,
      slot: f,
      skipVariantsResolver: m,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = ll(ra(f)),
      ...h
    } = c, u = A && A.startsWith("Mui") || f ? "components" : "custom", b = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), x = g || !1;
    let S = Dn;
    f === "Root" || f === "root" ? S = n : f ? S = o : ml(s) && (S = void 0);
    const R = Xc(s, {
      shouldForwardProp: S,
      label: pl(A, f),
      ...h
    }), C = (E) => {
      if (E.__emotion_real === E)
        return E;
      if (typeof E == "function")
        return function(J) {
          return Xr(J, E, J.theme.modularCssLayers ? u : void 0);
        };
      if (ut(E)) {
        const O = ea(E);
        return function(F) {
          return O.variants ? Xr(F, O, F.theme.modularCssLayers ? u : void 0) : F.theme.modularCssLayers ? jt(O.style, u) : O.style;
        };
      }
      return E;
    }, v = (...E) => {
      const O = [], J = E.map(C), F = [];
      if (O.push(i), A && y && F.push(function(T) {
        var Z, ee;
        const W = (ee = (Z = T.theme.components) == null ? void 0 : Z[A]) == null ? void 0 : ee.styleOverrides;
        if (!W)
          return null;
        const V = {};
        for (const le in W)
          V[le] = Xr(T, W[le], T.theme.modularCssLayers ? "theme" : void 0);
        return y(T, V);
      }), A && !b && F.push(function(T) {
        var V, Z;
        const k = T.theme, W = (Z = (V = k == null ? void 0 : k.components) == null ? void 0 : V[A]) == null ? void 0 : Z.variants;
        return W ? ta(T, W, [], T.theme.modularCssLayers ? "theme" : void 0) : null;
      }), x || F.push(Kt), Array.isArray(J[0])) {
        const l = J.shift(), T = new Array(O.length).fill(""), k = new Array(F.length).fill("");
        let W;
        W = [...T, ...l, ...k], W.raw = [...T, ...l.raw, ...k], O.unshift(W);
      }
      const Y = [...O, ...J, ...F], L = R(...Y);
      return s.muiName && (L.muiName = s.muiName), process.env.NODE_ENV !== "production" && (L.displayName = Al(A, f, s)), L;
    };
    return R.withConfig && (v.withConfig = R.withConfig), v;
  };
}
function Al(e, t, r) {
  return e ? `${e}${Tr(t || "")}` : `Styled(${sl(r)})`;
}
function pl(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ra(t || "Root")}`), r;
}
function dl(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ml(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ra(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Xn(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], s = t[i];
        if (!s)
          n[i] = a || {};
        else if (!a)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              const A = c;
              n[i][A] = Xn(a[A], s[A], r);
            }
        }
      } else i === "className" && r && t.className ? n.className = vr(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Cr = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
function gl(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function po(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), gl(e, t, r);
}
function hl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function yt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return yt(hl(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ht(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ht(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const yl = (e) => {
  const t = yt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, fr = (e, t) => {
  try {
    return yl(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function bn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function na(e) {
  e = yt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (A, f = (A + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), bn({
    type: s,
    values: c
  });
}
function Kn(e) {
  e = yt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? yt(na(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ri(e, t) {
  const r = Kn(e), n = Kn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function oa(e, t) {
  return e = yt(e), t = po(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, bn(e);
}
function Tt(e, t, r) {
  try {
    return oa(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function vn(e, t) {
  if (e = yt(e), t = po(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return bn(e);
}
function ue(e, t, r) {
  try {
    return vn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Cn(e, t) {
  if (e = yt(e), t = po(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return bn(e);
}
function fe(e, t, r) {
  try {
    return Cn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function bl(e, t = 0.15) {
  return Kn(e) > 0.5 ? vn(e, t) : Cn(e, t);
}
function Fr(e, t, r) {
  try {
    return bl(e, t);
  } catch {
    return e;
  }
}
const vl = "exact-prop: ​";
function Cl(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [vl]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Il = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (p.node, p.object);
function El(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Xn(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Xn(o, n, t.components.mergeClassNameAndStyle) : n;
}
function xl({
  props: e,
  name: t
}) {
  const r = M.useContext(Il);
  return El({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let ni = 0;
function wl(e) {
  const [t, r] = M.useState(e), n = e || t;
  return M.useEffect(() => {
    t == null && (ni += 1, r(`mui-${ni}`));
  }, [t]), n;
}
const Sl = {
  ...M
}, oi = Sl.useId;
function Tl(e) {
  if (oi !== void 0) {
    const t = oi();
    return e ?? t;
  }
  return wl(e);
}
const ii = {
  theme: void 0
};
function kl(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (ii.theme = o.theme, i = ea(e(ii)), t = i, r = o.theme), i;
  };
}
function Rl(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ai = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ol = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, c]) => {
      (!r || r && !r([...i, s])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...i, s], Array.isArray(c) ? [...a, s] : a) : t([...i, s], c, a));
    });
  }
  n(e);
}, jl = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Nn(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Ol(
    e,
    (s, c, A) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(s, c))) {
        const f = `--${r ? `${r}-` : ""}${s.join("-")}`, m = jl(s, c);
        Object.assign(o, {
          [f]: m
        }), ai(i, s, `var(${f})`, A), ai(a, s, `var(${f}, ${m})`, A);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Ml(e, t = {}) {
  const {
    getSelector: r = x,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: c = "light",
    ...A
  } = e, {
    vars: f,
    css: m,
    varsWithDefaults: g
  } = Nn(A, t);
  let y = g;
  const h = {}, {
    [c]: u,
    ...b
  } = a;
  if (Object.entries(b || {}).forEach(([C, v]) => {
    const {
      vars: E,
      css: O,
      varsWithDefaults: J
    } = Nn(v, t);
    y = Fe(y, J), h[C] = {
      css: O,
      vars: E
    };
  }), u) {
    const {
      css: C,
      vars: v,
      varsWithDefaults: E
    } = Nn(u, t);
    y = Fe(y, E), h[c] = {
      css: C,
      vars: v
    };
  }
  function x(C, v) {
    var O, J;
    let E = o;
    if (o === "class" && (E = ".%s"), o === "data" && (E = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (E = `[${o}="%s"]`), C) {
      if (E === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((J = (O = a[C]) == null ? void 0 : O.palette) == null ? void 0 : J.mode) || C})`]: {
            ":root": v
          }
        };
      if (E)
        return e.defaultColorScheme === C ? `:root, ${E.replace("%s", String(C))}` : E.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let C = {
        ...f
      };
      return Object.entries(h).forEach(([, {
        vars: v
      }]) => {
        C = Fe(C, v);
      }), C;
    },
    generateStyleSheets: () => {
      var F, Y;
      const C = [], v = e.defaultColorScheme || "light";
      function E(L, l) {
        Object.keys(l).length && C.push(typeof L == "string" ? {
          [L]: {
            ...l
          }
        } : L);
      }
      E(r(void 0, {
        ...m
      }), m);
      const {
        [v]: O,
        ...J
      } = h;
      if (O) {
        const {
          css: L
        } = O, l = (Y = (F = a[v]) == null ? void 0 : F.palette) == null ? void 0 : Y.mode, T = !n && l ? {
          colorScheme: l,
          ...L
        } : {
          ...L
        };
        E(r(v, {
          ...T
        }), T);
      }
      return Object.entries(J).forEach(([L, {
        css: l
      }]) => {
        var W, V;
        const T = (V = (W = a[L]) == null ? void 0 : W.palette) == null ? void 0 : V.mode, k = !n && T ? {
          colorScheme: T,
          ...l
        } : {
          ...l
        };
        E(r(L, {
          ...k
        }), k);
      }), i && C.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), C;
    }
  };
}
function Wl(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Ir = {
  black: "#000",
  white: "#fff"
}, Pl = {
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
}, Yt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ft = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, sr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Zt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Jt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Gt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function ia() {
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
      paper: Ir.white,
      default: Ir.white
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
const aa = ia();
function sa() {
  return {
    text: {
      primary: Ir.white,
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
      active: Ir.white,
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
const zn = sa();
function si(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Cn(e.main, o) : t === "dark" && (e.dark = vn(e.main, i)));
}
function ci(e, t, r, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Ll(e = "light") {
  return e === "dark" ? {
    main: Zt[200],
    light: Zt[50],
    dark: Zt[400]
  } : {
    main: Zt[700],
    light: Zt[400],
    dark: Zt[800]
  };
}
function Vl(e = "light") {
  return e === "dark" ? {
    main: Yt[200],
    light: Yt[50],
    dark: Yt[400]
  } : {
    main: Yt[500],
    light: Yt[300],
    dark: Yt[700]
  };
}
function Dl(e = "light") {
  return e === "dark" ? {
    main: Ft[500],
    light: Ft[300],
    dark: Ft[700]
  } : {
    main: Ft[700],
    light: Ft[400],
    dark: Ft[800]
  };
}
function Nl(e = "light") {
  return e === "dark" ? {
    main: Jt[400],
    light: Jt[300],
    dark: Jt[700]
  } : {
    main: Jt[700],
    light: Jt[500],
    dark: Jt[900]
  };
}
function Yl(e = "light") {
  return e === "dark" ? {
    main: Gt[400],
    light: Gt[300],
    dark: Gt[700]
  } : {
    main: Gt[800],
    light: Gt[500],
    dark: Gt[900]
  };
}
function Fl(e = "light") {
  return e === "dark" ? {
    main: sr[400],
    light: sr[300],
    dark: sr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: sr[500],
    dark: sr[900]
  };
}
function Zl(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function mo(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, a = e.primary || Ll(t), s = e.secondary || Vl(t), c = e.error || Dl(t), A = e.info || Nl(t), f = e.success || Yl(t), m = e.warning || Fl(t);
  function g(b) {
    if (o)
      return Zl(b);
    const x = ri(b, zn.text.primary) >= r ? zn.text.primary : aa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = ri(b, x);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${x} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const y = ({
    color: b,
    name: x,
    mainShade: S = 500,
    lightShade: R = 300,
    darkShade: C = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[S] && (b.main = b[S]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : ht(11, x ? ` (${x})` : "", S));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ht(12, x ? ` (${x})` : "", JSON.stringify(b.main)));
    return o ? (ci(o, b, "light", R, n), ci(o, b, "dark", C, n)) : (si(b, "light", R, n), si(b, "dark", C, n)), b.contrastText || (b.contrastText = g(b.main)), b;
  };
  let h;
  return t === "light" ? h = ia() : t === "dark" && (h = sa()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Fe({
    // A collection of common colors.
    common: {
      ...Ir
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: A,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Pl,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...h
  }, i);
}
function Jl(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Gl(e, t) {
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
function Ul(e) {
  return Math.round(e * 1e5) / 1e5;
}
const li = {
  textTransform: "uppercase"
}, ui = '"Roboto", "Helvetica", "Arial", sans-serif';
function Hl(e, t) {
  const {
    fontFamily: r = ui,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: A,
    pxToRem: f,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, y = f || ((b) => `${b / c * g}rem`), h = (b, x, S, R, C) => ({
    fontFamily: r,
    fontWeight: b,
    fontSize: y(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ui ? {
      letterSpacing: `${Ul(R / x)}em`
    } : {},
    ...C,
    ...A
  }), u = {
    h1: h(o, 96, 1.167, -1.5),
    h2: h(o, 60, 1.2, -0.5),
    h3: h(i, 48, 1.167, 0),
    h4: h(i, 34, 1.235, 0.25),
    h5: h(i, 24, 1.334, 0),
    h6: h(a, 20, 1.6, 0.15),
    subtitle1: h(i, 16, 1.75, 0.15),
    subtitle2: h(a, 14, 1.57, 0.1),
    body1: h(i, 16, 1.5, 0.15),
    body2: h(i, 14, 1.43, 0.15),
    button: h(a, 14, 1.75, 0.4, li),
    caption: h(i, 12, 1.66, 0.4),
    overline: h(i, 12, 2.66, 1, li),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Fe({
    htmlFontSize: c,
    pxToRem: y,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...u
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const ql = 0.2, Bl = 0.14, Xl = 0.12;
function me(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ql})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Bl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Xl})`].join(",");
}
const Kl = ["none", me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ql = {
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
function fi(e) {
  return `${Math.round(e)}ms`;
}
function $l(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function _l(e) {
  const t = {
    ...zl,
    ...e.easing
  }, r = {
    ...Ql,
    ...e.duration
  };
  return {
    getAutoHeightDuration: $l,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: c = 0,
        ...A
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(s) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(A).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(A).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : fi(a)} ${s} ${typeof c == "string" ? c : fi(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const eu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function tu(e) {
  return ut(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ca(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !tu(s) || a.startsWith("unstable_") ? delete n[a] : ut(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ai(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const ru = (e) => {
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
function nu(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : oa(t, ru(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Ai(r)})` : Cn(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Ai(r)})` : vn(t, r);
    }
  });
}
function Qn(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: c,
    colorSpace: A,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ht(20));
  const m = mo({
    ...i,
    colorSpace: A
  }), g = Ao(e);
  let y = Fe(g, {
    mixins: Gl(g.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Kl.slice(),
    typography: Hl(m, s),
    transitions: _l(a),
    zIndex: {
      ...eu
    }
  });
  if (y = Fe(y, f), y = t.reduce((h, u) => Fe(h, u), y), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], u = (b, x) => {
      let S;
      for (S in b) {
        const R = b[S];
        if (h.includes(S) && Object.keys(R).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = yn("", S);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${S}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: R
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[S] = {};
        }
      }
    };
    Object.keys(y.components).forEach((b) => {
      const x = y.components[b].styleOverrides;
      x && b.startsWith("Mui") && u(x, b);
    });
  }
  return y.unstable_sxConfig = {
    ...hn,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(u) {
    return Kt({
      sx: u,
      theme: this
    });
  }, y.toRuntimeSource = ca, nu(y), y;
}
function ou(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const iu = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = ou(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function la(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ua(e) {
  return e === "dark" ? iu : [];
}
function au(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, a = mo({
    ...t,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...la(a.mode),
      ...r
    },
    overlays: n || ua(a.mode),
    ...i
  };
}
function su(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const cu = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], lu = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return cu(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function uu(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function I(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ar(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : na(e);
}
function lt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = fr(Ar(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function fu(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const $e = (e) => {
  try {
    return e();
  } catch {
  }
}, Au = (e = "mui") => Rl(e);
function Yn(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = au({
      ...r,
      palette: {
        mode: i,
        ...r == null ? void 0 : r.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...s
  } = Qn({
    ...n,
    palette: {
      mode: i,
      ...r == null ? void 0 : r.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: a,
    opacity: {
      ...la(i),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || ua(i)
  }, s;
}
function pu(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: s = su,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: A = ":root",
    ...f
  } = e, m = Object.keys(r)[0], g = n || (r.light && m !== "light" ? "light" : m), y = Au(i), {
    [g]: h,
    light: u,
    dark: b,
    ...x
  } = r, S = {
    ...x
  };
  let R = h;
  if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (R = !0), !R)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : ht(21, g));
  let C;
  a && (C = "oklch");
  const v = Yn(C, S, R, f, g);
  u && !S.light && Yn(C, S, u, void 0, "light"), b && !S.dark && Yn(C, S, b, void 0, "dark");
  let E = {
    defaultColorScheme: g,
    ...v,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: A,
    getCssVar: y,
    colorSchemes: S,
    font: {
      ...Jl(v.typography),
      ...v.font
    },
    spacing: fu(f.spacing)
  };
  Object.keys(E.colorSchemes).forEach((L) => {
    const l = E.colorSchemes[L].palette, T = (W) => {
      const V = W.split("-"), Z = V[1], ee = V[2];
      return y(W, l[Z][ee]);
    };
    l.mode === "light" && (I(l.common, "background", "#fff"), I(l.common, "onBackground", "#000")), l.mode === "dark" && (I(l.common, "background", "#000"), I(l.common, "onBackground", "#fff"));
    function k(W, V, Z) {
      if (C) {
        let ee;
        return W === Tt && (ee = `transparent ${((1 - Z) * 100).toFixed(0)}%`), W === ue && (ee = `#000 ${(Z * 100).toFixed(0)}%`), W === fe && (ee = `#fff ${(Z * 100).toFixed(0)}%`), `color-mix(in ${C}, ${V}, ${ee})`;
      }
      return W(V, Z);
    }
    if (uu(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      I(l.Alert, "errorColor", k(ue, l.error.light, 0.6)), I(l.Alert, "infoColor", k(ue, l.info.light, 0.6)), I(l.Alert, "successColor", k(ue, l.success.light, 0.6)), I(l.Alert, "warningColor", k(ue, l.warning.light, 0.6)), I(l.Alert, "errorFilledBg", T("palette-error-main")), I(l.Alert, "infoFilledBg", T("palette-info-main")), I(l.Alert, "successFilledBg", T("palette-success-main")), I(l.Alert, "warningFilledBg", T("palette-warning-main")), I(l.Alert, "errorFilledColor", $e(() => l.getContrastText(l.error.main))), I(l.Alert, "infoFilledColor", $e(() => l.getContrastText(l.info.main))), I(l.Alert, "successFilledColor", $e(() => l.getContrastText(l.success.main))), I(l.Alert, "warningFilledColor", $e(() => l.getContrastText(l.warning.main))), I(l.Alert, "errorStandardBg", k(fe, l.error.light, 0.9)), I(l.Alert, "infoStandardBg", k(fe, l.info.light, 0.9)), I(l.Alert, "successStandardBg", k(fe, l.success.light, 0.9)), I(l.Alert, "warningStandardBg", k(fe, l.warning.light, 0.9)), I(l.Alert, "errorIconColor", T("palette-error-main")), I(l.Alert, "infoIconColor", T("palette-info-main")), I(l.Alert, "successIconColor", T("palette-success-main")), I(l.Alert, "warningIconColor", T("palette-warning-main")), I(l.AppBar, "defaultBg", T("palette-grey-100")), I(l.Avatar, "defaultBg", T("palette-grey-400")), I(l.Button, "inheritContainedBg", T("palette-grey-300")), I(l.Button, "inheritContainedHoverBg", T("palette-grey-A100")), I(l.Chip, "defaultBorder", T("palette-grey-400")), I(l.Chip, "defaultAvatarColor", T("palette-grey-700")), I(l.Chip, "defaultIconColor", T("palette-grey-700")), I(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), I(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), I(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), I(l.LinearProgress, "primaryBg", k(fe, l.primary.main, 0.62)), I(l.LinearProgress, "secondaryBg", k(fe, l.secondary.main, 0.62)), I(l.LinearProgress, "errorBg", k(fe, l.error.main, 0.62)), I(l.LinearProgress, "infoBg", k(fe, l.info.main, 0.62)), I(l.LinearProgress, "successBg", k(fe, l.success.main, 0.62)), I(l.LinearProgress, "warningBg", k(fe, l.warning.main, 0.62)), I(l.Skeleton, "bg", C ? k(Tt, l.text.primary, 0.11) : `rgba(${T("palette-text-primaryChannel")} / 0.11)`), I(l.Slider, "primaryTrack", k(fe, l.primary.main, 0.62)), I(l.Slider, "secondaryTrack", k(fe, l.secondary.main, 0.62)), I(l.Slider, "errorTrack", k(fe, l.error.main, 0.62)), I(l.Slider, "infoTrack", k(fe, l.info.main, 0.62)), I(l.Slider, "successTrack", k(fe, l.success.main, 0.62)), I(l.Slider, "warningTrack", k(fe, l.warning.main, 0.62));
      const W = C ? k(ue, l.background.default, 0.6825) : Fr(l.background.default, 0.8);
      I(l.SnackbarContent, "bg", W), I(l.SnackbarContent, "color", $e(() => C ? zn.text.primary : l.getContrastText(W))), I(l.SpeedDialAction, "fabHoverBg", Fr(l.background.paper, 0.15)), I(l.StepConnector, "border", T("palette-grey-400")), I(l.StepContent, "border", T("palette-grey-400")), I(l.Switch, "defaultColor", T("palette-common-white")), I(l.Switch, "defaultDisabledColor", T("palette-grey-100")), I(l.Switch, "primaryDisabledColor", k(fe, l.primary.main, 0.62)), I(l.Switch, "secondaryDisabledColor", k(fe, l.secondary.main, 0.62)), I(l.Switch, "errorDisabledColor", k(fe, l.error.main, 0.62)), I(l.Switch, "infoDisabledColor", k(fe, l.info.main, 0.62)), I(l.Switch, "successDisabledColor", k(fe, l.success.main, 0.62)), I(l.Switch, "warningDisabledColor", k(fe, l.warning.main, 0.62)), I(l.TableCell, "border", k(fe, k(Tt, l.divider, 1), 0.88)), I(l.Tooltip, "bg", k(Tt, l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      I(l.Alert, "errorColor", k(fe, l.error.light, 0.6)), I(l.Alert, "infoColor", k(fe, l.info.light, 0.6)), I(l.Alert, "successColor", k(fe, l.success.light, 0.6)), I(l.Alert, "warningColor", k(fe, l.warning.light, 0.6)), I(l.Alert, "errorFilledBg", T("palette-error-dark")), I(l.Alert, "infoFilledBg", T("palette-info-dark")), I(l.Alert, "successFilledBg", T("palette-success-dark")), I(l.Alert, "warningFilledBg", T("palette-warning-dark")), I(l.Alert, "errorFilledColor", $e(() => l.getContrastText(l.error.dark))), I(l.Alert, "infoFilledColor", $e(() => l.getContrastText(l.info.dark))), I(l.Alert, "successFilledColor", $e(() => l.getContrastText(l.success.dark))), I(l.Alert, "warningFilledColor", $e(() => l.getContrastText(l.warning.dark))), I(l.Alert, "errorStandardBg", k(ue, l.error.light, 0.9)), I(l.Alert, "infoStandardBg", k(ue, l.info.light, 0.9)), I(l.Alert, "successStandardBg", k(ue, l.success.light, 0.9)), I(l.Alert, "warningStandardBg", k(ue, l.warning.light, 0.9)), I(l.Alert, "errorIconColor", T("palette-error-main")), I(l.Alert, "infoIconColor", T("palette-info-main")), I(l.Alert, "successIconColor", T("palette-success-main")), I(l.Alert, "warningIconColor", T("palette-warning-main")), I(l.AppBar, "defaultBg", T("palette-grey-900")), I(l.AppBar, "darkBg", T("palette-background-paper")), I(l.AppBar, "darkColor", T("palette-text-primary")), I(l.Avatar, "defaultBg", T("palette-grey-600")), I(l.Button, "inheritContainedBg", T("palette-grey-800")), I(l.Button, "inheritContainedHoverBg", T("palette-grey-700")), I(l.Chip, "defaultBorder", T("palette-grey-700")), I(l.Chip, "defaultAvatarColor", T("palette-grey-300")), I(l.Chip, "defaultIconColor", T("palette-grey-300")), I(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), I(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), I(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), I(l.LinearProgress, "primaryBg", k(ue, l.primary.main, 0.5)), I(l.LinearProgress, "secondaryBg", k(ue, l.secondary.main, 0.5)), I(l.LinearProgress, "errorBg", k(ue, l.error.main, 0.5)), I(l.LinearProgress, "infoBg", k(ue, l.info.main, 0.5)), I(l.LinearProgress, "successBg", k(ue, l.success.main, 0.5)), I(l.LinearProgress, "warningBg", k(ue, l.warning.main, 0.5)), I(l.Skeleton, "bg", C ? k(Tt, l.text.primary, 0.13) : `rgba(${T("palette-text-primaryChannel")} / 0.13)`), I(l.Slider, "primaryTrack", k(ue, l.primary.main, 0.5)), I(l.Slider, "secondaryTrack", k(ue, l.secondary.main, 0.5)), I(l.Slider, "errorTrack", k(ue, l.error.main, 0.5)), I(l.Slider, "infoTrack", k(ue, l.info.main, 0.5)), I(l.Slider, "successTrack", k(ue, l.success.main, 0.5)), I(l.Slider, "warningTrack", k(ue, l.warning.main, 0.5));
      const W = C ? k(fe, l.background.default, 0.985) : Fr(l.background.default, 0.98);
      I(l.SnackbarContent, "bg", W), I(l.SnackbarContent, "color", $e(() => C ? aa.text.primary : l.getContrastText(W))), I(l.SpeedDialAction, "fabHoverBg", Fr(l.background.paper, 0.15)), I(l.StepConnector, "border", T("palette-grey-600")), I(l.StepContent, "border", T("palette-grey-600")), I(l.Switch, "defaultColor", T("palette-grey-300")), I(l.Switch, "defaultDisabledColor", T("palette-grey-600")), I(l.Switch, "primaryDisabledColor", k(ue, l.primary.main, 0.55)), I(l.Switch, "secondaryDisabledColor", k(ue, l.secondary.main, 0.55)), I(l.Switch, "errorDisabledColor", k(ue, l.error.main, 0.55)), I(l.Switch, "infoDisabledColor", k(ue, l.info.main, 0.55)), I(l.Switch, "successDisabledColor", k(ue, l.success.main, 0.55)), I(l.Switch, "warningDisabledColor", k(ue, l.warning.main, 0.55)), I(l.TableCell, "border", k(ue, k(Tt, l.divider, 1), 0.68)), I(l.Tooltip, "bg", k(Tt, l.grey[700], 0.92));
    }
    lt(l.background, "default"), lt(l.background, "paper"), lt(l.common, "background"), lt(l.common, "onBackground"), lt(l, "divider"), Object.keys(l).forEach((W) => {
      const V = l[W];
      W !== "tonalOffset" && V && typeof V == "object" && (V.main && I(l[W], "mainChannel", fr(Ar(V.main))), V.light && I(l[W], "lightChannel", fr(Ar(V.light))), V.dark && I(l[W], "darkChannel", fr(Ar(V.dark))), V.contrastText && I(l[W], "contrastTextChannel", fr(Ar(V.contrastText))), W === "text" && (lt(l[W], "primary"), lt(l[W], "secondary")), W === "action" && (V.active && lt(l[W], "active"), V.selected && lt(l[W], "selected")));
    });
  }), E = t.reduce((L, l) => Fe(L, l), E);
  const O = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: lu(E),
    enableContrastVars: a
  }, {
    vars: J,
    generateThemeVars: F,
    generateStyleSheets: Y
  } = Ml(E, O);
  return E.vars = J, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([L, l]) => {
    E[L] = l;
  }), E.generateThemeVars = F, E.generateStyleSheets = Y, E.generateSpacing = function() {
    return Qi(f.spacing, uo(this));
  }, E.getColorSchemeSelector = Wl(c), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = s, E.unstable_sxConfig = {
    ...hn,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, E.unstable_sx = function(l) {
    return Kt({
      sx: l,
      theme: this
    });
  }, E.toRuntimeSource = ca, E;
}
function pi(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: mo({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function du(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", c = o == null ? void 0 : o[s], A = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Qn(e, ...t);
    let f = r;
    "palette" in e || A[s] && (A[s] !== !0 ? f = A[s].palette : s === "dark" && (f = {
      mode: "dark"
    }));
    const m = Qn({
      ...e,
      palette: f
    }, ...t);
    return m.defaultColorScheme = s, m.colorSchemes = A, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...A.light !== !0 && A.light,
      palette: m.palette
    }, pi(m, "dark", A.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...A.dark !== !0 && A.dark,
      palette: m.palette
    }, pi(m, "light", A.light)), m;
  }
  return !r && !("light" in A) && s === "light" && (A.light = !0), pu({
    ...a,
    colorSchemes: A,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const fa = du(), Aa = "$$material";
function pa() {
  const e = nl(fa);
  return process.env.NODE_ENV !== "production" && M.useDebugValue(e), e[Aa] || e;
}
function mu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const gu = (e) => mu(e) && e !== "classes", In = fl({
  themeId: Aa,
  defaultTheme: fa,
  rootShouldForwardProp: gu
}), go = kl;
process.env.NODE_ENV !== "production" && (p.node, p.object.isRequired);
function da(e) {
  return xl(e);
}
function hu(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function $n(e, t) {
  return $n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, $n(e, t);
}
function yu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $n(e, t);
}
const di = {
  disabled: !1
};
var bu = process.env.NODE_ENV !== "production" ? p.oneOfType([p.number, p.shape({
  enter: p.number,
  exit: p.number,
  appear: p.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && p.oneOfType([p.string, p.shape({
  enter: p.string,
  exit: p.string,
  active: p.string
}), p.shape({
  enter: p.string,
  enterDone: p.string,
  enterActive: p.string,
  exit: p.string,
  exitDone: p.string,
  exitActive: p.string
})]);
const ma = Ot.createContext(null);
var vu = function(t) {
  return t.scrollTop;
}, pr = "unmounted", kt = "exited", Rt = "entering", Ht = "entered", _n = "exiting", pt = /* @__PURE__ */ function(e) {
  yu(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = o, s = a && !a.isMounting ? n.enter : n.appear, c;
    return i.appearStatus = null, n.in ? s ? (c = kt, i.appearStatus = Rt) : c = Ht : n.unmountOnExit || n.mountOnEnter ? c = pr : c = kt, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === pr ? {
      status: kt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Rt && a !== Ht && (i = Rt) : (a === Rt || a === Ht) && (i = _n);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, a, s;
    return i = a = s = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, s = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: s
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Rt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Nr.findDOMNode(this);
          a && vu(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === kt && this.setState({
      status: pr
    });
  }, r.performEnter = function(o) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [s] : [Nr.findDOMNode(this), s], A = c[0], f = c[1], m = this.getTimeouts(), g = s ? m.appear : m.enter;
    if (!o && !a || di.disabled) {
      this.safeSetState({
        status: Ht
      }, function() {
        i.props.onEntered(A);
      });
      return;
    }
    this.props.onEnter(A, f), this.safeSetState({
      status: Rt
    }, function() {
      i.props.onEntering(A, f), i.onTransitionEnd(g, function() {
        i.safeSetState({
          status: Ht
        }, function() {
          i.props.onEntered(A, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Nr.findDOMNode(this);
    if (!i || di.disabled) {
      this.safeSetState({
        status: kt
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: _n
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: kt
        }, function() {
          o.props.onExited(s);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(s) {
      a && (a = !1, i.nextCallback = null, o(s));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Nr.findDOMNode(this), s = o == null && !this.props.addEndListener;
    if (!a || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], A = c[0], f = c[1];
      this.props.addEndListener(A, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === pr)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = hu(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ot.createElement(ma.Provider, {
        value: null
      }, typeof a == "function" ? a(o, s) : Ot.cloneElement(Ot.Children.only(a), s))
    );
  }, t;
}(Ot.Component);
pt.contextType = ma;
pt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: p.shape({
    current: typeof Element > "u" ? p.any : function(e, t, r, n, o, i) {
      var a = e[t];
      return p.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
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
  children: p.oneOfType([p.func.isRequired, p.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: p.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: p.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: p.bool,
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
  appear: p.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: p.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: p.bool,
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
    var r = bu;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
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
  addEndListener: p.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: p.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: p.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: p.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: p.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: p.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: p.func
} : {};
function Ut() {
}
pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ut,
  onEntering: Ut,
  onEntered: Ut,
  onExit: Ut,
  onExiting: Ut,
  onExited: Ut
};
pt.UNMOUNTED = pr;
pt.EXITED = kt;
pt.ENTERING = Rt;
pt.ENTERED = Ht;
pt.EXITING = _n;
const Cu = (e) => e.scrollTop;
function mi(e, t) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: o.transitionDelay
  };
}
function Pt(...e) {
  const t = M.useRef(void 0), r = M.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const a = i, s = a(n);
        return typeof s == "function" ? s : () => {
          a(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return M.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
function eo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Iu = {
  entering: {
    opacity: 1,
    transform: eo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Fn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), _r = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: a,
    in: s,
    onEnter: c,
    onEntered: A,
    onEntering: f,
    onExit: m,
    onExited: g,
    onExiting: y,
    style: h,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: b = pt,
    ...x
  } = t, S = ur(), R = M.useRef(), C = pa(), v = M.useRef(null), E = Pt(v, lo(i), r), O = (W) => (V) => {
    if (W) {
      const Z = v.current;
      V === void 0 ? W(Z) : W(Z, V);
    }
  }, J = O(f), F = O((W, V) => {
    Cu(W);
    const {
      duration: Z,
      delay: ee,
      easing: le
    } = mi({
      style: h,
      timeout: u,
      easing: a
    }, {
      mode: "enter"
    });
    let w;
    u === "auto" ? (w = C.transitions.getAutoHeightDuration(W.clientHeight), R.current = w) : w = Z, W.style.transition = [C.transitions.create("opacity", {
      duration: w,
      delay: ee
    }), C.transitions.create("transform", {
      duration: Fn ? w : w * 0.666,
      delay: ee,
      easing: le
    })].join(","), c && c(W, V);
  }), Y = O(A), L = O(y), l = O((W) => {
    const {
      duration: V,
      delay: Z,
      easing: ee
    } = mi({
      style: h,
      timeout: u,
      easing: a
    }, {
      mode: "exit"
    });
    let le;
    u === "auto" ? (le = C.transitions.getAutoHeightDuration(W.clientHeight), R.current = le) : le = V, W.style.transition = [C.transitions.create("opacity", {
      duration: le,
      delay: Z
    }), C.transitions.create("transform", {
      duration: Fn ? le : le * 0.666,
      delay: Fn ? Z : Z || le * 0.333,
      easing: ee
    })].join(","), W.style.opacity = 0, W.style.transform = eo(0.75), m && m(W);
  }), T = O(g), k = (W) => {
    u === "auto" && S.start(R.current || 0, W), n && n(v.current, W);
  };
  return /* @__PURE__ */ te.jsx(b, {
    appear: o,
    in: s,
    nodeRef: v,
    onEnter: F,
    onEntered: Y,
    onEntering: J,
    onExit: l,
    onExited: T,
    onExiting: L,
    addEndListener: k,
    timeout: u === "auto" ? null : u,
    ...x,
    children: (W, {
      ownerState: V,
      ...Z
    }) => /* @__PURE__ */ M.cloneElement(i, {
      style: {
        opacity: 0,
        transform: eo(0.75),
        visibility: W === "exited" && !s ? "hidden" : void 0,
        ...Iu[W],
        ...h,
        ...i.props.style
      },
      ref: E,
      ...Z
    })
  });
});
process.env.NODE_ENV !== "production" && (_r.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: p.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: p.bool,
  /**
   * A single child content element.
   */
  children: co.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: p.oneOfType([p.shape({
    enter: p.string,
    exit: p.string
  }), p.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: p.bool,
  /**
   * @ignore
   */
  onEnter: p.func,
  /**
   * @ignore
   */
  onEntered: p.func,
  /**
   * @ignore
   */
  onEntering: p.func,
  /**
   * @ignore
   */
  onExit: p.func,
  /**
   * @ignore
   */
  onExited: p.func,
  /**
   * @ignore
   */
  onExiting: p.func,
  /**
   * @ignore
   */
  style: p.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: p.oneOfType([p.oneOf(["auto"]), p.number, p.shape({
    appear: p.number,
    enter: p.number,
    exit: p.number
  })])
});
_r && (_r.muiSupportAuto = !0);
const ga = p.oneOfType([p.func, p.object]);
function Er(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
function gi(e) {
  return e && e.ownerDocument || document;
}
var Pe = "top", qe = "bottom", Be = "right", Le = "left", ho = "auto", Or = [Pe, qe, Be, Le], zt = "start", xr = "end", Eu = "clippingParents", ha = "viewport", cr = "popper", xu = "reference", hi = /* @__PURE__ */ Or.reduce(function(e, t) {
  return e.concat([t + "-" + zt, t + "-" + xr]);
}, []), ya = /* @__PURE__ */ [].concat(Or, [ho]).reduce(function(e, t) {
  return e.concat([t, t + "-" + zt, t + "-" + xr]);
}, []), wu = "beforeRead", Su = "read", Tu = "afterRead", ku = "beforeMain", Ru = "main", Ou = "afterMain", ju = "beforeWrite", Mu = "write", Wu = "afterWrite", Pu = [wu, Su, Tu, ku, Ru, Ou, ju, Mu, Wu];
function nt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ze(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Lt(e) {
  var t = Ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function He(e) {
  var t = Ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function yo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Lu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !He(i) || !nt(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Vu(e) {
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
      var o = t.elements[n], i = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = a.reduce(function(c, A) {
        return c[A] = "", c;
      }, {});
      !He(o) || !nt(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const Du = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Lu,
  effect: Vu,
  requires: ["computeStyles"]
};
function rt(e) {
  return e.split("-")[0];
}
var Wt = Math.max, en = Math.min, Qt = Math.round;
function to() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ba() {
  return !/^((?!chrome|android).)*safari/i.test(to());
}
function $t(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && He(e) && (o = e.offsetWidth > 0 && Qt(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Qt(n.height) / e.offsetHeight || 1);
  var a = Lt(e) ? Ze(e) : window, s = a.visualViewport, c = !ba() && r, A = (n.left + (c && s ? s.offsetLeft : 0)) / o, f = (n.top + (c && s ? s.offsetTop : 0)) / i, m = n.width / o, g = n.height / i;
  return {
    width: m,
    height: g,
    top: f,
    right: A + m,
    bottom: f + g,
    left: A,
    x: A,
    y: f
  };
}
function bo(e) {
  var t = $t(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function va(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && yo(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function At(e) {
  return Ze(e).getComputedStyle(e);
}
function Nu(e) {
  return ["table", "td", "th"].indexOf(nt(e)) >= 0;
}
function vt(e) {
  return ((Lt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function En(e) {
  return nt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (yo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    vt(e)
  );
}
function yi(e) {
  return !He(e) || // https://github.com/popperjs/popper-core/issues/837
  At(e).position === "fixed" ? null : e.offsetParent;
}
function Yu(e) {
  var t = /firefox/i.test(to()), r = /Trident/i.test(to());
  if (r && He(e)) {
    var n = At(e);
    if (n.position === "fixed")
      return null;
  }
  var o = En(e);
  for (yo(o) && (o = o.host); He(o) && ["html", "body"].indexOf(nt(o)) < 0; ) {
    var i = At(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function jr(e) {
  for (var t = Ze(e), r = yi(e); r && Nu(r) && At(r).position === "static"; )
    r = yi(r);
  return r && (nt(r) === "html" || nt(r) === "body" && At(r).position === "static") ? t : r || Yu(e) || t;
}
function vo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mr(e, t, r) {
  return Wt(e, en(t, r));
}
function Fu(e, t, r) {
  var n = mr(e, t, r);
  return n > r ? r : n;
}
function Ca() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ia(e) {
  return Object.assign({}, Ca(), e);
}
function Ea(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Zu = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ia(typeof t != "number" ? t : Ea(t, Or));
};
function Ju(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, s = rt(r.placement), c = vo(s), A = [Le, Be].indexOf(s) >= 0, f = A ? "height" : "width";
  if (!(!i || !a)) {
    var m = Zu(o.padding, r), g = bo(i), y = c === "y" ? Pe : Le, h = c === "y" ? qe : Be, u = r.rects.reference[f] + r.rects.reference[c] - a[c] - r.rects.popper[f], b = a[c] - r.rects.reference[c], x = jr(i), S = x ? c === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, R = u / 2 - b / 2, C = m[y], v = S - g[f] - m[h], E = S / 2 - g[f] / 2 + R, O = mr(C, E, v), J = c;
    r.modifiersData[n] = (t = {}, t[J] = O, t.centerOffset = O - E, t);
  }
}
function Gu(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || va(t.elements.popper, o) && (t.elements.arrow = o));
}
const Uu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ju,
  effect: Gu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function _t(e) {
  return e.split("-")[1];
}
var Hu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qu(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Qt(r * o) / o || 0,
    y: Qt(n * o) / o || 0
  };
}
function bi(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, c = e.gpuAcceleration, A = e.adaptive, f = e.roundOffsets, m = e.isFixed, g = a.x, y = g === void 0 ? 0 : g, h = a.y, u = h === void 0 ? 0 : h, b = typeof f == "function" ? f({
    x: y,
    y: u
  }) : {
    x: y,
    y: u
  };
  y = b.x, u = b.y;
  var x = a.hasOwnProperty("x"), S = a.hasOwnProperty("y"), R = Le, C = Pe, v = window;
  if (A) {
    var E = jr(r), O = "clientHeight", J = "clientWidth";
    if (E === Ze(r) && (E = vt(r), At(E).position !== "static" && s === "absolute" && (O = "scrollHeight", J = "scrollWidth")), E = E, o === Pe || (o === Le || o === Be) && i === xr) {
      C = qe;
      var F = m && E === v && v.visualViewport ? v.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[O]
      );
      u -= F - n.height, u *= c ? 1 : -1;
    }
    if (o === Le || (o === Pe || o === qe) && i === xr) {
      R = Be;
      var Y = m && E === v && v.visualViewport ? v.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[J]
      );
      y -= Y - n.width, y *= c ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: s
  }, A && Hu), l = f === !0 ? qu({
    x: y,
    y: u
  }, Ze(r)) : {
    x: y,
    y: u
  };
  if (y = l.x, u = l.y, c) {
    var T;
    return Object.assign({}, L, (T = {}, T[C] = S ? "0" : "", T[R] = x ? "0" : "", T.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + u + "px)" : "translate3d(" + y + "px, " + u + "px, 0)", T));
  }
  return Object.assign({}, L, (t = {}, t[C] = S ? u + "px" : "", t[R] = x ? y + "px" : "", t.transform = "", t));
}
function Bu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, s = r.roundOffsets, c = s === void 0 ? !0 : s, A = {
    placement: rt(t.placement),
    variation: _t(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bi(Object.assign({}, A, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bi(Object.assign({}, A, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Xu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Bu,
  data: {}
};
var Zr = {
  passive: !0
};
function Ku(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, s = a === void 0 ? !0 : a, c = Ze(t.elements.popper), A = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && A.forEach(function(f) {
    f.addEventListener("scroll", r.update, Zr);
  }), s && c.addEventListener("resize", r.update, Zr), function() {
    i && A.forEach(function(f) {
      f.removeEventListener("scroll", r.update, Zr);
    }), s && c.removeEventListener("resize", r.update, Zr);
  };
}
const zu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ku,
  data: {}
};
var Qu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Kr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Qu[t];
  });
}
var $u = {
  start: "end",
  end: "start"
};
function vi(e) {
  return e.replace(/start|end/g, function(t) {
    return $u[t];
  });
}
function Co(e) {
  var t = Ze(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Io(e) {
  return $t(vt(e)).left + Co(e).scrollLeft;
}
function _u(e, t) {
  var r = Ze(e), n = vt(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    var A = ba();
    (A || !A && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Io(e),
    y: c
  };
}
function ef(e) {
  var t, r = vt(e), n = Co(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Wt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Wt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Io(e), c = -n.scrollTop;
  return At(o || r).direction === "rtl" && (s += Wt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function Eo(e) {
  var t = At(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function xa(e) {
  return ["html", "body", "#document"].indexOf(nt(e)) >= 0 ? e.ownerDocument.body : He(e) && Eo(e) ? e : xa(En(e));
}
function gr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = xa(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ze(n), a = o ? [i].concat(i.visualViewport || [], Eo(n) ? n : []) : n, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(gr(En(a)))
  );
}
function ro(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function tf(e, t) {
  var r = $t(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ci(e, t, r) {
  return t === ha ? ro(_u(e, r)) : Lt(t) ? tf(t, r) : ro(ef(vt(e)));
}
function rf(e) {
  var t = gr(En(e)), r = ["absolute", "fixed"].indexOf(At(e).position) >= 0, n = r && He(e) ? jr(e) : e;
  return Lt(n) ? t.filter(function(o) {
    return Lt(o) && va(o, n) && nt(o) !== "body";
  }) : [];
}
function nf(e, t, r, n) {
  var o = t === "clippingParents" ? rf(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], s = i.reduce(function(c, A) {
    var f = Ci(e, A, n);
    return c.top = Wt(f.top, c.top), c.right = en(f.right, c.right), c.bottom = en(f.bottom, c.bottom), c.left = Wt(f.left, c.left), c;
  }, Ci(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function wa(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? rt(n) : null, i = n ? _t(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case Pe:
      c = {
        x: a,
        y: t.y - r.height
      };
      break;
    case qe:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Be:
      c = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Le:
      c = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var A = o ? vo(o) : null;
  if (A != null) {
    var f = A === "y" ? "height" : "width";
    switch (i) {
      case zt:
        c[A] = c[A] - (t[f] / 2 - r[f] / 2);
        break;
      case xr:
        c[A] = c[A] + (t[f] / 2 - r[f] / 2);
        break;
    }
  }
  return c;
}
function wr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, s = r.boundary, c = s === void 0 ? Eu : s, A = r.rootBoundary, f = A === void 0 ? ha : A, m = r.elementContext, g = m === void 0 ? cr : m, y = r.altBoundary, h = y === void 0 ? !1 : y, u = r.padding, b = u === void 0 ? 0 : u, x = Ia(typeof b != "number" ? b : Ea(b, Or)), S = g === cr ? xu : cr, R = e.rects.popper, C = e.elements[h ? S : g], v = nf(Lt(C) ? C : C.contextElement || vt(e.elements.popper), c, f, a), E = $t(e.elements.reference), O = wa({
    reference: E,
    element: R,
    placement: o
  }), J = ro(Object.assign({}, R, O)), F = g === cr ? J : E, Y = {
    top: v.top - F.top + x.top,
    bottom: F.bottom - v.bottom + x.bottom,
    left: v.left - F.left + x.left,
    right: F.right - v.right + x.right
  }, L = e.modifiersData.offset;
  if (g === cr && L) {
    var l = L[o];
    Object.keys(Y).forEach(function(T) {
      var k = [Be, qe].indexOf(T) >= 0 ? 1 : -1, W = [Pe, qe].indexOf(T) >= 0 ? "y" : "x";
      Y[T] += l[W] * k;
    });
  }
  return Y;
}
function of(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations, c = r.allowedAutoPlacements, A = c === void 0 ? ya : c, f = _t(n), m = f ? s ? hi : hi.filter(function(h) {
    return _t(h) === f;
  }) : Or, g = m.filter(function(h) {
    return A.indexOf(h) >= 0;
  });
  g.length === 0 && (g = m);
  var y = g.reduce(function(h, u) {
    return h[u] = wr(e, {
      placement: u,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[rt(u)], h;
  }, {});
  return Object.keys(y).sort(function(h, u) {
    return y[h] - y[u];
  });
}
function af(e) {
  if (rt(e) === ho)
    return [];
  var t = Kr(e);
  return [vi(e), t, vi(t)];
}
function sf(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !0 : a, c = r.fallbackPlacements, A = r.padding, f = r.boundary, m = r.rootBoundary, g = r.altBoundary, y = r.flipVariations, h = y === void 0 ? !0 : y, u = r.allowedAutoPlacements, b = t.options.placement, x = rt(b), S = x === b, R = c || (S || !h ? [Kr(b)] : af(b)), C = [b].concat(R).reduce(function(G, X) {
      return G.concat(rt(X) === ho ? of(t, {
        placement: X,
        boundary: f,
        rootBoundary: m,
        padding: A,
        flipVariations: h,
        allowedAutoPlacements: u
      }) : X);
    }, []), v = t.rects.reference, E = t.rects.popper, O = /* @__PURE__ */ new Map(), J = !0, F = C[0], Y = 0; Y < C.length; Y++) {
      var L = C[Y], l = rt(L), T = _t(L) === zt, k = [Pe, qe].indexOf(l) >= 0, W = k ? "width" : "height", V = wr(t, {
        placement: L,
        boundary: f,
        rootBoundary: m,
        altBoundary: g,
        padding: A
      }), Z = k ? T ? Be : Le : T ? qe : Pe;
      v[W] > E[W] && (Z = Kr(Z));
      var ee = Kr(Z), le = [];
      if (i && le.push(V[l] <= 0), s && le.push(V[Z] <= 0, V[ee] <= 0), le.every(function(G) {
        return G;
      })) {
        F = L, J = !1;
        break;
      }
      O.set(L, le);
    }
    if (J)
      for (var w = h ? 3 : 1, D = function(X) {
        var U = C.find(function(q) {
          var H = O.get(q);
          if (H)
            return H.slice(0, X).every(function(_) {
              return _;
            });
        });
        if (U)
          return F = U, "break";
      }, B = w; B > 0; B--) {
        var K = D(B);
        if (K === "break") break;
      }
    t.placement !== F && (t.modifiersData[n]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const cf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ii(e, t, r) {
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
function Ei(e) {
  return [Pe, Be, qe, Le].some(function(t) {
    return e[t] >= 0;
  });
}
function lf(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = wr(t, {
    elementContext: "reference"
  }), s = wr(t, {
    altBoundary: !0
  }), c = Ii(a, n), A = Ii(s, o, i), f = Ei(c), m = Ei(A);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: A,
    isReferenceHidden: f,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": m
  });
}
const uf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: lf
};
function ff(e, t, r) {
  var n = rt(e), o = [Le, Pe].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Le, Be].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function Af(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = ya.reduce(function(f, m) {
    return f[m] = ff(m, t.rects, i), f;
  }, {}), s = a[t.placement], c = s.x, A = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += A), t.modifiersData[n] = a;
}
const pf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Af
};
function df(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = wa({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const mf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: df,
  data: {}
};
function gf(e) {
  return e === "x" ? "y" : "x";
}
function hf(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !1 : a, c = r.boundary, A = r.rootBoundary, f = r.altBoundary, m = r.padding, g = r.tether, y = g === void 0 ? !0 : g, h = r.tetherOffset, u = h === void 0 ? 0 : h, b = wr(t, {
    boundary: c,
    rootBoundary: A,
    padding: m,
    altBoundary: f
  }), x = rt(t.placement), S = _t(t.placement), R = !S, C = vo(x), v = gf(C), E = t.modifiersData.popperOffsets, O = t.rects.reference, J = t.rects.popper, F = typeof u == "function" ? u(Object.assign({}, t.rects, {
    placement: t.placement
  })) : u, Y = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, l = {
    x: 0,
    y: 0
  };
  if (E) {
    if (i) {
      var T, k = C === "y" ? Pe : Le, W = C === "y" ? qe : Be, V = C === "y" ? "height" : "width", Z = E[C], ee = Z + b[k], le = Z - b[W], w = y ? -J[V] / 2 : 0, D = S === zt ? O[V] : J[V], B = S === zt ? -J[V] : -O[V], K = t.elements.arrow, G = y && K ? bo(K) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ca(), U = X[k], q = X[W], H = mr(0, O[V], G[V]), _ = R ? O[V] / 2 - w - H - U - Y.mainAxis : D - H - U - Y.mainAxis, $ = R ? -O[V] / 2 + w + H + q + Y.mainAxis : B + H + q + Y.mainAxis, ge = t.elements.arrow && jr(t.elements.arrow), P = ge ? C === "y" ? ge.clientTop || 0 : ge.clientLeft || 0 : 0, we = (T = L == null ? void 0 : L[C]) != null ? T : 0, Re = Z + _ - we - P, Oe = Z + $ - we, Ke = mr(y ? en(ee, Re) : ee, Z, y ? Wt(le, Oe) : le);
      E[C] = Ke, l[C] = Ke - Z;
    }
    if (s) {
      var ze, ot = C === "x" ? Pe : Le, Qe = C === "x" ? qe : Be, Je = E[v], it = v === "y" ? "height" : "width", at = Je + b[ot], Ct = Je - b[Qe], It = [Pe, Le].indexOf(x) !== -1, Et = (ze = L == null ? void 0 : L[v]) != null ? ze : 0, xt = It ? at : Je - O[it] - J[it] - Et + Y.altAxis, st = It ? Je + O[it] + J[it] - Et - Y.altAxis : Ct, Vt = y && It ? Fu(xt, Je, st) : mr(y ? xt : at, Je, y ? st : Ct);
      E[v] = Vt, l[v] = Vt - Je;
    }
    t.modifiersData[n] = l;
  }
}
const yf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hf,
  requiresIfExists: ["offset"]
};
function bf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vf(e) {
  return e === Ze(e) || !He(e) ? Co(e) : bf(e);
}
function Cf(e) {
  var t = e.getBoundingClientRect(), r = Qt(t.width) / e.offsetWidth || 1, n = Qt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function If(e, t, r) {
  r === void 0 && (r = !1);
  var n = He(t), o = He(t) && Cf(t), i = vt(t), a = $t(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((nt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Eo(i)) && (s = vf(t)), He(t) ? (c = $t(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Io(i))), {
    x: a.left + s.scrollLeft - c.x,
    y: a.top + s.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function Ef(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var c = t.get(s);
        c && o(c);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function xf(e) {
  var t = Ef(e);
  return Pu.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function wf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Sf(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var xi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function wi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Tf(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? xi : o;
  return function(s, c, A) {
    A === void 0 && (A = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xi, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, y = {
      state: f,
      setOptions: function(x) {
        var S = typeof x == "function" ? x(f.options) : x;
        u(), f.options = Object.assign({}, i, f.options, S), f.scrollParents = {
          reference: Lt(s) ? gr(s) : s.contextElement ? gr(s.contextElement) : [],
          popper: gr(c)
        };
        var R = xf(Sf([].concat(n, f.options.modifiers)));
        return f.orderedModifiers = R.filter(function(C) {
          return C.enabled;
        }), h(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var x = f.elements, S = x.reference, R = x.popper;
          if (wi(S, R)) {
            f.rects = {
              reference: If(S, jr(R), f.options.strategy === "fixed"),
              popper: bo(R)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(Y) {
              return f.modifiersData[Y.name] = Object.assign({}, Y.data);
            });
            for (var C = 0; C < f.orderedModifiers.length; C++) {
              if (f.reset === !0) {
                f.reset = !1, C = -1;
                continue;
              }
              var v = f.orderedModifiers[C], E = v.fn, O = v.options, J = O === void 0 ? {} : O, F = v.name;
              typeof E == "function" && (f = E({
                state: f,
                options: J,
                name: F,
                instance: y
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: wf(function() {
        return new Promise(function(b) {
          y.forceUpdate(), b(f);
        });
      }),
      destroy: function() {
        u(), g = !0;
      }
    };
    if (!wi(s, c))
      return y;
    y.setOptions(A).then(function(b) {
      !g && A.onFirstUpdate && A.onFirstUpdate(b);
    });
    function h() {
      f.orderedModifiers.forEach(function(b) {
        var x = b.name, S = b.options, R = S === void 0 ? {} : S, C = b.effect;
        if (typeof C == "function") {
          var v = C({
            state: f,
            name: x,
            instance: y,
            options: R
          }), E = function() {
          };
          m.push(v || E);
        }
      });
    }
    function u() {
      m.forEach(function(b) {
        return b();
      }), m = [];
    }
    return y;
  };
}
var kf = [zu, mf, Xu, Du, pf, cf, yf, Uu, uf], Rf = /* @__PURE__ */ Tf({
  defaultModifiers: kf
});
function Of(e) {
  return typeof e == "string";
}
function Sa(e, t, r) {
  return e === void 0 || Of(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function jf(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Si(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Ta(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const y = vr(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), h = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, u = {
      ...r,
      ...o,
      ...n
    };
    return y.length > 0 && (u.className = y), Object.keys(h).length > 0 && (u.style = h), {
      props: u,
      internalRef: void 0
    };
  }
  const a = jf({
    ...o,
    ...n
  }), s = Si(n), c = Si(o), A = t(a), f = vr(A == null ? void 0 : A.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), m = {
    ...A == null ? void 0 : A.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, g = {
    ...A,
    ...r,
    ...c,
    ...s
  };
  return f.length > 0 && (g.className = f), Object.keys(m).length > 0 && (g.style = m), {
    props: g,
    internalRef: A.ref
  };
}
function ka(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Mf(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, a = o ? {} : ka(r, n), {
    props: s,
    internalRef: c
  } = Ta({
    ...i,
    externalSlotProps: a
  }), A = Pt(c, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return Sa(t, {
    ...s,
    ref: A
  }, n);
}
function Ti(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Wf(e) {
  return typeof e == "function" ? e() : e;
}
const tn = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [a, s] = M.useState(null), c = Pt(/* @__PURE__ */ M.isValidElement(n) ? lo(n) : null, r);
  if (Cr(() => {
    i || s(Wf(o) || document.body);
  }, [o, i]), Cr(() => {
    if (a && !i)
      return Ti(r, a), () => {
        Ti(r, null);
      };
  }, [r, a, i]), i) {
    if (/* @__PURE__ */ M.isValidElement(n)) {
      const A = {
        ref: c
      };
      return /* @__PURE__ */ M.cloneElement(n, A);
    }
    return n;
  }
  return a && /* @__PURE__ */ Ga.createPortal(n, a);
});
process.env.NODE_ENV !== "production" && (tn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: p.node,
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
  container: p.oneOfType([Er, p.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: p.bool
});
process.env.NODE_ENV !== "production" && (tn.propTypes = Cl(tn.propTypes));
function Pf(e) {
  return yn("MuiPopper", e);
}
$i("MuiPopper", ["root"]);
function Lf(e, t) {
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
function rn(e) {
  return typeof e == "function" ? e() : e;
}
function xn(e) {
  return e.nodeType !== void 0;
}
function Vf(e) {
  return !xn(e);
}
const Df = (e) => {
  const {
    classes: t
  } = e;
  return Bi({
    root: ["root"]
  }, Pf, t);
}, Nf = {}, Yf = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    direction: i,
    disablePortal: a,
    modifiers: s,
    open: c,
    placement: A,
    popperOptions: f,
    popperRef: m,
    slotProps: g = {},
    slots: y = {},
    TransitionProps: h,
    // @ts-ignore internal logic
    ownerState: u,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...b
  } = t, x = M.useRef(null), S = Pt(x, r), R = M.useRef(null), C = Pt(R, m), v = M.useRef(C);
  Cr(() => {
    v.current = C;
  }, [C]), M.useImperativeHandle(m, () => R.current, []);
  const E = Lf(A, i), [O, J] = M.useState(E), [F, Y] = M.useState(rn(n));
  M.useEffect(() => {
    R.current && R.current.forceUpdate();
  }), M.useEffect(() => {
    n && Y(rn(n));
  }, [n]), Cr(() => {
    if (!F || !c)
      return;
    const W = (ee) => {
      J(ee.placement);
    };
    if (process.env.NODE_ENV !== "production" && F && xn(F) && F.nodeType === 1) {
      const ee = F.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ee.top === 0 && ee.left === 0 && ee.right === 0 && ee.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let V = [{
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
        state: ee
      }) => {
        W(ee);
      }
    }];
    s != null && (V = V.concat(s)), f && f.modifiers != null && (V = V.concat(f.modifiers));
    const Z = Rf(F, x.current, {
      placement: E,
      ...f,
      modifiers: V
    });
    return v.current(Z), () => {
      Z.destroy(), v.current(null);
    };
  }, [F, a, s, c, f, E]);
  const L = {
    placement: O
  };
  h !== null && (L.TransitionProps = h);
  const l = Df(t), T = y.root ?? "div", k = Mf({
    elementType: T,
    externalSlotProps: g.root,
    externalForwardedProps: b,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: l.root
  });
  return /* @__PURE__ */ te.jsx(T, {
    ...k,
    children: typeof o == "function" ? o(L) : o
  });
}), Ra = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: s = !1,
    keepMounted: c = !1,
    modifiers: A,
    open: f,
    placement: m = "bottom",
    popperOptions: g = Nf,
    popperRef: y,
    style: h,
    transition: u = !1,
    slotProps: b = {},
    slots: x = {},
    ...S
  } = t, [R, C] = M.useState(!0), v = () => {
    C(!1);
  }, E = () => {
    C(!0);
  };
  if (!c && !f && (!u || R))
    return null;
  let O;
  if (i)
    O = i;
  else if (n) {
    const Y = rn(n);
    O = Y && xn(Y) ? gi(Y).body : gi(null).body;
  }
  const J = !f && c && (!u || R) ? "none" : void 0, F = u ? {
    in: f,
    onEnter: v,
    onExited: E
  } : void 0;
  return /* @__PURE__ */ te.jsx(tn, {
    disablePortal: s,
    container: O,
    children: /* @__PURE__ */ te.jsx(Yf, {
      anchorEl: n,
      direction: a,
      disablePortal: s,
      modifiers: A,
      ref: r,
      open: u ? !R : f,
      placement: m,
      popperOptions: g,
      popperRef: y,
      slotProps: b,
      slots: x,
      ...S,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: J,
        ...h
      },
      TransitionProps: F,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
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
  anchorEl: so(p.oneOfType([Er, p.object, p.func]), (e) => {
    if (e.open) {
      const t = rn(e.anchorEl);
      if (t && xn(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Vf(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: p.oneOfType([p.node, p.func]),
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
  container: p.oneOfType([Er, p.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: p.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: p.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: p.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: p.arrayOf(p.shape({
    data: p.object,
    effect: p.func,
    enabled: p.bool,
    fn: p.func,
    name: p.any,
    options: p.object,
    phase: p.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: p.arrayOf(p.string),
    requiresIfExists: p.arrayOf(p.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: p.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: p.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: p.shape({
    modifiers: p.array,
    onFirstUpdate: p.func,
    placement: p.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: p.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ga,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: p.shape({
    root: p.oneOfType([p.func, p.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: p.shape({
    root: p.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: p.bool
});
const Ff = In(Ra, {
  name: "MuiPopper",
  slot: "Root"
})({}), xo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Xi(), o = da({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: a,
    components: s,
    componentsProps: c,
    container: A,
    disablePortal: f,
    keepMounted: m,
    modifiers: g,
    open: y,
    placement: h,
    popperOptions: u,
    popperRef: b,
    transition: x,
    slots: S,
    slotProps: R,
    ...C
  } = o, v = (S == null ? void 0 : S.root) ?? (s == null ? void 0 : s.Root), E = {
    anchorEl: i,
    container: A,
    disablePortal: f,
    keepMounted: m,
    modifiers: g,
    open: y,
    placement: h,
    popperOptions: u,
    popperRef: b,
    transition: x,
    ...C
  };
  return /* @__PURE__ */ te.jsx(Ff, {
    as: a,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: v
    },
    slotProps: R ?? c,
    ...E,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
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
  anchorEl: p.oneOfType([Er, p.object, p.func]),
  /**
   * Popper render function or node.
   */
  children: p.oneOfType([p.node, p.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: p.shape({
    Root: p.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: p.shape({
    root: p.oneOfType([p.func, p.object])
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
  container: p.oneOfType([Er, p.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: p.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: p.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: p.arrayOf(p.shape({
    data: p.object,
    effect: p.func,
    enabled: p.bool,
    fn: p.func,
    name: p.any,
    options: p.object,
    phase: p.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: p.arrayOf(p.string),
    requiresIfExists: p.arrayOf(p.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: p.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: p.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: p.shape({
    modifiers: p.array,
    onFirstUpdate: p.func,
    placement: p.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: p.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ga,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: p.shape({
    root: p.oneOfType([p.func, p.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: p.shape({
    root: p.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: p.bool
});
function ki(e) {
  const t = M.useRef(e);
  return Cr(() => {
    t.current = e;
  }), M.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Zf(e) {
  const {
    controlled: t,
    default: r,
    name: n,
    state: o = "value"
  } = e, {
    current: i
  } = M.useRef(t !== void 0), [a, s] = M.useState(r), c = i ? t : a;
  if (process.env.NODE_ENV !== "production") {
    M.useEffect(() => {
      i !== (t !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${o} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, n, t]);
    const {
      current: f
    } = M.useRef(r);
    M.useEffect(() => {
      !i && JSON.stringify(r) !== JSON.stringify(f) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const A = M.useCallback((f) => {
    i || s(f);
  }, []);
  return [c, A];
}
function Jr(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: a,
    shouldForwardComponentProp: s = !1,
    ...c
  } = t, {
    component: A,
    slots: f = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...g
  } = i, y = f[e] || n, h = ka(m[e], o), {
    props: {
      component: u,
      ...b
    },
    internalRef: x
  } = Ta({
    className: r,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: h
  }), S = Pt(x, h == null ? void 0 : h.ref, t.ref), R = e === "root" ? u || A : u, C = Sa(y, {
    ...e === "root" && !A && !f[e] && a,
    ...e !== "root" && !f[e] && a,
    ...b,
    ...R && !s && {
      as: R
    },
    ...R && s && {
      component: R
    },
    ref: S
  }, o);
  return [y, C];
}
function Jf(e) {
  return yn("MuiTooltip", e);
}
const be = $i("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Gf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Uf = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${Tr(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Bi(a, Jf, t);
}, Hf = In(xo, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(go(({
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
}))), qf = In("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${Tr(r.placement.split("-")[0])}`]];
  }
})(go(({
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
      lineHeight: `${Gf(16 / 14)}em`,
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
}))), Bf = In("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(go(({
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
let Gr = !1;
const Ri = new sn();
let lr = {
  x: 0,
  y: 0
};
function Ur(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const Oa = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = da({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: a,
    components: s = {},
    componentsProps: c = {},
    describeChild: A = !1,
    disableFocusListener: f = !1,
    disableHoverListener: m = !1,
    disableInteractive: g = !1,
    disableTouchListener: y = !1,
    enterDelay: h = 100,
    enterNextDelay: u = 0,
    enterTouchDelay: b = 700,
    followCursor: x = !1,
    id: S,
    leaveDelay: R = 0,
    leaveTouchDelay: C = 1500,
    onClose: v,
    onOpen: E,
    open: O,
    placement: J = "bottom",
    PopperComponent: F,
    PopperProps: Y = {},
    slotProps: L = {},
    slots: l = {},
    title: T,
    TransitionComponent: k,
    TransitionProps: W,
    ...V
  } = n, Z = /* @__PURE__ */ M.isValidElement(i) ? i : /* @__PURE__ */ te.jsx("span", {
    children: i
  }), ee = pa(), le = Xi(), [w, D] = M.useState(), [B, K] = M.useState(null), G = M.useRef(!1), X = g || x, U = ur(), q = ur(), H = ur(), _ = ur(), [$, ge] = Zf({
    controlled: O,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let P = $;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: Q
    } = M.useRef(O !== void 0);
    M.useEffect(() => {
      w && w.disabled && !Q && T !== "" && w.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [T, w, Q]);
  }
  const we = Tl(S), Re = M.useRef(), Oe = ki(() => {
    Re.current !== void 0 && (document.body.style.WebkitUserSelect = Re.current, Re.current = void 0), _.clear();
  });
  M.useEffect(() => Oe, [Oe]);
  const Ke = (Q) => {
    Ri.clear(), Gr = !0, ge(!0), E && !P && E(Q);
  }, ze = ki(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (Q) => {
      Ri.start(800 + R, () => {
        Gr = !1;
      }), ge(!1), v && P && v(Q), U.start(ee.transitions.duration.shortest, () => {
        G.current = !1;
      });
    }
  ), ot = (Q) => {
    G.current && Q.type !== "touchstart" || (w && w.removeAttribute("title"), q.clear(), H.clear(), h || Gr && u ? q.start(Gr ? u : h, () => {
      Ke(Q);
    }) : Ke(Q));
  }, Qe = (Q) => {
    q.clear(), H.start(R, () => {
      ze(Q);
    });
  }, [, Je] = M.useState(!1), it = (Q) => {
    qo(Q.target) || (Je(!1), Qe(Q));
  }, at = (Q) => {
    w || D(Q.currentTarget), qo(Q.target) && (Je(!0), ot(Q));
  }, Ct = (Q) => {
    G.current = !0;
    const Me = Z.props;
    Me.onTouchStart && Me.onTouchStart(Q);
  }, It = (Q) => {
    Ct(Q), H.clear(), U.clear(), Oe(), Re.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", _.start(b, () => {
      document.body.style.WebkitUserSelect = Re.current, ot(Q);
    });
  }, Et = (Q) => {
    Z.props.onTouchEnd && Z.props.onTouchEnd(Q), Oe(), H.start(C, () => {
      ze(Q);
    });
  };
  M.useEffect(() => {
    if (!P)
      return;
    function Q(Me) {
      Me.key === "Escape" && ze(Me);
    }
    return document.addEventListener("keydown", Q), () => {
      document.removeEventListener("keydown", Q);
    };
  }, [ze, P]);
  const xt = Pt(lo(Z), D, r);
  !T && T !== 0 && (P = !1);
  const st = M.useRef(), Vt = (Q) => {
    const Me = Z.props;
    Me.onMouseMove && Me.onMouseMove(Q), lr = {
      x: Q.clientX,
      y: Q.clientY
    }, st.current && st.current.update();
  }, dt = {}, Dt = typeof T == "string";
  A ? (dt.title = !P && Dt && !m ? T : null, dt["aria-describedby"] = P ? we : null) : (dt["aria-label"] = Dt ? T : null, dt["aria-labelledby"] = P && !Dt ? we : null);
  const je = {
    ...dt,
    ...V,
    ...Z.props,
    className: vr(V.className, Z.props.className),
    onTouchStart: Ct,
    ref: xt,
    ...x ? {
      onMouseMove: Vt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (je["data-mui-internal-clone-element"] = !0, M.useEffect(() => {
    w && !w.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [w]));
  const wt = {};
  y || (je.onTouchStart = It, je.onTouchEnd = Et), m || (je.onMouseOver = Ur(ot, je.onMouseOver), je.onMouseLeave = Ur(Qe, je.onMouseLeave), X || (wt.onMouseOver = ot, wt.onMouseLeave = Qe)), f || (je.onFocus = Ur(at, je.onFocus), je.onBlur = Ur(it, je.onBlur), X || (wt.onFocus = at, wt.onBlur = it)), process.env.NODE_ENV !== "production" && Z.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${Z.props.title}\` or the Tooltip component.`].join(`
`));
  const ct = {
    ...n,
    isRtl: le,
    arrow: o,
    disableInteractive: X,
    placement: J,
    PopperComponentProp: F,
    touch: G.current
  }, De = typeof L.popper == "function" ? L.popper(ct) : L.popper, wn = M.useMemo(() => {
    var Me, Lr;
    let Q = [{
      name: "arrow",
      enabled: !!B,
      options: {
        element: B,
        padding: 4
      }
    }];
    return (Me = Y.popperOptions) != null && Me.modifiers && (Q = Q.concat(Y.popperOptions.modifiers)), (Lr = De == null ? void 0 : De.popperOptions) != null && Lr.modifiers && (Q = Q.concat(De.popperOptions.modifiers)), {
      ...Y.popperOptions,
      ...De == null ? void 0 : De.popperOptions,
      modifiers: Q
    };
  }, [B, Y.popperOptions, De == null ? void 0 : De.popperOptions]), tr = Uf(ct), Sn = typeof L.transition == "function" ? L.transition(ct) : L.transition, mt = {
    slots: {
      popper: s.Popper,
      transition: s.Transition ?? k,
      tooltip: s.Tooltip,
      arrow: s.Arrow,
      ...l
    },
    slotProps: {
      arrow: L.arrow ?? c.arrow,
      popper: {
        ...Y,
        ...De ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: L.tooltip ?? c.tooltip,
      transition: {
        ...W,
        ...Sn ?? c.transition
      }
    }
  }, [Mr, gt] = Jr("popper", {
    elementType: Hf,
    externalForwardedProps: mt,
    ownerState: ct,
    className: vr(tr.popper, Y == null ? void 0 : Y.className)
  }), [rr, nr] = Jr("transition", {
    elementType: _r,
    externalForwardedProps: mt,
    ownerState: ct
  }), [Wr, Tn] = Jr("tooltip", {
    elementType: qf,
    className: tr.tooltip,
    externalForwardedProps: mt,
    ownerState: ct
  }), [Pr, kn] = Jr("arrow", {
    elementType: Bf,
    className: tr.arrow,
    externalForwardedProps: mt,
    ownerState: ct,
    ref: K
  });
  return /* @__PURE__ */ te.jsxs(M.Fragment, {
    children: [/* @__PURE__ */ M.cloneElement(Z, je), /* @__PURE__ */ te.jsx(Mr, {
      as: F ?? xo,
      placement: J,
      anchorEl: x ? {
        getBoundingClientRect: () => ({
          top: lr.y,
          left: lr.x,
          right: lr.x,
          bottom: lr.y,
          width: 0,
          height: 0
        })
      } : w,
      popperRef: st,
      open: w ? P : !1,
      id: we,
      transition: !0,
      ...wt,
      ...gt,
      popperOptions: wn,
      children: ({
        TransitionProps: Q
      }) => /* @__PURE__ */ te.jsx(rr, {
        timeout: ee.transitions.duration.shorter,
        ...Q,
        ...nr,
        children: /* @__PURE__ */ te.jsxs(Wr, {
          ...Tn,
          children: [T, o ? /* @__PURE__ */ te.jsx(Pr, {
            ...kn
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Oa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: p.bool,
  /**
   * Tooltip reference element.
   */
  children: co.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: p.shape({
    Arrow: p.elementType,
    Popper: p.elementType,
    Tooltip: p.elementType,
    Transition: p.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: p.shape({
    arrow: p.object,
    popper: p.object,
    tooltip: p.object,
    transition: p.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: p.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: p.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: p.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: p.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: p.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: p.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: p.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: p.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: p.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: p.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: p.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: p.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: p.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: p.func,
  /**
   * If `true`, the component is shown.
   */
  open: p.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: p.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: p.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: p.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: p.shape({
    arrow: p.oneOfType([p.func, p.object]),
    popper: p.oneOfType([p.func, p.object]),
    tooltip: p.oneOfType([p.func, p.object]),
    transition: p.oneOfType([p.func, p.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: p.shape({
    arrow: p.elementType,
    popper: p.elementType,
    tooltip: p.elementType,
    transition: p.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: p.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: p.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: p.object
});
const Xf = "data:image/jpeg;base64,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dG9tbG9uZwAAAAAAAAAMY3JvcFJlY3RMZWZ0bG9uZwAAAAAAAAANY3JvcFJlY3RSaWdodGxvbmcAAAAAAAAAC2Nyb3BSZWN0VG9wbG9uZwAAAAAAOEJJTQPtAAAAAAAQAEgAAAABAAEASAAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAThCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQREAAAAAAAQAAAAAgAAAkAAAAJAAAAAADhCSU0ESQAAAAAABAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANRAAAABgAAAAAAAAAAAAABqwAAAasAAAAOAGYAYQBsAGwAYgBhAGMAawAtAGkAbQBhAGcAZQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABqwAAAasAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAasAAAAAUmdodGxvbmcAAAGrAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVl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dHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJFRDEyNTE3NUY4NEUxOEUyQkU5MkM5QzYyRTRFNkQ3QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowODU1YmI1Ni1hNjg2LTRlZDctYmQ3My00OWI0Y2Q4NTc3NjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iRUQxMjUxNzVGODRFMThFMkJFOTJDOUM2MkU0RTZEN0EiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMTItMDJUMjE6MTM6MTktMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMTItMDJUMjE6MjA6NTEtMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTEyLTAyVDIxOjIwOjUxLTA4OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDg1NWJiNTYtYTY4Ni00ZWQ3LWJkNzMtNDliNGNkODU3NzY3IiBzdEV2dDp3aGVuPSIyMDI1LTEyLTAyVDIxOjIwOjUxLTA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjcuMSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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", Kf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAicUlEQVR4nO09C5SWxXX3W3bZZRfYZXksDxHkkRJfjS0aa7S0hhRO2tP2mNjacyIxtT19JE1izqm1zUlsqJ4ekzSeNkZb0yNWJYknqTmxTaFAPAQwWo0kJEYFBUUB98nCsss+2P2nZ75vZr47d+6d79tlkYde/djvn28ed+bOfczMnZkEzg2YDQCLAOCXAGAxAJxnwqYDQCMANADAJACoNvGHAWAQAHoBoAcAugCgDQAOAsA+ANgNAK+Y32c1JHB2wi8DwK8BwPvM+zIAqBnnMioA8DIA7AKAHwHA0wDwYwAYGedy3gEAmAwAvw8AD5hGV6fpeQMAvgEAf2SkwztwkvC7APAwAHSWJkLiP0n6N8nDXJzE+53GGx2xjwHAdwDgBiT634EScDkA/JPRg8WEjBAX0u+J+ZaUz4vLO/68DgD3AcBvnu7GO5NhFQBsLGrMhOPAIiInEQJK35k8E6lM/3kSAK4/3Y15JoHu9RsKCUtFbUCERCYehCKZJSgV2UGnSEJxHyf078HbGN4DAN8djT4VOU/k0iQnlNQxpPK836jzBFxdSOwnAOBqeBvBDAD4R7GBOa4qI4ql9FDwznJpRFynDyF4TGXkz1cB4AI4x+FmADhcmnucuGQaPcK1gShPCsoQdXNSrrwgD9GgOwEAt8I5CNMA4PEoYWNcGTxa9GaN6IngGMdDyYfrWKzOL6km+HJ2nEvc/Btmyi+oKDv2FLjY04dl9Ol4PYnEpagO5PH0soynnib98Nk+Vfl3AHAnW6pCpdt3xWCmIu8Ili1bBouXLIYF5y+ABQsWwOw5s2HG9Bkwffp0mDhxIkyZMgWqq6tdMcPDw9DX15c+XYe7oLOjEw4dOgh79rwML+3eDTt37oThEyeK8aH1wd8pEJwN3A0An4GzDJoAYFsp7oyJvJRDEjHNmjU3qccee0zt379fVUYqajyhs7NDff/731cfu+mmCGcX2AUx/e8/vzibRPZcANgrNoirIDP0YPQgR9wb/vAGteunPy1NrEpFIL4N1t+lOEqpnTt3quuuuy5SFyyqkTiPTcaERO4GgEvhDAeNYEe0QkVGlcTd5v2hhx4SqCQQtlJA+Bjjk2/3f/3rfCfExPTqERk68dysV6o+cKbq4GvMoL5azF3ST5Lutb/N+5YtW+D9738/SqcFQQL9/f2wadMmePnll6GhYTJceeV74bLLLnPRRkZGYPv27fCTnT+BiqrApZdeCitWrEh1s4UXX3wxjdPb2wsXXnghXHvttea7j/SGDRvggx/8oMEtMTiUrAeuEK+PLfwBAHwbziC4XrQ+Jb1bFEZ69xe/eBdmPaX/0zAyMqJaWloCDvnC2rUu+oev/3Dw/aqrrnLfH3jgAZbL2tvbc05GIvzOO++M2w/eNyyyI9wchn8SzhC4kiKXGUZowkESSYXj3ezbBYsu8IiLG1uL2c9+9rNevi2zZ6vNWza7OA8/8rBqbm523+vr6tTXvvY19/2ZZ55VS5cu9fJYtXqVOnr0KJHVebnLli0LRXP5cbDMBP7zodNN3Hcb9xfP2PAmCGLGU2wsi8IfeGBdqBuJfjx44IDatGmT2rZtuxocHAzUaV9fn3r66afVjh071JEjRxQHO5/bqbZu3ape2fuKX5b+J+1XeaHfe/x7cWLFiB2zScK2WHm6dPBM413R6OXmqSykQCX9hDFw+srXU21tbTBr1iwTRzH6LzLwVDa/CBhdHv2uy0BRhodPQHPzdDh27Fh5W0MHpt9QYwQ6mrRVbrz+HMYAVWNJBABTAOAZTFzXPnjCwhIDV8J+x43gERal06v/l1+eE9dmYuJlsegMCS0QE9sQPP2rQNnf9rt9s/g5RNG7+VldXQOrV692adgOHHzz8/DQxDwbdo4njVPhW0ZgbS0vtD9SZrI/HIKox1vCugSUywmlEc0WLSL1SqNmjZS9Mi3iiAPo1eCjuUcjbDtTyk1ZBSzBkwAlIztJP5o/fz7fOqRPeO9UesXayGeo7fAWEVhPPy73ETEUtki7VrUcyVQY11Q3stB7jxw5wqCgCYQ6g80Ji2/zIeFazZSVOCJnabKfhBXTzkAklIGjR4+SrHFPLxgSYkJTjpYnkL4Ob4G/lGANMhPunosNmemRZnhIeFNTkxoeHiZGFrKwYpMVFSHMpuFmr3AQNZ6JBZ9b0gXtIcWBEuvI4bdTtkDRYBzEowRhLcOCqcew0v53bf1SAjuLFv/FRLNxKpYo5nHv2CrGHYYhvCsv70wvvPACTwRp7nlsc9TSs+BUiOjvAUCz++UblUVWIG85W0lKjS0iru+9916Slxan1iJFmWKLOhWrCdK3Nr7+a8Q3J3epLrTlkXrc96/3hfWjbYDbgXvnRDhtEx42wzjDR3xOM5MYZbiyqGd7YczkiInz+uuvM6ITcXIghhnxzIlhxKXR3yhdd3e3II65+WjaDsx6tjTJE5skAvjCeBFX7+kZiiIZQ4oSqygu12AA6WpOSCCyChRZERIBTWTkYULHMXDLLbfE64QX/aNx/HZk3XLjjn3a8Dpp+Iqo9CPGBOvNOFaCm/L+d9Mmdbph3759hfUv5UPGSb3R2y3/ebIzWXqs+2pUjzJ6JR/GMqstgeeGH5D+8r77+T/44DpYuvRdMDKsZ0jLzFJBnimJG06RcBXLQHuDdHZ2ws1/ejN0tHUQvMmMXdGKmcXbDesorkIYj/Svx8bIRQTeAgD5+pyEODUuxJkcirg2XlT2mVaKlJfGpDMNpwuSHG/7lg7lg6laBkw/U7Tzo+9ZGVGiYtDTxe8aixX9q4XEpYVzRJLS4kkFD3k745SHo25whoDKq2w6ncNOmsBAxMqmQnHd0UQRzoOb6Qot7KWxsXGsr/3I7MFFMU2rU0RiosWrfYTbFVMGHpucKdwLAodRvAWJ5KkgHM9ItKDugWhnufmAnjkdDYHfZ3x3+UylynEIeSWNUu9YUAAXLFwIj6xfD+eff37qoTFWcZ24tvRFflwKZm1fVTUB3njjDbjxxhth3759fp3Y+hQwhH2XkKRpvAoEaW8EgEfKtsOPRMs5NpajaYqGQXgYQNLQocH999+vzhRYtw55gIxlaFjUVty3ovbOuLiUDr7IE81GB3ryH63gOEbDPYxO+2D9QuP72blklEHnzJkTpPO4wwtmClS0QKwgpTx4fOfPP5+EM4KwwNBi43icn4v0QJ+7+F4G8wDAOIvFCXxzgI+3boqwTP8ny4J+wjyczAZKv1hRBABbt25lotP5UhvMzPUlGAFqvUh58Gg+8cQTeRwrhqkoFYhI+35gk9gXK91jVnWopm4KqsFU7XWnsGN6gstF0icBhih++fEe3HHnHbBo0eJyBpeoVFUBe0WyTBLYv/81uO22v7UBRMcifSzVgzOkqMgqMgjkOH0AoL0jjkvJtE9uRL8Iu+bw3HQZ/VFWR5ffbP3WP0mB3rXOh0LapOzsFa9vY9/+Iiai/9jrIZSzbO/EC+ROJxNxPFruZyFVACjfsXHeuALGI6Z6Uwoi0U3axGsWYn/YOF4a9J6vgrHte5OUtXZY1y4K9WxBgU4x0w+iKArsMR8pZsgQjACQ10XaWApSZ/Sl71qavlcqFT12MRlVspOtqgBUBSCpqkp7byUN1MFV7j3r1yZymlTng8LRJ/1epctIAPa+shcGBgb4+kitStuQDgm5POiQkjYOjs8zkja4DpES4Hcwq4tnVMTEQ0ycxkS48M6531599dVuuFKpjKSrPt4zQn5XSjwjJN2In6+FD3zgt0YvQjl1JYXF1GBRPn68v+JEtHcyTGjHcFpdsKBZ0UJEOAcue59rMXR26SOzTKykKuVw76kiv5MSTxVJV+Xna+Foj/UPY4YEMe2BuQzXh/7m2phTeRz3+uWzp/y8WWhAWE6UlvfM98z5vaTxUMLYwsbKxo0bI1MQER+rCl3zxX+5dKHXwJYtW+LSR+LAogkOTgLEvjFcSzbT601sU+nkhox8rEJBOmEHftRStmmEE+lMHrqBo0Q5VVDJy9q2bZuskoo6P2mH4IgIrj2l92IxrVWu2wmo1xR90eEsZEZ8UJHgDdbJElgJw9cZY1iM4/wA4NFHH813FqYJcvXw6quvQnd3NyxcuBCamzO3Mb3T8Pjx41BVlUClomBwcDDdsT9SqUBNTQ3U1tbChKqqtET9W58QoOMe6+mFvfv2puu/F198sSkv9/+65pprYOPGjZnTO20Hqtc4Awi9eytknBElpPMSuBFO0Kz66Kb/tj/WF4oBpgc50Sn1vPEwIADUfffdJzLXunXrXLxvfGN9xnAjFTVjRr7ZrMzT2tqapt28ORfDn77lFpaLNXzzm9+UpRMWm5wkLGoz73uBn5ds4HlOAP65kJJ48eKM4mijMsTGYSjuFVdcITay3gyO89DHOWgYGhpSM1tmjorAL730Upr2ySef9MI/9elPYVntaYbVq1f7uHtqJ9IONE2srSX7pJhW+pCXOjDH4o5Eudf1SAYh0UAqPquK9V0iZX7rW99C9K2IxNWP3l2ooaurS9XV1Ql48WX/bNfPQn9n89z++c+znWzz5s3FHVySVJgzHU6j2F/MSYKw3MuqzGHacf9oo4/zrSGO5L668XQG/mG+EX3MrumSYdSSJUvyT2bI8sgjj8CaNWtsoPteW5d22FTXDgwOhOWjv3QBZXBoMJwlMq9fWLsW7rjjH4Ly9Gk+AdAq0WGh07XhENBNCMb0OleePPRcVmWOwQ/ATqa4THDBOFPXYEwGNh3NiytMmGCfMGGCl3BocDBdcM/S+YmqTdz+wUGSV+JPczKNcqRbn4EC6XFLjsjIkPvc5z4Pra2tpq5Z5hNra/m6KKENuPpL9KMEiy1gyHmlBF7MZexNQdIC3TviaK4QD0nKvlAKJk/Rh73n0KP34wqZNDXp05sAeo6gTWEalJZepNOSbWlDQ9r1G6ChoQFqamtYlLs6O72UUxoaoLqmujyB6DueuLZ/cKdAmzLY/KV2z2FxlbnAIk8k9TD8Fz/4W8GQyDkOUA6y/YRplKlTpnpx0g3XQU0z0EMbDSMVcq1CopOnvo9exXBVDxsO1vPOk2onuTi4Gxzr7fWKnDJ1KrTMauEri6UeJ6KDyHweTmxLUoBytt+GczWBjasEEkl0qrEIYvEdEbMm9pAinSRrjzyDmbNmwtSphsAmuPuwPssUBSHdoMe2Go4e5bacAmKLsNEGjc6ePHkyzJ6tL2wJu4G3XdSMn73N6WlU1IYcUEah3yixuLZFjOFLpQAaq/wNZczucyr3aaFcXEWtM6ESFGm0CVvD7Nlzoc4YTjai5TQXluSNPWWq3icN0H+8Xy5PoU6G6jDQP+g4uL4+W1Cj0NWlN1f6naqlhXAwdoeVJi1iYhe1RUBwhtE9wyz8PlkTuCkohCNAkTGAievyQBhyHSTomX6tW2bqY0B80DNWrnIosdadE2uyc6+O9/fLOCZ8NfR5lRYaG321YKGjoyPAc8aM/PIVzwKn5cckoSRy8W/aYWj+qLMjqNcE5rsrlzFFKhmN4ifbOzmdbmWOiTJjhj473IfDSETjDjRn9hzHed6pAImPr2cfIvxOoINHrbGWtUFeoY6O9gCfWVYHK2aBnwJjRAU4xkDSw2l+rANirSawlYF55DJWm4SAKFaI/Jb0CoKZDAc7ApP4dfWTsoV5M5TK0U684Y4SLNTuw7lkqDGSIIuUt1qX17kymDZtmtgOXmei72xbImsax4+1ffpNcD4EqNEtwtv5HFIc8TjdYgtl82OwFZDnONiJSVd2lnia5TpMiIQi7eODx+49x3IDqnm6Fbt+uq7OXIy7uM0MgXFnKqvWHFJMPByHlZKIK/0yJ1QFzUvNbvc3iReG0ykJWaZXBPuvcqOM4+BDhw6RspWvN7UOPn7cJ2JCxCJ+TFl9fbkj4uQGfVpF2A4HD6GrDA31WlpyiztoH/su6VHcflybS8QmzeXwYXhHE3jYE2dihsxOuKAwZDGjyjhmxhYmqrC/m0WV42ACkydnFjQ1xAA7kQuWqIbD2MhyQzN/U1h7e3vmB5YjC9ObkZHFNZBkv6R/GZEMJWwf2hlsPiGJKprAZNI2UogktjlAPdFJkQKg8ezaLgbdyFz5M5xYBejp6fFzVQRVBvehodzI0hMYXj1MXQ4cPADHjpnJDgONTflBf978NmdQUemIj4+yYYWqkUhSbJyGzXxCE/h4gCBn+BBx4bjBEwukC8U6Aa0w012nTfMJrEVva1s2H0zT4HnhPiOiE4pLii8vhto7OtJNbXjCJD8ZL/s5cHwAjhzp9rjGM7Kw6GdBNIZQFBInKSeKBRjUBM6tCykR1QXEQAnixowDSSdR61rrYDTGtJyp71bI4ynGMAI4bCckgNNjvMfJ0SNH3Hw0Jzl46ZANqfC5016ZATeqYouaSgEaV0rLM9NxTWBk+zN8LllvrDVX1LO88x2CYjHoiYtppKH9U+98/TW5IR/O6wPCHUoJaQRqVKM57tTnWQ+53OxZWE+n383wSU+lnnc+2YxGuS7GcbjTc/jG4heX06sJjGQek6NUGEck3IBMRZNY5yANv/CChem8MC6LTnK4pfB0mS/TmyeGTsChQ1iMA6NKwjBNXH3au4bGxlyvUrxyHLKEeuw9f572Mxfax7SLV3f8XSgHpw2Zi5wIgOP6eRzTBM5tfzqMwBjRAjgkOd2B4rmJe1R5fLIu/nbevHyRS3HWceoCkf+aYqzooaFB6O3tKbBsE1Yd6qt2NDQgaUDBx4GZj6YcaascEISsrOG0MeJjS5QyVQhvVpk76/nMLGZUxFF9SRHHYTG9btUNI27wKo39dLibTlPmUG+I0nOsJ7Cik0Dn262vPth0+qhgr3Bk+DgrHoHjeFeZEuKVIsCKWcEok+yfMO7eKuNwF4/IEYvTpTYyp0dwn6CVYYYJgXWqdzV4BpYPdiZrYGAwdwVSMorcu9XB2qvDj59HajNeHV7Z0/DctW/EsQsQhImonZkHokaj2VDup+kz2K0J/FKIAUpAuZcjPj4LMkTb/MyEpVt0l8S5gSnEk0ODPqdKgglmsd/NYqF8ldSZSNn9Jm0ttYpRr+zEFroBT2eTfN0CBEcQGyfo4AhxiculcIbArd5hZ0HFCGAEXM9CmDidQDc5mwT8qkfQgaZORY0mreagfBpN/N5e5PGhIqKSgSNmQX9SfX26vuwnyDLqYDoZnkULCipjnAa6l0TiiCnll4Me8z1vvSmfY6PgQq0uSsOF8ZyUh+kEnhdlYDj47zOZacrW1jaxmNq6WieiHSSktxfgrHc/WCOrqTkTuxnqeeTWN/UWLh/cnDnNn07NUk6TjNSYhRyzbfz8duk5nyp0J4CfIyeOsbihvc5Z4ImMMGtIMBXU3hzMoSutbRmBndAw8TVB7AJBcEK8oviFZdEhkF4unFyfqYh8f3OW4ODBAzDQP8AfEMPVRfpL8ZNEeIyQnq4PYqU0tQTOz8TigOtZuME8TonoHEEHcT3aLbqbQD3LdOjgQXIJSpawsakJ6usbPEMpwDEw/pGeS3wO1s57zoonDdfVdRh6+8x8tOFQzyDEnIbbgONKwUDKF2cizBGR4hyBtYhGvjBItGDkOMJR0YFLLOqNtsGZVZXc2S4L7Ovtg/b2ttCA0fPQEyfChHTlk64kAbtiI210sxMdGuommdksUje9mnTcLC3qrQgerjg/SlxcZ0kvm7jYzAnilLQnAOCHmMDKHDxaLnESIWJMHwu90nN1CTg4g+P9x+HEieEwL+OuY63o/n5jReNbVRTBTzKykHi3RptNl+0KAa+MBOFqjbKkyNoVyg4WRiRQpRjsx+aSUG/Lynf8EgXO5boXhzgnipmkfqWMyG1szMWeQVxf5Cxl71Z/0smKzIqmxjtQ9UIfzcFW9OKhD5LkgX80irtwUXbLkBMOgYHK6Nu0bROUDt3wIlnOjMph2tSdI40JrPeS+iwiGkL8UMc5tuPCvYyM9sPTdF45WYDe55u7rirG4V2fM5mnw9xufZet+E48S4QxtNBv5xarh0qTJokc1e2WDMHNR7fMtNOVxC865mlpMsmvjkAzbDR90GOj8G2OwFrubAgrRRrIfmOUfTYMQha4+4ZYx/o+k0+41/o3nWXQh7jLGXImPjZyBgZ8l1kF5Sf9hwaz5UIN0/FKFmnPw12h813uXpRn6O5h4qSHj1ZELIcqxqkL3uD6hbmgOwW6q/DBIH/qdUARCSxEwXWUiiuhDhqmk3VgDYe7/eGPvbAMb1nR0NaGJiIULTjllxAnFc6UTaw1s1lMw2tLmtbP8x/jiCVIQy+q0AloGLudJYeH8A9K4O9a5exlSq1nquCp6GP0G1sJQdLMnYPumjAiqt2MgW1aTLuZiOOHhoRto2C5nrAP+ovVAOsOa+K1M/7RnP8YlR6i8SXZNByjiIWkoP2O/j1GYGWILJZd/hvhFMlwcBXJ47e0hCI6X2gP90/VISMr16PoJL4Y8mg8fezoUefV4Ta9pdLCz8TzGKE428PbOO4indpYJOQEQSYNThA3WPV9Sp7+4DZ+r2MRc0RCZiVnlbqCmVUlqcGJEnK+WKhybpKfkQx4sv+YsaJTM0sJnELKswZZa2e7W3CocvuS8+/2D8fBWIqIU7JefcnR/hxwjCFbzoF4TuvBRHoaAF4ICiGWrjtKl3IiVyFKWNcxDO8QZJ2Bg8I73SQHKt+82uU9faevHi+HeCd5wRweBk4MDrktLNORj5dXD01gZk58WpOww4EDzK203fAjbh5gQRspj9JA6eiGvy5GllCSE78SUqizBIY24QYLbW2Ua/IEdkjVe6wXDrUGRzQCiycWlyZsZKTiVpTqav0dPRhaO7A9kCVupjqbG4pJhPTajmk8RhdnW3K8Em/ncJUI/D8sF3OiIgacVegqJbuQelN/BuzxCRzYcfDwyEjKhSIeGqJ6Od+E5vzBbBqUz/7X9udeI4Yg2KvTxaW0KmozbARSg5XkSc430QbKv3BZxg5f+WSAsEOC9EYqCiU94cUlwy8ETciZ3C4gHMDLdMgw0mDdVvt6e1Mu9MpWQmMJxoqWAhoaJpvtKxDG03PR2s0W11V3Su8+YqnenHXM2SkU17hxZU4oHx2BfwAAO4MKcsMb18PQrIzUWzn9jP7W1dchIyuLrLmlw+pgkwfeeW852NsXHDNGFPpL8LHTleEm8EQ4K0S5uetZyJKmXM+BZx5InTApxFnrrn8b6/WyH2OxwpxLwJMcOE6KbDBGCOC8efNzDwkTP10EwBUkYPWlHeJ4+SsG/wDp/NXmkRpu3lDPn41xOxyQw8H885D7LCVEYEDx5bN4SfZNBn8CESgi8M+8YRPtWVSkxMZxeGgS0eXnzZuXnhmJv3XSDWfEHrAn8QQurUrokFTcod9d5rhifVpAPZ6PJunefDO0CVpa0MI/bQeOGVAdWasZf8ft7EvZ/4KTvCD6Vja0jMGA/+I0XCcw3+bOxbNYwJ/LQc7RajDiVA+TvDwToTycFamH3YSmnf7mzkVbQ0kebsM4IgrrJMDpV/vbfPfoGjEAmTZ3B3+fDIE7vWETFReYO6ghhuNzQwWG47mFhmARH1uvzc3uhDu7VIg+50BxSofEYWv29GTDJL2+XF3DHHTGnOlhocWczuPypUMlWzbp9AojyKkUpiMCwP0A8CKM0xXvXzbi2keSIpuGCXo2QBxtv0ANMGMmtycYLyD4GekJCb2PiVtSTIF2NNTh0qEG4XK7r8nbvc9IK242a5ZZcPBP4EL1lHCxslqVlpS6d/0ZlICyBNawykxm5wVznGoR5Xsd6hR4vJcP2vODxfLEngXtOo0KnNSxkeWdyQXCMEUDiYb3CXuzU2m8fOze0R5uRHcTNJ5BhRqBkyrckEmyY/zrj2C8CaytiuuCUNpYMaQ5q5A0Qn4IWcLe00C/YZEeeFTGrFkLVjKaMCwFPK8O3CnpFhYTPGcOOc4hkG4gAx0GcZ0xg08BwE/gFBDYen3c4yElmfDUcpUscAKcP3SbbUwmPnbXcbeCswiBqPfx9hJ3RAPjF4br6hHYJJ85HeFO68iVHWs/pkzT/uyM1XgR2Fpu+vq7EDHOsLK/8aY0SYfjdVjE1W5PkmsQxS60+wegZaZO4B7kDUss9+a6GPtlNeDpSlsfk7619U3nZmthOu2c1PD0UQ8hPj7WC90fglHCWAis4RrvZABuPGzDsW4uEFd6iW6GJViSu9E89dRTfkQ8BkZE8PYlGT2saLlJ3OrHxyB6bjvMLgvnAWI6o/ZEmWmNRG6kIFnIXJywfVaY7ShvCYFfp1fQZsOOiHVt/3K92vxdvGQJEotZoL7P6K677oLll1/uY6BCke6MLG7CIAle2O/YULNbUqkVfNFFF8Ftt90W7ELUM2pLliz1xT61oHF5rMRj8dNG1TMwBhAOOy4Fegx2rb5t1QY4T0dMOK5y+Buqz4L5891pddbLQfsb33rrremza9cu2LHjSfjBD7bA448/nh6a0o1OluUOCw3BfKOGl4FDeFEDha9cuRJWrVoFK1asgMuXL/dVDupQCxdekEqc9PBie8s4lVgxlRE21kdZn/W3EK6jA4P4XQ5hHHup0xXv9S/gSO9oEK5HamtrUw8++KD64Q+3ubBVq1b5eMDon0VLFrn8nn32WXXPPfeofXv38UjYOxzQPQ4f/dhNrk7srSv0PRaWWcwnBYK8GjXopcV/9jK2vReVxKpeErBt+3a45uqr+UiEWyjs3r07tbhrjJelYjjZ1xD+mrQ+wqGpsREuufTSSFUNq7l12zwDPTa+8KILU93suWUJI4Y8nLnyHOAuALgNziC4vpCTKUfTcJPuy1/6ktqzZ4/IMRlnI9ZOb6E7dTehVUx5+NYXDO3t7entMPPmzQvrXv4anHHl3FMFq6JE5sKxKCPxVq5cqe6++yvqueeek1o+u8qIJQC+nJDcQxjQCXUYfNdhBF577TW1fv16tWbNGlVTU4PqVeJqvziBg2vazzS4TM/Zs/pFuPyKbQDyXHLJJWrt2rVqx/btaqB/QJ0OeP7559W9994r63p6H5N4KZhYz9VwloAeK+zhuZYhcJEYJ8/8+fPVxz/+CbVhwwbV0dFxygja19eX3oR2++23q+XLl4/tBrhyIrkjGHaOE4yXkcVBtTG8/jJasiqBDTZSiC1SXVMDv3LZe9KluuoJ1aBUxT9CGIiFY8JTIyi3tly+qXEIKjWU9uzeI55u622m8sorqAe/UezPqcP62QQfMTMwsh4uCqcivsz1ceP9JAXGUtHD53sLnCOwzJwiwIo4crmx0WPCxY0xK5y9FDIRCBK/1dMz/KQyJXyKCasPn7sKzkH4+3KcUnAJpu0EEmfFwhLuO9GjkXyjF3QavGiHJc9XtcsXnMNwIQD8R6Eo5IZQMbEY4yiIiNUikRvjyvKiWD+PAcCV8DaC3waAZ8eu90pcdQtCwxeKf+6q+ZLSInz0UZE3wNsY9D2xPy8U2eh3cO/waLg6iXSgWPwiMR8++vTAT5zuxj2TQDtwP1+Ko63olkRw7HcS41yZO9Pbl7iOFT6vAcBntGPm6W7QMxX06tTDZjtkvDElInPhEIlbVrTLz5A5pejGk1hjf9tBsxFxW0s2skj8RBKtYyeoff7PbAxgjnx/B0YDS8ySpF747h0TwWFcHu1Tux0A/gYALoGzAE7lVOWpghlmuHGVeS7W7lCnqKwecyzRU+hB15+d+XA2EphCg5kp01z+bnNlvd7g1Kh98sztqtq3Vk8uWMNHX5CkfWy1h532VtTO0JqY2l9HW7/aHUkvluhHum36rID/B5hHPtPQHAm/AAAAAElFTkSuQmCC", zf = "data:image/png;base64,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", Qf = "data:image/png;base64,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", $f = "data:image/png;base64,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", _f = "data:image/png;base64,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", eA = "data:image/png;base64,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";
function tA({
  index: e,
  item: t
}) {
  const r = {
    beta_caryophylene: Kf,
    delta_limonene: zf,
    linalool: Qf,
    myrcene: $f,
    pinene: _f,
    terpinolene: eA
  }, n = Ce.div`
    border-color: #cecece;
    background: #ffffff;
    border-width: 2px;
    border-radius: 30px;
    text-align: center;
    overflow: hidden;
  `, o = Ce.div`
    padding: 10px 15px;
  `, i = Ce.div`
    font-size: 24px;
    font-weight: 700;
    color: #e4002b;
    margin-bottom: 0.5em;
  `, a = Ce.div`
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  `, s = Ce.div`
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    color: #e4002b;
    margin-bottom: 0.5em;
  `, c = Ce.div`
    font-size: 24px;
    font-weight: 700;
  `, A = Ce.div`
    font-size: 15px;
    font-weight: 500;
  `, f = Ce.div`
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
  `, m = Ce.div`
    color: #adadad;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
  `, g = Ce.button`
    margin-top: 10px;
    width: 100%;
    background-color: #e4002b;
    border-radius: 32px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 20px;
  `, y = Ce.img`
    margin-inline: auto;
  `;
  return /* @__PURE__ */ te.jsxs(n, { children: [
    /* @__PURE__ */ te.jsx(
      y,
      {
        src: t.image_url || Xf,
        width: 244,
        height: 218
      }
    ),
    /* @__PURE__ */ te.jsxs(o, { children: [
      /* @__PURE__ */ te.jsx(i, { children: t.strain }),
      /* @__PURE__ */ te.jsxs(a, { children: [
        "THC: ",
        t.thc_content,
        "% | ",
        t.cannabis_type.toUpperCase()
      ] }),
      /* @__PURE__ */ te.jsx(s, { children: t.brand }),
      /* @__PURE__ */ te.jsxs(c, { children: [
        "$",
        t.price
      ] }),
      /* @__PURE__ */ te.jsxs(A, { children: [
        t.grams,
        "g"
      ] }),
      /* @__PURE__ */ te.jsx(f, { children: t.dominant_terpenes.map((h, u) => /* @__PURE__ */ te.jsx(Oa, { title: `${h.name}: ${h.description}`, arrow: !0, children: /* @__PURE__ */ te.jsx("img", { src: r[h.slug], alt: h.name, width: 53, height: 53 }, h.slug) }, h)) }),
      /* @__PURE__ */ te.jsx(m, { children: "Dominant Terps" }),
      /* @__PURE__ */ te.jsx(g, { children: "Add to Cart" })
    ] })
  ] });
}
const rA = (e) => /* @__PURE__ */ M.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 140 306.1", ...e }, /* @__PURE__ */ M.createElement("defs", null, /* @__PURE__ */ M.createElement("style", null, `
      .cls-1 {
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 10px;
      }
    `)), /* @__PURE__ */ M.createElement("path", { className: "cls-1", d: "M139.81,301.1h-68.7V80.6l-49.56,11.76L6.01,29.36,92.11,5h47.7" })), nA = (e) => /* @__PURE__ */ M.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 155 309.04", ...e }, /* @__PURE__ */ M.createElement("defs", null, /* @__PURE__ */ M.createElement("style", null, `
      .cls-1 {
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 10px;
      }
    `)), /* @__PURE__ */ M.createElement("path", { className: "cls-1", d: "M173.72,237.68h-57.19l50.4-35.28c2.32-1.68,4.58-3.33,6.79-4.97" }), /* @__PURE__ */ M.createElement("path", { className: "cls-1", d: "M173.72,12.93c-13.93-5.15-29.79-7.93-47.11-7.93-56.7,0-88.2,22.26-119.7,63l55.02,45.78c23.1-26.46,38.64-38.22,58.38-38.22s33.18,11.34,33.18,30.24c0,17.64-10.92,31.5-38.22,52.92L5.23,242.72v61.32h168.49" })), oA = (e) => /* @__PURE__ */ M.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 155 309.88", ...e }, /* @__PURE__ */ M.createElement("defs", null, /* @__PURE__ */ M.createElement("style", null, `
      .cls-1 {
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 10px;
      }
    `)), /* @__PURE__ */ M.createElement("path", { className: "cls-1", d: "M158.2,5H27.52v65.94h112.14l-67.2,60.9,11.34,42.42h34.44c18.64,0,32.14,4.08,39.96,11.43" }), /* @__PURE__ */ M.createElement("path", { className: "cls-1", d: "M158.2,225.13c-6.45,6.37-16.58,10.03-29.46,10.03-27.3,0-49.14-12.18-70.14-33.6L6.94,252.8c28.98,31.5,68.46,52.08,125.16,52.08,9.07,0,17.79-.74,26.1-2.15" }));
function cA({
  storeId: e,
  type: t = "value",
  mininumGrams: r = 3.5,
  maximumGrams: n = 3.5,
  minimumPrice: o = null,
  maximumPrice: i = null,
  count: a = 3,
  originalMenuItemId: s = null,
  baseUrl: c = "https://demo-api.littledragon.keithswork.com"
}) {
  const [A, f] = Dr(null), [m, g] = Dr(!0), [y, h] = Dr(null), [u, b] = Dr(""), x = {
    value: "#32936f",
    exotic: "#2274a5",
    similar: "#e4002b",
    best: "#ffbf00"
  }, S = (Y) => Y === "best" ? "Best Overall" : Y === "value" ? "Best Value - Top Genetics" : Y === "exotic" ? "Most Exotic" : Y === "similar" ? `Because You Bought: ${u}` : "", R = Ce.div`
    all: reset;
    background: ${x[t]};
    padding: 6px;
    border-radius: 30px;
    max-width: 1410px;
    margin-inline: auto;
  `, C = Ce.div`
    background: white;
    border-radius: 30px;
    margin-inline: auto;
  `, v = Ce.div`
    padding: 3rem;
    text-align: center;
  `, E = Ce.p`
    margin-top: 1rem;
    color: rgb(75, 85, 99);
  `, O = Ce.h2`
    color: white;
    font-size: 40px;
    margin: 20px;
    padding: 0;
    line-height: 1;
    font-weight: 800;
    text-transform: uppercase;
  `, J = Ce.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  `, F = Ce.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  `;
  return Ja(() => {
    (async () => {
      g(!0), h(null);
      try {
        const L = await fetch(
          `${c}/${e}/recommendations?type=${t}&min_grams=${r}&max_grams=${n}&min_price=${o}&max_price=${i}&original_id=${s}&count=${a}`
        );
        if (!L.ok)
          throw new Error(`HTTP error! status: ${L.status}`);
        const l = await L.json();
        f(l.recommendations), l.original ? b(`${l.original.brand} ${l.original.strain}`) : b(null);
      } catch (L) {
        h(L.message), f(null);
      } finally {
        g(!1);
      }
    })();
  }, [e, t, r, n, o, i, a, c, s]), /* @__PURE__ */ te.jsxs(R, { children: [
    /* @__PURE__ */ te.jsx(O, { children: S(t) }),
    /* @__PURE__ */ te.jsxs(C, { children: [
      m && /* @__PURE__ */ te.jsx(v, { children: /* @__PURE__ */ te.jsx(E, { children: "Loading recommendations..." }) }),
      y && t === "similar" && s === null && /* @__PURE__ */ te.jsx(v, { children: /* @__PURE__ */ te.jsx(E, { children: "No original item selected to do a recommendation of similar items" }) }),
      !m && !y && (!A || A.length === 0) && /* @__PURE__ */ te.jsx(v, { children: /* @__PURE__ */ te.jsx(E, { children: "No recommendations found" }) }),
      !m && !y && A && /* @__PURE__ */ te.jsx(J, { children: A.map((Y, L) => /* @__PURE__ */ te.jsxs(F, { children: [
        L === 0 && /* @__PURE__ */ te.jsx(rA, { height: 300, style: { color: x[t], opacity: 0.5, marginBottom: "50px" } }),
        L === 1 && /* @__PURE__ */ te.jsx(nA, { height: 300, style: { color: x[t], opacity: 0.5, marginBottom: "50px" } }),
        L === 2 && /* @__PURE__ */ te.jsx(oA, { height: 300, style: { color: x[t], opacity: 0.5, marginBottom: "50px" } }),
        /* @__PURE__ */ te.jsx(tA, { item: Y })
      ] }, L)) })
    ] })
  ] });
}
export {
  cA as default
};
