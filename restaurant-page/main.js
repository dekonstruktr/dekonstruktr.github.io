(() => {
    "use strict";
    var e = {
            28: (e, n, t) => {
                t.d(n, { Z: () => r });
                var a = t(645),
                    i = t.n(a)()(function (e) {
                        return e[1];
                    });
                i.push([
                    e.id,
                    "                body {\n                    margin: 0;\n                    background-color: rgb(44, 43, 43);\n                    color: white;\n                    font-family: 'Lato', sans-serif;\n                    font-size: 1.3vw;\n                }\n                \n                #content {\n                    border-color: rgb(124, 123, 123);\n                    border-style: solid;\n                    border-width: 1px;\n                    background-color: rgb(148, 135, 116);\n                    margin-left: 25%;\n                    margin-right: 25%;\n                    padding: 1vh 1vh 0 1vh;\n                    height: 100%;\n                }\n                \n                #splashimage {\n                    display: block;\n                    background-color: rgb(85, 82, 82);\n                    width: 60%;\n                    height: auto;\n                    clear: both;\n                }\n                \n                .centered {\n                    padding: 3vh;\n                    margin-left: auto;\n                    margin-right: auto;\n                    width: 90vh;\n                    height: auto;\n                }\n                \n                #name {\n                    font-family: 'Dancing Script', cursive;\n                    font-size: 4vw;\n                    text-shadow: 1px 1px #000000;\n                }\n                \n                .border {\n                    display: inline;\n                }\n                \n                #description {\n                    background-color: rgb(85, 82, 82);\n                    width: 70%;\n                    height: auto;\n                }\n                \n                ul {\n                    list-style-type: none;\n                    margin-left: 25%;\n                    margin-right: 25%;\n                    padding: 0;\n                    text-align: center;\n                    background-color: rgb(43, 43, 43);\n                }\n                \n                li {\n                    text-align: center;\n                    display: inline-block;\n                    padding: 15px 40px;\n                    background-color: rgb(85, 82, 82);\n                }\n                \n                li:hover {\n                    cursor: pointer;\n                    background-color: rgb(27, 27, 27);\n                    transition: 0.3s;\n                }\n                \n                .double-width {\n                    letter-spacing: 12px;\n                }\n                \n                .column {\n                    float: left;\n                    width: 33.33%;\n                }\n                /* Clear floats after the columns */\n                \n                .row:after {\n                    content: \"\";\n                    display: table;\n                    clear: both;\n                }\n                \n                .row {\n                    margin-left: 25%;\n                    margin-RIGHT: 25%;\n                    width: auto;\n                    padding: 15px;\n                    text-align: center;\n                    background-color: rgb(85, 82, 82);\n                }\n                \n                #logo {\n                    position: absolute;\n                    left: 10px;\n                    top: -10px;\n                    font-family: 'Dancing Script', cursive;\n                    font-size: 2vw;\n                    text-shadow: 1px 1px #000000;\n                }\n                \n                .btn {\n                    width: 5em;\n                    height: auto;\n                }\n                \n                .double-width {\n                    width: 45vw;\n                }\n                \n                .menu-item-img {\n                    width: 20vw;\n                    height: auto;\n                    display: block;\n                    float: left;\n                }\n                \n                .menu-item-name {\n                    float: right;\n                    display: inline;\n                }\n                \n                .menu-item-name:after {\n                    clear: both;\n                    text-align: right;\n                }\n                \n                .menu {\n                    height: 20vw;\n                    width: 90%;\n                    margin-bottom: 0;\n                }",
                    "",
                ]);
                const r = i;
            },
            645: (e) => {
                e.exports = function (e) {
                    var n = [];
                    return (
                        (n.toString = function () {
                            return this.map(function (n) {
                                var t = e(n);
                                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
                            }).join("");
                        }),
                        (n.i = function (e, t, a) {
                            "string" == typeof e && (e = [[null, e, ""]]);
                            var i = {};
                            if (a)
                                for (var r = 0; r < this.length; r++) {
                                    var o = this[r][0];
                                    null != o && (i[o] = !0);
                                }
                            for (var d = 0; d < e.length; d++) {
                                var c = [].concat(e[d]);
                                (a && i[c[0]]) || (t && (c[2] ? (c[2] = "".concat(t, " and ").concat(c[2])) : (c[2] = t)), n.push(c));
                            }
                        }),
                        n
                    );
                };
            },
            379: (e) => {
                var n = [];
                function t(e) {
                    for (var t = -1, a = 0; a < n.length; a++)
                        if (n[a].identifier === e) {
                            t = a;
                            break;
                        }
                    return t;
                }
                function a(e, a) {
                    for (var r = {}, o = [], d = 0; d < e.length; d++) {
                        var c = e[d],
                            s = a.base ? c[0] + a.base : c[0],
                            l = r[s] || 0,
                            u = "".concat(s, " ").concat(l);
                        r[s] = l + 1;
                        var p = t(u),
                            m = { css: c[1], media: c[2], sourceMap: c[3] };
                        -1 !== p ? (n[p].references++, n[p].updater(m)) : n.push({ identifier: u, updater: i(m, a), references: 1 }), o.push(u);
                    }
                    return o;
                }
                function i(e, n) {
                    var t = n.domAPI(n);
                    return (
                        t.update(e),
                        function (n) {
                            if (n) {
                                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                                t.update((e = n));
                            } else t.remove();
                        }
                    );
                }
                e.exports = function (e, i) {
                    var r = a((e = e || []), (i = i || {}));
                    return function (e) {
                        e = e || [];
                        for (var o = 0; o < r.length; o++) {
                            var d = t(r[o]);
                            n[d].references--;
                        }
                        for (var c = a(e, i), s = 0; s < r.length; s++) {
                            var l = t(r[s]);
                            0 === n[l].references && (n[l].updater(), n.splice(l, 1));
                        }
                        r = c;
                    };
                };
            },
            569: (e) => {
                var n = {};
                e.exports = function (e, t) {
                    var a = (function (e) {
                        if (void 0 === n[e]) {
                            var t = document.querySelector(e);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                                try {
                                    t = t.contentDocument.head;
                                } catch (e) {
                                    t = null;
                                }
                            n[e] = t;
                        }
                        return n[e];
                    })(e);
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                };
            },
            216: (e) => {
                e.exports = function (e) {
                    var n = document.createElement("style");
                    return e.setAttributes(n, e.attributes), e.insert(n), n;
                };
            },
            565: (e, n, t) => {
                e.exports = function (e) {
                    var n = t.nc;
                    n && e.setAttribute("nonce", n);
                };
            },
            795: (e) => {
                e.exports = function (e) {
                    var n = e.insertStyleElement(e);
                    return {
                        update: function (t) {
                            !(function (e, n, t) {
                                var a = t.css,
                                    i = t.media,
                                    r = t.sourceMap;
                                i ? e.setAttribute("media", i) : e.removeAttribute("media"),
                                    r && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")),
                                    n.styleTagTransform(a, e);
                            })(n, e, t);
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        },
                    };
                };
            },
            589: (e) => {
                e.exports = function (e, n) {
                    if (n.styleSheet) n.styleSheet.cssText = e;
                    else {
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(e));
                    }
                };
            },
        },
        n = {};
    function t(a) {
        var i = n[a];
        if (void 0 !== i) return i.exports;
        var r = (n[a] = { id: a, exports: {} });
        return e[a](r, r.exports, t), r.exports;
    }
    (t.n = (e) => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, { a: n }), n;
    }),
        (t.d = (e, n) => {
            for (var a in n) t.o(n, a) && !t.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: n[a] });
        }),
        (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (() => {
            function e() {
                const e = document.getElementById("content"),
                    n = new Image(640);
                (n.src = "headerphoto.jpg"), (n.id = "splashimage"), n.classList.add("centered"), e.appendChild(n);
                const t = document.createElement("div");
                (t.id = "name"), (t.textContent = "La Osteria Italiana"), t.classList.add("centered"), e.appendChild(t);
                const a = document.createElement("div");
                (a.id = "description"),
                    a.classList.add("centered"),
                    (a.textContent =
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure\ndolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),
                    e.appendChild(a);
            }
            class n {
                constructor(e, n, t, a) {
                    (this.name = e), (this.price = n), (this.description = t), (this.img = a + ".jpg");
                }
            }
            function a(e, n) {
                const t = document.createElement("div");
                t.classList.add("centered"), t.classList.add("menu"), e.appendChild(t);
                const a = new Image(40, 40);
                (a.src = n.img), a.classList.add("centered"), a.classList.add("menu-item-img"), t.appendChild(a);
                const i = document.createElement("h3");
                (i.textContent = n.name), t.appendChild(i);
                const r = document.createElement("span");
                (r.textContent = ". . . . . . . . . . . . . . . . ." + n.price), t.appendChild(r);
                const o = document.createElement("p");
                (o.textContent = n.description), t.appendChild(o);
            }
            var i = t(379),
                r = t.n(i),
                o = t(795),
                d = t.n(o),
                c = t(569),
                s = t.n(c),
                l = t(565),
                u = t.n(l),
                p = t(216),
                m = t.n(p),
                h = t(589),
                g = t.n(h),
                f = t(28),
                b = {};
            (b.styleTagTransform = g()),
                (b.setAttributes = u()),
                (b.insert = s().bind(null, "head")),
                (b.domAPI = d()),
                (b.insertStyleElement = m()),
                r()(f.Z, b),
                f.Z && f.Z.locals && f.Z.locals,
                (function () {
                    const e = document.createElement("div");
                    (e.id = "topnav"), document.body.insertBefore(e, document.body.firstChild);
                    const n = document.createElement("ul");
                    e.appendChild(n);
                    const t = document.createElement("p");
                    (t.id = "logo"), (t.textContent = "La Osteria Italiana"), n.appendChild(t);
                    const a = document.createElement("li");
                    (a.id = "main-btn"), a.classList.add("border"), a.classList.add("btn"), (a.textContent = "M a i n"), n.appendChild(a);
                    const i = document.createElement("li");
                    (i.id = "menu-btn"), i.classList.add("border"), i.classList.add("btn"), (i.textContent = "M e n u"), n.appendChild(i);
                    const r = document.createElement("li");
                    (r.id = "contact-btn"), r.classList.add("border"), r.classList.add("btn"), (r.textContent = "C o n t a c t"), n.appendChild(r);
                })(),
                e(),
                document.querySelector("#topnav").addEventListener("click", (t) => {
                    "border btn" === t.target.className &&
                        ((function (t) {
                            const i = document.getElementById("content");
                            i.nextSibling.remove(),
                                (i.innerHTML = ""),
                                "main-btn" == t
                                    ? e()
                                    : "contact-btn" == t
                                    ? (function () {
                                          const e = document.getElementById("content"),
                                              n = document.createElement("div");
                                          (n.id = "name"), (n.textContent = "La Osteria Italiana"), n.classList.add("centered"), e.appendChild(n);
                                          const t = document.createElement("div");
                                          e.appendChild(t);
                                          const a = document.createElement("p");
                                          a.classList.add("centered"), a.classList.add("double-width"), (a.innerText = "CONTACT US"), t.appendChild(a);
                                          const i = new Image(640, 392);
                                          (i.src = "restaurant.jpeg"), (i.id = "splashimage"), i.classList.add("centered"), e.appendChild(i);
                                          let r = document.createElement("br");
                                          e.appendChild(r), (r = document.createElement("br")), e.appendChild(r), (r = document.createElement("br")), e.appendChild(r);
                                          const o = document.createElement("div");
                                          o.classList.add("row"), o.classList.add("centered"), e.after(o);
                                          const d = document.createElement("div");
                                          d.classList.add("column"), (d.innerHTML = "Address<br><br><em>3456 Elm Avenue</em><br> Los Angeles, CA 90008"), o.appendChild(d);
                                          const c = document.createElement("div");
                                          c.classList.add("column"), (c.innerHTML = "Phone<br><br>(415)555-2134"), o.appendChild(c);
                                          const s = document.createElement("div");
                                          s.classList.add("column"), (s.innerHTML = "E-mail<br><br>LaOsteria@gmail.com"), o.appendChild(s);
                                      })()
                                    : "menu-btn" == t &&
                                      (function () {
                                          const e = document.getElementById("content"),
                                              t = document.createElement("div");
                                          (t.id = "name"), (t.textContent = "La Osteria Italiana"), t.classList.add("centered"), e.appendChild(t);
                                          const i = document.createElement("div");
                                          e.appendChild(i);
                                          const r = document.createElement("p");
                                          r.classList.add("centered"), r.classList.add("double-width"), (r.innerText = "OUR MENU"), i.appendChild(r);
                                          const o = new Image(640, 392);
                                          (o.src = "restaurant.jpeg"), (o.id = "splashimage"), o.classList.add("centered"), e.appendChild(o);
                                          let d = document.createElement("br");
                                          e.appendChild(d),
                                              (d = document.createElement("br")),
                                              e.appendChild(d),
                                              (d = document.createElement("br")),
                                              e.appendChild(d),
                                              a(e, new n("Fettucini al Fredo", "$21.95", "Our classic fettucine in cream sauce with red pepper flakes and parsley.", 1)),
                                              a(e, new n("Lasagna Bake", "$26.95", "A delicious sausage lasagna with fresh ricotta, mozzarella, hand made pasta, and our signature red sauce. Only available on SUNDAYS.", 2)),
                                              a(e, new n("Pesto Pappardelle", "$17.95", "Our rustic style pappardelle tossed in a classic pesto sauce containing pine nuts, organic basil, and hand pressed garlic.", 3));
                                      })();
                        })(t.target.id),
                        console.log(t.target.id));
                });
        })();
})();
