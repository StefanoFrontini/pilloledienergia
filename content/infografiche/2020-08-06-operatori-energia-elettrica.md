---
slug: classifica-operatori-energia-elettrica

title: Quali sono i primi operatori nella vendita di energia elettrica in Italia?

description: Pubblicati i dati relativi al 2019 sui principali venditori di energia elettrica

author: Stefano Frontini

created_at: 2020-08-06 12:00:00

published: true

tags: ["energia elettrica"]

cover:
---

import OperatoriEnergiaLibero from "~/components/OperatoriEnergiaLibero.vue"
import data from "~/data/operatori-energia-elettrica-libero.json"

import OperatoriEnergiaBT from "~/components/OperatoriEnergiaBT.vue"
import dataBT from "~/data/operatori-energia-bt.json"

import CheckUp from "~/components/Check-up-component.vue"

<OperatoriEnergiaLibero title="Primi venti gruppi di vendita di energia elettrica al mercato libero nel 2019" xKey="Gruppo"
            yKey="Energia"
            :data="data"
            />

<OperatoriEnergiaBT title="Vendite di energia alla piccola e media impresa (non domestici BT)" xKey="Gruppo"
            yKey="BT"
            :data="dataBT"
            />

I grafici illustrano rispettivamente:

- I primi venti gruppi di vendita di energia elettrica al mercato libero nel 2019;
- I primi venti gruppi di vendita di energia elettrica nel 2019 nel segmento: cliente non domestico allacciato in bassa tensione (BT);

I dati sono presi dall'[ARERA - Indagine annuale sui settori regolati](https://www.arera.it/it/relaz_ann/20/20.htm). L'indagine è stata pubblicata a luglio 2020.

- 1 GWh = 1 milione di kWh;

<CheckUp />
