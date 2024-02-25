export const packageColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "packageName",
    headerName: "Packages Name",
    width: 200,
  },
  {
    field: "packageTitle",
    headerName: "Title",
    width: 150,
  }, {
    field: "packageDescription",
    headerName: "Description",
    width: 120,
  }, {
    field: "packagePrice",
    headerName: "Price",
    width: 120,
  }, {
    field: "packageDiscount",
    headerName: "Discount",
    width: 80,
  }, {
    field: "packageImg",
    headerName: "Packages Image",
    width: 150,
    renderCell: (params) => (
      <img src={params.value} alt="Package Image" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
    ),
  },
];


//temporary data
export const packageRows = [
  {
    id: 1,
    package: "Daily Car Cleaning",
    validity: "365 days",
    price: "₹599/",
    subscribe: "https://wa.me/917300007462?text=Hello,I%20have%20a%20query%20for%20my%20Hatchback%20Car%20cleaning."

  },
  // {
  //   id: 2,
  //   package: "Platinum Sparkle",
  //   validity: "365 days",
  //   price: "₹1099/-",
  //   subscribe: "https://wa.me/917300007462?text=Hello,I%20have%20a%20query%20for%20my%20Hatchback%20Car%20cleaning."
  // },

  // {
  //   id: 4,
  //   package: "On Demand Car Cleaning",
  //   validity: "365 days",
  //   price: "₹599/",
  //   subscribe: "https://wa.me/917300007462?text=Hello,I%20have%20a%20query%20for%20my%20Hatchback%20Car%20cleaning."

  // } 
];
