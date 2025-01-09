// const menuList = [
//   {
//     info: {
//       id: "656392",
//       name: "Subway",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/028cd410-8376-4db2-aae3-0a34de711943_656392.JPG",
//       locality: "1st Block",
//       areaName: "Koramangala",
//       costForTwo: "₹350 for two",
//       cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
//       avgRating: 4.3,
//       parentId: "2",
//       avgRatingString: "4.3",
//       totalRatingsString: "3.2K+"
//     }
//   },
//   {
//     info: {
//       id: "23682",
//       name: "McDonald's",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/e83494ee-3c0b-4194-abd3-4619fa906aab_23682.jpg",
//       locality: "HSR Layout",
//       areaName: "HSR Layout",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//       avgRating: 4.4,
//       parentId: "630",
//       avgRatingString: "4.4",
//       totalRatingsString: "74K+"
//     }
//   },
//   {
//     info: {
//       id: "241027",
//       name: "Namaste",
//       cloudinaryImageId: "dtcwa1rxdskp3crqvpr3",
//       locality: "3rd Sector",
//       areaName: "Hsr Layout",
//       costForTwo: "₹100 for two",
//       cuisines: ["South Indian", "Chinese", "Thalis"],
//       avgRating: 4.4,
//       parentId: "366271",
//       avgRatingString: "4.4",
//       totalRatingsString: "28K+"
//     }
//   },
//   {
//     info: {
//       id: "263485",
//       name: "Chaayos Chai+Snacks=Relax",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
//       locality: "Kormangala 8th Block",
//       areaName: "Kormangala",
//       costForTwo: "₹250 for two",
//       cuisines: ["Bakery", "Beverages", "Chaat", "Desserts", "Home Food", "Italian", "Maharashtrian", "Snacks", "Street Food", "Sweets"],
//       avgRating: 4.4,
//       parentId: "281782",
//       avgRatingString: "4.4",
//       totalRatingsString: "4.6K+"
//     }
//   },
//   {
//     info: {
//       id: "426776",
//       name: "Theobroma",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/d512978b-3dde-48b9-a974-ca7be403eef1_426776.jpg",
//       locality: "7th Block",
//       areaName: "Koramangala",
//       costForTwo: "₹400 for two",
//       cuisines: ["Desserts", "Bakery", "Beverages"],
//       avgRating: 4.7,
//       parentId: "1040",
//       avgRatingString: "4.7",
//       totalRatingsString: "5.6K+"
//     }
//   },
//   {
//     info: {
//       id: "711368",
//       name: "Salad Days",
//       cloudinaryImageId: "cfa1123ebf17413dc7d0a80c7361fab3",
//       locality: "BTM Layout",
//       areaName: "HSR",
//       costForTwo: "₹500 for two",
//       cuisines: ["Salads"],
//       avgRating: 4.6,
//       parentId: "796",
//       avgRatingString: "4.6",
//       totalRatingsString: "4.1K+"
//     }
//   },
//   {
//     info: {
//       id: "739117",
//       name: "Boba Bhai",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/e0930ae4-82d3-415e-9b37-4ada0ab077a2_739117.jpg",
//       locality: "Industrial Layout ward",
//       areaName: "Kormangla",
//       costForTwo: "₹200 for two",
//       cuisines: ["Bubble Tea", "Burger", "Korean", "Beverages", "Fast Food", "Juice and shake"],
//       avgRating: 4.3,
//       parentId: "361235",
//       avgRatingString: "4.3",
//       totalRatingsString: "1.1K+"
//     }
//   },
//   {
//     info: {
//       id: "739118",
//       name: "Seoul Burgers & Shakes",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/63a2b5b2-8f13-4dc6-bd88-0689faa5192c_739118.jpg",
//       locality: "Industrial Layout ward",
//       areaName: "Kormangla",
//       costForTwo: "₹200 for two",
//       cuisines: ["Burger", "Bubble Tea", "Fast Food", "Beverages", "Juice and shake"],
//       avgRating: 4.4,
//       parentId: "372969",
//       avgRatingString: "4.4",
//       totalRatingsString: "731"
//     }
//   },
//   {
//     info: {
//       id: "85296",
//       name: "DVG Benne Dosa",
//       cloudinaryImageId: "t64rpsg9htqnf2zax7sv",
//       locality: "Amarjoythi Layout",
//       areaName: "Domlur",
//       costForTwo: "₹100 for two",
//       cuisines: ["South Indian"],
//       avgRating: 4.1,
//       parentId: "7046",
//       avgRatingString: "4.1",
//       totalRatingsString: "6.9K+"
//     }
//   },
//   {
//     info: {
//       id: "4046",
//       name: "Sri Udupi Park",
//       cloudinaryImageId: "tfbnpd65irvhp9iwhbtk",
//       locality: "Residency Road",
//       areaName: "Central Bangalore",
//       costForTwo: "₹200 for two",
//       cuisines: ["North Indian", "South Indian", "Chinese", "Chaat", "Beverages"],
//       avgRating: 4.6,
//       parentId: "4284",
//       avgRatingString: "4.6",
//       totalRatingsString: "37K+"
//     }
//   },
//   {
//     info: {
//       id: "307",
//       name: "A2B - Adyar Ananda Bhavan",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/31/e1e8a185-5b55-436c-bb9b-9d83db18c29b_307.jpg",
//       locality: "BTM Layout",
//       areaName: "BTM Layout",
//       costForTwo: "₹300 for two",
//       cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
//       avgRating: 4.5,
//       parentId: "22",
//       avgRatingString: "4.5",
//       totalRatingsString: "77K+"
//     }
//   },
//   {
//     info: {
//       id: "747260",
//       name: "Green Cravings",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/6f01ec64-58f3-4345-afbc-3ee8483d4644_747260.JPG",
//       locality: "EJIPURA",
//       areaName: "Koramangala",
//       costForTwo: "₹350 for two",
//       cuisines: ["Healthy Food", "Grill"],
//       avgRating: 3.5,
//       parentId: "8660",
//       avgRatingString: "3.5",
//       totalRatingsString: "40"
//     }
//   },
//   {
//     info: {
//       id: "472793",
//       name: "Home Plate by EatFit",
//       cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
//       locality: "LASKAR HOSUR ROAD",
//       areaName: "ADUGODI",
//       costForTwo: "₹250 for two",
//       cuisines: ["North Indian", "Home Food", "Healthy Food", "Indian", "Punjabi", "South Indian", "Rajasthani", "Maharashtrian", "Snacks", "Desserts"],
//       avgRating: 4.3,
//       parentId: "301197",
//       avgRatingString: "4.3",
//       totalRatingsString: "502"
//     }
//   },
//   {
//     info: {
//       id: "472792",
//       name: "Great Indian Khichdi by EatFit",
//       cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
//       locality: "LASKAR HOSUR ROAD",
//       areaName: "ADUGODI",
//       costForTwo: "₹200 for two",
//       cuisines: ["Home Food", "Indian", "Healthy Food", "Snacks", "Desserts", "Rajasthani", "South Indian", "Maharashtrian", "Sweets"],
//       avgRating: 4.5,
//       parentId: "319582",
//       avgRatingString: "4.5",
//       totalRatingsString: "1.5K+"
//     }
//   },
//   {
//     info: {
//       id: "558775",
//       name: "HRX by EatFit",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/c706a191-aed9-4768-8cb5-0219b0e06415_558775.JPG",
//       locality: "LASKAR HOSUR ROAD",
//       areaName: "ADUGODI",
//       costForTwo: "₹450 for two",
//       cuisines: ["Healthy Food", "Salads", "Burgers"],
//       avgRating: 4.7,
//       parentId: "335529",
//       avgRatingString: "4.7",
//       totalRatingsString: "283"
//     }
//   },
//   {
//     info: {
//       id: "747263",
//       name: "Bowl Soul",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/0157d980-189c-49b6-a364-8dfced4f073a_747263.JPG",
//       locality: "EJIPURA",
//       areaName: "Koramangala",
//       costForTwo: "₹250 for two",
//       cuisines: ["Continental", "Chinese", "Oriental", "Asian", "Healthy Food", "Fast Food", "Indian", "Desserts"],
//       avgRating: 4.1,
//       parentId: "280646",
//       avgRatingString: "4.1",
//       totalRatingsString: "385"
//     }
//   },
//   {
//     info: {
//       id: "267162",
//       name: "Slay Coffee Bar",
//       cloudinaryImageId: "a539ca8b3f7671c90cfea1a12205b113",
//       locality: "Koramangala",
//       areaName: "Koramangala",
//       costForTwo: "₹200 for two",
//       cuisines: ["Cafe", "Beverages", "Desserts", "Bakery", "Snacks"],
//       avgRating: 4.6,
//       parentId: "10573",
//       avgRatingString: "4.6",
//       totalRatingsString: "2.9K+"
//     }
//   },
//   {
//     info: {
//       id: "5934",
//       name: "Burger King",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
//       locality: "Koramangala",
//       areaName: "Koramangala",
//       costForTwo: "₹350 for two",
//       cuisines: ["Burgers", "American"],
//       avgRating: 4.3,
//       parentId: "166",
//       avgRatingString: "4.3",
//       totalRatingsString: "100K+"
//     }
//   },
//   {
//     info: {
//       id: "299893",
//       name: "Samosa Party",
//       cloudinaryImageId: "fgizj8q1dx8n0wq6cmzb",
//       locality: "HSR Layout",
//       areaName: "HSR Layout",
//       costForTwo: "₹150 for two",
//       cuisines: ["Fast Food", "Snacks", "Beverages", "Chaat", "North Indian", "Street Food", "Sweets", "Desserts", "Punjabi", "Bakery"],
//       avgRating: 4.5,
//       parentId: "6364",
//       avgRatingString: "4.5",
//       totalRatingsString: "6.5K+"
//     }
//   },
//   {
//     info: {
//       id: "12480",
//       name: "Krispy Kreme - Doughnuts & Coffee",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/3/460ebd25-b314-43c7-8361-a52e8832b4c4_12480.jpg",
//       locality: "7th Block",
//       areaName: "Koramangala",
//       costForTwo: "₹170 for two",
//       cuisines: ["Desserts", "Cafe", "Bakery", "Coffee", "Beverages", "Snacks"],
//       avgRating: 4.7,
//       parentId: "594464",
//       avgRatingString: "4.7",
//       totalRatingsString: "8.2K+"
//     }
//   }
// ];

// export default menuList;