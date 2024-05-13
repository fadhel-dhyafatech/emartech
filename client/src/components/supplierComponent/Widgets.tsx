import { Icon } from "@iconify/react/dist/iconify.js";
import { LineChart } from '@mui/x-charts/LineChart';
import image from "../../assets/images/Vector-img.svg";

const Widgets = () => {
    return (
        <div className="Widgets-content">
            <div className="row">
                <div className="col-lg-3">
                    <div className="Widgets-card">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <Icon icon="material-symbols:orders-outline-rounded" style={{ color: "white" }} width={20} height={20} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p>Sales</p>
                                <h2>245<span>This Month</span></h2>
                            </div>

                        </div>
                        <LineChart
                            xAxis={[{
                                data: [1, 2, 3, 5, 8, 10],
                                colorMap: {
                                    type: 'piecewise',
                                    thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                                    colors: ['#000']
                                }
                            }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={300}
                            height={100}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="Widgets-card">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <Icon icon="mynaui:users" style={{ color: "white" }} width={20} height={20} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p>Message</p>
                                <h2>10<span>New</span></h2>
                            </div>
                        </div>
                        <div className="arrow-div">
                            <Icon icon="lets-icons:arrow-right" style={{ color: "#000" }} width={15} height={15} />
                        </div>
                    </div>
                    <div className="Widgets-card">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <Icon icon="material-symbols:orders-outline-rounded" style={{ color: "white" }} width={20} height={20} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p>Orders</p>
                                <h2>24<span>New</span></h2>
                            </div>
                        </div>
                        <div className="arrow-div">
                            <Icon icon="lets-icons:arrow-right" style={{ color: "#000" }} width={15} height={15} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="Widgets-card">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img src={image} alt="img not found" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p>Balance</p>
                                <h2>456000<span>AED</span></h2>
                            </div>
                        </div>

                    </div>
                    <div className="Widgets-card">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <Icon icon="carbon:categories" style={{ color: "white" }} width={20} height={20} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p>Pending Orders</p>
                                <h2>14<span>New</span></h2>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="Widgets-card">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <Icon icon="ph:user-light" style={{ color: "white" }} width={20} height={20} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p>Inventory</p>
                                <h2>45<span>New</span></h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Widgets