import Widgets from "@/components/supplierComponent/Widgets";
import Chart from "@/components/supplierComponent/chart";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";

export const SupplierDashboard = () => {
  return (
    <SupplierWrapper>
      <>
        <Widgets />
        <Chart />
        <TableComponent />
      </>
    </SupplierWrapper>
  );
};
