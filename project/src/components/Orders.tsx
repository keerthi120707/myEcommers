import React from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { Order } from '../types';

const Orders: React.FC = () => {
  // Mock orders data
  const orders: Order[] = [
    {
      id: 'ORD-001',
      items: [
        {
          product: {
            id: '1',
            name: 'Premium Wireless Headphones',
            price: 299.99,
            image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
            description: '',
            category: 'Electronics',
            stock: 25,
            featured: true
          },
          quantity: 1
        }
      ],
      total: 299.99,
      status: 'delivered',
      customerInfo: {
        name: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St, City, State 12345',
        phone: '+1 (555) 123-4567'
      },
      orderDate: new Date('2024-01-15')
    },
    {
      id: 'ORD-002',
      items: [
        {
          product: {
            id: '2',
            name: 'Smart Fitness Watch',
            price: 199.99,
            image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
            description: '',
            category: 'Electronics',
            stock: 18,
            featured: true
          },
          quantity: 1
        }
      ],
      total: 199.99,
      status: 'shipped',
      customerInfo: {
        name: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St, City, State 12345',
        phone: '+1 (555) 123-4567'
      },
      orderDate: new Date('2024-01-20')
    }
  ];

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <Package className="w-5 h-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-orange-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-orange-100 text-orange-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">No orders yet</h2>
          <p className="text-gray-500">When you place orders, they'll appear here.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order #{order.id}
                  </h3>
                  <p className="text-gray-600">
                    Placed on {order.orderDate.toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  {getStatusIcon(order.status)}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {item.product.name}
                      </h4>
                      <p className="text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Shipping Address:</p>
                  <p className="text-gray-900">{order.customerInfo.address}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-xl font-bold text-gray-900">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;