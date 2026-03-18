import React, { useState } from 'react';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    address: "123 Organic Street, Green Valley, Nature City, 400001",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const dummyOrders = [
    {
      id: "ORD-2023-1001",
      date: "12 Oct 2023",
      status: "Delivered",
      total: "₹ 1,250",
      items: ["Combo Ghee & Jaggery", "Tulsi Green Tea"]
    },
    {
      id: "ORD-2023-1145",
      date: "05 Nov 2023",
      status: "Processing",
      total: "₹ 850",
      items: ["Immunity Capsules"]
    },
    {
      id: "ORD-2023-1289",
      date: "20 Dec 2023",
      status: "Shipped",
      total: "₹ 2,100",
      items: ["Detox Program Kit", "Organic Amla Powder"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f3f1e5] py-12 px-4 sm:px-10 font-[Open Sans]">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-emerald-900 mb-8 font-[Montserrat]">My Profile</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Menu */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6">
            {/* User Intro Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold text-emerald-900 font-[Montserrat]">{userData.name}</h2>
              <p className="text-base text-gray-500 mt-2 font-[Open Sans]">{userData.phone}</p>
            </div>

            {/* Navigation Menu */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
              <button
                onClick={() => setActiveTab('details')}
                className={`w-full text-left px-6 py-4 font-medium transition-colors border-l-4 ${activeTab === 'details' ? 'bg-green-50 text-emerald-900 border-emerald-900' : 'text-gray-600 border-transparent hover:bg-gray-50'}`}
              >
                User Details
              </button>
              <div className="h-px bg-gray-100 w-full"></div>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-6 py-4 font-medium transition-colors border-l-4 ${activeTab === 'orders' ? 'bg-green-50 text-emerald-900 border-emerald-900' : 'text-gray-600 border-transparent hover:bg-gray-50'}`}
              >
                My Orders
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 min-h-[400px]">
              
              {/* User Details View */}
              {activeTab === 'details' && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-[Montserrat]">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-gray-500 font-medium">Full Name</span>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="name"
                          value={userData.name} 
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg text-gray-800 outline-none focus:border-green-600 bg-white"
                        />
                      ) : (
                        <p className="text-lg text-gray-800 py-2 border border-transparent">{userData.name}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-gray-500 font-medium">Email Address</span>
                      {isEditing ? (
                        <input 
                          type="email" 
                          name="email"
                          value={userData.email} 
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg text-gray-800 outline-none focus:border-green-600 bg-white"
                        />
                      ) : (
                        <p className="text-lg text-gray-800 py-2 border border-transparent">{userData.email}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-gray-500 font-medium">Phone Number</span>
                      {/* Phone is NOT editable as requested */}
                      <p className="text-lg text-gray-800 py-2 border border-transparent select-none bg-gray-50 rounded-md px-3">{userData.phone}</p>
                    </div>

                    <div className="flex flex-col gap-1 md:col-span-2">
                      <span className="text-sm text-gray-500 font-medium">Delivery Address</span>
                      {isEditing ? (
                        <textarea 
                          name="address"
                          value={userData.address} 
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg text-gray-800 outline-none focus:border-green-600 bg-white mt-2 resize-none"
                        />
                      ) : (
                        <p className="text-lg text-gray-800 bg-gray-50 p-4 rounded-lg mt-2 border border-gray-100 leading-relaxed min-h-[80px]">
                          {userData.address}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end gap-4">
                    {isEditing ? (
                      <>
                        <button 
                          onClick={() => setIsEditing(false)}
                          className="text-gray-600 hover:text-gray-900 border border-gray-300 bg-white hover:bg-gray-50 px-6 py-2.5 rounded-lg transition-colors font-medium"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={handleSave}
                          className="bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg transition-colors font-medium shadow-sm hover:shadow-md"
                        >
                          Save Changes
                        </button>
                      </>
                    ) : (
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg transition-colors font-medium shadow-sm hover:shadow-md"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Orders View */}
              {activeTab === 'orders' && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-[Montserrat]">Order History</h2>
                  
                  <div className="flex flex-col gap-4">
                    {dummyOrders.map((order, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-green-300 transition-colors shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-gray-100 pb-4">
                          <div>
                            <p className="text-sm text-gray-500">Order ID</p>
                            <p className="font-semibold text-emerald-900">{order.id}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Date</p>
                            <p className="font-medium text-gray-800">{order.date}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Total Amount</p>
                            <p className="font-medium text-gray-800">{order.total}</p>
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'Processing' ? 'bg-amber-100 text-amber-800' : 
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Items in this order:</p>
                          <ul className="list-disc list-inside text-sm text-gray-600 flex flex-col gap-1">
                            {order.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <button className="text-emerald-700 hover:text-emerald-900 font-medium text-sm underline underline-offset-4">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
