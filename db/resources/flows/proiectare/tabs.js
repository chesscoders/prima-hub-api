/**
 * resources/flows/proiectare/tabs.js
 */
module.exports = [
  /* -------------------------------------------------------------- 1 */
  {
    flowSlug: 'proiectare',
    slug: '1',
    order: 1,
    title: 'Anunțare finalizare lucrări',
    html: `
<div class="flex flex-col gap-4">
  <h4 class="text-xl font-bold">1. Anunțare finalizare lucrări</h4>
  <p>
    Cu 30 de zile înainte de Recepția cu Autoritățile, PM-ul AG anunță oficial
    Beneficiarul și transmite formularul către Primărie &amp; ISC.
  </p>
  <p class="font-medium">În această etapă sunt necesare:</p>
  <ul class="list-disc list-inside pl-4">
    <li>Cerere tip completată</li><li>Certificat înregistrare firmă</li>
    <li>Dovada plății taxelor</li><li>Autorizațiile de Construire</li>
    <li>Comunicarea AG-Beneficiar</li>
  </ul>
  <p class="text-base font-bold pt-2">Exemple:</p>
  <ul class="list-disc list-inside pl-4 text-sm">
    <li><a data-file="1. Exemplu Anunt finalizare ISC.pdf">1. Anunț ISC</a></li>
    <li><a data-file="2. Exemplu Anunt finalizare Primarie.pdf">2. Anunț Primărie</a></li>
    <li><a data-file="3. Exemplu Anunt finalizare AG.pdf">3. Anunț AG-Beneficiar</a></li>
  </ul>
</div>`,
    assets: [
      { name: '1. Exemplu Anunt finalizare ISC.pdf', type: 'pdf' },
      { name: '2. Exemplu Anunt finalizare Primarie.pdf', type: 'pdf' },
      { name: '3. Exemplu Anunt finalizare AG.pdf', type: 'pdf' },
    ],
    permission: '3',
  },

  /* -------------------------------------------------------------- 2 */
  {
    flowSlug: 'proiectare',
    slug: '2',
    order: 2,
    title: 'Regularizare taxe',
    html: `
<div class="flex flex-col gap-4">
  <h4 class="text-xl font-bold">2. Regularizare taxe</h4>
  <p>
    Se regularizează taxele către Primărie (0,5 / 1 / 3 %) și ISC
    (0,5 / 0,1 %). Calculul se face cu fișierele Excel “Calcul taxe PS2”
    și “Calcul taxe ISC”.
  </p>
  <p class="text-base font-bold pt-2">Documente:</p>
  <ul class="list-disc list-inside pl-4 text-sm">
    <li><a data-file="4. Exemplu Regularizare taxe Primarie.pdf">4. Regularizare Primărie</a></li>
    <li><a data-file="5. Exemplu Regularizare taxe ISC.pdf">5. Regularizare ISC</a></li>
    <li><a data-file="6. Calcul taxe PS2.xlsx">6. Calcul PS2</a></li>
    <li><a data-file="7. Calcul taxe ISC.xlsx">7. Calcul ISC</a></li>
    <li><a data-file="8. Exemplu Adresa indreptare eroare citire AC.docx">8. Îndreptare AC</a></li>
  </ul>
</div>`,
    assets: [
      { name: '4. Exemplu Regularizare taxe Primarie.pdf', type: 'pdf' },
      { name: '5. Exemplu Regularizare taxe ISC.pdf', type: 'pdf' },
      { name: '6. Calcul taxe PS2.xlsx', type: 'csv' },
      { name: '7. Calcul taxe ISC.xlsx', type: 'csv' },
      { name: '8. Exemplu Adresa indreptare eroare citire AC.docx', type: 'doc' },
    ],
    permission: '3',
  },

  /* -------------------------------------------------------------- 3 */
  {
    flowSlug: 'proiectare',
    slug: '3',
    order: 3,
    title: 'Convocare comisie recepție',
    html: `
<div class="flex flex-col gap-4">
  <h4 class="text-xl font-bold">3. Convocare comisie recepție</h4>
  <p>
    După Adeverința ISC se convoacă ISU, Primăria și ISC conform
    termenelor legale.
  </p>
  <p class="text-base font-bold pt-2">Documente:</p>
  <ul class="list-disc list-inside pl-4 text-sm">
    <li><a data-file="9. Exemplu convocare ISU.pdf">9. Convocare ISU</a></li>
    <li><a data-file="10. Exemplu convocare Primarie.pdf">10. Convocare Primărie</a></li>
    <li><a data-file="11. Exemplu Poz14.1 SolicitareDesemnareReprezentantComisiaRTL.pdf">11. Solicitare ISC</a></li>
    <li><a data-file="12. Exemplu Poz14.2ComunicareIncepereActivitateComisieRTL.pdf">12. Comunicare ISC</a></li>
  </ul>
</div>`,
    assets: [
      { name: '9. Exemplu convocare ISU.pdf', type: 'pdf' },
      { name: '10. Exemplu convocare Primarie.pdf', type: 'pdf' },
      { name: '11. Exemplu Poz14.1 SolicitareDesemnareReprezentantComisiaRTL.pdf', type: 'pdf' },
      { name: '12. Exemplu Poz14.2ComunicareIncepereActivitateComisieRTL.pdf', type: 'pdf' },
    ],
    permission: '3',
  },

  /* -------------------------------------------------------------- 4 */
  {
    flowSlug: 'proiectare',
    slug: '4',
    order: 4,
    title: 'Pregătire șantier',
    html: `
<div class="flex flex-col gap-4">
  <h4 class="text-xl font-bold">4. Pregătire șantier</h4>
  <p>
    Se verifică checklist-ul de șantier cu toate lucrările necesare înainte de recepție.
  </p>
  <p class="text-base font-bold pt-2">Documente:</p>
  <ul class="list-disc list-inside pl-4 text-sm">
    <li><a data-file="13. Task-uri pentru Receptia cu Autoritatile.xlsx">13. Checklist șantier</a></li>
  </ul>
</div>`,
    assets: [{ name: '13. Task-uri pentru Receptia cu Autoritatile.xlsx', type: 'csv' }],
    permission: '3',
  },

  /* -------------------------------------------------------------- 5 */
  {
    flowSlug: 'proiectare',
    slug: '5',
    order: 5,
    title: 'Pregătire documentație',
    html: `
<div class="flex flex-col gap-4">
  <h4 class="text-xl font-bold">5. Pregătire documentație</h4>
  <p>Se organizează Cartea Tehnică (capitole A-D) și documentele CPE, OPIS etc.</p>
  <p class="text-base font-bold pt-2">Documente:</p>
  <ul class="list-disc list-inside pl-4 text-sm">
    <li><a data-file="14. Exemplu OPIS cap C.docx">14. OPIS cap C</a></li>
    <li><a data-file="15. Exemplu capitol D.pdf">15. Capitol D</a></li>
  </ul>
</div>`,
    assets: [
      { name: '14. Exemplu OPIS cap C.docx', type: 'doc' },
      { name: '15. Exemplu capitol D.pdf', type: 'pdf' },
    ],
    permission: '3',
  },

  /* -------------------------------------------------------------- 6 */
  {
    flowSlug: 'proiectare',
    slug: '6',
    order: 6,
    title: 'Recepția cu Autoritățile',
    html: `
<div class="flex flex-col gap-4">
  <h4 class="text-xl font-bold">6. Recepția cu Autoritățile</h4>
  <p>Etapa se încheie la semnarea PVRTL de către toți membrii comisiei.</p>
  <p class="text-base font-bold pt-2">Documente:</p>
  <ul class="list-disc list-inside pl-4 text-sm">
    <li><a data-file="16. Exemplu PVRTL.pdf">16. Exemplu PVRTL</a></li>
  </ul>
</div>`,
    assets: [{ name: '16. Exemplu PVRTL.pdf', type: 'pdf' }],
    permission: '3',
  },

  /* -------------------------------------------------------------- 7 */
  {
    flowSlug: 'proiectare',
    slug: '7',
    order: 7,
    title: 'Obținere CAEC',
    html: `
<div class="flex flex-col gap-4">
  <h4 class="text-xl font-bold">7. Obținere CAEC</h4>
  <p>Se depune documentația și se obține Certificatul de Atestare.</p>
  <p class="text-base font-bold pt-2">Documente:</p>
  <ul class="list-disc list-inside pl-4 text-sm">
    <li><a data-file="17. Exemplu Documentatie depusa pentru obtinere CAEC la PS2.pdf">17. Documentație CAEC</a></li>
  </ul>
</div>`,
    assets: [
      { name: '17. Exemplu Documentatie depusa pentru obtinere CAEC la PS2.pdf', type: 'pdf' },
    ],
    permission: '3',
  },

  /* -------------------------------------------------------------- 8 */
  {
    flowSlug: 'proiectare',
    slug: '8',
    order: 8,
    title: 'Înregistrare clădire la DITL',
    html: `
<div class="flex flex-col gap-4">
  <h4 class="text-xl font-bold">8. Înregistrare clădire la DITL</h4>
  <p>Dosarul de înregistrare este depus de Dep. Dezvoltare.</p>
  <p class="text-base font-bold pt-2">Documente:</p>
  <ul class="list-disc list-inside pl-4 text-sm">
    <li><a data-file="18. Exemplu Documente depuse la DITL.pdf">18. Doc. DITL</a></li>
    <li><a data-file="19. Exemplu calcul Valoare DITL.xlsx">19. Calcul Valoare</a></li>
    <li><a data-file="20. Exemplu livrabile DITL.pdf">20. Livrabile</a></li>
  </ul>
</div>`,
    assets: [
      { name: '18. Exemplu Documente depuse la DITL.pdf', type: 'pdf' },
      { name: '19. Exemplu calcul Valoare DITL.xlsx', type: 'csv' },
      { name: '20. Exemplu livrabile DITL.pdf', type: 'pdf' },
    ],
    permission: '3',
  },
];
