import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/account/profile').reply(200, {
  profile: {
    avatar: './images/avatars/avatar_11.png',
    canHire: false,
    country: 'USA',
    email: 'shen.zhi@devias.io',
    firstName: 'Shen',
    isPublic: true,
    lastName: 'Zhi',
    phone: '+40 777666555',
    state: 'Alabama',
    timezone: '4:32PM (GMT-4)'
  }
});

mock.onGet('/api/account/statistics').reply(200, {
  statistics: {
    payout: '4,250',
    projects: '12,500',
    visitors: '230',
    watching: '5'
  }
});

mock.onGet('/api/account/projects').reply(200, {
  projects: [
    {
      id: uuid(),
      title: 'Mella Full Screen Slider',
      price: '3K - 6K',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      author: {
        name: 'Anje Keizer',
        avatar: './images/avatars/avatar_5.png'
      },
      tags: [
        {
          id: uuid(),
          text: 'Vue JS',
          color: colors.green[600]
        }
      ],
      updated_at: moment().subtract(24, 'minutes')
    }
  ]
});

mock.onGet('/api/account/todos').reply(200, {
  todos: [
    {
      id: uuid(),
      title: 'Lage ferdig mal for innrapportering helår 2019',
      deadline: moment().subtract(2, 'days'),
      done: false
    },
    {
      id: uuid(),
      title: 'Sette opp refmap for helår 2019',
      deadline: moment(),
      done: false
    },
    {
      id: uuid(),
      title:
        'Gjøre noen gøye ting :-)',
      deadline: moment().add(2, 'days'),
      done: false
    },
    {
      id: uuid(),
      title: 'Gjøre ferdig denne malen',
      deadline: moment().add(5, 'days'),
      done: false
    },
    {
      id: uuid(),
      title: 'Ta et møte med IT for å sjekke at dette er mulig',
      deadline: moment().add(5, 'days'),
      done: false
    },
    {
      id: uuid(),
      title:
        'Finne ut hvordan man skal administrere tilbydere',
      deadline: moment().add(7, 'days'),
      done: true
    }
  ]
});

mock.onGet('/api/account/notifications').reply(200, {
  notifications: [
    {
      id: uuid(),
      title: 'New order has been received',
      type: 'order',
      created_at: moment().subtract(2, 'hours')
    },
    {
      id: uuid(),
      title: 'New customer is registered',
      type: 'user',
      created_at: moment().subtract(1, 'day')
    },
    {
      id: uuid(),
      title: 'Project has been approved',
      type: 'project',
      created_at: moment().subtract(3, 'days')
    },
    {
      id: uuid(),
      title: 'New feature has been added',
      type: 'feature',
      created_at: moment().subtract(7, 'days')
    }
  ]
});

mock.onGet('/api/account/subscription').reply(200, {
  subscription: {
    name: 'Freelancer',
    price: '5',
    currency: '$',
    proposalsLeft: 12,
    templatesLeft: 5,
    invitesLeft: 24,
    adsLeft: 10,
    hasAnalytics: true,
    hasEmailAlerts: true
  }
});

mock.onGet('/api/account/settings').reply(200, {
  settings: {}
});
