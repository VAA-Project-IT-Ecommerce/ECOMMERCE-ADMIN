"use client";
import { Store } from "@prisma/client";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, PlusCircleIcon, StoreIcon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  className,
  items = [],
}: StoreSwitcherProps) {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();
  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    (item) => item.value === params.storeId
  );
  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn(
            "w-[200px] justify-between bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-shadow shadow-sm rounded-lg",
            className
          )}
        >
          <StoreIcon className="mr-2 h-5 w-5 text-indigo-600" />
          {currentStore?.label || "Select Store"}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
        <Command>
          <CommandInput
            placeholder="Search store..."
            className="p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
          <CommandList>
            <CommandEmpty className="dark:text-gray-400">
              No store found
            </CommandEmpty>
            <CommandGroup heading="Stores" className="dark:text-gray-300">
              {formattedItems.map((store) => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelect(store)}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition"
                >
                  <div className="flex items-center">
                    <StoreIcon className="mr-2 h-4 w-4 text-indigo-600" />
                    <span className="dark:text-white">{store.label}</span>
                  </div>
                  <Check
                    className={cn(
                      "h-4 w-4 text-indigo-600",
                      currentStore?.value === store.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator className="my-2 border-t border-gray-200 dark:border-gray-700" />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storeModal.onOpen();
                }}
                className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition"
              >
                <PlusCircleIcon className="mr-2 h-5 w-5 text-green-500" />
                <span className="dark:text-white">Create Store</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
