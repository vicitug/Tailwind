import React from 'react'
import { FiPenTool } from "react-icons/fi";
import SectionHeader from './section-header';


export default function Skill() {
  return (
<div className="skill my-8">
  <SectionHeader title={"What I Do"}/>
  <div className="activities my-8 flex flex-col md:flex-row flex-wrap">
    <div className="flex basis-1/2">
      <div className="icon h-16 min-w-16 flex justify-center items-center text-4xl rounded-lg bg-slate-200 dark:bg-slate-700 dark:text-white lg:max-w-16"><FiPenTool/></div>
      <div className="px-2 md:px-4 py-4">
        <p className="mb-4 text-2xl dark:text-white font-semibold">Demo Data</p>
        <p className="dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nihil perspiciatis voluptate, dolores dignissimos accusamus placeat, tenetur ullam magni illo incidunt harum nemo rem iusto, fuga temporibus repellat voluptatem et.</p>
      </div>
    </div>
  </div>
</div>

  )
}
