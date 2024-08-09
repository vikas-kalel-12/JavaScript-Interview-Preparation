const data = {
  orders: {
    schemaType: "orders",
    schemaTitle: "Orders",
    related: {},
  },
  delivery: {
    schemaType: "delivery",
    schemaTitle: "Delivery",
    related: {
      orderInformation: {
        schemaOverride: "orders",
      },
    },
  },
  transport: {
    schemaType: "transport",
    schemaTitle: "Transport",
    related: {
      deliveryInformation: {
        schemaOverride: "delivery",
      },
      orderItemInformation: {
        schemaOverride: "orderItem",
      },
    },
  },
  orderItem: {
    schemaType: "orderItem",
    schemaTitle: "Order Item",
    related: {},
  },
};

//output -> { delivery: [ 'orders' ], transport: [ 'delivery', 'orderItem' ] };

(function getTransformedObject() {
  const keys = Object.keys(data);
  const result = keys?.reduce((acc, current) => {
    const values = Object.values(data[current].related);
    if (values?.length > 0) {
      acc[current] = values?.map((value) => value.schemaOverride);
    }
    return acc;
  }, {});

  console.log(result, "result");
})();
