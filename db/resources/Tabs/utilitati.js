const tabs = [
  {
    title: '1. Obținerea avizului de principiu',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">1. Obținerea avizului de principiu</h3>
    <h4 className="text-lg font-bold">Scopul avizului</h4>
    <p>Avizul de principiu emis de ApaNova este documentul care ne spune unde ne putem bransa la rețeaua publică de alimentare cu apă și canalizare. Practic, ne oferă punctele de racord posibile, pe baza infrastructurii existente în zonă.</p>
  
    <p className="font-bold">Input necesar pentru depunere:</p>
    <p>Pentru a putea solicita acest aviz, echipa noastră trebuie să pună la dispoziția consultantului următoarele documente:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li><b>Împuternicire</b> din partea dezvoltatorului către firma de consultanță (ex: Miral Instal)</li>
      <li><b>Breviar de calcul</b> cu debitele zilnice de apă necesare (întocmit de IIPC)</li>
      <li><b>Aviz de amplasament rețele</b> emis de Apa Nova - document informativ obținut anterior, care arată dacă pe teren trec rețele existente (nu se confundă cu avizul de la Apele Române)</li>
      <li><b>Ridicare topo in coordonate STEREO70</b> (puncte de contur ale terenului și ale construcțiilor), întocmite de o persoană autorizată în cadastru - de regulă Matei Gogu</li>
    </ul>

    <p className="font-bold">Pașii efectivi:</p>
    <ol className="list-decimal list-inside space-y-1 pl-4">
      <li>Consultantul (Miral Instal) întocmește cererea de emitere a avizului de principiu.</li>
      <li>Cererea, împreună cu documentele menționate, este depusă la ApaNova.</li>
      <li>ApaNova analizează documentația și emite avizul.</li>
    </ol>
    <p>Termen estimat de emitere: aproximativ 3 săptămâni.</p>
  
    <p className="font-bold">Ce poate solicita ApaNova prin aviz:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li>Întotdeauna este necesară o declarație notarială din partea beneficiarului, prin care acesta își asumă executarea rețelei conform soluției tehnice.</li>
      <li>Dacă traseul rețelei trece pe un alt teren, se solicită și declarații notariale de acces din partea vecinilor (ex. Montrom, Tamilia), în care aceștia își dau acordul pentru trecerea conductei.</li>
    </ul>

    <p>Documente anexe:</p>
  </div>
  `,
    assets: [
      {
        label: 'Exemplu imputernicire Miral',
        filename: '1. Exemplu imputernicire Miral.DOCX',
        fileType: 'doc',
      },
      {
        label: 'Exemplu breviar calcul necesar apa',
        filename: '2. Exemplu breviar calcul necesar apa.docx',
        fileType: 'doc',
      },
      {
        label: 'Exemplu Aviz de Amplasament Retele ApaNova',
        filename: '3. Exemplu Aviz de Amplasament Retele ApaNova.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Exemplu Ridicare topo in coordonate STEREO70',
        filename: '4. Exemplu Ridicare topo in coordonate STEREO70.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Exemplu Aviz de Principiu-output',
        filename: '5. Exemplu Aviz de Principiu-output.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 2 */
  {
    title: '2. Obținerea avizului tehnic (definitiv)',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">2. Obținerea avizului tehnic (definitiv)</h3>

    <h4 className="text-lg font-bold">Scopul avizului</h4>
    <p>Avizul tehnic, denumit uneori și „aviz definitiv”, este documentul emis de Apa Nova care confirmă soluția finală de branșament. Cu alte cuvinte, validează gândirea tehnică propusă de proiectanți și stabilește în mod oficial unde și cum ne putem bransa.</p>
  
    <p className="font-bold">Input necesar pentru obținerea avizului:</p>
    <p>Deși Apa Nova solicită în mod formal proiecte complete de instalații, în această etapă nu avem proiectele finalizate, astfel că transmitem doar breviarele de calcul, suficiente pentru emiterea avizului tehnic:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li><b>Breviar de calcul pentru consumul menajer</b> al instalațiilor sanitare, aferent întregii incinte (atât pentru dezvoltarea actuală, cât și pentru eventuale faze viitoare)</li>
      <li><b>Breviar de calcul pentru instalațiile de stingere a incendiilor</b>, cu volumul total al rezervei intangibile de incendiu</li>
      <li><b>Debitul de refacere al rezervei de incendiu</b> și <b>timpul de reîncărcare</b>, , pentru toate sistemele din incintă (hidranți interiori, exteriori, sprinklere, sprinkle deschise etc.)</li>
    </ul>

    <p className="font-bold">Vizita oficială în șantier:</p>
    <p>Ca parte din această etapă, se organizează o vizită oficială în teren, convocată prin e-mail către Apa Nova. În urma acesteia:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li>Apa Nova trimite un reprezentant tehnic pe șantier</li>
      <li>Se semnează un proces-verbal sau alt document formal de constatare</li>
      <li>La vizită participă fie project managerul de dezvoltare, fie proiectantul de instalații, dacă PM-ul nu are pregătirea tehnică necesară pentru a purta discuția</li>
    </ul>

    <p className="font-bold">Ce urmează după emiterea avizului:</p>
    <p>După emiterea avizului tehnic:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li>Apa Nova întocmește proiectul de branșament, pe baza soluției aprobate</li>
      <li>Acest proiect este pus la dispoziția colaboratorilor noștri, care urmează să execute efectiv lucrările în teren</li>
    </ul>
  
    <p>Documente anexe:</p>
    </div>
  `,
    assets: [
      {
        label: 'Exemplu calcule parte scrisa',
        filename: '6. Exemplu calcule parte scrisa.docx',
        fileType: 'doc',
      },
      {
        label: 'Exemplu Aviz Tehnic-output',
        filename: '7. Exemplu Aviz Tehnic-output.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Exemplu Proiect APA-output',
        filename: '8. Exemplu Proiect APA-output.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Logigrama proces bransare ApaNova',
        filename: '9. Logigrama proces bransare ApaNova.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 3 */
  {
    title: '3. Obținerea acordului de execuție ADP',
    html: `
  <div className="space-y-4">
    
    <h3 className="text-xl font-bold">3. Obținerea acordului de execuție ADP</h3>
    <p>(Administrația Străzilor - Direcția Drumuri - Primăria Municipiului București)</p>

    <h4 className="text-lg font-bold">Scopul acordului</h4>
    <p>Pentru a putea executa fizic lucrările de branșament în domeniul public (carosabil, trotuar etc.), este necesar acordul administratorului de drum – în București, acesta este emis de către Direcția Drumuri din cadrul PMB (ADP).</p>
  
    <p className="font-bold">Cum se obține:</p>
    <ol className="list-decimal list-inside space-y-1 pl-4">
      <li>Consultantul (ex: Miral Instal) solicită Certificat de Urbanism (CU) de la PMB, specific pentru lucrarea de branșament.</li>
      <li>Pe baza CU, consultantul obține toate avizele menționate ca obligatorii în acesta (ex: aviz Poliție Rutieră, aviz TST etc.).</li>
      <li>După completarea dosarului cu avizele și documentația tehnică, se depune cererea pentru acordul de execuție ADP.</li>
    </ol>
    <p>Documentația tehnică utilizată în această etapă este <b>proiectul de branșament</b> întocmit deja de Apa Nova, în urma emiterii avizului tehnic din etapa anterioară.</p>

    <p className="font-bold">Observație:</p>
    <p>Fără acest acord, nu se pot deschide șantiere în domeniul public, indiferent dacă avizul tehnic Apa Nova a fost deja emis.</p>

    <p>Documente anexe:</p>
</div>
  `,
    assets: [
      {
        label: 'Exemplu acord de executie ADP',
        filename: '10. Exemplu acord de executie ADP.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 4 */
  {
    title: '4. Semnarea contractului de execuție (tripartit)',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">4. Semnarea contractului de execuție (tripartit)</h3>
    
    <h4 className="text-lg font-bold">Scopul contractului</h4>
    <p>Pentru a putea începe lucrările de branșament, este necesară încheierea unui contract tripartit între:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li>Beneficiarul lucrării (dezvoltatorul)</li>
      <li>Apa Nova București (ANB)</li>
      <li>Executantul lucrărilor - firmă acreditată Apa Nova</li>
    </ul>
    <p>Acest contract stabilește clar responsabilitățile fiecărei părți și permite legal începerea execuției în teren.</p>

    <p className="font-bold">Input necesar pentru semnare:</p>
    <ol className="list-decimal list-inside space-y-1 pl-4">
      <li>Oferta de preț din partea constructorului care va realiza branșamentul</li>
      <li>Cererea oficială către ANB pentru executarea lucrărilor</li>
      <li>Alegerea subcontractorului pentru execuția lucrărilor - acesta trebuie să fie agreat și acreditat de Apa Nova (ex: Miral Instal)</li>
      <li>Semnarea efectivă a contractului tripartit între beneficiar, Apa Nova și executant</li>
    </ol>

    <p className="font-bold">Observație:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li>Fără acest contract, nu se pot demara lucrările de branșament, chiar dacă toate avizele au fost deja obținute.</li>
      <li>Contractul este verificat și validat de departamentul juridic al Apa Nova înainte de semnare.</li>
    </ul>

    <p>Documente anexe:</p>
    </div>
  `,
    assets: [
      {
        label: 'Exemplu contract tripartit',
        filename: '11. Exemplu contract tripartit.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 5 */
  {
    title: '5. Execuția lucrărilor',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">5. Execuția lucrărilor</h3>
    
    <h4 className="text-lg font-bold">Scopul etapei</h4>
    <p>Aceasta este etapa propriu-zisă de realizare a branșamentului în teren, conform proiectului tehnic aprobat de Apa Nova. Lucrările sunt executate de către firma autorizată, sub supravegherea Apa Nova și în baza ordinului de începere.</p>
  
    <p className="font-bold">Input necesar & pași de parcurs:</p>
    <ol className="list-decimal list-inside space-y-1 pl-4">
      <li><b>Solicitare oficială către Apa Nova</b> 
      <br />
      Executantul (ex. Miral Instal) transmite în scris solicitarea de emitere a ordinului de începere a lucrărilor.</li>

      <li><b>Emiterea ordinului de începere</b> 
      <br />
      Apa Nova emite ordinul în maximum 3 zile lucrătoare de la primirea cererii.</li>

      <li><b>Execuția efectivă a lucrărilor</b> 
      <br />
      Lucrările de branșament sunt realizate conform proiectului aprobat – săpături, montaj conducte, racorduri etc</li>
      
      <li><b>Montarea contorului de apă</b> 
      <br />
      În această etapă se montează contorul, care va măsura consumul ulterior, înregistrat în baza de date Apa Nova.</li>
      
      <li><b>Recepția lucrărilor</b> 
      <br />
      La finalul lucrărilor, se organizează o recepție oficială împreună cu reprezentantul Apa Nova. Se semnează un proces-verbal de recepție, care confirmă că lucrarea s-a executat corect și poate fi pusă în funcțiune</li>
    </ol>
  
    <p>Documente anexe:</p>
</div>
  `,
    assets: [
      {
        label: 'Exemplu ordin incepere lucrari',
        filename: '12. Exemplu ordin incepere lucrari.pdf',
        fileType: 'pdf',
      },
      {
        label: 'Exemplu PV receptie',
        filename: '13. Exemplu PV receptie.pdf',
        fileType: 'pdf',
      },
    ],
  },
  /* ----------------------------------------------------------- 6 */
  {
    title: '6. Încheierea contractului de furnizare servicii',
    html: `
  <div className="space-y-4">
    <h3 className="text-xl font-bold">6. Încheierea contractului de furnizare servicii</h3>

    <h4 className="text-lg font-bold">Scopul etapei</h4>
    <p>După finalizarea lucrărilor și recepția lor de către Apa Nova, se poate încheia contractul de furnizare servicii apă și canalizare, care permite efectiv utilizarea rețelei nou executate. Acesta este documentul prin care branșamentul intră în exploatare.</p>
  
  <p className="font-bold">Input necesar & pași de parcurs:</p>
    <ol className="list-decimal list-inside space-y-1 pl-4">
      <li><b>Transmiterea dosarului complet către Apa Nova</b> 
      <br />
      Dosarul include:
      <br />
      <ul className="list-disc list-inside space-y-1 pl-4">
        <li>Procesul-verbal de recepție a lucrărilor</li>
        <li>Copii după avize și acorduri</li>
        <li>Documente de identificare ale beneficiarului (firmă sau persoană fizică)</li>
        <li>Codul de client, dacă există deja</li>
      </ul>
      </li>

      <li><b>Încheierea contractului</b> 
      <br />
      Contractul se semnează între beneficiar și Apa Nova, iar contorul montat este legat în sistemul lor de facturare.</li>

      <li><b>Activarea serviciului</b> 
      <br />
      După semnare, serviciul de alimentare cu apă și canalizare este activ și factura poate fi emisă în mod legal.</li>
    </ol>

    <p className="font-bold">Observație:</p>
    <ul className="list-disc list-inside space-y-1 pl-4">
      <li>Dacă branșamentul deservește o asociație de proprietari, contractul se poate încheia cu asociația, nu cu dezvoltatorul.</li>
      <li>Cat timp construcția este în curs, se poate încheia un contract temporar de șantier, cu transformarea ulterioară în contract definitiv după recepția cu autoritățile.</li>
    </ul>

    <p>Documente anexe:</p>
    </div>
  `,
    assets: [
      {
        label: 'Exemplu contract utilitati',
        filename: '14. Exemplu contract utilitati.pdf',
        fileType: 'pdf',
      },
    ],
  },
];
module.exports = { tabs, flow: "utilitati" };
