import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .auth-root {
    min-height: 100vh;
    background: #0a0a0f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', sans-serif;
    overflow: hidden;
    position: relative;
  }

  .auth-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 20% 20%, rgba(255,90,60,0.12) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 80% 80%, rgba(80,120,255,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 50% 50%, rgba(255,200,80,0.04) 0%, transparent 60%);
    pointer-events: none;
  }

  .auth-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  .auth-card {
    position: relative;
    width: 420px;
    background: rgba(15,15,22,0.92);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 2px;
    padding: 48px 44px 40px;
    backdrop-filter: blur(20px);
    box-shadow:
      0 0 0 1px rgba(255,90,60,0.08),
      0 40px 80px rgba(0,0,0,0.6),
      inset 0 1px 0 rgba(255,255,255,0.06);
    animation: cardIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(24px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .auth-accent {
    position: absolute;
    top: 0; left: 44px;
    width: 48px; height: 3px;
    background: linear-gradient(90deg, #ff5a3c, #ff9f1c);
    border-radius: 0 0 2px 2px;
  }

  .auth-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
  }

  .auth-logo-mark {
    width: 32px; height: 32px;
    background: linear-gradient(135deg, #ff5a3c, #ff9f1c);
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 14px;
    color: #fff;
    letter-spacing: -0.5px;
  }

  .auth-logo-name {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: rgba(255,255,255,0.9);
    letter-spacing: 0.5px;
  }

  .auth-heading {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.5px;
    line-height: 1.1;
    margin-bottom: 6px;
  }

  .auth-sub {
    font-size: 13.5px;
    color: rgba(255,255,255,0.38);
    font-weight: 300;
    margin-bottom: 36px;
    letter-spacing: 0.1px;
  }

  .auth-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 32px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    position: relative;
  }

  .auth-tab {
    flex: 1;
    background: none;
    border: none;
    padding: 0 0 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    color: rgba(255,255,255,0.3);
    transition: color 0.2s;
    letter-spacing: 0.2px;
    position: relative;
  }

  .auth-tab.active {
    color: #fff;
  }

  .auth-tab-indicator {
    position: absolute;
    bottom: -1px;
    height: 2px;
    background: linear-gradient(90deg, #ff5a3c, #ff9f1c);
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    border-radius: 2px 2px 0 0;
  }

  .auth-field {
    margin-bottom: 18px;
  }

  .auth-label {
    display: block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-bottom: 8px;
  }

  .auth-input-wrap {
    position: relative;
  }

  .auth-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 2px;
    padding: 13px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #fff;
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
  }

  .auth-input::placeholder {
    color: rgba(255,255,255,0.18);
  }

  .auth-input:focus {
    border-color: rgba(255,90,60,0.5);
    background: rgba(255,90,60,0.04);
    box-shadow: 0 0 0 3px rgba(255,90,60,0.08);
  }

  .auth-input.error {
    border-color: rgba(255,60,60,0.5);
    box-shadow: 0 0 0 3px rgba(255,60,60,0.08);
  }

  .auth-input-icon {
    position: absolute;
    right: 14px;
    top: 50%; transform: translateY(-50%);
    cursor: pointer;
    color: rgba(255,255,255,0.25);
    background: none;
    border: none;
    display: flex;
    align-items: center;
    padding: 0;
    transition: color 0.2s;
  }
  .auth-input-icon:hover { color: rgba(255,255,255,0.55); }

  .auth-error-msg {
    margin-top: 6px;
    font-size: 11.5px;
    color: #ff6b6b;
    letter-spacing: 0.1px;
  }

  .auth-forgot {
    display: flex;
    justify-content: flex-end;
    margin-top: -8px;
    margin-bottom: 20px;
  }

  .auth-link {
    font-size: 12px;
    color: rgba(255,90,60,0.8);
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    font-family: 'DM Sans', sans-serif;
    transition: color 0.2s;
  }
  .auth-link:hover { color: #ff5a3c; }

  .auth-terms {
    margin-bottom: 22px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .auth-checkbox {
    width: 16px; height: 16px;
    flex-shrink: 0;
    margin-top: 2px;
    accent-color: #ff5a3c;
    cursor: pointer;
  }

  .auth-terms-text {
    font-size: 12px;
    color: rgba(255,255,255,0.3);
    line-height: 1.5;
  }

  .auth-terms-text a {
    color: rgba(255,90,60,0.8);
    text-decoration: none;
  }
  .auth-terms-text a:hover { color: #ff5a3c; }

  .auth-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #ff5a3c, #ff9f1c);
    border: none;
    border-radius: 2px;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
    position: relative;
    overflow: hidden;
    margin-bottom: 28px;
  }

  .auth-btn:hover:not(:disabled) {
    opacity: 0.92;
    box-shadow: 0 8px 24px rgba(255,90,60,0.3);
    transform: translateY(-1px);
  }

  .auth-btn:active:not(:disabled) { transform: translateY(0); }

  .auth-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .auth-btn-shimmer {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
    transform: translateX(-100%);
    animation: shimmer 2.4s infinite;
  }
  @keyframes shimmer {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .auth-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }
  .auth-divider-line {
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.07);
  }
  .auth-divider-text {
    font-size: 11px;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .auth-social {
    display: flex;
    gap: 10px;
    margin-bottom: 28px;
  }

  .auth-social-btn {
    flex: 1;
    padding: 11px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12.5px;
    color: rgba(255,255,255,0.55);
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
  }
  .auth-social-btn:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255,255,255,0.14);
    color: rgba(255,255,255,0.8);
  }

  .auth-footer {
    text-align: center;
    font-size: 12.5px;
    color: rgba(255,255,255,0.28);
  }

  .auth-success {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px 0;
    animation: cardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .auth-success-icon {
    width: 60px; height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255,90,60,0.15), rgba(255,159,28,0.15));
    border: 1px solid rgba(255,90,60,0.3);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px;
    font-size: 26px;
  }

  .auth-success-title {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 8px;
  }
  .auth-success-msg {
    font-size: 13.5px;
    color: rgba(255,255,255,0.38);
    line-height: 1.6;
    max-width: 280px;
    margin: 0 auto 28px;
  }

  .loading-dots {
    display: inline-flex; gap: 4px; align-items: center;
  }
  .loading-dots span {
    width: 5px; height: 5px;
    background: #fff;
    border-radius: 50%;
    animation: dot 1.2s infinite;
  }
  .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
  .loading-dots span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes dot {
    0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
    40% { opacity: 1; transform: scale(1); }
  }

  .field-animate {
    animation: fieldIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes fieldIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const EyeIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </>
    )}
  </svg>
);

const GoogleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24">
    <path fill="#EA4335" d="M5.26 9.765A7.078 7.078 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.02 3.115z"/>
    <path fill="#34A853" d="M16.04 18.013A7.06 7.06 0 0112 19.09c-2.97 0-5.52-1.817-6.73-4.444l-4.05 3.127C3.198 21.3 7.27 24 12 24c2.933 0 5.735-1.043 7.834-3l-3.794-2.987z"/>
    <path fill="#4A90D9" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"/>
    <path fill="#FBBC05" d="M5.27 14.646A7.15 7.15 0 014.909 12c0-.91.12-1.797.361-2.235l-4.02-3.115A11.96 11.96 0 000 12c0 1.92.445 3.73 1.25 5.34l4.02-3.094z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

function validate(tab, fields) {
  const errs = {};
  if (!fields.email) errs.email = "Email requerido";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Email no válido";
  if (!fields.password) errs.password = "Contraseña requerida";
  else if (fields.password.length < 6) errs.password = "Mínimo 6 caracteres";
  if (tab === "register") {
    if (!fields.name) errs.name = "Nombre requerido";
    if (!fields.agree) errs.agree = "Debes aceptar los términos";
  }
  return errs;
}

export default function AuthComponent() {
  const [tab, setTab] = useState("login");
  const [fields, setFields] = useState({ email: "", password: "", name: "", agree: false });
  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const indicatorStyle = {
    left: tab === "login" ? "0%" : "50%",
    width: "50%",
  };

  const set = (k, v) => {
    setFields(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: undefined }));
  };

  const switchTab = (t) => {
    setTab(t);
    setErrors({});
    setFields({ email: "", password: "", name: "", agree: false });
    setSuccess(false);
  };

  const submit = async () => {
    const errs = validate(tab, fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="auth-root">
        <div className="auth-grid" />
        <div className="auth-card">
          <div className="auth-accent" />

          <div className="auth-logo">
            <div className="auth-logo-mark">AX</div>
            <span className="auth-logo-name">AXIOM</span>
          </div>

          {success ? (
            <div className="auth-success">
              <div className="auth-success-icon">✦</div>
              <div className="auth-success-title">
                {tab === "login" ? "¡Bienvenido de vuelta!" : "¡Cuenta creada!"}
              </div>
              <div className="auth-success-msg">
                {tab === "login"
                  ? "Has iniciado sesión correctamente. Redirigiendo..."
                  : "Tu cuenta ha sido creada. Verifica tu email para continuar."}
              </div>
              <button className="auth-btn" style={{ marginBottom: 0 }} onClick={() => switchTab("login")}>
                <div className="auth-btn-shimmer" />
                Volver al inicio
              </button>
            </div>
          ) : (
            <>
              <div className="auth-heading">
                {tab === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </div>
              <div className="auth-sub">
                {tab === "login" ? "Accede a tu espacio de trabajo." : "Únete a la plataforma hoy."}
              </div>

              <div className="auth-tabs">
                <button className={`auth-tab ${tab === "login" ? "active" : ""}`} onClick={() => switchTab("login")}>
                  Iniciar sesión
                </button>
                <button className={`auth-tab ${tab === "register" ? "active" : ""}`} onClick={() => switchTab("register")}>
                  Registrarse
                </button>
                <div className="auth-tab-indicator" style={indicatorStyle} />
              </div>

              {tab === "register" && (
                <div className="auth-field field-animate">
                  <label className="auth-label">Nombre completo</label>
                  <input
                    className={`auth-input${errors.name ? " error" : ""}`}
                    type="text"
                    placeholder="Juan García"
                    value={fields.name}
                    onChange={e => set("name", e.target.value)}
                  />
                  {errors.name && <div className="auth-error-msg">{errors.name}</div>}
                </div>
              )}

              <div className="auth-field">
                <label className="auth-label">Email</label>
                <input
                  className={`auth-input${errors.email ? " error" : ""}`}
                  type="email"
                  placeholder="tu@email.com"
                  value={fields.email}
                  onChange={e => set("email", e.target.value)}
                />
                {errors.email && <div className="auth-error-msg">{errors.email}</div>}
              </div>

              <div className="auth-field">
                <label className="auth-label">Contraseña</label>
                <div className="auth-input-wrap">
                  <input
                    className={`auth-input${errors.password ? " error" : ""}`}
                    type={showPw ? "text" : "password"}
                    placeholder="••••••••"
                    value={fields.password}
                    onChange={e => set("password", e.target.value)}
                    style={{ paddingRight: 42 }}
                  />
                  <button className="auth-input-icon" onClick={() => setShowPw(p => !p)} tabIndex={-1}>
                    <EyeIcon open={showPw} />
                  </button>
                </div>
                {errors.password && <div className="auth-error-msg">{errors.password}</div>}
              </div>

              {tab === "login" && (
                <div className="auth-forgot">
                  <button className="auth-link">¿Olvidaste tu contraseña?</button>
                </div>
              )}

              {tab === "register" && (
                <div className="auth-terms field-animate">
                  <input
                    className="auth-checkbox"
                    type="checkbox"
                    id="terms"
                    checked={fields.agree}
                    onChange={e => set("agree", e.target.checked)}
                  />
                  <label htmlFor="terms" className="auth-terms-text">
                    Acepto los <a href="#">Términos de Servicio</a> y la <a href="#">Política de Privacidad</a>
                    {errors.agree && <span style={{ display: "block", color: "#ff6b6b", marginTop: 4 }}>{errors.agree}</span>}
                  </label>
                </div>
              )}

              <button className="auth-btn" onClick={submit} disabled={loading}>
                <div className="auth-btn-shimmer" />
                {loading ? (
                  <span className="loading-dots">
                    <span /><span /><span />
                  </span>
                ) : tab === "login" ? "Entrar" : "Crear cuenta"}
              </button>

              <div className="auth-divider">
                <div className="auth-divider-line" />
                <span className="auth-divider-text">o continúa con</span>
                <div className="auth-divider-line" />
              </div>

              <div className="auth-social">
                <button className="auth-social-btn"><GoogleIcon /> Google</button>
                <button className="auth-social-btn"><GithubIcon /> GitHub</button>
              </div>

              <div className="auth-footer">
                {tab === "login" ? (
                  <>¿No tienes cuenta?{" "}
                    <button className="auth-link" onClick={() => switchTab("register")}>Regístrate gratis</button>
                  </>
                ) : (
                  <>¿Ya tienes cuenta?{" "}
                    <button className="auth-link" onClick={() => switchTab("login")}>Inicia sesión</button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
