
/**
 * @overview configs of ccm component paper_generator
 * @author Manfred Kaul <manfred.kaul@h-brs.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "small": {
    key: "small",

    author: 'Manfred Kaul',
    address: 'Hochschule Bonn-Rhein-Sieg',
    email: 'Manfred.Kaul[at]h-brs.de',
    title: 'Kleines Beispiel',
    subtitle: 'Eine empirische Studie',

    questions: [
      { man: "männlich", woman: "weiblich", other: "divers" },
      { young: "Alter: 18-25", middle: "Alter: 26-30", older: "Alter: 31-40", old: "älter" }
    ],

    randomize: {
      row: false,
      column: false
    },

    figures: [
      {
        id: "histogram_categories_absolute",
        type: "histogram_categories",
        title: "Histogramm Kategorien absolut",
        mapping: arg => arg.c
      }
    ],

    html: {

      header: {
        inner: [
          { tag: 'h1', inner: '%title%' },
          { tag: 'h2', inner: '%subtitle%' },
          { tag: 'p', inner: '<em>%author%</em><br>%address%<br>%email%' }
        ]
      },

      main: {
        inner: [
          {
            id: 'welcome',
            inner: [
              { tag: 'h1', inner: 'Kleine Umfrage'},
              { tag: 'p', inner: 'Kleiner Text, der zur Teilnahme an der Umfrage animieren soll.' },
              { tag: 'button', id: 'start_survey', inner: 'An der Umfrage teilnehmen!<sup>(*)</sup>', onclick: '%start_survey%' },
              { tag: 'p', inner: '<sup>(*)</sup><em>Nach der Teilnahme erhalten Sie Zugriff auf die Auswertung der Umfrage.</em>' }
            ]
          },
          {
            id: 'survey',
            inner: [
              { tag: 'h1', inner: 'Umfrage' },
              { id: 'ccm_poll' },
              { tag: 'button', id: 'start_result', inner: 'Weiter zum Ergebnis der Umfrage', onclick: '%start_result%' }
            ]
          },
          {
            id: 'result',
            inner: [
              { tag: 'h1', inner: 'Vielen Dank für Ihre Teilnahme.' },
              { tag: 'button', id: 'start_paper', inner: 'Weiter zum Artikel über die bisherigen Ergebnisse der Umfrage', onclick: '%start_paper%' },
            ]
          },
          {
            id: 'paper_frame'
          }
        ]
      }
    },

    css: [ 'ccm.load', 'small.css' ],

    microservice: 'server.php',

  }
};
