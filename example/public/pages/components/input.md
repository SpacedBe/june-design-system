# Inputs 
```react
state: {
  value: 'foobar',
  type: 'text',
  state: 'resting',
  disabled: false,
  validationMessage: '',
  placeholderText: "Im a placeholder"
}
---
<div>
  <div className="props">
    <div className="input-group">
      <label htmlFor="inputType">Type</label>
      <select name="inputType" value={state.type} onChange={() => setState({type: event.target.value})}>
         <option value="text">Text</option>
         <option value="number">Number</option>
         <option value="password">Password</option>
       </select>
    </div>
    
    <div className="input-group">
      <label htmlFor="state">State</label>
      <select name="State" value={state.state} onChange={() => setState({state: event.target.value})}>
         <option value="resting">Resting (default)</option>
         <option value="error">Error</option>
         <option value="success">Success</option>
       </select>
    </div>
    
    <div className="input-group">
      <label htmlFor="isDisabled">Disabled</label>
      <input type="checkbox" value={state.disabled} name="isDisabled" onChange={() => setState({disabled: !state.disabled})} />
    </div>
    
    <div className="input-group">
      <label htmlFor="validationMessage">Validation message</label>
      <input type="text" value={state.validationMessage} name="validationMessage" onChange={() => setState({validationMessage: event.target.value})} />
    </div>
  </div>
    
  <Input type={state.type} value={state.value} state={state.state} disabled={state.disabled} validationMessage={state.validationMessage} placeholder="Placeholdertext"></Input>
</div>
```
