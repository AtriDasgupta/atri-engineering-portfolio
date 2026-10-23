export const profile = {
  name: 'Atri Dasgupta',
  role: 'AI & Robotics Engineer in Training',
  github: 'https://github.com/AtriDasgupta',
  linkedin: 'https://www.linkedin.com/in/atri-dasguptab36a05277',
  trajectory: 'https://github.com/Aurora-source/zero-latency',
}
export const projects = [
  {
    index: '01', status: 'Completed · Competition', title: 'Multi-Agent Trajectory Prediction',
    category: 'Deep Learning / Autonomous Mobility',
    description: 'Led a four-member team to develop a trajectory prediction system that predicts six seconds of multi-agent movement from three seconds of scene history on nuScenes.',
    tags: ['Python','PyTorch','nuScenes','Trajectory Prediction'],
    href: profile.trajectory,
    metrics: [{value:'34,149',label:'Samples evaluated'},{value:'0.8412 m',label:'Mean ADE'},{value:'1.0704 m',label:'Mean FDE'}],
    note: 'MAHE Mobility Challenge · National Top 60 finalist · Six prediction modes, checkpoint export and PNG/MP4 visualizations',
  },
  {
    index: '02', status: 'Ongoing', title: 'Industrial-Grade Humanoid Robot',
    category: 'Humanoid Robotics',
    description: 'Hands-on work and training with an industrial-grade humanoid robot, supported by the university.',
    tags: ['Humanoid Robotics','Robotic Systems'],
  },
  {
    index: '03', status: 'Ongoing', title: 'Quadruped Spider Bot',
    category: 'Legged Robotics / Mechatronics',
    description: 'Designing and building a four-legged spider robot with an emphasis on practical hardware development.',
    tags: ['Quadruped Robotics','Prototyping'],
  },
  {
    index: '04', status: 'Ongoing', title: 'SO-101 Robotic Arm',
    category: 'Robotic Manipulation',
    description: 'Building and working with the SO-101 robotic arm platform.',
    tags: ['Robotic Arms','Manipulation'],
  },
  {
    index: '05', status: 'Research in progress', title: 'AI Watermark Detection',
    category: 'AI Research',
    description: 'Presented the research idea to a panel of judges at IIT Delhi’s BeCON; currently developing it into a research paper.',
    tags: ['Artificial Intelligence','Research'],
  },
]
export const skills = [
  {label:'Programming',values:['Python','C','C++','MATLAB','8051 Assembly']},
  {label:'AI & Computer Vision',values:['PyTorch','OpenCV','Artificial Intelligence','Model Evaluation']},
  {label:'Robotics & Simulation',values:['Humanoid Robotics','Legged Robotics','SO-101 Robotic Arm','Digital Twinning','Reinforcement-Learning Simulation']},
  {label:'Systems & Tools',values:['Linux','Git','Data Visualization']},
  {label:'Additional',values:['Video Editing','VFX','Logistics Management','Technical Leadership']},
]
export const achievements = [
  {title:'Techsolistice — Maze Navigator Challenge',result:'2nd Place · Robotics Competition',detail:'Designed and built a robot for the maze-navigation challenge, demonstrating hands-on hardware development and competition execution. Earned second place.'},
  {title:'PowerNext-AI · CPRI',result:'Finalist · 3rd Prize',detail:'Reached the finals and received third prize at the state-level PowerNext-AI competition hosted by the Central Power Research Institute (CPRI).'},
  {title:'MAHE Mobility Challenge',result:'National Top 60 Finalist',detail:'Led a four-member team working on multi-agent trajectory prediction. Evaluated 34,149 samples and produced trajectory visualizations, model checkpoints, and quantitative ADE/FDE results.'},
  {title:'IIT Bombay e-Yantra Robotics Challenge',result:'Participant · Ongoing',detail:'Participating in IIT Bombay’s e-Yantra Robotics Challenge, extending practical experience in robotics-focused problem solving and project work.'},
  {title:'IIT Delhi BeCON · AI Watermark Detection',result:'Research Concept Presenter',detail:'Presented an AI watermark detection concept to a judging panel at IIT Delhi’s BeCON. Currently developing the idea toward a research paper; no publication is claimed.'},
]
