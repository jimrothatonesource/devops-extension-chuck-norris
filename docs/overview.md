After installing the Chuck Norris build enhancer you just have to add the Chuck Norris build task to the build definition where you want the Chuck Norris quotes to appear.

![](/docs/chuck-build-task.png)

Or if you prefer to use a yaml build script just add the following task:

```yaml
- task: jimrothatonesource.chucknorris-build-enhancer.ChuckNorrisTask@1
  displayName: 'Chuck Norris Quotes'
```

The build report will now display a section with a Chuck Norris quote:

![](/docs/chuck-build-report.png)

## Contributions ##

### Team ###

We thank the following contributors: **Mathias Olausson** (original), **OneSource Virtual** (current maintainer).

### Credits ###

[The Ultimate Top 25 Chuck Norris “The Programmer” Jokes](http://codesqueeze.com/the-ultimate-top-25-chuck-norris-the-programmer-jokes/)
