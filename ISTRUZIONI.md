# Dal file zip al Play Store

## 1. Metti il gioco online (GitHub Pages, gratis)
1. Crea un account su github.com e un nuovo repository pubblico chiamato `indovina-il-calciatore`.
2. Clicca "Add file" › "Upload files" e trascina **tutto il contenuto della cartella `app`** (non la cartella stessa): index.html, players.json, manifest.webmanifest, sw.js, privacy.html e le cartelle fonts e icons. Poi "Commit changes".
3. Vai in Settings › Pages › Source: "Deploy from a branch", branch `main`, cartella `/ (root)`. Salva.
4. Dopo un paio di minuti il gioco è su `https://TUO-UTENTE.github.io/indovina-il-calciatore/`. Aprilo dal telefono e controlla che funzioni.

## 2. Crea il pacchetto Android (PWABuilder)
1. Vai su pwabuilder.com, incolla l'indirizzo del gioco e premi Start.
2. Scegli "Package for stores" › Android › Google Play.
3. Package ID: per esempio `io.github.tuoutente.calciatore` (non potrai cambiarlo dopo).
4. Scarica lo zip. Dentro trovi il file **.aab** da caricare su Play Console, la **chiave di firma** e il file **assetlinks.json**.
5. Conserva la chiave di firma e la password in un posto sicuro: senza, non potrai pubblicare aggiornamenti.
6. Carica `assetlinks.json` nel repository dentro una cartella `.well-known` (seguendo le istruzioni di PWABuilder). Serve a far aprire il gioco a schermo intero, senza barra del browser.

## 3. Google Play Console
1. play.google.com/console › crea account sviluppatore personale (25 $ una tantum) e completa la verifica dell'identità.
2. "Crea app" › nome, lingua italiano, Gioco, Gratuito.
3. Compila la scheda con i testi di `store/SCHEDA-STORE.md` e carica la grafica della cartella `store`.
4. Test › Test chiuso › crea una traccia, carica il file .aab, aggiungi le email di almeno 12 tester.
5. Manda ai tester il link di iscrizione: devono accettare e **restare iscritti 14 giorni di fila**.
6. Dopo 14 giorni: Dashboard › "Richiedi l'accesso alla produzione". Rispondi in modo concreto (quanti tester, che feedback hai ricevuto, cosa hai cambiato).
7. Approvato l'accesso, promuovi la versione in produzione.

## Aggiornare le rose
Quando esce una nuova versione del dataset Kaggle, manda di nuovo il file a Claude per rigenerare `players.json`, ricaricalo su GitHub e cambia `calciatore-v1` in `calciatore-v2` in sw.js, così i telefoni scaricano i dati nuovi.
