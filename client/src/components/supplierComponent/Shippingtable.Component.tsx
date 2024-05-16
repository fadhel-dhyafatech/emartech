import PaginationComponent from "../common/pagination"

const ShippingtableComponent = () => {
    const TableData = [
        {
            ShipmentName: "STA (04/02/2024 22:20)-ORF2",
            ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
            LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
            Date: "Apr 2, 20243: 20 PM",
            ShipTo: "Ahmed",
            status: "Closed",
            className: "Closed"


        },
        {
            ShipmentName: "STA (04/02/2024 22:20)-ORF2",
            ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
            LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
            Date: "Apr 2, 20243: 20 PM",
            ShipTo: "Ahmed",
            status: "Pending",
            className: "Pending"


        },
        {
            ShipmentName: "STA (04/02/2024 22:20)-ORF2",
            ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
            LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
            Date: "Apr 2, 20243: 20 PM",
            ShipTo: "Ahmed",
            status: "Delivered",
            className: "Delivered"


        },
        {
            ShipmentName: "STA (04/02/2024 22:20)-ORF2",
            ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
            LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
            Date: "Apr 2, 20243: 20 PM",
            ShipTo: "Ahmed",
            status: "Pending",
            className: "Pending"


        }]
    return (
        <div className="table-manage">
            <div className="responsive-table">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                Shipment Name
                                <span>Shipment ID, Reference ID</span>
                            </th>
                            <th>
                                Created
                            </th>
                            <th>
                                Last Updated
                            </th>
                            <th>
                                Ship To
                            </th>
                            <th>
                                Unit Expected
                                <span>Units located</span>
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Next Steps
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableData.map((item, i) => (
                            <tr>
                                <td>
                                    {item.ShipmentName}
                                    <span>{item.ShipmentNamespan}</span>
                                </td>

                                <td>
                                    {item.Date}
                                </td>
                                <td>
                                    {item.LastUpdated}
                                </td>
                                <td>
                                    {item.ShipTo}
                                </td>
                                <td>

                                    7
                                    <span>7</span>

                                </td>
                                <td>
                                    <button className={`button ${item.status}`}>{item.status}</button>
                                </td>
                                <td >
                                    <div className="d-flex align-items-center gap-3">


                                        <select className="form-select track-shipment" aria-label="Default select example">
                                            <option selected>Track Shipment</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <PaginationComponent />
            <p className="mt-3">* Please note that you may have an obligation to self report and pay sales and use, property, income, and other taxes/fees imposed by the states
                and localities where your inventory is located.</p>
        </div>
    )
}

export default ShippingtableComponent
