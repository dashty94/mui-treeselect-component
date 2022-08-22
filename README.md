<!-- markdownlint-disable-next-line -->

<h1 align="center">mui-treeselect-component</h1>

<div align="center">
A material ui treeselect component
</div>

## Installation

mui-rhf-library is available as an [npm package](https://www.npmjs.com/package/mui-treeselect).

```sh
// with npm
npm install mui-treeselect-component

// with yarn
yarn add mui-treeselect-component
```

## Demo

Check the storybook of the library: https://62a83daf64071006fcdebc72-hrlbgpsqpf.chromatic.com/?path=/story/treeselect--treeselect-component

## Usage

Here is a quick example to get you started:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Treeselect } from 'mui-treeselect-component';

function App() {
    return (
        <>
            <Treeselect
                data={[
                    { id: '1', item: 'Item 1' },
                    {
                        id: 2,
                        item: 'Item 2',
                        children: [{ id: 3, item: 'Item 3' }]
                    }
                ]}
                label="Treeselect"
                idKey="id"
                valueKey="item"
                onChange={
                    ((value) => {
                        //do something with selected value
                        console.log(value);
                    },
                    (dir = 'ltr'))
                }
            />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

# Documentation

#### Treeselect

| Prop     | Type           | Default     | Definition                                         |
| -------- | -------------- | ----------- | -------------------------------------------------- |
| data\*   | `any[]`        |             | The data of the treeview                           |
| label\*  | `string`       |             | The label of the textFeild                         |
| idKey    | `string`       | "id"        | the identifire key in the tree data                |
| valueKey | `string`       | "name"      | the identifire for the value in the tree data      |
| onChange | `function`     | (value)=>{} | the callback function to access the selected value |
| dir      | `rtl` or `ltr` | `ltr`       | direction of the expand icon of the nodes          |

## Changelog

Please read the [changelog](https://github.com/dashty94/mui-treeselect/releases) for details of what has changed.

# mui-treeselect-component
