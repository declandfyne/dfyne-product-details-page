import afterpayLogo from '../assets/afterpay.svg'
import shopPayLogo  from '../assets/shoppay.svg'
import klarnaLogo   from '../assets/klarna.svg'
import modelPhoto   from '../assets/modelfullbody.jpg'
import dfyneLogo    from '../assets/dfyne-logo.svg'
import packageIcon  from '../assets/package-icon.svg'

import midnightBlackImg from '../assets/midnight-black.jpg'
import midnightBlack2   from '../assets/midnight-black-2.png'
import midnightBlack3   from '../assets/midnight-black-3.png'
import midnightBlack4   from '../assets/midnight-black-4.png'
import navyImg          from '../assets/navy.png'
import tealImg          from '../assets/teal.png'
import truffleImg       from '../assets/truffle.png'
import opticWhiteImg    from '../assets/optic-white.png'
import blueImg          from '../assets/blue.png'
import rangersImg       from '../assets/rangers.png'

import lookLeggings from '../assets/look-leggings.png'
import lookCoat     from '../assets/look-coat.jpg'
import lookTop      from '../assets/look-top.jpg'
import lookShorts   from '../assets/look-shorts.png'
import lookShortsNew from '../assets/look-shorts-new.png'
import lookHalfZippy from '../assets/look-half-zippy.png'
import lookFlares    from '../assets/look-flares.png'

export const COLORS = [
  {
    id: 'midnight-black',
    label: 'Midnight B...',
    name: 'MIDNIGHT BLACK',
    img: midnightBlackImg,
    images: [
      midnightBlackImg,
      midnightBlack2,
      midnightBlack3,
      midnightBlack4,
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '149cm', bust: '81cm', waist: '54cm', hips: '91cm' },
  },
  {
    id: 'navy',
    label: 'Navy',
    name: 'NAVY',
    img: navyImg,
    images: [
      navyImg,
    ],
    isNew: true,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'teal',
    label: 'Teal',
    name: 'TEAL',
    img: tealImg,
    images: [
      tealImg,
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'truffle',
    label: 'Truffle',
    name: 'TRUFFLE',
    img: truffleImg,
    images: [
      truffleImg,
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'optic-white',
    label: 'Optic White',
    name: 'OPTIC WHITE',
    img: opticWhiteImg,
    images: [
      opticWhiteImg,
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'blue',
    label: 'Blue',
    name: 'BLUE',
    img: blueImg,
    images: [
      blueImg,
    ],
    isNew: false,
    model: { variant: 'banner', badgeText: "Aliyah is 5'7 wearing S", name: 'Aliyah', size: 'S', height: '170cm', bust: '81cm', waist: '64cm', hips: '91cm' },
  },
  {
    id: 'rangers',
    label: 'Rangers',
    name: 'RANGERS',
    img: rangersImg,
    images: [
      rangersImg,
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
    name: 'Impact Backless Bandeau',
    color: 'Midnight Black',
    price: '$49.00',
    priceNum: 49,
    reviews: 52866,
    img: midnightBlackImg,
    current: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    lengths: null,
  },
  {
    id: 2,
    name: 'Impact Shorts | 4.5"',
    color: 'Midnight Black',
    price: '$49.00',
    priceNum: 49,
    reviews: 52866,
    img: lookShortsNew,
    current: false,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    lengths: null,
  },
  {
    id: 3,
    name: 'Impact Half Zippy',
    color: 'Midnight Black',
    price: '$69.00',
    priceNum: 69,
    reviews: 52866,
    img: lookHalfZippy,
    current: false,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    lengths: null,
  },
  {
    id: 4,
    name: 'Origin Flares',
    color: 'Midnight Black',
    price: '$69.00',
    priceNum: 69,
    reviews: 52866,
    img: lookFlares,
    current: false,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    lengths: ['SHORT', 'REGULAR', 'LONG'],
  },
]

export const FEATURE_RATINGS = [
  { label: 'Bra Support',  value: 1 },
  { label: 'Softness', value: 5 },
  { label: 'Stretch',  value: 3 },
]

// Review ratings from Judge.me — replace with API data
export const REVIEW_RATINGS = [
  { label: 'Product Quality', low: 'Not as expected', high: 'Incredible', value: 95 },
  { label: 'Sizing',          low: 'Size Down',       high: 'Size Up',    value: 78 },
  { label: 'Fit',             low: 'Loose',           high: 'Tight',      value: 72 },
]

export const ASSETS = {
  logo:       dfyneLogo,
  klarna:     klarnaLogo,
  afterpay:   afterpayLogo,
  shopPay:    shopPayLogo,
  package:    packageIcon,
  modelPhoto: modelPhoto,
}
