"use client";

import { MapPin, DollarSign, Clock, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const JobCard = ({
  company,
  logo,
  location,
  posted,
}) => {
  return (
    <Card className="rounded-lg border px-4 py-2">
      <div className="space-y-3">
        <div className="text-xs font-semibold text-[#333333]">Promoted</div>

        <div className="flex items-center space-x-2">
          <div className="bg-[#FAFAFA] rounded-md border-[#fff] p-1">
            <Image
              src={logo || "/assets/icons/msTeams.png"}
              alt="Teams"
              width={24}
              height={24}
            />
          </div>
          <div>
            <div className="text-sm text-[#333333] font-semibold">
              {company || "UI/UX Designer"}
            </div>
            <div className="text-xs text-[#333333]">Teams</div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center space-x-1 text-xs font-medium text-[#585D6E]">
            <MapPin className="h-3 w-3 text-[#585D6E]" />
            <span>{location || "Seattle, USA "} (Remote)</span>
          </div>
          <div className="flex items-center space-x-1 text-xs font-medium text-[#585D6E]">
            <Clock className="h-3 w-3 text-[#585D6E]" />
            <span>
              {posted || "1 day ago"} |{" "}
              <span className="text-[#0154AA] font-[500px]">
                22 applicants
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button className="text-xs px-6 py-2 bg-[#0154AA] cursor-pointer hover:bg-[#0153aad5]">
            Apply Now
          </Button>
          <Bookmark className="h-6 w-6 cursor-pointer text-[#AAAAAA]" />
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
