import {useState} from 'react';
import {ReactFlow} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './skill_map.css';


const dsaTopics = {
    "Arrays": [
        "Two Pointer",
        "Sliding Window",
        "Prefix Sum",
        "Kadane's Algorithm"
    ],

    "Strings": [
        "String Manipulation",
        "Pattern Matching",
        "Hashing"
    ],

    "Linked List": [
        "Reversal",
        "Fast & Slow Pointer",
        "Merge Lists"
    ],

    "Stack & Queue": [
        "Monotonic Stack",
        "Deque",
        "Priority Queue"
    ],

    "Trees": [
        "Binary Tree",
        "BST",
        "Tree Traversal"
    ],

    "Graphs": [
        "BFS",
        "DFS",
        "Shortest Path",
        "MST"
    ],

    "Heap": [
        "Min Heap",
        "Max Heap"
    ],

    "Dynamic Programming": [
        "1D DP",
        "2D DP",
        "Knapsack"
    ]
};

const initialNodes = [
    {
        id: 'dsa',
        position: { x: 500, y: 300 },
        data: {label: 'DSA'},
        className: 'dsa-node'
    },

    {
        id: 'arrays',
        position: { x: 200, y: 150 },
        data: { label: 'Arrays' },
    },

    {
        id: 'strings',
        position: { x: 500, y: 100 },
        data: { label: 'Strings' }
    },

    {
        id: 'linked-list',
        position: { x: 800, y: 150 },
        data: { label: 'Linked List' }
    },

    {
        id: 'stack',
        position: { x: 150, y: 450 },
        data: { label: 'Stack' }
    },

    {
        id: 'queue',
        position: { x: 400, y: 500 },
        data: { label: 'Queue' }
    },

    {
        id: 'trees',
        position: { x: 650, y: 500 },
        data: { label: 'Trees' }
    },

    {
        id: 'graphs',
        position: { x: 900, y: 450 },
        data: { label: 'Graphs' }
    },

    {
        id: 'dynamic-programming',
        position: { x: 1050, y: 250 },
        data: { label: 'Dynamic Programming' }
    }
];

const initialEdges = [
    {
        id: 'dsa-arrays',
        source: 'dsa',
        target: 'arrays',
        type: 'bezier',
        style: { stroke: '#8B5CF6', strokeWidth: 2 }
    },
    {
        id: 'dsa-strings',
        source: 'dsa',
        target: 'strings',
        type: 'bezier',
        style: { stroke: '#EC4899', strokeWidth: 2 }
    },
    {
        id: 'dsa-linked-list',
        source: 'dsa',
        target: 'linked-list',
        type: 'bezier',
        style: { stroke: '#F59E0B', strokeWidth: 2 }
    },
    {
        id: 'dsa-stack',
        source: 'dsa',
        target: 'stack',
        type: 'bezier',
        style: { stroke: '#10B981', strokeWidth: 2 }
    },

    {
        id: 'dsa-queue',
        source: 'dsa',
        target: 'queue',
        type: 'bezier',
        style: { stroke: '#06B6D4', strokeWidth: 2 }
    },

    {
        id: 'dsa-trees',
        source: 'dsa',
        target: 'trees',
        type: 'bezier',
        style: { stroke: '#3B82F6', strokeWidth: 2 }
    },

    {
        id: 'dsa-graphs',
        source: 'dsa',
        target: 'graphs',
        type: 'bezier',
        style: { stroke: '#6366F1', strokeWidth: 2 }
    },

    {
        id: 'dsa-dp',
        source: 'dsa',
        target: 'dynamic-programming',
        type: 'bezier',
        style: { stroke: '#A855F7', strokeWidth: 2 }
    }
];


function SkillMap(){
    const [expanded, setExpanded] = useState({});
    const handleNodeClick = (event, node) => {

        setExpanded(prev => ({
            ...prev,
            [node.id]: !prev[node.id]
        }));
    };
    const visibleNodes=[...initialNodes];
    Object.keys(expanded).forEach(topic => {
        if(expanded[topic]){
            const parentNode = initialNodes.find(
                node => node.id === topic
            );

            if(!parentNode) return;

            const topicName = parentNode.data.label;

            const subtopics = dsaTopics[topicName];

            if(!subtopics) return;

            subtopics.forEach((subtopic,index)=> {
                visibleNodes.push({
                    id:`${topic}-${index}`,

                    position:{
                        x: parentNode.position.x+ index*160,
                        y: parentNode.position.y -130
                    },

                    data:{
                        label:subtopic
                    }
                });
            });
        }
    });

    const visibleEdges = [...initialEdges];

    Object.keys(expanded).forEach(topic => {
        if(expanded[topic]){
            const parentNode = initialNodes.find(
                node => node.id === topic 
            )
        }
    })
    return(
        <div className='skill-map-page'>
            <div className='skill-map-header'>
                <h1>Your DSA Skill Map</h1>
                <p>See where you stand and what to focus on next.</p>
            </div>
            <div  className="mindmap-container">
                <ReactFlow
                    nodes={visibleNodes}
                    edges={visibleEdges}
                    fitView
                    onNodeClick={handleNodeClick}
                />
            </div>
        </div>
    )
}
export default SkillMap;