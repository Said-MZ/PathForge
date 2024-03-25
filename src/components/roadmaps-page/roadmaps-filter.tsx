"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const roadmaps = [
  { id: 1, label: "اللغة العربية", value: "اللغة العربية" },
  { id: 2, label: "الرياضيات", value: "الرياضيات" },
  { id: 3, label: "العلوم", value: "العلوم" },
  { id: 4, label: "التاريخ", value: "التاريخ" },
  { id: 5, label: "الجغرافيا", value: "الجغرافيا" },
  { id: 6, label: "الفيزياء", value: "الفيزياء" },
];

export function RoadmapsFilter() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div className="flex gap-4 justify-center items-center">
      <Button
        variant="default"
        className="w-[200px]"
        onClick={() => {
          console.log("value", value);
          console.log("selectedId", selectedId);
        }}
      >
        تصفية
      </Button>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          className="flex flex-row-reverse justify-stretch items-center"
        >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between pr-2 pl-0"
          >
            {value
              ? roadmaps.find((framework) => framework.value === value)?.label
              : "الكل"}

            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="ابحث عن خريطة تعلم" className="h-9" />
            <CommandEmpty>لا يوجد نتائج للبحث</CommandEmpty>
            <CommandGroup>
              {roadmaps.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setSelectedId(framework.id);
                  }}
                  className="flex flex-row-reverse justify-between items-between w-full"
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
