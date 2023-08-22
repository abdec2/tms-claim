"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import Logo from "../assets/tmsLogo2.png";

const Footer = () => {
  <Box
    sx={{
      display: "flex",
    }}
  >
    <Box>&copy; {new Date().getFullYear()} TMS CLAIM. All rights reserved.</Box>
    <Box>
      <FaInstagram />
      <FaTwitter />
      <FaYoutube />
    </Box>
  </Box>;
};

export default Footer;
