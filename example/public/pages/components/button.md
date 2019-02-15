> A collection of all available buttons

# States


# Button states
```react
state: {
  rounded: false, 
  outlined: false,
  wide: false,
  clear: false, 
  disabled: false,
  size: 'medium',
  content: 'Foobar',
  color: 'green'
}
---
<div>
  <div>
    <label htmlFor="isRounded">Rounded?</label>
    <input type="checkbox" value={state.rounded} name="isRounded" onChange={() => setState({rounded: !state.rounded})} />
  </div>
  
  <div>
    <label htmlFor="isOutlined">Outlined?</label>
    <input type="checkbox" value={state.outlined} name="isOutlined" onChange={() => setState({outlined: !state.outlined})} />
  </div>
  
  <div>
    <label htmlFor="isClear">Clear?</label>
    <input type="checkbox" value={state.clear} name="isClear" onChange={() => setState({clear: !state.clear})} />
  </div>
  
  <div>
    <label htmlFor="isDisabled">Disabled?</label>
    <input type="checkbox" value={state.disabled} name="isDisabled" onChange={() => setState({disabled: !state.disabled})} />
  </div>
  
  <div>
    <label htmlFor="isFullWidth">Full width?</label>
    <input type="checkbox" value={state.wide} name="isFullWidth" onChange={() => setState({wide: !state.wide})} />
  </div>
  
  <div>
    <label htmlFor="isFullWidth">Full width?</label>
    <input type="checkbox" value={state.wide} name="isFullWidth" onChange={() => setState({wide: !state.wide})} />
  </div>
  
  <div>
    <label htmlFor="color">Color</label>
    <select name="color" value={state.color} onChange={(value) => setState({color: event.target.value})}>
       <option value="red">red</option>
       <option value="green">green</option>
       <option value="blue">blue</option>
     </select>
  </div>

  <div>
    <label htmlFor="size">Size</label>
    <select name="size" value={state.size} onChange={(value) => setState({size: event.target.value})}>
       <option value="small">Small</option>
       <option value="medium">Medium</option>
       <option value="large">Large</option>
     </select>
  </div>

  <Button size={state.size} rounded={state.rounded} clear={state.clear} outlined={state.outlined} disabled={state.disabled} wide={state.wide} color={state.color}>
    {state.content}
  </Button>
</div>
```

## Icons

### Icon on the left
```react
<Button iconLeft={<IconSettings></IconSettings>}>Button with button</Button>
```

### Icon on the right
```react
<Button iconRight={<IconSettings></IconSettings>}>Button with button</Button>
```

### Only an icon
```react
<Button iconOnly={<IconSettings></IconSettings>}>Button with only an icon</Button>
```

```react
<Button outlined="true" iconOnly={<IconSettings></IconSettings>}>Button with only an icon</Button>
```

## Loading

```react
<Button loading="true" percentageDone="30">Loading button</Button>
```

```react
<Button loading="true" percentageDone="60">Loading button</Button>
```

```react
<Button loading="true" percentageDone="90">Loading button</Button>
```

# Click events

You can add a click event handler to a button

```react
state: {clicked: 0}
---
  <Button onClick={() => setState({clicked: state.clicked + 1})}>Clicked {state.clicked} times</Button>
```
