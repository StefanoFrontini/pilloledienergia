---
slug: andamento-importazioni-gas-naturale-italia

title: Più importazioni di gas e più dipendenza dalla Russia

description: Andamento storico delle importazioni di gas naturale in Italia

author: Stefano Frontini

created_at: 2021-03-05 10:00:00

published: true

tags: ["gas naturale"]

cover:
---

import ProduzioneGas from "~/components/ProduzioneGas.vue"
import data from "~/data/produzioneGas.json"

import GradoDipendenzaGas from "~/components/GradoDipendenzaGas.vue"
import data_dipendenza from "~/data/gradoDipendenzaGas.json"

import ProvenienzaGas from "~/components/ProvenienzaGas.vue"
import data_provenienza from "~/data/provenienzaGas.json"

<ProduzioneGas title="Andamento storico della produzione di gas naturale in Italia" xKey="Anno"
            y1Key="Miliardi di mc"
            :data="data"
            />

<GradoDipendenzaGas title="Grado di dipendenza dall'estero - importazioni/consumi - %" xKey="Anno"
            y1Key="Grado di dipendenza dall'estero"
            :data="data_dipendenza"
            />

<ProvenienzaGas title="Importazioni italiane di gas per provenienza" xKey="Anno"
            y1Key="Algeria"
            y2Key="Russia"
            y3Key="Olanda"
            y4Key="Norvegia"
            y5Key="Libia"
            y6Key="Qatar"
            y7Key="Altri" :data="data_provenienza"/>

<strong>Aggiornamento con dati 2019.</strong><br />
I grafici illustrano rispettivamente:

- l'andamento annuale della produzione di gas naturale in Italia dal 2000 al 2019;
- l'andamento delle importazioni rapportati ai consumi di gas naturale in Italia dal 2000 al 2019;
- Le importazioni di gas per provenienza.

I dati sono presi da [Ministero dello Sviluppo Economico - bilancio energetico nazionale](https://dgsaie.mise.gov.it/ben.php) e dall'ARERA.

- La produzione nazionale di gas naturale si riduce in misura maggiore rispetto al calo dei consumi. Il grado di dipendenza dall'estero pertanto aumenta e arriva al 95% nel 2019;
- Aumentano le importazioni dalla Russia.
