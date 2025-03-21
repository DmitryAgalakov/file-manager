import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeItem2Props } from '@mui/x-tree-view/TreeItem2';
import { TreeNode } from './TreeNode';
import { useState } from 'react';

const items: TreeViewBaseItem[] = [
  {
    id: '1',
    label: 'Parent 1',
    children: [
      {
        id: '2',
        label: 'Child 1-1',
        children: [
          { id: '3', label: 'Child 1-1-1' },
          { id: '4', label: 'Child 1-1-2' },
        ],
      },
      { id: '5', label: 'Child 1-2' },
    ],
  },
  {
    id: '6',
    label: 'Parent 2',
    children: [
      { id: '7', label: 'Child 2-1' },
      { id: '8', label: 'Child 2-2' },
    ],
  },
];

export type Anchor = { id: string; element: HTMLElement } | null;

interface Props {}

export function Explorer(props: Props) {
  const [anchor, setAnchor] = useState<Anchor>(null);

  return (
    <RichTreeView
      items={items}
      sx={{ mt: '200px' }}
      slots={{
        item: (props: TreeItem2Props) => <TreeNode {...props} anchor={anchor} setAnchor={setAnchor} />,
      }}
    />
  );
}
