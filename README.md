# React Hooks

- Sebelumnya pakai classes : Kekurangannya adalah
- Hooks membuat coding React lebih gampang dibaca dan lebih ergonomic

## 10 Built-in Hooks

1. Basic Hooks
   - useState
   - useEffect
   - useContext
2. Additional Hooks
   - useReducer
   - useCallback
   - useMemo
   - useRef
   - useImperativeHandle
   - useLayoutEffect
   - useDebugValue
3. Custom Hooks

### Aturan pemakaian Hooks

- Tidak dapat dipanggil di dalam function/callback biasa. Harus di top level function component

---

### `useState`

- Dipakai untuk re-render UI ketika ada perubahan di state

### `useEffect`

- Dipakai untuk lifecycle react component
- **DULU**

```
initialized : componentDidMount()
state updated : componentDidUpdate()
destroyed : componentWillUnmount()
```

- **DENGAN USEEFFECT**

```
initialized : useEffect lgsg jalan diawal
state updated : useEffect's array of dependencies
destroyed : useEffect's return statement -> Dipanggil ketika component ini destroyed
```

### `useContext`

- Dipakai untuk sharing data/value dengan berbagai component dalam 1 tree yang sama. Tujuannya supaya engga harus terus menerus turunin PROPS ke child component

```
// Cara buat
export const NameContext = createContext();


// Provider
<NameContext.Provider value={{ firstName2: firstName, lastName2: lastName }} >
   {children}
</NameContext.Provider>


// Cara pakai value
const { firstName2, lastName2 } = useContext(NameContext);
```

### `useReducer`

- Mirip dengan Redux + useState, lebih cocok untuk pembuatan project besar dengan state management yang lebih rumit
- Menurut aku lebih mending pakai redux toolkit aja sekalian

```
const [state, dispatch] = useReducer(reducer)
```

### `useMemo`

- Dipakai untuk membantu optimasi code dan meningkatkan performa app.
- Hanya dipakai untuk codingan yang rumit/expensive. Kalau engga, engga usah
- Berupa function dengan "return" statement

```
useMemo(() => function, [dependencies])
```

### `useCallback`

- Mirip dengan useMemo, hanya saja tidak ada return statement (menjalankan function biasa)
- Biasanya dipakai jika function itu ingin diturunkan ke banyak child component (jadi berat)
- Hanya perlu digunakan jika functionnya berat

### `useRef`

- Mirip useState, hanya saja tidak rerender UI ketika ada perubahan di state value.
- Biasanya dipakai untuk mengambil element HTML dari DOM
- Berguna untuk mengontrol Thrid-Party libraries, canvas, map, .

```
const myBtn = useRef(null);

<button ref={myBtn}>MY BUTTON</button>

// cara penggunaan
myBtn.current.style.backgroundColor = "red"
```

### `useImperativeHandle`

- Dipakai bersamaan dengan useRef dan forwardRef.
- Gunanya adalah supaya parent component dapat mengakses functions yang ada di dalam child component.
- Biasanya digunakan ketika parent component ingin berinteraktif secara lgsg dengan child component.

### `useLayoutEffect`

- Digunakan untuk memanipulasi DOM atau melakukan perhitungan sebelum menampilkan component
- Mirip dengan useEffect, tp jalan barengan dengan render DOM
- Dipakai untuk membuat perubahan visual yang dibutuhkan segera setelah komponen dirender.
- Hooks useLayoutEffect sangat berguna untuk menghitung ukuran atau posisi elemen di halaman sebelum ditampilkan ke pengguna.
- Penggunaan yang berlebihan atau tidak tepat dapat memperlambat performance app

### `useDebugValue`

- Dipakai untuk debugging custom hooks
- Dapat dilihat pakai react dev tools

---

## CUSTOM HOOKS

- Kita dapat membuat hooks sendiri dengan menggunakan built in hooks dari React
- Biasanya paling sering dipakai adalah `useState` dan `useEffect`
- Mirip dengan reusable function biasa, hanya saja ini lebih powerful kalau membutuhkan state management

---

# LODASH

## KEUNTUNGAN

1. Pemakaiannya gampang
2. Lebih readable
3. Code jadi lebih singkat (tidak perlu bikin custom helper), lebih efisien
4. Performance lebih baik

## KATEGORI

1. Array
2. Collection (Arrays and Objects)
3. Function
4. Language
5. Math
6. Object
7. String

## IMPORTING LODASH

```
// biasanya seperti ini
import _ from "lodash"

// Better performance
import { debounce } from "lodash"
// Or
import debounce from 'lodash/debounce';
```

# METHODS YANG HELPFUL

## SIMPEL

- `_.startCase()` : mirip capitalize di Tailwind
  contoh:

```
let str = "jakarta selatan"
console.log(_.startCase(str))
```

- `_.camelCase()`,`_.snakeCase()`,`_.kebabCase()`
  contoh :

```
let str = "nama lengkap"
console.log(_.camelCase(str))
console.log(_.snakeCase(str))
console.log(_.kebabCase(str))
```

- `_.trim()` : removes whitespace from both ends of a string

- `_.isEmpty`
  contoh:

```
let arr = []
let obj = {}
let und = undefined
let str = ""
let nool = null


console.log(_.isEmpty(arr))
console.log(_.isEmpty(obj))
console.log(_.isEmpty(und))
console.log(_.isEmpty(str))
console.log(_.isEmpty(nool))
```

- `_.times()`
  contoh:

```
function logger() {
  return "hello"
}

let result = _.times(3, logger)

console.log(result)
```

- `_.get()` dan `_.set()` : lebih aman untuk nested object
  contoh:

```
const data = {
  user: {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    }
  }
};

const state = _.get(data, "user.address.state", "unknown");
console.log(state); // Output: "CA"
```

- `_.isArray()`, `_.isFunction()`, `isObject()` : lebih gampng untuk check typeOf

## MEDIUM

-`_.throttle(function, seconds)` dan `_.debounce(function, seconds)` : nunggu beberapa detik sebelum function dipanggil

contoh:

```
<button onclick="throttled();">Throttle</button>
<button onclick="debounced();">Debounce</button>
```

```
const throttled = _.throttle(() => {
  console.log('Throttle setiap 5 detik');
}, 5000);

const debounced = _.debounce(() => {
  console.log('Debounce setiap 5 detik');
}, 5000);
```

Kapan pakai throttle?

- mousemove, scroll, or resize events, to limit the rate at which the event is fired
- Implementing auto-save, to prevent excessive server requests while the user is typing
- Implementing an infinite scroll, to limit the rate at which new content is loaded as the user scrolls down the page
- Handling click events on a button that performs an expensive operation, such as sending an email or processing a payment, to prevent the user from clicking the button multiple times and causing the operation to run multiple times.

Kapan pakai debounce?

- Implementing a search bar, to avoid sending too many requests to the server while the user is typing
- Handling submit events on a form, to avoid submitting the form multiple times if the user clicks the submit button multiple times in quick succession.

- `_.keyBy()` : ngerubah array of objects menjadi object, berdasarkan ‘key’ yang ada di object tersebut
  contoh:

```
let data = [
  { name: "tinggi tower", num: 12 },
  { name: "nama projek", num: 3223 },
  { name: "jarak kecamatan", num: 21 },
  { name: "nama kepala desa", num: 53 },
  { name: "contact person", num: 343 },
];

let obj = _.keyBy(data, "name")
let objCC = _.keyBy(data, (item) => _.camelCase(item.name))
console.log(obj)
console.log(objCC)
```

- `_.assign()` : mirip dengan spread operator {…}
  contoh:

```
var obj1 = { a: "aaa" };
var obj2 = { b: "bbb", c: "ccc" }

var resultAssign = _.assign(obj1, obj2);
var resultSpread = { a: "kkk",...obj1, ...obj2 }

console.log({ obj1, resultAssign, resultSpread })
```

**PERBEDAAN ASSIGN DENGAN SPREAD OPERATOR**

|                       | \_.assign                                       | Spread operator                              |
| --------------------- | ----------------------------------------------- | -------------------------------------------- |
| Mutability            | Mutates first object                            | Does not mutate any object                   |
| Property overwriting  | Overwrites first object with subsequent objects | Overwrites properties in order of appearance |
| Nested object merging | Can recursively merge nested objects            | Only works for shallow object merging        |

```
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

// Using _.assign:
_.assign(obj1, obj2);
console.log(obj1); // { a: 1, b: { d: 3 }, e: 4 }

// Using the spread operator:
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: { d: 3 }, e: 4 }
console.log(obj1); // { a: 1, b: { c: 2 } }

```

- `_.cloneDeep` : untuk copy object tanpa mengubah object asli. terkadang lebih bagus daripada const `newObj = obj`
  contoh :

```
const originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
};

const clonedObject = _.cloneDeep(originalObject);
```

- `_.groupBy()` : grouping array of objects.
  contoh:

```
const users = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 23 },
  { name: 'Charlie', age: 28 },
  { name: 'David', age: 24 },
  { name: 'Emily', age: 23 }
];

const usersByAge = _.groupBy(users, 'age');

console.log(usersByAge);
```

## HARD

- `_.flowRight()` : untuk chaining functions. Cocok kalau ada beberapa functions yang ingin dieksekusi bersamaan tp secara berurutan. Dibacanya dari kanan ke kiri.
  contoh:

```
const add = (x, y) => x + y;
const square = (x) => x * x;
const double = (x) => x * 2;

const pipeline = _.flowRight(double, square, add);

console.log(pipeline(1, 2))
```

- `_.curry()` :
  contoh:

```
const applyDiscount = (discount, price) => price * (1 - discount);

const applyTenPercentDiscount = _.curry(applyDiscount)(0.1);
const applyTwentyPercentDiscount = _.curry(applyDiscount)(0.2);

console.log(applyTenPercentDiscount(100)); // Output: 90
console.log(applyTwentyPercentDiscount(100)); // Output: 80
```
