/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CodeIcon from '@material-ui/icons/Code';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ViewConfigIcon from '@material-ui/icons/ViewComfy';
import ListIcon from '@material-ui/icons/List';
import Label from 'src/components/Label';

export default [
  {
    items: [
      {
        title: 'Oversikt',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'Administrer tilbydere',
        href: '/management',
        icon: BarChartIcon,
        items: [
          {
            title: 'Tilbyderoversikt',
            href: '/management/customers'
          },
          {
            title: 'Tilbyder detaljer',
            href: '/management/customers/1/summary'
          }
        ]
      },
      {
        title: 'Innrapporteringer',
        href: '/projects',
        icon: FolderIcon,
        items: [
          {
            title: 'Innrapporteringsliste',
            href: '/projects'
          },
          {
            title: 'Status',
            href: '/projects/create'
          },
          {
            title: 'TODO',
            href: '/projects/1/overview'
          },
          {
            title: 'Rapporter',
            href: '/projects/1/files'
          },
          {
            title: 'Kalender',
            href: '/calendar'
          }
        ]
      },
      {
        title: 'Database',
        href: '/management',
        icon: BarChartIcon,
        items: [
          {
            title: 'Endringer',
            href: '/management/customers'
          },
          {
            title: 'Rapporter',
            href: '/management/customers/1/summary'
          }
        ]
      },
      {
        title: 'Hendelser',
        href: '/management',
        icon: BarChartIcon,
        items: [
          {
            title: 'Alle hendelser',
            href: '/management/customers'
          }
        ]
      },
    ]
  },
  {
    subheader: 'Dokumentasjon',
    items: [
      {
        title: 'Komponenter',
        href: '/components',
        icon: ViewConfigIcon,
        items: [
          {
            title: 'Buttons',
            href: '/components/buttons'
          },
          {
            title: 'Cards',
            href: '/components/cards'
          },
          {
            title: 'Chips',
            href: '/components/chips'
          },
          {
            title: 'Lists',
            href: '/components/lists'
          },
          {
            title: 'Forms',
            href: '/components/forms'
          },
          {
            title: 'Modals',
            href: '/components/modals'
          },
          {
            title: 'Typography',
            href: '/components/typography'
          }
        ]
      },
      {
        title: 'Getting started',
        href: '/getting-started',
        icon: CodeIcon
      },
      {
        title: 'Changelog',
        href: '/changelog',
        icon: ListIcon,
        label: () => <Label color={colors.blue['500']}>v1.3.0</Label>
      }
    ]
  }
];
