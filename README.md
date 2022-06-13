<!-- markdownlint-disable-next-line -->

<h1 align="center">mui-treeselect</h1>

<div align="center">
A material ui treeselect component
</div>


## Installation

mui-rhf-library is available as an [npm package](https://www.npmjs.com/package/mui-treeselect).

```sh
// with npm
npm install mui-treeselect

// with yarn
yarn add mui-treeselect
```



## Demo

Check the storybook of the library: 

## Usage

Here is a quick example to get you started:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { TextFieldController, SelectController } from 'mui-rhf-library';
import { useForm } from 'react-hook-form';


function App() {
    const {
        control,
	} = useForm();

    return (
        <>
            <TextFieldController
                control={control}
                name="name"
                defaultValue=""
                label="TextField Controller"
            />

        	<SelectController
                name="select"
                label="Select Controller"
                control={control}
                options: [
        			{ label: 'Option One', value: 'option-one', example: {name: 'example-one'} },
        			{ label: 'Option Two', value: 'option-two', example: {name: 'example-two'} }
    			]
                optionValue: 'example.name',
                optionLabel: 'example.name',
                variant="outlined"
            />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

# Documentation

#### TextField Controller

Props of Material UI TextField are also available.

| Prop         | Type      | Default | Definition                                                                                              |
| ------------ | --------- | ------- | ------------------------------------------------------------------------------------------------------- |
| name\*       | string    |         | The name of the input                                                                                   |
| control\*    | `Control` |         | The React Hook Form object to register components into React Hook Form.                                 |
| defaultValue | any       |         | The default value of the input that would be injected into React Hook Form Controller and the component |

## Changelog

Please read the [changelog](https://github.com/dashty94/mui-treeselect/releases) for details of what has changed.
# mui-treeselect
