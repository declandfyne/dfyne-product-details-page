import afterpayLogo from '../assets/afterpay.svg'
import shopPayLogo  from '../assets/shoppay.svg'
import klarnaLogo   from '../assets/klarna.svg'
import modelPhoto   from '../assets/modelsize.jpg'
import dfyneLogo    from '../assets/dfyne-logo.svg'
import packageIcon  from '../assets/package-icon.svg'

import midnightBlackImg from '../assets/midnight-black.jpg'
import reelVideo        from '../assets/reel.mp4'
import figmaGallery1    from '../assets/figma-gallery-1.png'
import figmaGallery2    from '../assets/figma-gallery-2.png'
import figmaGallery3    from '../assets/figma-gallery-3-245583.png'
import figmaGallery4    from '../assets/figma-gallery-4-634b58.png'
import figmaVideoPoster from '../assets/figma-gallery-video-poster.png'
import relatedMidnight1 from '../assets/related-midnight-1.png'
import relatedMidnight2 from '../assets/related-midnight-2.png'
import relatedMidnight3 from '../assets/related-midnight-3.png'
import relatedMidnight4 from '../assets/related-midnight-4.png'
import relatedMidnight5 from '../assets/related-midnight-5.png'
import relatedMidnight6 from '../assets/related-midnight-6.png'
import relatedMidnight7 from '../assets/related-midnight-7.png'
import relatedMidnight8 from '../assets/related-midnight-8.png'
import relatedMidnight9 from '../assets/related-midnight-9.png'
import relatedMidnight10 from '../assets/related-midnight-10.png'
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
      { type: 'image', src: figmaGallery1 },
      { type: 'image', src: figmaGallery2 },
      { type: 'image', src: figmaGallery3 },
      { type: 'image', src: figmaGallery4 },
      { type: 'video', src: reelVideo, poster: figmaVideoPoster },
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
      { type: 'image', src: navyImg },
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
      { type: 'image', src: tealImg },
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
      { type: 'image', src: truffleImg },
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
      { type: 'image', src: opticWhiteImg },
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
      { type: 'image', src: blueImg },
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
      { type: 'image', src: rangersImg },
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

export const RELATED_RANGES_ITEMS = [
  {
    id: 1,
    name: 'Defy Strappy Bra',
    color: 'Midnight Black',
    price: '$36.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight1,
  },
  {
    id: 2,
    name: 'Origin Halter Bra',
    color: 'Midnight Black',
    price: '$38.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight2,
  },
  {
    id: 3,
    name: 'Origin Sports Bra',
    color: 'Midnight Black',
    price: '$38.99',
    reviews: 52866,
    badge: 'LIMITED EDITION',
    img: relatedMidnight3,
  },
  {
    id: 4,
    name: 'Impact Scoop Back Bra',
    color: 'Midnight Black',
    price: '$36.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight4,
  },
  {
    id: 5,
    name: 'Vision Sports Bras',
    color: 'Midnight Black',
    price: '$36.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight5,
  },
  {
    id: 6,
    name: 'Vision Twist Front Sports Bras',
    color: 'Midnight Black',
    price: '$36.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight6,
  },
  {
    id: 7,
    name: 'Dynamic Twist Back Bra',
    color: 'Midnight Black',
    price: '$36.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight7,
  },
  {
    id: 8,
    name: 'Defy Strappy Bra',
    color: 'Midnight Black',
    price: '$36.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight8,
  },
  {
    id: 9,
    name: 'Dynamic Backless Sports Bra',
    color: 'Midnight Black',
    price: '$36.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight9,
  },
  {
    id: 10,
    name: 'Impact Strappy Bra',
    color: 'Midnight Black',
    price: '$36.99',
    reviews: 52866,
    badge: 'NEW',
    img: relatedMidnight10,
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
