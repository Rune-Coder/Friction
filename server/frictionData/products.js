const products = [
    {
        type: 'men-sneakers',
        image: '/images/product_p1.png',
        company: 'Adidas',
        product: 'Sneakers',
        rating: 4.5,
        sp: 249,
        mrp: 300,
        discount: 17,
        desc: {
            details: "A pair of round-toe white sneakers, has regular styling, lace-up detail",
            material: "Canvas material. Wipe with a clean, dry cloth to remove dust",
            specsType: "Sneakers",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace Ups",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-sneakers',
        image: '/images/product_p2.png',
        company: 'U.S. Polo Assn.',
        product: 'Men Grey Clarkin Sneakers',
        rating: 4.7,
        sp: 2099,
        mrp: 2999,
        discount: 30,
        desc: {
            details: "A pair of round-toe white sneakers, has regular styling, lace-up detail",
            material: "Canvas material. Wipe with a clean, dry cloth to remove dust",
            specsType: "Sneakers",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace Ups",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-sneakers',
        image: '/images/product_p3.jpg',
        company: 'Roadster',
        product: 'Men Black Sneakers',
        rating: 4.7,
        sp: 872,
        mrp: 3795,
        discount: 77,
        desc: {
            details: "A pair of round-toe black sneakers, has regular styling, lace-up detail",
            material: "Wipe gently with a dry cloth to remove any dried-on dirt and dust",
            specsType: "Sneakers",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-loafers',
        image: '/images/product_p4.png',
        company: 'Provogue',
        product: 'Men Tan Brown Solid Formal Loafers',
        rating: 4.2,
        sp: 879,
        mrp: 4395,
        discount: 80,
        desc: {
            details: "A pair of tan brown round-toed formal loafers, has regular styling",
            material: "Synthetic leather. Allow your pair of shoes to air and de-odorize at regular basis. Use shoe bags to prevent any stains or mildew. Dust any dry dirt from the surface using a clean cloth. Do not use polish or shiner",
            specsType: "Loafers",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Slip On",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-loafers',
        image: '/images/product_p5.jpg',
        company: 'U.S. Polo Assn.',
        product: 'U S Polo Assn Men Navy Blue PU Loafers',
        rating: 3.9,
        sp: 2239,
        mrp: 3199,
        discount: 30,
        desc: {
            details: "A pair of square toe navy blue ,has regular styling, slip-on detail",
            material: "Wipe with a clean, dry cloth to remove dust",
            specsType: "Loafers",
            specsToe: "Square Toe",
            specsPattern: "Solid",
            specsFastening: "Slip On",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-loafers',
        image: '/images/product_p6.jpg',
        company: 'HIGHLANDER',
        product: 'Men Solid Leather Loafers',
        rating: 3.9,
        sp: 1094,
        mrp: 1990,
        discount: 45,
        desc: {
            details: "A pair of square toe leather loafers, has regular styling, slip-on detail",
            material: "Wipe with a clean, dry cloth to remove dust",
            specsType: "Loafers",
            specsToe: "Square Toe",
            specsPattern: "Solid",
            specsFastening: "Slip On",
            specsWidth: "Regular",
            specsSole: "PVC",
            specsWarranty: "4 months",
        }
    },
    {
        type: 'men-chelsea',
        image: '/images/product_p7.jpg',
        company: 'H&M',
        product: 'Men Brown Chelsea boots',
        rating: 4.1,
        sp: 1199,
        mrp: 3999,
        discount: 30,
        desc: {
            details: "Chelsea boots in soft imitation suede with elastic gores in the sides and a loop at the back. Linings and insoles in imitation leather and cotton canvas. Fluted soles. Heel 2.7 cm.",
            material: "100% Polyester",
            specsType: "Chelsea Boots",
            specsToe: "Pointed Toe",
            specsPattern: "Solid",
            specsFastening: "Slip On",
            specsWidth: "Regular",
            specsSole: "Synthetic",
            specsWarranty: "2 months",
        }
    },
    {
        type: 'men-chelsea',
        image: '/images/product_p8.jpg',
        company: 'Fentacia',
        product: 'Men Brown Solid Synthetic Leather Lightweight High-Top Flat Chelsea Boots',
        rating: 4.0,
        sp: 1259,
        mrp: 5999,
        discount: 79,
        desc: {
            details: "A pair of round-toe brown flat boots, has high-top styling, slip-on detail",
            material: "Synthetic Leather. Wipe with a clean, dry cloth to remove dust",
            specsType: "Chelsea Boots",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Slip On",
            specsWidth: "Narrow",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-chelsea',
        image: '/images/product_p9.jpg',
        company: 'Roadster',
        product: 'Men Black Matte Rugged Chelsea Boots',
        rating: 4.1,
        sp: 1169,
        mrp: 2599,
        discount: 55,
        desc: {
            details: "A pair of round toe black matte rugged chelsea boots , has regular styling, slip-on detail",
            material: "Upper material: Synthetic Suede. Use a branded leather conditioner to clean the product/wipe with a clean, dry cloth to remove the dust",
            specsType: "Chelsea Boots",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Slip On",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-walking',
        image: '/images/product_p10.jpeg',
        company: 'Reebok',
        product: 'Men Navy Blue Mesh Walking Non-Marking Shoes',
        rating: 4.4,
        sp: 1439,
        mrp: 4799,
        discount: 70,
        desc: {
            details: "A pair of navy blue shoes, has regular styling, slip-on detail",
            material: "Care Instruction: Wipe with a clean, dry cloth to remove the dust.",
            specsType: "Walking Shoes",
            specsToe: "Round Toe",
            specsPattern: "Mesh",
            specsFastening: "Slip On",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "45 days",
        }
    },
    {
        type: 'men-walking',
        image: '/images/product_p11.jpg',
        company: 'Campus',
        product: 'Men Blue Mesh Walking Non-Marking Shoes',
        rating: 4.4,
        sp: 899,
        mrp: 999,
        discount: 10,
        desc: {
            details: "A pair of navy blue shoes, has regular styling, slip-on detail",
            material: "Care Instruction: Wipe with a clean, dry cloth to remove the dust.",
            specsType: "Walking Shoes",
            specsToe: "Round Toe",
            specsPattern: "Mesh",
            specsFastening: "Slip On",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'women-walking',
        image: '/images/product_p12.jpg',
        company: 'Nike',
        product: 'Women Black Walking Non-Marking Shoes',
        rating: 4.5,
        sp: 3599,
        mrp: 3999,
        discount: 10,
        desc: {
            details: "A pair of black walking shoes, has regular Styling, lace-ups detail",
            material: "Upper material: PU. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Walking Shoes",
            specsToe: "Round Toe",
            specsPattern: "Mesh",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-sandals',
        image: '/images/product_p13.jpg',
        company: 'El Paso',
        product: 'Men Black Comfort Sandals',
        rating: 4.1,
        sp: 779,
        mrp: 3895,
        discount: 80,
        desc: {
            details: "A pair of black comfort sandals, synthetic leather upper with slip-on closure",
            material: "Upper material: Synthetic Leather. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Comfort Sandals",
            specsToe: "Open Toe",
            specsPattern: "Solid",
            specsFastening: "Slip-On",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-sandals',
        image: '/images/product_p14.jpg',
        company: 'Redtape',
        product: 'Men Black Leather Comfort Sandals',
        rating: 4.6,
        sp: 1299,
        mrp: 1999,
        discount: 35,
        desc: {
            details: "A pair of black solid perforated comfort sandals, leather upper with slip-on closure",
            material: "Leather. Use a branded leather conditioner to clean the product. Avoid washing",
            specsType: "Comfort Sandals",
            specsToe: "Open Toe",
            specsPattern: "Solid",
            specsFastening: "Slip-On",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "6 months",
        }
    },
    {
        type: 'men-sandals',
        image: '/images/product_p15.jpg',
        company: 'Afrojack',
        product: 'Men Black Croslite Sliders',
        rating: 4,
        sp: 499,
        mrp: 2495,
        discount: 80,
        desc: {
            details: "A pair of black solid sliders",
            material: "Upper material: Croslite. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Comfort Sandals",
            specsToe: "Open Toe",
            specsPattern: "Solid",
            specsFastening: "Slip-On",
            specsWidth: "Regular",
            specsSole: "Croslite",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-boats',
        image: '/images/product_p16.jpg',
        company: 'Mast & Harbour',
        product: 'Men Brown Solid Boat Shoes',
        rating: 3.9,
        sp: 1594,
        mrp: 2899,
        discount: 45,
        desc: {
            details: "A pair of round toe brown solid boat shoes has regular styling, lace-ups detail",
            material: "Upper material: Synthetic. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Boat Shoes",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-boats',
        image: '/images/product_p17.jpg',
        company: 'Mast & Harbour',
        product: 'Men Coffee Brown Solid Boat Shoes',
        rating: 3.7,
        sp: 1594,
        mrp: 2899,
        discount: 45,
        desc: {
            details: "A pair of round toe coffee brown solid boat shoes has regular styling, lace-ups detail",
            material: "Upper material: Synthetic. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Boat Shoes",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-boats',
        image: '/images/product_p18.jpg',
        company: 'Nautica',
        product: 'Men Camel Brown Leather Boat Shoes',
        rating: 3.8,
        sp: 3249,
        mrp: 4999,
        discount: 35,
        desc: {
            details: "A pair of round toe camel brown boat shoes with tie-up detail ,has regular styling, slip-on detail",
            material: "Leather. Use a branded leather conditioner to clean the product. Avoid washing",
            specsType: "Boat Shoes",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Slip-on",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-espadrilles',
        image: '/images/product_p19.jpg',
        company: 'AfroJack',
        product: 'Men Woven Design Espadrilles',
        rating: 3.8,
        sp: 674,
        mrp: 4495,
        discount: 85,
        desc: {
            details: "A pair of square toe woven espadrilles ,has regular styling, slip-on detail",
            material: "Allow your pair of shoes to air and deodorize at regular basis use shoe bags to prevent any stains or mildew dust any dry dirt from the surface using a clean cloth do not use polish or shiner",
            specsType: "Espadrilles",
            specsToe: "Square Toe",
            specsPattern: "Woven Design",
            specsFastening: "Slip-on",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-espadrilles',
        image: '/images/product_p20.jpg',
        company: 'SHENCES',
        product: 'Men Green Woven Design Espadrilles',
        rating: 3.8,
        sp: 689,
        mrp: 2299,
        discount: 70,
        desc: {
            details: "A pair of round toe green woven espadrilles ,has regular styling, slip-on detail",
            material: "Allow your pair of shoes to air and deodorize at regular basis use shoe bags to prevent any stains or mildew dust any dry dirt from the surface using a clean cloth do not use polish or shiner",
            specsType: "Espadrilles",
            specsToe: "Round Toe",
            specsPattern: "Woven Design",
            specsFastening: "Slip-on",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-espadrilles',
        image: '/images/product_p21.jpg',
        company: 'VIV',
        product: 'Men Black Perforations Espadrilles',
        rating: 3.8,
        sp: 899,
        mrp: 1999,
        discount: 55,
        desc: {
            details: "A pair of square toe black ,has regular styling, lace-ups detail",
            material: "Upper material: Synthetic Wipe with a clean, dry cloth to remove the dust",
            specsType: "Espadrilles",
            specsToe: "Square Toe",
            specsPattern: "Perforations",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-chukka',
        image: '/images/product_p22.jpg',
        company: 'Next',
        product: 'Men Black Solid Suede Leather Chukka Boots',
        rating: 3.9,
        sp: 2249,
        mrp: 4999,
        discount: 55,
        desc: {
            details: "A pair of black chukka boots, has lace-ups detail",
            material: "Suede leather. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Desert Boots",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-chukka',
        image: '/images/product_p23.jpg',
        company: 'Carlton London',
        product: 'Men Black Solid Mid-Top Chukka Boots',
        rating: 3.9,
        sp: 3499,
        mrp: 5999,
        discount: 42,
        desc: {
            details: "A pair of round toe brown chukka boots, has mid-top styling, has lace-ups detail",
            material: "Synthetic. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Desert Boots",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "15 days",
        }
    },
    {
        type: 'men-chukka',
        image: '/images/product_p24.jpg',
        company: 'Mactree',
        product: 'Men Brown Solid Mid-Top Chukka Boots',
        rating: 3.9,
        sp: 3499,
        mrp: 4999,
        discount: 55,
        desc: {
            details: "A pair of round toe black chukka boots, has mid-top styling, has lace-ups detail",
            material: "Synthetic. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Desert Boots",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "15 days",
        }
    },
    {
        type: 'men-chukka',
        image: '/images/product_p25.jpg',
        company: 'LOUIS STITCH',
        product: 'Men Tan Suede Mid-Top Boots',
        rating: 3.9,
        sp: 2699,
        mrp: 8999,
        discount: 70,
        desc: {
            details: "A pair of tan round toe boots, has mid-top styling, has lace-ups detail",
            material: "Suede. Wipe with a clean, dry cloth to remove the dust",
            specsType: "Desert Boots",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-brogues',
        image: '/images/product_p26.jpg',
        company: 'SHENCES',
        product: 'Men Tan Brown Leather Brogue Boots',
        rating: 4.2,
        sp: 2219,
        mrp: 5999,
        discount: 63,
        desc: {
            details: "A pair of round toe tan flat brogue boots ,has regular styling, has lace-ups detail",
            material: "Upper material: Leather. Use a branded leather conditioner to clean the product/wipe with a clean, dry cloth to remove the dust",
            specsType: "Regular Boots",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-brogues',
        image: '/images/product_p27.jpg',
        company: 'Provogue',
        product: 'Men Brown Solid Formal Brogues',
        rating: 4.2,
        sp: 899,
        mrp: 4495,
        discount: 63,
        desc: {
            details: "A pair of brown solid round-toed formal Brogues , has has central lace-ups",
            material: "Faux leather. Use a branded leather conditioner to clean the product/wipe with a clean, dry cloth to remove the dust",
            specsType: "Brogues",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-derbys',
        image: '/images/product_p28.jpg',
        company: 'Red Tape',
        product: 'Men Black Solid Leather Formal Derbys',
        rating: 4.1,
        sp: 2039,
        mrp: 6799,
        discount: 70,
        desc: {
            details: "A pair of black solid round toe formal derbys with regular styling has a lace-up closure",
            material: "Leather. Use a branded leather conditioner to clean the product/wipe with a clean, dry cloth to remove the dust",
            specsType: "Derbys",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "45 days",
        }
    },
    {
        type: 'men-derbys',
        image: '/images/product_p29.jpg',
        company: 'Bata',
        product: 'Men Tan Brown Textured Formal Derbys',
        rating: 3.8,
        sp: 1999,
        mrp: 3999,
        discount: 50,
        desc: {
            details: "A pair of tan brown textured round-toed formal derbys, with regular styling has a lace-up closure",
            material: "PU. Wipe with clean and dry cloth to remove dust",
            specsType: "Derbys",
            specsToe: "Round Toe",
            specsPattern: "Textured",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-derbys',
        image: '/images/product_p30.jpg',
        company: 'Walke',
        product: 'Men Coffee Brown Solid Formal Derbys',
        rating: 4.3,
        sp: 2599,
        mrp: 4999,
        discount: 50,
        desc: {
            details: "A pair of coffee brown solid round-toed formal derbys, with regular styling has a lace-up closure",
            material: "PU. Wipe with clean and dry cloth to remove dust",
            specsType: "Derbys",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-oxfords',
        image: '/images/product_p31.jpg',
        company: 'INVICTUS',
        product: 'Men Black Formal Textured Oxford Shoes',
        rating: 4,
        sp: 958,
        mrp: 2995,
        discount: 68,
        desc: {
            details: "A pair of Black Textured Oxford Shoes with lace-up detailings",
            material: "PU. Wipe with clean and dry cloth to remove dust",
            specsType: "Oxfords",
            specsToe: "Round Toe",
            specsPattern: "Textured",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "PU",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-oxfords',
        image: '/images/product_p32.jpg',
        company: 'Arrow',
        product: 'Men Tan Brown Solid Leather Oxford Shoes',
        rating: 3.8,
        sp: 4764,
        mrp: 5499,
        discount: 15,
        desc: {
            details: "A pair of tan brown oxford shoes with central lace-ups",
            material: "Leather. Use a branded leather conditioner to clean the product/wipe with a clean, dry cloth to remove the dust",
            specsType: "Oxfords",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-oxfords',
        image: '/images/product_p33.jpg',
        company: 'LOUIS STITCH',
        product: 'Men Brown Leather Formal Oxford Shoes',
        rating: 4.5,
        sp: 2029,
        mrp: 6999,
        discount: 70,
        desc: {
            details: "A pair of brown oxford shoes with central lace-ups",
            material: "Leather. Clean and polish with LOUIS STITCH range of shoe care accessories",
            specsType: "Oxfords",
            specsToe: "Round Toe",
            specsPattern: "Textured",
            specsFastening: "Lace-Ups",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-monks',
        image: '/images/product_p34.jpg',
        company: 'Sir Corbett',
        product: 'Men Chocolate Brown Formal Monk Shoes',
        rating: 4.1,
        sp: 1098,
        mrp: 3429,
        discount: 70,
        desc: {
            details: "A pair of chocolate brown formal shoes with buckle closure",
            material: "Synthetic. Wipe with a clean, dry cloth when required",
            specsType: "Monk Shoes",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Buckle",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "1 month",
        }
    },
    {
        type: 'men-monks',
        image: '/images/product_p35.jpg',
        company: 'Alberto Torresi',
        product: 'Men Brown Formal Monk Shoes',
        rating: 4,
        sp: 1599,
        mrp: 2079,
        discount: 30,
        desc: {
            details: "A pair of brown formal shoes with buckle closure",
            material: "Synthetic. Wipe with a clean, dry cloth when required",
            specsType: "Monk Shoes",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Buckle",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "2 months",
        }
    },
    {
        type: 'men-monks',
        image: '/images/product_p36.jpg',
        company: 'INVICTUS',
        product: 'Men Black Faux Leather Formal Monk Shoes',
        rating: 4,
        sp: 922,
        mrp: 4195,
        discount: 78,
        desc: {
            details: "A pair of black round-toed formal monk shoes, has regular styling",
            material: "Synthetic. Wipe gently with a dry cloth to remove any dried-on dirt and dust",
            specsType: "Monk Shoes",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Slip-On",
            specsWidth: "Regular",
            specsSole: "TPR",
            specsWarranty: "3 months",
        }
    },
    {
        type: 'men-ankle',
        image: '/images/product_p37.jpg',
        company: 'Woakers',
        product: 'Men Tan Brown Solid Synthetic High Ankle Flat Boots',
        rating: 4.3,
        sp: 753,
        mrp: 3425,
        discount: 78,
        desc: {
            details: "A pair of brown round-toed ankle boots, has regular styling",
            material: "Synthetic. Wipe gently with a dry cloth to remove any dried-on dirt and dust",
            specsType: "Monk Shoes",
            specsToe: "Round Toe",
            specsPattern: "Solid",
            specsFastening: "Lace-Up",
            specsWidth: "Regular",
            specsSole: "Rubber",
            specsWarranty: "3 months",
        }
    }
];

export default products;