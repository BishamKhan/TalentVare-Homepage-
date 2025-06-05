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

export default function CustomSearch() {
  return (
    <div className="bg-white rounded-lg p-4 mb-8">
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        <Input
          placeholder="Job Title, Company, or Keywords"
          className="flex-1 border-none shadow-none focus:border-transparent"
        />
        <div className="border-l border-r border-l-[#E9ECEF] border-r-[#E9ECEF]">
          <Select>
            <SelectTrigger className="w-full lg:w-48 border-none shadow-none focus:border-transparent ">
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
          <SelectTrigger className="w-full lg:w-40 border-none shadow-none focus:border-transparent">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full-Time</SelectItem>
            <SelectItem value="part-time">Part-Time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full lg:w-auto text-center bg-[#0154AA] px-6 ">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
    // <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
    //   <div className="flex flex-col lg:flex-row gap-4">
    //     <div className="flex-1 relative">
    //       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    //       <Input placeholder="Job title, keywords, or company" className="pl-10 h-12 text-base" />
    //     </div>

    //     <div className="flex-1 relative">
    //       <Select>
    //         <SelectTrigger className="pl-10 h-12 text-base">
    //           <SelectValue placeholder="Select Location" />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
    //           <SelectItem value="new-york">New York, NY</SelectItem>
    //           <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
    //           <SelectItem value="chicago">Chicago, IL</SelectItem>
    //         </SelectContent>
    //       </Select>
    //     </div>

    //     <div className="flex gap-2">
    //       <Select>
    //         <SelectTrigger className="w-32 h-12">
    //           <SelectValue placeholder="Full Time" />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectItem value="full-time">Full Time</SelectItem>
    //           <SelectItem value="part-time">Part Time</SelectItem>
    //           <SelectItem value="contract">Contract</SelectItem>
    //           <SelectItem value="freelance">Freelance</SelectItem>
    //         </SelectContent>
    //       </Select>

    //       <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12">Search</Button>
    //     </div>
    //   </div>
    // </div>
  );
}
