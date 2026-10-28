export interface WalmartItem {
  id: string;
  image: string;
  /** Only items flagged true use the full photo/video digest gallery. */
  richGallery?: boolean;
  galleryVideoSrc?: string;
  galleryVideoPoster?: string;
  title: string;
  store: string;
  rating: number;
  ratingCount: string;
  priceDollars: string;
  priceCents: string;
  priceWas?: string;
  savings?: string;
  monthly?: string;
  /** PLP-only presentation fields */
  badge?: string;
  sponsored?: boolean;
  saveWithPlus?: boolean;
  optionsFrom?: string;
  shippingLines?: string[];
  swatches?: string[];
  appleOffer?: string;
}

const JBL_HERO_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F79eeffa60ce145bea5091a2d24a456d9";
const BEATS_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F8f62d61b205a46d3ad560688f10c7804";
const ABCPOW_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fc214c486537a4446abe2ab3bab8b9f20";
const JLAB_EARBUDS_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F544c4c237f3342fb86b80bfa50fee769";
const HYBRID_HEADPHONES_IMG =
  "https://i5.walmartimages.com/seo/ybrid-Active-Noise-Cancelling-Headphones-Wireless-Bluetooth-Ear-50dB-ANC-120H-Playback-6-MIC-ENC-Clear-Calls-Hi-Res-360-Spatial-Audio-Foldable-Comfor_7d320cd6-f8f2-4832-9ad1-79ed0f93b8cc.d98752bb32bdc2e0b94df1c2f1758540.jpeg?odnHeight=328&odnWidth=328&odnBg=FFFFFF";
const HYBRID_HEADPHONES_VIDEO =
  "https://vds.prod.walmartimages.com/thunder/assets/media-service/wcnp-prod/videos/73e74f4e-092e-496f-9e39-123b6fa23566/transcode/825b7790-deac-401d-b30d-336f1a72ad3f/640x360_PROGRESSIVE-2500_30_640x360.mp4";
const HYBRID_HEADPHONES_VIDEO_POSTER =
  "https://vds.prod.walmartimages.com/thunder/assets/media-service/wcnp-prod/videos/73e74f4e-092e-496f-9e39-123b6fa23566/thumbnail-async-ab7.jpeg";

export const WALMART_ITEMS: WalmartItem[] = [
  {
    id: "cillso-earbuds",
    image: JLAB_EARBUDS_IMG,
    title: "Wireless Earbuds, Bluetooth Ear Buds 5.4 Mini Hifi Stereo",
    store: "Visit the Cillso store",
    rating: 4.5,
    ratingCount: "391",
    priceDollars: "17",
    priceCents: "99",
    priceWas: "159.99",
    savings: "142.00",
    monthly: "9",
    sponsored: true,
  },
  {
    id: "anc-headphones",
    image: JBL_HERO_IMG,
    richGallery: true,
    title:
      "Active Noise Cancelling Headphones, -45dB Bluetooth Headphones 5.4 with Deep Bass",
    store: "Visit the store",
    rating: 4,
    ratingCount: "1,069",
    priceDollars: "22",
    priceCents: "09",
    priceWas: "169.99",
    savings: "147.90",
    monthly: "11",
    sponsored: true,
    saveWithPlus: true,
    shippingLines: ["Shipping arrives Thu, Jul 16"],
  },
  {
    id: "hybrid-anc-headphones",
    image: HYBRID_HEADPHONES_IMG,
    title:
      "Hybrid Active Noise Cancelling Headphones Wireless Bluetooth Over Ear - 50dB ANC, 120H Playback, 6-MIC ENC Clear Calls, Hi-Res 360° Spatial Audio, Foldable Comfort for Travel Office",
    store: "Visit the store",
    rating: 4.4,
    ratingCount: "204",
    priceDollars: "39",
    priceCents: "79",
    priceWas: "339.99",
    sponsored: true,
    badge: "Best seller",
    shippingLines: ["Free shipping, arrives tomorrow"],
    galleryVideoSrc: HYBRID_HEADPHONES_VIDEO,
    galleryVideoPoster: HYBRID_HEADPHONES_VIDEO_POSTER,
  },
  {
    id: "skullcandy-hesh",
    image: ABCPOW_IMG,
    title:
      "Skullcandy Hesh 540 ANC Wireless over-Ear Headphones with Active Noise Canceling",
    store: "Visit the Skullcandy store",
    rating: 4.5,
    ratingCount: "39",
    priceDollars: "49",
    priceCents: "88",
    priceWas: "159.00",
    savings: "109.12",
    monthly: "25",
    saveWithPlus: true,
    badge: "50+ bought since yesterday",
    shippingLines: ["Free shipping, arrives tomorrow"],
    swatches: ["#15171b", "#8b8f98"],
  },
  {
    id: "onn-pink",
    image: BEATS_IMG,
    title: "onn On-Ear Headphones, Pink",
    store: "Visit the onn store",
    rating: 4.5,
    ratingCount: "3,658",
    priceDollars: "6",
    priceCents: "00",
    priceWas: "9.88",
    savings: "3.88",
    optionsFrom: "6.00 – 18.20",
    monthly: "3",
    badge: "Overall pick",
    shippingLines: [
      "Delivery as soon as 6am",
      "Shipping arrives today",
      "Pickup as soon as 7am",
    ],
    swatches: ["#1c1c1c", "#3b6bd1", "#f2c9d8"],
    appleOffer: "4 free offers from Apple",
  },
  {
    id: "bt-over-ear-65hr",
    image: JBL_HERO_IMG,
    title: "Bluetooth Headphones Over Ear, 65Hrs Playtime",
    store: "Visit the store",
    rating: 4.4,
    ratingCount: "512",
    priceDollars: "22",
    priceCents: "69",
    priceWas: "149.95",
    savings: "127.26",
    optionsFrom: "19.69",
    monthly: "11",
    badge: "50+ bought since yesterday",
    sponsored: true,
  },
];
