const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations'],
        count: 145,
        image: require('../assets/icons/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 145,
        image: require('../assets/icons/seeds.png')
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 145,
        image: require('../assets/icons/flowers.png')
    },
    {
        id: 'sprayers',
        name: 'Sprayers',
        tags: ['products', 'shop'],
        count: 145,
        image: require('../assets/icons/sprayers.png')
    },
    {
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 145,
        image: require('../assets/icons/pots.png')
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        count: 145,
        image: require('../assets/icons/fertilizers.png')
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
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png')
];

const profile = {
    id: 1,
    username: 'Ronaldo',
    location: 'Uberlândia',
    email: 'contato@atendup.com.br',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly: 5000,
    notifications: true,
    newsletter: false
};

export {
    explore,
    categories,
    products,
    profile
};