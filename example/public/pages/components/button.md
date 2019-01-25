> A collection of all available buttons

# States
## Types
### Regular

```react
<Button size="medium">Medium button (default)</Button>
```

### Outlined
```react
<Button outlined="true">Outlined button</Button>
```

### Rounded
```react
<Button rounded="true">Rounded button</Button>
```

### Clear
```react
<Button clear="true">Clear button</Button>
```

## Size

```react
<Button size="small">Small button</Button>
```

```react
<Button size="medium">Medium button (default)</Button>
```

```react
<Button size="large">Large button</Button>
```

## Full width

```react
<Button wide="true">Wide button</Button>
```

## Colors

You can use color buttons by adding a modifier

```react
<Button color={'red'}>Red button</Button>
```

## Icons
### Left
### Right
### Only
Todo


## Disabled

```react
<Button disabled="true">Disabled button</Button>
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
