'use client'
import { useState } from 'react'
import { skills } from '@/lib/data'
const commands = {
  skills: skills.map((s) => `${s.label.toLowerCase().replaceAll(' ', '_').padEnd(16)} ${s.values.join(' · ')}`),
  focus: ['01 / Autonomous systems & trajectory prediction','02 / Humanoid and legged robotics','03 / Digital twinning & simulation'],
  education: ['B.Tech · Artificial Intelligence and Robotics','Manipal Institute of Technology, Bengaluru','2025 — 2029'],
} as const
export function SkillsTerminal() {
  const [selected, setSelected] = useState<keyof typeof commands>('skills')
  return <div className="terminal" aria-label="Interactive technical profile terminal">
    <div className="terminal-top"><span className="terminal-dot" aria-hidden="true" /><span>atri@engineering:~</span><span className="ml-auto">PROFILE / CLI</span></div>
    <div className="terminal-body">
      <p className="text-slate-400">Select a command to inspect the engineering profile.</p>
      <div className="flex flex-wrap gap-2 mt-5 mb-6" role="group" aria-label="Terminal commands">
        {(Object.keys(commands) as Array<keyof typeof commands>).map((command) => <button type="button" key={command} aria-pressed={command === selected} onClick={() => setSelected(command)} className={`terminal-command focus-ring ${selected === command ? 'terminal-command-active' : ''}`}>$ {command}</button>)}
      </div>
      <div aria-live="polite" aria-atomic="true" className="terminal-output"><p><span className="text-sky-300">atri@engineering</span>:~$ show {selected}</p>{commands[selected].map((line) => <p key={line} className="terminal-line">{line}</p>)}<span aria-hidden="true" className="text-sky-300">▌</span></div>
    </div>
  </div>
}
