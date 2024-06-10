// src/components/File.tsx
import React from 'react';
import { FileSystemNode } from '../fileSystem';

interface FileProps {
    node: FileSystemNode;
}

export const File: React.FC<FileProps> = ({ node }) => {
    return (
        <div className="file">
            <span className="file-icon">📄</span>
            <span className="file-name">{node.name}</span>
            {node.private && <span className="file-private">(Private)</span>}
            <span className="file-details">{new Date(node.timestamp).toLocaleString()}</span>
        </div>
    );
};
