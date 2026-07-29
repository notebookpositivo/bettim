// ==== Dados ====
const materiais = [
  { nome: "Metal (ferro, aço)", faixa: "3 kg", pontos: "75 ", cor: "#c98b3b" },
  { nome: "Plástico (garrafas, embalagens)", faixa: "2 kg", pontos: "40 ", cor: "#3c78c2" },
  { nome: "papelão", faixa: "2 kg", pontos: "30 ", cor: "#b58a4a" },
  { nome: "Papel branco (folhas, cadernos)", faixa: "3 kg", pontos: "30 ", cor: "#e6dcbb" },
  { nome: "Vidro", faixa: "2 kg", pontos: "30 ", cor: "#5fb69f" },
  { nome: "Alumínio (latas)", faixa: " 3  kg", pontos: "45 ", cor: "#9b9276" }
];

const lojasParceiras = [
  {nome: "Oxxo", endereco: "Alameda Nothmann", horario: "Seg a Sex, 24 horas"},
  {nome: "Drogasil", endereco: "Avenida Sapopemba, 11180", horario: "Dom a Dom, 7h até 22h"}
]

const cupons = [
  "Vá até uma loja parceira e consulte a % de desconto que você tem com base nos seus pontos adquiridos"
];

const locais = [
  { nome: "EcoPonto Centro", endereco: "Praça Central, 120 — Centro", horario: "Seg a Sáb, 8h às 18h" },
  { nome: "EcoPonto Zona Sul", endereco: "Av. das Palmeiras, 890 — Jardim Sul", horario: "Seg a Sex, 9h às 17h" } 
];

function formatPontosPorKg(value) {
  return `${value} pts/kg`;
}

function calculaRangePontos(faixa, pontos) {
  const match = faixa.match(/(\d+(?:[\.,]\d+)?)\s*kg\s*a\s*(zd+(?:[\.,]\d+)?)\s*kg/i);
  if (!match) return "";
  const minKg = parseFloat(match[1].replace(",", "."));
  const maxKg = parseFloat(match[2].replace(",", "."));
  const minPts = Math.round(minKg * pontos);
  const maxPts = Math.round(maxPts * pontos);
  return `${minKg}-${maxKg} kg => ${minPts}-${maxPts} pontos`;
}

// ==== Páginas ====
const pages = {
  "/": () => `
    <section class="hero">
      <div class="container hero-inner">
        <span class="tag" style="background:rgba(255,255,255,.18);color:#fff">Reciclagem que recompensa</span>
        <h1>Transforme reciclagem em desconto de verdade</h1>
        <p>Entregue seus recicláveis nos EcoPontos, acumule pontos e troque por cupons no comércio parceiro. Simples, justo e sustentável.</p>
        <div class="cta-row">
          <a href="#/parcerias" data-link class="btn btn-primary">Ver recompensas</a>
          <a href="#/locais" data-link class="btn btn-ghost">Encontrar EcoPonto</a>
        </div>
      </div>
    </section>

    <section class="block">
      <div class="container">
        <div class="section-title">
          <h2>Como funciona</h2>
          <p>Três passos e você já está reciclando com recompensa.</p>
        </div>
        <div class="grid grid-3">
          <div class="card">
            <div class="icon">♻</div>
            <h3>1. Separe</h3>
            <p class="muted">Junte metal, plástico, papel ou vidro conforme a nossa tabela de materiais.</p>
          </div>
          <div class="card">
            <div class="icon">📍</div>
            <h3>2. Entregue</h3>
            <p class="muted">Leve até um EcoPonto e pese os materiais com nossa equipe.</p>
          </div>
          <div class="card">
            <div class="icon">🎟️</div>
            <h3>3. Ganhe pontos</h3>
            <p class="muted">Cada kg vira ponto na sua conta. Use pontos para resgatar cupons.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="block">
      <div class="container">
        <div class="banner">
          <div>
            <h3>Comece agora</h3>
            <p>Encontre o EcoPonto mais próximo e transforme sua próxima reciclagem em recompensa.</p>
          </div>
          <a href="#/locais" data-link class="btn btn-primary">Ver locais</a>
        </div>
      </div>
    </section>
  `,

  "/sobre": () => `
    <section class="hero">
      <div class="container hero-inner">
        <h1>Sobre a Eco-Cyclo</h1>
        <p>Uma iniciativa que conecta pessoas, comércio local e o meio ambiente em um ciclo virtuoso de reciclagem.</p>
      </div>
    </section>

    <section class="block">
      <div class="container grid grid-2">
        <div class="card">
          <div class="icon">🌱</div>
          <h3>Quem somos</h3>
          <p class="muted">A EcoCycle é uma empresa voltada para a sustentabilidade, especializada na coleta, separação e destinação correta de materiais recicláveis. Nosso objetivo é reduzir o impacto ambiental, incentivar a reciclagem e contribuir para um futuro mais sustentável</p>
        </div>
        <div class="card">
          <div class="icon">🔁</div>
          <h3>Como funciona</h3>
          <p class="muted"> É uma empresa de reciclagem com um programa de recompensas: A pessoa leva materiais recicláveis, nós pesamos, registramos os pontos, e ela troca esses pontos por descontos em supermercados, lojas de roupas, farmácias ou outras lojas em que temos parceria.</p>
        </div>
        <div class="card">
          <div class="icon">🌍</div>
          <h3>Nosso impacto</h3>
          <p class="muted">A EcoCyclo gera um impacto positivo para o meio ambiente, para a sociedade e para a economia. Ao incentivar a reciclagem por meio de recompensas e descontos, a empresa reduz o descarte incorreto de resíduos, promove a conscientização ambiental e ajuda as pessoas a economizar.</p>
        </div>
        <div class="card">
          <div class="icon">🤝</div>
          <h3>Nossos valores</h3>
          <p class="muted">Transparência, sustentabilidade e parceria. Todo o ciclo — da coleta ao cupom — é rastreável e justo para todas as pontas.</p>
        </div>
      </div>
    </section>
  `,

  "/parcerias": () => `
    <section class="hero">
      <div class="container hero-inner">
        <h1>Parcerias e Recompensas</h1>
        <p>Cada quilo reciclado vira ponto. Cada ponto vira vantagem real no comércio parceiro.</p>
      </div>
    </section>

    <section class="block">
      <div class="container">
        <div class="info-strip">
          <div class="icon">ℹ️</div>
          <div>
            <h3>Como o cupom é financiado</h3>
            <p class="muted">A <strong>Eco-Cyclo financia parte dos cupons</strong> com a venda dos materiais recicláveis coletados. O <strong>comércio parceiro</strong> entra oferecendo promoções que fazem sentido para a sua estratégia — assim o custo é dividido e todos ganham: o consumidor recicla, a loja atrai clientes e o planeta agradece.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="block" style="padding-top:0">
      <div class="container">
        <h2 style="margin-bottom:1.25rem">Tabela de materiais, pontos e descontos</h2>
        <div class="grid grid-3">
          ${materiais.map(m => `
            <article class="card card-soft">
              <div class="mat-swatch" style="background:${m.cor}"></div>
              <h3 style="font-size:1.1rem">${m.nome}</h3>
              <dl class="dl">
                <div class="dl-row"><dt>Faixa aceita</dt><dd>${m.faixa}</dd></div>
                <div class="dl-row"><dt>Ponto</dt><dd>${formatPontosPorKg(m.pontos)}</dd></div>
                <div class="dl-row"><dt>Exemplo</dt><dd>${calculaRangePontos(m.faixa, m.pontos)}</dd></div>
              </dl>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="block" style="padding-top:0">
      <div class="container grid grid-2">
        <div class="card">
          <div class="icon">🪙</div>
          <h3>Modelo cashback em pontos</h3>
          <p class="muted">Você entrega, por exemplo, <strong>5 kg de Metal</strong> e ganha <strong>125 pontos</strong> na sua conta Eco-Cyclo. Os pontos podem ser trocados por cupons em empresas parceiras — cada empresa decide quanto vale cada cupom, oferecendo apenas promoções que fazem sentido para o seu negócio.</p>
          <div class="exchange">
            <span>5 kg de Metal</span>
            <span>→</span>
            <strong>125 pts</strong>
          </div>
        </div>
        <div class="card">
          <div class="icon">🎟️</div>
          <h3>Cupons</h3>
          <ul class="bullets">
            ${cupons.map(c => `<li>${c}</li>`).join("")}
          </ul>
          <p class="small muted" style="margin-top:.75rem">Benefícios que custam pouco para a empresa e valem muito para o consumidor.</p>
        </div>
      </div>
    </section>

    <section class="block" style="padding-top:0">
      <div class="container">
        <div class="banner">
          <div>
            <h3>Seja uma loja parceira</h3>
            <p>Escolha o cupom, defina o valor em pontos, atraia novos clientes.</p>
          </div>
          <a href="mailto:parcerias@ecocyclo.com" class="btn btn-primary">Quero ser parceiro</a>
        </div>
      </div>
    </section>
  `,

  "/locais": () => `
    <section class="hero">
      <div class="container hero-inner">
        <h1>Onde reciclar</h1>
        <p>Pontos de coleta Eco-Cyclo pela cidade. Traga seus recicláveis e comece a acumular pontos.</p>
      </div>
    </section>

    <section class="block">
      <div class="container">
        <div class="grid grid-2">
          ${locais.map(l => `
            <article class="card">
              <div class="icon">📍</div>
              <h3>${l.nome}</h3>
              <p class="muted" style="margin:.25rem 0">${l.endereco}</p>
              <p class="small"><strong>Horário:</strong> ${l.horario}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `
};

// ==== Router hash-based ====
function render() {
  const hash = window.location.hash.replace("#", "") || "/";
  const view = pages[hash] || pages["/"];
  document.getElementById("app").innerHTML = view();
  document.querySelectorAll(".menu a").forEach(a => {
    const target = a.getAttribute("href").replace("#", "");
    a.classList.toggle("active", target === hash);
  });
  document.getElementById("menu")?.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("burger").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("open");
  });
  render();
});
