const tabs = [
  {
    title: '1. Semnalarea problemei',
    html: `
  <div className="space-y-4">
  <h3 className="text-xl font-bold">1. Semnalarea problemei</h3>
    <p>
  După recepția apartamentului și începerea locuirii, fiecare client intră într-o etapă nouă și importantă: perioada de garanție. 
  Este perioada în care, dincolo de relația contractuală, se consolidează încrederea dintre client și dezvoltator. 
  La PRIMA, acest proces este gestionat prin platforma digitală 
  <a 
    class="text-blue-600 underline hover:text-blue-700" 
    target="_blank" 
    rel="noopener noreferrer" 
    href="https://comunitate.primadevelopment.ro">
    comunitate.primadevelopment.ro
  </a>, 
  unde clienții pot semnala orice problemă legată de construcție, instalații sau finisaje. 
  Remedierea în garanție nu este doar o obligație tehnică, ci și o promisiune respectată - 
  că ceea ce livrăm este, în timp, la înălțimea așteptărilor.
</p>

<p>
  Totul începe cu un cont. Fiecare client primește acces personalizat în platforma PRIMA Comunitate, 
  unde are posibilitatea de a raporta orice neregulă observată în apartament. 
  Procesul este intuitiv: se completează un formular simplu, se selectează tipul problemei, 
  se poate adăuga o fotografie - iar tichetul ajunge instant la echipa de garanții. 
  Platforma nu limitează numărul de tichete; clienții pot semnala mai multe probleme în paralel, fără bătăi de cap.
</p>

<div>
  <p class="font-bold">Ca să fie mai ușor pentru echipă să trieze cererile, există categorii prestabilite:</p>
  <ul class="list-inside list-disc pl-4">
    <li>Viciu arhitectură (ex: tencuială, finisaje, tâmplărie)</li>
    <li>Viciu instalații (ex: apă, electricitate, termic)</li>
    <li>Întrebări sau reclamații nespecifice</li>
  </ul>
</div>

<p>
  Tot ce se trimite este trasabil pe platforma pe care o folosim, iar comunicarea ulterioară rămâne centralizată.
</p>

<div class="flex w-full max-w-3xl flex-col gap-4 pt-2">
  <p class="font-bold">Video - Tutorial aplicație comunitate</p>
  <video controls class="w-full rounded shadow-lg" preload="metadata">
    <source src="https://chesscoders.fra1.digitaloceanspaces.com/prima-hub/remedieri-garantie/Tutorial%20aplicatie%20comunitate.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 2 */
  {
    title: '2. Răspunsul echipei PRIMA',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">2. Răspunsul echipei PRIMA</h3>
    <p>După trimiterea tichetului, responsabilul tehnic de garanții preia sesizarea și are termen intern de maximum 48 de ore lucrătoare pentru a răspunde. În acest timp, clientul primește un apel telefonic sau o notificare direct în platformă, prin care este programată o vizită la fața locului.</p>
    <p>Totul se întâmplă cu ton profesionist, dar prietenos. Scopul este ca până la prima întâlnire, clientul să simtă că a fost auzit. Pentru tichetele incomplete sau ambigue, inginerul cere detalii suplimentare, astfel încât evaluarea din teren să fie cât mai eficientă.</p>
  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 3 */
  {
    title: '3. Constatarea problemei',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">3. Constatarea problemei</h3>
    <p>Vizita de evaluare este un moment-cheie. Inginerul de garanții ajunge la apartament, inspectează problema reclamată împreună cu clientul și decide dacă sesizarea intră în sfera garanției. Este o etapă în care empatia, claritatea și realismul trebuie să coexiste. Uneori, clientul reclamă ceva ce ține de întreținere, nu de construcție. Alteori, problema semnalată e reală, dar complexă și necesită o echipă specializată și o documentare mai amplă a problemei (pot fi necesare și planurile DE)</p>
    
    <p className="font-bold">Sunt trei variante posibile:</p>
    <ol className="list-decimal list-inside pl-4 space-y-1">
      <li>Problema ține de garanție → se continuă cu programarea intervenției.</li>
      <li>Problema este minoră → se rezolvă imediat (unde e posibil).</li>
      <li>Problema nu ține de garanție → se explică direct și clar, iar tichetul este închis cu justificare scrisă.</li>
    </ol>

    <p>Această etapă stabilește tonul întregii colaborări pe garanții. O discuție onestă aici previne conflictele mai târziu. Foarte importantă este estimarea întregii intevenții, deci în această etapă este recomandat să se ia în considerare un buffer de timp.</p>
  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 4 */
  {
    title: '4. Planificarea și execuția lucrării',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">4. Planificarea și execuția lucrării</h3>
    <p>Când o sesizare este validată, se trece la acțiune. Aici intervin logistica și capacitatea de mobilizare. Dacă e o reparație simplă (o retușare, o zugrăveală, o ușă care atinge parchetul), echipa internă – formată din 2 zugravi experimentați - preia rapid cazul. Pentru lucrări mai complexe sau voluminoase, se apelează la colaboratori din șantierele active PRIMA.</p>

    <b>Inginerul de garanții este cel care:</b>
    <ul className="list-disc list-inside pl-4 space-y-1">
      <li>Programează efectiv lucrarea.</li>
      <li>Ține legătura cu clientul pentru detalii și acces.</li>
      <li>Monitorizează intervenția până la încheiere.</li>
      <li>Realizează Protocoale pentru Situațiile de Lucrări ale colaboratorilor.</li>
      <li>Comandă materiale pentru intervenții și menține stoc-ul intern necesar.</li>
      <li>Răspunde de buna funcționare a sistemelor predate către client.</li>
    </ul>

    <p>Nu se întocmesc procese verbale sau hârtii separate. Totul este gestionat digital, iar trasabilitatea fiecărei intervenții este garantată în platforma comunitate.primadevelopment.ro.</p>

  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 5 */
  {
    title: '5. Închiderea + arhivarea tichetului',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">5. Închiderea + arhivarea tichetului</h3>
    <p>După finalizarea lucrării, inginerul revine în platformă și marchează tichetul ca „rezolvat”. În această etapă, nu se mai încarcă poze sau documente - inginerul scrie doar un mesaj clar și concis care reflectă starea finală a intervenției. Clienții, în schimb, au în continuare posibilitatea de a atașa fotografii în cadrul sesizărilor lor.</p>
    <p>În contul său, clientul vede că sesizarea a fost tratată și are acces la tot istoricul tichetelelor, într-o formă simplă și lizibilă.</p> 

    <div>
    <p>Din perspectiva internă, aplicația oferă un tablou de bord util, din care echipa poate analiza rapid:</p>
    <ul className="list-disc list-inside pl-4 space-y-1">
      <li>câte tichete au fost deschise sau rezolvate;</li>
      <li>ce tipuri de probleme predomină într-un proiect;</li>
      <li>ce ritm de reacție are echipa;</li>
      <li>cum evoluează situația de la o lună la alta;</li>
      <li>cum evoluează situația de la o lună la alta;</li>
      </ul>
    </div>

  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 6 */
  {
    title: '6. Observații finale',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">6. Observații finale</h3>
    
    <p>Procesul de garanții nu este doar o procedură, ci o oglindă a seriozității companiei. De aceea, chiar dacă nu există termene contractuale stricte pentru remediere, la PRIMA se intervine cât mai rapid acolo unde e posibil. O problemă mică rezolvată prompt cântărește mai mult decât una mare rezolvată cu întârziere.</p>
    <p>În același timp, ritmul intervențiilor este influențat - firesc - și de tonul relației cu clientul. Cei înțelegători sunt gestionați logic, în ordinea solicitărilor. Cei care pun presiune - civilizat sau nu - primesc, la nevoie, intervenții prioritare.</p>
    <p>Până la final, ceea ce contează este ca fiecare client să simtă că a fost respectat, iar platforma <a class="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer" href="https://comunitate.primadevelopment.ro">comunitate.primadevelopment.ro</a> este structura care face ca acest proces să fie vizibil, predictibil și ordonat.</p>

    </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 7 */
  {
    title: '7. Verificarea și întreținerea apartamentelor nevândute',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">7. Verificarea și întreținerea apartamentelor nevândute</h3>
    
    <p>
  În orice proiect finalizat rămân, inevitabil, câteva apartamente disponibile pentru vânzare. 
  Aceste spații, chiar dacă nu sunt locuite, rămân parte integrantă din imaginea proiectului și a companiei. 
  Ele pot fi vizitate de clienți potențiali oricând, motiv pentru care trebuie să fie păstrate într-o stare impecabilă - 
  atât funcțională, cât și estetică.
</p>

<div>
  <p>
    Timpul are, însă, un efect inevitabil: praf, fisuri fine, mici infiltrări sau dilatări ale materialelor 
    pot apărea chiar și în lipsa locuirii. De aceea, PRIMA are o procedură internă pentru 
    <b>verificarea periodică și întreținerea apartamentelor nevândute</b>, 
    coordonată de către <b>departamentul de garanții</b>.
  </p>
  <ul class="list-inside list-disc pl-4">
    <li>
      La finalizarea unui proiect, se întocmește o <b>listă a apartamentelor rămase la vânzare</b>, 
      cu date exacte despre starea lor la momentul recepției cu autoritățile.
    </li>
    <li>
      În primele 6 luni de la finalizare, apartamentele nevândute sunt 
      <b>verificate la 4 săptămâni</b>.
    </li>
    <li>
      Între lunile 6-12, se realizează <b>verificări trimestriale</b>.
    </li>
    <li>
      După 1 an, frecvența se reduce la o <b>verificare la 6 luni</b>, până la vânzarea apartamentului.
    </li>
  </ul>
</div>

<div>
  <p>Ce se urmărește la fiecare vizită:</p>
  <ul class="list-inside list-disc pl-4">
    <li>Curățenia generală (praf acumulat, urme pe balustrade sau geamuri).</li>
    <li>Posibile fisuri, semne de infiltrații, deteriorări ale tâmplăriei.</li>
    <li>Funcționarea ușilor, geamurilor, prizelor, luminilor.</li>
    <li>Starea balcoanelor și a spațiilor expuse la intemperii.</li>
  </ul>
</div>

<p>
  Orice deficiență identificată este tratată la fel ca în garanțiile clasice. 
  Se creează un tichet intern de intervenție, iar lucrarea este remediată prompt 
  de echipa de garanții sau colaboratori.
</p>

<p>
  Această procedură nu doar că protejează valoarea apartamentului, 
  dar contribuie la păstrarea imaginii generale a proiectului - 
  un detaliu care, adesea, face diferența în ochii unui potențial cumpărător.
</p>


  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 8 */
  {
    title: '8. Monitorizarea clădirii după predare',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">8. Monitorizarea clădirii după predare</h3>
   
    <p>
  Chiar și după ce toate apartamentele au fost predate și recepționate de către clienți,
  clădirea rămâne sub responsabilitatea morală a dezvoltatorului. Nu pentru că există o
  obligație contractuală pentru spațiile comune, ci pentru că întreaga construcție continuă
  să fie cartea noastră de vizită.
</p>

<p>
  În timp, apar mici vicii de execuție sau detalii constructive care „se așază” odată cu
  clădirea. Acestea nu sunt, de regulă, semnalate de către proprietari - pentru că nu țin de
  apartamentele lor - însă ele devin vizibile pentru oricine intră în clădire.
</p>

<div>
  <p>Printre cele mai frecvente probleme întâlnite în primul an de la finalizare:</p>
  <ul class="list-inside list-disc pl-4">
    <li>Placaje ceramice desprinse sau incomplete, din cauza lipirii defectuoase.</li>
    <li>Umflarea panourilor de duropolimer sau desprinderea capacelelor de compozit.</li>
    <li>Uși care se închid greu, mai ales la subsoluri și intrări principale.</li>
    <li>Pavaj care se lasă localizat în zone de trafic intens.</li>
    <li>Fisuri vizibile în pereții holurilor sau zonele comune.</li>
    <li>Corpurile de iluminat exterioare care cedează sau nu mai funcționează.</li>
  </ul>
</div>

<p>
  Toate aceste defecte nu pot fi ignorate, pentru că influențează experiența locuirii,
  impresia vizitatorilor și reputația generală a dezvoltatorului.
</p>

<div>
  <p>De aceea, se instituie o procedură internă de <b>verificare periodică a clădirii după finalizare</b>:</p>
  <ul class="list-inside list-disc pl-4">
    <li>În primele 6 luni: <b>vizite lunare</b> realizate de către responsabilul de garanții sau un tehnic dedicat.</li>
    <li>Între lunile 6-12: <b>verificări la 3 luni</b>.</li>
    <li>După primul an: <b>verificări semestriale</b>, menite să monitorizeze starea generală.</li>
  </ul>
</div>

<div>
  <p>
    Orice viciu identificat este tratat ca o sesizare automată. Nu se așteaptă sesizarea unui
    client - intervenția se face proactiv.
  </p>
  <ul class="list-inside list-disc pl-4">
    <li>Se creează tichet intern.</li>
    <li>Se planifică intervenția.</li>
    <li>Se remediază exact ca într-un caz de garanție obișnuit.</li>
  </ul>
</div>

<p>
  Această practică asigură un standard ridicat de întreținere pentru ansamblurile livrate
  de PRIMA și diferențiază compania într-un mod profund: prin grijă reală, nu doar declarativă,
  față de produsul construit.
</p>


  </div>
  `,
    assets: [],
  },
];
module.exports = {
  tabs,
  flow: 'remedieri-garantie',
};
