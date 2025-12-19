// ============================================
// VLA Model Registry
// ============================================
// This file contains all VLA models registered on the leaderboard.
// To add a new model, simply add a new entry to the MODELS object.
// ============================================

import type { ModelEntry } from '../types';

export const MODELS: Record<string, ModelEntry> = {
  // OpenVLA Models
  'openvla-7b': {
    id: 'openvla-7b',
    name: 'OpenVLA-7B',
    organization: 'Stanford / Berkeley / Toyota Research',
    paper: {
      title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
      authors: ['Moo Jin Kim', 'Karl Pertsch', 'Siddharth Karamcheti', 'Ted Xiao', 'Ashwin Balakrishna', 'Suraj Nair', 'Rafael Rafailov', 'Ethan Foster', 'Grace Lam', 'Pannag Sanketi', 'Quan Vuong', 'Thomas Kollar', 'Benjamin Burchfiel', 'Russ Tedrake', 'Dorsa Sadigh', 'Sergey Levine', 'Percy Liang', 'Chelsea Finn'],
      venue: 'CoRL',
      year: 2024,
      arxivId: '2406.09246',
    },
    huggingfaceUrl: 'https://huggingface.co/openvla/openvla-7b',
    githubUrl: 'https://github.com/openvla/openvla',
    isOpenSource: true,
    modelSize: '7B',
    dateAdded: '2024-06-01',
    description: 'Open-source 7B parameter VLA model trained on Open X-Embodiment dataset',
  },

  // RT-2 Models
  'rt-2-pali-x-55b': {
    id: 'rt-2-pali-x-55b',
    name: 'RT-2-PaLI-X-55B',
    organization: 'Google DeepMind',
    paper: {
      title: 'RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control',
      authors: ['Anthony Brohan', 'Noah Brown', 'Justice Carbajal', 'et al.'],
      venue: 'CoRL',
      year: 2023,
      arxivId: '2307.15818',
    },
    websiteUrl: 'https://robotics-transformer2.github.io/',
    isOpenSource: false,
    modelSize: '55B',
    dateAdded: '2023-07-01',
    description: 'Vision-language-action model using PaLI-X backbone',
  },

  'rt-2-pali-x-5b': {
    id: 'rt-2-pali-x-5b',
    name: 'RT-2-PaLI-X-5B',
    organization: 'Google DeepMind',
    paper: {
      title: 'RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control',
      authors: ['Anthony Brohan', 'Noah Brown', 'Justice Carbajal', 'et al.'],
      venue: 'CoRL',
      year: 2023,
      arxivId: '2307.15818',
    },
    websiteUrl: 'https://robotics-transformer2.github.io/',
    isOpenSource: false,
    modelSize: '5B',
    dateAdded: '2023-07-01',
    description: 'Smaller variant of RT-2 with PaLI-X backbone',
  },

  // Octo Models
  'octo-base': {
    id: 'octo-base',
    name: 'Octo-Base',
    organization: 'UC Berkeley',
    paper: {
      title: 'Octo: An Open-Source Generalist Robot Policy',
      authors: ['Dibya Ghosh', 'Homer Walke', 'Karl Pertsch', 'Kevin Black', 'Oier Mees', 'Sudeep Dasari', 'Joey Hejna', 'Tobias Kreiman', 'Charles Xu', 'Jianlan Luo', 'You Liang Tan', 'Lawrence Yunliang Chen', 'Pannag Sanketi', 'Quan Vuong', 'Ted Xiao', 'Dorsa Sadigh', 'Chelsea Finn', 'Sergey Levine'],
      venue: 'RSS',
      year: 2024,
      arxivId: '2405.12213',
    },
    huggingfaceUrl: 'https://huggingface.co/rail-berkeley/octo-base',
    githubUrl: 'https://github.com/octo-models/octo',
    isOpenSource: true,
    modelSize: '93M',
    dateAdded: '2024-05-01',
    description: 'Transformer-based generalist robot policy',
  },

  'octo-small': {
    id: 'octo-small',
    name: 'Octo-Small',
    organization: 'UC Berkeley',
    paper: {
      title: 'Octo: An Open-Source Generalist Robot Policy',
      authors: ['Dibya Ghosh', 'Homer Walke', 'Karl Pertsch', 'et al.'],
      venue: 'RSS',
      year: 2024,
      arxivId: '2405.12213',
    },
    huggingfaceUrl: 'https://huggingface.co/rail-berkeley/octo-small',
    githubUrl: 'https://github.com/octo-models/octo',
    isOpenSource: true,
    modelSize: '27M',
    dateAdded: '2024-05-01',
    description: 'Smaller variant of Octo policy',
  },

  // π₀ Models
  'pi0': {
    id: 'pi0',
    name: 'π₀ (pi-zero)',
    organization: 'Physical Intelligence',
    paper: {
      title: 'π₀: A Vision-Language-Action Flow Model for General Robot Control',
      authors: ['Physical Intelligence Team'],
      venue: 'arXiv',
      year: 2024,
      arxivId: '2410.24164',
    },
    websiteUrl: 'https://www.physicalintelligence.company/blog/pi0',
    isOpenSource: false,
    modelSize: '3B',
    dateAdded: '2024-10-01',
    description: 'Flow-based VLA model for general robot control',
  },

  // RDT Models
  'rdt-1b': {
    id: 'rdt-1b',
    name: 'RDT-1B',
    organization: 'Tsinghua / Shanghai AI Lab',
    paper: {
      title: 'RDT-1B: A Diffusion Foundation Model for Bimanual Manipulation',
      authors: ['Songming Liu', 'Lingxuan Wu', 'Bangguo Li', 'Hengkai Tan', 'Huayu Chen', 'Zhengyi Wang', 'Ke Xu', 'Hang Su', 'Jun Zhu'],
      venue: 'arXiv',
      year: 2024,
      arxivId: '2410.07864',
    },
    githubUrl: 'https://github.com/thu-ml/RoboticsDiffusionTransformer',
    isOpenSource: true,
    modelSize: '1B',
    dateAdded: '2024-10-01',
    description: 'Diffusion-based transformer for bimanual manipulation',
  },

  // HPT Models
  'hpt': {
    id: 'hpt',
    name: 'HPT',
    organization: 'MIT',
    paper: {
      title: 'Scaling Proprioceptive-Visual Learning with Heterogeneous Pre-trained Transformers',
      authors: ['Lirui Wang', 'Xinlei Chen', 'Jialiang Zhao', 'Kaiming He'],
      venue: 'NeurIPS',
      year: 2024,
      arxivId: '2409.20537',
    },
    githubUrl: 'https://github.com/liruiw/HPT',
    isOpenSource: true,
    dateAdded: '2024-09-01',
    description: 'Heterogeneous pre-trained transformer for robot learning',
  },

  // GR-1 Models
  'gr-1': {
    id: 'gr-1',
    name: 'GR-1',
    organization: 'ByteDance',
    paper: {
      title: 'Unleashing Large-Scale Video Generative Pre-training for Visual Robot Manipulation',
      authors: ['Hongtao Wu', 'Ya Jing', 'Chilam Cheang', 'Guangzeng Chen', 'Jiafeng Xu', 'Xinghang Li', 'Minghuan Liu', 'Hang Li', 'Tao Kong'],
      venue: 'ICLR',
      year: 2024,
      arxivId: '2312.13139',
    },
    githubUrl: 'https://github.com/bytedance/GR-1',
    isOpenSource: true,
    dateAdded: '2024-01-01',
    description: 'GPT-style VLA with video pre-training',
  },

  // 3D Diffuser Actor
  '3d-diffuser-actor': {
    id: '3d-diffuser-actor',
    name: '3D Diffuser Actor',
    organization: 'Nvidia',
    paper: {
      title: '3D Diffuser Actor: Policy Diffusion with 3D Scene Representations',
      authors: ['Tsung-Wei Ke', 'Nikolaos Gkanatsios', 'Katerina Fragkiadaki'],
      venue: 'CoRL',
      year: 2024,
      arxivId: '2402.10885',
    },
    githubUrl: 'https://github.com/nickgkan/3d_diffuser_actor',
    isOpenSource: true,
    dateAdded: '2024-02-01',
    description: '3D scene-aware diffusion policy',
  },

  // ACT
  'act': {
    id: 'act',
    name: 'ACT',
    organization: 'Stanford',
    paper: {
      title: 'Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware',
      authors: ['Tony Z. Zhao', 'Vikash Kumar', 'Sergey Levine', 'Chelsea Finn'],
      venue: 'RSS',
      year: 2023,
      arxivId: '2304.13705',
    },
    githubUrl: 'https://github.com/tonyzhaozh/act',
    isOpenSource: true,
    dateAdded: '2023-04-01',
    description: 'Action Chunking Transformer for bimanual manipulation',
  },

  // Diffusion Policy
  'diffusion-policy': {
    id: 'diffusion-policy',
    name: 'Diffusion Policy',
    organization: 'Columbia / MIT',
    paper: {
      title: 'Diffusion Policy: Visuomotor Policy Learning via Action Diffusion',
      authors: ['Cheng Chi', 'Siyuan Feng', 'Yilun Du', 'Zhenjia Xu', 'Eric Cousineau', 'Benjamin Burchfiel', 'Shuran Song'],
      venue: 'RSS',
      year: 2023,
      arxivId: '2303.04137',
    },
    githubUrl: 'https://github.com/real-stanford/diffusion_policy',
    isOpenSource: true,
    dateAdded: '2023-03-01',
    description: 'Diffusion-based visuomotor policy',
  },

  // RT-1
  'rt-1': {
    id: 'rt-1',
    name: 'RT-1',
    organization: 'Google',
    paper: {
      title: 'RT-1: Robotics Transformer for Real-World Control at Scale',
      authors: ['Anthony Brohan', 'Noah Brown', 'Justice Carbajal', 'et al.'],
      venue: 'RSS',
      year: 2023,
      arxivId: '2212.06817',
    },
    githubUrl: 'https://github.com/google-research/robotics_transformer',
    websiteUrl: 'https://robotics-transformer.github.io/',
    isOpenSource: true,
    modelSize: '35M',
    dateAdded: '2022-12-01',
    description: 'Efficient tokenization for real-time robotics control',
  },
};

/**
 * Get all models as an array
 */
export const getAllModels = (): ModelEntry[] => Object.values(MODELS);

/**
 * Get a model by ID
 */
export const getModelById = (id: string): ModelEntry | undefined => MODELS[id];

