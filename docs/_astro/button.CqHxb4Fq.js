import { r as v, R as it } from './index.u1LLWZlj.js';
var ie = { exports: {} },
    U = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ze;
function lt() {
    if (ze) return U;
    ze = 1;
    var e = Symbol.for('react.transitional.element'),
        o = Symbol.for('react.fragment');
    function t(r, s, n) {
        var l = null;
        if ((n !== void 0 && (l = '' + n), s.key !== void 0 && (l = '' + s.key), 'key' in s)) {
            n = {};
            for (var p in s) p !== 'key' && (n[p] = s[p]);
        } else n = s;
        return (
            (s = n.ref),
            { $$typeof: e, type: r, key: l, ref: s !== void 0 ? s : null, props: n }
        );
    }
    return ((U.Fragment = o), (U.jsx = t), (U.jsxs = t), U);
}
var Se;
function ct() {
    return (Se || ((Se = 1), (ie.exports = lt())), ie.exports);
}
var dt = ct();
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = (...e) =>
    e
        .filter((o, t, r) => !!o && o.trim() !== '' && r.indexOf(o) === t)
        .join(' ')
        .trim();
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ut = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mt = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, t, r) => (r ? r.toUpperCase() : t.toLowerCase()));
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Re = (e) => {
    const o = mt(e);
    return o.charAt(0).toUpperCase() + o.slice(1);
};
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var le = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pt = (e) => {
        for (const o in e) if (o.startsWith('aria-') || o === 'role' || o === 'title') return !0;
        return !1;
    },
    ft = v.createContext({}),
    bt = () => v.useContext(ft),
    gt = v.forwardRef(
        (
            {
                color: e,
                size: o,
                strokeWidth: t,
                absoluteStrokeWidth: r,
                className: s = '',
                children: n,
                iconNode: l,
                ...p
            },
            m
        ) => {
            const {
                    size: c = 24,
                    strokeWidth: b = 2,
                    absoluteStrokeWidth: g = !1,
                    color: k = 'currentColor',
                    className: C = '',
                } = bt() ?? {},
                R = (r ?? g) ? (Number(t ?? b) * 24) / Number(o ?? c) : (t ?? b);
            return v.createElement(
                'svg',
                {
                    ref: m,
                    ...le,
                    width: o ?? c ?? le.width,
                    height: o ?? c ?? le.height,
                    stroke: e ?? k,
                    strokeWidth: R,
                    className: Ge('lucide', C, s),
                    ...(!n && !pt(p) && { 'aria-hidden': 'true' }),
                    ...p,
                },
                [...l.map(([h, x]) => v.createElement(h, x)), ...(Array.isArray(n) ? n : [n])]
            );
        }
    );
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wo = (e, o) => {
    const t = v.forwardRef(({ className: r, ...s }, n) =>
        v.createElement(gt, {
            ref: n,
            iconNode: o,
            className: Ge(`lucide-${ut(Re(e))}`, `lucide-${e}`, r),
            ...s,
        })
    );
    return ((t.displayName = Re(e)), t);
};
function Me(e) {
    var o,
        t,
        r = '';
    if (typeof e == 'string' || typeof e == 'number') r += e;
    else if (typeof e == 'object')
        if (Array.isArray(e)) {
            var s = e.length;
            for (o = 0; o < s; o++) e[o] && (t = Me(e[o])) && (r && (r += ' '), (r += t));
        } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
function Ne() {
    for (var e, o, t = 0, r = '', s = arguments.length; t < s; t++)
        (e = arguments[t]) && (o = Me(e)) && (r && (r += ' '), (r += o));
    return r;
}
const Ae = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
    Ee = Ne,
    ht = (e, o) => (t) => {
        var r;
        if (o?.variants == null) return Ee(e, t?.class, t?.className);
        const { variants: s, defaultVariants: n } = o,
            l = Object.keys(s).map((c) => {
                const b = t?.[c],
                    g = n?.[c];
                if (b === null) return null;
                const k = Ae(b) || Ae(g);
                return s[c][k];
            }),
            p =
                t &&
                Object.entries(t).reduce((c, b) => {
                    let [g, k] = b;
                    return (k === void 0 || (c[g] = k), c);
                }, {}),
            m =
                o == null || (r = o.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((c, b) => {
                          let { class: g, className: k, ...C } = b;
                          return Object.entries(C).every((R) => {
                              let [h, x] = R;
                              return Array.isArray(x)
                                  ? x.includes({ ...n, ...p }[h])
                                  : { ...n, ...p }[h] === x;
                          })
                              ? [...c, g, k]
                              : c;
                      }, []);
        return Ee(e, l, m, t?.class, t?.className);
    };
var xt = Object.defineProperty,
    pe = (e, o) => xt(e, 'name', { value: o, configurable: !0 });
function de(e, o) {
    if (typeof e == 'function') return e(o);
    e != null && (e.current = o);
}
pe(de, 'setRef');
function Oe(...e) {
    return (o) => {
        let t = !1;
        const r = e.map((s) => {
            const n = de(s, o);
            return (!t && typeof n == 'function' && (t = !0), n);
        });
        if (t)
            return () => {
                for (let s = 0; s < r.length; s++) {
                    const n = r[s];
                    typeof n == 'function' ? n() : de(e[s], null);
                }
            };
    };
}
pe(Oe, 'composeRefs');
function Ve(...e) {
    return v.useCallback(Oe(...e), e);
}
pe(Ve, 'useComposedRefs');
var vt = Object.defineProperty,
    P = (e, o) => vt(e, 'name', { value: o, configurable: !0 }),
    yt = P((e, o) => {
        const t = { ...o };
        for (const r in o) {
            const s = e[r],
                n = o[r];
            if (/^on[A-Z]/.test(r))
                if (s && n) {
                    const p = typeof s == 'function',
                        m = typeof n == 'function';
                    t[r] = (...c) => {
                        const b = m ? n(...c) : void 0;
                        return (p && s(...c), b);
                    };
                } else s && (t[r] = s);
            else
                r === 'style'
                    ? (t[r] = {
                          ...(typeof s == 'object' ? s : null),
                          ...(typeof n == 'object' ? n : null),
                      })
                    : r === 'className'
                      ? (t[r] = [s, n].filter(Boolean).join(' '))
                      : r === 'aria-describedby' && (t[r] = We(n, s));
        }
        return { ...e, ...t };
    }, 'mergeProps');
function We(...e) {
    const o = new Set();
    for (const t of e)
        if (typeof t == 'string') for (const r of String(t).trim().split(/\s+/)) r && o.add(r);
    return o.size > 0 ? Array.from(o).join(' ') : void 0;
}
P(We, 'concatAriaDescribedby');
var $e = v.createContext(yt);
$e.displayName = 'SlotContext';
function Fe(e) {
    const o = v.forwardRef((t, r) => {
        const s = v.useContext($e);
        let { children: n, mergeProps: l = s, ...p } = t,
            m = null,
            c = !1;
        const b = [];
        (ue(n) && typeof Q == 'function' && (n = Q(n._payload)),
            v.Children.forEach(n, (R) => {
                if (Ue(R)) {
                    c = !0;
                    const h = R;
                    let x = 'child' in h.props ? h.props.child : h.props.children;
                    (ue(x) && typeof Q == 'function' && (x = Q(x._payload)),
                        (m = Ct(h, x)),
                        b.push(m?.props?.children));
                } else b.push(R);
            }),
            m
                ? (m = v.cloneElement(m, void 0, b))
                : !c && v.Children.count(n) === 1 && v.isValidElement(n) && (m = n));
        const g = m ? De(m) : void 0,
            k = Ve(r, g);
        if (!m) {
            if (n || n === 0) throw new Error(c ? Rt(e) : St(e));
            return n;
        }
        const C = l(p, m.props ?? {});
        return (m.type !== v.Fragment && (C.ref = r ? k : g), v.cloneElement(m, C));
    });
    return ((o.displayName = `${e}.Slot`), o);
}
P(Fe, 'createSlot');
var kt = Fe('Slot'),
    Be = Symbol.for('radix.slottable');
function wt(e) {
    const o = P((t) => ('child' in t ? t.children(t.child) : t.children), 'Slottable');
    return ((o.displayName = `${e}.Slottable`), (o.__radixId = Be), o);
}
P(wt, 'createSlottable');
var Ct = P((e, o) => {
    if ('child' in e.props) {
        const t = e.props.child;
        return v.isValidElement(t)
            ? v.cloneElement(t, void 0, e.props.children(t.props.children))
            : null;
    }
    return v.isValidElement(o) ? o : null;
}, 'getSlottableElementFromSlottable');
function De(e) {
    let o = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
        t = o && 'isReactWarning' in o && o.isReactWarning;
    return t
        ? e.ref
        : ((o = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
          (t = o && 'isReactWarning' in o && o.isReactWarning),
          t ? e.props.ref : e.props.ref || e.ref);
}
P(De, 'getElementRef');
function Ue(e) {
    return (
        v.isValidElement(e) &&
        typeof e.type == 'function' &&
        '__radixId' in e.type &&
        e.type.__radixId === Be
    );
}
P(Ue, 'isSlottable');
var zt = Symbol.for('react.lazy');
function ue(e) {
    return (
        e != null &&
        typeof e == 'object' &&
        '$$typeof' in e &&
        e.$$typeof === zt &&
        '_payload' in e &&
        Ye(e._payload)
    );
}
P(ue, 'isLazyComponent');
function Ye(e) {
    return typeof e == 'object' && e !== null && 'then' in e;
}
P(Ye, 'isPromiseLike');
var St = P(
        (e) =>
            `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        'createSlotError'
    ),
    Rt = P(
        (e) =>
            `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        'createSlottableError'
    ),
    Q = it[' use '.trim().toString()];
const At = (e, o) => {
        const t = new Array(e.length + o.length);
        for (let r = 0; r < e.length; r++) t[r] = e[r];
        for (let r = 0; r < o.length; r++) t[e.length + r] = o[r];
        return t;
    },
    Et = (e, o) => ({ classGroupId: e, validator: o }),
    qe = (e = new Map(), o = null, t) => ({ nextPart: e, validators: o, classGroupId: t }),
    te = '-',
    Pe = [],
    Pt = 'arbitrary..',
    _t = (e) => {
        const o = jt(e),
            { conflictingClassGroups: t, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (l) => {
                if (l.startsWith('[') && l.endsWith(']')) return It(l);
                const p = l.split(te),
                    m = p[0] === '' && p.length > 1 ? 1 : 0;
                return Je(p, m, o);
            },
            getConflictingClassGroupIds: (l, p) => {
                if (p) {
                    const m = r[l],
                        c = t[l];
                    return m ? (c ? At(c, m) : m) : c || Pe;
                }
                return t[l] || Pe;
            },
        };
    },
    Je = (e, o, t) => {
        if (e.length - o === 0) return t.classGroupId;
        const s = e[o],
            n = t.nextPart.get(s);
        if (n) {
            const c = Je(e, o + 1, n);
            if (c) return c;
        }
        const l = t.validators;
        if (l === null) return;
        const p = o === 0 ? e.join(te) : e.slice(o).join(te),
            m = l.length;
        for (let c = 0; c < m; c++) {
            const b = l[c];
            if (b.validator(p)) return b.classGroupId;
        }
    },
    It = (e) =>
        e.slice(1, -1).indexOf(':') === -1
            ? void 0
            : (() => {
                  const o = e.slice(1, -1),
                      t = o.indexOf(':'),
                      r = o.slice(0, t);
                  return r ? Pt + r : void 0;
              })(),
    jt = (e) => {
        const { theme: o, classGroups: t } = e;
        return Lt(t, o);
    },
    Lt = (e, o) => {
        const t = qe();
        for (const r in e) {
            const s = e[r];
            fe(s, t, r, o);
        }
        return t;
    },
    fe = (e, o, t, r) => {
        const s = e.length;
        for (let n = 0; n < s; n++) {
            const l = e[n];
            Tt(l, o, t, r);
        }
    },
    Tt = (e, o, t, r) => {
        if (typeof e == 'string') {
            Gt(e, o, t);
            return;
        }
        if (typeof e == 'function') {
            Mt(e, o, t, r);
            return;
        }
        Nt(e, o, t, r);
    },
    Gt = (e, o, t) => {
        const r = e === '' ? o : Ze(o, e);
        r.classGroupId = t;
    },
    Mt = (e, o, t, r) => {
        if (Ot(e)) {
            fe(e(r), o, t, r);
            return;
        }
        (o.validators === null && (o.validators = []), o.validators.push(Et(t, e)));
    },
    Nt = (e, o, t, r) => {
        const s = Object.entries(e),
            n = s.length;
        for (let l = 0; l < n; l++) {
            const [p, m] = s[l];
            fe(m, Ze(o, p), t, r);
        }
    },
    Ze = (e, o) => {
        let t = e;
        const r = o.split(te),
            s = r.length;
        for (let n = 0; n < s; n++) {
            const l = r[n];
            let p = t.nextPart.get(l);
            (p || ((p = qe()), t.nextPart.set(l, p)), (t = p));
        }
        return t;
    },
    Ot = (e) => 'isThemeGetter' in e && e.isThemeGetter === !0,
    Vt = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let o = 0,
            t = Object.create(null),
            r = Object.create(null);
        const s = (n, l) => {
            ((t[n] = l), o++, o > e && ((o = 0), (r = t), (t = Object.create(null))));
        };
        return {
            get(n) {
                let l = t[n];
                if (l !== void 0) return l;
                if ((l = r[n]) !== void 0) return (s(n, l), l);
            },
            set(n, l) {
                n in t ? (t[n] = l) : s(n, l);
            },
        };
    },
    me = '!',
    _e = ':',
    Wt = [],
    Ie = (e, o, t, r, s) => ({
        modifiers: e,
        hasImportantModifier: o,
        baseClassName: t,
        maybePostfixModifierPosition: r,
        isExternal: s,
    }),
    $t = (e) => {
        const { prefix: o, experimentalParseClassName: t } = e;
        let r = (s) => {
            const n = [];
            let l = 0,
                p = 0,
                m = 0,
                c;
            const b = s.length;
            for (let h = 0; h < b; h++) {
                const x = s[h];
                if (l === 0 && p === 0) {
                    if (x === _e) {
                        (n.push(s.slice(m, h)), (m = h + 1));
                        continue;
                    }
                    if (x === '/') {
                        c = h;
                        continue;
                    }
                }
                x === '[' ? l++ : x === ']' ? l-- : x === '(' ? p++ : x === ')' && p--;
            }
            const g = n.length === 0 ? s : s.slice(m);
            let k = g,
                C = !1;
            g.endsWith(me)
                ? ((k = g.slice(0, -1)), (C = !0))
                : g.startsWith(me) && ((k = g.slice(1)), (C = !0));
            const R = c && c > m ? c - m : void 0;
            return Ie(n, C, k, R);
        };
        if (o) {
            const s = o + _e,
                n = r;
            r = (l) => (l.startsWith(s) ? n(l.slice(s.length)) : Ie(Wt, !1, l, void 0, !0));
        }
        if (t) {
            const s = r;
            r = (n) => t({ className: n, parseClassName: s });
        }
        return r;
    },
    Ft = (e) => {
        const o = new Map();
        return (
            e.orderSensitiveModifiers.forEach((t, r) => {
                o.set(t, 1e6 + r);
            }),
            (t) => {
                const r = [];
                let s = [];
                for (let n = 0; n < t.length; n++) {
                    const l = t[n],
                        p = l[0] === '[',
                        m = o.has(l);
                    p || m
                        ? (s.length > 0 && (s.sort(), r.push(...s), (s = [])), r.push(l))
                        : s.push(l);
                }
                return (s.length > 0 && (s.sort(), r.push(...s)), r);
            }
        );
    },
    Bt = (e) => ({
        cache: Vt(e.cacheSize),
        parseClassName: $t(e),
        sortModifiers: Ft(e),
        postfixLookupClassGroupIds: Dt(e),
        ..._t(e),
    }),
    Dt = (e) => {
        const o = Object.create(null),
            t = e.postfixLookupClassGroups;
        if (t) for (let r = 0; r < t.length; r++) o[t[r]] = !0;
        return o;
    },
    Ut = /\s+/,
    Yt = (e, o) => {
        const {
                parseClassName: t,
                getClassGroupId: r,
                getConflictingClassGroupIds: s,
                sortModifiers: n,
                postfixLookupClassGroupIds: l,
            } = o,
            p = [],
            m = e.trim().split(Ut);
        let c = '';
        for (let b = m.length - 1; b >= 0; b -= 1) {
            const g = m[b],
                {
                    isExternal: k,
                    modifiers: C,
                    hasImportantModifier: R,
                    baseClassName: h,
                    maybePostfixModifierPosition: x,
                } = t(g);
            if (k) {
                c = g + (c.length > 0 ? ' ' + c : c);
                continue;
            }
            let M = !!x,
                A;
            if (M) {
                const j = h.substring(0, x);
                A = r(j);
                const d = A && l[A] ? r(h) : void 0;
                d && d !== A && ((A = d), (M = !1));
            } else A = r(h);
            if (!A) {
                if (!M) {
                    c = g + (c.length > 0 ? ' ' + c : c);
                    continue;
                }
                if (((A = r(h)), !A)) {
                    c = g + (c.length > 0 ? ' ' + c : c);
                    continue;
                }
                M = !1;
            }
            const D = C.length === 0 ? '' : C.length === 1 ? C[0] : n(C).join(':'),
                W = R ? D + me : D,
                $ = W + A;
            if (p.indexOf($) > -1) continue;
            p.push($);
            const F = s(A, M);
            for (let j = 0; j < F.length; ++j) {
                const d = F[j];
                p.push(W + d);
            }
            c = g + (c.length > 0 ? ' ' + c : c);
        }
        return c;
    },
    qt = (...e) => {
        let o = 0,
            t,
            r,
            s = '';
        for (; o < e.length; ) (t = e[o++]) && (r = He(t)) && (s && (s += ' '), (s += r));
        return s;
    },
    He = (e) => {
        if (typeof e == 'string') return e;
        let o,
            t = '';
        for (let r = 0; r < e.length; r++) e[r] && (o = He(e[r])) && (t && (t += ' '), (t += o));
        return t;
    },
    Jt = (e, ...o) => {
        let t, r, s, n;
        const l = (m) => {
                const c = o.reduce((b, g) => g(b), e());
                return ((t = Bt(c)), (r = t.cache.get), (s = t.cache.set), (n = p), p(m));
            },
            p = (m) => {
                const c = r(m);
                if (c) return c;
                const b = Yt(m, t);
                return (s(m, b), b);
            };
        return ((n = l), (...m) => n(qt(...m)));
    },
    Zt = [],
    y = (e) => {
        const o = (t) => t[e] || Zt;
        return ((o.isThemeGetter = !0), o);
    },
    Xe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Qe = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    Ht = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    Xt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Qt =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Kt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    eo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    to =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    T = (e) => Ht.test(e),
    f = (e) => !!e && !Number.isNaN(Number(e)),
    I = (e) => !!e && Number.isInteger(Number(e)),
    ce = (e) => e.endsWith('%') && f(e.slice(0, -1)),
    L = (e) => Xt.test(e),
    Ke = () => !0,
    oo = (e) => Qt.test(e) && !Kt.test(e),
    be = () => !1,
    ro = (e) => eo.test(e),
    no = (e) => to.test(e),
    so = (e) => !a(e) && !i(e),
    ao = (e) =>
        e.startsWith('@container') &&
        ((e[10] === '/' && e[11] !== void 0) ||
            (e[11] === 's' && e[16] !== void 0 && e.startsWith('-size/', 10)) ||
            (e[11] === 'n' && e[18] !== void 0 && e.startsWith('-normal/', 10))),
    io = (e) => G(e, ot, be),
    a = (e) => Xe.test(e),
    O = (e) => G(e, rt, oo),
    je = (e) => G(e, go, f),
    lo = (e) => G(e, st, Ke),
    co = (e) => G(e, nt, be),
    Le = (e) => G(e, et, be),
    uo = (e) => G(e, tt, no),
    K = (e) => G(e, at, ro),
    i = (e) => Qe.test(e),
    Y = (e) => V(e, rt),
    mo = (e) => V(e, nt),
    Te = (e) => V(e, et),
    po = (e) => V(e, ot),
    fo = (e) => V(e, tt),
    ee = (e) => V(e, at, !0),
    bo = (e) => V(e, st, !0),
    G = (e, o, t) => {
        const r = Xe.exec(e);
        return r ? (r[1] ? o(r[1]) : t(r[2])) : !1;
    },
    V = (e, o, t = !1) => {
        const r = Qe.exec(e);
        return r ? (r[1] ? o(r[1]) : t) : !1;
    },
    et = (e) => e === 'position' || e === 'percentage',
    tt = (e) => e === 'image' || e === 'url',
    ot = (e) => e === 'length' || e === 'size' || e === 'bg-size',
    rt = (e) => e === 'length',
    go = (e) => e === 'number',
    nt = (e) => e === 'family-name',
    st = (e) => e === 'number' || e === 'weight',
    at = (e) => e === 'shadow',
    ho = () => {
        const e = y('color'),
            o = y('font'),
            t = y('text'),
            r = y('font-weight'),
            s = y('tracking'),
            n = y('leading'),
            l = y('breakpoint'),
            p = y('container'),
            m = y('spacing'),
            c = y('radius'),
            b = y('shadow'),
            g = y('inset-shadow'),
            k = y('text-shadow'),
            C = y('drop-shadow'),
            R = y('blur'),
            h = y('perspective'),
            x = y('aspect'),
            M = y('ease'),
            A = y('animate'),
            D = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
            W = () => [
                'center',
                'top',
                'bottom',
                'left',
                'right',
                'top-left',
                'left-top',
                'top-right',
                'right-top',
                'bottom-right',
                'right-bottom',
                'bottom-left',
                'left-bottom',
            ],
            $ = () => [...W(), i, a],
            F = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
            j = () => ['auto', 'contain', 'none'],
            d = () => [i, a, m],
            E = () => [T, 'full', 'auto', ...d()],
            ge = () => [I, 'none', 'subgrid', i, a],
            he = () => ['auto', { span: ['full', I, i, a] }, I, i, a],
            q = () => [I, 'auto', i, a],
            xe = () => ['auto', 'min', 'max', 'fr', i, a],
            oe = () => [
                'start',
                'end',
                'center',
                'between',
                'around',
                'evenly',
                'stretch',
                'baseline',
                'center-safe',
                'end-safe',
            ],
            B = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
            _ = () => ['auto', ...d()],
            N = () => [
                T,
                'auto',
                'full',
                'dvw',
                'dvh',
                'lvw',
                'lvh',
                'svw',
                'svh',
                'min',
                'max',
                'fit',
                ...d(),
            ],
            re = () => [T, 'screen', 'full', 'dvw', 'lvw', 'svw', 'min', 'max', 'fit', ...d()],
            ne = () => [
                T,
                'screen',
                'full',
                'lh',
                'dvh',
                'lvh',
                'svh',
                'min',
                'max',
                'fit',
                ...d(),
            ],
            u = () => [e, i, a],
            ve = () => [...W(), Te, Le, { position: [i, a] }],
            ye = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
            ke = () => ['auto', 'cover', 'contain', po, io, { size: [i, a] }],
            se = () => [ce, Y, O],
            z = () => ['', 'none', 'full', c, i, a],
            S = () => ['', f, Y, O],
            J = () => ['solid', 'dashed', 'dotted', 'double'],
            we = () => [
                'normal',
                'multiply',
                'screen',
                'overlay',
                'darken',
                'lighten',
                'color-dodge',
                'color-burn',
                'hard-light',
                'soft-light',
                'difference',
                'exclusion',
                'hue',
                'saturation',
                'color',
                'luminosity',
            ],
            w = () => [f, ce, Te, Le],
            Ce = () => ['', 'none', R, i, a],
            Z = () => ['none', f, i, a],
            H = () => ['none', f, i, a],
            ae = () => [f, i, a],
            X = () => [T, 'full', ...d()];
        return {
            cacheSize: 500,
            theme: {
                animate: ['spin', 'ping', 'pulse', 'bounce'],
                aspect: ['video'],
                blur: [L],
                breakpoint: [L],
                color: [Ke],
                container: [L],
                'drop-shadow': [L],
                ease: ['in', 'out', 'in-out'],
                font: [so],
                'font-weight': [
                    'thin',
                    'extralight',
                    'light',
                    'normal',
                    'medium',
                    'semibold',
                    'bold',
                    'extrabold',
                    'black',
                ],
                'inset-shadow': [L],
                leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
                perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
                radius: [L],
                shadow: [L],
                spacing: ['px', f],
                text: [L],
                'text-shadow': [L],
                tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
            },
            classGroups: {
                aspect: [{ aspect: ['auto', 'square', T, a, i, x] }],
                container: ['container'],
                'container-type': [{ '@container': ['', 'normal', 'size', i, a] }],
                'container-named': [ao],
                columns: [{ columns: [f, a, i, p] }],
                'break-after': [{ 'break-after': D() }],
                'break-before': [{ 'break-before': D() }],
                'break-inside': [
                    { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
                ],
                'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
                box: [{ box: ['border', 'content'] }],
                display: [
                    'block',
                    'inline-block',
                    'inline',
                    'flex',
                    'inline-flex',
                    'table',
                    'inline-table',
                    'table-caption',
                    'table-cell',
                    'table-column',
                    'table-column-group',
                    'table-footer-group',
                    'table-header-group',
                    'table-row-group',
                    'table-row',
                    'flow-root',
                    'grid',
                    'inline-grid',
                    'contents',
                    'list-item',
                    'hidden',
                ],
                sr: ['sr-only', 'not-sr-only'],
                float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
                clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
                isolation: ['isolate', 'isolation-auto'],
                'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
                'object-position': [{ object: $() }],
                overflow: [{ overflow: F() }],
                'overflow-x': [{ 'overflow-x': F() }],
                'overflow-y': [{ 'overflow-y': F() }],
                overscroll: [{ overscroll: j() }],
                'overscroll-x': [{ 'overscroll-x': j() }],
                'overscroll-y': [{ 'overscroll-y': j() }],
                position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
                inset: [{ inset: E() }],
                'inset-x': [{ 'inset-x': E() }],
                'inset-y': [{ 'inset-y': E() }],
                start: [{ 'inset-s': E(), start: E() }],
                end: [{ 'inset-e': E(), end: E() }],
                'inset-bs': [{ 'inset-bs': E() }],
                'inset-be': [{ 'inset-be': E() }],
                top: [{ top: E() }],
                right: [{ right: E() }],
                bottom: [{ bottom: E() }],
                left: [{ left: E() }],
                visibility: ['visible', 'invisible', 'collapse'],
                z: [{ z: [I, 'auto', i, a] }],
                basis: [{ basis: [T, 'full', 'auto', p, ...d()] }],
                'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
                'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
                flex: [{ flex: [f, T, 'auto', 'initial', 'none', a] }],
                grow: [{ grow: ['', f, i, a] }],
                shrink: [{ shrink: ['', f, i, a] }],
                order: [{ order: [I, 'first', 'last', 'none', i, a] }],
                'grid-cols': [{ 'grid-cols': ge() }],
                'col-start-end': [{ col: he() }],
                'col-start': [{ 'col-start': q() }],
                'col-end': [{ 'col-end': q() }],
                'grid-rows': [{ 'grid-rows': ge() }],
                'row-start-end': [{ row: he() }],
                'row-start': [{ 'row-start': q() }],
                'row-end': [{ 'row-end': q() }],
                'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
                'auto-cols': [{ 'auto-cols': xe() }],
                'auto-rows': [{ 'auto-rows': xe() }],
                gap: [{ gap: d() }],
                'gap-x': [{ 'gap-x': d() }],
                'gap-y': [{ 'gap-y': d() }],
                'justify-content': [{ justify: [...oe(), 'normal'] }],
                'justify-items': [{ 'justify-items': [...B(), 'normal'] }],
                'justify-self': [{ 'justify-self': ['auto', ...B()] }],
                'align-content': [{ content: ['normal', ...oe()] }],
                'align-items': [{ items: [...B(), { baseline: ['', 'last'] }] }],
                'align-self': [{ self: ['auto', ...B(), { baseline: ['', 'last'] }] }],
                'place-content': [{ 'place-content': oe() }],
                'place-items': [{ 'place-items': [...B(), 'baseline'] }],
                'place-self': [{ 'place-self': ['auto', ...B()] }],
                p: [{ p: d() }],
                px: [{ px: d() }],
                py: [{ py: d() }],
                ps: [{ ps: d() }],
                pe: [{ pe: d() }],
                pbs: [{ pbs: d() }],
                pbe: [{ pbe: d() }],
                pt: [{ pt: d() }],
                pr: [{ pr: d() }],
                pb: [{ pb: d() }],
                pl: [{ pl: d() }],
                m: [{ m: _() }],
                mx: [{ mx: _() }],
                my: [{ my: _() }],
                ms: [{ ms: _() }],
                me: [{ me: _() }],
                mbs: [{ mbs: _() }],
                mbe: [{ mbe: _() }],
                mt: [{ mt: _() }],
                mr: [{ mr: _() }],
                mb: [{ mb: _() }],
                ml: [{ ml: _() }],
                'space-x': [{ 'space-x': d() }],
                'space-x-reverse': ['space-x-reverse'],
                'space-y': [{ 'space-y': d() }],
                'space-y-reverse': ['space-y-reverse'],
                size: [{ size: N() }],
                'inline-size': [{ inline: ['auto', ...re()] }],
                'min-inline-size': [{ 'min-inline': ['auto', ...re()] }],
                'max-inline-size': [{ 'max-inline': ['none', ...re()] }],
                'block-size': [{ block: ['auto', ...ne()] }],
                'min-block-size': [{ 'min-block': ['auto', ...ne()] }],
                'max-block-size': [{ 'max-block': ['none', ...ne()] }],
                w: [{ w: [p, 'screen', ...N()] }],
                'min-w': [{ 'min-w': [p, 'screen', 'none', ...N()] }],
                'max-w': [{ 'max-w': [p, 'screen', 'none', 'prose', { screen: [l] }, ...N()] }],
                h: [{ h: ['screen', 'lh', ...N()] }],
                'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...N()] }],
                'max-h': [{ 'max-h': ['screen', 'lh', ...N()] }],
                'font-size': [{ text: ['base', t, Y, O] }],
                'font-smoothing': ['antialiased', 'subpixel-antialiased'],
                'font-style': ['italic', 'not-italic'],
                'font-weight': [{ font: [r, bo, lo] }],
                'font-stretch': [
                    {
                        'font-stretch': [
                            'ultra-condensed',
                            'extra-condensed',
                            'condensed',
                            'semi-condensed',
                            'normal',
                            'semi-expanded',
                            'expanded',
                            'extra-expanded',
                            'ultra-expanded',
                            ce,
                            a,
                        ],
                    },
                ],
                'font-family': [{ font: [mo, co, o] }],
                'font-features': [{ 'font-features': [a] }],
                'fvn-normal': ['normal-nums'],
                'fvn-ordinal': ['ordinal'],
                'fvn-slashed-zero': ['slashed-zero'],
                'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
                tracking: [{ tracking: [s, i, a] }],
                'line-clamp': [{ 'line-clamp': [f, 'none', i, je] }],
                leading: [{ leading: [n, ...d()] }],
                'list-image': [{ 'list-image': ['none', i, a] }],
                'list-style-position': [{ list: ['inside', 'outside'] }],
                'list-style-type': [{ list: ['disc', 'decimal', 'none', i, a] }],
                'text-alignment': [
                    { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
                ],
                'placeholder-color': [{ placeholder: u() }],
                'text-color': [{ text: u() }],
                'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
                'text-decoration-style': [{ decoration: [...J(), 'wavy'] }],
                'text-decoration-thickness': [{ decoration: [f, 'from-font', 'auto', i, O] }],
                'text-decoration-color': [{ decoration: u() }],
                'underline-offset': [{ 'underline-offset': [f, 'auto', i, a] }],
                'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
                'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
                'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
                indent: [{ indent: d() }],
                'tab-size': [{ tab: [I, i, a] }],
                'vertical-align': [
                    {
                        align: [
                            'baseline',
                            'top',
                            'middle',
                            'bottom',
                            'text-top',
                            'text-bottom',
                            'sub',
                            'super',
                            i,
                            a,
                        ],
                    },
                ],
                whitespace: [
                    {
                        whitespace: [
                            'normal',
                            'nowrap',
                            'pre',
                            'pre-line',
                            'pre-wrap',
                            'break-spaces',
                        ],
                    },
                ],
                break: [{ break: ['normal', 'words', 'all', 'keep'] }],
                wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
                hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
                content: [{ content: ['none', i, a] }],
                'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
                'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
                'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
                'bg-position': [{ bg: ve() }],
                'bg-repeat': [{ bg: ye() }],
                'bg-size': [{ bg: ke() }],
                'bg-image': [
                    {
                        bg: [
                            'none',
                            {
                                linear: [
                                    { to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                                    I,
                                    i,
                                    a,
                                ],
                                radial: ['', i, a],
                                conic: [I, i, a],
                            },
                            fo,
                            uo,
                        ],
                    },
                ],
                'bg-color': [{ bg: u() }],
                'gradient-from-pos': [{ from: se() }],
                'gradient-via-pos': [{ via: se() }],
                'gradient-to-pos': [{ to: se() }],
                'gradient-from': [{ from: u() }],
                'gradient-via': [{ via: u() }],
                'gradient-to': [{ to: u() }],
                rounded: [{ rounded: z() }],
                'rounded-s': [{ 'rounded-s': z() }],
                'rounded-e': [{ 'rounded-e': z() }],
                'rounded-t': [{ 'rounded-t': z() }],
                'rounded-r': [{ 'rounded-r': z() }],
                'rounded-b': [{ 'rounded-b': z() }],
                'rounded-l': [{ 'rounded-l': z() }],
                'rounded-ss': [{ 'rounded-ss': z() }],
                'rounded-se': [{ 'rounded-se': z() }],
                'rounded-ee': [{ 'rounded-ee': z() }],
                'rounded-es': [{ 'rounded-es': z() }],
                'rounded-tl': [{ 'rounded-tl': z() }],
                'rounded-tr': [{ 'rounded-tr': z() }],
                'rounded-br': [{ 'rounded-br': z() }],
                'rounded-bl': [{ 'rounded-bl': z() }],
                'border-w': [{ border: S() }],
                'border-w-x': [{ 'border-x': S() }],
                'border-w-y': [{ 'border-y': S() }],
                'border-w-s': [{ 'border-s': S() }],
                'border-w-e': [{ 'border-e': S() }],
                'border-w-bs': [{ 'border-bs': S() }],
                'border-w-be': [{ 'border-be': S() }],
                'border-w-t': [{ 'border-t': S() }],
                'border-w-r': [{ 'border-r': S() }],
                'border-w-b': [{ 'border-b': S() }],
                'border-w-l': [{ 'border-l': S() }],
                'divide-x': [{ 'divide-x': S() }],
                'divide-x-reverse': ['divide-x-reverse'],
                'divide-y': [{ 'divide-y': S() }],
                'divide-y-reverse': ['divide-y-reverse'],
                'border-style': [{ border: [...J(), 'hidden', 'none'] }],
                'divide-style': [{ divide: [...J(), 'hidden', 'none'] }],
                'border-color': [{ border: u() }],
                'border-color-x': [{ 'border-x': u() }],
                'border-color-y': [{ 'border-y': u() }],
                'border-color-s': [{ 'border-s': u() }],
                'border-color-e': [{ 'border-e': u() }],
                'border-color-bs': [{ 'border-bs': u() }],
                'border-color-be': [{ 'border-be': u() }],
                'border-color-t': [{ 'border-t': u() }],
                'border-color-r': [{ 'border-r': u() }],
                'border-color-b': [{ 'border-b': u() }],
                'border-color-l': [{ 'border-l': u() }],
                'divide-color': [{ divide: u() }],
                'outline-style': [{ outline: [...J(), 'none', 'hidden'] }],
                'outline-offset': [{ 'outline-offset': [f, i, a] }],
                'outline-w': [{ outline: ['', f, Y, O] }],
                'outline-color': [{ outline: u() }],
                shadow: [{ shadow: ['', 'none', b, ee, K] }],
                'shadow-color': [{ shadow: u() }],
                'inset-shadow': [{ 'inset-shadow': ['none', g, ee, K] }],
                'inset-shadow-color': [{ 'inset-shadow': u() }],
                'ring-w': [{ ring: S() }],
                'ring-w-inset': ['ring-inset'],
                'ring-color': [{ ring: u() }],
                'ring-offset-w': [{ 'ring-offset': [f, O] }],
                'ring-offset-color': [{ 'ring-offset': u() }],
                'inset-ring-w': [{ 'inset-ring': S() }],
                'inset-ring-color': [{ 'inset-ring': u() }],
                'text-shadow': [{ 'text-shadow': ['none', k, ee, K] }],
                'text-shadow-color': [{ 'text-shadow': u() }],
                opacity: [{ opacity: [f, i, a] }],
                'mix-blend': [{ 'mix-blend': [...we(), 'plus-darker', 'plus-lighter'] }],
                'bg-blend': [{ 'bg-blend': we() }],
                'mask-clip': [
                    { 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
                    'mask-no-clip',
                ],
                'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
                'mask-image-linear-pos': [{ 'mask-linear': [f] }],
                'mask-image-linear-from-pos': [{ 'mask-linear-from': w() }],
                'mask-image-linear-to-pos': [{ 'mask-linear-to': w() }],
                'mask-image-linear-from-color': [{ 'mask-linear-from': u() }],
                'mask-image-linear-to-color': [{ 'mask-linear-to': u() }],
                'mask-image-t-from-pos': [{ 'mask-t-from': w() }],
                'mask-image-t-to-pos': [{ 'mask-t-to': w() }],
                'mask-image-t-from-color': [{ 'mask-t-from': u() }],
                'mask-image-t-to-color': [{ 'mask-t-to': u() }],
                'mask-image-r-from-pos': [{ 'mask-r-from': w() }],
                'mask-image-r-to-pos': [{ 'mask-r-to': w() }],
                'mask-image-r-from-color': [{ 'mask-r-from': u() }],
                'mask-image-r-to-color': [{ 'mask-r-to': u() }],
                'mask-image-b-from-pos': [{ 'mask-b-from': w() }],
                'mask-image-b-to-pos': [{ 'mask-b-to': w() }],
                'mask-image-b-from-color': [{ 'mask-b-from': u() }],
                'mask-image-b-to-color': [{ 'mask-b-to': u() }],
                'mask-image-l-from-pos': [{ 'mask-l-from': w() }],
                'mask-image-l-to-pos': [{ 'mask-l-to': w() }],
                'mask-image-l-from-color': [{ 'mask-l-from': u() }],
                'mask-image-l-to-color': [{ 'mask-l-to': u() }],
                'mask-image-x-from-pos': [{ 'mask-x-from': w() }],
                'mask-image-x-to-pos': [{ 'mask-x-to': w() }],
                'mask-image-x-from-color': [{ 'mask-x-from': u() }],
                'mask-image-x-to-color': [{ 'mask-x-to': u() }],
                'mask-image-y-from-pos': [{ 'mask-y-from': w() }],
                'mask-image-y-to-pos': [{ 'mask-y-to': w() }],
                'mask-image-y-from-color': [{ 'mask-y-from': u() }],
                'mask-image-y-to-color': [{ 'mask-y-to': u() }],
                'mask-image-radial': [{ 'mask-radial': [i, a] }],
                'mask-image-radial-from-pos': [{ 'mask-radial-from': w() }],
                'mask-image-radial-to-pos': [{ 'mask-radial-to': w() }],
                'mask-image-radial-from-color': [{ 'mask-radial-from': u() }],
                'mask-image-radial-to-color': [{ 'mask-radial-to': u() }],
                'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
                'mask-image-radial-size': [
                    {
                        'mask-radial': [
                            { closest: ['side', 'corner'], farthest: ['side', 'corner'] },
                        ],
                    },
                ],
                'mask-image-radial-pos': [{ 'mask-radial-at': W() }],
                'mask-image-conic-pos': [{ 'mask-conic': [f] }],
                'mask-image-conic-from-pos': [{ 'mask-conic-from': w() }],
                'mask-image-conic-to-pos': [{ 'mask-conic-to': w() }],
                'mask-image-conic-from-color': [{ 'mask-conic-from': u() }],
                'mask-image-conic-to-color': [{ 'mask-conic-to': u() }],
                'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
                'mask-origin': [
                    { 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
                ],
                'mask-position': [{ mask: ve() }],
                'mask-repeat': [{ mask: ye() }],
                'mask-size': [{ mask: ke() }],
                'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
                'mask-image': [{ mask: ['none', i, a] }],
                filter: [{ filter: ['', 'none', i, a] }],
                blur: [{ blur: Ce() }],
                brightness: [{ brightness: [f, i, a] }],
                contrast: [{ contrast: [f, i, a] }],
                'drop-shadow': [{ 'drop-shadow': ['', 'none', C, ee, K] }],
                'drop-shadow-color': [{ 'drop-shadow': u() }],
                grayscale: [{ grayscale: ['', f, i, a] }],
                'hue-rotate': [{ 'hue-rotate': [f, i, a] }],
                invert: [{ invert: ['', f, i, a] }],
                saturate: [{ saturate: [f, i, a] }],
                sepia: [{ sepia: ['', f, i, a] }],
                'backdrop-filter': [{ 'backdrop-filter': ['', 'none', i, a] }],
                'backdrop-blur': [{ 'backdrop-blur': Ce() }],
                'backdrop-brightness': [{ 'backdrop-brightness': [f, i, a] }],
                'backdrop-contrast': [{ 'backdrop-contrast': [f, i, a] }],
                'backdrop-grayscale': [{ 'backdrop-grayscale': ['', f, i, a] }],
                'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [f, i, a] }],
                'backdrop-invert': [{ 'backdrop-invert': ['', f, i, a] }],
                'backdrop-opacity': [{ 'backdrop-opacity': [f, i, a] }],
                'backdrop-saturate': [{ 'backdrop-saturate': [f, i, a] }],
                'backdrop-sepia': [{ 'backdrop-sepia': ['', f, i, a] }],
                'border-collapse': [{ border: ['collapse', 'separate'] }],
                'border-spacing': [{ 'border-spacing': d() }],
                'border-spacing-x': [{ 'border-spacing-x': d() }],
                'border-spacing-y': [{ 'border-spacing-y': d() }],
                'table-layout': [{ table: ['auto', 'fixed'] }],
                caption: [{ caption: ['top', 'bottom'] }],
                transition: [
                    {
                        transition: [
                            '',
                            'all',
                            'colors',
                            'opacity',
                            'shadow',
                            'transform',
                            'none',
                            i,
                            a,
                        ],
                    },
                ],
                'transition-behavior': [{ transition: ['normal', 'discrete'] }],
                duration: [{ duration: [f, 'initial', i, a] }],
                ease: [{ ease: ['linear', 'initial', M, i, a] }],
                delay: [{ delay: [f, i, a] }],
                animate: [{ animate: ['none', A, i, a] }],
                backface: [{ backface: ['hidden', 'visible'] }],
                perspective: [{ perspective: [h, i, a] }],
                'perspective-origin': [{ 'perspective-origin': $() }],
                rotate: [{ rotate: Z() }],
                'rotate-x': [{ 'rotate-x': Z() }],
                'rotate-y': [{ 'rotate-y': Z() }],
                'rotate-z': [{ 'rotate-z': Z() }],
                scale: [{ scale: H() }],
                'scale-x': [{ 'scale-x': H() }],
                'scale-y': [{ 'scale-y': H() }],
                'scale-z': [{ 'scale-z': H() }],
                'scale-3d': ['scale-3d'],
                skew: [{ skew: ae() }],
                'skew-x': [{ 'skew-x': ae() }],
                'skew-y': [{ 'skew-y': ae() }],
                transform: [{ transform: [i, a, '', 'none', 'gpu', 'cpu'] }],
                'transform-origin': [{ origin: $() }],
                'transform-style': [{ transform: ['3d', 'flat'] }],
                translate: [{ translate: X() }],
                'translate-x': [{ 'translate-x': X() }],
                'translate-y': [{ 'translate-y': X() }],
                'translate-z': [{ 'translate-z': X() }],
                'translate-none': ['translate-none'],
                zoom: [{ zoom: [I, i, a] }],
                accent: [{ accent: u() }],
                appearance: [{ appearance: ['none', 'auto'] }],
                'caret-color': [{ caret: u() }],
                'color-scheme': [
                    {
                        scheme: [
                            'normal',
                            'dark',
                            'light',
                            'light-dark',
                            'only-dark',
                            'only-light',
                        ],
                    },
                ],
                cursor: [
                    {
                        cursor: [
                            'auto',
                            'default',
                            'pointer',
                            'wait',
                            'text',
                            'move',
                            'help',
                            'not-allowed',
                            'none',
                            'context-menu',
                            'progress',
                            'cell',
                            'crosshair',
                            'vertical-text',
                            'alias',
                            'copy',
                            'no-drop',
                            'grab',
                            'grabbing',
                            'all-scroll',
                            'col-resize',
                            'row-resize',
                            'n-resize',
                            'e-resize',
                            's-resize',
                            'w-resize',
                            'ne-resize',
                            'nw-resize',
                            'se-resize',
                            'sw-resize',
                            'ew-resize',
                            'ns-resize',
                            'nesw-resize',
                            'nwse-resize',
                            'zoom-in',
                            'zoom-out',
                            i,
                            a,
                        ],
                    },
                ],
                'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
                'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
                resize: [{ resize: ['none', '', 'y', 'x'] }],
                'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
                'scrollbar-thumb-color': [{ 'scrollbar-thumb': u() }],
                'scrollbar-track-color': [{ 'scrollbar-track': u() }],
                'scrollbar-gutter': [{ 'scrollbar-gutter': ['auto', 'stable', 'both'] }],
                'scrollbar-w': [{ scrollbar: ['auto', 'thin', 'none'] }],
                'scroll-m': [{ 'scroll-m': d() }],
                'scroll-mx': [{ 'scroll-mx': d() }],
                'scroll-my': [{ 'scroll-my': d() }],
                'scroll-ms': [{ 'scroll-ms': d() }],
                'scroll-me': [{ 'scroll-me': d() }],
                'scroll-mbs': [{ 'scroll-mbs': d() }],
                'scroll-mbe': [{ 'scroll-mbe': d() }],
                'scroll-mt': [{ 'scroll-mt': d() }],
                'scroll-mr': [{ 'scroll-mr': d() }],
                'scroll-mb': [{ 'scroll-mb': d() }],
                'scroll-ml': [{ 'scroll-ml': d() }],
                'scroll-p': [{ 'scroll-p': d() }],
                'scroll-px': [{ 'scroll-px': d() }],
                'scroll-py': [{ 'scroll-py': d() }],
                'scroll-ps': [{ 'scroll-ps': d() }],
                'scroll-pe': [{ 'scroll-pe': d() }],
                'scroll-pbs': [{ 'scroll-pbs': d() }],
                'scroll-pbe': [{ 'scroll-pbe': d() }],
                'scroll-pt': [{ 'scroll-pt': d() }],
                'scroll-pr': [{ 'scroll-pr': d() }],
                'scroll-pb': [{ 'scroll-pb': d() }],
                'scroll-pl': [{ 'scroll-pl': d() }],
                'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
                'snap-stop': [{ snap: ['normal', 'always'] }],
                'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
                'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
                touch: [{ touch: ['auto', 'none', 'manipulation'] }],
                'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
                'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
                'touch-pz': ['touch-pinch-zoom'],
                select: [{ select: ['none', 'text', 'all', 'auto'] }],
                'will-change': [
                    { 'will-change': ['auto', 'scroll', 'contents', 'transform', i, a] },
                ],
                fill: [{ fill: ['none', ...u()] }],
                'stroke-w': [{ stroke: [f, Y, O, je] }],
                stroke: [{ stroke: ['none', ...u()] }],
                'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
            },
            conflictingClassGroups: {
                'container-named': ['container-type'],
                overflow: ['overflow-x', 'overflow-y'],
                overscroll: ['overscroll-x', 'overscroll-y'],
                inset: [
                    'inset-x',
                    'inset-y',
                    'inset-bs',
                    'inset-be',
                    'start',
                    'end',
                    'top',
                    'right',
                    'bottom',
                    'left',
                ],
                'inset-x': ['right', 'left'],
                'inset-y': ['top', 'bottom'],
                flex: ['basis', 'grow', 'shrink'],
                gap: ['gap-x', 'gap-y'],
                p: ['px', 'py', 'ps', 'pe', 'pbs', 'pbe', 'pt', 'pr', 'pb', 'pl'],
                px: ['pr', 'pl'],
                py: ['pt', 'pb'],
                m: ['mx', 'my', 'ms', 'me', 'mbs', 'mbe', 'mt', 'mr', 'mb', 'ml'],
                mx: ['mr', 'ml'],
                my: ['mt', 'mb'],
                size: ['w', 'h'],
                'font-size': ['leading'],
                'fvn-normal': [
                    'fvn-ordinal',
                    'fvn-slashed-zero',
                    'fvn-figure',
                    'fvn-spacing',
                    'fvn-fraction',
                ],
                'fvn-ordinal': ['fvn-normal'],
                'fvn-slashed-zero': ['fvn-normal'],
                'fvn-figure': ['fvn-normal'],
                'fvn-spacing': ['fvn-normal'],
                'fvn-fraction': ['fvn-normal'],
                'line-clamp': ['display', 'overflow'],
                rounded: [
                    'rounded-s',
                    'rounded-e',
                    'rounded-t',
                    'rounded-r',
                    'rounded-b',
                    'rounded-l',
                    'rounded-ss',
                    'rounded-se',
                    'rounded-ee',
                    'rounded-es',
                    'rounded-tl',
                    'rounded-tr',
                    'rounded-br',
                    'rounded-bl',
                ],
                'rounded-s': ['rounded-ss', 'rounded-es'],
                'rounded-e': ['rounded-se', 'rounded-ee'],
                'rounded-t': ['rounded-tl', 'rounded-tr'],
                'rounded-r': ['rounded-tr', 'rounded-br'],
                'rounded-b': ['rounded-br', 'rounded-bl'],
                'rounded-l': ['rounded-tl', 'rounded-bl'],
                'border-spacing': ['border-spacing-x', 'border-spacing-y'],
                'border-w': [
                    'border-w-x',
                    'border-w-y',
                    'border-w-s',
                    'border-w-e',
                    'border-w-bs',
                    'border-w-be',
                    'border-w-t',
                    'border-w-r',
                    'border-w-b',
                    'border-w-l',
                ],
                'border-w-x': ['border-w-r', 'border-w-l'],
                'border-w-y': ['border-w-t', 'border-w-b'],
                'border-color': [
                    'border-color-x',
                    'border-color-y',
                    'border-color-s',
                    'border-color-e',
                    'border-color-bs',
                    'border-color-be',
                    'border-color-t',
                    'border-color-r',
                    'border-color-b',
                    'border-color-l',
                ],
                'border-color-x': ['border-color-r', 'border-color-l'],
                'border-color-y': ['border-color-t', 'border-color-b'],
                translate: ['translate-x', 'translate-y', 'translate-none'],
                'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
                'scroll-m': [
                    'scroll-mx',
                    'scroll-my',
                    'scroll-ms',
                    'scroll-me',
                    'scroll-mbs',
                    'scroll-mbe',
                    'scroll-mt',
                    'scroll-mr',
                    'scroll-mb',
                    'scroll-ml',
                ],
                'scroll-mx': ['scroll-mr', 'scroll-ml'],
                'scroll-my': ['scroll-mt', 'scroll-mb'],
                'scroll-p': [
                    'scroll-px',
                    'scroll-py',
                    'scroll-ps',
                    'scroll-pe',
                    'scroll-pbs',
                    'scroll-pbe',
                    'scroll-pt',
                    'scroll-pr',
                    'scroll-pb',
                    'scroll-pl',
                ],
                'scroll-px': ['scroll-pr', 'scroll-pl'],
                'scroll-py': ['scroll-pt', 'scroll-pb'],
                touch: ['touch-x', 'touch-y', 'touch-pz'],
                'touch-x': ['touch'],
                'touch-y': ['touch'],
                'touch-pz': ['touch'],
            },
            conflictingClassGroupModifiers: { 'font-size': ['leading'] },
            postfixLookupClassGroups: ['container-type'],
            orderSensitiveModifiers: [
                '*',
                '**',
                'after',
                'backdrop',
                'before',
                'details-content',
                'file',
                'first-letter',
                'first-line',
                'marker',
                'placeholder',
                'selection',
            ],
        };
    },
    xo = Jt(ho);
function vo(...e) {
    return xo(Ne(e));
}
const yo = ht(
    "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary/80',
                outline:
                    'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
                ghost: 'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
                destructive:
                    'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default:
                    'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
                xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
                lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
                icon: 'size-8',
                'icon-xs':
                    "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
                'icon-sm':
                    'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
                'icon-lg': 'size-9',
            },
        },
        defaultVariants: { variant: 'default', size: 'default' },
    }
);
function Co({ className: e, variant: o = 'default', size: t = 'default', asChild: r = !1, ...s }) {
    const n = r ? kt : 'button';
    return dt.jsx(n, {
        'data-slot': 'button',
        'data-variant': o,
        'data-size': t,
        className: vo(yo({ variant: o, size: t, className: e })),
        ...s,
    });
}
export { Co as B, kt as S, Fe as a, wt as b, wo as c, vo as d, ht as e, dt as j, Ve as u };
