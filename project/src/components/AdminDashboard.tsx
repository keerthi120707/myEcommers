import React, { useState } from 'react';
import { Package, Users, DollarSign, TrendingUp, Plus, Edit, Trash2 } from 'lucide-react';
import { products } from '../data/products';
import { useAuth } from '../context/AuthContext';

const AdminDashboard: React.FC = () => {
  const { isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-600">You don't have permission to access this page.</p>
      </div>
    );
  }

  const stats = [
    {
      title: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Orders',
      value: 47,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Total Customers',
      value: 123,
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 font-medium text-gray-900">Order ID</th>
                <th className="pb-3 font-medium text-gray-900">Customer</th>
                <th className="pb-3 font-medium text-gray-900">Total</th>
                <th className="pb-3 font-medium text-gray-900">Status</th>
                <th className="pb-3 font-medium text-gray-900">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3">#ORD-001</td>
                <td className="py-3">John Doe</td>
                <td className="py-3">$299.99</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Delivered
                  </span>
                </td>
                <td className="py-3">Jan 15, 2024</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3">#ORD-002</td>
                <td className="py-3">Jane Smith</td>
                <td className="py-3">$199.99</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    Shipped
                  </span>
                </td>
                <td className="py-3">Jan 20, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Product Management</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-600">{product.description.slice(0, 50)}...</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 capitalize">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.stock > 10 
                        ? 'bg-green-100 text-green-800' 
                        : product.stock > 0 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div className="mb-8">
        <nav className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'products', label: 'Products' },
            { id: 'orders', label: 'Orders' },
            { id: 'customers', label: 'Customers' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'products' && renderProducts()}
      {activeTab === 'orders' && (
        <div className="text-center py-12">
          <p className="text-gray-600">Orders management coming soon...</p>
        </div>
      )}
      {activeTab === 'customers' && (
        <div className="text-center py-12">
          <p className="text-gray-600">Customer management coming soon...</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;