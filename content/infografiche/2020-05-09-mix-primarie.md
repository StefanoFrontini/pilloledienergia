---
slug: andamento-fonti-energetiche-primarie-italia

title: Meno petrolio e più energie rinnovabili in Italia

description: Andamento storico delle fonti energetiche primarie in Italia

author: Stefano Frontini

created_at: 2020-05-09 12:00:00

published: true

tags: ['energia primaria']

cover:
---

import AnnualeMixPrimarie from "~/components/AnnualeMixPrimarie.vue"
import data from "~/data/annualeMixPrimarie.json"
import CheckUp from "~/components/CheckUpComponent.vue";
<AnnualeMixPrimarie title="Andamento storico delle fonti energetiche primarie in Italia" xKey="Anno"
            y1Key="Carbone"
            y2Key="Import elettrico"
            y3Key="Petrolio"
            y4Key="Gas naturale"
            y5Key="Rinnovabili"
            :data="data"/>

Il grafico illustra l'andamento annuale delle fonti energetiche primarie in Italia dal 2000 al 2018. <br />
I dati sono presi dalla [bilancio energetico nazionale del Ministero dello Sviluppo Economico.](https://dgsaie.mise.gov.it/ben.php) e dalla [relazione annuale dell'ARERA.](https://www.arera.it/it/relaz_ann/19/19.htm)

- Nel periodo 2000 - 2018 la quota delle energie rinnovabili sul totale delle fonti energetiche utilizzate in Italia sale dal 6,9% al 20,5%;
- Energie rinnovabili = Energia idraulica + Energia geotermica + Eolico + Fotovoltaico + Rifiuti + Legna + Biomasse per elettricità + Biodiesel;
- Petrolio e gas rimangono le fonti principali;
- La quota del petrolio scende dal 49,5% al 34%;
- Il gas naturale diventa la prima fonte con una quota pari al 34,5%;
- La quota del carbone (5,4%) si è quasi dimezzata rispetto al picco di 10 anni fa;
- L'unità di misura dell'energia primaria è il tep.
- Il tep rappresenta la quantità di energia rilasciata dalla combustione di una tonnellata di petrolio grezzo.
- Mtep = milioni di tep
- L'energia primaria è l'energia presente in natura e quindi non derivante dalla trasformazione di altra forma di energia

<CheckUp />
