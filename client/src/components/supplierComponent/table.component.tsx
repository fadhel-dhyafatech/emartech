import PaginationComponent from "../common/pagination";


const TableComponent = () => {
    const TableData = [
        {
            Referance: " CUK-21500031-COC",
            Date: "  19/03/2024 18:51:59",
            Amount: "     AED 1,225.09",
            Payment: "  VISA",
            Status: "   Shipped"


        },
        {
            Referance: " CUK-21500031-COC",
            Date: "  19/03/2024 18:51:59",
            Amount: "     AED 1,225.09",
            Payment: "  VISA",
            Status: "   Shipped"


        }]
    return (
        <div className="table-content">
            <h1>Recent Orders</h1>
            <div className="responsive-table">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                Referance
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Amount
                            </th>
                            <th>
                                Payment
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Order Tracking
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableData.map((item, i) => (
                            <tr>
                                <td>
                                    {item.Referance}
                                </td>
                                <td>
                                    {item.Date}
                                </td>
                                <td>
                                    {item.Amount}
                                </td>
                                <td>
                                    {item.Status}
                                </td>
                                <td>
                                    Shipped
                                </td>
                                <td className="d-flex justify-content-between">
                                    CC189259091BE
                                    <button className="view-button">View Detail</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <PaginationComponent />
        </div>
    )
}

export default TableComponent;