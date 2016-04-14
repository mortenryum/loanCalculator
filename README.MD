# Lånekalkulator
## Introduksjon
Som jeg nevnte på intervjuet har jeg ingen tidligere erfaring med React. Da jeg fikk denne oppgaven fikk jeg valget mellom Angular og React. Jeg valgte React. __Hvorfor?__

React virker som en utrolig kul teknologi, og dette var en god motivasjon for å sette meg inn i det på kortest mulig tid. Det har jeg forsåvidt fått til, men det er mange ting som kan forbedres, og jeg har rett og slett ikke tid til å gjøre det

Jeg håper dere kan se denne koden i lys av at jeg ikke kunne noe om dette fra før. 

## Installasjon
1. `git clone https://github.com/mortenryum/loanCalculator.git`
2. `npm install` (du har tid til å hente en kopp kaffe mens dette kjører!)
3. `npm start -- --release` 

En nettleser vil poppe opp på `http://localhost:3001` med appen.

## Design & Valg jeg har gjort
 Jeg har basert denne appen på [React Starter Kit](https://github.com/kriasoft/react-starter-kit), som er en boilerplate for React-apper av høy kvalitet som skal følge "best practices". Altså har jeg latt ekspertene ta de fleste av valgene for meg. 
 
 I react har jeg valgt å dele de tre feltene inn i egne komponenter, som kommuniserer med en hovedkomponent. Jeg ønsket også å dele selve "resultatet" opp i en komponent, men det ser det ikke ut som jeg rekker.
 
 Jeg har valgt å lage en proxy for CFS-API'et. Dette av flere grunner: 
 * Jeg liker ikke å eksponere et API jeg ikke kjenner innmaten av mot sluttbruker, av sikkerhetsårsaker (korriger meg gjerne..)
 * Muligheter for å implementere caching
 * Enklere flate mot React
 * Gjenbruksmulighet
 * Kan implementere mekanismer for å hindre overbelastning av APIet
 * Kan enkelt mocke API-responser

## Hadde jeg bare hatt mer tid...
Hadde jeg hatt mer tid, ville jeg fikset følgende:
### Tester
Jeg har ikke noen tester. Det burde jeg definitivt gjort noe med.
### Stabilitet
Det er noen bugs i appen som må fikses. F.eks. Når du skriver inn et ugyldig tall i en av boksene, og så fyller inn et gyldig et i en annen av de tre boksene, vil det sendes av gårde en request. Dette skyldes at state settes uavhengig av validitet.
### Enhet bak felt
Jeg ville også ha implementert det slik at et inputen etterfølges av egnet enhet, f.eks. NOK, % eller "år". Også feilmeldinger fra server kunne vært omformulert og vist til sluttbruker hvor det er hensiktsmessig.
### Bedre feilhåndtering
Istedenfor å ha rød strek under ugyldig boks ville jeg ha pekt på hva som konkret er årsaken til feilen. F.eks, "for lang nedbetalingstid", "for høyt beløp", osv.
### Superkomponenten "Box"
Jeg ser det er mye duplikatkode mellom AmountBox, InterestBox og YearsBox. På et punkt prøvde jeg å lage en superclasse 'Box', og la de andre arve felles egenskaper og funksjoner av denne. Det fungerte ikke, og jeg har ikke tid til å finne fasit nå.
### Bedre SCSS
Jeg er også ny innen SCSS og her er det nok en haug med funksjoner jeg kunne brukt for å forbedre koden. Jeg ble av tidshensyn nødt til å "hacke det til" ved bruk av > -operatøren på en del selectorer i LoanCalculator.scss.
### Fjernet overflødige verktøy og moduler
Det følger med en del jeg ikke trenger i React Starter Kit og mye har jeg fjernet, men noe gjenstår, bl.a. en database-løsning.
### Bedre (og responsivt!) design
Designet ser jo helt greit ut, men jeg ville laget noe litt mindre trist med mer tid. Dessuten er det ikke responsivt. Er snakk om en media query og noen få selectorer, ikke store greiene.
### "Lasteindikator"
Jeg skulle ha hatt noe som indikerte at appen enten venter på debounce-delay eller snakker med APIet. 

## Noen ord til slutt
Vil bare si at dette var en utrolig morsom oppgave som det frister å jobbe videre med (no ass-kissing, jeg lover!). ReactJS var en fryd å jobbe med, og skulle jeg på tross av denne leveransen få jobben kan du banne på at jeg skal lese meg opp på det i månedene før jeg inntrer. 

Nå må jeg løpe! 
