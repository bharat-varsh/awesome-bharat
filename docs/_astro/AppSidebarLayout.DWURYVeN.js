import {
    c as me,
    j as m,
    a as On,
    u as le,
    b as eo,
    d as j,
    B as Rn,
    S as An,
    e as to,
} from './button.CqHxb4Fq.js';
import { r as c, R as Ke } from './index.u1LLWZlj.js';
import { r as no } from './index.eFYi6fNk.js';
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ro = [
        ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' }],
        ['path', { d: 'M10 4v4', key: 'pp8u80' }],
        ['path', { d: 'M2 8h20', key: 'd11cs7' }],
        ['path', { d: 'M6 4v4', key: '1svtjw' }],
    ],
    oo = me('app-window', ro);
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const io = [
        ['path', { d: 'M10 12h4', key: 'a56b0p' }],
        ['path', { d: 'M10 8h4', key: '1sr2af' }],
        ['path', { d: 'M14 21v-3a2 2 0 0 0-4 0v3', key: '1rgiei' }],
        [
            'path',
            {
                d: 'M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2',
                key: 'secmi2',
            },
        ],
        ['path', { d: 'M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16', key: '16ra0t' }],
    ],
    ao = me('building-2', io);
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const so = [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        [
            'path',
            {
                d: 'm16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z',
                key: '9ktpf1',
            },
        ],
    ],
    co = me('compass', so);
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lo = [
        ['path', { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' }],
        [
            'path',
            {
                d: 'M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
                key: 'r6nss1',
            },
        ],
    ],
    Dn = me('house', lo);
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uo = [
        ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
        ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
    ],
    fo = me('panel-left', uo);
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const po = [
        ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
        ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744', key: '16gr8j' }],
        ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
        ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
    ],
    ho = me('users', po);
/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mo = [
        ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
        ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
    ],
    go = me('x', mo);
var jt = no(),
    vo = Object.defineProperty,
    bo = (e, t) => vo(e, 'name', { value: t, configurable: !0 }),
    xo = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'select',
        'span',
        'svg',
        'ul',
    ],
    U = xo.reduce((e, t) => {
        const n = On(`Primitive.${t}`),
            r = c.forwardRef((o, i) => {
                const { asChild: a, ...s } = o,
                    l = a ? n : t;
                return (
                    typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
                    m.jsx(l, { ...s, ref: i })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {});
function Tn(e, t) {
    e && jt.flushSync(() => e.dispatchEvent(t));
}
bo(Tn, 'dispatchDiscreteCustomEvent');
var wo = Object.defineProperty,
    yo = (e, t) => wo(e, 'name', { value: t, configurable: !0 }),
    Co = Object.freeze({
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
    }),
    Eo = c.forwardRef(
        yo(function (t, n) {
            return m.jsx(U.span, { ...t, ref: n, style: { ...Co, ...t.style } });
        }, 'VisuallyHidden')
    ),
    So = Object.defineProperty,
    K = (e, t) => So(e, 'name', { value: t, configurable: !0 });
function Po(e, t) {
    const n = c.createContext(t);
    n.displayName = e + 'Context';
    const r = K((i) => {
        const { children: a, ...s } = i,
            l = c.useMemo(() => s, Object.values(s));
        return m.jsx(n.Provider, { value: l, children: a });
    }, 'Provider');
    r.displayName = e + 'Provider';
    function o(i, a = {}) {
        const { optional: s = !1 } = a,
            l = c.useContext(n);
        if (l) return l;
        if (t !== void 0) return t;
        if (!s) throw new Error(`\`${i}\` must be used within \`${e}\``);
    }
    return (K(o, 'useContext'), [r, o]);
}
K(Po, 'createContext');
function Ge(e, t = []) {
    let n = [];
    function r(i, a) {
        const s = c.createContext(a);
        s.displayName = i + 'Context';
        const l = n.length;
        n = [...n, a];
        const d = K((u) => {
            const { scope: f, children: g, ...v } = u,
                h = f?.[e]?.[l] || s,
                b = c.useMemo(() => v, Object.values(v));
            return m.jsx(h.Provider, { value: b, children: g });
        }, 'Provider');
        d.displayName = i + 'Provider';
        function p(u, f, g = {}) {
            const { optional: v = !1 } = g,
                h = f?.[e]?.[l] || s,
                b = c.useContext(h);
            if (b) return b;
            if (a !== void 0) return a;
            if (!v) throw new Error(`\`${u}\` must be used within \`${i}\``);
        }
        return (K(p, 'useContext'), [d, p]);
    }
    K(r, 'createContext');
    const o = K(() => {
        const i = n.map((a) => c.createContext(a));
        return K(function (s) {
            const l = s?.[e] || i;
            return c.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]);
        }, 'useScope');
    }, 'createScope');
    return ((o.scopeName = e), [r, _n(o, ...t)]);
}
K(Ge, 'createContextScope');
function _n(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = K(() => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return K(function (i) {
            const a = r.reduce((s, { useScope: l, scopeName: d }) => {
                const u = l(i)[`__scope${d}`];
                return { ...s, ...u };
            }, {});
            return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
        }, 'useComposedScopes');
    }, 'createScope');
    return ((n.scopeName = t.scopeName), n);
}
K(_n, 'composeContextScopes');
var Oo = Object.defineProperty,
    Ee = (e, t) => Oo(e, 'name', { value: t, configurable: !0 }),
    jn = !!(typeof window < 'u' && window.document && window.document.createElement);
function z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return Ee(function (o) {
        if ((e?.(o), n === !1 || !o || !o.defaultPrevented)) return t?.(o);
    }, 'handleEvent');
}
Ee(z, 'composeEventHandlers');
function Ro(e) {
    if (!jn) throw new Error('Cannot access window outside of the DOM');
    return e?.ownerDocument?.defaultView ?? window;
}
Ee(Ro, 'getOwnerWindow');
function xt(e) {
    if (!jn) throw new Error('Cannot access document outside of the DOM');
    return e?.ownerDocument ?? document;
}
Ee(xt, 'getOwnerDocument');
function Nn(e, t = !1) {
    const { activeElement: n } = xt(e);
    if (!n?.nodeName) return null;
    if (Mn(n) && n.contentDocument) return Nn(n.contentDocument.body, t);
    if (t) {
        const r = n.getAttribute('aria-activedescendant');
        if (r) {
            const o = xt(n).getElementById(r);
            if (o) return o;
        }
    }
    return n;
}
Ee(Nn, 'getActiveElement');
function Mn(e) {
    return e.tagName === 'IFRAME';
}
Ee(Mn, 'isFrame');
var V = globalThis?.document ? c.useLayoutEffect : () => {},
    Ao = Object.defineProperty,
    Do = (e, t) => Ao(e, 'name', { value: t, configurable: !0 }),
    Qt = Ke[' useEffectEvent '.trim().toString()],
    Jt = Ke[' useInsertionEffect '.trim().toString()];
function kn(e) {
    if (typeof Qt == 'function') return Qt(e);
    const t = c.useRef(() => {
        throw new Error('Cannot call an event handler while rendering.');
    });
    return (
        typeof Jt == 'function'
            ? Jt(() => {
                  t.current = e;
              })
            : V(() => {
                  t.current = e;
              }),
        c.useMemo(
            () =>
                (...n) =>
                    t.current?.(...n),
            []
        )
    );
}
Do(kn, 'useEffectEvent');
var To = Object.defineProperty,
    _e = (e, t) => To(e, 'name', { value: t, configurable: !0 }),
    _o = Ke[' useInsertionEffect '.trim().toString()] || V;
function Nt({ prop: e, defaultProp: t, onChange: n = _e(() => {}, 'onChange'), caller: r }) {
    const [o, i, a] = Ln({ defaultProp: t, onChange: n }),
        s = e !== void 0,
        l = s ? e : o,
        d = c.useCallback(
            (p) => {
                if (s) {
                    const u = In(p) ? p(e) : p;
                    u !== e && a.current?.(u);
                } else i(p);
            },
            [s, e, i, a]
        );
    return [l, d];
}
_e(Nt, 'useControllableState');
function Ln({ defaultProp: e, onChange: t }) {
    const [n, r] = c.useState(e),
        o = c.useRef(n),
        i = c.useRef(t);
    return (
        _o(() => {
            i.current = t;
        }, [t]),
        c.useEffect(() => {
            o.current !== n && (i.current?.(n), (o.current = n));
        }, [n, o]),
        [n, r, i]
    );
}
_e(Ln, 'useUncontrolledState');
function In(e) {
    return typeof e == 'function';
}
_e(In, 'isFunction');
var en = Symbol('RADIX:SYNC_STATE');
function jo(e, t, n, r) {
    const { prop: o, defaultProp: i, onChange: a, caller: s } = t,
        l = o !== void 0,
        d = kn(a),
        p = [{ ...n, state: i }];
    r && p.push(r);
    const [u, f] = c.useReducer(
            (b, x) => {
                if (x.type === en) return { ...b, state: x.state };
                const w = e(b, x);
                return (l && !Object.is(w.state, b.state) && d(w.state), w);
            },
            ...p
        ),
        g = u.state,
        v = c.useRef(g);
    c.useEffect(() => {
        v.current !== g && ((v.current = g), l || d(g));
    }, [g, v, l]);
    const h = c.useMemo(() => (o !== void 0 ? { ...u, state: o } : u), [u, o]);
    return (
        c.useEffect(() => {
            l && !Object.is(o, u.state) && f({ type: en, state: o });
        }, [o, u.state, l]),
        [h, f]
    );
}
_e(jo, 'useControllableStateReducer');
var No = Object.defineProperty,
    oe = (e, t) => No(e, 'name', { value: t, configurable: !0 });
function Fn(e, t) {
    return c.useReducer((n, r) => t[n][r] ?? n, e);
}
oe(Fn, 'useStateMachine');
var je = oe((e) => {
    const { present: t, children: n } = e,
        r = $n(t),
        o = typeof n == 'function' ? n({ present: r.isPresent }) : c.Children.only(n),
        i = Wn(r.ref, Bn(o));
    return typeof n == 'function' || r.isPresent ? c.cloneElement(o, { ref: i }) : null;
}, 'Presence');
function $n(e) {
    const [t, n] = c.useState(),
        r = c.useRef(null),
        o = c.useRef(e),
        i = c.useRef('none'),
        a = c.useRef(void 0),
        s = e ? 'mounted' : 'unmounted',
        [l, d] = Fn(s, {
            mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
            unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
            unmounted: { MOUNT: 'mounted' },
        });
    return (
        c.useEffect(() => {
            l === 'mounted'
                ? ((i.current = a.current ?? we(r.current)), (a.current = void 0))
                : (i.current = 'none');
        }, [l]),
        V(() => {
            const p = r.current,
                u = o.current;
            if (u !== e) {
                const g = i.current,
                    v = we(p);
                (e
                    ? ((a.current = v), d('MOUNT'))
                    : v === 'none' || p?.display === 'none'
                      ? d('UNMOUNT')
                      : d(u && g !== v ? 'ANIMATION_OUT' : 'UNMOUNT'),
                    (o.current = e));
            }
        }, [e, d]),
        V(() => {
            if (t) {
                let p;
                const u = t.ownerDocument.defaultView ?? window,
                    f = oe((v) => {
                        const b = we(r.current).includes(CSS.escape(v.animationName));
                        if (v.target === t && b && (d('ANIMATION_END'), !o.current)) {
                            const x = t.style.animationFillMode;
                            ((t.style.animationFillMode = 'forwards'),
                                (p = u.setTimeout(() => {
                                    t.style.animationFillMode === 'forwards' &&
                                        (t.style.animationFillMode = x);
                                })));
                        }
                    }, 'handleAnimationEnd'),
                    g = oe((v) => {
                        v.target === t && (i.current = we(r.current));
                    }, 'handleAnimationStart');
                return (
                    t.addEventListener('animationstart', g),
                    t.addEventListener('animationcancel', f),
                    t.addEventListener('animationend', f),
                    () => {
                        (u.clearTimeout(p),
                            t.removeEventListener('animationstart', g),
                            t.removeEventListener('animationcancel', f),
                            t.removeEventListener('animationend', f));
                    }
                );
            } else d('ANIMATION_END');
        }, [t, d]),
        {
            isPresent: ['mounted', 'unmountSuspended'].includes(l),
            ref: c.useCallback((p) => {
                if (p) {
                    const u = getComputedStyle(p);
                    ((r.current = u), (a.current = we(u)));
                } else r.current = null;
                n(p);
            }, []),
        }
    );
}
oe($n, 'usePresence');
function wt(e, t) {
    if (typeof e == 'function') return e(t);
    e != null && (e.current = t);
}
oe(wt, 'setRef');
function Wn(...e) {
    const t = c.useRef(e);
    return (
        (t.current = e),
        c.useCallback((n) => {
            const r = t.current;
            let o = !1;
            const i = r.map((a) => {
                const s = wt(a, n);
                return (!o && typeof s == 'function' && (o = !0), s);
            });
            if (o)
                return () => {
                    for (let a = 0; a < i.length; a++) {
                        const s = i[a];
                        typeof s == 'function' ? s() : wt(r[a], null);
                    }
                };
        }, [])
    );
}
oe(Wn, 'useStableComposedRefs');
function we(e) {
    return e?.animationName || 'none';
}
oe(we, 'getAnimationName');
function Bn(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
        n = t && 'isReactWarning' in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
          (n = t && 'isReactWarning' in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
oe(Bn, 'getElementRef');
var Mo = Object.defineProperty,
    ko = (e, t) => Mo(e, 'name', { value: t, configurable: !0 }),
    Lo = Ke[' useId '.trim().toString()] || (() => {}),
    Io = 0;
function Oe(e) {
    const [t, n] = c.useState(Lo());
    return (
        V(() => {
            e || n((r) => r ?? String(Io++));
        }, [e]),
        e || (t ? `radix-${t}` : '')
    );
}
ko(Oe, 'useId');
var Fo = Object.defineProperty,
    $o = (e, t) => Fo(e, 'name', { value: t, configurable: !0 });
function fe(e) {
    const t = c.useRef(e);
    return (
        c.useEffect(() => {
            t.current = e;
        }),
        c.useMemo(
            () =>
                (...n) =>
                    t.current?.(...n),
            []
        )
    );
}
$o(fe, 'useCallbackRef');
var Wo = Object.defineProperty,
    F = (e, t) => Wo(e, 'name', { value: t, configurable: !0 }),
    yt = 'dismissableLayer.update',
    Bo = 'dismissableLayer.pointerDownOutside',
    zo = 'dismissableLayer.focusOutside',
    tn,
    zn = c.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
        dismissableSurfaces: new Set(),
    }),
    Hn = c.forwardRef(
        F(function (t, n) {
            const {
                    disableOutsidePointerEvents: r = !1,
                    deferPointerDownOutside: o = !1,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    onFocusOutside: s,
                    onInteractOutside: l,
                    onDismiss: d,
                    ...p
                } = t,
                u = c.useContext(zn),
                [f, g] = c.useState(null),
                v = f?.ownerDocument ?? globalThis?.document,
                [, h] = c.useState({}),
                b = le(n, g),
                x = Array.from(u.layers),
                [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
                y = w ? x.indexOf(w) : -1,
                C = f ? x.indexOf(f) : -1,
                E = u.layersWithOutsidePointerEventsDisabled.size > 0,
                S = C >= y,
                P = c.useRef(!1),
                D = Un(
                    (O) => {
                        (a?.(O), l?.(O), O.defaultPrevented || d?.());
                    },
                    {
                        ownerDocument: v,
                        deferPointerDownOutside: o,
                        isDeferredPointerDownOutsideRef: P,
                        dismissableSurfaces: u.dismissableSurfaces,
                        shouldHandlePointerDownOutside: c.useCallback(
                            (O) => {
                                if (!(O instanceof Node)) return !1;
                                const N = [...u.branches].some((_) => _.contains(O));
                                return S && !N;
                            },
                            [u.branches, S]
                        ),
                    }
                ),
                T = Yn((O) => {
                    if (o && P.current) return;
                    const N = O.target;
                    [...u.branches].some((W) => W.contains(N)) ||
                        (s?.(O), l?.(O), O.defaultPrevented || d?.());
                }, v),
                A = f ? C === x.length - 1 : !1,
                M = fe((O) => {
                    O.key === 'Escape' &&
                        (i?.(O), !O.defaultPrevented && d && (O.preventDefault(), d()));
                });
            return (
                c.useEffect(() => {
                    if (A)
                        return (
                            v.addEventListener('keydown', M, { capture: !0 }),
                            () => v.removeEventListener('keydown', M, { capture: !0 })
                        );
                }, [v, A, M]),
                c.useEffect(() => {
                    if (f)
                        return (
                            r &&
                                (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                    ((tn = v.body.style.pointerEvents),
                                    (v.body.style.pointerEvents = 'none')),
                                u.layersWithOutsidePointerEventsDisabled.add(f)),
                            u.layers.add(f),
                            Ct(),
                            () => {
                                r &&
                                    (u.layersWithOutsidePointerEventsDisabled.delete(f),
                                    u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                        (v.body.style.pointerEvents = tn));
                            }
                        );
                }, [f, v, r, u]),
                c.useEffect(
                    () => () => {
                        f &&
                            (u.layers.delete(f),
                            u.layersWithOutsidePointerEventsDisabled.delete(f),
                            Ct());
                    },
                    [f, u]
                ),
                c.useEffect(() => {
                    const O = F(() => h({}), 'handleUpdate');
                    return (
                        document.addEventListener(yt, O),
                        () => document.removeEventListener(yt, O)
                    );
                }, []),
                m.jsx(U.div, {
                    ...p,
                    ref: b,
                    style: { pointerEvents: E ? (S ? 'auto' : 'none') : void 0, ...t.style },
                    onFocusCapture: z(t.onFocusCapture, T.onFocusCapture),
                    onBlurCapture: z(t.onBlurCapture, T.onBlurCapture),
                    onPointerDownCapture: z(t.onPointerDownCapture, D.onPointerDownCapture),
                })
            );
        }, 'DismissableLayer')
    );
function Vn() {
    const e = c.useContext(zn),
        [t, n] = c.useState(null);
    return (
        c.useEffect(() => {
            if (t)
                return (
                    e.dismissableSurfaces.add(t),
                    () => {
                        e.dismissableSurfaces.delete(t);
                    }
                );
        }, [t, e.dismissableSurfaces]),
        n
    );
}
F(Vn, 'useDismissableLayerSurface');
var Ho = F(() => !0, 'IS_TRUE');
function Un(e, t) {
    const {
            ownerDocument: n = globalThis?.document,
            deferPointerDownOutside: r = !1,
            isDeferredPointerDownOutsideRef: o,
            dismissableSurfaces: i,
            shouldHandlePointerDownOutside: a = Ho,
        } = t,
        s = fe(e),
        l = c.useRef(!1),
        d = c.useRef(!1),
        p = c.useRef(new Map()),
        u = c.useRef(() => {});
    return (
        c.useEffect(() => {
            function f() {
                ((d.current = !1), (o.current = !1), p.current.clear());
            }
            F(f, 'resetOutsideInteraction');
            function g() {
                return Array.from(p.current.values()).some(Boolean);
            }
            F(g, 'isOutsideInteractionIntercepted');
            function v(y) {
                if (!d.current) return;
                const C = y.target;
                ((C instanceof Node && [...i].some((S) => S.contains(C))) ||
                    p.current.set(y.type, !0),
                    y.type === 'click' &&
                        window.setTimeout(() => {
                            d.current && u.current();
                        }, 0));
            }
            F(v, 'handleInteractionCapture');
            function h(y) {
                d.current && p.current.set(y.type, !1);
            }
            F(h, 'handleInteractionBubble');
            const b = F((y) => {
                    if (y.target && !l.current) {
                        let C = function () {
                            n.removeEventListener('click', u.current);
                            const S = g();
                            (f(), S || Mt(Bo, s, E, { discrete: !0 }));
                        };
                        if ((F(C, 'handleAndDispatchPointerDownOutsideEvent'), !a(y.target))) {
                            (n.removeEventListener('click', u.current), f(), (l.current = !1));
                            return;
                        }
                        const E = { originalEvent: y };
                        ((d.current = !0),
                            (o.current = r && y.button === 0),
                            p.current.clear(),
                            !r || y.button !== 0
                                ? C()
                                : (n.removeEventListener('click', u.current),
                                  (u.current = C),
                                  n.addEventListener('click', u.current, { once: !0 })));
                    } else (n.removeEventListener('click', u.current), f());
                    l.current = !1;
                }, 'handlePointerDown'),
                x = ['pointerup', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'];
            for (const y of x) (n.addEventListener(y, v, !0), n.addEventListener(y, h));
            const w = window.setTimeout(() => {
                n.addEventListener('pointerdown', b);
            }, 0);
            return () => {
                (window.clearTimeout(w),
                    n.removeEventListener('pointerdown', b),
                    n.removeEventListener('click', u.current));
                for (const y of x) (n.removeEventListener(y, v, !0), n.removeEventListener(y, h));
            };
        }, [n, s, r, o, i, a]),
        { onPointerDownCapture: F(() => (l.current = !0), 'onPointerDownCapture') }
    );
}
F(Un, 'usePointerDownOutside');
function Yn(e, t = globalThis?.document) {
    const n = fe(e),
        r = c.useRef(!1);
    return (
        c.useEffect(() => {
            const o = F((i) => {
                i.target && !r.current && Mt(zo, n, { originalEvent: i }, { discrete: !1 });
            }, 'handleFocus');
            return (t.addEventListener('focusin', o), () => t.removeEventListener('focusin', o));
        }, [t, n]),
        {
            onFocusCapture: F(() => (r.current = !0), 'onFocusCapture'),
            onBlurCapture: F(() => (r.current = !1), 'onBlurCapture'),
        }
    );
}
F(Yn, 'useFocusOutside');
function Ct() {
    const e = new CustomEvent(yt);
    document.dispatchEvent(e);
}
F(Ct, 'dispatchUpdate');
function Mt(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    (t && o.addEventListener(e, t, { once: !0 }), r ? Tn(o, i) : o.dispatchEvent(i));
}
F(Mt, 'handleAndDispatchCustomEvent');
var Vo = Object.defineProperty,
    $ = (e, t) => Vo(e, 'name', { value: t, configurable: !0 }),
    at = 'focusScope.autoFocusOnMount',
    st = 'focusScope.autoFocusOnUnmount',
    nn = { bubbles: !1, cancelable: !0 },
    Uo = c.forwardRef(
        $(function (t, n) {
            const {
                    loop: r = !1,
                    trapped: o = !1,
                    onMountAutoFocus: i,
                    onUnmountAutoFocus: a,
                    ...s
                } = t,
                [l, d] = c.useState(null),
                p = fe(i),
                u = fe(a),
                f = c.useRef(null),
                g = le(n, d),
                v = c.useRef({
                    paused: !1,
                    pause() {
                        this.paused = !0;
                    },
                    resume() {
                        this.paused = !1;
                    },
                }).current;
            (c.useEffect(() => {
                if (o) {
                    let b = function (C) {
                            if (v.paused || !l) return;
                            const E = C.target;
                            l.contains(E) ? (f.current = E) : ee(f.current, { select: !0 });
                        },
                        x = function (C) {
                            if (v.paused || !l) return;
                            const E = C.relatedTarget;
                            E !== null && (l.contains(E) || ee(f.current, { select: !0 }));
                        },
                        w = function (C) {
                            if (document.activeElement === document.body)
                                for (const S of C) S.removedNodes.length > 0 && ee(l);
                        };
                    ($(b, 'handleFocusIn'),
                        $(x, 'handleFocusOut'),
                        $(w, 'handleMutations'),
                        document.addEventListener('focusin', b),
                        document.addEventListener('focusout', x));
                    const y = new MutationObserver(w);
                    return (
                        l && y.observe(l, { childList: !0, subtree: !0 }),
                        () => {
                            (document.removeEventListener('focusin', b),
                                document.removeEventListener('focusout', x),
                                y.disconnect());
                        }
                    );
                }
            }, [o, l, v.paused]),
                c.useEffect(() => {
                    if (l) {
                        rn.add(v);
                        const b = document.activeElement;
                        if (!l.contains(b)) {
                            const w = new CustomEvent(at, nn);
                            (l.addEventListener(at, p),
                                l.dispatchEvent(w),
                                w.defaultPrevented ||
                                    (Xn(Qn(kt(l)), { select: !0 }),
                                    document.activeElement === b && ee(l)));
                        }
                        return () => {
                            (l.removeEventListener(at, p),
                                setTimeout(() => {
                                    const w = new CustomEvent(st, nn);
                                    (l.addEventListener(st, u),
                                        l.dispatchEvent(w),
                                        w.defaultPrevented ||
                                            ee(b ?? document.body, { select: !0 }),
                                        l.removeEventListener(st, u),
                                        rn.remove(v));
                                }, 0));
                        };
                    }
                }, [l, p, u, v]));
            const h = c.useCallback(
                (b) => {
                    if ((!r && !o) || v.paused) return;
                    const x = b.key === 'Tab' && !b.altKey && !b.ctrlKey && !b.metaKey,
                        w = document.activeElement;
                    if (x && w) {
                        const y = b.currentTarget,
                            [C, E] = Kn(y);
                        C && E
                            ? !b.shiftKey && w === E
                                ? (b.preventDefault(), r && ee(C, { select: !0 }))
                                : b.shiftKey &&
                                  w === C &&
                                  (b.preventDefault(), r && ee(E, { select: !0 }))
                            : w === y && b.preventDefault();
                    }
                },
                [r, o, v.paused]
            );
            return m.jsx(U.div, { tabIndex: -1, ...s, ref: g, onKeyDown: h });
        }, 'FocusScope')
    );
function Xn(e, { select: t = !1 } = {}) {
    const n = document.activeElement;
    for (const r of e) if ((ee(r, { select: t }), document.activeElement !== n)) return;
}
$(Xn, 'focusFirst');
function Kn(e) {
    const t = kt(e),
        n = Et(t, e),
        r = Et(t.reverse(), e);
    return [n, r];
}
$(Kn, 'getTabbableEdges');
function kt(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: $((r) => {
                const o = r.tagName === 'INPUT' && r.type === 'hidden';
                return r.disabled || r.hidden || o
                    ? NodeFilter.FILTER_SKIP
                    : r.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            }, 'acceptNode'),
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
$(kt, 'getTabbableCandidates');
function Et(e, t) {
    const n =
        typeof t.checkVisibility == 'function' && t.checkVisibility({ checkVisibilityCSS: !0 });
    for (const r of e)
        if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Gn(r, { upTo: t }))) return r;
}
$(Et, 'findVisible');
function Gn(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    for (; e; ) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === 'none') return !0;
        e = e.parentElement;
    }
    return !1;
}
$(Gn, 'isHidden');
function qn(e) {
    return e instanceof HTMLInputElement && 'select' in e;
}
$(qn, 'isSelectableInput');
function ee(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        (e.focus({ preventScroll: !0 }), e !== n && qn(e) && t && e.select());
    }
}
$(ee, 'focus');
var rn = Zn();
function Zn() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            (t !== n && n?.pause(), (e = St(e, t)), e.unshift(t));
        },
        remove(t) {
            ((e = St(e, t)), e[0]?.resume());
        },
    };
}
$(Zn, 'createFocusScopesStack');
function St(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return (r !== -1 && n.splice(r, 1), n);
}
$(St, 'arrayRemove');
function Qn(e) {
    return e.filter((t) => t.tagName !== 'A');
}
$(Qn, 'removeLinks');
var Yo = Object.defineProperty,
    Xo = (e, t) => Yo(e, 'name', { value: t, configurable: !0 }),
    Jn = c.forwardRef(
        Xo(function (t, n) {
            const { container: r, ...o } = t,
                [i, a] = c.useState(!1);
            V(() => a(!0), []);
            const s = r || (i && globalThis?.document?.body);
            return s ? jt.createPortal(m.jsx(U.div, { ...o, ref: n }), s) : null;
        }, 'Portal')
    ),
    Ko = Object.defineProperty,
    Lt = (e, t) => Ko(e, 'name', { value: t, configurable: !0 }),
    ke = 0,
    ge = null;
function Go(e) {
    return (It(), e.children);
}
Lt(Go, 'FocusGuards');
function It() {
    c.useEffect(() => {
        ge || (ge = { start: Pt(), end: Pt() });
        const { start: e, end: t } = ge;
        return (
            document.body.firstElementChild !== e &&
                document.body.insertAdjacentElement('afterbegin', e),
            document.body.lastElementChild !== t &&
                document.body.insertAdjacentElement('beforeend', t),
            ke++,
            () => {
                (ke === 1 && (ge?.start.remove(), ge?.end.remove(), (ge = null)),
                    (ke = Math.max(0, ke - 1)));
            }
        );
    }, []);
}
Lt(It, 'useFocusGuards');
function Pt() {
    const e = document.createElement('span');
    return (
        e.setAttribute('data-radix-focus-guard', ''),
        (e.tabIndex = 0),
        (e.style.outline = 'none'),
        (e.style.opacity = '0'),
        (e.style.position = 'fixed'),
        (e.style.pointerEvents = 'none'),
        e
    );
}
Lt(Pt, 'createFocusGuard');
var G = function () {
    return (
        (G =
            Object.assign ||
            function (t) {
                for (var n, r = 1, o = arguments.length; r < o; r++) {
                    n = arguments[r];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            }),
        G.apply(this, arguments)
    );
};
function er(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
    return n;
}
function qo(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
    return e.concat(i || Array.prototype.slice.call(t));
}
var Be = 'right-scroll-bar-position',
    ze = 'width-before-scroll-bar',
    Zo = 'with-scroll-bars-hidden',
    Qo = '--removed-body-scroll-bar-size';
function ct(e, t) {
    return (typeof e == 'function' ? e(t) : e && (e.current = t), e);
}
function Jo(e, t) {
    var n = c.useState(function () {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value;
                },
                set current(r) {
                    var o = n.value;
                    o !== r && ((n.value = r), n.callback(r, o));
                },
            },
        };
    })[0];
    return ((n.callback = t), n.facade);
}
var ei = typeof window < 'u' ? c.useLayoutEffect : c.useEffect,
    on = new WeakMap();
function ti(e, t) {
    var n = Jo(null, function (r) {
        return e.forEach(function (o) {
            return ct(o, r);
        });
    });
    return (
        ei(
            function () {
                var r = on.get(n);
                if (r) {
                    var o = new Set(r),
                        i = new Set(e),
                        a = n.current;
                    (o.forEach(function (s) {
                        i.has(s) || ct(s, null);
                    }),
                        i.forEach(function (s) {
                            o.has(s) || ct(s, a);
                        }));
                }
                on.set(n, e);
            },
            [e]
        ),
        n
    );
}
function ni(e) {
    return e;
}
function ri(e, t) {
    t === void 0 && (t = ni);
    var n = [],
        r = !1,
        o = {
            read: function () {
                if (r)
                    throw new Error(
                        'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                    );
                return n.length ? n[n.length - 1] : e;
            },
            useMedium: function (i) {
                var a = t(i, r);
                return (
                    n.push(a),
                    function () {
                        n = n.filter(function (s) {
                            return s !== a;
                        });
                    }
                );
            },
            assignSyncMedium: function (i) {
                for (r = !0; n.length; ) {
                    var a = n;
                    ((n = []), a.forEach(i));
                }
                n = {
                    push: function (s) {
                        return i(s);
                    },
                    filter: function () {
                        return n;
                    },
                };
            },
            assignMedium: function (i) {
                r = !0;
                var a = [];
                if (n.length) {
                    var s = n;
                    ((n = []), s.forEach(i), (a = n));
                }
                var l = function () {
                        var p = a;
                        ((a = []), p.forEach(i));
                    },
                    d = function () {
                        return Promise.resolve().then(l);
                    };
                (d(),
                    (n = {
                        push: function (p) {
                            (a.push(p), d());
                        },
                        filter: function (p) {
                            return ((a = a.filter(p)), n);
                        },
                    }));
            },
        };
    return o;
}
function oi(e) {
    e === void 0 && (e = {});
    var t = ri(null);
    return ((t.options = G({ async: !0, ssr: !1 }, e)), t);
}
var tr = function (e) {
    var t = e.sideCar,
        n = er(e, ['sideCar']);
    if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    var r = t.read();
    if (!r) throw new Error('Sidecar medium not found');
    return c.createElement(r, G({}, n));
};
tr.isSideCarExport = !0;
function ii(e, t) {
    return (e.useMedium(t), tr);
}
var nr = oi(),
    lt = function () {},
    qe = c.forwardRef(function (e, t) {
        var n = c.useRef(null),
            r = c.useState({ onScrollCapture: lt, onWheelCapture: lt, onTouchMoveCapture: lt }),
            o = r[0],
            i = r[1],
            a = e.forwardProps,
            s = e.children,
            l = e.className,
            d = e.removeScrollBar,
            p = e.enabled,
            u = e.shards,
            f = e.sideCar,
            g = e.noRelative,
            v = e.noIsolation,
            h = e.inert,
            b = e.allowPinchZoom,
            x = e.as,
            w = x === void 0 ? 'div' : x,
            y = e.gapMode,
            C = er(e, [
                'forwardProps',
                'children',
                'className',
                'removeScrollBar',
                'enabled',
                'shards',
                'sideCar',
                'noRelative',
                'noIsolation',
                'inert',
                'allowPinchZoom',
                'as',
                'gapMode',
            ]),
            E = f,
            S = ti([n, t]),
            P = G(G({}, C), o);
        return c.createElement(
            c.Fragment,
            null,
            p &&
                c.createElement(E, {
                    sideCar: nr,
                    removeScrollBar: d,
                    shards: u,
                    noRelative: g,
                    noIsolation: v,
                    inert: h,
                    setCallbacks: i,
                    allowPinchZoom: !!b,
                    lockRef: n,
                    gapMode: y,
                }),
            a
                ? c.cloneElement(c.Children.only(s), G(G({}, P), { ref: S }))
                : c.createElement(w, G({}, P, { className: l, ref: S }), s)
        );
    });
qe.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
qe.classNames = { fullWidth: ze, zeroRight: Be };
var ai = function () {
    if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function si() {
    if (!document) return null;
    var e = document.createElement('style');
    e.type = 'text/css';
    var t = ai();
    return (t && e.setAttribute('nonce', t), e);
}
function ci(e, t) {
    e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function li(e) {
    var t = document.head || document.getElementsByTagName('head')[0];
    t.appendChild(e);
}
var ui = function () {
        var e = 0,
            t = null;
        return {
            add: function (n) {
                (e == 0 && (t = si()) && (ci(t, n), li(t)), e++);
            },
            remove: function () {
                (e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
            },
        };
    },
    di = function () {
        var e = ui();
        return function (t, n) {
            c.useEffect(
                function () {
                    return (
                        e.add(t),
                        function () {
                            e.remove();
                        }
                    );
                },
                [t && n]
            );
        };
    },
    rr = function () {
        var e = di(),
            t = function (n) {
                var r = n.styles,
                    o = n.dynamic;
                return (e(r, o), null);
            };
        return t;
    },
    fi = { left: 0, top: 0, right: 0, gap: 0 },
    ut = function (e) {
        return parseInt(e || '', 10) || 0;
    },
    pi = function (e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
            r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
            o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
        return [ut(n), ut(r), ut(o)];
    },
    hi = function (e) {
        if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return fi;
        var t = pi(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
    },
    mi = rr(),
    ye = 'data-scroll-locked',
    gi = function (e, t, n, r) {
        var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
        return (
            n === void 0 && (n = 'margin'),
            `
  .`
                .concat(
                    Zo,
                    ` {
   overflow: hidden `
                )
                .concat(
                    r,
                    `;
   padding-right: `
                )
                .concat(s, 'px ')
                .concat(
                    r,
                    `;
  }
  body[`
                )
                .concat(
                    ye,
                    `] {
    overflow: hidden `
                )
                .concat(
                    r,
                    `;
    overscroll-behavior: contain;
    `
                )
                .concat(
                    [
                        t && 'position: relative '.concat(r, ';'),
                        n === 'margin' &&
                            `
    padding-left: `
                                .concat(
                                    o,
                                    `px;
    padding-top: `
                                )
                                .concat(
                                    i,
                                    `px;
    padding-right: `
                                )
                                .concat(
                                    a,
                                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                                )
                                .concat(s, 'px ')
                                .concat(
                                    r,
                                    `;
    `
                                ),
                        n === 'padding' && 'padding-right: '.concat(s, 'px ').concat(r, ';'),
                    ]
                        .filter(Boolean)
                        .join(''),
                    `
  }
  
  .`
                )
                .concat(
                    Be,
                    ` {
    right: `
                )
                .concat(s, 'px ')
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(
                    ze,
                    ` {
    margin-right: `
                )
                .concat(s, 'px ')
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(Be, ' .')
                .concat(
                    Be,
                    ` {
    right: 0 `
                )
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(ze, ' .')
                .concat(
                    ze,
                    ` {
    margin-right: 0 `
                )
                .concat(
                    r,
                    `;
  }
  
  body[`
                )
                .concat(
                    ye,
                    `] {
    `
                )
                .concat(Qo, ': ')
                .concat(
                    s,
                    `px;
  }
`
                )
        );
    },
    an = function () {
        var e = parseInt(document.body.getAttribute(ye) || '0', 10);
        return isFinite(e) ? e : 0;
    },
    vi = function () {
        c.useEffect(function () {
            return (
                document.body.setAttribute(ye, (an() + 1).toString()),
                function () {
                    var e = an() - 1;
                    e <= 0
                        ? document.body.removeAttribute(ye)
                        : document.body.setAttribute(ye, e.toString());
                }
            );
        }, []);
    },
    bi = function (e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? 'margin' : r;
        vi();
        var i = c.useMemo(
            function () {
                return hi(o);
            },
            [o]
        );
        return c.createElement(mi, { styles: gi(i, !t, o, n ? '' : '!important') });
    },
    Ot = !1;
if (typeof window < 'u')
    try {
        var Le = Object.defineProperty({}, 'passive', {
            get: function () {
                return ((Ot = !0), !0);
            },
        });
        (window.addEventListener('test', Le, Le), window.removeEventListener('test', Le, Le));
    } catch {
        Ot = !1;
    }
var ve = Ot ? { passive: !1 } : !1,
    xi = function (e) {
        return e.tagName === 'TEXTAREA';
    },
    or = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !xi(e) && n[t] === 'visible');
    },
    wi = function (e) {
        return or(e, 'overflowY');
    },
    yi = function (e) {
        return or(e, 'overflowX');
    },
    sn = function (e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
            var o = ir(e, r);
            if (o) {
                var i = ar(e, r),
                    a = i[1],
                    s = i[2];
                if (a > s) return !0;
            }
            r = r.parentNode;
        } while (r && r !== n.body);
        return !1;
    },
    Ci = function (e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r];
    },
    Ei = function (e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r];
    },
    ir = function (e, t) {
        return e === 'v' ? wi(t) : yi(t);
    },
    ar = function (e, t) {
        return e === 'v' ? Ci(t) : Ei(t);
    },
    Si = function (e, t) {
        return e === 'h' && t === 'rtl' ? -1 : 1;
    },
    Pi = function (e, t, n, r, o) {
        var i = Si(e, window.getComputedStyle(t).direction),
            a = i * r,
            s = n.target,
            l = t.contains(s),
            d = !1,
            p = a > 0,
            u = 0,
            f = 0;
        do {
            if (!s) break;
            var g = ar(e, s),
                v = g[0],
                h = g[1],
                b = g[2],
                x = h - b - i * v;
            (v || x) && ir(e, s) && ((u += x), (f += v));
            var w = s.parentNode;
            s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
        } while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)));
        return (((p && Math.abs(u) < 1) || (!p && Math.abs(f) < 1)) && (d = !0), d);
    },
    Ie = function (e) {
        return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
    },
    cn = function (e) {
        return [e.deltaX, e.deltaY];
    },
    ln = function (e) {
        return e && 'current' in e ? e.current : e;
    },
    Oi = function (e, t) {
        return e[0] === t[0] && e[1] === t[1];
    },
    Ri = function (e) {
        return `
  .block-interactivity-`
            .concat(
                e,
                ` {pointer-events: none;}
  .allow-interactivity-`
            )
            .concat(
                e,
                ` {pointer-events: all;}
`
            );
    },
    Ai = 0,
    be = [];
function Di(e) {
    var t = c.useRef([]),
        n = c.useRef([0, 0]),
        r = c.useRef(),
        o = c.useState(Ai++)[0],
        i = c.useState(rr)[0],
        a = c.useRef(e);
    (c.useEffect(
        function () {
            a.current = e;
        },
        [e]
    ),
        c.useEffect(
            function () {
                if (e.inert) {
                    document.body.classList.add('block-interactivity-'.concat(o));
                    var h = qo([e.lockRef.current], (e.shards || []).map(ln), !0).filter(Boolean);
                    return (
                        h.forEach(function (b) {
                            return b.classList.add('allow-interactivity-'.concat(o));
                        }),
                        function () {
                            (document.body.classList.remove('block-interactivity-'.concat(o)),
                                h.forEach(function (b) {
                                    return b.classList.remove('allow-interactivity-'.concat(o));
                                }));
                        }
                    );
                }
            },
            [e.inert, e.lockRef.current, e.shards]
        ));
    var s = c.useCallback(function (h, b) {
            if (('touches' in h && h.touches.length === 2) || (h.type === 'wheel' && h.ctrlKey))
                return !a.current.allowPinchZoom;
            var x = Ie(h),
                w = n.current,
                y = 'deltaX' in h ? h.deltaX : w[0] - x[0],
                C = 'deltaY' in h ? h.deltaY : w[1] - x[1],
                E,
                S = h.target,
                P = Math.abs(y) > Math.abs(C) ? 'h' : 'v';
            if ('touches' in h && P === 'h' && S.type === 'range') return !1;
            var D = window.getSelection(),
                T = D && D.anchorNode,
                A = T ? T === S || T.contains(S) : !1;
            if (A) return !1;
            var M = sn(P, S);
            if (!M) return !0;
            if ((M ? (E = P) : ((E = P === 'v' ? 'h' : 'v'), (M = sn(P, S))), !M)) return !1;
            if ((!r.current && 'changedTouches' in h && (y || C) && (r.current = E), !E)) return !0;
            var O = r.current || E;
            return Pi(O, b, h, O === 'h' ? y : C);
        }, []),
        l = c.useCallback(function (h) {
            var b = h;
            if (!(!be.length || be[be.length - 1] !== i)) {
                var x = 'deltaY' in b ? cn(b) : Ie(b),
                    w = t.current.filter(function (E) {
                        return (
                            E.name === b.type &&
                            (E.target === b.target || b.target === E.shadowParent) &&
                            Oi(E.delta, x)
                        );
                    })[0];
                if (w && w.should) {
                    b.cancelable && b.preventDefault();
                    return;
                }
                if (!w) {
                    var y = (a.current.shards || [])
                            .map(ln)
                            .filter(Boolean)
                            .filter(function (E) {
                                return E.contains(b.target);
                            }),
                        C = y.length > 0 ? s(b, y[0]) : !a.current.noIsolation;
                    C && b.cancelable && b.preventDefault();
                }
            }
        }, []),
        d = c.useCallback(function (h, b, x, w) {
            var y = { name: h, delta: b, target: x, should: w, shadowParent: Ti(x) };
            (t.current.push(y),
                setTimeout(function () {
                    t.current = t.current.filter(function (C) {
                        return C !== y;
                    });
                }, 1));
        }, []),
        p = c.useCallback(function (h) {
            ((n.current = Ie(h)), (r.current = void 0));
        }, []),
        u = c.useCallback(function (h) {
            d(h.type, cn(h), h.target, s(h, e.lockRef.current));
        }, []),
        f = c.useCallback(function (h) {
            d(h.type, Ie(h), h.target, s(h, e.lockRef.current));
        }, []);
    c.useEffect(function () {
        return (
            be.push(i),
            e.setCallbacks({ onScrollCapture: u, onWheelCapture: u, onTouchMoveCapture: f }),
            document.addEventListener('wheel', l, ve),
            document.addEventListener('touchmove', l, ve),
            document.addEventListener('touchstart', p, ve),
            function () {
                ((be = be.filter(function (h) {
                    return h !== i;
                })),
                    document.removeEventListener('wheel', l, ve),
                    document.removeEventListener('touchmove', l, ve),
                    document.removeEventListener('touchstart', p, ve));
            }
        );
    }, []);
    var g = e.removeScrollBar,
        v = e.inert;
    return c.createElement(
        c.Fragment,
        null,
        v ? c.createElement(i, { styles: Ri(o) }) : null,
        g ? c.createElement(bi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
    );
}
function Ti(e) {
    for (var t = null; e !== null; )
        (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
    return t;
}
const _i = ii(nr, Di);
var sr = c.forwardRef(function (e, t) {
    return c.createElement(qe, G({}, e, { ref: t, sideCar: _i }));
});
sr.classNames = qe.classNames;
var ji = function (e) {
        if (typeof document > 'u') return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body;
    },
    xe = new WeakMap(),
    Fe = new WeakMap(),
    $e = {},
    dt = 0,
    cr = function (e) {
        return e && (e.host || cr(e.parentNode));
    },
    Ni = function (e, t) {
        return t
            .map(function (n) {
                if (e.contains(n)) return n;
                var r = cr(n);
                return r && e.contains(r)
                    ? r
                    : (console.error(
                          'aria-hidden',
                          n,
                          'in not contained inside',
                          e,
                          '. Doing nothing'
                      ),
                      null);
            })
            .filter(function (n) {
                return !!n;
            });
    },
    Mi = function (e, t, n, r) {
        var o = Ni(t, Array.isArray(e) ? e : [e]);
        $e[n] || ($e[n] = new WeakMap());
        var i = $e[n],
            a = [],
            s = new Set(),
            l = new Set(o),
            d = function (u) {
                !u || s.has(u) || (s.add(u), d(u.parentNode));
            };
        o.forEach(d);
        var p = function (u) {
            !u ||
                l.has(u) ||
                Array.prototype.forEach.call(u.children, function (f) {
                    if (s.has(f)) p(f);
                    else
                        try {
                            var g = f.getAttribute(r),
                                v = g !== null && g !== 'false',
                                h = (xe.get(f) || 0) + 1,
                                b = (i.get(f) || 0) + 1;
                            (xe.set(f, h),
                                i.set(f, b),
                                a.push(f),
                                h === 1 && v && Fe.set(f, !0),
                                b === 1 && f.setAttribute(n, 'true'),
                                v || f.setAttribute(r, 'true'));
                        } catch (x) {
                            console.error('aria-hidden: cannot operate on ', f, x);
                        }
                });
        };
        return (
            p(t),
            s.clear(),
            dt++,
            function () {
                (a.forEach(function (u) {
                    var f = xe.get(u) - 1,
                        g = i.get(u) - 1;
                    (xe.set(u, f),
                        i.set(u, g),
                        f || (Fe.has(u) || u.removeAttribute(r), Fe.delete(u)),
                        g || u.removeAttribute(n));
                }),
                    dt--,
                    dt ||
                        ((xe = new WeakMap()),
                        (xe = new WeakMap()),
                        (Fe = new WeakMap()),
                        ($e = {})));
            }
        );
    },
    ki = function (e, t, n) {
        n === void 0 && (n = 'data-aria-hidden');
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = ji(e);
        return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live], script'))),
              Mi(r, o, n, 'aria-hidden'))
            : function () {
                  return null;
              };
    },
    Li = Object.defineProperty,
    Y = (e, t) => Li(e, 'name', { value: t, configurable: !0 }),
    Ft = 'Dialog',
    [lr, gc] = Ge(Ft),
    [Ii, J] = lr(Ft),
    Fi = Y((e) => {
        const {
                __scopeDialog: t,
                children: n,
                open: r,
                defaultOpen: o,
                onOpenChange: i,
                modal: a = !0,
            } = e,
            s = c.useRef(null),
            l = c.useRef(null),
            [d, p] = Nt({ prop: r, defaultProp: o ?? !1, onChange: i, caller: Ft }),
            [u, f] = c.useState(0),
            [g, v] = c.useState(0);
        return m.jsx(Ii, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: Oe(),
            titleId: Oe(),
            descriptionId: Oe(),
            titlePresent: u > 0,
            descriptionPresent: g > 0,
            setTitleCount: f,
            setDescriptionCount: v,
            open: d,
            onOpenChange: p,
            onOpenToggle: c.useCallback(() => p((h) => !h), [p]),
            modal: a,
            children: n,
        });
    }, 'Dialog'),
    ur = 'DialogPortal',
    [$i, dr] = lr(ur, { forceMount: void 0 }),
    Wi = Y((e) => {
        const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
            i = J(ur, t);
        return m.jsx($i, {
            scope: t,
            forceMount: n,
            children: c.Children.map(r, (a) =>
                m.jsx(je, {
                    present: n || i.open,
                    children: m.jsx(Jn, { asChild: !0, container: o, children: a }),
                })
            ),
        });
    }, 'DialogPortal'),
    Rt = 'DialogOverlay',
    Bi = c.forwardRef(
        Y(function (t, n) {
            const r = dr(Rt, t.__scopeDialog),
                { forceMount: o = r.forceMount, ...i } = t,
                a = J(Rt, t.__scopeDialog);
            return a.modal
                ? m.jsx(je, { present: o || a.open, children: m.jsx(Hi, { ...i, ref: n }) })
                : null;
        }, 'DialogOverlay')
    ),
    zi = On('DialogOverlay.RemoveScroll'),
    Hi = c.forwardRef(
        Y(function (t, n) {
            const { __scopeDialog: r, ...o } = t,
                i = J(Rt, r),
                a = Vn(),
                s = le(n, a);
            return m.jsx(sr, {
                as: zi,
                allowPinchZoom: !0,
                shards: [i.contentRef],
                children: m.jsx(U.div, {
                    'data-state': $t(i.open),
                    ...o,
                    ref: s,
                    style: { pointerEvents: 'auto', ...o.style },
                }),
            });
        }, 'DialogOverlayImpl')
    ),
    Re = 'DialogContent',
    Vi = c.forwardRef(
        Y(function (t, n) {
            const r = dr(Re, t.__scopeDialog),
                { forceMount: o = r.forceMount, ...i } = t,
                a = J(Re, t.__scopeDialog);
            return m.jsx(je, {
                present: o || a.open,
                children: a.modal ? m.jsx(Ui, { ...i, ref: n }) : m.jsx(Yi, { ...i, ref: n }),
            });
        }, 'DialogContent')
    ),
    Ui = c.forwardRef(
        Y(function (t, n) {
            const r = J(Re, t.__scopeDialog),
                o = c.useRef(null),
                i = le(n, r.contentRef, o);
            return (
                c.useEffect(() => {
                    const a = o.current;
                    if (a) return ki(a);
                }, []),
                m.jsx(fr, {
                    ...t,
                    ref: i,
                    trapFocus: r.open,
                    disableOutsidePointerEvents: r.open,
                    onCloseAutoFocus: z(t.onCloseAutoFocus, (a) => {
                        (a.preventDefault(), r.triggerRef.current?.focus());
                    }),
                    onPointerDownOutside: z(t.onPointerDownOutside, (a) => {
                        const s = a.detail.originalEvent,
                            l = s.button === 0 && s.ctrlKey === !0;
                        (s.button === 2 || l) && a.preventDefault();
                    }),
                    onFocusOutside: z(t.onFocusOutside, (a) => a.preventDefault()),
                })
            );
        }, 'DialogContentModal')
    ),
    Yi = c.forwardRef(
        Y(function (t, n) {
            const r = J(Re, t.__scopeDialog),
                o = c.useRef(!1),
                i = c.useRef(!1);
            return m.jsx(fr, {
                ...t,
                ref: n,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: (a) => {
                    (t.onCloseAutoFocus?.(a),
                        a.defaultPrevented ||
                            (o.current || r.triggerRef.current?.focus(), a.preventDefault()),
                        (o.current = !1),
                        (i.current = !1));
                },
                onInteractOutside: (a) => {
                    (t.onInteractOutside?.(a),
                        a.defaultPrevented ||
                            ((o.current = !0),
                            a.detail.originalEvent.type === 'pointerdown' && (i.current = !0)));
                    const s = a.target;
                    (r.triggerRef.current?.contains(s) && a.preventDefault(),
                        a.detail.originalEvent.type === 'focusin' &&
                            i.current &&
                            a.preventDefault());
                },
            });
        }, 'DialogContentNonModal')
    ),
    fr = c.forwardRef(
        Y(function (t, n) {
            const {
                    __scopeDialog: r,
                    trapFocus: o,
                    onOpenAutoFocus: i,
                    onCloseAutoFocus: a,
                    'aria-describedby': s,
                    ...l
                } = t,
                d = J(Re, r);
            return (
                It(),
                m.jsx(m.Fragment, {
                    children: m.jsx(Uo, {
                        asChild: !0,
                        loop: !0,
                        trapped: o,
                        onMountAutoFocus: i,
                        onUnmountAutoFocus: a,
                        children: m.jsx(Hn, {
                            role: 'dialog',
                            id: d.contentId,
                            'aria-labelledby': d.titlePresent ? d.titleId : void 0,
                            'aria-describedby': d.descriptionPresent ? pr(s, d.descriptionId) : s,
                            'data-state': $t(d.open),
                            ...l,
                            ref: n,
                            deferPointerDownOutside: !0,
                            onDismiss: () => d.onOpenChange(!1),
                        }),
                    }),
                })
            );
        }, 'DialogContentImpl')
    ),
    Xi = c.forwardRef(
        Y(function (t, n) {
            const { __scopeDialog: r, ...o } = t,
                i = J('DialogTitle', r),
                { setTitleCount: a } = i;
            return (
                V(() => (a((s) => s + 1), () => a((s) => s - 1)), [a]),
                m.jsx(U.h2, { id: i.titleId, ...o, ref: n })
            );
        }, 'DialogTitle')
    ),
    Ki = c.forwardRef(
        Y(function (t, n) {
            const { __scopeDialog: r, ...o } = t,
                i = J('DialogDescription', r),
                { setDescriptionCount: a } = i;
            return (
                V(() => (a((s) => s + 1), () => a((s) => s - 1)), [a]),
                m.jsx(U.p, { id: i.descriptionId, ...o, ref: n })
            );
        }, 'DialogDescription')
    ),
    Gi = 'DialogClose',
    qi = c.forwardRef(
        Y(function (t, n) {
            const { __scopeDialog: r, ...o } = t,
                i = J(Gi, r);
            return m.jsx(U.button, {
                type: 'button',
                ...o,
                ref: n,
                onClick: z(t.onClick, () => i.onOpenChange(!1)),
            });
        }, 'DialogClose')
    );
function pr(...e) {
    const t = new Set();
    for (const n of e)
        if (typeof n == 'string') for (const r of String(n).trim().split(/\s+/)) r && t.add(r);
    return t.size > 0 ? Array.from(t).join(' ') : void 0;
}
Y(pr, 'concatAriaDescribedby');
function $t(e) {
    return e ? 'open' : 'closed';
}
Y($t, 'getState');
var Zi = Object.defineProperty,
    Qi = (e, t) => Zi(e, 'name', { value: t, configurable: !0 });
function hr(e) {
    const [t, n] = c.useState(void 0);
    return (
        V(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const i = o[0];
                    let a, s;
                    if ('borderBoxSize' in i) {
                        const l = i.borderBoxSize,
                            d = Array.isArray(l) ? l[0] : l;
                        ((a = d.inlineSize), (s = d.blockSize));
                    } else ((a = e.offsetWidth), (s = e.offsetHeight));
                    n({ width: a, height: s });
                });
                return (r.observe(e, { box: 'border-box' }), () => r.unobserve(e));
            } else n(void 0);
        }, [e]),
        t
    );
}
Qi(hr, 'useSize');
const Ji = ['top', 'right', 'bottom', 'left'],
    se = Math.min,
    te = Math.max,
    Ve = Math.round,
    We = Math.floor,
    ne = (e) => ({ x: e, y: e }),
    ea = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function mr(e, t, n) {
    return te(e, se(t, n));
}
function ie(e, t) {
    return typeof e == 'function' ? e(t) : e;
}
function ce(e) {
    return e.split('-')[0];
}
function Se(e) {
    return e.split('-')[1];
}
function Wt(e) {
    return e === 'x' ? 'y' : 'x';
}
function Bt(e) {
    return e === 'y' ? 'height' : 'width';
}
function q(e) {
    const t = e[0];
    return t === 't' || t === 'b' ? 'y' : 'x';
}
function zt(e) {
    return Wt(q(e));
}
function ta(e, t, n) {
    n === void 0 && (n = !1);
    const r = Se(e),
        o = zt(e),
        i = Bt(o);
    let a =
        o === 'x'
            ? r === (n ? 'end' : 'start')
                ? 'right'
                : 'left'
            : r === 'start'
              ? 'bottom'
              : 'top';
    return (t.reference[i] > t.floating[i] && (a = Ue(a)), [a, Ue(a)]);
}
function na(e) {
    const t = Ue(e);
    return [At(e), t, At(t)];
}
function At(e) {
    return e.includes('start') ? e.replace('start', 'end') : e.replace('end', 'start');
}
const un = ['left', 'right'],
    dn = ['right', 'left'],
    ra = ['top', 'bottom'],
    oa = ['bottom', 'top'];
function ia(e, t, n) {
    switch (e) {
        case 'top':
        case 'bottom':
            return n ? (t ? dn : un) : t ? un : dn;
        case 'left':
        case 'right':
            return t ? ra : oa;
        default:
            return [];
    }
}
function aa(e, t, n, r) {
    const o = Se(e);
    let i = ia(ce(e), n === 'start', r);
    return (o && ((i = i.map((a) => a + '-' + o)), t && (i = i.concat(i.map(At)))), i);
}
function Ue(e) {
    const t = ce(e);
    return ea[t] + e.slice(t.length);
}
function sa(e) {
    var t, n, r, o;
    return {
        top: (t = e.top) != null ? t : 0,
        right: (n = e.right) != null ? n : 0,
        bottom: (r = e.bottom) != null ? r : 0,
        left: (o = e.left) != null ? o : 0,
    };
}
function gr(e) {
    return typeof e != 'number' ? sa(e) : { top: e, right: e, bottom: e, left: e };
}
function Ye(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function fn(e, t, n) {
    let { reference: r, floating: o } = e;
    const i = q(t),
        a = zt(t),
        s = Bt(a),
        l = ce(t),
        d = i === 'y',
        p = r.x + r.width / 2 - o.width / 2,
        u = r.y + r.height / 2 - o.height / 2,
        f = r[s] / 2 - o[s] / 2;
    let g;
    switch (l) {
        case 'top':
            g = { x: p, y: r.y - o.height };
            break;
        case 'bottom':
            g = { x: p, y: r.y + r.height };
            break;
        case 'right':
            g = { x: r.x + r.width, y: u };
            break;
        case 'left':
            g = { x: r.x - o.width, y: u };
            break;
        default:
            g = { x: r.x, y: r.y };
    }
    const v = Se(t);
    return (v && (g[a] += f * (v === 'end' ? 1 : -1) * (n && d ? -1 : 1)), g);
}
async function ca(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: a, elements: s, strategy: l } = e,
        {
            boundary: d = 'clippingAncestors',
            rootBoundary: p = 'viewport',
            elementContext: u = 'floating',
            altBoundary: f = !1,
            padding: g = 0,
        } = ie(t, e),
        v = gr(g),
        b = s[f ? (u === 'floating' ? 'reference' : 'floating') : u],
        x = Ye(
            await i.getClippingRect({
                element:
                    (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n
                        ? b
                        : b.contextElement ||
                          (await (i.getDocumentElement == null
                              ? void 0
                              : i.getDocumentElement(s.floating))),
                boundary: d,
                rootBoundary: p,
                strategy: l,
            })
        ),
        w =
            u === 'floating'
                ? { x: r, y: o, width: a.floating.width, height: a.floating.height }
                : a.reference,
        y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)),
        C = ((await (i.isElement == null ? void 0 : i.isElement(y))) &&
            (await (i.getScale == null ? void 0 : i.getScale(y)))) || { x: 1, y: 1 },
        E = Ye(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: s,
                      rect: w,
                      offsetParent: y,
                      strategy: l,
                  })
                : w
        );
    return {
        top: (x.top - E.top + v.top) / C.y,
        bottom: (E.bottom - x.bottom + v.bottom) / C.y,
        left: (x.left - E.left + v.left) / C.x,
        right: (E.right - x.right + v.right) / C.x,
    };
}
const la = 50,
    ua = async (e, t, n) => {
        const {
                placement: r = 'bottom',
                strategy: o = 'absolute',
                middleware: i = [],
                platform: a,
            } = n,
            s = a.detectOverflow ? a : { ...a, detectOverflow: ca },
            l = await (a.isRTL == null ? void 0 : a.isRTL(t));
        let d = await a.getElementRects({ reference: e, floating: t, strategy: o }),
            { x: p, y: u } = fn(d, r, l),
            f = r,
            g = 0;
        const v = {};
        for (let h = 0; h < i.length; h++) {
            const b = i[h];
            if (!b) continue;
            const { name: x, fn: w } = b,
                {
                    x: y,
                    y: C,
                    data: E,
                    reset: S,
                } = await w({
                    x: p,
                    y: u,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: v,
                    rects: d,
                    platform: s,
                    elements: { reference: e, floating: t },
                });
            ((p = y ?? p),
                (u = C ?? u),
                (v[x] = { ...v[x], ...E }),
                S &&
                    g < la &&
                    (g++,
                    typeof S == 'object' &&
                        (S.placement && (f = S.placement),
                        S.rects &&
                            (d =
                                S.rects === !0
                                    ? await a.getElementRects({
                                          reference: e,
                                          floating: t,
                                          strategy: o,
                                      })
                                    : S.rects),
                        ({ x: p, y: u } = fn(d, f, l))),
                    (h = -1)));
        }
        return { x: p, y: u, placement: f, strategy: o, middlewareData: v };
    },
    da = (e) => ({
        name: 'arrow',
        options: e,
        async fn(t) {
            const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    platform: a,
                    elements: s,
                    middlewareData: l,
                } = t,
                { element: d, padding: p = 0 } = ie(e, t) || {};
            if (d == null) return {};
            const u = gr(p),
                f = { x: n, y: r },
                g = zt(o),
                v = Bt(g),
                h = await a.getDimensions(d),
                b = g === 'y',
                x = b ? 'top' : 'left',
                w = b ? 'bottom' : 'right',
                y = b ? 'clientHeight' : 'clientWidth',
                C = i.reference[v] + i.reference[g] - f[g] - i.floating[v],
                E = f[g] - i.reference[g],
                S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
            let P = S ? S[y] : 0;
            (!P || !(await (a.isElement == null ? void 0 : a.isElement(S)))) &&
                (P = s.floating[y] || i.floating[v]);
            const D = C / 2 - E / 2,
                T = P / 2 - h[v] / 2 - 1,
                A = se(u[x], T),
                M = se(u[w], T),
                O = P - h[v] - M,
                N = P / 2 - h[v] / 2 + D,
                _ = mr(A, N, O),
                W =
                    !l.arrow &&
                    Se(o) != null &&
                    N !== _ &&
                    i.reference[v] / 2 - (N < A ? A : M) - h[v] / 2 < 0,
                k = W ? (N < A ? N - A : N - O) : 0;
            return {
                [g]: f[g] + k,
                data: { [g]: _, centerOffset: N - _ - k, ...(W && { alignmentOffset: k }) },
                reset: W,
            };
        },
    }),
    fa = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'flip',
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: o,
                            middlewareData: i,
                            rects: a,
                            initialPlacement: s,
                            platform: l,
                            elements: d,
                        } = t,
                        {
                            mainAxis: p = !0,
                            crossAxis: u = !0,
                            fallbackPlacements: f,
                            fallbackStrategy: g = 'bestFit',
                            fallbackAxisSideDirection: v = 'none',
                            flipAlignment: h = !0,
                            ...b
                        } = ie(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    const x = ce(o),
                        w = q(s),
                        y = ce(s) === s,
                        C = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)),
                        E = f || (y || !h ? [Ue(s)] : na(s)),
                        S = v !== 'none';
                    !f && S && E.push(...aa(s, h, v, C));
                    const P = [s, ...E],
                        D = await l.detectOverflow(t, b),
                        T = [];
                    let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                    if ((p && T.push(D[x]), u)) {
                        const _ = ta(o, a, C);
                        T.push(D[_[0]], D[_[1]]);
                    }
                    if (((A = [...A, { placement: o, overflows: T }]), !T.every((_) => _ <= 0))) {
                        var M, O;
                        const _ = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1,
                            W = P[_];
                        if (
                            W &&
                            (!(u === 'alignment' ? w !== q(W) : !1) ||
                                A.every((R) => (q(R.placement) === w ? R.overflows[0] > 0 : !0)))
                        )
                            return { data: { index: _, overflows: A }, reset: { placement: W } };
                        let k =
                            (O = A.filter((B) => B.overflows[0] <= 0).sort(
                                (B, R) => B.overflows[1] - R.overflows[1]
                            )[0]) == null
                                ? void 0
                                : O.placement;
                        if (!k)
                            switch (g) {
                                case 'bestFit': {
                                    var N;
                                    const B =
                                        (N = A.filter((R) => {
                                            if (S) {
                                                const L = q(R.placement);
                                                return L === w || L === 'y';
                                            }
                                            return !0;
                                        })
                                            .map((R) => [
                                                R.placement,
                                                R.overflows
                                                    .filter((L) => L > 0)
                                                    .reduce((L, X) => L + X, 0),
                                            ])
                                            .sort((R, L) => R[1] - L[1])[0]) == null
                                            ? void 0
                                            : N[0];
                                    B && (k = B);
                                    break;
                                }
                                case 'initialPlacement':
                                    k = s;
                                    break;
                            }
                        if (o !== k) return { reset: { placement: k } };
                    }
                    return {};
                },
            }
        );
    };
function pn(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
    };
}
function hn(e) {
    return Ji.some((t) => e[t] >= 0);
}
const pa = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'hide',
                options: e,
                async fn(t) {
                    const { rects: n, platform: r } = t,
                        { strategy: o = 'referenceHidden', ...i } = ie(e, t);
                    switch (o) {
                        case 'referenceHidden': {
                            const a = await r.detectOverflow(t, {
                                    ...i,
                                    elementContext: 'reference',
                                }),
                                s = pn(a, n.reference);
                            return { data: { referenceHiddenOffsets: s, referenceHidden: hn(s) } };
                        }
                        case 'escaped': {
                            const a = await r.detectOverflow(t, { ...i, altBoundary: !0 }),
                                s = pn(a, n.floating);
                            return { data: { escapedOffsets: s, escaped: hn(s) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    vr = new Set(['left', 'top']);
async function ha(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        a = ce(n),
        s = Se(n),
        l = q(n) === 'y',
        d = vr.has(a) ? -1 : 1,
        p = i && l ? -1 : 1,
        u = ie(t, e);
    let {
        mainAxis: f,
        crossAxis: g,
        alignmentAxis: v,
    } = typeof u == 'number'
        ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
        : {
              mainAxis: u.mainAxis || 0,
              crossAxis: u.crossAxis || 0,
              alignmentAxis: u.alignmentAxis,
          };
    return (
        s && typeof v == 'number' && (g = s === 'end' ? v * -1 : v),
        l ? { x: g * p, y: f * d } : { x: f * d, y: g * p }
    );
}
const ma = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: 'offset',
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: o, y: i, placement: a, middlewareData: s } = t,
                        l = await ha(t, e);
                    return a === ((n = s.offset) == null ? void 0 : n.placement) &&
                        (r = s.arrow) != null &&
                        r.alignmentOffset
                        ? {}
                        : { x: o + l.x, y: i + l.y, data: { ...l, placement: a } };
                },
            }
        );
    },
    ga = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'shift',
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: o, platform: i } = t,
                        {
                            mainAxis: a = !0,
                            crossAxis: s = !1,
                            limiter: l = {
                                fn: (w) => {
                                    let { x: y, y: C } = w;
                                    return { x: y, y: C };
                                },
                            },
                            ...d
                        } = ie(e, t),
                        p = { x: n, y: r },
                        u = await i.detectOverflow(t, d),
                        f = q(o),
                        g = Wt(f);
                    let v = p[g],
                        h = p[f];
                    const b = (w, y) =>
                        mr(
                            y + u[w === 'y' ? 'top' : 'left'],
                            y,
                            y - u[w === 'y' ? 'bottom' : 'right']
                        );
                    (a && (v = b(g, v)), s && (h = b(f, h)));
                    const x = l.fn({ ...t, [g]: v, [f]: h });
                    return { ...x, data: { x: x.x - n, y: x.y - r, enabled: { [g]: a, [f]: s } } };
                },
            }
        );
    },
    va = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    var n, r;
                    const { x: o, y: i, placement: a, rects: s, middlewareData: l } = t,
                        { offset: d = 0, mainAxis: p = !0, crossAxis: u = !0 } = ie(e, t),
                        f = { x: o, y: i },
                        g = q(a),
                        v = Wt(g);
                    let h = f[v],
                        b = f[g];
                    const x = ie(d, t),
                        w =
                            typeof x == 'number'
                                ? { mainAxis: x, crossAxis: 0 }
                                : {
                                      mainAxis: (n = x.mainAxis) != null ? n : 0,
                                      crossAxis: (r = x.crossAxis) != null ? r : 0,
                                  };
                    if (p) {
                        const E = v === 'y' ? 'height' : 'width',
                            S = s.reference[v] - s.floating[E] + w.mainAxis,
                            P = s.reference[v] + s.reference[E] - w.mainAxis;
                        h < S ? (h = S) : h > P && (h = P);
                    }
                    if (u) {
                        var y, C;
                        const E = v === 'y' ? 'width' : 'height',
                            S = vr.has(ce(a)),
                            P =
                                s.reference[g] -
                                s.floating[E] +
                                ((S && ((y = l.offset) == null ? void 0 : y[g])) || 0) +
                                (S ? 0 : w.crossAxis),
                            D =
                                s.reference[g] +
                                s.reference[E] +
                                (S ? 0 : ((C = l.offset) == null ? void 0 : C[g]) || 0) -
                                (S ? w.crossAxis : 0);
                        b < P ? (b = P) : b > D && (b = D);
                    }
                    return { [v]: h, [g]: b };
                },
            }
        );
    },
    ba = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'size',
                options: e,
                async fn(t) {
                    const { placement: n, rects: r, platform: o, elements: i } = t,
                        { apply: a = () => {}, ...s } = ie(e, t),
                        l = await o.detectOverflow(t, s),
                        d = ce(n),
                        p = Se(n),
                        u = q(n) === 'y',
                        { width: f, height: g } = r.floating;
                    let v, h;
                    d === 'top' || d === 'bottom'
                        ? ((v = d),
                          (h =
                              p ===
                              ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                                  ? 'start'
                                  : 'end')
                                  ? 'left'
                                  : 'right'))
                        : ((h = d), (v = p === 'end' ? 'top' : 'bottom'));
                    const b = g - l.top - l.bottom,
                        x = f - l.left - l.right,
                        w = se(g - l[v], b),
                        y = se(f - l[h], x),
                        C = t.middlewareData.shift,
                        E = !C;
                    let S = w,
                        P = y;
                    (C != null && C.enabled.x && (P = x),
                        C != null && C.enabled.y && (S = b),
                        E &&
                            !p &&
                            (u
                                ? (P = f - 2 * te(l.left, l.right))
                                : (S = g - 2 * te(l.top, l.bottom))),
                        await a({ ...t, availableWidth: P, availableHeight: S }));
                    const D = await o.getDimensions(i.floating);
                    return f !== D.width || g !== D.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function Ze() {
    return typeof window < 'u';
}
function Pe(e) {
    return br(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function H(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
    var t;
    return (t = (br(e) ? e.ownerDocument : e.document) || window.document) == null
        ? void 0
        : t.documentElement;
}
function br(e) {
    return Ze() ? e instanceof Node || e instanceof H(e).Node : !1;
}
function Z(e) {
    return Ze() ? e instanceof Element || e instanceof H(e).Element : !1;
}
function ue(e) {
    return Ze() ? e instanceof HTMLElement || e instanceof H(e).HTMLElement : !1;
}
function mn(e) {
    return !Ze() || typeof ShadowRoot > 'u'
        ? !1
        : e instanceof ShadowRoot || e instanceof H(e).ShadowRoot;
}
function Qe(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Q(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== 'inline' && o !== 'contents';
}
function xa(e) {
    return /^(table|td|th)$/.test(Pe(e));
}
function Je(e) {
    try {
        if (e.matches(':popover-open')) return !0;
    } catch {}
    try {
        return e.matches(':modal');
    } catch {
        return !1;
    }
}
const wa = /transform|translate|scale|rotate|perspective|filter/,
    ya = /paint|layout|strict|content/,
    de = (e) => !!e && e !== 'none';
let ft;
function Ht(e) {
    const t = Z(e) ? Q(e) : e;
    return (
        de(t.transform) ||
        de(t.translate) ||
        de(t.scale) ||
        de(t.rotate) ||
        de(t.perspective) ||
        (!Vt() && (de(t.backdropFilter) || de(t.filter))) ||
        wa.test(t.willChange || '') ||
        ya.test(t.contain || '')
    );
}
function Ca(e) {
    let t = pe(e);
    for (; ue(t) && !Ae(t); ) {
        if (Ht(t)) return t;
        if (Je(t)) return null;
        t = pe(t);
    }
    return null;
}
function Vt() {
    return (
        ft == null &&
            (ft =
                typeof CSS < 'u' &&
                CSS.supports &&
                CSS.supports('-webkit-backdrop-filter', 'none')),
        ft
    );
}
function Ae(e) {
    return /^(html|body|#document)$/.test(Pe(e));
}
function Q(e) {
    return H(e).getComputedStyle(e);
}
function et(e) {
    return Z(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function pe(e) {
    if (Pe(e) === 'html') return e;
    const t = e.assignedSlot || e.parentNode || (mn(e) && e.host) || ae(e);
    return mn(t) ? t.host : t;
}
function xr(e) {
    const t = pe(e);
    return Ae(t) ? (e.ownerDocument || e).body : ue(t) && Qe(t) ? t : xr(t);
}
function De(e, t, n) {
    var r;
    (t === void 0 && (t = []), n === void 0 && (n = !0));
    const o = xr(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        a = H(o);
    if (i) {
        const s = Dt(a);
        return t.concat(a, a.visualViewport || [], Qe(o) ? o : [], s && n ? De(s) : []);
    } else return t.concat(o, De(o, [], n));
}
function Dt(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function wr(e) {
    const t = Q(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = ue(e),
        i = o ? e.offsetWidth : n,
        a = o ? e.offsetHeight : r,
        s = Ve(n) !== i || Ve(r) !== a;
    return (s && ((n = i), (r = a)), { width: n, height: r, $: s });
}
function Ut(e) {
    return Z(e) ? e : e.contextElement;
}
function Ce(e) {
    const t = Ut(e);
    if (!ue(t)) return ne(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: i } = wr(t);
    let a = (i ? Ve(n.width) : n.width) / r,
        s = (i ? Ve(n.height) : n.height) / o;
    return (
        (!a || !Number.isFinite(a)) && (a = 1),
        (!s || !Number.isFinite(s)) && (s = 1),
        { x: a, y: s }
    );
}
const Ea = ne(0);
function yr(e) {
    const t = H(e);
    return !Vt() || !t.visualViewport
        ? Ea
        : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Sa(e, t, n) {
    return (t === void 0 && (t = !1), !!n && t && n === H(e));
}
function he(e, t, n, r) {
    (t === void 0 && (t = !1), n === void 0 && (n = !1));
    const o = e.getBoundingClientRect(),
        i = Ut(e);
    let a = ne(1);
    t && (r ? Z(r) && (a = Ce(r)) : (a = Ce(e)));
    const s = Sa(i, n, r) ? yr(i) : ne(0);
    let l = (o.left + s.x) / a.x,
        d = (o.top + s.y) / a.y,
        p = o.width / a.x,
        u = o.height / a.y;
    if (i && r) {
        const f = H(i),
            g = Z(r) ? H(r) : r;
        let v = f,
            h = Dt(v);
        for (; h && g !== v; ) {
            const b = Ce(h),
                x = h.getBoundingClientRect(),
                w = Q(h),
                y = x.left + (h.clientLeft + parseFloat(w.paddingLeft)) * b.x,
                C = x.top + (h.clientTop + parseFloat(w.paddingTop)) * b.y;
            ((l *= b.x),
                (d *= b.y),
                (p *= b.x),
                (u *= b.y),
                (l += y),
                (d += C),
                (v = H(h)),
                (h = Dt(v)));
        }
    }
    return Ye({ width: p, height: u, x: l, y: d });
}
function tt(e, t) {
    const n = et(e).scrollLeft;
    return t ? t.left + n : he(ae(e)).left + n;
}
function Cr(e, t) {
    const n = e.getBoundingClientRect(),
        r = n.left + t.scrollLeft - tt(e, n),
        o = n.top + t.scrollTop;
    return { x: r, y: o };
}
function Pa(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = o === 'fixed',
        a = ae(r),
        s = t ? Je(t.floating) : !1;
    if (r === a || (s && i)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
        d = ne(1);
    const p = ne(0),
        u = ue(r);
    if ((u || !i) && ((Pe(r) !== 'body' || Qe(a)) && (l = et(r)), u)) {
        const g = he(r);
        ((d = Ce(r)), (p.x = g.x + r.clientLeft), (p.y = g.y + r.clientTop));
    }
    const f = a && !u && !i ? Cr(a, l) : ne(0);
    return {
        width: n.width * d.x,
        height: n.height * d.y,
        x: n.x * d.x - l.scrollLeft * d.x + p.x + f.x,
        y: n.y * d.y - l.scrollTop * d.y + p.y + f.y,
    };
}
function Oa(e) {
    return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Ra(e) {
    const t = et(e),
        n = e.ownerDocument.body,
        r = te(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
        o = te(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
    let i = -t.scrollLeft + tt(e);
    const a = -t.scrollTop;
    return (
        Q(n).direction === 'rtl' && (i += te(e.clientWidth, n.clientWidth) - r),
        { width: r, height: o, x: i, y: a }
    );
}
const Aa = 25;
function Da(e, t, n) {
    n === void 0 && (n = 'viewport');
    const r = n === 'layoutViewport',
        o = H(e),
        i = ae(e),
        a = o.visualViewport;
    let s = i.clientWidth,
        l = i.clientHeight,
        d = 0,
        p = 0;
    if (a) {
        const f = !Vt() || t === 'fixed';
        r
            ? f || ((d = -a.offsetLeft), (p = -a.offsetTop))
            : ((s = a.width), (l = a.height), f && ((d = a.offsetLeft), (p = a.offsetTop)));
    }
    if (tt(i) <= 0) {
        const f = i.ownerDocument,
            g = f.body,
            v = getComputedStyle(g),
            h =
                (f.compatMode === 'CSS1Compat' &&
                    parseFloat(v.marginLeft) + parseFloat(v.marginRight)) ||
                0,
            b = Math.abs(i.clientWidth - g.clientWidth - h),
            x = getComputedStyle(i).scrollbarGutter === 'stable both-edges' ? b / 2 : b;
        x <= Aa && (s -= x);
    }
    return { width: s, height: l, x: d, y: p };
}
function Ta(e, t) {
    const n = he(e, !0, t === 'fixed'),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = Ce(e),
        a = e.clientWidth * i.x,
        s = e.clientHeight * i.y,
        l = o * i.x,
        d = r * i.y;
    return { width: a, height: s, x: l, y: d };
}
function gn(e, t, n) {
    let r;
    if (t === 'viewport' || t === 'layoutViewport') r = Da(e, n, t);
    else if (t === 'document') r = Ra(ae(e));
    else if (Z(t)) r = Ta(t, n);
    else {
        const o = yr(e);
        r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
    }
    return Ye(r);
}
function _a(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = De(e, [], !1).filter((s) => Z(s) && Pe(s) !== 'body'),
        o = null;
    const i = Q(e).position === 'fixed';
    let a = i ? pe(e) : e;
    for (; Z(a) && !Ae(a); ) {
        const s = Q(a),
            l = Ht(a),
            d = o ? o.position : i ? 'fixed' : '';
        (!l && (d === 'fixed' || (d === 'absolute' && s.position === 'static'))
            ? (r = r.filter((u) => u !== a))
            : (o = s),
            (a = pe(a)));
    }
    return (t.set(e, r), r);
}
function ja(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const a = [...(n === 'clippingAncestors' ? (Je(t) ? [] : _a(t, this._c)) : [].concat(n)), r],
        s = gn(t, a[0], o);
    let l = s.top,
        d = s.right,
        p = s.bottom,
        u = s.left;
    for (let f = 1; f < a.length; f++) {
        const g = gn(t, a[f], o);
        ((l = te(g.top, l)), (d = se(g.right, d)), (p = se(g.bottom, p)), (u = te(g.left, u)));
    }
    return { width: d - u, height: p - l, x: u, y: l };
}
function Na(e) {
    const { width: t, height: n } = wr(e);
    return { width: t, height: n };
}
function Ma(e, t, n) {
    const r = ue(t),
        o = ae(t),
        i = n === 'fixed',
        a = he(e, !0, i, t);
    let s = { scrollLeft: 0, scrollTop: 0 };
    const l = ne(0);
    if ((r || !i) && ((Pe(t) !== 'body' || Qe(o)) && (s = et(t)), r)) {
        const f = he(t, !0, i, t);
        ((l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop));
    }
    !r && o && (l.x = tt(o));
    const d = o && !r && !i ? Cr(o, s) : ne(0),
        p = a.left + s.scrollLeft - l.x - d.x,
        u = a.top + s.scrollTop - l.y - d.y;
    return { x: p, y: u, width: a.width, height: a.height };
}
function pt(e) {
    return Q(e).position === 'static';
}
function vn(e, t) {
    if (!ue(e) || Q(e).position === 'fixed') return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (ae(e) === n && (n = n.ownerDocument.body), n);
}
function Er(e, t) {
    const n = H(e);
    if (Je(e)) return n;
    if (!ue(e)) {
        let o = pe(e);
        for (; o && !Ae(o); ) {
            if (Z(o) && !pt(o)) return o;
            o = pe(o);
        }
        return n;
    }
    let r = vn(e, t);
    for (; r && xa(r) && pt(r); ) r = vn(r, t);
    return r && Ae(r) && pt(r) && !Ht(r) ? n : r || Ca(e) || n;
}
const ka = async function (e) {
    const t = this.getOffsetParent || Er,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: Ma(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function La(e) {
    return Q(e).direction === 'rtl';
}
const Ia = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Pa,
    getDocumentElement: ae,
    getClippingRect: ja,
    getOffsetParent: Er,
    getElementRects: ka,
    getClientRects: Oa,
    getDimensions: Na,
    getScale: Ce,
    isElement: Z,
    isRTL: La,
};
function Sr(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Fa(e, t, n) {
    let r = null,
        o;
    const i = ae(e);
    function a() {
        var p;
        (clearTimeout(o), (p = r) == null || p.disconnect(), (r = null));
    }
    function s(p, u) {
        (p === void 0 && (p = !1), u === void 0 && (u = 1), a());
        const f = e.getBoundingClientRect(),
            { left: g, top: v, width: h, height: b } = f;
        if ((p || t(), !h || !b)) return;
        const x = We(v),
            w = We(i.clientWidth - (g + h)),
            y = We(i.clientHeight - (v + b)),
            C = We(g),
            S = {
                rootMargin: -x + 'px ' + -w + 'px ' + -y + 'px ' + -C + 'px',
                threshold: te(0, se(1, u)) || 1,
            };
        let P = !0;
        function D(T) {
            const A = T[0].intersectionRatio;
            if (!Sr(f, e.getBoundingClientRect())) return s();
            if (A !== u) {
                if (!P) return s();
                A
                    ? s(!1, A)
                    : (o = setTimeout(() => {
                          s(!1, 1e-7);
                      }, 1e3));
            }
            P = !1;
        }
        try {
            r = new IntersectionObserver(D, { ...S, root: i.ownerDocument });
        } catch {
            r = new IntersectionObserver(D, S);
        }
        r.observe(e);
    }
    const l = H(e),
        d = () => s(n);
    return (
        l.addEventListener('resize', d),
        s(!0),
        () => {
            (l.removeEventListener('resize', d), a());
        }
    );
}
function $a(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: a = typeof ResizeObserver == 'function',
            layoutShift: s = typeof IntersectionObserver == 'function',
            animationFrame: l = !1,
        } = r,
        d = Ut(e),
        p = o || i ? [...(d ? De(d) : []), ...(t ? De(t) : [])] : [];
    p.forEach((x) => {
        (o && x.addEventListener('scroll', n), i && x.addEventListener('resize', n));
    });
    const u = d && s ? Fa(d, n, i) : null;
    let f = -1,
        g = null;
    a &&
        ((g = new ResizeObserver((x) => {
            let [w] = x;
            (w &&
                w.target === d &&
                g &&
                t &&
                (g.unobserve(t),
                cancelAnimationFrame(f),
                (f = requestAnimationFrame(() => {
                    var y;
                    (y = g) == null || y.observe(t);
                }))),
                n());
        })),
        d && !l && g.observe(d),
        t && g.observe(t));
    let v,
        h = l ? he(e) : null;
    l && b();
    function b() {
        const x = he(e);
        (h && !Sr(h, x) && n(), (h = x), (v = requestAnimationFrame(b)));
    }
    return (
        n(),
        () => {
            var x;
            (p.forEach((w) => {
                (o && w.removeEventListener('scroll', n), i && w.removeEventListener('resize', n));
            }),
                u?.(),
                (x = g) == null || x.disconnect(),
                (g = null),
                l && cancelAnimationFrame(v));
        }
    );
}
const Wa = ma,
    Ba = ga,
    za = fa,
    Ha = ba,
    Va = pa,
    bn = da,
    Ua = va,
    Ya = (e, t, n) => {
        const r = new Map(),
            o = n ?? {},
            i = { ...Ia, ...o.platform, _c: r };
        return ua(e, t, { ...o, platform: i });
    };
var Xa = typeof document < 'u',
    Ka = function () {},
    He = Xa ? c.useLayoutEffect : Ka;
function Xe(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == 'function' && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == 'object') {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!Xe(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === '_owner' && e.$$typeof) && !Xe(e[i], t[i])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function Pr(e) {
    return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xn(e, t) {
    const n = Pr(e);
    return Math.round(t * n) / n;
}
function ht(e) {
    const t = c.useRef(e);
    return (
        He(() => {
            t.current = e;
        }),
        t
    );
}
function Ga(e) {
    e === void 0 && (e = {});
    const {
            placement: t = 'bottom',
            strategy: n = 'absolute',
            middleware: r = [],
            platform: o,
            elements: { reference: i, floating: a } = {},
            transform: s = !0,
            whileElementsMounted: l,
            open: d,
        } = e,
        [p, u] = c.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
        }),
        [f, g] = c.useState(r);
    Xe(f, r) || g(r);
    const [v, h] = c.useState(null),
        [b, x] = c.useState(null),
        w = c.useCallback((R) => {
            R !== S.current && ((S.current = R), h(R));
        }, []),
        y = c.useCallback((R) => {
            R !== P.current && ((P.current = R), x(R));
        }, []),
        C = i || v,
        E = a || b,
        S = c.useRef(null),
        P = c.useRef(null),
        D = c.useRef(p),
        T = l != null,
        A = ht(l),
        M = ht(o),
        O = ht(d),
        N = c.useCallback(() => {
            if (!S.current || !P.current) return;
            const R = { placement: t, strategy: n, middleware: f };
            (M.current && (R.platform = M.current),
                Ya(S.current, P.current, R).then((L) => {
                    const X = { ...L, isPositioned: O.current !== !1 };
                    _.current &&
                        !Xe(D.current, X) &&
                        ((D.current = X),
                        jt.flushSync(() => {
                            u(X);
                        }));
                }));
        }, [f, t, n, M, O]);
    He(() => {
        d === !1 &&
            D.current.isPositioned &&
            ((D.current.isPositioned = !1), u((R) => ({ ...R, isPositioned: !1 })));
    }, [d]);
    const _ = c.useRef(!1);
    (He(
        () => (
            (_.current = !0),
            () => {
                _.current = !1;
            }
        ),
        []
    ),
        He(() => {
            if ((C && (S.current = C), E && (P.current = E), C && E)) {
                if (A.current) return A.current(C, E, N);
                N();
            }
        }, [C, E, N, A, T]));
    const W = c.useMemo(
            () => ({ reference: S, floating: P, setReference: w, setFloating: y }),
            [w, y]
        ),
        k = c.useMemo(() => ({ reference: C, floating: E }), [C, E]),
        B = c.useMemo(() => {
            const R = { position: n, left: 0, top: 0 };
            if (!k.floating) return R;
            const L = xn(k.floating, p.x),
                X = xn(k.floating, p.y);
            return s
                ? {
                      ...R,
                      transform: 'translate(' + L + 'px, ' + X + 'px)',
                      ...(Pr(k.floating) >= 1.5 && { willChange: 'transform' }),
                  }
                : { position: n, left: L, top: X };
        }, [n, s, k.floating, p.x, p.y]);
    return c.useMemo(
        () => ({ ...p, update: N, refs: W, elements: k, floatingStyles: B }),
        [p, N, W, k, B]
    );
}
const qa = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, 'current');
        }
        return {
            name: 'arrow',
            options: e,
            fn(n) {
                const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
                return r && t(r)
                    ? r.current != null
                        ? bn({ element: r.current, padding: o }).fn(n)
                        : {}
                    : r
                      ? bn({ element: r, padding: o }).fn(n)
                      : {};
            },
        };
    },
    Za = (e, t) => {
        const n = Wa(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    Qa = (e, t) => {
        const n = Ba(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    Ja = (e, t) => ({ fn: Ua(e).fn, options: [e, t] }),
    es = (e, t) => {
        const n = za(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    ts = (e, t) => {
        const n = Ha(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    ns = (e, t) => {
        const n = Va(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    rs = (e, t) => {
        const n = qa(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    };
var os = Object.defineProperty,
    is = (e, t) => os(e, 'name', { value: t, configurable: !0 }),
    as = c.forwardRef(
        is(function (t, n) {
            const { children: r, width: o = 10, height: i = 5, ...a } = t;
            return m.jsx(U.svg, {
                ...a,
                ref: n,
                width: o,
                height: i,
                viewBox: '0 0 30 10',
                preserveAspectRatio: 'none',
                children: t.asChild ? r : m.jsx('polygon', { points: '0,0 30,0 15,10' }),
            });
        }, 'Arrow')
    ),
    ss = Object.defineProperty,
    re = (e, t) => ss(e, 'name', { value: t, configurable: !0 }),
    Or = 'Popper',
    [Rr, Ar] = Ge(Or),
    [cs, Dr] = Rr(Or),
    ls = re((e) => {
        const { __scopePopper: t, children: n } = e,
            [r, o] = c.useState(null),
            [i, a] = c.useState(void 0);
        return m.jsx(cs, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            placementState: i,
            setPlacementState: a,
            children: n,
        });
    }, 'Popper'),
    us = 'PopperAnchor',
    ds = c.forwardRef(
        re(function (t, n) {
            const { __scopePopper: r, virtualRef: o, ...i } = t,
                a = Dr(us, r),
                s = c.useRef(null),
                l = a.onAnchorChange,
                d = c.useCallback(
                    (h) => {
                        ((s.current = h), h && l(h));
                    },
                    [l]
                ),
                p = le(n, d),
                u = c.useRef(null);
            c.useEffect(() => {
                if (!o) return;
                const h = u.current;
                ((u.current = o.current), h !== u.current && l(u.current));
            });
            const f = a.placementState && nt(a.placementState),
                g = f?.[0],
                v = f?.[1];
            return o
                ? null
                : m.jsx(U.div, {
                      'data-radix-popper-side': g,
                      'data-radix-popper-align': v,
                      ...i,
                      ref: p,
                  });
        }, 'PopperAnchor')
    ),
    Tr = 'PopperContent',
    [fs, ps] = Rr(Tr),
    hs = c.forwardRef(
        re(function (t, n) {
            const {
                    __scopePopper: r,
                    side: o = 'bottom',
                    sideOffset: i = 0,
                    align: a = 'center',
                    alignOffset: s = 0,
                    arrowPadding: l = 0,
                    avoidCollisions: d = !0,
                    collisionBoundary: p = [],
                    collisionPadding: u = 0,
                    sticky: f = 'partial',
                    hideWhenDetached: g = !1,
                    updatePositionStrategy: v = 'optimized',
                    onPlaced: h,
                    ...b
                } = t,
                x = Dr(Tr, r),
                [w, y] = c.useState(null),
                C = le(n, y),
                [E, S] = c.useState(null),
                P = hr(E),
                D = P?.width ?? 0,
                T = P?.height ?? 0,
                A = o + (a !== 'center' ? '-' + a : ''),
                M = typeof u == 'number' ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u },
                O = Array.isArray(p) ? p : [p],
                N = O.length > 0,
                _ = { padding: M, boundary: O.filter(_r), altBoundary: N },
                {
                    refs: W,
                    floatingStyles: k,
                    placement: B,
                    isPositioned: R,
                    middlewareData: L,
                } = Ga({
                    strategy: 'fixed',
                    placement: A,
                    whileElementsMounted: re(
                        (...it) => $a(...it, { animationFrame: v === 'always' }),
                        'whileElementsMounted'
                    ),
                    elements: { reference: x.anchor },
                    middleware: [
                        Za({ mainAxis: i + T, alignmentAxis: s }),
                        d &&
                            Qa({
                                mainAxis: !0,
                                crossAxis: !1,
                                limiter: f === 'partial' ? Ja() : void 0,
                                ..._,
                            }),
                        d && es({ ..._ }),
                        ts({
                            ..._,
                            apply: re(
                                ({
                                    elements: it,
                                    rects: Zt,
                                    availableWidth: qr,
                                    availableHeight: Zr,
                                }) => {
                                    const { width: Qr, height: Jr } = Zt.reference,
                                        Me = it.floating.style;
                                    (Me.setProperty('--radix-popper-available-width', `${qr}px`),
                                        Me.setProperty(
                                            '--radix-popper-available-height',
                                            `${Zr}px`
                                        ),
                                        Me.setProperty('--radix-popper-anchor-width', `${Qr}px`),
                                        Me.setProperty('--radix-popper-anchor-height', `${Jr}px`));
                                },
                                'apply'
                            ),
                        }),
                        E && rs({ element: E, padding: l }),
                        bs({ arrowWidth: D, arrowHeight: T }),
                        g &&
                            ns({
                                strategy: 'referenceHidden',
                                ..._,
                                boundary: N ? _.boundary : void 0,
                            }),
                    ],
                }),
                X = x.setPlacementState;
            V(
                () => (
                    X(B),
                    () => {
                        X(void 0);
                    }
                ),
                [B, X]
            );
            const [Kt, Gt] = nt(B),
                qt = fe(h);
            V(() => {
                R && qt?.();
            }, [R, qt]);
            const Ur = L.arrow?.x,
                Yr = L.arrow?.y,
                Xr = L.arrow?.centerOffset !== 0,
                [Kr, Gr] = c.useState();
            return (
                V(() => {
                    w && Gr(window.getComputedStyle(w).zIndex);
                }, [w]),
                m.jsx('div', {
                    ref: W.setFloating,
                    'data-radix-popper-content-wrapper': '',
                    style: {
                        ...k,
                        transform: R ? k.transform : 'translate(0, -200%)',
                        minWidth: 'max-content',
                        zIndex: Kr,
                        '--radix-popper-transform-origin': [
                            L.transformOrigin?.x,
                            L.transformOrigin?.y,
                        ].join(' '),
                        ...(L.hide?.referenceHidden && {
                            visibility: 'hidden',
                            pointerEvents: 'none',
                        }),
                    },
                    dir: t.dir,
                    children: m.jsx(fs, {
                        scope: r,
                        placedSide: Kt,
                        placedAlign: Gt,
                        onArrowChange: S,
                        arrowX: Ur,
                        arrowY: Yr,
                        shouldHideArrow: Xr,
                        children: m.jsx(U.div, {
                            'data-side': Kt,
                            'data-align': Gt,
                            ...b,
                            ref: C,
                            style: { ...b.style, animation: R ? b.style?.animation : 'none' },
                        }),
                    }),
                })
            );
        }, 'PopperContent')
    ),
    ms = 'PopperArrow',
    gs = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
    vs = c.forwardRef(
        re(function (t, n) {
            const { __scopePopper: r, ...o } = t,
                i = ps(ms, r),
                a = gs[i.placedSide];
            return m.jsx('span', {
                ref: i.onArrowChange,
                style: {
                    position: 'absolute',
                    left: i.arrowX,
                    top: i.arrowY,
                    [a]: 0,
                    transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
                        i.placedSide
                    ],
                    transform: {
                        top: 'translateY(100%)',
                        right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                        bottom: 'rotate(180deg)',
                        left: 'translateY(50%) rotate(-90deg) translateX(50%)',
                    }[i.placedSide],
                    visibility: i.shouldHideArrow ? 'hidden' : void 0,
                },
                children: m.jsx(as, { ...o, ref: n, style: { ...o.style, display: 'block' } }),
            });
        }, 'PopperArrow')
    );
function _r(e) {
    return e !== null;
}
re(_r, 'isNotNull');
var bs = re(
    (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
            const { placement: n, rects: r, middlewareData: o } = t,
                a = o.arrow?.centerOffset !== 0,
                s = a ? 0 : e.arrowWidth,
                l = a ? 0 : e.arrowHeight,
                [d, p] = nt(n),
                u = { start: '0%', center: '50%', end: '100%' }[p],
                f = (o.arrow?.x ?? 0) + s / 2,
                g = (o.arrow?.y ?? 0) + l / 2;
            let v = '',
                h = '';
            return (
                d === 'bottom'
                    ? ((v = a ? u : `${f}px`), (h = `${-l}px`))
                    : d === 'top'
                      ? ((v = a ? u : `${f}px`), (h = `${r.floating.height + l}px`))
                      : d === 'right'
                        ? ((v = `${-l}px`), (h = a ? u : `${g}px`))
                        : d === 'left' &&
                          ((v = `${r.floating.width + l}px`), (h = a ? u : `${g}px`)),
                { data: { x: v, y: h } }
            );
        },
    }),
    'transformOrigin'
);
function nt(e) {
    const [t, n = 'center'] = e.split('-');
    return [t, n];
}
re(nt, 'getSideAndAlignFromPlacement');
var xs = Object.defineProperty,
    jr = (e, t) => xs(e, 'name', { value: t, configurable: !0 }),
    wn = 'horizontal',
    ws = ['horizontal', 'vertical'],
    ys = c.forwardRef(
        jr(function (t, n) {
            const { decorative: r, orientation: o = wn, ...i } = t,
                a = Nr(o) ? o : wn,
                l = r
                    ? { role: 'none' }
                    : { 'aria-orientation': a === 'vertical' ? a : void 0, role: 'separator' };
            return m.jsx(U.div, { 'data-orientation': a, ...l, ...i, ref: n });
        }, 'Separator')
    );
function Nr(e) {
    return ws.includes(e);
}
jr(Nr, 'isValidOrientation');
var Cs = Object.defineProperty,
    I = (e, t) => Cs(e, 'name', { value: t, configurable: !0 }),
    [Yt, vc] = Ge('Tooltip', [Ar]),
    rt = Ar(),
    Es = 'TooltipProvider',
    Ss = 700,
    Tt = 'tooltip.open',
    [Ps, Xt] = Yt(Es),
    Os = I((e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = Ss,
                skipDelayDuration: r = 300,
                disableHoverableContent: o = !1,
                children: i,
            } = e,
            a = c.useRef(!0),
            s = c.useRef(!1),
            l = c.useRef(0);
        return (
            c.useEffect(() => {
                const d = l.current;
                return () => window.clearTimeout(d);
            }, []),
            m.jsx(Ps, {
                scope: t,
                isOpenDelayedRef: a,
                delayDuration: n,
                onOpen: c.useCallback(() => {
                    r <= 0 || (window.clearTimeout(l.current), (a.current = !1));
                }, [r]),
                onClose: c.useCallback(() => {
                    r <= 0 ||
                        (window.clearTimeout(l.current),
                        (l.current = window.setTimeout(() => (a.current = !0), r)));
                }, [r]),
                isPointerInTransitRef: s,
                onPointerInTransitChange: c.useCallback((d) => {
                    s.current = d;
                }, []),
                disableHoverableContent: o,
                children: i,
            })
        );
    }, 'TooltipProvider'),
    _t = 'Tooltip',
    [Rs, Ne] = Yt(_t),
    As = I((e) => {
        const {
                __scopeTooltip: t,
                children: n,
                open: r,
                defaultOpen: o,
                onOpenChange: i,
                disableHoverableContent: a,
                delayDuration: s,
            } = e,
            l = Xt(_t, e.__scopeTooltip),
            d = rt(t),
            [p, u] = c.useState(null),
            [f, g] = c.useState(void 0),
            v = Oe(),
            h = c.useRef(0),
            b = a ?? l.disableHoverableContent,
            x = s ?? l.delayDuration,
            w = c.useRef(!1),
            [y, C] = Nt({
                prop: r,
                defaultProp: o ?? !1,
                onChange: I((A) => {
                    (A ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Tt))) : l.onClose(),
                        i?.(A));
                }, 'onChange'),
                caller: _t,
            }),
            E = c.useMemo(
                () => (y ? (w.current ? 'delayed-open' : 'instant-open') : 'closed'),
                [y]
            ),
            S = c.useCallback(() => {
                (window.clearTimeout(h.current), (h.current = 0), (w.current = !1), C(!0));
            }, [C]),
            P = c.useCallback(() => {
                (window.clearTimeout(h.current), (h.current = 0), C(!1));
            }, [C]),
            D = c.useCallback(() => {
                (window.clearTimeout(h.current),
                    (h.current = window.setTimeout(() => {
                        ((w.current = !0), C(!0), (h.current = 0));
                    }, x)));
            }, [x, C]);
        c.useEffect(
            () => () => {
                h.current && (window.clearTimeout(h.current), (h.current = 0));
            },
            []
        );
        const T = f ?? v;
        return m.jsx(ls, {
            ...d,
            children: m.jsx(Rs, {
                scope: t,
                contentId: T,
                setContentId: g,
                open: y,
                stateAttribute: E,
                trigger: p,
                onTriggerChange: u,
                onTriggerEnter: c.useCallback(() => {
                    l.isOpenDelayedRef.current ? D() : S();
                }, [l.isOpenDelayedRef, D, S]),
                onTriggerLeave: c.useCallback(() => {
                    b ? P() : (window.clearTimeout(h.current), (h.current = 0));
                }, [P, b]),
                onOpen: S,
                onClose: P,
                disableHoverableContent: b,
                children: n,
            }),
        });
    }, 'Tooltip'),
    yn = 'TooltipTrigger',
    Ds = c.forwardRef(
        I(function (t, n) {
            const { __scopeTooltip: r, 'aria-describedby': o, ...i } = t,
                a = Ne(yn, r),
                s = Xt(yn, r),
                l = rt(r),
                d = c.useRef(null),
                p = le(n, d, a.onTriggerChange),
                u = c.useRef(!1),
                f = c.useRef(!1),
                g = c.useCallback(() => (u.current = !1), []);
            return (
                c.useEffect(() => () => document.removeEventListener('pointerup', g), [g]),
                m.jsx(ds, {
                    asChild: !0,
                    ...l,
                    children: m.jsx(U.button, {
                        'aria-describedby': a.open ? zr(o, a.contentId) : o,
                        'data-state': a.stateAttribute,
                        ...i,
                        ref: p,
                        onPointerMove: z(t.onPointerMove, (v) => {
                            v.pointerType !== 'touch' &&
                                !f.current &&
                                !s.isPointerInTransitRef.current &&
                                (a.onTriggerEnter(), (f.current = !0));
                        }),
                        onPointerLeave: z(t.onPointerLeave, () => {
                            (a.onTriggerLeave(), (f.current = !1));
                        }),
                        onPointerDown: z(t.onPointerDown, () => {
                            (a.open && a.onClose(),
                                (u.current = !0),
                                document.addEventListener('pointerup', g, { once: !0 }));
                        }),
                        onFocus: z(t.onFocus, () => {
                            u.current || a.onOpen();
                        }),
                        onBlur: z(t.onBlur, a.onClose),
                        onClick: z(t.onClick, a.onClose),
                    }),
                })
            );
        }, 'TooltipTrigger')
    ),
    Mr = 'TooltipPortal',
    [Ts, _s] = Yt(Mr, { forceMount: void 0 }),
    js = I((e) => {
        const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e,
            i = Ne(Mr, t);
        return m.jsx(Ts, {
            scope: t,
            forceMount: n,
            children: m.jsx(je, {
                present: n || i.open,
                children: m.jsx(Jn, { asChild: !0, container: o, children: r }),
            }),
        });
    }, 'TooltipPortal'),
    Te = 'TooltipContent',
    Ns = c.forwardRef(
        I(function (t, n) {
            const r = _s(Te, t.__scopeTooltip),
                { forceMount: o = r.forceMount, side: i = 'top', ...a } = t,
                s = Ne(Te, t.__scopeTooltip);
            return m.jsx(je, {
                present: o || s.open,
                children: s.disableHoverableContent
                    ? m.jsx(kr, { side: i, ...a, ref: n })
                    : m.jsx(Ms, { side: i, ...a, ref: n }),
            });
        }, 'TooltipContent')
    ),
    Ms = c.forwardRef(
        I(function (t, n) {
            const r = Ne(Te, t.__scopeTooltip),
                o = Xt(Te, t.__scopeTooltip),
                i = c.useRef(null),
                a = le(n, i),
                [s, l] = c.useState(null),
                { trigger: d, onClose: p } = r,
                u = i.current,
                { onPointerInTransitChange: f } = o,
                g = c.useCallback(() => {
                    (l(null), f(!1));
                }, [f]),
                v = c.useCallback(
                    (h, b) => {
                        const x = h.currentTarget,
                            w = { x: h.clientX, y: h.clientY },
                            y = Lr(w, x.getBoundingClientRect()),
                            C = Ir(w, y),
                            E = Fr(b.getBoundingClientRect()),
                            S = Wr([...C, ...E]);
                        (l(S), f(!0));
                    },
                    [f]
                );
            return (
                c.useEffect(() => () => g(), [g]),
                c.useEffect(() => {
                    if (d && u) {
                        const h = I((x) => v(x, u), 'handleTriggerLeave'),
                            b = I((x) => v(x, d), 'handleContentLeave');
                        return (
                            d.addEventListener('pointerleave', h),
                            u.addEventListener('pointerleave', b),
                            () => {
                                (d.removeEventListener('pointerleave', h),
                                    u.removeEventListener('pointerleave', b));
                            }
                        );
                    }
                }, [d, u, v, g]),
                c.useEffect(() => {
                    if (s) {
                        const h = I((b) => {
                            const x = b.target,
                                w = { x: b.clientX, y: b.clientY },
                                y = d?.contains(x) || u?.contains(x),
                                C = !$r(w, s);
                            y ? g() : C && (g(), p());
                        }, 'handleTrackPointerGrace');
                        return (
                            document.addEventListener('pointermove', h),
                            () => document.removeEventListener('pointermove', h)
                        );
                    }
                }, [d, u, s, p, g]),
                m.jsx(kr, { ...t, ref: a })
            );
        }, 'TooltipContentHoverable')
    ),
    ks = eo('TooltipContent'),
    kr = c.forwardRef(
        I(function (t, n) {
            const {
                    __scopeTooltip: r,
                    children: o,
                    'aria-label': i,
                    id: a,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: l,
                    ...d
                } = t,
                p = Ne(Te, r),
                u = rt(r),
                { onClose: f } = p;
            (c.useEffect(
                () => (document.addEventListener(Tt, f), () => document.removeEventListener(Tt, f)),
                [f]
            ),
                c.useEffect(() => {
                    if (p.trigger) {
                        const v = I((h) => {
                            h.target instanceof Node && h.target.contains(p.trigger) && f();
                        }, 'handleScroll');
                        return (
                            window.addEventListener('scroll', v, { capture: !0 }),
                            () => window.removeEventListener('scroll', v, { capture: !0 })
                        );
                    }
                }, [p.trigger, f]));
            const { setContentId: g } = p;
            return (
                V(
                    () => (
                        g(a),
                        () => {
                            g(void 0);
                        }
                    ),
                    [a, g]
                ),
                m.jsx(Hn, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: l,
                    onFocusOutside: (v) => v.preventDefault(),
                    onDismiss: f,
                    children: m.jsxs(hs, {
                        'data-state': p.stateAttribute,
                        role: i ? void 0 : 'tooltip',
                        id: i ? void 0 : p.contentId,
                        ...u,
                        ...d,
                        ref: n,
                        style: {
                            ...d.style,
                            '--radix-tooltip-content-transform-origin':
                                'var(--radix-popper-transform-origin)',
                            '--radix-tooltip-content-available-width':
                                'var(--radix-popper-available-width)',
                            '--radix-tooltip-content-available-height':
                                'var(--radix-popper-available-height)',
                            '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
                            '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
                        },
                        children: [
                            m.jsx(ks, { children: o }),
                            i ? m.jsx(Eo, { id: p.contentId, role: 'tooltip', children: i }) : null,
                        ],
                    }),
                })
            );
        }, 'TooltipContentImpl')
    ),
    Ls = c.forwardRef(
        I(function (t, n) {
            const { __scopeTooltip: r, ...o } = t,
                i = rt(r);
            return m.jsx(vs, { ...i, ...o, ref: n });
        }, 'TooltipArrow')
    );
function Lr(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return 'left';
        case o:
            return 'right';
        case n:
            return 'top';
        case r:
            return 'bottom';
        default:
            throw new Error('unreachable');
    }
}
I(Lr, 'getExitSideFromRect');
function Ir(e, t, n = 5) {
    const r = [];
    switch (t) {
        case 'top':
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case 'bottom':
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case 'left':
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case 'right':
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
I(Ir, 'getPaddedExitPoints');
function Fr(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r },
    ];
}
I(Fr, 'getPointsFromRect');
function $r(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
        const s = t[i],
            l = t[a],
            d = s.x,
            p = s.y,
            u = l.x,
            f = l.y;
        p > r != f > r && n < ((u - d) * (r - p)) / (f - p) + d && (o = !o);
    }
    return o;
}
I($r, 'isPointInPolygon');
function Wr(e) {
    const t = e.slice();
    return (
        t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)),
        Br(t)
    );
}
I(Wr, 'getHull');
function Br(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1],
                a = t[t.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1],
                a = n[n.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return (
        n.pop(),
        t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
    );
}
I(Br, 'getHullPresorted');
function zr(...e) {
    const t = new Set();
    for (const n of e)
        if (typeof n == 'string') for (const r of String(n).trim().split(/\s+/)) r && t.add(r);
    return t.size > 0 ? Array.from(t).join(' ') : void 0;
}
I(zr, 'concatAriaDescribedby');
const mt = 768;
function Is() {
    const [e, t] = c.useState(void 0);
    return (
        c.useEffect(() => {
            const n = window.matchMedia(`(max-width: ${mt - 1}px)`),
                r = () => {
                    t(window.innerWidth < mt);
                };
            return (
                n.addEventListener('change', r),
                t(window.innerWidth < mt),
                () => n.removeEventListener('change', r)
            );
        }, []),
        !!e
    );
}
function Hr({ className: e, orientation: t = 'horizontal', decorative: n = !0, ...r }) {
    return m.jsx(ys, {
        'data-slot': 'separator',
        decorative: n,
        orientation: t,
        className: j(
            'shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch',
            e
        ),
        ...r,
    });
}
function Fs({ ...e }) {
    return m.jsx(Fi, { 'data-slot': 'sheet', ...e });
}
function $s({ ...e }) {
    return m.jsx(Wi, { 'data-slot': 'sheet-portal', ...e });
}
function Ws({ className: e, ...t }) {
    return m.jsx(Bi, {
        'data-slot': 'sheet-overlay',
        className: j(
            'fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0',
            e
        ),
        ...t,
    });
}
function Bs({ className: e, children: t, side: n = 'right', showCloseButton: r = !0, ...o }) {
    return m.jsxs($s, {
        children: [
            m.jsx(Ws, {}),
            m.jsxs(Vi, {
                'data-slot': 'sheet-content',
                'data-side': n,
                className: j(
                    'fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10',
                    e
                ),
                ...o,
                children: [
                    t,
                    r &&
                        m.jsx(qi, {
                            'data-slot': 'sheet-close',
                            asChild: !0,
                            children: m.jsxs(Rn, {
                                variant: 'ghost',
                                className: 'absolute top-3 right-3',
                                size: 'icon-sm',
                                children: [
                                    m.jsx(go, {}),
                                    m.jsx('span', { className: 'sr-only', children: 'Close' }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
function zs({ className: e, ...t }) {
    return m.jsx('div', {
        'data-slot': 'sheet-header',
        className: j('flex flex-col gap-0.5 p-4', e),
        ...t,
    });
}
function Hs({ className: e, ...t }) {
    return m.jsx(Xi, {
        'data-slot': 'sheet-title',
        className: j('text-base font-medium text-foreground', e),
        ...t,
    });
}
function Vs({ className: e, ...t }) {
    return m.jsx(Ki, {
        'data-slot': 'sheet-description',
        className: j('text-sm text-muted-foreground', e),
        ...t,
    });
}
function Us({ delayDuration: e = 0, ...t }) {
    return m.jsx(Os, { 'data-slot': 'tooltip-provider', delayDuration: e, ...t });
}
function Ys({ ...e }) {
    return m.jsx(As, { 'data-slot': 'tooltip', ...e });
}
function Xs({ ...e }) {
    return m.jsx(Ds, { 'data-slot': 'tooltip-trigger', ...e });
}
function Ks({ className: e, sideOffset: t = 0, children: n, ...r }) {
    return m.jsx(js, {
        children: m.jsxs(Ns, {
            'data-slot': 'tooltip-content',
            sideOffset: t,
            className: j(
                'z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
                e
            ),
            ...r,
            children: [
                n,
                m.jsx(Ls, {
                    className:
                        'z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground',
                }),
            ],
        }),
    });
}
const Gs = 'sidebar_state',
    qs = 3600 * 24 * 7,
    Zs = '16rem',
    Qs = '18rem',
    Js = '3rem',
    ec = 'b',
    Vr = c.createContext(null);
function ot() {
    const e = c.useContext(Vr);
    if (!e) throw new Error('useSidebar must be used within a SidebarProvider.');
    return e;
}
function tc({
    defaultOpen: e = !0,
    open: t,
    onOpenChange: n,
    className: r,
    style: o,
    children: i,
    ...a
}) {
    const s = Is(),
        [l, d] = c.useState(!1),
        [p, u] = c.useState(e),
        f = t ?? p,
        g = c.useCallback(
            (x) => {
                const w = typeof x == 'function' ? x(f) : x;
                (n ? n(w) : u(w), (document.cookie = `${Gs}=${w}; path=/; max-age=${qs}`));
            },
            [n, f]
        ),
        v = c.useCallback(() => (s ? d((x) => !x) : g((x) => !x)), [s, g, d]);
    c.useEffect(() => {
        const x = (w) => {
            w.key === ec && (w.metaKey || w.ctrlKey) && (w.preventDefault(), v());
        };
        return (
            window.addEventListener('keydown', x),
            () => window.removeEventListener('keydown', x)
        );
    }, [v]);
    const h = f ? 'expanded' : 'collapsed',
        b = c.useMemo(
            () => ({
                state: h,
                open: f,
                setOpen: g,
                isMobile: s,
                openMobile: l,
                setOpenMobile: d,
                toggleSidebar: v,
            }),
            [h, f, g, s, l, d, v]
        );
    return m.jsx(Vr.Provider, {
        value: b,
        children: m.jsx('div', {
            'data-slot': 'sidebar-wrapper',
            style: { '--sidebar-width': Zs, '--sidebar-width-icon': Js, ...o },
            className: j(
                'group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar',
                r
            ),
            ...a,
            children: i,
        }),
    });
}
function nc({
    side: e = 'left',
    variant: t = 'sidebar',
    collapsible: n = 'offcanvas',
    className: r,
    children: o,
    dir: i,
    ...a
}) {
    const { isMobile: s, state: l, openMobile: d, setOpenMobile: p } = ot();
    return n === 'none'
        ? m.jsx('div', {
              'data-slot': 'sidebar',
              className: j(
                  'flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground',
                  r
              ),
              ...a,
              children: o,
          })
        : s
          ? m.jsx(Fs, {
                open: d,
                onOpenChange: p,
                ...a,
                children: m.jsxs(Bs, {
                    dir: i,
                    'data-sidebar': 'sidebar',
                    'data-slot': 'sidebar',
                    'data-mobile': 'true',
                    className:
                        'w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden',
                    style: { '--sidebar-width': Qs },
                    side: e,
                    children: [
                        m.jsxs(zs, {
                            className: 'sr-only',
                            children: [
                                m.jsx(Hs, { children: 'Sidebar' }),
                                m.jsx(Vs, { children: 'Displays the mobile sidebar.' }),
                            ],
                        }),
                        m.jsx('div', { className: 'flex h-full w-full flex-col', children: o }),
                    ],
                }),
            })
          : m.jsxs('div', {
                className: 'group peer hidden text-sidebar-foreground md:block',
                'data-state': l,
                'data-collapsible': l === 'collapsed' ? n : '',
                'data-variant': t,
                'data-side': e,
                'data-slot': 'sidebar',
                children: [
                    m.jsx('div', {
                        'data-slot': 'sidebar-gap',
                        className: j(
                            'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
                            'group-data-[collapsible=offcanvas]:w-0',
                            'group-data-[side=right]:rotate-180',
                            t === 'floating' || t === 'inset'
                                ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
                                : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
                        ),
                    }),
                    m.jsx('div', {
                        'data-slot': 'sidebar-container',
                        'data-side': e,
                        className: j(
                            'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex',
                            t === 'floating' || t === 'inset'
                                ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
                                : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
                            r
                        ),
                        ...a,
                        children: m.jsx('div', {
                            'data-sidebar': 'sidebar',
                            'data-slot': 'sidebar-inner',
                            className:
                                'flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border',
                            children: o,
                        }),
                    }),
                ],
            });
}
function rc({ className: e, onClick: t, ...n }) {
    const { toggleSidebar: r } = ot();
    return m.jsxs(Rn, {
        'data-sidebar': 'trigger',
        'data-slot': 'sidebar-trigger',
        variant: 'ghost',
        size: 'icon-sm',
        className: j(e),
        onClick: (o) => {
            (t?.(o), r());
        },
        ...n,
        children: [
            m.jsx(fo, {}),
            m.jsx('span', { className: 'sr-only', children: 'Toggle Sidebar' }),
        ],
    });
}
function oc({ className: e, ...t }) {
    const { toggleSidebar: n } = ot();
    return m.jsx('button', {
        'data-sidebar': 'rail',
        'data-slot': 'sidebar-rail',
        'aria-label': 'Toggle Sidebar',
        tabIndex: -1,
        onClick: n,
        title: 'Toggle Sidebar',
        className: j(
            'absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2',
            'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
            '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
            'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar',
            '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
            '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
            e
        ),
        ...t,
    });
}
function ic({ className: e, ...t }) {
    return m.jsx('main', {
        'data-slot': 'sidebar-inset',
        className: j(
            'relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
            e
        ),
        ...t,
    });
}
function ac({ className: e, ...t }) {
    return m.jsx('div', {
        'data-slot': 'sidebar-header',
        'data-sidebar': 'header',
        className: j('flex flex-col gap-2 p-2', e),
        ...t,
    });
}
function sc({ className: e, ...t }) {
    return m.jsx(Hr, {
        'data-slot': 'sidebar-separator',
        'data-sidebar': 'separator',
        className: j('mx-2 w-auto bg-sidebar-border', e),
        ...t,
    });
}
function cc({ className: e, ...t }) {
    return m.jsx('div', {
        'data-slot': 'sidebar-content',
        'data-sidebar': 'content',
        className: j(
            'no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
            e
        ),
        ...t,
    });
}
function Cn({ className: e, ...t }) {
    return m.jsx('div', {
        'data-slot': 'sidebar-group',
        'data-sidebar': 'group',
        className: j('relative flex w-full min-w-0 flex-col p-2', e),
        ...t,
    });
}
function En({ className: e, asChild: t = !1, ...n }) {
    const r = t ? An : 'div';
    return m.jsx(r, {
        'data-slot': 'sidebar-group-label',
        'data-sidebar': 'group-label',
        className: j(
            'flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
            e
        ),
        ...n,
    });
}
function Sn({ className: e, ...t }) {
    return m.jsx('div', {
        'data-slot': 'sidebar-group-content',
        'data-sidebar': 'group-content',
        className: j('w-full text-sm', e),
        ...t,
    });
}
function gt({ className: e, ...t }) {
    return m.jsx('ul', {
        'data-slot': 'sidebar-menu',
        'data-sidebar': 'menu',
        className: j('flex w-full min-w-0 flex-col gap-0', e),
        ...t,
    });
}
function vt({ className: e, ...t }) {
    return m.jsx('li', {
        'data-slot': 'sidebar-menu-item',
        'data-sidebar': 'menu-item',
        className: j('group/menu-item relative', e),
        ...t,
    });
}
const lc = to(
    'peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate',
    {
        variants: {
            variant: {
                default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                outline:
                    'bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]',
            },
            size: {
                default: 'h-8 text-sm',
                sm: 'h-7 text-xs',
                lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
            },
        },
        defaultVariants: { variant: 'default', size: 'default' },
    }
);
function bt({
    asChild: e = !1,
    isActive: t = !1,
    variant: n = 'default',
    size: r = 'default',
    tooltip: o,
    className: i,
    ...a
}) {
    const s = e ? An : 'button',
        { isMobile: l, state: d } = ot(),
        p = m.jsx(s, {
            'data-slot': 'sidebar-menu-button',
            'data-sidebar': 'menu-button',
            'data-size': r,
            'data-active': t,
            className: j(lc({ variant: n, size: r }), i),
            ...a,
        });
    return o
        ? (typeof o == 'string' && (o = { children: o }),
          m.jsxs(Ys, {
              children: [
                  m.jsx(Xs, { asChild: !0, children: p }),
                  m.jsx(Ks, {
                      side: 'right',
                      align: 'center',
                      hidden: d !== 'collapsed' || l,
                      ...o,
                  }),
              ],
          }))
        : p;
}
function uc({ className: e, ...t }) {
    return m.jsx('div', {
        'data-slot': 'sidebar-menu-badge',
        'data-sidebar': 'menu-badge',
        className: j(
            'pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground',
            e
        ),
        ...t,
    });
}
const dc = { home: Dn, domains: co, apps: oo, persons: ho, companies: ao };
function Pn(e, t) {
    return t === '/' ? e === '/' : e === t || e.startsWith(`${t}/`);
}
function fc({ items: e, currentPath: t, logoSrc: n }) {
    const r = e.find((i) => i.href === '/'),
        o = e.filter((i) => i.href !== '/');
    return m.jsxs(nc, {
        collapsible: 'icon',
        variant: 'sidebar',
        children: [
            m.jsx(ac, {
                children: m.jsx(gt, {
                    children: m.jsx(vt, {
                        children: m.jsx(bt, {
                            size: 'lg',
                            asChild: !0,
                            tooltip: 'Awesome Bharat',
                            children: m.jsxs('a', {
                                href: '/',
                                children: [
                                    m.jsx('img', {
                                        src: n,
                                        alt: 'Awesome Bharat',
                                        className: 'size-8 object-contain',
                                        width: 32,
                                        height: 32,
                                    }),
                                    m.jsxs('div', {
                                        className: 'grid flex-1 text-left text-sm leading-tight',
                                        children: [
                                            m.jsxs('span', {
                                                className: 'truncate font-serif font-semibold',
                                                children: [
                                                    'Awesome',
                                                    m.jsx('span', {
                                                        className: 'text-primary',
                                                        children: 'Bharat',
                                                    }),
                                                ],
                                            }),
                                            m.jsx('span', {
                                                className: 'truncate text-xs text-muted-foreground',
                                                children: 'Discover & act',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            m.jsxs(cc, {
                children: [
                    m.jsxs(Cn, {
                        children: [
                            m.jsx(En, { children: 'Navigate' }),
                            m.jsx(Sn, {
                                children: m.jsx(gt, {
                                    children:
                                        r &&
                                        m.jsx(vt, {
                                            children: m.jsx(bt, {
                                                asChild: !0,
                                                isActive: Pn(t, r.href),
                                                tooltip: r.name,
                                                children: m.jsxs('a', {
                                                    href: r.href,
                                                    children: [
                                                        m.jsx(Dn, {}),
                                                        m.jsx('span', { children: r.name }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                }),
                            }),
                        ],
                    }),
                    m.jsx(sc, {}),
                    m.jsxs(Cn, {
                        children: [
                            m.jsx(En, { children: 'Collections' }),
                            m.jsx(Sn, {
                                children: m.jsx(gt, {
                                    children: o.map((i) => {
                                        const a = dc[i.icon];
                                        return m.jsxs(
                                            vt,
                                            {
                                                children: [
                                                    m.jsx(bt, {
                                                        asChild: !0,
                                                        isActive: Pn(t, i.href),
                                                        tooltip: i.name,
                                                        children: m.jsxs('a', {
                                                            href: i.href,
                                                            children: [
                                                                m.jsx(a, {}),
                                                                m.jsx('span', { children: i.name }),
                                                            ],
                                                        }),
                                                    }),
                                                    i.count != null &&
                                                        m.jsx(uc, { children: i.count }),
                                                ],
                                            },
                                            i.href
                                        );
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            m.jsx(oc, {}),
        ],
    });
}
function bc({
    children: e,
    headerEnd: t,
    items: n,
    currentPath: r,
    logoSrc: o,
    defaultOpen: i = !0,
}) {
    return m.jsx(Us, {
        children: m.jsxs(tc, {
            defaultOpen: i,
            children: [
                m.jsx(fc, { items: n, currentPath: r, logoSrc: o }),
                m.jsxs(ic, {
                    className: 'min-w-0 overflow-x-hidden bg-transparent',
                    children: [
                        m.jsxs('header', {
                            className:
                                'sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/80 px-3 backdrop-blur-md sm:px-4',
                            children: [
                                m.jsx(rc, { className: '-ml-0.5' }),
                                m.jsx(Hr, { orientation: 'vertical', className: 'mr-1 h-4!' }),
                                m.jsxs('a', {
                                    href: '/',
                                    className:
                                        'min-w-0 flex-1 text-center font-serif text-xl font-semibold tracking-tight text-foreground transition-colors sm:text-2xl md:text-left',
                                    children: [
                                        'Awesome',
                                        m.jsx('span', {
                                            className: 'text-primary',
                                            children: 'Bharat',
                                        }),
                                    ],
                                }),
                                m.jsx('div', {
                                    className: 'flex shrink-0 items-center gap-2 sm:gap-4',
                                    children: t,
                                }),
                            ],
                        }),
                        e,
                    ],
                }),
            ],
        }),
    });
}
export { bc as AppSidebarLayout };
