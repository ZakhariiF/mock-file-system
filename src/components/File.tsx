// src/components/File.tsx
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { FileSystemNode } from '../fileSystem';

const ITEM_TYPE = 'FILE_SYSTEM_NODE';

interface FileProps {
    node: FileSystemNode;
    onDelete: (node: FileSystemNode) => void;
    onTogglePrivate: (node: FileSystemNode) => void;
    onMove: (draggedNode: FileSystemNode, targetNode: FileSystemNode) => void;
}

export const File: React.FC<FileProps> = ({ node, onDelete, onTogglePrivate, onMove }) => {
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
            <div ref={drop} className="file">
                <span className="file-icon">📄</span>
                <span className="file-name">{node.name}</span>
                {node.private && <span className="file-private">(Private)</span>}
                <button
                    onClick={handleTogglePrivate}
                    className={node.private ? 'unmark-private' : 'private'}
                >
                    {node.private ? 'Unmark Private' : 'Mark Private'}
                </button>
                <button onClick={handleDelete} className="delete">Delete</button>
                <span className="file-details">{new Date(node.timestamp).toLocaleString()}</span>
            </div>
        </div>
    );
};
