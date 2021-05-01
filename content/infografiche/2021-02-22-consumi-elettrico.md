---
slug: andamento-consumi-energia-elettrica-italia

title: Meno consumi di energia elettrica in Italia

description: Andamento storico dei consumi di energia elettrica in Italia

author: Stefano Frontini

created_at: 2021-02-22 18:00:00

published: true

tags: ["energia elettrica"]

cover:
---

import annualeConsumiEnergiaElettrica from "~/components/annualeConsumiEnergiaElettrica.vue"
import data from "~/data/annualeConsumiEnergiaElettrica.json"

import annualeConsumiEnergiaElettricaSettore from "~/components/annualeConsumiEnergiaElettricaSettore.vue"
import data_settore from "~/data/annualeConsumiEnergiaElettricaSettore.json"

<annualeConsumiEnergiaElettrica title="Andamento storico dei consumi di energia elettrica in Italia" xKey="Anno"
            y1Key="TWh"
            :data="data"
            />

<strong>Aggiornamento dati 2019.</strong><br />
Il grafico illustra l'andamento annuale dei consumi di energia elettrica in Italia dal 2000 al 2019. <br />
I dati sono presi da [Terna Spa.](https://www.terna.it/it)

- I consumi di energia elettrica italiani hanno subìto una contrazione dai massimi del 2008;
- 1 Terawattora (TWh) = 1.000.000.000 Kilowattora (kWh);
- Consumi al netto delle perdite di rete.

<annualeConsumiEnergiaElettricaSettore title="Andamento storico dei consumi di energia elettrica per settore in Italia" xKey="Anno"
            y1Key="Agricoltura"
            y2Key="Industria"
            y3Key="Terziario"
            y4Key="Domestico"
            :data="data_settore"
            />

Il grafico illustra l'andamento annuale dei consumi di energia elettrica per settore in Italia dal 2000 al 2019. <br />
I dati sono presi da [Terna Spa.](https://www.terna.it/it)

- I consumi di energia elettrica dell'industria hanno subìto una forte contrazione;
- I consumi del terziario crescono stabilmente;
