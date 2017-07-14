(function() {
  'use strict';

  angular.module('opp.core')
    .constant(
      'CONSTS', {
        ENV_MODE: 'production',  // dev or production
        ENV_MODE_OPTIONS: {
          DEV: 'dev',
          PRODUCTION: 'production'
        },
        CARDS_TYPES: {
          SCRUM: 'SCRUM',
          FIBB: 'FIBB',
          TSHIRT: 'TSHIRT',
          SEQUENTIAL: 'SEQUENTIAL'
        },
        CARDS_VALUES: {
          SCRUM: [
            {
              value: '0',
              imageName: '_0',
              isSelected: false,
              isEnable: true
            },
            {
              value: '1',
              imageName: '_1',
              isSelected: false,
              isEnable: true
            },
            {
              value: '2',
              imageName: '_2',
              isSelected: false,
              isEnable: true
            },
            {
              value: '3',
              imageName: '_3',
              isSelected: false,
              isEnable: true
            },
            {
              value: '5',
              imageName: '_5',
              isSelected: false,
              isEnable: true
            },
            {
              value: '8',
              imageName: '_8',
              isSelected: false,
              isEnable: true
            },
            {
              value: '13',
              imageName: '_13',
              isSelected: false,
              isEnable: true
            },
            {
              value: '20',
              imageName: '_20',
              isSelected: false,
              isEnable: true
            },
            {
              value: '40',
              imageName: '_40',
              isSelected: false,
              isEnable: true
            },
            {
              value: '100',
              imageName: '_100',
              isSelected: false,
              isEnable: true
            },
            {
              value: '?',
              imageName: 'coffee',
              isSelected: false,
              isEnable: true
            }
          ],
          FIBB: [
            {
              value: '0',
              imageName: '_0',
              isSelected: false,
              isEnable: true
            },
            {
              value: '1',
              imageName: '_1',
              isSelected: false,
              isEnable: true
            },
            {
              value: '2',
              imageName: '_2',
              isSelected: false,
              isEnable: true
            },
            {
              value: '3',
              imageName: '_3',
              isSelected: false,
              isEnable: true
            },
            {
              value: '5',
              imageName: '_5',
              isSelected: false,
              isEnable: true
            },
            {
              value: '8',
              imageName: '_8',
              isSelected: false,
              isEnable: true
            },
            {
              value: '13',
              imageName: '_13',
              isSelected: false,
              isEnable: true
            },
            {
              value: '21',
              imageName: '_21',
              isSelected: false,
              isEnable: true
            },
            {
              value: '34',
              imageName: '_34',
              isSelected: false,
              isEnable: true
            },
            {
              value: '55',
              imageName: '_55',
              isSelected: false,
              isEnable: true
            },
            {
              value: '89',
              imageName: '_89',
              isSelected: false,
              isEnable: true
            },
            {
              value: '?',
              imageName: 'coffee',
              isSelected: false,
              isEnable: true
            }
          ],
          TSHIRT: [
            {
              value: 'XS',
              imageName: '_xs',
              isSelected: false,
              isEnable: true
            },
            {
              value: 'S',
              imageName: '_s',
              isSelected: false,
              isEnable: true
            },
            {
              value: 'M',
              imageName: '_m',
              isSelected: false,
              isEnable: true
            },
            {
              value: 'L',
              imageName: '_l',
              isSelected: false,
              isEnable: true
            },
            {
              value: 'XL',
              imageName: '_xl',
              isSelected: false,
              isEnable: true
            },
            {
              value: 'XXL',
              imageName: '_xxl',
              isSelected: false,
              isEnable: true
            },
            {
              value: '?',
              imageName: 'coffee',
              isSelected: false,
              isEnable: true
            }
          ],
          SEQUENTIAL: [
            {
              value: '0',
              imageName: '0',
              isSelected: false,
              isEnable: true
            },
            {
              value: '1',
              imageName: '1',
              isSelected: false,
              isEnable: true
            },
            {
              value: '2',
              imageName: '2',
              isSelected: false,
              isEnable: true
            },
            {
              value: '3',
              imageName: '3',
              isSelected: false,
              isEnable: true
            },
            {
              value: '4',
              imageName: '4',
              isSelected: false,
              isEnable: true
            },
            {
              value: '5',
              imageName: '5',
              isSelected: false,
              isEnable: true
            },
            {
              value: '6',
              imageName: '6',
              isSelected: false,
              isEnable: true
            },
            {
              value: '7',
              imageName: '7',
              isSelected: false,
              isEnable: true
            },
            {
              value: '8',
              imageName: '8',
              isSelected: false,
              isEnable: true
            },
            {
              value: '9',
              imageName: '9',
              isSelected: false,
              isEnable: true
            },
            {
              value: '10',
              imageName: '10',
              isSelected: false,
              isEnable: true
            },
            {
              value: '?',
              imageName: 'coffee',
              isSelected: false,
              isEnable: true
            }
          ]
        }
      }
    );
})();
