"use client";

import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomSearch = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 mb-8">
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        <Input
          placeholder="Job Title, Company, or Keywords"
          className="flex-1 text-[#585D6E] text-sm border-none shadow-none focus:border-transparent"
        />
        <div className="border-l border-r border-l-[#E9ECEF] border-r-[#E9ECEF]">
          <Select>
            <SelectTrigger className="w-full lg:w-48 text-[#585D6E] text-sm border-none shadow-none focus:border-transparent ">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="berlin">Berlin</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select>
          <SelectTrigger className="w-full lg:w-40 text-[#585D6E] text-sm border-none shadow-none focus:border-transparent">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full-Time</SelectItem>
            <SelectItem value="part-time">Part-Time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full lg:w-auto text-center cursor-pointer bg-[#0154AA] hover:bg-[#0153aadc]">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default CustomSearch;
