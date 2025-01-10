"use client";

import ContentHeader from "../ContentHeader/ContentHeader";

import styles from './Cards.module.css'

const InterestsCard = () => {
  return (
    <div className={`mr-6 bg-slate-400 h-full self-start mt-6 ${styles.interestsCard}`}>

      <div className="mb-6">
        <ContentHeader title="Interests" inCard={true} />
        <ul className="pl-8 pr-8">
          <li className="list-disc">Parallel File Systems</li>
          <li className="list-disc">High Performance Computing</li>
            <ul className="pl-4 list-disc">
              <li>Large Scale Parallel & Distributed Systems (like <a href="https://foldingathome.org/" className="hover:text-teal-300">folding@home</a>!)</li>
              <li>Scientific Computing</li>
              <li>Materials Science</li>
              <li>Performance Analysis</li>
            </ul>
          <li className="list-disc">Human Computer Interaction</li>
            <ul className="pl-4 list-disc">
              <li>Improving Education Outcomes</li>
              <li>Shared Musical Experiences</li>
            </ul>
          <li className="list-disc">Fullstack Web</li>
          <li className="list-disc">Audio Processing</li>
          <ul className="pl-4 list-disc">
            <li>Convolution Engines</li>
          </ul>
        </ul>
      </div>
    </div>
  )
}


const EquipmentCard = () => {
  return (
    <div className={`w-fit mr-8 h-full self-start mt-6 mlr-auto  ${styles.equipmentCard}`}>

      <div className="mb-6 pr-6">
        <ContentHeader title="Equipment" inCard={true} />
        <ul className="pl-8 pb-6">
          <li className="list-disc">Brass</li>
            <ul className="pl-4">
              <li className="list-disc">B&S PT-6 C Contrabass</li>
              <li className="list-disc">Mirafone Elektra F bass</li>
              <li className="list-disc">Dillon Cimbasso in F (customized)</li>
              <li className="list-disc">Junker Bass trombone</li>
              <li className="list-disc">Junker trumpet (x2!!)</li>
            </ul>
            <li className="list-disc">Other</li>
            <ul className="pl-4 list-disc">
              <li>Hohner Special 20 (C, A, & G)</li>
              <li>Stonewhistle <em>Natey</em></li>
              <li>Stonewhistle <em>ZenFlute</em> (E3)</li>
            </ul>
        </ul>
      </div>
    </div>
  )
}


export {EquipmentCard, InterestsCard};