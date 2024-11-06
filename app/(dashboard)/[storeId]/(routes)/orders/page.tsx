import prismadb from "@/lib/prismadb";
import { OrderClient } from "./components/client";
import { OrderColums } from "./components/columns";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";
const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: { product: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedOrders: OrderColums[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    products: item.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, orderItem) => {
        return total + Number(orderItem.product.price);
      }, 0) // Đảm bảo khởi tạo `total` là 0
    ),
    isPaid: item.isPaid,
    createAt: format(item.createdAt, "MMM do, yyyy"), // Chỉnh lại `createdAt`
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};
export default OrdersPage;
