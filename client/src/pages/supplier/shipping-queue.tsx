import ShippingtableComponent from "@/components/supplierComponent/Shippingtable.Component";
import ShippingQueueComponent from "@/components/supplierComponent/shippingqueue.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ShippingQueue = () => {
  return (
    <SupplierWrapper>
      <>
        <ShippingQueueComponent />
        <ShippingtableComponent />
      </>
    </SupplierWrapper>
  )
}

export default ShippingQueue;