"use client";

import { MapPin, DollarSign, Clock, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function JobCard({
  company,
  logo,
  title,
  location,
  salary,
  type,
  posted,
  description,
}) {
  return (
    <>
      <Card className="rounded-lg border px-4 py-2 ">
        <div className="text-sm font-semibold text-[#333333] ">Promoted</div>

        <div className="flex items-center space-x-2 ">
          <div className="bg-[#FAFAFA] rounded-md border-[#fff] p-1 ">
            <Image
              src={logo || "/assets/icons/msTeams.png"}
              alt="Teams"
              width={24}
              height={24}
            />
          </div>
          <div>
            <div className="text-sm font-semibold">UI/UX Designer</div>
            <div className="text-xs text-muted-foreground">Teams</div>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-sm text-[#585D6E] ">
          <MapPin className="h-4 w-4 text-[#585D6E] " />
          <span>Seattle, USA (Remote)</span>
        </div>
        <div className="flex items-center space-x-1 text-xs text-[#585D6E]">
          <Clock className="h-4 w-4 text-[#585D6E]" />
          <span>
            1 day ago |{" "}
            <span className="text-[#0154AA] font-[500px] ">22 applicants</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <Button className="text-xs px-6 py-2 bg-[#0154AA] ">Apply Now</Button>
          <Bookmark className="h-6 w-6 text-[#AAAAAA] " />
        </div>
      </Card>
      {/*     
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={logo || "/placeholder.svg"} />
              <AvatarFallback>{company.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg leading-tight">{title}</h3>
              <p className="text-gray-600 text-sm">{company}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {posted}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-green-600 font-medium">
              <DollarSign className="w-4 h-4 mr-1" />
              {salary}
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {type}
            </div>
          </div>

          {description && <p className="text-sm text-gray-600 line-clamp-2">{description}</p>}

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
        </div>
      </CardContent>
    </Card> */}
    </>
  );
}
