# Hack *Key* Property in Component List

## Notes

* Data & View & Component Instance
* Correctness & Performance (re-create | re-render | partial update)
* `key`: (index | data id | random | data & random)
* Component Lifecycle

* Lifecycle: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* Diff: https://reactjs.org/docs/reconciliation.html




## Background

Internal `key` property is widely used in React Component as following style.

```javascript
items.map(
  (item, index) => (
    <Item key={item.id} {...item} />
  )
)
```

However, we cannot treat `key` as a prop in the inner component. Then, what does `key` used for and how does `key` make effect in React Framework?

## *Key* As Component Identifier

React application is State-Driven. While state changes, re-rendering is triggered.

...



