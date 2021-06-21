# react-search-box-component

### Description

- A package for fetching the input value with delay
- Reduces render
- Inbuilt props provides the value 
- Curretly works with JS Project

### Install via npm

```bash
npm i react-search-box-component
```

### Install via yarn
```bash
npm i react-search-box-component
```

### Docs

### Import Searchbox

```bash
import {Searchbox} from 'react-search-box-component'
```

### Usage

```bash
 <Searchbox delay={500} setVal={setDelay} placeholder="Search ..." />
```
### Props

- delay: for retruning the value in (ms) duration 
- setVal: holds the state value

### Example

```bash

import { useState } from "react";
import "./App.css";
import {Searchbox} from 'react-search-box-component'

function App() {
	const [view, setView] = useState("");
  const [delay,setDelay] = useState(0);
	return (
		<div className='App'>
		
      <Searchbox delay={500} setVal={setDelay} placeholder="type delay in ms" />
			<br />

			<span>{view}</span>
		</div>
	);
}

export default App;

```



### Maintainers
- [Narendra Santhosh](https://github.com/santynaren)