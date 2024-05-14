import CatalogIcon from "@/assets/svgIcons/catalog.svg";
import DashboardIcon from "@/assets/svgIcons/dashboard.svg";
import InventoryIcon from "@/assets/svgIcons/inventory.svg";
import OrdersIcon from "@/assets/svgIcons/orders.svg";
import PaymentsIcon from "@/assets/svgIcons/payments.svg";
import PerformanceIcon from "@/assets/svgIcons/performance.svg";
import ShipmentIcon from "@/assets/svgIcons/shipment.svg";
import { AppBarComponent } from "@/components/common/appBar";
import { Sidebar } from "@/components/common/sideBar";
import ManageInventoryComponent from "@/components/supplierComponent/manageinventory.component";
import ManagetableComponent from "@/components/supplierComponent/managetable.component";
import "../../components/supplierComponent/supplierStyle.scss";

const dummyList = [
    {
        to: "/dashboard/home",
        icon: DashboardIcon,
        title: "Dashboard",
    },
    {
        to: "/inventory",
        icon: InventoryIcon,
        title: "Inventory",
        subBtn: ["All Inventory", "Shipments", "Analytics"],
    },
    {
        to: "/catalog",
        icon: CatalogIcon,

        title: "Catalog",
        subBtn: ["Add Product", "Selling Application"],
    },
    {
        to: "/orders",
        icon: OrdersIcon,
        title: "Orders",
        subBtn: ["Manage Orders", "Manage Returns", "Manage Claim"],
    },

    {
        to: "/shipments",
        icon: ShipmentIcon,

        title: "Shipments",
    },
    {
        to: "/performance",
        icon: PerformanceIcon,

        title: "Performance",
        subBtn: ["Store Analytic", "Store Review"],
    },
    {
        to: "/payments",
        icon: PaymentsIcon,
        title: "Payments",
    },
];

const ManageInventory = () => {
    return (
        <div>
            <Sidebar dummyList={dummyList} />
            <AppBarComponent />
            <main>
                <ManageInventoryComponent />
                <ManagetableComponent />
            </main>
        </div>
    )
}

export default ManageInventory;