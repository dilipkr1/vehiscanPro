export const packageColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "package",
    headerName: "Packages Name",
    width: 230,
  },
  {
    field: "validity",
    headerName: "Validity",
    width: 230,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "subscribe",
    width: 150,
     headerName: 'Subscribe ', 
    renderCell: (params) => (
      <a href={params.value} target="_blank" rel="noopener noreferrer">subscribe now</a>
    )
  }
];


//temporary data
export const packageRows = [
  {
    id: 1,
    package: "On Demand Car Cleaning",
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
