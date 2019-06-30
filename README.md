# Super trivial compares: Parcel, Webpack and Rollup.js


|   |      | Parcel | Webpack  | Rollup.js |
|:-:|:-:|:-:|:-:|:-:|
|CJS|  web |   1477 |     1116 |       152 |
|   | node |   1444 |     1347 |       374 |
|ES6|  web |   1715 |     1056 |       134 |
|   | node |   1444 |       X  |       270 |
|MIX| web  |   1632 |     1096 |         X |
|   | node |   1444 |       X  |         X |


---

**Description**

1477 is the file size in bytes,  bundled by Parcel from the source of commonJS module to web target.

Node target is UMD.

X means unsupported, or I didn't work it out. 🙃

# License
WTFPL (Do What The Fuck You Want To Public License)
