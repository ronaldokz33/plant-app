const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations'],
        count: 145,
        image: require('../assets/images/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 145,
        image: require('../assets/images/seeds.png')
    },
    {
        id: 'flowes',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 145,
        image: require('../assets/images/flowes.png')
    },
    {
        id: 'sprayers',
        name: 'Sprayers',
        tags: ['products', 'shop'],
        count: 145,
        image: require('../assets/images/sprayers.png')
    },
    {
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 145,
        image: require('../assets/images/pots.png')
    },
    {
        id: 'fertilizer',
        name: 'Fertilizer',
        tags: ['products', 'shop'],
        count: 145,
        image: require('../assets/images/fertilizer.png')
    }
];

const products = [
    {
        id: 1,
        name: 'Frosty Bison (2013)',
        description: 'Uma American IPA com 6.9% ABV. Com doses extras de lúpulos americanos intensificam as características maltadas, com aroma cítrico e frutado. Harmoniza bem com carnes assadas, comida mexicana e queijos roquefort, gouda e gorgonzola.',
        tags: ['Interior', '27m', 'Ideas'],
        gallery: [
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png')
        ]
    }
];

const explore = [
    require('../assets/images/expore_1.png'),
    require('../assets/images/expore_2.png'),
    require('../assets/images/expore_3.png'),
    require('../assets/images/expore_4.png'),
    require('../assets/images/expore_5.png'),
    require('../assets/images/expore_6.png')
];

const profile = {
    id: 1,
    username: 'Ronaldo',
    location: 'Uberlândia',
    email: 'contato@atendup.com.br',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
};

export {
    explore,
    categories,
    products,
    profile
};