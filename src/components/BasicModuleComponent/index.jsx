import React from 'react';
import { Button, Text, Heading } from "../../components";

const BasicModuleComponent = ({ 
  titleText, 
  descriptionText, 
  freeText, 
  detailedDescriptionText, 
  comingSoonButton, 
  className 
}) => {
  return (
    <div className={`flex flex-col items-center justify-start w-[32%] gap-[30px] py-[30px] px-5 bg-white-A700 rounded-[20px] ${className}`}>
      <div className="flex flex-col items-center justify-start w-full gap-4">
        <Heading as="h6" className="md:text-[24px] sm:text-[22px]">
          {titleText}
        </Heading>
        <Text size="textmd" as="p" className="!text-center leading-[157.4%]">
          {descriptionText}
        </Text>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-[30px]">
        <Heading size="heading2xl" as="h5" className="md:text-[34px] sm:text-[32px]">
          {freeText}
        </Heading>
        <Text size="textmd" as="p" className="!text-center leading-[157.4%]">
          {detailedDescriptionText}
        </Text>
      </div>
      <Button
        color="blue_gray_100"
        variant="outline"
        shape="round"
        className="min-w-[214px]"
      >
        {comingSoonButton}
      </Button>
    </div>
  );
};

export default BasicModuleComponent;