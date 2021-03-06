export type Data = any[];

export interface TreeSelectProps {
    data: Data;
    label: string;
    idKey?: string;
    valueKey?: string;
    onChange?: (value: any) => void;
    dir?: 'ltr' | 'rtl';
    defaultValue?: any;
    defaultId?: any;
    emptyLabel?: string;
}
