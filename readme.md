# Read-More-More

<p>
<img src="https://img.shields.io/npm/v/read-more-more"/>
<img src="https://img.shields.io/npm/dt/read-more-more"/>
<img src="https://img.shields.io/badge/license-AGPL--3.0-green"/>
<img src="https://img.shields.io/bundlephobia/min/read-more-more"/>
</p>

Read-More-More is a simple pakage for react that helps to implement 'read more' or 'read less' feature to any given text, you can limit the number of chracters in string/text to give the "read more" text at the end, also if you have a `HTML String` that you want to convert it to `React element`, you can do that too by add `parseHtml` prop

## Motivation

I was working on a project where i needed to use "read more/less" button , cause of the huge "HTML String" I was getting from an API and I tried finding libraries to add "read more/less" feature to the text but the problem was that in those libraries there was not any options for parsing HTML string to React element , which was serious need for me.Also I tried parsing the text that i was getting from other 'read more' libraries but that didn't work too. So finally I decided to make my own 'read more/less' library and here we are.

## Update 2.0.0

This update brings you a new advance read-more-more, it calculates the actual height of the sentences when it opens, also recalculates the height if the window resizes so it makes the transition smoother. And I named this method `AdvReadMoreMore` 😬, I know its pretty basic 😂.

Hope you all will love this new update and as always critisims are always welcomed.


## How to Use

### With React

Read-More-More is extraordinarily simple to use with react. For starters you only have to provide `text` prop and it's required.

#### Install
```
npm install  read-more-more

```

#### Import
```
import {ReadMoreMore, AdvReadMoreMore} from 'read-more-more';
```

#### Use

```
<ReadMoreMore text={yourTextHere} /> or <AdvReadMoreMore text={yourTextHere} /> , add other props according to your needs
```

|     Props     |  type   | Default Value |                       Defination                       |
| :-----------: | :-----: | :-----------: | :----------------------------------------------------: |
|     text     | string  |     null      |    add the text you want to "read more/less" to it     |
|   checkFor    | number  |      300  np    | how many characters it should check to add "read more" |
|   btnStyles   | object  |     null      |     pass custom styles to "read more/less" button      |
| transDuration | number  |      2s       | transition duration for the read more/less collapsing  |
|   transType   | string  |    linear     |   transition type for the read more/less collapsing    |
|  linesToShow  | number  |       3       |             intial number of lines to show             |
|   parseHtml   | boolean |     false     |         to parse html string to react element          |
| readMoreText  | string  | read more...  | replace the default "read more..." with your own text  |
| readLessText  | string  | read less...  | replace the default "read less..." with your own text  |
| textStyles    | object  | null          | styles the text container along with the text          |

#### Addition props for `AdvReadMoreMore`
|     Props     |  type   | Default Value |                       Defination                       |
| :-----------: | :-----: | :-----------: | :----------------------------------------------------: |
|lineHeight|number| 20 (i.e. 20px)|line height of the text|
|fontSize | number | 15 (i.e.15px)| font size of the text|
|color|string|#000| color of the text|

#### *Note* : `textStyles` prop is not suppported in `AdvReadMoreMore`



## Demo

[Click here](https://codesandbox.io/s/xenodochial-zhukovsky-hkdr4?file=/src/App.js)

## Report Bugs

[Report](https://github.com/the-wrong-guy/read-more-more/issues)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/the-wrong-guy/read-more-more/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.
