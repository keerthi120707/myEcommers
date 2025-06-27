import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import LoginModal from './components/LoginModal';
import Orders from './components/Orders';
import AdminDashboard from './components/AdminDashboard';
import Checkout from './components/Checkout';
import { Product } from './types';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    setSelectedProduct(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
      case 'products':
        return (
          <ProductList
            onProductClick={handleProductClick}
            searchTerm={searchTerm}
          />
        );
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setCurrentView('products')}
          />
        ) : null;
      case 'orders':
        return <Orders />;
      case 'admin':
        return <AdminDashboard />;
      case 'checkout':
        return <Checkout onBack={() => setCurrentView('home')} />;
      default:
        return (
          <ProductList
            onProductClick={handleProductClick}
            searchTerm={searchTerm}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <Header
            onCartClick={() => setIsCartOpen(true)}
            onLoginClick={() => setIsLoginModalOpen(true)}
            currentView={currentView}
            onViewChange={handleViewChange}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          
          <main className="min-h-screen">
            {renderContent()}
          </main>

          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={() => {
              setIsCartOpen(false);
              setCurrentView('checkout');
            }}
          />

          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;