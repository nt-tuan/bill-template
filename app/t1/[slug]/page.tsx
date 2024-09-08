import React from "react";
import data from "./data.json";
import BillComponentLayout from "./bill-layout";

const BillComponent = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const bill = data.find((item) => item.orderId === slug);
  console.log({ bill });
  if (bill == null) throw new Error("not found");
  return <BillComponentLayout {...bill} />;
};

export default BillComponent;
