---
slug: andamento-fonti-produzione-energia-elettrica-italia

title: Gas e rinnovabili le due fonti dell'elettricità italiana

description: Andamento storico delle fonti di produzione di energia elettrica in Italia

author: Stefano Frontini

created_at: 2021-08-26 17:00:00

published: true

tags: ['energia elettrica']

cover:
---

import AnnualeMixElettrico from "~/components/AnnualeMixElettrico.vue"
import data from "~/data/annualeMixElettrico.json"

<AnnualeMixElettrico title="Andamento delle fonti di produzione di energia elettrica in Italia" xKey="anno"
            y1Key="gas"
            y2Key="rinnovabili"
            y3Key="prodotti petroliferi"
            y4Key="carbone"
            y5Key="altro termo"
            y6Key="import" :data="data"/>

<strong>Grafico aggiornato con dati 2020.</strong><br />
Il grafico illustra l’andamento annuale delle fonti di produzione di energia elettrica in Italia dal 2000 al 2020. <br />
I dati sono presi dalla [relazione annuale dell’Autorità di Regolazione per Energia Reti e Ambiente (ARERA).](https://www.arera.it/it/relaz_ann/21/21.htm)

- Nel periodo 2000 - 2020 la quota delle fonti rinnovabili sul totale delle fonti energetiche utilizzate in Italia per la produzione di energia elettrica sale dal 16% al 37%;
- La quota del petrolio scende dal 27% al 1%;
- La quota del carbone continua a ridursi e nel 2020 è pari al 3%;
- Il gas naturale continua ad essere la prima fonte con una quota pari al 44%;
- Il gas naturale bilancia le fluttuazioni dei consumi e delle rinnovabili;
- 1 Terawattora (TWh) = 1.000.000.000 Kilowattora (kWh).
