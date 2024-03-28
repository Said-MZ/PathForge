"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
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

export function RoadmapsFilter() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("all");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://hackthon-ysxk.onrender.com/categories"
      );
      const data = await response.json();
      setCategories(data.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex gap-4 justify-center items-center z-20">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {name ? name : "Select category..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category: any) => (
                <CommandItem
                  key={category.name}
                  value={category.name}
                  onSelect={(currentValue) => {
                    setName(currentValue === name ? "" : currentValue);
                    setSelectedCategory(category.id);
                    setOpen(false);
                  }}
                >
                  {category.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      name.toLocaleLowerCase() === category.name.toLowerCase()
                        ? "opacity-100"
                        : "opacity-0"
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
