"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const vendorsDemo_1 = require("../data/vendorsDemo");
const router = express.Router();
// Helper: find vendor by id or whatsappId
function findVendorById(id) {
    return vendorsDemo_1.vendors.find(v => v.id === id);
}
function findVendorByWhatsapp(waId) {
    return vendorsDemo_1.vendors.find(v => v.whatsappId === waId);
}
// 1️⃣ Get vendor by WhatsApp ID
router.get('/by-whatsapp/:whatsappId', (req, res) => {
    const vendor = findVendorByWhatsapp(req.params.whatsappId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not linked' });
    res.json({ vendor_id: vendor.id, name: vendor.name });
});
// 2️⃣ Link WhatsApp
router.post('/:vendorId/link-whatsapp', (req, res) => {
    const vendor = findVendorById(req.params.vendorId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not found' });
    const { whatsappId } = req.body;
    if (!whatsappId)
        return res.status(400).json({ error: 'whatsappId required' });
    vendor.whatsappId = whatsappId;
    res.json({ success: true, vendor_id: vendor.id });
});
// 3️⃣ Inventory endpoints
router.get('/:vendorId/products/:productId/stock', (req, res) => {
    const vendor = findVendorById(req.params.vendorId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not found' });
    const product = vendor.products.find(p => p.id === req.params.productId);
    if (!product)
        return res.status(404).json({ error: 'Product not found' });
    res.json({ productId: product.id, stock: product.stock });
});
router.get('/:vendorId/products', (req, res) => {
    const vendor = findVendorById(req.params.vendorId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not found' });
    const { category } = req.query;
    const filtered = category ? vendor.products.filter(p => p.category === category) : vendor.products;
    res.json({ products: filtered });
});
router.get('/:vendorId/low-stock', (req, res) => {
    const vendor = findVendorById(req.params.vendorId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not found' });
    const threshold = Number(req.query.threshold ?? 5);
    const low = vendor.products.filter(p => p.stock <= threshold);
    res.json({ lowStock: low });
});
// 4️⃣ Orders
router.get('/:vendorId/orders/count', (req, res) => {
    const vendor = findVendorById(req.params.vendorId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not found' });
    const { status, from, to } = req.query;
    let filtered = vendor.orders;
    if (status)
        filtered = filtered.filter(o => o.status === status);
    if (from)
        filtered = filtered.filter(o => o.date >= from);
    if (to)
        filtered = filtered.filter(o => o.date <= to);
    res.json({ count: filtered.length });
});
// 5️⃣ Customers
router.get('/:vendorId/customers/count', (req, res) => {
    const vendor = findVendorById(req.params.vendorId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not found' });
    const { type, from, to } = req.query;
    let filtered = vendor.customers;
    if (type)
        filtered = filtered.filter(c => c.type === type);
    if (from)
        filtered = filtered.filter(c => c.date >= from);
    if (to)
        filtered = filtered.filter(c => c.date <= to);
    res.json({ count: filtered.length });
});
// 6️⃣ Finance
router.get('/:vendorId/finance/income', (req, res) => {
    const vendor = findVendorById(req.params.vendorId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not found' });
    const { from, to } = req.query;
    let filtered = vendor.finance;
    if (from)
        filtered = filtered.filter(f => f.date >= from);
    if (to)
        filtered = filtered.filter(f => f.date <= to);
    const income = filtered.reduce((sum, f) => sum + f.income, 0);
    res.json({ income });
});
router.get('/:vendorId/finance/profit', (req, res) => {
    const vendor = findVendorById(req.params.vendorId);
    if (!vendor)
        return res.status(404).json({ error: 'Vendor not found' });
    const { from, to } = req.query;
    let filtered = vendor.finance;
    if (from)
        filtered = filtered.filter(f => f.date >= from);
    if (to)
        filtered = filtered.filter(f => f.date <= to);
    const profit = filtered.reduce((sum, f) => sum + f.profit, 0);
    res.json({ profit });
});
exports.default = router;
