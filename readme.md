## 💧 plop-helper-list

<a href="https://npmjs.com/package/plop-helper-list">
    <img alt="npm" src="https://img.shields.io/npm/v/plop-helper-list.svg?style=flat-square">
</a>

<a href="https://npmjs.com/package/plop-helper-list">
    <img alt="npm" src="https://img.shields.io/npm/dt/plop-helper-list?style=flat-square">
</a>

_A [plop][plop] helper that formats comma separated values._

### 📦 Installation

This package is installable from [npm][npm].

```bash
npm install --save-dev plop-helper-list
```

### 🥑 Usage

Before you can use the `plop-pack`, you have to load it into the `plop` object.

```javascript
plop.load("plop-helper-list")
```

Once loaded, you now have access the following helpers.

#### `list`

Cleans up a comma separated list of values.

**input**

```javascript
{
    tags: "one, two,  three,  four , five  "
}
```

**helper**

```handlebars
{{list tags}}
```

**output**

```javascript
"one, two, three, four, five"
```

### ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

[plop]: https://plopjs.com
[npm]: https://npmjs.com
[bradgarropy]: https://bradgarropy.com
[issues]: https://github.com/bradgarropy/plop-helper-list/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
