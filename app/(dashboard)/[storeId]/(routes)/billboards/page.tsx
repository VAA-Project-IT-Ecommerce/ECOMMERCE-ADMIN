import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardColums } from "./components/columns";
import { format } from "date-fns";
const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedBillboards: BillboardColums[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createAt: format(item.createdAt, "MMM do, yyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};
export default BillboardsPage;
