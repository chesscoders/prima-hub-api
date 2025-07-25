const tabs = [
  {
    title: '1. Semnalarea problemei',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">1. Semnalarea problemei</h3>
    <p>După recepția apartamentului, clienții pot semnala orice problemă prin platforma <a href="https://comunitate.primadevelopment.ro" className="text-blue-600 underline">comunitate.primadevelopment.ro</a>. Formularele sunt intuitive și permit atașarea de fotografii.</p>
    <p className="font-bold">Categorii prestabilite:</p>
    <ul className="list-disc list-inside pl-4 space-y-1">
      <li>Viciu arhitectură (tencuială, finisaje, tâmplărie)</li>
      <li>Viciu instalații (apă, electricitate, termic)</li>
      <li>Întrebări sau reclamații nespecifice</li>
    </ul>
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
    <p>Responsabilul tehnic de garanții răspunde în maximum 48&nbsp;h lucrătoare, programând o vizită la apartament sau solicitând detalii suplimentare dacă sesizarea este neclară.</p>
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
    <p>Inginerul de garanții evaluează situația pe teren împreună cu clientul și stabilește dacă sesizarea intră în garanție.</p>
    <p className="font-medium">Posibile decizii:</p>
    <ol className="list-decimal list-inside pl-4 space-y-1">
      <li>Problema ține de garanție → se planifică intervenția.</li>
      <li>Problema este minoră → se rezolvă pe loc, dacă este posibil.</li>
      <li>Problema nu ține de garanție → se explică și tichetul se închide cu justificare.</li>
    </ol>
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
    <p>Cazurile simple sunt preluate de echipa internă de 2 zugravi. Lucrările complexe implică colaboratori de pe șantierele PRIMA. Inginerul de garanții programează intervenția și monitorizează execuția până la încheiere.</p>
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
    <p>După finalizarea lucrării, inginerul marchează tichetul ca „rezolvat” în platformă. Clienții pot vedea istoricul complet al sesizării.</p>
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
    <p>PRIMA intervine cât mai rapid posibil; clienții înțelegători sunt programați logic, iar cazurile presante pot primi prioritate.</p>
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
    <p>Apartamentele rămase la vânzare sunt verificate la 4&nbsp;săptămâni în primele 6&nbsp;luni, apoi trimestrial, apoi semestrial, până la vânzare.</p>
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
    <p>În primul an după predare clădirea este inspectată lunar, apoi trimestrial, apoi semestrial pentru a remedia proactiv orice viciu al spațiilor comune.</p>
  </div>
  `,
    assets: [],
  },
];
module.exports = {
  tabs,
  flow: 'remedieri-garantie',
};
