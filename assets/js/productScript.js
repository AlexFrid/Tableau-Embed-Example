//Tableau Embed function
function initViz() {
  url = "https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/Superstoreforembeded/ProfitRatio",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "70px",
  };
  viz = new tableau.Viz(tabProfitRatio, url, options);

  url = "https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/Superstoreforembeded/SalesperCustomer",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "70px",
  };
  viz = new tableau.Viz(tabSalesPerCustomer, url, options);


  url = "https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/Superstoreforembeded/ProfitperOrder",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "70px",
  };
  viz = new tableau.Viz(tabProfitPerOrder, url, options);

  url = "https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/Superstoreforembeded/Avg_Discount",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "70px",
  };
  viz = new tableau.Viz(tabAvgDiscount, url, options);

  url = "https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/Superstoreforembeded/Product",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "800px",
  };
  viz = new tableau.Viz(tabProduct, url, options);

}
