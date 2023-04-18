import React from "react";
import AppSider from "../Navigation/AppSider";
import QuickSearch from "../QuickSearch/QuickSearch";


function Dashboard() {
  return (
    <div>
      <QuickSearch />
      <AppSider />
    </div>
  );
}

export default Dashboard;
