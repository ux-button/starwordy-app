/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'mono': {
        '50': '#F7F7F7',
        '100': '#EDEDED',
        '200': '#DDDDDD',
        '300': '#C8C8C8',
        '400': '#ADADAD',
        '500': '#999999',
        '600': '#888888',
        '700': '#7B7B7B',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
      },
      'canary': {
        '50': '#FBFEE8',
        '100': '#F5FFC2',
        '200': '#F0FF89',
        '300': '#F2FF66',
        '400': '#F3FD12',
        '500': '#ECEC06',
        '600': '#CCBC02',
        '700': '#A38905',
        '800': '#866B0D',
        '900': '#725711',
        '950': '#432F05',
      },
      'daisy': {
        '50': '#FEFDE8',
        '100': '#FEFBC3',
        '200': '#FEF272',
        '300': '#FDE647',
        '400': '#FAD415',
        '500': '#EABB08',
        '600': '#CA9104',
        '700': '#A16707',
        '800': '#85510E',
        '900': '#714212',
        '950': '#422206',
      },
      'lime': {
        '50': '#FFFEE4',
        '100': '#FFFFC4',
        '200': '#FEFF90',
        '300': '#F7FF50',
        '400': '#EAFF00',
        '500': '#CDE600',
        '600': '#9FB800',
        '700': '#788B00',
        '800': '#5E6D07',
        '900': '#4F5C0B',
        '950': '#293400',
      },
      'malahit': {
        '50': '#EFFCE9',
        '100': '#DAF8CF',
        '200': '#B9F1A5',
        '300': '#8FE571',
        '400': '#64D540',
        '500': '#48BC26',
        '600': '#34961A',
        '700': '#2A7219',
        '800': '#255B19',
        '900': '#234D1A',
        '950': '#0D2A09',
      },
      'whisper': {
        '50': '#F9F5FA',
        '100': '#F5F0F7',
        '200': '#EEE3F1',
        '300': '#E0CDE5',
        '400': '#CCACD4',
        '500': '#B78BC1',
        '600': '#A270AD',
        '700': '#8B5B95',
        '800': '#754E7B',
        '900': '#5F4063',
        '950': '#402645',
      },
    },
    spacing: {
      'h': {
        DEFAULT: '16px',
        'between-chips': '8px',
        'between-cards': '12px',
        'screen-mobile': '16px',
      },
      'v': {
        DEFAULT: '16px',
        'between-options': '0px',
        'text-to-text': '8px',
        'text-to-component': '16px',
        'component-to-button': '24px',
        'between-sections': '24px',
      },
      fontSize: {
        't-default': ['14px', {
          'lineHeight': '20px', 'letterSpacing': '0.01em'
        }],
        't-large': ['16px', {
          'lineHeight': '24px', 'letterSpacing': '0.0005em'
        }],
        't-group': ['14px', {
          'lineHeight': '20px', 'letterSpacing': '0.0015em'
        }],
        't-body': ['18px', {
          'lineHeight': '24px', 'letterSpacing': '-0.005em'
        }],
        't-subsection': ['22px', {
          'lineHeight': '28px', 'letterSpacing': '-0.015em'
        }],
        't-section': ['26px', {
          'lineHeight': '32px', 'letterSpacing': '-0.015em'
        }],
        't-screen': ['26px', {
          'lineHeight': '32px', 'letterSpacing': '-0.015em'
        }],
      },
    },
    extend: {},
  },
  plugins: [],
}