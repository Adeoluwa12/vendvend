export interface Vendor {
    id: string;
    name: string;
    whatsappId?: string;
    products: { id: string; name: string; category: string; stock: number }[];
    orders: { id: string; date: string; status: string; total: number }[];
    customers: { id: string; type: 'new' | 'recurring' | 'one-time'; date: string }[];
    finance: { date: string; income: number; profit: number }[];
  }
  
  export const vendors: Vendor[] = [
    {
      id: 'v1',
      name: 'Vendor One',
      products: [
        { id: 'p1', name: 'iPhone 14', category: 'electronics', stock: 10 },
        { id: 'p2', name: 'AirPods', category: 'electronics', stock: 25 },
      ],
      orders: [
        { id: 'o1', date: '2025-09-15', status: 'fulfilled', total: 1200 },
        { id: 'o2', date: '2025-09-15', status: 'unfulfilled', total: 300 },
      ],
      customers: [
        { id: 'c1', type: 'new', date: '2025-09-15' },
        { id: 'c2', type: 'recurring', date: '2025-09-14' },
      ],
      finance: [
        { date: '2025-09-15', income: 1500, profit: 500 },
        { date: '2025-09-14', income: 2000, profit: 800 },
      ],
    },
    {
      id: 'v2',
      name: 'Vendor Two',
      products: [
        { id: 'p3', name: 'Nike Shoes', category: 'footwear', stock: 15 },
      ],
      orders: [
        { id: 'o3', date: '2025-09-15', status: 'fulfilled', total: 400 },
      ],
      customers: [
        { id: 'c3', type: 'new', date: '2025-09-15' },
      ],
      finance: [
        { date: '2025-09-15', income: 400, profit: 120 },
      ],
    },
    
    {
      id: 'v3',
      name: 'Vendor Three',
      whatsappId: '1234567890',
      products: [
        { id: 'p4', name: 'Samsung Galaxy S23', category: 'electronics', stock: 8 },
        { id: 'p5', name: 'Bluetooth Speaker', category: 'electronics', stock: 20 },
      ],
      orders: [
        { id: 'o4', date: '2025-09-14', status: 'fulfilled', total: 900 },
        { id: 'o5', date: '2025-09-13', status: 'fulfilled', total: 150 },
      ],
      customers: [
        { id: 'c4', type: 'one-time', date: '2025-09-14' },
        { id: 'c5', type: 'recurring', date: '2025-09-13' },
      ],
      finance: [
        { date: '2025-09-14', income: 900, profit: 300 },
        { date: '2025-09-13', income: 150, profit: 50 },
      ],
    },
    {
      id: 'v4',
      name: 'Vendor Four',
      products: [
        { id: 'p6', name: 'Organic Honey', category: 'grocery', stock: 40 },
        { id: 'p7', name: 'Almonds', category: 'grocery', stock: 60 },
      ],
      orders: [
        { id: 'o6', date: '2025-09-15', status: 'unfulfilled', total: 80 },
        { id: 'o7', date: '2025-09-12', status: 'fulfilled', total: 200 },
      ],
      customers: [
        { id: 'c6', type: 'new', date: '2025-09-15' },
        { id: 'c7', type: 'recurring', date: '2025-09-12' },
      ],
      finance: [
        { date: '2025-09-15', income: 80, profit: 20 },
        { date: '2025-09-12', income: 200, profit: 70 },
      ],
    },
    {
      id: 'v5',
      name: 'Vendor Five',
      whatsappId: '9876543210',
      products: [
        { id: 'p8', name: 'Yoga Mat', category: 'fitness', stock: 30 },
        { id: 'p9', name: 'Dumbbells', category: 'fitness', stock: 12 },
      ],
      orders: [
        { id: 'o8', date: '2025-09-13', status: 'fulfilled', total: 300 },
        { id: 'o9', date: '2025-09-11', status: 'fulfilled', total: 180 },
      ],
      customers: [
        { id: 'c8', type: 'one-time', date: '2025-09-13' },
        { id: 'c9', type: 'new', date: '2025-09-11' },
      ],
      finance: [
        { date: '2025-09-13', income: 300, profit: 100 },
        { date: '2025-09-11', income: 180, profit: 60 },
      ],
    },
  ];
  