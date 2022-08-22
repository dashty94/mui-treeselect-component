import { TreeItem, TreeView } from '@mui/lab';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, IconButton, Popover, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';

//@ts-ignore
import Measure from 'react-measure';
import { Data, TreeSelectProps } from '../../types';

const StyledPopover = styled(Popover)((props) => ({
    '& .MuiPaper-root': {
        width: '100%',
        //@ts-ignore
        maxWidth: props?.__width + 'px',
        maxHeight: '18rem',
        overflowY: 'scroll'
    }
}));

const StyledTreeView = styled(TreeView)(() => ({
    '& .MuiTreeItem-iconContainer > svg': {
        fontSize: 22
    }
}));

export const Treeselect = ({
    data,
    label,
    optionValue = 'id',
    optionLabel = 'label',
    onChange = () => {},
    onClear = () => {},
    dir = 'ltr',
    emptyLabel = 'No data found',
    defaultValue = undefined
}: TreeSelectProps) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [equipmentItem, setEquipmentItem] = useState(defaultValue ? defaultValue[optionLabel] : '');
    const [equipmentId, setEquipmentId] = useState(defaultValue ? defaultValue[optionValue]?.toString() : '');
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
                                nodeId={String(item[optionValue])}
                                label={
                                    <Typography sx={{ p: 1.2 }} variant="body2">
                                        {item[optionLabel]}
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
                                nodeId={String(item[optionValue])}
                                label={
                                    <Typography sx={{ p: 1.2 }} variant="body2">
                                        {item[optionLabel]}
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
            <Measure bounds>
                {({
                    measureRef,
                    contentRect: {
                        bounds: { width }
                    }
                }: any) => (
                    <Box ref={measureRef}>
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
                            InputProps={{
                                endAdornment: equipmentItem ? (
                                    <IconButton
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setEquipmentItem('');
                                            setEquipmentId('');
                                            setExpanded([]);
                                            onClear();
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                ) : (
                                    ''
                                )
                            }}
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
                            //@ts-ignore
                            __width={width}
                        >
                            {data.length > 0 ? (
                                <StyledTreeView
                                    defaultSelected={equipmentId}
                                    aria-label="tree-view"
                                    defaultCollapseIcon={<ExpandMoreIcon sx={{ fontSize: 40 }} />}
                                    defaultExpandIcon={
                                        dir === 'ltr' ? (
                                            <ChevronRightIcon sx={{ fontSize: 40 }} />
                                        ) : (
                                            <ChevronLeftIcon sx={{ fontSize: 40 }} />
                                        )
                                    }
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
                                <Typography p={1} color="text.secondary">
                                    {emptyLabel}
                                </Typography>
                            )}
                        </StyledPopover>
                    </Box>
                )}
            </Measure>
        </>
    );
};
