const tabs = [
  /* ───────────────────────────────────────────────────────── 1 ── */
  {
    order: 1,
    title: '1. Analiza de business',
    html: `
<div class="space-y-4">
  <h3 class="text-xl font-bold">1. Analiza de business</h3>
  <p>TOP Managementul companiei analizează permanent terenuri pe modelul de business‑plan PRIMA: se iau în considerare proiectele în derulare, costurile de dezvoltare, prețurile de vânzare, contextul geopolitic, dinamismul pieței, capacitatea companiei etc.</p>

  <p class="font-bold">Există 3 tipuri de terenuri ce pot fi analizate:</p>
  <ul class="list-disc list-inside">
    <li>Teren fără AC/PUZ</li>
    <li>Teren cu PUZ (Plan Urbanistic Zonal)</li>
    <li>Teren cu AC (Autorizare de Construire)</li>
  </ul>

  <p>În contextul actual (PUZ‑uri anulate) se analizează cu precădere terenuri cu AC.</p>
</div>
`,
    assets: [],
  },

  /* ───────────────────────────────────────────────────────── 2 ── */
  {
    order: 2,
    title: '2. Securizarea Terenului',
    html: `
<div class="space-y-4">
  <h3 class="text-xl font-bold">2. Securizarea Terenului</h3>
  <p>Dacă unul din terenurile analizate este fezabil din punct de vedere al business‑planului (profitabilitatea este în linie cu așteptările) și Top‑Managementul intenționează achiziția acestuia, se va face o securizare a terenului. Această securizare are rolul de a ne asigura că vânzătorul nu vinde terenul în etapa de analiză unui alt potențial cumpărător.</p>
  <p>Securizarea se realizează prin semnarea unui <strong>Memorandum of Understanding</strong> și plata unui avans. Memorandumul acordă 60–75&nbsp;zile pentru Due‑Diligence. Procentul avansului este negociabil.</p>
  <p>Avansurile mari pot fi garantate prin ipotecă asupra terenului sau prin cont&nbsp;Escrow, în funcție de înțelegerea părților.</p>
</div>
`,
    assets: [],
  },

  /* ───────────────────────────────────────────────────────── 3 ── */
  {
    order: 3,
    title: '3. Întocmirea Due Diligence + Analiza Riscurilor',
    html: `
  <div class="space-y-6">
    <h3 class="text-xl font-bold">3. Întocmirea Due Diligence + Analiza Riscurilor</h3>
  
    <p class="font-medium">
      În această etapă se fac următoarele analize juridice și tehnice:
    </p>
  
    <div class="space-y-4">
      <!-- Due Diligence Juridic -->
      <div>
        <p class="font-bold">Due Diligence Juridic</p>
        <ul class="list-disc list-inside pl-4 space-y-1">
          <li>se analizează istoricul dreptului de proprietate și riscurile cu privire la dreptul de proprietate;</li>
          <li>analiza este făcută de un avocat specialist.</li>
        </ul>
      </div>
  
      <!-- Due Diligence Urbanistic -->
      <div>
        <p class="font-bold">Due Diligence Urbanistic</p>
        <ul class="list-disc list-inside pl-4 space-y-1">
          <li>se analizează documentațiile de urbanism pe care terenul le are – PUZ, PUD, AC;</li>
          <li>analiza este făcută de un avocat specialist, însă se consultă în paralel și dep. Proiectare Arhitectură.</li>
        </ul>
      </div>
  
      <!-- Due Diligence Tehnic -->
      <div>
        <p class="font-bold">Due Diligence Tehnic</p>
        <ul class="list-disc list-inside pl-4 space-y-1">
          <li>se analizează branșamentele, studii de mediu, studii geo etc.;</li>
          <li>analiza este făcută de PM‑ul de dezvoltare împreună cu TM‑ul (Adrian).</li>
        </ul>
      </div>
  
      <!-- Analiza de riscuri -->
      <div>
        <p class="font-bold">Analiza de riscuri</p>
        <ul class="list-disc list-inside pl-4 space-y-1">
          <li>se analizează alte riscuri ale dezvoltării (vecini, concurență);</li>
          <li>analiza este făcută de TM, împreună cu dep. Vânzări.</li>
        </ul>
      </div>
    </div>
  
    <p>
      Pentru elaborarea rapoartelor, Vânzătorul trebuie să furnizeze departamentului de Dezvoltare o serie de
      documente imediat după semnarea Memorandului.
    </p>
  
    <h4 class="font-semibold pt-2">Documente:</h4>
    <ul class="list-disc list-inside space-y-1">
      <li>Lista documente necesare DD – teren fără PUZ și AC</li>
      <li>Lista documente necesare DD – teren cu PUZ</li>
      <li>Lista documente necesare DD – teren cu AC</li>
      <li>Exemple documente anexe DD</li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: 'Lista documente necesare DD – teren fără PUZ și AC',
        filename: '1. Lista documente necesare DD_teren fara PUZ si AC.docx',
        fileType: 'doc',
      },
      {
        label: 'Lista documente necesare DD – teren cu PUZ',
        filename: '2. Lista documente necesare DD_teren cu PUZ.docx',
        fileType: 'doc',
      },
      {
        label: 'Lista documente necesare DD – teren cu AC',
        filename: '3. Lista documente necesare DD_teren cu AC.docx',
        fileType: 'doc',
      },
      {
        label: 'Exemple documente anexe DD',
        filename: '4. Exemple documente anexe pentru DD.7z',
        fileType: 'zip',
      },
    ],
  },

  /* ───────────────────────────────────────────────────────── 4 ── */
  {
    order: 4,
    title: '4. Analizarea rapoartelor întocmite',
    html: `
<div class="space-y-4">
  <h3 class="text-xl font-bold">4. Analizarea rapoartelor întocmite</h3>
  <p>Pe baza rapoartelor DD se evaluează factori care pot influența decizia de achiziție:</p>
  <ul class="list-disc list-inside space-y-1">
    <li><b>Vecinii</b> – identitate, umbre, risc de litigii.</li>
    <li><b>Utilități</b> – trasee existente, branșamente disponibile, capacitate rețelei.</li>
    <li><b>Urbanism / Autorizare</b> – coeficienți, PUZ/PUD, riscul anulării PUZ‑ului coordonator.</li>
    <li><b>Drumuri publice pe teren</b> – traseu, impact suprafață.</li>
    <li><b>Acces la drumuri publice</b> – studii trafic, acces fără impedimente.</li>
    <li><b>Studii suplimentare</b> – descărcare arheologică, studii geo, decontaminare.</li>
    <li><b>Concurența</b> – proiecte similare, volum de unități vândute, reputația dezvoltatorilor.</li>
  </ul>
</div>
`,
    assets: [],
  },

  /* ───────────────────────────────────────────────────────── 5 ── */
  {
    order: 5,
    title: '5. Achiziția terenului',
    html: `
<div class="space-y-4">
  <h3 class="text-xl font-bold">5. Achiziția terenului</h3>
  <p>Dacă analiza riscurilor și due‑diligence‑ul sunt favorabile, terenul se cumpără prin:</p>
  <ul class="list-disc list-inside">
    <li><b>Promisiune de Vânzare‑Cumpărare</b> – avans + tranșe ulterioare.</li>
    <li><b>Contract de Vânzare‑Cumpărare</b> – transfer imediat al proprietății cu plata integrală.</li>
  </ul>
</div>
`,
    assets: [],
  },
];
module.exports = { tabs, flow: 'achizitie-teren' };
