"use client"

// import { useRouter } from 'next/navigation';
import React from 'react'

interface Agent {

    name: string;
    image: string;
  }
  
  interface AgentCardProps {
    agent: Agent;
  }

  
  export default function TopRatedAgents({ agent }: AgentCardProps) {
    
    // const router = useRouter()

    return (
    <div className='mb-5 shadow-md rounded-[20px] relative cursor-pointer'>
        <img src={agent.image} alt="" className='md:h-[250px] h-[150px]  object-cover w-full rounded-t-[20px]'/>
        <div className='p-4 flex items-center justify-between'>
            <p className='font-[600] md:text-[18px] text-[14px]'>{agent.name}</p>
            <img src="./images/guarantee-1.png" alt="" className='w-[25px]' />
        </div>
    </div>
  )
}
