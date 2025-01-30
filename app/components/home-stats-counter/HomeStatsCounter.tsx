import React, { useEffect, useState } from 'react'
import { FaAward, FaRegSmile } from 'react-icons/fa';
import { RiKey2Line } from 'react-icons/ri';

interface StatItem {
    value: number;
    label: string;
    icon: any;
}

export default function HomeStatsCounter() {

    const stats: StatItem[] = [
        { value: 1200, label: 'Properties Sold', icon:<RiKey2Line /> },
        { value: 2000, label: 'Happy Customer', icon:<FaRegSmile /> },
        { value: 28, label: 'Awards Won', icon:<FaAward /> },
    ];

    useEffect(() => {
        const duration = 2000; // Animation duration in milliseconds
        const increment = 10; // Time between increments in milliseconds

        stats.forEach((stat, index) => {
        const targetValue = stat.value;
        const steps = Math.ceil(duration / increment);
        const incrementValue = targetValue / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(
                Math.ceil(incrementValue * currentStep),
                targetValue
            );
            return newCounts;
            });

            if (currentStep >= steps) {
            clearInterval(interval);
            }
        }, increment);
        });
    }, []);

    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
    
    return (
        <div className="flex items-center justify-between mt-5">
            {stats.map((stat, index) => (
                <div key={index} className="text-center flex items-center flex-col">
                    <div className="text-[30px] mb-[7px]">{stat.icon}</div>
                    {/* <RiKey2Line className="text-[40px]"/> */}
                    <p className="text-[25px] my-[-10px]">{counts[index]}+</p>
                    <p className="mt-2">{stat.label}</p>
                </div>
            ))}
        </div>
    )
}
