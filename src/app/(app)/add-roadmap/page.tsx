"use client";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
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

//temporary data
const roadmaps = [
  { id: 1, label: "اللغة العربية", value: "اللغة العربية" },
  { id: 2, label: "الرياضيات", value: "الرياضيات" },
  { id: 3, label: "العلوم", value: "العلوم" },
  { id: 4, label: "التاريخ", value: "التاريخ" },
  { id: 5, label: "الجغرافيا", value: "الجغرافيا" },
  { id: 6, label: "الفيزياء", value: "الفيزياء" },
];
//_________________________________________________________

const AddRoadmapPage = () => {
  const [blocks, setBlocks] = useState<number>(1);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [selectedId, setSelectedId] = useState(0);
  return (
    <main className="grid place-items-center h-screen w-full pt-36 ">
      <Button variant="secondary" className="absolute top-20 left-4">
        <Link
          href="/"
          className="flex justify-center items-center gap-1 hover:gap-2 transition-all"
        >
          <IoIosArrowBack className="w-5 h-5" />
          <span>الصفحة الرئيسية</span>
        </Link>
      </Button>
      <h1 className="text-4xl font-bold text-center">إضافة خريطة تعلم</h1>
      <form className="flex flex-col gap-4 text-right mt-6 w-full max-w-xl px-6 py-8">
        <Label htmlFor="name">عنوان الخريطة</Label>
        <Input
          type="text"
          id="name"
          placeholder="عنوان الخريطة"
          required
          className="text-right"
        />
        <Label htmlFor="category">التصنيف</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            asChild
            className="flex flex-row-reverse justify-stretch items-center"
          >
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between pr-2 pl-0"
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
        <Label htmlFor="blocks">عدد المراحل</Label>
        <Input
          type="number"
          id="blocks"
          placeholder="عدد المراحل"
          required
          className="text-right"
          min={1}
          max={25}
          value={blocks}
          onChange={(e) => setBlocks(parseInt(e.target.value))}
        />

        <Label htmlFor="description">وصف الخريطة</Label>
        <Textarea
          id="description"
          placeholder="وصف الخريطة"
          required
          className="text-right"
        />
        {Array.from({ length: blocks }).map((_, index) => (
          <div key={index} className="flex flex-col gap-5 py-4">
            <div className="w-fill h-[1px] bg-neutral-200 dark:bg-neutral-700 my-4"></div>
            <h3 className="text-2xl font-bold text-center">
              المرحلة {index + 1}
            </h3>
            <Label htmlFor={`block-${index + 1}`}>
              عنوان المرحلة {index + 1}
            </Label>
            <Input
              type="text"
              id={`block-${index + 1}`}
              placeholder={`المرحلة ${index + 1}`}
              required
              className="text-right"
            />
            <Label htmlFor={`description-${index + 1}`}>
              وصف المرحلة {index + 1}
            </Label>
            <Textarea
              id={`description-${index + 1}`}
              placeholder={`وصف المرحلة ${index + 1}`}
              required
              className="text-right"
            />
            <Resources index={index} />
          </div>
        ))}
        <Button variant="default" className="w-full">
          إضافة خريطة
        </Button>
      </form>
    </main>
  );
};

export default AddRoadmapPage;

const Resources = ({ index }: { index: number }) => {
  const [level, setLevel] = useState<number>(1);

  return (
    <>
      <Label htmlFor={`resources-${index + 1}`}>عدد الموارد المتاحة</Label>
      <Input
        type="number"
        id={`resources-${index + 1}`}
        placeholder="عدد الموارد"
        required
        className="text-right"
        min={1}
        max={6}
        value={level}
        onChange={(e) => setLevel(parseInt(e.target.value))}
      />
      {Array.from({ length: level }).map((_, index) => (
        <div key={index} className="flex flex-col gap-5 py-4">
          <Label htmlFor={`resource-${index + 1}`}>
            عنوان المصدر {index + 1}
          </Label>
          <Input
            type="text"
            id={`resource-${index + 1}`}
            placeholder={`المصدر ${index + 1}`}
            required
            className="text-right"
          />

          <Label htmlFor={`link-${index + 1}`}>رابط المصدر {index + 1}</Label>
          <Input
            type="url"
            id={`link-${index + 1}`}
            placeholder="رابط المصدر"
            required
            className="text-right"
          />
        </div>
      ))}
    </>
  );
};
