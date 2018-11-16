# with-level-0

Simplifies DOM Level 0 API implementation via Level 3 listeners.

```js
withLevel0('anyname');

const div = document.createElement('div');

// add listener
div.onanyname = event => {
  console.log(event.type);
};

// test it: will log "anyname"
div.dispatchEvent(new Event('anyname'));

// clean up
div.onanyname = null;

// test it's clean: nothing happens
div.dispatchEvent(new Event('anyname'));
```

🎉
