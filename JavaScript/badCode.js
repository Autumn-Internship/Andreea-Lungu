// PLEASE BE ADVISED THIS IS AN IMPROV CODE :D 
// refactor, using 10 best practices


//use let instead of var
let customerInfo = {
    address: 'Calea X 26',
  };
  
  function processOrder(customerInfo, basket, options) {
    //use names for boolean values
    const isValidateAddress = vldAddr(customerInfo.address);
    
    if (validateAddress === false) {
      return;
    }
  
    applyDiscount(basket.totalPrice);
  
    if (options.paymentMethod.cash) {
      pay(customerInfo.creditCard);
    }
    //use template literals
    return 'Dear ${customerInfo.name} you order has been placed successfully. Carrier service: ${options.carrier}';
  }
  
  function pay(cardDetails) {
    //names should be camelCase
    validateCardDetails(cardDetails);
    const status = makePayment();  

    //use strict equality operator
    // use ternary operator
      status === 'ok'? true
      :status ==='wrong input'? false
      :status === 'network err'?  new Error('some error :(')
      :("Status not found");
  }

  //names should be camelCase
  function validateCardDetails(card) {
    if (card.expiryDate > Date.now()) {
      validateName();
      validateCardNumber();
      validateIssuer();
      validateMerchant();
      // some random code, don't mind
      maxLength = Math.max.apply(null, cardType.lengths);
      if (options.maxLength) {
        maxLength = Math.min(options.maxLength, maxLength);
      }
    } else {
      return false;
    }
  }
  
  function vldAddr(address) {
    return postalCode ? postalCode : adress.line1;
  }
  
  function applyDiscount(basket) {
    if (basket.price > 200) {
      if (basket.coupons) {
        if (basket.coupons.tenOff) {
          totalPrice -= 10/100 * totalPrice;
        }
      }
    } else {
      return basket.price;
    }
  }