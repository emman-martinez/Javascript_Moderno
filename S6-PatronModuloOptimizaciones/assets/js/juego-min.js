const miModulo = (() => { "use strict";
    console.log("%cBlack Jack", "color: green; font-weight: bold;"); let e = []; const t = ["C", "D", "H", "S"],
        o = ["A", "J", "Q", "K"]; let n = []; const r = document.querySelector("#btnNuevo"),
        l = document.querySelector("#btnPedir"),
        a = document.querySelector("#btnDetener"),
        c = document.querySelectorAll(".divCartas"),
        d = document.querySelectorAll("small"),
        s = (t = 2) => { e = i(), n = []; for (let e = 0; e < t; e++) n.push(0);
            d.forEach(e => e.innerText = 0), c.forEach(e => e.innerHTML = ""), l.disabled = !1, a.disabled = !1 },
        i = () => { e = []; for (let o = 2; o <= 10; o++)
                for (let n of t) e.push(o + n); for (let n of t)
                for (let t of o) e.push(t + n); return _.shuffle(e) },
        u = () => { if (0 === e.length) throw "No hay cartas en el deck"; return e.pop() },
        g = (e, t) => (n[t] = n[t] + (e => { const t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t })(e), d[t].innerText = n[t], n[t]),
        h = (e, t) => { const o = document.createElement("img");
            o.src = `./assets/cartas/${e}.png`, o.classList.add("carta"), c[t].append(o) },
        f = e => { let t = 0;
            do { const e = u();
                t = g(e, n.length - 1), h(e, n.length - 1) } while (t < e && e <= 21);
            (() => { const [e, t] = n;
                setTimeout(() => { t === e ? alert("Nadie gana :(") : e > 21 ? alert("Computadora gana") : t > 21 ? alert("Jugador gana") : alert("Computadora gana") }, 125) })() }; return l.addEventListener("click", () => { const e = u(),
            t = g(e, 0);
        h(e, 0), t > 21 ? (console.warn("%cLo siento mucho, perdiste", "color: red; font-weight: bold;"), l.disabled = !0, a.disabled = !0, f(t)) : 21 === t && (console.warn("%c21, Genial!", "color:green; font-weight: bold;"), l.disabled = !0, a.disabled = !0, f(t)) }), a.addEventListener("click", () => { l.disabled = !0, a.disabled = !0, f(n[0]) }), r.addEventListener("click", () => { s() }), { nuevoJuego: s } })();