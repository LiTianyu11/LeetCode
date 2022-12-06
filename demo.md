## 获取子串的方法

**需注意区分slice()与substring()，在参数为负数，起始位置大于结束位置时，两者的差异。**

**`String.prototype.slice()`**

- slice(起始位置下标， 结束位置下标-可选)，会裁剪字符串起始位置到结束位置（不包括结束位置）
  
- 参数支持负数，-1代表字符串最后一个字符，-2代表倒数第二个字符
  
- 若参数的起始位置大于结束位置，则输出空字符串""
  
  <br>
  

**`String.prototype.substring()`**

- substring(起始位置下标， 结束位置下标-可选)，会裁剪字符串起始位置到结束位置（不包括结束位置）
  
- 参数为负数，会将负数转化为0 `str.substring(-4,2) => str.substring(0,2)`
  
- 若参数的起始位置大于结束位置，会输出交换起始位置和结束位置的子串`str.substring(4,2) => str.substring(2,4)`
  

**`String.prototype.substr()`**  已有很多浏览器不在支持

- substr(起始位置，裁剪长度)
  
- 起始位置支持负数，-1代表字符串最后一个字符，-2代表倒数第二个字符
  

## 查找字符串

**`String.prototype.indexOf()`**

- `indexOf(searchString, position)`
  
- 从`position`（可选，默认0）开始搜索，返回第一次找到`searchString`的位置下标，若没找到返回-1
  

**`String.prototype.lastIndexOf()`**

- `lastIndexOf(searchString, position)`
  
- 从`position`（可选，默认0）开始搜索，返回最后一次找到`searchString`的位置下标，若没找到返回-1
  

**`String.prototype.charAt()`**

- `charAt(index)`
  
- 返回`index`位置的字符，若index超出字符串长度则返回空字符串
  

**`String.prototype.includes()`**

- `includes(searchString, position)`
  
- 从`position`（可选，默认0）开始搜索，若找到`searchString`则返回`true`，否则返回`false`
  

**`String.prototype.startsWith()`**

- `startsWith(searchString, position)`
  
- 若在`position`（可选，默认0）位置找到`searchString` 则返回`true`，否则返回`false`
  

**`String.prototype.endsWith()`**

- `endsWith(searchString, endPosition)`
  
- 若在`endPosition`（可选，默认为最后一个字符下标+1，即str.length）位置找到`searchString` 则返回`true`，否则返回`false`
  

```jsx
//String.prototype.startsWith()和String.prototype.endsWith()的差别

str = "01234"

console.log(str.startsWith('0',0)) // true

console.log(str.endsWith('0',1)) //true
```

## 字符串转化为Unicode

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)

String.fromCodePoint()

## 获取字符串

To get a character, use: [] or at method.