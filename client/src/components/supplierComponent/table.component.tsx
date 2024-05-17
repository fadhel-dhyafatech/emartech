import { useState } from "react";
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
    const itemsPerPage = 4; // Set items per page
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = TableData.slice(indexOfFirstItem, indexOfLastItem);
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
                        {currentItems.map((item, i) => (
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
            <PaginationComponent
                count={Math.ceil(TableData.length / itemsPerPage)}
                page={currentPage}
                onPageChange={handlePageChange} />
        </div>
    )
}

export default TableComponent;