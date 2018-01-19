import React from "react";
// Import React Table
import ReactTable from "react-table";
import 'react-table/react-table.css';
import Topbar from '../Topbar';
import FootBar from '../Footbar';
import Button from '../Utils/Button';

require('styles/productTable.scss');

class ProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          "serviceName": "Maid",
          "Daily": "100",
          "Weekly": "500",
          "Monthly": "1500",
          "Quarterly": "4000",
          "Yearly": "17000",
        },
        {
          "serviceName": "Cook",
          "Daily": "100",
          "Weekly": "500",
          "Monthly": "1500",
          "Quarterly": "4000",
          "Yearly": "17000",
        },
        {
          "serviceName": "Driver",
          "Daily": "300",
          "Weekly": "2100",
          "Monthly": "8400",
          "Quarterly": "25200",
          "Yearly": "100800",
        },
        {
          "serviceName": "Security Guard",
          "Daily": "250",
          "Weekly": "1700",
          "Monthly": "6800",
          "Quarterly": "20400",
          "Yearly": "81600",
        },
        {
          "serviceName": "Attendant(Aya)",
          "Daily": "225",
          "Weekly": "1575",
          "Monthly": "6300",
          "Quarterly": "18900",
          "Yearly": "75600",
        },
        {
          "serviceName": "Care assistance ( Semi trained aya)",
          "Daily": "250",
          "Weekly": "1750",
          "Monthly": "7000",
          "Quarterly": "21000",
          "Yearly": "84000",
        },
        {
          "serviceName": "Nurse",
          "Daily": "400",
          "Weekly": "2800",
          "Monthly": "11200",
          "Quarterly": "33600",
          "Yearly": "134400",
        },
        {
          "serviceName": "Physiotherapist",
          "Daily": "500",
          "Weekly": "3500",
          "Monthly": "14000",
          "Quarterly": "42000",
          "Yearly": "168000",
        },
        {
          "serviceName": "Masseur",
          "Daily": "250",
          "Weekly": "1750",
          "Monthly": "7000",
          "Quarterly": "21000",
          "Yearly": "84000",
        },
        {
          "serviceName": "Grocery help(Will help you with your daily shopping)",
          "Daily": "50",
          "Weekly": "350",
          "Monthly": "1400",
          "Quarterly": "4200",
          "Yearly": "16800",
        },
        {
          "serviceName": "Banking assitance",
          "Daily": "100",
          "Weekly": "700",
          "Monthly": "2800",
          "Quarterly": "8400",
          "Yearly": "33600",
        },
        {
          "serviceName": "Bill payments and recharges",
          "Daily": "100",
          "Weekly": "NA",
          "Monthly": "NA",
          "Quarterly": "NA",
          "Yearly": "NA",
        },
        {
          "serviceName": "Telephone and computer asssistance",
          "Daily": "50",
          "Weekly": "350",
          "Monthly": "1400",
          "Quarterly": "4200",
          "Yearly": "16800",
        },
        {
          "serviceName": "Asset management services",
          "Daily": "as per need",
          "Weekly": "as per need",
          "Monthly": "as per need",
          "Quarterly": "as per need",
          "Yearly": "as per need",
        },
        {
          "serviceName": "Ambulance services",
          "Daily": "as per need",
          "Weekly": "as per need",
          "Monthly": "as per need",
          "Quarterly": "as per need",
          "Yearly": "as per need",
        },
        {
          "serviceName": "Hospitalization services",
          "Daily": "as per need",
          "Weekly": "as per need",
          "Monthly": "as per need",
          "Quarterly": "as per need",
          "Yearly": "as per need",
        },
        {
          "serviceName": "Insurance assiatance",
          "Daily": "150",
          "Weekly": "NA",
          "Monthly": "NA",
          "Quarterly": "NA",
          "Yearly": "NA",
        },
        {
          "serviceName": "Post surgey assistance",
          "Daily": "as per need",
          "Weekly": "as per need",
          "Monthly": "as per need",
          "Quarterly": "as per need",
          "Yearly": "as per need",
        },
        {
          "serviceName": "Self health monitoring assistance",
          "Daily": "200",
          "Weekly": "NA",
          "Monthly": "NA",
          "Quarterly": "NA",
          "Yearly": "NA",
        },
      ],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="productTable">
        <Topbar />
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Our Services",
              columns: [
                {
                  Header: "Service",
                  accessor: "serviceName",
                  width: 300,
                },
                {
                  Header: "Daily Charge",
                  accessor: "Daily",
                },
                {
                  Header: "Weekly Charge",
                  accessor: "Weekly",
                },
                {
                  Header: "Monthly Charge",
                  accessor: "Monthly",
                },
                {
                  Header: "Quarterly Charge",
                  accessor: "Quarterly",
                },
                {
                  Header: "Yearly Charge",
                  accessor: "Yearly",
                },
              ],
            },
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        <Button
          className="contactusButton"
          link="/#contactus"
          label="Contact Us"
        />
        <FootBar />
      </div>
    );
  }
}

export default ProductTable;
