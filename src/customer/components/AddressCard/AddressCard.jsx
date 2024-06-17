import { Button, Grid } from "@mui/material";
import React from "react";

function AddressCard() {
  return (
    <>
      <div className="space-y-3">
        <p className="font-semibold">Isha Kandhare</p>
        <p>Pune, Hiras Nagar, 412115</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>9860543581</p>
        </div>

      </div>
    </>
  );
}

export default AddressCard;
