# Bring console to html
Samall libray that can be used to display console messages inside html view.

## Why use this?
* Tired of opening console to view log messages.
* Need to display logs to user with minimum implementation

## How to add?
* Add link to the html file
```html
<script src="https://cdn.jsdelivr.net/gh/juztcode/console-to-html@0.0.1/src/console-to-html.js"></script>
```

* Initialize with html element id that you are using to display logs
```html
<script>  
DebugToHTML('elementId');
</script>
```

* Thats it you can use console functions and it will display inside html

## What are the functions?
* console.log()
* console.info()
* console.debug()
* console.warn()
* console.error()
* console.clear()

>Happy Coding :)
