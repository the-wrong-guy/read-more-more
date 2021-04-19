# Read-More-More

Read-More-More is a simple pakage for react that helps to implement 'read more' or 'read less' feature to any given text, you can limit the number of chracters in string/text to give the "read more" text at the end, also if you have a `HTML String` that you want to convert it to `React element`, you can do that too by add `parseHtml` prop

## How to Use

### With React

Read-More-More is extraordinarily simple to use with react. For starters you only have to provide `text` prop

#### Install and Import

```
npm install  read-more-more
import ReadMoreMore from 'read-more-more';
```

#### Use

```
<ReadMoreMore text={yourTextHere} /> , add other props according to your needs
```

|     Props     |  type   | Default Value |                       Defination                       |
| :-----------: | :-----: | :-----------: | :----------------------------------------------------: |
|     text      | string  |     null      |    add the text you want to "read more/less" to it     |
|   checkFor    | number  |      300      | how many characters it should check to add "read more" |
|   btnStyles   | object  |     null      |    add you custom styles to "add more/less" button     |
| transDuration | number  |      2s       | transition duration for the read more/less collapsing  |
|   transType   | string  |    linear     |   transition type for the read more/less collapsing    |
|  linesToShow  | number  |       5       |             intial number of lines to show             |
|   parseHtml   | boolean |     false     |         to parse html string to react element          |
| readMoreText  | string  | read more...  | replace the default "read more..." with your own text  |
| readLessText  | string  | read less...  | replace the default "read less..." with your own text  |

## Contributing

Please read [CONTRIBUTING.md](https://github.com/the-wrong-guy/read-more-more/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.
