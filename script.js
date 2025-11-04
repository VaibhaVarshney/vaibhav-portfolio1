:root{
  --bg:#0b1016;
  --panel:#0f172a;
  --text:#e6edf3;
  --muted:#9fb0c3;
  --accent:#0ea5a4; /* teal */
  --accent-2:#14b8a6;
  --ring: rgba(20,184,166,.35);
  --card: #0b1220;
  --card-2: #0e1626;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: linear-gradient(180deg,#0b1016, #0d1117 30%, #0b1016);
  color: var(--text);
  -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
}
img{max-width:100%;display:block}

.container{max-width:1100px;margin:0 auto;padding:0 20px}
.section{padding:72px 0}
.section-title{
  font-size:28px;font-weight:800;margin:0 0 20px;color:#fff;
}

/* NAVBAR */
.navbar{
  position:sticky;top:0;z-index:50;background:rgba(11,16,22,.6);
  backdrop-filter: blur(12px); border-bottom:1px solid rgba(255,255,255,.06)
}
.nav-container{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 20px;max-width:1100px;margin:0 auto}
.brand{color:#fff;text-decoration:none;font-weight:800;letter-spacing:.3px}
.brand-accent{color:var(--accent)}
.nav-menu{display:flex;align-items:center;gap:18px;list-style:none;margin:0;padding:0}
.nav-link{color:var(--muted);text-decoration:none;font-size:14px}
.nav-link:hover{color:#fff}
.hamburger{display:none;flex-direction:column;gap:4px;background:transparent;border:0;cursor:pointer}
.hamburger span{display:block;width:22px;height:2px;background:#94a3b8}

.theme-toggle{
  background:#0b1220;border:1px solid rgba(255,255,255,.1);color:#fff;
  padding:6px 10px;border-radius:999px;cursor:pointer
}

/* HERO */
.hero{position:relative;padding:92px 0 60px;border-bottom:1px solid rgba(255,255,255,.06)}
.hero-bg{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.orb{position:absolute;filter:blur(60px);opacity:.25}
.orb-1{width:420px;height:420px;background:radial-gradient(closest-side, var(--accent-2), transparent);left:-80px;top:-80px}
.orb-2{width:380px;height:380px;background:radial-gradient(closest-side, #4f46e5, transparent);right:-100px;top:-60px;opacity:.18}
.orb-3{width:260px;height:260px;background:radial-gradient(closest-side, #22d3ee, transparent);left:40%;bottom:-80px;opacity:.15}

.hero-inner{display:grid;grid-template-columns:1.3fr .7fr;gap:32px;align-items:center}
.hero-title{font-size:40px;margin:6px 0 8px}
.highlight{color:var(--accent)}
.hero-sub{color:#cbd5e1;margin:0 0 8px}
.hero-desc{color:var(--muted);max-width:60ch}
.badge{display:inline-block;background:#0e1626;border:1px solid rgba(255,255,255,.08);padding:6px 12px;border-radius:999px;color:#cbd5e1;font-size:12px}
.hero-actions{display:flex;gap:12px;margin-top:16px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600}
.btn-primary{background:var(--accent);color:#062726}
.btn-primary:hover{background:var(--accent-2)}
.btn-ghost{border:1px solid rgba(255,255,255,.12);color:#e2e8f0;background:transparent}
.btn-ghost:hover{border-color:rgba(255,255,255,.25)}
.social{display:flex;gap:12px;margin-top:14px}
.social a{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#cbd5e1;text-decoration:none}
.social a:hover{background:rgba(255,255,255,.06)}

.hero-right{display:flex;justify-content:center}
.avatar-ring{
  width:210px;height:210px;border-radius:50%;
  background: radial-gradient(closest-side, rgba(20,184,166,.25), transparent 70%);
  padding:10px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.06)
}
.avatar{
  width:100%;height:100%;object-fit:cover;border-radius:50%;
  border:1px solid rgba(255,255,255,.12)
}

/* GRID / CARDS */
.grid{display:grid;gap:16px}
.grid.two{grid-template-columns:1fr 1fr}
.grid.three{grid-template-columns:repeat(3,1fr)}
@media (max-width:900px){
  .hero-inner{grid-template-columns:1fr}
  .grid.two,.grid.three{grid-template-columns:1fr}
}
.card{
  background:linear-gradient(180deg, var(--card), var(--card-2));
  border:1px solid rgba(255,255,255,.06);
  border-radius:16px;padding:18px 18px 16px;
  box-shadow:0 20px 40px rgba(2,6,23,.25), inset 0 1px 0 rgba(255,255,255,.06)
}
.card-head{display:flex;flex-direction:column;gap:6px;margin-bottom:8px}
.muted{color:var(--muted)}
.bullets{margin:10px 0 0 18px; padding:0; color:#cbd5e1}
.bullets li{margin:6px 0}

.kv{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.kv li{display:flex;align-items:center;justify-content:space-between;border-bottom:1px dashed rgba(255,255,255,.08);padding:8px 0}
.kv li span{color:var(--muted)}
.kv li b, .kv li a{color:#e2e8f0;text-decoration:none}

/* CHIPS / TAGS */
.chips{display:flex;flex-wrap:wrap;gap:10px}
.chip{
  display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;
  background:#0e1626;border:1px solid rgba(255,255,255,.08);color:#cbd5e1;text-decoration:none
}
.chip:hover{border-color:rgba(255,255,255,.18)}

.tags{display:flex;flex-wrap:wrap;gap:8px}
.tags span{
  background:#0e1626;border:1px solid rgba(255,255,255,.08);
  color:#cbd5e1;border-radius:999px;padding:6px 10px;font-size:12px
}

/* FOOTER */
.footer{padding:40px 0;border-top:1px solid rgba(255,255,255,.06);margin-top:40px}
.footer-inner{display:flex;align-items:center;justify-content:space-between;gap:12px}
@media (max-width:700px){.footer-inner{flex-direction:column;text-align:center}}

/* MOBILE NAV */
@media (max-width:980px){
  .nav-menu{position:absolute;right:16px;top:64px;background:#0e1626;border:1px solid rgba(255,255,255,.06);border-radius:12px;flex-direction:column;gap:12px;padding:12px;display:none}
  .nav-menu.show{display:flex}
  .hamburger{display:flex}
}

/* LIGHT THEME (toggle) */
:root.light{
  --bg:#f6f7fb; --panel:#ffffff; --text:#0b1220; --muted:#5b6472;
  --card:#ffffff; --card-2:#f8fafc;
}
:root.light body{background:linear-gradient(180deg,#f6f7fb,#eef2f6)}
:root.light .navbar{background:rgba(255,255,255,.7)}
:root.light .brand{color:#0b1220}
:root.light .nav-link{color:#475569}
:root.light .nav-link:hover{color:#0b1220}
