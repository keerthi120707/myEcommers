import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock additional images for demo
  const additionalImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Products</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={additionalImages[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {additionalImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize">
                {product.category}
              </span>
              {product.featured && (
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">4.8 (234 reviews)</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Stock Status */}
          <div className="flex items-center space-x-4">
            <div className={`px-4 py-2 rounded-lg ${
              product.stock > 10 
                ? 'bg-green-100 text-green-800' 
                : product.stock > 0 
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {product.stock > 10 ? 'In Stock' : 
               product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 border-l border-r border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <Truck className="w-6 h-6 text-green-600" />
              <span className="text-sm text-gray-600">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-gray-600">2 Year Warranty</span>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="w-6 h-6 text-orange-600" />
              <span className="text-sm text-gray-600">30 Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;