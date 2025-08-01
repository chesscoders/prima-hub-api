const tabs = [
  {
    title: '1. Anunțare finalizare lucrări',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">1. Anunțare finalizare lucrări</h3>
    <p>Cu 30 de zile înainte de Recepția cu Autoritățile, PM-ul Antreprenorului General anunță oficial Beneficiarul că a terminat lucrările de construcție, printr-un formular tip. În aceeași zi, tot PM-ul trimite un formular către Primărie, respectiv către ISC. Acest formular anunță oficial terminarea lucrărilor.</p>
    <p><strong>În această etapă sunt necesare următoarele:</strong></p>
    <ul className="list-disc list-inside pl-4 space-y-1">
      <li>Cerere tip completată</li>
      <li>Certificat înregistrare firmă</li>
      <li>Dovada plăților taxelor către ISC, respectiv către Primărie</li>
      <li>Autorizațiile de Construire</li>
      <li>Comunicarea AG-Beneficiar</li>
    </ul>
  </div>
  `,
    assets: [
      { label: '1. Anunț ISC', filename: '1. Exemplu Anunt finalizare ISC.pdf', fileType: 'pdf' },
      {
        label: '2. Anunț Primărie',
        filename: '2. Exemplu Anunt finalizare Primarie.pdf',
        fileType: 'pdf',
      },
      {
        label: '3. Anunț AG-Beneficiar',
        filename: '3. Exemplu Anunt finalizare AG.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------------- 2 */
  {
    title: '2. Regularizare taxe',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">2. Regularizare taxe</h3>
    <p>Valoarea totală reală a construcției nu reiese din Autorizațiile de Construire, ci dintr-un bilanț contabil. Autorizația de Construire reflectă valoarea proiectată, însă bilanțul contabil definește suma reală a lucrărilor. Astfel, la sfârșitul proiectului este necesară o regularizare a taxelor, atât către primărie, cât și către ISC.</p>
    
    <b>Regularizare taxe primărie -> Declarație emisă de primărie (valoarea lucrărilor)</b>
    <p>Primăria va taxa în final 0,5% pentru locuințe, 1% pentru spațiile comerciale și 3% pentru organizarea de șantier. Pentru calculul final se va scădea valoarea plătită inițial din totalul cuprins în Autorizațiile de Construire. Calculul se va face cu ajutorul excel-ului „Calcul taxe PS2”, de către departamentul de Dezvoltare.</p>

    <p>În această etapă, pentru primărie sunt necesare următoarele:</p>
    <ol className="list-decimal list-inside pl-4 space-y-1">
      <li>Cerere tip completată</li>
      <li>Declarație privind valoarea reală a lucrărilor</li>
      <li>Notă contabilă</li>
      <li>Dovada plății taxelor făcute către Primărie la depunerea Autorizațiilor de Construire</li>
      <li>Certificatul de înregistrare al firmei AG</li>
      <li>Anunț începere lucrări</li>
      <li>Autorizațiile de construire</li>
    </ol>

    <hr />
    <br />
    <b>Regularizare taxe ISC -> Obținere adeverință ISC</b>
    <p>ISC va taxa în final 0,5% pentru Legea 10, 0,1% pentru Legea 50. Pentru calculul final se va scădea valoarea plătită inițial din totalul cuprins în Autorizațiile de Construire. Calculul se va face cu ajutorul excel-ului „Calcul taxe PS2”, de către departamentul de Dezvoltare.</p>
    
    <div>
      <p>În această etapă, pentru primărie sunt necesare următoarele:</p>
      <ol className="list-decimal list-inside pl-4 space-y-1">
        <li>Cerere tip completată (Formular 9)</li>
        <li>Declarație privind valoarea taxelor ISC</li>
        <li>Notă contabilă</li>
        <li>Declarație privind valoarea reală a lucrărilor executate în baza autorizației de construire nr. „x” emisă de Primăria Sectorului x, inclusiv</li>
        <li>Documente de plată pentru care se solicită adeverința, datorate către ISC (Cote 0,1% și 0,25%, inclusiv regularizarea)</li>
        <li>Anunț începere lucrări</li>
        <li>Anunț încheiere lucrări</li>
        <li>Autorizațiile de construire</li>
        <li>Declarație privind valoarea reală a lucrărilor</li>
      </ol>
    </div>

    <b>Observatii:</b>
    <p>1. În cazul proiectului Prima Vista - F2, în trei dintre cele șase autorizații de construire sunt menționate atât valoarea lucrărilor din autorizațiile anterioare, cât și valoarea actualei AC. Pentru eliberarea adeverinței ISC, a fost solicitată obținerea unui document de la PS2, care să specifice, pentru fiecare dintre cele trei AC-uri, că în loc de „x+y+z RON din cele 3 autorizații” se va citi „z RON”. Această etapă poate să nu existe dacă, atunci când se emit noi autorizații de construire, se specifică să nu se treacă valori din alte autorizații precedente. Dacă nu se ține cont în faza de obținere AC de acest aspect, va fi necesar un formular tip, precum cel anexat.</p>
</div>
  `,
    assets: [
      {
        label: '4. Exemplu Regularizare taxe Primărie',
        filename: '4. Exemplu Regularizare taxe Primarie.pdf',
        fileType: 'pdf',
      },
      {
        label: '5. Exemplu Regularizare taxe ISC',
        filename: '5. Exemplu Regularizare taxe ISC.pdf',
        fileType: 'pdf',
      },
      { label: '6. Exemplu Calcul taxe PS2', filename: '6. Calcul taxe PS2.xlsx', fileType: 'csv' },
      { label: '7. Exemplu Calcul taxe ISC', filename: '7. Calcul taxe ISC.xlsx', fileType: 'csv' },
      {
        label: '8. Exemplu Adresă îndreptare eroare AC',
        filename: '8. Exemplu Adresa indreptare eroare citire AC.docx',
        fileType: 'doc',
      },
    ],
  },
  /* ----------------------------------------------------------------- 3 */
  {
    title: '3. Convocare comisie recepție',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">3. Convocare comisie recepție</h3>
    <p>De îndată ce cunoaștem data obținerii Adeverinței de la ISC, se pot demara procedurile de convocare pentru autoritățile implicate în recepție, respectiv Primăria Sectorului, ISC și ISU.</p>

    <hr />
    <br />
    <b>Convocare ISU</b>
    <p>- ISU trebuie convocat/invitat la Recepție cu 1 săptămână înainte de data oficială stabilită de către Investitor. În cazul Prima Vista F2, convocarea s-a făcut prin informarea cu 21 zile calendaristice înainte de data recepției efective.</p>
    <p>- PM-ul depune adresa online la adresa de corespondență ISU: contact@isubif.ro. Această etapă este finalizată când ISU trimite Adresa de răspuns cu membrul desemnat pentru Recepție.</p>
    <br />
    <b>În această etapă sunt necesare următoarele:</b>
    <ol className="list-decimal list-inside pl-4 space-y-1">
      <li>Adresa investitorului pentru desemnarea unui reprezentant ISU</li>
      <li>Autorizația de construire - copie (doar ultima autorizare)</li>
      <li>Avizul ISU care a stat la baza ultimei autorizații</li>
    </ol>

    <hr />
    <br />

    <b>Convocare Primărie</b>
    <p>- Primăria trebuie convocată/invitată la Recepție cu 1 săptămână înainte de data oficială stabilită de către Investitor. În cazul Prima Vista F2, convocarea s-a făcut prin informarea autorităților cu 12 zile calendaristice înainte de data recepției efective.</p>
    <p>- PM-ul depune adresa online la adresa de corespondență cu Primăria Sectorului. Această etapă este finalizată când Primăria trimite Adresa de răspuns cu membrul desemnat pentru Recepție.</p>
    <br />
    <b>În această etapă sunt necesare următoarele:</b>
    <ol className="list-decimal list-inside pl-4 space-y-1">
      <li>Autorizații de Construire</li>
      <li>Punctul de vedere al Proiectanților</li>
      <li>Declarație privind valoarea reală a lucrărilor și dovada achitării diferenței de taxă datorate către Primăria Sector 2 al Municipiului București</li>
      <li>Declarație privind cotele ISC și dovada achitării taxei privind regularizare cote 0,1% și 0,5% datorate către Inspectoratul de Stat în Construcții</li>
      <li>Certificat de performanță energetică a clădirii</li>
    </ol>

    <hr />

    <b>Convocare ISC</b>
    <p>- În cazul ISC sunt 2 documente tipizate ce trebuie trimise în aceeași etapă, însă în mail-uri diferite:</p>
    <ul className="list-disc list-inside pl-8 space-y-1">
      <li>Poz. 14.1 - Solicitare Desemnare Reprezentant Comisie RTL_ISC</li>
      <li>Poz. 14.2 - Comunicare Începere Activitate Comisie RTL_ISC</li>
    </ul>
    <p>- PM-ul depune adresa online la adresa de corespondență: bucuresti-ilfov@isc.gov.ro. Această etapă este finalizată când ISC trimite Adresa de răspuns cu membrul desemnat pentru Recepție.</p>

    <b>În această etapă sunt necesare următoarele:</b>
    <ol className="list-decimal list-inside pl-8 space-y-1">
      <li>Comunicarea executantului către investitor</li>
      <li>Referate de specialitate proiectanți</li>
      <li>Declarație privind valoarea reală a lucrărilor și dovada achitării diferenței de taxă datorate către Primăria Sector 2 al Municipiului București</li>
      <li>Declarație privind cotele ISC și dovada achitării taxei privind regularizare cote 0,1% și 0,5% datorate către Inspectoratul de Stat în Construcții</li>
      <li>Certificat de performanță energetică a clădirii</li>
    </ol>

  </div>
  `,
    assets: [
      {
        label: '9. Exemplu convocare ISU',
        filename: '9. Exemplu convocare ISU.pdf',
        fileType: 'pdf',
      },
      {
        label: '10.Exemplu convocare Primărie',
        filename: '10. Exemplu convocare Primarie.pdf',
        fileType: 'pdf',
      },
      {
        label:
          '11. Exemplu Poz 14.1 Solicitare Desemnare Reprezentant',
        filename: '11. Exemplu Poz14.1 SolicitareDesemnareReprezentantComisiaRTL.pdf',
        fileType: 'pdf',
      },
      {
        label: '12. Exemplu Poz 14.1 Comunicare Incepere Activitate',
        filename: '12. Exemplu Poz14.2ComunicareIncepereActivitateComisieRTL.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------------- 4 */
  {
    title: '4. Pregătire șantier',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">4. Pregătire șantier</h3>
    <p>În momentul recepției cu autoritățile, este obligatoriu ca șantierul să îndeplinească niște condiții minime. În excelul anexat se regăsește un checklist cu toate lucrările ce trebuie finalizate până în momentul recepției.</p>
  </div>
  `,
    assets: [
      {
        label: '13 Task-uri pentru Recepția cu Autoritățile',
        filename: '13. Task-uri pentru Receptia cu Autoritatile.xlsx',
        fileType: 'csv',
      },
    ],
  },
  /* ----------------------------------------------------------------- 5 */
  {
    title: '5. Pregătire documentație',
    html: `
  <div className="space-y-4">
  <h3 className="text-xl font-bold">5. Pregătire documentație</h3>
    <p>
  În această etapă se organizează toate documentele ce privesc proiectul realizat
  (Dezvoltare, Proiectare, Execuție) și se organizează Cartea Tehnică.
</p>

<div class="flex flex-col gap-2">
  <div class="flex flex-col">
    <p class="pb-1 font-bold">Cartea Tehnică cuprinde:</p>
    <p>Capitolul A: Documentația privind proiectarea</p>

    <div class="pl-4">
      <div class="flex w-full justify-between border-b">
        <p>• Autorizațiile de Construire + Proiectul DTAC </p>
        <p>- depDEZVOLTARE</p>
      </div>
      <div class="flex w-full justify-between border-b">
        <p>• Avize și studii cerute în baza Certificatului de Urbanism </p>
        <p>- depDEZVOLTARE</p>
      </div>
      <div class="flex w-full justify-between border-b">
        <p>• Proiectul PTDE </p>
        <p>- depPROIECTARE</p>
      </div>
    </div>

    <div class="flex w-full justify-between border-b">
      <p>Capitolul B: Documentația privind execuția </p>
      <p>- depCALITATE </p>
    </div>
    <div class="flex w-full justify-between border-b">
      <p>Capitolul C: Documentația privind recepția </p>
      <p>- depMANAGEMENT </p>
    </div>

    <p class="pl-4">• Va cuprinde toate punctele enumerate în OPIS</p>

    <div class="flex w-full justify-between gap-24 border-b">
      <p>
        Capitolul D: Documentația privind exploatarea, întreținerea, repararea,
        urmărirea comportării în timp și postutilizarea construcției
      </p>
      <p class="w-[184px]">-depMANAGEMENT </p>
    </div>

    <div class="pl-4">
      <p>• Jurnalul de evenimente </p>
      <p>• Programul de monitorizare a tasărilorr</p>
      <p>• Program de urmărire a structurii </p>
    </div>

    <p>Alte documente esențiale:</p>

    <div class="flex w-full justify-between border-b">
      <p class="pl-4">
        • Certificat Energetic al Clădirii / Apartamente și spații comerciale
        (CPE = Certificat Performanță Energetică)
      </p>
      <p>- depDEZVOLTARE</p>
    </div>
  </div>

  <div class="flex flex-col gap-2 pt-2"></div>
</div>


    
  </div>
  `,
    assets: [
      { label: '14. Exemplu OPIS capitol C', filename: '14. Exemplu OPIS cap C.docx', fileType: 'doc' },
      { label: '15. Exemplu capitol D', filename: '15. Exemplu capitol D.pdf', fileType: 'pdf' },
    ],
  },
  /* ----------------------------------------------------------------- 6 */
  {
    title: '6. Recepția cu Autoritățile',
    html: `
  <div className="space-y-4">
  <h3 className="text-xl font-bold">6. Recepția cu Autoritățile</h3>
    <p>În ziua Recepției cu autoritățile se pregătește o masă de protocol: se comandă prăjituri, apă plată și minerală (0,5L), sucuri, dispenser de cafea.<br>
  În sala în care se ține recepția se va muta Cartea Tehnică, cu toate cele 4 capitole ale sale.
</p>

<p class="font-bold">Componența Comisiei de Recepție:</p>

<div>
  <p class="font-medium">Proiectant General:</p>
  <ul class="list-inside list-disc pl-8">
    <li>1 membru din partea Dezvoltatorului Membrii Comisiei:</li>
    <li>1 inginer constructor - REPR. ISC</li>
    <li>1 expert tehnic - REPR. PS2</li>
    <li>1 colonel - REPR. ISU</li>
    <li>2 ingineri specialiști de la Dezvoltator</li>
  </ul>

  <p class="font-medium">Alți participanți:</p>
  <ul class="list-inside list-disc pl-8">
    <li>Proiectant general</li>
    <li>Executant</li>
  </ul>
</div>

<p>
  Membrii comisiei verifică împreună sau separat atât starea fizică a șantierului, cât și documentația. De regulă, aceștia merg mai întâi în șantier, iar în funcție de starea acestuia, sunt mai stricți sau mai flexibili privind documentația.
</p>

<p>
  Etapa este considerată finalizată când se semnează Procesul Verbal de Recepție la Terminarea Lucrărilor (PVRTL) de către toate părțile implicate.
</p>

<div>
  <p class="font-medium">Ordinea semnăturilor este:</p>
  <ol className="list-inside list-decimal">
    <li>Alți participanți</li>
    <li>Ingineri specialiști</li>
    <li>Repr. ISU</li>
    <li>Repr. ISC</li>
    <li>Repr. PS</li>
    <li>Președinte comisie</li>
  </ol>
</div>

<div>
  <p>Observații:</p>
  <ul className="list-inside list-disc pl-8">
    <li>Comisia trebuie să aibă număr impar de membri</li>
    <li>RTL nu trebuie încheiată în aceeași zi în care începe; semnăturile pot fi obținute ulterior</li>
    <li>Recepția NU este finalizată până la obținerea tuturor semnăturilor</li>
  </ul>
</div>


  </div>
  `,
    assets: [{ label: '16. Exemplu PVRTL', filename: '16. Exemplu PVRTL.pdf', fileType: 'pdf' }],
  },
  /* ----------------------------------------------------------------- 7 */
  {
    title: '7. Obținere CAECC',
    html: `
  <div className="space-y-4">
    <h4 class="text-xl font-bold">
  7. Obținere Certificat de Atestare a Edificării Construcțiilor (CAEC)
    </h4>

  <p>
    Această etapă are în vedere obținerea CAEC-ului, imediat după obținerea PVRTL-ului. 
    Este responsabilitatea PM-ului de Construcție.
  </p>

  <div>
    <p class="font-bold">Documente necesare:</p>
    <ul class="list-inside list-disc pl-8">
      <li>Cerere tipizată pentru obținere CAEC</li>
      <li>Împuternicire reprezentant firmă dezvoltare</li>
      <li>Autorizațiile de Construire</li>
      <li>Procesul Verbal de Recepție la Terminarea Lucrărilor (PVRTL)</li>
      <li>Planul de situație</li>
      <li>Planurile de nivel vizate spre neschimbare</li>
      <li>Planul de Amplasament și Delimitare (PAD)</li>
    </ul>
  </div>

  <div>
    <p class="font-bold">În funcție de primărie/ISC pot fi solicitate suplimentar:</p>
    <ul class="list-inside list-disc pl-8">
      <li>Planurile de nivel (relevee - ridicări cadastrale, vezi punctul 10)</li>
      <li>Certificat fiscal clădire (obținut în urma Înregistrării Clădirii la DITL - vezi punctul 8)</li>
    </ul>
  </div>

  <p>
    Observație:<br>
    În cazul Prima Vista - F2, a fost solicitat și certificatul fiscal ca livrabil 
    obținut la finalizarea activității „Înregistrare clădire la DITL”.
  </p>


  </div>
  `,
    assets: [
      {
        label: 'Exemplu dosar CAEC PS2',
        filename: '17. Exemplu Documentatie depusa pentru obtinere CAEC la PS2.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------------- 8 */
  {
    title: '8. Înregistrare clădire la DITL',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">8. Înregistrare clădire la DITL</h3>
    <p>
  Departamentul Dezvoltare este responsabil de această activitate.<br>
  În această etapă, pentru obținerea documentelor contabile este necesar calculul 
  investiției totale pentru spații comerciale, respectiv pentru locuințe.<br>
  Calculul este realizat de dep. Dezvoltare și trimis către contabilul-șef, 
  care va furniza ulterior documentele necesare.
</p>

<div>
  <p class="font-bold">Documente necesare pentru depunerea dosarului la DITL:</p>
  <ul class="list-inside list-disc pl-8">
    <li>Împuternicire reprezentant firmă de dezvoltare</li>
    <li>Declarația de impunere clădiri rezidențiale / nerezidențiale / mixte</li>
    <li>Autorizațiile de Construire</li>
    <li>Anunț începere lucrări</li>
    <li>Procesul Verbal de Recepție la Terminarea Lucrărilor (PVRTL)</li>
    <li>Declarația Primăriei Sector privind Valoarea Reală</li>
    <li>Balanța de Verificare + Fișa cont defalcată + Fișa cont sumă totală</li>
    <li>Cerere tipizată pentru obținere CF pentru OCPI</li>
    <li>Cerere tipizată pentru obținere CF pentru Primărie</li>
  </ul>
</div>

<div>
  <p class="font-bold">Etapa se încheie atunci când se obțin următoarele livrabile:</p>
  <ul class="list-inside list-disc pl-8">
    <li>Certificat de înregistrare clădire în evidența fiscală</li>
    <li>Certificat Fiscal pentru OCPI</li>
    <li>Certificat Fiscal pentru Primărie</li>
  </ul>
</div>

<p>
  Toate livrabilele sunt obținute în aceeași etapă. Nu sunt necesare mai multe corespondențe 
  între dep. Dezvoltare și DITL, cât timp colaborarea dintre PRIMA și autorități este eficientă, 
  iar cerințele autorităților privind documentele ce trebuie pregătite și depuse sunt foarte bine înțelese.
</p>

  </div>
  `,
    assets: [
      {
        label: 'Documentație depusă la DITL',
        filename: '18. Exemplu Documente depuse la DITL.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Calcul Valoare DITL',
        filename: '19. Exemplu calcul Valoare DITL.xlsx',
        fileType: 'csv',
      },
      {
        label: 'Exemplu livrabile DITL',
        filename: '20. Exemplu livrabile DITL.pdf',
        fileType: 'pdf',
      },
    ],
  },
];
module.exports = {
  tabs,
  flow: 'intabulare',
};
