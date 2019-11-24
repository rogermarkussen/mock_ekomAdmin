import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/management/customers').reply(200, {
  customers: [
    {
      id: uuid(),
      navn: 'Telenor',
      bregNavn: 'Telenor Norge AS',
      gruppering: 'Telenor',
      slettet: 'Nei',
      aktiv: 'Halvår',
      size: 5,
      ant_kont: 3
    },
    {
      id: uuid(),
      navn: 'GlobalConnect',
      bregNavn: 'GlobalConnect AS',
      gruppering: 'GlobalConnect',
      slettet: 'Nei',
      aktiv: 'Halvår',
      size: 5,
      ant_kont: 2
    },
    {
      id: uuid(),
      navn: 'Bergen Fiber',
      bregNavn: 'Bergen Fiber AS',
      gruppering: 'Altibox',
      slettet: 'Nei',
      aktiv: 'Halvår',
      size: 3,
      ant_kont: 3
    },
    {
      id: uuid(),
      navn: 'Pepcall',
      bregNavn: 'Xplora Mobile AS',
      gruppering: 'Ingen',
      slettet: 'Nei',
      aktiv: 'Halvår',
      size: 1,
      ant_kont: 1
    },
    {
      id: uuid(),
      navn: 'Get',
      bregNavn: '',
      gruppering: 'Telia',
      slettet: 'Ja',
      aktiv: 'Nei',
      size: 5,
      ant_kont: 2
    },
    {
      id: uuid(),
      navn: 'Telenor',
      bregNavn: 'Telenor Norge AS',
      gruppering: 'Telenor',
      slettet: 'Nei',
      aktiv: 'Halvår',
      size: 5,
      ant_kont: 3
    },
    {
      id: uuid(),
      navn: 'GlobalConnect',
      bregNavn: 'GlobalConnect AS',
      gruppering: 'GlobalConnect',
      slettet: 'Nei',
      aktiv: 'Halvår',
      size: 5,
      ant_kont: 2
    },
    {
      id: uuid(),
      navn: 'Bergen Fiber',
      bregNavn: 'Bergen Fiber AS',
      gruppering: 'Altibox',
      slettet: 'Nei',
      aktiv: 'Halvår',
      size: 3,
      ant_kont: 3
    },
    {
      id: uuid(),
      navn: 'Pepcall',
      bregNavn: 'Xplora Mobile AS',
      gruppering: 'Ingen',
      slettet: 'Nei',
      aktiv: 'Halvår',
      size: 1,
      ant_kont: 1
    },
    {
      id: uuid(),
      navn: 'Get',
      bregNavn: '',
      gruppering: 'Telia',
      slettet: 'Ja',
      aktiv: 'Nei',
      size: 5,
      ant_kont: 2
    },
    {
      id: uuid(),
      navn: 'Ishavsnett',
      bregNavn: 'Ishavsnett',
      gruppering: 'Ingen',
      slettet: 'Nei',
      aktiv: 'Helår',
      size: 2,
      ant_kont: 2
    }
  ]
});

mock.onGet('/api/management/customers/1/summary').reply(200, {
  tilbyder: {
    navn: 'Telenor',
    orgnr: '976967631',
    bregNavn: 'Telenor Norge AS',
    gruppering: 'Telenor',
    slettet: 'Nei',
    aktiv: 'Halvår',
    size: 2,
    kontakter: [
      {
        id: uuid(),
        fornavn: 'Lars',
        etternavn: 'Rand',
        tlf: '123456789',
        epost: 'lars.rand@telenor.no',
        aktiv: true
      },
      {
        id: uuid(),
        fornavn: 'Trine',
        etternavn: 'Rein',
        tlf: '987654321',
        epost: 'trine.rein@telenor.no',
        aktiv: true
      },
      {
        id: uuid(),
        fornavn: 'Tore',
        etternavn: 'Tang',
        tlf: '123456789',
        epost: 'tore.tang@telenor.no',
        aktiv: false
      }
    ]
  }
});

mock.onGet('/api/management/customers/1/logs').reply(200, {
  logs: [
    {
      id: uuid(),
      auto: false,
      innrapportering: false,
      innrap_ar: null,
      innrap_delar: null,
      hendelse: 'Lagt til Banzai 4G i Telenor gruppering',
      kom: 'Epost fra Lars Rand 21.11.2019',
      bulk: [],
      opprettet: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
    },
    {
      id: uuid(),
      auto: true,
      innrapportering: true,
      innrap_ar: 2018,
      innrap_delar: 'Halvår',
      hendelse: 'Endret svar i database',
      kom: '',
      bulk: [
        {
          beskrivelse: '8.10',
          gammel: 200,
          ny: 100
        },
        {
          beskrivelse: '8.11',
          gammel: 50,
          ny: 200
        },
        {
          beskrivelse: '8.12',
          gammel: 20,
          ny: 200
        }
      ],
      opprettet: moment()
        .subtract(12, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
    }
  ]
});
