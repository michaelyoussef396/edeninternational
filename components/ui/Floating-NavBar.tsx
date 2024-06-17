"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, NavHoveredLink, ProductItem } from "./NavBar-Menu";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const [active, setActive] = useState<string | null>(null);
  const [hovering, setHovering] = useState<boolean>(false);

  useEffect(() => {
    if (!hovering && active) {
      const timer = setTimeout(() => setActive(null), 300);
      return () => clearTimeout(timer);
    }
  }, [hovering, active]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-24 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.85)", // Updated to white
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <NavHoveredLink href="/">Home</NavHoveredLink>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Student Visa"
          setHovering={setHovering}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Study In Australia</HoveredLink>
            <HoveredLink href="/individual">Study In Canada</HoveredLink>
            <HoveredLink href="/team">Affiliated Institutions</HoveredLink>
            <HoveredLink href="/enterprise">Professional Year</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Migration"
          setHovering={setHovering}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Temporary Skilled Shortage Tss Visa Subclass 482 (AUS)</HoveredLink>
            <HoveredLink href="/individual">Training Visa Subclass 407</HoveredLink>
            <HoveredLink href="/enterprise">Skilled Work Reginal Visa</HoveredLink>
            <HoveredLink href="/enterprise">Skilled Nominated Visa</HoveredLink>
            <HoveredLink href="/enterprise">Skilled Independent Visa</HoveredLink>
            <HoveredLink href="/enterprise">Temporary Graduate Visa</HoveredLink>
            <HoveredLink href="/enterprise">Sponsored Jobs</HoveredLink>
            <HoveredLink href="/enterprise">Point Calculation</HoveredLink>
          </div>
        </MenuItem>
        <NavHoveredLink href="/enterprise">Contact</NavHoveredLink>
      </motion.div>
    </AnimatePresence>
  );
};