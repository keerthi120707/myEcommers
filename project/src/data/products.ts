import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 25,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and water resistance.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 18,
    featured: true
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable, sustainable organic cotton t-shirt in various colors.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    stock: 50,
    featured: false
  },
  {
    id: '4',
    name: 'Professional Camera Lens',
    description: '85mm f/1.4 portrait lens for professional photography with exceptional bokeh.',
    price: 899.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Photography',
    stock: 8,
    featured: true
  },
  {
    id: '5',
    name: 'Minimalist Backpack',
    description: 'Sleek, water-resistant backpack perfect for work and travel.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    stock: 32,
    featured: false
  },
  {
    id: '6',
    name: 'Artisan Coffee Beans',
    description: 'Single-origin, freshly roasted coffee beans with complex flavor notes.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Food',
    stock: 100,
    featured: false
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4526429/pexels-photo-4526429.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 45,
    featured: false
  },
  {
    id: '8',
    name: 'Designer Sunglasses',
    description: 'Premium polarized sunglasses with UV protection and titanium frame.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/46668/sunglasses-spectacles-eyewear-mirrored-46668.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    stock: 22,
    featured: true
  }
];

export const categories = ['All', 'Electronics', 'Clothing', 'Photography', 'Accessories', 'Food'];