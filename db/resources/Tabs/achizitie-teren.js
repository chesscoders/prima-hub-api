const tabs = [
  /* ───────────────────────────────────────────────────────── 1 ── */
  {
    order: 1,
    title: '1. Analiza de business',
    html: `
<div class="space-y-4">
  <h3 class="text-xl font-bold">1. Analiza de business</h3>
  <p>TOP Managementul companiei analizează permanent terenuri pe modelul de business-plan PRIMA: se iau în considerare proiectele în derulare, costurile de dezvoltare, prețurile de vânzare, contextul geopolitic, dinamismul pieței, capacitatea companiei etc.</p>

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
  <p>Dacă unul din terenurile analizate este fezabil din punct de vedere al business-planului (profitabilitatea este în linie cu așteptările) și Top-Managementul intenționează achiziția acestuia, se va face o securizare a terenului. Această securizare are rolul de a ne asigura că vânzătorul nu vinde terenul în etapa de analiză unui alt potențial cumpărător.</p>
  <p>Securizarea se va face prin semnarea unui memorandum de înțelegere (Memorandum of Understanding) cu vânzătorul și plata unui avans. Memorandumul va prevedea un termen de 60-75 de zile pentru realizarea unei analize Due Diligence. Nu există niște procente standard ce se achită în etapa securizării, decizia plății este subiectivă și ține de înțelegerea dintre Top-Management și Vânzător, în funcție de relația acestora.</p>
  <p>Avansurile mari pot fi garantate prin ipotecă asupra terenului sau prin plata într-un cont Escrow care minimizează riscurile. Instrumentele de garantare pot fi folosite sau nu, în funcție de înțelegerea dintre părți.</p>
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
          <li>se analizează alte riscuri ale dezvoltării unui proiect imobiliar (vecini, concurență)</li>
          <li>analiza este făcută de TM, împreună cu dep. Vânzări.</li>
        </ul>
      </div>
    </div>
  
    <p>
      Pentru a se realiza rapoartele enumerate mai sus, Vânzătorul trebuie să furnizeze departamentului de Dezvoltare o serie de documente, în funcție de tipul terenului. Acestea vor fi solicitate de către dep. Dezvoltare imediat după semnarea Memorandului, pentru a fi ulterior trimise către avocații implicați în această etapă.
    </p>
  </div>
  `,
    assets: [
      {
        label: '1.  Lista documente necesare DD - teren fără PUZ și AC',
        filename: '1. Lista documente necesare DD_teren fara PUZ si AC.docx',
        fileType: 'doc',
      },
      {
        label: '2. Lista documente necesare DD - teren cu PUZ',
        filename: '2. Lista documente necesare DD_teren cu PUZ.docx',
        fileType: 'doc',
      },
      {
        label: '3. Lista documente necesare DD - teren cu AC',
        filename: '3. Lista documente necesare DD_teren cu AC.docx',
        fileType: 'doc',
      },
      {
        label: '4. Exemple documente anexe DD',
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
  <p>Din rapoartele obținute din etapa precedentă se analizează o serie de factori ce pot influența direct sau indirect decizia de cumpărare a terenului în cauză. Din experiența companiei, pot prezenta un risc următoarele aspecte:</p>

<div>
  <h3><b>Vecinii</b> (Reiese din Analiza de riscuri):</h3>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Cine sunt vecinii terenului, cei imediat, dar și cei din planul 2</li>
    <li>În ce măsură ar putea fi vecinii afectați de dezvoltarea proiectului (Ex: umbrire)</li>
    <li>Ce risc există ca vecinii să conteste o dezvoltare imobiliară în instanță (ex: vecini procesomani)</li>
  </ul>
</div>

<div>
  <h3><b>Utilități</b> (Reiese din DD Tehnic):</h3>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Să nu existe trasee de utilități pe teren care ar trebui deviate sau delocate</li>
    <li>Dacă există branșamente la utilități deja pe teren și care sunt acestea. În ce măsură pot fi acestea utilizate pentru proiect</li>
    <li>Dacă există posibilitatea branșării la utilități, ținând cont de utilitățile din zonă și de anvergura dezvoltării imobiliare avute în vedere pentru terenul analizat</li>
  </ul>
</div>

<div>
  <h3><b>Urbanism/Autorizare</b> (Reiese din DD de Urbanism):</h3>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Care sunt coeficienții urbanistici realizabili din punct de vedere legal și ce se poate dezvolta pe acesta.</li>
    <li>Se cer puncte de vedere de la urbanist, consultant juridic în urbanism și se verifică cu autoritatea publică</li>
    <li>Se verifică autorizarea directă / PUD / PUZ cu specialiști și autoritățile publice</li>
    <li>Se verifică riscul anulării PUZ-urilor coordonatoare</li>
  </ul>
</div>

<div>
  <h3><b>Drumuri Publice pe Teren</b>:</h3>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Se verifică eventualele drumuri publice prevăzute în documentații urbanistice generale ce ar traversa terenul.</li>
    <li>Se trasează aceste drumuri cu precizie și se verifică impactul asupra dezvoltării</li>
  </ul>
</div>

<div>
  <h3><b>Accesul la Drumurile Publice</b>:</h3>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Se verifică dacă există acces la drumurile publice</li>
    <li>Se verifică orice îndoieli cu specialiștii în elaborarea studiilor de trafic, pentru confirmarea acceselor fără impedimente</li>
  </ul>
</div>

<div>
  <h3><b>Studii suplimentare</b>:</h3>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Se verifică necesitatea realizării unor studii suplimentare (ex: descărcare arheologică)</li>
  </ul>
</div>

<div>
  <h3><b>Natura Terenului</b> (Reiese din DD Tehnic):</h3>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Se realizează studii geotehnice pentru confirmarea naturii terenului</li>
    <li>Se fac verificări asupra necesității de realizare a decontaminării terenului pentru realizarea proiectului imobiliar</li>
  </ul>
</div>

<div>
  <h3><b>Concurența</b> (Reiese din Analiza de riscuri):</h3>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Se identifică proiectele concurente din zonă, stadiul acestora, numărul de unități dezvoltate în ultimii ani și cele ce urmează a fi dezvoltate</li>
    <li>Se fac verificări cantitative privind unitățile rezidențiale tranzacționate în zonă:
      <ul className="list-none list-inside pl-6 space-y-1">
        <li>▪ Volumul de unități tranzacționat în ultimul an</li>
        <li>▪ Prețurile unitare pe mp util + balcon 50%</li>
        <li>▪ Tipul de unități scoase la vânzare (suprafețe medii, compartimentări, finisaje etc.)</li>
      </ul>
    </li>
    <li>Se verifică aspectele calitative ale proiectelor concurente:
      <ul className="list-none list-inside pl-6 space-y-1">
        <li>▪ Calitatea actului de vânzare</li>
        <li>▪ Reputația dezvoltatorilor concurenți</li>
        <li>▪ Calitatea proiectelor livrate</li>
        <li>▪ Nivelul de calitate al marketingului de proiect</li>
        <li>▪ Calitatea finisajelor oferite</li>
      </ul>
    </li>
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
  <p>Dacă analiza de riscuri și analizele Due Diligence au concluzii pozitive, achiziția terenului se concretizează prin semnarea unei <b>Promisiuni de Vanzare-Cumparare</b>, cu plata unui avans și plata diferenței de preț în una sau mai multe tranșe, sau prin semnarea unui <b>Contract de Vanzare- Cumparare</b>, pentru transferul imediat al dreptului de proprietate, cu plata integrală a terenului.</p>
</div>
`,
    assets: [],
  },
];
module.exports = { tabs, flow: 'achizitie-teren' };
