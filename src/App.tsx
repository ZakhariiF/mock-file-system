import React from 'react';
import Folder from './components/Folder';
import { fileSystem } from './fileSystem';
import './index.css';

const App: React.FC = () => {
    return (
        <div className="container">
            {fileSystem.map((node, index) => (
                <Folder key={index} node={node} />
            ))}
        </div>
    );
};

export default App;
