import { Search, Bell, MessageSquare, ChevronDown, Plus, RotateCcw, Circle } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">L</span>
            </div>
            <span className="font-semibold text-lg">logo</span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-4 border-b border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/profile-image.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium">Allen Moreno</div>
              <div className="text-blue-200 text-sm">Premium user</div>
            </div>
          </div>
        </div>

        {/* Main Menu */}
        <div className="flex-1 px-6 py-6">
          <div className="text-blue-200 text-sm font-medium mb-4">Main Menu</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-white bg-blue-700 rounded-lg px-3 py-2">
              <Circle className="w-4 h-4" />
              <span>Product</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 text-sm">Help : +050 2992 709</span>
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=20&width=30" alt="US Flag" className="w-5 h-4" />
                <span className="text-gray-700">English</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Here"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Notifications */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    1
                  </span>
                </div>
                <div className="relative">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-sm">Pr</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            {/* Product List Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-gray-800">Product List</h1>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-medium">
                  <Plus className="w-4 h-4" />
                  <span>New Product</span>
                </button>
                <button className="flex items-center space-x-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg">
                  <RotateCcw className="w-4 h-4" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product ID</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Image</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Empty state - you can add product rows here */}
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No products found. Click "New Product" to add your first product.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
