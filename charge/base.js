const request = require('request');

async function visaChargeIntegration({fullName, number, cvv, expiration, totalAmount, firstName}) {
    const apiUrl = 'https://interview.riskxint.com/visa/api/chargeCard';
    const requestHeaders = {
        identifier: firstName
    };
    const requestBody = {fullName, number, cvv, expiration, totalAmount};
    const response = await request.post(
        apiUrl,
        requestHeaders,
        requestBody,
    );
    console.log('visaChargeIntegration response:', response);
    return response;
}

async function mastercardChargeIntegration({fullName, number, cvv, expiration, totalAmount, firstName}) {
    const apiUrl = 'https://interview.riskxint.com/mastercard/capture_card';
    const requestHeaders = {
        identifier: firstName
    };
    const requestBody = {fullName, number, cvv, expiration, totalAmount};
    const response = await request.post(
        apiUrl,
        requestHeaders,
        requestBody,
    );
    console.log('mastercardChargeIntegration response:', response);
    return response;
}

async function post(body, headers) {
    try {
        const {creditCardCompany, fullName, creditCardNumber, expirationDate, cvv, amount} = body;
        const merchantIdentifier = headers['merchant-identifier'];
        const firstName = fullName.split(' ')[0];
        let makeChargePromise;
        switch (creditCardCompany) {
            case 'visa':
                makeChargePromise = visaChargeIntegration({
                    fullName,
                    number: creditCardNumber,
                    cvv,
                    expiration: expirationDate,
                    totalAmount: amount,
                    firstName
                });
                break;
            case 'mastercard':
                makeChargePromise = mastercardChargeIntegration({
                    fullName,
                    number: creditCardNumber,
                    cvv,
                    expiration: expirationDate,
                    totalAmount: amount
                });
                break;
        }

        await makeChargePromise;
    } catch (error) {
        throw error;
    }
    console.log('post body:', body);
    return;
}

module.exports = {
    post
};
