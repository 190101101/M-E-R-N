const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    customer: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    payment: {
        type: Number,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    amount: {
        type: Array,
        required: true,
    },
    timestamps: {
        required: true,
    },
});

const Bill = mongoose.model('bills', BillSchema);
module.exports = Bill;