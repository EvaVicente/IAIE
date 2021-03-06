const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const controllerPurchases = require('../Controllers/PurchasesController');

// Visualizar PurchaseOrder
router.get('/purchases', function (req, res) {
    controllerPurchases.listPurchases(req, res)
});

module.exports = router;