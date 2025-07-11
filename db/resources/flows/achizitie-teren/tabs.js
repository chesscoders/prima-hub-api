module.exports = [
  /* ─────────────────────────────────────────────────────────────────── 1 ── */
  {
    title: '1. Analiza de business',
    html: `
<div className="space-y-4">
  <h3 className="text-xl font-bold">1. Analiza de business</h3>
  <p>TOP Managementul companiei analizează permanent terenuri pe modelul de business-plan PRIMA: se iau în considerare proiectele în derulare, costurile de dezvoltare, prețurile de vânzare, contextul geopolitic, dinamismul pieței, capacitatea companiei etc.</p>

  <p className="font-bold">Există 3 tipuri de terenuri ce pot fi analizate:</p>
  <ul className="list-disc list-inside">
    <li>Teren fără AC/PUZ</li>
    <li>Teren cu PUZ (Plan Urbanistic Zonal)</li>
    <li>Teren cu AC (Autorizare de Construire)</li>
  </ul>

  <p>În contextul actual (PUZ-uri anulate) se analizează cu precădere terenuri cu AC.</p>
</div>
`,
    assets: [],
  },

  /* ─────────────────────────────────────────────────────────────────── 2 ── */
  {
    title: '2. Securizarea Terenului',
    html: `
<div className="space-y-4">
  <h3 className="text-xl font-bold">2. Securizarea Terenului</h3>
  <p>Dacă unul din terenurile analizate este fezabil din punct de vedere al business-planului (profitabilitatea este în linie cu așteptările) și Top-Managementul intenționează achiziția acestuia, se va face o securizare a terenului. Această securizare are rolul de a ne asigura că vânzătorul nu vinde terenul în etapa de analiză unui alt potențial cumpărător.</p>
  <p>Securizarea se realizează prin semnarea unui <strong>Memorandum of Understanding</strong> și plata unui avans. Memorandumul acordă 60–75 zile pentru Due-Diligence. Procentul avansului este negociabil.</p>
  <p>Avansurile mari pot fi garantate prin ipotecă asupra terenului sau prin cont Escrow, în funcție de înțelegerea părților.</p>
</div>
`,
    assets: [],
  },

  /* ─────────────────────────────────────────────────────────────────── 3 ── */
  {
    title: '3. Întocmirea Due Diligence + Analiza Riscurilor',
    html: `
<div className="space-y-4">
  <h3 className="text-xl font-bold">3. Întocmirea Due Diligence + Analiza Riscurilor</h3>

  <p className="font-bold">Analize efectuate:</p>
  <ul className="list-disc list-inside space-y-1">
    <li><b>Due Diligence Juridic</b> – istoricul dreptului de proprietate și riscuri, realizat de avocat specialist.</li>
    <li><b>Due Diligence Urbanistic</b> – analiza PUZ/PUD/AC, realizată de avocat + Proiectare Arhitectură.</li>
    <li><b>Due Diligence Tehnic</b> – branșamente, studii mediu/geo; realizat de PM Dezvoltare &amp; TM.</li>
    <li><b>Analiza de riscuri</b> – vecini, concurență; realizată de TM și Vânzări.</li>
  </ul>

  <p>Vânzătorul trebuie să furnizeze documentele necesare imediat după semnarea Memorandului.</p>

  <h4 className="font-semibold">Documente puse la dispoziție</h4>
  <ul className="list-disc list-inside space-y-1">
    <li>Lista documente necesare DD – teren fără PUZ &amp; AC</li>
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

  /* ─────────────────────────────────────────────────────────────────── 4 ── */
  {
    title: '4. Analizarea rapoartelor întocmite',
    html: `
<div className="space-y-4">
  <h3 className="text-xl font-bold">4. Analizarea rapoartelor întocmite</h3>
  <p>Pe baza rapoartelor DD se evaluează factori care pot influența decizia de achiziție:</p>
  <ul className="list-disc list-inside space-y-1">
    <li><b>Vecinii</b> – identitate, umbre, risc de litigii.</li>
    <li><b>Utilități</b> – trasee existente, branșamente disponibile, capacitate rețelei.</li>
    <li><b>Urbanism / Autorizare</b> – coeficienți, PUZ/PUD, riscul anulării PUZ-ului coordonator.</li>
    <li><b>Drumuri publice pe teren</b> – traseu, impact suprafață.</li>
    <li><b>Acces la drumuri publice</b> – studii trafic, acces fără impedimente.</li>
    <li><b>Studii suplimentare</b> – descărcare arheologică, studii geo, decontaminare.</li>
    <li><b>Concurența</b> – proiecte similare, volum de unități vândute, reputația dezvoltatorilor.</li>
  </ul>
</div>
`,
    assets: [],
  },

  /* ─────────────────────────────────────────────────────────────────── 5 ── */
  {
    title: '5. Achiziția terenului',
    html: `
<div className="space-y-4">
  <h3 className="text-xl font-bold">5. Achiziția terenului</h3>
  <p>Dacă analiza riscurilor și due-diligence-ul sunt favorabile, terenul se cumpără prin:</p>
  <ul className="list-disc list-inside">
    <li><b>Promisiune de Vânzare-Cumpărare</b> – avans + tranșe ulterioare.</li>
    <li><b>Contract de Vânzare-Cumpărare</b> – transfer imediat al proprietății cu plata integrală.</li>
  </ul>
</div>
`,
    assets: [],
  },
];
