export const COLORS = [
  {
    id: 'midnight-black',
    label: 'Midnight B...',
    name: 'MIDNIGHT BLACK',
    img: 'https://www.figma.com/api/mcp/asset/3bbbdcc0-d662-47f8-b8e7-47ad10be407c',
    images: [
      'https://www.figma.com/api/mcp/asset/3bbbdcc0-d662-47f8-b8e7-47ad10be407c',
      mbImg2,
      mbImg3,
      mbImg4,
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '149cm', bust: '81cm', waist: '54cm', hips: '91cm' },
  },
  {
    id: 'navy',
    label: 'Navy',
    name: 'NAVY',
    img: 'https://www.figma.com/api/mcp/asset/5ce4669e-7b50-4402-a497-3b8e95897b8d',
    images: [
      'https://www.figma.com/api/mcp/asset/5ce4669e-7b50-4402-a497-3b8e95897b8d',
    ],
    isNew: true,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'teal',
    label: 'Teal',
    name: 'TEAL',
    img: 'https://www.figma.com/api/mcp/asset/c1eaa29a-d01d-4297-b585-c5903b8a5e16',
    images: [
      'https://www.figma.com/api/mcp/asset/c1eaa29a-d01d-4297-b585-c5903b8a5e16',
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'truffle',
    label: 'Truffle',
    name: 'TRUFFLE',
    img: 'https://www.figma.com/api/mcp/asset/ada6f9e8-47f9-4a8c-a9ab-75d18b026441',
    images: [
      'https://www.figma.com/api/mcp/asset/ada6f9e8-47f9-4a8c-a9ab-75d18b026441',
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'optic-white',
    label: 'Optic White',
    name: 'OPTIC WHITE',
    img: 'https://www.figma.com/api/mcp/asset/698eb3ed-d387-4912-8d64-bf7a6b83adf0',
    images: [
      'https://www.figma.com/api/mcp/asset/698eb3ed-d387-4912-8d64-bf7a6b83adf0',
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'blue',
    label: 'Blue',
    name: 'BLUE',
    img: 'https://www.figma.com/api/mcp/asset/6fd3209b-e290-4e89-911f-1ff72225ac45',
    images: [
      'https://www.figma.com/api/mcp/asset/6fd3209b-e290-4e89-911f-1ff72225ac45',
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'rangers',
    label: 'Rangers',
    name: 'RANGERS',
    img: 'https://www.figma.com/api/mcp/asset/c5ffc7ba-f75e-450c-a0eb-1df17b836ef4',
    images: [
      'https://www.figma.com/api/mcp/asset/c5ffc7ba-f75e-450c-a0eb-1df17b836ef4',
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
]

export const SIZES = [
  { id: 'xs', label: 'XS', soldOut: false },
  { id: 's',  label: 'S',  soldOut: false },
  { id: 'm',  label: 'M',  soldOut: true  },
  { id: 'l',  label: 'L',  soldOut: false },
  { id: 'xl', label: 'XL', soldOut: false },
]

export const LOOK_ITEMS = [
  {
    id: 1,
    name: 'Impact Leggings',
    color: 'MIDNIGHT BLACK',
    img: 'https://www.figma.com/api/mcp/asset/acee031e-9a5d-4b51-b875-482a71000ec3',
  },
  {
    id: 2,
    name: 'Impact Coat',
    color: 'MIDNIGHT BLACK',
    img: 'https://www.figma.com/api/mcp/asset/0e520ae1-bfb1-45a8-bf51-68b5353d5207',
  },
  {
    id: 3,
    name: 'Impact Top',
    color: 'MIDNIGHT BLACK',
    img: 'https://www.figma.com/api/mcp/asset/d6633979-36a3-4d98-bb31-52b3b5e55876',
  },
  {
    id: 4,
    name: "Impact Shorts | 4.5'",
    color: 'MIDNIGHT BLACK',
    img: 'https://www.figma.com/api/mcp/asset/fa4561b7-57b0-497c-a6e2-62ff5695e70d',
  },
]

import afterpayLogo from '../assets/afterpay.svg'
import shopPayLogo  from '../assets/shoppay.svg'
import klarnaLogo   from '../assets/klarna.svg'
import modelPhoto   from '../assets/modelfullbody.jpg'
import mbImg2 from '../assets/IMG_1313_1-Edit-1.webp'
import mbImg3 from '../assets/IMG_1331_1-Edit-2.webp'
import mbImg4 from '../assets/IMG_1341_1-Edit-3.webp'

export const FEATURE_RATINGS = [
  { label: 'Bra Support',  value: 1 },
  { label: 'Softness', value: 5 },
  { label: 'Stretch',  value: 3 },
]

// Review ratings from Judge.me — replace with API data
export const REVIEW_RATINGS = [
  { label: 'Product Quality', low: 'Not as expected', high: 'Incredible', value: 95 },
  { label: 'True to Size',    low: 'Size Down',       high: 'Size Up',    value: 78 },
  { label: 'Fit',             low: 'Loose',           high: 'Tight',      value: 72 },
]

export const ASSETS = {
  logo:       'https://www.figma.com/api/mcp/asset/4d673a14-695c-4c7f-9dbf-2bd93e068c7a',
  klarna:     klarnaLogo,
  afterpay:   afterpayLogo,
  shopPay:    shopPayLogo,
  package:    'https://www.figma.com/api/mcp/asset/0fb87a78-48ee-4a9b-9295-96f22e839dae',
  modelPhoto: modelPhoto,
}
