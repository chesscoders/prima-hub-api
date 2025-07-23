const tabs = [
  {
    title: '1. Pregătirea materialelor predate',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">1. Pregătirea materialelor predate</h3>
  
    <p>Procesul de recepție comercială începe după recepția cu autoritățile și apartamentarea. Departamentul Instalații pregătește documentele tehnice și garanțiile care vor fi livrate clientului.</p>
  
    <p className="font-bold">Documente tehnice și garanții:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li>Certificatul de garanție + PV Uponor (instalații sanitare)</li>
      <li>Certificatul de garanție Romstal (încălzire în pardoseală)</li>
      <li>Certificat garanție PRIMA</li>
      <li>Certificat + manual centrală termică</li>
      <li>Planuri instalații (prize, iluminat, frig, încălzire)</li>
    </ul>
  
    <p>Datele contoarelor și seriile sunt introduse în aplicația FLOW – Recepții înainte de programarea recepției.</p>
  </div>
  `,
    assets: [
      { label: 'Exemplu Pachet Predat', filename: '1. Exemplu Pachet Predat.pdf', fileType: 'pdf' },
      {
        label: 'Certificat Uponor completat',
        filename: '2. Exemplu certificat Uponor completat.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Organizare date Uponor',
        filename: '3. Exemplu organizare date Uponor.xlsx',
        fileType: 'csv',
      },
      {
        label: 'Certificat Romstal completat',
        filename: '4. Exemplu certificat Romstal completat.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Organizare date Romstal',
        filename: '5. Exemplu organizare date Uponor.xlsx',
        fileType: 'csv',
      },
      {
        label: 'Certificat garanție PRIMA',
        filename: '6. Exemplu certificate de garantie PRIMA.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Planuri instalații',
        filename: '7. Exemplu Planuri Instalatii.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 2 */
  {
    title: '2. Întâlnirea Kick‑off și Ședințele Recurente',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">2. Întâlnirea Kick‑off și Ședințele Recurente</h3>
    <p>Înainte de primele recepții, Project Managerul organizează o întâlnire cu agenții de vânzări și inginerii de garanții pentru a stabili procesul, punctele sensibile și răspunsurile standard.</p>
    <p>La fiecare două săptămâni are loc o ședință de follow‑up în care se analizează statusul recepțiilor și feedback‑ul clienților.</p>
  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 3 */
  {
    title: '3. Programarea recepției',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">3. Programarea recepției</h3>
    <p>Recepțiile se programează de către agenții de vânzări cu minimum 48&nbsp;h înainte, într‑un calendar comun. Fiecare interval durează o oră, cu maximum 5 recepții pe zi.</p>
    <p>Înaintea recepției, inginerul de garanții face o inspecție preliminară pentru curățenie și funcționalitatea instalațiilor.</p>
  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 4 */
  {
    title: '4. Recepția tehnică',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">4. Recepția tehnică</h3>
    <p>Recepția se desfășoară cu clientul, agentul de vânzări și inginerul de garanții. Se verifică funcționalitatea instalațiilor, se citesc contoarele și se notează eventualele vicii aparente.</p>
  </div>
  `,
    assets: [
      {
        label: 'Proces Verbal Predare‑Primire',
        filename: '8. Exemplu Proces Verbal Predare-Primire.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Fișa de Verificare a Apartamentului',
        filename: '9. Exemplu Fisa de Verificare a Apartamentului.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Proces Verbal Citire Contori',
        filename: '10. Exemplu Proces Verbal Citire Contori.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 5 */
  {
    title: '5. Remedierea viciilor constatate',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">5. Remedierea viciilor constatate</h3>
    <p>Viciile aparente se remediază într‑un termen maxim de 30&nbsp;zile. Departamentul de garanții prioritizează intervențiile și marchează cazul ca rezolvat în platforma Recepții.</p>
  </div>
  `,
    assets: [],
  },
  /* ----------------------------------------------------------- 6 */
  {
    title: '6. Situații excepționale – refuzul recepției',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">6. Situații excepționale – refuzul recepției</h3>
    <p>În cazuri rare, clientul poate refuza recepția. Agentul de vânzări tratează punctual situația; dacă nu se ajunge la compromis, promisiunea de vânzare poate fi reziliată, iar apartamentul repus la vânzare.</p>
  </div>
  `,
    assets: [],
  },
];
module.exports = { tabs, flow: 'receptie-clienti' };
