var yt = Object.defineProperty;
var kt = (e, t, o) =>
	t in e ? yt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o);
var et = (e, t, o) => (kt(e, typeof t != 'symbol' ? t + '' : t, o), o);
const _t = function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
	new MutationObserver((n) => {
		for (const i of n)
			if (i.type === 'childList')
				for (const s of i.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function o(n) {
		const i = {};
		return (
			n.integrity && (i.integrity = n.integrity),
			n.referrerpolicy && (i.referrerPolicy = n.referrerpolicy),
			n.crossorigin === 'use-credentials'
				? (i.credentials = 'include')
				: n.crossorigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(n) {
		if (n.ep) return;
		n.ep = !0;
		const i = o(n);
		fetch(n.href, i);
	}
};
_t();
function $() {}
function bt(e) {
	return e();
}
function dt() {
	return Object.create(null);
}
function H(e) {
	e.forEach(bt);
}
function $t(e) {
	return typeof e == 'function';
}
function B(e, t) {
	return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function';
}
function zt(e) {
	return Object.keys(e).length === 0;
}
function Ct(e, ...t) {
	if (e == null) return $;
	const o = e.subscribe(...t);
	return o.unsubscribe ? () => o.unsubscribe() : o;
}
function Ot(e, t, o) {
	e.$$.on_destroy.push(Ct(t, o));
}
function p(e, t) {
	e.appendChild(t);
}
function _(e, t, o) {
	e.insertBefore(t, o || null);
}
function k(e) {
	e.parentNode.removeChild(e);
}
function jt(e, t) {
	for (let o = 0; o < e.length; o += 1) e[o] && e[o].d(t);
}
function f(e) {
	return document.createElement(e);
}
function K(e) {
	return document.createTextNode(e);
}
function y() {
	return K(' ');
}
function St() {
	return K('');
}
function M(e, t, o, r) {
	return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
}
function c(e, t, o) {
	o == null ? e.removeAttribute(t) : e.getAttribute(t) !== o && e.setAttribute(t, o);
}
function Et(e) {
	return Array.from(e.childNodes);
}
function lt(e, t) {
	(t = '' + t), e.wholeText !== t && (e.data = t);
}
function E(e, t) {
	e.value = t == null ? '' : t;
}
function Mt(e, t, o, r) {
	o === null ? e.style.removeProperty(t) : e.style.setProperty(t, o, r ? 'important' : '');
}
function Lt(e, t, { bubbles: o = !1, cancelable: r = !1 } = {}) {
	const n = document.createEvent('CustomEvent');
	return n.initCustomEvent(e, o, r, t), n;
}
let U;
function J(e) {
	U = e;
}
function gt() {
	if (!U) throw new Error('Function called outside component initialization');
	return U;
}
function ht(e) {
	gt().$$.on_mount.push(e);
}
function wt() {
	const e = gt();
	return (t, o, { cancelable: r = !1 } = {}) => {
		const n = e.$$.callbacks[t];
		if (n) {
			const i = Lt(t, o, { cancelable: r });
			return (
				n.slice().forEach((s) => {
					s.call(e, i);
				}),
				!i.defaultPrevented
			);
		}
		return !0;
	};
}
const P = [],
	j = [],
	W = [],
	nt = [],
	mt = Promise.resolve();
let it = !1;
function xt() {
	it || ((it = !0), mt.then(vt));
}
function ot() {
	return xt(), mt;
}
function st(e) {
	W.push(e);
}
function qt(e) {
	nt.push(e);
}
const rt = new Set();
let V = 0;
function vt() {
	const e = U;
	do {
		for (; V < P.length; ) {
			const t = P[V];
			V++, J(t), Nt(t.$$);
		}
		for (J(null), P.length = 0, V = 0; j.length; ) j.pop()();
		for (let t = 0; t < W.length; t += 1) {
			const o = W[t];
			rt.has(o) || (rt.add(o), o());
		}
		W.length = 0;
	} while (P.length);
	for (; nt.length; ) nt.pop()();
	(it = !1), rt.clear(), J(e);
}
function Nt(e) {
	if (e.fragment !== null) {
		e.update(), H(e.before_update);
		const t = e.dirty;
		(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(st);
	}
}
const Q = new Set();
let q;
function Ht() {
	q = { r: 0, c: [], p: q };
}
function It() {
	q.r || H(q.c), (q = q.p);
}
function N(e, t) {
	e && e.i && (Q.delete(e), e.i(t));
}
function A(e, t, o, r) {
	if (e && e.o) {
		if (Q.has(e)) return;
		Q.add(e),
			q.c.push(() => {
				Q.delete(e), r && (o && e.d(1), r());
			}),
			e.o(t);
	}
}
function Tt(e, t, o) {
	const r = e.$$.props[t];
	r !== void 0 && ((e.$$.bound[r] = o), o(e.$$.ctx[r]));
}
function tt(e) {
	e && e.c();
}
function R(e, t, o, r) {
	const { fragment: n, on_mount: i, on_destroy: s, after_update: w } = e.$$;
	n && n.m(t, o),
		r ||
			st(() => {
				const a = i.map(bt).filter($t);
				s ? s.push(...a) : H(a), (e.$$.on_mount = []);
			}),
		w.forEach(st);
}
function Y(e, t) {
	const o = e.$$;
	o.fragment !== null &&
		(H(o.on_destroy),
		o.fragment && o.fragment.d(t),
		(o.on_destroy = o.fragment = null),
		(o.ctx = []));
}
function At(e, t) {
	e.$$.dirty[0] === -1 && (P.push(e), xt(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function X(e, t, o, r, n, i, s, w = [-1]) {
	const a = U;
	J(e);
	const l = (e.$$ = {
		fragment: null,
		ctx: null,
		props: i,
		update: $,
		not_equal: n,
		bound: dt(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (a ? a.$$.context : [])),
		callbacks: dt(),
		dirty: w,
		skip_bound: !1,
		root: t.target || a.$$.root
	});
	s && s(l.root);
	let u = !1;
	if (
		((l.ctx = o
			? o(e, t.props || {}, (b, d, ...v) => {
					const g = v.length ? v[0] : d;
					return (
						l.ctx &&
							n(l.ctx[b], (l.ctx[b] = g)) &&
							(!l.skip_bound && l.bound[b] && l.bound[b](g), u && At(e, b)),
						d
					);
			  })
			: []),
		l.update(),
		(u = !0),
		H(l.before_update),
		(l.fragment = r ? r(l.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			const b = Et(t.target);
			l.fragment && l.fragment.l(b), b.forEach(k);
		} else l.fragment && l.fragment.c();
		t.intro && N(e.$$.fragment), R(e, t.target, t.anchor, t.customElement), vt();
	}
	J(a);
}
class G {
	$destroy() {
		Y(this, 1), (this.$destroy = $);
	}
	$on(t, o) {
		const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			r.push(o),
			() => {
				const n = r.indexOf(o);
				n !== -1 && r.splice(n, 1);
			}
		);
	}
	$set(t) {
		this.$$set && !zt(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
const T = [];
function ct(e, t = $) {
	let o;
	const r = new Set();
	function n(w) {
		if (B(e, w) && ((e = w), o)) {
			const a = !T.length;
			for (const l of r) l[1](), T.push(l, e);
			if (a) {
				for (let l = 0; l < T.length; l += 2) T[l][0](T[l + 1]);
				T.length = 0;
			}
		}
	}
	function i(w) {
		n(w(e));
	}
	function s(w, a = $) {
		const l = [w, a];
		return (
			r.add(l),
			r.size === 1 && (o = t(n) || $),
			w(e),
			() => {
				r.delete(l), r.size === 0 && (o(), (o = null));
			}
		);
	}
	return { set: n, update: i, subscribe: s };
}
let F = ct(0),
	Z = ct([]),
	at = ct({});
function ut(e) {
	let t, o;
	return {
		c() {
			(t = f('div')),
				(o = K(e[0])),
				c(
					t,
					'class',
					'tw-bg-red-600 tw-p-1 tw-px-2 tw-rounded-full tw-place-items-center tw-text-xs tw-font-semibold tw-text-white tw-absolute tw-top-0 tw-right-0'
				);
		},
		m(r, n) {
			_(r, t, n), p(t, o), e[5](t);
		},
		p(r, n) {
			n & 1 && lt(o, r[0]);
		},
		d(r) {
			r && k(t), e[5](null);
		}
	};
}
function Bt(e) {
	let t,
		o,
		r,
		n,
		i,
		s,
		w,
		a,
		l = e[0] && ut(e);
	return {
		c() {
			(t = f('div')),
				(o = f('div')),
				l && l.c(),
				(r = y()),
				(n = f('div')),
				(n.innerHTML = '<img alt="bubble_icon" src="/livematrix/bubbleicon.svg"/>'),
				(i = y()),
				(s = f('div')),
				(s.textContent = 'ok'),
				c(n, 'class', 'bubbleicon svelte-1k4k3rq'),
				c(n, 'style', ''),
				c(
					o,
					'class',
					'bubble tw-grid tw-grid-cols-5 tw-gap-3 tw-bg-slate-200 tw-p-4 tw-rounded-full tw-place-items-center svelte-1k4k3rq'
				),
				c(t, 'class', 'tw-flex tw-flex-col tw-flex-auto'),
				c(s, 'class', 'buuubble icon svelte-1k4k3rq');
		},
		m(u, b) {
			_(u, t, b),
				p(t, o),
				l && l.m(o, null),
				p(o, r),
				p(o, n),
				e[6](n),
				e[7](o),
				_(u, i, b),
				_(u, s, b),
				w || ((a = M(o, 'click', e[4])), (w = !0));
		},
		p(u, [b]) {
			u[0] ? (l ? l.p(u, b) : ((l = ut(u)), l.c(), l.m(o, r))) : l && (l.d(1), (l = null));
		},
		i: $,
		o: $,
		d(u) {
			u && k(t), l && l.d(), e[6](null), e[7](null), u && k(i), u && k(s), (w = !1), a();
		}
	};
}
function Dt(e, t, o) {
	let r;
	F.subscribe((d) => {
		o(0, (r = d));
	});
	const n = wt();
	let i,
		s,
		w,
		a = () => {
			['icon'].map((d) => w.classList.toggle(d)),
				s && ['icon'].map((d) => s.classList.toggle(d)),
				['buuubble'].map((d) => i.classList.toggle(d)),
				setTimeout(() => {
					['tw-rounded-full', 'tw-rounded-t-2xl'].map((d) => i.classList.toggle(d));
				}, 200),
				n('bubbling');
		};
	function l(d) {
		j[d ? 'unshift' : 'push'](() => {
			(s = d), o(2, s);
		});
	}
	function u(d) {
		j[d ? 'unshift' : 'push'](() => {
			(w = d), o(3, w);
		});
	}
	function b(d) {
		j[d ? 'unshift' : 'push'](() => {
			(i = d), o(1, i);
		});
	}
	return [r, i, s, w, a, l, u, b];
}
class Pt extends G {
	constructor(t) {
		super(), X(this, t, Dt, Bt, B, {});
	}
}
function pt(e, t, o) {
	const r = e.slice();
	return (r[4] = t[o]), r;
}
function Ft(e) {
	let t,
		o,
		r,
		n,
		i,
		s,
		w = e[4].body + '',
		a,
		l;
	return {
		c() {
			(t = f('div')),
				(o = f('div')),
				(r = f('div')),
				(r.textContent = 'G'),
				(n = y()),
				(i = f('div')),
				(s = f('div')),
				(a = K(w)),
				(l = y()),
				c(
					r,
					'class',
					'tw-flex tw-items-center tw-justify-center tw-h-10 tw-w-10 tw-rounded-full tw-bg-indigo-500 tw-flex-shrink-0'
				),
				c(
					i,
					'class',
					'tw-relative tw-mr-3 tw-text-sm tw-bg-indigo-100 tw-py-2 tw-px-4 tw-shadow tw-rounded-xl'
				),
				c(o, 'class', 'tw-flex tw-items-center tw-justify-start tw-flex-row-reverse'),
				c(t, 'class', 'tw-col-start-1 tw-col-end-13 tw-p-3 tw-rounded-lg'),
				c(t, 'tw-transition:fade', '');
		},
		m(u, b) {
			_(u, t, b), p(t, o), p(o, r), p(o, n), p(o, i), p(i, s), p(s, a), p(t, l);
		},
		p(u, b) {
			b & 2 && w !== (w = u[4].body + '') && lt(a, w);
		},
		d(u) {
			u && k(t);
		}
	};
}
function Jt(e) {
	let t,
		o,
		r,
		n,
		i,
		s,
		w = e[4].body + '',
		a,
		l;
	return {
		c() {
			(t = f('div')),
				(o = f('div')),
				(r = f('div')),
				(r.textContent = 'S'),
				(n = y()),
				(i = f('div')),
				(s = f('div')),
				(a = K(w)),
				(l = y()),
				c(
					r,
					'class',
					'tw-flex tw-items-center tw-justify-center tw-h-10 tw-w-10 tw-rounded-full tw-bg-indigo-500 tw-flex-shrink-0'
				),
				c(
					i,
					'class',
					'tw-relative tw-ml-3 tw-text-sm tw-bg-white tw-py-2 tw-px-4 tw-shadow tw-rounded-xl'
				),
				c(o, 'class', 'tw-flex tw-flex-row tw-items-center'),
				c(t, 'class', 'tw-col-start-1 tw-col-end-13 tw-p-3 tw-rounded-lg'),
				c(t, 'tw-transition:fade', '');
		},
		m(u, b) {
			_(u, t, b), p(t, o), p(o, r), p(o, n), p(o, i), p(i, s), p(s, a), p(t, l);
		},
		p(u, b) {
			b & 2 && w !== (w = u[4].body + '') && lt(a, w);
		},
		d(u) {
			u && k(t);
		}
	};
}
function ft(e) {
	let t;
	function o(i, s) {
		return i[4].author === '0' ? Jt : Ft;
	}
	let r = o(e),
		n = r(e);
	return {
		c() {
			n.c(), (t = St());
		},
		m(i, s) {
			n.m(i, s), _(i, t, s);
		},
		p(i, s) {
			r === (r = o(i)) && n ? n.p(i, s) : (n.d(1), (n = r(i)), n && (n.c(), n.m(t.parentNode, t)));
		},
		d(i) {
			n.d(i), i && k(t);
		}
	};
}
function Ut(e) {
	let t,
		o,
		r,
		n = e[1],
		i = [];
	for (let s = 0; s < n.length; s += 1) i[s] = ft(pt(e, n, s));
	return {
		c() {
			(t = f('div')), (o = f('div')), (r = f('div'));
			for (let s = 0; s < i.length; s += 1) i[s].c();
			c(r, 'class', 'tw-grid tw-grid-cols-12 tw-gap-y-2'),
				c(o, 'class', 'tw-flex tw-flex-col tw-overflow-y-auto tw-max-h-80'),
				c(t, 'class', 'tw-flex tw-flex-col tw-h-full tw-overflow-x-auto');
		},
		m(s, w) {
			_(s, t, w), p(t, o), p(o, r);
			for (let a = 0; a < i.length; a += 1) i[a].m(r, null);
			e[3](o);
		},
		p(s, [w]) {
			if (w & 2) {
				n = s[1];
				let a;
				for (a = 0; a < n.length; a += 1) {
					const l = pt(s, n, a);
					i[a] ? i[a].p(l, w) : ((i[a] = ft(l)), i[a].c(), i[a].m(r, null));
				}
				for (; a < i.length; a += 1) i[a].d(1);
				i.length = n.length;
			}
		},
		i: $,
		o: $,
		d(s) {
			s && k(t), jt(i, s), e[3](null);
		}
	};
}
function Rt(e, t, o) {
	let r;
	Ot(e, Z, (w) => o(1, (r = w)));
	let n;
	function i() {
		n.scrollTo({ top: n.scrollHeight, behavior: 'smooth' });
	}
	ht(async () => {
		i();
	});
	function s(w) {
		j[w ? 'unshift' : 'push'](() => {
			(n = w), o(0, n);
		});
	}
	return [n, r, i, s];
}
class Yt extends G {
	constructor(t) {
		super(), X(this, t, Rt, Ut, B, { scrollDown: 2 });
	}
	get scrollDown() {
		return this.$$.ctx[2];
	}
}
function Kt(e) {
	let t, o, r, n, i, s, w, a, l, u, b, d, v, g, m, C, S, x, O, I;
	return {
		c() {
			(t = f('div')),
				(o = f('div')),
				(r = f('div')),
				(n = f('div')),
				(i = f('form')),
				(s = f('p')),
				(s.textContent = 'Please fill in your name/email:'),
				(w = y()),
				(a = f('div')),
				(l = f('input')),
				(u = y()),
				(b = f('div')),
				(d = f('input')),
				(v = y()),
				(g = f('div')),
				(m = f('input')),
				(C = y()),
				(S = f('div')),
				(x = f('button')),
				(x.textContent = 'open chat'),
				c(s, 'class', 'tw-mb-4'),
				c(l, 'type', 'text'),
				c(
					l,
					'class',
					'form-control tw-block tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
				),
				c(l, 'id', 'exampleFormControlInput1'),
				c(l, 'placeholder', 'name'),
				c(a, 'class', 'tw-mb-4'),
				c(d, 'type', 'text'),
				c(
					d,
					'class',
					'form-control tw-block tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
				),
				c(d, 'id', 'exampleFormControlInput1'),
				c(d, 'placeholder', 'surname'),
				c(b, 'class', 'tw-mb-4'),
				c(m, 'type', 'text'),
				c(
					m,
					'class',
					'form-control tw-block tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
				),
				c(m, 'id', 'exampleFormControlInput1'),
				c(m, 'placeholder', 'email'),
				c(g, 'class', 'tw-mb-4'),
				c(
					x,
					'class',
					'tw-inline-block tw-px-6 tw-py-2.5 tw-text-white tw-font-medium tw-text-xs tw-leading-tight tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-blue-700 hover:tw-shadow-lg focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-w-full tw-mb-3'
				),
				c(x, 'type', 'button'),
				c(x, 'data-mdb-ripple', 'true'),
				c(x, 'data-mdb-ripple-color', 'light'),
				Mt(x, 'background', 'linear-gradient( to right, #ee7724, #d8363a, #dd3675, #b44593 )'),
				c(S, 'class', 'tw-text-center tw-pt-1 tw-mb-12 tw-pb-1'),
				c(n, 'class', 'md:tw-p-5 md:tw-mx-5'),
				c(r, 'class', 'lg:tw-w-full 2 tw-px-0 md:tw-px-0'),
				c(o, 'class', 'lg:tw-flex lg:tw-flex-wrap g-0'),
				c(t, 'class', 'tw-flex tw-flex-col tw-h-full tw-overflow-x-auto');
		},
		m(z, L) {
			_(z, t, L),
				p(t, o),
				p(o, r),
				p(r, n),
				p(n, i),
				p(i, s),
				p(i, w),
				p(i, a),
				p(a, l),
				E(l, e[0].name),
				p(i, u),
				p(i, b),
				p(b, d),
				E(d, e[0].surname),
				p(i, v),
				p(i, g),
				p(g, m),
				E(m, e[0].email),
				p(i, C),
				p(i, S),
				p(S, x),
				O ||
					((I = [
						M(l, 'input', e[2]),
						M(d, 'input', e[3]),
						M(m, 'input', e[4]),
						M(x, 'click', e[1])
					]),
					(O = !0));
		},
		p(z, [L]) {
			L & 1 && l.value !== z[0].name && E(l, z[0].name),
				L & 1 && d.value !== z[0].surname && E(d, z[0].surname),
				L & 1 && m.value !== z[0].email && E(m, z[0].email);
		},
		i: $,
		o: $,
		d(z) {
			z && k(t), (O = !1), H(I);
		}
	};
}
function Xt(e, t, o) {
	let r;
	at.subscribe((u) => {
		r = u;
	});
	const n = { name: '', surname: '', email: '' },
		i = wt();
	let s = async (u) => {
		const b = Object.keys(n)
			.map((d) => encodeURIComponent(d) + '=' + encodeURIComponent(n[d]))
			.join('&');
		fetch(`${r.config.server.proto}://${r.config.server.host}:${r.config.server.port}/session`, {
			method: 'POST',
			mode: 'no-cors',
			credentials: 'include',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: b
		})
			.then((d) => {
				if (d.status === 0) i('sessiondone');
				else throw new Error('Network response was not OK');
			})
			.catch((d) => console.log(d));
	};
	function w() {
		(n.name = this.value), o(0, n);
	}
	function a() {
		(n.surname = this.value), o(0, n);
	}
	function l() {
		(n.email = this.value), o(0, n);
	}
	return [n, s, w, a, l];
}
class Gt extends G {
	constructor(t) {
		super(), X(this, t, Xt, Kt, B, {});
	}
}
class Vt {
	constructor(t) {
		et(this, 'ws');
		et(this, 'store');
		(this.store = t.store),
			(this.onmessage = t.onmessage),
			(this.onopen = t.onopen),
			(this.ws = new WebSocket(t.url)),
			(this.ws.onopen = (o) => this.onOpen(o)),
			(this.ws.onmessage = (o) => this.onMessage(o)),
			(this.ws.onerror = (o) => this.onError(o)),
			(this.ws.onclose = (o) => this.onClose(o));
	}
	onOpen(t) {
		if (this.onopen) for (let o of this.onopen) o();
	}
	onMessage(t, o) {
		const r = o || this.store,
			n = JSON.parse(t.data);
		if ((r.update((i) => [...i, n]), this.onmessage)) for (let i of this.onmessage) i();
	}
	onError(t) {}
	onClose(t) {}
	sendData(t) {
		this.ws.send(t);
	}
}
function Wt(e) {
	let t,
		o,
		r,
		n,
		i,
		s,
		w,
		a,
		l,
		u,
		b,
		d,
		v,
		g,
		m,
		C,
		S = {};
	return (
		(t = new Yt({ props: S })),
		e[8](t),
		{
			c() {
				tt(t.$$.fragment),
					(o = y()),
					(r = f('div')),
					(n = f('div')),
					(i = y()),
					(s = f('div')),
					(w = f('div')),
					(a = f('input')),
					(l = y()),
					(u = f('button')),
					(u.innerHTML =
						'<svg class="tw-w-6 tw-h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'),
					(b = y()),
					(d = f('div')),
					(v = f('button')),
					(v.innerHTML =
						'<span class="tw-p-5px"><svg class="tw-w-4 tw-h-4 tw-transform tw-rotate-45 tw--mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></span>'),
					c(a, 'type', 'text'),
					c(
						a,
						'class',
						'tw-flex tw-w-full tw-border tw-rounded-xl focus:tw-outline-none focus:tw-border-indigo-300 tw-pl-4 tw-pr-10 tw-h-10'
					),
					c(
						u,
						'class',
						'tw-absolute tw-flex tw-items-center tw-justify-center tw-h-full tw-w-12 tw-right-0 tw-top-0 tw-text-gray-400 hover:tw-text-gray-600'
					),
					c(w, 'class', 'tw-relative tw-w-full'),
					c(s, 'class', 'tw-flex-grow'),
					c(
						v,
						'class',
						'tw-flex tw-items-center tw-justify-center tw-bg-indigo-500 hover:tw-bg-indigo-600 tw-rounded-xl tw-text-white tw-px-4 tw-py-1 tw-flex-shrink-0'
					),
					c(d, 'class', 'tw-ml-4'),
					c(
						r,
						'class',
						'tw-flex tw-flex-row tw-items-center tw-h-16 tw-rounded-xl tw-bg-white tw-w-full tw-px-4'
					);
			},
			m(x, O) {
				R(t, x, O),
					_(x, o, O),
					_(x, r, O),
					p(r, n),
					p(r, i),
					p(r, s),
					p(s, w),
					p(w, a),
					E(a, e[2]),
					p(w, l),
					p(w, u),
					p(r, b),
					p(r, d),
					p(d, v),
					(g = !0),
					m ||
						((C = [M(a, 'input', e[9]), M(a, 'keydown', e[10]), M(v, 'click', e[11])]), (m = !0));
			},
			p(x, O) {
				const I = {};
				t.$set(I), O & 4 && a.value !== x[2] && E(a, x[2]);
			},
			i(x) {
				g || (N(t.$$.fragment, x), (g = !0));
			},
			o(x) {
				A(t.$$.fragment, x), (g = !1);
			},
			d(x) {
				e[8](null), Y(t, x), x && k(o), x && k(r), (m = !1), H(C);
			}
		}
	);
}
function Qt(e) {
	let t, o;
	return (
		(t = new Gt({})),
		t.$on('sessiondone', e[7]),
		{
			c() {
				tt(t.$$.fragment);
			},
			m(r, n) {
				R(t, r, n), (o = !0);
			},
			p: $,
			i(r) {
				o || (N(t.$$.fragment, r), (o = !0));
			},
			o(r) {
				A(t.$$.fragment, r), (o = !1);
			},
			d(r) {
				Y(t, r);
			}
		}
	);
}
function Zt(e) {
	let t, o, r, n, i, s, w, a, l, u;
	const b = [Qt, Wt],
		d = [];
	function v(g, m) {
		return g[3] ? 1 : 0;
	}
	return (
		(s = v(e)),
		(w = d[s] = b[s](e)),
		{
			c() {
				(t = f('div')),
					(o = f('div')),
					(r = f('div')),
					(r.innerHTML = `<div class="">...</div> 
        <div class="tw-col-start-2 tw-col-span-3 ">chat with me</div> 
        <div class="">x</div>`),
					(n = y()),
					(i = f('div')),
					w.c(),
					(a = y()),
					(l = f('div')),
					c(
						r,
						'class',
						'tw-grid tw-grid-cols-5 tw-gap-3 tw-bg-slate-200 tw-p-4 tw-rounded-t-2xl tw-place-items-center'
					),
					c(
						i,
						'class',
						'tw-flex tw-flex-col tw-flex-auto tw-flex-shrink-0 tw-rounded-b-2xl tw-bg-gray-100 tw-h-full tw-px-4 tw-pb-4'
					),
					c(
						o,
						'class',
						'tw-flex tw-flex-col tw-flex-auto chatHidden svelte-1ybb335'
					),
					c(t, 'class', 'tw-fixed msgbox svelte-1ybb335'),
					c(l, 'class', 'grow svelte-1ybb335');
			},
			m(g, m) {
				_(g, t, m),
					p(t, o),
					p(o, r),
					p(o, n),
					p(o, i),
					d[s].m(i, null),
					e[12](o),
					_(g, a, m),
					_(g, l, m),
					(u = !0);
			},
			p(g, [m]) {
				let C = s;
				(s = v(g)),
					s === C
						? d[s].p(g, m)
						: (Ht(),
						  A(d[C], 1, 1, () => {
								d[C] = null;
						  }),
						  It(),
						  (w = d[s]),
						  w ? w.p(g, m) : ((w = d[s] = b[s](g)), w.c()),
						  N(w, 1),
						  w.m(i, null));
			},
			i(g) {
				u || (N(w), (u = !0));
			},
			o(g) {
				A(w), (u = !1);
			},
			d(g) {
				g && k(t), d[s].d(), e[12](null), g && k(a), g && k(l);
			}
		}
	);
}
function te(e, t, o) {
	let { chatboxOpen: r } = t;
	const n = wt();
	let i,
		s,
		w,
		a = '',
		l,
		u;
	F.subscribe((h) => {}),
		at.subscribe((h) => {
			i = h;
		});
	let b = async () => {
			await ot().then(() => {
				r ? F.set(0) : F.update((h) => h + 1);
			});
		},
		d = async () => {
			console.log('wjat...');
			let h = JSON.stringify({ author: '0', body: i.greetings });
			Z.update((D) => [...D, JSON.parse(h)]);
		},
		v = async () => {
			await ot().then(w.scrollDown);
		},
		g = () => {
			u && !s
				? (s = new Vt({
						url: `${i.config.websocket.proto}://${i.config.websocket.host}:${i.config.websocket.port}/entry`,
						store: Z,
						onopen: [d],
						onmessage: [v, b]
				  }))
				: console.log('Socket either connected or no session yet');
		};
	const m = async () => {
		if (a === '') return;
		let h = JSON.stringify({ author: '1', body: a });
		Z.update((D) => [...D, JSON.parse(h)]),
			s.sendData(h),
			await ot().then(v),
			n('newmessage'),
			o(2, (a = ''));
	};
	let C = (h) => {
		h != null &&
			(r
				? (h.classList.add('grow'), h.classList.remove('chatHidden'), F.set(0))
				: (h.classList.remove('grow'), h.classList.add('chatHidden')),
			n('togglechat', { variable: 'empty' }));
	};
	ht(async () => {
		o(3, (u = document.cookie.match(/^(.*;)?\s*session_id\s*=\s*[^;]+(.*)?$/))),
			await fetch('/livematrix/config.json').then((h) => {
				h.json().then((D) => {
					at.set(D), g();
				});
			});
	});
	const S = () => o(3, (u = !u)) && g();
	function x(h) {
		j[h ? 'unshift' : 'push'](() => {
			(w = h), o(1, w);
		});
	}
	function O() {
		(a = this.value), o(2, a);
	}
	const I = (h) => h.key === 'Enter' && m(),
		z = () => a !== '' && m();
	function L(h) {
		j[h ? 'unshift' : 'push'](() => {
			(l = h), o(0, l);
		});
	}
	return (
		(e.$$set = (h) => {
			'chatboxOpen' in h && o(6, (r = h.chatboxOpen));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 65 && C(l);
		}),
		[l, w, a, u, g, m, r, S, x, O, I, z, L]
	);
}
class ee extends G {
	constructor(t) {
		super(), X(this, t, te, Zt, B, { chatboxOpen: 6 });
	}
}
function oe(e) {
	let t, o, r, n, i;
	(t = new Pt({})), t.$on('bubbling', e[1]);
	function s(a) {
		e[2](a);
	}
	let w = {};
	return (
		e[0] !== void 0 && (w.chatboxOpen = e[0]),
		(r = new ee({ props: w })),
		j.push(() => Tt(r, 'chatboxOpen', s)),
		{
			c() {
				tt(t.$$.fragment), (o = y()), tt(r.$$.fragment);
			},
			m(a, l) {
				R(t, a, l), _(a, o, l), R(r, a, l), (i = !0);
			},
			p(a, [l]) {
				const u = {};
				!n && l & 1 && ((n = !0), (u.chatboxOpen = a[0]), qt(() => (n = !1))), r.$set(u);
			},
			i(a) {
				i || (N(t.$$.fragment, a), N(r.$$.fragment, a), (i = !0));
			},
			o(a) {
				A(t.$$.fragment, a), A(r.$$.fragment, a), (i = !1);
			},
			d(a) {
				Y(t, a), a && k(o), Y(r, a);
			}
		}
	);
}
function re(e, t, o) {
	let r = !1;
	const n = () => {
		o(0, (r = !r));
	};
	function i(s) {
		(r = s), o(0, r);
	}
	return [r, n, i];
}
class ne extends G {
	constructor(t) {
		super(), X(this, t, re, oe, B, {});
	}
}
new ne({ target: document.getElementById('app') });
