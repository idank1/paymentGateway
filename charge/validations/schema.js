const chargeSchema = {
    fullName: {
        type: String,
        required: true
    },
    creditCardNumber: {
        type: String,
        required: true
    },
    creditCardCompany: {
        type: String,
        enum: ['visa', 'mastercard'],
        required: true
    },
    expirationDate: {
        type: String,
        required: true,
        post: (data, schema, fn) => {
            console.log('expirationDate:', data);
        }
    },
    cvv: {
        type: Number,
        required: true,
        range: '100-999'
    },
    amount: {
        type: Number,
        required: true,
    }
};

module.exports = {
    chargeSchema
};
