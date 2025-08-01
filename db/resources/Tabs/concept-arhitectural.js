const tabs = [
  /* --------------------------------------------------------------------- 1 */
  {
    title: '1. Inițierea concursului',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">1. Inițierea concursului</h3>
    <p>Pentru fiecare proiect dezvoltat de PRIMA, procesul de proiectare arhitecturală începe cu un concurs de concept. Scopul concursului este acela de a studia mai multe variante de concept, pentru a alege cel mai bun concept pentru acea locație, astfel încât proiectul să fie aparte, să devină un reper vizual în zonă sau chiar în oraș.</p>
  
    <ul className="list-disc list-inside pl-4 space-y-1">
      <li>Concursul are loc fie înainte de obținerea autorizației de construire (când există doar PUZ), fie după achiziția terenului, înainte de obținerea unei autorizații de temă modificatoare (când există AC).</li>
      <li>În cazul terenurilor cu PUZ, fără autorizație de construire, concursul de concept va fi unul prin care se vor propune atât mobilarea terenului, cât și fațadele.</li>
      <li>În cazul terenurilor cu autorizație de construire, tema este mai restrictivă, intervențiile se limitează doar la modificările care se pot face prin autorizație de modificare de temă, iar acestea se referă în principal la modificări ale fațadelor.</li>
    </ul>
    
    </hr>

    <h4 className="font-semibold">Compartimentarea apartamentelor</h4>
    <p>În toate proiectele PRIMA, acordăm o atenție deosebită compartimentării apartamentelor, plecând de la experiența acumulată în cei 20 de ani de activitate. Prin apartamentele standardizate PRIMA, ne propunem să:</p>
     <ul className="list-disc list-inside pl-4 space-y-1">
      <li>Asigurăm o experiență optimă a locuirii, raportată la suprafața utilă;</li>
      <li>Oferim cât mai multă lumină naturală;</li>
      <li>Permitem mobilarea practică și un volum generos de spații de depozitare.</li>
    </ul>
    
    <div className="space-y-2">
      <p className="font-medium">1. Proiectele cu documentație urbanistică (PUZ/PUD)</p>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li>Folosim apartamentele standardizate PRIMA încă din faza de temă de proiectare, pentru a ne asigura că suprafețele și compartimentările răspund cerințelor pieței.</li>
      </ul>
      <p className="font-medium">2. Proiectele achiziționate cu Autorizație de Construire</p>
      <p>Înainte de concursul de concept pentru fațade, realizăm o analiză riguroasă a apartamentelor existente. În urma acestei analize pot apărea două direcții de modificare a compartimentării:</p>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><b>Modificarea compartimentărilor interioare și a suprafețelor</b> – aplicată când unele apartamente sunt prea mari și dificil de vândut.</li>
        <li><b>Modificarea exclusivă a compartimentărilor interioare</b> – se poate derula în paralel cu concursul de fațade atunci când este urgentă definitivarea acestora.</li>
      </ul>
    </div>

    <p>În urma acestei analize, pot fi decise două direcții de modificare a compartimentării:</p>

    <p className="pl-2"><b>a) Modificarea compartimentărilor interioare și a suprafețelor unor apartamente</b></p>
     <ul className="list-disc list-inside pl-6 space-y-1">
      <li>Asigurăm o experiență optimă a locuirii, raportată la suprafața utilă;</li>
      <li>Oferim cât mai multă lumină naturală;</li>
      <li>Permitem mobilarea practică și un volum generos de spații de depozitare.</li>
    </ul>

     <p className="pl-2"><b>a) Modificarea exclusivă a compartimentărilor interioare</b></p>
     <ul className="list-disc list-inside pl-6 space-y-1">
      <li>Se poate derula în paralel cu concursul de concepte de fațadă, atunci când e urgentă definitivarea fațadelor în vederea demarării procedurii de autorizare.</li>
      <li>În acest caz, intervențiile la interior nu afectează substanțial modul de așezare a ferestrelor sau a elementelor cheie de pe fațadă.</li>
    </ul>
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
    <p>Tema este redactată de către departamentul de dezvoltare și reflectă cerințele tehnice și ambițiile vizuale ale proiectului.</p>
    <ul className="list-disc list-inside pl-6 space-y-1">
      <li>Include: amplasament, reglementări urbanistice, indicatori doriți, mix de apartamente, materiale, orientare, balcoane.</li>
      <li>Dacă terenul are doar PUZ, tema include și apartamentele standard PRIMA și mixul de apartamente dorit în proiect. Conceptul de mobilare va fi realizat în primul rând pentru a acomoda tipologia de apartamente standard PRIMA, iar livrabilele conceptului vor include planuri de nivel curent care să prezinte integrarea apartamentelor PRIMA.</li>
      <li>Dacă a existat un concept anterior, arhitecții primesc și randările aferente. În lipsa unui concept preexistent, randările nu sunt puse la dispoziție.</li>
      <li>Sunt specificate clar livrabilele și termenul limită de predare.</li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: '1. Exemplu Tema Proiectare - PUZ',
        filename: '1. Exemplu Tema Concurs Concept - PUZ.docx',
        fileType: 'pdf',
      },
      {
        label: '2. Exemplu Tema Proiectare - DTAC',
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
    <p>Sunt invitați 3 birouri de arhitectură cu portofolii relevante pentru contextul urban al Bucureștiului, dintre care fac parte și colegii noștri de la Graphite</p>
    <ul className="list-disc list-inside pl-6 space-y-1">
      <li>Toți primesc aceeași temă și același deadline.</li>
      <li>La început se semnează un contract care transferă drepturile asupra conceptului câștigător către PRIMA.</li>
      <li>Conceptele arhitecturale sunt preluate de o singură persoană desemnată din departamentul de dezvoltare, care este singura ce cunoaște identitatea autorilor.</li>
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
    <p>Toate cele trei concepte sunt prezentate anonim în cadrul unei sesiuni de vot care implică o comunitate variată.</p>
    <ul className="list-disc list-inside pl-6 space-y-1">
      <li>Participanți: angajați PRIMA, echipa de vânzări, clienți anteriori, potențiali clienți.</li>
      <li>Identitatea autorilor rămâne necunoscută până la final.</li>
      <li>Criterii de jurizare: atractivitate comercială, originalitate, fezabilitate, impact vizual.</li>
      <li>Întrebarea esențială: <b>„În care dintre aceste proiecte ai cumpăra un apartament, dacă toate ar avea aceeași locație și același preț?”</b></li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: '3. Tabel centralizare voturi',
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
    <p>După încheierea votului, se declară varianta câștigătoare, fără reluarea procesului.</p>
    <ul className="list-disc list-inside pl-6 space-y-1">
      <li>Arhitectul câștigător primește o primă financiară.</li>
      <li>Este integrat în echipa de proiectare pentru dezvoltarea detaliată a conceptului și coordonare cu echipa internă de proiectare arhitectură, Graphite.</li>
    </ul>
  </div>
  `,
    assets: [],
  },
];
module.exports = { tabs, flow: 'concept-arhitectural' };
