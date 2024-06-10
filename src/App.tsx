// src/App.tsx
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Folder from './components/Folder';
import { fileSystem as initialFileSystem, FileSystemNode } from './fileSystem';
import './index.css';

const App: React.FC = () => {
    const [fileSystem, setFileSystem] = useState<FileSystemNode[]>(initialFileSystem);

    const handleDelete = (nodeToDelete: FileSystemNode) => {
        const deleteNode = (nodes: FileSystemNode[]): FileSystemNode[] => {
            return nodes.filter(node => node !== nodeToDelete).map(node => {
                if (node.children) {
                    node.children = deleteNode(node.children);
                }
                return node;
            });
        };
        setFileSystem(deleteNode(fileSystem));
    };

    const handleTogglePrivate = (nodeToToggle: FileSystemNode) => {
        const togglePrivate = (nodes: FileSystemNode[]): FileSystemNode[] => {
            return nodes.map(node => {
                if (node === nodeToToggle) {
                    node.private = !node.private;
                }
                if (node.children) {
                    node.children = togglePrivate(node.children);
                }
                return node;
            });
        };
        setFileSystem(togglePrivate(fileSystem));
    };

    const handleMove = (draggedNode: FileSystemNode, targetNode: FileSystemNode) => {
        const moveNode = (nodes: FileSystemNode[], draggedNode: FileSystemNode, targetNode: FileSystemNode): FileSystemNode[] => {
            // Remove the dragged node from its original location
            const updatedNodes = nodes.filter(node => node !== draggedNode).map(node => {
                if (node.children) {
                    node.children = moveNode(node.children, draggedNode, targetNode);
                }
                return node;
            });

            // Add the dragged node to the target folder's children
            return updatedNodes.map(node => {
                if (node === targetNode && node.type === 'folder') {
                    node.children = node.children ? [...node.children, draggedNode] : [draggedNode];
                }
                return node;
            });
        };

        setFileSystem(moveNode(fileSystem, draggedNode, targetNode));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="container">
                {fileSystem.map((node, index) => (
                    <Folder key={index} node={node} onDelete={handleDelete} onTogglePrivate={handleTogglePrivate} onMove={handleMove} />
                ))}
            </div>
        </DndProvider>
    );
};

export default App;
