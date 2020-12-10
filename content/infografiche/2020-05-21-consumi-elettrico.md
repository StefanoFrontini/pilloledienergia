---
slug: andamento-consumi-energia-elettrica-italia

title: Meno consumi di energia elettrica in Italia

description: Andamento storico dei consumi di energia elettrica in Italia

author: Stefano Frontini

created_at: 2020-05-21 19:00:00

published: true

tags: ["energia elettrica"]

cover:
---

import annualeConsumiEnergiaElettrica from "~/components/annualeConsumiEnergiaElettrica.vue"
import data from "~/data/annualeConsumiEnergiaElettrica.json"

import annualeConsumiEnergiaElettricaSettore from "~/components/annualeConsumiEnergiaElettricaSettore.vue"
import data_settore from "~/data/annualeConsumiEnergiaElettricaSettore.json"
import CheckUp from "~/components/CheckUpComponent.vue";

<annualeConsumiEnergiaElettrica title="Andamento storico dei consumi di energia elettrica in Italia" xKey="Anno"
            y1Key="TWh"
            :data="data"
            />

Il grafico illustra l'andamento annuale dei consumi di energia elettrica in Italia dal 2000 al 2018. <br />
I dati sono presi da [Terna Spa.](https://www.terna.it/it)

- I consumi di energia elettrica italiani hanno subìto una contrazione dai massimi del 2008;
- 1 Terawattora (TWh) = 1 000 000 000 Kilowattora (kWh).

<annualeConsumiEnergiaElettricaSettore title="Andamento storico dei consumi di energia elettrica per settore in Italia" xKey="Anno"
            y1Key="Agricoltura"
            y2Key="Industria"
            y3Key="Terziario"
            y4Key="Domestico"
            :data="data_settore"
            />

Il grafico illustra l'andamento annuale dei consumi di energia elettrica per settore in Italia dal 2000 al 2018. <br />
I dati sono presi da [Terna Spa.](https://www.terna.it/it)

- I consumi di energia elettrica dell'industria hanno subìto una forte contrazione;
- I consumi del terziario crescono stabilmente;
- 1 Terawattora (TWh) = 1 000 000 000 Kilowattora (kWh).

<CheckUp />
