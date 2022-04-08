import React from "react";

const Dashboard = ({ match: { params: { name } } }) => {
  console.log(name)
  return (
    <h1>Welcome, {name}!</h1>
  )
}

export default Dashboard;
