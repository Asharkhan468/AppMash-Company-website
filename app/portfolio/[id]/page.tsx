"use client";

import { useParams } from "next/navigation";
import dataMap from "../../components/dataMap";
import PortfolioPreview1 from "@/app/components/PortfolioPreview3";
import PortfolioPreview2 from "@/app/components/PortfolioPreview2";
import LaptopPreview from "@/app/components/LaptopPreview";
import LaptopPreviewRight from "@/app/components/LaptopPreviewRight";
import { FC } from "react";


const typedDataMap: any = dataMap;

const ProjectPage: FC = () => {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";

  const projectData = typedDataMap[id];

  if (!projectData) {
    return (
      <div className="text-center text-red-500 mt-10">
        Project not found.
      </div>
    );
  }

  return (
    <>
      {projectData.map((item:any, index:any) => {
        if (item.type === "mobile") {
          return item.variant === "left" ? (
            <PortfolioPreview1 key={index} {...item} />
          ) : (
            <PortfolioPreview2 key={index} {...item} />
          );
        }

        if (item.type === "laptop") {
          return item.variant === "left" ? (
            <LaptopPreview key={index} {...item} />
          ) : (
            <LaptopPreviewRight key={index} {...item} />
          );
        }

        return null;
      })}
    </>
  );
};

export default ProjectPage;
