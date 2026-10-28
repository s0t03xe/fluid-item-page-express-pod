import type { WalmartItem } from "@/lib/walmart-items";

export interface PdpColor { name: string; image?: string }
export interface PdpReview { title?: string; text?: string; rating: number; author?: string; date?: string; verified?: boolean }
export interface PdpContent {
  title: string;
  priceDollars: string;
  priceCents: string;
  priceWas?: string | null;
  rating: number;
  ratingCount: number;
  brand?: string;
  seller?: string;
  badges: string[];
  colors: PdpColor[];
  gallery: string[];
  videos: string[];
  keyFeatures: string[];
  about: string[];
  specs: { name: string; value: string }[];
  fulfillment: string[];
  returns?: string;
  reviewSummary: {
    average?: number;
    total?: number;
    histogram?: Record<string, number>;
    positive: string[];
    negative: string[];
  };
  reviews: PdpReview[];
  similar: { title: string; price?: string; image?: string }[];
}

/** Real item content captured from walmart.com, keyed by WalmartItem id. Single source for the listing and the item page. */
export const PDP_CONTENT: Record<string, PdpContent> = {
 "airpods-4": {
  "title": "Apple AirPods 4",
  "priceDollars": "99",
  "priceCents": "00",
  "priceWas": "129.99",
  "rating": 4.3,
  "ratingCount": 89033,
  "brand": "Apple",
  "seller": "Walmart.com",
  "badges": [
   "In 5K+ people's carts",
   "Rollback",
   "Overall pick"
  ],
  "colors": [],
  "gallery": [
   "https://i5.walmartimages.com/seo/Apple-AirPods-4_43ffea38-e233-4fee-8a6f-7ff92ad713ae.97d6d24546e5cbdfcdc0e2fa52c969b1.jpeg",
   "https://i5.walmartimages.com/asr/b4674342-45cb-466a-998c-b3fff7c1aef0.c69a475c3208a8e546256df06cb93c6d.jpeg",
   "https://i5.walmartimages.com/asr/a3aaba30-620b-43d2-9b6c-4fd4c94a5085.99b9f4606ee725a25d3ae376cd6c5595.jpeg",
   "https://i5.walmartimages.com/asr/5156bffb-572b-4e2f-8692-a9c9277521f2.94f3715f66d75062c6e1a349dd35e7e1.jpeg"
  ],
  "videos": [],
  "keyFeatures": [
   "Battery life: 30 h",
   "Headphone style: In-Ear",
   "Noise control technology: Sound Isolation",
   "Wireless: Y",
   "Brand: Apple",
   "Rec. use: Casual Listening",
   "Works with: iPhone",
   "Ip code: IP54"
  ],
  "about": [
   "REBUILT FOR COMFORT — AirPods 4 have been redesigned for exceptional all-day comfort and greater stability. With a refined contour, shorter stem, and quick-press controls for music or calls.",
   "PERSONALIZED SPATIAL AUDIO — Personalized Spatial Audio with dynamic head tracking places sound all around you, creating a theater-like listening experience for music, TV shows, movies, games, and more.*",
   "IMPROVED SOUND AND CALL QUALITY — AirPods 4 feature the Apple-designed H2 chip. Voice Isolation improves the quality of phone calls in loud conditions. Using advanced computational audio, it reduces"
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "30 h"
   },
   {
    "name": "Headphone style",
    "value": "In-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Sound Isolation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth"
   },
   {
    "name": "Features",
    "value": "Built-in Microphone, Voice-Activated"
   },
   {
    "name": "Brand",
    "value": "Apple"
   },
   {
    "name": "Rec. use",
    "value": "Casual Listening"
   },
   {
    "name": "Works with",
    "value": "iPhone"
   },
   {
    "name": "Ip code",
    "value": "IP54"
   }
  ],
  "fulfillment": [
   "Free pickup, today at Sacramento Gerber Rd Supercenter",
   "Delivery from store",
   "Free shipping, arrives by today to San Jose, 95129"
  ],
  "returns": "Free Holiday returns until Jan 31. 30-Day return window. Free returns",
  "reviewSummary": {
   "average": 4.3,
   "total": 89033,
   "histogram": {
    "5": 65130,
    "4": 8300,
    "3": 4057,
    "2": 2793,
    "1": 8753
   },
   "positive": [
    "Long lasting battery",
    "Easy to use",
    "Ideal for gifting",
    "Clear sound",
    "Reasonable price point"
   ],
   "negative": []
  },
  "reviews": [
   {
    "title": "Great Sound Quality, But Not Ideal for Workouts",
    "text": "The Apple AirPods 4 have excellent sound quality with twist lock ,clear audio ,frequency range and great overall performance for everyday use. They are comfortable for casual listening, phone calls, and music. However, they don't stay",
    "rating": 5,
    "author": "Geeta",
    "date": "7/21/2026",
    "verified": true
   },
   {
    "title": "AirPods four are the new go.",
    "text": "Needed new headphones without the head band part, these work amazing for the price and easy access! The ear part fits decent enough it doesn't hurt but if left in for hours of course it's tender other than that. I would buy the new upgrade.",
    "rating": 5,
    "author": "Dee",
    "date": "7/27/2026",
    "verified": true
   },
   {
    "title": "I like them",
    "text": "These are real AirPods, and connecting them to my Bluetooth was fairly easy. The only thing I'd complain about is the sound how they fit my ears. Besides that, they are great— especially for $100.",
    "rating": 5,
    "author": "Shakeela",
    "date": "7/15/2026",
    "verified": true
   },
   {
    "text": "Absolutely love my new AirPods especially the noise cancellation …so glad i can use the same charger as my iPhone 18 pro max",
    "rating": 5,
    "author": "Tyneisha",
    "date": "10/18/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "AirPods Max 2 - Purple",
    "price": "$449.00",
    "image": "https://i5.walmartimages.com/asr/a7807e09-a721-4ae2-9f5f-2ba157903d6c.a39ad7b17511b5543f3802f31224f777.png"
   },
   {
    "title": "Beats Studio Pro Wireless Headphones - Matte White",
    "price": "$149.00",
    "image": "https://i5.walmartimages.com/asr/804f7a19-b46f-455b-8ba8-5e0bda5bb76b.e2874ae3d999c960c832ac4ff912f4c1.jpeg"
   },
   {
    "title": "JBL Tune 530BT - Wireless on-ear Bluetooth® headphones - Black",
    "price": "$39.95",
    "image": "https://i5.walmartimages.com/asr/0a7657f0-ed6a-4f0e-b545-c1a3b421932e.60985c146f2c808d39100f22bd31b7fd.png"
   },
   {
    "title": "JBL Vibe Beam 2 - True Wireless Noise Cancelling Earbuds - Black",
    "price": "$42.95",
    "image": "https://i5.walmartimages.com/asr/36d0ebdd-6b55-4608-a7fa-04a19ddd458d.722677aaf3d2499b257ad8a6400a135e.jpeg"
   },
   {
    "title": "JLab Go Air Sport Bluetooth Earbuds, True Wireless with Charging Case, Teal",
    "price": "$31.87",
    "image": "https://i5.walmartimages.com/asr/bade06e3-b68c-4dd9-817f-25598b640a1c.3fc148295f14892775a102b8189d940a.png"
   },
   {
    "title": "Skullcandy Jib True XT 2 True Wireless Earbud Headphones, Black",
    "price": "$32.88",
    "image": "https://i5.walmartimages.com/asr/a2f4df8c-85ac-4260-816e-57dda77e1732.dd65b931953a78139bd29971ca3b5a5a.jpeg"
   }
  ]
 },
 "airpods-pro-3": {
  "title": "Apple AirPods Pro 3",
  "priceDollars": "199",
  "priceCents": "00",
  "priceWas": "249.00",
  "rating": 4.4,
  "ratingCount": 19279,
  "brand": "Apple",
  "seller": "Walmart.com",
  "badges": [
   "1K+ bought since yesterday",
   "Overall pick"
  ],
  "colors": [],
  "gallery": [
   "https://i5.walmartimages.com/seo/AirPods-Pro-3_bbf7d96e-0ea2-4adc-93cc-f2aefe9c9fad.5094bad5696a875c3e764810e9670083.jpeg",
   "https://i5.walmartimages.com/asr/bd0723a6-36c1-43f8-917c-bc9249339a75.84ff7119cef6edfb19258fc6ff9398dd.jpeg",
   "https://i5.walmartimages.com/asr/8baaf1cb-f065-4b6c-a520-d9d990084b45.57c28c9122cd4164d3b1d9c5befadcf7.jpeg",
   "https://i5.walmartimages.com/asr/10c38284-8cc4-4771-bdbb-5fcea6302bea.35f61b25b73e7786555bd94b2102571f.jpeg",
   "https://i5.walmartimages.com/asr/d58b721c-9721-4214-8a4a-a4539b491eb2.640f1e7369e58f9e3c514453c85d87cb.jpeg",
   "https://i5.walmartimages.com/asr/423cfe68-4062-4e16-a12d-13b7d83c1bc4.5a026277192d5ca5a434dcf98671b4de.jpeg"
  ],
  "videos": [],
  "keyFeatures": [
   "Battery life: 10 h",
   "Headphone style: In-Ear",
   "Noise control technology: Active Noise Cancellation",
   "Wireless: Y",
   "Features: Built-in Microphone",
   "Brand: Apple",
   "Rec. use: Casual Listening, Sports",
   "Works with: iPhone, iPads, Apple TV"
  ],
  "about": [
   "Active Noise Cancellation that reduces up to 2x more unwanted noise than AirPods Pro 2, in an in-ear wireless Bluetooth design",
   "Built-in heart rate sensing tracks heart rate and calories burned for up to 50 different workout types",
   "Live Translation enabled by Apple Intelligence, plus a described Siri experience offering hands-free access to an AI assistant on iPhone (availability may vary by device, software, and region)",
   "Automatic Switching between Apple devices, and Audio Sharing to share a song or show between two sets of AirPods on iPhone, iPad, or Apple TV",
   "Up to 8 hours of"
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "10 h"
   },
   {
    "name": "Headphone style",
    "value": "In-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Active Noise Cancellation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth"
   },
   {
    "name": "Features",
    "value": "Built-in Microphone"
   },
   {
    "name": "Brand",
    "value": "Apple"
   },
   {
    "name": "Rec. use",
    "value": "Casual Listening, Sports"
   },
   {
    "name": "Works with",
    "value": "iPhone, iPads, Apple TV"
   },
   {
    "name": "Ip code",
    "value": "IP57"
   }
  ],
  "fulfillment": [
   "Free pickup, today at Sacramento Gerber Rd Supercenter",
   "Delivery from store",
   "Free shipping, arrives by today to San Jose, 95129"
  ],
  "returns": "Free Holiday returns until Jan 31. 30-Day return window. Free returns",
  "reviewSummary": {
   "average": 4.4,
   "total": 19279,
   "histogram": {
    "5": 14966,
    "4": 1498,
    "3": 657,
    "2": 446,
    "1": 1712
   },
   "positive": [
    "Long lasting battery",
    "Snug fit",
    "Competitive price",
    "Strong noise cancellation",
    "Crisp sound quality"
   ],
   "negative": []
  },
  "reviews": [
   {
    "title": "Worth the money",
    "text": "I have never in my life experienced the quality of sound produced PLUS the noise cancellation is unbelievable. The first time I used noise cancellation mode was driving my truck and I literally thought the engine had shut off…..the other",
    "rating": 5,
    "author": "RM",
    "date": "7/12/2026",
    "verified": true
   },
   {
    "text": "Got these for my husband. He says he likes them. They fit well and sound good.",
    "rating": 5,
    "author": "biffy",
    "date": "10/22/2026",
    "verified": true
   },
   {
    "title": "Amazing sound",
    "text": "These things are Amazing. I've never heard anything that sounded so good, and the noise canceling is unbelievable. Greatest invention. Serious sound, great clarity and so easy to use.",
    "rating": 5,
    "author": "Deb",
    "date": "10/22/2026",
    "verified": true
   },
   {
    "text": "I bought these for my wife and she loved them. Was very impressed with the noise reduction.",
    "rating": 5,
    "author": "kenneth",
    "date": "10/23/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "AirPods Max 2 - Purple",
    "price": "$449.00",
    "image": "https://i5.walmartimages.com/asr/a7807e09-a721-4ae2-9f5f-2ba157903d6c.a39ad7b17511b5543f3802f31224f777.png"
   },
   {
    "title": "Beats by Dr. Dre Solo4 On-Ear Wireless Bluetooth Headphones, Drenched Gray",
    "price": "$129.00",
    "image": "https://i5.walmartimages.com/asr/6cdfbe6c-4373-4df0-b76c-b9da81d796f2.43650af23213b9f338d0b8ea67feddcb.png"
   },
   {
    "title": "Skullcandy Smokin' Buds 360 XT True Wireless in-Ear Earbuds, Black",
    "price": "$14.88",
    "image": "https://i5.walmartimages.com/asr/e14f4fd5-54d1-4d7b-8f50-1e3bd6878971.f413b4631d19da213e23d2e1e9cf4b6c.png"
   },
   {
    "title": "Skullcandy Crusher Evo XT Wireless over-Ear Headphones, Black",
    "price": "$99.00",
    "image": "https://i5.walmartimages.com/asr/6bc66273-05c8-464f-af06-02a11fec302c.40086a516ede63a3cd8439d34088f1e5.png"
   },
   {
    "title": "JBL Tune 520BT - Wireless on-ear headphones - Purple",
    "price": "$59.95",
    "image": "https://i5.walmartimages.com/asr/1a02e2c0-868f-4683-b35e-f8e47866f97b.fa78c8fff4fa1eb1fa4c24ca2a092c18.png"
   },
   {
    "title": "JLab Go Air Sport Bluetooth Earbuds, True Wireless with Charging Case, Teal",
    "price": "$31.87",
    "image": "https://i5.walmartimages.com/asr/bade06e3-b68c-4dd9-817f-25598b640a1c.3fc148295f14892775a102b8189d940a.png"
   }
  ]
 },
 "beats-studio-pro": {
  "title": "Beats Studio Pro Wireless Headphones - Matte White",
  "priceDollars": "149",
  "priceCents": "00",
  "priceWas": "299.00",
  "rating": 4.5,
  "ratingCount": 9135,
  "brand": "Beats by Dr. Dre",
  "seller": "Walmart.com",
  "badges": [
   "100+ bought since yesterday",
   "Rollback",
   "Overall pick"
  ],
  "colors": [
   {
    "name": "Black",
    "image": "https://i5.walmartimages.com/asr/5a80f33b-12d3-4af8-943d-442f23b49914.295fbbeea102072421dce8861ec0bd86.png"
   },
   {
    "name": "Deep Brown",
    "image": "https://i5.walmartimages.com/asr/28d4a19d-5c6f-41f5-84e0-6746d99d7506.5d9714d06e9a82fdad012acdf99b32e6.png"
   },
   {
    "name": "Matte White",
    "image": "https://i5.walmartimages.com/asr/804f7a19-b46f-455b-8ba8-5e0bda5bb76b.e2874ae3d999c960c832ac4ff912f4c1.jpeg"
   },
   {
    "name": "Navy",
    "image": "https://i5.walmartimages.com/asr/78905f82-b57a-4a75-9f04-bcc675133372.6fe97be413e65d31d73258fd75ff5191.png"
   },
   {
    "name": "Sandstone",
    "image": "https://i5.walmartimages.com/asr/d036288e-dcb6-4ee9-908b-fbcada787211.f0fcbf75e87993492e92a3833ed51ce2.png"
   },
   {
    "name": "White and Black",
    "image": "https://i5.walmartimages.com/asr/84a93524-0282-4f81-81db-98c90e178be7.28f6e3641ba307f3b5f2870cf94ff13e.png"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/Beats-by-Dr-Dre-Studio-Pro-Wireless-Headphones-Matte-White-Bundle_a6a5299e-402b-43cf-be35-07aafb111d0a.c9bd2ab301ab971e1dd756be03f18462.png",
   "https://i5.walmartimages.com/asr/d2e884d4-fe8a-4e60-9f71-f988871749e6.9de744997281193f1f77cd7c088a489c.png",
   "https://i5.walmartimages.com/asr/dc4e5c54-7572-4765-aba5-1415e5fde7e7.d797c21aa1a1d7a7e6b0c7a7aa2a664b.png",
   "https://i5.walmartimages.com/asr/172ea169-62dc-4659-aa47-cb811f13ad6a.00691a53b94c9909ea673720cec44b63.png",
   "https://i5.walmartimages.com/asr/aacf06a0-2ee9-4261-af0c-ddd207e90b84.037ff454623712a41c11d86ec4ef278e.png",
   "https://i5.walmartimages.com/asr/511931c7-d3ac-419b-884c-5fd5f9bc69bc.99a16c16de25287d796b588464dc1f12.jpeg"
  ],
  "videos": [],
  "keyFeatures": [
   "Battery life: 40 h",
   "Headphone style: Over-Ear",
   "Noise control technology: Active Noise Cancellation",
   "Wireless: Y",
   "Brand: Beats by Dr. Dre",
   "Rec. use: Sports",
   "Works with: Apple, Android",
   "Assembled product weight: 2.21 lb"
  ],
  "about": [
   "BEATS’ CUSTOM ACOUSTIC PLATFORM delivers rich, immersive sound whether you’re listening to music or taking calls.",
   "LOSSLESS AUDIO via USB-C1 plus three distinct built-in sound profiles to enhance your listening experience.",
   "HEAR WHAT YOU WANT with two distinct listening modes: fully adaptive Active Noise Cancelling (ANC) and Transparency mode",
   "ENHANCED COMPATIBILITY with one-touch pairing and a robust set of native Apple and Android features2",
   "PERSONALIZED SPATIAL AUDIO with dynamic head tracking place you at the center of an immersive 360-degree listening experience3",
   "LONGER LISTENING"
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "40 h"
   },
   {
    "name": "Headphone style",
    "value": "Over-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Active Noise Cancellation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth"
   },
   {
    "name": "Features",
    "value": "Built-in Microphone, Foldable"
   },
   {
    "name": "Brand",
    "value": "Beats by Dr. Dre"
   },
   {
    "name": "Rec. use",
    "value": "Sports"
   },
   {
    "name": "Works with",
    "value": "Apple, Android"
   },
   {
    "name": "Assembled product weight",
    "value": "2.21 lb"
   }
  ],
  "fulfillment": [
   "Free shipping, arrives by tomorrow to San Jose, 95129",
   "Pickup not available at Sacramento Gerber Rd Supercenter"
  ],
  "returns": "Free Holiday returns until Jan 31. 30-Day return window. Free returns",
  "reviewSummary": {
   "average": 4.5,
   "total": 9135,
   "histogram": {
    "5": 7285,
    "4": 703,
    "3": 300,
    "2": 199,
    "1": 648
   },
   "positive": [
    "Clear sound quality",
    "Fair price",
    "Effective noise cancellation",
    "Soft ear cushions",
    "Long lasting battery"
   ],
   "negative": [
    "Insufficient volume level"
   ]
  },
  "reviews": [
   {
    "title": "Amazing",
    "text": "They Said Amazing !!!!!",
    "rating": 5,
    "author": "Israel",
    "date": "10/13/2026",
    "verified": true
   },
   {
    "title": "Love",
    "text": "Love the Beats Pro! Comfortable and stylish",
    "rating": 5,
    "date": "10/25/2026",
    "verified": true
   },
   {
    "title": "Twice the service at  less than half the cost!",
    "text": "I'm sure glad I shopped the Beats Studio headphones. I was pleasantly surprised that purchasing from Walmart save me over 50% of the cost and the delivery time was excellent. I enjoy these earphones as part of my AI system and appreciate",
    "rating": 5,
    "author": "anonymous",
    "date": "8/25/2026",
    "verified": true
   },
   {
    "text": "I ordered both of my sons a pair for their Christmas gift.\nAnd I decided to get me a pair during the Special Sale that was going on. And I was Pleasantly Surprised how much they were. I saved $200 and we are living in hard times so I",
    "rating": 5,
    "author": "Sherelle",
    "date": "6/30/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "Beats by Dr. Dre Solo4 On-Ear Wireless Bluetooth Headphones, Drenched Gray",
    "price": "$129.00",
    "image": "https://i5.walmartimages.com/asr/6cdfbe6c-4373-4df0-b76c-b9da81d796f2.43650af23213b9f338d0b8ea67feddcb.png"
   },
   {
    "title": "JBL Vibe Beam 2 - True Wireless Noise Cancelling Earbuds - Black",
    "price": "$39.95",
    "image": "https://i5.walmartimages.com/asr/36d0ebdd-6b55-4608-a7fa-04a19ddd458d.722677aaf3d2499b257ad8a6400a135e.jpeg"
   },
   {
    "title": "Beats by Dr. Dre Powerbeats Pro 2 In-Ear Headphones, Electric Orange",
    "price": "$199.95",
    "image": "https://i5.walmartimages.com/asr/dc4d8962-0ee3-450c-873d-998d11b9c367.abe5e53c40df22dd462df267d850b6ce.png"
   },
   {
    "title": "JBL Tune Flex 2 True Wireless Inner Ear Earbuds, Black",
    "price": "$109.95",
    "image": "https://i5.walmartimages.com/asr/12880d64-64d0-42b2-940f-5f67b48966e5.82363104c2f58ec7fec2fc33dcb70356.jpeg"
   },
   {
    "title": "Skullcandy Jib True XT 2 True Wireless Earbud Headphones, Black",
    "price": "$32.88",
    "image": "https://i5.walmartimages.com/asr/a2f4df8c-85ac-4260-816e-57dda77e1732.dd65b931953a78139bd29971ca3b5a5a.jpeg"
   },
   {
    "title": "Sony MDR-ZX110 Wired On-Ear Headphones, Black",
    "price": "$14.88",
    "image": "https://i5.walmartimages.com/asr/65dd7d9a-6b9a-42fb-8f26-38c6d9d49f1e.cd35a42a118d16f9041d2504e5e8afb2.png"
   }
  ]
 },
 "samsung-buds4-pro": {
  "title": "Samsung Galaxy Buds4 Pro Bluetooth Headphones and Charging Case, Black",
  "priceDollars": "249",
  "priceCents": "99",
  "priceWas": null,
  "rating": 4.7,
  "ratingCount": 2831,
  "brand": "Samsung",
  "seller": "Walmart.com",
  "badges": [
   "In 100+ people's carts",
   "Overall pick"
  ],
  "colors": [
   {
    "name": "Black"
   },
   {
    "name": "White"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/Samsung-Galaxy-Buds4-Pro-Black_a15892d4-41ca-4839-9ac1-57aed4181ae6.3c234a07110bf2964c4dd6f62a36083a.jpeg",
   "https://i5.walmartimages.com/asr/1f89a4db-c543-4349-8808-b2983414dbba.8efeb1e9aeb21f856eb7bb27d2c2a94d.jpeg",
   "https://i5.walmartimages.com/asr/3135d9e8-8b1f-466b-9a28-707c2c03e049.cb9bf4eb9eeee839f8b3a5c82e165fbd.jpeg",
   "https://i5.walmartimages.com/asr/1252f4b5-a459-4375-a514-9fc56634c120.436287b25a4f8de1779090995d3f03dc.jpeg",
   "https://i5.walmartimages.com/asr/217ee0a1-608b-44d0-8af9-f5473b107c64.104f3446d8c96feecbe769b27d73a8f2.jpeg",
   "https://i5.walmartimages.com/asr/a8d08b6e-d197-4fe2-b758-947f74738173.f600bcc87ea026ede3fab1870094387f.jpeg"
  ],
  "videos": [],
  "keyFeatures": [
   "Battery life: 18 h",
   "Headphone style: In-Ear",
   "Wireless: Y",
   "Features: Voice-Activated",
   "Brand: Samsung",
   "Works with: Galaxy S26 Series",
   "Ip code: IP57",
   "Assembled product weight: 2.05 oz"
  ],
  "about": [
   "Sound with exceptional detail and clarity. Hear the richness of the sounds you love most with Hi-Res Audio* on Galaxy Buds4 Pro. Designed with a 24-bit hi-fi codec, they maintain the integrity of your favorite audio, over Bluetooth. From small reverbs to subtle textures, every detail sounds dynamic and clear.",
   "Powerful sound for real music lovers. Enjoy a dynamic audio experience with dual speakers in each earbud. Galaxy Buds4 Pro feature a dedicated tweeter for rich highs and a separate woofer for deep, full bass. The result: Music comes to life with amazing depth, clarity and richness."
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "18 h"
   },
   {
    "name": "Headphone style",
    "value": "In-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Adaptive Noise Cancellation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth"
   },
   {
    "name": "Features",
    "value": "Voice-Activated"
   },
   {
    "name": "Brand",
    "value": "Samsung"
   },
   {
    "name": "Rec. use",
    "value": "Casual Listening, Classroom, Sports, Video Gaming"
   },
   {
    "name": "Works with",
    "value": "Galaxy S26 Series"
   },
   {
    "name": "Ip code",
    "value": "IP57"
   }
  ],
  "fulfillment": [
   "Free pickup, today at Sacramento Gerber Rd Supercenter",
   "Delivery from store",
   "Free shipping, arrives by today to San Jose, 95129"
  ],
  "returns": "Free Holiday returns until Jan 31. 30-Day return window. Free returns",
  "reviewSummary": {
   "average": 4.7,
   "total": 2831,
   "histogram": {
    "5": 2397,
    "4": 273,
    "3": 59,
    "2": 43,
    "1": 59
   },
   "positive": [
    "Simple controls",
    "Secure fit",
    "Crystal clear call quality",
    "Advanced ai capabilities",
    "Effective active",
    "Clear and rich sound"
   ],
   "negative": []
  },
  "reviews": [
   {
    "title": "This Buds For You",
    "text": "[This review was collected as part of a promotion.] I chose to give my Buds 3 Pro ear buds to one of my kids for the upgraded features and sound that were being promoted in the Buds 4 Pro model and they didn't disappoint. The sound is",
    "rating": 5,
    "author": "Kelleyc1935",
    "date": "10/16/2026",
    "verified": false
   },
   {
    "title": "Better than the 3s",
    "text": "[This review was collected as part of a promotion.] I chose these because my Buds3 Pro started tweaking after 2 years of use. Overall, they're so much better. The highs are toned down and don't hurt my ears as much. The quality of the bass",
    "rating": 5,
    "author": "BurntToast",
    "date": "10/16/2026",
    "verified": false
   },
   {
    "title": "Decent product...",
    "text": "[This review was collected as part of a promotion.] I chose the bud4 pros because they're part of the ecosystem to go with my 24ultra and now my watch9. The sound could use some tweaking but overall they do sound pretty decent just lacking",
    "rating": 3,
    "author": "Looney",
    "date": "9/16/2026",
    "verified": false
   },
   {
    "title": "Not the same as my Pro 2",
    "text": "[This review was collected as part of a promotion.] Have the Galaxy Bud pro 3(2) and 4's the headsets work amazing on connection and sound, but the biggest issues are using stremyard, and battery life. I have to charge case more often then",
    "rating": 3,
    "author": "RD23Home",
    "date": "10/1/2026",
    "verified": false
   }
  ],
  "similar": [
   {
    "title": "JBL Tune 520BT - Wireless on-ear headphones - Immerse in JBL Pure Bass sound wherever you go. - Blue",
    "price": "$59.95",
    "image": "https://i5.walmartimages.com/asr/1a02e2c0-868f-4683-b35e-f8e47866f97b.fa78c8fff4fa1eb1fa4c24ca2a092c18.png"
   },
   {
    "title": "AirPods Max 2 - Purple",
    "price": "$449.00",
    "image": "https://i5.walmartimages.com/asr/a7807e09-a721-4ae2-9f5f-2ba157903d6c.a39ad7b17511b5543f3802f31224f777.png"
   },
   {
    "title": "JBL Tune Flex 2 True Wireless Inner Ear Earbuds, Black",
    "price": "$109.95",
    "image": "https://i5.walmartimages.com/asr/12880d64-64d0-42b2-940f-5f67b48966e5.82363104c2f58ec7fec2fc33dcb70356.jpeg"
   },
   {
    "title": "Skullcandy Smokin' Buds 360 XT True Wireless in-Ear Earbuds, Black",
    "price": "$14.88",
    "image": "https://i5.walmartimages.com/asr/e14f4fd5-54d1-4d7b-8f50-1e3bd6878971.f413b4631d19da213e23d2e1e9cf4b6c.png"
   },
   {
    "title": "Beats by Dr. Dre Powerbeats Pro 2 In-Ear Headphones, Electric Orange",
    "price": "$199.95",
    "image": "https://i5.walmartimages.com/asr/dc4d8962-0ee3-450c-873d-998d11b9c367.abe5e53c40df22dd462df267d850b6ce.png"
   },
   {
    "title": "JLab Go Air Sport Bluetooth Earbuds, True Wireless with Charging Case, Teal",
    "price": "$31.87",
    "image": "https://i5.walmartimages.com/asr/bade06e3-b68c-4dd9-817f-25598b640a1c.3fc148295f14892775a102b8189d940a.png"
   }
  ]
 },
 "onn-pink": {
  "title": "onn On-Ear Headphones with 3.5 mm Connector, Pink",
  "priceDollars": "7",
  "priceCents": "93",
  "priceWas": null,
  "rating": 4.5,
  "ratingCount": 1275,
  "brand": "onn",
  "seller": "Walmart.com",
  "badges": [
   "100+ bought since yesterday",
   "Overall pick"
  ],
  "colors": [
   {
    "name": "Black"
   },
   {
    "name": "Blue"
   },
   {
    "name": "Pink"
   },
   {
    "name": "Purple"
   },
   {
    "name": "Yellow"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/onn-On-Ear-Headphones-with-3-5-mm-Connector-Pink_5bf80e12-fc8b-4701-b5ab-3113f72c6e98.a3be91ceea0b9d7648aea5a2ea09c6b5.jpeg",
   "https://i5.walmartimages.com/asr/b00e8e47-2762-4fbd-9b12-4593f6abc067.fdb4217751dbbcd05b2194813ec2fa12.jpeg",
   "https://i5.walmartimages.com/asr/428fe492-1c01-4000-81f5-260eae517166.83eddd76c7190776ed94c37f7d6029a1.jpeg",
   "https://i5.walmartimages.com/asr/2652935b-ea14-4adb-9ec5-64c96d3f3454.24154d143fba31eae9ab8f9a94d4d54b.jpeg",
   "https://i5.walmartimages.com/asr/2f2ccfe3-d277-4f3d-848b-2db33f6844cf.87f44bd3c64abb81f14548562d669480.jpeg",
   "https://i5.walmartimages.com/asr/582d77fe-397b-4d20-9f64-3484aa7b35e0.1c7bb0feb025030e2225de54cf6eb21c.jpeg"
  ],
  "videos": [
   "https://vds.prod.walmartimages.com/dam/v2/assets/ECOMMERCE/WMT/a3a1a0cf-54d8-46e7-8a9a-6ad75d885f22/1/files/6e9e4647-a89a-4b69-956d-cb962025346d/18609321659_1790715822.mp4"
  ],
  "keyFeatures": [
   "Headphone style: On-Ear",
   "Noise control technology: Passive Noise Cancellation",
   "Wireless: N",
   "Features: Foldable",
   "Brand: onn",
   "Rec. use: Casual Listening",
   "Assembled product weight: 0.5 lb",
   "Color: Pink"
  ],
  "about": [
   "3.5 mm wired connection with a 3.94 ft cable for plug-in listening",
   "Compatible with devices that use a 3.5 mm input, including tablet computers, desktop computers, mobile phones, and iPad",
   "30 mm dynamic speaker drivers",
   "Pink on-ear design with PU ear pads",
   "Product dimensions: 9.3 in L x 6.3 in W x 2.5 in H; weight: 0.5 lb"
  ],
  "specs": [
   {
    "name": "Headphone style",
    "value": "On-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Passive Noise Cancellation"
   },
   {
    "name": "Wireless",
    "value": "N"
   },
   {
    "name": "Features",
    "value": "Foldable"
   },
   {
    "name": "Brand",
    "value": "onn"
   },
   {
    "name": "Rec. use",
    "value": "Casual Listening"
   },
   {
    "name": "Works with",
    "value": "Tablet computers, Desktop computer, mobile phones, desktop, iPad, etc."
   },
   {
    "name": "Assembled product weight",
    "value": "0.5 lb"
   },
   {
    "name": "Color",
    "value": "Pink"
   },
   {
    "name": "Inputs/Outputs",
    "value": "3.5 mm"
   }
  ],
  "fulfillment": [
   "Pickup, today at Sacramento Gerber Rd Supercenter",
   "Delivery from store",
   "Shipping, arrives by today to San Jose, 95129"
  ],
  "returns": "Free Holiday returns until Jan 31. 30-Day return window. Free returns",
  "reviewSummary": {
   "average": 4.5,
   "total": 1275,
   "histogram": {
    "5": 954,
    "4": 151,
    "3": 74,
    "2": 27,
    "1": 69
   },
   "positive": [
    "Easy use controls",
    "Padded earpads comfort",
    "Clear and balanced sound",
    "Snug adjustable ear fit",
    "Vibrant color options",
    "Affordable value"
   ],
   "negative": []
  },
  "reviews": [
   {
    "title": "Great headphones from Onn!",
    "text": "We just took a few flights recently and put these Onn headphones to good use. My 7 year old son loved the sound quality and said they were very comfortable for the 2.5 and 3 hour flights that they were worn on. They plug right into his",
    "rating": 5,
    "author": "GwenB",
    "date": "8/18/2026",
    "verified": false
   },
   {
    "title": "Comfortable and Cute Headphones",
    "text": "Why pay more for children's headphones when these are offered at a great price and do the job very well! My son can comfortably wear these without complaining and he looks adorable in them. They're nice and lightweight, grip his ear",
    "rating": 5,
    "author": "ChristineO",
    "date": "8/5/2026",
    "verified": false
   },
   {
    "title": "Cute comfortable headphones that are perfect for every day use",
    "text": "These headphones have been a great choice for every day listening. The sound quality is clear and enjoyable and they are especially nice for kids or anyone who prefers a simple wired option without having to worry about charging. The",
    "rating": 5,
    "author": "SabrinaR",
    "date": "8/13/2026",
    "verified": false
   },
   {
    "title": "Reliable wired headphones with clear sound, a comfortable fit, and no charging required—great for everyday use with an iPhone or iPad using a cable adapter.",
    "text": "We've been using these Wired On Ear Headphones with my daughter's iPhone and iPad for almost a month, and they've been fantastic. We use a cable adapter to connect them, and they work perfectly every time without any issues. The sound",
    "rating": 5,
    "author": "RaushanA",
    "date": "8/4/2026",
    "verified": false
   }
  ],
  "similar": [
   {
    "title": "Sony MDR-ZX110 Wired On-Ear Headphones, Black",
    "price": "$14.88",
    "image": "https://i5.walmartimages.com/asr/65dd7d9a-6b9a-42fb-8f26-38c6d9d49f1e.cd35a42a118d16f9041d2504e5e8afb2.png"
   },
   {
    "title": "Beats by Dr. Dre Solo4 On-Ear Wireless Bluetooth Headphones, Drenched Gray",
    "price": "$129.00",
    "image": "https://i5.walmartimages.com/asr/6cdfbe6c-4373-4df0-b76c-b9da81d796f2.43650af23213b9f338d0b8ea67feddcb.png"
   },
   {
    "title": "Skullcandy Smokin' Buds 360 XT True Wireless in-Ear Earbuds, Black",
    "price": "$14.88",
    "image": "https://i5.walmartimages.com/asr/e14f4fd5-54d1-4d7b-8f50-1e3bd6878971.f413b4631d19da213e23d2e1e9cf4b6c.png"
   },
   {
    "title": "JLab JBuddies Studio On-Ear Kids Wired Headphones, Blue/Green, Studio Volume Safe, Volume Limiter, Folding, Adjustable, Noise Isolation, with Mic",
    "price": "$12.88",
    "image": "https://i5.walmartimages.com/asr/ee7da2b4-bb27-407a-9916-5a86b6bb182f.26c2967bd2064b9b7fcaa5115d9f570d.png"
   },
   {
    "title": "Skullcandy Jib XT Wired in-Ear Earbuds with Microphone, Black",
    "price": "$8.88",
    "image": "https://i5.walmartimages.com/asr/a2f4df8c-85ac-4260-816e-57dda77e1732.dd65b931953a78139bd29971ca3b5a5a.jpeg"
   },
   {
    "title": "onn IPX4 Splash-Proof Earbuds with Bluetooth Technology",
    "price": "$11.83",
    "image": "https://i5.walmartimages.com/asr/685ce387-178f-4c5f-8bb1-5a8c5026b6b7.635533ed308b64cd69ac57effb0f1b75.png"
   }
  ]
 },
 "bt-over-ear-65hr": {
  "title": "Bluetooth Headphones Over Ear, 65Hrs Playtime Wireless Headphones,Bass Boosted by 90%,Lightweight Headset with Deep Bass, Clear Call with 4 Noise Cancelling Mics,Low Latency for Travel Work Cellphone",
  "priceDollars": "19",
  "priceCents": "49",
  "priceWas": "169.98",
  "rating": 4.2,
  "ratingCount": 4565,
  "brand": "VEAT00L",
  "seller": "VEATOOL",
  "badges": [
   "100+ bought since yesterday",
   "Deal",
   "Overall pick"
  ],
  "colors": [
   {
    "name": "Blue"
   },
   {
    "name": "Gold"
   },
   {
    "name": "Orange"
   },
   {
    "name": "Pink"
   },
   {
    "name": "Purple"
   },
   {
    "name": "black gray"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/Bluetooth-Headphones-Ear-65Hrs-Playtime-Wireless-Headphones-Bass-Boosted-90-Lightweight-Headset-Deep-Bass-Clear-Call-4-Noise-Cancelling-Mics-Low-Late_51533b6e-c49e-4459-9787-3c45d26de3ec.6ad6cf413848b8ff85c27d97aca66841.jpeg",
   "https://i5.walmartimages.com/asr/b2dae735-4b6d-4f9b-9134-7f4f3626515f.b3bc8ecb0eb3deda9a44069f96eeda19.jpeg",
   "https://i5.walmartimages.com/asr/538c6ae5-ce57-4a8e-bfb9-570352ac42f7.342207ef07407311526d6de4ca53b7d4.jpeg",
   "https://i5.walmartimages.com/asr/6eed6709-e930-48c1-8bb3-d7aaa1973ffc.cc05bf7d0bb4e6f62ad70688e83f979d.jpeg",
   "https://i5.walmartimages.com/asr/a3074f39-d37e-4ff4-bc44-43e4360c1339.9898b469b9e6cd4c6eca331edf15229f.jpeg",
   "https://i5.walmartimages.com/asr/6fb3debb-7d5c-4299-bab0-ef008d67af74.1ac7fba35991bb2459d5606bf6fe77c2.jpeg"
  ],
  "videos": [],
  "keyFeatures": [
   "Battery life: 65 h",
   "Headphone style: Over-Ear",
   "Noise control technology: Sound Isolation",
   "Wireless: Y",
   "Brand: VEAT00L",
   "Works with: APPLE",
   "Ip code: IPX7",
   "Assembled product weight: 0.09 lb"
  ],
  "about": [
   "【Bluetooth 5.4&Dual-Connections】 Equipped with the latest Bluetooth 5.4 tech, BT1632 over ear wireless headphones provide faster pairing, lower latency, and more stable connections across devices. Two smart devices can be connected to VEATOOL over-ear headphones at the same time, makes you able to pick up a call from your phones when watching movie on your pad without switching.",
   "【Immersive Sound with Rich Deep Bass】 The 40mm drivers produce a wide frequency range that uncovers rich detail of sound with thumping bass and crisp highs, thanks to titanium-plated diaphragm and stonger"
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "65 h"
   },
   {
    "name": "Headphone style",
    "value": "Over-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Sound Isolation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth 5.4"
   },
   {
    "name": "Brand",
    "value": "VEAT00L"
   },
   {
    "name": "Rec. use",
    "value": "Classroom, Casual Listening, Sports"
   },
   {
    "name": "Works with",
    "value": "APPLE"
   },
   {
    "name": "Ip code",
    "value": "IPX7"
   },
   {
    "name": "Assembled product weight",
    "value": "0.09 lb"
   }
  ],
  "fulfillment": [
   "Shipping, arrives by tomorrow to San Jose, 95129",
   "Pickup not available at Sacramento Gerber Rd Supercenter"
  ],
  "returns": "Free Holiday returns until Jan 31. 30-Day return window. Free returns",
  "reviewSummary": {
   "average": 4.2,
   "total": 4565,
   "histogram": {
    "5": 3078,
    "4": 472,
    "3": 284,
    "2": 198,
    "1": 533
   },
   "positive": [
    "Snug ear fit",
    "Great value for money",
    "Snug full-ear fit"
   ],
   "negative": []
  },
  "reviews": [
   {
    "title": "Nice Headphones for the Quality and Price",
    "text": "The Bluetooth Headphones were great. I liked the price and quality of the headphones.",
    "rating": 5,
    "author": "Wayne",
    "date": "10/10/2026",
    "verified": true
   },
   {
    "title": "Nice",
    "text": "Grate sound and comfortable with long battery hours before recharging.",
    "rating": 5,
    "author": "Louis",
    "date": "5/22/2026",
    "verified": true
   },
   {
    "text": "great value for the price and the head phone sounds excellent",
    "rating": 5,
    "author": "Lawrence",
    "date": "10/23/2026",
    "verified": true
   },
   {
    "text": "Great sound and not too loud",
    "rating": 5,
    "author": "Mike",
    "date": "10/12/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "Active Noise Cancelling Headphones,60H Playtime Bluetooth 6.0 Wireless Headphones with Hi-Res Audio, Over Ear Headphones with Microphone, Deep Bass,Comfort Fit…",
    "price": "$29.79",
    "image": "https://i5.walmartimages.com/asr/fee2d044-a366-481d-9082-6ebccac7bd5b.98728aea4ddfc18156e393200752ad4a.png"
   },
   {
    "title": "Skullcandy Smokin' Buds 360 XT True Wireless in-Ear Earbuds, Black",
    "price": "$14.88",
    "image": "https://i5.walmartimages.com/asr/e14f4fd5-54d1-4d7b-8f50-1e3bd6878971.f413b4631d19da213e23d2e1e9cf4b6c.png"
   },
   {
    "title": "QearFun Bluetooth Headphones for Kids, Wireless Headphones with Built-in Mic, Includes Aux Cord, USB C, 3.5mm Jack, Bluetooth 5.3, On Ear Kids Headphones for…",
    "price": "$19.98",
    "image": "https://i5.walmartimages.com/asr/69cc5714-0284-427e-a3da-bdad0c3587e0.a45ece42cf9394cca3cdd1588f13ce2b.jpeg"
   },
   {
    "title": "JVC HA-S23W Wireless Headphones - On Ear Bluetooth Headphones, Foldable Flat Design, 17-Hour Long Battery Life (Black)",
    "price": "$24.55",
    "image": "https://i5.walmartimages.com/asr/f410749d-647d-44e5-bf57-c4c90075386c.40cfbf203f4f13d562398b50984f7c6a.jpeg"
   },
   {
    "title": "Rirool Bluetooth Over-Ear Headphones, Wireless Foldable Headset with HiFi Stereo Deep Bass, 12H Playtime, Built-in Mic, Soft Protein Earpads for Travel, Home…",
    "price": "$12.99",
    "image": "https://i5.walmartimages.com/asr/06f96df6-b4ba-4e0a-9c63-d2b0e4142cae.b4e00e3288d243d57369082af60d98be.png"
   },
   {
    "title": "Wireless Bluetooth Headphones 5.1,40 Hrs Playtime Wireless Over-Ear Headphones,4 Mics ENC Noise Cancelling for Clear Calls, Lightweight Headset with Deep Bass…",
    "price": "$19.29",
    "image": "https://i5.walmartimages.com/asr/b9febf6c-b568-4825-8545-d6640a85c728.76c8e720c1e483b861afd9d966632873.png"
   }
  ]
 },
 "anc-45db-black": {
  "title": "Active Noise Cancelling Headphones, -45dB Bluetooth Headphones 5.4, 50H Playtime Earbuds, Bass Boosted by 90%, Clear Call with 4 Mics, Comfort Fit Over Ear Headphones for Travel Home Office PC Black",
  "priceDollars": "24",
  "priceCents": "29",
  "priceWas": "169.99",
  "rating": 4.2,
  "ratingCount": 1364,
  "brand": "IKT",
  "seller": "IKT-US",
  "badges": [
   "In 100+ people's carts",
   "Deal",
   "Overall pick"
  ],
  "colors": [
   {
    "name": "Black"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-45dB-Bluetooth-Headphones-5-4-50H-Playtime-Earbuds-Bass-Boosted-90-Clear-Call-4-Mics-Comfort-Fit-Ear-Headphones-Travel_040fa397-851d-4b03-926d-480d7164d093.3ab5629ea7ce0859cc4e9f86523e5111.jpeg",
   "https://i5.walmartimages.com/asr/003f17ed-6e9f-44bd-b1e9-fb986965bfef.21916379932d76ece78807ea07c53142.jpeg",
   "https://i5.walmartimages.com/asr/7256471f-d4f2-4374-8529-b6ba0f7d8580.6f0d57e21f16025221f0de8a49f3f37d.jpeg",
   "https://i5.walmartimages.com/asr/3c45f6a5-e1ea-4d59-baa0-2b468c16ed24.7e0907dd6a5f197a517a5ce97d2a09f4.jpeg",
   "https://i5.walmartimages.com/asr/e5f6ef22-b259-4c07-87c8-d2dbb6ec4346.f2b3aa5af56ce4651dea298ab4e1421c.jpeg",
   "https://i5.walmartimages.com/asr/4ee11534-b6d3-4cab-b747-b7e5252aba7b.ac66991688f44a48c2c769ffed493d8d.jpeg"
  ],
  "videos": [
   "https://i5-richmedia.walmartimages.com/asr-rm/e689bee0-e6f3-47b9-a525-d26e34fb4bad_video_testsuccessvideo.mp4"
  ],
  "keyFeatures": [
   "Battery life: 50 h",
   "Headphone style: Over-Ear",
   "Noise control technology: Active Noise Cancellation",
   "Wireless: Y",
   "Brand: IKT",
   "Works with: iOS, Android and Windows",
   "Ip code: IPX7",
   "Assembled product weight: 0.8 lb"
  ],
  "about": [
   "【Active Noise Cancellation】The headphones wireless bluetooth uses 2 built-in mics and 2 external mics working in tandem to pick up and filter up to 90% of low-frequency ambient noise, such as airplane and car engines. -45dB deep noise cancellation ensures that you won't be disturbed in any way, so you can concentrate on listening to your music. (Note: ANC mode does not support AUX cables).",
   "【High-fidelity Sound Quality and High-resolution Audio】These noise canceling headphones feature oversized 40mm dynamic drivers. The highly flexible silk diaphragm reproduces powerful bass (up to 90%"
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "50 h"
   },
   {
    "name": "Headphone style",
    "value": "Over-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Active Noise Cancellation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth 5.4"
   },
   {
    "name": "Features",
    "value": "Built-in Microphone, Foldable, Voice-Activated, Lightweight, Phone Control"
   },
   {
    "name": "Brand",
    "value": "IKT"
   },
   {
    "name": "Rec. use",
    "value": "Casual Listening, Classroom, Sports"
   },
   {
    "name": "Works with",
    "value": "iOS, Android and Windows"
   },
   {
    "name": "Ip code",
    "value": "IPX7"
   }
  ],
  "fulfillment": [
   "Shipping, arrives by Fri, Oct 30 to San Jose, 95129",
   "Pickup not available at Sacramento Gerber Rd Supercenter"
  ],
  "returns": "Free Holiday returns until Jan 31. 30-Day return window. Free returns",
  "reviewSummary": {
   "average": 4.2,
   "total": 1364,
   "histogram": {
    "5": 904,
    "4": 165,
    "3": 95,
    "2": 59,
    "1": 141
   },
   "positive": [
    "Effective noise cancellation",
    "Crystal clear sound",
    "Budget-friendly price",
    "Soft ear covers"
   ],
   "negative": []
  },
  "reviews": [
   {
    "title": "Great  Headphones at a Reasonable Price",
    "text": "These bluetooth headphones are great. i can even take them with me to connect to my daughters TV. She was able to connect me and still hear the tv herself. At home I use it to connect to my Roku devices to watch tv in my bedroomor living",
    "rating": 5,
    "author": "anonymous",
    "date": "5/27/2026",
    "verified": true
   },
   {
    "title": "awesome",
    "text": "super excited",
    "rating": 5,
    "author": "anonymous",
    "date": "10/15/2026",
    "verified": true
   },
   {
    "title": "Headphone Set, noise reduction…..",
    "text": "They are very great on noise….I use mine when I am on my patio, so seniors don't hear my music…..",
    "rating": 5,
    "author": "Doris Benjmain",
    "date": "9/1/2026",
    "verified": true
   },
   {
    "title": "Handy and looks good. SALE price is a lie.",
    "text": "You pay for what you get and a little bit more. The active noise cancelling it's pretty efective I wipe this out everytime I need to mow the lawn and at night when at the next room kids played or do their honework or watch a movie. I put",
    "rating": 5,
    "author": "Marcelo",
    "date": "5/17/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "2026 Open Ear Clip On Earbuds with Heart Design, ireless Earbuds Bluetooth 6.0 Headphones, WWaterproof Earphone for Running, Comfortable for Small Ears…",
    "price": "$16.99",
    "image": "https://i5.walmartimages.com/asr/62193941-beb0-43d8-8771-a92518e877b7.fa7fa56e1b95a933572344d9fa2ea726.jpeg"
   },
   {
    "title": "Mpow Kids Headphones with Microphone, 85/94dB Safe Volume Limit, over Ear Headphones for School Travel, Blue",
    "price": "$11.99",
    "image": "https://i5.walmartimages.com/asr/eeea25da-2d3e-4df1-837f-462d14540844.bfd6b7d04e5ee1ce7fc6921a7d8e34d7.png"
   },
   {
    "title": "onn Wireless On-Ear Headphones, Blue",
    "price": "$14.88",
    "image": "https://i5.walmartimages.com/asr/434c5b40-9f0b-4471-95fc-3e8b7a400a5c.e2896d8a6cc37e6eac01f6a84f0716ce.png"
   },
   {
    "title": "Wireless Bluetooth Headphones 5.1,40 Hrs Playtime Wireless Over-Ear Headphones,4 Mics ENC Noise Cancelling for Clear Calls, Lightweight Headset with Deep Bass…",
    "price": "$19.29",
    "image": "https://i5.walmartimages.com/asr/b9febf6c-b568-4825-8545-d6640a85c728.76c8e720c1e483b861afd9d966632873.png"
   },
   {
    "title": "Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 60H Playtime, Hi-Res Audio, Deep Bass, Memory Foam…",
    "price": "$35.99",
    "image": "https://i5.walmartimages.com/asr/2e6cd607-279b-48f1-926f-0d7ca8c18774.27d19c6b388b0b74728d7ae4933ed13e.jpeg"
   },
   {
    "title": "Active Noise Cancelling Headphones,60H Playtime Bluetooth 6.0 Wireless Headphones with Hi-Res Audio, Over Ear Headphones with Microphone, Deep Bass,Comfort Fit…",
    "price": "$29.79",
    "image": "https://i5.walmartimages.com/asr/fee2d044-a366-481d-9082-6ebccac7bd5b.98728aea4ddfc18156e393200752ad4a.png"
   }
  ]
 },
 "hybrid-anc-headphones": {
  "title": "Hybrid Active Noise Cancelling Headphones Wireless Bluetooth Over Ear - 50dB ANC, 120H Playback, 6-MIC ENC Clear Calls, Hi-Res 360° Spatial Audio, Foldable Comfort for Travel Office",
  "priceDollars": "39",
  "priceCents": "79",
  "priceWas": "339.99",
  "rating": 4.4,
  "ratingCount": 204,
  "brand": "VEAT00L",
  "seller": "CAPOXO",
  "badges": [
   "50+ bought since yesterday",
   "Deal",
   "Overall pick"
  ],
  "colors": [
   {
    "name": "black"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/ybrid-Active-Noise-Cancelling-Headphones-Wireless-Bluetooth-Ear-50dB-ANC-120H-Playback-6-MIC-ENC-Clear-Calls-Hi-Res-360-Spatial-Audio-Foldable-Comfor_7d320cd6-f8f2-4832-9ad1-79ed0f93b8cc.d98752bb32bdc2e0b94df1c2f1758540.jpeg",
   "https://i5.walmartimages.com/asr/fa962dac-afec-47a4-ae76-300d2a4a3ad6.115019f75f605e1a5faf80156beebf3f.png",
   "https://i5.walmartimages.com/asr/324fd816-c283-4a80-8309-5b8f83a8cea5.b43ebdff80ee5c4cbbaeeb78f3c6e782.png",
   "https://i5.walmartimages.com/asr/59f9ba63-5eb8-4dd6-a552-4bc2ac1765a0.aa80f2f5df4b1392f1dc7a4901a81c18.png",
   "https://i5.walmartimages.com/asr/a926b767-027f-48a2-a15d-7439be929d07.abecf1563ab9229cd527df4fc4080516.png",
   "https://i5.walmartimages.com/asr/45c6aa4a-95c6-4989-bdf2-67cc8144636b.5142cc23bb15c6d3e18127cb6619bd3f.png"
  ],
  "videos": [],
  "keyFeatures": [
   "Battery life: 60 h",
   "Headphone style: Over-Ear",
   "Noise control technology: Sound Isolation",
   "Wireless: Y",
   "Features: Foldable",
   "Brand: VEAT00L",
   "Rec. use: Casual Listening",
   "Works with: APPLE"
  ],
  "about": [
   "🎧 6-MIC ENC & 360° Spatial Audio:Stay focused on your calls with these wireless headphones over ear, featuring 6 adaptive ENC (Environmental Noise Cancellation) microphones. Whether you are using Bluetooth headphones in a noisy cafe or an open office, the active noise cancelling technology isolates your voice from background noise. Combined with 40mm drivers and 360° Spatial Audio, these noise cancelling headphones deliver an immersive soundstage that flows naturally in every direction, making them ideal wireless headphones for music lovers.",
   "🔋 120H Playtime & Fast Charging:Never worry"
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "60 h"
   },
   {
    "name": "Headphone style",
    "value": "Over-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Sound Isolation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth 5.4"
   },
   {
    "name": "Features",
    "value": "Foldable"
   },
   {
    "name": "Brand",
    "value": "VEAT00L"
   },
   {
    "name": "Rec. use",
    "value": "Casual Listening"
   },
   {
    "name": "Works with",
    "value": "APPLE"
   },
   {
    "name": "Ip code",
    "value": "IPX7"
   }
  ],
  "fulfillment": [
   "Free shipping, arrives by tomorrow to San Jose, 95129",
   "Pickup not available at Sacramento Gerber Rd Supercenter"
  ],
  "returns": "Free Holiday returns until Jan 31. 30-Day return window. Free returns",
  "reviewSummary": {
   "average": 4.4,
   "total": 204,
   "histogram": {
    "5": 155,
    "4": 17,
    "3": 10,
    "2": 3,
    "1": 19
   },
   "positive": [
    "Fast charging case",
    "Clear voice call quality",
    "Fast bluetooth connection",
    "Snug fit wearing comfort",
    "Comfortable fit",
    "Detailed sound"
   ],
   "negative": []
  },
  "reviews": [
   {
    "title": "this is a steal what are you doing buy it!!",
    "text": "very comfortable and cute definitely does the job of noise canceling with the option of setting it to where you can also be aware of your surroundings as well and they come fully charged the only thing being is you need a block for the",
    "rating": 5,
    "author": "anonymous",
    "date": "10/22/2026",
    "verified": true
   },
   {
    "rating": 5,
    "author": "sandra",
    "date": "10/20/2026",
    "verified": true
   },
   {
    "title": "Sound is just right for me.",
    "text": "Very comfortable, they don't hurt my ears. The sound is great for me. My last set gave too much base and some words were not clear. This set is just right... music and talk are both crystal clear.",
    "rating": 5,
    "author": "Marilyn",
    "date": "6/16/2026",
    "verified": true
   },
   {
    "text": "Very happy! Blocking the outside noise very well, easy to pair and operate. Love it. Bought it for my husband as a gift.",
    "rating": 5,
    "author": "Dina",
    "date": "10/2/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "TOZO HT3 Wired/Wireless Over Ear Noise Cancel Headphones for Adult, ANC/ENC Mics, 90H, Hi-Res Audio Headset, App-32EQ, Foldable/Adjustable Headband, AUX 3.5mm…",
    "price": "$39.99",
    "image": "https://i5.walmartimages.com/asr/faeb6eec-699d-407c-be36-b986030aa6c4.3422762258947973800dccd5a355a6f8.png"
   },
   {
    "title": "Srhythm NiceComfort 25 Lightweight Hybrid Noise Cancelling Headphones,with Titanium Coated Speakers,Transparency and Low Latency,ANC",
    "price": "$45.99",
    "image": "https://i5.walmartimages.com/asr/6144bff6-a7d7-46ce-bd34-bf36e51af4c8.02d36a62ebf286bd098042d104ef156c.png"
   },
   {
    "title": "Wireless Bluetooth Earbuds Noise Cancelling in Ear Buds Deep Bass Stereo, 50H Playtime with Mics, LED Display, IPX7 Waterproof Earphones for iphone Android…",
    "price": "$15.99",
    "image": "https://i5.walmartimages.com/asr/56a3d19c-c239-440f-98c4-970b0d58cb98.60119b01926808360d88ce61e7ed4c9a.jpeg"
   },
   {
    "title": "KVIDIO Bluetooth Headphones, Wireless Headphones with Microphone, 65H Running Time, over-Ear Headphones for Computer Laptop Travel Home Office PC (Black)",
    "price": "$13.48",
    "image": "https://i5.walmartimages.com/asr/8eb90501-c2f6-440c-ac5a-8300eda8d22d.efb2c96b6ce6f648a9b3abfbf7aa3b24.jpeg"
   },
   {
    "title": "Beats Studio Pro Wireless Headphones - Matte White",
    "price": "$149.00",
    "image": "https://i5.walmartimages.com/asr/804f7a19-b46f-455b-8ba8-5e0bda5bb76b.e2874ae3d999c960c832ac4ff912f4c1.jpeg"
   },
   {
    "title": "Beats by Dr. Dre Solo4 On-Ear Wireless Bluetooth Headphones, Drenched Gray",
    "price": "$129.00",
    "image": "https://i5.walmartimages.com/asr/6cdfbe6c-4373-4df0-b76c-b9da81d796f2.43650af23213b9f338d0b8ea67feddcb.png"
   }
  ]
 },
 "deal-45db-25-79": {
  "title": "Active Noise Cancelling Headphones -45dB, Bluetooth Headphones 5.4, 60H Playtime Wireless Earbuds, Bass Boosted by 90%, ENC Clear Call, Over Ear Headphone for Travel Home Office PC Soot Black",
  "priceDollars": "25",
  "priceCents": "79",
  "priceWas": "169.99",
  "rating": 4.4,
  "ratingCount": 89,
  "brand": "IKT",
  "seller": "IKT-US",
  "badges": [
   "Deal"
  ],
  "colors": [
   {
    "name": "Soot Black"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-60H-Playtime-Wireless-Earbuds-Bass-Boosted-90-ENC-Clear-Call-Ear-Headphone-Travel-Ho_7ceadea2-7d0a-4d10-855f-311b909c5611.7f51798f73aab5fed3523fcbe64b2a70.jpeg",
   "https://i5.walmartimages.com/asr/bec08673-1cb6-4c20-8adb-9052837b20a4.c716069e4b70e7354ffc281b2d78b780.jpeg",
   "https://i5.walmartimages.com/asr/880d22eb-fb5b-4b7b-ac7f-c90ed1d204c4.0b6ab4f5492d1f3d3c3eca28b82c367b.jpeg",
   "https://i5.walmartimages.com/asr/43b8397c-81ed-4889-8f3c-5b78c49a9631.0708326da13ecf97c3210a0f8c1f93c5.jpeg",
   "https://i5.walmartimages.com/asr/d137d2eb-75e4-4bdf-8a87-97c7fa7f6a96.c6caa7a32dfea21d30a43730640c6816.jpeg",
   "https://i5.walmartimages.com/asr/6107ab3f-4f3d-46e8-8408-baa8aede2c3e.d0b545ad030c340e0f610f5b2fce6ada.jpeg"
  ],
  "videos": [],
  "keyFeatures": [
   "Battery life: 60 h",
   "Headphone style: Over-Ear",
   "Noise control technology: Active Noise Cancellation",
   "Wireless: Y",
   "Brand: IKT",
   "Ip code: IPX7",
   "Assembled product weight: 0.5 lb",
   "Color: Black",
   "Power type: Battery",
   "Maximum transmission range: 33 ft"
  ],
  "about": [
   "【-45dB Active Noise Cancellation】The headphones wireless bluetooth uses 2 built-in mics and 2 external mics working in tandem to pick up and filter up to 90% of low-frequency ambient noise, Intelligently shielded from outside noise (subways, airplanes, noisy streets, etc.). -45dB deep noise cancellation ensures that you won't be disturbed in any way, so you can concentrate on listening to your music. (Note: ANC mode does not support AUX cables).",
   "【High-fidelity Sound Quality】These noise canceling headphones feature oversized 40mm dynamic drivers. The highly flexible silk diaphragm reproduces powerful bass (up to 90% boost) and clear treble (up to 20kHz). 24-bit audio resolution produces rich sound and powerful rhythms, revealing more sound details.",
   "【60 Hrs Long Playtime】The LE821 wireless headphones bluetooth utilize low-power technology and are equipped with a 500mAh battery. With a single full charge, they can play music for up to 40 hrs in noise-canceling mode and extend playtime to 60 hrs in standard Bluetooth mode. Using the included 3.5mm audio cable, the headphones wireless noise cancelling can easily switch to wired mode when powered off. Say goodbye to low battery.",
   "【Clear Hands-free Calling】The LE821 noise cancelling headphones bluetooth is equipped with 4 beamforming micrs and uses advanced CVC 8.0 audio signal processing technology. It can accurately pick up sound, giving you a clear call experience even in noisy environments.",
   "【All-Day Comfort】Weighing just 228g, the headband incorporates a widened pressure-relief design. The ear cups feature an ergonomic oval full-coverage design paired with soft memory foam (slow rebound, high conformability, effectively dispersing pressure). They are soft against the skin and offer excellent breathability. The over ear wireless bluetooth headphones are also highly compatible with eyeglasses, with the ear cups accommodating temples comfortably. Perfect for long journeys and office use.",
   "【Independent Button Controls】You can easily play/pause music, volume +/-, switch songs, answer/hang up calls, and activate the voice assistant by rotating the digital button and MFB button on the LE821 wireless headphones. Under bluetooth connection status, press and hold the digital button for about 2 s to switch between ANC mode and Bluetooth mode (for detailed instructions, please refer to the product manual included in the package).",
   "【360° Spatial Surround Sound】The LE821 over ear bluetooth headphones use multi-channel layered rendering and head tracking technology to create a circular spatial audio field, allowing sounds to be precisely located from multiple dimensions. The over ear bluetooth headphones can detect even the slightest movement of your head in real time and intelligently adjust the sound field direction to create an immersive, enveloping sound experience.",
   "【Stylish Gifts and Quality Customer Service】This wireless bluetooth noise canceling headphones has a fashionable design and rich and practical functions to make your daily life more convenient. Perfect gift for birthdays, anniversaries and special occasions. Package includes foldable over ear headphones wireless, 3.5mm spare audio cable, USB charging cable and user manual. We offer 30 days return and 12 months warranty. We encourage you to contact us with any product questions or suggestions."
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "60 h"
   },
   {
    "name": "Headphone style",
    "value": "Over-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Active Noise Cancellation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth, None"
   },
   {
    "name": "Features",
    "value": "Built-in Microphone, Foldable, Voice-Activated"
   },
   {
    "name": "Brand",
    "value": "IKT"
   },
   {
    "name": "Rec. use",
    "value": "Classroom, Casual Listening, Sports"
   },
   {
    "name": "Works with",
    "value": "Android System, IOS System, Windows System"
   },
   {
    "name": "Ip code",
    "value": "IPX7"
   },
   {
    "name": "Assembled product weight",
    "value": "0.5 lb"
   },
   {
    "name": "Color",
    "value": "Black"
   },
   {
    "name": "Accessories",
    "value": "Foldable headphones*1, USB-C charging cable*1, 3.5mm audio cable*1, User manual*1"
   },
   {
    "name": "Battery consumption type",
    "value": "Integrated Rechargeable Battery"
   },
   {
    "name": "Power type",
    "value": "Battery"
   },
   {
    "name": "Maximum transmission range",
    "value": "33 ft"
   },
   {
    "name": "Compatible smart control systems",
    "value": "Google Assistant, Siri"
   },
   {
    "name": "Virtual assistant",
    "value": "Siri Voice Assistant, Google Voice Assistant"
   },
   {
    "name": "Ear pad material",
    "value": "Leather"
   },
   {
    "name": "Cord length",
    "value": "1 ft"
   },
   {
    "name": "Generation",
    "value": "1st Generation"
   },
   {
    "name": "Material",
    "value": "Plastic, Leather"
   },
   {
    "name": "Video game platform",
    "value": "PC"
   },
   {
    "name": "Headphone type",
    "value": "Headphones"
   },
   {
    "name": "Model name",
    "value": "LE821"
   }
  ],
  "fulfillment": [
   "Shipping, arrives by Fri, Oct 30 to San Jose, 95129",
   "Pickup not available at a nearby store"
  ],
  "returns": "Free Holiday returns until Jan 31",
  "reviewSummary": {
   "average": 4.4,
   "total": 89,
   "histogram": {
    "1": 10,
    "2": 1,
    "3": 3,
    "4": 3,
    "5": 72
   },
   "positive": [
    "Secure conforming ear fit",
    "Effective noise cancellation",
    "Long lasting battery life",
    "Great value for money",
    "Clear sound quality"
   ],
   "negative": []
  },
  "reviews": [
   {
    "rating": 5,
    "title": "Unbelievable bargain.",
    "text": "These headphones are unbelievable, I expected something cheap and what got was top quality. I don't know if they ever sold for over $100.00 like they claim, but I really don't care. They seem to be top quality and that's all that matters. The noise reduction works just fine and the Bluetooth pairs easily with the tv. The stereo sound is great. Ask as for much better.",
    "author": "William",
    "date": "7/26/2026",
    "verified": true
   },
   {
    "rating": 5,
    "title": "Excellent headset",
    "text": "This is an excellent headset, sound quality very well and base very strong, noise cancellation also outstanding. No complaint and strongly recommended with this price.",
    "author": "ray",
    "date": "3/29/2026",
    "verified": true
   },
   {
    "rating": 5,
    "title": "Sounds great",
    "text": "Very good sound quality and fits very well. Easy to set and very light weight and no noise at all. Good battery life so far!",
    "author": "Rony",
    "date": "4/2/2026",
    "verified": true
   },
   {
    "rating": 5,
    "title": "Highly recommended",
    "text": "Got this for my daughter’s zoom class, and music time, she said the sound is pretty good, Easy to set up everything.",
    "author": "Qiubo",
    "date": "3/29/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "Hybrid Active Noise Cancelling Bluetooth Headphones, Over Ear Wireless Headphones with 120H Playtime, Hi-Res Audio, Deep Bass, Memory Foam Ear Cups for Home Office Travel Black",
    "price": "$24.99",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-Bluetooth-Headphones-Ear-Wireless-Headphones-120H-Playtime-Hi-Res-Audio-Deep-Bass-Memory-Foam-Ear-Cups-Home-Office-Tra_971fbc7e-54a3-43d4-897b-23ad881812a1.6a31e404c966ec8b3e604c226ac5bb3f.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Hybrid Active Noise Cancelling Headphones Wireless Bluetooth Over Ear - 50dB ANC, 120H Playback, 6-MIC ENC Clear Calls, Hi-Res 360° Spatial Audio, Foldable Comfort for Travel Office",
    "price": "$39.79",
    "image": "https://i5.walmartimages.com/seo/ybrid-Active-Noise-Cancelling-Headphones-Wireless-Bluetooth-Ear-50dB-ANC-120H-Playback-6-MIC-ENC-Clear-Calls-Hi-Res-360-Spatial-Audio-Foldable-Comfor_7d320cd6-f8f2-4832-9ad1-79ed0f93b8cc.d98752bb32bdc2e0b94df1c2f1758540.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Hybrid Active Noise Cancelling -45dB, Bluetooth Headphones 5.4, 50H Playtime Earbuds, Clear Call with 4 Mics, Bass Boosted by 90%, Comfort Fit Over Ear Headphones for Travel Home Office PC Black",
    "price": "$24.39",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-45dB-Bluetooth-Headphones-5-4-50H-Playtime-Earbuds-Clear-Call-4-Mics-Bass-Boosted-90-Comfort-Fit-Ear-Headphones-Travel_6af20eef-5b46-496a-b292-6e31cddfca54.068e529934dd8288c138dbbb5c0bf1e9.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Active Noise Cancelling Headphones, -45dB Bluetooth Headphones 5.4, 50H Playtime Earbuds, Bass Boosted by 90%, Clear Call with 4 Mics, Comfort Fit Over Ear Headphones for Travel Home Office PC Black",
    "price": "$24.29",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-45dB-Bluetooth-Headphones-5-4-50H-Playtime-Earbuds-Bass-Boosted-90-Clear-Call-4-Mics-Comfort-Fit-Ear-Headphones-Travel_040fa397-851d-4b03-926d-480d7164d093.3ab5629ea7ce0859cc4e9f86523e5111.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Bluetooth Headphones Over Ear, 58Hrs Playtime Wireless Headphones,Bass Boosted by 90%,Lightweight Headset with Deep Bass, Clear Call with 4 Noise Cancelling Mics,Low Latency for Travel Work Cellphone",
    "price": "$21.89",
    "image": "https://i5.walmartimages.com/seo/Bluetooth-Headphones-Ear-58Hrs-Playtime-Wireless-Headphones-Bass-Boosted-90-Lightweight-Headset-Deep-Bass-Clear-Call-4-Noise-Cancelling-Mics-Low-Late_6bd014bd-f432-4bec-b2c3-eb691b3e27a0.2e06f46364b4b7495eb201e21453bd6a.png?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Wireless Bluetooth Headphones 5.4, 40H Playtime with 3 EQ Modes, 4 Micrs ENC Noise Cancelling for Clear Calls, Bass Boosted by 85%, Comfort Fit, Over Ear Headphones for Travel Home Office PC Black",
    "price": "$19.29",
    "image": "https://i5.walmartimages.com/seo/Wireless-Bluetooth-Headphones-5-4-40H-Playtime-3-EQ-Modes-4-Micrs-ENC-Noise-Cancelling-Clear-Calls-Bass-Boosted-85-Comfort-Fit-Ear-Headphones-Travel_c3c4f269-2f1d-4a2b-8fca-5d58f591c418.4b3f7988441c194b6a04585a172796ce.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   }
  ]
 },
 "wireless-5-4-19-29": {
  "title": "Wireless Bluetooth Headphones 5.4, 40H Playtime with 3 EQ Modes, 4 Mics ENC Noise Cancelling for Clear Calls, Bass Boosted by 85%, Comfort Fit, Over Ear Headphones for Travel Home Office PC Black",
  "priceDollars": "19",
  "priceCents": "29",
  "priceWas": "159.99",
  "rating": 4.2,
  "ratingCount": 1630,
  "brand": "IKT",
  "seller": "IKT-US",
  "badges": [
   "In 50+ people's carts",
   "Deal",
   "Overall pick"
  ],
  "colors": [
   {
    "name": "Black"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/Wireless-Bluetooth-Headphones-5-4-40H-Playtime-3-EQ-Modes-4-Micrs-ENC-Noise-Cancelling-Clear-Calls-Bass-Boosted-85-Comfort-Fit-Ear-Headphones-Travel_c3c4f269-2f1d-4a2b-8fca-5d58f591c418.4b3f7988441c194b6a04585a172796ce.jpeg",
   "https://i5.walmartimages.com/asr/530ae159-8461-4e43-b166-bf36a2bc0837.ec700aa37335eef635f81f1003697d50.jpeg",
   "https://i5.walmartimages.com/asr/641bb0be-25e5-4446-a20f-174518385629.5e30364728a7a9633f6e4fb810937de8.jpeg",
   "https://i5.walmartimages.com/asr/eb4b7adb-3689-41ee-b557-c23dd895fe54.06727cd7fa76e8b069aa35ff04fcc503.jpeg",
   "https://i5.walmartimages.com/asr/e81cb6ad-f94a-4b47-a10a-f3c9033d58bf.0112ec51d5a7dcacf32b1142e53cbea5.jpeg",
   "https://i5.walmartimages.com/asr/3a7ec0d0-469b-4c0b-abea-d1361311c9a3.0c57d29bdcc1a44a8a28699f1cb825fb.jpeg"
  ],
  "videos": [],
  "keyFeatures": [
   "Battery life: 40 h",
   "Headphone style: Over-Ear",
   "Noise control technology: Sound Isolation",
   "Wireless: Y",
   "Brand: IKT",
   "Ip code: IPX7",
   "Assembled product weight: 0.34 lb",
   "Color: Black",
   "Inputs/Outputs: 3.5mm audio jack",
   "Power type: Battery"
  ],
  "about": [
   "【EQ Mode and Listen Attentively】The bluetooth headphones' EQ button allows free switching between the 3 preset EQ settings, and pressing the equalizer button switches between pop mode, bass mode, and vocal mode. To meet the listening requirements of different music styles.",
   "【High-fidelity Sound Quality and High-resolution Audio】These noise cancelling headphones feature oversized 40mm dynamic drivers with highly flexible silk diaphragms that reproduce punchy bass (up to 85% boost) and clear treble (up to 20kHz). 24bit audio resolution produces detailed sound and punchy rhythms, presenting more sonic details that will add color to your favorite tracks.",
   "【Superior Clear ENC Call Noise Cancellation】The JH-820 headphones wireless noise cancelling is equipped with 4 beamforming mics and advanced audio signal processing. The precise voice pickup technology picks up voice accurately and clearly. With ENC technology, it effectively separates your voice from surrounding sounds, making communication clearer, even in noisy environments.",
   "【40 Hrs Playtime】Featuring low-power technology, the JH-820 wireless headphones bluetooth have a built-in 400mAh battery that allows up to 40 hours of playtime on a single charge, and with a quick charge time of only about 1.5 hours, these bluetooth wireless headphones are perfect for long distance traveling, sports and relaxation. Equipped with a 3.5mm audio jack, the bluetooth headset can be easily switched to wired mode when switched off. Music can be played through the AUX cable even when the battery is depleted.",
   "【Widely Compatible and Smart One-two】Headphones wireless supports iOS, Android and Windows. Adopts advanced Bluetooth 5.4 technology with 2x faster connection speed and signal stability compared to Bluetooth 5.3. With memory function, just turn on the wireless headphones to connect automatically next time you use it. Two smart devices can connect to the JH-820 over ear headphones at the same time, allowing you to answer your phone calls without switching while watching a movie on your tablet!",
   "【Comfortable Fit Stylish and Lightweight】The over ear headset is made of high quality materials and the headphones noise cancelling weighs only 0.34 lbs. The lightweight headphones fit your head perfectly, and the adjustable headband design allows the headphones to fit 99% of head shapes perfectly. The soft memory protein ear cups mimic the texture of your ear's skin to protect your ears during long term use. The design and comfort of these over ear bluetooth headphones complement each other, making them ideal for music lovers.",
   "【Individually Convenient Button Controls】Control your music with the JH-820 headphones' intuitive buttons. With a single press, you can play/pause music, switch songs, volume+/-, answer/hang up calls and activate the voice assistant. Reduces false-touch operations.",
   "【Stylish Gifts and Quality Customer Service】This bluetooth over ear headphones has a fashionable design and rich and practical functions to make your daily life more convenient. Perfect gift for birthdays, anniversaries and special occasions. Package includes foldable over ear headphones wireless, 3.5mm spare audio cable, USB charging cable and user manual. We offer 30 days return and 12 months warranty. We encourage you to contact us with any product questions or suggestions."
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "40 h"
   },
   {
    "name": "Headphone style",
    "value": "Over-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Sound Isolation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Wireless technology",
    "value": "Bluetooth, None"
   },
   {
    "name": "Features",
    "value": "Built-in Microphone, Voice-Activated, Foldable"
   },
   {
    "name": "Brand",
    "value": "IKT"
   },
   {
    "name": "Rec. use",
    "value": "Casual Listening, Classroom, Sports"
   },
   {
    "name": "Works with",
    "value": "Android System, IOS System, Windows System"
   },
   {
    "name": "Ip code",
    "value": "IPX7"
   },
   {
    "name": "Assembled product weight",
    "value": "0.34 lb"
   },
   {
    "name": "Color",
    "value": "Black"
   },
   {
    "name": "Inputs/Outputs",
    "value": "3.5mm audio jack"
   },
   {
    "name": "Accessories",
    "value": "Foldable headphones*1, USB-C charging cable*1, 3.5mm audio cable*1, User manual*1"
   },
   {
    "name": "Battery consumption type",
    "value": "Integrated Rechargeable Battery"
   },
   {
    "name": "Power type",
    "value": "Battery"
   },
   {
    "name": "Maximum transmission range",
    "value": "33 ft"
   },
   {
    "name": "Compatible smart control systems",
    "value": "Google Assistant, Siri"
   },
   {
    "name": "Ear pad material",
    "value": "Leather"
   },
   {
    "name": "Cord length",
    "value": "1 in"
   },
   {
    "name": "Generation",
    "value": "1st Generation"
   },
   {
    "name": "Material",
    "value": "Plastic, Leather"
   },
   {
    "name": "Video game platform",
    "value": "PC"
   },
   {
    "name": "Headphone type",
    "value": "Headphones"
   },
   {
    "name": "Model name",
    "value": "JH-820"
   }
  ],
  "fulfillment": [
   "Shipping, arrives by tomorrow to San Jose, 95129",
   "Pickup not available at a nearby store"
  ],
  "returns": "Free Holiday returns until Jan 31",
  "reviewSummary": {
   "average": 4.2,
   "total": 1630,
   "histogram": {
    "1": 166,
    "2": 73,
    "3": 100,
    "4": 205,
    "5": 1086
   },
   "positive": [
    "Comfortable over-ear fit",
    "Crystal clear sound",
    "Affordable price",
    "Easy to use"
   ],
   "negative": []
  },
  "reviews": [
   {
    "rating": 5,
    "title": "Lightweight/ Sweat proof Exercise Headphones",
    "text": "I genuinely was surprised when I got these headphones because I thought the look of them was so cheap but after using them for three weeks, I am excited to share them. They are so comfortable. Great sound noise cancel, I don't really know much about a range, but it works well with my phone. It has a soft inner ear cushion and holds charge very well for the price. You can't beat it just in case if you need something to walk with or go to the gym that's not $100.",
    "author": "Jenn",
    "date": "6/16/2026",
    "verified": true
   },
   {
    "rating": 5,
    "title": "Will buy again",
    "text": "Clear sound and great to use for phone calls!!! Definitely worth the $18. It is super comfortable and you can definitely workout with them one.",
    "author": "anonymous",
    "date": "8/12/2026",
    "verified": true
   },
   {
    "rating": 5,
    "title": "Good Sounding Bluetooth Headset",
    "text": "This Wireless Bluetooth Headset works well. It has a strong base sound and I like it. Easy to use. Now I can enjoy listening to music.",
    "author": "anonymous",
    "date": "6/28/2026",
    "verified": true
   },
   {
    "rating": 5,
    "title": "Headphones",
    "text": "I was skeptical at first but these headphones are so good. The sound is so clear and when you call someone they are able to hear you clearly and they can even hear what's in the background! They have a couple modes like vocal mode and bass mode and the bass is amazing. They have adjustable pieces. They have styrofoam muffs and the top of the headphones are padded and are so so comfortable. Paying $20 was so worth it on these, the headphones aren't too bulky, and they were very easy to connect to my phone. They also have a volume button and power button along with the mode changer button.",
    "author": "anonymous",
    "date": "5/26/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "Hybrid Active Noise Cancelling Headphones -45dB, Bluetooth Headphones 5.4, Bass Boosted by 90%, 50H Playtime, ENC Clear Call, Comfort Fit Over Ear Wireless Headphone for Travel Office PC Pure Black",
    "price": "$26.79",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-Bass-Boosted-90-50H-Playtime-ENC-Clear-Call-Comfort-Fit-Ear-Wireless-Headphon_36515822-e6fb-4266-8845-c3a955f6f5df.d65dfebeb8d8bec416d044837e702fc5.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Wireless Headphone Bluetooth 5.4, 40H Playtime with 3EQ Modes, Bass Boosted 85%, Bluetooth Headphone Over Ear Wireless/Wired, ENC Clear Call, Foldable Over Ear Headphone for Travel/Office/PC Black",
    "price": "$19.59",
    "image": "https://i5.walmartimages.com/seo/Wireless-Headphone-Bluetooth-5-4-40H-Playtime-3EQ-Modes-Bass-Boosted-85-Bluetooth-Headphone-Ear-Wireless-Wired-ENC-Clear-Call-Foldable-Ear-Headphone_11bd6775-2242-4ff9-81ad-f07f2e2740ee.cb649ef05340223e96beb37037df98d0.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Active Noise Cancelling Headphones -45dB, Bluetooth Headphones 5.4, 60H Playtime Wireless Earbuds, Clear Call, Bass Boosted by 90%, Comfort Fit Over Ear Headphones for Travel Home Office PC Black",
    "price": "$24.99",
    "image": "https://i5.walmartimages.com/seo/Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-50H-Playtime-Wireless-Headphones-Clear-Call-Bass-Boosted-90-Comfort-Fit-Ear-Headphon_fb592810-8c4a-4a53-aa03-90b0c2117246.462bb9ac2edc889db0dc0495850e1b1b.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Hybrid Active Noise Cancelling -45dB, Bluetooth Headphones 5.4, 50H Playtime, Clear Call with 4 Mics, Bass Boosted by 90%, Comfort Fit Over Ear Headphones for Travel Home Office PC Beige",
    "price": "$24.39",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-45dB-Bluetooth-Headphones-5-4-50H-Playtime-Clear-Call-4-Mics-Bass-Boosted-90-Comfort-Fit-Ear-Headphones-Travel-Home-Of_23f0c25f-e5ab-43b0-848a-458e5c2aa1d2.a62892ec0543e5e34f6d06a48588f1fb.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Hybrid Active Noise Cancelling -45dB, Bluetooth Headphones 5.4, 50H Playtime Earbuds, Clear Call with 4 Mics, Bass Boosted by 90%, Comfort Fit Over Ear Headphones for Travel Home Office PC Purple",
    "price": "$24.39",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-45dB-Bluetooth-Headphones-5-4-50H-Playtime-Earbuds-Clear-Call-4-Mics-Bass-Boosted-90-Comfort-Fit-Ear-Headphones-Travel_8b9f1b17-9771-46f4-bcd4-c6e727fc1811.b0e0739f42a80d111bd2f802a1c28ecd.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Active Noise Cancelling Headphones -45dB, Bluetooth Headphones 5.4, 60H Playtime Wireless Earbuds, Bass Boosted by 90%, ENC Clear Call, Over Ear Headphone for Travel Home Office PC Soot Black",
    "price": "$25.79",
    "image": "https://i5.walmartimages.com/seo/Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-60H-Playtime-Wireless-Earbuds-Bass-Boosted-90-ENC-Clear-Call-Ear-Headphone-Travel-Ho_7ceadea2-7d0a-4d10-855f-311b909c5611.7f51798f73aab5fed3523fcbe64b2a70.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   }
  ]
 },
 "hybrid-53db-26-79": {
  "title": "Hybrid Active Noise Cancelling Headphones -53dB, Bluetooth Headphones 5.4, 60H Playtime Wireless Earbuds, Bass Boosted by 90%, Clear Call, Comfort Fit Over Ear Headphones for Travel Home Office PC",
  "priceDollars": "26",
  "priceCents": "79",
  "priceWas": "169.99",
  "rating": 4.4,
  "ratingCount": 751,
  "brand": "IKT",
  "seller": "IKT-US",
  "badges": [
   "Deal"
  ],
  "colors": [
   {
    "name": "Black"
   },
   {
    "name": "Red"
   }
  ],
  "gallery": [
   "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-60H-Playtime-Wireless-Headphones-Bass-Boosted-90-Clear-Call-Comfort-Fit-Ear-H_d20c6b34-385f-40dd-869f-9c78fd8fef5b.224a1f78a9405b52616a8d0754da706c.jpeg",
   "https://i5.walmartimages.com/asr/55d2fbd6-11e1-429a-846d-e74666f4a8b2.393894b31112aa56931d69b30dd948c5.jpeg",
   "https://i5.walmartimages.com/asr/2cbe654f-c379-448d-a0fa-078d618f4d50.8c8be821523eba4a6044de9d320ff88b.jpeg",
   "https://i5.walmartimages.com/asr/f94b3849-bc76-43a3-b74a-dee1a4a3f26c.ef8e5f93b0d850a1be3736ce50508053.jpeg",
   "https://i5.walmartimages.com/asr/6ff068b7-013f-4163-9962-a88000c30716.d56f3873c6378a0fbade2c93f99d2994.jpeg",
   "https://i5.walmartimages.com/asr/dbfa01ec-27bb-4895-8ad2-6279262e60cb.8ba9fb21143b8a2f00dfbc1c6dd89094.jpeg"
  ],
  "videos": [
   "https://i5-richmedia.walmartimages.com/asr-rm/9277ee37-c14d-48c9-8f14-579e7fc2f2ff_video_providername.mp4"
  ],
  "keyFeatures": [
   "Battery life: 60 h",
   "Headphone style: Over-Ear",
   "Noise control technology: Hybrid Noise Cancellation",
   "Wireless: Y",
   "Features: Built-in Microphone, Foldable, Voice-Activated, Lightweight, Phone Control",
   "Brand: IKT",
   "Rec. use: Casual Listening, Classroom, Sports",
   "Works with: Android System, IOS System, Windows System",
   "Ip code: IPX7",
   "Assembled product weight: 0.48 lb"
  ],
  "about": [
   "【-53dB Hybrid Active Noise Cancellation】Our engineers have optimized the 4 built-in ANC micrs and digital active noise cancellation algorithm in the headphones wireless bluetooth. They can capture and filter up to 90% of low-frequency and mid-frequency environmental noise, such as airplane and car engines. The -53dB deep noise cancellation ensures you won't be disturbed, allowing you to focus on listening to music (Note: ANC mode does not support the AUX cable).",
   "【High-fidelity Sound Quality & High-resolution Audio】These noise canceling headphones feature oversized 40mm dynamic drivers. The highly flexible silk diaphragm reproduces powerful bass (up to 90% boost) and clear treble (up to 20kHz). 24-bit audio resolution separates sound frequencies into crisp, bright highs, rich, full mids, and detailed, elastic lows. Experience more sonic detail.",
   "【60 Hrs Long Playtime】The H03 wireless headphones bluetooth feature a built-in 500mAh battery, offering up to 40 hrs of music playtime in noise-canceling mode and extending playtime to 60 hrs in standard Bluetooth mode. Equipped with a 3.5mm audio cable, the headphones wireless noise cancelling can easily switch to wired mode when powered off. Even when the battery is depleted, music can still be played via the AUX cable. Enjoy uninterrupted playback during travel or commuting.",
   "【Clear Hands-free Calling】This noise cancelling headphones bluetooth isn't just a boon for music lovers. It's also a game-changer for remote work and everyday calls. Featuring CVC 8.0 beamforming audio signal processing and advanced AI noise reduction algorithms, it effectively filters out distracting keyboard clatter, background chatter, and traffic noise. Precision voice pickup delivers exceptionally clear call experiences.",
   "【Wide Compatibility & Smart One-two】Adopts advanced Bluetooth 5.4 technology. Compared to Bluetooth 5.3, with 2X faster connection speed and signal stability, there is almost no screen delay, enjoy your videos and games. The bluetooth headphones over ear is compatible with iOS, Android and Windows. Two smart devices can connect to our H03 over ear headphones at the same time, allowing you to take calls from your phone while watching a movie on your tablet without having to switch!",
   "【All-Day Comfort】Weighing just 220g, the headband incorporates a widened pressure-relief design. The ear cups feature an ergonomic oval full-coverage design paired with soft memory foam (slow rebound, high conformability, effectively dispersing pressure). They are soft against the skin and offer excellent breathability. The over ear wireless bluetooth headphones are also highly compatible with eyeglasses, with the ear cups accommodating temples comfortably. Perfect for long journeys and office use.",
   "【Safe Transparency Mode】The transparency mode of the bluetooth headset will bring you a new concept of sound - music doesn't have to exist in a vacuum, it can breathe and interact with the world. By turning on the transparency mode, outside sounds can coexist with your music. You won't be cut off from the outside world and can talk to people accurately and easily.",
   "【360° Spatial Surround Sound】The H03 over ear bluetooth headphones utilize multi-channel layered rendering and head-tracking technology.This creates a virtual spatial audio environment with width, height, and depth, enabling precise sound localization across multiple dimensions.The over ear headset detect even the slightest head movements in real-time, intelligently adjusting the soundstage direction to deliver an immersive, enveloping audio experience.",
   "【Individually Convenient Button Controls】 Use the intuitive buttons on the H03 wireless headphones to control your music. You can easily access functions such as play/pause music, switch songs, volume +/-, answer/hang up calls and activate the voice assistant. Under bluetooth connection status, click the ANC button to freely switch between ANC mode, bluetooth mode and transparency mode.",
   "【Stylish Gifts and Quality Customer Service】This wireless bluetooth noise canceling headphones has a fashionable design and rich and practical functions to make your daily life more convenient. Perfect gift for birthdays, anniversaries and special occasions. Package includes foldable over ear headphones wireless, 3.5mm spare audio cable, USB charging cable and user manual. We offer 30 days return and 12 months warranty. We encourage you to contact us with any product questions or suggestions."
  ],
  "specs": [
   {
    "name": "Battery life",
    "value": "60 h"
   },
   {
    "name": "Headphone style",
    "value": "Over-Ear"
   },
   {
    "name": "Noise control technology",
    "value": "Hybrid Noise Cancellation"
   },
   {
    "name": "Wireless",
    "value": "Y"
   },
   {
    "name": "Features",
    "value": "Built-in Microphone, Foldable, Voice-Activated, Lightweight, Phone Control"
   },
   {
    "name": "Brand",
    "value": "IKT"
   },
   {
    "name": "Rec. use",
    "value": "Casual Listening, Classroom, Sports"
   },
   {
    "name": "Works with",
    "value": "Android System, IOS System, Windows System"
   },
   {
    "name": "Ip code",
    "value": "IPX7"
   },
   {
    "name": "Assembled product weight",
    "value": "0.48 lb"
   },
   {
    "name": "Color",
    "value": "Black"
   },
   {
    "name": "Inputs/Outputs",
    "value": "3.5 mm"
   },
   {
    "name": "Accessories",
    "value": "Foldable headphones*1, USB-C charging cable*1, 3.5mm audio cable*1, User manual*1"
   },
   {
    "name": "Battery consumption type",
    "value": "Integrated Rechargeable Battery"
   },
   {
    "name": "Power type",
    "value": "Battery"
   },
   {
    "name": "Maximum transmission range",
    "value": "33 ft"
   },
   {
    "name": "Virtual assistant",
    "value": "Siri voice assistant, Google Voice Assistant"
   },
   {
    "name": "Ear pad material",
    "value": "Plastic"
   },
   {
    "name": "Cord length",
    "value": "1 ft"
   },
   {
    "name": "Generation",
    "value": "1st Generation"
   },
   {
    "name": "Video game platform",
    "value": "PC"
   },
   {
    "name": "Headphone type",
    "value": "Headphones"
   },
   {
    "name": "Model name",
    "value": "H03"
   }
  ],
  "fulfillment": [
   "Shipping, arrives by Fri, Oct 30 to San Jose, 95129",
   "Pickup not available at a nearby store"
  ],
  "returns": "Free Holiday returns until Jan 31",
  "reviewSummary": {
   "average": 4.4,
   "total": 751,
   "histogram": {
    "1": 53,
    "2": 26,
    "3": 44,
    "4": 111,
    "5": 517
   },
   "positive": [
    "Quick stable connectivity",
    "Strong noise canceling",
    "Rich, clear sound quality",
    "Multi-day battery life",
    "Great value for money",
    "Soft earpads comfort"
   ],
   "negative": []
  },
  "reviews": [
   {
    "rating": 5,
    "title": "Have made my life easier",
    "text": "I love these headphones. I have a problem with separating noises. I think it is coming from age so I'm having a problem with earbuds and such. These headphones have really made my life much easier as I'm able to just focus on one thing at a time..",
    "author": "Denise",
    "date": "12/29/2025",
    "verified": true
   },
   {
    "rating": 5,
    "title": "Terric regardless of price",
    "text": "There were some interesting reviews down rating the sound quality of these phones. I could not disagree more strongly. I have, in my studio, a selection of phones from the $100 Sony wired studio standards to $400 audiophile units. I think these stand up quite well compared to those. What most of those phones don't have is a terrific Bluetooth system and really functional noise-canceling. The two modes of noise-canceling are excellent and turn these phones into a near-isolation chamber in noisy environments; like the passenger seat of your car. The noise-canceling is a generation or two beyond the Bose wired noise-canceling phones I have used for several years. Also, unlike the Bose phones, this headphone is lightweight and extremely comfortable.",
    "author": "anonymous",
    "date": "12/5/2025",
    "verified": true
   },
   {
    "rating": 5,
    "title": "Great sound",
    "text": "Great sounds. I use them taking a nap since they block out all sound while listening on low.",
    "author": "Garry",
    "date": "7/10/2026",
    "verified": true
   },
   {
    "rating": 5,
    "text": "good quality for a. low prince",
    "author": "jorge",
    "date": "6/20/2026",
    "verified": true
   }
  ],
  "similar": [
   {
    "title": "Hybrid Active Noise Cancelling Bluetooth Headphones, Over Ear Wireless Headphones with 120H Playtime, Hi-Res Audio, Deep Bass, Memory Foam Ear Cups for Home Office Travel Black",
    "price": "$24.99",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-Bluetooth-Headphones-Ear-Wireless-Headphones-120H-Playtime-Hi-Res-Audio-Deep-Bass-Memory-Foam-Ear-Cups-Home-Office-Tra_971fbc7e-54a3-43d4-897b-23ad881812a1.6a31e404c966ec8b3e604c226ac5bb3f.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Hybrid Active Noise Cancelling Headphones -45dB, Bluetooth Headphones 5.4, Bass Boosted by 90%, 50H Playtime, ENC Clear Call, Comfort Fit Over Ear Wireless Headphone for Travel Office PC Pure Black",
    "price": "$26.79",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-Bass-Boosted-90-50H-Playtime-ENC-Clear-Call-Comfort-Fit-Ear-Wireless-Headphon_36515822-e6fb-4266-8845-c3a955f6f5df.d65dfebeb8d8bec416d044837e702fc5.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Hybrid Active Noise Cancelling -45dB, Bluetooth Headphones 5.4, 50H Playtime Earbuds, Clear Call with 4 Mics, Bass Boosted by 90%, Comfort Fit Over Ear Headphones for Travel Home Office PC Black",
    "price": "$24.39",
    "image": "https://i5.walmartimages.com/seo/Hybrid-Active-Noise-Cancelling-45dB-Bluetooth-Headphones-5-4-50H-Playtime-Earbuds-Clear-Call-4-Mics-Bass-Boosted-90-Comfort-Fit-Ear-Headphones-Travel_6af20eef-5b46-496a-b292-6e31cddfca54.068e529934dd8288c138dbbb5c0bf1e9.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Hybrid Active Noise Cancelling Headphones Wireless Bluetooth Over Ear - 50dB ANC, 120H Playback, 6-MIC ENC Clear Calls, Hi-Res 360° Spatial Audio, Foldable Comfort for Travel Office",
    "price": "$39.79",
    "image": "https://i5.walmartimages.com/seo/ybrid-Active-Noise-Cancelling-Headphones-Wireless-Bluetooth-Ear-50dB-ANC-120H-Playback-6-MIC-ENC-Clear-Calls-Hi-Res-360-Spatial-Audio-Foldable-Comfor_7d320cd6-f8f2-4832-9ad1-79ed0f93b8cc.d98752bb32bdc2e0b94df1c2f1758540.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Active Noise Cancelling Headphones -45dB, Bluetooth Headphones 5.4, 60H Playtime Wireless Earbuds, Bass Boosted by 90%, ENC Clear Call, Over Ear Headphone for Travel Home Office PC Soot Black",
    "price": "$25.79",
    "image": "https://i5.walmartimages.com/seo/Active-Noise-Cancelling-Headphones-45dB-Bluetooth-Headphones-5-4-60H-Playtime-Wireless-Earbuds-Bass-Boosted-90-ENC-Clear-Call-Ear-Headphone-Travel-Ho_7ceadea2-7d0a-4d10-855f-311b909c5611.7f51798f73aab5fed3523fcbe64b2a70.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   },
   {
    "title": "Bluetooth Headphones Over Ear, 58Hrs Playtime Wireless Headphones,Bass Boosted by 90%,Lightweight Headset with Deep Bass, Clear Call with 4 Noise Cancelling Mics,Low Latency for Travel Work Cellphone",
    "price": "$21.89",
    "image": "https://i5.walmartimages.com/seo/Bluetooth-Headphones-Ear-58Hrs-Playtime-Wireless-Headphones-Bass-Boosted-90-Lightweight-Headset-Deep-Bass-Clear-Call-4-Noise-Cancelling-Mics-Low-Late_6bd014bd-f432-4bec-b2c3-eb691b3e27a0.2e06f46364b4b7495eb201e21453bd6a.png?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
   }
  ]
 }
};

export function getPdpContent(item: WalmartItem): PdpContent {
  const known = PDP_CONTENT[item.id];
  if (known) return known;
  return {
    title: item.title,
    priceDollars: item.priceDollars,
    priceCents: item.priceCents,
    priceWas: item.priceWas,
    rating: item.rating,
    ratingCount: 0,
    badges: item.badge ? [item.badge] : [],
    colors: [],
    gallery: [item.image],
    videos: [],
    keyFeatures: [],
    about: [],
    specs: [],
    fulfillment: item.shippingLines ?? [],
    reviewSummary: { positive: [], negative: [] },
    reviews: [],
    similar: [],
  };
}
