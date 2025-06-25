"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, ReactNode } from "react";

interface LocomotiveScrollSetupProps {
    children: ReactNode;
}

const LocomotiveScrollSetup = ({ children }: LocomotiveScrollSetupProps) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const scrollContainer = document.querySelector(
                "[data-scroll-container]"
            ) as HTMLElement;

            if (scrollContainer) {
                const scroll = new LocomotiveScroll({
                    lenisOptions: {
                        wrapper: scrollContainer,
                        content: scrollContainer,
                    },
                });

                return () => {
                    scroll.destroy();
                };
            }
        }
    }, []);

    return <div data-scroll-container>{children}</div>;
};

export default LocomotiveScrollSetup;
