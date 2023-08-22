import React, { useState, useEffect } from "react";
import { CONFIG } from "../config/config";
import VestingAbi from "../config/Vesting.json";
import TestTokenAbi from "../config/TestTokenAbi.json";
import { useContractReads } from "wagmi";
import { getAccount } from "@wagmi/core";

const tokenContract = {
  address: CONFIG.TEST_TOKEN,
  abi: TestTokenAbi,
};
const vestingContract = {
  address: CONFIG.VESTING_CONTRACT,
  abi: VestingAbi,
};

const useReadContract = () => {
  const account = getAccount();
  const data = useContractReads({
    contracts: [
      {
        ...tokenContract,
        functionName: "totalSupply",
      },
      {
        ...vestingContract,
        functionName: "vestingLogs",
        args: [account.address],
      },
    ],
    onSuccess(data) {
      console.log("data", data);
    },
    onError(error) {
      console.log("error", error);
    },
  });
  return data;
};

export default useReadContract;
