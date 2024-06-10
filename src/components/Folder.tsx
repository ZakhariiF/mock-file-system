// src/components/Folder.tsx
import React, { useState } from 'react';
import { File } from './File';
import { FileSystemNode } from '../fileSystem';

interface FolderProps {
    node: FileSystemNode;
}

const Folder: React.FC<FolderProps> = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleFolder = () => {
        if (node.children && node.children.length > 0) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className="folder">
            <div onClick={toggleFolder} className={node.children && node.children.length > 0 ? 'folder' : ''}>
                <span className="folder-icon">{isExpanded ? '📂' : '📁'}</span>
                {node.name}
            </div>
            {isExpanded && node.children && (
                <div className="folder-children">
                    {node.children.map((child, index) =>
                        child.type === 'folder' ? (
                            <Folder key={index} node={child} />
                        ) : (
                            <File key={index} node={child} />
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default Folder;
