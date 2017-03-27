# `phaserify`

### A simple command line tool to __Browserify__ the latest __Phaser-CE__ release. 

__Helps keep your development bundle light for compilation.__

## Install

```
npm i -g phaserify
```

## Usage

```sh
phaserify [dest_dir]
```

## Example

Bundle __phaser-ce__ and place the _phaser-bundle.js_ in the working directory:

```js
phaserify
```

Bundle and place in a specific directory (relative to the working path):

```js
phaserify dist
```

You can include your _phaser-bundle.js_ along with your _bundle.js_:

```html
...
<script src='./phaser-bundle.js'></script>
<script src='./bundle.js'></script>
...
```

## See also

[browserify](https://github.com/substack/node-browserify)

[phaser-ce](https://github.com/photonstorm/phaser-ce)

---

#### `phaserify` &Star; &copy; 2017 sleeptank &Star; MIT license
