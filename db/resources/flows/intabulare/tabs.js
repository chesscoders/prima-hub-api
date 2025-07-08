// resources/flows/intabulare/Tabs/index.js
// ---------------------------------------------------------------------------
// Eight tabs for „Recepția și Intabularea” (flow slug: intabulare)
// Plain‑data objects: { title, html, assets[] }
// Tailwind classes kept via className so the string can be pasted into JSX.
module.exports = [
  /* ----------------------------------------------------------------- 1 */
  {
    title: '1. Anunțare finalizare lucrări',
    html: `
<div className="space-y-4">
  <h3 className="text-xl font-bold">1. Anunțare finalizare lucrări</h3>
  <p>Cu 30 de zile înainte de recepția cu autoritățile, PM‑ul Antreprenorului General notifică oficial Beneficiarul și depune formularele către Primărie și ISC pentru terminarea lucrărilor.</p>
  <p><strong>Documente transmise:</strong></p>
  <ul className="list-disc list-inside space-y-1">
    <li>Cerere tip completată</li>
    <li>Certificat înregistrare firmă</li>
    <li>Dovada plății taxelor către ISC și Primărie</li>
    <li>Autorizațiile de Construire</li>
    <li>Comunicarea AG‑Beneficiar</li>
  </ul>
</div>
`,
    assets: [
      { label: 'Anunț ISC', filename: '1. Exemplu Anunt finalizare ISC.pdf', fileType: 'pdf' },
      {
        label: 'Anunț Primărie',
        filename: '2. Exemplu Anunt finalizare Primarie.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Anunț AG‑Beneficiar',
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
  <p>La finalul proiectului se calculează valoarea reală a lucrărilor pe baza bilanțului contabil și se regularizează taxele către Primărie (0,5 %/1 %/3 %) și ISC (0,5 % / 0,1 %).</p>
  <p><strong>Dosare întocmite:</strong></p>
  <ul className="list-disc list-inside space-y-1">
    <li>Declarație privind valoarea reală a lucrărilor</li>
    <li>Note contabile</li>
    <li>Dovezi de plată inițiale</li>
    <li>Cereri tip către Primărie și ISC</li>
  </ul>
</div>
`,
    assets: [
      {
        label: 'Exemplu Regularizare taxe Primărie',
        filename: '4. Exemplu Regularizare taxe Primarie.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Exemplu Regularizare taxe ISC',
        filename: '5. Exemplu Regularizare taxe ISC.pdf',
        fileType: 'pdf',
      },
      { label: 'Calcul taxe PS2', filename: '6. Calcul taxe PS2.xlsx', fileType: 'csv' },
      { label: 'Calcul taxe ISC', filename: '7. Calcul taxe ISC.xlsx', fileType: 'csv' },
      {
        label: 'Adresă îndreptare eroare AC',
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
  <p>Se invită ISU, Primăria și ISC cu minimum 7 zile înainte. Fiecare autoritate confirmă prin adresă scrisă numele reprezentantului.</p>
  <p><strong>Setul de adrese:</strong></p>
  <ul className="list-disc list-inside space-y-1">
    <li>Desemnare reprezentant ISU</li>
    <li>Convocare Primărie Sector</li>
    <li>Formularele ISC Poz. 14.1 și 14.2</li>
  </ul>
</div>
`,
    assets: [
      { label: 'Exemplu convocare ISU', filename: '9. Exemplu convocare ISU.pdf', fileType: 'pdf' },
      {
        label: 'Exemplu convocare Primărie',
        filename: '10. Exemplu convocare Primarie.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Solicitare reprezentant Comisie RTL (Poz 14.1)',
        filename: '11. Exemplu Poz14.1 SolicitareDesemnareReprezentantComisiaRTL.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Comunicare începere activitate Comisie RTL (Poz 14.2)',
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
  <p>Șantierul trebuie să îndeplinească un checklist de lucrări minimale înainte de recepție. Verificarea se face cu două săptămâni înainte.</p>
</div>
`,
    assets: [
      {
        label: 'Task‑uri Recepția cu Autoritățile',
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
  <p>Se organizează Cartea Tehnică: capitolul A (proiectare), B (execuție), C (recepție) și D (exploatare).</p>
</div>
`,
    assets: [
      { label: 'OPIS capitol C', filename: '14. Exemplu OPIS cap C.docx', fileType: 'doc' },
      { label: 'Exemplu capitol D', filename: '15. Exemplu capitol D.pdf', fileType: 'pdf' },
    ],
  },
  /* ----------------------------------------------------------------- 6 */
  {
    title: '6. Recepția cu Autoritățile',
    html: `
<div className="space-y-4">
  <h3 className="text-xl font-bold">6. Recepția cu Autoritățile</h3>
  <p>Comisia de recepție (ISC, ISU, Primărie, specialiști, Proiectant, Executant) inspectează șantierul și documentația. Recepția este finalizată doar după semnarea PVRTL de toate părțile.</p>
</div>
`,
    assets: [{ label: 'Exemplu PVRTL', filename: '16. Exemplu PVRTL.pdf', fileType: 'pdf' }],
  },
  /* ----------------------------------------------------------------- 7 */
  {
    title: '7. Obținere CAECC',
    html: `
<div className="space-y-4">
  <h3 className="text-xl font-bold">7. Obținere Certificat de Atestare a Edificării Construcțiilor (CAEC)</h3>
  <p>Solicitarea CAEC se depune imediat după PVRTL și este responsabilitatea PM‑ului de Construcție.</p>
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
  <p>Departamentul Dezvoltare depune dosarul la Direcția de Impozite și Taxe Locale, obținând certificatul de înregistrare și certificatele fiscale pentru OCPI și Primărie.</p>
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
