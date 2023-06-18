function getOrderDetails() {
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
  
    if (orderDetails) {
      const subList = document.getElementById('sub-list');
      const subtotal = document.getElementById('subtotal');
      const discount = document.getElementById('discount');
      const total = document.getElementById('total');
  
      subList.innerHTML = '';
      subtotal.textContent = 'Subtotal: $0.00';
      discount.textContent = 'Discount: $0.00';
      total.textContent = 'Total: $0.00';
  
      let subTotalAmount = 0;
  
      orderDetails.subs.forEach((sub, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Sub ${index + 1}: ${sub.name}, Bread: ${sub.bread}, Toppings: ${sub.toppings.join(', ')}, Sauce: ${sub.sauce}`;
        subList.appendChild(listItem);
        subTotalAmount += parseFloat(sub.cost);
      });
  
      subtotal.textContent = `Subtotal: $${subTotalAmount.toFixed(2)}`;
  
      if (orderDetails.discount) {
        const discountAmount = subTotalAmount * (orderDetails.discount / 100);
        const discountedTotal = subTotalAmount - discountAmount;
  
        discount.textContent = `Discount: $${discountAmount.toFixed(2)}`;
        total.textContent = `Total: $${discountedTotal.toFixed(2)}`;
      } else {
        total.textContent = `Total: $${subTotalAmount.toFixed(2)}`;
      }
    }
  }
  
  function applyCoupon(event) {
    event.preventDefault();
    const couponCode = document.getElementById('coupon-code').value;
  
    if (couponCode === 'EXAMPLE') {
      const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
  
      orderDetails.discount = 10;
  
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
  
      getOrderDetails();
    } else {
      console.log('Invalid coupon code');
    }
  }
  
  document.getElementById('coupon-form').addEventListener('submit', applyCoupon);
  
  getOrderDetails();