"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ProfileCard() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      {/* profile */}
      <Card className="w-full rounded-md max-w-sm overflow-hidden  border-none shadow-none ">
        {/* Header Image with Profile Avatar */}
        <div className="relative">
          <div className="h-24 bg-gradient-to-r from-blue-400 to-purple-500">
            <img
              src="/assets/images/cover.jpg"
              alt="Header background"
              className="w-full h-full object-cover"
            />
          </div>
          <Avatar className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-white">
            <AvatarImage src="/assets/images/avatar1.png" />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
        </div>

        <CardHeader className="text-center">
          <h3 className="font-semibold text-lg text-gray-900">Albert Flores</h3>
          <p className="text-sm text-gray-600 leading-tight">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500 ">
            Clinton, Maryland
          </div>
        </CardHeader>
      </Card>

      {/* visitor */}
      <Card className="mt-3 px-4 py-2 rounded-md border-none shadow-none ">
        <div>
          {/* Desktop Stats - Always visible on desktop */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#333333]">Profile Visitors</span>
              <span className="text-sm font-semibold text-[#0154AA]">140</span>
            </div>
            <Separator className="text-[#E9ECEF] " />
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#333333]">Resume Viewers</span>
              <span className="text-sm font-semibold text-[#0154AA]">20</span>
            </div>
            <Separator className="text-[#E9ECEF] " />
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#333333]">My Jobs</span>
              <span className="text-sm font-semibold text-[#0154AA]">88</span>
            </div>
          </div>
        </div>
      </Card>

      {/* calendar */}
      <Card className="mt-3 px-4 py-2 rounded-md border-none shadow-none ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <div>
            <p className="text-sm font-medium text-gray-700">My calendar</p>
            <p className="text-xs text-gray-500">Upcoming Interviews</p>
          </div>

          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              showCalendar ? "rotate-180" : ""
            }`}
          />
        </div>
        {showCalendar && (
          <div className="mt-4">
      <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              inline
              className="rounded-md border"
            />
          </div>
        )}
      </Card>
    </>
  );
}
