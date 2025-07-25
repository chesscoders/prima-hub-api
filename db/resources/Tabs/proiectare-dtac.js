const tabs = [
  {
    title: '1. Anunțare finalizare lucrări',
    html: `
  <div className="flex flex-col gap-4">
    <h4 className="text-xl font-bold">1. Anunțare finalizare lucrări</h4>
    <p>Cu 30 de zile înainte de Recepția cu Autoritățile, PM-ul AG anunță oficial Beneficiarul și transmite formularul către Primărie &amp; ISC.</p>
  
    <p className="font-medium">În această etapă sunt necesare:</p>
    <ul className="list-disc list-inside pl-4">
      <li>Cerere tip completată</li>
      <li>Certificat înregistrare firmă</li>
      <li>Dovada plății taxelor</li>
      <li>Autorizațiile de Construire</li>
      <li>Comunicarea AG-Beneficiar</li>
    </ul>
  
    <p className="text-base font-bold pt-2">Exemple:</p>
    <ul className="list-disc list-inside pl-4 text-sm">
      <li><a data-file="1. Exemplu Anunt finalizare ISC.pdf">1. Anunț ISC</a></li>
      <li><a data-file="2. Exemplu Anunt finalizare Primarie.pdf">2. Anunț Primărie</a></li>
      <li><a data-file="3. Exemplu Anunt finalizare AG.pdf">3. Anunț AG-Beneficiar</a></li>
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

  /* ─────────────────────────────────────────────────────────── 2 ── */
  {
    title: '2. Regularizare taxe',
    html: `
  <div className="flex flex-col gap-4">
    <h4 className="text-xl font-bold">2. Regularizare taxe</h4>
    <p>Se regularizează taxele către Primărie (0,5 / 1 / 3&nbsp;%) și ISC (0,5 / 0,1&nbsp;%).
       Calculul se face cu fișierele Excel “Calcul taxe&nbsp;PS2” și “Calcul taxe&nbsp;ISC”.</p>
  
    <p className="text-base font-bold pt-2">Documente:</p>
    <ul className="list-disc list-inside pl-4 text-sm">
      <li><a data-file="4. Exemplu Regularizare taxe Primarie.pdf">4. Regularizare Primărie</a></li>
      <li><a data-file="5. Exemplu Regularizare taxe ISC.pdf">5. Regularizare ISC</a></li>
      <li><a data-file="6. Calcul taxe PS2.xlsx">6. Calcul PS2</a></li>
      <li><a data-file="7. Calcul taxe ISC.xlsx">7. Calcul ISC</a></li>
      <li><a data-file="8. Exemplu Adresa indreptare eroare citire AC.docx">8. Îndreptare AC</a></li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: '4. Regularizare Primărie',
        filename: '4. Exemplu Regularizare taxe Primarie.pdf',
        fileType: 'pdf',
      },
      {
        label: '5. Regularizare ISC',
        filename: '5. Exemplu Regularizare taxe ISC.pdf',
        fileType: 'pdf',
      },
      { label: '6. Calcul PS2', filename: '6. Calcul taxe PS2.xlsx', fileType: 'csv' },
      { label: '7. Calcul ISC', filename: '7. Calcul taxe ISC.xlsx', fileType: 'csv' },
      {
        label: '8. Îndreptare AC',
        filename: '8. Exemplu Adresa indreptare eroare citire AC.docx',
        fileType: 'doc',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3 ── */
  {
    title: '3. Convocare comisie recepție',
    html: `
  <div className="flex flex-col gap-4">
    <h4 className="text-xl font-bold">3. Convocare comisie recepție</h4>
    <p>După Adeverința ISC se convoacă ISU, Primăria și ISC conform termenelor legale.</p>
  
    <p className="text-base font-bold pt-2">Documente:</p>
    <ul className="list-disc list-inside pl-4 text-sm">
      <li><a data-file="9. Exemplu convocare ISU.pdf">9. Convocare ISU</a></li>
      <li><a data-file="10. Exemplu convocare Primarie.pdf">10. Convocare Primărie</a></li>
      <li><a data-file="11. Exemplu Poz14.1 SolicitareDesemnareReprezentantComisieRTL.pdf">11. Solicitare ISC</a></li>
      <li><a data-file="12. Exemplu Poz14.2ComunicareIncepereActivitateComisieRTL.pdf">12. Comunicare ISC</a></li>
    </ul>
  </div>
  `,
    assets: [
      { label: '9. Convocare ISU', filename: '9. Exemplu convocare ISU.pdf', fileType: 'pdf' },
      {
        label: '10. Convocare Primărie',
        filename: '10. Exemplu convocare Primarie.pdf',
        fileType: 'pdf',
      },
      {
        label: '11. Solicitare ISC',
        filename: '11. Exemplu Poz14.1 SolicitareDesemnareReprezentantComisieRTL.pdf',
        fileType: 'pdf',
      },
      {
        label: '12. Comunicare ISC',
        filename: '12. Exemplu Poz14.2ComunicareIncepereActivitateComisieRTL.pdf',
        fileType: 'pdf',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 4 ── */
  {
    title: '4. Pregătire șantier',
    html: `
  <div className="flex flex-col gap-4">
    <h4 className="text-xl font-bold">4. Pregătire șantier</h4>
    <p>Se verifică checklist-ul de șantier cu toate lucrările necesare înainte de recepție.</p>
  
    <p className="text-base font-bold pt-2">Documente:</p>
    <ul className="list-disc list-inside pl-4 text-sm">
      <li><a data-file="13. Task-uri pentru Receptia cu Autoritatile.xlsx">13. Checklist șantier</a></li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: '13. Checklist șantier',
        filename: '13. Task-uri pentru Receptia cu Autoritatile.xlsx',
        fileType: 'csv',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 5 ── */
  {
    title: '5. Pregătire documentație',
    html: `
  <div className="flex flex-col gap-4">
    <h4 className="text-xl font-bold">5. Pregătire documentație</h4>
    <p>Se organizează Cartea Tehnică (capitole A–D) și documentele CPE, OPIS etc.</p>
  
    <p className="text-base font-bold pt-2">Documente:</p>
    <ul className="list-disc list-inside pl-4 text-sm">
      <li><a data-file="14. Exemplu OPIS cap C.docx">14. OPIS cap C</a></li>
      <li><a data-file="15. Exemplu capitol D.pdf">15. Capitol D</a></li>
    </ul>
  </div>
  `,
    assets: [
      { label: '14. OPIS cap C', filename: '14. Exemplu OPIS cap C.docx', fileType: 'doc' },
      { label: '15. Capitol D', filename: '15. Exemplu capitol D.pdf', fileType: 'pdf' },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 6 ── */
  {
    title: '6. Recepția cu Autoritățile',
    html: `
  <div className="flex flex-col gap-4">
    <h4 className="text-xl font-bold">6. Recepția cu Autoritățile</h4>
    <p>Etapa se încheie la semnarea PVRTL de către toți membrii comisiei.</p>
  
    <p className="text-base font-bold pt-2">Documente:</p>
    <ul className="list-disc list-inside pl-4 text-sm">
      <li><a data-file="16. Exemplu PVRTL.pdf">16. Exemplu PVRTL</a></li>
    </ul>
  </div>
  `,
    assets: [{ label: '16. Exemplu PVRTL', filename: '16. Exemplu PVRTL.pdf', fileType: 'pdf' }],
  },

  /* ─────────────────────────────────────────────────────────── 7 ── */
  {
    title: '7. Obținere CAEC',
    html: `
  <div className="flex flex-col gap-4">
    <h4 className="text-xl font-bold">7. Obținere Certificat de Atestare a Edificării Construcțiilor (CAEC)</h4>
    <p>Se depune documentația și se obține Certificatul de Atestare.</p>
  
    <p className="text-base font-bold pt-2">Documente:</p>
    <ul className="list-disc list-inside pl-4 text-sm">
      <li><a data-file="17. Exemplu Documentatie depusa pentru obtinere CAEC la PS2.pdf">17. Documentație CAEC</a></li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: '17. Documentație CAEC',
        filename: '17. Exemplu Documentatie depusa pentru obtinere CAEC la PS2.pdf',
        fileType: 'pdf',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 8 ── */
  {
    title: '8. Înregistrare clădire la DITL',
    html: `
  <div className="flex flex-col gap-4">
    <h4 className="text-xl font-bold">8. Înregistrare clădire la DITL (Direcția de Impozite și Taxe Locale)</h4>
    <p>Dosarul este întocmit de Dep. Dezvoltare.  La final se obțin certificatul de înregistrare și cele două certificate fiscale.</p>
  
    <p className="text-base font-bold pt-2">Documente:</p>
    <ul className="list-disc list-inside pl-4 text-sm">
      <li><a data-file="18. Exemplu Documente depuse la DITL.pdf">18. Doc. DITL</a></li>
      <li><a data-file="19. Exemplu calcul Valoare DITL.xlsx">19. Calcul Valoare</a></li>
      <li><a data-file="20. Exemplu livrabile DITL.pdf">20. Livrabile</a></li>
    </ul>
  </div>
  `,
    assets: [
      {
        label: '18. Doc. DITL',
        filename: '18. Exemplu Documente depuse la DITL.pdf',
        fileType: 'pdf',
      },
      {
        label: '19. Calcul Valoare',
        filename: '19. Exemplu calcul Valoare DITL.xlsx',
        fileType: 'csv',
      },
      { label: '20. Livrabile', filename: '20. Exemplu livrabile DITL.pdf', fileType: 'pdf' },
    ],
  },
];
module.exports = { tabs, flow: 'proiectare-dtac' };
