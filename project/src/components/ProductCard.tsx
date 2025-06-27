import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      onClick={() => onProductClick(product)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Low Stock
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 capitalize">
              {product.category}
            </p>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>
        
        <div className="mt-3 bg-gray-100 rounded-lg p-2">
          <div className="flex justify-between text-xs text-gray-600">
            <span>Stock: {product.stock}</span>
            <span>Free shipping</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;