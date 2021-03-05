---
slug: andamento-consumi-gas-naturale-italia

title: Meno consumi di gas naturale in Italia

description: Andamento storico dei consumi di gas naturale in Italia

author: Stefano Frontini

created_at: 2021-02-22 19:00:00

published: true

tags: ["gas naturale"]

cover:
---

import annualeConsumiGas from "~/components/annualeConsumiGas.vue"
import data from "~/data/annualeConsumiGas.json"

import annualeConsumiGasSettore from "~/components/annualeConsumiGasSettore.vue"
import data_settore from "~/data/annualeConsumiGasSettore.json"

<annualeConsumiGas title="Andamento storico dei consumi di gas naturale in Italia" xKey="Anno"
            y1Key="Miliardi di metri cubi"
            :data="data"
            />

<strong>Aggiornamento con dati 2019</strong>.<br />
Il grafico illustra l'andamento annuale dei consumi di gas naturale in Italia dal 2000 al 2019. <br />
I dati sono presi dal [Ministero dello Sviluppo Economico - bilancio energetico nazionale](https://dgsaie.mise.gov.it/ben.php).

- I consumi di gas naturale italiani hanno subìto una forte contrazione dai massimi del 2008 e solo dal 2015 hanno ripreso a salire.

<annualeConsumiGasSettore title="Andamento storico dei consumi di gas naturale in Italia per settore" xKey="Anno"
            y1Key="Industria"
            y2Key="Residenziale e Terziario"
            y3Key="Termoelettrico"
            y4Key="Altro"
            :data="data_settore"
            />

Il grafico illustra l'andamento annuale dei consumi di gas naturale per settore in Italia dal 2000 al 2019. <br />
I dati sono presi da [Ministero dello Sviluppo Economico - bilancio energetico nazionale](https://dgsaie.mise.gov.it/ben.php).

- Termoelettrico e Industria i settori più colpiti dalla crisi del 2008;
- Il Terziario e Residenziale diventa il primo settore per consumi di gas naturale superando l'Industria;
- Nel 2019 i maggiori consumi del termoelettrico sono dovuti alla generazione a gas che ha sostituito parte della generazione a carbone.
