import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TreeItem2, TreeItem2Props } from '@mui/x-tree-view/TreeItem2';
import { Dispatch, SetStateAction, useState } from 'react';
import { Anchor } from './Explorer';

interface Props {
  anchor: Anchor;
  setAnchor: React.Dispatch<React.SetStateAction<Anchor>>;
}

export function TreeNode(props: Props & TreeItem2Props) {
  const { anchor, setAnchor, ...treeItemProps } = props;
  const { itemId } = treeItemProps;

  const close = () => setAnchor(null);
  console.log('anchor: ', anchor?.element.getBoundingClientRect());
  return (
    <>
      <TreeItem2
        {...treeItemProps}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Right Click by: ', treeItemProps.label);
          if (anchor?.id === itemId) {
            setAnchor(null);
          } else {
            const newAnchor: Anchor = { id: itemId, element: e.currentTarget };
            setAnchor(newAnchor);
          }
        }}
      />
      <Menu id='grouped-menu' anchorEl={anchor?.element} open={!!anchor} onClose={close}>
        <MenuItem onClick={close}>Option 1</MenuItem>
        <MenuItem onClick={close}>Option 2</MenuItem>
      </Menu>
    </>
  );
}
