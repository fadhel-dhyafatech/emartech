import PaginationComponent from "./pagination-component";

const TableComponent = () => {
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
                        <tr>
                            <td>
                                CUK-21500031-COC
                            </td>
                            <td>
                                19/03/2024 18:51:59
                            </td>
                            <td>
                                AED 1,225.09
                            </td>
                            <td>
                                VISA
                            </td>
                            <td>
                                Shipped
                            </td>
                            <td className="d-flex justify-content-between">
                                CC189259091BE
                                <button className="view-button">View Detail</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                CUK-21500031-COC
                            </td>
                            <td>
                                19/03/2024 18:51:59
                            </td>
                            <td>
                                AED 1,225.09
                            </td>
                            <td>
                                VISA
                            </td>
                            <td>
                                Shipped
                            </td>
                            <td className="d-flex justify-content-between">
                                CC189259091BE
                                <button className="view-button">View Detail</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PaginationComponent />
        </div>
    )
}

export default TableComponent;