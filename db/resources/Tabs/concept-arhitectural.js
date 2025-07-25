const tabs = [
  /* --------------------------------------------------------------------- 1 */
  {
    title: '1. Inițierea concursului',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">1. Inițierea concursului</h3>
    <p>Pentru fiecare proiect dezvoltat de PRIMA, procesul de proiectare arhitecturală începe cu un concurs de concept. Scopul concursului este acela de a studia mai multe variante de concept pentru a alege cea mai potrivită soluție pentru locație, astfel încât proiectul să devină un reper vizual în zonă sau chiar în oraș.</p>
  
    <ul className="list-disc list-inside space-y-1">
      <li>Concursul are loc fie înainte de obținerea AC (când există doar PUZ), fie după achiziția terenului, înainte de obținerea unei AC de modificare de temă (când există AC).</li>
      <li>În cazul terenurilor cu PUZ, fără AC, concursul va propune atât mobilarea terenului cât și fațadele.</li>
      <li>În cazul terenurilor cu AC, tema este mai restrictivă, intervențiile limitându‑se la modificări realizabile prin AC de modificare de temă, în principal fațade.</li>
    </ul>
  
    <h4 className="font-semibold">Compartimentarea apartamentelor</h4>
    <p>În toate proiectele PRIMA acordăm o atenție deosebită compartimentării apartamentelor, plecând de la experiența acumulată în 20 de ani de activitate.</p>
    <div className="space-y-2 pl-4">
      <p className="font-medium">1. Proiectele cu documentație urbanistică (PUZ/PUD)</p>
      <p>Folosim apartamentele standardizate PRIMA încă din faza de temă de proiectare, pentru a ne asigura că suprafețele și compartimentările răspund cerințelor pieței.</p>
  
      <p className="font-medium">2. Proiectele achiziționate cu Autorizație de Construire</p>
      <p>Înainte de concursul de concept pentru fațade, realizăm o analiză riguroasă a apartamentelor existente. În urma acestei analize pot apărea două direcții de modificare a compartimentării:</p>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><b>Modificarea compartimentărilor interioare și a suprafețelor</b> – aplicată când unele apartamente sunt prea mari și dificil de vândut.</li>
        <li><b>Modificarea exclusivă a compartimentărilor interioare</b> – se poate derula în paralel cu concursul de fațade atunci când este urgentă definitivarea acestora.</li>
      </ul>
    </div>
  </div>
  `,
    assets: [],
  },
  /* --------------------------------------------------------------------- 2 */
  {
    title: '2. Redactarea temei de concurs',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">2. Redactarea temei de concurs</h3>
    <p>Tema este redactată de Departamentul Dezvoltare și reflectă cerințele tehnice și ambițiile vizuale ale proiectului.</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Include amplasament, reglementări urbanistice, indicatori doriți, mix de apartamente, materiale, orientare, balcoane.</li>
      <li>Pentru teren cu PUZ: tema include apartamentele standard PRIMA, iar livrabilele vor conține planuri de nivel cu integrarea apartamentelor standard.</li>
      <li>Pentru teren cu AC: tema este mai restrictivă; arhitecții primesc randările existente dacă acestea există.</li>
      <li>Sunt specificate clar livrabilele și termenul limită.</li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: 'Exemplu Tema Proiectare – PUZ',
        filename: '1. Exemplu Tema Concurs Concept - PUZ.docx',
        fileType: 'pdf',
      },
      {
        label: 'Exemplu Tema Proiectare – DTAC',
        filename: '2. Exemplu Tema Concurs Concept - DTAC.docx',
        fileType: 'pdf',
      },
    ],
  },
  /* --------------------------------------------------------------------- 3 */
  {
    title: '3. Participarea arhitecților și predarea conceptelor',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">3. Participarea arhitecților și predarea conceptelor</h3>
    <p>Sunt invitați trei birouri de arhitectură cu portofolii relevante pentru contextul Bucureștiului, dintre care unul este Graphite.</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Toți primesc aceeași temă și același termen de predare.</li>
      <li>Se semnează un contract care transferă drepturile asupra conceptului câștigător către PRIMA.</li>
      <li>Conceptele sunt preluate anonim de o persoană desemnată din Departamentul Dezvoltare.</li>
    </ul>
  </div>
  `,
    assets: [],
  },
  /* --------------------------------------------------------------------- 4 */
  {
    title: '4. Votarea propunerilor',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">4. Votarea propunerilor</h3>
    <p>Toate cele trei concepte sunt prezentate anonim într‑o sesiune de vot care implică angajați, echipa de vânzări, clienți existenți și potențiali clienți.</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Identitatea autorilor rămâne necunoscută până la final.</li>
      <li>Criterii: atractivitate comercială, originalitate, fezabilitate, impact vizual.</li>
      <li>Întrebarea‑cheie: <b>„În care dintre aceste proiecte ai cumpăra un apartament, dacă toate ar avea aceeași locație și același preț?”</b></li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: 'Tabel centralizare voturi',
        filename: '3. Tabel centralizare voturi.xlsx',
        fileType: 'csv',
      },
    ],
  },
  /* --------------------------------------------------------------------- 5 */
  {
    title: '5. Anunțarea câștigătorului',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">5. Anunțarea câștigătorului</h3>
    <p>După încheierea votului se declară varianta câștigătoare.</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Arhitectul câștigător primește o primă financiară.</li>
      <li>Este integrat în echipa de proiectare pentru dezvoltarea conceptului și coordonare cu biroul intern Graphite.</li>
    </ul>
  </div>
  `,
    assets: [],
  },
];
module.exports = { tabs, flow: 'concept-arhitectural' };
