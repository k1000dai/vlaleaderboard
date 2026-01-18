// ============================================
// VLA Model Registry (Strictly based on provided info)
// ============================================

import type { ModelEntry } from '../types';

export const MODELS: Record<string, ModelEntry> = {
    'mixture_of_horizons': {
        id: 'mixture_of_horizons',
        name: 'Mixture of Horizons',
        organization: 'RUC, UNC, CUHK',
        paper: {
            title: 'Mixture of Horizons in Action Chunking',
            authors: ['Dong Jing, Gang Wang, Jiaqi Liu, Weiliang Tang, Zelong Sun, Yunchao Yao, Zhenyu Wei, Yunhui Liu, Zhiwu Lu, Mingyu Ding'],
            year: 2025,
            arxivId: '2511.19433',
        },
        githubUrl: 'https://github.com/Timsty1/MixtureOfHorizons',
        isOpenSource: true,
        dataAdded: '2025-11-24',
        modelSize: '3b'
    },
    'openvla': {
        id: 'openvla',
        name: 'OpenVLA',
        organization: 'OpenVLA Team',
        paper: {
            title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
            authors: ['Moo Jin Kim and Karl Pertsch and Siddharth Karamcheti and Ted Xiao and Ashwin Balakrishna and Suraj Nair and Rafael Rafailov and Ethan Foster and Grace Lam and Pannag Sanketi and Quan Vuong and Thomas Kollar and Benjamin Burchfiel and Russ Tedrake and Dorsa Sadigh and Sergey Levine and Percy Liang and Chelsea Finn'],
            year: 2024,
            arxivId: '2406.09246',
        },
        githubUrl: 'https://github.com/openvla/openvla',
        isOpenSource: true,
        dateAdded: '2024-06-01',
        modelSize: '7b'
    },
    "openvla-oft": {
        id: 'openvla-oft',
        name: 'OpenVLA-OFT',
        organization: 'Stanford University',
        paper: {
            title: 'Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success',
            authors: ['Moo Jin Kim, Chelsea Finn, Percy Liang'],
            year: 2025,
            arxivId: '2502.19645'
        },
        githubUrl: 'https://github.com/moojink/openvla-oft',
        isOpenSource: true,
        dateAdded: '2025-02-01',
        modelSize: '7b'
    },
    'cot-vla' : {
        id : 'cot-vla',
        name : 'CoT-VLA',
        organization : 'NVIDIA, Stanford University, MIT',
        paper: {
            title: 'CoT-VLA: Visual Chain-of-Thought Reasoning for Vision-Language-Action Models',
            authors : ['Qingqing Zhao, Yao Lu, Moo Jin Kim, Zipeng Fu, Zhuoyang Zhang, Yecheng Wu, Zhaoshuo Li, Qianli Ma, Song Han, Chelsea Finn, Ankur Handa, Ming-Yu Liu, Donglai Xiang, Gordon Wetzstein, Tsung-Yi Lin'],
            year : 2025,
            arxivId : '2503.22020',
        },
        isOpenSource : false,
        dateAdded : '2025-03-01',
        modelSize : '7b'
    },
    'pi0': {
        id: 'pi0',
        name: 'Pi0',
        organization: 'Physical Intelligence',
        paper: {
            title: 'π₀: A Vision-Language-Action Flow Model for General Robot Control',
            authors: ['Physical Intelligence Team'],
            year: 2024,
            arxivId: '2410.24164',
        },
        githubUrl: 'https://github.com/Shiduo-zh/openpi',
        isOpenSource: true,
        dateAdded: '2024-10-01',
        modelSize: '3b'
    },
    'pi0.5': {
        id: 'pi0.5',
        name: 'Pi0.5',
        organization: 'Physical Intelligence',
        paper: {
            title: 'π0.5: a Vision-Language-Action Model with Open-World Generalization',
            authors: ['Physical Intelligence Team'],
            year: 2025,
            arxivId: '2504.16054',
        },
        githubUrl: 'https://github.com/Shiduo-zh/openpi',
        isOpenSource: true,
        dateAdded: '2025-04-01',
        modelSize: '3b'
    },
    'molmoact': {
        id: 'molmoact',
        name: 'Molmoact',
        organization: 'AI2',
        paper: {
            title: 'MolmoAct: Action Reasoning Models that can Reason in Space',
            authors: ['AI2 Team'],
            year: 2025,
            arxivId: '2508.07917',
        },
        githubUrl: 'https://github.com/allenai/molmoact',
        isOpenSource: true,
        dateAdded: '2025-08-01',
        modelSize: '7b'
    },
    'x-vla': {
        id: 'x-vla',
        name: 'x-VLA',
        organization: 'Institute for AI Industry Research (AIR), Tsinghua University, Shanghai AI Lab, Peking University',
        paper: {
            title: 'X-VLA: Soft-Prompted Transformer as a Scalable Cross-Embodiment Vision-Language-Action Model',
            authors: ['Jinliang Zheng and Jianxiong Li and Zhihao Wang and Dongxiu Liu and Xirui Kang and Yuchun Feng and Yinan Zheng and Jiayin Zou and Yilun Chen and Jia Zeng and Ya-Qin Zhang and Jiangmiao Pang and Jingjing Liu and Tai Wang and Xianyuan Zhan'],
            year: 2025,
            arxivId: '2510.10274',
        },
        githubUrl: 'https://github.com/2toinf/X-VLA',
        isOpenSource: true,
        dateAdded: '2025-10-01',
        modelSize: '0.9b'
    },
    'vla-adapter-pro': {
        id: 'vla-adapter-pro',
        name: 'vla-adapter pro',
        organization: 'OpenHelix Team',
        paper: {
            title: 'VLA-Adapter: An Effective Paradigm for Tiny-Scale Vision-Language-Action Model',
            authors: ['Yihao Wang and Pengxiang Ding and Lingxiao Li and Can Cui and Zirui Ge and Xinyang Tong and Wenxuan Song and Han Zhao and Wei Zhao and Pengxu Hou and Siteng Huang and Yifan Tang and Wenhui Wang and Ru Zhang and Jianyi Liu and Donglin Wang'],
            year: 2025,
            arxivId: '2509.09372',
        },
        githubUrl: 'https://github.com/OpenHelix-Team/VLA-Adapter',
        isOpenSource: true,
        dateAdded: '2025-09-01',
        modelSize: "0.5b"
    },
    'flower': {
        id: 'flower',
        name: 'Flower',
        organization: 'Microsoft Research',
        paper: {
            title: 'FLOWER: Democratizing Generalist Robot Policies with Efficient Vision-Language-Action Flow Policies',
            authors: ['Moritz Reuss and Hongyi Zhou and Marcel Rühle and Ömer Erdinç Yağmurlu and Fabian Otto and Rudolf Lioutikov'],
            year: 2025,
            arxivId: '2509.04996',
        },
        githubUrl: 'https://github.com/intuitive-robots/flower_vla_pret',
        isOpenSource: true,
        dateAdded: '2025-02-01',
        modelSize: '1b'
    },
    'univla': {
        id: 'univla',
        name: 'UniVLA',
        organization: 'CASIA, BAAI, THU, HKIS',
        paper: {
            title: 'Unified Vision-Language-Action Model',
            authors: ['Yuqi Wang and Xinghang Li and Wenxuan Wang and Junbo Zhang and Yingyan Li and Yuntao Chen and Xinlong Wang and Zhaoxiang Zhang'],
            year: 2025,
            url: 'https://arxiv.org/pdf/2506.19850',
        },
        githubUrl: "https://github.com/baaivision/UniVLA",
        isOpenSource: true,
        dateAdded: '2025-02-01',
        modelSize: '8.5b'
    },
    'octo': {
        id: 'octo',
        name: 'Octo',
        organization: 'UC Berkeley',
        paper: {
            title: 'Octo: An Open-Source Generalist Robot Policy',
            authors: ['Octo Model Team'],
            year: 2024,
            arxivId: '2405.12213',
        },
        githubUrl: 'https://github.com/octo-models/octo',
        isOpenSource: true,
        dateAdded: '2024-05-01',
        modelSize: '0.1b'
    },
    'pi0fast': {
        id: 'pi0fast',
        name: 'pi0fast',
        organization: 'Physical Intelligence',
        paper: {
            title: 'FAST: Efficient Action Tokenization for Vision-Language-Action Models',
            authors: ['Physical Intelligence Team'],
            year: 2024,
            arxivId: '2501.09747',
        },
        githubUrl: 'https://github.com/Physical-Intelligence/openpi',
        isOpenSource: true,
        dateAdded: '2025-01-01',
        modelSize: '3b'
    },
    'smolvla-0.45b': {
        id: 'smolvla-0.45b',
        name: 'smolVLA(0.45b)',
        organization: 'Hugging Face',
        paper: {
            title: 'smolVLA: Scaling Down Vision-Language-Action Models',
            authors: ['Mustafa Shukor and Dana Aubakirova and Francesco Capuano and Pepijn Kooijmans and Steven Palma and Adil Zouitine and Michel Aractingi and Caroline Pascal and Martino Russi and Andres Marafioti and Simon Alibert and Matthieu Cord and Thomas Wolf and Remi Cadene'],
            year: 2025,
            url: 'https://arxiv.org/pdf/2506.01844',
        },
        githubUrl: "https://github.com/huggingface/lerobot",
        isOpenSource: true,
        dateAdded: '2025-06-01',
        modelSize: '0.45b'
    },
    'vla-0': {
        id: 'vla-0',
        name: 'VLA-0',
        organization: 'NVIDIA',
        paper: {
            title: 'VLA-0: Building State-of-the-Art VLAs with Zero Modification',
            authors: ['Ankit Goyal, Hugo Hadfield, Xuning Yang, Valts Blukis, Fabio Ramos'],
            year: 2025,
            arxivId: '2510.13054',
        },
        githubUrl: "https://github.com/NVlabs/vla0",
        isOpenSource: true,
        dateAdded: '2025-12-19',
        modelSize: '3b'
    },
    'gr00tn1.6': {
        id: 'gr00tn1.6',
        name: 'GR00TN1.6',
        organization: 'NVIDIA',
        paper: {
            title: 'GR00TN1.6',
            authors: ['NVIDIA'],
            year: 2025,
            url: 'https://research.nvidia.com/labs/gear/gr00t-n1_6/'
        },
        githubUrl: "https://github.com/NVIDIA/Isaac-GR00T",
        isOpenSource: true,
        dateAdded: '2025-12-19',
        modelSize: '3b'
    },
    "thinkact": {
        id: 'thinkact',
        name: 'ThinkAct',
        organization: 'NVIDIA',
        paper: {
            title: 'ThinkAct',
            authors: ['NVIDIA'],
            year: 2025,
            url: 'https://research.nvidia.com/labs/gear/thinkact/',
            arxivId: '2507.16815',
        },
        isOpenSource: false,
        dateAdded: '2025-07-01',
        modelSize: '3b'
    }
};

export const getAllModels = () => Object.values(MODELS);
export const getModelById = (id: string) => MODELS[id];
