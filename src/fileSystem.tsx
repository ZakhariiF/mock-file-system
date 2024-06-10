export interface FileSystemNode {
  name: string;
  type: 'file' | 'folder';
  timestamp: string;
  children?: FileSystemNode[];
  private?: boolean;
}

export const fileSystem: FileSystemNode[] = [
  {
    name: 'Documents',
    type: 'folder',
    timestamp: '2024-05-30T12:34:56Z',
    children: [
      {
        name: 'Resume.docx',
        type: 'file',
        timestamp: '2024-05-28T09:00:00Z',
      },
      {
        name: 'Project',
        type: 'folder',
        timestamp: '2024-05-29T15:30:00Z',
        children: [
          {
            name: 'App.jsx',
            type: 'file',
            timestamp: '2024-05-28T09:00:00Z',
          },
          {
            name: 'Components',
            type: 'folder',
            timestamp: '2024-05-28T09:00:00Z',
            children: [
              {
                name: 'Header.jsx',
                type: 'file',
                timestamp: '2024-05-28T09:00:00Z',
              },
              {
                name: 'Footer.jsx',
                type: 'file',
                timestamp: '2024-05-28T09:00:00Z',
              },
            ],
          },
        ],
      },
      {
        name: 'Reports',
        type: 'folder',
        timestamp: '2024-05-29T15:30:00Z',
        children: [
          {
            name: 'AnnualReport.pdf',
            type: 'file',
            timestamp: '2024-05-28T09:00:00Z',
            private: true,
          },
          {
            name: 'MonthlyReport.pdf',
            type: 'file',
            timestamp: '2024-05-28T09:00:00Z',
          },
        ],
      },
    ],
  },
  {
    name: 'Photos',
    type: 'folder',
    timestamp: '2024-05-25T10:00:00Z',
    children: [
      {
        name: 'Vacation',
        type: 'folder',
        timestamp: '2024-05-25T10:00:00Z',
        children: [
          {
            name: 'Beach.png',
            type: 'file',
            timestamp: '2024-05-24T08:00:00Z',
          },
          {
            name: 'Mountains.png',
            type: 'file',
            timestamp: '2024-05-24T08:00:00Z',
          },
        ],
      },
      {
        name: 'Family',
        type: 'folder',
        timestamp: '2024-05-25T10:00:00Z',
        children: [
          {
            name: 'FamilyReunion.jpg',
            type: 'file',
            timestamp: '2024-05-24T08:00:00Z',
          },
        ],
      },
    ],
  },
  {
    name: 'Music',
    type: 'folder',
    timestamp: '2024-05-20T10:00:00Z',
    children: [
      {
        name: 'Rock',
        type: 'folder',
        timestamp: '2024-05-20T10:00:00Z',
        children: [
          {
            name: 'song1.mp3',
            type: 'file',
            timestamp: '2024-05-19T10:00:00Z',
          },
          {
            name: 'song2.mp3',
            type: 'file',
            timestamp: '2024-05-19T10:00:00Z',
          },
        ],
      },
      {
        name: 'Pop',
        type: 'folder',
        timestamp: '2024-05-20T10:00:00Z',
        children: [
          {
            name: 'song3.mp3',
            type: 'file',
            timestamp: '2024-05-19T10:00:00Z',
          },
          {
            name: 'song4.mp3',
            type: 'file',
            timestamp: '2024-05-19T10:00:00Z',
          },
        ],
      },
    ],
  },
  {
    name: 'Videos',
    type: 'folder',
    timestamp: '2024-05-15T10:00:00Z',
    children: [
      {
        name: 'Movie',
        type: 'folder',
        timestamp: '2024-05-15T10:00:00Z',
        children: [
          {
            name: 'movie1.mp4',
            type: 'file',
            timestamp: '2024-05-14T10:00:00Z',
          },
          {
            name: 'movie2.mp4',
            type: 'file',
            timestamp: '2024-05-14T10:00:00Z',
          },
        ],
      },
      {
        name: 'Clips',
        type: 'folder',
        timestamp: '2024-05-15T10:00:00Z',
        children: [
          {
            name: 'clip1.mp4',
            type: 'file',
            timestamp: '2024-05-14T10:00:00Z',
          },
          {
            name: 'clip2.mp4',
            type: 'file',
            timestamp: '2024-05-14T10:00:00Z',
          },
        ],
      },
    ],
  },
];
