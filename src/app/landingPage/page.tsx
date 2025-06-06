"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import ProfileCard from "@/components/profileCard";
import JobCard from "@/components/jobCard";
import CustomSearch from "@/components/customSearch";
import JobCardSkeleton from "@/components/jobCardSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const jobsData = [
  {
    company: "UX/UI Designer",
    logo: "/assets/icons/msTeams.png",
    title: "UX/UI Designer",
    location: "San Francisco, CA",
    salary: "$80k-120k",
    type: "Full Time",
    posted: "2 days ago",
    description:
      "We are looking for a talented UX/UI Designer to join our team and help create amazing user experiences.",
  },
  {
    company: "Frontend Developer",
    logo: "/assets/icons/msTeams.png",
    title: "Frontend Developer",
    location: "New York, NY",
    salary: "$90k-130k",
    type: "Full Time",
    posted: "1 day ago",
    description:
      "Join our development team to build cutting-edge web applications using modern technologies.",
  },
  {
    company: "Product Manager",
    logo: "/assets/icons/msTeams.png",
    title: "Product Manager",
    location: "Los Angeles, CA",
    salary: "$100k-150k",
    type: "Full Time",
    posted: "3 days ago",
    description:
      "Lead product strategy and development for our innovative software solutions.",
  },
  {
    company: "Data Scientist",
    logo: "/assets/icons/msTeams.png",
    title: "Data Scientist",
    location: "Chicago, IL",
    salary: "$95k-140k",
    type: "Full Time",
    posted: "1 day ago",
    description:
      "Analyze complex data sets to drive business insights and decision making.",
  },
  {
    company: "DevOps Engineer",
    logo: "/assets/icons/msTeams.png",
    title: "DevOps Engineer",
    location: "Austin, TX",
    salary: "$85k-125k",
    type: "Full Time",
    posted: "4 days ago",
    description:
      "Manage and optimize our cloud infrastructure and deployment processes.",
  },
  {
    company: "Marketing Manager",
    logo: "/assets/icons/msTeams.png",
    title: "Marketing Manager",
    location: "Seattle, WA",
    salary: "$75k-110k",
    type: "Full Time",
    posted: "2 days ago",
    description:
      "Develop and execute marketing strategies to grow our brand presence.",
  },
  {
    company: "Marketing Manager",
    logo: "/assets/icons/msTeams.png",
    title: "Marketing Manager",
    location: "Seattle, WA",
    salary: "$75k-110k",
    type: "Full Time",
    posted: "2 days ago",
    description:
      "Develop and execute marketing strategies to grow our brand presence.",
  },
  {
    company: "Marketing Manager",
    logo: "/assets/icons/msTeams.png",
    title: "Marketing Manager",
    location: "Seattle, WA",
    salary: "$75k-110k",
    type: "Full Time",
    posted: "2 days ago",
    description:
      "Develop and execute marketing strategies to grow our brand presence.",
  },
  {
    company: "Marketing Manager",
    logo: "/assets/icons/msTeams.png",
    title: "Marketing Manager",
    location: "Seattle, WA",
    salary: "$75k-110k",
    type: "Full Time",
    posted: "2 days ago",
    description:
      "Develop and execute marketing strategies to grow our brand presence.",
  },
  {
    company: "Marketing Manager",
    logo: "/assets/icons/msTeams.png",
    title: "Marketing Manager",
    location: "Seattle, WA",
    salary: "$75k-110k",
    type: "Full Time",
    posted: "2 days ago",
    description:
      "Develop and execute marketing strategies to grow our brand presence.",
  },
];

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <ProfileCard />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-xl font-semibold text-[#333333] ">
                Find your Dream Job,{" "}
                <span className="text-[#0154AA]"> Albert! </span>{" "}
              </h1>
              <p className=" text-sm font-medium text-[#585D6E] ">
                Explore thousands of job opportunities with all the information
                you need. Its your future
              </p>
            </div>

            {/* Job Search */}
            <CustomSearch />

            {/* similar suggestions */}
            <div className="mb-8">
              <div className="flex items-center mb-4 space-x-6">
                <p className="text-[#737A91] ">Similar: </p>
                <div className="space-x-4 space-y-2">
                  {["Frontend", "Backend", "Graphic Designer"].map(
                    (tag, index) => (
                      <Button
                        key={index}
                        size="sm"
                        className="bg-transparent rounded-sm text-[#737A91] font-normal border border-[#737A91] hover:bg-transparent "
                      >
                        {tag}
                      </Button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Featured Jobs */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <h2 className="text-lg font-medium text-[#333333] ">
                  Featured Jobs
                </h2>
                <a
                  href="#"
                  className="text-[#0154AA] underline hover:text-blue-700 text-sm font-medium"
                >
                  See Featured Jobs
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {loading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <JobCardSkeleton key={index} />
                    ))
                  : jobsData
                      .slice(0, 5)
                      .map((job, index) => <JobCard key={index} {...job} />)}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <h2 className="text-lg font-medium text[#333333] ">
                  Recommended Jobs
                </h2>
                <a
                  href="#"
                  className="text-[#0154AA] underline hover:text-blue-700 text-sm font-medium"
                >
                  See Recommended Jobs
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {loading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <JobCardSkeleton key={index} />
                    ))
                  : jobsData.map((job, index) => (
                      <JobCard key={index} {...job} />
                    ))}
              </div>
            </div>

            {/* Latest Jobs */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <h2 className="text-lg font-medium text-[#333333] ">
                  Latest Jobs
                </h2>
                <a
                  href="#"
                  className="text-[#0154AA] underline hover:text-blue-700 text-sm font-medium"
                >
                  See Latest Jobs
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {loading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <JobCardSkeleton key={index} />
                    ))
                  : jobsData
                      .slice()
                      .reverse()
                      .map((job, index) => <JobCard key={index} {...job} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
