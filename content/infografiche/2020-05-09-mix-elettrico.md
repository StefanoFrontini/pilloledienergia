---
slug: andamento-fonti-produzione-energia-elettrica-italia

title: Gas e rinnovabili le due fonti dell'elettricità italiana

description: Andamento storico delle fonti di produzione di energia elettrica in Italia

author: Stefano Frontini

created_at: 2020-05-09 10:00:00

published: true

tags: ['energia elettrica']

cover:
---

import AnnualeMixElettrico from "~/components/AnnualeMixElettrico.vue"
import data from "~/data/annualeMixElettrico.json"
import CheckUp from "~/components/CheckUpComponent.vue";

<AnnualeMixElettrico title="Andamento delle fonti di produzione di energia elettrica in Italia" xKey="anno"
            y1Key="gas"
            y2Key="rinnovabili"
            y3Key="prodotti petroliferi"
            y4Key="carbone"
            y5Key="altro termo"
            y6Key="import" :data="data"/>

Il grafico illustra l'andamento annuale delle fonti di produzione di energia elettrica in Italia dal 2000 al 2018. <br />
I dati sono presi dalla [relazione annuale dell'Autorità di Regolazione per Energia Reti e Ambiente (ARERA).](https://www.arera.it/it/relaz_ann/19/19.htm)

- Nel periodo 2000 - 2018 la quota delle fonti rinnovabili sul totale delle fonti energetiche utilizzate in Italia per la produzione di energia elettrica sale dal 16% al 34%;
- La quota del petrolio scende dal 27% al 1%;
- Il gas naturale continua ad essere la prima fonte con una quota pari al 39%;
- Il gas naturale bilancia le fluttuazioni dei consumi e delle rinnovabili;
- 1 Terawattora (TWh) = 1 000 000 000 Kilowattora (kWh).

<CheckUp />
