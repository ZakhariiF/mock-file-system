// src/components/Folder.tsx
import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { File } from './File';
import { FileSystemNode } from '../fileSystem';

const ITEM_TYPE = 'FILE_SYSTEM_NODE';

interface FolderProps {
    node: FileSystemNode;
    onDelete: (node: FileSystemNode) => void;
    onTogglePrivate: (node: FileSystemNode) => void;
    onMove: (draggedNode: FileSystemNode, targetNode: FileSystemNode) => void;
}

const Folder: React.FC<FolderProps> = ({ node, onDelete, onTogglePrivate, onMove }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ITEM_TYPE,
        item: { node },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [, drop] = useDrop(() => ({
        accept: ITEM_TYPE,
        drop: (item: { node: FileSystemNode }) => {
            onMove(item.node, node);
        },
    }));

    const toggleFolder = () => {
        if (node.children && node.children.length > 0) {
            setIsExpanded(!isExpanded);
        }
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete(node);
    };

    const handleTogglePrivate = (e: React.MouseEvent) => {
        e.stopPropagation();
        onTogglePrivate(node);
    };

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <div ref={drop} onClick={toggleFolder} className={node.children && node.children.length > 0 ? 'folder' : ''}>
                <span className="folder-icon">{isExpanded ? '📂' : '📁'}</span>
                {node.name}
                <button
                    onClick={handleTogglePrivate}
                    className={node.private ? 'unmark-private' : 'private'}
                >
                    {node.private ? 'Unmark Private' : 'Mark Private'}
                </button>
                <button onClick={handleDelete} className="delete">Delete</button>
            </div>
            {isExpanded && node.children && (
                <div className="folder-children">
                    {node.children.map((child, index) =>
                        child.type === 'folder' ? (
                            <Folder key={index} node={child} onDelete={onDelete} onTogglePrivate={onTogglePrivate} onMove={onMove} />
                        ) : (
                            <File key={index} node={child} onDelete={onDelete} onTogglePrivate={onTogglePrivate} onMove={onMove} />
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default Folder;
