/**
 * Third party module imports.
 */
const { Router } = require('express');

/**
 * Node core module imports.
 */
const path = require('path');

/**
 * Local module imports.
 */
const shopController = require('../controllers/shop');

const router = new Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);

module.exports = router;