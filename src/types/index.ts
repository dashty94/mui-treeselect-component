export type Data = any[];

export interface TreeSelectProps {
    data: Data;
    label: string;
    optionValue?: string;
    optionLabel?: string;
    onChange?: (value: any) => void;
    onClear?: () => void;
    dir?: 'ltr' | 'rtl';
    emptyLabel?: string;
    defaultValue?: {
        [key: string]: string | number;
    };
}
