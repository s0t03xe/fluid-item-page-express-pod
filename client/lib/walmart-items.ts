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
  badgeKind?: "deal" | "rollback" | "bestseller" | "outline" | "new";
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

const WM = "https://i5.walmartimages.com/seo/";
const VEATOOL_65HR_IMG =
  WM +
  "Bluetooth-Headphones-Ear-65Hrs-Playtime-Wireless-Headphones-Bass-Boosted-90-Lightweight-Headset-Deep-Bass-Clear-Call-4-Noise-Cancelling-Mics-Low-Late_fb80ffb7-b9b9-4d16-9c04-dc36991b19f8.d6e8d5a484fa4b5b21f6fea1e67b0909.jpeg?odnHeight=288&odnWidth=288&odnBg=FFFFFF";
const ANC_45DB_BLACK_IMG =
  WM +
  "Hybrid-Active-Noise-Cancelling-45dB-Bluetooth-Headphones-5-4-50H-Playtime-Earbuds-Bass-Boosted-90-Clear-Call-4-Mics-Comfort-Fit-Ear-Headphones-Travel_040fa397-851d-4b03-926d-480d7164d093.3ab5629ea7ce0859cc4e9f86523e5111.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF";
const DEAL_40H_IMG =
  WM +
  "Wireless-Headphone-Bluetooth-5-4-40H-Playtime-3EQ-Modes-Bass-Boosted-85-Bluetooth-Headphone-Ear-Wireless-Wired-ENC-Clear-Call-Foldable-Ear-Headphone_11bd6775-2242-4ff9-81ad-f07f2e2740ee.cb649ef05340223e96beb37037df98d0.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF";
const SAMSUNG_BUDS_IMG =
  WM +
  "Samsung-Galaxy-Buds4-Pro-Black_a15892d4-41ca-4839-9ac1-57aed4181ae6.3c234a07110bf2964c4dd6f62a36083a.jpeg?odnHeight=328&odnWidth=328&odnBg=FFFFFF";
const WIRELESS_54_IMG =
  WM +
  "Wireless-Bluetooth-Headphones-5-4-40H-Playtime-3-EQ-Modes-4-Micrs-ENC-Noise-Cancelling-Clear-Calls-Bass-Boosted-85-Comfort-Fit-Ear-Headphones-Travel_c3c4f269-2f1d-4a2b-8fca-5d58f591c418.4b3f7988441c194b6a04585a172796ce.jpeg?odnHeight=328&odnWidth=328&odnBg=FFFFFF";
const AIRPODS_4_IMG =
  WM +
  "Apple-AirPods-4_43ffea38-e233-4fee-8a6f-7ff92ad713ae.97d6d24546e5cbdfcdc0e2fa52c969b1.jpeg?odnHeight=328&odnWidth=328&odnBg=FFFFFF";
const DEAL_45DB_IMG =
  WM +
  "Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-60H-Playtime-Wireless-Earbuds-Bass-Boosted-90-ENC-Clear-Call-Ear-Headphone-Travel-Ho_7ceadea2-7d0a-4d10-855f-311b909c5611.7f51798f73aab5fed3523fcbe64b2a70.jpeg?odnHeight=328&odnWidth=328&odnBg=FFFFFF";
const HYBRID_53DB_IMG =
  WM +
  "Hybrid-Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-60H-Playtime-Wireless-Headphones-Bass-Boosted-90-Clear-Call-Comfort-Fit-Ear-H_d20c6b34-385f-40dd-869f-9c78fd8fef5b.224a1f78a9405b52616a8d0754da706c.jpeg?odnHeight=328&odnWidth=328&odnBg=FFFFFF";
const AIRPODS_PRO_3_IMG =
  WM +
  "AirPods-Pro-3_bbf7d96e-0ea2-4adc-93cc-f2aefe9c9fad.5094bad5696a875c3e764810e9670083.jpeg?odnHeight=328&odnWidth=328&odnBg=FFFFFF";

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
    badgeKind: "bestseller",
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
    badgeKind: "outline",
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
    badgeKind: "outline",
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
    title:
      "Bluetooth Headphones Over Ear, 65Hrs Playtime Wireless Headphones, Bass Boosted by 90%",
    store: "Visit the VEATOOL store",
    rating: 4.4,
    ratingCount: "4,565",
    priceDollars: "19",
    priceCents: "49",
    priceWas: "169.98",
    savings: "150.49",
    optionsFrom: "15.13",
    monthly: "10",
    badge: "Deal",
    badgeKind: "deal",
    sponsored: true,
    saveWithPlus: true,
    shippingLines: ["Shipping, arrives tomorrow"],
  },
  {
    id: "veatool-65hr",
    image: VEATOOL_65HR_IMG,
    title:
      "Bluetooth Headphones Over Ear, 65Hrs Playtime Wireless Headphones, Bass Boosted by 90%, Lightweight Headset with Deep Bass",
    store: "Visit the VEATOOL store",
    rating: 4.4,
    ratingCount: "4565",
    priceDollars: "20",
    priceCents: "79",
    priceWas: "159.98",
    savings: "139.19",
    monthly: "10",
    sponsored: true,
  },
  {
    id: "anc-45db-black",
    image: ANC_45DB_BLACK_IMG,
    title:
      "Active Noise Cancelling Headphones, -45dB Bluetooth Headphones 5.4, 50H Playtime, Bass Boosted by 90%, Comfort Fit Over Ear",
    store: "Visit the store",
    rating: 4,
    ratingCount: "1,364",
    priceDollars: "24",
    priceCents: "29",
    priceWas: "169.99",
    savings: "145.70",
    monthly: "12",
    sponsored: true,
    saveWithPlus: true,
    shippingLines: ["Shipping, arrives Fri, Oct 30"],
  },
  {
    id: "airpods-4",
    image: AIRPODS_4_IMG,
    title: "Apple AirPods 4",
    store: "Visit the Apple store",
    rating: 4.3,
    ratingCount: "89,033",
    priceDollars: "99",
    priceCents: "00",
    priceWas: "129.99",
    savings: "30.99",
    optionsFrom: "68.00",
    monthly: "50",
    badge: "Rollback",
    badgeKind: "rollback",
    saveWithPlus: true,
    shippingLines: ["Shipping, arrives tomorrow"],
  },
  {
    id: "deal-45db-25-79",
    image: DEAL_45DB_IMG,
    title:
      "Active Noise Cancelling Headphones -45dB, Bluetooth Headphones 5.4, 60H Playtime Wireless Earbuds",
    store: "Visit the store",
    rating: 4.3,
    ratingCount: "751",
    priceDollars: "25",
    priceCents: "79",
    priceWas: "169.99",
    savings: "144.20",
    optionsFrom: "25.79 – $49.99",
    monthly: "13",
    badge: "Deal",
    badgeKind: "deal",
    sponsored: true,
    saveWithPlus: true,
    shippingLines: ["Shipping, arrives Fri, Oct 30"],
  },
  {
    id: "wireless-5-4-19-29",
    image: WIRELESS_54_IMG,
    title:
      "Wireless Bluetooth Headphones 5.4, 40H Playtime with 3 EQ Modes, 4 Mics ENC Noise Cancelling for Clear Calls",
    store: "Visit the store",
    rating: 4.5,
    ratingCount: "828",
    priceDollars: "13",
    priceCents: "48",
    priceWas: "24.99",
    savings: "11.51",
    optionsFrom: "13.48 – $21.83",
    monthly: "7",
    badge: "Deal",
    badgeKind: "deal",
    sponsored: true,
    saveWithPlus: true,
    shippingLines: ["Shipping, arrives tomorrow"],
  },
  {
    id: "hybrid-53db-26-79",
    image: HYBRID_53DB_IMG,
    title:
      "Hybrid Active Noise Cancelling Headphones -53dB, Bluetooth Headphones 5.4, 60H Playtime Wireless Earbuds",
    store: "Visit the store",
    rating: 4.5,
    ratingCount: "97",
    priceDollars: "26",
    priceCents: "79",
    priceWas: "169.99",
    savings: "143.20",
    optionsFrom: "26.79 – $49.99",
    monthly: "13",
    badge: "Deal",
    badgeKind: "deal",
    sponsored: true,
    saveWithPlus: true,
    shippingLines: ["Shipping, arrives tomorrow"],
  },
  {
    id: "deal-40h-black",
    image: DEAL_40H_IMG,
    title:
      "Wireless Headphone Bluetooth 5.4, 40H Playtime with 3EQ Modes, Bass Boosted 85%, Bluetooth Headphone Over Ear",
    store: "Visit the store",
    rating: 4.5,
    ratingCount: "196",
    priceDollars: "19",
    priceCents: "59",
    priceWas: "149.99",
    savings: "130.40",
    monthly: "10",
    sponsored: true,
    saveWithPlus: true,
    shippingLines: ["Shipping, arrives tomorrow"],
  },
  {
    id: "beats-studio-pro",
    image: BEATS_IMG,
    title: "Beats Studio Pro Wireless Headphones - Matte White",
    store: "Visit the Beats store",
    rating: 4.5,
    ratingCount: "9,135",
    priceDollars: "149",
    priceCents: "00",
    priceWas: "299.00",
    savings: "150.00",
    optionsFrom: "114.99",
    monthly: "75",
    badge: "Rollback",
    badgeKind: "rollback",
    saveWithPlus: true,
    shippingLines: ["Free shipping, arrives tomorrow"],
    swatches: ["#2a2a2c", "#3a2420", "#ececec", "#1d2a4a"],
  },
  {
    id: "airpods-pro-3",
    image: AIRPODS_PRO_3_IMG,
    title: "Apple AirPods Pro 3",
    store: "Visit the Apple store",
    rating: 4.4,
    ratingCount: "6,212",
    priceDollars: "199",
    priceCents: "00",
    priceWas: "249.00",
    savings: "50.00",
    optionsFrom: "199.00 – $254.49",
    monthly: "100",
    badge: "In 2K+ people's carts",
    badgeKind: "outline",
    saveWithPlus: true,
    shippingLines: ["Shipping, arrives tomorrow"],
  },
  {
    id: "samsung-buds4-pro",
    image: SAMSUNG_BUDS_IMG,
    title: "Samsung Galaxy Buds4 Pro Bluetooth Headphones and Charging Case, Black",
    store: "Visit the Samsung store",
    rating: 4.7,
    ratingCount: "2,831",
    priceDollars: "249",
    priceCents: "99",
    monthly: "125",
    sponsored: true,
    saveWithPlus: true,
    shippingLines: ["Delivery as soon as today"],
  },
];

const byId = (id: string) => {
  const item = WALMART_ITEMS.find((i) => i.id === id);
  if (!item) throw new Error(`Unknown item ${id}`);
  return item;
};

/** Items in the order they appear on the search listing (also the item-page pager order). */
export const PLP_ORDER: WalmartItem[] = [
  "veatool-65hr",
  "anc-45db-black",
  "bt-over-ear-65hr",
  "hybrid-anc-headphones",
  "airpods-4",
  "deal-45db-25-79",
  "wireless-5-4-19-29",
  "hybrid-53db-26-79",
  "deal-40h-black",
  "beats-studio-pro",
  "airpods-pro-3",
  "samsung-buds4-pro",
  "skullcandy-hesh",
  "onn-pink",
].map(byId);
