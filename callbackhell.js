const customerRegister = (customerDetails) =>{
    setTimeout(()=>{
      let customer = {
        name: "kuldeep",
        age: 30,
        phone: 9343874384
      }
      console.log('customer details:', customer);
      customerDetails(customer);

    }, 2000);
}

const makeOrder = (customerDetails, makeOrder)=>{

    setTimeout(()=>{
        let order = {
            customer:{
               ...customerDetails 
            },
            orderNumber: 'PDISDI123',
            orderAmount: 20.35
        }
       console.log('order', order);
       makeOrder(order);
    }, 2000);

}

const orderPayment = (order, orderWithPayment)=>{
    setTimeout(()=>{
        let orderPayment = {
            orderDetails:{
                ...order
            },
            paymentID: 'PDISDI123343',
            paymentStatus: 'success'
        }

       console.log('orderPayment', orderPayment);
       orderWithPayment(orderPayment);

    }, 2000);

}


customerRegister((customerDetails)=>{
      makeOrder(customerDetails, (order)=>{
         orderPayment(order, (orderWithPayment)=>{
           console.log('orderWithPayment',orderWithPayment);
         });
      })
});


