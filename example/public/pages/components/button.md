> A collection of all available buttons

### Normal button

```react
<Button>Foo</Button>
```

### color buttons

You can use color buttons by adding a modifier

```react
<Button color={'red'}>Foo</Button>
```

### click event handlers

You can add a click event handler to a button

```react
state: {clicked: 0}
---
  <Button onClick={() => setState({clicked: state.clicked + 1})}>Clicked {state.clicked} times</Button>
```
