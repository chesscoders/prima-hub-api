const tabs = [
  {
    title: '1. Pregătirea materialelor predate',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">1. Pregătirea materialelor predate</h3>
      <div className="flex flex-col gap-4">
        <p>
          Procesul de recepție cu clienții se declanșează odată cu finalizarea recepției cu autoritățile și încheierea
          procesului de apartamentare. În acest punct, fiecare apartament primește o identitate juridică distinctă,
          permițând inițierea pașilor de predare către clientul final. Scopul principal al acestui proces este de a
          asigura o tranziție transparentă și profesionistă de la dezvoltator către cumpărător, însoțită de toate
          documentele necesare și de o evaluare tehnică directă a produsului livrat.
        </p>
        <p>
          Primul pas esențial îl reprezintă organizarea tuturor documentelor tehnice și comerciale care însoțesc fiecare
          apartament. Acest proces este coordonat de către departamentul de instalații, care furnizează toate datele
          necesare pentru completarea documentelor de garanție aferente instalațiilor sanitare (Uponor), instalațiilor
          termice (Romstal) și centralei termice individuale (Vaillant).
        </p>
        <p>
          Pe baza acestor informații, partenerii Digital Partners generează în mod automat documentele standardizate,
          care sunt apoi printate și organizate în mape personalizate pentru fiecare furnizor.
        </p>
        <div>
          <b>Pregatirea aplicației FLOW</b>
          <p>
            Introducerea în aplicația FLOW a seriilor de contoare pentru contoarele de utilități ale apartamentelor.
            Aceste serii se vor prelua automat în procesele verbale de citire a contoarelor, generate din aplicația
            FLOW.
          </p>
          <p className="pt-2">
            Odată cu introducerea seriilor de contoare, pot fi completate și citirile acestora direct în aplicație:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Pentru alimentarea cu apă, având în vedere că apartamentele nu au consum între finalizarea lucrărilor și
              predarea către clienți, se pot rotunji valorile în plus. Un consum suplimentar de 50-100 litri poate fi
              suportat de către PRIMA, pentru a acoperi apa consumată în timpul testelor de terasă sau al probelor
              obiectelor sanitare.
            </li>
            <li>
              Dacă apartamentele se predau în perioada de vară-toamnă, când sistemul de încălzire nu este activ, se pot
              introduce și:
              <div className="pl-2">
                <p>○ Citirile de gaz</p>
                <p>○ Citirile calorimetrelor de agent termic (dacă sunt montate)</p>
              </div>
            </li>
            <li>Contoarele de energie electrică se recomandă a fi citite direct în ziua recepției</li>
          </ul>
          <p className="pt-2">
            Totodată, transmiterea tipizatelor pentru procesele verbale către compania Bento, responsabilă de mentenanța
            aplicației FLOW - Recepții, se face de către Project Managerul din departamentul de dezvoltare.
          </p>
        </div>
        <div>
          <p className="font-bold">Documente pregătite de departamentul de instalații:</p>
          <ul className="list-inside list-disc pl-4">
            <li>Certificatul de garanție si Procesul Verbal Uponor (instalații sanitare)</li>
            <li>Certificatul de Garanție Romstal (încălzire în pardoseală)</li>
            <li>Cutiile cu aparatajele montate</li>
            <li>Certificatul energetic al centralei</li>
            <li>Certificatul de conformitate al centralei</li>
            <li>Manualul de utilizare al centralei</li>
          </ul>
        </div>
        <div>
          <b>
            În plus, în fiecare cutie de predare se adaugă planurile tehnice ale apartamentului, tipărite pe hârtie de
            înaltă calitate:
          </b>
          <ul className="list-inside list-disc pl-4">
            <li>Plan prize și forță</li>
            <li>Plan iluminat</li>
            <li>Plan traseu frig</li>
            <li>Schema monofilara</li>
            <li>Plan încălzire în pardoseală</li>
          </ul>
          <p>
            Toate aceste elemente sunt pregătite într-o cutie mare de carton, personalizată pentru client, care va fi
            predată în ziua recepției.
          </p>
        </div>
        <div>
          <b>Întâlnire Kick-off și Ședințe Recurente</b>
          <p>
            Înainte de programarea recepției primelor apartamente, Project Managerul organizează o întâlnire la care
            participă agenții de vânzări, managerul de vânzări și inginerii de garanții. În cadrul acestei întâlniri se
            discută întregul proces de recepție comercială, se recapitulează - pe baza experienței din proiectele
            precedente - care sunt punctele sensibile, cum se abordează discuțiile cu clienții, răspunsurile la
            întrebările frecvente ale acestora, precum și pașii pe care îi parcurge clientul în cadrul recepției
          </p>
        </div>
        <div>
          <p>
            După începerea predării primelor apartamente, Project Managerul organizează o întâlnire o dată la două
            săptămâni, la care participă managerul de vânzări, agenții de vânzări și inginerii de garanții, cu
            următoarea agendă de discuție:
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>Stadiul recepțiilor cu clienții și feedback-ul clienților</li>
            <li>Probleme apărute în cadrul recepțiilor efectuate în săptămâna precedentă</li>
            <li>
              Aspecte ce pot fi îmbunătățite, din punct de vedere tehnic sau al procesului, pentru derularea eficientă a
              recepției cu clienții
            </li>
          </ul>
        </div>
  </div>
  `,
    assets: [
      {
        label: '1. Exemplu Pachet Predat',
        filename: '1. Exemplu Pachet Predat.pdf',
        fileType: 'pdf',
      },
      {
        label: '2. Exemplu certificat Uponor completat',
        filename: '2. Exemplu certificat Uponor completat.pdf',
        fileType: 'pdf',
      },
      {
        label: '3. Exemplu organizare date Uponor',
        filename: '3. Exemplu organizare date Uponor.xlsx',
        fileType: 'csv',
      },
      {
        label: '4. Exemplu certificat Romstal completat',
        filename: '4. Exemplu certificat Romstal completat.pdf',
        fileType: 'pdf',
      },
      {
        label: '5. Exemplu organizare date Romstal',
        filename: '5. Exemplu organizare date Uponor.xlsx',
        fileType: 'csv',
      },
      {
        label: '6. Exemplu certificat garanție PRIMA',
        filename: '6. Exemplu certificate de garantie PRIMA.pdf',
        fileType: 'pdf',
      },
      {
        label: '7. Exemplu planuri instalații',
        filename: '7. Exemplu Planuri Instalatii.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 2 */
  {
    title: '2. Programarea recepției',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">2. Programarea recepției</h3>
      <div className="flex flex-col gap-4">
        <p>Programarea recepțiilor se face de către agenții de vânzări, iar pentru programare se respectă următoarele reguli:</p>
        <ul className="list-inside list-disc pl-4">
          <li>Programarea se face cu cel puțin 48 de ore înainte de data și ora la care va avea loc recepția cu clientul.</li>
          <li>Programarea se introduce în calendarul comun, la care are acces și inginerul de garanții responsabil.</li>
          <li>Fiecare recepție are alocat un interval de o oră, fără suprapuneri.</li>
          <li>Din considerente logistice, nu se programează mai mult de 5 recepții pe zi, în funcție de complexitatea fiecărei recepții.</li>
        </ul>
        <p>
          Calendarul de programări pentru recepțiile cu clienții este setat de către Managerul de Vânzări, sub forma unui document de tip Excel în
          Google Drive sau pe folderul SharePoint de vânzări, iar la acest calendar vor avea acces atât agenții de vânzări, cât și managerul de
          proiect construcții și inginerii de garanții.
        </p>
        <p>
          <b>Gestiunea recepțiilor se face prin aplicația Recepții</b>, parte din suita FLOW, accesibilă la adresa:{' '}
          <Link href="https://receptii.primadevelopment.ro/" target="_blank" className="underline">
            receptii.primadevelopment.ro
          </Link>
          . În această aplicație sunt preluate automat toate apartamentele din aplicația Vânzări, iar înainte ca un apartament să poată fi programat
          pentru recepție, trebuie să parcurgă următorii pași:
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>Marcarea apartamentului ca fiind finalizat - operațiune realizată, în practică, de către Managerul de Proiect.</li>
          <li>Recepția tehnică internă - verificarea apartamentului de către dirigintele de șantier, cu identificarea eventualelor deficiențe.</li>
          <li>Remedierea deficiențelor și confirmarea de către diriginte, tot prin aplicație</li>
        </ul>
        <p>
          După confirmarea remedierilor, apartamentele trec automat în stadiul „Pregătite pentru Recepție Comercială”, moment din care pot fi
          programate pentru întâlnirea cu clientul.
        </p>
        <p>
          Înainte de întâlnirea oficială cu clientul, inginerul de garanții efectuează o inspecție preliminară a apartamentului. Scopul acesteia este
          de a evita situațiile neplăcute care pot apărea în ziua recepției.
        </p>
        <div>
          <p className="font-bold">Verificări preliminare efectuate de inginerul de garanții:</p>
          <ul className="list-inside list-disc pl-4">
            <li>Curățenie general, mirosuri neplăcute</li>
            <li>Lipsa igrasiei sau a altor defecte vizibile</li>
            <li>Prezența tuturor echipamentelor conform Procesului Verbal</li>
            <li>Verificarea funcționalității centralei, a ventilatorului, a instalației de iluminat</li>
            <li>Verificarea teraselor (cuiburi de porumbei, ornamente centrală lipsă)</li>
          </ul>
          <p>
            Nu se intervine asupra fisurilor sau a altor vicii minore, deoarece acestea sunt discutate în prezența clientului, în etapa următoare.
          </p>
        </div>
      </div>
    </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 3 */
  {
    title: '3. Recepția tehnică',
    html: `
  <div className="space-y-4">
    <h4 className="text-xl font-bold">3. Recepția tehnică</h4>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium">
            Recepția se desfășoară în prezența clientului, a agentului de vânzări și a inginerului de garanții. Scopul acestei întâlniri este de a
            preda oficial apartamentul, prezentând din punct de vedere tehnic toate componentele sale și validând împreună funcționalitatea sistemelor
            livrate.
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-bold">În cadrul recepției:</p>
            <ul className="list-inside list-disc pl-4">
              <li>Se explică funcționarea sistemelor de instalații și finisaje.</li>
              <li>
                Se aduce la cunoștință că centrala are nevoie de revizii, conform etichetei de pe aceasta, tâmplăriile trebuie reglate în fiecare
                sezon, termostatul este reîncărcabil.
              </li>
              <li>Se verifică funcționalitatea sistemelor împreună cu clientul.</li>
              <li>Se prezintă obiectele sanitare instalate.</li>
              <li>Se testează pantele balcoanelor.</li>
              <li>Clientul este încurajat să semnaleze eventuale vicii/observații.</li>
            </ul>
            <p>
              Viciile aparente constatate de client sunt notate într-un proces verbal de recepție, completat de agentul de vânzări. În plus, acesta
              din urmă are obligația de a înregistra:
            </p>
            <ul className="list-inside list-disc pl-4">
              <li>Citirile contoarelor de energie electrică</li>
              <li>Citirea apometrelor.</li>
              <li>Citirea contorului de gaz</li>
            </ul>
            <p>La finalul recepției se semnează:</p>
            <ul className="list-inside list-disc pl-4">
              <li>
                <b>Procesul verbal de citire contori</b> - semnat electronic, pe tabletă.
              </li>
              <li>
                <b>Fișa de verificare a apartamentului</b> - semnată electronic, pe tabletă.
              </li>
              <li>
                <b>Procesul verbal de predare a documentației și accesoriilor</b> - semnat olograf, în două exemplare (client + dezvoltator).
              </li>
            </ul>
          </div>
          <p>
            Odată cu semnarea părților pe tabletă și închiderea procesului de recepție cu clienții,{' '}
            <b>Fișa de Verificare a Apartamentului și Procesul-Verbal de Citire a Contorilor</b> sunt trimise automat pe e-mail către colegele de la
            birou, responsabile de semnarea finală a contractelor de vânzare-cumpărare cu clienții. Aceleași documente sunt trimise automat, în
            aceeași etapă, și către client.
          </p>
          <p>
            <b>Raportul cu vicii aparente</b> se încarcă automat în aplicația de flow, de unde inginerul de garanții îl poate descărca și printa
            pentru a trece la următoarea etapă: remedierea viciilor constatate.
          </p>
          <div className="flex flex-col gap-2 pt-2">
            <p className="text-base font-bold">Documente:</p>
            <DownloadButton name="8. Exemplu Proces Verbal Predare-Primire.pdf" fileType="pdf" type="receptie-clienti">
              8. Exemplu Proces Verbal Predare-Primire
            </DownloadButton>
            <DownloadButton name="9. Exemplu Fisa de Verificare a Apartamentului.pdf" fileType="pdf" type="receptie-clienti">
              9. Exemplu Fișă de Verificare a Apartamentulu
            </DownloadButton>
            <DownloadButton name="10. Exemplu Proces Verbal Citire Contori.pdf" fileType="pdf" type="receptie-clienti">
              10. Exemplu Proces Verbal Citire Contori
            </DownloadButton>
          </div>
        </div>
      </div>
  </div>
  `,
    assets: [
      {
        label: '8. Exemplu Proces Verbal Predare-Primire',
        filename: '8. Exemplu Proces Verbal Predare-Primire.pdf',
        fileType: 'pdf',
      },
      {
        label: '9. Exemplu Fișa de Verificare a Apartamentului',
        filename: '9. Exemplu Fisa de Verificare a Apartamentului.pdf',
        fileType: 'pdf',
      },
      {
        label: '10. Exemplu Proces Verbal Citire Contori',
        filename: '10. Exemplu Proces Verbal Citire Contori.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 4 */
  {
    title: '5. Remedierea viciilor constatate',
    html: `
  <div className="space-y-4">
   <h4 className="text-xl font-bold">5. Remedierea viciilor constatate</h4>
      <div className="flex flex-col gap-4">
        <p>
          Toate observațiile clientului validate de inginerul de garanții intră într-un flux formal de remediere. Acestea sunt prioritizate în funcție
          de natura și complexitatea lor și se încadrează într-un termen maxim de 30 de zile calendaristice.
        </p>
        <span>
          <p className="font-bold">Modalități de remediere:</p>
          <ul className="list-inside list-disc pl-4">
            <li>Personal dedicat al departamentului de garanții</li>
            <li>Echipă redirecționată din șantiere (dacă există capacitate disponibilă)</li>
            <li>Colaboratori externi (în cazuri excepționale)</li>
          </ul>
          <p>Departamentul de garanții gestionează și monitorizează fiecare remediere până la închidere.</p>
        </span>
        <p>
          După remedierea viciilor, departamentul de garanții marchează viciile ca fiind remediate în aplicația Recepții, iar clientul primește
          automat un e-mail prin care se confirmă faptul că viciile semnalate în cadrul procesului verbal de inspecție au fost remediate.
        </p>
      </div>
  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 5 */
  {
    title: '5. Situații excepționale - refuzul recepției',
    html: `
  <div className="space-y-4">
    <h4 className="text-xl font-bold">5. Situații excepționale - refuzul recepției</h4>
      <div className="flex flex-col gap-4">
        <p>
          Deși rare, există cazuri în care clientul refuză semnarea recepției. Acestea sunt tratate punctual, cu accent pe găsirea unei soluții
          amiabile. Refuzurile apar, de regulă, atunci când clientul solicită modificări neconforme cu proiectul vândut sau încearcă să impună cerințe
          care nu au fost agreate inițial.
        </p>
        <span>
          <p className="font-bold">Soluții posibile:</p>
          <ul className="list-inside list-disc pl-4">
            <li>Agentul de vânzări gestionează comunicarea și negocierile.</li>
            <li>Se încearcă soluționarea prin compromis (ajustări rezonabile).</li>
            <li>Dacă nu se ajunge la o înțelegere, se poate rezilia promisiunea de vânzare, iar apartamentul este repus în circuitul comercial.</li>
          </ul>
        </span>
      </div>
  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 6 */
];
module.exports = { tabs, flow: 'receptie-clienti' };
