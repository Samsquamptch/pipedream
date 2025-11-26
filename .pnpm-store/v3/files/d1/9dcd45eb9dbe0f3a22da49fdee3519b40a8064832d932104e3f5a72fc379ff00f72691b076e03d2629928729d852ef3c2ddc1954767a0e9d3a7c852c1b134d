# Ongage API Javascript Client

Works by composing fetch-compatible request objects.

Use [node-fetch](https://npmjs.org/package/node-fetch) in Node.js applications.

## Installation

```
$ npm install ongage --save
```

## Usage

```js
const fetch = require('node-fetch');
const { ContactsApi } = require('ongage');

const ongage = new ContactsApi('username', 'password', 'account code');

const { url, ...req } = ongage.getByEmail('jonathon@compwright.com');
const res = await fetch(url, req);
const data = await res.json();
```

## API

### [ContactsApi](https://ongage.atlassian.net/wiki/spaces/HELP/pages/1004175381/Contacts+API+Methods)

* getById(id, listId)
* getByEmail(email, listId)
* getListsByEmail(email)
* create({ email, overwrite, fields }, listId)
* create([{ email, overwrite, fields }, { email, overwrite, fields }, ...], listId)
* update({ email, ...fields }, listId)
* update([{ email, ...fields }, { email, ...fields }, { email, ...fields }, ...], listId)
* delete({ contact_id }, listId)
* delete({ contact_ids }, listId)
* changeStatus({ emails, change_to, ocx_child_id, ocx_connection_id }, listId)
* changeEmail({ email, new_email }, listId)

### [ListsApi](https://ongage.atlassian.net/wiki/spaces/HELP/pages/1027965140/List+API+Methods)

* get(id)
* getAll({ name, type, sort, order, offset, limit })

## License

MIT license
