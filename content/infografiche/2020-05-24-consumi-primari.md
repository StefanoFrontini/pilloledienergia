---
slug: andamento-consumi-energetici-primari-italia

title: Diminuiscono i consumi energetici primari in Italia

description: Andamento storico dei consumi energetici e dell'efficienza energetica in Italia

author: Stefano Frontini

created_at: 2020-05-24 90:00:00

published: true

tags: ["energia primaria"]

cover:
---

import AnnualeConsumiPrimari from "~/components/annualeConsumiPrimari.vue"
import data from "~/data/consumiPrimari.json"

import EfficienzaEnergetica from "~/components/EfficienzaEnergetica.vue"
import data_efficienza from "~/data/odex.json"

<AnnualeConsumiPrimari title="Andamento dei consumi energetici primari in Italia" xKey="Anno"
            y1Key="Mtep"                       
            :data="data"
            />

<EfficienzaEnergetica title="Andamento dell'efficienza energetica" xKey="Anno" 
            y1Key="Industria"
            y2Key="Trasporto"
            y3Key="Famiglie"
            y4Key="Terziario"
            y5Key="Totale"            
             :data="data_efficienza"/>

I grafici illustrano rispettivamente:

- l'andamento annuale dei consumi energetici primari in Italia dal 2000 al 2018;
- l'andamento dell'efficienza energetica in Italia dal 2000 al 2017;

I dati sono presi da [Ministero dello Sviluppo Economico - bilancio energetico nazionale](https://dgsaie.mise.gov.it/ben.php), dall'ARERA e dal database [ODYSSEE-MURE](https://www.odyssee-mure.eu/publications/efficiency-trends-policies-profiles/italy-italian.html#overview).

- I consumi energetici italiani si sono ridotti a causa della crisi economica e dell'aumento dell'efficienza energetica;
- L'efficienza energetica è aumentata in tutti i settori, in particolare nell'industria;
- Un valore di ODEX pari a 90 significa un guadagno del 10% di efficienza energetica;
- L'unità di misura dell'energia primaria è il tep;
- Il tep rappresenta la quantità di energia rilasciata dalla combustione di una tonnellata di petrolio grezzo;
- Mtep = milioni di tep;
- L'energia primaria è l'energia presente in natura e quindi non derivante dalla trasformazione di altra forma di energia.

> <g-link to="/contatti">Contattami</g-link> per eseguire un check-up energetico gratuito completo del tuo ristorante/hotel.</br>
<a href="/check-up-energetico.pdf" download>SCARICA IL CHECK-UP DI BASE</a>
