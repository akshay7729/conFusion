import { Dish } from './dish';

export const DISHES: Dish[] = [
    {
        id:0,
        name: 'Pizza',
        image: '/assets/images/pizza.jpg',
        category: 'mains',
        label: 'Hot',
        price: '200',
        features: true,
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    },
    {   
        id:1,
        name: 'Zucchipakoda',
        image: '/assets/images/zucchipakoda.png',
        category: 'appetizer',
        label: '',
        price: '150',
        features: false,
        description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    },
    {
        id:2,
        name: 'ElaiCheese Cake',
        image: '/assets/images/elaicheesecake.png',
        category: 'dessert',
        label: '',
        price: '90',
        features: false,
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    }
];
