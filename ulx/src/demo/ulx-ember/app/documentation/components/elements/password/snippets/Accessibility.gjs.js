export default `
<label for="pwd1">Password</label>
<UlxPassword @id="pwd1" @feedback={{false}} />

<span id="pwd2">Password</span>
<UlxPassword aria-labelledby="pwd2" @feedback={{false}} />

<UlxPassword aria-label="Password" @feedback={{false}} />
`;
