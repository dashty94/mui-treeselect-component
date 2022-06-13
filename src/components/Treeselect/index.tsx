import { TreeItem, TreeView } from '@mui/lab';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Popover, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Data, TreeSelectProps } from '../../types';

const StyledPopover = styled(Popover)(() => ({
    '& .MuiPaper-root': {
        width: '100%'
    }
}));

const StyledTreeView = styled(TreeView)(() => ({
    '& .MuiTreeItem-iconContainer > svg': {
        fontSize: 22
    }
}));

export const Treeselect = ({ data, label, idKey = 'id', valueKey = 'name', onChange = () => {} }: TreeSelectProps) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [equipmentItem, setEquipmentItem] = useState('');
    const [equipmentId, setEquipmentId] = useState('');
    const [expanded, setExpanded] = useState<string[]>([]);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const RenderItems = ({ items }: { items: Data }) => {
        if (items.length <= 0) return <></>;
        return (
            <>
                {items?.map((item) => {
                    if (item.children && item.children?.length > 0) {
                        return (
                            <TreeItem
                                key={item.id}
                                nodeId={String(item[idKey])}
                                label={
                                    <Typography sx={{ p: 1.2 }} variant="body2">
                                        {item[valueKey]}
                                    </Typography>
                                }
                            >
                                <RenderItems items={item.children} />
                            </TreeItem>
                        );
                    } else {
                        return (
                            <TreeItem
                                key={item.id}
                                nodeId={String(item[idKey])}
                                label={
                                    <Typography sx={{ p: 1.2 }} variant="body2">
                                        {item[valueKey]}
                                    </Typography>
                                }
                            />
                        );
                    }
                })}
            </>
        );
    };

    return (
        <>
            <TextField
                variant="outlined"
                required={false}
                label={label}
                name="equipmentItem"
                id="equipmentItem"
                // defaultValue={equipmentItem}
                value={equipmentItem}
                className="w-100"
                inputProps={{ readOnly: true }}
                onClick={handleClick}
                fullWidth
            />

            <StyledPopover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                {data.length > 0 ? (
                    <StyledTreeView
                        defaultSelected={equipmentId}
                        selected={equipmentId}
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon sx={{ fontSize: 40 }} />}
                        defaultExpandIcon={<ChevronRightIcon sx={{ fontSize: 40 }} />}
                        sx={{
                            flexGrow: 1,
                            width: '100%',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            height: 'fit-content'
                        }}
                        onNodeSelect={(event: any, nodeId: any) => {
                            setExpanded((oldExpanded: string[]) => {
                                // find if in the array and remove everything after it
                                const index = oldExpanded.indexOf(String(nodeId));
                                if (index > -1) {
                                    return oldExpanded.slice(0, index);
                                }
                                return [...oldExpanded, String(nodeId)];
                            });

                            if (!event || !event?.target?.innerText || !nodeId) return;
                            setEquipmentId(nodeId);
                            setEquipmentItem(event.target.innerText);
                            setAnchorEl(null);
                            onChange(nodeId);
                        }}
                        expanded={expanded}
                    >
                        <RenderItems items={data} />
                    </StyledTreeView>
                ) : (
                    <Typography>No data found</Typography>
                )}
            </StyledPopover>
        </>
    );
};
