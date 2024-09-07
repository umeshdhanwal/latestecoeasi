import { Heading } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
  {
    csrdReportText: "Supplier Data &  KPI Analysis report, recommendations and target setting ",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  {
    csrdReportText: "Suppliers\\' ESG data collection and storage",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  {
    csrdReportText: "AI Support ",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  {
    csrdReportText: "Call support for the Pro Package",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  {
    csrdReportText: "% SME ESG Data Collection Rate",
    manualText: "<30-40%",
    automatedText: "<90%",
  },
  {
    csrdReportText: "Annual Cost",
    manualText: "<€50,000",
    automatedText: "€4,000",
  },
];

export default function SupplyChainComplianceSection() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("csrdReportText", {
        cell: (info) => (
          <Heading as="p" className="pl-[18px] !font-normal !text-gray-600">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 pl-[18px] text-left !font-normal !text-gray-600">
            CSRD  Supplier Report for Mid-Sized Corporates (ESRS Compliant)
          </Heading>
        ),
        meta: { width: "830px" },
      }),
      tableColumnHelper.accessor("manualText", {
        cell: (info) => (
          <Heading as="p" className="pl-1.5 !font-normal !text-gray-600">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 pl-1.5 text-center !font-normal !text-gray-600">
            Manual 
          </Heading>
        ),
        meta: { width: "306px" },
      }),
      tableColumnHelper.accessor("automatedText", {
        cell: (info) => (
          <Heading as="p" className="!font-normal !text-gray-600">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 text-center !font-normal !text-gray-600">
            Automated
          </Heading>
        ),
        meta: { width: "236px" },
      }),
    ];
  }, []);

  return (
    <>
      {/* supply chain compliance section */}
      <div className="mt-[156px] flex flex-col items-center gap-5">
        <div className="self-stretch py-[58px] md:py-5 sm:py-4">
          <div className="mt-1 flex justify-center">
            <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
              <Heading size="heading4xl" as="h2" className="md:text-[34px] sm:text-[28px]">
                Supply Chain  ESG Compliance Platform
              </Heading>
            </div>
          </div>
        </div>
        <div className="container-xs lg:px-5 md:px-5">
          <div>
            <div>
              <div className="ml-2.5 mr-14 md:mx-0">
                <div className="flex flex-col gap-2">
                  <div className="mx-[90px] flex flex-wrap justify-end gap-[194px] lg:gap-5 md:mx-0 md:gap-5">
                    <Heading as="h3" className="!font-normal !text-gray-500">
                      Without EcoEasi{" "}
                    </Heading>
                    <Heading as="h4" className="!font-normal !text-deep_purple-a400">
                      With EcoEasi
                    </Heading>
                  </div>
                  <div className="flex items-start justify-center md:flex-col">
                    <Heading size="headinglg" as="h5" className="mt-1 !text-black-900 md:text-[24px] sm:text-[22px]">
                      Platform / Regulatory Analysis
                    </Heading>
                    <div className="flex flex-1 justify-end gap-16 self-center md:self-stretch sm:flex-col">
                      <Heading
                        size="headinglg"
                        as="h6"
                        className="w-[24%] text-center leading-[120%] !text-black-900 md:text-[24px] sm:w-full sm:text-[22px]"
                      >
                        <>
                          High Cost <br />& Poor Results
                        </>
                      </Heading>
                      <Heading
                        size="headinglg"
                        as="h3"
                        className="w-[34%] text-center leading-[120%] !text-deep_purple-a400 md:text-[24px] sm:w-full sm:text-[22px]"
                      >
                        <>
                          Lower Cost & Better <br />
                          Response Rate{" "}
                        </>
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-[-8px] flex flex-col gap-2">
                <div className="flex px-2.5">
                  <Heading size="headings" as="h5" className="!text-deep_purple-a400">
                    Mid-Sized Corporates Buyers
                  </Heading>
                </div>
                <div className="bg-white-a700 p-3">
                  <ReactTable
                    size="xs"
                    variant="striped"
                    className="pricingtable md:block md:overflow-x-auto md:whitespace-nowrap"
                    bodyProps={{ className: "" }}
                    headerCellProps={{ className: "bg-gray-50_01" }}
                    rowDataProps={{ className: "bg-white-a700" }}
                    cellProps={{ className: "rounded-[5px]" }}
                    columns={tableColumns}
                    data={tableData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
