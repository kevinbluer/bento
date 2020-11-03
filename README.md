# Extending Truffle Box

Truffle box that provides examples of the various ways in which you can extend Truffle's functionality through exec scripts, plugins, etc.

> Warning - Copious emojis have been used in the creation of this box 

## Executable Scripts

```
> truffle develop
truffle(develop)> exec scripts/example.js
```

## Truffle Plugin

Single command...

```
> cd plugin
> npm link
> cd ..
> npm link /path/to/project/plugin
> truffle run boooom
```

> Note that `npm link`-ing is useful while developing the plugin as any changes are immediately reflected

Command with parameters...

```
truffle run boooom liftoff
truffle run boooom landing
truffle run boooom landing https://moon.io
```

## Truffle Box

To package a repository you'll need the following...

- [truffle-box.json](truffle-box.json)
- [box-img-lg.png](box-img-lg.png)
- [box-img-sm.png](box-img-sm.png)

As you may have spotted, this is repository is actually already a box.

Boxes can be include plugins pre-installed. For example, this [plugin](https://github.com/kevinbluer/truffle-plugin-caramel) is added as a dependency, meaning you can use it immediately (although you'll need to add your [Pinata](https://pinata.cloud/) details first).

```
truffle run caramel list
```

## Other

- `npx` is your friend :)