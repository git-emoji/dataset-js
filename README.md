# Git-Emoji Dataset 📑

This repository contains emoji data and contextual keywords associated with them. It is meant to be used, **by everyone**, who needs a reference dataset of emojis applicable in git commit messages.

Note that the `main` branch may get updated at any time without notice.

## Installation

```sh
npm install git-emoji-dataset-js
```

## Usage

```ts
const dataset = require('git-emoji-dataset-js')
// or
import * as dataset from 'git-emoji-dataset-js'
```

Emoji data are available under the `dataset.emoji` field:

```js
// nodejs REPL
> dataset.emoji._bug
{ s: '🐛', id: 'bug' }
> Object.keys(dataset.emoji).length
308
```

Also, *contextual* emoji data are also available. Contextual emoji data describe the association between keywords and emojis. You can find them as an array assigned to the `dataset.context` field (detailed result might be different):

```js
// nodejs REPL
> dataset.context.length
48
> dataset.context[0]
{
  keyword: [ 'correct', 'fix', 'bugfix', 'bug', 'patch' ],
  emoji: [
    { s: '🐛', id: 'bug' },
    { s: '🐞', id: 'beetle' },
    { s: '🔨', id: 'hammer' },
    { s: '🔧', id: 'wrench' },
    { s: '🗜', id: 'clamp' }
  ]
}
```

## Thank you

Feel free to submit PRs and improve the dataset with your taste. 🍏
