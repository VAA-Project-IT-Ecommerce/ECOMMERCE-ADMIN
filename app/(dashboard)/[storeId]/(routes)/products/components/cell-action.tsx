"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProductColums } from "./columns";
import { Button } from "@/components/ui/button";
import { CopyCheck, Edit2Icon, MoreHorizontal, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { AlertModal } from "@/components/modals/alert_modal";

interface CellActionProps {
  data: ProductColums;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Product Id copied to the clipboard.");
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/products/${data.id}`);
      router.refresh();
      toast.success("Product deleted.");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 hover:bg-gray-100 transition rounded-full shadow-sm"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4 text-gray-600" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white shadow-lg rounded-lg p-2 animate-fade-in"
        >
          <DropdownMenuLabel className="font-semibold text-gray-700">
            Actions
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => onCopy(data.id)}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition"
          >
            <CopyCheck className="h-4 w-4 text-blue-500" />
            <span>Coppy Id</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/${params.storeId}/products/${data.id}`)
            }
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition"
          >
            <Edit2Icon className="h-4 w-4 text-green-500" />
            <span>Update</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition"
          >
            <Trash2Icon className="h-4 w-4 text-red-500" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
